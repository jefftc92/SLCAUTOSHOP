// Brand-specific unique content for SEO depth
const brandContent = {
  'Toyota': {
    intro: "Trusted Toyota repair in South Salt Lake since 1990. We service Corollas, Camrys, Tacomas, 4Runners, Prius, and RAV4s — free diagnosis, written estimate, and transparent pricing well below dealer rates.",
    whatHeading: "Full-Service Toyota Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Toyotas in South Salt Lake since 1990. We handle the full range of mechanical work a Toyota needs over its lifetime: timing service, clutch and manual transmission, automatic and CVT service, hybrid battery diagnostics, brakes, cooling system, suspension, exhaust, and check engine diagnostics. Every Toyota that comes in gets a free diagnosis first — you'll know exactly what your vehicle needs before any work starts.",
    whyIntro: "Most Toyota dealers in Salt Lake are billing $150–175 per hour. Your car gets written up by a service advisor, handed off to a tech you'll never meet, and comes back with a multipoint inspection full of items to approve or decline. At Scott's, it works differently. The mechanic who diagnoses your Toyota is the one who repairs it — same person, start to finish. They explain what they found in plain language and only recommend what your vehicle actually needs. We've been doing it that way in South Salt Lake since 1990.",
    whyUs: [
      { title: "Clutch & Manual Transmission Specialists", desc: "Clutch repair is what this shop was built on. Tacoma owners, 4Runner stick drivers, GR86 and Supra owners — we know Toyota manual drivetrains and have done clutch jobs on these platforms for over three decades." },
      { title: "Toyota-Spec Fluids Only", desc: "Toyota ATF, CVT fluid, and coolant specs are not interchangeable with generic alternatives. We stock the correct fluid for every Toyota transmission and don't use 'compatible' substitutes that cause long-term wear." },
      { title: "We Diagnose, Not Guess", desc: "We inspect what your specific vehicle shows — not a mileage checklist. If your Toyota's fluid is fine, we tell you. If your hybrid battery needs testing before anyone recommends replacement, we test it first. Free diagnosis every time." },
      { title: "Dealer Pricing Without the Dealer", desc: "Toyota dealers in the Salt Lake area charge $150–175/hr. Our rate is meaningfully lower. Same quality parts, same level of care — without the service department markup." }
    ],
    whenContent: [
      "Bring your Toyota in any time something feels or sounds different — a new noise, a warning light, a brake pedal that's softer than usual, or a shift that hesitates. Toyotas are reliable enough that problems often get ignored until they're hard to miss. Catching something early almost always costs less than waiting. There's no charge to find out what's going on before any decision is made.",
      "Routine service matters just as much. Oil changes, brake checks, and scheduled fluid services are what keep a Camry, Corolla, or Tacoma going to high mileage. If you're not sure what's due or where things stand, bring it in and we'll give you a clear picture at no cost to look."
    ],
    whoContent: {
      heading: "Who to Trust for Toyota Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're not a chain. The mechanic who diagnoses your Toyota is the same one who works on it and explains the repair when you pick it up — same person, start to finish.",
        "Toyota service has been part of what we do for over 35 years. When you bring your Toyota here, you get a straight answer about what your vehicle actually needs — not a list of services based on mileage thresholds, and not a quote from someone who hasn't looked at your specific car."
      ]
    },
    process: [
      { step: 1, title: "You Tell Us What's Going On", desc: "A noise, a warning light, a feel that's changed, or a scheduled service due. The more detail the better, but 'something feels off' is enough to start." },
      { step: 2, title: "We Diagnose Before We Quote", desc: "Free diagnostic inspection on every Toyota. We road test, read fault codes, and check the relevant systems before recommending anything." },
      { step: 3, title: "We Walk You Through What We Found", desc: "Clear explanation of what's worn, failing, or due, and what each repair involves. Written estimate before any work begins." },
      { step: 4, title: "We Do Only the Work You Approve", desc: "Only what the diagnosis shows is needed. If something can wait, we tell you it can wait. No menu-based services." },
      { step: 5, title: "Road Test and Handoff", desc: "We verify the repair under real driving conditions before the car goes back to you, and walk you through what was done at pickup." }
    ],
    commonRepairs: [
      { slug: "timing-belt-replacement-near-south-salt-lake-ut", name: "Timing Belt Replacement", desc: "Critical for belt-equipped Toyota engines — Camry, RAV4, Tacoma V6, Highlander (pre-2006)." },
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain Service", desc: "Chain stretch and VVT issues on high-mileage post-2006 Toyota engines." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Toyota V6 and some 4-cylinder engines are prone to water pump seal failure." },
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch Repair", desc: "Tacoma, 4Runner, GR86, Supra, and older Corolla and Camry stick shifts." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Pads, rotors, calipers, and fluid flush for all Toyota models." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Joint Repair", desc: "Clicking-on-turns axle and boot replacement — a common Toyota wear item." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Toyota V6 manifolds crack — we weld or replace as needed." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Strut Replacement", desc: "Worn struts affect handling and braking distance. Inspection and replacement." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full diagnostic and repair work across all Toyota systems." }
    ],
    tips: [
      'Toyota engines are built around specific oil grades and change intervals. Full synthetic at the correct viscosity, changed at Toyota\'s recommended interval (typically 7,500–10,000 miles), is one of the most effective investments in long-term engine life. If you do a lot of mountain driving, towing, or stop-and-go in Salt Lake traffic, shorter intervals are worth it.',
      'Toyota AWD and 4WD models — 4Runner, Tacoma, RAV4 AWD, Highlander AWD — have differential and transfer case fluid that degrades faster than engine oil. Factory intervals assume mostly highway driving. If your Toyota sees regular off-road use, winter conditions, or towing on canyon grades, shorten those fluid change intervals.',
      'Toyota cooling systems are reliable, but coolant degrades over time and loses its corrosion inhibitors. Internal rust and thermostat housing failure follow from running degraded coolant too long. A coolant flush at the manufacturer\'s interval — or every 30,000 miles if you\'re not sure when it was last done — prevents those problems.',
      'Hybrid Toyota owners: noticeable fuel economy decline is often the first sign of a battery pack losing capacity. If your Prius, RAV4 Hybrid, or Camry Hybrid isn\'t getting the economy it used to, it\'s worth having the hybrid battery tested before the problem progresses to a full system warning light.'
    ],
    faqs: [
      {q: 'Does my Toyota have a timing belt or a timing chain — and why does it matter?', a: 'It depends on the engine, and it matters a lot. Belt-equipped Toyotas — generally Camry, RAV4, Tacoma, and Highlander models with 4-cylinder engines before 2006 and V6 engines before 2005 — require belt replacement at 90,000 miles. These are interference engines: if the belt snaps while running, the pistons and valves collide. The engine is destroyed. There\'s no warning before it happens, which is why the service interval isn\'t optional. Most Toyotas built after 2006 use timing chains, which don\'t have a fixed replacement interval but develop stretch over time. A cold-start rattle that quiets as the engine warms up is the typical first sign, sometimes paired with a check engine light for camshaft timing. If you\'re not sure which your Toyota has, we can look it up by VIN in one minute.'},
      {q: 'How often should I change the oil in my Toyota?', a: 'For modern Toyotas with full synthetic, 7,500–10,000 miles is the manufacturer\'s guidance. If you do a lot of stop-and-go in Salt Lake traffic, regularly tow, or spend weekends on canyon grades, we recommend 5,000–7,500 mile intervals. It\'s cheap insurance on an engine built to last 200,000+ miles.'},
      {q: 'My Toyota Prius or RAV4 Hybrid warning light is on — what does that mean?', a: 'The triangle with an exclamation mark typically indicates a hybrid system fault. The most common cause is a declining battery pack, but inverter and cooling system issues can also trigger it. We test the battery pack and individual cell health before recommending anything. A flashing red triangle indicates a more urgent system failure — don\'t ignore it.'},
      {q: 'When does a Toyota CVT transmission need service?', a: 'Toyota says "lifetime fluid" on many CVT-equipped models, but real-world experience doesn\'t support that. We recommend a CVT fluid change every 30,000–45,000 miles for normal use, sooner for vehicles that do a lot of mountain driving or towing. Degraded CVT fluid causes a shudder during light-load acceleration that gets worse over time.'},
      {q: 'When does a repair make more sense than a new car?', a: 'Toyota owners face this question more than most — a well-maintained Camry, Corolla, or Tacoma at 180,000 miles is genuinely still a good vehicle. A car payment on a replacement runs $500–700/month in today\'s market ($6,000–8,400 per year). Most Toyota repairs — even significant ones like a timing chain job, a clutch replacement, or a water pump — cost a fraction of that. Unless a repair approaches the vehicle\'s current market value, fixing it is usually the rational financial move. The Tacoma and 4Runner are in their own category — their resale value holds so well that repairs are almost always worth doing, even into high mileage. If we ever think the math doesn\'t work in your case, we\'ll tell you straight.'},
      {q: 'Is it worth repairing a high-mileage Toyota?', a: 'Usually yes. Toyota engines and transmissions are among the most durable made. A well-maintained Camry, Corolla, or Tacoma at 150,000–200,000 miles is often worth maintaining. Repair costs typically compare favorably to a car payment, and these vehicles routinely go 250,000+ miles with proper maintenance. If a repair costs more than the vehicle\'s market value, we\'ll tell you honestly.'},
      {q: 'Do you work on older Toyota models?', a: 'Yes. We service Toyotas from all eras — 1990s Camrys and Corollas, older 4Runners and Tacomas, early Prius models. Older Toyotas can have parts availability challenges, but for most mechanical work we can source what\'s needed. Call us if you have questions about a specific year and model.'},
      {q: 'Why is my Toyota making a clicking or grinding noise?', a: 'Clicking during turns typically points to CV axles — a common Toyota wear item. Grinding when braking usually means brake pads worn to metal contact. A cold-start knock or rattle that quiets as the engine warms up points to timing chain or VVT system issues. We diagnose the actual source before recommending any repair.'}
    ]
  },
  'Honda': {
    whatHeading: "Full-Service Honda Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Hondas in South Salt Lake since 1990 — Civics, Accords, CR-Vs, Pilots, Odysseys, and manual-transmission models from every era. We handle VTEC timing systems, Honda-spec ATF and CVT fluid service, direct-injection carbon cleaning, clutch and manual transmission work, and everything else a Honda needs over its lifetime. Every Honda we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Honda dealers in the Salt Lake Valley are billing in the range of $150–170 per hour, and the service experience follows the standard chain-dealer model: a service advisor writes up the job, hands it to a technician you don't interact with, and returns a multipoint inspection with a column of items for you to approve. At Scott's, one mechanic diagnoses your Honda and does the repair. Same person throughout. They explain what they found in plain language and recommend only what the car actually needs — not a list of services based on mileage thresholds. Honda manual transmissions and clutch work have been core to what we do since 1990. We've also handled enough Honda AC compressor failures to know the correct way to service the system when one fails — complete flush and replacement, because metal debris travels through the entire AC circuit. We bring that depth of platform knowledge to every Honda we touch.",
    whoContent: {
      heading: "Who to Trust for Honda Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated at the same South Salt Lake location since 1990. The mechanic who looks at your Honda is the one who repairs it and explains it to you at pickup — there's no service advisor between you and the person doing the work.",
        "Honda has been a consistent part of our workload for over 35 years — Civics, Accords, CR-Vs, Pilots, and everything in between. When you bring your Honda here, you get a straight answer about what your car actually needs."
      ]
    },
    whenContent: [
      "Bring your Honda in if something feels or sounds off — a shudder when accelerating, a pedal or shifter that's changed, a burning smell from the engine bay, or a warning light. Honda issues often start subtle and get gradually worse. There's no charge to find out what's causing it — we diagnose before we recommend anything.",
      "Routine service is what keeps Hondas running reliably well past 200,000 miles. If you're not sure what's due or where your vehicle stands, bring it in and we'll walk you through the current condition honestly."
    ],
    process: [
      { step: 1, title: "Tell Us What You're Experiencing", desc: "A sound, a feel, a warning light, a smell — or just a service that's due. Honda issues often present subtly at first. The more you can describe, the faster we find it." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "We road test, read fault codes, check fluid condition, and inspect the relevant systems before recommending anything. We diagnose the actual cause, not the most common guess." },
      { step: 3, title: "Clear Explanation of What We Found", desc: "We tell you what's worn, what's failing, and what the repair involves — in plain language. Written estimate before any work begins." },
      { step: 4, title: "Only the Work Your Honda Actually Needs", desc: "We don't sell scheduled services by mileage if the car doesn't need them. If a fluid is still good, we tell you. If a repair can safely wait, we say so." },
      { step: 5, title: "Road Test and Walkthrough at Pickup", desc: "We verify the repair under real driving conditions before returning the car, and walk you through what was done when you pick it up." }
    ],
    commonRepairs: [
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch Repair", desc: "Civic Si, Accord manual, CR-Z, and Fit clutch jobs — flywheel inspection and dual-mass to single-mass conversion available." },
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain Service", desc: "VTEC solenoid service and timing chain wear on high-mileage K-series and R-series Honda engines." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Honda four-cylinder and V6 water pump replacement — often done with timing belt service on older belt-equipped models." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Rear pads on Civics, Accords, and CR-Vs wear faster than expected — we check all four corners at every service." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Joint Repair", desc: "Honda CV axle boot cracking and inner joint wear — catching it at the boot stage saves the full axle." },
      { slug: "catalytic-converter-service-near-south-salt-lake-ut", name: "Catalytic Converter Service", desc: "Honda V6 converter efficiency codes — we diagnose upstream O2 sensor vs. converter failure before recommending replacement." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Honda exhaust manifold cracks and flange leaks — common on high-mileage V6 Accords and Pilots." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full mechanical service across all Honda models — diagnosis, repair, and fluid service." }
    ],
    intro: "Honest Honda repair in South Salt Lake since 1990. We diagnose your Civic, Accord, CR-V, Pilot, or Odyssey first, explain exactly what we found, and give you a written estimate before any work begins — at prices well below dealer rates. One mechanic, transparent process, no upsells.",
    whyUs: [
      { title: "Honda Transmission Knowledge", desc: "Honda transmissions require Honda-spec fluid — full stop. We stock DW-1 ATF and the correct CVT fluid, and we know the difference between a transmission problem and a fluid problem." },
      { title: "VTEC and GDI Experience", desc: "VTEC solenoid issues, carbon buildup on direct-injection engines, and intake valve deposits are common Honda repair territory. We know where to look and what the repair involves." },
      { title: "Manual Transmission Specialists", desc: "Honda manual transmissions are clutch-specific — we're clutch specialists. From throw-out bearing replacement to full clutch jobs, we've done them all on Honda platforms." },
      { title: "Free Diagnosis", desc: "Every Honda repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "Honda's VTEC System and Direct Injection: What High-Mileage Owners Need to Know",
        paras: [
          "Honda's VTEC variable valve timing system is oil-pressure driven — it switches cam profiles based on engine speed and load, and it requires clean, properly spec'd oil to function correctly. VTEC solenoid gaskets develop oil leaks over time that drip onto exhaust components, and the solenoids themselves can develop electrical faults that trigger check engine codes. These are straightforward repairs, but diagnosing them correctly before replacing parts matters.",
          "Honda's more recent engines use direct injection, which accumulates carbon on the intake valves over time — GDI engines don't wash the valves with fuel the way older port-injection designs do. As carbon builds up, idle quality, throttle response, and fuel economy all suffer gradually. An intake cleaning service every 50,000-60,000 miles restores performance on affected engines. We check which injection system your Honda uses before making any maintenance recommendations."
        ]
      },
      {
        heading: "Honda Transmission Fluid: Why the Specification Matters More Than on Most Vehicles",
        paras: [
          "Honda's automatic transmissions are more sensitive to fluid type and condition than most other manufacturers' units. Honda-spec DW-1 ATF has a specific friction modifier package that Honda's transmission clutch packs are tuned to work with. Using a 'universal' ATF — even one marketed as Honda-compatible — causes shift quality to change as the fluid interacts differently with the clutch pack material. Over time, incorrect fluid accelerates clutch pack wear.",
          "The same principle applies to Honda CVT fluid and to the differential fluid in AWD models. We don't use generic alternatives on any Honda service. The fluid cost difference is small; the potential for premature transmission wear is not."
        ]
      },
      {
        heading: "Servicing Your Honda in Utah",
        paras: [
          "Honda's braking system distributes more force to the rear brakes than many vehicles — rear pad wear on Civics, Accords, and CR-Vs tends to be faster than owners expect. We check all four corners at every service visit, not just the fronts, so rear brake wear doesn't catch you off guard.",
          "Utah's altitude affects combustion slightly on naturally aspirated engines, and the temperature cycling between seasons stresses rubber components — hoses, belts, and boots — more than moderate climates do. For AWD Honda models, the rear differential and transfer fluid should be checked periodically; it's a service that often gets overlooked but is meaningful on vehicles used in mountain terrain or winter conditions."
        ]
      }
    ],
    issues: [
      {t:'Manual Transmission Clutch Judder',d:'Honda manual transmissions can develop clutch judder and vibration, often from dual-mass flywheel wear. We convert to a single-mass flywheel setup for smoother, more durable engagement.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'AC Compressor Failure',d:'Honda AC compressors are prone to failure that sends metal debris through the entire system, requiring a full flush and compressor replacement — not just a component swap.'},
      {t:'VTEC Solenoid Oil Leaks',d:'Honda VTEC variable timing solenoid gaskets develop oil leaks that drip onto exhaust components, causing burning smells and smoke. It\'s a common and straightforward repair.'},
      {t:'CV Axle Boot Wear',d:'Honda CV axle boots are prone to cracking and tearing, allowing grease to escape and contaminate the joint. Catching it early means replacing just the boot rather than the entire axle.',href:'/services/cv-joint-repair-near-south-salt-lake-ut'},
      {t:'Transmission Fluid Sensitivity',d:'Honda automatic transmissions are particularly sensitive to incorrect or degraded fluid. Using non-Honda-spec ATF or running fluid too long causes shift quality deterioration and accelerated wear.'},
      {t:'Power Steering Hose Leaks',d:'Honda hydraulic power steering systems develop high-pressure hose leaks and pump seal failures over time. Low fluid causes whining noise and eventually steering assist loss.'},
      {t:'Coolant Thermostat Failure',d:'Honda thermostats can fail in either direction — causing overheating or an engine that runs too cool. Both conditions affect performance, fuel economy, and long-term engine health.'}
    ],
    tips: [
      'Honda engines are engineered around specific OEM-spec fluids. Using off-brand substitutes for engine oil, coolant, or transmission fluid — even ones labeled "Honda compatible" — can lead to shift quality problems and accelerated wear. Paying a little more for the right fluid now saves a lot more later.',
      'Honda\'s brake system tends to distribute more braking force to the rear than many other makes. This means rear brake pads often wear faster than you might expect. A quick rear-pad check at every oil service keeps you from being surprised.',
      'Utah\'s altitude and temperature swings put real stress on cooling systems. Honda cooling systems are reliable, but low coolant concentration or a worn thermostat shows up fastest during summer canyon driving and cold winter mornings. An annual cooling system check is worth doing.',
      'Honda drivetrains — whether front-wheel drive or all-wheel drive — rely on clean, properly filled differentials and transfer cases. If you notice any hesitation or vibration during tight turns, that\'s often the first sign that drivetrain fluid is overdue.'
    ],
    faqs: [
      {q:'How often should I change my Honda\'s oil?',a:'Most modern Hondas can go 7,500-10,000 miles on full synthetic under normal conditions. For vehicles that do a lot of short trips, tow, or see mountain driving, we recommend 5,000-7,500 mile intervals. Honda engines are reliable — keeping the oil fresh is one of the most cost-effective things you can do.'},
      {q:'What transmission fluid does my Honda need?',a:'Honda automatic transmissions require Honda-spec DW-1 ATF. Generic "universal" transmission fluids cause shift quality deterioration and long-term wear. We always use the correct spec — it\'s not worth compromising on.'},
      {q:'Why does my Honda vibrate or shudder when shifting?',a:'Shuddering during shifts on Honda automatics is often caused by degraded transmission fluid or incorrect fluid type. On manual Hondas, it\'s typically clutch or flywheel related. We diagnose the exact cause before recommending any repair.'},
      {q:'How long do Honda engines last?',a:'Honda engines are known for longevity — 200,000-300,000 miles is achievable with proper maintenance. The key factors are regular oil changes with the correct spec fluid, timing belt or chain service at the right interval, and addressing leaks before they become serious.'},
      {q:'Why is my Honda\'s check engine light on?',a:'Common causes we see include VTEC solenoid issues, catalytic converter efficiency codes, purge valve failure, and oxygen sensor wear. We perform a full diagnostic before recommending any part replacement — the code tells us where to look, not necessarily what to replace.'}
    ]
  },
  'Ford': {
    whatHeading: "Full-Service Ford Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Fords in South Salt Lake since 1990 — F-150s, Mustangs, Explorers, and the full range of Ford trucks and SUVs. We handle EcoBoost turbocharged engine service, timing and ignition work, clutch and manual transmission repair, PowerShift and automatic transmission fluid service, and the drivetrain maintenance that Utah canyon grades demand on a shorter schedule than the factory suggests. Every Ford we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Ford dealers in Salt Lake are running at $150–175 per hour, and F-150 service at a dealer often involves a service advisor upsell list that reads like a menu rather than a diagnosis. We do it differently. One mechanic looks at your Ford, finds the actual problem, explains it in plain language, and does the repair. Utah's driving conditions change what Ford truck maintenance looks like — sustained high-load climbing on Parleys Canyon or Big Cottonwood degrades transmission fluid faster than flat-highway driving, and Ford's extended service intervals assume the latter. EcoBoost turbo systems and Ford V8 exhaust manifold stud extraction require hands-on experience; we've dealt with enough seized 5.4L spark plugs and cracked Coyote cam phasers to handle them correctly without making the job bigger than it has to be.",
    whoContent: {
      heading: "Who to Trust for Ford Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated at the same South Salt Lake location since 1990. There's no service advisor between you and the mechanic — the person who diagnoses your Ford is the one who repairs it and walks you through the job at pickup.",
        "Ford has been a big part of our workload since the shop opened — trucks, Mustangs, SUVs, and the full lineup. We give you a straight answer about what your vehicle actually needs and what can safely wait."
      ]
    },
    whenContent: [
      "Bring your Ford in if you notice a burning smell, a new tick or knock from the engine, a shift that doesn't feel right, or a clutch pedal that's getting soft. Utah's canyon driving puts real demands on Ford trucks and SUVs — these symptoms are worth diagnosing early rather than watching get worse. Free diagnosis before any recommendation.",
      "If you tow or haul regularly on Utah's mountain grades, your truck works harder than most factory service schedules assume. Bring it in and we'll give you an honest picture of where things stand — at no cost to look."
    ],
    process: [
      { step: 1, title: "Describe What Your Ford Is Doing", desc: "A noise, a feel, a warning light, a clutch or shift behavior that's changed. F-150 owners: tell us about towing load and how often you're on canyon grades — it affects how we read the drivetrain." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "Road test, fault code scan, fluid inspection, and system-specific checks before we recommend anything. On V8 engines with exhaust ticking, we listen carefully to confirm the source." },
      { step: 3, title: "Written Estimate and Plain Explanation", desc: "We tell you what we found, what the repair involves, and what it costs. No work starts until you approve the estimate." },
      { step: 4, title: "We Repair Only What's Needed", desc: "If Ford's extended service interval is fine for how you use the truck, we say so. If your canyon driving warrants a shorter fluid change schedule, we explain why." },
      { step: 5, title: "Road Test and Handoff", desc: "We verify the repair under real driving conditions before the vehicle goes back to you, and walk you through what was done." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain / Cam Phaser Service", desc: "Coyote 5.0L cam phaser wear and EcoBoost timing chain cover oil leaks — cold-start rattle is the first sign." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Manifold Stud Repair", desc: "Broken manifold studs on Ford V8 engines — careful extraction and thread restoration without head damage." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Plastic-impeller Ford water pumps fail predictably — we replace with updated designs that address the known pattern." },
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch Repair", desc: "Mustang, Ranger, and older F-150 manual transmission clutch jobs — hydraulic system inspection included." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "F-150 and Mustang brake pad, rotor, and caliper service — heavy towing wears brakes faster on canyon grades." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Strut Replacement", desc: "Explorer, Edge, and Escape strut wear — handling and braking distance both suffer when struts are gone." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Joint Repair", desc: "Ford AWD and 4WD CV axle wear — clicking on turns or shuddering under load." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full diagnostic and repair across all Ford models and drivetrains." }
    ],
    intro: "Independent Ford repair in South Salt Lake since 1990. We service F-150s, Mustangs, Explorers, and the full Ford lineup — free diagnosis before any work starts, written estimate, and pricing well below dealer rates.",
    whyUs: [
      { title: "EcoBoost Experience", desc: "Turbo carbon buildup, wastegate rattle, timing chain cover oil leaks, and intercooler issues — we've seen every EcoBoost failure pattern and know how to diagnose the actual source." },
      { title: "F-150 and Truck Expertise", desc: "Ford truck service in Utah is different from highway driving. We understand what towing, hauling, and mountain grades do to transmissions and drivetrains — and we service them accordingly." },
      { title: "V8 Specialists", desc: "Broken exhaust manifold studs, two-piece spark plug extraction, and cam phaser wear are routine for us. We have the tools and technique to handle Ford V8 repairs correctly." },
      { title: "Free Diagnosis", desc: "Every Ford repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "EcoBoost Engines: Higher Output With Higher Maintenance Expectations",
        paras: [
          "Ford's EcoBoost lineup — 1.5L, 2.0L, 2.3L, and 3.5L — uses turbocharging and direct injection to produce V8-like output from smaller displacement. The trade-off is that turbocharged engines put more demand on engine oil than naturally aspirated engines do. The turbocharger is oil-cooled, and degraded oil accelerates bearing wear inside the turbo before it affects the rest of the engine. For most Utah drivers who use canyon grades regularly, we recommend 5,000-7,500 miles on full synthetic.",
          "EcoBoost engines also develop carbon buildup on intake valves from direct injection, and timing chain cover oil leaks are a common failure on high-mileage 2.7L and 3.5L engines. These are known patterns — they show up predictably and the repairs are straightforward when diagnosed correctly. Oil consumption, a slight rough idle, or a burning smell are worth investigating rather than waiting to see if they get worse."
        ]
      },
      {
        heading: "Ford V8 Service: What Experienced Mechanics Know",
        paras: [
          "Ford's modular V8 engines — the 5.0L Coyote in F-150s and Mustangs, and earlier 4.6L and 5.4L Triton engines in trucks — have two well-known service issues that require experience to address correctly. The first is broken exhaust manifold studs: these studs crack from thermal cycling and create a distinct ticking sound, especially when cold. Extraction requires careful technique to avoid damaging the cylinder head threads. The second is two-piece spark plug seizure on the 5.4L Triton — these plugs are prone to seizing and breaking during removal, which can damage the head if not handled correctly.",
          "Coyote 5.0L engines also have a known cam phaser and timing chain wear pattern on early production years. A rattle at cold start that clears as the engine warms up is worth investigating — cam phaser failure on an interference engine leads to valve-to-piston contact if ignored."
        ]
      },
      {
        heading: "Ford Truck Service in Utah's Mountain Terrain",
        paras: [
          "Utah's mountain grades change what Ford truck maintenance looks like. F-150s, Rangers, and Expeditions used for towing on canyon roads see significantly harder drivetrain use than highway driving. Transmission fluid degrades faster under sustained high-load conditions, and Ford's 'lifetime fill' transmission fluid claim doesn't apply to vehicles that actually tow. We recommend 30,000-mile transmission fluid changes for trucks used for hauling or towing, and 45,000 miles for regular highway use.",
          "Differential and transfer case fluid in four-wheel-drive models should be serviced on similar intervals. In Utah's winters, road salt accelerates corrosion on steel brake lines and transmission cooler lines — annual undercarriage inspection catches deterioration before it becomes a safety or repair cost issue."
        ]
      }
    ],
    issues: [
      {t:'EcoBoost Turbo Carbon and Boost Issues',d:'Ford turbocharged engines can develop carbon buildup, wastegate rattle, and boost pressure problems over time. We diagnose turbo systems thoroughly rather than replacing components unnecessarily.'},
      {t:'PowerShift Dual-Clutch Shudder',d:'Ford\'s dual-clutch transmissions developed a reputation for shuddering and slipping under light acceleration. We service clutch packs and reprogram the transmission control module.',href:'/symptoms/vibration-when-accelerating'},
      {t:'Exhaust Manifold Stud Failure',d:'Ford V8 engines frequently develop cracked or broken exhaust manifold studs, causing a ticking sound especially when cold and eventual exhaust leaks. We extract broken studs and restore proper sealing.',href:'/services/exhaust-repair-near-south-salt-lake-ut'},
      {t:'Cooling System Water Pump Failure',d:'Ford engines use water pumps with plastic impellers that crack and cause coolant loss. We replace with updated designs that address the failure pattern.',href:'/services/water-pump-replacement-near-south-salt-lake-ut'},
      {t:'Spark Plug Seizure on V8 Engines',d:'Ford V8 engines are prone to spark plug seizure due to a two-piece plug design. Removal requires specialized tools and technique to avoid breaking the plug and damaging the cylinder head.'},
      {t:'Transmission Fluid Neglect',d:'Ford automatic transmissions are often labeled "lifetime fill" but benefit significantly from fluid changes every 30-60K miles under real-world driving conditions, especially in Utah\'s mountains.'},
      {t:'Clutch Hydraulic System Leaks',d:'Ford manual transmission clutch hydraulic systems develop internal leaks in the slave cylinder, causing a soft or spongy pedal and difficulty engaging gears cleanly.'}
    ],
    tips: [
      'Ford turbocharged engines — whether inline-four or V6 — benefit from shorter oil change intervals than naturally aspirated engines. The turbocharger is oil-cooled and puts more demand on oil quality. We recommend 5,000-7,500 miles on full synthetic.',
      'Ford trucks used for towing or hauling in Utah\'s mountains see significantly harder drivetrain use than flat-highway driving. Transmission fluid, differential fluid, and transfer case fluid should be changed more frequently than Ford\'s standard intervals suggest.',
      'Ford V8 engines are excellent powerplants that benefit from proactive exhaust maintenance. Manifold stud integrity and catalytic converter health should be checked periodically — both affect emissions performance and engine efficiency.',
      'Ford cooling systems are reliable but the plastic components age and crack over time. A pressurized cooling system test every couple of years identifies weak points before they cause a roadside failure.'
    ],
    faqs: [
      {q:'Are Ford EcoBoost engines reliable?',a:'EcoBoost engines are generally reliable but more maintenance-intensive than naturally aspirated engines. Carbon buildup, turbo components, and intercooler health all need periodic attention. With proper maintenance, they run well past 200,000 miles.'},
      {q:'What causes the ticking sound in my Ford?',a:'Ford V8 engines commonly develop ticking from broken exhaust manifold studs — very common and worsens over time. On turbocharged engines, wastegate rattle can sound similar. We diagnose which system is responsible before recommending any repair.'},
      {q:'How often should I change my Ford\'s transmission fluid?',a:'If you tow, haul, or drive Utah mountain roads regularly, every 30,000 miles. Ford\'s extended service intervals assume flat-highway driving with no load — conditions that don\'t apply to most Utah truck owners.'},
      {q:'Why is my Ford losing coolant without visible leaks?',a:'Coolant loss without puddles under the car often means an internal coolant leak — a water pump weep, a small hose seep, or in more serious cases a head gasket issue. We pressure-test the cooling system to locate the source.'},
      {q:'My Ford\'s clutch pedal feels soft. What does that mean?',a:'A soft or spongy clutch pedal usually indicates a failing hydraulic slave cylinder. It may still engage now, but it will get worse — a complete failure leaves you unable to disengage the clutch. Better to address it before that happens.'}
    ]
  },
  'Chevrolet': {
    whatHeading: "Full-Service Chevrolet Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Chevrolets in South Salt Lake since 1990 — Silverados, Tahoes, Suburbans, Colorados, Camaros, and the full GM truck and SUV lineup. We handle Chevy V8 engine service including Active Fuel Management lifter repairs and AFM delete, automatic transmission fluid service, clutch and manual transmission work, and the drivetrain maintenance that Utah towing and canyon driving demand. Every Chevrolet starts with a free diagnosis — you know exactly what we found, what it costs, and why it's needed before any work begins.",
    whyIntro: "Chevrolet dealers in the Salt Lake area are billing $150–170 per hour, and Silverado service at a dealer often comes with a multipoint inspection list that recommends services based on mileage rather than the condition of your specific truck. At Scott's, one mechanic diagnoses your Chevy and performs the repair — no service advisor layer, no quota for services sold. AFM lifter failure on 5.3L and 6.2L engines is one of the most common major repairs we do, and we approach it correctly: all lifters replaced, AFM system disabled through programming, and the root cause addressed rather than just the symptomatic one. Utah's mountain driving puts harder demands on Chevy truck drivetrains than flat-highway use — transmission fluid, differential fluid, and undercarriage corrosion from road salt all need attention on a schedule that matches how Utah trucks actually get used.",
    whoContent: {
      heading: "Who to Trust for Chevrolet Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. The mechanic who diagnoses your Chevrolet is the one who repairs it — same person from inspection through pickup. You'll talk directly to the person who touched your vehicle.",
        "Chevrolet trucks and SUVs have been a big part of our workload for over 35 years. We know the failure patterns on these platforms and give you a straight answer about what your vehicle actually needs — no mileage-based upsell list."
      ]
    },
    whenContent: [
      "Bring your Chevy in if you hear a tick or knock at startup, notice you're adding more oil between changes than you used to, or feel a shudder at highway speed during light-throttle cruising. These are patterns worth diagnosing early — the longer they run, the more they can spread. Free diagnosis before any work is recommended.",
      "Chevy truck owners: if you tow or haul regularly on Utah's mountain grades, your drivetrain works harder than factory service intervals account for. Bring it in and we'll give you an honest picture of where things actually stand."
    ],
    process: [
      { step: 1, title: "Tell Us What Your Chevy Is Doing", desc: "A tick, a shudder, a check engine light, a fluid leak, or a service overdue. For trucks that tow: tell us what load and how often — it changes the drivetrain picture." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "We road test, read fault codes, check fluid condition, and inspect the specific systems your symptoms point to. On V8s with ticking, we listen for AFM lifter collapse vs. exhaust vs. valve train noise." },
      { step: 3, title: "Plain-Language Explanation of What We Found", desc: "We tell you what's wrong, what the correct repair is, and what it costs before any work starts. Written estimate every time." },
      { step: 4, title: "Only the Repair Your Chevy Actually Needs", desc: "We don't recommend AFM delete on a healthy engine as a precaution. We recommend it when the lifters are already failing or when you've made the choice to prevent recurrence after a repair." },
      { step: 5, title: "Road Test and Handoff", desc: "We verify the repair under driving conditions before the truck goes back to you, and walk you through what was done at pickup." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain / Lifter Service", desc: "AFM lifter failure on 5.3L and 6.2L V8s — full lifter replacement with AFM delete programming. Also V6 timing chain stretch on high-mileage engines." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Manifold Repair", desc: "Broken manifold bolts on Chevy truck engines — extraction and thread restoration without head damage." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Silverado and Tahoe water pump replacement — plastic impeller failure and coolant leak diagnosis." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Silverado and Tahoe pad, rotor, and caliper service — towing on canyon grades wears brakes harder than highway use." },
      { slug: "shock-replacement-near-south-salt-lake-ut", name: "Shock Replacement", desc: "Chevy truck rear shock wear — common on Silverados used for hauling, affects ride and load stability." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Strut Replacement", desc: "Equinox, Traverse, and Colorado front strut service — handling changes and tire wear are the first signs." },
      { slug: "welding-services-near-south-salt-lake-ut", name: "Undercarriage Welding", desc: "Road salt corrosion repair on Chevy truck frames, exhaust hangers, and brake line brackets." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full diagnostic and repair work across all Chevrolet models and engine families." }
    ],
    intro: "Trusted Chevrolet repair in South Salt Lake since 1990. We service Silverados, Tahoes, Colorados, Equinoxes, and the full Chevy lineup — free diagnosis, written estimate, and honest pricing without the upsell list.",
    whyUs: [
      { title: "AFM/DOD Lifter Expertise", desc: "We handle full AFM lifter replacement and can disable the system through programming to eliminate the most common failure point on Chevy V8 engines. Done right, this is a lasting repair." },
      { title: "GM Transmission Knowledge", desc: "Torque converter shudder on 8-speed and 10-speed GM transmissions has a specific fluid fix. We know the correct updated spec and the service procedure — no guesswork." },
      { title: "Truck and Towing Experience", desc: "Chevy truck service in Utah's mountains is different from flat-highway service. We understand what hard use does to transmissions and drivetrains and service them accordingly." },
      { title: "Free Diagnosis", desc: "Every Chevrolet repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "AFM/DOD: Chevrolet's V8 Cylinder Deactivation and Its Consequences",
        paras: [
          "General Motors' Active Fuel Management — also called Dynamic Fuel Management on newer engines — deactivates four cylinders at light throttle to reduce fuel consumption. The system uses specialized lifters that can collapse on demand. The problem is that these lifters are more failure-prone than standard lifters, and when they collapse under load rather than command, the result is misfires, engine ticking, and oil consumption. Engine oil condition matters more on AFM engines — the system is sensitive to oil quality, and using non-Dexos1 approved oil increases the failure rate.",
          "When AFM lifters fail, the correct repair is replacing all lifters — not just the collapsed ones — and in most cases disabling the AFM system through programming. AFM delete prevents recurrence and costs a fraction of what a repeat lifter failure would cost. The 5.3L and 6.2L engines in Silverados, Tahoes, Suburbans, and Colorado trucks are the most common platforms where we perform this work."
        ]
      },
      {
        heading: "GM's 8-Speed and 10-Speed Transmissions: The Shudder Fix",
        paras: [
          "GM's 8L90 and 10L90 automatic transmissions — used widely in Chevrolet trucks and SUVs — developed a torque converter shudder that feels like driving over rumble strips at light throttle and low speed. GM issued a technical service bulletin and released a revised transmission fluid specification to address it. The fix is a complete fluid flush using the updated spec fluid — in most cases this resolves the shudder completely without transmission disassembly.",
          "The underlying cause is the torque converter clutch's friction material reacting unfavorably with the original fluid formulation. This is not a transmission wear issue in most cases — it's a fluid chemistry issue with a known solution. If your Chevrolet truck or SUV shudders at light throttle between about 25-55 mph, this is almost certainly what you're experiencing."
        ]
      },
      {
        heading: "Chevrolet Truck Service for Utah's Mountain Use",
        paras: [
          "Chevrolet trucks are among the most common vehicles in Utah, and they're used for real work here — towing fifth wheels through Parleys Canyon, hauling loads on I-215, and off-road driving in the Uintas. Each of these use cases puts harder demands on drivetrain fluids than flat-highway driving does. Transmission fluid on trucks that tow regularly should be changed every 30,000 miles, not the extended factory interval.",
          "Utah's winters add road salt to the equation. Steel transmission cooler lines, brake lines, and exhaust mounting hardware corrode in road salt environments. We inspect the undercarriage for corrosion at every service on Chevrolet trucks that see regular winter use — catching a deteriorating line before it fails is far less expensive than the emergency repair."
        ]
      }
    ],
    issues: [
      {t:'AFM/DOD Lifter Failure',d:'Chevrolet V8 engines equipped with Active Fuel Management develop collapsed lifters causing misfires, ticking, and oil consumption. We replace all lifters and can permanently disable the AFM system for improved reliability.',href:'/symptoms/engine-rattling'},
      {t:'Torque Converter Shudder',d:'GM 8-speed and 10-speed automatic transmissions develop a torque converter shudder that feels like driving over rumble strips at light throttle. A fluid flush with updated specification fluid typically resolves it.',href:'/symptoms/vibration-when-accelerating'},
      {t:'Exhaust Manifold Bolt Failure',d:'Chevrolet truck engines are prone to broken exhaust manifold bolts causing exhaust leaks and ticking. Extraction and repair requires care to avoid thread damage in the cylinder head.',href:'/services/exhaust-repair-near-south-salt-lake-ut'},
      {t:'Timing Chain Wear on V6',d:'Chevrolet V6 engines develop timing chain stretch, causing camshaft correlation fault codes and potential engine damage if ignored. A complete chain kit replacement restores proper timing.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Oil Consumption on V8 Engines',d:'Some Chevrolet V8 engines consume more oil than expected, particularly with AFM active. Monitoring oil level and addressing the root cause — lifter or piston ring wear — prevents engine damage.'},
      {t:'Cooling System Thermostat Failure',d:'Chevrolet cooling system thermostats fail in either direction, causing overheating or an engine that runs chronically cool. Both conditions affect performance and long-term engine health.'},
      {t:'Transmission Fluid Degradation',d:'GM automatic transmissions are sensitive to fluid quality. Despite extended drain intervals, transmission fluid degrades and causes shift quality issues that worsen over time if not addressed.'}
    ],
    tips: [
      'Chevrolet V8 engines with Active Fuel Management are more demanding on engine oil than non-AFM engines. Dexos1 Gen2 approved oil is required — non-approved oils increase the risk of timing chain wear and lifter failure. We stock the correct spec.',
      'Chevrolet trucks used for towing, hauling, or mountain driving in Utah see significantly harder use than highway driving. Transmission, differential, and transfer case fluid intervals should be shortened to match how you actually use your vehicle.',
      'Chevrolet V6 engines have a known timing chain wear pattern that shows up most often around 80,000-100,000 miles. A cold-start rattle that clears as the engine warms up is worth having inspected — catching it early is far less expensive than dealing with a skipped chain.',
      'Chevrolet cooling systems are generally reliable but use a mix of rubber, plastic, and aluminum components that age at different rates. A pressurized test every few years identifies weak points before they cause an overheating event.'
    ],
    faqs: [
      {q:'What is AFM and why does it cause problems?',a:'Active Fuel Management deactivates cylinders at light throttle to save fuel, using specialized lifters that can collapse over time causing misfires and ticking. It\'s one of the most common issues we see on Chevrolet V8 engines. We replace the lifters and can permanently disable AFM for improved long-term reliability.'},
      {q:'Why does my Chevy feel like it\'s shuddering at light throttle?',a:'This is almost always GM\'s torque converter shudder on 8-speed or 10-speed transmissions. The fix is a transmission fluid flush with the updated spec fluid — GM released a revised fluid specifically to address this. In most cases it resolves the problem completely.'},
      {q:'Should I delete the AFM on my Chevrolet?',a:'If you\'re already experiencing lifter issues, AFM delete is usually the right call. We replace the lifters with standard versions and disable the system — eliminating the most common failure point. If your engine is still healthy, it\'s a preventive choice some owners make for peace of mind.'},
      {q:'How often should I change my Chevrolet\'s transmission fluid?',a:'Despite "lifetime fill" marketing, we recommend every 45,000 miles for normal use and every 25,000-30,000 miles if you tow or haul regularly. Keeping the fluid fresh prevents shudder and premature wear on these transmissions.'},
      {q:'Why is my Chevy V6 rattling on cold start?',a:'Cold-start rattle that quiets after the engine warms up is typically timing chain stretch — the tensioners compensate as oil pressure builds. We recommend inspection at this point — full replacement is far less expensive than dealing with a chain that jumps timing.'}
    ]
  },
  'Subaru': {
    whatHeading: "Full-Service Subaru Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Subarus in South Salt Lake since 1990 — Outbacks, Foresters, Imprezas, Crosstreks, and the WRX and STI lineup across every generation. We handle Subaru's boxer engine timing belt and water pump service, head gasket repair, AWD drivetrain fluid service, clutch and manual transmission work, and the cooling system maintenance Utah's temperature extremes demand. Every Subaru we take in starts with a free diagnosis — you know exactly what we found and what it costs before any work begins.",
    whyIntro: "Subaru dealers in the Salt Lake Valley bill in the range of $150–170 per hour, and the service department model means you're often talking to an advisor who relays information between you and a technician you never meet. At Scott's, it's simpler: the mechanic who diagnoses your Subaru does the repair and explains it at pickup. Subarus are common in Utah because they're genuinely suited to the terrain — Symmetrical AWD handles Wasatch mountain roads and winter salt effectively — but that use accelerates wear on drivetrain fluids that factory intervals don't account for. We've replaced enough EJ head gaskets to do it correctly, with resurfaced heads and updated multi-layer steel gaskets, rather than the shortcut version that comes back in three years. Timing belt service on boxer engines is a complete job here: belt, water pump, idler and tensioner pulleys, and thermostat — because reopening that access later to fix what was skipped costs more in labor than doing it right the first time.",
    whoContent: {
      heading: "Who to Trust for Subaru Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. The mechanic who works on your Subaru is the same person who diagnoses it and explains it when you pick it up. No service advisor, no upsell quotas.",
        "Subaru has been a regular part of our workload for decades — Outbacks, Foresters, Imprezas, Crosstreks, and WRX models. We know the platform and give you a straight answer about what your car actually needs."
      ]
    },
    whenContent: [
      "Bring your Subaru in if you notice coolant level dropping without a puddle under the car, any oily residue along the side of the engine, a chirp or squeak at idle, or a shudder when accelerating. These are early signs of problems that cost less to fix when caught early. There's no charge to find out what's going on.",
      "If your Subaru is approaching 100,000 miles and timing belt service hasn't been done yet, bring it in before driving it further. A broken belt on these engines causes serious engine damage with no warning beforehand — we'll tell you exactly where you stand."
    ],
    process: [
      { step: 1, title: "Tell Us What's Going On", desc: "An oil seep at the head, a coolant level that keeps dropping, a chirp at idle that goes away when you press the clutch, or a timing belt interval due. The more specific, the faster we find it." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "We road test, inspect the boxer engine externally for leak points, check coolant condition, and read fault codes. Head gasket issues and timing system condition both get evaluated before we recommend anything." },
      { step: 3, title: "Clear Explanation of What We Found", desc: "What's failing, what the repair involves, what we'll replace while we have access, and what it costs. Written estimate before any work starts." },
      { step: 4, title: "Complete Repairs, Not Minimized Ones", desc: "If we're replacing the timing belt, we're doing the water pump, tensioners, and thermostat. If we're replacing head gaskets, we're resurfacing the heads and checking the cooling system. We don't leave the next failure scheduled." },
      { step: 5, title: "Road Test and Handoff", desc: "We verify cooling system integrity and drive behavior before the car goes back, and walk you through what was done at pickup." }
    ],
    commonRepairs: [
      { slug: "timing-belt-replacement-near-south-salt-lake-ut", name: "Timing Belt Replacement", desc: "Complete EJ boxer engine timing belt service — belt, water pump, idler pulleys, tensioner, and thermostat. Non-optional at 105K miles." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Belt-driven Subaru water pumps share timing belt access — always replaced together on EJ engines." },
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch Repair", desc: "WRX, STI, Impreza, and Legacy manual clutch jobs — throw-out bearing and flywheel inspection included." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Joint Repair", desc: "Subaru AWD inner CV joint failure causes acceleration shudder — frequently misdiagnosed as AWD or transmission problems." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Subaru AWD braking service — pads, rotors, and caliper inspection on all four corners." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Strut Replacement", desc: "Outback and Forester strut wear — mountain road and canyon driving accelerates strut deterioration." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Subaru boxer engine exhaust manifold and header cracks — common on WRX and high-mileage Outbacks." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full diagnostic and repair work across all Subaru models and drivetrain configurations." }
    ],
    intro: "Trusted Subaru repair in South Salt Lake since 1990. We service Outbacks, Foresters, Imprezas, Crosstreks, and WRXs — free diagnosis, written estimate, and transparent pricing well below dealer rates.",
    whyUs: [
      { title: "Boxer Engine Experience", desc: "Subaru's horizontal engine layout changes how repairs access components. We've worked on enough boxer engines to know the correct procedures and what to check while we're in there." },
      { title: "Head Gasket Specialists", desc: "EJ-series head gasket replacement is one of our most common Subaru services. We use updated multi-layer steel gaskets and check flywheel and machining needs every time." },
      { title: "Timing Belt Complete Service", desc: "Subaru timing belt service is a complete job — belt, water pump, tensioners, thermostat, and seals. We do it right the first time so you're not revisiting the same labor access later." },
      { title: "Free Diagnosis", desc: "Every Subaru repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "The Boxer Engine: How Subaru's Layout Affects Service",
        paras: [
          "Subaru's horizontally-opposed engine places the cylinder banks flat rather than in a V or inline configuration. The practical consequence is that the heads, head gaskets, and timing components face different service challenges than conventional engine layouts. The boxer layout also contributes to Subaru's well-known head gasket susceptibility in EJ-series engines. The flat orientation causes combustion gases and coolant to exert slightly different forces on the gasket surface, and the aluminum head material expands and contracts with temperature differently than the block.",
          "The EJ25D and EJ251/EJ252/EJ253 engines used in Outbacks, Foresters, and Legacies from the late 1990s through early 2010s are the most affected by head gasket failure. Updated multi-layer steel gaskets have improved the pattern in later production, but older vehicles remain susceptible. When we replace head gaskets on EJ engines, we resurface the heads if needed and verify the cooling system is in good condition — both are important to getting a lasting repair."
        ]
      },
      {
        heading: "Subaru's Timing Belt: Why This Is Non-Optional Maintenance",
        paras: [
          "Most Subaru boxer engines use a timing belt, not a chain. EJ-series engines are interference engines with a 105,000-mile belt replacement interval. When a timing belt breaks on an interference engine, the camshaft stops rotating while the crankshaft continues, and pistons contact open valves. The result is bent valves and a repair that costs many times more than the belt service would have.",
          "The correct timing belt service on a Subaru is a complete system replacement. The water pump is driven by the timing belt on most EJ engines and shares the same service access. Replacing the belt without the water pump — or the tensioner pulleys and idler pulleys that carry the belt's load — leaves the remaining components to fail under the new belt. We do timing belt service as a complete job, not a minimized one."
        ]
      },
      {
        heading: "Subaru in Utah: AWD, Mountains, and What They Demand",
        paras: [
          "Subaru's popularity in Utah is well-earned — Symmetrical AWD handles winter roads and mountain grades effectively. But AWD use puts additional stress on drivetrain components that front-wheel-drive vehicles don't experience. The center differential and rear differential fluid in AWD models should be changed more frequently than factory intervals suggest, particularly on vehicles used for winter mountain driving.",
          "Subaru's tire requirement is strict: all four tires must be within 2/32\" of tread depth of each other. The AWD system uses rotational speed differences between axles to manage torque distribution — mismatched tire diameters cause the system to continuously compensate, accelerating center differential and AWD coupling wear. If you need to replace one damaged tire on a Subaru with significant miles on the others, matching tread depth is essential."
        ]
      }
    ],
    issues: [
      {t:'Head Gasket Leaks',d:'Subaru boxer engines are prone to head gasket failure, typically presenting as external oil seeping at the gasket line or gradual coolant loss. We replace with updated multi-layer steel gaskets designed to address the known failure pattern.',href:'/symptoms/coolant-leak'},
      {t:'Timing Belt Service',d:'Subaru boxer engines use timing belts that must be replaced at the manufacturer\'s recommended interval without exception. A broken belt destroys the engine — this is non-optional maintenance.',href:'/services/timing-belt-replacement-near-south-salt-lake-ut'},
      {t:'Clutch Throw-Out Bearing Noise',d:'Subaru manual transmissions frequently develop a chirping or squeaking noise at idle that disappears when the clutch pedal is pressed. This is the throw-out bearing, and we replace it during clutch service.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'CV Axle Failure',d:'Subaru\'s AWD system puts continuous load on CV axles. Inner CV joint failure causes vibration and shuddering under acceleration that\'s often mistaken for a transmission or AWD system problem.',href:'/services/cv-joint-repair-near-south-salt-lake-ut'},
      {t:'Wheel Bearing Wear',d:'Subaru AWD systems put additional load on wheel bearings. Rear wheel bearing failure is common and presents as a hum or growl that changes with vehicle speed — we diagnose and replace the affected bearing.'},
      {t:'Coolant System Corrosion',d:'Subaru boxer engines require specific coolant formulation to prevent head gasket corrosion. Running incorrect coolant accelerates the gasket failure pattern the platform is known for.'},
      {t:'Power Steering Rack Leaks',d:'Subaru hydraulic power steering racks develop seal leaks over time, causing steering fluid loss and gradual reduction in assist. We rebuild or replace racks depending on the condition and extent of the leak.'}
    ],
    tips: [
      'Subaru timing belt service is the most critical scheduled maintenance on the vehicle. When replacing the belt, also replace the water pump, tensioner pulleys, and thermostat — they share the same service access and doing them together costs far less than revisiting the job later.',
      'Subaru\'s AWD system requires all four tires to be within 2/32" of tread depth of each other. Running mismatched tires forces the center differential to compensate continuously, accelerating wear and potentially causing premature failure.',
      'Subaru boxer engines require Subaru-compatible coolant — or an equivalent blue-dye formula — to protect the head gaskets from corrosion. Standard green or orange coolant lacks the additives Subaru\'s aluminum head gaskets need.',
      'Subaru turbocharged engines are particularly sensitive to oil quality and change intervals. The turbocharger is oil-cooled — degraded oil causes bearing wear that\'s expensive to address. Short intervals with full synthetic are cheap insurance.'
    ],
    faqs: [
      {q:'Do all Subaru engines have head gasket problems?',a:'The older EJ-series 2.5L boxer engine has a well-documented head gasket failure pattern. Newer FB-series engines are significantly improved. If you have an EJ-engine Subaru, we recommend monitoring for external oil seeping and using Subaru-spec coolant to help slow the failure pattern.'},
      {q:'When does my Subaru need a timing belt?',a:'Every 105,000 miles without exception. Subaru boxer engines are interference engines — a broken timing belt destroys the engine. We perform a complete belt service including the water pump, idler pulleys, tensioner, and thermostat since they\'re all accessible at the same time.'},
      {q:'Why does my Subaru chirp or squeak at idle?',a:'If the sound goes away when you press the clutch pedal, it\'s the throw-out bearing. It will eventually fail completely, so we recommend addressing it during your next clutch service — that way you\'re not paying for the same labor access twice.'},
      {q:'My Subaru shakes when I accelerate. What\'s causing it?',a:'Acceleration shudder on Subaru AWD vehicles most commonly comes from inner CV joint wear. It\'s frequently misdiagnosed as a transmission or AWD system problem. We properly diagnose the source before recommending any repair.'},
      {q:'Can I put just one new tire on my Subaru?',a:'No — and it\'s not just a suggestion. Subaru\'s AWD system can be damaged by running tires with significantly different diameters. If one tire is damaged, you need to replace in pairs or all four, matching tread depth of the existing tires as closely as possible.'}
    ]
  },
  'Nissan': {
    whatHeading: "Full-Service Nissan Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Nissans in South Salt Lake since 1990 — Altimas, Rogues, Frontiers, Pathfinders, Maximas, and the full Nissan car and truck lineup. We handle Nissan CVT fluid service and diagnosis, timing chain service, cooling system repair, clutch and manual transmission work, and the drivetrain maintenance Utah's driving conditions demand. CVT fluid condition is the single most important maintenance item on most of the Nissan lineup, and we take it seriously. Every Nissan gets a free diagnosis before any work starts.",
    whyIntro: "Nissan dealers in Salt Lake are billing $150–165 per hour, and the CVT service conversation at a dealer often amounts to being told the fluid is 'lifetime fill' and doesn't need service. That recommendation has caused more premature Nissan CVT failures than any other single factor we've seen. NS-3 fluid degrades, and generic 'universal CVT fluid' substitutes are not acceptable replacements — the friction modifier package matters for how the belt and pulleys interact at operating temperature. At Scott's, we do CVT fluid service on a 30,000-mile schedule and use the correct spec fluid every time. We've diagnosed enough cold-start timing chain rattles on QR25DE Altimas and VQ35 Pathfinders to know what a guide-wear sound sounds like versus something more serious. One mechanic diagnoses your Nissan and repairs it — no service advisor, no upsell list.",
    whoContent: {
      heading: "Who to Trust for Nissan Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. The mechanic who diagnoses your Nissan is the one who repairs it and explains the job at pickup. We're not a franchise and we don't have service quotas.",
        "Nissan has been a consistent part of our workload for over 35 years — Rogues, Altimas, Pathfinders, Frontiers, and the full lineup. When your Nissan comes in, you get a straight answer about what it actually needs."
      ]
    },
    whenContent: [
      "Bring your Nissan in if you feel hesitation, jerking, or a shudder during light-throttle acceleration — these are early signs that something needs attention. They don't get better on their own, and catching them early keeps the repair smaller. Free diagnosis before any recommendation.",
      "A rattle when you first start the engine that goes away after 10–20 seconds is also worth diagnosing sooner rather than later. Don't wait on it — bring it in and find out exactly what you're dealing with at no cost to look."
    ],
    process: [
      { step: 1, title: "Tell Us What Your Nissan Is Doing", desc: "A shudder or hesitation, a cold-start rattle, a low coolant light, or a CVT service that's overdue. CVT behavior descriptions are especially helpful — how it shudders, when it happens, at what speed." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "Road test, fault code scan, CVT fluid condition check, and cold-start engine inspection for chain noise. We identify the actual source before recommending any repair." },
      { step: 3, title: "Plain-Language Explanation of What We Found", desc: "We tell you whether it's a fluid problem, a mechanical problem, or both — and what the correct repair is. Written estimate before work begins." },
      { step: 4, title: "Only the Work That's Needed", desc: "If a CVT fluid change addresses the shudder, that's what we recommend. If the CVT has mechanical wear beyond what fluid service will fix, we tell you that plainly and explain the options." },
      { step: 5, title: "Road Test and Handoff", desc: "We verify CVT behavior and general driving conditions before the vehicle goes back, and walk you through what was done at pickup." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain Guide Replacement", desc: "QR25DE Altima and VQ35 Pathfinder/Murano cold-start chain guide wear — caught early, it's a guide and tensioner job." },
      { slug: "catalytic-converter-service-near-south-salt-lake-ut", name: "Catalytic Converter Service", desc: "Nissan V6 premature converter failure — we diagnose upstream O2 sensor vs. actual converter before recommending replacement." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Nissan four-cylinder and V6 water pump failure — often presenting as slow coolant loss before an overheat." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Altima, Rogue, and Pathfinder pad, rotor, and caliper service — mountain and canyon driving wears brakes unevenly." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Strut Replacement", desc: "Rogue and Murano front strut wear — common at 80,000–100,000 miles on Utah roads." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Joint Repair", desc: "Nissan AWD CV axle and boot wear — clicking on turns or vibration under load." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Nissan V6 exhaust manifold cracks and flange leaks — Frontier and Pathfinder are the most common." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full diagnostic and repair across all Nissan models and drivetrain configurations." }
    ],
    intro: "Independent Nissan repair in South Salt Lake since 1990. We service Altimas, Rogues, Pathfinders, Frontiers, and the full Nissan lineup — free diagnosis before any work starts, written estimate, and transparent pricing.",
    whyUs: [
      { title: "Nissan CVT Knowledge", desc: "CVT fluid condition is the biggest factor in Nissan transmission longevity. We use Nissan-spec CVT fluid and know the diagnostic difference between a fluid problem and early CVT wear." },
      { title: "Timing Chain Diagnosis", desc: "Nissan timing chain guide wear produces a distinct cold-start rattle. We diagnose the extent of wear before recommending guide and tensioner replacement." },
      { title: "No Unnecessary Work", desc: "We recommend what your Nissan actually needs. If a service isn't due or a part is still serviceable, we tell you." },
      { title: "Free Diagnosis", desc: "Every Nissan repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "Nissan's CVT Transmission: What Owners Need to Know",
        paras: [
          "Nissan's Jatco continuously variable transmission is used in Altimas, Rogues, Sentras, Muranos, and many other models. CVTs don't have gears in the traditional sense — they use a steel belt and variable-diameter pulleys to provide continuous ratio adjustment. When the fluid degrades or the wrong fluid type is used, they develop a characteristic shudder, jerking on takeoff, and whining noise that progressively worsens.",
          "The single biggest factor in Nissan CVT longevity is fluid condition. Nissan specifies NS-3 CVT fluid for most applications, and generic 'universal CVT fluid' formulations are not an acceptable substitute. We see premature CVT failures almost exclusively on vehicles where fluid was never serviced or where non-spec fluid was used. Changing the CVT fluid every 30,000 miles is the most effective preventive step you can take."
        ]
      },
      {
        heading: "Nissan's Timing Chain Issues by Engine Generation",
        paras: [
          "Nissan has used timing chains across most of its gasoline engine lineup, but some chain systems have known wear patterns. The QR25DE engine used in Altimas and Sentras can develop timing chain guide wear, producing a rattle on cold starts that clears as the engine warms. The VQ35DE and VQ35HR V6 engines used in Maximas, Muranos, and Pathfinders can develop secondary chain wear on the oil pump drive system.",
          "In all cases, the rattle-on-cold-start pattern is the key diagnostic signal. Oil pressure takes a moment to build at startup, and a worn guide slaps during that window before the tensioner takes up the slack. Catching timing chain issues at the guide-wear stage — before the chain has stretched significantly or jumped — means guide and tensioner replacement rather than a more involved repair. We check the extent of wear before recommending the scope of repair."
        ]
      },
      {
        heading: "Nissan Ownership in Utah",
        paras: [
          "Nissan's Rogue, Pathfinder, and Murano are common family vehicles in Utah's suburbs and mountain communities. AWD system maintenance matters more here than in flat climates. The rear differential fluid and AWD coupling fluid should be serviced on schedule — these are overlooked services that affect AWD reliability over high mileage.",
          "Nissan's cooling systems use plastic overflow reservoirs and hose connections that age and crack over time. Utah's temperature swings cycle plastic cooling components aggressively. We check reservoir condition at every service visit and recommend replacement proactively when cracking is visible, before a failure leaves a driver without coolant on a summer canyon drive."
        ]
      }
    ],
    issues: [
      {t:'CVT Transmission Failure',d:'Nissan CVT transmissions are prone to overheating and premature failure, particularly when fluid is neglected. We diagnose CVT issues and handle repairs from fluid service to full replacement depending on the failure mode.',href:'/symptoms/transmission-slipping'},
      {t:'Timing Chain Guide Wear',d:'Nissan engines develop timing chain guide wear that causes cold-start rattling. If caught early, guide and tensioner replacement prevents the chain from jumping and causing engine damage.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Catalytic Converter Failure',d:'Nissan V6 engines experience premature catalytic converter failure, triggering efficiency codes and failed emissions tests. We diagnose whether it\'s the converter or an upstream oxygen sensor issue before recommending replacement.',href:'/services/catalytic-converter-service-near-south-salt-lake-ut'},
      {t:'Clutch Hydraulic System Leaks',d:'Nissan manual transmission vehicles develop leaks in the clutch slave and master cylinder, causing soft pedal feel and difficulty engaging gears. We replace the hydraulic components and bleed to proper feel.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'Power Steering Hose Leaks',d:'Nissan power steering high-pressure hoses develop leaks at the crimped fittings over time. We replace with quality hoses to restore proper assist and prevent continued fluid loss.'},
      {t:'Coolant Overflow Tank Cracks',d:'Nissan coolant overflow reservoirs crack and cause gradual coolant loss that can go unnoticed until the engine runs low on coolant and overheats. We inspect and replace as part of cooling system service.'},
      {t:'Oil Consumption on High-Mileage Engines',d:'Nissan V6 engines can develop increased oil consumption as piston rings and valve seals wear with age. Regular oil level checks catch low-oil situations before they cause engine damage.'}
    ],
    tips: [
      'Nissan CVT transmission fluid should be changed every 30,000 miles regardless of what Nissan\'s maintenance schedule suggests. The "lifetime" fill claim is the primary reason CVTs fail prematurely — fresh fluid at regular intervals is the single biggest factor in CVT longevity.',
      'Nissan cooling systems use plastic overflow reservoirs and hoses that age and crack over time. Keeping coolant at the correct concentration and checking the level at every oil service prevents corrosion and unexpected overheating.',
      'Nissan manual transmission vehicles use a hydraulic clutch system that benefits from periodic fluid inspection. Clutch fluid absorbs moisture over time, lowering its boiling point and leading to a spongier pedal feel under repeated use.',
      'Nissan V6 engines are known for being strong and durable, but benefit from regular oil changes with the correct viscosity. As mileage accumulates, monitoring oil level between changes becomes more important — don\'t wait for a warning light.'
    ],
    faqs: [
      {q:'Is the Nissan CVT transmission reliable?',a:'Nissan CVTs are reliable when properly maintained but sensitive to fluid condition. The key to longevity is changing the CVT fluid every 30,000 miles — not the "lifetime" interval Nissan suggests. Most premature failures we see happen on vehicles where the fluid was never serviced.'},
      {q:'What does CVT shudder or hesitation mean?',a:'Shuddering, hesitation, or a jerking sensation during acceleration on a Nissan with CVT often indicates fluid degradation or early CVT wear. A fluid change resolves it in many cases if caught early — ignoring it leads to progressively worse and more expensive repairs.'},
      {q:'My Nissan failed emissions. What\'s typically wrong?',a:'Nissan V6 engines have a higher-than-average rate of catalytic converter failure. A P0420 code indicates the converter isn\'t processing exhaust gases efficiently. We diagnose whether it\'s actually the converter or an upstream issue — like a failed oxygen sensor — before recommending any replacement.'},
      {q:'Why is my Nissan rattling when it first starts?',a:'Cold-start rattle that quiets as the engine warms up is almost always timing chain guide wear. The guides wear and allow the chain to slap until oil pressure builds. If caught early, guide and tensioner replacement prevents the chain from jumping timing.'},
      {q:'How long do Nissan engines last?',a:'Nissan V6 engines especially are known for durability — 200,000+ miles is achievable with proper maintenance. The CVT transmission is the more vulnerable component; keeping that fluid fresh is the most impactful thing you can do for long-term reliability.'}
    ]
  },
  'BMW': {
    whatHeading: "Full-Service BMW Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on BMWs in South Salt Lake since 1990 — 3 Series, 5 Series, X3, X5, and M models across every generation. We handle BMW cooling system service, oil leak repair at valve cover and oil filter housing gaskets, variable valve timing service, electric water pump replacement, clutch and manual transmission work, and full diagnostics using professional equipment that reads the same system data as dealer software. Every BMW starts with a free diagnosis before any work begins — you'll know exactly what we found and what it costs.",
    whyIntro: "BMW dealers in the Salt Lake area bill $175–200 per hour — among the highest rates in the Valley. That rate, combined with the dealer service department model where a service advisor manages your job and a technician you never meet performs it, makes independent BMW service a significant financial difference on the predictable high-mileage repairs these vehicles need. Cooling system component replacement — expansion tank, thermostat housing, electric water pump — is one of the most common BMW services we perform, and doing it proactively at 80,000–100,000 miles costs a fraction of what a roadside overheating event costs to recover from. BMW engines overheat quickly when cooling system integrity is lost, and there's no belt-driven water pump backup when the electric unit fails. We use LL-01 approved full synthetic on every BMW oil service and know the specific service procedures for VANOS solenoid service, dual-mass flywheel conversion, and the oil leak points these engines develop predictably with age.",
    whoContent: {
      heading: "Who to Trust for BMW Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated at the same South Salt Lake location since 1990. The mechanic who diagnoses your BMW is the one who repairs it — no service advisor layer, no markup on top of a markup. We use professional diagnostic tools that access the same data as dealer software.",
        "BMW has been a regular part of our workload for decades. We know the common failure patterns and give you a straight answer about what needs attention now, what can be monitored, and what's still in good shape."
      ]
    },
    whenContent: [
      "Bring your BMW in if you see any coolant warning light, notice coolant level dropping, smell burning oil from the engine bay, or hear a rattle at cold start that clears up after the engine warms. BMW engines are precision-built — when something is off, catching it early avoids the kind of repair bill that comes with ignoring it. Free diagnosis, written estimate, no work starts without your approval.",
      "If your BMW is past 80,000 miles and hasn't had a cooling system inspection, it's worth scheduling before summer. We'll tell you honestly what's still good and what's worth replacing before it becomes a problem on the road."
    ],
    process: [
      { step: 1, title: "Describe What Your BMW Is Doing", desc: "A warning light, a cold-start rattle, an oil smell, a coolant level that's dropping, or a clutch that's changed. BMW symptoms are often predictable by mileage — tell us where yours is." },
      { step: 2, title: "Free Diagnostic Inspection with BMW-Specific Tools", desc: "We connect professional BMW diagnostic equipment, read fault code history, check adaptation values, and inspect the cooling system and known leak points before recommending anything." },
      { step: 3, title: "Clear Explanation and Written Estimate", desc: "We tell you what we found, what the repair involves, and what the parts and labor cost. We distinguish between what needs attention now and what can be monitored." },
      { step: 4, title: "Quality Parts — OEM or OEM-Equivalent", desc: "Every BMW repair uses parts that meet or exceed BMW specifications. LL-01 approved oil on every service. We don't use economy-tier components on BMW cooling system or oil sealing work." },
      { step: 5, title: "Road Test and Handoff", desc: "We verify cooling system pressure holds, oil leaks are resolved, and driving behavior is correct before the vehicle goes back to you." }
    ],
    commonRepairs: [
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Electric Water Pump Replacement", desc: "BMW electric water pump and expansion tank replacement — proactive service before failure is far less expensive than emergency recovery." },
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "VANOS and Timing Chain Service", desc: "BMW VANOS solenoid service and N-series timing chain tensioner wear — cold-start rattle is the key symptom." },
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch Repair / Flywheel Conversion", desc: "BMW dual-mass flywheel wear and clutch replacement — single-mass conversion available at significant cost savings." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust and Manifold Repair", desc: "BMW exhaust manifold cracks and exhaust leaks — common on N52 and S54 engines with high mileage." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service with Pad Sensors", desc: "BMW pad, rotor, and wear sensor replacement — both pads and sensors are consumed when the warning light comes on." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Strut and Suspension Service", desc: "BMW control arm bushings, ball joints, and struts — suspension wear causes handling changes and accelerated tire wear." },
      { slug: "welding-services-near-south-salt-lake-ut", name: "Exhaust Welding", desc: "BMW exhaust section welding and repair — mid-pipe and cat-back repairs on aging exhaust systems." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Auto Service", desc: "Full diagnostic and repair work across all BMW models — 3 Series, 5 Series, X3, X5, and M vehicles." }
    ],
    intro: "Independent BMW repair in South Salt Lake since 1990. We service 3 Series, 5 Series, X3, X5, and the full BMW lineup — free diagnosis, written estimate, at pricing significantly below dealer rates.",
    whyUs: [
      { title: "BMW Diagnostic Equipment", desc: "We use professional-grade BMW diagnostic tools that access the same data as dealer software — fault code history, live sensor data, and adaptation values. Accurate diagnosis before recommending parts." },
      { title: "Cooling System Expertise", desc: "BMW cooling system failures are predictable — expansion tank, electric water pump, thermostat housing — and preventable. We recommend proactive replacement before a roadside failure occurs." },
      { title: "VANOS and Oil Leak Experience", desc: "VANOS solenoid service, valve cover gaskets, oil filter housing gaskets — common BMW services we perform regularly at significantly lower cost than the dealer." },
      { title: "Free Diagnosis", desc: "Every BMW repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "BMW's Cooling System: The Most Common High-Mileage Failure",
        paras: [
          "BMW's cooling system is a known weak point on high-mileage vehicles. The manufacturer used plastic for several critical components — the expansion tank, thermostat housing, water pump housing, and various connector fittings — to reduce weight. These plastic parts degrade with temperature cycling over time and develop cracks. The characteristic failure is sudden coolant loss from a cracked expansion tank or fitting, often with little warning. Because BMW uses an electric water pump rather than a belt-driven one, there's no backup circulation if the system loses pressure.",
          "The recommended approach is proactive replacement of the plastic cooling system components before they fail, typically around 80,000-100,000 miles. Replacing the expansion tank, thermostat housing, and water pump together as a planned service costs significantly less than an emergency repair after a roadside failure — and BMW engines overheat quickly without circulation."
        ]
      },
      {
        heading: "VANOS and Oil Leaks: The Other High-Mileage BMW Pattern",
        paras: [
          "BMW's VANOS variable valve timing system adjusts cam timing based on engine speed and load. VANOS solenoids and seals wear over time, and the characteristic symptom is a rattle or rough idle when cold that clears as the engine warms, sometimes paired with fault codes for variable valve timing. Solenoid service or seal replacement addresses the issue in most cases — full VANOS unit replacement is not always necessary.",
          "BMW engines also develop oil leaks at predictable locations — valve cover gaskets, oil filter housing gaskets, crankshaft seals, and oil pan gaskets are the most common. Oil dripping onto hot exhaust components creates burning smells and a fire risk over time. We identify which gaskets are leaking before recommending any repair, since different leak locations have very different labor content."
        ]
      },
      {
        heading: "Independent BMW Service: What the Difference Is",
        paras: [
          "BMW dealer labor rates in the Salt Lake area run $175-200 per hour. Our rate is considerably lower, and we use quality parts — OEM or OEM-equivalent — for every BMW repair. The diagnostic equipment we use accesses the same system data as dealer software, so there's no tradeoff in diagnostic capability.",
          "Where independent BMW service makes the most sense is in routine and high-mileage maintenance: oil services with the correct LL-01 approved fluid, cooling system replacement before failure, VANOS service, brake pad and rotor replacement with pad sensors, and oil leak repair. These are predictable, well-understood repairs where the labor quality depends on knowing the platform — not on who you bought the car from."
        ]
      }
    ],
    issues: [
      {t:'Cooling System Plastic Component Failure',d:'BMW cooling systems use plastic expansion tanks, thermostat housings, and water pump components that crack and leak with age. We replace with upgraded aluminum parts where available for improved longevity.',href:'/services/water-pump-replacement-near-south-salt-lake-ut'},
      {t:'Oil Leaks at Multiple Points',d:'BMW engines develop oil leaks at valve cover gaskets, oil filter housing gaskets, oil pan gaskets, and crankshaft seals. Oil dripping onto hot exhaust components creates burning smells and a fire risk.'},
      {t:'VANOS Variable Timing Issues',d:'BMW\'s VANOS variable valve timing system develops solenoid and seal wear, causing rough idle, loss of power, and fault codes. We service or replace VANOS components as needed.',href:'/symptoms/engine-rattling'},
      {t:'Dual-Mass Flywheel Wear',d:'BMW manual transmission vehicles use dual-mass flywheels that wear over time, causing clutch judder and vibration. We offer OEM replacement or single-mass flywheel conversion at significant cost savings.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'Electric Water Pump Failure',d:'BMW uses electrically-driven water pumps that can fail without warning, causing sudden overheating. We replace these proactively — engine overheating on a BMW is expensive and happens quickly with no belt-driven backup.'},
      {t:'Fuel Injector Deposits',d:'BMW direct-injection engines accumulate deposits on fuel injectors and intake valves over time, affecting combustion efficiency and fuel economy. An intake cleaning service restores proper fueling and performance.'},
      {t:'Suspension Component Wear',d:'BMW suspension systems use multiple bushings, control arms, and ball joints that wear faster than domestic vehicle equivalents. Worn suspension causes tire wear, handling changes, and clunking noises over bumps.'}
    ],
    tips: [
      'BMW\'s factory oil change interval is too long for Utah\'s conditions. We recommend 7,500 miles maximum with LL-01 approved full synthetic — BMW engines are precision-built and sensitive to oil quality. More frequent changes are trivial insurance against engine wear.',
      'BMW cooling systems have a well-known weak point: plastic components that fail as the vehicle ages. Proactive cooling system maintenance — replacing the expansion tank, thermostat housing, and water pump together before they fail — costs far less than dealing with an overheating event.',
      'BMW brake components are vehicle-specific. When the pad warning light comes on, both the pads and the sensor are consumed — both need replacement at the same service. We stock BMW-compatible sensors and pads to handle the complete job.',
      'BMW turbocharged engines benefit from an oil soak period after hard driving before shutdown. Shutting off a hot turbocharged BMW immediately after highway or canyon driving can accelerate turbo bearing wear over time.'
    ],
    faqs: [
      {q:'Why are BMW repairs expensive, and can you do them for less?',a:'BMW dealer labor rates in Salt Lake City run $175-200/hour. Our rate is significantly lower, and we use quality parts that meet or exceed BMW\'s specifications. On most BMW repairs, we save owners 30-50% compared to dealership pricing without compromising on quality or expertise.'},
      {q:'My BMW is overheating. How serious is that?',a:'Very serious. BMW engines rely on electric water pumps — when a cooling component fails, heat builds quickly with no belt-driven backup. Overheating a BMW even once can warp cylinder heads or cause internal damage. Bring it in immediately if you see any temperature warning.'},
      {q:'How do I know if my BMW needs a VANOS service?',a:'Symptoms include rough idle especially when cold, reduced power, hesitation under acceleration, and fault codes for variable valve timing. VANOS issues are common on higher-mileage BMWs — we can diagnose and service the system without a full VANOS replacement in many cases.'},
      {q:'Should I convert my BMW manual to a single-mass flywheel?',a:'For daily drivers, we often recommend it. Single-mass flywheels are more durable, easier to service, and significantly less expensive than OEM dual-mass units. The trade-off is slightly more vibration at idle, which most owners find acceptable.'},
      {q:'How often does my BMW actually need an oil change?',a:'More often than BMW suggests. We recommend 7,500 miles maximum with LL-01 approved synthetic. BMW\'s 10,000-mile interval is designed for European driving conditions — Utah\'s temperature extremes and stop-and-go traffic are harder on engine oil.'}
    ]
  },
  'Jeep': {
    whatHeading: "Full-Service Jeep Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Jeeps in South Salt Lake since 1990 — Cherokees, Wranglers, Grand Cherokees, and Gladiators across every generation. We handle 4WD system diagnosis and service, transfer case and differential fluid, front-end steering and suspension repair, axle and CV service, cooling, brakes, and check engine diagnostics. Whether your Jeep is a daily driver or sees regular use on Moab slickrock and the canyons above Salt Lake, we handle the full range of what it needs over its lifetime. Every Jeep gets a free diagnosis before any work starts — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Jeep dealers in the Salt Lake area are billing $150–175 per hour, and most of them are handling Wranglers and Gladiators the same way they handle Pacificas — through a service department structure where your rig gets written up by one person, worked on by another, and handed back with a printed inspection and a list of items to approve or decline. At Scott's, you're dealing with one mechanic throughout. The person who crawls under your Jeep and diagnoses the death wobble is the person who rebuilds the front end and hands you the keys. We've been working on lifted rigs, modified Jeeps, and bone-stock daily drivers in South Salt Lake since 1990, and we understand the difference between a Jeep that needs a repair and a Jeep that needs an honest assessment.",
    whoContent: {
      heading: "Who to Trust for Jeep Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. If you bring your Jeep to us, the mechanic who diagnoses it is the one who repairs it — and the one who explains what was found when you pick it up. No service advisor, no filtered communication.",
        "We've been working with Jeep owners across the Salt Lake Valley for over 35 years — daily drivers and trail rigs, lifted and stock. We give you a straight answer about what your Jeep actually needs."
      ]
    },
    whenContent: [
      "Bring your Jeep in if you feel a shimmy or vibration at highway speed — it usually starts mild and gets worse with time. This is a worn-component problem in the front end that doesn't go away on its own, and the longer it runs, the more surrounding parts it affects. Free diagnosis before any recommendation.",
      "Jeep 4WD systems also need regular fluid service — transfer case, differentials, and axle seals. If you can't remember when that was last done, or your Jeep has been through standing water recently, bring it in and let us take a look. Better to know before Utah's winter season starts."
    ],
    process: [
      { step: 1, title: "Tell Us How You Use It", desc: "Daily driver, weekend off-road, lifted or stock, Moab trips or just canyon roads. How a Jeep is used changes what we look at first. The more context you give us, the more useful the diagnosis." },
      { step: 2, title: "Free Diagnosis — We Inspect the Whole Picture", desc: "Road test, fault codes, 4WD engagement, front-end inspection, and visual inspection of undercarriage, differentials, and axle seals. No charge before we recommend anything." },
      { step: 3, title: "We Explain What We Found", desc: "Plain-language walkthrough of what's worn, what's contaminated, and what can safely wait. Written estimate before any work starts." },
      { step: 4, title: "We Do Only What's Needed", desc: "We're not rebuilding a front end that doesn't need it. If the diagnosis points to one worn track bar, that's what we replace. No upselling from a mileage checklist." },
      { step: 5, title: "Test and Verify Before It Leaves", desc: "We test 4WD engagement, steering, and braking under real conditions — not just a parking lot loop — before your Jeep goes back to you." }
    ],
    commonRepairs: [
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Axle and Front-End Repair", desc: "Death wobble diagnosis, ball joint and tie rod replacement, track bar service, and CV axle work on Wrangler and Cherokee front axle assemblies." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Brake inspection, pad and rotor replacement, caliper service, and brake fluid flush for all Jeep models. Important for canyon grades and loaded towing." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Suspension Service", desc: "Shock and strut replacement, lift kit service, and suspension component inspection for both stock and modified Jeeps." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump Replacement", desc: "Pentastar 3.6L and other Jeep engines — cooling system service, thermostat and water pump replacement." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Exhaust manifold and downpipe repair, welded patch, and muffler service. Jeep exhaust takes hard use, especially with lift kits that stress flex points." },
      { slug: "welding-services-near-south-salt-lake-ut", name: "Welding and Fabrication", desc: "Frame and exhaust welding, skid plate repair, and structural work for trail-damaged Jeeps." },
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain and Valve Train", desc: "Pentastar 3.6L valve train tick diagnosis, timing chain inspection, and VVT system service on high-mileage Jeep engines." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Jeep Service", desc: "Full diagnostic, 4WD system service, fluid changes, and mechanical repair across all Jeep systems and model lines." }
    ],
    intro: "Trusted Jeep repair in South Salt Lake since 1990. We service Wranglers, Cherokees, Grand Cherokees, Gladiators, and the full Jeep lineup — free diagnosis, written estimate, and honest pricing whether your Jeep sees trails or just the daily commute.",
    whyUs: [
      { title: "4WD and Drivetrain Experience", desc: "Transfer case service, differential inspection after water crossings, and 4WD system diagnosis are part of our regular workload. We understand Jeep's different 4WD systems and what each one needs." },
      { title: "Front-End Death Wobble", desc: "Death wobble requires finding the actual worn components — not just replacing one part and hoping. We inspect all front-end components and replace what's genuinely worn." },
      { title: "Modified Vehicle Service", desc: "Lifted Jeeps need service that accounts for changed driveshaft angles and suspension geometry. We work on Jeeps in stock and modified configurations." },
      { title: "Free Diagnosis", desc: "Every Jeep repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "Jeep's 4WD Systems: What Each One Needs",
        paras: [
          "Jeep uses several different four-wheel-drive systems across its lineup, and they're not interchangeable in terms of service requirements. Part-time Command-Trac systems on Wranglers use a manually engaged transfer case with a front axle that disconnects in two-wheel drive. Full-time Quadra-Trac systems on Grand Cherokee run all four wheels continuously through a center differential. Quadra-Drive II adds electronically controlled limited-slip differentials front and rear.",
          "Transfer case fluid service applies to all Jeep 4WD systems and should be done every 30,000 miles — more frequently on vehicles that see regular water crossings or mud driving. Front and rear axle differential fluid should be serviced on the same schedule. After any significant water crossing where the differentials may have been submerged, fluid should be checked immediately for water contamination. Contaminated fluid causes bearing and gear damage that's expensive to address."
        ]
      },
      {
        heading: "Jeep's 3.6L Pentastar: The Engine Most Wranglers and Grand Cherokees Use",
        paras: [
          "The 3.6L Pentastar V6 has powered most Jeep Wranglers, Grand Cherokees, and Cherokees since 2011. It's a capable engine with reasonable longevity — but early Pentastar engines (2011-2014) developed a tendency to tick from valve train noise, particularly on cold starts. More concerning is the cylinder head bolt design on some early examples, which can develop oil leaks at the head gasket surface.",
          "The Pentastar also shares access between the valve cover gaskets and some emission system components, which means valve cover leaks are worth addressing before oil migrates to ignition coil connectors — a common secondary failure. We check valve cover condition on every Pentastar that comes in with an oil smell or a check engine light."
        ]
      },
      {
        heading: "Jeep Service for Utah's Off-Road and Mountain Driving",
        paras: [
          "Utah's off-road terrain — from Moab's rock crawling to the Wasatch backcountry — puts Jeeps through conditions that change maintenance priorities. Suspension components see more stress and wear faster than in street-only use. Ball joints, tie rod ends, and track bar bushings on Wranglers should be inspected annually if the vehicle sees regular trail use. Lifted Jeeps have changed driveshaft angles that accelerate U-joint wear and can cause vibration if the angles aren't within spec for the lift height.",
          "Jeep cooling systems work hard on Utah's canyon grades during summer. The Pentastar V6 running at sustained high load on a long climb generates significant heat, and any cooling system weakness shows up on a grade. We check hose condition, coolant concentration, and thermostat function as part of any service on Jeeps used for canyon or off-road driving."
        ]
      }
    ],
    issues: [
      {t:'Front-End Death Wobble',d:'Jeep Wranglers and similar models can develop violent front-end shaking triggered by a road imperfection at highway speed. It\'s caused by worn front suspension components — track bars, ball joints, tie rod ends, or steering stabilizer. We find and replace the actual worn parts, not just mask the symptom.',href:'/symptoms/steering-vibration'},
      {t:'Engine Oil Leaks',d:'Jeep V6 and older inline-six engines develop oil cooler housing gasket leaks and valve cover leaks. Oil accumulating on the starter motor causes intermittent no-start conditions that can be hard to diagnose without knowing the source.'},
      {t:'Exhaust Manifold Cracks',d:'Jeep exhaust manifolds crack between cylinders, causing a ticking sound especially when cold and eventual failed emissions tests. We weld or replace depending on crack severity.',href:'/services/exhaust-repair-near-south-salt-lake-ut'},
      {t:'Transfer Case Seal Leaks',d:'Jeep 4WD transfer cases develop output shaft seal leaks, especially on vehicles that see regular off-road use or water crossings. Fluid loss leads to transfer case damage if not addressed.'},
      {t:'Differential Fluid Contamination',d:'Jeep axle differentials can take on water during deep crossings or after seal wear, causing bearing and gear damage. We drain, inspect for contamination, and reseal as part of differential service.'},
      {t:'Suspension Lift Component Fatigue',d:'Lifted Jeeps put additional stress on driveshaft u-joints, CV joints, and ball joints. Improperly adjusted driveshaft angles cause vibration and accelerated wear throughout the drivetrain.'},
      {t:'Catalytic Converter and Exhaust Codes',d:'Jeep V6 engines develop catalytic converter efficiency codes as converters age. We diagnose whether it\'s the converter or an upstream oxygen sensor issue before recommending any replacement.'}
    ],
    tips: [
      'Jeep 4WD systems — whether part-time or full-time — require clean transfer case and differential fluid to operate correctly. Utah\'s off-road terrain, water crossings, and mountain driving are harder on drivetrain fluids than street use. We recommend shorter service intervals for Jeeps that see regular off-road use.',
      'After any significant water crossing or mudding, differential fluid should be checked for water contamination. Contaminated fluid looks milky and causes rapid gear and bearing wear. It\'s a quick check that prevents expensive drivetrain damage.',
      'Jeep suspension components — ball joints, tie rod ends, and track bar bushings — wear faster than typical passenger car suspension due to the vehicle\'s weight and suspension travel. Annual inspection catches wear before it becomes a safety concern.',
      'Jeep cooling systems benefit from annual inspection, especially on vehicles used for towing in Utah\'s canyons. The combination of heat, steep grades, and heavy engine load puts real demands on cooling capacity.'
    ],
    faqs: [
      {q:'What causes death wobble and how do you fix it?',a:'Death wobble is violent front-end shaking triggered by a bump or road imperfection at highway speed. It\'s caused by worn front suspension components — typically the track bar, ball joints, tie rod ends, or steering stabilizer — and usually not a single part. We inspect all front-end components and replace only what\'s actually worn.'},
      {q:'How often should I service my Jeep\'s 4WD system?',a:'Transfer case fluid every 30,000 miles, front and rear differential fluid every 30,000 miles. If you drive off-road regularly or through water, shorten those intervals to 15,000 miles and check immediately after any significant water crossing or mud driving.'},
      {q:'Why is my Jeep leaking oil?',a:'The most common oil leak points on Jeep engines are the oil cooler housing gasket and valve cover gaskets. Oil accumulating on the starter motor causes intermittent no-start conditions, so this is worth addressing promptly rather than letting it continue.'},
      {q:'My Jeep vibrates at highway speed after a lift kit was installed. What\'s wrong?',a:'Lift kit installation changes driveshaft angles, which causes vibration if the driveshafts aren\'t properly adjusted or upgraded. U-joint wear is also accelerated at incorrect angles. We inspect the driveshaft geometry and recommend the correct fix.'},
      {q:'Is Jeep reliable for daily driving?',a:'Yes — Jeeps are durable vehicles that handle daily driving well when properly maintained. The areas needing the most attention are drivetrain fluid service, front-end suspension components, and cooling. With regular service, they\'re capable and long-lasting.'}
    ]
  },
  'Dodge': {
    whatHeading: "Full-Service Dodge and Ram Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Dodge and Ram vehicles in South Salt Lake since 1990 — trucks, muscle cars, and SUVs across the full lineup. We handle V8 engine service including cylinder deactivation system diagnosis and repair, automatic transmission fluid service, brake work for vehicles that take real load on Utah's canyon grades, cooling and electrical diagnostics, and clutch work on manual-equipped models. Every Dodge or Ram we take in starts with a free diagnosis — you'll know exactly what we found, what the repair costs, and why it's needed before any work begins.",
    whyIntro: "Dodge and Ram dealers in Salt Lake are billing at $150–175 per hour for service work on vehicles that their service departments process in volume. Your HEMI gets written up by a service advisor who may or may not understand what MDS lifter collapse sounds like, handed to a tech on a flat-rate clock, and returned with a multipoint inspection. At Scott's, the mechanic who pulls the diagnostic codes on your Charger or Ram is the same one who drops the pan, checks the lifters, and explains what was found. We're not running a quota system. We're an independent shop that's been doing this work in South Salt Lake since 1990, and we've worked through enough HEMI lifter failures and TIPM electrical gremlins to know how to diagnose them correctly before recommending a repair.",
    whoContent: {
      heading: "Who to Trust for Dodge and Ram Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. One mechanic handles your vehicle from diagnosis through repair — no service advisor layer, no upsell quota.",
        "We work on the full Dodge and Ram lineup — Chargers, Challengers, Durangos, and Ram 1500 through 2500 trucks. We give you a straight answer about what your vehicle actually needs and what can safely wait."
      ]
    },
    whenContent: [
      "Bring your Dodge or Ram in if you hear a tick or knock at startup that you didn't notice before, feel a shudder or hesitation on the highway, or notice your brakes are taking more pedal to stop — especially if you do regular canyon drives. These aren't sounds and feelings to wait out. Free diagnosis before any recommendation.",
      "If your Dodge or Ram is a truck you actually use for towing or hauling, Utah's mountain grades are harder on your vehicle than most factory service schedules assume. Bring it in and we'll give you an honest picture of where things stand."
    ],
    process: [
      { step: 1, title: "Describe What You're Hearing or Feeling", desc: "A tick, a shift that hesitates, an electrical fault that comes and goes. Dodge and Ram symptoms often have specific patterns — the more detail you give us, the faster we can narrow it down." },
      { step: 2, title: "Free Diagnosis Before Any Work", desc: "We pull fault codes, road test, and listen to the engine under load. For HEMI tick and MDS concerns, we inspect lifter operation before recommending anything." },
      { step: 3, title: "A Clear Explanation of What We Found", desc: "Whether it's a collapsing lifter, a TIPM fault code, or a brake system at its limit, we explain the finding in plain terms and walk through what the repair involves." },
      { step: 4, title: "You Decide What Gets Done", desc: "Written estimate before work starts. If a repair can wait, we tell you. If something creates a safety risk if deferred, we explain why." },
      { step: 5, title: "Verified and Returned", desc: "Road test after every repair. For HEMI work, we verify oil pressure and listen for recurrence under load before the vehicle goes back to you." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "HEMI Lifter and Valve Train Repair", desc: "MDS collapsed lifter diagnosis, individual lifter replacement, and MDS delete on HEMI 5.7L and 6.4L engines. Includes camshaft inspection for lobe damage." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Pad, rotor, and caliper service for Charger, Challenger, Durango, and Ram. Brake fluid flush for vehicles doing canyon grades." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Manifold and Stud Repair", desc: "Dodge exhaust manifold stud failure is common — studs snap in the cylinder head. We extract broken studs and repair or replace manifolds as needed." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump and Cooling System", desc: "Cooling system service, thermostat and water pump replacement for HEMI and V6 Dodge engines." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Suspension Service", desc: "Shock and strut replacement and front suspension inspection for Charger, Challenger, and Durango." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Axle and Drivetrain", desc: "CV axle and boot service, front differential, and AWD coupling for Durango and Ram 1500 4WD models." },
      { slug: "catalytic-converter-service-near-south-salt-lake-ut", name: "Catalytic Converter Service", desc: "Converter diagnosis and replacement for HEMI and V6 Dodge engines. Stainless exhaust welding where applicable." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "Complete Dodge and Ram Service", desc: "Full mechanical service across all Dodge and Ram platforms — trucks, performance cars, and SUVs." }
    ],
    intro: "Independent Dodge repair in South Salt Lake since 1990. We service Chargers, Challengers, Durangos, and the full Dodge lineup — free diagnosis, written estimate, and pricing well below dealer rates.",
    whyUs: [
      { title: "HEMI Lifter and MDS Expertise", desc: "Full MDS lifter replacement and AFM disable is a repair we do regularly. Done correctly, it eliminates the most common HEMI failure pattern and doesn't come back." },
      { title: "Exhaust Manifold Stud Extraction", desc: "HEMI exhaust manifold stud failure is common and requires careful extraction technique. We handle it without damaging the cylinder head threads." },
      { title: "Performance Vehicle Experience", desc: "Charger and Challenger owners push their vehicles harder than average. We understand what performance driving does to brakes, transmission, and cooling in Utah's terrain." },
      { title: "Free Diagnosis", desc: "Every Dodge repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "The HEMI V8 and MDS: What Owners Should Understand",
        paras: [
          "Dodge's 5.7L and 6.4L HEMI engines with Multi-Displacement System deactivate four cylinders at light throttle to improve fuel economy. The system uses specialized lifters that can collapse on command. The failure mode is when lifters collapse at the wrong time — under load — causing misfires, a pronounced ticking sound, and oil consumption. The 5.7L HEMI in Charger, Challenger, Ram, and Durango is the most common application where we see this failure.",
          "The correct repair is replacing all lifters — not just the collapsed ones — because system-wide lifter wear is the underlying condition. We also disable the MDS system through programming as part of the repair, switching the engine to a standard V8 configuration. This eliminates the failure mode entirely. For vehicles where the engine is still healthy, MDS disable is a preventive choice some owners make; for vehicles that have already experienced lifter failure, it's typically the right call alongside the lifter replacement."
        ]
      },
      {
        heading: "Dodge Charger and Challenger: Performance Service in Utah's Terrain",
        paras: [
          "The Charger and Challenger are genuinely capable performance vehicles — heavy, powerful, and capable of generating significant heat through brakes and drivetrain on canyon roads. Utah's Parleys Canyon, Big Cottonwood, and Little Cottonwood grades are real tests for brake systems on performance driving days. Brake pad compound selection matters on these vehicles; performance-oriented pads handle sustained heat better than standard street pads.",
          "Transmission fluid in the ZF 8HP unit used in most modern Charger and Challenger applications should be serviced every 45,000-60,000 miles for normal use. Performance driving and canyon use shorten this to 30,000 miles. The ZF 8HP is a robust transmission, but fluid degradation causes shift quality to change subtly before causing any fault codes."
        ]
      },
      {
        heading: "The Durango: Dodge's Most Versatile Platform",
        paras: [
          "The Durango shares its platform with the Jeep Grand Cherokee and uses similar drivetrain components — including the 3.6L Pentastar V6 and available HEMI V8. As a three-row family SUV used for towing in Utah's terrain, transmission fluid service every 30,000 miles for towing applications, differential fluid service at the same interval, and more frequent brake inspection are all warranted.",
          "Transfer case fluid service applies to AWD Durango models on the same schedule as other Jeep/Ram/Dodge 4WD vehicles. Utah's winters and mountain roads mean the AWD system sees real use — maintenance matters more here than in flat urban environments."
        ]
      }
    ],
    issues: [
      {t:'Hemi Cam and Lifter Failure',d:'Dodge Hemi engines with MDS cylinder deactivation develop collapsed lifters and cam wear over time, causing misfires and ticking. We replace all lifters and offer MDS disable for improved long-term reliability.',href:'/symptoms/engine-rattling'},
      {t:'Exhaust Manifold Bolt Breakage',d:'Dodge Hemi engines are prone to broken exhaust manifold bolts causing a distinct ticking sound and exhaust leaks. Extraction requires careful technique to avoid damaging threads in the cylinder head.',href:'/services/exhaust-repair-near-south-salt-lake-ut'},
      {t:'Transmission Cooler Line Corrosion',d:'Dodge transmission cooler lines corrode and develop leaks, particularly in Utah\'s winter road salt conditions. We replace with quality lines that resist the corrosion that damages the OEM steel lines.'},
      {t:'Electrical System Issues',d:'Dodge vehicles can develop electrical faults in the integrated power module causing random no-starts, fuel pump issues, and intermittent electrical gremlins. We diagnose these systematically before recommending any component replacement.'},
      {t:'Transfer Case Seal Leaks',d:'Dodge 4WD vehicles develop transfer case output seal leaks that allow fluid loss over time. Catching seal leaks early prevents transfer case bearing damage and gear wear.'},
      {t:'Brake Rotor Warping',d:'Dodge performance vehicles and trucks put high demands on brake rotors. Hard braking — common on Utah\'s canyon roads — can cause rotor warping that shows up as pulsation and vibration when stopping.'},
      {t:'Power Steering System Wear',d:'Dodge power steering systems develop high-pressure hose leaks and pump wear over time, causing whining noise and eventual loss of steering assist if the fluid drops low enough.'}
    ],
    tips: [
      'Dodge Hemi engines with MDS require specific oil weight — the MDS system is sensitive to viscosity. Using the wrong grade causes solenoid sticking and accelerates lifter failure. We verify the correct spec before every Dodge oil service.',
      'Dodge automatic transmissions — whether ZF 8-speed, NAG1 5-speed, or older units — benefit significantly from fluid changes every 45,000-60,000 miles despite "lifetime" fill claims. Towing or mountain driving shortens this to 25,000-30,000 miles.',
      'Dodge vehicles used in Utah\'s winters see heavy road salt exposure on the undercarriage. Annual undercarriage inspection and corrosion protection keeps transmission cooler lines, brake lines, and exhaust components from deteriorating prematurely.',
      'Dodge performance vehicles put significant demands on brake systems during Utah canyon driving. Brake pad compound and rotor selection matter for both safety and longevity — we can advise on the best setup for how you use your vehicle.'
    ],
    faqs: [
      {q:'My Dodge Hemi is ticking. Is it serious?',a:'Hemi tick has two common causes: broken exhaust manifold bolts (an exhaust leak that worsens over time) or collapsed MDS lifters (an internal engine failure). We diagnose which one before recommending any repair — the diagnosis determines the right fix entirely.'},
      {q:'Should I delete MDS on my Hemi?',a:'If you\'re experiencing lifter failures, MDS delete is typically the right choice. We replace the lifters with standard non-MDS versions and disable the system through programming — eliminating the most common failure point on these engines. For healthy engines, some owners choose it preventively.'},
      {q:'How long do Dodge transmissions last?',a:'The ZF 8-speed used in modern Dodge and Ram vehicles is a robust transmission that lasts well with proper maintenance. Change fluid every 45,000-60,000 miles (30,000 if towing). Most transmission issues we see on Dodge vehicles are from neglected fluid service.'},
      {q:'Why does my Dodge have electrical gremlins?',a:'Random electrical issues on Dodge/Chrysler vehicles — fuel pump cutting out, horn going off, windows behaving strangely — are often traced to the integrated power module. We diagnose systematically to confirm the source before recommending any replacement.'},
      {q:'Is Dodge reliable for everyday use?',a:'Modern Dodge vehicles are significantly more reliable than earlier generations. The primary maintenance-sensitive areas are Hemi MDS lifters, transmission fluid service, and electrical systems on older platforms. With proactive maintenance, they\'re capable and enjoyable vehicles.'}
    ]
  },
  'Hyundai': {
    whatHeading: "Full-Service Hyundai Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Hyundais in South Salt Lake since 1990 — Sonatas, Santa Fes, Tucsons, Elantras, and the full Hyundai car and SUV lineup. We handle engine inspection and repair, direct-injection carbon cleaning, dual-clutch transmission diagnosis and service, AWD drivetrain fluid service, cooling, brakes, and suspension work. Every Hyundai we take in gets a free diagnosis before any work is recommended — you'll know exactly what we found, what the repair costs, and why it's needed before anything is touched.",
    whyIntro: "Hyundai dealers in Salt Lake charge in the same tier as Toyota and Honda dealers — $150–165 per hour — and the service department process is similar: a service advisor writes it up, a tech runs the job on a flat-rate ticket, and the car comes back with a printed multipoint inspection. For Hyundai owners dealing with a Theta II recall situation, a DCT that's jerky at low speeds, or a check engine light with a cylinder misfire code, that service model can be expensive and slow. At Scott's, the mechanic who reads your Hyundai's codes and identifies the DCT actuator fault is the same one who does the service — and explains it to you in plain language before any work begins. We don't replace components that a proper diagnosis shows don't need replacing.",
    whoContent: {
      heading: "Who to Trust for Hyundai Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. The mechanic who diagnoses your Hyundai is the person who repairs it and hands you the keys — same person, complete accountability.",
        "We know the Hyundai lineup and the failure patterns across different model years. When you bring your Hyundai here, you get a straight answer about where your specific vehicle stands — not a generic service list based on mileage."
      ]
    },
    whenContent: [
      "Bring your Hyundai in if you hear a knock or unusual noise under acceleration, notice you're adding oil between changes, or if shifts feel jerky and hesitant at low speeds — especially in stop-and-go traffic. These are worth diagnosing early. There's no charge to find out what's going on before any decision is made.",
      "If your Hyundai is past 60,000 miles and you haven't confirmed whether any applicable recall service was completed, it's worth a visit to check — even if nothing feels wrong yet. We'd rather tell you everything looks fine than have you find out the hard way."
    ],
    process: [
      { step: 1, title: "Tell Us What You've Noticed", desc: "A knock under load, a jerky shift at low speed, an oil consumption concern, or a check engine code. Hyundai symptoms often have specific causes — your description helps us start in the right place." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "We pull codes, road test the transmission, check oil consumption history, and inspect the engine for signs of rod knock or bearing wear before recommending anything." },
      { step: 3, title: "We Walk Through the Findings With You", desc: "Whether it's a DCT actuator, a carbon buildup situation, or something else entirely, we explain exactly what we found and what the repair involves. Written estimate before work begins." },
      { step: 4, title: "Targeted Repairs, Not Component Assumptions", desc: "We replace what the diagnosis shows needs replacing. If the DCT actuator is the issue — not the full transmission — that's what gets serviced. We don't upsell based on assumptions." },
      { step: 5, title: "Test Drive and Handoff", desc: "Road test after every repair to verify the fix before your Hyundai leaves the shop. We walk you through what was done at pickup." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Engine Diagnosis and Theta II Inspection", desc: "Rod knock diagnosis, oil consumption evaluation, and engine assessment for Hyundai Theta II 2.0L and 2.4L engines with known recall-related failure patterns." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "GDI Carbon Cleaning", desc: "Intake valve carbon deposit removal for Theta II and other Hyundai GDI engines. Restores idle quality, throttle response, and fuel economy at 50,000-60,000 mile intervals." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Pad, rotor, and brake fluid service for Palisade, Tucson, Sonata, and Santa Fe. Especially important for AWD models doing mountain canyon driving." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Axle Service", desc: "CV axle and boot replacement across Hyundai front-wheel-drive and AWD platforms." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Suspension and Strut Service", desc: "Strut and shock replacement for Hyundai sedans and SUVs. Utah road salt accelerates strut corrosion on Sonata and Elantra underbodies." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump and Cooling System", desc: "Cooling system service, thermostat and water pump replacement for Hyundai 4-cylinder and V6 engines." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Exhaust manifold, downpipe, and muffler repair and replacement across all Hyundai models." },
      { slug: "shock-replacement-near-south-salt-lake-ut", name: "Shock Replacement", desc: "Rear shock replacement for Hyundai SUVs and sedans. Often due together with struts on higher-mileage vehicles." }
    ],
    intro: "Trusted Hyundai repair in South Salt Lake since 1990. We service Elantras, Tucsons, Santa Fes, Sonatas, Palisades, and the full Hyundai lineup — free diagnosis, written estimate, and honest pricing without upsell pressure.",
    whyUs: [
      { title: "Theta II Engine Knowledge", desc: "We know which Hyundai models and years are affected by the Theta II recall, how to diagnose bearing issues, and how to help owners understand their coverage options." },
      { title: "DCT Transmission Service", desc: "Hyundai dual-clutch transmission shudder and jerky shifts are often clutch actuator related — not full transmission failure. We diagnose the actual issue before recommending a repair scope." },
      { title: "Correct Fluid Specifications", desc: "Hyundai AWD systems and transmissions require specific fluid types. We stock and use the correct spec for every Hyundai service — not generic substitutes." },
      { title: "Free Diagnosis", desc: "Every Hyundai repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "The Theta II Engine: What Hyundai Owners Should Know",
        paras: [
          "Hyundai's 2.0L and 2.4L Theta II GDI engines — used in Sonata, Santa Fe, and Tucson models from roughly 2011-2019 — were subject to a significant recall for connecting rod bearing failure caused by manufacturing debris left inside the engine during assembly. The bearing failure leads to a knocking sound, oil pressure loss, and eventual engine seizure. The recall has been extended multiple times, and some affected vehicles qualify for engine replacement even outside the original warranty period.",
          "If you own a Hyundai with a 2.0L or 2.4L engine from those model years, we can check your VIN against the recall database. For engines outside recall coverage that show bearing symptoms, we diagnose the extent of wear before discussing repair options. Engine replacement is sometimes the most cost-effective path depending on the vehicle's value and overall condition."
        ]
      },
      {
        heading: "Hyundai's Dual-Clutch Transmission: Service vs Replacement",
        paras: [
          "Hyundai's 7-speed wet dual-clutch transmission — used in certain Elantra, Sonata, and Tucson models — has a known issue with clutch actuator wear that causes jerky acceleration at low speeds, shuddering, and hesitation when pulling away from a stop. Many owners are told they need a new transmission — in reality, the issue is frequently the clutch actuator assembly and transmission control module calibration, which we can address without full transmission replacement.",
          "Proper diagnosis is important here because the symptoms can also indicate clutch pack wear in higher-mileage examples. We test the actuator function and check for fault codes specific to the actuator before recommending a repair scope. The difference in cost between an actuator service and a transmission replacement is substantial."
        ]
      },
      {
        heading: "Hyundai Maintenance in Utah's Climate",
        paras: [
          "Hyundai's direct-injection engines — including the Theta II GDI and its successors — accumulate carbon on the intake valves over time. The GDI design doesn't wash the valves with fuel as port-injection engines do. As carbon builds up over 50,000+ miles, idle quality becomes rougher, throttle response softens, and fuel economy decreases gradually. An intake cleaning service restores performance and is particularly relevant for Utah drivers with consistent highway mileage.",
          "Hyundai AWD models use an electronically controlled coupling that requires the manufacturer-specified fluid changed on schedule. Running degraded or generic fluid causes coupling failure that's expensive to address. We verify AWD fluid condition at every inspection on Hyundai AWD vehicles."
        ]
      }
    ],
    issues: [
      {t:'Engine Bearing Failure (Theta II)',d:'Hyundai vehicles with 2.0L and 2.4L Theta II engines are subject to an ongoing recall for connecting rod bearing failure. We diagnose affected engines, check VINs, and help navigate warranty claims where applicable.'},
      {t:'Dual-Clutch Transmission Shudder',d:'Hyundai vehicles equipped with the dual-clutch transmission can experience clutch actuator failure causing jerky acceleration, shuddering, and shifting hesitation. We service clutch actuators and reprogram the transmission control module.',href:'/symptoms/vibration-when-accelerating'},
      {t:'Catalytic Converter Theft Prevention',d:'Hyundai catalytic converters are common theft targets due to their precious metal content. We install anti-theft shields and can advise on parking habits that reduce theft risk.',href:'/services/catalytic-converter-service-near-south-salt-lake-ut'},
      {t:'Strut Mount and Suspension Noise',d:'Hyundai front strut mounts develop clunking and popping noises over bumps over time. It\'s a common wear item we replace during strut service or independently.',href:'/services/strut-replacement-near-south-salt-lake-ut'},
      {t:'GDI Carbon Buildup',d:'Hyundai direct-injection engines accumulate carbon deposits on intake valves over time, causing rough idle, reduced power, and increased fuel consumption. An intake cleaning service restores proper combustion.'},
      {t:'AWD Coupling Fluid Neglect',d:'Hyundai AWD systems use an electronically controlled coupling that requires specific fluid changed on schedule. Running degraded or incorrect fluid causes coupling failure and loss of AWD functionality.'},
      {t:'ABS and Brake System Codes',d:'Hyundai brake systems require specific brake fluid specification. Using incorrect fluid can trigger ABS and stability control faults. We use the correct fluid spec for every Hyundai brake service.'}
    ],
    tips: [
      'If your Hyundai has a 2.0L or 2.4L engine, it\'s worth checking whether it\'s covered under the Theta II engine recall — even out-of-warranty vehicles may qualify for engine replacement at no cost. We can check your VIN.',
      'Hyundai direct-injection engines build carbon on intake valves over time — a known trait of GDI technology. A carbon cleaning service every 50,000 miles maintains power output and fuel economy.',
      'Hyundai AWD systems use a coupling that requires the manufacturer-specific fluid changed on schedule. Running generic or degraded fluid causes AWD failure — we stock and use the correct spec.',
      'Hyundai brake systems require specific brake fluid. Using the wrong type can cause ABS and electronic stability control malfunctions. We verify the correct specification before any brake fluid service.'
    ],
    faqs: [
      {q:'Is my Hyundai affected by the engine recall?',a:'Several Hyundai models with 2.0L and 2.4L Theta II engines are covered under an ongoing recall — including vehicles that are out of warranty in some cases. We can check your VIN and, if affected, help you understand your options for warranty repair.'},
      {q:'My Hyundai\'s dual-clutch transmission jerks when accelerating. Can you fix it?',a:'Dual-clutch transmission shudder and jerky shifts are usually clutch actuator related. We service the actuator and reprogram the transmission control module — often resolving the issue without a full transmission replacement.'},
      {q:'Why is my Hyundai\'s check engine light on?',a:'Common causes we see include catalytic converter efficiency codes, purge valve failure, and ignition coil issues. We diagnose with proper scan equipment rather than guessing — the fault code tells us where to look, not necessarily what to replace.'},
      {q:'How often does my Hyundai need an oil change?',a:'Most modern Hyundais can go 7,500 miles on full synthetic. For vehicles with the Theta II engine, we recommend 5,000-mile intervals — these engines are more sensitive to oil condition, and more frequent changes are cheap insurance.'},
      {q:'What maintenance does my Hyundai AWD system need?',a:'The AWD coupling fluid should be changed every 30,000 miles. It\'s a service many owners skip because it\'s not prominently listed in the manual, but neglecting it is the primary cause of AWD system failure on Hyundai all-wheel drive vehicles.'}
    ]
  },
  'Kia': {
    whatHeading: "Full-Service Kia Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Kias in South Salt Lake since 1990 — Sportages, Sorentos, Tellurides, Souls, and the full Kia car and SUV lineup. We handle engine inspection and repair, direct-injection carbon cleaning, AWD drivetrain fluid service, steering and suspension work, brake service, and check engine diagnostics. Kia's presence in the Salt Lake Valley has grown significantly, and we service all of them. Every Kia gets a free diagnosis before any work is recommended — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Kia dealers in Salt Lake are billing $150–165 per hour, and the service model is the same one you'll find at any volume dealer: a service advisor writes up your car, a tech runs the job to a flat-rate clock, and the estimate arrives before anyone has actually looked at your specific vehicle's condition. For Kia owners navigating the Theta II engine recall, a steering coupler clunk that comes and goes, or a GDI engine that's starting to hesitate at idle, that system produces a lot of unnecessary repair recommendations. At Scott's, you're working directly with the mechanic who looks at your car. If the Telluride's rear differential coupling just needs a fluid change rather than a replacement, that's what we tell you — and that's all we charge for.",
    whoContent: {
      heading: "Who to Trust for Kia Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We work on the full Kia lineup — Telluride, Sorento, Sportage, Stinger, and everything else. The mechanic who diagnoses your Kia is the one who repairs it. No service advisors between you and the person doing the work.",
        "We know the Kia platform and the failure patterns across different models and years. You get a straight answer about what your vehicle actually needs — nothing more, nothing less."
      ]
    },
    whenContent: [
      "Bring your Kia in if you hear a faint knock under acceleration that's different from normal engine noise, or if you feel a clunk or thud through the steering wheel during low-speed turns. Both are worth diagnosing early rather than waiting to see if they get worse. Free diagnosis before any recommendation.",
      "If your Kia is past 60,000 miles and you can't confirm any applicable recall work was completed, a diagnostic visit is worth it even if nothing feels obviously wrong. Better to know."
    ],
    process: [
      { step: 1, title: "Tell Us What You're Noticing", desc: "A knock under acceleration, a clunk in the steering, a DCT hesitation, or a scheduled service. The more specific, the better — but 'it doesn't feel right' is a completely fine place to start." },
      { step: 2, title: "Free Diagnostic Inspection", desc: "Road test, fault code scan, steering and suspension inspection, and engine evaluation before any recommendation is made. Stinger diagnoses include performance-specific checks under load." },
      { step: 3, title: "We Tell You Exactly What We Found", desc: "Specific, plain-language explanation of the diagnosis. Not a category of repair — the actual component, its condition, and what fixing it involves. Written estimate before work starts." },
      { step: 4, title: "We Do What's Needed — Nothing More", desc: "If the AWD coupling needs fluid and not replacement, that's what happens. If the steering coupler is the clunk source and the rack is fine, we replace the coupler. No assumption-based upsell." },
      { step: 5, title: "Verified Before You Pick It Up", desc: "Road test after every repair. Steering repairs get a full lock-to-lock check and a road test before the car goes back. We walk you through what was done." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Engine Diagnosis and Theta II Inspection", desc: "Rod knock diagnosis and engine assessment for Kia Theta II 2.0L and 2.4L engines in Optima, Sorento, and Sportage. Recall history review and engine health evaluation." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "GDI Carbon Cleaning", desc: "Intake valve carbon deposit cleaning for Kia GDI engines. Restores throttle response and idle quality on engines past 50,000 miles." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Pad, rotor, and brake fluid service across all Kia models. Stinger brake inspections for vehicles doing canyon road use." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Axle Service", desc: "CV axle and boot replacement on Kia front-wheel-drive and AWD platforms. Clicking on turns is the common first sign." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Suspension Service", desc: "Strut and shock replacement for Kia sedans and SUVs. Telluride and Sorento suspension inspection for Utah mountain road use." },
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch and Manual Transmission", desc: "Clutch replacement and dual-clutch service for Kia Stinger and manual-transmission Kia models. Stinger dual-mass flywheel and clutch pack service." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump and Cooling System", desc: "Cooling system service and water pump replacement for Kia 4-cylinder and V6 engines including Stinger turbocharged platforms." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Exhaust system repair and replacement for Kia models. Stinger downpipe and turbo exhaust inspection for performance-driven vehicles." }
    ],
    intro: "Trusted Kia repair in South Salt Lake since 1990. We service Tellurides, Sorentos, Sportages, Fortes, and the full Kia lineup — free diagnosis before any work starts, written estimate, and honest pricing well below dealer rates.",
    whyUs: [
      { title: "Theta II Engine Knowledge", desc: "We know which Kia models are affected by the engine recall, how to diagnose bearing symptoms, and how to help owners understand their coverage." },
      { title: "Full Kia Lineup Coverage", desc: "From the small Rio and Soul to the Stinger's rear-wheel-drive platform and the Telluride's three-row layout — we service the full Kia range." },
      { title: "Correct Fluid Specifications", desc: "Kia AWD systems and transmissions require specific fluid. We stock and use the correct spec — not generic alternatives." },
      { title: "Free Diagnosis", desc: "Every Kia repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "Kia and the Theta II Engine Recall: What Owners Need to Know",
        paras: [
          "Kia's 2.0L and 2.4L Theta II GDI engines — used in Optima, Sorento, and Sportage from the early 2010s through mid-decade — share the same manufacturing issue as the Hyundai recall. Metal debris left in the oil passages during engine assembly can cause connecting rod bearing failure, leading to an engine knock, oil pressure loss, and in serious cases, sudden engine failure. The recall has been extended multiple times and some vehicles qualify for engine replacement outside the original warranty period.",
          "We can check your VIN against the recall database and help you understand what coverage applies to your vehicle. For Kias outside coverage, or where the engine shows symptoms not covered by the recall, we diagnose the extent of bearing wear before discussing repair options."
        ]
      },
      {
        heading: "Kia's Expanding Lineup: Platform Differences That Matter for Service",
        paras: [
          "Kia's lineup spans more engineering ground than most people realize. The Soul and Rio sit on front-wheel-drive compact platforms with straightforward service profiles. The Telluride and Sorento are substantial three-row SUVs with different engine options and AWD systems. The Stinger is rear-wheel-drive — unusual for Kia — with a turbocharged 2.5L or 3.3L V6, and its service needs resemble a performance vehicle more than a crossover.",
          "Knowing which platform you're working with matters for accurate diagnosis. We identify your specific Kia's engine, transmission, and drivetrain configuration before making any maintenance recommendations. Stinger and Sportage GT-Line turbo engines benefit from shorter oil intervals than their naturally aspirated counterparts."
        ]
      },
      {
        heading: "Kia Ownership in Utah's Climate",
        paras: [
          "Kia's direct-injection engines accumulate carbon on intake valves over time — the same pattern as Hyundai, since they share engine technology. An intake cleaning every 50,000 miles keeps combustion efficient and idle quality consistent. This service is particularly relevant for Utah drivers with higher annual mileage.",
          "Utah winters add road salt on the undercarriage that accelerates corrosion on brake lines, exhaust hardware, and AWD coupling components. We inspect the undercarriage during winter service visits on Kia models. AWD coupling fluid should be checked and changed on schedule — it's a service that gets overlooked but has a real impact on AWD longevity in mountain driving conditions."
        ]
      }
    ],
    issues: [
      {t:'Engine Bearing Failure (Theta II)',d:'Like Hyundai, Kia vehicles with 2.0L and 2.4L Theta II engines are subject to an ongoing recall for connecting rod bearing failure. We check VINs, diagnose affected engines, and assist with warranty coordination.'},
      {t:'Steering Coupler Clunking',d:'Kia vehicles develop a clunking or popping noise when turning the steering wheel, caused by a worn intermediate steering shaft coupler. It\'s a safety-relevant issue — steering feel degrades as it worsens.',href:'/symptoms/steering-vibration'},
      {t:'AC Compressor Failure',d:'Kia AC compressors can fail and send metal debris through the entire system, requiring a full system flush and compressor replacement — not just a component swap — to prevent repeat failure.'},
      {t:'Timing Chain Rattle',d:'Kia GDI engines develop timing chain rattle from stretched chains and worn guides, typically showing up after 80,000 miles. Catching it early means chain and guide replacement rather than engine damage.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'GDI Carbon Buildup',d:'Kia direct-injection engines accumulate carbon deposits on intake valves that restrict airflow and cause rough idle, hesitation, and reduced fuel economy. An intake cleaning service restores performance.'},
      {t:'AWD Coupling Fluid Neglect',d:'Kia AWD systems use an electronically controlled coupling requiring specific fluid on a regular change schedule. Generic ATF or neglected fluid causes coupling failure and loss of AWD function.'},
      {t:'Coolant System Thermostat Wear',d:'Kia thermostats wear over time and can fail in either direction — causing overheating or an engine that runs too cool. Both conditions affect performance and fuel economy and are straightforward to address.'}
    ],
    tips: [
      'Kia\'s powertrain warranty is transferable, but coverage varies between original and subsequent owners. If you\'re buying a used Kia, verifying what warranty remains — and whether the vehicle has any open recalls — is worth doing before purchase.',
      'Kia GDI engines need carbon cleaning every 50,000 miles. The direct-injection design doesn\'t wash intake valves with fuel the way port-injection engines do — carbon builds up over time and affects performance.',
      'Kia AWD systems use an electronically controlled coupling that requires specific fluid. Generic ATF causes coupling failure. We stock and use the correct specification for every Kia AWD service.',
      'Kia timing chains should be inspected periodically on higher-mileage vehicles. A cold-start rattle that quiets as the engine warms up is an early sign of chain or guide wear — catching it early is far less expensive than dealing with a skipped chain.'
    ],
    faqs: [
      {q:'Does my Kia have the recalled engine?',a:'Multiple Kia models with 2.0L and 2.4L Theta II engines may be covered under the ongoing recall — including some out-of-warranty vehicles. We check your VIN and help you understand what coverage applies to your specific vehicle.'},
      {q:'Why does my Kia clunk when I turn the wheel?',a:'The intermediate steering shaft coupler wears out on many Kia models, creating a clunking or popping sound when turning — especially at low speed. It\'s a safety concern because steering feel degrades as it worsens. We replace the coupler as a straightforward repair.'},
      {q:'How reliable are Kia vehicles?',a:'Modern Kias are significantly more reliable than earlier generations. The main areas to watch are the Theta II engine recall on applicable models, GDI carbon buildup, and AWD coupling fluid maintenance. With proactive service, they\'re solid vehicles.'},
      {q:'How often should my Kia\'s oil be changed?',a:'Most modern Kias can go 7,500 miles on full synthetic. If your vehicle has a Theta II engine or is turbocharged, we recommend 5,000-mile intervals — more frequent changes are cheap insurance on engines that benefit from clean oil.'},
      {q:'What does my Kia AWD system need for maintenance?',a:'The AWD coupling fluid should be changed every 30,000 miles with the manufacturer-specified fluid. It\'s a service many owners skip, but neglecting it is the most common cause of Kia AWD coupling failure — which is an expensive repair compared to the cost of the fluid service.'}
    ]
  },
  'Volkswagen': {
    whatHeading: "Full-Service Volkswagen Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Volkswagens in South Salt Lake since 1990 — Jettas, Golfs, GTIs, Tiguans, Passats, and the rest of the VW lineup. We handle VW-spec oil and fluid service, turbocharged engine timing and carbon cleaning, dual-clutch transmission fluid and filter service, clutch and manual transmission repair, and check engine diagnostics. Every Volkswagen we take in starts with a free diagnosis — you'll know exactly what we found, what the repair costs, and why it's needed before any work begins.",
    whyIntro: "VW dealers in Salt Lake are billing $160–185 per hour — comparable to BMW and Audi — for vehicles that are, in many cases, Jetta and Tiguan owners running practical family transportation. The dealer service model applies the same volume-processing approach to a Golf GTI as it does to a Touareg: service advisor, flat-rate tech, multipoint inspection list to approve or decline. At Scott's, you're dealing with a mechanic who understands what a TSI tensioner failure looks like in progress, what the correct VW 507 oil is actually for, and why the 'lifetime' DSG fluid recommendation is one of the more expensive service myths VW has perpetuated. We use VW-spec fluids, we know the platform's specific failure patterns, and we explain what we find before any work begins. Independently owned in South Salt Lake since 1990.",
    whoContent: {
      heading: "Who to Trust for Volkswagen Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. VW owners in Salt Lake tend to care about their vehicles — they deserve a mechanic who takes those cars seriously. The person who diagnoses your VW is the same one who repairs it. No service advisor layer.",
        "We know the VW platform, the known failure patterns, and which services actually matter versus which ones can wait. You get a straight answer about what your car needs and honest pricing to match."
      ]
    },
    whenContent: [
      "Bring your VW in right away if you hear a rattle or slapping noise at cold start that quiets after the engine warms. This is not a symptom to monitor or wait on — bring it in before driving another few thousand miles. Getting a diagnosis now costs a fraction of what ignoring it could.",
      "If your VW's shifts have become jerky or hesitant at low speeds — especially in stop-and-go traffic — that's worth a diagnosis too. It's often a fluid issue rather than a mechanical problem, and catching it as a fluid problem is a very different repair than catching it later."
    ],
    process: [
      { step: 1, title: "Tell Us What the VW Is Doing", desc: "A cold-start rattle, a DSG hesitation, a carbon buildup symptom like rough idle, or a scheduled service. VW symptoms often point to specific known issues — your description is the fastest path to the right diagnosis." },
      { step: 2, title: "Free Diagnosis — VW-Specific Inspection", desc: "Fault code scan using VW-compatible diagnostic tooling, cold-start evaluation, road test of DSG shift quality, and inspection of TSI timing system before any recommendation is made." },
      { step: 3, title: "We Explain What We Found, Specifically", desc: "Whether it's a tensioner showing early wear, a DSG clutch pack past its service interval, or GDI carbon affecting throttle response, we explain the finding in plain language. Written estimate before any work." },
      { step: 4, title: "VW-Spec Parts and Fluids Only", desc: "We use VW-approved oil ratings and OEM-equivalent parts. Cutting corners on VW fluid spec is one of the fastest ways to turn a maintenance issue into a warranty dispute or a transmission rebuild." },
      { step: 5, title: "Road Test and Confirm Before Pickup", desc: "Every VW is road tested after repair — DSG shift quality verified, cold-start behavior checked, fault codes cleared and confirmed absent. We walk you through what was done." }
    ],
    commonRepairs: [
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "TSI Timing Chain Tensioner Service", desc: "Early-revision tensioner replacement on 1.8T and 2.0T TSI engines before or after failure. Includes timing chain inspection and cam timing verification." },
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch and DSG Service", desc: "Manual transmission clutch replacement and DSG dual-clutch fluid and filter service. DSG service recommended at 40,000-mile intervals — not lifetime." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "GDI Carbon Cleaning (Walnut Blast)", desc: "Walnut media blasting of intake valves on TSI GDI engines. Restores idle quality, throttle response, and fuel economy — typically needed at 50,000-60,000 miles." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Pad, rotor, and brake fluid service for Jetta, Golf, GTI, and Tiguan. GTI brake inspection for vehicles doing canyon driving." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump and Cooling System", desc: "VW TSI engine water pumps are plastic-impeller designs prone to impeller failure. Inspection and replacement before it causes overheating." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Axle Service", desc: "CV axle and boot replacement on VW front-wheel-drive and 4Motion AWD platforms." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Suspension Service", desc: "Strut replacement for VW sedans and SUVs. DCC adaptive damper diagnosis on equipped GTI and Tiguan models." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust and Downpipe Repair", desc: "Exhaust system repair for TSI and TDI VW engines. Downpipe inspection on turbo models." },
      { slug: "catalytic-converter-service-near-south-salt-lake-ut", name: "Catalytic Converter Service", desc: "Converter inspection, diagnosis, and replacement for VW TSI and TDI engines. DPF-related service on diesel models." }
    ],
    intro: "Independent Volkswagen repair in South Salt Lake since 1990. We service Jettas, Golfs, GTIs, Tiguans, and the full VW lineup — free diagnosis, written estimate, and transparent pricing well below dealer rates.",
    whyUs: [
      { title: "DSG Transmission Service", desc: "DSG fluid and filter change every 40,000 miles prevents the mechatronic unit failures we see on cars that skipped service. We know the procedure and use the correct fluid." },
      { title: "Timing Chain Tensioner Expertise", desc: "The early TSI timing chain tensioner failure is serious and preventable. We identify which revision your VW has and recommend the update before it becomes an engine problem." },
      { title: "VW-Spec Fluids Only", desc: "VW engines require oil with specific VW approval ratings. We verify the correct spec for your engine — using wrong-spec oil causes timing chain wear and can damage diesel particulate filters." },
      { title: "Free Diagnosis", desc: "Every VW repair starts with a free diagnosis. You know exactly what we found before any work begins." }
    ],
    richContent: [
      {
        heading: "VW's TSI Timing Chain: The Most Consequential Service Item You Haven't Heard Of",
        paras: [
          "Volkswagen's TSI turbocharged four-cylinder engines — used in Jetta, Passat, Tiguan, Golf, and most other VW models from the mid-2000s through mid-2010s — had an early-revision timing chain tensioner that could fail without warning. The tensioner maintains chain tension through oil pressure; when it fails, the chain can jump or break, and on an interference engine the result is piston-to-valve contact and severe engine damage. VW issued a technical service bulletin and updated the tensioner design.",
          "If your VW has a TSI engine and hasn't had the updated tensioner installed, this should be a top priority. The preventive repair is straightforward and costs a fraction of what engine repair from a skipped chain would cost. We check timing chain tensioner revision status on every TSI engine that comes through the shop."
        ]
      },
      {
        heading: "The DSG Dual-Clutch Transmission: Service It or Replace It",
        paras: [
          "VW's DSG is a dual-clutch transmission that provides the fuel efficiency of a manual with the convenience of an automatic. It's a robust unit when properly maintained, but the transmission fluid and filter should be changed every 40,000 miles, and the mechatronic unit — the hydraulic control module — is sensitive to fluid quality. VW labels the DSG as 'lifetime fill,' which is one of the reasons we see mechatronic unit failures on cars that never had a fluid service.",
          "The most common DSG symptom we diagnose is hesitation and jerky shifting at low speed. This is often fluid-related and resolves after a proper fluid and filter service. In more advanced cases, the mechatronic unit itself needs service or replacement — but that's far less common on vehicles that have kept up with fluid changes."
        ]
      },
      {
        heading: "VW Ownership in Utah: What Changes at Altitude and in Mountain Driving",
        paras: [
          "VW's turbocharged engines perform slightly differently at Utah's altitude than at sea level — the turbo compensates for the thinner air, but for performance-oriented owners driving Golfs or Jettas hard in canyon conditions, the turbo is working harder than at lower altitude, making oil quality and change intervals more important.",
          "Utah winters mean road salt, which affects VW's undercarriage. VW uses steel brake lines and some steel-bodied components that corrode in salt environments. We inspect the undercarriage at fall service visits and address developing corrosion before it becomes structural. VW timing belt-equipped engines — older TDIs and some petrol engines — also need attention if the vehicle has been sitting through multiple Utah winters, since belts age from temperature cycling regardless of mileage."
        ]
      }
    ],
    issues: [
      {t:'Timing Chain Tensioner Failure',d:'VW turbocharged engines have a known early-revision timing chain tensioner that can fail without warning, causing the chain to skip and destroying the engine. Preventive tensioner replacement is one of the most important services we perform on VW TSI engines.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Carbon Buildup on GDI Engines',d:'VW direct-injection engines suffer from significant carbon buildup on intake valves over time, causing rough idle, misfires, and power loss. We perform walnut blast carbon cleaning to restore combustion efficiency without removing the engine.'},
      {t:'DSG Dual-Clutch Transmission Issues',d:'VW DSG dual-clutch transmissions can develop mechatronic unit faults causing jerky shifts, gear selection errors, and warning lights. Fluid service every 40,000 miles prevents the most common failures.'},
      {t:'Water Pump and Thermostat Housing Leaks',d:'VW TSI engines use a combined water pump and thermostat housing that cracks and leaks with age. Coolant loss can go unnoticed until overheating occurs — we replace with updated parts during cooling system service.',href:'/services/water-pump-replacement-near-south-salt-lake-ut'},
      {t:'Fuel Injector and High-Pressure Pump Wear',d:'VW high-pressure fuel injection systems develop injector wear and high-pressure pump issues over time, causing rough running and difficulty starting. Proper diagnosis identifies whether it\'s the pump, injectors, or fuel pressure regulation.'},
      {t:'Turbo Boost Pressure Loss',d:'VW turbocharged engines develop boost leaks from intercooler connections, diverter valves, and boost pipes over time. Loss of boost causes sluggish acceleration and increased turbo lag.'},
      {t:'Oil Leaks at Multiple Gaskets',d:'VW engines develop oil leaks at cam cover gaskets, oil cooler seals, and crankshaft seals as they age. Oil on hot exhaust components causes burning smells and should be addressed promptly.'}
    ],
    tips: [
      'VW timing chain tensioners on TSI engines should be replaced preventively well before failure. The cost of the service is a small fraction of what engine damage from a skipped chain costs — we check tensioner revision at every major service on affected VW engines.',
      'VW DSG dual-clutch transmission fluid and filter must be changed every 40,000 miles. VW labels it "lifetime fill" — but we regularly see DSG failures caused by degraded fluid. The service is inexpensive compared to mechatronic unit replacement.',
      'VW engines require oil that meets specific VW approval ratings (502, 504, 507, etc. depending on the engine). Using non-approved oil — even quality synthetic — causes increased wear on timing components and can clog the particulate filter on diesel models.',
      'Carbon cleaning every 50,000 miles is essentially required maintenance on VW direct-injection engines. Skipping it leads to progressive rough idle, hesitation, and reduced power that worsens over time.'
    ],
    faqs: [
      {q:'Is the VW timing chain tensioner issue serious?',a:'Extremely serious. The early-revision tensioner on TSI engines can fail without warning, allowing the timing chain to jump. This bends valves and typically destroys the engine. If your VW hasn\'t had the updated tensioner installed, this should be a top priority — the preventive repair costs a fraction of what engine damage does.'},
      {q:'How often should I service my VW DSG transmission?',a:'Every 40,000 miles for fluid and filter, regardless of what VW suggests about "lifetime" fluid. We see DSG failures regularly on vehicles where fluid was never changed. The service cost is far less than mechatronic unit repair or transmission replacement.'},
      {q:'Why is my VW running rough or losing power?',a:'On GDI engines, carbon buildup on intake valves is the most common culprit — direct injection doesn\'t wash the valves with fuel, so carbon accumulates over time. A walnut blast cleaning restores full performance. We diagnose to confirm the cause before recommending the service.'},
      {q:'What oil does my VW actually need?',a:'VW engines require oil meeting specific VW approval ratings — 502.00, 504.00, 507.00, or others depending on your engine. These aren\'t just recommendations. Using non-approved oil — even high-quality synthetic — causes timing chain wear and can damage the particulate filter on diesel models.'},
      {q:'Is it expensive to maintain a Volkswagen?',a:'VW maintenance is more involved than mainstream brands, but doesn\'t need to be dealer-expensive. The key services — timing tensioner, DSG fluid, carbon cleaning — have predictable schedules. We handle all of them at significantly lower rates than VW dealers, using the same quality parts.'}
    ]
  }
};

// For non-detailed brands, generate generic but distinct content
const defaultContent = (name) => ({
  issues: [
    {t:`${name} Clutch Wear`,d:`We see ${name} clutch wear patterns specific to Salt Lake Valley driving—hill starts, canyon grades, and I-15 commuting all contribute. Our 35 years of experience means accurate diagnosis.`},
    {t:`${name} Brake Service`,d:`${name} brake systems require quality pads and rotors matched to the vehicle's weight and braking characteristics. We use OEM-equivalent or better components.`},
    {t:`${name} Cooling System`,d:`Utah's temperature extremes—hot summers and cold winters—stress ${name} cooling systems. We inspect and replace hoses, thermostats, and water pumps before they fail.`}
  ],
  tips: [
    `${name} vehicles driven in Utah's mountain environment need more frequent brake inspections than factory schedules suggest.`,
    `Always use the oil weight and specification recommended in your ${name} owner's manual. Utah's elevation can affect engine performance with incorrect oil.`,
    `If you drive your ${name} in winter road salt conditions, an annual undercarriage wash and inspection prevents corrosion damage.`
  ],
  faqs: [
    {q:`How often should I service my ${name}?`,a:`Follow your ${name} owner's manual for baseline intervals, but Utah driving conditions—mountain grades, temperature extremes, road salt—typically require shorter intervals. We recommend oil changes every 5,000-7,500 miles and brake inspections every 15,000 miles.`},
    {q:`Do you have experience with ${name} vehicles?`,a:`Absolutely. We've serviced ${name} vehicles for over 35 years in South Salt Lake. Our technicians are experienced with all ${name} models and common issues specific to these vehicles.`},
    {q:`Can you work on my ${name} without voiding the warranty?`,a:`Yes. Federal law (Magnuson-Moss Act) protects your right to have maintenance and repairs performed at independent shops without voiding your manufacturer warranty, as long as the work is done correctly with appropriate parts.`}
  ]
});

// Brand-specific content for remaining brands
const extendedBrandContent = {
  'Mazda': {
    whatHeading: "Full-Service Mazda Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Mazdas in South Salt Lake since 1990 — Mazda3s, CX-5s, CX-9s, MX-5 Miatas, and everything in between. We handle SkyActiv direct-injection carbon cleaning, AWD rear differential fluid service, clutch and manual transmission repair, automatic and CVT fluid service, and the full range of mechanical work a Mazda needs over its lifetime. Every Mazda we take in starts with a free diagnosis — you'll know exactly what we found, what the repair costs, and why it's needed before any work begins.",
    whyIntro: "Mazda dealers in Salt Lake are billing $145–165 per hour for vehicles that are typically owned by people who care about their cars more than average and want the repair done correctly, not just quickly. The Mazda ownership culture — especially among Miata and Mazda3 manual drivers — tends to attract people who notice when a repair is done right and when it isn't. At Scott's, you're working with a mechanic who understands the MX-5's dual-mass flywheel situation well enough to have the honest conversation about whether a solid flywheel conversion makes sense for your specific use. We've been working on Mazdas in South Salt Lake since 1990, and we have a genuine appreciation for what the platform does right — and a clear picture of what the known wear points are.",
    whoContent: {
      heading: "Who to Trust for Mazda Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're a clutch shop at our core — it's in the name — and that matters especially for Mazda drivers with manual transmissions. The mechanic who diagnoses your Mazda is the one who repairs it.",
        "We've worked on Mazdas for over 35 years — Miatas, Mazda3s, CX-5s, CX-9s, and everything in between. We know the platform and give you a straight answer about what your car actually needs."
      ]
    },
    whenContent: [
      "Bring your Mazda in if you notice a shuddering vibration when releasing the clutch from a stop, if your AWD feels hesitant during mountain driving or ski season, or if your car doesn't run as smoothly as it used to. These symptoms usually start subtle and get worse over time. There's no charge to find out what's causing it.",
      "Mazda's engines are genuinely durable when maintained properly. If you're not sure what's due or where your vehicle stands, bring it in and we'll give you an honest picture — at no cost to look."
    ],
    process: [
      { step: 1, title: "Tell Us About Your Mazda and How You Drive It", desc: "A Miata used at High Plains Raceway has different service priorities than a CX-5 doing ski canyon runs all winter. The more context you give us, the better the diagnosis." },
      { step: 2, title: "Free Diagnosis — SkyActiv and Platform-Specific", desc: "Fault code scan, road test, clutch engagement evaluation on Miata and manual models, AWD coupling behavior check, and carbon accumulation assessment before any recommendation." },
      { step: 3, title: "We Explain Options Where They Exist", desc: "Miata clutch chatter has more than one repair path. We explain the actual tradeoffs between dual-mass replacement and solid flywheel conversion so you can make the call based on how your car is used." },
      { step: 4, title: "We Do the Work You Agree To", desc: "Written estimate before anything starts. We're not adding a carbon cleaning to a clutch job unless the diagnosis shows the engine needs it." },
      { step: 5, title: "Road Test — Including Clutch and AWD Verification", desc: "Every Mazda gets a road test after repair. Clutch jobs include full engagement zone verification. AWD service includes coupling response check under load." }
    ],
    commonRepairs: [
      { slug: "clutch-repair-near-south-salt-lake-ut", name: "Clutch Repair and Flywheel Service", desc: "MX-5 Miata dual-mass flywheel clutch replacement and solid flywheel conversion. Manual transmission clutch service for Mazda3, Mazda6, and older Mazda platforms." },
      { slug: "complete-auto-service-near-south-salt-lake-ut", name: "SkyActiv GDI Carbon Cleaning", desc: "Intake valve carbon deposit cleaning for SkyActiv-G direct-injection engines. Recommended at 50,000-mile intervals on CX-5, CX-9, Mazda3, and Mazda6." },
      { slug: "cv-joint-repair-near-south-salt-lake-ut", name: "CV Axle Service", desc: "CV axle and boot replacement on front-wheel-drive and AWD Mazda platforms. Clicking during turns is the common first sign." },
      { slug: "brake-service-near-south-salt-lake-ut", name: "Brake Service", desc: "Pad, rotor, and brake fluid service for all Mazda models. MX-5 brake inspection for track-day and canyon-road use." },
      { slug: "strut-replacement-near-south-salt-lake-ut", name: "Suspension and Strut Service", desc: "Strut and shock replacement for Mazda3 and CX-5. Mazda3 subframe inspection for corrosion on older models in Utah road-salt conditions." },
      { slug: "water-pump-replacement-near-south-salt-lake-ut", name: "Water Pump and Cooling System", desc: "Cooling system service and water pump replacement for SkyActiv 4-cylinder engines. Overheating prevention in high-altitude Utah driving." },
      { slug: "exhaust-repair-near-south-salt-lake-ut", name: "Exhaust Repair", desc: "Exhaust manifold, downpipe, and muffler repair for Mazda models. MX-5 exhaust system inspection and repair for modified and stock setups." },
      { slug: "shock-replacement-near-south-salt-lake-ut", name: "Shock Replacement", desc: "Rear shock replacement for CX-5, CX-9, and Mazda3. Often paired with struts on higher-mileage vehicles." },
      { slug: "timing-chain-repair-near-south-salt-lake-ut", name: "Timing Chain Inspection", desc: "Timing chain and VVT system inspection on high-mileage SkyActiv engines. SkyActiv engines are chain-driven — no belt to replace, but chain stretch is worth monitoring past 150,000 miles." }
    ],
    issues: [
      {t:'Mazda SkyActiv Engine Carbon Buildup',d:'Mazda\'s direct-injection SkyActiv engines accumulate carbon on intake valves, causing rough idle and power loss. We perform walnut blast carbon cleaning to restore performance.'},
      {t:'Mazda Clutch Chatter on Mazda3/MX-5',d:'Manual transmission Mazda3 and MX-5 Miata models develop clutch chatter from the dual-mass flywheel. We offer solid flywheel conversions that eliminate the vibration.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'Mazda Rust-Prone Subframes',d:'Certain Mazda3 and CX-5 model years have subframe corrosion issues accelerated by Utah road salt. We inspect and treat subframes to prevent structural failure.'}
    ],
    tips: [
      'Mazda SkyActiv engines need intake valve carbon cleaning every 50,000 miles. This is the #1 maintenance item Mazda owners miss.',
      'MX-5 Miata soft tops degrade faster in Utah\'s intense UV. Apply protectant every 6 months and park in shade when possible.',
      'Mazda CX-5 and CX-9 AWD systems use a rear differential coupling that requires fluid changes every 30,000 miles—don\'t skip this.'
    ],
    faqs: [
      {q:'Why does my Mazda run rough at idle?',a:'SkyActiv direct-injection engines build carbon on intake valves over time, causing rough idle and hesitation. A walnut blast cleaning every 50,000 miles prevents this. If you\'re already experiencing symptoms, we can restore your engine\'s performance.'},
      {q:'Is the Mazda SkyActiv engine reliable?',a:'Very reliable overall. The main maintenance item is intake valve carbon cleaning due to direct injection. With that addressed, SkyActiv engines routinely exceed 200,000 miles. They\'re some of the best 4-cylinder engines on the market.'},
      {q:'How much does Mazda clutch replacement cost?',a:'Mazda3 and MX-5 clutch replacement runs $800–$1,400. If you\'re converting from the dual-mass flywheel to a solid flywheel (recommended for eliminating chatter), add $200–$400. We provide exact quotes before starting.'}
    ]
  },
  'Mercedes-Benz': {
    whatHeading: "Full-Service Mercedes-Benz Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Mercedes-Benz vehicles in South Salt Lake since 1990 — sedans, SUVs, wagons, and AMG-tuned models across multiple generations. We handle air suspension repair, automatic transmission fluid and filter service, timing and balance shaft repairs, oil leaks common to German V6 and V8 engines, and all Mercedes-spec fluid and maintenance services. Every Mercedes we take in gets a free diagnosis before any work is recommended — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Mercedes-Benz dealers in the Salt Lake area bill at $200–$250 per hour, and service advisors rotate frequently, so you rarely speak with the same person twice. At Scott's, the same experienced mechanic who diagnosed your car is the one turning the wrenches. We use the correct MB-spec fluids — not generic substitutes — and we'll tell you plainly which repairs are urgent and which can wait. For the M272/M273 balance shaft gear job alone, owners routinely save $1,500–$2,500 compared to dealer quotes. One shop, one mechanic, honest pricing.",
    whoContent: {
      heading: "Who to Trust for Mercedes-Benz Repair in South Salt Lake",
      paras: [
        "Scott's has been the independent Mercedes-Benz alternative in South Salt Lake since 1990. The same mechanic who diagnoses your car is the one who works on it — no hand-offs, no service advisor markup. We use the correct MB-spec fluids and professional diagnostic equipment.",
        "C-Class, E-Class, S-Class, GLE, Sprinter — we work on all of them. We'll tell you plainly which repairs are urgent and which can wait, and we'll give you fair pricing on both."
      ]
    },
    whenContent: [
      "Bring your Mercedes in if you notice a ticking or rattling at cold start that quiets once the engine warms, any burning oil smell from the engine bay, or if your vehicle is sitting lower than usual in the morning. These are patterns worth addressing before they turn into more expensive problems. Free diagnosis before any work is recommended.",
      "If your Mercedes is past 80,000 miles, a proactive inspection is worth scheduling — especially before summer canyon driving. We'll tell you honestly what's still in good shape and what's worth replacing before it becomes a problem on the road."
    ],
    process: [
      {
        step: 1,
        title: "MB-Specific Diagnostic Scan",
        desc: "We use professional scan tools that read Mercedes-proprietary fault codes across all modules — engine, transmission, Airmatic, and SBC brakes — not just generic OBD-II codes."
      },
      {
        step: 2,
        title: "Fluid and Leak Inspection",
        desc: "We check for oil cooler seepage, valve cover leaks, cam sensor O-rings, and coolant passages — the multi-point leak pattern common to high-mileage MB engines."
      },
      {
        step: 3,
        title: "Transparent Repair Estimate",
        desc: "We provide a written estimate with MB-spec parts called out. No hidden fees, no upselling services your car doesn't need."
      },
      {
        step: 4,
        title: "Certified Repair with Correct Fluids",
        desc: "Repairs use 229.5 or 229.51 approved oil, ZF-approved transmission fluid, and OEM-equivalent parts that meet Mercedes specifications."
      },
      {
        step: 5,
        title: "Road Test and Final Verification",
        desc: "Every Mercedes leaves Scott's with a post-repair road test and a re-scan to confirm all fault codes are cleared and systems are operating correctly."
      }
    ],
    commonRepairs: [
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Mercedes models and AMG vehicles benefit from Scott's clutch specialty. We replace dual-mass flywheels and clutch assemblies to factory spec."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Balance Shaft Gear Replacement",
        desc: "M272/M273 balance shaft gear failure is one of the most costly Mercedes-specific repairs — Scott's handles it at significantly less than dealer pricing."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Airmatic Air Suspension Repair",
        desc: "We diagnose and replace air springs, compressors, and valve blocks on E-Class, S-Class, GL, and ML models with sagging or failed Airmatic systems."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Thermostat",
        desc: "Mercedes electric water pumps and thermostats fail without warning. We replace them with quality components and bleed the cooling system properly."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "High-mileage MB V6 and V8 engines develop timing chain stretch and tensioner wear. Early service prevents catastrophic engine damage."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Mercedes brake systems require electronic pad reset and sensor replacement. We handle all MB brake service including AMG Brembo-equipped models."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah's road salt accelerates exhaust corrosion. We repair and replace Mercedes exhaust components including cat converters that trigger P0420 codes."
      }
    ],
    issues: [
      {t:'Mercedes Oil Leak Epidemic',d:'Mercedes engines develop multiple oil leaks as they age—valve cover gaskets, oil cooler seals, rear main seals, and camshaft position sensor O-rings. We address all leak points systematically rather than chasing one at a time.'},
      {t:'Mercedes Balance Shaft & Timing Chain (M272/M273)',d:'The M272 V6 and M273 V8 engines have a known balance shaft gear failure that can destroy the engine if not addressed. We inspect and replace preventively.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Mercedes Airmatic Suspension Failure',d:'Mercedes air suspension struts develop leaks, causing the vehicle to sag overnight. We replace with OEM or quality aftermarket air struts at significant savings versus the dealer.'}
    ],
    tips: [
      'Mercedes-Benz requires MB-approved 229.5 or 229.51 specification oil. Using non-approved oil can cause sludging and void warranty coverage on newer vehicles.',
      'Mercedes electrical systems are sensitive to battery voltage. A failing battery causes cascading warning lights and false fault codes. Replace the battery every 4–5 years proactively.',
      'Mercedes automatic transmissions (722.9 7-speed) need fluid and filter changes every 40,000 miles despite the "lifetime fill" claim.'
    ],
    faqs: [
      {q:'Why is Mercedes repair so expensive at the dealer?',a:'Mercedes dealer labor rates in Salt Lake City run $200–$250/hour. Our rate is significantly lower, and we use the same quality OEM and OEM-equivalent parts. On a typical Mercedes repair, our customers save 30–50% versus dealer pricing.'},
      {q:'My Mercedes is leaking oil from multiple places. How bad is this?',a:'Multi-point oil leaks are extremely common on Mercedes engines over 80,000 miles. The good news is we can address all leak points in one visit—valve covers, oil cooler, cam sensors—rather than paying for repeated visits. Oil on hot exhaust components is a fire risk, so don\'t delay.'},
      {q:'Should I be worried about the balance shaft issue on my Mercedes V6?',a:'If you have a 2005–2011 M272 V6 (common in C-Class, E-Class, ML), the balance shaft sprocket gear can fail without warning. We can inspect the gear wear and replace preventively. This is a known issue that Mercedes extended coverage for, but many vehicles are now out of that window.'}
    ]
  },
  'Audi': {
    whatHeading: "Full-Service Audi Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Audis in South Salt Lake since 1990 — A4s, A6s, Q5s, Q7s, and the full Audi lineup. We handle turbocharged engine carbon cleaning, timing chain service, Quattro AWD Haldex coupling fluid changes, dual-clutch transmission fluid and filter service, oil leaks common to high-mileage Audi engines, and everything else an Audi needs over its lifetime. Every Audi gets a free diagnosis before we recommend any work — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Audi dealers in Salt Lake charge premium rates comparable to Mercedes and BMW — often $180–$220 per hour — and the complex Audi service menu can inflate routine maintenance bills quickly. Scott's offers a direct alternative: one skilled mechanic who knows the VW Group platform thoroughly, using correct fluids (including Haldex coupling fluid and S-Tronic ATF) and diagnostic equipment that reads Audi-specific fault codes. We're honest about which services are genuinely necessary. Owners regularly save $800–$1,500 on timing chain jobs and carbon cleaning compared to dealer quotes.",
    whoContent: {
      heading: "Who to Trust for Audi Repair in South Salt Lake",
      paras: [
        "Scott's has served Audi owners across the Salt Lake Valley since 1990. You talk directly to the mechanic — not a service advisor who relays messages. The person who diagnoses your Audi is the person who works on it.",
        "The Quattro AWD system is well-suited to Utah's winters, but it needs proper maintenance that dealers charge heavily for. We service the full Audi lineup and give you honest answers about what your car actually needs — and what it doesn't."
      ]
    },
    whenContent: [
      "Bring your Audi in if you hear a rattle or slapping sound at cold startup that quiets after the engine warms. This is not a symptom to monitor — bring it in promptly. Getting a diagnosis now costs a fraction of what ignoring it could lead to.",
      "If your Audi's shifts have become jerky or hesitant at low speeds, or if it doesn't pull as hard as it used to under acceleration, bring it in for a diagnosis. These are often straightforward fixes when caught early — and more involved ones if they're not."
    ],
    process: [
      {
        step: 1,
        title: "VAG-Compatible Diagnostic Scan",
        desc: "We use professional scan tools with full Audi/VW Group coverage to read all module fault codes — not just generic OBD-II — including transmission and AWD system data."
      },
      {
        step: 2,
        title: "Timing Chain and Carbon Assessment",
        desc: "On EA888-equipped vehicles, we check for tensioner rattle and chain stretch. We also assess intake valve carbon accumulation and recommend cleaning intervals."
      },
      {
        step: 3,
        title: "Quattro AWD Fluid Inspection",
        desc: "Haldex coupling fluid and rear differential fluid are often overlooked at dealers. We check service intervals and condition on all Quattro-equipped models."
      },
      {
        step: 4,
        title: "Repair with VW Group-Specified Parts",
        desc: "We use correct S-Tronic ATF, Haldex-approved fluid, and engine oil meeting Audi's LongLife specifications. No generic substitutions on precision German drivetrains."
      },
      {
        step: 5,
        title: "Test Drive and System Verification",
        desc: "Post-repair road testing confirms S-Tronic engagement, AWD function, and engine performance. We re-scan all modules before returning the vehicle."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Tensioner Replacement",
        desc: "The EA888 2.0T tensioner failure in 2008–2013 A4/A5/Q5 models is one of the most critical Audi repairs. Early replacement prevents catastrophic engine damage."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Intake Valve Carbon Cleaning",
        desc: "TFSI direct-injection engines accumulate heavy carbon on intake valves. We perform walnut shell blasting to restore power and smooth idle."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "S-Tronic / DSG Service & Clutch Repair",
        desc: "S-Tronic dual-clutch fluid service every 40K prevents shudder. Manual Audi clutch and dual-mass flywheel replacement is a Scott's specialty."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Audi brake service requires electronic pad reset and EPB calibration. We handle all Audi brake work including sport and S-line models."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Suspension & Strut Replacement",
        desc: "Audi's DRC and standard suspension components wear on Utah's rough winter roads. We replace struts and alignment components to restore factory handling."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "EA888 engines use plastic impeller water pumps known to fail. We replace with upgraded metal impeller units and service the cooling system completely."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Repair",
        desc: "Quattro AWD systems put added stress on CV joints. Utah winter driving accelerates boot cracking. We replace boots and full axle assemblies as needed."
      }
    ],
    issues: [
      {t:'Audi Timing Chain Tensioner Failure',d:'Audi 2.0T engines share the same timing chain tensioner issue as VW—the early revision tensioner fails and causes catastrophic engine damage. Preventive replacement is critical.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Audi Carbon Buildup on Direct Injection',d:'Audi TFSI engines suffer severe carbon buildup on intake valves. Symptoms include rough idle, misfires, and reduced power. We perform walnut blast cleaning to restore full performance.'},
      {t:'Audi Mechatronic Unit (DSG/S-Tronic)',d:'Audi S-Tronic (dual-clutch) transmissions develop mechatronic unit failures causing jerky shifts and warning lights. We diagnose and repair these systems.'}
    ],
    tips: [
      'Audi 2.0T timing chain tensioners should be inspected at 60,000 miles and replaced by 80,000. The cost of prevention is a fraction of engine replacement.',
      'Audi DSG/S-Tronic fluid and filter must be changed every 40,000 miles. Audi claims "lifetime fill" but we see premature failures from old fluid regularly.',
      'Audi Quattro AWD differential fluid should be changed every 40,000 miles. Neglect causes the Haldex coupling to fail, eliminating AWD capability.'
    ],
    faqs: [
      {q:'Is Audi maintenance really that expensive?',a:'Audi maintenance costs more than mainstream brands but doesn\'t have to be dealer-expensive. We service Audi vehicles at 30–50% less than dealer pricing using the same quality parts. The key is following maintenance intervals—deferred Audi maintenance gets expensive fast.'},
      {q:'Does my Audi 2.0T have the timing chain tensioner problem?',a:'2008–2013 Audi A4, A5, and Q5 with the EA888 2.0T engine are most affected. If you hear a brief rattle on cold startup, the tensioner is failing. We can inspect the tensioner revision and replace it preventively before it causes engine damage.'},
      {q:'Why is my Audi misfiring and losing power?',a:'On Audi TFSI engines, the most common cause is carbon buildup on intake valves from direct injection. Carbon deposits restrict airflow and cause misfires. A walnut blast cleaning restores full performance and typically resolves the issue completely.'}
    ]
  },
  'Lexus': {
    whatHeading: "Full-Service Lexus Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Lexus vehicles in South Salt Lake since 1990 — RX, GX, LX, ES, IS, and hybrid models across multiple generations. We handle timing belt and water pump replacement, rear differential fluid service, hybrid battery system maintenance, automatic transmission fluid service with Toyota-approved specifications, and the full range of mechanical work Lexus vehicles need over their lifetimes. Every Lexus gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Lexus dealers charge Toyota-tier premium rates — typically $160–$200 per hour in Salt Lake — despite the mechanical similarity to Toyota's mainstream lineup. The GX470 and LX470 share the same 4.7L V8 found in the Land Cruiser, yet Lexus dealer estimates for timing belt and water pump service routinely run $800–$1,200 above independent shops. At Scott's, you receive the same quality work at a price that reflects honest labor, not badge premium. We know the Lexus/Toyota platform thoroughly and stock the correct Toyota-spec fluids and OEM-equivalent parts.",
    whoContent: {
      heading: "Who to Trust for Lexus Repair in South Salt Lake",
      paras: [
        "Lexus owners in the Salt Lake Valley have relied on Scott's as their independent alternative since 1990. The same mechanic diagnoses and repairs your vehicle — no hand-offs, no service advisor markup. You'll know exactly what was done and why before you pay for anything.",
        "Located in South Salt Lake near I-15, Scott's is convenient for Lexus owners from across the valley. We're straightforward about what your Lexus needs and what it can wait on — and our pricing reflects honest labor, not badge premium."
      ]
    },
    whenContent: [
      "Bring your Lexus in if you're approaching a service interval and aren't sure whether it's been done, if something feels or sounds different than usual, or if a warning light has come on. Lexus vehicles are built to last — but they still have service intervals that matter, and catching something early costs less than catching it late. There's no charge to find out where things stand.",
      "If you drive a Lexus SUV and use Utah's canyon roads and mountain terrain regularly, maintenance matters more than it would with flat-road driving. Bring it in and we'll give you an honest picture of what's due and what's still in good shape."
    ],
    process: [
      {
        step: 1,
        title: "Toyota/Lexus-Specific Diagnostic Scan",
        desc: "We use Techstream-compatible scan tools that access all Lexus modules including hybrid battery management, pre-collision system, and transmission data."
      },
      {
        step: 2,
        title: "Timing Belt Interval Assessment",
        desc: "On V8 GX and LX models, we check belt condition and mileage. Interference engine risk means we don't recommend pushing past the service interval on Utah mountain roads."
      },
      {
        step: 3,
        title: "Fluid Condition Review",
        desc: "We check differential fluid, ATF, and hybrid cooling system condition. IS-F and RC-F rear differentials require specific high-performance fluid at regular intervals."
      },
      {
        step: 4,
        title: "Repair with Toyota-Approved Specifications",
        desc: "We use Toyota WS ATF, correct differential fluid, and timing belt kits from quality manufacturers that meet OEM specifications. No off-brand shortcuts."
      },
      {
        step: 5,
        title: "Verification Drive and System Check",
        desc: "After service, we road test and re-scan for fault codes. Hybrid models receive a battery state-of-health check before return."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt & Water Pump Replacement",
        desc: "GX470 and LX470 V8 timing belt service at 90K is critical on these interference engines. We replace belt, water pump, and tensioners together for full peace of mind."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Service",
        desc: "Lexus water pumps on V6 and V8 models benefit from proactive replacement. We service the complete cooling system at the same time."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Lexus brake systems require electronic calibration on models with electronic parking brakes. We handle all Lexus brake work including IS-F sport models."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "GX and LX suspension components wear with Utah off-road and canyon use. We restore factory handling with quality replacement struts and control arms."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Hybrid Battery Cooling Service",
        desc: "RX400h and other Lexus hybrids need battery cooling fan cleaning every 30K in Utah's dusty climate. We clean and inspect the hybrid cooling system."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Service",
        desc: "AWD Lexus models including RX and GX develop CV joint wear. We replace boots and axle assemblies to maintain smooth power delivery."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt corrodes exhaust systems even on well-maintained Lexus vehicles. We repair manifolds, flex pipes, and replace catalytic converters causing check engine lights."
      }
    ],
    issues: [
      {t:'Lexus Dashboard Cracking',d:'While not a mechanical issue, Lexus IS and GS models are known for dashboard cracking in hot climates like Utah. We can refer you to an interior specialist while handling your mechanical needs.'},
      {t:'Lexus GX/LX Timing Belt Service',d:'Lexus GX 470 and LX 470/570 use Toyota V8 engines with timing belts that must be replaced every 90,000 miles. The belt drives the water pump—we always replace both together.',href:'/services/timing-belt-replacement-near-south-salt-lake-ut'},
      {t:'Lexus IS/RC Brake Dust and Pad Wear',d:'Lexus sport models use aggressive brake pad compounds that create heavy dust and wear faster than economy pads. We offer low-dust ceramic alternatives that maintain stopping power.',href:'/services/brake-service-near-south-salt-lake-ut'}
    ],
    tips: [
      'Lexus vehicles are essentially premium Toyotas mechanically. They benefit from the same maintenance practices—0W-20 synthetic oil, timing belt service at 90K on V8 models.',
      'Lexus hybrid models (RX 450h, ES 300h) need hybrid battery cooling fan cleaning every 30,000 miles, just like their Toyota counterparts.',
      'Lexus IS F and RC F V8 models need differential fluid changes every 30,000 miles. The performance rear differential runs hotter than standard models.'
    ],
    faqs: [
      {q:'Can an independent shop service my Lexus?',a:'Absolutely. Lexus vehicles use Toyota mechanical components. Our 35 years of Toyota experience translates directly to Lexus. You\'ll get the same quality service at significantly less than Lexus dealer pricing.'},
      {q:'Does my Lexus GX 470 need a timing belt?',a:'Yes. The 4.7L V8 in the GX 470 uses a timing belt that should be replaced every 90,000 miles along with the water pump, tensioner, and idler pulleys. This is critical—a broken belt destroys the engine.'},
      {q:'Why are my Lexus brakes so dusty?',a:'Lexus sport models use semi-metallic brake pads that produce heavy black dust. We can replace them with quality ceramic pads that produce 80% less dust while maintaining excellent stopping power. No compromise on safety.'}
    ]
  },
  'Acura': {
    whatHeading: "Full-Service Acura Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Acuras in South Salt Lake since 1990 — MDXs, TLs, RDXs, and the full Acura lineup. We handle SH-AWD rear differential fluid service, VTEC system maintenance and repair, Honda-spec ATF and CVT fluid service, turbocharged engine oil intervals, and everything else an Acura needs to stay reliable over its lifetime. Every Acura we take in gets a free diagnosis before any work is recommended — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Acura dealers bill at $150–$180 per hour in Salt Lake, and their B-service packages bundle items you may not need. At Scott's, you pay for what your car actually requires. The SH-AWD rear differential shudder during tight parking lot turns is almost always caused by neglected fluid — a $150 fluid change at Scott's versus a dealer diagnosis that starts at $300 before any work begins. We use genuine Honda/Acura-specified fluids including Acura-brand differential fluid, because the SH-AWD clutch pack tolerances demand it. One mechanic, honest assessment, no bundle pressure.",
    whoContent: {
      heading: "Who to Trust for Acura Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Acura vehicles for Salt Lake Valley owners since 1990. The mechanic who diagnoses your Acura is the one who repairs it. You won't pay for dealer overhead or service advisor markup.",
        "Our South Salt Lake shop is easy to reach from Murray, West Jordan, and Sandy. When you bring your Acura here, we tell you honestly what it needs and what it can wait on — and we give you a fair price either way."
      ]
    },
    whenContent: [
      "Bring your Acura in if you feel a vibration or shudder during slow-speed turns — most noticeable in parking lots or tight corners. This is a common early sign that fluid service is overdue, and it's worth addressing before it becomes a larger problem. Free diagnosis before any recommendation.",
      "A burning smell from the engine bay, especially when the engine is warm, is also worth having looked at. It's often a minor seal or gasket issue that's inexpensive to fix early — and more involved if left for months."
    ],
    process: [
      {
        step: 1,
        title: "Honda/Acura Diagnostic Scan",
        desc: "We access all Acura control modules including SH-AWD, VTEC, and transmission data using professional Honda-compatible diagnostic tools."
      },
      {
        step: 2,
        title: "SH-AWD Differential Assessment",
        desc: "We check rear differential fluid condition and interval. Shudder complaints get a full SH-AWD fluid service first before any expensive differential diagnosis."
      },
      {
        step: 3,
        title: "VTEC and Oil System Inspection",
        desc: "We inspect for VTEC solenoid leaks, oil control valve deposits, and confirm correct oil viscosity and change interval compliance."
      },
      {
        step: 4,
        title: "Repair with Honda-Specified Fluids",
        desc: "SH-AWD fluid, DW-1 ATF, and correct oil viscosity are non-negotiable. We use Acura-specified fluids because the engineering demands it."
      },
      {
        step: 5,
        title: "Post-Service Verification",
        desc: "Road testing after differential service confirms shudder is resolved. We re-scan all modules and check for any remaining fault codes before delivery."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "SH-AWD Differential Fluid Service",
        desc: "Neglected SH-AWD rear differential fluid causes shudder during turns. We service it with Acura-specified fluid every 30K to protect the clutch pack."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Acura models including the Integra Type R and NSX get expert clutch service. We also service the SH-AWD clutch pack assembly."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Acura brake systems with electronic parking brake require proper calibration. We handle all Acura brake work including MDX and RDX sport packages."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "High-mileage Acura V6 engines develop timing chain stretch, especially with irregular oil changes. We replace chains and tensioners to restore proper timing."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Repair",
        desc: "SH-AWD and front-wheel-drive Acura axles develop CV joint wear. Utah winters are hard on CV boots. We replace boots and full axle assemblies."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "Acura V6 water pumps are driven by the timing belt on older models. We replace pump and belt together for comprehensive cooling system service."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "Acura suspension components wear with Utah mountain and highway driving. We replace struts and control arm bushings to restore factory ride quality."
      }
    ],
    issues: [
      {t:'Acura Transmission Issues (2003–2006)',d:'Older Acura TL and MDX models had automatic transmission failures. While newer models have resolved this, high-mileage examples still need careful fluid maintenance. We service Acura transmissions with Honda-specific ATF.'},
      {t:'Acura SH-AWD Rear Differential Service',d:'Acura\'s Super Handling AWD system uses an electronically controlled rear differential that requires specific fluid. Neglected fluid changes cause shudder and coupling failure.'},
      {t:'Acura VTEC Solenoid Leaks',d:'Like Honda, Acura engines develop VTEC solenoid gasket leaks that drip oil onto the exhaust. We replace the gaskets and clean the affected area.'}
    ],
    tips: [
      'Acura SH-AWD rear differential fluid must be changed every 30,000 miles with Acura-specific fluid. Generic ATF causes the electronic coupling to malfunction.',
      'Acura transmissions require Honda/Acura-specific ATF. Using generic transmission fluid causes shift quality problems and premature wear.',
      'Acura TLX and MDX turbocharged engines need more frequent oil changes (5,000 miles) than naturally aspirated models due to turbo oil demands.'
    ],
    faqs: [
      {q:'Is Acura basically a Honda?',a:'Mechanically yes—Acura uses Honda engines, transmissions, and platforms. This means our extensive Honda experience applies directly. We use Honda/Acura-specific fluids and parts, and we service Acuras at far less than Acura dealer rates.'},
      {q:'My Acura MDX shudders when turning in parking lots. What\'s wrong?',a:'This is almost certainly the SH-AWD rear differential coupling. The fluid breaks down over time and causes shudder during tight turns. A rear differential fluid change with Acura-specific fluid usually resolves it immediately. This is a $150 service that prevents a $2,000 coupling replacement.'},
      {q:'How often does my Acura need transmission fluid changed?',a:'Every 30,000 miles with Honda/Acura-specific DW-1 ATF. Do not use generic fluid—Acura transmissions are sensitive to fluid type. If your shifts feel harsh or delayed, a fluid change often restores smooth operation.'}
    ]
  },
  'Infiniti': {
    whatHeading: "Full-Service Infiniti Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Infiniti vehicles in South Salt Lake since 1990 — G-series sedans and coupes, Q50s, QX60s, QX80s, and the rest of the Infiniti lineup. We handle oil consumption diagnosis, catalytic converter and exhaust diagnostics, CVT fluid service, oil and gasket leak repair, and the full range of maintenance Infiniti vehicles need over their lifetimes. Every Infiniti gets a free diagnosis before we recommend any work — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Infiniti dealers in Salt Lake bill at $160–$190 per hour, and their diagnostics can run $150–$200 before any repair is approved. The P0420 catalytic converter fault is one of the most common Infiniti complaints — dealers quote $1,800–$2,500 to replace both cats on a G37. Scott's diagnoses the failure accurately first to confirm the cats are the true cause, not an oxygen sensor, and completes the repair at a meaningful savings. We know the VQ engine platform thoroughly, including the gallery gasket leak pattern that develops at 80,000 miles and causes external oil seepage near the rear of the engine.",
    whoContent: {
      heading: "Who to Trust for Infiniti Repair in South Salt Lake",
      paras: [
        "Scott's has served Infiniti owners across Salt Lake Valley for over three decades. The VQ V6 engines in G and Q models are known to be robust when maintained properly — but high-mileage oil consumption and catalytic converter failures require a shop that understands the platform. We don't guess; we diagnose correctly the first time.",
        "South Salt Lake's location near I-15 makes Scott's accessible from Millcreek, Murray, and points south. Infiniti owners who've experienced sticker shock at the dealer find Scott's pricing straightforward and the communication direct. The same mechanic who looks at your car explains exactly what it needs."
      ]
    },
    whenContent: [
      "Some Infiniti V6 engines develop increased oil consumption as mileage climbs — burning more oil between changes than they did when new, with no visible leaks and no warning light until levels get low. At Utah's 4,300-foot elevation, engines work slightly harder, which compounds ring and valve seal wear over time. The practical response is checking the oil level between changes and monitoring the rate of consumption. An oil seep appearing at the rear of the engine block near the firewall is a separate issue — a gasket that tends to surface at higher mileages and is easier to address before it becomes a significant leak.",
      "Some Infiniti models use a continuously variable transmission that requires fluid service on a regular schedule — not the extended interval some owners assume from the original documentation. In Utah's mountain driving conditions, the CVT runs hotter climbing highway grades and canyon roads, and degraded fluid accelerates wear. The early symptoms are shudder at light throttle and hesitation before the transmission finds its ratio; late-stage failure is far more expensive. Catalytic converter codes are also common on higher-mileage Infiniti V6 models — we always diagnose before replacing parts, since the code doesn't always mean the converter itself has failed."
    ],
    process: [
      {
        step: 1,
        title: "Nissan/Infiniti Diagnostic Scan",
        desc: "We use professional scan tools with full Infiniti/Nissan module coverage to read VQ engine faults, CVT data, and AWD system codes accurately."
      },
      {
        step: 2,
        title: "Oil Consumption and Leak Assessment",
        desc: "High-mileage VQ engines get a consumption check and external leak inspection, including the gallery gasket area specific to G37 and Q50 models."
      },
      {
        step: 3,
        title: "CVT Fluid and Catalyst Evaluation",
        desc: "QX60 and JX35 CVT fluid is checked for condition and interval. P0420/P0430 codes receive proper oxygen sensor testing before any catalytic converter work is authorized."
      },
      {
        step: 4,
        title: "Repair with NS-3 and Nissan-Spec Fluids",
        desc: "CVT repairs use Nissan NS-3 fluid only. Engine oil meets VQ specifications. No generic CVT fluids that can damage the variator."
      },
      {
        step: 5,
        title: "Road Test and Final Verification",
        desc: "CVT shudder, oil consumption, and exhaust system repairs are verified by road test and post-repair scan before the vehicle is returned."
      }
    ],
    commonRepairs: [
      {
        slug: "catalytic-converter-service-near-south-salt-lake-ut",
        name: "Catalytic Converter Service",
        desc: "P0420/P0430 codes are extremely common on high-mileage Infiniti VQ engines. We diagnose root cause first, then replace only what's necessary."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Gallery Gasket & Oil Leak Repair",
        desc: "The G37 and Q50 gallery gasket leak around 80K is a known issue. We repair it before oil loss becomes serious engine damage."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Infiniti brake systems with Brembo-equipped sport models and electronic parking brakes receive proper calibration and quality pad/rotor service."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Service",
        desc: "G and Q series suspension components wear with Utah's canyon and freeway driving. We restore factory handling with quality strut and bushing replacement."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Repair",
        desc: "AWD Infiniti QX models develop CV joint wear. Utah winters crack CV boots. We replace boots and full axle assemblies to prevent joint failure."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust System Repair",
        desc: "Utah road salt accelerates exhaust corrosion on Infiniti vehicles. We repair manifolds, flex sections, and replace deteriorated exhaust components."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "VQ engine water pumps develop leaks at high mileage. We replace the pump and service the cooling system completely to prevent overheating."
      }
    ],
    issues: [
      {t:'Infiniti VQ Engine Oil Consumption',d:'Infiniti\'s VQ-series V6 engines develop increased oil consumption after 100,000 miles from piston ring wear. We monitor consumption and recommend intervention when it exceeds 1 quart per 2,000 miles.'},
      {t:'Infiniti CVT Transmission (QX60/JX35)',d:'Infiniti QX60 uses a Nissan CVT that shares the same overheating and reliability concerns. Regular CVT fluid changes every 30,000 miles are essential.',href:'/symptoms/transmission-slipping'},
      {t:'Infiniti Catalytic Converter Premature Failure',d:'Infiniti 3.5L and 3.7L V6 models experience catalytic converter efficiency codes (P0420/P0430) more frequently than average. We diagnose root cause before recommending converter replacement.',href:'/services/catalytic-converter-service-near-south-salt-lake-ut'}
    ],
    tips: [
      'Infiniti VQ engines benefit from using Nissan-specific 5W-30 ester oil. Switching to a high-mileage formula after 100K miles helps control oil consumption.',
      'Infiniti models with the CVT (QX60, QX50) need CVT fluid changed every 30,000 miles—not the 60,000+ Infiniti suggests.',
      'Infiniti G37 and Q50 3.7L engines develop gallery gasket leaks around 80K miles. Watch for oil spots and address early.'
    ],
    faqs: [
      {q:'Is Infiniti the same as Nissan mechanically?',a:'Infiniti uses Nissan engines and transmissions with premium features. Our Nissan expertise translates directly. The VQ V6 engine is shared across many Infiniti models and we know its strengths and weaknesses intimately.'},
      {q:'My Infiniti is using a lot of oil. Is that normal?',a:'Some oil consumption is normal on high-mileage VQ engines, but more than 1 quart per 3,000 miles warrants investigation. We check for valve seal leaks, PCV system issues, and piston ring wear to determine the best repair approach.'},
      {q:'Does my Infiniti QX60 have CVT problems?',a:'The QX60 uses a Nissan CVT with known reliability concerns. The single most important thing you can do is change the CVT fluid every 30,000 miles. Most failures we see are in vehicles where the fluid was never changed. With proper maintenance, these CVTs last.'}
    ]
  },
  'Ram': {
    whatHeading: "Full-Service Ram Truck Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Ram trucks in South Salt Lake since 1990 — 1500s, 2500s, 3500s, and ProMaster vans across gas and diesel powertrains. We handle cylinder deactivation system diagnosis and repair, transmission fluid service for towing applications, diesel EGR and emissions system repair, rear axle seals and differential service, and the full range of maintenance Ram trucks need when they're working hard. Every Ram gets a free diagnosis before we recommend any work — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Ram dealers in Salt Lake Valley have high service department overhead, and truck owners towing fifth wheels or work trailers often face sticker shock on transmission and drivetrain service. The ZF 8-speed in Ram 1500 is a capable unit but the factory 'lifetime' fluid recommendation doesn't account for Utah mountain towing. At Scott's, we service it every 25,000 miles for trucks that tow regularly, saving you a $3,500+ transmission rebuild down the road. The Hemi lifter collapse is a serious issue — we diagnose it correctly before recommending an engine teardown, and we're honest when a lifter job can be deferred safely.",
    whoContent: {
      heading: "Who to Trust for Ram Truck Repair in South Salt Lake",
      paras: [
        "Scott's has worked on Dodge and Ram trucks since 1990, through every generation of the platform. We understand what Utah's demanding terrain does to drivetrain components — towing Wasatch mountain grades on I-15 in summer heat or fighting canyon road grades on US-6 puts real stress on transmissions, brakes, and cooling systems. We know what to look for.",
        "Ram owners from across Salt Lake Valley bring their trucks to Scott's because we speak their language. We know the difference between an MDS lifter tick and a collapsed lifter, and we won't recommend a $6,000 engine job when a fluid change and injector cleaning will do. You get straight answers and fair pricing."
      ]
    },
    whenContent: [
      "A persistent tick or clatter from the top of a Ram V8 that doesn't clear after the engine fully warms up is worth diagnosing sooner rather than later. The cylinder deactivation system uses lifters that are a known wear point, and Utah's cold winters make the problem worse — cold oil takes time to circulate, and repeated cold starts without the engine reaching full operating temperature puts extra stress on these components. If your Ram has been ticking for more than a few weeks, a diagnostic visit now is much less expensive than the camshaft damage that follows a collapsed lifter.",
      "Ram 2500 and 3500 owners running I-15 grades with a fifth wheel or gooseneck put real stress on rear axle seals and transmission fluid. Axle seal failure lets gear oil contaminate the braking surfaces on the rear axle — it's a safety concern, not just a maintenance item, and the leak usually starts slow enough that owners miss it until braking performance changes. Diesel owners should watch for white exhaust smoke at startup, slow coolant loss without a visible external leak, or rough idle at operating temperature — these are the early signs of an EGR cooler starting to fail, and addressing it early costs significantly less than waiting for a full failure."
    ],
    process: [
      {
        step: 1,
        title: "FCA/Stellantis Diagnostic Scan",
        desc: "We use professional scan tools covering Ram's full module set — TIPM, transfer case, ABS, and transmission — to read accurate fault codes before any repair recommendation."
      },
      {
        step: 2,
        title: "Hemi Lifter and MDS Assessment",
        desc: "On Hemi-equipped Ram 1500 models, we evaluate lifter noise, check for MDS-related codes, and assess oil pressure before recommending engine work."
      },
      {
        step: 3,
        title: "Drivetrain and Axle Fluid Inspection",
        desc: "We check rear axle seal condition, differential fluid level, and ZF transmission fluid condition — especially on trucks used for towing."
      },
      {
        step: 4,
        title: "Repair with ATF+4 and Mopar-Spec Fluids",
        desc: "ZF 8-speed service uses ATF+4 only. Axle seals and differential fluids use Mopar-specified products. We don't cut corners on fluids that protect expensive drivetrain components."
      },
      {
        step: 5,
        title: "Load Test and Final Road Check",
        desc: "Trucks used for towing get an extra-thorough post-repair road test including brake check and transmission engagement verification under load simulation."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Hemi MDS Lifter Repair",
        desc: "The 5.7L Hemi lifter collapse is one of the most common Ram 1500 repairs. We diagnose and replace failed MDS lifters before damage spreads to camshaft lobes."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Ram trucks used for towing experience heavy brake wear on I-15 grades. We replace pads, rotors, and drums — and check for axle seal contamination on rear drum setups."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & EGR Service",
        desc: "EcoDiesel 3.0L EGR cooler failure causes coolant loss and white smoke. We replace EGR coolers and inspect the entire exhaust system for corrosion damage."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Suspension & Strut Service",
        desc: "Ram truck suspension takes a beating with Utah's rough terrain and heavy loads. We replace struts, shocks, and leaf spring hardware to restore proper handling."
      },
      {
        slug: "shock-replacement-near-south-salt-lake-ut",
        name: "Shock Replacement",
        desc: "Ram 2500 and 3500 rear shocks wear quickly with fifth-wheel towing. We replace with quality units rated for Ram's payload capacity."
      },
      {
        slug: "welding-services-near-south-salt-lake-ut",
        name: "Frame & Exhaust Welding",
        desc: "Utah road salt attacks Ram truck frames and exhaust systems. We weld cracked exhaust hangers, manifold flanges, and perform structural frame repairs."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Front Axle Repair",
        desc: "4WD Ram trucks develop front CV joint and axle seal wear. We replace boots, joints, and axle seals to maintain 4WD engagement."
      }
    ],
    issues: [
      {t:'Ram Hemi MDS Lifter Failure',d:'Ram 1500 5.7L Hemi engines with Multi-Displacement System (MDS) develop collapsed lifters and cam lobe wear. We replace all 16 lifters and can delete MDS to prevent recurrence.',href:'/symptoms/engine-rattling'},
      {t:'Ram EcoDiesel EGR Cooler Failure',d:'Ram 1500 3.0L EcoDiesel engines develop EGR cooler cracks that mix coolant with exhaust. This can lead to engine damage if not addressed. We diagnose and replace failed EGR coolers.'},
      {t:'Ram Rear Axle Seal Leaks',d:'Ram trucks develop rear axle seal leaks that contaminate brake shoes on drum-brake models. We replace seals and inspect brake components for oil contamination.'}
    ],
    tips: [
      'Ram Hemi trucks used for towing should have transmission fluid (ATF+4) changed every 25,000 miles. Canyon towing in Utah generates extreme transmission heat.',
      'Ram 1500 air suspension systems need spring inspection every 2 years. Utah UV exposure degrades the rubber bladders faster than northern states.',
      'Ram EcoDiesel owners: change fuel filters every 15,000 miles in Utah. Our diesel fuel can contain more particulates than coastal states.'
    ],
    faqs: [
      {q:'My Ram Hemi is ticking and has a misfire. What\'s the repair?',a:'This is almost certainly a collapsed MDS lifter—the most common failure on 2014+ Ram 5.7L Hemis. We replace all 16 lifters and recommend MDS delete to prevent recurrence. The repair typically runs $2,500–$3,500 and eliminates the failure point.'},
      {q:'How long do Ram transmissions last with towing?',a:'The ZF 8-speed in modern Rams is actually very durable with proper maintenance. Change ATF+4 fluid every 25,000 miles if you tow regularly in Utah mountains. Skip fluid changes and you\'re looking at premature torque converter failure.'},
      {q:'Is the Ram EcoDiesel reliable?',a:'The 3.0L EcoDiesel has had several issues—EGR cooler failures, fuel pump problems, and emissions system complexity. With proper maintenance and timely repairs, they can be reliable. But repair costs are higher than the Hemi, so budget accordingly.'}
    ]
  },
  'GMC': {
    whatHeading: "Full-Service GMC Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on GMC trucks and SUVs in South Salt Lake since 1990 — Sierras, Yukons, Canyons, Terrains, and Acadias across every generation. We handle cylinder deactivation system diagnosis and repair, timing chain service, air ride suspension repair, Duramax diesel maintenance, Dexos-specification oil service, and everything else a GMC needs to stay reliable under load. Every GMC we take in gets a free diagnosis before any work starts — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "GMC dealers charge full dealership rates for work that's essentially the same as Chevrolet service — because GMC and Chevy share virtually all their major components. The AFM lifter failure on the 5.3L V8 is a well-documented issue that dealers have charged $4,000–$7,000 to repair under the correct repair procedure. At Scott's, we diagnose AFM failures accurately, perform the repair with the proper process, and charge honestly for the work. Terrain owners with timing chain issues save $600–$1,000 compared to dealer quotes. We've been doing GM platform work since 1990.",
    whoContent: {
      heading: "Who to Trust for GMC Repair in South Salt Lake",
      paras: [
        "Scott's has serviced GM trucks and SUVs since 1990, through every generation of the Sierra and Yukon platform. The AFM lifter failure has been one of the most significant GM reliability issues of the past decade, and we've developed a thorough approach to diagnosing and repairing it correctly — not just clearing codes and returning the vehicle.",
        "Whether you drive a Sierra 1500 for work or a Yukon Denali for family hauling in Utah's mountains, Scott's provides honest service near I-15 in South Salt Lake. Duramax diesel owners especially appreciate our diesel expertise for fuel system and DPF-related service that dealer service departments often overcharge for."
      ]
    },
    whenContent: [
      "A tick on cold startup in a GMC V8 that persists after the engine warms up — sometimes paired with a misfire code — is the early warning sign of a cylinder deactivation lifter beginning to fail. Utah's cold winters are hard on these components: cold oil takes extra time to fill the lifter galleries on a below-zero morning, and engines that get short warm-up cycles accumulate wear faster. Catching it when one lifter is affected keeps the repair manageable. Waiting until multiple lifters have collapsed and camshaft lobe damage has followed turns a significant repair into a much larger one.",
      "Some GMC four-cylinder engines develop timing chain stretch at higher mileages — the first signs are a startup rattle that goes away as the engine warms, and sometimes a check engine light with a camshaft position code. Oil consumption also increases as these engines wear, so checking the level between changes is good practice on any high-mileage four-cylinder GMC. Air ride suspension compressors on Yukon and Sierra models with the air ride option fail when air springs develop slow leaks — the compressor runs more frequently than it was designed to until it burns out. If your GMC sits lower on one corner overnight, that's the time to address it."
    ],
    process: [
      {
        step: 1,
        title: "GM-Specific Diagnostic Scan",
        desc: "We use Tech2-compatible professional scan tools covering all GM modules — AFM disable data, transmission, air ride, and Duramax diesel systems — for accurate fault diagnosis."
      },
      {
        step: 2,
        title: "AFM Lifter Assessment",
        desc: "On 5.3L and 6.2L V8 models, we perform an oil pressure check, listen for lifter tick patterns, and pull AFM-specific codes before recommending engine work."
      },
      {
        step: 3,
        title: "Timing Chain and Fluid Inspection",
        desc: "Terrain Ecotec models get a timing chain stretch evaluation. All GMC vehicles get a Dexos1 oil specification check and transmission fluid condition review."
      },
      {
        step: 4,
        title: "Repair with Dexos1-Approved Products",
        desc: "GM Dexos1 oil specification is required on all GM engines. Duramax fuel filters and DEF fluid meet GM's exact specifications. We don't use non-approved products."
      },
      {
        step: 5,
        title: "Post-Repair Verification Drive",
        desc: "AFM repairs and timing chain work receive extended road tests to confirm proper engine operation. Air ride suspension repairs are tested through full suspension cycle."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "AFM Lifter Replacement",
        desc: "5.3L and 6.2L V8 AFM lifter collapse is GMC's most significant reliability issue. We repair it correctly, including proper oil system cleaning afterward."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Replacement",
        desc: "Terrain 2.4L Ecotec timing chain stretch causes startup rattle and check engine lights. We replace chain, guides, and tensioners as a complete service."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "GMC trucks and SUVs used for towing on Utah grades need regular brake inspection. We service all GMC brake systems including Sierra HD trailer brake controllers."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Service",
        desc: "Canyon and Terrain struts wear with Utah road conditions. Sierra and Yukon front end components get thorough inspection and replacement as needed."
      },
      {
        slug: "shock-replacement-near-south-salt-lake-ut",
        name: "Shock Replacement",
        desc: "Yukon and Sierra HD rear shocks wear with heavy payloads. Denali air ride shocks are diagnosed and replaced at significant savings over dealer pricing."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt attacks GMC exhaust systems. We repair corroded manifolds, flex pipes, and replace catalytic converters triggering check engine codes."
      },
      {
        slug: "welding-services-near-south-salt-lake-ut",
        name: "Frame & Exhaust Welding",
        desc: "Sierra and Canyon frames and exhaust hangers corrode with Utah winters. We weld cracked sections and fabricate replacement hangers."
      }
    ],
    issues: [
      {t:'GMC Sierra AFM Lifter Collapse',d:'GMC Sierra 5.3L V8 engines share the same Active Fuel Management lifter failure as the Chevrolet Silverado. Collapsed lifters cause misfires and ticking. We replace all lifters and can disable AFM.',href:'/symptoms/engine-rattling'},
      {t:'GMC Terrain 2.4L Timing Chain Stretch',d:'GMC Terrain with the 2.4L Ecotec engine develops timing chain stretch causing rough running and check engine lights. The chain, guides, and tensioners need replacement as a set.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'GMC Denali Air Ride Compressor Failure',d:'GMC Yukon and Sierra Denali models with air ride suspension develop compressor failures from overwork when air springs leak. We replace the compressor and leaking springs together.'}
    ],
    tips: [
      'GMC trucks with AFM/DFM should use Dexos1 Gen3 approved oil only and change it every 5,000 miles. The cylinder deactivation system is harder on oil than GM\'s recommended interval suggests.',
      'GMC Terrain 2.4L timing chains should be inspected at 80,000 miles. Catching chain stretch early prevents the $3,000+ engine damage scenario.',
      'GMC Acadia and Terrain with the 3.6L V6 need spark plugs changed at 60,000 miles. Waiting until 100K risks plug seizure in the aluminum heads.'
    ],
    faqs: [
      {q:'Is the GMC Sierra the same as the Chevy Silverado mechanically?',a:'Yes—the Sierra and Silverado share the same engines, transmissions, frames, and drivetrains. The only differences are cosmetic and feature-related. Our extensive GM truck experience applies equally to both. Same parts, same procedures, same expertise.'},
      {q:'Should I disable AFM on my GMC 5.3L?',a:'If you\'ve had lifter failure or want to prevent it, AFM delete is a smart investment. We replace all 16 lifters with non-AFM versions and disable the system through calibration. This removes the most common failure point on these otherwise excellent engines.'},
      {q:'My GMC Terrain chain rattles on startup. How urgent is this?',a:'Very urgent. The 2.4L Ecotec timing chain stretches progressively—a rattle on startup means it\'s already beyond spec. If the chain skips, it bends valves and destroys the engine. Get it inspected immediately. Chain replacement is $1,200–$1,800; engine replacement is $4,000+.'}
    ]
  },
  'Buick': {
    whatHeading: "Full-Service Buick Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Buicks in South Salt Lake since 1990 — Enclaves, Encore GXs, Envisions, LaCrosses, Regals, and the full Buick lineup. We handle timing chain service on V6 models, turbocharged engine diagnosis and repair, power steering system service, AWD drivetrain fluid changes, and the full range of GM platform maintenance. Every Buick gets a free diagnosis before any work is recommended — you'll know exactly what we found, what the repair costs, and why it's needed before anything is touched.",
    whyIntro: "Buick dealers market themselves as luxury service centers, but the mechanical content is largely shared with Chevrolet and GMC — and priced accordingly higher. Enclave timing chain service quotes from Buick dealers run $1,800–$2,800; Scott's performs the same repair with the same parts at significantly less. The Encore 1.4T turbo's charge pipe and wastegate issues are common in Utah's thin air, where turbos work harder at altitude. We diagnose these accurately and repair them without the dealer overhead. Buick owners appreciate that honest pricing doesn't mean compromised quality.",
    whoContent: {
      heading: "Who to Trust for Buick Repair in South Salt Lake",
      paras: [
        "Scott's has serviced GM platform vehicles since 1990, and Buick's shared architecture means our expertise transfers directly. The Enclave, Traverse, and Acadia all share the same 3.6L V6 timing chain failure pattern — we've repaired it enough times to perform it efficiently and correctly. Encore owners dealing with turbo-related issues find straightforward diagnosis here.",
        "Located in South Salt Lake near I-15, Scott's serves Buick owners from across the Salt Lake Valley. The personal approach — one mechanic, direct communication, honest assessment — is what keeps Buick drivers coming back instead of returning to a dealership service department that treats them as a number."
      ]
    },
    whenContent: [
      "Some Buick V6 engines develop timing chain stretch at higher mileages — the warning signs are a rattle or slap on cold startup that diminishes as the engine warms, and sometimes a check engine light with camshaft position codes. Utah's temperature swings, from well below freezing in winter to triple digits in summer, cycle the timing components harder than moderate climates do. Early service is far less expensive than waiting for secondary damage to develop — if your Buick is rattling at cold start, that's the time to have it inspected, not after the light comes on for the second time.",
      "Buick models with small turbocharged engines can develop boost leaks through aging charge pipe connections and intercooler hose fittings over time. At Utah's elevation, the turbo compensates for thinner air by running higher boost, which stresses these connections more than sea-level driving does. The symptom is hesitation or a flat spot under acceleration. The wastegate can also stick, causing either a lack of power or an overboost condition — both are relatively inexpensive repairs when caught early. Power steering rack seeps are another pattern we see on higher-mileage Buick sedans — a slow leak becomes a faster one through a Utah winter, so address it before it progresses."
    ],
    process: [
      {
        step: 1,
        title: "GM-Specific Diagnostic Scan",
        desc: "We scan all Buick modules using professional GM-compatible tools — including camshaft timing codes, turbo boost pressure data, and electronic power steering faults."
      },
      {
        step: 2,
        title: "Timing Chain and Turbo Assessment",
        desc: "Enclave and LaCrosse 3.6L engines get a startup rattle check and camshaft code review. Encore 1.4T models get boost pressure verification and charge pipe inspection."
      },
      {
        step: 3,
        title: "Steering and Suspension Inspection",
        desc: "LaCrosse and Regal power steering racks are checked for seepage. Suspension components are evaluated for wear consistent with Utah road conditions."
      },
      {
        step: 4,
        title: "Repair with GM-Approved Parts and Fluids",
        desc: "Timing chain kits, power steering seals, and turbo components use quality parts meeting GM specifications. Dexos1 oil compliance is confirmed on all Buick engines."
      },
      {
        step: 5,
        title: "Verification and Return",
        desc: "Timing chain repairs receive an extended idle and drive cycle to confirm proper cam timing. Power steering repairs are checked for sealing under full lock turns."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Replacement",
        desc: "The 3.6L V6 timing chain in Enclave, LaCrosse, and Regal models fails between 80K–120K miles. We replace the complete chain set with tensioners and guides."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Turbo Charge Pipe & Wastegate Service",
        desc: "Encore 1.4T boost leaks and wastegate issues are diagnosed and repaired. We replace aging charge pipes and intercooler hoses before boost is lost completely."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "Buick suspension components wear with Utah road conditions. We replace struts and bushings on Enclave, Encore, and LaCrosse to restore ride quality."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Buick brake systems with electronic parking brake require proper pad reset procedures. We service all Buick brake systems with quality pads and rotors."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "3.6L Buick water pumps fail at high mileage. We replace the pump and flush the cooling system to prevent overheating in Utah's summer heat."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt corrodes Buick exhaust systems. We repair manifold leaks, replace flex pipes, and service catalytic converters causing check engine codes."
      }
    ],
    issues: [
      {t:'Buick 3.6L Timing Chain Stretch',d:'Buick Enclave, LaCrosse, and Regal with the GM 3.6L V6 develop timing chain stretch causing check engine lights and rough running. Complete chain kit replacement is required.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Buick Encore/Envision Turbo Issues',d:'Buick Encore\'s 1.4L turbo engine can develop turbo wastegate actuator failure and charge pipe cracks. We diagnose and repair turbo systems without unnecessary component replacement.'},
      {t:'Buick Power Steering Rack Leaks',d:'Buick LaCrosse and Regal develop power steering rack seal leaks causing fluid loss and whining. We replace the rack or reseal depending on severity.'}
    ],
    tips: [
      'Buick Enclave timing chains should be inspected at 80,000 miles. The 3.6L V6 is shared with GMC Acadia and Chevy Traverse, and chain stretch is a known issue across all three.',
      'Buick Encore turbo engines need 5,000-mile oil change intervals with full synthetic. The small turbo runs hot and degrades oil faster than naturally aspirated engines.',
      'Buick\'s electronic parking brake actuators can seize in Utah winters from road salt. Exercise the parking brake weekly to keep the mechanisms free.'
    ],
    faqs: [
      {q:'Are Buick vehicles expensive to repair?',a:'Buick repair costs are generally on par with Chevrolet since they share most mechanical components—engines, transmissions, and platforms. Our GM expertise means efficient, accurate repairs at independent shop pricing, not dealer markup.'},
      {q:'My Buick Enclave has a rattle on startup. Is that serious?',a:'A cold-start rattle on the 3.6L V6 is almost certainly timing chain stretch—a known issue on this engine across GM vehicles. It\'s serious because a severely stretched chain can skip and bend valves. Get it inspected. Early replacement saves the engine.'},
      {q:'How reliable is the Buick Encore?',a:'The Encore is generally reliable, but the 1.4L turbo engine needs more attention than a naturally aspirated engine. Regular oil changes (every 5,000 miles), turbo system inspections, and prompt attention to any boost-related issues keep them running well past 150,000 miles.'}
    ]
  },
  'Cadillac': {
    whatHeading: "Full-Service Cadillac Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Cadillacs in South Salt Lake since 1990 — Escalades, ATS and CTS models, XT4s, XT5s, SRX models, and performance variants. We handle cylinder deactivation system diagnosis and repair, V6 timing chain service, MagneRide adaptive suspension repair, performance engine oil intervals, and the full range of maintenance Cadillac vehicles need. Every Cadillac gets a free diagnosis before we recommend any work — you'll know exactly what we found, what the repair costs, and why it's needed.",
    whyIntro: "Cadillac dealers charge luxury-brand rates — often $175–$225 per hour in Salt Lake — for work performed on GM platform components shared with Chevrolet and GMC. Escalade AFM lifter repairs that dealers quote at $5,000–$8,000 come in significantly lower at Scott's, using the same correct repair procedure. MagneRide shock absorbers for CTS and ATS models cost 40–50% less through independent channels versus dealer parts. The CUE touchscreen infotainment system that plagues early CTS and ATS owners is a software issue, not a mechanical one — we won't try to sell you unrelated repairs when the problem isn't under the hood.",
    whoContent: {
      heading: "Who to Trust for Cadillac Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Cadillac vehicles since 1990, from the Fleetwood era through today's performance-oriented ATS-V and CT5-V. The GM platform knowledge we've built across Chevrolet, GMC, and Buick translates directly to Cadillac's drivetrains. Escalade owners and CTS sport sedan owners alike find the same quality at fair prices.",
        "South Salt Lake's central location near I-15 makes Scott's accessible from the entire Salt Lake Valley. Cadillac owners who drive high-mileage Escalades as work vehicles, or who use CTS-V sedans daily, appreciate that we understand performance oil requirements and drivetrain service intervals specific to these demanding applications."
      ]
    },
    whenContent: [
      "A tick or tap from a Cadillac V8 that persists after the engine fully warms up — sometimes with a misfire code on one of the deactivated cylinders — is the early sign of cylinder deactivation lifter wear. Utah's cold winters are especially hard on these systems: cold oil takes time to fill the lifter galleries, and vehicles that don't get sufficient warm-up time accumulate wear faster than the same engine in a milder climate. Some Cadillac V6 models also develop timing chain stretch at higher mileages, with startup rattle as the primary early symptom. Both are worth addressing at the first sign rather than waiting for the damage to compound.",
      "Performance Cadillac models need to be treated as performance engines — shorter oil change intervals with full synthetic, and attention to timing components before high mileage. Canyon driving in Utah puts thermal load on these engines that consumer driving in moderate climates doesn't, and maintenance that slides on a mild-climate schedule catches up faster here. MagneRide adaptive shocks on CTS and ATS models fail gradually — the ride quality becomes harsher over bumps and the handling feels flat through corners. These shocks are a significant expense through the dealer; independent shops with access to quality aftermarket suppliers can handle the same repair at a more reasonable cost."
    ],
    process: [
      {
        step: 1,
        title: "GM/Cadillac Diagnostic Scan",
        desc: "We use professional scan tools with full Cadillac module coverage including MagneRide, Bose audio-integrated suspension, and CUE infotainment system codes."
      },
      {
        step: 2,
        title: "AFM and Timing Chain Assessment",
        desc: "Escalade V8 engines get AFM lifter evaluation. ATS and CTS 3.6L engines are checked for timing chain rattle, camshaft position codes, and chain stretch indicators."
      },
      {
        step: 3,
        title: "MagneRide Shock Evaluation",
        desc: "CTS and ATS suspension gets a full MagneRide damper test — each corner checked individually for response, leakage, and electronic fault codes."
      },
      {
        step: 4,
        title: "Performance-Grade Repair Standards",
        desc: "CTS-V and ATS-V engines receive the shorter oil intervals and higher-specification parts they require. No treating a supercharged V8 like a base fleet engine."
      },
      {
        step: 5,
        title: "Post-Repair Verification",
        desc: "MagneRide repairs are road-tested over varied surfaces. AFM and timing chain repairs receive extended drive cycles to confirm proper engine operation under load."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "AFM Lifter Replacement",
        desc: "Escalade 5.3L and 6.2L V8 AFM lifter collapse is the most common Cadillac drivetrain failure. We repair it correctly with proper oil system cleaning."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Replacement",
        desc: "ATS, CTS, and SRX 3.6L V6 timing chain stretch causes startup rattle. We replace the complete chain set with guides and tensioners."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "MagneRide Shock Replacement",
        desc: "CTS and ATS MagneRide adaptive shocks are 40–50% less expensive through Scott's than dealer pricing, with the same quality result."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Brembo-equipped CTS-V and ATS-V brakes require performance pads rated for track and mountain use. We service all Cadillac brake systems correctly."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Service",
        desc: "High-mileage Cadillac V6 and V8 water pumps develop coolant leaks. We replace the pump and service the cooling system completely."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt corrodes Cadillac exhaust systems. We repair manifold leaks and replace catalytic converters on V6 and V8 models."
      }
    ],
    issues: [
      {t:'Cadillac CUE Infotainment Failure',d:'While not a mechanical repair, Cadillac CUE touchscreen delamination affects nearly all 2013–2017 models. We focus on the mechanical side—and there\'s plenty to address.'},
      {t:'Cadillac 3.6L Timing Chain Issues',d:'Cadillac ATS, CTS, and SRX with the 3.6L V6 share the GM timing chain stretch problem. We replace chains, guides, and tensioners as a complete kit.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Cadillac Magnetic Ride Control Shock Failure',d:'Cadillac\'s MagneRide adaptive shocks fail over time and cost $500–$800 each at the dealer. We source quality replacements at significant savings.',href:'/services/strut-replacement-near-south-salt-lake-ut'}
    ],
    tips: [
      'Cadillac models with MagneRide suspension: if the ride quality degrades or you see "Service Suspension" warnings, the magnetic shocks are failing. Delaying replacement accelerates tire wear.',
      'Cadillac CTS-V and ATS-V supercharged/turbo engines need oil changes every 5,000 miles with Dexos-approved synthetic. These performance engines are harder on oil than standard GM engines.',
      'Cadillac Escalade shares the GM 5.3L/6.2L V8 platform. All AFM lifter concerns that apply to Silverado/Sierra apply equally to Escalade.'
    ],
    faqs: [
      {q:'Is Cadillac repair more expensive than other GM brands?',a:'Mechanically, Cadillac shares most components with Chevrolet and GMC. The same engines and transmissions mean the same repair procedures and similar parts costs. Where Cadillac gets expensive is brand-specific features like MagneRide suspension—but even there, we save you significantly versus dealer pricing.'},
      {q:'Does my Cadillac Escalade have the AFM lifter problem?',a:'If your Escalade has the 5.3L or 6.2L V8, yes, it has the same AFM/DFM system and the same lifter failure risk as Silverado and Sierra trucks. We handle Escalade lifter replacements regularly and can disable AFM to prevent recurrence.'},
      {q:'Why does my Cadillac ride rough with the adaptive suspension?',a:'MagneRide shocks use magnetorheological fluid that degrades over time. When a shock fails, that corner of the vehicle loses damping control. We replace MagneRide shocks in pairs with quality units at 40–50% less than Cadillac dealer pricing.'}
    ]
  },
  'Chrysler': {
    whatHeading: "Full-Service Chrysler Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Chrysler vehicles in South Salt Lake since 1990 — 300s, Pacificas, and the minivans that Utah families have relied on for decades. We handle oil leak repairs, electrical diagnosis, automatic transmission fluid service, and the sliding door mechanism work that high-mileage minivan owners eventually need. Every Chrysler we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Chrysler dealers have consolidated across Salt Lake Valley, leaving some owners driving further for service than they'd like. Scott's fills that gap with Stellantis platform expertise and pricing that doesn't reflect dealer overhead. The Pentastar oil filter housing gasket repair — where the leak drips directly onto the starter and eventually causes a no-start — is a $300–$500 fix at Scott's versus $600–$900 at a dealer. ZF 9-speed fluid service is often skipped at dealer maintenance intervals despite causing harsh shifting after 60,000 miles. We catch these things early.",
    whoContent: {
      heading: "Who to Trust for Chrysler Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Chrysler vehicles through the brand's many ownership changes — from Daimler to Cerberus to Fiat Chrysler to today's Stellantis. The platform knowledge carries across all of it. Pacifica and Town & Country minivans are popular with Utah families, and sliding door issues and oil leaks are something we've repaired hundreds of times.",
        "Our South Salt Lake location near I-15 makes it convenient for Chrysler owners from West Valley through Murray. We explain every repair in plain terms, provide written estimates, and don't create urgency on repairs that can safely wait. For a brand with some known electrical complexities, that honesty matters."
      ]
    },
    whenContent: [
      "If your Chrysler is past 60,000 miles and you notice an oil smell under the hood, fresh oil near the front of the engine, or slow cranking on cold Utah mornings, an oil leak may be working its way toward other components. What starts as a minor seep can contaminate nearby parts and turn a straightforward seal repair into a larger job. Getting it inspected early keeps the repair simple and the bill predictable.",
      "Some Chrysler models develop harsh or hesitant automatic transmission shifts when fluid service has been deferred — Utah's mountain grades and temperature swings accelerate fluid breakdown faster than the factory schedule anticipates. If your Chrysler also shows mysterious electrical symptoms like accessories failing in sequence, intermittent no-starts, or the horn sounding on its own, the vehicle's power distribution module may need diagnosis. These are diagnosable problems when you have the right tools and take the time to test before replacing parts."
    ],
    process: [
      {
        step: 1,
        title: "Stellantis/FCA Diagnostic Scan",
        desc: "We use professional scan tools covering all Chrysler modules — TIPM, ZF transmission, and body control — to pinpoint electrical and mechanical faults accurately."
      },
      {
        step: 2,
        title: "Pentastar Leak and Starter Inspection",
        desc: "Oil filter housing gasket condition is checked on all Pentastar V6 models. If oil seepage is present, we inspect the starter for contamination before it fails."
      },
      {
        step: 3,
        title: "ZF Transmission Fluid Check",
        desc: "9-speed ATF condition and level are checked. Harsh shifting and hesitation are documented and correlated with fluid condition before any transmission diagnosis."
      },
      {
        step: 4,
        title: "Repair with FCA-Specified Parts",
        desc: "Pentastar gaskets, ZF-approved transmission fluid, and TIPM modules use Mopar or quality OEM-equivalent parts. Correct materials prevent recurrence."
      },
      {
        step: 5,
        title: "Electrical Verification and Test Drive",
        desc: "TIPM repairs are verified by cycling all electrical systems. ZF transmission service includes an adaptive relearn drive cycle for smooth shift calibration."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Pentastar Oil Filter Housing Gasket",
        desc: "The 3.6L oil filter housing gasket leak drips onto the starter — a two-problem repair in one. We replace the gasket before starter damage occurs."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Chrysler 300 and Pacifica brake systems are serviced with electronic park brake reset and quality pads and rotors for Utah mountain driving."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "300 and Pacifica suspension components wear with Utah road conditions. We replace struts, control arm bushings, and sway bar links as needed."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt corrodes Chrysler exhaust systems. We repair manifold leaks and replace catalytic converters triggering P0420 codes."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "Pentastar V6 water pumps develop coolant leaks at high mileage. We replace the pump and flush the cooling system completely."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "Pentastar V6 timing chains can stretch at high mileage with irregular oil changes. We replace chains and tensioners to restore proper cam timing."
      }
    ],
    issues: [
      {t:'Chrysler 3.6L Pentastar Oil Filter Housing Leak',d:'The Chrysler 300 and Pacifica 3.6L Pentastar V6 develops oil filter adapter housing leaks that drip oil onto the starter and exhaust. We replace the housing gasket and clean affected components.'},
      {t:'Chrysler Transmission Cooler Line Corrosion',d:'Chrysler and Dodge vehicles in Utah develop corroded transmission cooler lines from road salt, causing fluid leaks. We replace with upgraded stainless steel lines.'},
      {t:'Chrysler TIPM Electrical Failures',d:'The Totally Integrated Power Module causes random electrical issues—fuel pump relay failure, window malfunctions, horn blaring. We diagnose and repair or replace the TIPM.'}
    ],
    tips: [
      'Chrysler Pacifica and 300 3.6L engines: check the oil filter housing for leaks at every oil change after 60,000 miles. Catching this early is a $200 gasket job. Ignoring it can kill the starter motor.',
      'Chrysler vehicles with the ZF 9-speed transmission benefit from a fluid change at 60,000 miles despite the "lifetime" fill specification.',
      'Chrysler minivan sliding door mechanisms need lubrication annually in Utah\'s dry climate. Neglect causes motor burnout and cable failure.'
    ],
    faqs: [
      {q:'Is the Chrysler Pacifica reliable?',a:'The Pacifica is generally reliable with the 3.6L Pentastar V6. Known issues include oil filter housing leaks and transmission cooler line corrosion in salt states like Utah. With regular maintenance and prompt attention to oil leaks, they\'re solid family vehicles.'},
      {q:'My Chrysler has random electrical problems. What causes this?',a:'Random electrical issues in Chrysler/Dodge vehicles often trace to the TIPM (Totally Integrated Power Module). This central electrical controller develops internal relay failures that cause fuel pump, window, horn, and lighting problems. We diagnose whether it\'s the TIPM or another electrical issue before recommending repair.'},
      {q:'How much does TIPM replacement cost?',a:'TIPM replacement typically costs $800–$1,200 including the module and programming. In some cases, we can repair individual relays within the TIPM for less. We diagnose first to confirm the TIPM is actually the problem—not every electrical issue is TIPM-related.'}
    ]
  },
  'Lincoln': {
    whatHeading: "Full-Service Lincoln Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Lincoln vehicles in South Salt Lake since 1990 — Navigators, Aviators, Continentals, and the sedans and crossovers Lincoln has built over the decades. We handle air suspension diagnosis and repair, turbocharged engine oil service, intake valve cleaning, and the full range of maintenance these well-appointed vehicles need over their lifetimes. Every Lincoln we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Lincoln dealers charge a premium over Ford dealers for the same platform work. Navigator air suspension repairs that dealers quote at $1,800–$3,000 for air spring replacement come in $600–$1,000 less at Scott's using quality OEM-equivalent components. EcoBoost engines need oil changes every 5,000 miles and spark plugs at 60,000 miles — not 100,000 as some owners assume from the maintenance schedule. We enforce these intervals to prevent the turbo oil coking and premature spark plug failure that cause expensive repairs. The Motorcraft FL-500-S filter on the 3.0L twin-turbo isn't optional — it's specified for a reason, and we use it.",
    whoContent: {
      heading: "Who to Trust for Lincoln Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Ford-platform vehicles since 1990, and Lincoln's shared engineering means our expertise applies directly. Navigator owners dealing with air suspension failures and MKZ owners with EcoBoost issues find the same knowledgeable, personal service that Ford owners rely on. We know the platform's failure patterns across every generation.",
        "South Salt Lake's central location near I-15 makes Scott's a convenient destination for Lincoln owners from Salt Lake City through Draper. We're straightforward about what your Lincoln needs and what it can safely defer — and our estimates reflect honest labor, not luxury-brand markup."
      ]
    },
    whenContent: [
      "If your Lincoln sits lower on one corner after an overnight park, or you hear the air suspension compressor running more than usual, an air spring is likely developing a slow leak. Left unaddressed, the compressor works overtime to compensate and eventually burns out. Utah's temperature swings — freezing nights and hot summers — degrade air spring rubber faster than moderate climates. Catching a failing spring before the compressor is overworked keeps the repair to one component instead of two or three.",
      "Some Lincoln models use turbocharged engines that require more attentive oil service intervals than naturally aspirated engines — extended oil changes lead to turbo oil coking and carbon buildup on intake valves, both of which become expensive if ignored. At Utah's altitude, turbos work harder to compensate for thinner air, adding heat to the oil on every drive. If your Lincoln has high mileage and you notice rough idling, sluggish acceleration, or oil consumption, an inspection of the induction and turbo systems is the right starting point."
    ],
    process: [
      {
        step: 1,
        title: "Ford/Lincoln Diagnostic Scan",
        desc: "We use professional IDS-compatible scan tools covering all Lincoln modules — air suspension, AWD system, transmission, and body control modules."
      },
      {
        step: 2,
        title: "Air Suspension Diagnosis",
        desc: "Navigator and Aviator air suspension is diagnosed component by component — air springs, compressor, and valve manifold — before recommending replacement parts."
      },
      {
        step: 3,
        title: "EcoBoost Turbo and Oil Assessment",
        desc: "EcoBoost engines are checked for correct oil change interval compliance, turbo oil feed line condition, and intake valve carbon accumulation."
      },
      {
        step: 4,
        title: "Repair with Motorcraft-Specified Parts",
        desc: "3.0L twin-turbo models use Motorcraft FL-500-S filters. EcoBoost spark plugs are Motorcraft spec. Air suspension components are OEM-equivalent quality."
      },
      {
        step: 5,
        title: "Road Test and System Verification",
        desc: "Air suspension repairs are verified through full ride height cycling. EcoBoost work receives a highway drive to confirm turbo function and oil pressure."
      }
    ],
    commonRepairs: [
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Air Suspension Repair",
        desc: "Navigator and Aviator air spring and compressor failures are a Scott's specialty. We diagnose component by component and replace only what's failed."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "EcoBoost Oil & Spark Plug Service",
        desc: "5K oil changes and 60K spark plugs are non-negotiable on Lincoln EcoBoost engines. We enforce correct intervals to prevent turbo damage and misfires."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Lincoln brake systems with electronic parking brake and trailer brake integration are fully serviced with proper calibration and quality components."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "EcoBoost timing chains and VCT system components wear with extended oil intervals. We replace chains and phaser assemblies to restore proper valve timing."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "Lincoln 3.5L and 3.0L EcoBoost water pumps fail at high mileage. We replace the pump and service the cooling system completely."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt attacks Lincoln exhaust systems. We repair manifold leaks, replace flex pipes, and service catalytic converters triggering P0420 codes."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & AWD Service",
        desc: "Lincoln AWD models develop CV joint wear. We replace boots and axle assemblies and service AWD coupling components to maintain system function."
      }
    ],
    issues: [
      {t:'Lincoln EcoBoost Turbo Maintenance',d:'Lincoln MKZ and Corsair use Ford EcoBoost turbo engines that require more frequent maintenance than naturally aspirated engines. Turbo oil feed line coking and intercooler condensation need attention.'},
      {t:'Lincoln Air Suspension Compressor Failure',d:'Lincoln Navigator and Continental air suspension systems develop compressor failures and air spring leaks. We diagnose which component has failed and replace at significant savings versus the dealer.'},
      {t:'Lincoln Brake Dust from Premium Pads',d:'Lincoln models use aggressive brake pad compounds that create heavy dust on wheels. We offer ceramic alternatives that reduce dust 80% while maintaining stopping performance.'}
    ],
    tips: [
      'Lincoln vehicles share Ford powertrains. The EcoBoost turbo engines need spark plugs at 60,000 miles (not 100K) and oil changes every 5,000 miles.',
      'Lincoln Navigator air springs should be inspected annually for cracks. Utah\'s UV and temperature swings degrade rubber faster than moderate climates.',
      'Lincoln MKZ/Continental with the 3.0L twin-turbo: use only Motorcraft FL-500-S oil filters. Aftermarket filters can restrict flow to the turbo bearings.'
    ],
    faqs: [
      {q:'Is Lincoln basically a fancy Ford?',a:'Mechanically, yes. Lincoln uses Ford engines, transmissions, and platforms with upgraded features and refinement. This means our extensive Ford experience applies directly. Same quality repair, same parts availability, much less than Lincoln dealer pricing.'},
      {q:'My Lincoln Navigator is sagging on one side overnight. What\'s wrong?',a:'An air spring has developed a leak. The compressor runs overtime trying to maintain ride height, which eventually kills the compressor too. We recommend replacing the leaking spring immediately—catching it early saves the $600–$800 compressor replacement on top of the spring cost.'},
      {q:'How often should my Lincoln EcoBoost engine be serviced?',a:'Every 5,000 miles for oil changes with full synthetic. EcoBoost turbos run hot and degrade oil faster than Ford\'s standard interval suggests. Spark plugs at 60,000 miles, not 100,000. Turbo vehicles require shorter maintenance intervals than their naturally aspirated counterparts.'}
    ]
  },
  'Volvo': {
    whatHeading: "Full-Service Volvo Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Volvo vehicles in South Salt Lake since 1990 — XC60s, XC90s, S60s, V60s, and the older Swedish models that earned Volvo its reputation. We handle turbocharged engine maintenance, AWD system fluid service, automatic transmission service, and the cooling and electrical work these vehicles need across their lifetimes. Every Volvo we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Volvo dealers in Salt Lake Valley charge $150–$190 per hour, and the brand's specific fluid requirements — VCC RBS0-2AE spec oil, Haldex coupling fluid — are often overlooked at independent shops that don't specialize in European vehicles. At Scott's, we use the correct specifications because Volvo's AWD and turbocharged drivetrain components don't tolerate substitutions. PCV system failures that dealers diagnose as turbo problems are a common misdiagnosis; we identify the PCV first and save owners $800–$2,000 on unnecessary turbo replacements. Honest diagnosis, European expertise, independent pricing.",
    whoContent: {
      heading: "Who to Trust for Volvo Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Volvo vehicles since 1990, from the legendary 240 series through today's turbocharged XC60 and XC90. Volvo's safety-first engineering philosophy carries real maintenance requirements — particularly around the PCV system and Haldex AWD coupling — that we understand thoroughly. Utah's mountain roads are exactly where AWD function matters most.",
        "Our South Salt Lake location near I-15 serves Volvo owners from across the valley. T8 plug-in hybrid XC90 owners, legacy XC70 cross-country drivers, and sport S60 T6 owners all find the same careful, informed service. We're straightforward about Volvo's maintenance requirements and honest when a repair can wait."
      ]
    },
    whenContent: [
      "If your Volvo is turbocharged and you're noticing oil consumption, blue smoke on startup, or a hesitation under boost, the crankcase ventilation system is worth inspecting before assuming the turbo itself is the problem. A failed crankcase ventilation component routes pressure into the intake and mimics turbo failure — and at Utah's altitude, where turbos work harder to compensate for thin air, this wear pattern shows up sooner. Diagnosing it correctly saves the cost of an unnecessary turbo replacement.",
      "Some Volvo AWD models use an electronically controlled rear coupling that depends on clean fluid to engage smoothly and quickly. When that fluid degrades, the first signs are a slight delay in AWD engagement, a shudder when cornering, and eventually drivetrain clunk. On Utah's snowy canyon roads, AWD response is a safety issue, not just a comfort one. Automatic transmission fluid service is also time-sensitive on these vehicles — harsh shifts and hesitation between gears are early signs that fluid is overdue."
    ],
    process: [
      {
        step: 1,
        title: "Volvo-Specific Diagnostic Scan",
        desc: "We use VIDA-compatible professional scan tools to access all Volvo modules — PCV system data, Haldex AWD, Geartronic transmission, and T8 hybrid battery management."
      },
      {
        step: 2,
        title: "PCV System Evaluation",
        desc: "T5 and T6 turbo models get a PCV function test before any turbo diagnosis. We check the oil trap, diaphragm, and crankcase pressure to rule out PCV failure first."
      },
      {
        step: 3,
        title: "Haldex Fluid and AWD Assessment",
        desc: "AWD-equipped Volvos get a Haldex fluid condition check and interval verification. Rear engagement function is tested on all AWD models."
      },
      {
        step: 4,
        title: "Repair with VCC-Specified Products",
        desc: "Volvo VCC RBS0-2AE spec oil, genuine Haldex fluid, and Geartronic ATF meet Volvo's engineering requirements. We don't substitute generic products on Swedish drivetrains."
      },
      {
        step: 5,
        title: "Test Drive and System Verification",
        desc: "PCV repairs are verified by checking intake vacuum and oil consumption markers. Haldex AWD is tested under load. All fault codes are cleared and rechecked before return."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "PCV System Repair",
        desc: "T5 and T6 Volvo PCV system failure causes oil consumption and false turbo symptoms. We repair it correctly before any turbo diagnosis is made."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Volvo models including the C70 and sport S60 receive expert clutch service. We also source dual-mass flywheel replacements for high-mileage turbocharged models."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "XC60 and XC90 suspension components wear with Utah mountain and canyon use. We replace struts and control arm components to factory specification."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Volvo brake systems with electronic pad wear sensors and electronic parking brake receive proper service and calibration on all models."
      },
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt Replacement",
        desc: "Legacy Volvo five-cylinder engines use timing belts. We replace belts, tensioners, and water pumps as a complete service on older S60, S80, and XC70 models."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Service",
        desc: "Volvo water pumps on T5 and T6 engines develop coolant leaks. We replace the pump and service the complete cooling system."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt corrodes Volvo exhaust systems. We repair flex pipes, manifold leaks, and replace catalytic converters on all Volvo models."
      }
    ],
    issues: [
      {t:'Volvo PCV System Failure',d:'Volvo 5-cylinder and T5/T6 engines develop PCV (positive crankcase ventilation) system failures that cause oil leaks, rough idle, and boost leaks. We replace the PCV system with upgraded components.'},
      {t:'Volvo Transmission Software Issues',d:'Volvo Geartronic automatic transmissions can develop harsh shifting from outdated software or degraded fluid. We update software and replace fluid to restore smooth operation.'},
      {t:'Volvo Cooling System Failures',d:'Volvo expansion tanks and coolant hoses become brittle and crack in Utah\'s temperature extremes. We proactively replace cooling system components to prevent roadside overheating.',href:'/services/water-pump-replacement-near-south-salt-lake-ut'}
    ],
    tips: [
      'Volvo turbo engines (T5, T6, T8) need oil changes every 7,500 miles maximum with Volvo-approved VCC RBS0-2AE specification oil.',
      'Volvo PCV system should be inspected at every oil change after 80,000 miles. A failed PCV causes oil consumption, turbo seal failure, and boost leaks.',
      'Volvo AWD models use a Haldex coupling that requires fluid changes every 40,000 miles. Skip this and the coupling fails, eliminating AWD.'
    ],
    faqs: [
      {q:'Are Volvos expensive to maintain?',a:'Modern Volvos require more specialized maintenance than mainstream brands, but our rates are 30–50% less than Volvo dealer pricing. The key is following maintenance intervals—the turbo engines and AWD systems need attention on schedule to avoid expensive failures.'},
      {q:'Why is my Volvo burning oil and running rough?',a:'On Volvo turbo engines, the most common cause is a failed PCV system. When the PCV fails, crankcase pressure builds and forces oil past seals. This causes oil consumption, rough idle, and can damage the turbo. PCV replacement is a few hundred dollars and resolves all symptoms.'},
      {q:'How often does my Volvo need transmission fluid changed?',a:'Every 40,000 miles for the automatic, and Haldex AWD coupling fluid at the same interval. Volvo transmissions are sensitive to fluid condition—old fluid causes harsh shifts and premature wear. We use Volvo-spec fluid for proper operation.'}
    ]
  },
  'Land Rover': {
    whatHeading: "Full-Service Land Rover Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Land Rover vehicles in South Salt Lake since 1990 — Range Rovers, Discoveries, Defenders, and the LR-series SUVs that Utah owners put to real use. We handle air suspension diagnosis and repair, cooling system service, transfer case and differential fluid changes, and the full range of drivetrain and mechanical work these capable but maintenance-intensive vehicles require. Every Land Rover we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Land Rover dealers in Salt Lake Valley charge rates comparable to Mercedes and BMW — $180–$230 per hour — and diagnostic fees alone can reach $300 before any repair is approved. The plastic cooling system components in Range Rover V8 models are a well-known failure — the expansion tank and coolant hoses crack without warning, causing sudden overheating. Dealers quote $1,500–$2,500 to proactively replace these components. Scott's performs the same replacement at a meaningful savings, and we strongly recommend doing it before the roadside tow happens. One breakdown with an overheated Land Rover costs more than any preventive service.",
    whoContent: {
      heading: "Who to Trust for Land Rover Repair in South Salt Lake",
      paras: [
        "Scott's has taken on Land Rover's most complex systems since 1990 — air suspension, transfer cases, and the cooling system failures that have frustrated many owners. Land Rovers are extraordinary off-road vehicles, and Utah's canyon terrain and mountain trails make them a natural fit. We service them with the seriousness that platform demands.",
        "Land Rover owners often describe a shift in experience when they find an independent shop that actually knows the vehicles — instead of a dealer service department that charges maximum rates for basic work. Scott's near I-15 in South Salt Lake is that alternative. We diagnose correctly, communicate clearly, and charge fairly."
      ]
    },
    whenContent: [
      "If your Land Rover sits lower on one corner after sitting overnight, or the suspension warning light is on and you hear the compressor cycling frequently, the air suspension system needs attention soon. The failure pattern is predictable: one air spring leaks, the compressor overworks to compensate, and eventually the compressor fails too. Utah's temperature extremes — freezing nights and summer heat — accelerate air spring rubber deterioration faster than temperate climates. We diagnose each component individually rather than recommending a full system replacement that may not be warranted.",
      "Some Land Rover V8 models use plastic cooling system components that become brittle with age and heat cycles — a sudden failure can overheat the engine with very little warning, and an overheated V8 is an expensive repair. We proactively replace these components with more durable alternatives when bringing Land Rovers in for other service. Transfer case and differential fluids on any Land Rover used for off-road driving also need more frequent attention than the factory schedule suggests — terrain response cycling and Utah mountain grades accelerate fluid breakdown."
    ],
    process: [
      {
        step: 1,
        title: "Land Rover Diagnostic Scan",
        desc: "We use JLR-compatible professional scan tools covering air suspension height sensors, terrain response modules, transfer case, and all powertrain modules."
      },
      {
        step: 2,
        title: "Air Suspension Component Diagnosis",
        desc: "Each air suspension component — springs, compressor, valve block, and height sensors — is evaluated individually to avoid blanket replacement recommendations."
      },
      {
        step: 3,
        title: "Cooling System Plastic Component Inspection",
        desc: "Expansion tank, plastic pipe sections, and hose connections are inspected for cracking and brittleness on all Range Rover V8 models over 80,000 miles."
      },
      {
        step: 4,
        title: "Drivetrain Fluid Service",
        desc: "Transfer case, front, and rear differential fluids are checked and serviced every 30,000 miles — critical for Land Rovers used in any off-road application."
      },
      {
        step: 5,
        title: "Road and Off-Road System Verification",
        desc: "Air suspension repairs are tested through full height cycle and terrain response modes. Cooling system repairs receive a pressure test before return."
      }
    ],
    commonRepairs: [
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Air Suspension Repair",
        desc: "Range Rover and Discovery air spring, compressor, and valve block failures are diagnosed and repaired at significant savings over Land Rover dealer pricing."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Cooling System & Plastic Component Replacement",
        desc: "Range Rover V8 plastic coolant expansion tanks and pipe sections are replaced proactively before they fail on the road and overheat the engine."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Transfer Case & Differential Fluid Service",
        desc: "Land Rover drivetrain fluids require 30K service intervals. We service transfer case, front, and rear differentials with correct fluids."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Land Rover brake systems with electronic parking brake and hill descent control require proper calibration. We service all LR brake systems completely."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust & Catalytic Converter",
        desc: "Utah road salt attacks Land Rover exhaust systems. We repair corroded components and replace catalytic converters causing emission fault codes."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "AJ-V8 and other Land Rover engines develop timing chain stretch at high mileage. We replace chains and tensioners to restore proper valve timing."
      },
      {
        slug: "shock-replacement-near-south-salt-lake-ut",
        name: "Shock Replacement",
        desc: "Non-air-suspension Land Rover models use conventional shocks that wear with off-road and highway use. We replace with quality units for proper ride control."
      }
    ],
    issues: [
      {t:'Land Rover Coolant System Failures',d:'Land Rover vehicles are notorious for coolant leaks—expansion tanks, hoses, water pumps, and thermostat housings all fail with age. Utah\'s temperature swings accelerate plastic component degradation.',href:'/services/water-pump-replacement-near-south-salt-lake-ut'},
      {t:'Land Rover Air Suspension Failures',d:'Range Rover and Discovery air suspension systems develop compressor failures, valve block leaks, and air spring leaks. We diagnose the specific failure point rather than replacing the entire system.'},
      {t:'Land Rover Transfer Case and Differential Leaks',d:'Land Rover 4WD systems develop output shaft seal leaks and differential cover leaks. Regular fluid changes help, but eventually seals need replacement.'}
    ],
    tips: [
      'Land Rover cooling system components should be proactively replaced at 80,000 miles. A single overheating event can crack the aluminum heads—a $5,000+ repair.',
      'Range Rover air suspension: if you see "Suspension Fault" warnings, address immediately. Running on a failed air spring overworks the compressor and creates a cascade of failures.',
      'Land Rover/Range Rover differential and transfer case fluids should be changed every 30,000 miles—not the 100K+ the manual suggests for "normal" driving.'
    ],
    faqs: [
      {q:'Are Land Rovers really that unreliable?',a:'Land Rovers require more proactive maintenance than most vehicles, and repair costs are higher. But with attentive maintenance, they can be reliable. The key is preventing failures rather than reacting to them. Our approach is to inspect and replace wear items on schedule before they strand you.'},
      {q:'Why does my Range Rover keep overheating?',a:'Land Rover cooling systems use plastic components that degrade with age and Utah\'s temperature extremes. Expansion tanks crack, thermostat housings warp, and hose connections fail. We recommend a complete cooling system refresh at 80,000 miles to prevent catastrophic overheating.'},
      {q:'How much does Range Rover air suspension repair cost?',a:'Individual air springs run $400–$800 each. The compressor is $600–$1,200. The valve block is $400–$800. We diagnose which component has actually failed rather than replacing everything. Many shops replace the compressor when the real issue is a leaking spring that overworked it.'}
    ]
  },
  'Porsche': {
    whatHeading: "Full-Service Porsche Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Porsche vehicles in South Salt Lake since 1990 — 911s, Boxsters, Caymans, Cayennes, and Macans across multiple generations. We handle flat-six engine maintenance, dual-clutch transmission fluid service, cooling system work, and the clutch and drivetrain repairs that come with cars driven the way Porsches are meant to be driven. Every Porsche we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Porsche dealers in Salt Lake bill at $200–$250 per hour — rates that make even routine maintenance expensive. The IMS bearing replacement on a 996 or 997 911 is best performed when the engine is already out for clutch service — doing it separately means paying twice for the teardown labor. Scott's combines IMS and clutch work in a single visit, saving $1,500–$2,500 in redundant labor. Cayenne owners save $1,000+ on plastic coolant pipe replacement compared to dealer quotes. We use the correct PDK fluid and Porsche-specified engine oil because cutting corners on these cars isn't an option.",
    whoContent: {
      heading: "Who to Trust for Porsche Repair in South Salt Lake",
      paras: [
        "Scott's is the alternative for Porsche owners who love their cars and respect their budgets. Porsche engineering is exceptional — but dealer service rates don't need to be the only option. We've serviced Porsche vehicles since 1990, and our clutch expertise is directly applicable to the IMS bearing work that 996 and 997 owners need to plan for.",
        "Utah's mountain roads are perfect Porsche territory — canyon driving on I-15 routes and Wasatch front passes is what these cars were built for. We understand that context, and we service Porsches accordingly — with attention to cooling systems, brakes, and drivetrain components that carry the weight of serious driving."
      ]
    },
    whenContent: [
      "If you own an older air-cooled or early water-cooled Porsche 911, Boxster, or Cayman and haven't addressed the intermediate shaft bearing, this is worth a direct conversation. The bearing is a known failure risk on engines from the late 1990s through mid-2000s, and the most cost-effective time to replace it is during clutch service when the transmission is already out — combining the jobs significantly reduces labor cost. Utah's canyon driving and altitude put thermal load on these engines that flat-land Porsches don't experience. If the car is due for a clutch, this is the time.",
      "Some Porsche SUV models have plastic cooling system plumbing that degrades with age and heat cycles, often failing suddenly rather than gradually. In Utah's summer heat on mountain grades, a coolant failure leads to rapid overheating. If your Porsche SUV is past 70,000 miles and hasn't had a cooling system inspection, it's worth doing proactively. Dual-clutch transmission fluid also has a real service interval — neglecting it causes shift quality to deteriorate and eventually damages the clutch packs inside the transmission."
    ],
    process: [
      {
        step: 1,
        title: "Porsche Diagnostic Scan",
        desc: "We use PIWIS-compatible professional scan tools to access all Porsche modules — PDK, PASM suspension, PDCC, and engine management — for complete system visibility."
      },
      {
        step: 2,
        title: "IMS Bearing and Clutch Assessment",
        desc: "996 and 997 owners get IMS bearing condition evaluation and clutch inspection. We recommend combining both services when the clutch needs replacement to maximize labor efficiency."
      },
      {
        step: 3,
        title: "Cayenne Coolant System Inspection",
        desc: "V8 Cayenne models get plastic coolant pipe inspection. We identify cracked or brittle sections and quote aluminum replacement before a roadside failure occurs."
      },
      {
        step: 4,
        title: "PDK Fluid and Drivetrain Service",
        desc: "PDK dual-clutch fluid is serviced every 30,000–40,000 miles with Porsche-specified fluid. Engine oil meets Porsche A40 specification."
      },
      {
        step: 5,
        title: "Performance Verification Drive",
        desc: "Clutch and IMS work is verified by a thorough road test including heel-toe downshifts and high-rev engagement. PDK service includes adaptive shift relearn."
      }
    ],
    commonRepairs: [
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch & IMS Bearing Replacement",
        desc: "Combining IMS bearing replacement with clutch service on 996/997 Porsche models is the smart approach — Scott's clutch expertise makes this our strongest Porsche offering."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Cayenne Coolant Pipe & Water Pump",
        desc: "V8 Cayenne plastic coolant pipes are replaced with aluminum upgrades before they crack and overheat the engine. Water pump service is included."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "PDK Dual-Clutch Fluid Service",
        desc: "PDK transmission fluid service every 30K–40K maintains smooth engagement and protects the clutch pack from wear caused by degraded fluid."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Porsche brake systems — including PCCB ceramic composite setups on 911 — are serviced with performance-grade pads appropriate for canyon driving."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "PASM Suspension Service",
        desc: "Porsche Active Suspension Management components are diagnosed and replaced. We evaluate each damper individually before recommending replacement."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust System Repair",
        desc: "Utah road salt attacks Porsche exhaust systems. We repair manifold flanges, replace corroded sections, and service sport exhaust systems."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "High-mileage Porsche flat-six and V8 engines develop timing chain wear. We replace chains and tensioners with precision to maintain engine timing accuracy."
      }
    ],
    issues: [
      {t:'Porsche Cayenne Coolant Pipe Failure',d:'Porsche Cayenne V8 models develop plastic coolant pipe failures in the valley between the cylinder banks. Failure causes rapid coolant loss and overheating. We replace with upgraded aluminum pipes.'},
      {t:'Porsche IMS Bearing (996/997/Boxster/Cayman)',d:'Porsche flat-six engines in the 996/997 911, Boxster, and Cayman have a known intermediate shaft bearing that can fail catastrophically. We install upgraded IMS bearings preventively.'},
      {t:'Porsche PDK Mechatronic Issues',d:'Porsche PDK dual-clutch transmissions can develop mechatronic unit and clutch wear issues at high mileage. We diagnose and service PDK systems.'}
    ],
    tips: [
      'Porsche flat-six IMS bearing: if you own a 1999–2008 911, Boxster, or Cayman, have the IMS bearing inspected at every major service. Replacement during clutch service adds minimal labor cost.',
      'Porsche Cayenne V6 and V8 models: change transfer case and differential fluids every 30,000 miles. The Cayenne\'s AWD system works harder than most due to vehicle weight.',
      'Porsche brake pads contain asbestos-free ceramic compounds that generate fine dust. Clean wheels regularly to prevent permanent brake dust etching.'
    ],
    faqs: [
      {q:'Can an independent shop work on my Porsche?',a:'Absolutely. Modern Porsches use many shared-platform components (Cayenne shares with Audi Q7/VW Touareg). Our diagnostic equipment reads Porsche-specific codes, and we use OEM-quality parts. You\'ll save 40–60% versus Porsche dealer pricing.'},
      {q:'Should I worry about the IMS bearing on my Porsche?',a:'If you have a 1999–2008 Porsche with a flat-six engine (911 996/997.1, Boxster, Cayman), the IMS bearing is a real concern. We recommend replacing it with an upgraded bearing during clutch service or as a standalone preventive measure. The bearing itself costs $300–$500; failure costs $15,000+ for an engine rebuild.'},
      {q:'How much does Porsche maintenance cost at your shop?',a:'Porsche oil changes run $150–$250 (they hold 8+ quarts of expensive synthetic). Brake service is $400–$800 per axle due to large rotors and specialized pads. These are significant savings versus Porsche dealer pricing while using the same quality parts and procedures.'}
    ]
  },
  'MINI': {
    whatHeading: "Full-Service MINI Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced MINI vehicles in South Salt Lake since 1990 — Coopers, Cooper Ss, Countrymans, and Clubmans across all generations. We handle timing chain service, water pump and thermostat replacement, clutch work on manual models, and the turbocharged engine maintenance these small cars need to stay reliable. Every MINI we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "MINI service at BMW dealers in Salt Lake runs $160–$200 per hour — premium pricing for a car that's often a second vehicle or commuter. The N14 timing chain tensioner failure in 2007–2015 Cooper S models is a well-documented issue that dealers have quoted $2,000–$3,500 to repair. Scott's completes it for significantly less because we don't carry BMW dealership overhead. The dual-mass flywheel clutch chatter on manual MINI models is a common complaint — we offer solid flywheel conversion that eliminates the problem permanently for owners who prefer a firmer pedal feel. BMW-approved LL-01 oil specification is always used.",
    whoContent: {
      heading: "Who to Trust for MINI Repair in South Salt Lake",
      paras: [
        "Scott's has serviced BMW-platform vehicles since 1990, and MINI's BMW Group engineering means our expertise applies directly. The N14 and N18 engine timing chain failures have been some of the most common repairs we've performed on modern MINIs — we know exactly what's involved and complete them efficiently.",
        "MINI owners in Salt Lake Valley appreciate the independent alternative to BMW dealer pricing. Whether you drive a classic R53 supercharged Cooper S or a current F56 turbocharged model, Scott's in South Salt Lake provides the same careful service with correct BMW-specified fluids and a mechanic who knows the platform."
      ]
    },
    whenContent: [
      "If your turbocharged MINI rattles or ticks on cold startup — a metallic sound that fades after the engine warms — the timing chain and tensioner system needs inspection sooner rather than later. At Utah's altitude, cold starts are harder on these components because oil takes longer to circulate and build pressure. On an interference engine, a jumped timing chain bends valves, so dismissing an early rattle as normal is a costly mistake. Catching the tensioner before the chain jumps is the difference between a manageable repair and an engine job.",
      "The electric water pump and thermostat on turbocharged MINI engines fail without warning — typically at moderate mileages — and in Utah's summer heat a failed water pump causes rapid overheating. If your MINI hasn't had these components inspected or replaced at higher mileage, it's worth adding to the next service visit. Manual MINI models with dual-mass flywheels can develop clutch chatter that's especially noticeable on cold Utah mornings when the flywheel springs are stiff — a solid flywheel conversion is an option that eliminates the issue permanently."
    ],
    process: [
      {
        step: 1,
        title: "BMW/MINI Diagnostic Scan",
        desc: "We use professional ISTA-compatible scan tools covering all MINI modules — N14/N18 engine timing, electric water pump, and electronic throttle system."
      },
      {
        step: 2,
        title: "Timing Chain Tensioner Assessment",
        desc: "Cooper S models with N14 or N18 engines get a cold-start observation and tensioner evaluation. We document rattle characteristics before recommending repair."
      },
      {
        step: 3,
        title: "Water Pump and Flywheel Inspection",
        desc: "Electric water pump function is verified. Manual models with dual-mass flywheel chatter are assessed for conversion eligibility."
      },
      {
        step: 4,
        title: "Repair with BMW LL-01 Specification",
        desc: "All MINI engines receive BMW-approved LL-01 specification oil. Timing chain tensioner kits and water pump parts use quality components meeting BMW specifications."
      },
      {
        step: 5,
        title: "Cold-Start Verification and Road Test",
        desc: "Post timing chain repair, we perform a cold-start to confirm rattle elimination. Water pump repairs receive a cooling system pressure test and temperature monitoring during test drive."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Tensioner Replacement",
        desc: "N14 and N18 Cooper S timing chain tensioner failure is MINI's most common serious repair. We replace the tensioner, chain, and guides as a complete service."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch & Flywheel Replacement",
        desc: "Manual MINI clutch replacement is a Scott's specialty. We offer solid flywheel conversion to eliminate dual-mass flywheel chatter permanently."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Electric Water Pump & Thermostat",
        desc: "MINI electric water pumps fail between 50K–80K miles. We replace the pump and thermostat together with a full cooling system bleed."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Supercharger Oil Service (R53)",
        desc: "R53 Cooper S supercharger oil top-off is often missed by non-specialist shops. We include it in routine service on 2002–2006 models."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "MINI brake systems with electronic pad wear indicators are serviced with quality performance pads appropriate for Utah mountain and canyon driving."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "MINI suspension components wear with Utah's road conditions. We replace struts and control arm components to restore MINI's sharp handling character."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust System Repair",
        desc: "Utah road salt corrodes MINI exhaust systems. We repair manifold flanges, replace flex pipes, and service catalytic converters on all MINI models."
      }
    ],
    issues: [
      {t:'MINI Timing Chain Tensioner Failure',d:'MINI Cooper S and JCW turbocharged engines share BMW\'s timing chain tensioner issue. Early-revision tensioners fail and cause engine damage. We replace with the updated revision.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'MINI Thermostat and Water Pump Failure',d:'MINI uses an electric water pump and electronically controlled thermostat that fail frequently. Combined replacement prevents repeat visits.',href:'/services/water-pump-replacement-near-south-salt-lake-ut'},
      {t:'MINI Clutch and Flywheel Replacement',d:'MINI Cooper S manual transmissions develop clutch judder from the dual-mass flywheel. We offer a single-mass flywheel conversion for smoother, longer-lasting clutch operation.',href:'/services/clutch-repair-near-south-salt-lake-ut'}
    ],
    tips: [
      'MINI Cooper S and JCW turbocharged engines need oil changes every 5,000 miles with BMW-approved LL-01 oil. The 10,000-mile interval BMW suggests is too long for turbo engines in Utah conditions.',
      'MINI timing chain tensioners should be inspected at every service after 50,000 miles. The updated tensioner revision is identifiable by a different part number—we can check which revision you have.',
      'MINI supercharged models (2002–2006 R53) need supercharger oil top-off every 30,000 miles. Running low on supercharger oil causes bearing failure.'
    ],
    faqs: [
      {q:'Is MINI repair expensive?',a:'MINI uses BMW mechanical components, so parts cost more than mainstream brands. However, our rates are 30–50% less than the MINI dealer. MINIs are compact and most repairs are straightforward for an experienced technician. We work on MINIs regularly.'},
      {q:'Does my MINI Cooper S have the timing chain problem?',a:'2007–2016 MINI Cooper S models with the turbocharged engine (N14 and N18) share BMW\'s timing chain tensioner concern. If you hear a brief rattle on cold startup, the tensioner is failing. We can inspect and replace with the updated version before it causes engine damage.'},
      {q:'My MINI clutch vibrates badly. What\'s wrong?',a:'MINI Cooper S uses a dual-mass flywheel that develops chatter and vibration over time. We recommend converting to a single-mass flywheel during clutch replacement. It costs slightly more than OEM replacement but lasts longer and eliminates the vibration permanently.'}
    ]
  },
  'Mitsubishi': {
    whatHeading: "Full-Service Mitsubishi Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Mitsubishi vehicles in South Salt Lake since 1990 — Outlanders, Lancers, Eclipses, Monteros, and the AWD models Utah drivers have long favored for winter capability. We handle CVT fluid service, timing belt replacement on older models, AWD system maintenance, and clutch work on the manual-transmission models Mitsubishi has offered over the years. Every Mitsubishi we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Mitsubishi dealers are less common in Salt Lake Valley than the major brands, making an independent specialist even more valuable. CVT fluid service on Outlander models is often skipped because the JATCO unit is labeled 'sealed' — but the fluid degrades and the 30,000-mile change interval is the practical limit for Utah mountain driving. At Scott's, we service Mitsubishi CVTs with the correct NS-3 equivalent fluid and correct procedure. Lancer Evolution owners who track their cars at Utah Motorsports Campus need the 15,000-mile AYC differential fluid that most shops have never heard of. We know these requirements.",
    whoContent: {
      heading: "Who to Trust for Mitsubishi Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Mitsubishi vehicles since the brand entered the US market in force. The Outlander's JATCO CVT and the Lancer Evolution's sophisticated AWD system represent opposite ends of the Mitsubishi spectrum — we're equally comfortable with both. Utah's diverse driving demands, from canyon roads to mountain trails, test every Mitsubishi system.",
        "South Salt Lake's central location near I-15 makes Scott's accessible to Mitsubishi owners across the valley. Whether you drive a practical Outlander as a family vehicle or a track-focused Evo, you'll find a mechanic who understands your car's specific needs and communicates plainly about what it requires."
      ]
    },
    whenContent: [
      "If your Mitsubishi CVT is shuddering at low speeds, hesitating under acceleration, or the engine revs climb without a matching increase in speed, the transmission fluid is the first thing to address before assuming the transmission itself is failing. Utah's mountain grades — I-15 climbs and Wasatch canyon roads — generate heat that breaks down CVT fluid faster than flat-land commuting, and the symptoms of degraded fluid closely mimic transmission failure. A fluid service is the correct first step. On older Mitsubishi models with timing belts, the replacement interval is firm — a broken belt on an interference engine means bent valves.",
      "Some Mitsubishi AWD models use a rear coupling that needs periodic fluid service to engage smoothly and protect the clutch pack inside. When fluid is overdue, the first signs are a slight delay in AWD response, a shudder when cornering, and eventually drivetrain noise. Utah snow driving depends on that AWD system working correctly when you need it. Performance-oriented Mitsubishi models with active AWD differentials have even tighter fluid service requirements under demanding driving conditions — these aren't suggestions, they're the difference between a system that handles precisely and one that develops clunk and understeer."
    ],
    process: [
      {
        step: 1,
        title: "Mitsubishi Diagnostic Scan",
        desc: "We use professional scan tools with Mitsubishi/Chrysler module coverage to read CVT fault codes, AWD system data, and engine management information."
      },
      {
        step: 2,
        title: "CVT and AWD Fluid Assessment",
        desc: "Outlander and Eclipse Cross CVT fluid condition is checked. S-AWC coupling fluid and AYC differential fluid levels and condition are verified."
      },
      {
        step: 3,
        title: "Timing Belt Interval Check",
        desc: "Older interference-engine Mitsubishis get a timing belt inspection and mileage verification. We won't leave a 60K belt service unaddressed."
      },
      {
        step: 4,
        title: "Repair with NS-3 Equivalent and Mitsubishi-Spec Fluids",
        desc: "CVT service uses correct NS-3 equivalent fluid. AYC and AWD coupling fluids meet Mitsubishi specifications. No generic substitutes on precision AWD systems."
      },
      {
        step: 5,
        title: "Verification Drive and AWD System Test",
        desc: "CVT shudder repairs are verified by drive cycle including low-speed and highway segments. AWD function is tested after coupling fluid service."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "CVT Fluid Service",
        desc: "Outlander and Eclipse Cross JATCO CVT fluid service every 30K prevents shudder and transmission failure. We use correct NS-3 equivalent fluid only."
      },
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt Replacement",
        desc: "Older Mitsubishi interference engines require 60K timing belt replacement. We replace belt, tensioner, idler, and water pump as a complete service."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Lancer Evolution and manual Eclipse clutch replacement is a Scott's specialty. We service OEM and performance aftermarket clutch systems on Evo models."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Mitsubishi Brembo-equipped Lancer Evolution brakes and standard models receive appropriate pad and rotor service for Utah driving conditions."
      },
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Strut & Suspension Replacement",
        desc: "Outlander and Lancer suspension components wear with Utah's varied terrain. We replace struts and control arm components for restored handling."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Repair",
        desc: "S-AWC and AWD Mitsubishi models develop CV joint wear. Utah winters crack CV boots. We replace boots and full axle assemblies as needed."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust System Repair",
        desc: "Utah road salt corrodes Mitsubishi exhaust systems. We repair manifold leaks, replace flex pipes, and service catalytic converters on all models."
      }
    ],
    issues: [
      {t:'Mitsubishi CVT Transmission Concerns',d:'Mitsubishi Outlander and Eclipse Cross use a JATCO CVT that shares reliability concerns with Nissan\'s CVT. Regular fluid changes every 30,000 miles are essential for longevity.'},
      {t:'Mitsubishi Timing Belt Service',d:'Older Mitsubishi 4-cylinder and V6 engines use timing belts requiring replacement every 60,000 miles. This is an interference engine—belt failure destroys the engine.',href:'/services/timing-belt-replacement-near-south-salt-lake-ut'},
      {t:'Mitsubishi AWD System Maintenance',d:'Mitsubishi S-AWC and Super All-Wheel Control systems need transfer case and rear differential fluid changes every 30,000 miles. Neglect causes coupling failure.'}
    ],
    tips: [
      'Mitsubishi CVT-equipped vehicles (Outlander, Eclipse Cross) need CVT fluid changed every 30,000 miles. This single maintenance item prevents the most common failure.',
      'Mitsubishi Lancer Evolution owners: the AYC (Active Yaw Control) rear differential uses special fluid that must be changed every 15,000 miles for track use or 30,000 for street use.',
      'Older Mitsubishi 4G63 and 6G72 engines have timing belts with 60,000-mile intervals. These are shorter intervals than many other manufacturers—don\'t miss this service.'
    ],
    faqs: [
      {q:'Is the Mitsubishi CVT reliable?',a:'Mitsubishi\'s JATCO CVT has a mixed record, similar to Nissan\'s. The key to longevity is fluid changes every 30,000 miles. Most CVT failures we see are from vehicles where fluid was never changed. With proper maintenance, they typically last 150,000+ miles.'},
      {q:'When does my Mitsubishi need a timing belt?',a:'If your Mitsubishi has a 4-cylinder or V6 engine from 2008 or earlier, it likely uses a timing belt with a 60,000-mile replacement interval. Check your owner\'s manual. This is a non-negotiable service—failure on these interference engines destroys the engine.'},
      {q:'Can you service my Mitsubishi Evo?',a:'Yes. We\'re experienced with the Lancer Evolution\'s turbocharged 4G63/4B11 engine, AYC differential system, and SST twin-clutch transmission. These are specialized vehicles that need knowledgeable technicians—not a generic oil change shop.'}
    ]
  },
  'Fiat': {
    whatHeading: "Full-Service Fiat Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Fiat vehicles in South Salt Lake since 1990 — 500s, 500Xs, 500Ls, and the Abarth performance variant. These small-displacement turbocharged cars have specific maintenance requirements that matter: timing belt service, clutch replacement on manual models, and electrical diagnosis that requires the right tools for Italian systems. Every Fiat we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Fiat dealers in Utah are limited, and the ones that exist service primarily Chrysler and Dodge alongside a handful of Fiats — which means the mechanic working on your 500 may not have deep familiarity with the MultiAir engine or Italian electrical quirks. At Scott's, we've worked on European small cars for decades. We're straightforward about what these cars need and what they don't. Independent shops are where most Fiat 500 owners land after the warranty expires, and Scott's offers the kind of honest, experienced service that keeps these fun little cars on the road.",
    whoContent: {
      heading: "Who to Trust for Fiat Repair in South Salt Lake",
      paras: [
        "Scott's has been the independent European and import alternative in South Salt Lake since 1990. Fiat 500 owners — whether they drive a base model, the turbocharged 500T, or the performance-tuned Abarth — bring their cars here because we understand the platform and won't charge dealer overhead for routine work. We know the MultiAir timing belt interval and the electrical gremlins that crop up on these cars.",
        "Our location near I-15 in South Salt Lake makes us easy to reach from anywhere in the valley. Whether you're chasing a persistent check engine light on your 500X or need a clutch replaced on a 500 Abarth with a lot of spirited driving in its history, you'll talk directly to the mechanic handling your car — not a service advisor reading from a screen."
      ]
    },
    whenContent: [
      "Some Fiat models use a timing belt rather than a timing chain, and the replacement interval is not optional — it's a firm mileage and age limit. Utah's heat cycles accelerate belt degradation, and on an interference engine a broken belt causes immediate valve damage. If your Fiat is approaching that service interval or you've acquired one with an unclear service history, scheduling the belt inspection or replacement before accumulating more miles is the right call. This is one of the few services where acting early costs far less than acting late.",
      "Fiat Abarth clutches wear faster than standard models due to the added torque and the way these cars tend to be driven — slip under acceleration, a high engagement point, or shudder at low speeds are the signs it's time. Electrical issues across the 500 range — warning lights that appear and disappear, intermittent sensor faults, HVAC behavior that doesn't match inputs — are also common and benefit from a thorough diagnostic scan with European-capable tools rather than a parts-swapping approach."
    ],
    process: [
      {
        step: 1,
        title: "European Diagnostic Scan",
        desc: "We use professional scan tools with full Fiat/FCA coverage to read Marelli and Bosch ECU fault codes — the kind of detail generic OBD-II readers miss on Italian-built vehicles."
      },
      {
        step: 2,
        title: "Timing Belt Interval Check",
        desc: "On MultiAir-equipped models, we verify the timing belt replacement history. If records are missing or the car is approaching 60,000 miles, we walk you through the replacement process and cost."
      },
      {
        step: 3,
        title: "Clutch and Drivetrain Inspection",
        desc: "Manual Fiat models — especially the Abarth — get a clutch wear assessment including release bearing and pressure plate condition. We check CV boots and axles at the same time."
      },
      {
        step: 4,
        title: "Honest Written Estimate",
        desc: "We provide a clear estimate using the correct Italian-spec parts and fluids. No surprise add-ons, and we'll tell you which items are urgent versus which can wait until your next visit."
      },
      {
        step: 5,
        title: "Road Test and Verification",
        desc: "Every Fiat leaves with a post-repair road test and a final diagnostic scan to confirm fault codes are resolved and the car is driving cleanly."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt Replacement",
        desc: "The MultiAir 1.4T timing belt is a critical service on Fiat 500T, 500L, and 500X. We replace belt, tensioner, and water pump as a complete kit at the 60,000-mile interval."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Scott's clutch specialty applies directly to the manual Fiat 500 Abarth and 500 Sport. We replace clutch assemblies, flywheels, and release bearings with the correct parts."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "Water pump replacement is typically performed alongside the timing belt on MultiAir engines since the pump is driven by the belt. We always recommend doing both together."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Fiat 500 brake pads and rotors wear at typical intervals. We stock correct-spec hardware for all 500 variants including the larger Brembo brakes on Abarth trim levels."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Repair",
        desc: "The 500X and 500L AWD models stress CV joints on Utah's varied terrain. We inspect boots and replace axle assemblies when wear or damage is found."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Electrical Diagnosis & Full Service",
        desc: "Fiat's Italian electrical systems generate unusual fault codes that require European scan tools to read properly. We diagnose sensor faults, HVAC issues, and warning light conditions accurately."
      }
    ],
    issues: [
      {t:'Fiat 500 MultiAir System Issues',d:'The Fiat 500\'s MultiAir intake system uses oil-hydraulic valve control that can develop actuator failures causing rough running and power loss.'},
      {t:'Fiat Abarth Turbo Oil Feed Line Coking',d:'Fiat 500 Abarth turbo engines develop oil feed line coking from heat cycling. This restricts oil flow to the turbo bearing, eventually causing turbo failure.'},
      {t:'Fiat 500L Dual-Clutch Transmission',d:'The Fiat 500L uses a dual-clutch automated manual that develops clutch actuator failures causing jerky shifting. We service and repair these transmissions.'}
    ],
    tips: [
      'Fiat 500 Abarth turbocharged engines need oil changes every 4,000 miles with quality full synthetic. The small turbo generates extreme heat that degrades oil faster than larger engines.',
      'Fiat MultiAir systems require specific oil (0W-40 European formula). Using conventional oil causes the hydraulic valve actuators to malfunction.',
      'Fiat 500 electric power steering motors fail in cold Utah winters. If steering becomes stiff when cold, have the system checked before the motor burns out completely.'
    ],
    faqs: [
      {q:'Can you work on Fiats? They seem uncommon.',a:'We can. Fiat 500 engines are relatively straightforward 4-cylinder designs, and the Abarth turbo system is similar to many other small turbo engines we service. Parts availability is good through standard suppliers. We\'re not intimidated by European or uncommon brands.'},
      {q:'Is the Fiat 500 reliable?',a:'The Fiat 500 has a below-average reliability record, primarily due to the MultiAir intake system, electrical issues, and clutch actuator problems on dual-clutch models. However, with proactive maintenance and prompt repairs, they can be fun, reliable daily drivers.'},
      {q:'My Fiat 500 Abarth is burning through oil. Is that normal?',a:'Some oil consumption is expected on turbocharged engines, but excessive consumption on the Abarth often indicates a coked turbo oil feed line restricting return flow. We inspect the turbo system, clean or replace the feed line, and verify proper oil flow to extend turbo life.'}
    ]
  },
  'Jaguar': {
    whatHeading: "Full-Service Jaguar Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Jaguar vehicles in South Salt Lake since 1990 — XFs, XJs, F-Types, F-Paces, and the sedans and SUVs Jaguar has produced over the decades. We handle oil leak repairs, air suspension service, timing chain work, automatic transmission fluid service, and the brake and chassis maintenance these vehicles accumulate with Utah miles. Every Jaguar we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Jaguar dealers in Salt Lake operate at very high hourly rates — $200 or more — and service advisors often package recommendations that inflate the bill well beyond what the car actually needs. At Scott's, you talk directly to the mechanic. We know the Jaguar/Land Rover platform and its specific failure points, and we give you a straight answer about what's needed and what isn't. Owners of high-mileage XF and XJ sedans in particular find that independent service at Scott's saves them substantial money compared to keeping the car at the dealer.",
    whoContent: {
      heading: "Who to Trust for Jaguar Repair in South Salt Lake",
      paras: [
        "Scott's has provided independent European luxury car service to Salt Lake Valley drivers since 1990. Jaguar owners — particularly those with higher-mileage XF, XJ, and F-Pace models out of warranty — bring their cars here because dealer rates on these vehicles are steep and the repairs don't get better just because they cost more. We stock the correct Jaguar-specified fluids and use professional diagnostic tools that communicate with JLR modules.",
        "Our South Salt Lake location near I-15 is convenient for Jaguar owners from Murray, Millcreek, and across the valley. Whether your XF is leaking oil from the cam cover or your F-Pace air suspension is sagging on one corner, we diagnose it accurately and repair it correctly without the dealership markup."
      ]
    },
    whenContent: [
      "If your Jaguar sits lower on one corner after parking overnight, or you notice the suspension compressor running continuously, the air suspension system needs attention before the compressor fails from overwork. Cold Utah mornings are often when this shows up most clearly — the system works harder in cold temperatures to maintain ride height. Diagnosing which component is failing early keeps the repair focused and prevents a single air spring from becoming a compressor-and-spring job.",
      "Some Jaguar engines develop timing chain stretch and variable valve timing wear at higher mileages, particularly when oil change intervals have been inconsistent. A startup rattle or tick that fades after warm-up, a rough idle, or a check engine light pointing to valve timing faults are the early warnings. Utah canyon driving and cold winters both add stress to these systems. Addressing timing chain wear at the first signs is significantly less expensive than waiting for the chain to skip a tooth — at that point the repair becomes an engine job."
    ],
    process: [
      {
        step: 1,
        title: "JLR-Compatible Diagnostic Scan",
        desc: "We use professional diagnostic equipment with Jaguar Land Rover module coverage — reading fault codes across engine, transmission, air suspension, ABS, and body systems that generic scanners can't access."
      },
      {
        step: 2,
        title: "Air Suspension System Check",
        desc: "We test compressor output, inspect air springs for slow leaks, and check valve block operation. XJ and XF air suspension faults are diagnosed accurately before any parts are ordered."
      },
      {
        step: 3,
        title: "Engine Oil Leak Assessment",
        desc: "We inspect for the cam cover and front cover oil leaks common to AJ-V6 and V8 engines, along with coolant system condition and timing chain wear indicators."
      },
      {
        step: 4,
        title: "Transparent Repair Estimate",
        desc: "We provide a written estimate with Jaguar-spec fluids and quality parts clearly listed. You'll know the full cost before any work begins, with no packaged upsells."
      },
      {
        step: 5,
        title: "Road Test and Final Scan",
        desc: "After repairs, we road test the vehicle and perform a full re-scan to confirm all fault codes are cleared and suspension, drivetrain, and engine systems are operating correctly."
      }
    ],
    commonRepairs: [
      {
        slug: "strut-replacement-near-south-salt-lake-ut",
        name: "Air Suspension Repair",
        desc: "Jaguar XJ and XF air suspension compressors and air springs fail with age and mileage. We diagnose and replace the correct components to restore proper ride height and quality."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "AJ-V6 and AJ-V8 timing chain and cam phaser wear causes startup rattles and VVT fault codes. Early repair prevents the much larger damage of a jumped chain on an interference engine."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Engine Oil Leak Repair",
        desc: "Cam cover and front cover oil leaks are common on high-mileage Jaguar V6 and V8 engines. We reseal these correctly using the proper gaskets and sealants."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Jaguar brake service requires electronic parking brake calibration on many models. We handle all Jaguar brake work including F-Type and sport-spec brake systems."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "Jaguar V6 and V8 cooling systems need proper maintenance to prevent overheating. We replace water pumps, thermostats, and service coolant with the correct specification fluid."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Repair",
        desc: "F-Pace and all-wheel-drive Jaguar models put stress on CV joints. We inspect and replace axle components on both front and rear axles as needed."
      }
    ],
    issues: [
      {t:'Jaguar Supercharged Engine Coolant Leaks',d:'Jaguar supercharged V6 and V8 engines develop coolant crossover pipe leaks and thermostat housing cracks. The supercharger adds heat that accelerates plastic component failure.'},
      {t:'Jaguar Air Suspension Failures',d:'Jaguar XJ and F-Pace air suspension systems develop air spring leaks and compressor failures similar to Land Rover (shared platform). We diagnose and replace failed components.'},
      {t:'Jaguar Timing Chain Stretch (AJ-V8)',d:'Jaguar AJ-series V8 engines develop timing chain stretch and tensioner wear causing rattle and performance loss. Complete chain kit replacement is required.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'}
    ],
    tips: [
      'Jaguar supercharged engines need coolant system inspection every 30,000 miles. Plastic components fail faster under the added heat of forced induction.',
      'Jaguar XF and XE share many components with Land Rover. This means parts are more available and less expensive than pure Jaguar-only components.',
      'Jaguar F-Type manual transmission models are rare but we service them. The clutch and flywheel are similar to other performance vehicles we handle.'
    ],
    faqs: [
      {q:'Can an independent shop work on my Jaguar?',a:'Yes. Modern Jaguars share many components with Land Rover through their joint ownership. Our diagnostic equipment reads Jaguar-specific codes, and quality parts are available through standard suppliers. We save you 40-60% versus Jaguar dealer pricing.'},
      {q:'Is Jaguar expensive to maintain?',a:'Jaguar maintenance costs are above average but don\'t have to be dealer-expensive. The key is proactive maintenance—cooling system components, air suspension, and timing chain tensioners all benefit from scheduled replacement rather than waiting for failure.'},
      {q:'My Jaguar is leaking coolant from the front of the engine. How serious is this?',a:'Very serious on supercharged models. The coolant crossover pipes and thermostat housing are common leak points. Supercharged Jaguars overheat quickly if coolant is lost because the supercharger adds significant heat. Don\'t drive it—have it towed to us for same-day repair.'}
    ]
  },
  'Suzuki': {
    whatHeading: "Full-Service Suzuki Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Suzuki vehicles in South Salt Lake since 1990 — Grand Vitaras, Sidekicks, SX4s, Kizashis, and the other practical AWD models Suzuki built before leaving the US market. Many are still on Salt Lake Valley roads with well over 100,000 miles and years of life remaining. We handle timing belt replacement, AWD and transfer case service, clutch work on manual models, and all the maintenance these reliable vehicles need. Every Suzuki we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Suzuki stopped selling vehicles in the US in 2012, which means the dealer network is completely gone. If you own a Grand Vitara, SX4, or Kizashi, an independent shop is your only real option for professional mechanical service. Scott's has the diagnostic tools and knowledge to work on these cars properly. We're familiar with their common failure points — timing belts, wheel bearings, and AWD components — and we source the correct parts. These are reliable vehicles that deserve continued maintenance rather than being sidelined because dealers no longer exist.",
    whoContent: {
      heading: "Who to Trust for Suzuki Repair in South Salt Lake",
      paras: [
        "Scott's has been servicing Suzuki vehicles in South Salt Lake since before Suzuki exited the US market. With dealers gone, independent shops like ours are the primary mechanical resource for Grand Vitara, SX4, Sidekick, and Kizashi owners across Salt Lake Valley. We know these vehicles well and can source parts from the global Suzuki supply chain.",
        "Utah is a good state for Suzukis — the AWD capability suits winter roads, and the dry climate keeps rust at bay. Our shop near I-15 in South Salt Lake makes it easy for Suzuki owners from across the valley to get proper service without driving to a specialty import shop far from home. We're practical, experienced, and straightforward about what your Suzuki needs."
      ]
    },
    whenContent: [
      "Some Suzuki models use timing belts with a strict replacement schedule based on mileage and age — not just mileage. On an interference engine, a belt that breaks destroys the engine without warning. If you've acquired a used Suzuki and don't have service records confirming when the belt was last replaced, having it inspected or replaced before adding more miles is the most important thing you can do for the engine. Utah temperature swings accelerate belt aging, so erring on the side of early replacement is always the right call.",
      "The AWD systems on Suzuki trucks and crossovers use transfer case and differential fluids that degrade with mileage and heat cycles — Utah mountain driving accelerates that breakdown compared to flat-land use. Wheel bearings on these vehicles also have a finite service life and will develop noise and play if neglected. On manual-transmission models, clutch wear is worth monitoring at higher mileages — these are straightforward repairs when caught before complete failure, and significantly more involved when the job is delayed."
    ],
    process: [
      {
        step: 1,
        title: "Diagnostic Scan and Visual Inspection",
        desc: "We use import-capable scan tools to read Suzuki ECU fault codes and perform a thorough visual inspection covering belts, fluids, suspension, and brake components."
      },
      {
        step: 2,
        title: "Timing Belt History Check",
        desc: "On Grand Vitara, Vitara, and other belt-driven Suzuki models, we verify service history and belt condition. We'll recommend replacement if records are missing or the interval is approaching."
      },
      {
        step: 3,
        title: "AWD System Fluid Inspection",
        desc: "Transfer case, front differential, and rear differential fluids are checked and serviced according to Suzuki's specifications. Neglected drivetrain fluids are a common maintenance gap on older Suzukis."
      },
      {
        step: 4,
        title: "Parts and Fluid Sourcing",
        desc: "With the US dealer network gone, we source parts through reliable import supply channels. Quality is maintained — no generic substitutes on critical components."
      },
      {
        step: 5,
        title: "Repair Completion and Test Drive",
        desc: "Every Suzuki leaves with a post-repair road test confirming AWD engagement, brake function, and engine performance. We make sure the car is right before it leaves."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt Replacement",
        desc: "Timing belt service is critical on Grand Vitara and Vitara interference engines. We replace belt, tensioner, and water pump as a complete service at the correct interval."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual SX4, Kizashi, and Swift models need clutch replacement as mileage adds up. Scott's clutch specialty covers full clutch assembly and flywheel service on all Suzuki manual transmissions."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "Water pump replacement is done concurrently with timing belt service on most Suzuki interference engines. We always replace both to avoid revisiting the job."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Service",
        desc: "SX4 and Grand Vitara AWD models rely on healthy CV joints. Utah winter driving cracks boots and accelerates wear. We inspect and replace as needed."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Suzuki brake systems are straightforward and serviceable. We stock correct pads, rotors, and hardware for Grand Vitara, SX4, Kizashi, and other models."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Full Mechanical Service",
        desc: "With no Suzuki dealers remaining, Scott's serves as the go-to full-service shop for Suzuki owners in Salt Lake Valley — from oil changes to drivetrain and engine repairs."
      }
    ],
    issues: [
      {t:'Suzuki Grand Vitara Head Gasket Failure',d:'Suzuki Grand Vitara 2.7L V6 engines develop head gasket failures causing coolant loss and overheating. We replace head gaskets and resurface cylinder heads.',href:'/symptoms/coolant-leak'},
      {t:'Suzuki Timing Chain Stretch',d:'Suzuki 2.0L and 2.4L 4-cylinder engines develop timing chain stretch causing rattling and check engine lights. Chain kit replacement prevents engine damage.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Suzuki AWD Coupling Failure',d:'Suzuki SX4 and Grand Vitara AWD systems use a viscous coupling that wears out, reducing AWD effectiveness. We diagnose and replace failed couplings.'}
    ],
    tips: [
      'Suzuki vehicles are now discontinued in the US, making parts sourcing important. We maintain supplier relationships that keep Suzuki parts available and affordable.',
      'Suzuki Grand Vitara transfer case fluid should be changed every 30,000 miles. The transfer case is a common failure point when fluid is neglected.',
      'Suzuki SX4 CVT transmissions need fluid changes every 30,000 miles—more frequently than many owners realize.'
    ],
    faqs: [
      {q:'Can you still get parts for my Suzuki?',a:'Yes. Although Suzuki stopped selling cars in the US in 2012, parts remain available through aftermarket suppliers and salvage networks. Common wear items like brakes, clutch components, and filters are readily available. We keep your Suzuki running.'},
      {q:'Is it worth repairing my older Suzuki?',a:'Suzuki vehicles like the Grand Vitara and SX4 are well-built and worth maintaining if the body and frame are solid. We give honest assessments—if repair costs approach vehicle value, we\'ll tell you. Most Suzuki repairs are reasonable.'},
      {q:'My Suzuki Grand Vitara is overheating. What could it be?',a:'The 2.7L V6 is known for head gasket failure causing overheating. The 2.4L 4-cylinder is more reliable but still develops water pump and thermostat failures. We diagnose the exact cause with a cooling system pressure test before recommending repair.'}
    ]
  },
  'Isuzu': {
    whatHeading: "Full-Service Isuzu Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Isuzu vehicles in South Salt Lake since 1990 — Troopers, Rodeos, Amigos, VehiCROSSes, and Ascenders. These body-on-frame 4WD trucks were built to last, and many are still working hard on Utah roads. We handle timing belt replacement, transfer case and locking differential service, clutch replacement on manual models, front axle and CV work, and the exhaust and suspension repairs that come with high-mileage trucks in a mountain state. Every Isuzu we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Isuzu stopped selling passenger vehicles in the US in 2009, and the dealer network has been gone for years. For Trooper and Rodeo owners, that means an independent shop is the only serious option for mechanical work. Scott's has been servicing Isuzu vehicles since the brand was still active — we know the timing belt intervals on the DOHC engines, the transfer case quirks on the Trooper, and the common points where these trucks develop problems with age. Utah's off-road culture means a lot of high-mileage Isuzus are still in regular use, and we keep them running.",
    whoContent: {
      heading: "Who to Trust for Isuzu Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Isuzu trucks and SUVs in South Salt Lake since before the brand exited the US market. Trooper and Rodeo owners — many of whom have high-mileage vehicles they plan to keep running for years — come to us because we understand these drivetrains and take them seriously. We're not guessing at repair procedures on vehicles we've never seen before.",
        "Our shop is centrally located near I-15, convenient for Isuzu owners across Salt Lake Valley. Whether you have a well-maintained Trooper with 200,000 miles that just needs a timing belt, or a Rodeo with a developing clutch issue, we'll diagnose it accurately and give you a straight price without the runaround."
      ]
    },
    whenContent: [
      "Some Isuzu V6 engines use timing belts that require replacement every 60,000 miles — these are interference engines, meaning a broken belt ends the engine immediately. Utah's temperature swings and the demanding conditions Isuzus typically work in accelerate belt aging beyond what the mileage alone suggests. If you're running a Trooper, Rodeo, or Ascender and haven't confirmed the timing belt history, this is not something to defer. The cost of replacement is a fraction of the cost of the engine damage that follows a belt failure.",
      "Manual-transmission Isuzus develop clutch wear in proportion to use — and in Utah, where these trucks see more off-road and mountain driving than average, that wear comes faster than the odometer implies. Transfer case and front differential fluids are frequently overdue on high-mileage trucks, and degraded fluid accelerates gear and bearing wear. If 4WD engagement feels rough, slow, or noisy, the drivetrain fluids and shift mechanism are the right place to start before assuming a more serious failure."
    ],
    process: [
      {
        step: 1,
        title: "Diagnostic Scan and Drivetrain Assessment",
        desc: "We scan Isuzu-specific ECU codes and perform a hands-on assessment of the 4WD system, transfer case, and front axle — the components that take the most abuse on these trucks."
      },
      {
        step: 2,
        title: "Timing Belt Service Verification",
        desc: "On all DOHC Isuzu V6 engines, we verify belt replacement history. If records are unavailable or the mileage interval is near, we'll walk you through the replacement and water pump service."
      },
      {
        step: 3,
        title: "Fluid Service Review",
        desc: "Transfer case, front and rear differential, and transmission fluids are inspected for condition and service history. Drivetrain fluid maintenance is often the most neglected area on high-mileage trucks."
      },
      {
        step: 4,
        title: "Parts Sourcing and Estimate",
        desc: "Isuzu parts are still available through OEM and quality aftermarket channels. We source correctly and provide a written estimate before starting any repair."
      },
      {
        step: 5,
        title: "Test Drive Covering 4WD Function",
        desc: "After service, we road test with 4WD engagement verification — high and low range — to confirm all drivetrain systems are operating correctly."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt Replacement",
        desc: "The 3.2L and 3.5L DOHC V6 timing belt is critical maintenance on Trooper, Rodeo, and Axiom. We replace belt, tensioner, and water pump together at the 60,000-mile interval."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Trooper and Rodeo clutches take a beating in Utah's conditions. Scott's specialty in clutch repair means fast, correct replacement of clutch assembly and flywheel."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump Replacement",
        desc: "Isuzu V6 water pumps are replaced as part of timing belt service. We include the pump in every belt job to avoid revisiting the engine at a later date."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Front Axle Repair",
        desc: "4WD Isuzu front axles and CV joints wear with off-road use and age. We inspect and replace boots and axle assemblies to keep 4WD engagement reliable."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair",
        desc: "High-mileage Isuzu trucks develop exhaust leaks at manifold gaskets and mid-pipe connections. We repair and replace exhaust components correctly with welding services when needed."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Trooper and Rodeo brake systems are robust but wear with age and use. We replace pads, rotors, calipers, and hardware and bleed brake lines completely."
      }
    ],
    issues: [
      {t:'Isuzu Rodeo/Trooper Timing Belt Service',d:'Isuzu Rodeo and Trooper V6 engines use timing belts requiring replacement every 60,000 miles. These are interference engines—belt failure is catastrophic.',href:'/services/timing-belt-replacement-near-south-salt-lake-ut'},
      {t:'Isuzu 4WD Transfer Case Issues',d:'Isuzu Rodeo and Trooper 4WD transfer cases develop shifting difficulties and seal leaks. We service and repair Isuzu 4WD systems.'},
      {t:'Isuzu Diesel Engine Maintenance',d:'Isuzu NPR commercial trucks use diesel engines that require glow plug service, fuel filter maintenance, and turbo inspection. We service Isuzu commercial vehicles.'}
    ],
    tips: [
      'Isuzu vehicles are no longer sold as passenger cars in the US, but parts remain available. Many Isuzu components were shared with GM vehicles, improving parts availability.',
      'Isuzu Rodeo and Trooper timing belt intervals (60,000 miles) are shorter than many other brands. Don\'t use the 100K mile assumption from other vehicles.',
      'Isuzu NPR commercial trucks in the Salt Lake Valley need fuel filter changes every 10,000 miles due to fuel quality variations.'
    ],
    faqs: [
      {q:'Can you still service my Isuzu Rodeo or Trooper?',a:'Absolutely. Isuzu Rodeo and Trooper share many components with GM vehicles (they were sold as the Honda Passport and Acura SLX too). Parts are readily available and we have experience with these platforms from servicing their GM counterparts.'},
      {q:'Do you work on Isuzu commercial trucks?',a:'Yes. We service Isuzu NPR and NQR box trucks used by local businesses throughout the Salt Lake Valley. Diesel engine maintenance, brake service, clutch replacement, and general mechanical repair are all within our capabilities.'},
      {q:'When does my Isuzu need a timing belt?',a:'Every 60,000 miles without exception. Isuzu V6 engines are interference designs—a broken belt bends valves and destroys the engine. We replace the belt, tensioner, water pump, and idler pulleys together since they share the same service access and interval.'}
    ]
  },
  'Saab': {
    whatHeading: "Full-Service Saab Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Saab vehicles in South Salt Lake since 1990 — 9-3s and 9-5s from the final generation before the brand closed. These are turbocharged Swedish cars with genuinely distinctive engineering, and they reward proper maintenance. We handle turbo system diagnosis and repair, ignition system service, oil leak repairs, timing chain work, and all the clutch and brake service these well-built cars need. Every Saab we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Saab dealers closed when the company went bankrupt in 2011, and GM's involvement with the brand ended well before that. If you own a 9-3 or 9-5 today, you're relying entirely on independent shops for mechanical service. That's been the reality for Saab owners for over a decade. Scott's has the experience and diagnostic tools to handle these vehicles correctly — we understand the GM/Saab platform, know the turbo failure modes specific to these engines, and treat these well-engineered cars with the seriousness they deserve. Saab owners tend to be loyal to their cars and want a shop that shares that commitment.",
    whoContent: {
      heading: "Who to Trust for Saab Repair in South Salt Lake",
      paras: [
        "With Saab dealers long gone, Scott's serves as the dedicated independent resource for 9-3 and 9-5 owners across Salt Lake Valley. We've worked on GM-platform Saabs throughout their production run and understand their specific quirks — the center console ignition, the turbo boost architecture, and the DI cassette ignition system that fails differently than a conventional distributor. You're not getting a blank stare when you pull in with a Saab.",
        "Our South Salt Lake location near I-15 makes us accessible to Saab owners from across the valley. Many of these owners have had their cars for a long time and want to keep them running — we respect that. We give honest assessments about which repairs make sense at a given mileage and which ones would cost more than the car warrants."
      ]
    },
    whenContent: [
      "If your Saab is losing power under acceleration, hesitating at boost, or showing a check engine light related to boost pressure, the turbo bypass valve is a common culprit — it wears and begins leaking boost before fully failing. Turbocharger oil feed lines also develop leaks on higher-mileage engines, and a turbo running low on oil fails quickly. The combined ignition coil unit is another frequent failure point that causes misfires and rough running. All of these are diagnosable with the right scan tools and hands-on inspection rather than a parts-swapping approach.",
      "Some Saab four-cylinder engines develop timing chain tensioner wear and chain stretch at higher mileages, particularly when oil changes have been delayed. A startup rattle that clears after the engine warms is the early warning sign — catching it at that stage keeps the repair manageable. The 9-5 has its own set of accessory drive and serpentine belt service needs as mileage climbs. Both models benefit from using the correct synthetic oil specification, which matters more on turbocharged engines than it does on naturally aspirated ones."
    ],
    process: [
      {
        step: 1,
        title: "GM/Saab Diagnostic Scan",
        desc: "We use professional scan tools with full Saab module coverage — reading Tech II-compatible fault codes across engine, transmission, ABS, and SID modules that standard OBD readers can't access."
      },
      {
        step: 2,
        title: "Turbo System Inspection",
        desc: "We inspect the diverter valve, boost pipes, turbocharger oil feed and return lines, and intercooler connections — the entire boost circuit — for leaks, cracks, and wear."
      },
      {
        step: 3,
        title: "DI Cassette and Ignition Check",
        desc: "DI cassette condition and spark plug state are verified. Misfires on Saab engines often trace back to the cassette or individual coil failure, and we diagnose these accurately."
      },
      {
        step: 4,
        title: "Transparent Estimate with Correct Parts",
        desc: "We source quality Saab-compatible parts and provide a written estimate. For a car without a dealer network, parts availability matters — we have reliable channels for 9-3 and 9-5 components."
      },
      {
        step: 5,
        title: "Road Test with Boost Verification",
        desc: "After turbo-related repairs, we road test under load to confirm boost pressure, throttle response, and smooth acceleration before returning the car."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Turbo & Boost System Service",
        desc: "Saab diverter valves, turbocharger oil lines, and intercooler hoses are the most common failure points. We inspect and repair the complete boost circuit for proper performance restoration."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain & Tensioner Service",
        desc: "B207 timing chain tensioner wear causes startup rattle and eventual chain stretch. We service the chain system early to prevent damage on these interference engines."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual 9-3 and 9-5 models need clutch replacement at moderate mileages when driven spiritedly. Scott's handles full clutch assembly, flywheel, and release bearing replacement."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Saab 9-3 and 9-5 brake systems are conventional but require correct-spec pads and rotors. We stock the appropriate hardware and bleed systems completely on all Saab brake work."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "Saab turbocharged engines need proper cooling system maintenance. We replace water pumps and thermostats and use the correct coolant specification for these engines."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair",
        desc: "Saab turbo downpipes and exhaust manifold gaskets develop leaks that affect both performance and cabin smell. We diagnose and repair exhaust leaks on 9-3 and 9-5 models."
      }
    ],
    issues: [
      {t:'Saab Turbo Oil Sludging',d:'Saab turbo engines are prone to oil sludge buildup from infrequent oil changes or using non-synthetic oil. Sludge blocks oil passages and causes turbo and engine bearing failure.'},
      {t:'Saab Direct Ignition Cassette Failure',d:'Saab 9-3 and 9-5 use a direct ignition cassette (DIC) instead of individual coil packs. These fail frequently, causing misfires. Quality replacement units are available.'},
      {t:'Saab Crankcase Ventilation System',d:'Saab turbo engines develop PCV system failures that cause boost leaks, oil leaks, and rough idle. We replace PCV components with updated parts.'}
    ],
    tips: [
      'Saab turbo engines absolutely require full synthetic oil changed every 5,000 miles. The turbo runs extremely hot and conventional oil causes sludge buildup that destroys the engine.',
      'Saab ignition cassettes are a wear item—keep a spare in the trunk if your car has over 100,000 miles. Failure is sudden and complete (no-start condition).',
      'Saab 9-3 Aero and Viggen models use a unique turbo setup. Always use OEM-spec boost recirculation valves—aftermarket units cause boost control problems.'
    ],
    faqs: [
      {q:'Can you get parts for my Saab?',a:'Yes. Although Saab ceased production in 2012, a robust aftermarket parts network exists. Orio (formerly Saab Parts) still manufactures and distributes genuine Saab components. Common wear items are readily available and we have reliable supplier relationships.'},
      {q:'Is it worth maintaining my Saab?',a:'Saab 9-3 and 9-5 are well-engineered vehicles that reward proper maintenance with excellent longevity. The turbo engines are powerful and efficient. If the body is solid and you enjoy the car, absolutely worth maintaining. We give honest assessments of repair-vs-value on every job.'},
      {q:'My Saab won\'t start—what\'s the most likely cause?',a:'On Saab 9-3 and 9-5, the most common no-start cause is a failed direct ignition cassette (DIC). This is a known weak point. We also see crankshaft position sensor failures and fuel pump relay issues. Diagnosis is straightforward with the right scan tools, which we have.'}
    ]
  },
  'Saturn': {
    whatHeading: "Full-Service Saturn Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Saturn vehicles in South Salt Lake since 1990 — Ions, Vues, Auras, Outlooks, and the Sky Redline. These GM-platform vehicles are practical and repairable, and many are still running well with high mileage. We handle CVT and automatic transmission service, timing chain work, clutch replacement on manual models, wheel bearing replacement, and all the maintenance these cars need. Every Saturn we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Saturn dealers closed when GM discontinued the brand in 2010, but these vehicles are common enough on Salt Lake roads that parts are readily available and independent shops like Scott's handle them regularly. You don't need a dealer for a Saturn — these are GM-platform cars sharing components with Chevrolet and Pontiac models, and any experienced independent mechanic can work on them competently. At Scott's, you get honest service without the overhead, and we'll tell you straightforwardly when a repair makes sense for the value of the car versus when it doesn't.",
    whoContent: {
      heading: "Who to Trust for Saturn Repair in South Salt Lake",
      paras: [
        "Saturn owners across Salt Lake Valley bring their vehicles to Scott's because the brand's dealer network closed years ago and we've been servicing GM-platform vehicles since 1990. Whether you drive a high-mileage Vue that needs CVT attention or an Ion with a failing wheel bearing, we diagnose accurately and repair at fair prices — the same work you'd get at a dealer without the markup.",
        "Our shop is near I-15 in South Salt Lake, making it a straightforward stop for Saturn owners from Murray to Millcreek. We're direct about what your Saturn needs and what it can go without. These are practical, economical vehicles, and the service you get at Scott's reflects that."
      ]
    },
    whenContent: [
      "If your Saturn Vue hesitates under acceleration, shudders at low speeds, or the engine revs without a matching increase in vehicle speed, the CVT transmission needs attention. These transmissions develop problems when fluid service is neglected — and the maintenance interval wasn't prominently communicated when these vehicles were sold. Early fluid service can extend these transmissions considerably. Waiting until the symptoms are severe usually means the damage is already done.",
      "Some Saturn four-cylinder engines develop timing chain tensioner wear that announces itself as a cold-start rattle clearing after a minute or two. Catching it at the rattle stage is far less expensive than addressing it after the chain has jumped. On the turbocharged Sky Redline, the manual transmission clutch wears proportionally to how the car is driven — a car this enjoyable tends to get driven enthusiastically. Wheel bearings on some Saturn models also have a shorter service life than other GM products and are worth inspecting at higher mileages."
    ],
    process: [
      {
        step: 1,
        title: "GM Diagnostic Scan",
        desc: "We use GM-compatible scan tools to read all module fault codes across Saturn platforms — engine, transmission, ABS, and EBCM — providing accurate starting points for diagnosis."
      },
      {
        step: 2,
        title: "CVT Fluid Inspection (Vue Models)",
        desc: "Vue CVT fluid condition and level are checked. If the fluid is dark or degraded, we recommend service before the transmission develops irreversible damage."
      },
      {
        step: 3,
        title: "Ecotec Timing Chain Assessment",
        desc: "On Ion, Aura, Vue, and Aura, we listen for timing chain rattle and check for fault codes related to cam timing. Early tensioner service is much less expensive than a jumped chain."
      },
      {
        step: 4,
        title: "Written Estimate with Fair Pricing",
        desc: "Saturn repairs use widely available GM-compatible parts. We provide a written estimate with no hidden costs — these are practical vehicles and they deserve practical pricing."
      },
      {
        step: 5,
        title: "Road Test and System Verification",
        desc: "We road test every Saturn after service to confirm transmission engagement, engine performance, and brake function before the vehicle leaves."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "Ecotec engine timing chain tensioner wear is common across Saturn Ion, Vue, and Aura models. We replace tensioners and chains before cold-start rattle progresses to engine damage."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "CVT Transmission Service",
        desc: "Saturn Vue CVT fluid service and early repairs can extend transmission life significantly. We service and diagnose CVT issues before they become full replacement scenarios."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Saturn Ion and Sky Redline clutches wear with use. Scott's handles full clutch assembly and flywheel replacement — particularly rewarding on the turbo Sky."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Saturn brake service is straightforward with widely available GM-spec parts. We replace pads, rotors, and hardware and bleed systems on all Saturn models."
      },
      {
        slug: "shock-replacement-near-south-salt-lake-ut",
        name: "Shock & Suspension Service",
        desc: "Saturn Outlook and Vue suspension components wear at higher mileages. We replace shocks, struts, and related hardware to restore handling and ride quality."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "Ecotec water pump and thermostat replacement is standard maintenance on high-mileage Saturn engines. We service the complete cooling system with correct GM-spec coolant."
      }
    ],
    issues: [
      {t:'Saturn Vue/Outlook Timing Chain Stretch',d:'Saturn Vue and Outlook with the GM 3.6L V6 share the timing chain stretch issue. Chain, guides, and tensioners need replacement as a set.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'Saturn Ion/Astra Ignition Switch Recall',d:'Saturn Ion models were part of the GM ignition switch recall. If your vehicle hasn\'t been updated, we can check recall status and help coordinate the repair.'},
      {t:'Saturn CVT Transmission (Vue)',d:'Early Saturn Vue models used a CVT transmission with known reliability issues. We diagnose CVT failures and recommend repair or replacement based on condition.',href:'/symptoms/transmission-slipping'}
    ],
    tips: [
      'Saturn vehicles used GM platforms and components. This means parts are widely available and affordable despite the brand being discontinued since 2010.',
      'Saturn S-Series (SL, SC, SW) with polymer body panels don\'t rust, but the steel subframes and cradles do. Inspect annually in Utah\'s salt environment.',
      'Saturn Vue with the Honda-sourced V6 is actually very reliable. Use Honda-specific ATF in the transmission for best results.'
    ],
    faqs: [
      {q:'Can you still service my Saturn?',a:'Yes. Saturn vehicles used GM platforms—the Vue is related to the Chevy Equinox, the Aura to the Chevy Malibu, and the Outlook to the GMC Acadia. GM parts are widely available and our GM experience applies directly. Your Saturn will have no trouble finding parts or competent service.'},
      {q:'Is my Saturn worth repairing?',a:'Saturn vehicles are aging but many are mechanically sound and worth maintaining. The S-Series polymer body panels prevent rust, and the GM drivetrains are durable. We\'ll give you an honest assessment of repair cost versus vehicle value on every visit.'},
      {q:'My Saturn Vue has a rough-running V6. What\'s wrong?',a:'If you have the 3.6L V6, timing chain stretch is the most common cause after 80,000 miles. If you have the 3.5L Honda-sourced V6, it\'s more likely ignition coils or intake manifold gaskets. We diagnose the specific cause rather than guessing.'}
    ]
  },
  'Pontiac': {
    whatHeading: "Full-Service Pontiac Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Pontiac vehicles in South Salt Lake since 1990 — Firebirds, Grand Prixs, Grand Ams, G6s, and Solstices. GM discontinued Pontiac in 2010, but many of these cars are still being driven daily and they're well worth maintaining. We handle intake manifold gasket repairs, timing chain service on four-cylinder models, clutch replacement on manual cars, front suspension and steering work, and all the brake and exhaust service Utah roads demand. Every Pontiac we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Pontiac dealers are gone, having closed when GM ended the brand in 2010. But Pontiacs are common on Salt Lake roads — especially Firebirds, Trans Ams, Grand Prixs, and the later G6 — and parts availability through the GM supply chain is still good. Independent shops handle the vast majority of Pontiac service today. At Scott's, we've been working on GM-platform vehicles since 1990 and we know the failure patterns that are specific to each Pontiac model. You get real experience, honest diagnosis, and fair pricing without paying for a dealership's overhead.",
    whoContent: {
      heading: "Who to Trust for Pontiac Repair in South Salt Lake",
      paras: [
        "Scott's has been working on Pontiac vehicles since the brand was still in production. From Firebird T/A owners maintaining their performance cars to Grand Prix drivers dealing with cooling system leaks, we've seen these vehicles in every condition and know what they need. GM-compatible diagnostic tools and years of hands-on experience with these specific models mean accurate diagnosis — not guesswork.",
        "Located in South Salt Lake near I-15, we're a practical stop for Pontiac owners across the valley. Whether you have a first-gen GTO clone or a 2008 G6 with 130,000 miles, we give you a straight assessment and a fair estimate. No drama, no upsells."
      ]
    },
    whenContent: [
      "Some Pontiac V6 engines have a well-documented intake manifold gasket failure — the gasket uses a plastic sealing element that degrades and allows coolant to seep externally or internally. If your Pontiac is losing coolant without visible puddles under the car, or the oil has a milky or foamy appearance, the intake gasket is the first thing to investigate. This is a repair we complete regularly and correctly, and catching it before coolant contaminates the oil is far better than the alternative.",
      "Older Pontiac performance models with manual transmissions need clutch attention proportional to how hard they've been driven — a lot of these cars have years of enthusiastic daily driving behind them. The Solstice shares its drivetrain with the Saturn Sky and has the same timing chain considerations as other Ecotec four-cylinder engines: a cold-start rattle is the early warning. On front-wheel-drive Pontiacs, front wheel bearings and lower control arm bushings are the most common suspension wear items as mileage climbs."
    ],
    process: [
      {
        step: 1,
        title: "GM Diagnostic Scan",
        desc: "We use GM-compatible diagnostic tools covering all Pontiac models from early OBD-II through final-year production — reading engine, transmission, and chassis module fault codes accurately."
      },
      {
        step: 2,
        title: "Cooling System and Intake Inspection",
        desc: "On 3800 V6 models, we specifically inspect intake manifold gasket condition, coolant level, and any signs of oil-coolant mixing — the most critical failure point on these engines."
      },
      {
        step: 3,
        title: "Clutch and Manual Drivetrain Assessment",
        desc: "For Firebird, Trans Am, and Solstice manual transmission models, we assess clutch wear, flywheel condition, and rear differential fluid state."
      },
      {
        step: 4,
        title: "Honest Written Estimate",
        desc: "Pontiac parts are widely available through the GM supply chain at reasonable prices. We provide clear estimates without inflating costs just because there's no longer a Pontiac dealer to compete with."
      },
      {
        step: 5,
        title: "Road Test and System Check",
        desc: "After repairs, we test drive with attention to the specific system serviced — boost pressure on turbocharged models, shifting quality, brake feel — and re-scan before delivery."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Intake Manifold Gasket Replacement",
        desc: "The 3800 V6 intake gasket failure is one of the most common Pontiac Grand Prix and Grand Am repairs. We replace with updated gaskets that resolve the original design deficiency."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Firebird, Trans Am, and Solstice clutches are a Scott's specialty. We replace full clutch assemblies and resurface or replace flywheels on all Pontiac manual transmissions."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "3800 and LS1 water pump and thermostat replacement is standard high-mileage maintenance. We service the complete cooling system and use the correct GM-spec coolant."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "Ecotec-powered Solstice and G6 models develop timing chain tensioner wear. We replace chains and tensioners before cold-start rattle leads to a jumped chain and bent valves."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Grand Prix, Grand Am, and G6 brake service uses widely available GM-spec components. We replace pads, rotors, calipers, and hardware with correct parts."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair",
        desc: "High-mileage Pontiac exhaust manifolds and mid-pipes develop leaks and rust through — common on Utah vehicles. We repair and replace exhaust components with welding services when needed."
      }
    ],
    issues: [
      {t:'Pontiac G6 3.5L V6 Intake Manifold Gasket',d:'Pontiac G6 and Grand Prix with GM 3.5L and 3.8L V6 engines develop intake manifold gasket failures causing coolant leaks and overheating. This is one of the most common GM repairs we perform.'},
      {t:'Pontiac GTO/G8 LS Engine Service',d:'Pontiac GTO and G8 use GM LS-series V8 engines that are powerful and reliable but need proper maintenance. We service LS engines including clutch replacement on manual GTO/G8 models.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'Pontiac Vibe (Toyota Matrix) Service',d:'The Pontiac Vibe is mechanically identical to the Toyota Matrix. We service it with Toyota knowledge and parts—often more reliable and available than GM-branded components.'}
    ],
    tips: [
      'Pontiac vehicles used GM platforms exclusively. Parts availability is excellent despite the brand being discontinued since 2010.',
      'Pontiac G6 and Grand Prix owners: the 3.8L V6 (Series II/III) is one of GM\'s most reliable engines. With proper maintenance, these run well past 250,000 miles.',
      'Pontiac Vibe shares everything mechanical with the Toyota Matrix/Corolla. Use Toyota parts—they\'re often better quality and similarly priced to GM equivalents.'
    ],
    faqs: [
      {q:'Can you still get parts for my Pontiac?',a:'Absolutely. Every Pontiac vehicle shares its platform with a Chevrolet, Buick, or in the Vibe\'s case, Toyota. Parts are widely available and will remain so indefinitely. The G6 is a Malibu, the G8 is a Commodore/Caprice, and the Vibe is a Corolla/Matrix.'},
      {q:'My Pontiac Grand Prix is overheating. What\'s the likely cause?',a:'On the 3.8L V6, the most common cause is a failed intake manifold gasket (lower). This is a known GM issue affecting millions of 3.1L, 3.4L, and 3.8L engines. Coolant leaks internally or externally. We perform this repair regularly—it\'s straightforward for an experienced GM technician.'},
      {q:'Is the Pontiac GTO a good performance car to maintain?',a:'The 2004-2006 GTO uses the LS1/LS2 V8—one of GM\'s best engines ever. They\'re powerful, reliable, and straightforward to service. Clutch replacement and basic maintenance are the main needs. Performance parts are abundantly available. Great car to own and maintain.'}
    ]
  },
  'Mercury': {
    whatHeading: "Full-Service Mercury Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Mercury vehicles in South Salt Lake since 1990 — Grand Marquis, Mountaineers, Mariners, and Villagers. Mercury shared its engineering directly with Ford and Lincoln, which means we apply deep Ford platform knowledge to every Mercury repair. We handle tune-ups and timing service on high-mileage V8s, AWD system fluid service, cooling system repairs, and the brake and suspension work that adds up on older American trucks and SUVs. Every Mercury we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Ford discontinued Mercury in 2011, so the dealer network is gone — but these vehicles are built on the same platform as Fords that are still in production, which means parts availability is excellent. Mercury Grand Marquis in particular are well-loved, long-lasting vehicles that people want to keep running. At Scott's, we work on Ford-platform vehicles every day. The same knowledge and tools that service a Ford F-150 or Explorer apply directly to Mercury trucks and SUVs. You get experienced, practical service without paying for a brand name that no longer exists.",
    whoContent: {
      heading: "Who to Trust for Mercury Repair in South Salt Lake",
      paras: [
        "Scott's has been working on Ford-platform vehicles since 1990, which means Mercury service is entirely in our wheelhouse. Grand Marquis owners who've accumulated 150,000-200,000 miles on their cars come to Scott's because these vehicles are worth maintaining and we treat them that way. Mountaineer and Mariner owners get the same AWD expertise we apply to Explorer and Escape service.",
        "Our South Salt Lake location near I-15 makes us convenient for Mercury owners across the valley. Parts for Ford-platform Mercury vehicles are widely available and reasonably priced, which keeps repair costs fair. We're direct about what your Grand Marquis or Mountaineer needs and what it doesn't."
      ]
    },
    whenContent: [
      "The Grand Marquis V8 is one of the most reliable engines Ford ever built, and these cars regularly reach very high mileages with proper maintenance. Past 150,000 miles, the cooling system deserves a full inspection — thermostat, hoses, and coolant condition — and spark plugs on some model years require careful extraction to avoid breaking in the head. If your Grand Marquis hasn't had a thorough cooling system service in recent memory, now is the right time. These engines will keep going a long time if the cooling system is kept healthy.",
      "Mercury Mountaineer and Mariner AWD systems share their service requirements with the Ford Explorer and Escape — transfer case and rear differential fluid service is critical and frequently neglected on high-mileage examples. Some Mountaineer V6 and V8 models develop intake and exhaust manifold gasket wear as mileage climbs. Mariner hybrid models have additional service considerations around the hybrid battery cooling system. Whatever Mercury you drive, the underlying Ford platform means parts are available and repairs are straightforward."
    ],
    process: [
      {
        step: 1,
        title: "Ford-Compatible Diagnostic Scan",
        desc: "We use professional Ford/Lincoln/Mercury scan tools to read all module fault codes — PCM, TCM, ABS, and 4WD system data — across the full Mercury lineup."
      },
      {
        step: 2,
        title: "Cooling System Inspection",
        desc: "Grand Marquis and Mountaineer cooling systems are thoroughly inspected — thermostat, hoses, radiator, and coolant condition. Degraded coolant causes more long-term damage than most owners realize."
      },
      {
        step: 3,
        title: "AWD/4WD Drivetrain Service",
        desc: "Mountaineer and Mariner AWD transfer case and differential fluids are checked and serviced. We also inspect front axle and CV components on Mariner AWD models."
      },
      {
        step: 4,
        title: "Honest Estimate with Ford-Spec Parts",
        desc: "Mercury parts are interchangeable with Ford equivalents, which keeps costs reasonable. We provide a written estimate using quality components matched to Ford's specifications."
      },
      {
        step: 5,
        title: "Road Test and Delivery",
        desc: "Every Mercury is road tested after service — we pay particular attention to transmission engagement and AWD function on Mountaineer and Mariner models before delivery."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "4.6L V8 Tune-Up & Engine Service",
        desc: "Grand Marquis 4.6L spark plug service, including careful extraction of late-model 2-piece plugs, along with ignition wire and coil replacement for smooth high-mileage performance."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "High-mileage Mountaineer and Grand Marquis 4.6L engines develop timing chain tensioner wear. We service chains and guides before slack causes rattling and eventual jump."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling Service",
        desc: "Mercury V6 and V8 water pumps and thermostats are replaced with quality Ford-spec components. Complete cooling system service extends engine life on these high-mileage platforms."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Grand Marquis, Mountaineer, and Mariner brake systems use Ford-compatible components with excellent parts availability. We replace pads, rotors, and hardware correctly."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Service",
        desc: "Mariner and Mountaineer AWD front axles and CV joints wear with use and Utah winter driving. We inspect and replace boots and full axle assemblies as needed."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair",
        desc: "Panther-platform Grand Marquis exhaust manifold cracking and mid-pipe rust are common high-mileage repairs. We repair and replace with welding services available for cost-effective fixes."
      }
    ],
    issues: [
      {t:'Mercury Grand Marquis Intake Manifold Cracking',d:'Mercury Grand Marquis and Mountaineer with the Ford 4.6L V8 develop cracked plastic intake manifolds that cause coolant leaks. We replace with updated manifold designs.'},
      {t:'Mercury Mariner/Escape Hybrid Battery',d:'Mercury Mariner Hybrid shares Ford Escape Hybrid components including the high-voltage battery that degrades after 8-10 years. We diagnose hybrid battery issues.'},
      {t:'Mercury Transmission Concerns',d:'Mercury Mountaineer and Explorer share the Ford 5R55 transmission that develops servo bore wear causing harsh 2-3 shifts. We rebuild or replace depending on condition.'}
    ],
    tips: [
      'Mercury vehicles are mechanically identical to their Ford counterparts. The Grand Marquis is a Crown Victoria, the Mountaineer is an Explorer, and the Mariner is an Escape. Ford parts and Ford knowledge apply directly.',
      'Mercury Grand Marquis with the 4.6L V8: use Motorcraft spark plugs only. Aftermarket plugs in these engines can break during removal due to the 2-piece plug design.',
      'Mercury Sable/Ford Taurus 3.0L Duratec engines are very reliable but need timing chain inspection after 150,000 miles.'
    ],
    faqs: [
      {q:'Can you still service my Mercury?',a:'Yes. Mercury vehicles are Ford products with different badges. The Grand Marquis is a Crown Victoria, the Mountaineer is an Explorer, the Mariner is an Escape. We service all of these Ford platforms regularly. Parts availability is identical to Ford—no concerns whatsoever.'},
      {q:'Is my old Mercury Grand Marquis worth maintaining?',a:'The Grand Marquis with the 4.6L V8 is one of the most reliable vehicles ever built. Low parts costs, simple maintenance, and legendary durability make them excellent vehicles to maintain. If the body and frame are sound, absolutely worth keeping on the road.'},
      {q:'My Mercury Mountaineer shifts hard between 2nd and 3rd. What\'s wrong?',a:'The Ford/Mercury 5R55 transmission develops servo bore wear that causes harsh 2-3 shifts. In early stages, a fluid change and additive can help. Advanced cases need a servo bore repair or transmission rebuild. We diagnose the severity before recommending the repair path.'}
    ]
  },
  'Plymouth': {
    whatHeading: "Full-Service Plymouth Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Plymouth vehicles in South Salt Lake since 1990 — Voyagers, Neons, Breezes, Acclaims, and Sundances. Chrysler discontinued Plymouth in 2001, but these practical vehicles are still on Utah roads and well worth maintaining. We handle timing belt replacement on four-cylinder models, minivan transmission and cooling repairs, clutch replacement on manual cars, and the exhaust and suspension work these older vehicles accumulate over time. Every Plymouth we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Plymouth was discontinued by Chrysler in 2001, which means these vehicles are now 25 years or older at minimum. There are no Plymouth dealers — and haven't been for decades. The good news is that Plymouth vehicles share all their mechanical components with contemporary Dodge and Chrysler models, so parts availability through the Chrysler supply chain remains solid. Scott's has been working on Chrysler-platform vehicles since 1990. If you're maintaining a well-kept Plymouth Voyager or Neon, we're the right shop — we know these platforms well and we won't make you feel like your older vehicle isn't worth our time.",
    whoContent: {
      heading: "Who to Trust for Plymouth Repair in South Salt Lake",
      paras: [
        "Scott's has serviced Chrysler-platform vehicles for over three decades, which means Plymouth is entirely familiar territory. Voyager and Grand Voyager minivans — some of which are still carrying families in Salt Lake Valley — come to us for transmission service, cooling repairs, and timing belt work. Neon owners maintaining these fun, practical small cars find that Scott's treats them seriously regardless of the vehicle's age.",
        "Our location near I-15 in South Salt Lake is straightforward to reach for Plymouth owners from across the valley. We're honest about repair economics on older vehicles — we'll tell you when a repair makes sense and when it approaches the car's value. No shop should push you into spending more than a vehicle is worth."
      ]
    },
    whenContent: [
      "Plymouth four-cylinder cars use timing belts with a strict replacement schedule — these are interference engines, meaning a broken belt bends valves immediately with no warning. On a Neon or Breeze with an unclear service history, confirming or replacing the timing belt is the first order of business. The minivan V6 engines use timing chains rather than belts, but their cooling systems have a reputation for developing problems: leaking intake gaskets and thermostat failures that can allow overheating if not caught in time.",
      "Plymouth Voyager and Grand Voyager automatic transmissions are reliable when fluid service is kept up, but Utah's summer heat accelerates fluid breakdown — dark or burned-smelling transmission fluid means friction material is already degraded. Manual Neons need clutch replacement at moderate mileages, and these are relatively inexpensive repairs that keep a practical daily driver running. Exhaust systems on these older vehicles also benefit from inspection, as age combined with Utah road salt accelerates corrosion on pipes and hangers."
    ],
    process: [
      {
        step: 1,
        title: "Chrysler Platform Diagnostic Scan",
        desc: "We use Chrysler/Mopar-compatible scan tools to read PCM and TCM fault codes across Plymouth Neon, Breeze, and Voyager platforms — properly reading the proprietary codes these systems generate."
      },
      {
        step: 2,
        title: "Timing Belt Inspection (4-Cylinder Models)",
        desc: "On Plymouth Neon and Breeze, we verify timing belt condition and service history. For vehicles with unknown history, we recommend replacement given the interference-engine risk."
      },
      {
        step: 3,
        title: "Cooling System Assessment",
        desc: "We inspect radiator condition, hoses, thermostat function, and coolant quality on all Plymouth models — particularly the Voyager 3.3L V6 known for intake gasket and cooling issues."
      },
      {
        step: 4,
        title: "Honest Repair Estimate",
        desc: "Plymouth parts are Chrysler/Dodge compatible and widely available at reasonable cost. We provide written estimates that reflect the actual value of keeping these reliable older vehicles running."
      },
      {
        step: 5,
        title: "Road Test and Fluid Check",
        desc: "After service, we road test and verify transmission engagement, brake feel, and engine temperature — the key systems that most commonly need attention on high-mileage Plymouth vehicles."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-belt-replacement-near-south-salt-lake-ut",
        name: "Timing Belt Replacement",
        desc: "Plymouth Neon and Breeze timing belt replacement is critical every 60,000 miles. We replace belt, tensioner, and water pump together on these interference-engine four-cylinders."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "Plymouth Voyager 3.3L and 3.8L V6 cooling systems need regular maintenance. We replace thermostats, water pumps, and hoses and properly flush degraded coolant."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Manual Plymouth Neon clutch replacement is an affordable repair that keeps these practical small cars running. Scott's handles full clutch assembly and flywheel service."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Chrysler-platform Plymouth brake components are widely available and economically priced. We replace pads, rotors, and hardware on all Voyager, Neon, and Breeze models."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair",
        desc: "Age and Utah road conditions corrode Plymouth exhaust systems. We repair and replace exhaust pipes, manifold gaskets, and hangers with welding services for cost-effective fixes."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Full Mechanical Service",
        desc: "With no Plymouth dealers and parts well into their classic-car supply chain, Scott's provides complete mechanical service — keeping these Chrysler-platform vehicles on the road."
      }
    ],
    issues: [
      {t:'Plymouth Neon Head Gasket Failure',d:'The Plymouth Neon 2.0L engine is known for head gasket failures causing overheating and coolant loss. We replace head gaskets and inspect for warped cylinder heads.',href:'/symptoms/coolant-leak'},
      {t:'Plymouth Voyager Transmission Service',d:'Plymouth Voyager/Grand Voyager minivans used Chrysler transmissions that benefit from regular fluid changes. Neglected fluid causes the most common transmission failures.'},
      {t:'Plymouth Classic Car Service',d:'We service older Plymouth vehicles—Barracuda, Duster, Satellite—for clutch repair, brake service, exhaust work, and general mechanical maintenance.'}
    ],
    tips: [
      'Plymouth vehicles are Chrysler/Dodge products. The Neon is a Dodge Neon, the Voyager is a Dodge Caravan, and the Breeze is a Dodge Stratus. Parts availability is identical.',
      'Plymouth Neon owners: monitor coolant level and temperature gauge closely. Head gasket failure is common and catching it early prevents head warping.',
      'Classic Plymouth vehicles (\'60s-\'70s) use simple mechanical systems that we\'re experienced with—drum brakes, manual transmissions, carburetor engines.'
    ],
    faqs: [
      {q:'Can you work on my Plymouth Neon?',a:'Absolutely. The Plymouth Neon is identical to the Dodge Neon mechanically. We service these regularly. The 2.0L engine\'s head gasket issue is well-known and we have the experience to handle it efficiently, including checking for cylinder head warping.'},
      {q:'Do you work on classic Plymouth vehicles?',a:'Yes. We handle clutch repair, brake service, exhaust work, and general mechanical service on classic Plymouths. Barracudas, Dusters, and Road Runners have straightforward mechanical systems that our experienced technicians know well.'},
      {q:'Can you still get parts for Plymouth vehicles?',a:'For newer Plymouths (Neon, Voyager, Breeze), parts are identical to Dodge and readily available. For classic Plymouths, we source through specialty Mopar parts suppliers. Between aftermarket and NOS (new old stock), parts availability is good for most models.'}
    ]
  },
  'Hummer': {
    whatHeading: "Full-Service Hummer Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Hummer vehicles in South Salt Lake since 1990 — H1s, H2s, and H3s. These are heavy, capable trucks with specific maintenance demands that reflect their size and use. We handle timing chain service on H3 engines, cooling and exhaust work on H2 models, 4WD transfer case and differential service, brake work on vehicles heavier than anything else on the road, and the exhaust repairs common to high-mileage Utah trucks. Every Hummer we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "GM discontinued Hummer after the 2010 model year. No new Hummers have been sold since, and the dealer support that existed was already folded into GM's larger dealer network rather than dedicated Hummer shops. Today, Hummer owners rely on independent shops with solid GM truck experience. Scott's has been working on GM trucks and SUVs since 1990 — the H2 and H3 are extensions of the same platform knowledge we've built over decades. We take these trucks seriously: they're built to last and worth maintaining correctly.",
    whoContent: {
      heading: "Who to Trust for Hummer Repair in South Salt Lake",
      paras: [
        "Salt Lake Valley has more Hummers than most metro areas — Utah's off-road culture and the H3's capability in mountain terrain made them popular here. Scott's has been the reliable independent option for H2 and H3 owners since these trucks aged out of warranty. We know the Atlas inline-5's timing chain tendencies, the H2 Vortec's cooling demands, and the 4WD systems that need regular fluid maintenance to stay functional.",
        "Our South Salt Lake location near I-15 makes us accessible for Hummer owners from across the valley. These are large, heavy vehicles that need a shop confident working with them. We have the lifts, the tools, and the GM truck experience to handle whatever your H2 or H3 needs — from routine fluid service to significant drivetrain and engine repairs."
      ]
    },
    whenContent: [
      "If your H3 ticks or rattles at cold startup — a sound that may fade after warm-up — the timing chain and tensioner system needs inspection. Utah's cold winters make startup rattles more pronounced, and the longer oil takes to circulate in freezing temperatures, the harder the start is on the tensioner. Catching the issue at the rattle stage is the difference between a manageable repair and a much larger one if the chain skips. Check engine lights pointing to cam timing faults mean the window for the simpler repair may already be closing.",
      "H2 and H3 4WD systems need transfer case and differential fluid service more frequently than the factory schedule suggests — especially for trucks used for towing or off-road driving, both common in Utah. Neglected drivetrain fluids accelerate gear and bearing wear. H2 cooling systems also work hard given the engine displacement and vehicle weight; degraded coolant leads to water pump and thermostat failures that can leave you stranded. Both trucks also develop exhaust manifold bolt failures over time — a ticking leak worth addressing before it worsens."
    ],
    process: [
      {
        step: 1,
        title: "GM Truck Diagnostic Scan",
        desc: "We use GM-compatible diagnostic tools to read all module fault codes on H2 and H3 platforms — including 4WD transfer case, ABS, and engine management systems."
      },
      {
        step: 2,
        title: "Atlas Timing Chain Inspection (H3)",
        desc: "H3 models get a specific cold-start rattle assessment and scan for cam timing fault codes. Chain stretch on the Atlas inline-5 is the most common significant repair on these trucks."
      },
      {
        step: 3,
        title: "4WD Drivetrain Fluid Service",
        desc: "Transfer case, front differential, and rear differential fluids are checked for condition and service interval. We service all three with the correct GM-specified fluids for off-road capable trucks."
      },
      {
        step: 4,
        title: "Cooling and Exhaust Inspection",
        desc: "H2 cooling systems are inspected for thermostat function, coolant condition, and water pump health. Exhaust manifold condition is checked on both H2 and H3 for bolt failure and gasket leaks."
      },
      {
        step: 5,
        title: "Heavy-Duty Road Test",
        desc: "After service, Hummers are road tested under conditions that verify 4WD function, engine temperature stability, and brake performance — the critical systems on these heavy vehicles."
      }
    ],
    commonRepairs: [
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service (H3)",
        desc: "The Atlas inline-5 timing chain and tensioner replacement is the most critical H3 repair. We address cold-start rattle early before chain stretch causes a jump and major engine damage."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "4WD Transfer Case & Differential Service",
        desc: "Hummer transfer case and axle differential fluid service keeps 4WD systems reliable for Utah's mountain and off-road conditions. We service all drivetrain fluids with correct GM specifications."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "H2 and H3 cooling systems work hard under load. We replace water pumps, thermostats, and service coolant to prevent overheating on these high-curb-weight trucks."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Hummer H2 and H3 brake systems handle enormous vehicle weight. We replace pads, rotors, calipers, and brake lines with components matched to the braking demands of these heavy trucks."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Manifold & Exhaust Repair",
        desc: "H2 and H3 exhaust manifold bolt failures and gasket leaks are common. We repair manifold leaks, replace broken studs, and address mid-pipe and catalytic converter issues."
      },
      {
        slug: "shock-replacement-near-south-salt-lake-ut",
        name: "Suspension & Shock Replacement",
        desc: "Hummer suspension components — especially shocks and torsion bar components on the H3 — wear with mileage and off-road use. We restore proper ride height and handling stability."
      }
    ],
    issues: [
      {t:'Hummer H2 Exhaust Manifold Bolt Failure',d:'The Hummer H2 uses the GM 6.0L/6.2L V8 that shares the exhaust manifold bolt breakage issue with Silverado and Sierra. Extraction requires skill to avoid head damage.',href:'/services/exhaust-repair-near-south-salt-lake-ut'},
      {t:'Hummer H3 Cylinder Head Crack',d:'The Hummer H3 3.5L and 3.7L inline-5 engines develop cylinder head cracks causing coolant loss and overheating. We replace heads with updated castings.'},
      {t:'Hummer Transfer Case and Differential Service',d:'Hummer 4WD systems work harder than most due to vehicle weight. Transfer case and differential fluid changes are critical maintenance items.'}
    ],
    tips: [
      'Hummer H2 shares the GM full-size truck platform. All Silverado/Sierra maintenance recommendations apply. Change oil every 5,000 miles with Dexos-approved synthetic.',
      'Hummer H3 coolant should be inspected at every oil change for signs of cylinder head cracking. Early detection prevents expensive engine damage.',
      'Hummer vehicles are heavy—brakes wear significantly faster than lighter vehicles. Inspect pads every 15,000 miles and expect replacement every 25,000-35,000 miles.'
    ],
    faqs: [
      {q:'Can you service my Hummer H2?',a:'Yes. The H2 is built on the GM 2500 truck platform with a Vortec V8. We service GM trucks daily and the H2 is mechanically identical. Same engine, same transmission, same transfer case. Our GM expertise applies directly.'},
      {q:'Is the Hummer H3 reliable?',a:'The H3\'s inline-5 engine has a known cylinder head cracking issue that affects reliability. The drivetrain (transfer case, differentials) is robust if fluids are maintained. With head gasket monitoring and regular 4WD service, they can be kept on the road reliably.'},
      {q:'My Hummer gets terrible gas mileage. Can you help?',a:'Hummers are heavy vehicles with large engines—poor fuel economy is inherent to the design. However, we can ensure your engine is running at peak efficiency through tune-ups, air filter replacement, fuel system cleaning, and ensuring no exhaust restrictions. Proper tire pressure also matters significantly on a vehicle this heavy.'}
    ]
  },
  'Scion': {
    whatHeading: "Full-Service Scion Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Scion vehicles in South Salt Lake since 1990 — tCs, xBs, xDs, iQs, and the FR-S. Scion was Toyota's youth-focused brand from 2003 to 2016, and these vehicles use Toyota and Subaru-based drivetrains we know thoroughly. The FR-S in particular is popular with enthusiasts and hard on clutches when driven as intended. We handle clutch replacement across the manual-heavy Scion lineup, timing chain work, and all the routine and corrective maintenance these sporty, practical cars need. Every Scion we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Toyota discontinued the Scion brand in 2016, folding the remaining models back into Toyota's lineup. As a result, there are no Scion dealers — but Toyota dealers can service these vehicles, and so can Scott's, often at lower cost. More importantly, the FR-S and tC attract manual-transmission enthusiasts who drive their cars with purpose, and Scott's clutch specialty is exactly what these cars need when the stock clutch wears out. We've replaced clutches on more FR-S and tC coupes than we can count, and we understand what these cars need when they're driven hard.",
    whoContent: {
      heading: "Who to Trust for Scion Repair in South Salt Lake",
      paras: [
        "Scion owners in Salt Lake Valley — particularly FR-S and tC enthusiasts — have found Scott's to be the right shop for their cars. The FR-S clutch replacement is a natural fit for a shop that has specialized in manual transmission work since 1990. We understand the FA20 engine, the Aisin manual transmission in the FR-S and tC, and the Toyota four-cylinders in the xB and xD. These are fun cars worth maintaining correctly.",
        "We're located in South Salt Lake near I-15 — easy to reach from anywhere in the valley. Whether you've worn through a clutch on your FR-S at Utah Motorsports Campus or your xB just needs routine maintenance, Scott's handles it with the same care. We're direct about cost and honest about what your Scion needs."
      ]
    },
    whenContent: [
      "The Scion FR-S is a naturally aspirated sports car that makes its power at high RPM and rewards enthusiastic driving — which means clutch wear is a real consideration, not a hypothetical one. If the car sees track days at Utah Motorsports Campus, spirited canyon runs, or aggressive street driving, the stock clutch wears noticeably faster than it would in relaxed commuting. An engagement point that keeps climbing higher, a faint burning smell after hard driving, or slip under full throttle in a high gear are the signs. Replacing the clutch with a properly matched unit is the right move on a car built to be driven.",
      "Some Scion four-cylinder engines develop timing chain tensioner wear that shows up as a cold-start rattle — particularly if oil changes have been stretched. The rattle stage is the time to act, not after the chain has jumped. The xB and xD are particularly low-maintenance cars, but higher-mileage examples need water pump and serpentine belt inspection. The iQ has a tightly packaged engine compartment that makes some service items more involved than the car's size suggests. Toyota-compatible parts availability means keeping any Scion on the road is straightforward."
    ],
    process: [
      {
        step: 1,
        title: "Toyota-Compatible Diagnostic Scan",
        desc: "We use professional Toyota/Scion diagnostic tools to read all ECU fault codes across FR-S, tC, xB, xD, and iQ platforms — the same coverage level as a Toyota dealer scan."
      },
      {
        step: 2,
        title: "Clutch Wear Assessment",
        desc: "For FR-S, tC, and other manual Scion models, we assess clutch engagement point, slip threshold, and release bearing condition. We discuss performance clutch options for enthusiast applications."
      },
      {
        step: 3,
        title: "Timing Chain Inspection",
        desc: "On tC and xB models with higher mileage, we listen for timing chain rattle and scan for cam timing fault codes. Early tensioner service prevents the more expensive chain replacement."
      },
      {
        step: 4,
        title: "Honest Estimate Using Toyota-Spec Parts",
        desc: "Scion components are Toyota-compatible, which means excellent parts availability at reasonable prices. We provide a clear written estimate before starting any work."
      },
      {
        step: 5,
        title: "Road Test and Performance Verification",
        desc: "After clutch or engine work, we road test under real conditions — including WOT acceleration where appropriate — to confirm the repair is right before the car leaves."
      }
    ],
    commonRepairs: [
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "The Scion FR-S and tC are manual-transmission cars that attract enthusiastic drivers. Scott's clutch specialty means correct replacement with options for both OEM and performance-spec clutch kits."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain Service",
        desc: "Scion tC timing chain tensioner wear causes startup rattle on higher-mileage examples. We service chains and tensioners before the rattling progresses to a jumped chain."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "FR-S and tC brake systems — including Brembo brakes on performance variants — get regular use on enthusiast cars. We replace pads, rotors, and hardware with quality Toyota-spec components."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "Toyota four-cylinder water pump and thermostat replacement is straightforward preventive maintenance on higher-mileage xB, xD, and tC models. We use Toyota-spec coolant."
      },
      {
        slug: "cv-joint-repair-near-south-salt-lake-ut",
        name: "CV Joint & Axle Service",
        desc: "Front-wheel-drive Scion models depend on healthy CV joints for smooth power delivery. We inspect and replace boots and axle assemblies on tC, xB, and xD models."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Full Mechanical Service",
        desc: "With no Scion dealers, Toyota shops and independents like Scott's handle all Scion service. We provide complete mechanical maintenance using Toyota-compatible parts and fluids."
      }
    ],
    issues: [
      {t:'Scion tC Clutch and Flywheel Wear',d:'Scion tC manual transmission models develop clutch chatter from the dual-mass flywheel, similar to other Toyota platforms. We offer solid flywheel conversion for longer clutch life.',href:'/services/clutch-repair-near-south-salt-lake-ut'},
      {t:'Scion FR-S/BRZ Valve Spring Recall',d:'The Scion FR-S (now Toyota 86) had a valve spring recall on early models. If your vehicle hasn\'t been updated, we can check and coordinate the repair.'},
      {t:'Scion xB Oil Consumption',d:'The second-generation Scion xB (2008+) uses the Toyota 2AZ-FE engine known for excessive oil consumption from piston ring wear.'}
    ],
    tips: [
      'Scion vehicles are Toyotas mechanically—the tC uses Camry components, the xB uses Corolla/RAV4 components, and the FR-S is a Toyota 86. Toyota parts and Toyota knowledge apply directly.',
      'Scion FR-S/86 with the FA20 boxer engine: use 0W-20 synthetic oil and check the level monthly. These engines can consume oil, especially when driven hard.',
      'Scion tC timing chain tensioners should be inspected at 100,000 miles. The 2AR-FE engine shares Toyota\'s chain stretch tendency.'
    ],
    faqs: [
      {q:'Is a Scion just a Toyota?',a:'Yes. Scion was Toyota\'s youth-oriented brand, discontinued in 2016. Every Scion model uses Toyota engines, transmissions, and components. The tC is a sporty Camry platform, the xB uses Corolla components, and the FR-S became the Toyota 86. We service them with full Toyota expertise.'},
      {q:'My Scion tC clutch chatters. What\'s the fix?',a:'The tC uses a dual-mass flywheel that develops chatter over time. During clutch replacement, we recommend converting to a solid flywheel with an upgraded clutch kit. This eliminates the chatter permanently and costs less than OEM dual-mass flywheel replacement.'},
      {q:'Can you still get parts for Scion vehicles?',a:'Absolutely—Scion parts are Toyota parts with different packaging. Every component is available through Toyota dealer and aftermarket channels. Parts availability will never be a concern for Scion vehicles.'}
    ]
  },
  'Smart': {
    whatHeading: "Full-Service Smart Car Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Smart ForTwo vehicles in South Salt Lake since the model arrived in the US market. These are genuinely unusual cars: rear-mounted turbocharged three-cylinder engines, an automated manual transmission that operates like an automatic but contains a real mechanical clutch, and a design unlike anything else on the road. We handle clutch replacement on the automated transmission, transmission actuator service, engine maintenance, and the cooling and exhaust work these small turbocharged engines need. Every Smart we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "Smart dealers in the US are scarce, and many that did exist were folded into Mercedes-Benz dealerships where the hourly rate is high and ForTwo expertise varies. At Scott's, we're familiar with the Smart's unconventional drivetrain — the automated manual transmission with its electro-hydraulic clutch actuator, the rear engine layout, and the turbocharger on the small three-cylinder. We give Smart owners a straightforward, affordable service option that doesn't charge Mercedes rates for a vehicle that costs a fraction of a Mercedes. These little cars deserve practical, competent service.",
    whoContent: {
      heading: "Who to Trust for Smart Car Repair in South Salt Lake",
      paras: [
        "Smart ForTwo owners in Salt Lake Valley find Scott's to be one of the few independent shops that takes the AMT transmission seriously rather than treating the car as a curiosity. The automated manual clutch is the most common significant repair on these cars — it's wear-dependent, just like a conventional clutch — and Scott's clutch specialty translates directly to Smart ForTwo service.",
        "We're near I-15 in South Salt Lake, which is easy to reach from anywhere in the valley. Smart cars are practical city vehicles and deserve practical service pricing. We don't charge European luxury rates just because the car has a Mercedes-Benz corporate parent. If your Smart is hesitating between gear changes or the transmission is jerky, bring it in and we'll diagnose it accurately."
      ]
    },
    whenContent: [
      "The Smart ForTwo's automated manual transmission uses a conventional mechanical clutch operated by an electro-hydraulic actuator — no clutch pedal, but a real clutch that wears just like any other. Hesitation during gear changes, jerky low-speed engagement, or lurching when pulling into traffic are the signs of a worn clutch. If the transmission seems to be hunting for gears or shifts have become rough and unpredictable, the clutch and actuator system both need inspection. Driving around a worn AMT clutch accelerates wear on the actuator, so addressing it promptly is worth it.",
      "The Smart's small turbocharged engine is tightly packaged in the rear of the car, which makes some service items more involved than you'd expect from a vehicle this size. The engine runs hot in stop-and-go traffic — a condition Salt Lake Valley summer driving amplifies — and the cooling system needs to be in good condition to handle it. Exhaust components on the rear-mounted engine are exposed to heat cycles and road debris, and turbocharger boost hoses are a wear item on higher-mileage examples. These are all serviceable repairs that keep the car reliable for years."
    ],
    process: [
      {
        step: 1,
        title: "Mercedes/Smart Diagnostic Scan",
        desc: "We use Mercedes-compatible diagnostic tools that read Smart ForTwo ECU and transmission control module fault codes — including AMT actuator position codes that generic OBD readers miss."
      },
      {
        step: 2,
        title: "AMT Clutch and Actuator Assessment",
        desc: "We assess clutch wear by testing engagement behavior, shift quality, and actuator response. Worn clutch material and actuator hydraulic issues produce different symptoms we can distinguish accurately."
      },
      {
        step: 3,
        title: "Three-Cylinder Engine Inspection",
        desc: "The rear-mounted turbo three-cylinder is inspected for boost hose condition, cooling system integrity, and oil leaks — the main areas these engines develop issues with age and mileage."
      },
      {
        step: 4,
        title: "Transparent Estimate",
        desc: "Smart parts are sourced through Mercedes-compatible supply channels. We provide a written estimate at independent shop rates — not what a Mercedes dealer would charge for a ForTwo."
      },
      {
        step: 5,
        title: "Test Drive with Shift Quality Verification",
        desc: "After AMT clutch or transmission work, we test drive specifically for shift quality — smooth engagement at low speeds, clean gear changes under acceleration — before the car is returned."
      }
    ],
    commonRepairs: [
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "AMT Clutch Replacement",
        desc: "The Smart ForTwo automated manual clutch wears over time and causes rough, jerky gear changes. Scott's clutch specialty directly covers Smart AMT clutch and actuator service."
      },
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "AMT Transmission Actuator Service",
        desc: "The electro-hydraulic actuator that operates the Smart's AMT clutch can develop issues separate from the clutch itself. We diagnose actuator faults accurately before recommending replacements."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair",
        desc: "Smart ForTwo rear-mounted exhaust components experience significant heat cycling. We repair exhaust leaks and replace deteriorated components on the turbo three-cylinder exhaust system."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Cooling System Service",
        desc: "Smart three-cylinder cooling system maintenance prevents overheating in stop-and-go conditions. We replace thermostats, inspect hoses, and service coolant at correct intervals."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "Smart ForTwo brakes are compact and require correct-spec components. We replace pads and rotors with appropriate hardware for the ForTwo's lightweight braking system."
      },
      {
        slug: "catalytic-converter-service-near-south-salt-lake-ut",
        name: "Catalytic Converter Service",
        desc: "Smart turbo three-cylinder catalytic converters are close-coupled to the engine and experience high heat. We diagnose P0420 codes and replace converters when efficiency has genuinely degraded."
      }
    ],
    issues: [
      {t:'Smart ForTwo Transmission Actuator Failure',d:'The Smart ForTwo uses an automated manual transmission with an electro-hydraulic actuator that fails, causing jerky shifts or no-shift conditions.'},
      {t:'Smart ForTwo Turbo Wastegate Failure',d:'Smart ForTwo turbocharged models develop wastegate actuator failure causing boost control problems, overboosting, or no boost.'},
      {t:'Smart ForTwo Engine Mount Failure',d:'The rear-mounted engine in the Smart ForTwo puts unique stress on engine mounts that fail more frequently than conventional front-engine vehicles.'}
    ],
    tips: [
      'Smart ForTwo automated manual transmissions need the clutch actuator software updated periodically. This improves shift quality and extends actuator life.',
      'Smart ForTwo engines are Mercedes-derived and require Mercedes-spec oil (MB 229.5). Using conventional oil degrades the turbo and causes sludge buildup.',
      'Smart ForTwo rear engine placement means the cooling system works harder in Utah summers. Check coolant level monthly and inspect hoses annually.'
    ],
    faqs: [
      {q:'Can you work on Smart cars?',a:'Yes. The Smart ForTwo uses a Mercedes-derived engine and many shared components. While the layout is unusual (rear-engine, rear-drive), the mechanical principles are straightforward. We diagnose and repair Smart vehicles efficiently.'},
      {q:'Why does my Smart car shift so badly?',a:'The Smart ForTwo\'s automated manual transmission uses an electro-hydraulic clutch actuator that wears over time, causing jerky or delayed shifts. We can replace the actuator and recalibrate the transmission for smooth operation. It\'s the most common Smart repair we perform.'},
      {q:'Is a Smart car worth repairing?',a:'Smart ForTwo vehicles have low resale value, so repair costs need to be weighed carefully against vehicle value. Simple repairs like brakes and clutch actuators are worthwhile. Major engine or transmission work may not be economical. We give honest assessments.'}
    ]
  },
  'GM': {
    whatHeading: "Full-Service GM Vehicle Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has been working on General Motors vehicles since 1990 — from older carbureted V8s to current trucks and vans. We service the full GM spectrum: older Chevrolet and GMC trucks, commercial Express and Savana vans, Buick and Oldsmobile sedans, classic GM muscle cars, and fleet vehicles that need regular professional service. If it came from General Motors, we can service it. Every vehicle we take in gets a free diagnosis first — you'll know exactly what we found, what the repair costs, and why it's needed before any work starts.",
    whyIntro: "General Motors operates the largest dealer network of any automaker — but dealer labor rates have climbed steeply, and commercial and fleet operators in Salt Lake Valley have long preferred independent shops for routine and corrective maintenance. For older GM vehicles, commercial operators, and owners of discontinued GM brands, Scott's offers the combination of genuine GM experience and fair pricing that keeps fleets running and classic vehicles on the road. We've been working on GM's engines and drivetrains for over 30 years. The platform knowledge that covers a current Silverado also covers your 1995 Suburban or 2002 Express van.",
    whoContent: {
      heading: "Who to Trust for GM Vehicle Repair in South Salt Lake",
      paras: [
        "Scott's has been the independent GM alternative in South Salt Lake since 1990. Small businesses operating older GM work vans, owners of high-mileage GM trucks, and classic car enthusiasts maintaining older Chevrolet and Buick models all find Scott's to be the right shop. We use GM-compatible diagnostic tools and understand the engineering across multiple GM generations — from the TBI 350 to the Vortec 5300.",
        "Our location near I-15 in South Salt Lake makes us a practical service stop for businesses and individuals across Salt Lake Valley. Fleet operators appreciate that we're straightforward about maintenance schedules and repair priorities. Classic GM owners appreciate that we take their vehicles seriously and do the work correctly. One shop, experienced across the full GM lineage."
      ]
    },
    whenContent: [
      "Older GM V8 engines are among the most reliable engines ever built, but high-mileage examples develop predictable issues: intake manifold gasket leaks on Vortec V8s are particularly common, causing coolant consumption and occasional white exhaust smoke. Older carbureted and throttle-body-injected engines need carburetor, choke, and distributor maintenance that many shops no longer perform regularly. If you're running an older GM truck or van for commercial use, preventive attention to cooling, fuel, and ignition systems is the most cost-effective approach to keeping it working.",
      "GM's commercial full-size vans are workhorses that accumulate high mileage quickly in fleet service. The large V8 engines in these vans are durable, but some later engines with active fuel management systems develop lifter failures — a ticking noise on any fleet van should be diagnosed promptly before the damage spreads. If you operate multiple GM commercial vehicles and are seeing repeat lifter issues, there are modifications that address the root cause. Scott's has serviced fleet accounts since 1990 and understands the economics of keeping working vehicles on the road."
    ],
    process: [
      {
        step: 1,
        title: "GM-Wide Diagnostic Capability",
        desc: "We use professional GM-compatible scan tools covering the full model range — from early OBD-I systems on 1990s trucks to current CAN-bus architectures on late-model Silverados and Express vans."
      },
      {
        step: 2,
        title: "Fleet and Commercial Vehicle Assessment",
        desc: "For fleet operators, we develop service schedules based on actual mileage and use patterns. Commercial GM vehicles often need more frequent fluid and filter service than the factory schedule assumes."
      },
      {
        step: 3,
        title: "Classic and Older GM Service",
        desc: "Older GM vehicles with carbureted engines, HEI distributors, and early EFI systems require specific expertise. We understand these systems and stock or source the correct parts."
      },
      {
        step: 4,
        title: "Honest, Written Estimate",
        desc: "GM parts are widely available at all price points. We provide clear written estimates using quality components — we'll tell you when OEM is necessary and when a quality aftermarket part is the smarter choice."
      },
      {
        step: 5,
        title: "Road Test and Return to Service",
        desc: "Every GM vehicle leaves Scott's road tested and verified — particularly important for commercial vehicles that need to be back in service quickly and reliably."
      }
    ],
    commonRepairs: [
      {
        slug: "complete-auto-service-near-south-salt-lake-ut",
        name: "Full GM Mechanical Service",
        desc: "From older carbureted 350s to current Vortec and EcoTec3 engines, Scott's handles comprehensive GM mechanical service for private owners, fleet operators, and classic vehicle owners."
      },
      {
        slug: "timing-chain-repair-near-south-salt-lake-ut",
        name: "Timing Chain & AFM Lifter Service",
        desc: "GM Vortec V8 timing chains and AFM lifter failures are significant repairs in older fleet vans and trucks. We diagnose and replace components correctly before secondary damage develops."
      },
      {
        slug: "water-pump-replacement-near-south-salt-lake-ut",
        name: "Water Pump & Cooling System",
        desc: "GM V8 water pump and thermostat replacement is standard high-mileage service. We replace cooling components using correct GM-spec parts and properly flush and refill with current coolant specifications."
      },
      {
        slug: "clutch-repair-near-south-salt-lake-ut",
        name: "Clutch Repair",
        desc: "Older GM manual transmission vehicles — trucks, vans, and classic cars — get complete clutch assembly and flywheel service at Scott's, which has specialized in manual transmissions since 1990."
      },
      {
        slug: "brake-service-near-south-salt-lake-ut",
        name: "Brake Service",
        desc: "GM truck and van brake systems handle heavy loads and need regular service. We replace pads, drums, rotors, calipers, and wheel cylinders with quality components on all GM platforms."
      },
      {
        slug: "exhaust-repair-near-south-salt-lake-ut",
        name: "Exhaust Repair & Welding",
        desc: "High-mileage GM trucks and vans develop exhaust manifold leaks and mid-pipe failures. Our welding services allow cost-effective exhaust repairs that don't require full system replacement."
      }
    ],
    issues: [
      {t:'GM AFM/DFM Lifter Failure',d:'GM Active Fuel Management and Dynamic Fuel Management systems in 5.3L and 6.2L V8 engines develop collapsed lifters causing misfires and engine damage. This is the #1 GM repair we perform.',href:'/symptoms/engine-rattling'},
      {t:'GM 3.6L V6 Timing Chain Stretch',d:'The GM 3.6L V6 (used in Acadia, Traverse, Enclave, CTS, Equinox) develops timing chain stretch causing rough running and check engine lights. Complete chain kit replacement required.',href:'/services/timing-chain-repair-near-south-salt-lake-ut'},
      {t:'GM 10-Speed Transmission Shudder',d:'GM\'s 10-speed automatic transmission develops torque converter shudder felt at light throttle. Fluid flush with updated specification fluid usually resolves the issue.',href:'/symptoms/vibration-when-accelerating'}
    ],
    tips: [
      'GM V8 engines with AFM/DFM: use Dexos1 Gen3 approved oil and change every 5,000 miles. The cylinder deactivation system is the #1 failure point on modern GM trucks.',
      'GM 3.6L V6 timing chains should be inspected at 80,000 miles across all platforms (Chevy, GMC, Buick, Cadillac). Early replacement saves the engine.',
      'GM 8-speed and 10-speed automatic transmissions benefit from fluid changes every 45,000 miles. The "lifetime fill" claim leads to premature failures.'
    ],
    faqs: [
      {q:'What is GM AFM lifter failure?',a:'Active Fuel Management (AFM) deactivates cylinders for fuel economy. The special AFM lifters can collapse, causing misfires and ticking. It affects 5.3L and 6.2L V8 engines in Silverado, Sierra, Tahoe, Yukon, Suburban, and Escalade. We replace all 16 lifters and can disable AFM.'},
      {q:'Which GM vehicles have the timing chain issue?',a:'The 3.6L V6 timing chain issue affects: Chevy Traverse, Equinox, Camaro; GMC Acadia, Terrain; Buick Enclave, LaCrosse; Cadillac ATS, CTS, SRX, XT5. If you have any of these with 80,000+ miles and hear a cold-start rattle, have the chains inspected immediately.'},
      {q:'Do you specialize in GM vehicles?',a:'GM vehicles represent a significant portion of our work. With 35 years of experience in the Salt Lake Valley—where GM trucks dominate—we\'ve seen every common GM issue hundreds of times. AFM lifters, timing chains, transmission service—these are routine repairs for our technicians.'}
    ]
  }
};

const brandWhyUs = {
  'Toyota': [
    { title: 'Toyota Longevity Expertise', desc: 'Toyota vehicles are built to run 200,000+ miles — and we know what it takes to get there. Consistent fluid changes, attention to timing components, and catching small issues before they snowball.' },
    { title: 'Correct Toyota Fluids', desc: 'Toyota engines and transmissions are engineered around specific OEM-spec fluids. We stock the right oil grades, ATF, and coolant so your Toyota gets exactly what it was designed for.' },
    { title: 'Same-Day Most Services', desc: 'From timing belts to clutch replacements, most Toyota repairs are completed the same day. We communicate throughout so you\'re never left wondering.' },
    { title: 'Honest Estimates, No Upsell', desc: 'We tell you what we found and what it costs before we start. Toyota owners know what their vehicles should cost to maintain — we work to stay below dealer pricing without cutting corners.' }
  ],
  'Honda': [
    { title: 'Honda Drivetrain Expertise', desc: 'From VTEC engines to Honda\'s dual-clutch hybrids, our technicians have spent years diagnosing Honda-specific failures. We know where to look first.' },
    { title: 'Honda-Specific Fluids', desc: 'Honda transmissions and differentials are sensitive to fluid type. We always use Honda-spec ATF, coolant, and brake fluid — not "compatible" substitutes that cause long-term problems.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Honda services — clutch jobs, brake work, cooling system repairs — are completed the same day. No dropping your car off for a week.' },
    { title: 'Dealer Knowledge, Independent Prices', desc: 'You get Honda-specific expertise without the dealer overhead. Our labor rates are significantly lower than dealerships, and we use the same quality parts.' }
  ],
  'Ford': [
    { title: 'Ford Truck & EcoBoost Experience', desc: 'We service more Ford trucks and EcoBoost engines per week than most shops see in a month. F-150s, Rangers, and Explorers are a significant part of our daily work.' },
    { title: 'Built for Utah Driving', desc: 'Utah\'s canyon roads and heavy towing demands push Ford drivetrains harder than Ford\'s standard service intervals account for. We adjust recommendations to match how Utahns actually use their trucks.' },
    { title: 'Same-Day Turnaround', desc: 'Clutch replacements, transmission service, exhaust repairs — we work efficiently so most Ford repairs are done the same day you drop off.' },
    { title: 'Straight Talk, No Surprises', desc: 'We diagnose before we recommend. Every estimate tells you exactly what we found, what needs attention now, and what can wait.' }
  ],
  'Chevrolet': [
    { title: 'Chevy Truck Specialists', desc: 'Silverado, Tahoe, Suburban — GM trucks are a big part of what we do. We\'ve diagnosed and repaired every common Chevy truck issue, including AFM lifter failures and 3.6L timing chains.' },
    { title: 'GM-Spec Parts & Fluids', desc: 'We use Dexos-approved oils, quality parts, and GM-specification fluids. The right fluids matter especially on AFM-equipped engines that run harder internally.' },
    { title: 'Efficient Turnaround', desc: 'Most Chevy repairs are completed same-day. For larger jobs, we give you honest timelines upfront so you can plan around your schedule.' },
    { title: 'No Dealership Markup', desc: 'You get the same Chevy expertise without the dealer overhead. Our pricing is straightforward and consistently below dealer rates.' }
  ],
  'Subaru': [
    { title: 'Subaru AWD System Knowledge', desc: 'Subaru\'s symmetrical AWD has specific maintenance requirements. We understand the drivetrain, timing components, and known failure points that affect Subarus in Utah\'s climate.' },
    { title: 'Subaru-Specific Fluids', desc: 'Subaru boxer engines and AWD systems require specific coolant, gear oil, and differential fluid. We stock the correct specs — not generic alternatives that cause long-term damage.' },
    { title: 'Timing & Engine Specialists', desc: 'Timing belt replacement is the most critical scheduled service on your Subaru. We replace the belt, water pump, tensioners, and thermostat as a complete kit.' },
    { title: 'Honest Subaru Diagnosis', desc: 'Many Subaru issues — like head gasket leaks — have a range of severity. We explain exactly what yours looks like before recommending any repair.' }
  ],
  'Nissan': [
    { title: 'Nissan CVT Experience', desc: 'Nissan\'s CVT transmissions require specific care and fluid maintenance. We\'ve diagnosed and repaired hundreds of Nissan drivetrains and know what keeps them running longer.' },
    { title: 'Correct Nissan Fluids', desc: 'CVT fluid, coolant, brake fluid — we use Nissan-compatible specs. The wrong fluid in a Nissan CVT accelerates wear and can cause premature failure.' },
    { title: 'Same-Day Most Repairs', desc: 'Brake work, suspension, clutch service — most Nissan repairs are completed the day you bring your vehicle in.' },
    { title: 'Straightforward Pricing', desc: 'We quote before we start. No surprises, no discovering extra work mid-repair without your approval first.' }
  ],
  'BMW': [
    { title: 'European Import Specialists', desc: 'BMW engineering is precise and maintenance-intensive. Our technicians have extensive experience with BMW cooling systems, valve timing, and drivetrain components that general shops often misdiagnose.' },
    { title: 'OEM-Quality Parts & Fluids', desc: 'We use LL-01 approved BMW oils, OE-spec coolant, and quality parts that match BMW\'s engineering tolerances. Your BMW gets what it\'s designed to run on.' },
    { title: 'Proactive Maintenance Approach', desc: 'BMWs reward proactive owners. We help you stay ahead of known failure points — cooling system components, oil leaks, brake wear — before they become expensive surprises.' },
    { title: 'Dealer-Level Expertise, Lower Cost', desc: 'BMW dealer labor rates in Salt Lake City run $175-200/hour. Our rates are significantly lower for the same knowledge and parts quality, without the overhead.' }
  ],
  'Jeep': [
    { title: 'Jeep Off-Road Knowledge', desc: 'Utah\'s trails, canyons, and rocky terrain put real demands on Jeep drivetrains. We understand the 4WD systems, differentials, and front-end components that take the most punishment.' },
    { title: '4WD & Drivetrain Fluids', desc: 'Transfer cases, axle differentials, and steering components on Jeeps require specific fluids changed at the right intervals. We use the specs Jeep engineering requires.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Jeep repairs — exhaust work, suspension, brake service — are completed the same day. Bigger drivetrain jobs are scheduled promptly.' },
    { title: 'Honest Assessment Every Time', desc: 'We diagnose before we recommend. Jeep "death wobble" has multiple possible causes — we find the actual worn parts instead of replacing everything.' }
  ],
  'Dodge': [
    { title: 'Hemi & Dodge Powertrain Experience', desc: 'Dodge Hemi engines, Ram transmissions, and Charger drivetrains are work we do constantly. We know the MDS system, exhaust manifold bolts, and ZF transmission quirks that affect modern Dodge vehicles.' },
    { title: 'Correct Specs for Dodge Systems', desc: 'Hemi engines need specific oil weights. Ram transmissions need ATF+4. We use the right fluids every time — generic substitutes cause the failures Dodge owners dread.' },
    { title: 'Same-Day Focus', desc: 'Ram trucks, Chargers, Challengers — most Dodge repairs are completed the same day. We work efficiently and respect your time.' },
    { title: 'No Guesswork Diagnosis', desc: 'A Hemi tick can be a manifold bolt or a collapsed lifter — we find out which one before giving you an estimate. No shotgun repairs.' }
  ],
  'Hyundai': [
    { title: 'Hyundai System Knowledge', desc: 'We\'ve diagnosed Hyundai GDI engines, dual-clutch transmissions, and AWD coupling systems extensively. We know where Hyundais are strong and where they need extra attention.' },
    { title: 'Right Parts, Right Fluids', desc: 'Hyundai vehicles use specific brake fluid grades and AWD fluids. We follow manufacturer specifications to keep your systems performing correctly.' },
    { title: 'Same-Day Service Focus', desc: 'Most Hyundai repairs — suspension, brakes, clutch service — are completed the day you bring your vehicle in.' },
    { title: 'Clear Communication', desc: 'We explain what we found, what it costs, and why it matters before we start. Recall questions, warranty concerns — we give you honest, straightforward answers.' }
  ],
  'Kia': [
    { title: 'Kia Drivetrain Experience', desc: 'Kia shares engineering with Hyundai, and we\'re well-versed in both. GDI engines, dual-clutch gearboxes, AWD coupling systems — we\'ve worked through every common Kia failure mode.' },
    { title: 'Manufacturer-Spec Fluids', desc: 'Kia\'s AWD systems and GDI engines are sensitive to fluid quality. We use specification-matched fluids that keep systems performing as designed.' },
    { title: 'Same-Day Most Repairs', desc: 'Brake service, suspension work, engine repairs — most Kia jobs are completed the same day you come in.' },
    { title: 'Honest Estimates', desc: 'We quote before we start. Kia engine and transmission issues can have a range of repair costs — we explain all your options clearly.' }
  ],
  'Volkswagen': [
    { title: 'German Engineering Expertise', desc: 'VW\'s TSI engines, DSG transmissions, and suspension design are precision-engineered and demand precise service. We have specific experience with the carbon buildup, timing chains, and DSG mechatronic issues VW owners face.' },
    { title: 'European-Spec Fluids & Parts', desc: 'VW requires specific oil specs, brake fluid, and DSG fluid. We use quality parts that meet VW\'s engineering standards — not generic substitutes.' },
    { title: 'Same-Day Most Repairs', desc: 'Most VW services — timing chain, carbon cleaning, brake work — are completed the same day without rushing the job.' },
    { title: 'Lower Cost Than VW Dealer', desc: 'VW dealer labor rates are high. We provide the same level of diagnostic capability and parts quality at significantly lower pricing.' }
  ],
  'Mazda': [
    { title: 'Mazda SKYACTIV Knowledge', desc: 'Mazda\'s SKYACTIV engines and transmissions are well-engineered and reliable. We understand what they need to stay that way — including the specific oil grades Mazda specifies for their high-compression engines.' },
    { title: 'Mazda-Spec Fluids', desc: 'SKYACTIV engines call for specific oil viscosities. Manual transmissions and AWD systems need the correct grades. We follow Mazda\'s specifications every time.' },
    { title: 'Same-Day Focus', desc: 'Most Mazda repairs — clutch work, brakes, suspension — are completed the same day you drop off. No unnecessary wait.' },
    { title: 'Honest Pricing', desc: 'We diagnose, quote, and wait for your approval before starting. No surprises, no pressure.' }
  ],
  'Mercedes-Benz': [
    { title: 'Mercedes System Experience', desc: 'Mercedes vehicles are sophisticated and maintenance-intensive. We have specific experience with Mercedes engine oil leaks, cooling systems, and air suspension that general shops aren\'t equipped to handle.' },
    { title: 'Mercedes-Approved Fluids & Parts', desc: 'We use MB 229.5-approved oil, Mercedes coolant, and OE-grade parts. Cutting corners on fluids causes the expensive failures Mercedes owners dread.' },
    { title: 'Proactive Maintenance', desc: 'Mercedes rewards proactive care. We help you stay ahead of multi-point oil leaks, air suspension wear, and cooling failures before they become major events.' },
    { title: 'Honest Cost vs. Dealer', desc: 'Mercedes dealer labor runs $175-225/hour in Salt Lake City. Our rates are significantly lower — same knowledge, same quality, without the brand markup.' }
  ],
  'Audi': [
    { title: 'Audi & Quattro Expertise', desc: 'Audi quattro AWD systems, S tronic transmissions, and TFSI engines are specialist territory. We have real experience diagnosing and repairing Audi drivetrains beyond basic service.' },
    { title: 'VW Group Fluids & Parts', desc: 'Audi shares engineering with VW and requires the same VW Group specifications for oil, brake fluid, and transmission fluid. We stock the correct specs.' },
    { title: 'Same-Day Most Repairs', desc: 'Timing chain service, carbon cleaning, brake work — most Audi repairs are completed the same day without cutting corners.' },
    { title: 'Dealer Knowledge, Independent Pricing', desc: 'Audi dealer rates in Salt Lake run $185-220/hour. We provide the same diagnostic capability and part quality at substantially lower cost.' }
  ],
  'Lexus': [
    { title: 'Lexus & Toyota Platform Knowledge', desc: 'Lexus vehicles are built on Toyota engineering — which means we\'re fully at home with Lexus drivetrains, engines, and transmissions. We treat your Lexus with the care it deserves.' },
    { title: 'OEM-Spec Fluids Only', desc: 'Lexus V8s, hybrid systems, and transmissions require Toyota/Lexus-spec fluids. We use the correct grades for every application — not generic alternatives.' },
    { title: 'Proactive Luxury Maintenance', desc: 'Lexus owners tend to keep their vehicles long-term. We help you stay ahead of maintenance so your Lexus continues to perform exactly as it should.' },
    { title: 'Honest Estimate Before Every Job', desc: 'Lexus repairs can range widely in cost. We explain what we found and all your options before any work begins — you decide what makes sense.' }
  ],
  'Acura': [
    { title: 'Honda & Acura Expertise', desc: 'Acura is Honda\'s performance division, sharing engines, transmissions, and platforms. Our deep Honda knowledge applies directly to Acura vehicles — there\'s no learning curve.' },
    { title: 'Honda/Acura-Spec Fluids', desc: 'Acura transmissions require Honda/Acura DW-1 ATF. Using generic fluid causes shift quality issues. We use the correct specification every time.' },
    { title: 'Same-Day Service', desc: 'Most Acura repairs — clutch, brakes, drivetrain service — are completed same-day. We work efficiently and keep you informed throughout.' },
    { title: 'Dealer Expertise, Not Dealer Pricing', desc: 'Acura dealer labor rates are substantially higher than ours. Same knowledge, significantly lower cost — that\'s why Acura owners keep coming back.' }
  ],
  'Infiniti': [
    { title: 'Nissan & Infiniti System Knowledge', desc: 'Infiniti shares Nissan\'s engineering platform, which means our extensive Nissan experience applies directly. VQ V6 engines, VK V8s, and Infiniti\'s AWD systems are territory we know well.' },
    { title: 'Correct Fluids for Infiniti Systems', desc: 'Infiniti drivetrains require specific fluid specifications. We follow manufacturer specs to keep your AWD system and transmission performing correctly.' },
    { title: 'Proactive Care for Luxury Vehicles', desc: 'Infiniti owners tend to keep their vehicles for the long haul. We help you stay ahead of maintenance to protect your investment over time.' },
    { title: 'Lower Cost Than Infiniti Dealer', desc: 'Infiniti dealer labor rates are premium. We provide the same level of diagnosis and repair quality at substantially lower cost without compromise.' }
  ],
  'Ram': [
    { title: 'Ram Truck Specialists', desc: 'Ram 1500, 2500, and 3500 trucks are a core part of our work. Whether you\'re running a Cummins diesel or a Hemi gas engine, we understand what Ram trucks need — especially towing in Utah\'s mountains.' },
    { title: 'Tow-Duty Service Specs', desc: 'Ram\'s standard service intervals assume light-duty use. Utah towing conditions require shorter transmission fluid, differential, and oil change intervals. We advise based on how you actually use your truck.' },
    { title: 'Same-Day When Possible', desc: 'Most Ram services and many repairs are completed the same day. Larger drivetrain jobs are scheduled promptly with honest timelines.' },
    { title: 'Straight Talk', desc: 'Ram trucks have well-known common issues. We diagnose before recommending — Hemi tick, MDS failures, exhaust manifold bolts — you\'ll know exactly what\'s wrong before we quote.' }
  ],
  'GMC': [
    { title: 'GM Truck Specialists', desc: 'Sierra, Yukon, Canyon, Terrain — GMC trucks and SUVs are built on the same GM platform we service daily. AFM lifters, timing chains, and 8-speed transmission service are routine work for us.' },
    { title: 'GM-Spec Fluids & Parts', desc: 'We use Dexos-approved oils, GM-specification ATF, and quality parts. The right fluids matter especially on AFM-equipped engines that put extra stress on oil.' },
    { title: 'Efficient Turnaround', desc: 'Most GMC repairs are completed same-day. For major drivetrain jobs, we give you an honest timeline upfront so you can plan.' },
    { title: 'No Dealer Markup', desc: 'Same GM knowledge at significantly lower rates. We don\'t add dealer overhead to your repair bill.' }
  ],
  'Buick': [
    { title: 'GM Luxury Vehicle Experience', desc: 'Buick vehicles share GM engineering with Chevrolet and GMC, but with luxury features that deserve careful handling. We\'re experienced with both the comfort systems and the GM drivetrain underneath.' },
    { title: 'GM-Spec Fluids & Quality Parts', desc: 'Dexos oil, GM-spec coolant, and quality parts — we use the correct specifications for Buick\'s GM-based powertrains every time.' },
    { title: 'Same-Day Service Focus', desc: 'Most Buick repairs — brakes, suspension, drivetrain service — are completed the same day you come in.' },
    { title: 'Honest, Comfortable Experience', desc: 'We explain repairs clearly in plain language. No technical jargon, no pressure. You approve everything before we start any work.' }
  ],
  'Cadillac': [
    { title: 'GM Performance & Luxury Knowledge', desc: 'Cadillac\'s Northstar history, LT/LY engines, Magnetic Ride suspension, and AWD systems require specific expertise. We have real experience with Cadillac beyond basic oil changes.' },
    { title: 'OEM-Quality Parts & Fluids', desc: 'Cadillac\'s modern V8 engines and transmissions need specific oil and coolant specifications. We use quality parts that meet Cadillac\'s engineering requirements.' },
    { title: 'Proactive Maintenance', desc: 'Cadillac vehicles reward careful maintenance. We help you stay ahead of known failure points so your vehicle continues performing at its best.' },
    { title: 'Premium Service, Not Premium Prices', desc: 'Cadillac dealer labor rates are substantial. Our pricing is significantly lower without compromising the quality of work or parts used.' }
  ],
  'Chrysler': [
    { title: 'Chrysler & Dodge Platform Experience', desc: 'Chrysler vehicles share engineering with Dodge — Hemi engines, ZF transmissions, and Chrysler\'s electrical architecture. We service Chrysler products with the same expertise as our Dodge work.' },
    { title: 'Correct Chrysler Fluids', desc: 'ATF+4 for Chrysler transmissions, the correct engine oil weight for Pentastar and Hemi engines — we use what\'s specified, not generic alternatives that cause problems.' },
    { title: 'Same-Day Most Repairs', desc: 'Brake work, suspension, clutch service — most Chrysler repairs are completed the day you bring your vehicle in.' },
    { title: 'No Surprises', desc: 'We quote before we start. Every estimate explains what we found and what it costs — nothing begins without your approval.' }
  ],
  'Lincoln': [
    { title: 'Ford & Lincoln Platform Expertise', desc: 'Lincoln vehicles are built on Ford platforms — EcoBoost engines, ZF transmissions, and Lincoln\'s air suspension systems are territory we know from our extensive Ford work.' },
    { title: 'OEM-Quality Fluids & Parts', desc: 'We use Ford-spec fluids and quality parts that meet Lincoln\'s engineering requirements. Your Lincoln gets the same care whether it\'s 3 years old or 15.' },
    { title: 'Proactive Luxury Maintenance', desc: 'Lincoln owners tend to keep their vehicles long-term. We help you stay ahead of maintenance so your vehicle continues to perform the way it should.' },
    { title: 'Lower Cost Than Lincoln Dealer', desc: 'Lincoln dealer labor rates are premium. We provide the same level of diagnosis and repair quality at substantially lower rates.' }
  ],
  'Volvo': [
    { title: 'Volvo System Experience', desc: 'Volvo\'s turbocharged engines, transfer cases, and active safety systems are specialist territory. We\'re experienced with Volvo-specific repairs beyond what general shops handle.' },
    { title: 'Volvo-Spec Fluids & Parts', desc: 'Volvo requires specific oil approvals and genuine-spec fluids. We use the correct specifications for Volvo\'s unique engine and drivetrain requirements.' },
    { title: 'Same-Day Focus', desc: 'Most Volvo services — timing belts, clutch work, suspension — are completed the same day you drop off your vehicle.' },
    { title: 'Dealer Expertise, Not Dealer Rates', desc: 'Volvo dealer labor in Salt Lake runs premium. We provide the same diagnostic capability and parts quality at significantly lower cost.' }
  ],
  'Land Rover': [
    { title: 'Land Rover Off-Road Expertise', desc: 'Range Rovers and Discoverys see real Utah backcountry use. We understand Land Rover\'s air suspension, transfer case, and drivetrain systems that take the most stress.' },
    { title: 'OEM-Quality Fluids & Parts', desc: 'Land Rover systems require specific fluids and quality parts. We follow manufacturer specifications to keep complex systems performing correctly.' },
    { title: 'Proactive Maintenance', desc: 'Land Rovers reward careful maintenance. Air suspension, cooling systems, and electronics need attention — we help you stay ahead of known failure points.' },
    { title: 'Lower Cost Than Land Rover Dealer', desc: 'Land Rover dealer labor rates are among the highest in the market. Our pricing is significantly lower for the same level of expertise and parts quality.' }
  ],
  'Porsche': [
    { title: 'Porsche & Performance Engine Experience', desc: 'Porsche\'s flat-six and V8 engines, PDK transmissions, and AWD systems are precision-engineered. We have specific experience with Porsche beyond basic oil service.' },
    { title: 'Porsche-Approved Specifications', desc: 'Porsche requires specific oil viscosities and quality parts. We use the correct specifications — Porsche engines are unforgiving of shortcuts.' },
    { title: 'Expert Diagnosis First', desc: 'Porsche repairs can be complex and expensive. We diagnose thoroughly before recommending anything, so you understand exactly what\'s needed and why.' },
    { title: 'Lower Than Dealer, Same Quality', desc: 'Porsche dealer labor in Salt Lake City runs $200+/hour. Our rates are substantially lower without compromising the precision Porsche requires.' }
  ],
  'MINI': [
    { title: 'MINI & BMW Group Experience', desc: 'MINI vehicles share BMW engineering for their engines and drivetrains. Our BMW-compatible knowledge applies directly to MINI Cooper, Countryman, and Clubman service.' },
    { title: 'Correct MINI/BMW Fluids', desc: 'MINI engines use BMW-compatible oil specifications. We stock LL-01 approved oil and the correct coolant and brake fluid for MINI systems.' },
    { title: 'Same-Day Most Repairs', desc: 'Most MINI services — clutch work, cooling, brake service — are completed the same day you bring your car in.' },
    { title: 'Independent Pricing', desc: 'MINI/BMW dealer rates are premium. We offer the same quality and diagnostic capability at significantly lower cost.' }
  ],
  'Mitsubishi': [
    { title: 'Mitsubishi AWD & Drivetrain Knowledge', desc: 'Mitsubishi\'s all-wheel-drive systems have specific maintenance needs. We\'re experienced with the differentials, transfer cases, and clutch systems that define Mitsubishi drivetrains.' },
    { title: 'Correct Mitsubishi Fluids', desc: 'Mitsubishi AWD differentials require specific fluid specifications. Using generic substitutes causes the binding and wear that comes with improper service.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Mitsubishi repairs — brakes, suspension, drivetrain service — are completed same-day without unnecessary delay.' },
    { title: 'Straight Talk Pricing', desc: 'We quote before we start. No surprises, no upselling — you approve everything before we begin.' }
  ],
  'Fiat': [
    { title: 'Italian Import Experience', desc: 'Fiat 500 and 500X models have unique drivetrain and engine characteristics that benefit from experience. We\'re familiar with Fiat\'s turbocharged engines and the common issues they develop.' },
    { title: 'European-Spec Parts & Fluids', desc: 'Fiat\'s engines have specific oil and coolant requirements. We use the correct specifications rather than generic alternatives that can cause problems.' },
    { title: 'Same-Day Focus', desc: 'Most Fiat repairs are completed the same day you come in. We work efficiently and communicate clearly throughout.' },
    { title: 'Honest, Upfront Estimates', desc: 'We diagnose before recommending. Fiat repairs range widely in cost — you\'ll know exactly what\'s needed before we start.' }
  ],
  'Jaguar': [
    { title: 'Jaguar & European Import Experience', desc: 'Jaguar\'s supercharged V8s, turbocharged four-cylinders, and complex electronic systems require specialist knowledge. We\'re experienced with Jaguar drivetrains beyond what general shops handle.' },
    { title: 'OEM-Quality Parts & Fluids', desc: 'Jaguar engines require specific oil approvals and quality parts. We use the correct specifications so your Jaguar performs as its engineering intended.' },
    { title: 'Proactive Luxury Maintenance', desc: 'Jaguars reward proactive care. We help you stay ahead of cooling, oil system, and drivetrain maintenance before issues become expensive.' },
    { title: 'Lower Cost Than Jaguar Dealer', desc: 'Jaguar dealer labor rates are among the highest in the valley. We provide the same expertise and parts quality at significantly lower cost.' }
  ],
  'Suzuki': [
    { title: 'Suzuki Service Experience', desc: 'Keeping a Suzuki on the road means finding a shop that actually knows the vehicle. We\'re experienced with the drivetrains, engines, and quirks of Suzuki models that dealerships no longer support.' },
    { title: 'Quality Parts Sourcing', desc: 'We source quality parts for Suzuki vehicles even when OEM supply is limited. Your Suzuki gets what it needs to stay on the road reliably.' },
    { title: 'Same-Day When Possible', desc: 'Most Suzuki repairs are completed the same day. We work efficiently to minimize your time without your vehicle.' },
    { title: 'Honest Diagnosis', desc: 'We tell you exactly what we found. Older Suzuki vehicles often have multiple items that need attention — we prioritize what matters now versus what can wait.' }
  ],
  'Isuzu': [
    { title: 'Isuzu Truck & SUV Experience', desc: 'Isuzu trucks and SUVs are off the dealership radar but still on Utah roads. We have experience with Trooper, Rodeo, and Axiom drivetrains, including both diesel and gasoline engines.' },
    { title: 'Parts Sourcing for Discontinued Vehicles', desc: 'Finding quality parts for Isuzu vehicles takes effort. We source them reliably so your vehicle gets what it needs without unnecessary delays.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Isuzu repairs are completed the same day. Specialized parts are sourced quickly and efficiently.' },
    { title: 'Honest Recommendations', desc: 'We tell you what\'s worth fixing and what isn\'t. We\'re straightforward when repair costs approach what a vehicle is worth.' }
  ],
  'Saab': [
    { title: 'Saab Specialty Service', desc: 'Saab vehicles are unique — turbocharged, front-wheel-drive, with GM-era drivetrains in later models. We\'re experienced with Saab\'s distinct engineering and the common failure points that come with age.' },
    { title: 'Parts Knowledge for Discontinued Brands', desc: 'Saab parts require knowing where to source them reliably. We have established channels for both OEM and quality aftermarket Saab components.' },
    { title: 'Same-Day Focus', desc: 'Most Saab repairs are completed same-day when parts are available. We\'re efficient and communicate clearly about timing.' },
    { title: 'Honest About What\'s Worth Fixing', desc: 'Older Saabs can have expensive repair needs relative to their value. We give you an honest assessment of what makes sense to address.' }
  ],
  'Saturn': [
    { title: 'Saturn & GM Platform Experience', desc: 'Saturn vehicles use GM engineering — Vue, Aura, and Sky share platforms with Pontiac and Chevrolet. Our GM expertise applies directly to Saturn service and repair.' },
    { title: 'GM-Spec Fluids & Parts', desc: 'Saturn\'s GM-based engines and transmissions use Dexos-approved oil and GM-spec fluids. We use the correct specifications every time.' },
    { title: 'Same-Day Service', desc: 'Most Saturn repairs — brakes, suspension, drivetrain — are completed the same day without unnecessary wait.' },
    { title: 'Straightforward Pricing', desc: 'We quote before we start. Older Saturns are worth maintaining — we help you do that affordably and without surprises.' }
  ],
  'Pontiac': [
    { title: 'Pontiac & GM Platform Knowledge', desc: 'Pontiac vehicles share GM engineering — G6, Vibe, and Grand Prix use the same drivetrains and platforms as Chevrolet and Buick. Our GM experience covers your Pontiac completely.' },
    { title: 'GM-Spec Fluids & Parts', desc: 'Dexos oil, GM-spec transmission fluid, quality parts — we use the correct specifications for GM-based Pontiac powertrains every time.' },
    { title: 'Same-Day Service Focus', desc: 'Most Pontiac repairs are completed same-day. We work efficiently and keep you informed throughout the repair.' },
    { title: 'Honest Assessment', desc: 'We tell you what\'s worth fixing. Older Pontiacs are often very fixable — we help you maintain them cost-effectively.' }
  ],
  'Mercury': [
    { title: 'Ford & Mercury Platform Experience', desc: 'Mercury vehicles are built on Ford platforms. Villager, Grand Marquis, Mariner — our extensive Ford experience covers every Mercury drivetrain and engine.' },
    { title: 'Ford-Spec Fluids & Parts', desc: 'Mercury uses Ford engine oil, transmission fluid, and parts specifications. We use the correct grade and spec for every application.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Mercury repairs are completed same-day when parts are available. We work efficiently to get you back on the road.' },
    { title: 'Honest, Upfront Service', desc: 'We diagnose, quote, and wait for your approval. No surprises before or during any repair.' }
  ],
  'Plymouth': [
    { title: 'Chrysler & Plymouth Drivetrain Experience', desc: 'Plymouth vehicles share Chrysler and Dodge engineering. Neon, Grand Voyager, Breeze — our Chrysler expertise covers Plymouth platforms directly.' },
    { title: 'Correct Chrysler-Spec Fluids', desc: 'ATF+4 transmission fluid, correct engine oil grades — we follow Chrysler\'s specifications for Plymouth\'s shared powertrains.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Plymouth repairs are completed same-day. We\'re efficient with both common and rare parts sourcing.' },
    { title: 'Honest, Straightforward Service', desc: 'We diagnose before recommending. Older Plymouths often have straightforward repair needs — we explain what we found and what it costs.' }
  ],
  'Hummer': [
    { title: 'GM Off-Road & Truck Expertise', desc: 'Hummer H1, H2, and H3 are serious off-road vehicles built on GM truck platforms. We understand their robust drivetrains, transfer cases, and the specific demands that come with off-road use in Utah.' },
    { title: 'GM-Spec Fluids for Heavy Use', desc: 'Hummer differentials, transfer cases, and engines require specific fluid specifications — especially for vehicles used off-road. We use the correct specs for how your Hummer is actually driven.' },
    { title: 'Capable of Heavy Repairs', desc: 'Hummers need serious shops. We handle drivetrain, suspension, and engine work that requires proper equipment, experience, and patience.' },
    { title: 'Straight Advice', desc: 'We tell you exactly what we found. Hummer ownership involves real maintenance costs — we\'re honest about what\'s needed and what it\'ll cost.' }
  ],
  'Scion': [
    { title: 'Toyota & Scion Platform Expertise', desc: 'Scion vehicles are built on Toyota platforms — tC, xB, FR-S all use Toyota engineering. Our extensive Toyota experience covers every Scion drivetrain completely.' },
    { title: 'Toyota-Spec Fluids & Parts', desc: 'Scion uses Toyota oil grades, coolant, and parts specifications. We use the correct specs for Toyota\'s engineering standards every time.' },
    { title: 'Same-Day Most Repairs', desc: 'Most Scion repairs — clutch work, brakes, suspension — are completed same-day. The FR-S/BRZ is especially common for clutch and exhaust work.' },
    { title: 'Straightforward Pricing', desc: 'We quote before we start. Scion owners know what their vehicles cost to maintain — we work to meet those expectations without surprises.' }
  ],
  'Smart': [
    { title: 'Smart & Mercedes Engineering Experience', desc: 'Smart vehicles are built on Mercedes-Benz platforms and use Mercedes-derived drivetrains. Their unique automated manual transmissions and turbocharged engines need specialist knowledge.' },
    { title: 'European-Spec Fluids & Parts', desc: 'Smart cars use Mercedes-compatible oil specifications and specific transmission fluid for their automated gearbox. We use the correct specs every time.' },
    { title: 'Same-Day Focus', desc: 'Most Smart car repairs are completed the same day. Parts availability is the main variable, and we source efficiently.' },
    { title: 'Honest About Repair Value', desc: 'We give you straightforward advice about repair costs relative to vehicle value. We\'ll tell you honestly what makes sense to fix.' }
  ],
  'GM': [
    { title: 'GM Platform Specialists', desc: 'General Motors vehicles — Chevrolet, GMC, Buick, Cadillac — represent a huge portion of our daily work. We\'re deeply experienced with GM\'s V8 engines, 3.6L V6, and 6-through-10-speed transmissions.' },
    { title: 'GM-Spec Fluids & Parts', desc: 'We use Dexos-approved oil, GM-specification ATF, and quality parts across all GM platforms. The right fluids are especially critical on AFM-equipped engines.' },
    { title: 'Efficient Turnaround', desc: 'Most GM repairs are completed same-day. For larger jobs — AFM deletes, timing chains — we give you an honest timeline upfront.' },
    { title: 'No Dealer Markup', desc: 'GM dealer labor rates are high. We provide the same expertise at significantly lower cost, using the same quality parts without the overhead.' }
  ]
};

function getContent(brandName) {
  const base = brandContent[brandName] || extendedBrandContent[brandName] || defaultContent(brandName);
  if (brandWhyUs[brandName]) {
    base.whyUs = brandWhyUs[brandName];
  }
  return base;
}

module.exports = { getContent };
