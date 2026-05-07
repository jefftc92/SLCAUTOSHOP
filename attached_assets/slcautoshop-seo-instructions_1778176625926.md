# SEO Fix Instructions — slcautoshop.com
## Issues #2, #4, #5 — Ready to implement in Replit

---

# ISSUE #2 — META TITLES & DESCRIPTIONS

## The Problem
Every page currently shares a near-identical title tag: "Salt Lake City Auto Repair: SLC Auto Shop - Expert Care"
Meta descriptions are either missing or one generic sentence. Google is likely auto-generating snippets, which hurts click-through rates.

## How to Find These in Your Codebase
Search your project for:
- `<title>` — this is the page title tag
- `<meta name="description"` — this is the meta description
- If you're using a framework like Astro, Next.js, SvelteKit, etc., look for a `<Head>` or `<SEO>` component or a `meta` config object per page

## The Formula to Follow for Every Page
Title: `[Primary Keyword] [City, ST] | [Differentiator] | Scott's Auto & Clutch`
Meta: `[Problem the user has] + [What you do] + [Trust signal] + [CTA with phone]`

Keep titles under 60 characters. Keep meta descriptions under 155 characters.

---

## READY-TO-PASTE TITLES & METAS — ALL PAGES

### Homepage (/)
```
Title: Auto Repair South Salt Lake UT | Since 1990 | Scott's Auto & Clutch
Meta:  Family-owned shop serving the Salt Lake Valley since 1990. Clutch repair, brakes, CV axles, transmissions & more. Free estimates. Call (801) 485-4089.
```

### Services Index (/services)
```
Title: Auto Repair Services South Salt Lake UT | Scott's Auto & Clutch
Meta:  Clutch repair, brake service, CV joints, timing chains, exhaust & more. All makes and models. Honest pricing, free diagnosis. Call (801) 485-4089.
```

### Clutch Repair (/services/clutch-repair-south-salt-lake-ut)
```
Title: Clutch Repair South Salt Lake UT | Specialists Since 1990 | Scott's
Meta:  Clutch slipping, grinding, or hard to shift? We've specialized in clutch replacement for 35+ years. Free diagnosis. Call (801) 485-4089.
```

### CV Joint Repair (/services/cv-joint-repair-south-salt-lake-ut)
```
Title: CV Joint Repair South Salt Lake UT | Axle & Boot Service | Scott's
Meta:  Clicking when turning? CV axle worn? We replace CV joints, boots & axles for all makes and models. Free diagnosis. Call (801) 485-4089.
```

### Brake Service (/services/brake-service-south-salt-lake-ut)
```
Title: Brake Service South Salt Lake UT | Pads, Rotors & Calipers | Scott's
Meta:  Squeaking or grinding brakes? We replace pads, rotors, and calipers for all makes. Free brake inspection. South Salt Lake, UT. (801) 485-4089.
```

### Timing Chain (/services/timing-chain-repair-south-salt-lake-ut)
```
Title: Timing Chain Repair South Salt Lake UT | Engine Rattling? | Scott's
Meta:  Engine rattling on startup? Don't wait—timing chain failure can destroy your engine. Free diagnosis at Scott's Auto. Call (801) 485-4089.
```

### Timing Belt (/services/timing-belt-replacement-south-salt-lake-ut)
```
Title: Timing Belt Replacement South Salt Lake UT | All Makes | Scott's
Meta:  Timing belt due for replacement? We handle belt, tensioner, idler & water pump as a complete service. Honest pricing. Call (801) 485-4089.
```

### Water Pump (/services/water-pump-replacement-south-salt-lake-ut)
```
Title: Water Pump Replacement South Salt Lake UT | Cooling System | Scott's
Meta:  Overheating or coolant leak? Water pump failure is a common cause. We diagnose and replace water pumps for all makes. Call (801) 485-4089.
```

### Exhaust Repair (/services/exhaust-repair-south-salt-lake-ut)
```
Title: Exhaust Repair South Salt Lake UT | Muffler & Pipe | Scott's Auto
Meta:  Loud exhaust or exhaust smell in the cabin? We weld and replace mufflers, pipes & manifolds. Free exhaust inspection. Call (801) 485-4089.
```

### Catalytic Converter (/services/catalytic-converter-service-south-salt-lake-ut)
```
Title: Catalytic Converter Repair South Salt Lake UT | Scott's Auto & Clutch
Meta:  Failed emissions or check engine light? Catalytic converter issues diagnosed and repaired fast. Anti-theft shields available. (801) 485-4089.
```

### Struts (/services/strut-replacement-south-salt-lake-ut)
```
Title: Strut Replacement South Salt Lake UT | Smoother Ride | Scott's Auto
Meta:  Bouncy ride, nose dive when braking, or uneven tire wear? We replace struts for all makes and models. Free inspection. Call (801) 485-4089.
```

### Shocks (/services/shock-replacement-south-salt-lake-ut)
```
Title: Shock Replacement South Salt Lake UT | Trucks & SUVs | Scott's Auto
Meta:  Rough ride over bumps? We replace shocks on cars, trucks, SUVs, and lifted vehicles. South Salt Lake, UT. Call (801) 485-4089.
```

### Welding (/services/welding-services-south-salt-lake-ut)
```
Title: Auto Welding South Salt Lake UT | Exhaust, Frame & Custom | Scott's
Meta:  Exhaust leaks, frame repair, or custom fab? Our shop handles automotive welding for all types of repairs. Call (801) 485-4089.
```

### Complete Auto Service (/services/complete-auto-service-south-salt-lake-ut)
```
Title: Complete Auto Service South Salt Lake UT | All Makes | Scott's Auto
Meta:  Oil changes, engine diagnostics, A/C, emissions & safety inspections for all makes and models. Trusted since 1990. Call (801) 485-4089.
```

### Symptom — Clutch Slipping (/symptoms/clutch-slipping-repair-south-salt-lake)
```
Title: Clutch Slipping Repair South Salt Lake UT | Free Diagnosis | Scott's
Meta:  Engine revving but car not accelerating? Your clutch disc is likely worn. Free clutch diagnosis at Scott's Auto. Call (801) 485-4089.
```

### Symptom — Grinding When Shifting (/symptoms/grinding-noise-shifting-repair-south-salt-lake)
```
Title: Grinding When Shifting — Repair South Salt Lake UT | Scott's Auto
Meta:  Grinding into gear? Could be clutch, synchronizers, or throw-out bearing. We diagnose and fix it fast. Free inspection. (801) 485-4089.
```

### Symptom — Check Engine Light (/symptoms/check-engine-light-repair-south-salt-lake)
```
Title: Check Engine Light Repair South Salt Lake UT | Scott's Auto & Clutch
Meta:  Check engine light on? We run a full diagnostic and explain exactly what's wrong before any work begins. Call (801) 485-4089.
```

### Symptom — Bouncy Ride (/symptoms/bouncy-ride-repair-south-salt-lake)
```
Title: Bouncy Ride Repair South Salt Lake UT | Struts & Shocks | Scott's
Meta:  Bouncing after every bump? Worn struts or shocks are the likely cause. Free suspension inspection. South Salt Lake. (801) 485-4089.
```

### Location — South Salt Lake (/locations/south-salt-lake-ut-auto-repair)
```
Title: Auto Repair Shop South Salt Lake UT | Scott's Auto & Clutch
Meta:  Your neighborhood auto repair shop at 144 W Crystal Ave, South Salt Lake. Clutch, brakes, CV joints & more since 1990. (801) 485-4089.
```

### Location — Sandy (/locations/sandy-ut-auto-repair)
```
Title: Auto Repair Sandy UT | 8 Miles from Sandy | Scott's Auto & Clutch
Meta:  Sandy drivers trust Scott's Auto & Clutch for clutch repair, brakes, and full auto service. Just 8 miles away. Free diagnosis. (801) 485-4089.
```

### Location — Murray (/locations/murray-ut-auto-repair)
```
Title: Auto Repair Murray UT | 4 Miles from Murray | Scott's Auto & Clutch
Meta:  Murray drivers—Scott's Auto & Clutch is just 4 miles away in South Salt Lake. Clutch, brakes, CV joints & more. (801) 485-4089.
```

### Location — Salt Lake City (/locations/salt-lake-city-ut-auto-repair)
```
Title: Auto Repair Salt Lake City UT | Scott's Auto & Clutch
Meta:  Trusted auto repair for Salt Lake City drivers since 1990. Clutch specialists, full service shop, honest pricing. Call (801) 485-4089.
```

---

# ISSUE #4 — INTERNAL LINKING

## The Problem
Pages don't link to each other in meaningful ways. The Clutch Repair service page links to CV Joint, Brake, and Timing Chain as "related services" — but none of those are related to clutch repair. Worse, none of the 6 clutch-specific symptom pages are linked FROM the clutch repair page. The symptom pages' "View Our Services" button goes to the generic /services page instead of the specific service page.

## Fix #1 — Service Pages: Link to Relevant Symptom Pages

On EACH service page, add a section titled "Common Symptoms This Service Fixes" with hyperlinks to the matching symptom pages. Add this section ABOVE the existing "Related Services" section.

### Clutch Repair Page — Add These Links:
```
Clutch Slipping          → /symptoms/clutch-slipping-repair-south-salt-lake
Grinding When Shifting   → /symptoms/grinding-noise-shifting-repair-south-salt-lake
Stiff Clutch Pedal       → /symptoms/stiff-clutch-pedal-repair-south-salt-lake
Soft Clutch Pedal        → /symptoms/clutch-pedal-feels-soft-repair-south-salt-lake
Burning Smell            → /symptoms/burning-smell-clutch-repair-south-salt-lake
Hard to Shift Gears      → /symptoms/hard-to-shift-gears-repair-south-salt-lake
```

### Brake Service Page — Add These Links:
```
Squeaking Brakes         → /symptoms/squeaking-brakes-repair-south-salt-lake
Grinding Brakes          → /symptoms/grinding-brakes-repair-south-salt-lake
Soft Brake Pedal         → /symptoms/soft-brake-pedal-repair-south-salt-lake
Vibration When Braking   → /symptoms/vibration-when-braking-repair-south-salt-lake
Nose Dive Braking        → /symptoms/nose-dive-braking-repair-south-salt-lake
```

### CV Joint Repair Page — Add These Links:
```
Clicking When Turning    → /symptoms/clicking-noise-turning-repair-south-salt-lake
Vibration Accelerating   → /symptoms/vibration-when-accelerating-repair-south-salt-lake
```

### Timing Chain Page — Add These Links:
```
Engine Rattling          → /symptoms/engine-rattling-startup-repair-south-salt-lake
Check Engine Light       → /symptoms/check-engine-light-repair-south-salt-lake
```

### Struts & Shocks Pages — Add These Links:
```
Bouncy Ride              → /symptoms/bouncy-ride-repair-south-salt-lake
Nose Dive Braking        → /symptoms/nose-dive-braking-repair-south-salt-lake
Steering Vibration       → /symptoms/steering-vibration-repair-south-salt-lake
Uneven Tire Wear         → /symptoms/uneven-tire-wear-repair-south-salt-lake
Rough Ride Over Bumps    → /symptoms/rough-ride-bumps-repair-south-salt-lake
```

### Exhaust Repair Page — Add These Links:
```
Loud Exhaust             → /symptoms/loud-exhaust-repair-south-salt-lake
Exhaust Smell in Cabin   → /symptoms/exhaust-smell-cabin-repair-south-salt-lake
Failed Emissions         → /symptoms/failed-emissions-repair-south-salt-lake
```

### Water Pump / Cooling System Page — Add These Links:
```
Engine Overheating       → /symptoms/engine-overheating-repair-south-salt-lake
Coolant Leak             → /symptoms/coolant-leak-repair-south-salt-lake
```

### Catalytic Converter Page — Add These Links:
```
Check Engine Light       → /symptoms/check-engine-light-repair-south-salt-lake
Failed Emissions         → /symptoms/failed-emissions-repair-south-salt-lake
```

---

## Fix #2 — Symptom Pages: Link Up to the Specific Service Page

On EACH symptom page, the current "View Our Services" button/link points to `/services` (generic).
Change every one of these to point to the SPECIFIC service page for that symptom.

### Exact Replacements:
```
Clutch Slipping          → /services/clutch-repair-south-salt-lake-ut
Grinding When Shifting   → /services/clutch-repair-south-salt-lake-ut
Stiff Clutch Pedal       → /services/clutch-repair-south-salt-lake-ut
Soft Clutch Pedal        → /services/clutch-repair-south-salt-lake-ut
Burning Smell            → /services/clutch-repair-south-salt-lake-ut
Hard to Shift Gears      → /services/clutch-repair-south-salt-lake-ut
Transmission Slipping    → /services/clutch-repair-south-salt-lake-ut

Squeaking Brakes         → /services/brake-service-south-salt-lake-ut
Grinding Brakes          → /services/brake-service-south-salt-lake-ut
Soft Brake Pedal         → /services/brake-service-south-salt-lake-ut
Vibration When Braking   → /services/brake-service-south-salt-lake-ut
Nose Dive Braking        → /services/brake-service-south-salt-lake-ut

Clicking When Turning    → /services/cv-joint-repair-south-salt-lake-ut
Vibration Accelerating   → /services/cv-joint-repair-south-salt-lake-ut

Engine Rattling          → /services/timing-chain-repair-south-salt-lake-ut
Check Engine Light       → /services/complete-auto-service-south-salt-lake-ut

Bouncy Ride              → /services/strut-replacement-south-salt-lake-ut
Rough Ride Over Bumps    → /services/shock-replacement-south-salt-lake-ut
Steering Vibration       → /services/strut-replacement-south-salt-lake-ut
Uneven Tire Wear         → /services/strut-replacement-south-salt-lake-ut

Engine Overheating       → /services/water-pump-replacement-south-salt-lake-ut
Coolant Leak             → /services/water-pump-replacement-south-salt-lake-ut

Loud Exhaust             → /services/exhaust-repair-south-salt-lake-ut
Exhaust Smell in Cabin   → /services/exhaust-repair-south-salt-lake-ut
Failed Emissions         → /services/catalytic-converter-service-south-salt-lake-ut
```

---

## Fix #3 — Location Pages: Hyperlink Every Service Mentioned in Body Text

On each location page (e.g., /locations/holladay-ut-auto-repair), the body text mentions services like "clutch repair," "brake service," and "CV axles" as plain text. Every service name in location page body copy must become a hyperlink.

Find every instance of these phrases on location pages and wrap them in links:

```
"clutch repair"          → /services/clutch-repair-south-salt-lake-ut
"clutch replacement"     → /services/clutch-repair-south-salt-lake-ut
"brake service"          → /services/brake-service-south-salt-lake-ut
"brake repair"           → /services/brake-service-south-salt-lake-ut
"CV axle"                → /services/cv-joint-repair-south-salt-lake-ut
"CV joint"               → /services/cv-joint-repair-south-salt-lake-ut
"timing chain"           → /services/timing-chain-repair-south-salt-lake-ut
"timing belt"            → /services/timing-belt-replacement-south-salt-lake-ut
"water pump"             → /services/water-pump-replacement-south-salt-lake-ut
"exhaust"                → /services/exhaust-repair-south-salt-lake-ut
"strut"                  → /services/strut-replacement-south-salt-lake-ut
"suspension"             → /services/strut-replacement-south-salt-lake-ut
"catalytic converter"    → /services/catalytic-converter-service-south-salt-lake-ut
```

Only link the FIRST occurrence of each term per page. Do not link the same term twice on the same page.

---

## Fix #4 — Fix "Related Services" Section on Service Pages

The current Clutch Repair page links to: CV Joint Repair, Brake Service, Timing Chain — these are not related to clutch work.

Replace the Related Services on each page with actually related pages:

### Clutch Repair — Related Services Should Be:
```
Clutch Slipping (symptom page)       → /symptoms/clutch-slipping-repair-south-salt-lake
Transmission Slipping (symptom page) → /symptoms/transmission-slipping-repair-south-salt-lake
Complete Auto Service                → /services/complete-auto-service-south-salt-lake-ut
```

### Brake Service — Related Services Should Be:
```
Struts                               → /services/strut-replacement-south-salt-lake-ut
Shocks                               → /services/shock-replacement-south-salt-lake-ut
Complete Auto Service                → /services/complete-auto-service-south-salt-lake-ut
```

### CV Joint Repair — Related Services Should Be:
```
Clutch Repair                        → /services/clutch-repair-south-salt-lake-ut
Struts                               → /services/strut-replacement-south-salt-lake-ut
Complete Auto Service                → /services/complete-auto-service-south-salt-lake-ut
```

---

# ISSUE #5 — SCHEMA MARKUP

## The Problem
Zero structured data exists on the site. Google cannot generate rich results (star ratings in search, FAQ dropdowns, business hours, etc.) without schema markup.

## How to Add Schema
Schema is added as a `<script type="application/ld+json">` block inside the `<head>` of each page.
In most frameworks (Astro, Next.js, SvelteKit, etc.) you can add this inside your `<Head>` or layout component.

---

## SCHEMA BLOCK 1 — LocalBusiness (Add to EVERY page, in the global layout/head)

This tells Google who you are, where you are, and what your hours are. It is the most important schema block on the site.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Scott's Auto and Clutch",
  "url": "https://slcautoshop.com",
  "telephone": "+18014854089",
  "image": "https://slcautoshop.com/assets/header-logo-CbiMbQv6.webp",
  "description": "Family-owned auto repair shop specializing in clutch repair, brake service, CV joints, and complete auto service for all makes and models. Serving the Salt Lake Valley since 1990.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "144 W Crystal Ave",
    "addressLocality": "South Salt Lake",
    "addressRegion": "UT",
    "postalCode": "84115",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7177,
    "longitude": -111.8883
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:30"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    "South Salt Lake, UT",
    "Salt Lake City, UT",
    "Murray, UT",
    "Sandy, UT",
    "Millcreek, UT",
    "Holladay, UT",
    "Taylorsville, UT",
    "West Valley City, UT",
    "Cottonwood Heights, UT",
    "Midvale, UT",
    "Draper, UT",
    "West Jordan, UT",
    "South Jordan, UT",
    "Riverton, UT",
    "Herriman, UT",
    "Kearns, UT"
  ],
  "hasMap": "https://www.google.com/maps/dir/?api=1&destination=144%20W%20Crystal%20Ave%2C%20Salt%20Lake%20City%2C%20UT%2084117",
  "sameAs": []
}
</script>
```

**IMPORTANT NOTE on address:** The footer currently says "Salt Lake City, UT 84117" but the business is in South Salt Lake. Use `"addressLocality": "South Salt Lake"` and `"postalCode": "84115"` in schema, and update the footer text to match. Inconsistent NAP (Name, Address, Phone) across the site hurts local rankings.

---

## SCHEMA BLOCK 2 — Service Schema (Add to each individual service page)

Add this to the `<head>` of each service page. Swap out `serviceType` and `description` per page.

### Template:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "REPLACE_WITH_SERVICE_NAME",
  "name": "REPLACE_WITH_SERVICE_NAME in South Salt Lake, UT",
  "provider": {
    "@type": "AutoRepair",
    "name": "Scott's Auto and Clutch",
    "url": "https://slcautoshop.com",
    "telephone": "+18014854089"
  },
  "areaServed": {
    "@type": "City",
    "name": "South Salt Lake, UT"
  },
  "description": "REPLACE_WITH_DESCRIPTION",
  "url": "REPLACE_WITH_PAGE_URL"
}
</script>
```

### Fill In Per Page:

**Clutch Repair:**
```
serviceType: "Clutch Repair"
name: "Clutch Repair in South Salt Lake, UT"
description: "Complete clutch disc, pressure plate, throwout bearing, and flywheel service for all makes and models. Clutch specialists since 1990."
url: "https://slcautoshop.com/services/clutch-repair-south-salt-lake-ut"
```

**CV Joint Repair:**
```
serviceType: "CV Joint Repair"
name: "CV Joint Repair in South Salt Lake, UT"
description: "CV axle replacement, CV joint inspection, CV boot replacement, and axle seal service for all makes and models."
url: "https://slcautoshop.com/services/cv-joint-repair-south-salt-lake-ut"
```

**Brake Service:**
```
serviceType: "Brake Service"
name: "Brake Service in South Salt Lake, UT"
description: "Brake pad replacement, rotor inspection and resurfacing, caliper service, and brake fluid flush for all vehicles."
url: "https://slcautoshop.com/services/brake-service-south-salt-lake-ut"
```

**Timing Chain:**
```
serviceType: "Timing Chain Repair"
name: "Timing Chain Repair in South Salt Lake, UT"
description: "Timing chain replacement, tensioner and guide replacement, timing gear inspection, and oil pump chain service."
url: "https://slcautoshop.com/services/timing-chain-repair-south-salt-lake-ut"
```

**Timing Belt:**
```
serviceType: "Timing Belt Replacement"
name: "Timing Belt Replacement in South Salt Lake, UT"
description: "Preventive timing belt replacement including tensioner, idler pulleys, and water pump for all makes and models."
url: "https://slcautoshop.com/services/timing-belt-replacement-south-salt-lake-ut"
```

**Water Pump:**
```
serviceType: "Water Pump Replacement"
name: "Water Pump Replacement in South Salt Lake, UT"
description: "Water pump replacement, coolant flush, thermostat inspection, and cooling system pressure testing."
url: "https://slcautoshop.com/services/water-pump-replacement-south-salt-lake-ut"
```

**Exhaust Repair:**
```
serviceType: "Exhaust Repair"
name: "Exhaust Repair in South Salt Lake, UT"
description: "Exhaust leak diagnosis, muffler repair and replacement, exhaust pipe replacement, and custom exhaust welding."
url: "https://slcautoshop.com/services/exhaust-repair-south-salt-lake-ut"
```

**Catalytic Converter:**
```
serviceType: "Catalytic Converter Replacement"
name: "Catalytic Converter Repair in South Salt Lake, UT"
description: "Catalytic converter diagnosis, replacement, oxygen sensor inspection, and anti-theft shield installation."
url: "https://slcautoshop.com/services/catalytic-converter-service-south-salt-lake-ut"
```

**Struts:**
```
serviceType: "Strut Replacement"
name: "Strut Replacement in South Salt Lake, UT"
description: "Strut assembly replacement, strut mount inspection, and suspension inspection for improved handling and ride comfort."
url: "https://slcautoshop.com/services/strut-replacement-south-salt-lake-ut"
```

**Shocks:**
```
serviceType: "Shock Absorber Replacement"
name: "Shock Replacement in South Salt Lake, UT"
description: "Shock absorber replacement for cars, trucks, SUVs, and lifted vehicles. Suspension inspection included."
url: "https://slcautoshop.com/services/shock-replacement-south-salt-lake-ut"
```

---

## SCHEMA BLOCK 3 — FAQ Schema (Add to symptom pages — HIGHEST PRIORITY)

This is the single most impactful schema addition. FAQ rich results show up in Google as expandable dropdowns directly in search results, which dramatically increases click-through rates.

Each symptom page already has FAQ questions in the UI. You need to add schema so Google can read them.

Add this inside `<head>` of each symptom page, filling in the actual Q&A content from the page.

### Template:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION TEXT HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER TEXT HERE"
      }
    },
    {
      "@type": "Question",
      "name": "SECOND QUESTION HERE",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SECOND ANSWER HERE"
      }
    }
  ]
}
</script>
```

### Clutch Slipping Page — Ready to Paste:
```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if my clutch is slipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common sign is your engine revving higher than normal without a matching increase in vehicle speed, especially when accelerating uphill or under load. You may also notice a burning smell after driving in traffic or on hills."
      }
    },
    {
      "@type": "Question",
      "name": "Can I still drive with a slipping clutch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short term, yes — but delaying the repair risks damaging your flywheel, which significantly increases the total repair cost. We recommend bringing it in as soon as you notice slipping."
      }
    },
    {
      "@type": "Question",
      "name": "How long does clutch replacement take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clutch replacements are completed same-day or within one business day, depending on the make and model of your vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "How much does clutch replacement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clutch replacement cost varies by vehicle make, model, and whether the flywheel needs resurfacing or replacement. Scott's Auto & Clutch provides a free diagnosis and detailed upfront quote before any work begins. Call (801) 485-4089 for an estimate."
      }
    }
  ]
}
</script>
```

### Apply the same FAQ schema pattern to all 26 symptom pages.
Use the actual questions that already appear collapsed on each page as the FAQ content.

---

## VALIDATION — Do This Before Going Live

After adding all schema, validate using Google's free tools:

1. **Schema validator:** https://validator.schema.org
   - Paste your page URL or paste the raw JSON — it will flag any errors

2. **Google Rich Results Test:** https://search.google.com/test/rich-results
   - Paste any page URL to see if Google can read your FAQ, LocalBusiness, and Service schema
   - If it shows "eligible for rich results" — you're done

3. **Google Search Console → Enhancements tab**
   - After deploying, check here within 1-2 weeks to see if schema is being picked up
   - Any errors will appear here with specific line numbers

---

## PRIORITY ORDER — Do These First

1. **LocalBusiness schema** — one change, applies sitewide, highest impact
2. **FAQ schema on symptom pages** — visible in Google search results immediately after indexing
3. **Meta titles on service pages** — currently almost identical, fixing these helps click-through rates fast
4. **Symptom page → specific service page links** — easy find-and-replace, quick win
5. **Service page → symptom page links** — adds internal link depth
6. **Location page body text hyperlinks** — most time-consuming, do last
