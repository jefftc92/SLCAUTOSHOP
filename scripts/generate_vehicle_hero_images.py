#!/usr/bin/env python3
# Vehicle hero image generator — ModelsLab Flux
# Run #2 after wallet funding
import requests
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance
from io import BytesIO
import os
import time

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "../artifacts/slcautoshop/public/images/models")
os.makedirs(OUTPUT_DIR, exist_ok=True)

VEHICLES = [
    # ACURA
    ("acura","tl","Acura","TL"),
    ("acura","tsx","Acura","TSX"),
    ("acura","rsx","Acura","RSX"),
    ("acura","mdx","Acura","MDX"),
    ("acura","rdx","Acura","RDX"),
    ("acura","tlx","Acura","TLX"),
    ("acura","integra","Acura","Integra"),
    ("acura","cl","Acura","CL"),
    ("acura","rl","Acura","RL"),
    ("acura","nsx","Acura","NSX"),
    # AUDI
    ("audi","a4","Audi","A4"),
    ("audi","a6","Audi","A6"),
    ("audi","q5","Audi","Q5"),
    ("audi","q7","Audi","Q7"),
    ("audi","a3","Audi","A3"),
    ("audi","tt","Audi","TT"),
    ("audi","a8","Audi","A8"),
    ("audi","q3","Audi","Q3"),
    ("audi","r8","Audi","R8"),
    ("audi","s4","Audi","S4"),
    ("audi","a5","Audi","A5"),
    ("audi","q8","Audi","Q8"),
    # BMW
    ("bmw","3-series","BMW","3 Series"),
    ("bmw","5-series","BMW","5 Series"),
    ("bmw","x5","BMW","X5"),
    ("bmw","7-series","BMW","7 Series"),
    ("bmw","x3","BMW","X3"),
    ("bmw","m3","BMW","M3"),
    ("bmw","1-series","BMW","1 Series"),
    ("bmw","z4","BMW","Z4"),
    ("bmw","x1","BMW","X1"),
    ("bmw","4-series","BMW","4 Series"),
    ("bmw","2-series","BMW","2 Series"),
    ("bmw","x7","BMW","X7"),
    ("bmw","6-series","BMW","6 Series"),
    # BUICK
    ("buick","enclave","Buick","Enclave"),
    ("buick","lacrosse","Buick","LaCrosse"),
    ("buick","verano","Buick","Verano"),
    ("buick","regal","Buick","Regal"),
    ("buick","encore","Buick","Encore"),
    ("buick","lesabre","Buick","LeSabre"),
    # CADILLAC
    ("cadillac","escalade","Cadillac","Escalade"),
    ("cadillac","cts","Cadillac","CTS"),
    ("cadillac","srx","Cadillac","SRX"),
    ("cadillac","ats","Cadillac","ATS"),
    ("cadillac","xts","Cadillac","XTS"),
    ("cadillac","deville","Cadillac","DeVille"),
    ("cadillac","eldorado","Cadillac","Eldorado"),
    ("cadillac","ct6","Cadillac","CT6"),
    # CHEVROLET
    ("chevrolet","silverado","Chevrolet","Silverado"),
    ("chevrolet","camaro","Chevrolet","Camaro"),
    ("chevrolet","corvette","Chevrolet","Corvette"),
    ("chevrolet","malibu","Chevrolet","Malibu"),
    ("chevrolet","tahoe","Chevrolet","Tahoe"),
    ("chevrolet","suburban","Chevrolet","Suburban"),
    ("chevrolet","equinox","Chevrolet","Equinox"),
    ("chevrolet","traverse","Chevrolet","Traverse"),
    ("chevrolet","colorado","Chevrolet","Colorado"),
    ("chevrolet","impala","Chevrolet","Impala"),
    ("chevrolet","cruze","Chevrolet","Cruze"),
    ("chevrolet","blazer","Chevrolet","Blazer"),
    ("chevrolet","spark","Chevrolet","Spark"),
    # CHRYSLER
    ("chrysler","300","Chrysler","300"),
    ("chrysler","pt-cruiser","Chrysler","PT Cruiser"),
    ("chrysler","town-and-country","Chrysler","Town and Country"),
    ("chrysler","sebring","Chrysler","Sebring"),
    ("chrysler","pacifica","Chrysler","Pacifica"),
    ("chrysler","200","Chrysler","200"),
    # DODGE
    ("dodge","charger","Dodge","Charger"),
    ("dodge","challenger","Dodge","Challenger"),
    ("dodge","durango","Dodge","Durango"),
    ("dodge","journey","Dodge","Journey"),
    ("dodge","dart","Dodge","Dart"),
    ("dodge","viper","Dodge","Viper"),
    ("dodge","avenger","Dodge","Avenger"),
    ("dodge","grand-caravan","Dodge","Grand Caravan"),
    ("dodge","ram","Dodge","Ram 1500"),
    # FIAT
    ("fiat","500","Fiat","500"),
    ("fiat","500x","Fiat","500X"),
    ("fiat","500l","Fiat","500L"),
    ("fiat","124-spider","Fiat","124 Spider"),
    # FORD
    ("ford","f-150","Ford","F-150"),
    ("ford","mustang","Ford","Mustang"),
    ("ford","explorer","Ford","Explorer"),
    ("ford","escape","Ford","Escape"),
    ("ford","fusion","Ford","Fusion"),
    ("ford","focus","Ford","Focus"),
    ("ford","expedition","Ford","Expedition"),
    ("ford","ranger","Ford","Ranger"),
    ("ford","bronco","Ford","Bronco"),
    ("ford","edge","Ford","Edge"),
    ("ford","flex","Ford","Flex"),
    ("ford","transit","Ford","Transit"),
    ("ford","maverick","Ford","Maverick"),
    # GMC
    ("gmc","sierra","GMC","Sierra"),
    ("gmc","yukon","GMC","Yukon"),
    ("gmc","acadia","GMC","Acadia"),
    ("gmc","canyon","GMC","Canyon"),
    ("gmc","terrain","GMC","Terrain"),
    ("gmc","envoy","GMC","Envoy"),
    ("gmc","jimmy","GMC","Jimmy"),
    # HONDA
    ("honda","civic","Honda","Civic"),
    ("honda","accord","Honda","Accord"),
    ("honda","cr-v","Honda","CR-V"),
    ("honda","pilot","Honda","Pilot"),
    ("honda","odyssey","Honda","Odyssey"),
    ("honda","fit","Honda","Fit"),
    ("honda","ridgeline","Honda","Ridgeline"),
    ("honda","hr-v","Honda","HR-V"),
    ("honda","passport","Honda","Passport"),
    ("honda","element","Honda","Element"),
    ("honda","s2000","Honda","S2000"),
    ("honda","insight","Honda","Insight"),
    ("honda","prelude","Honda","Prelude"),
    ("honda","del-sol","Honda","Del Sol"),
    # HUMMER
    ("hummer","h2","Hummer","H2"),
    ("hummer","h3","Hummer","H3"),
    ("hummer","h1","Hummer","H1"),
    # HYUNDAI
    ("hyundai","sonata","Hyundai","Sonata"),
    ("hyundai","elantra","Hyundai","Elantra"),
    ("hyundai","tucson","Hyundai","Tucson"),
    ("hyundai","santa-fe","Hyundai","Santa Fe"),
    ("hyundai","genesis","Hyundai","Genesis Coupe"),
    ("hyundai","accent","Hyundai","Accent"),
    ("hyundai","veloster","Hyundai","Veloster"),
    ("hyundai","tiburon","Hyundai","Tiburon"),
    ("hyundai","azera","Hyundai","Azera"),
    ("hyundai","ioniq","Hyundai","Ioniq"),
    ("hyundai","kona","Hyundai","Kona"),
    ("hyundai","palisade","Hyundai","Palisade"),
    # INFINITI
    ("infiniti","g35","Infiniti","G35"),
    ("infiniti","g37","Infiniti","G37"),
    ("infiniti","q50","Infiniti","Q50"),
    ("infiniti","q60","Infiniti","Q60"),
    ("infiniti","qx60","Infiniti","QX60"),
    ("infiniti","qx80","Infiniti","QX80"),
    ("infiniti","ex","Infiniti","EX"),
    ("infiniti","fx","Infiniti","FX"),
    ("infiniti","m35","Infiniti","M35"),
    ("infiniti","jx","Infiniti","JX35"),
    # ISUZU
    ("isuzu","trooper","Isuzu","Trooper"),
    ("isuzu","rodeo","Isuzu","Rodeo"),
    ("isuzu","axiom","Isuzu","Axiom"),
    ("isuzu","amigo","Isuzu","Amigo"),
    ("isuzu","vehicross","Isuzu","VehiCROSS"),
    # JAGUAR
    ("jaguar","xf","Jaguar","XF"),
    ("jaguar","xj","Jaguar","XJ"),
    ("jaguar","f-type","Jaguar","F-Type"),
    ("jaguar","xe","Jaguar","XE"),
    ("jaguar","f-pace","Jaguar","F-Pace"),
    ("jaguar","e-pace","Jaguar","E-Pace"),
    ("jaguar","i-pace","Jaguar","I-Pace"),
    # JEEP
    ("jeep","wrangler","Jeep","Wrangler"),
    ("jeep","grand-cherokee","Jeep","Grand Cherokee"),
    ("jeep","cherokee","Jeep","Cherokee"),
    ("jeep","compass","Jeep","Compass"),
    ("jeep","renegade","Jeep","Renegade"),
    ("jeep","gladiator","Jeep","Gladiator"),
    ("jeep","liberty","Jeep","Liberty"),
    ("jeep","patriot","Jeep","Patriot"),
    # KIA
    ("kia","optima","Kia","Optima"),
    ("kia","sorento","Kia","Sorento"),
    ("kia","sportage","Kia","Sportage"),
    ("kia","soul","Kia","Soul"),
    ("kia","forte","Kia","Forte"),
    ("kia","stinger","Kia","Stinger"),
    ("kia","telluride","Kia","Telluride"),
    ("kia","carnival","Kia","Carnival"),
    ("kia","rio","Kia","Rio"),
    ("kia","sedona","Kia","Sedona"),
    ("kia","niro","Kia","Niro"),
    # LAND ROVER
    ("land-rover","range-rover","Land Rover","Range Rover"),
    ("land-rover","discovery","Land Rover","Discovery"),
    ("land-rover","defender","Land Rover","Defender"),
    ("land-rover","freelander","Land Rover","Freelander"),
    ("land-rover","lr3","Land Rover","LR3"),
    ("land-rover","lr4","Land Rover","LR4"),
    ("land-rover","evoque","Land Rover","Range Rover Evoque"),
    # LEXUS
    ("lexus","is","Lexus","IS"),
    ("lexus","es","Lexus","ES"),
    ("lexus","rx","Lexus","RX"),
    ("lexus","gs","Lexus","GS"),
    ("lexus","ls","Lexus","LS"),
    ("lexus","nx","Lexus","NX"),
    ("lexus","gx","Lexus","GX"),
    ("lexus","lx","Lexus","LX"),
    ("lexus","ux","Lexus","UX"),
    ("lexus","rc","Lexus","RC"),
    ("lexus","sc","Lexus","SC"),
    # LINCOLN
    ("lincoln","town-car","Lincoln","Town Car"),
    ("lincoln","navigator","Lincoln","Navigator"),
    ("lincoln","mkz","Lincoln","MKZ"),
    ("lincoln","mkx","Lincoln","MKX"),
    ("lincoln","continental","Lincoln","Continental"),
    ("lincoln","corsair","Lincoln","Corsair"),
    ("lincoln","aviator","Lincoln","Aviator"),
    # MAZDA
    ("mazda","mazda3","Mazda","Mazda3"),
    ("mazda","mazda6","Mazda","Mazda6"),
    ("mazda","cx-5","Mazda","CX-5"),
    ("mazda","miata","Mazda","MX-5 Miata"),
    ("mazda","cx-9","Mazda","CX-9"),
    ("mazda","rx-8","Mazda","RX-8"),
    ("mazda","cx-3","Mazda","CX-3"),
    ("mazda","tribute","Mazda","Tribute"),
    ("mazda","protege","Mazda","Protege"),
    ("mazda","mazda5","Mazda","Mazda5"),
    ("mazda","b-series","Mazda","B-Series"),
    ("mazda","cx-30","Mazda","CX-30"),
    # MERCEDES-BENZ
    ("mercedes-benz","c-class","Mercedes-Benz","C-Class"),
    ("mercedes-benz","e-class","Mercedes-Benz","E-Class"),
    ("mercedes-benz","s-class","Mercedes-Benz","S-Class"),
    ("mercedes-benz","ml-class","Mercedes-Benz","ML-Class"),
    ("mercedes-benz","glk","Mercedes-Benz","GLK"),
    ("mercedes-benz","gl-class","Mercedes-Benz","GL-Class"),
    ("mercedes-benz","slk","Mercedes-Benz","SLK"),
    ("mercedes-benz","clk","Mercedes-Benz","CLK"),
    ("mercedes-benz","cl-class","Mercedes-Benz","CL-Class"),
    ("mercedes-benz","cla","Mercedes-Benz","CLA"),
    ("mercedes-benz","glc","Mercedes-Benz","GLC"),
    ("mercedes-benz","gle","Mercedes-Benz","GLE"),
    # MERCURY
    ("mercury","grand-marquis","Mercury","Grand Marquis"),
    ("mercury","villager","Mercury","Villager"),
    ("mercury","mountaineer","Mercury","Mountaineer"),
    ("mercury","sable","Mercury","Sable"),
    ("mercury","milan","Mercury","Milan"),
    # MINI
    ("mini","cooper","MINI","Cooper"),
    ("mini","countryman","MINI","Countryman"),
    ("mini","clubman","MINI","Clubman"),
    ("mini","paceman","MINI","Paceman"),
    ("mini","convertible","MINI","Convertible"),
    ("mini","roadster","MINI","Roadster"),
    # MITSUBISHI
    ("mitsubishi","outlander","Mitsubishi","Outlander"),
    ("mitsubishi","eclipse","Mitsubishi","Eclipse"),
    ("mitsubishi","galant","Mitsubishi","Galant"),
    ("mitsubishi","lancer","Mitsubishi","Lancer"),
    ("mitsubishi","montero","Mitsubishi","Montero"),
    ("mitsubishi","endeavor","Mitsubishi","Endeavor"),
    ("mitsubishi","raider","Mitsubishi","Raider"),
    ("mitsubishi","diamante","Mitsubishi","Diamante"),
    # NISSAN
    ("nissan","altima","Nissan","Altima"),
    ("nissan","maxima","Nissan","Maxima"),
    ("nissan","pathfinder","Nissan","Pathfinder"),
    ("nissan","frontier","Nissan","Frontier"),
    ("nissan","sentra","Nissan","Sentra"),
    ("nissan","350z","Nissan","350Z"),
    ("nissan","370z","Nissan","370Z"),
    ("nissan","murano","Nissan","Murano"),
    ("nissan","rogue","Nissan","Rogue"),
    ("nissan","armada","Nissan","Armada"),
    ("nissan","titan","Nissan","Titan"),
    ("nissan","leaf","Nissan","Leaf"),
    ("nissan","xterra","Nissan","Xterra"),
    ("nissan","quest","Nissan","Quest"),
    # PLYMOUTH
    ("plymouth","voyager","Plymouth","Voyager"),
    ("plymouth","grand-voyager","Plymouth","Grand Voyager"),
    ("plymouth","neon","Plymouth","Neon"),
    ("plymouth","barracuda","Plymouth","Barracuda"),
    ("plymouth","prowler","Plymouth","Prowler"),
    # PONTIAC
    ("pontiac","firebird","Pontiac","Firebird"),
    ("pontiac","grand-prix","Pontiac","Grand Prix"),
    ("pontiac","grand-am","Pontiac","Grand Am"),
    ("pontiac","solstice","Pontiac","Solstice"),
    ("pontiac","vibe","Pontiac","Vibe"),
    ("pontiac","g6","Pontiac","G6"),
    ("pontiac","bonneville","Pontiac","Bonneville"),
    # PORSCHE
    ("porsche","911","Porsche","911"),
    ("porsche","boxster","Porsche","Boxster"),
    ("porsche","cayenne","Porsche","Cayenne"),
    ("porsche","panamera","Porsche","Panamera"),
    ("porsche","macan","Porsche","Macan"),
    ("porsche","cayman","Porsche","Cayman"),
    # RAM
    ("ram","1500","Ram","Ram 1500"),
    ("ram","2500","Ram","Ram 2500"),
    ("ram","3500","Ram","Ram 3500"),
    ("ram","promaster","Ram","ProMaster"),
    ("ram","dakota","Ram","Dakota"),
    # SAAB
    ("saab","9-3","Saab","9-3"),
    ("saab","9-5","Saab","9-5"),
    ("saab","9-7x","Saab","9-7X"),
    ("saab","9-2x","Saab","9-2X"),
    # SATURN
    ("saturn","vue","Saturn","Vue"),
    ("saturn","ion","Saturn","Ion"),
    ("saturn","sl","Saturn","SL"),
    ("saturn","sc","Saturn","SC"),
    ("saturn","sw","Saturn","SW"),
    # SCION
    ("scion","tc","Scion","tC"),
    ("scion","xb","Scion","xB"),
    ("scion","xa","Scion","xA"),
    ("scion","frs","Scion","FR-S"),
    ("scion","iq","Scion","iQ"),
    ("scion","xd","Scion","xD"),
    # SMART
    ("smart","fortwo","Smart","Fortwo"),
    ("smart","forfour","Smart","Forfour"),
    # SUBARU
    ("subaru","outback","Subaru","Outback"),
    ("subaru","forester","Subaru","Forester"),
    ("subaru","impreza","Subaru","Impreza"),
    ("subaru","legacy","Subaru","Legacy"),
    ("subaru","wrx","Subaru","WRX"),
    ("subaru","brz","Subaru","BRZ"),
    ("subaru","tribeca","Subaru","Tribeca"),
    ("subaru","crosstrek","Subaru","Crosstrek"),
    ("subaru","baja","Subaru","Baja"),
    ("subaru","ascent","Subaru","Ascent"),
    # SUZUKI
    ("suzuki","grand-vitara","Suzuki","Grand Vitara"),
    ("suzuki","sidekick","Suzuki","Sidekick"),
    ("suzuki","swift","Suzuki","Swift"),
    ("suzuki","aerio","Suzuki","Aerio"),
    ("suzuki","verona","Suzuki","Verona"),
    ("suzuki","samurai","Suzuki","Samurai"),
    # TOYOTA
    ("toyota","camry","Toyota","Camry"),
    ("toyota","corolla","Toyota","Corolla"),
    ("toyota","tacoma","Toyota","Tacoma"),
    ("toyota","tundra","Toyota","Tundra"),
    ("toyota","rav4","Toyota","RAV4"),
    ("toyota","highlander","Toyota","Highlander"),
    ("toyota","4runner","Toyota","4Runner"),
    ("toyota","sequoia","Toyota","Sequoia"),
    ("toyota","sienna","Toyota","Sienna"),
    ("toyota","prius","Toyota","Prius"),
    ("toyota","avalon","Toyota","Avalon"),
    ("toyota","celica","Toyota","Celica"),
    ("toyota","mr2","Toyota","MR2"),
    ("toyota","land-cruiser","Toyota","Land Cruiser"),
    ("toyota","supra","Toyota","Supra"),
    ("toyota","fj-cruiser","Toyota","FJ Cruiser"),
    ("toyota","venza","Toyota","Venza"),
    ("toyota","yaris","Toyota","Yaris"),
    ("toyota","matrix","Toyota","Matrix"),
    ("toyota","t100","Toyota","T100"),
    ("toyota","camry-solara","Toyota","Camry Solara"),
    ("toyota","echo","Toyota","Echo"),
    ("toyota","previa","Toyota","Previa"),
    ("toyota","pickup","Toyota","Pickup"),
    ("toyota","tercel","Toyota","Tercel"),
    # VOLKSWAGEN
    ("volkswagen","jetta","Volkswagen","Jetta"),
    ("volkswagen","golf","Volkswagen","Golf"),
    ("volkswagen","passat","Volkswagen","Passat"),
    ("volkswagen","tiguan","Volkswagen","Tiguan"),
    ("volkswagen","beetle","Volkswagen","Beetle"),
    ("volkswagen","touareg","Volkswagen","Touareg"),
    ("volkswagen","cc","Volkswagen","CC"),
    ("volkswagen","atlas","Volkswagen","Atlas"),
    ("volkswagen","gti","Volkswagen","GTI"),
    ("volkswagen","eos","Volkswagen","Eos"),
    ("volkswagen","phaeton","Volkswagen","Phaeton"),
    # VOLVO
    ("volvo","s60","Volvo","S60"),
    ("volvo","xc90","Volvo","XC90"),
    ("volvo","s40","Volvo","S40"),
    ("volvo","v70","Volvo","V70"),
    ("volvo","xc70","Volvo","XC70"),
    ("volvo","s80","Volvo","S80"),
    ("volvo","c30","Volvo","C30"),
    ("volvo","xc60","Volvo","XC60"),
    ("volvo","v60","Volvo","V60"),
    ("volvo","c70","Volvo","C70"),
    ("volvo","s70","Volvo","S70"),
]

MODELSLAB_KEY = os.environ.get("MODELSLAB_API_KEY", "").strip()
MODELSLAB_URL = "https://modelslab.com/api/v6/images/text2img"
MODELSLAB_FETCH_URL = "https://modelslab.com/api/v6/images/fetch"

NEGATIVE_PROMPT = (
    "cartoon, drawing, illustration, anime, sketch, painting, render, 3d, cgi, "
    "low quality, blurry, deformed, distorted, multiple vehicles, two cars, "
    "text, watermark, logo, signature, license plate text, people, person, "
    "interior, dashboard, engine bay"
)

def _build_prompt(make, model):
    return (
        f"Professional automotive press photography of a {make} {model} parked on "
        f"clean asphalt, three-quarter front view, golden-hour lighting, glossy "
        f"factory paint, sharp focus, dealership-quality studio shot, "
        f"photorealistic, ultra high detail, crisp reflections, 35mm DSLR"
    )

def _poll_modelslab(fetch_id, max_wait=90):
    """ModelsLab returns 'processing' status with a fetch_id for queued jobs."""
    deadline = time.time() + max_wait
    while time.time() < deadline:
        time.sleep(3)
        try:
            r = requests.post(
                f"{MODELSLAB_FETCH_URL}/{fetch_id}",
                json={"key": MODELSLAB_KEY},
                timeout=20,
            )
            data = r.json()
            if data.get("status") == "success" and data.get("output"):
                return data["output"][0]
            if data.get("status") == "failed":
                return None
        except Exception:
            pass
    return None

def generate_ai_image(make, model):
    if not MODELSLAB_KEY:
        return None
    payload = {
        "key": MODELSLAB_KEY,
        "model_id": "flux",
        "prompt": _build_prompt(make, model),
        "negative_prompt": NEGATIVE_PROMPT,
        "width": "768",
        "height": "512",
        "samples": "1",
        "num_inference_steps": "30",
        "guidance_scale": 7.5,
        "safety_checker": "no",
        "enhance_prompt": "yes",
    }
    try:
        r = requests.post(MODELSLAB_URL, json=payload, timeout=120)
        data = r.json()
        status = data.get("status")
        if status == "success" and data.get("output"):
            return data["output"][0]
        if status == "processing" and data.get("id"):
            return _poll_modelslab(data["id"])
        print(f"    api error: {data.get('message') or data.get('messege') or status}")
    except Exception as e:
        print(f"    api exception: {e}")
    return None

def add_vignette(img):
    arr = np.array(img).astype(float)
    h, w = arr.shape[:2]
    Y, X = np.ogrid[:h, :w]
    cx, cy = w / 2, h / 2
    dist = np.sqrt(((X - cx) / cx) ** 2 + ((Y - cy) / cy) ** 2)
    vignette = 1 - np.clip(dist, 0, 1) * 0.7
    arr = arr * vignette[:, :, np.newaxis]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))

def process_hero(img):
    # Site-wide CSS already applies filter:brightness(.28) to all hero backgrounds,
    # so we ship crisp full-color images and let the CSS do the darkening.
    return img.convert("RGB").resize((768, 432), Image.LANCZOS)

def fallback_image():
    arr = np.zeros((432, 768, 3), dtype=np.uint8)
    for y in range(432):
        val = int(25 + (y / 432) * 15)
        arr[y, :] = val
    return Image.fromarray(arr)

if not MODELSLAB_KEY:
    raise SystemExit("MODELSLAB_API_KEY env var is required")

done = 0
skipped = 0
failed = []

for i, (makeKey, slug, make, model) in enumerate(VEHICLES):
    filepath = os.path.join(OUTPUT_DIR, f"{makeKey}-{slug}-hero.webp")

    if os.path.exists(filepath):
        skipped += 1
        continue

    img_url = generate_ai_image(make, model)

    if img_url:
        try:
            raw = requests.get(img_url, timeout=60).content
            img = Image.open(BytesIO(raw))
            hero = process_hero(img)
            hero.save(filepath, "WEBP", quality=85)
            done += 1
            print(f"[{i+1}/{len(VEHICLES)}] ✓ {makeKey}/{slug}")
        except Exception as e:
            failed.append(f"{makeKey}/{slug}")
            print(f"[{i+1}/{len(VEHICLES)}] ✗ {makeKey}/{slug}: download error: {e}")
    else:
        failed.append(f"{makeKey}/{slug}")
        print(f"[{i+1}/{len(VEHICLES)}] ✗ {makeKey}/{slug}: generation failed")

    # Stay under free-tier queue limit (5 concurrent)
    time.sleep(1.5)

print(f"\n{'='*50}")
print(f"✓ Generated: {done}")
print(f"→ Skipped (already exist): {skipped}")
print(f"✗ Fallback used: {len(failed)}")
if failed:
    print(f"  {', '.join(failed)}")
