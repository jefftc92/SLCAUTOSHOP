// ==UserScript==
// @name         GBP Services Auto-Fill (Scott's Auto)
// @namespace    https://slcautoshop
// @version      1.0
// @description  Bulk-add "{Make} {Model} Repair" custom services to a Google Business Profile.
// @match        https://business.google.com/*
// @match        https://*.google.com/local/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const SUFFIX = ' Repair';
  const ENTRIES = [
    ['Toyota','Camry'],['Toyota','Corolla'],['Toyota','RAV4'],['Toyota','Tacoma'],['Toyota','Highlander'],
    ['Toyota','4Runner'],['Toyota','Tundra'],['Toyota','Prius'],['Toyota','Sienna'],['Toyota','Avalon'],
    ['Toyota','Sequoia'],['Toyota','Land Cruiser'],['Toyota','Venza'],['Toyota','C-HR'],['Toyota','Yaris'],
    ['Toyota','86'],['Toyota','Supra'],['Toyota','Matrix'],['Toyota','Celica'],['Toyota','MR2'],
    ['Toyota','FJ Cruiser'],['Toyota','Tercel'],['Toyota','Echo'],['Toyota','Paseo'],['Toyota','Previa'],
    ['Honda','Civic'],['Honda','Accord'],['Honda','CR-V'],['Honda','Pilot'],['Honda','HR-V'],
    ['Honda','Odyssey'],['Honda','Ridgeline'],['Honda','Fit'],['Honda','Insight'],['Honda','Element'],
    ['Honda','S2000'],['Honda','Prelude'],['Honda','Del Sol'],['Honda','CRX'],
    ['Ford','F-150'],['Ford','Mustang'],['Ford','Explorer'],['Ford','Escape'],['Ford','Ranger'],
    ['Ford','Edge'],['Ford','Expedition'],['Ford','Bronco'],['Ford','Maverick'],['Ford','Fusion'],
    ['Ford','Focus'],['Ford','Taurus'],['Ford','Fiesta'],
    ['Chevrolet','Silverado'],['Chevrolet','Equinox'],['Chevrolet','Malibu'],['Chevrolet','Traverse'],
    ['Chevrolet','Tahoe'],['Chevrolet','Suburban'],['Chevrolet','Colorado'],['Chevrolet','Camaro'],
    ['Chevrolet','Corvette'],['Chevrolet','Trax'],['Chevrolet','Blazer'],['Chevrolet','Impala'],['Chevrolet','Cruze'],
    ['Nissan','Altima'],['Nissan','Sentra'],['Nissan','Rogue'],['Nissan','Pathfinder'],['Nissan','Frontier'],
    ['Nissan','Titan'],['Nissan','Maxima'],['Nissan','Murano'],['Nissan','Kicks'],['Nissan','Versa'],
    ['Nissan','370Z'],['Nissan','350Z'],['Nissan','Xterra'],['Nissan','Juke'],
    ['Subaru','Outback'],['Subaru','Forester'],['Subaru','Crosstrek'],['Subaru','Impreza'],['Subaru','WRX'],
    ['Subaru','Legacy'],['Subaru','Ascent'],['Subaru','BRZ'],['Subaru','Baja'],['Subaru','Tribeca'],
    ['Mazda','Mazda3'],['Mazda','Mazda6'],['Mazda','CX-5'],['Mazda','CX-9'],['Mazda','CX-30'],
    ['Mazda','MX-5 Miata'],['Mazda','CX-50'],['Mazda','RX-8'],['Mazda','RX-7'],['Mazda','Protege'],['Mazda','Tribute'],
    ['Hyundai','Elantra'],['Hyundai','Sonata'],['Hyundai','Tucson'],['Hyundai','Santa Fe'],['Hyundai','Palisade'],
    ['Hyundai','Kona'],['Hyundai','Venue'],['Hyundai','Accent'],['Hyundai','Veloster'],['Hyundai','Genesis'],
    ['Kia','Forte'],['Kia','Optima/K5'],['Kia','Sportage'],['Kia','Sorento'],['Kia','Telluride'],
    ['Kia','Soul'],['Kia','Seltos'],['Kia','Rio'],['Kia','Stinger'],['Kia','Carnival'],
    ['Volkswagen','Jetta'],['Volkswagen','Golf'],['Volkswagen','Tiguan'],['Volkswagen','Atlas'],['Volkswagen','Passat'],
    ['Volkswagen','Beetle'],['Volkswagen','GTI'],['Volkswagen','ID.4'],['Volkswagen','Taos'],['Volkswagen','Arteon'],['Volkswagen','CC'],
    ['BMW','3 Series'],['BMW','5 Series'],['BMW','X3'],['BMW','X5'],['BMW','X1'],
    ['BMW','4 Series'],['BMW','7 Series'],['BMW','X7'],['BMW','Z4'],['BMW','M3'],['BMW','M5'],['BMW','i4'],['BMW','iX'],
    ['Mercedes-Benz','C-Class'],['Mercedes-Benz','E-Class'],['Mercedes-Benz','S-Class'],['Mercedes-Benz','GLC'],
    ['Mercedes-Benz','GLE'],['Mercedes-Benz','GLA'],['Mercedes-Benz','A-Class'],['Mercedes-Benz','CLA'],
    ['Mercedes-Benz','GLS'],['Mercedes-Benz','AMG GT'],
    ['Audi','A4'],['Audi','A6'],['Audi','Q5'],['Audi','Q7'],['Audi','A3'],['Audi','Q3'],
    ['Audi','A5'],['Audi','Q8'],['Audi','e-tron'],['Audi','TT'],['Audi','R8'],['Audi','S4'],['Audi','RS5'],
    ['Lexus','RX'],['Lexus','ES'],['Lexus','NX'],['Lexus','IS'],['Lexus','GX'],['Lexus','LX'],
    ['Lexus','UX'],['Lexus','LS'],['Lexus','RC'],['Lexus','LC'],['Lexus','CT'],
    ['Acura','TLX'],['Acura','MDX'],['Acura','RDX'],['Acura','ILX'],['Acura','Integra'],
    ['Acura','NSX'],['Acura','TSX'],['Acura','TL'],['Acura','RSX'],['Acura','Legend'],
    ['Infiniti','Q50'],['Infiniti','Q60'],['Infiniti','QX50'],['Infiniti','QX60'],['Infiniti','QX80'],
    ['Infiniti','G35'],['Infiniti','G37'],['Infiniti','FX35'],['Infiniti','M35'],['Infiniti','EX35'],
    ['Jeep','Wrangler'],['Jeep','Grand Cherokee'],['Jeep','Cherokee'],['Jeep','Compass'],['Jeep','Renegade'],
    ['Jeep','Gladiator'],['Jeep','Patriot'],['Jeep','Liberty'],['Jeep','Commander'],
    ['Dodge','Charger'],['Dodge','Challenger'],['Dodge','Durango'],['Dodge','Journey'],['Dodge','Grand Caravan'],
    ['Dodge','Dart'],['Dodge','Avenger'],['Dodge','Neon'],['Dodge','Viper'],
    ['Ram','1500'],['Ram','2500'],['Ram','3500'],['Ram','ProMaster'],['Ram','ProMaster City'],
    ['GMC','Sierra'],['GMC','Yukon'],['GMC','Terrain'],['GMC','Acadia'],['GMC','Canyon'],['GMC','Envoy'],['GMC','Savana'],
    ['Buick','Enclave'],['Buick','Encore'],['Buick','Envision'],['Buick','Regal'],['Buick','LaCrosse'],
    ['Buick','Verano'],['Buick','Century'],['Buick','LeSabre'],
    ['Cadillac','Escalade'],['Cadillac','CT5'],['Cadillac','CT4'],['Cadillac','XT5'],['Cadillac','XT4'],
    ['Cadillac','XT6'],['Cadillac','CTS'],['Cadillac','ATS'],['Cadillac','SRX'],['Cadillac','DeVille'],
    ['Chrysler','300'],['Chrysler','Pacifica'],['Chrysler','Voyager'],['Chrysler','Town & Country'],
    ['Chrysler','PT Cruiser'],['Chrysler','Sebring'],['Chrysler','200'],
    ['Lincoln','Navigator'],['Lincoln','Aviator'],['Lincoln','Corsair'],['Lincoln','Nautilus'],
    ['Lincoln','MKZ'],['Lincoln','MKC'],['Lincoln','MKX'],['Lincoln','Continental'],['Lincoln','Town Car'],
    ['Volvo','XC90'],['Volvo','XC60'],['Volvo','XC40'],['Volvo','S60'],['Volvo','S90'],
    ['Volvo','V60'],['Volvo','V90'],['Volvo','C40'],['Volvo','C30'],['Volvo','240'],
    ['Land Rover','Range Rover'],['Land Rover','Discovery'],['Land Rover','Defender'],['Land Rover','Evoque'],
    ['Land Rover','Velar'],['Land Rover','Sport'],['Land Rover','LR4'],['Land Rover','LR3'],['Land Rover','Freelander'],
    ['Jaguar','F-PACE'],['Jaguar','E-PACE'],['Jaguar','XF'],['Jaguar','XE'],['Jaguar','F-TYPE'],
    ['Jaguar','XJ'],['Jaguar','S-Type'],['Jaguar','X-Type'],
    ['Porsche','911'],['Porsche','Cayenne'],['Porsche','Macan'],['Porsche','Panamera'],['Porsche','Taycan'],
    ['Porsche','Boxster'],['Porsche','Cayman'],['Porsche','718'],
    ['MINI','Cooper'],['MINI','Countryman'],['MINI','Clubman'],['MINI','Paceman'],['MINI','Convertible'],
    ['Mitsubishi','Outlander'],['Mitsubishi','Eclipse Cross'],['Mitsubishi','Mirage'],['Mitsubishi','Lancer'],
    ['Mitsubishi','Eclipse'],['Mitsubishi','Galant'],['Mitsubishi','Montero'],['Mitsubishi','3000GT'],
    ['Fiat','500'],['Fiat','500X'],['Fiat','500L'],['Fiat','Spider'],['Fiat','124 Spider'],
    ['Suzuki','Grand Vitara'],['Suzuki','SX4'],['Suzuki','Kizashi'],['Suzuki','Swift'],['Suzuki','Samurai'],
    ['Suzuki','Sidekick'],['Suzuki','XL7'],['Suzuki','Forenza'],
    ['Isuzu','Trooper'],['Isuzu','Rodeo'],['Isuzu','Amigo'],['Isuzu','Hombre'],['Isuzu','Axiom'],
    ['Isuzu','VehiCROSS'],['Isuzu','Ascender'],
    ['Saab','9-3'],['Saab','9-5'],['Saab','9-2X'],['Saab','9-7X'],['Saab','900'],['Saab','9000'],
    ['Saturn','Vue'],['Saturn','Aura'],['Saturn','Outlook'],['Saturn','Ion'],['Saturn','Sky'],
    ['Saturn','S-Series'],['Saturn','L-Series'],
    ['Pontiac','Grand Prix'],['Pontiac','G6'],['Pontiac','G8'],['Pontiac','Vibe'],['Pontiac','Solstice'],
    ['Pontiac','Firebird'],['Pontiac','GTO'],['Pontiac','Bonneville'],['Pontiac','Grand Am'],['Pontiac','Sunfire'],
    ['Mercury','Grand Marquis'],['Mercury','Sable'],['Mercury','Mountaineer'],['Mercury','Mariner'],
    ['Mercury','Milan'],['Mercury','Cougar'],['Mercury','Villager'],
    ['Plymouth','Voyager'],['Plymouth','Neon'],['Plymouth','Breeze'],['Plymouth','Prowler'],
    ['Plymouth','Barracuda'],['Plymouth','Duster'],['Plymouth','Road Runner'],
    ['Hummer','H2'],['Hummer','H3'],['Hummer','H1'],
    ['Scion','tC'],['Scion','xB'],['Scion','xD'],['Scion','FR-S'],['Scion','iQ'],['Scion','iA'],['Scion','iM'],
    ['Smart','ForTwo'],['Smart','ForFour'],
  ];

  const SERVICES = ENTRIES.map(([m, mo]) => `${m} ${mo}${SUFFIX}`);
  const STORAGE_KEY = 'gbp_autofill_progress_v1';

  function loadProgress() {
    try { return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10) || 0; }
    catch { return 0; }
  }
  function saveProgress(i) { try { localStorage.setItem(STORAGE_KEY, String(i)); } catch {} }

  let index = loadProgress();
  let running = false;
  let lastError = '';

  // Inject UI
  const panel = document.createElement('div');
  panel.id = 'gbp-autofill-panel';
  panel.innerHTML = `
    <style>
      #gbp-autofill-panel{position:fixed;bottom:20px;right:20px;width:320px;background:#1f2937;color:#fff;
        font-family:system-ui,sans-serif;font-size:14px;padding:14px;border-radius:10px;
        box-shadow:0 8px 24px rgba(0,0,0,.35);z-index:2147483647;line-height:1.4}
      #gbp-autofill-panel h3{margin:0 0 8px;font-size:15px;color:#fbbf24}
      #gbp-autofill-panel .row{display:flex;gap:6px;margin-top:8px;flex-wrap:wrap}
      #gbp-autofill-panel button{flex:1;padding:8px 10px;border:0;border-radius:6px;cursor:pointer;
        font-weight:600;font-size:13px;background:#3b82f6;color:#fff;min-width:90px}
      #gbp-autofill-panel button.stop{background:#ef4444}
      #gbp-autofill-panel button.alt{background:#6b7280}
      #gbp-autofill-panel .progress{background:#374151;height:6px;border-radius:3px;overflow:hidden;margin-top:6px}
      #gbp-autofill-panel .bar{background:#10b981;height:100%;width:0%;transition:width .3s}
      #gbp-autofill-panel .next{margin-top:6px;font-size:12px;color:#d1d5db;word-break:break-word}
      #gbp-autofill-panel .err{margin-top:6px;font-size:12px;color:#fca5a5}
      #gbp-autofill-panel input{width:60px;padding:4px;border-radius:4px;border:1px solid #4b5563;background:#111827;color:#fff}
      #gbp-autofill-panel .small{font-size:11px;color:#9ca3af;margin-top:4px}
      #gbp-autofill-panel .drag{cursor:move;user-select:none}
    </style>
    <div class="drag">
      <h3>GBP Services Auto-Fill</h3>
    </div>
    <div id="gaf-status">Idle — <b>${index}</b>/${SERVICES.length} done</div>
    <div class="progress"><div class="bar" id="gaf-bar"></div></div>
    <div class="next" id="gaf-next"></div>
    <div class="err" id="gaf-err"></div>
    <div class="row">
      <button id="gaf-start">▶ Start</button>
      <button id="gaf-pause" class="stop">⏸ Pause</button>
    </div>
    <div class="row">
      <button id="gaf-once" class="alt">Add one</button>
      <button id="gaf-skip" class="alt">Skip</button>
    </div>
    <div class="row">
      <label class="small">Start at <input id="gaf-idx" type="number" min="0" max="${SERVICES.length}" value="${index}"></label>
      <button id="gaf-reset" class="alt">Reset</button>
    </div>
    <div class="small">Position the cursor in GBP's "Add custom service" input first. Use Pause if it goes off the rails.</div>
  `;
  document.body.appendChild(panel);

  const $ = (id) => document.getElementById(id);
  const bar = $('gaf-bar');
  const statusEl = $('gaf-status');
  const nextEl = $('gaf-next');
  const errEl = $('gaf-err');

  function render() {
    statusEl.innerHTML = (running ? 'Running' : 'Idle') + ` — <b>${index}</b>/${SERVICES.length} done`;
    bar.style.width = ((index / SERVICES.length) * 100).toFixed(1) + '%';
    nextEl.textContent = index < SERVICES.length ? `Next: ${SERVICES[index]}` : 'All done!';
    errEl.textContent = lastError;
  }

  // Drag panel
  (function makeDraggable() {
    const handle = panel.querySelector('.drag');
    let sx, sy, ox, oy, dragging = false;
    handle.addEventListener('mousedown', e => {
      dragging = true; sx = e.clientX; sy = e.clientY;
      const r = panel.getBoundingClientRect(); ox = r.left; oy = r.top;
      panel.style.right = 'auto'; panel.style.bottom = 'auto';
    });
    window.addEventListener('mousemove', e => {
      if (!dragging) return;
      panel.style.left = (ox + e.clientX - sx) + 'px';
      panel.style.top = (oy + e.clientY - sy) + 'px';
    });
    window.addEventListener('mouseup', () => dragging = false);
  })();

  // --- Core: find input + set value + dispatch React-safe events ---
  function nativeSetValue(el, value) {
    const proto = el.tagName === 'TEXTAREA'
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype;
    const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    setter.call(el, value);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function findServiceInput() {
    // Strategy: prefer the currently focused input/textarea, otherwise the
    // last visible empty text input in the page (GBP custom-service field).
    const ae = document.activeElement;
    if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') && isVisible(ae)) return ae;
    const candidates = Array.from(document.querySelectorAll('input[type="text"], input:not([type]), textarea'))
      .filter(isVisible)
      .filter(el => !el.disabled && !el.readOnly);
    // Prefer empty inputs in a dialog
    const inDialog = candidates.filter(el => el.closest('[role="dialog"], [aria-modal="true"]'));
    if (inDialog.length) return inDialog[inDialog.length - 1];
    return candidates[candidates.length - 1] || null;
  }

  function isVisible(el) {
    if (!el || !el.getClientRects().length) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0';
  }

  function findAddButton(scope = document) {
    // Look for buttons whose text says Add / Save / Done / Apply (case-insensitive)
    const buttons = Array.from(scope.querySelectorAll('button, [role="button"]'))
      .filter(isVisible)
      .filter(b => !b.disabled);
    const wantsAdd = /^(\s*(add|save|done|apply|insert|create)\s*)$/i;
    const labeled = buttons.filter(b => wantsAdd.test((b.innerText || b.getAttribute('aria-label') || '').trim()));
    return labeled[0] || null;
  }

  // The "Add more services" button is rendered as:
  //   <span jsname="V67aGc" class="VfPpkd-vQzf8d">Add more services</span>
  // The clickable ancestor is usually a button/[role=button] wrapping it.
  function findAddMoreServicesButton() {
    const spans = Array.from(document.querySelectorAll('span[jsname="V67aGc"]'))
      .filter(isVisible)
      .filter(s => /add\s+more\s+services/i.test((s.innerText || '').trim()));
    for (const s of spans) {
      const btn = s.closest('button, [role="button"], [jsaction]') || s;
      if (isVisible(btn)) return btn;
    }
    // Fallback: any button whose label is "Add more services"
    const all = Array.from(document.querySelectorAll('button, [role="button"]'))
      .filter(isVisible);
    return all.find(b => /add\s+more\s+services/i.test((b.innerText || b.getAttribute('aria-label') || '').trim())) || null;
  }

  async function waitFor(predicate, timeoutMs = 4000, interval = 100) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const v = predicate();
      if (v) return v;
      await sleep(interval);
    }
    return null;
  }

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

  async function addOne() {
    if (index >= SERVICES.length) { running = false; render(); return false; }
    lastError = '';
    const text = SERVICES[index];

    // 1) Make sure the input is open. If not, click "Add more services".
    let input = findServiceInput();
    if (!input) {
      const opener = findAddMoreServicesButton();
      if (opener) {
        opener.click();
        input = await waitFor(findServiceInput, 4000);
      }
    }
    if (!input) {
      lastError = 'Could not find input or "Add more services" button. Open the services editor, then press Start.';
      running = false; render(); return false;
    }
    input.focus();
    nativeSetValue(input, text);
    await sleep(250);

    // Try Enter first (works in many React forms)
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
    input.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
    await sleep(250);

    // If input still has the text after Enter, try clicking an Add button
    if (document.contains(input) && input.value === text) {
      const dialog = input.closest('[role="dialog"], [aria-modal="true"]') || document;
      const btn = findAddButton(dialog);
      if (btn) {
        btn.click();
        await sleep(250);
      } else {
        lastError = 'Typed value, but no Add/Save button found and Enter did not submit. Paused.';
        running = false; render(); return false;
      }
    }

    index++;
    saveProgress(index);
    render();
    return true;
  }

  async function runLoop() {
    running = true; render();
    while (running && index < SERVICES.length) {
      const ok = await addOne();
      if (!ok) break;
      await sleep(600); // pacing to avoid GBP rate limits
    }
    running = false; render();
  }

  $('gaf-start').onclick = () => { if (!running) runLoop(); };
  $('gaf-pause').onclick = () => { running = false; render(); };
  $('gaf-once').onclick  = () => { if (!running) addOne(); };
  $('gaf-skip').onclick  = () => { if (index < SERVICES.length) { index++; saveProgress(index); render(); } };
  $('gaf-reset').onclick = () => { index = 0; saveProgress(0); $('gaf-idx').value = 0; render(); };
  $('gaf-idx').onchange  = (e) => { const v = Math.max(0, Math.min(SERVICES.length, parseInt(e.target.value || '0', 10))); index = v; saveProgress(v); render(); };

  render();
  console.log(`[GBP Auto-Fill] Loaded with ${SERVICES.length} services. Resuming at index ${index}.`);
})();
