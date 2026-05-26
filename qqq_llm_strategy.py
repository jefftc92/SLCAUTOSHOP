# =============================================================================
# ULTIMATE: Hierarchical MTF Discretization + LLM Next-Token Prediction for QQQ
# -----------------------------------------------------------------------------
# Paste each `# %% CELL N` into its own Google Colab cell.
# Runtime: T4 (free) works; A100/L4 faster.
#
# Design decisions:
#   - Base Llama-3.1-8B (NOT Instruct): pure next-token prediction, no chat
#     scaffolding, faithful to the original architecture.
#   - 5 quantile bins on body/returns, 3 terciles on range (matching the spec).
#   - 5 quantile bins on 52-week position and ATH drawdown (added context).
#   - Hierarchical features: T-63, T-21, T-5, 52wk level, ATH level, T body, T range.
#   - Percentile boundaries fit ONLY on 1999-2007.
#   - Inference via constrained log-likelihood scoring (no hallucination).
#   - Strategy = cash or long QQQ. Benchmarked against buy-and-hold.
# =============================================================================


# %% CELL 1 — Install dependencies
# !pip install -q --upgrade pip
# !pip install -q unsloth
# !pip install -q --no-deps bitsandbytes accelerate "xformers<0.0.30" peft "trl<0.9.0"
# !pip install -q yfinance pandas numpy matplotlib tqdm


# %% CELL 2 — Imports & seeding
import os, math, json, random
import numpy as np
import pandas as pd
import yfinance as yf
import torch
import matplotlib.pyplot as plt
from tqdm.auto import tqdm
from datasets import Dataset

SEED = 3407
random.seed(SEED); np.random.seed(SEED); torch.manual_seed(SEED)
print("CUDA:", torch.cuda.is_available(),
      "|", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "no GPU")


# %% CELL 3 — Download QQQ price data
TICKER     = "QQQ"
START      = "1999-01-01"
END        = "2018-12-31"
TRAIN_END  = "2007-12-31"
TEST_START = "2008-01-01"

raw = yf.download(TICKER, start=START, end=END, auto_adjust=False, progress=False)
if isinstance(raw.columns, pd.MultiIndex):
    raw.columns = raw.columns.get_level_values(0)
raw = raw.dropna().copy()
print(raw.head(), "\n\nTotal bars:", len(raw))


# %% CELL 4 — Feature engineering
df = raw.copy()

# --- Intraday structure ---
df["body"]      = (df["Close"] - df["Open"]) / df["Open"]   # Δ_body
df["range"]     = (df["High"]  - df["Low"])  / df["Low"]    # Δ_range

# --- Multi-timeframe momentum ---
df["ret_5"]     = df["Close"].pct_change(5)
df["ret_21"]    = df["Close"].pct_change(21)
df["ret_63"]    = df["Close"].pct_change(63)

# --- 52-week range position ---
# min_periods=63 so we get a reading after ~3 months rather than a full year.
# dist_52h <= 0: distance below 52-week high  (0 means AT the 52-week high)
# dist_52l >= 0: distance above 52-week low   (0 means AT the 52-week low)
rolling_max_252       = df["Close"].rolling(252, min_periods=63).max()
rolling_min_252       = df["Close"].rolling(252, min_periods=63).min()
df["dist_52h"]        = (df["Close"] - rolling_max_252) / rolling_max_252
df["dist_52l"]        = (df["Close"] - rolling_min_252) / rolling_min_252

# --- All-time high drawdown (expanding from series start) ---
# dist_ath <= 0; 0 means today is a new record closing high.
expanding_max         = df["Close"].expanding().max()
df["dist_ath"]        = (df["Close"] - expanding_max) / expanding_max

# --- Target: next-day body ---
df["next_body"] = df["body"].shift(-1)

df = df.dropna()

train = df.loc[:TRAIN_END].copy()
test  = df.loc[TEST_START:].copy()
print(f"Train: {len(train)} bars ({train.index.min().date()} → {train.index.max().date()})")
print(f"Test:  {len(test)} bars ({test.index.min().date()} → {test.index.max().date()})")


# %% CELL 5 — Discretization
# Boundaries fit ONLY on the 1999-2007 training set.

BODY_LABELS = [
    "a severe drop",
    "a relatively small drop",
    "a flat session",
    "a moderate gain",
    "a massive surge",
]
RET_LABELS = [
    "a deep drawdown",
    "a notable pullback",
    "sideways drift",
    "a steady uptrend",
    "a powerful rally",
]
RANGE_LABELS = [
    "compressed volatility",
    "normal volatility",
    "elevated volatility",
]
# dist_52h is always <= 0 (0 = at the 52-week high).
# Labels go from most negative (deepest in the range) to least (at the top).
LEVEL_52H_LABELS = [
    "in a deep decline from its 52-week high",
    "well below the 52-week high",
    "mid-range within the past year",
    "near the top of its 52-week range",
    "at or setting a new 52-week high",
]
# dist_ath is always <= 0 (0 = new all-time closing high today).
ATH_LABELS = [
    "in a severe drawdown from its all-time high",
    "significantly below its all-time high",
    "in a moderate correction from its all-time high",
    "approaching its all-time high",
    "at or setting a new all-time record high",
]

def fit_edges(values, n_bins):
    qs = np.linspace(0, 1, n_bins + 1)
    edges = np.quantile(values, qs)
    edges[0], edges[-1] = -np.inf, np.inf   # safe OOS clamping
    return edges

def apply_edges(values, edges, labels):
    idx = np.digitize(values, edges[1:-1])  # 0 .. n_bins-1
    return [labels[i] for i in idx]

body_edges    = fit_edges(train["body"].values,     len(BODY_LABELS))
range_edges   = fit_edges(train["range"].values,    len(RANGE_LABELS))
ret5_edges    = fit_edges(train["ret_5"].values,    len(RET_LABELS))
ret21_edges   = fit_edges(train["ret_21"].values,   len(RET_LABELS))
ret63_edges   = fit_edges(train["ret_63"].values,   len(RET_LABELS))
lev52h_edges  = fit_edges(train["dist_52h"].values, len(LEVEL_52H_LABELS))
ath_edges     = fit_edges(train["dist_ath"].values, len(ATH_LABELS))

def discretize(d):
    d = d.copy()
    d["tok_body"]       = apply_edges(d["body"].values,     body_edges,   BODY_LABELS)
    d["tok_range"]      = apply_edges(d["range"].values,    range_edges,  RANGE_LABELS)
    d["tok_ret5"]       = apply_edges(d["ret_5"].values,    ret5_edges,   RET_LABELS)
    d["tok_ret21"]      = apply_edges(d["ret_21"].values,   ret21_edges,  RET_LABELS)
    d["tok_ret63"]      = apply_edges(d["ret_63"].values,   ret63_edges,  RET_LABELS)
    d["tok_lev52h"]     = apply_edges(d["dist_52h"].values, lev52h_edges, LEVEL_52H_LABELS)
    d["tok_ath"]        = apply_edges(d["dist_ath"].values, ath_edges,    ATH_LABELS)
    d["tok_next_body"]  = apply_edges(d["next_body"].values, body_edges,  BODY_LABELS)
    return d

train = discretize(train)
test  = discretize(test)

print("In-sample body bin occupancy (should be ~uniform):")
print(train["tok_body"].value_counts(normalize=True).reindex(BODY_LABELS).round(3))
print("\nOOS body bin occupancy (watch for tail saturation 2008-09):")
print(test["tok_body"].value_counts(normalize=True).reindex(BODY_LABELS).round(3))

print("\nOOS 52wk-level occupancy:")
print(test["tok_lev52h"].value_counts(normalize=True).reindex(LEVEL_52H_LABELS).round(3))
print("\nOOS ATH-level occupancy (heavy left skew expected 2008-11):")
print(test["tok_ath"].value_counts(normalize=True).reindex(ATH_LABELS).round(3))

np.savez("bin_edges.npz",
         body=body_edges, range=range_edges,
         ret5=ret5_edges, ret21=ret21_edges, ret63=ret63_edges,
         lev52h=lev52h_edges, ath=ath_edges)


# %% CELL 6 — Hierarchical narrative prompt construction
# Macro → micro. Phrased as natural prose so the LLM's pretrained semantic
# priors over phrases like "rally" / "drawdown" / "record high" can engage.
#
# Structure:
#   1. Quarterly momentum  (T-63)
#   2. Monthly momentum    (T-21)
#   3. Weekly momentum     (T-5)
#   4. Price level context: 52-week range position + all-time-high proximity
#   5. Yesterday's candle  (body + range)
#   6. Completion target   (tomorrow's body)
#
# The 52-week and ATH sentences are intentionally kept separate so that the
# model can distinguish "near a 52-week high" (local breakout) from
# "at an all-time record high" (macro breakout) — two very different regimes.

def build_prompt(row):
    return (
        f"Over the past quarter, the market experienced {row['tok_ret63']}. "
        f"Over the past month, the trend has been {row['tok_ret21']}. "
        f"This past week, we saw {row['tok_ret5']}. "
        f"The market is currently {row['tok_lev52h']}. "
        f"Relative to its all-time history, it is {row['tok_ath']}. "
        f"Yesterday, the market printed {row['tok_body']} on {row['tok_range']}. "
        f"Therefore, today I expect things to be:"
    )

def build_completion(row):
    return f" {row['tok_next_body']}."

# Sanity-check one example
ex = train.iloc[100]
print("PROMPT:    ", build_prompt(ex))
print("COMPLETION:", build_completion(ex))


# %% CELL 7 — Load BASE Llama-3.1-8B in 4-bit + attach LoRA
from unsloth import FastLanguageModel

MAX_SEQ = 512

# Base (not -Instruct). If gated, swap to a non-gated base model below.
MODEL_NAME = "unsloth/Meta-Llama-3.1-8B"
# Alternatives if you can't access Llama:
# MODEL_NAME = "unsloth/Qwen2.5-7B"
# MODEL_NAME = "unsloth/mistral-7b-v0.3"
# MODEL_NAME = "unsloth/Llama-3.2-3B"  # smaller, faster

model, tokenizer = FastLanguageModel.from_pretrained(
    model_name     = MODEL_NAME,
    max_seq_length = MAX_SEQ,
    dtype          = None,
    load_in_4bit   = True,
)

# Critical for batched scoring later: make padding well-defined.
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token
tokenizer.padding_side = "right"

model = FastLanguageModel.get_peft_model(
    model,
    r                          = 16,
    target_modules             = ["q_proj","k_proj","v_proj","o_proj",
                                  "gate_proj","up_proj","down_proj"],
    lora_alpha                 = 16,
    lora_dropout               = 0.0,
    bias                       = "none",
    use_gradient_checkpointing = "unsloth",
    random_state               = SEED,
)


# %% CELL 8 — Build training dataset (raw prompt + completion concatenated)
train_records = []
for _, row in train.iterrows():
    train_records.append({
        "text": build_prompt(row) + build_completion(row) + tokenizer.eos_token
    })
ds_train = Dataset.from_list(train_records)
print(ds_train[0]["text"])
print(f"\nTraining examples: {len(ds_train)}")


# %% CELL 9 — Fine-tune with LoRA SFT
from trl import SFTTrainer
from transformers import TrainingArguments

trainer = SFTTrainer(
    model              = model,
    tokenizer          = None,  # avoids passing to super() in some trl versions
    train_dataset      = ds_train,
    dataset_text_field = "text",
    max_seq_length     = MAX_SEQ,
    dataset_num_proc   = 2,
    packing            = False,
    args = TrainingArguments(
        per_device_train_batch_size = 4,
        gradient_accumulation_steps = 4,
        warmup_steps                = 20,
        num_train_epochs            = 2,          # ~250 steps over ~2000 examples
        learning_rate               = 2e-4,
        fp16                        = not torch.cuda.is_bf16_supported(),
        bf16                        = torch.cuda.is_bf16_supported(),
        logging_steps               = 10,
        optim                       = "adamw_8bit",
        weight_decay                = 0.01,
        lr_scheduler_type           = "cosine",
        seed                        = SEED,
        output_dir                  = "outputs",
        report_to                   = "none",
        save_strategy               = "no",
    ),
)

stats = trainer.train()
print(stats)


# %% CELL 10 — Constrained inference via log-likelihood scoring
# Instead of free generation (which can paraphrase or hallucinate), we score
# each of the 5 candidate completions under the model and pick the highest.
# This also gives us a full probability distribution per row, used below for
# an expected-return signal.

FastLanguageModel.for_inference(model)

CANDIDATES = [f" {lbl}." for lbl in BODY_LABELS]  # match training format

@torch.no_grad()
def score_row(prompt: str):
    """Return length-normalized log-probs for each candidate completion."""
    full_texts = [prompt + c for c in CANDIDATES]
    enc = tokenizer(full_texts, return_tensors="pt", padding=True,
                    add_special_tokens=False).to("cuda")
    input_ids      = enc["input_ids"]
    attention_mask = enc["attention_mask"]

    # Length of the bare prompt in tokens (no padding, no special tokens)
    prompt_len = len(tokenizer(prompt, add_special_tokens=False)["input_ids"])

    outputs = model(input_ids=input_ids, attention_mask=attention_mask)
    logits  = outputs.logits                    # [batch, seq, vocab]
    log_p   = torch.log_softmax(logits, dim=-1)

    scores = []
    for i in range(len(CANDIDATES)):
        seq_len = int(attention_mask[i].sum().item())
        # logits at position t predict token at position t+1
        target_positions = range(prompt_len, seq_len)
        total_logp, count = 0.0, 0
        for pos in target_positions:
            tok_id = int(input_ids[i, pos].item())
            total_logp += float(log_p[i, pos - 1, tok_id].item())
            count += 1
        scores.append(total_logp / max(count, 1))  # length-normalized
    return np.array(scores)

def softmax(x):
    x = np.asarray(x, dtype=np.float64)
    x = x - x.max()
    e = np.exp(x)
    return e / e.sum()

# Score every OOS day
all_scores = np.zeros((len(test), len(BODY_LABELS)))
all_probs  = np.zeros_like(all_scores)
for i, (_, row) in enumerate(tqdm(test.iterrows(), total=len(test), desc="OOS scoring")):
    s = score_row(build_prompt(row))
    all_scores[i] = s
    all_probs[i]  = softmax(s)

# Argmax label + full distribution
test = test.copy()
test["pred_token"] = [BODY_LABELS[i] for i in all_scores.argmax(axis=1)]
for j, lbl in enumerate(BODY_LABELS):
    test[f"p_{j}_{lbl.replace(' ','_')}"] = all_probs[:, j]

print(test["pred_token"].value_counts())


# %% CELL 11 — Two signals: argmax-based and expected-return-based
# (A) Simple: long QQQ when argmax is in the top-2 quintiles, cash otherwise.
DIRECTION = {
    BODY_LABELS[0]: 0,  # severe drop   → cash
    BODY_LABELS[1]: 0,  # small drop    → cash
    BODY_LABELS[2]: 0,  # flat          → cash
    BODY_LABELS[3]: 1,  # moderate gain → long
    BODY_LABELS[4]: 1,  # massive surge → long
}
test["sig_argmax"] = test["pred_token"].map(DIRECTION).astype(int)

# (B) Principled: expected next-day body using in-sample mean body per bin
# as a calibration mapping over the full predicted probability distribution.
label_mean_body = train.groupby("tok_body")["body"].mean().reindex(BODY_LABELS).values
test["exp_body"] = (all_probs * label_mean_body[None, :]).sum(axis=1)
EXP_THRESH = 0.0
test["sig_expret"] = (test["exp_body"] > EXP_THRESH).astype(int)

print("Label-conditional mean body (in-sample):")
print(pd.Series(label_mean_body, index=BODY_LABELS).round(5))

# Execute on T+1 open-to-close body
test["next_open"]  = test["Open"].shift(-1)
test["next_close"] = test["Close"].shift(-1)
test["next_ret"]   = (test["next_close"] - test["next_open"]) / test["next_open"]

COST_BPS = 1.0  # one-way cost in bps applied on every change of position

def realize(signal_col):
    sig = test[signal_col]
    turn = sig.diff().abs().fillna(sig.abs())
    cost = turn * (COST_BPS / 1e4)
    pnl  = sig * test["next_ret"] - cost
    return pnl

test["pnl_argmax"] = realize("sig_argmax")
test["pnl_expret"] = realize("sig_expret")
test = test.dropna(subset=["next_ret"])

for name in ["argmax", "expret"]:
    pnl = test[f"pnl_{name}"]
    sig = test[f"sig_{name}"]
    mu  = pnl.mean() * 252
    sd  = pnl.std()  * math.sqrt(252)
    sr  = mu / sd if sd > 0 else 0
    expo = (sig != 0).mean()
    print(f"[{name:6s}]  ann.ret {mu:7.2%}  vol {sd:6.2%}  Sharpe {sr:5.2f}  in_QQQ {expo:6.2%}")


# %% CELL 12 — Equity curves + drawdown vs buy-and-hold QQQ
test["bh_ret"] = (test["Close"].shift(-1) - test["Close"]) / test["Close"]
test["bh_pnl"] = test["bh_ret"].fillna(0)

curves = {
    "LLM argmax (cash or QQQ)":         test["pnl_argmax"],
    "LLM expected-return (cash or QQQ)": test["pnl_expret"],
    "Buy & hold QQQ":                    test["bh_pnl"],
}
equity = {name: (1 + pnl).cumprod() for name, pnl in curves.items()}
dd     = {name: eq / eq.cummax() - 1 for name, eq in equity.items()}

def cagr(eq, ppy=252):  return eq.iloc[-1] ** (ppy / len(eq)) - 1
def sharpe(r, ppy=252): return r.mean() / r.std() * math.sqrt(ppy) if r.std() > 0 else 0

fig, (ax1, ax2) = plt.subplots(
    2, 1, figsize=(13, 8), sharex=True,
    gridspec_kw={"height_ratios":[3, 1]}
)
colors = {"LLM argmax (cash or QQQ)": "#1f77b4",
          "LLM expected-return (cash or QQQ)": "#2ca02c",
          "Buy & hold QQQ": "#d62728"}

for name, eq in equity.items():
    ax1.plot(eq.index, eq.values, label=name, linewidth=1.8,
             alpha=0.9, color=colors[name])

ax1.set_yscale("log")
ax1.set_ylabel("Equity (× starting capital, log scale)")
ax1.grid(True, alpha=0.3)
ax1.legend(loc="upper left")
ax1.set_title("Out-of-sample 2008–2018 — LLM-driven QQQ timing vs. buy & hold")

lines = ["               CAGR    Sharpe   MaxDD   InMkt"]
for name, pnl in curves.items():
    eq   = equity[name]
    c    = cagr(eq)
    s    = sharpe(pnl)
    mdd  = dd[name].min()
    if "argmax" in name:     inmkt = (test["sig_argmax"] != 0).mean()
    elif "expected" in name: inmkt = (test["sig_expret"] != 0).mean()
    else:                    inmkt = 1.0
    short = name.split(" ")[1] if "LLM" in name else "B&H"
    lines.append(f"{short:10s}    {c:6.2%}  {s:5.2f}  {mdd:7.2%}  {inmkt:6.2%}")
ax1.text(0.02, 0.98, "\n".join(lines), transform=ax1.transAxes,
         fontfamily="monospace", fontsize=9.5, verticalalignment="top",
         bbox=dict(boxstyle="round", facecolor="white", alpha=0.88, edgecolor="gray"))

for name, ddc in dd.items():
    ax2.fill_between(ddc.index, ddc.values, 0, alpha=0.35,
                     color=colors[name], label=name.split(" ")[1] if "LLM" in name else "B&H")
ax2.set_ylabel("Drawdown")
ax2.set_xlabel("Date")
ax2.grid(True, alpha=0.3)
ax2.legend(loc="lower left")

plt.tight_layout()
plt.savefig("equity_curves.png", dpi=120)
plt.show()


# %% CELL 13 — Diagnostics: confusion matrix, per-year, bin saturation
print("\nPredicted vs realized body label (row-normalized confusion):")
ct = pd.crosstab(
    pd.Categorical(test["pred_token"],    categories=BODY_LABELS, ordered=True),
    pd.Categorical(test["tok_next_body"], categories=BODY_LABELS, ordered=True),
    normalize="index"
).round(3)
print(ct)

print("\nPer-year performance (returns and Sharpe):")
by_year = test.groupby(test.index.year).apply(
    lambda x: pd.Series({
        "argmax_ret":  x["pnl_argmax"].sum(),
        "expret_ret":  x["pnl_expret"].sum(),
        "bh_ret":      x["bh_pnl"].sum(),
        "argmax_SR":   sharpe(x["pnl_argmax"]),
        "expret_SR":   sharpe(x["pnl_expret"]),
        "bh_SR":       sharpe(x["bh_pnl"]),
        "in_market":   (x["sig_argmax"] != 0).mean(),
    })
)
print(by_year.round(3))

print("\nOOS 52wk-level distribution (check for heavy left skew during 2008-09):")
print(test["tok_lev52h"].value_counts(normalize=True).reindex(LEVEL_52H_LABELS).round(3))

print("\nOOS ATH-level distribution (expect heavy left skew post-2000 dot-com peak):")
print(test["tok_ath"].value_counts(normalize=True).reindex(ATH_LABELS).round(3))

test.to_csv("oos_predictions.csv")
print("\nSaved: oos_predictions.csv, equity_curves.png, bin_edges.npz")
