#!/usr/bin/env node
// Applies v2 brand content from batch files into vehicleBrandContent.js
// Run from the SLCAUTOSHOP root directory

const fs = require('fs');
const path = require('path');

const TARGET = path.join(__dirname, 'artifacts/slcautoshop/data/vehicleBrandContent.js');

// ─────────────────────────────────────────────────────────────────────────────
// v2 field blocks to insert — each is the raw text to splice in
// ─────────────────────────────────────────────────────────────────────────────

const v2Fields = {

'Honda': `    whatHeading: "Full-Service Honda Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Hondas in South Salt Lake since 1990 — Civics, Accords, CR-Vs, Pilots, Odysseys, and manual-transmission models from every era. Honda's engineering is tightly toleranced, and the platform rewards mechanics who understand it: VTEC timing systems that are oil-pressure dependent, transmissions that require Honda-spec fluid rather than generic alternatives, direct-injection engines that accumulate carbon on intake valves over time, and rear brake systems that wear faster than most owners expect. Every Honda we take in gets a free diagnosis first. You'll know exactly what we found before any work starts.",
    whyIntro: "Honda dealers in the Salt Lake Valley are billing in the range of $150–170 per hour, and the service experience follows the standard chain-dealer model: a service advisor writes up the job, hands it to a technician you don't interact with, and returns a multipoint inspection with a column of items for you to approve. At Scott's, one mechanic diagnoses your Honda and does the repair. Same person throughout. They explain what they found in plain language and recommend only what the car actually needs — not a list of services based on mileage thresholds. Honda manual transmissions and clutch work have been core to what we do since 1990. We've also handled enough Honda AC compressor failures to know the correct way to service the system when one fails — complete flush and replacement, because metal debris travels through the entire AC circuit. We bring that depth of platform knowledge to every Honda we touch.",
    whoContent: {
      heading: "Who to Trust for Honda Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated at the same South Salt Lake location since 1990. We're not affiliated with a chain or a franchise. The mechanic who looks at your Honda is the one who repairs it and explains it to you at pickup — there's no service advisor layer between you and the person doing the work.",
        "Honda has been a significant part of our workload for over three decades — from late-1990s Civics with B-series engines to current CR-Vs with direct injection and turbocharged four-cylinders. Manual transmission clutch jobs, VTEC system service, and Honda-spec fluid work are things we do regularly. When you bring your Honda here, you're working with people who know the platform and give you a straight answer about what it actually needs."
      ]
    },
    whenContent: [
      "Bring your Honda in if you notice a shudder or hesitation under light throttle — on automatics, that's often degraded DW-1 ATF or, on CVT models, fluid that's been in too long. Honda transmissions are more sensitive to fluid condition than most makes, and what starts as a subtle shift quality change gets worse if the fluid isn't addressed. On manual Hondas, a vibration through the pedal or a clutch that grabs differently than it used to usually points to flywheel or clutch pack wear. These are not problems that self-correct, and catching them at the early stage costs less to fix.",
      "Also bring it in if you smell something burning from the engine bay — on VTEC-equipped Hondas, the variable timing solenoid gaskets develop oil leaks that drip onto exhaust components. It's a common and straightforward repair, but the burning smell can become a fire risk if ignored. For Hondas with direct injection, a gradual decline in throttle response, idle smoothness, or fuel economy over 50,000–60,000 miles often means carbon buildup on the intake valves — that's a service Honda dealers rarely mention proactively, but it's the reason the car doesn't feel as crisp as it used to."
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
`,

'Ford': `    whatHeading: "Full-Service Ford Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Fords in South Salt Lake since 1990 — F-150s, Mustangs, Explorers, Rangers, Edges, and everything in between. Ford's lineup spans more ground than most manufacturers: EcoBoost turbocharged engines that demand shorter oil intervals than the factory schedule suggests, modular V8s with known spark plug and exhaust manifold failure patterns, PowerShift dual-clutch transmissions with specific service needs, and trucks that see real use on Utah's canyon grades. We diagnose first and give you a written estimate before any work starts. No guessing, no parts-swapping — just a clear picture of what your Ford actually needs.",
    whyIntro: "Ford dealers in Salt Lake are running at $150–175 per hour, and F-150 service at a dealer often involves a service advisor upsell list that reads like a menu rather than a diagnosis. We do it differently. One mechanic looks at your Ford, finds the actual problem, explains it in plain language, and does the repair. Utah's driving conditions change what Ford truck maintenance looks like — sustained high-load climbing on Parleys Canyon or Big Cottonwood degrades transmission fluid faster than flat-highway driving, and Ford's extended service intervals assume the latter. EcoBoost turbo systems and Ford V8 exhaust manifold stud extraction require hands-on experience; we've dealt with enough seized 5.4L spark plugs and cracked Coyote cam phasers to handle them correctly without making the job bigger than it has to be.",
    whoContent: {
      heading: "Who to Trust for Ford Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated at the same South Salt Lake location since 1990. We're not a franchise. There's no service advisor between you and the mechanic — the person who diagnoses your Ford is the one who repairs it and explains the job at pickup. That's how it's worked here for over three decades.",
        "Ford service has been a consistent part of our workload since the shop opened. We work on the full lineup — EcoBoost four-cylinder and V6 engines, the 5.0L Coyote and older 5.4L Triton V8s, PowerShift dual-clutch transmissions, and 4WD drivetrain service on F-150s and Super Dutys used for real work in Utah terrain. When your Ford comes in, you're working with people who have seen the failure patterns and know how to fix them right."
      ]
    },
    whenContent: [
      "Bring your EcoBoost Ford in if you notice any burning smell at highway speed or after a hard pull up a canyon grade — EcoBoost turbos are oil-cooled, and a slow oil leak onto a hot turbo housing creates a smell before it creates a problem you can see. Also pay attention to any ticking from the exhaust when the engine is cold: on F-150s and Mustangs with modular V8s, that's often a broken exhaust manifold stud, and it gets worse over time. The longer it runs, the more the other studs are loading unevenly. Utah's winters accelerate corrosion on the exposed steel hardware, which makes extraction harder when you finally address it.",
      "If your F-150, Expedition, or Explorer has a light-throttle shudder that feels like rumble strips between about 30–55 mph, bring it in. That's the classic Ford PowerShift dual-clutch shudder or, on later models with 10-speed automatics, torque converter behavior. On manual-transmission Fords, a spongy clutch pedal that's getting worse usually means the hydraulic slave cylinder is failing internally — it won't recover on its own, and a complete failure leaves you unable to disengage the clutch while driving."
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
`,

'Chevrolet': `    whatHeading: "Full-Service Chevrolet Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on Chevrolets in South Salt Lake since 1990 — Silverados, Tahoes, Suburbans, Colorados, Equinoxes, Traverses, Camaros, and the full GM truck lineup. Chevy V8 engines with Active Fuel Management have a well-documented lifter failure pattern that we handle regularly, including full AFM delete and reprogramming. The 8-speed and 10-speed GM automatics develop a torque converter shudder with a specific fluid fix. And Chevy trucks used for towing on Utah's canyon grades need drivetrain fluid service on a shorter schedule than GM's factory intervals account for. Every Chevrolet starts with a free diagnosis — you know what we found before any work begins.",
    whyIntro: "Chevrolet dealers in the Salt Lake area are billing $150–170 per hour, and Silverado service at a dealer often comes with a multipoint inspection list that recommends services based on mileage rather than the condition of your specific truck. At Scott's, one mechanic diagnoses your Chevy and performs the repair — no service advisor layer, no quota for services sold. AFM lifter failure on 5.3L and 6.2L engines is one of the most common major repairs we do, and we approach it correctly: all lifters replaced, AFM system disabled through programming, and the root cause addressed rather than just the symptomatic one. Utah's mountain driving puts harder demands on Chevy truck drivetrains than flat-highway use — transmission fluid, differential fluid, and undercarriage corrosion from road salt all need attention on a schedule that matches how Utah trucks actually get used.",
    whoContent: {
      heading: "Who to Trust for Chevrolet Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're not a chain and we don't have service quotas. The mechanic who diagnoses your Chevrolet is the one who repairs it — same person from inspection through pickup. You'll talk directly to the person who touched your vehicle.",
        "Chevrolet trucks and SUVs have been a big part of our workload for over three decades — including the AFM lifter pattern on 5.3L and 6.2L V8s, torque converter shudder on GM's modern multi-speed automatics, and the service demands of trucks that see real use on Utah's I-15 corridor, Parleys Canyon, and the Wasatch Front. We know the platform and we give you a straight answer about what your Chevy actually needs."
      ]
    },
    whenContent: [
      "Bring your Chevy V8 in if you hear a tick or knock at startup, especially if it comes with a misfire or the check engine light — that's the AFM lifter pattern, and it doesn't improve on its own. The longer collapsed lifters run, the more camshaft lobe wear follows. An early diagnosis keeps the repair to lifters and programming; an ignored one can take the camshaft with it. Also watch your oil consumption: AFM engines that are developing lifter problems often burn oil at a higher rate, and the low oil warning can come up between changes on trucks that used to go the full interval without topping off.",
      "If your Silverado, Tahoe, or Suburban has a light-throttle shudder that feels like driving over a rumble strip between 25 and 55 mph, that's almost certainly the GM torque converter shudder on the 8L90 or 10L90 transmission — and the fix is a fluid flush with the updated GM specification fluid. It's not a transmission wear problem in most cases; it's a fluid chemistry issue with a known solution. Also bring it in after any winter where the truck was regularly driven on salted roads — undercarriage inspection catches deteriorating brake lines and transmission cooler lines before they become a safety issue."
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
`,

'Subaru': `    whatHeading: "Full-Service Subaru Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Subarus in South Salt Lake since 1990 — Outbacks, Foresters, Imprezas, Legacies, Crosstreks, and the full WRX and STI lineup. Subaru's horizontally-opposed boxer engine and Symmetrical AWD are genuinely different platforms that benefit from mechanics who understand them. EJ-series head gasket service, complete timing belt system replacement, boxer-specific cooling system requirements, and the AWD tire matching rule that determines whether the drivetrain wears normally or not — these are not generic repairs. Every Subaru we take in starts with a free diagnosis. You know exactly what we found before any work begins.",
    whyIntro: "Subaru dealers in the Salt Lake Valley bill in the range of $150–170 per hour, and the service department model means you're often talking to an advisor who relays information between you and a technician you never meet. At Scott's, it's simpler: the mechanic who diagnoses your Subaru does the repair and explains it at pickup. Subarus are common in Utah because they're genuinely suited to the terrain — Symmetrical AWD handles Wasatch mountain roads and winter salt effectively — but that use accelerates wear on drivetrain fluids that factory intervals don't account for. We've replaced enough EJ head gaskets to do it correctly, with resurfaced heads and updated multi-layer steel gaskets, rather than the shortcut version that comes back in three years. Timing belt service on boxer engines is a complete job here: belt, water pump, idler and tensioner pulleys, and thermostat — because reopening that access later to fix what was skipped costs more in labor than doing it right the first time.",
    whoContent: {
      heading: "Who to Trust for Subaru Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're not a chain. The mechanic who works on your Subaru is the same person who diagnoses it and explains it when you pick it up. No service advisor layer, no quota for sold services.",
        "Subaru has been a regular part of our workload for decades — the EJ head gasket failure pattern, complete timing belt system service, boxer engine cooling requirements, WRX and STI clutch jobs, and the AWD drivetrain service that Utah's mountain driving demands. If you're driving an Outback from Big Cottonwood Canyon to work on I-15 every day, your drivetrain fluid intervals should reflect that use — and we'll tell you what that actually means for your specific vehicle."
      ]
    },
    whenContent: [
      "Bring your EJ-engine Subaru in if you notice any oily residue along the side of the engine block near the cylinder heads, or if coolant level is dropping without a visible puddle under the car — those are the two classic early-stage head gasket leak presentations. External seeping at the gasket line is repairable before it progresses to coolant in oil or combustion gas in the coolant, but the window isn't unlimited. Utah's temperature swings between winter cold and summer canyon driving cycle the aluminum heads aggressively, and a gasket that's weeping externally in spring can deteriorate significantly over a summer of mountain driving.",
      "If your Subaru has crossed 90,000–100,000 miles and the timing belt hasn't been replaced, bring it in before you drive it further. EJ boxer engines are interference engines — a broken timing belt contacts open valves immediately, and there's no warning before it happens. The water pump on most EJ engines is belt-driven, which means it shares the same service access; skipping it to save money on a timing belt job means potentially paying for that labor access twice within 20,000 miles. We do the complete belt service every time."
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
`,

'Nissan': `    whatHeading: "Full-Service Nissan Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Nissans in South Salt Lake since 1990 — Altimas, Rogues, Pathfinders, Muranos, Sentras, Frontiers, and Maximas across every era. Nissan's CVT transmission is the most important maintenance item on most of the lineup: NS-3 fluid condition is the single biggest factor in whether a Jatco CVT reaches 150,000 miles or fails at 100,000. Beyond the CVT, Nissan timing chain guide wear on QR25DE and VQ35 engines produces a recognizable cold-start rattle that's fixable at the guide stage but serious if ignored. The coolant overflow tanks on older Nissan models crack and cause gradual coolant loss that's easy to miss until the engine runs low. Every Nissan gets a free diagnosis before any work starts.",
    whyIntro: "Nissan dealers in Salt Lake are billing $150–165 per hour, and the CVT service conversation at a dealer often amounts to being told the fluid is 'lifetime fill' and doesn't need service. That recommendation has caused more premature Nissan CVT failures than any other single factor we've seen. NS-3 fluid degrades, and generic 'universal CVT fluid' substitutes are not acceptable replacements — the friction modifier package matters for how the belt and pulleys interact at operating temperature. At Scott's, we do CVT fluid service on a 30,000-mile schedule and use the correct spec fluid every time. We've diagnosed enough cold-start timing chain rattles on QR25DE Altimas and VQ35 Pathfinders to know what a guide-wear sound sounds like versus something more serious. One mechanic diagnoses your Nissan and repairs it — no service advisor, no upsell list.",
    whoContent: {
      heading: "Who to Trust for Nissan Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. The mechanic who diagnoses your Nissan is the one who repairs it and explains the job at pickup. We're not a franchise and we don't have service quotas — if your CVT fluid is still good, we tell you it's still good.",
        "Nissan has been a consistent part of our workload for over three decades — Rogues and Pathfinders are among the most common Utah family vehicles, and Altimas are everywhere on the I-15 corridor. CVT fluid service, timing chain guide replacement on QR25 and VQ35 engines, and cooling system maintenance on vehicles that see Utah's temperature swings are services we do regularly. When your Nissan comes in, you get a straight answer about what it actually needs."
      ]
    },
    whenContent: [
      "Bring your Nissan CVT-equipped vehicle in if you feel any hesitation, jerking, or shuddering during light-throttle acceleration — that's the earliest sign that CVT fluid has degraded or that early CVT wear is developing. It does not self-correct. A fluid change addresses it in many cases if caught at the subtle stage; the same symptom that's ignored for another 20,000 miles can mean a CVT that's worn beyond what fluid service will fix. Nissan's service schedule is not aggressive enough about this — we see premature CVT failures almost exclusively on vehicles where fluid was deferred past 60,000 miles or where non-spec fluid was used.",
      "Bring it in for any cold-start rattle that quiets within 10–20 seconds of the engine running — that's the timing chain guide pattern on QR25DE and VQ35 engines. Oil pressure takes a moment to build at startup, and a worn guide allows chain slap during that window before the tensioner takes up the slack. Catching it at the guide-wear stage is a meaningful repair; ignoring it until the chain has stretched or skipped is a much more involved one. Also check your coolant overflow reservoir periodically — Nissan plastic tanks crack and cause gradual coolant loss that can go unnoticed through several oil changes before an overheat event on a summer canyon road makes it obvious."
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
`,

'BMW': `    whatHeading: "Full-Service BMW Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has worked on BMWs in South Salt Lake since 1990 — 3 Series, 5 Series, X3, X5, and M vehicles across every generation. BMW's engineering is precise and capable, but high-mileage BMWs develop predictable failure patterns that independent specialists see every week: cooling system plastic components that crack and fail, VANOS variable timing rattle on cold starts, oil leaks from valve cover gaskets, oil filter housing gaskets, and oil pan gaskets, and electric water pumps that fail without a belt-driven backup. We use professional BMW diagnostic equipment that accesses the same system data as dealer software. Every BMW starts with a free diagnosis before any work begins.",
    whyIntro: "BMW dealers in the Salt Lake area bill $175–200 per hour — among the highest rates in the Valley. That rate, combined with the dealer service department model where a service advisor manages your job and a technician you never meet performs it, makes independent BMW service a significant financial difference on the predictable high-mileage repairs these vehicles need. Cooling system component replacement — expansion tank, thermostat housing, electric water pump — is one of the most common BMW services we perform, and doing it proactively at 80,000–100,000 miles costs a fraction of what a roadside overheating event costs to recover from. BMW engines overheat quickly when cooling system integrity is lost, and there's no belt-driven water pump backup when the electric unit fails. We use LL-01 approved full synthetic on every BMW oil service and know the specific service procedures for VANOS solenoid service, dual-mass flywheel conversion, and the oil leak points these engines develop predictably with age.",
    whoContent: {
      heading: "Who to Trust for BMW Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated at the same South Salt Lake location since 1990. We're not a chain. The mechanic who diagnoses your BMW is the one who repairs it and explains the job at pickup — no service advisor layer, no markup on top of a markup. We use professional-grade BMW diagnostic tools that access fault code history, live sensor data, and adaptation values — the same information the dealer sees.",
        "BMW has been a regular part of our workload for decades. The cooling system failure pattern, VANOS rattle, oil leak locations, and dual-mass flywheel wear are services we perform regularly on 3 Series, 5 Series, and X-model vehicles. If your BMW has crossed 80,000 miles and cooling system components haven't been proactively replaced, that's the conversation we'll have — because the cost difference between a planned service and an emergency overheating repair on a Utah canyon road in July is significant."
      ]
    },
    whenContent: [
      "Bring your BMW in if you see any coolant warning light, any steam from the hood, or any unexplained coolant loss — BMW engines overheat quickly when cooling system pressure is lost, and the electric water pump provides no backup circulation when a cracked expansion tank or failed pump leaves the system dry. Utah's summers put these cooling systems under real stress: a BMW climbing Big Cottonwood Canyon in 100°F ambient heat with a marginal expansion tank is a roadside event waiting to happen. If your BMW is past 80,000 miles and the cooling system hasn't been proactively serviced, bring it in before summer — not during.",
      "Bring it in for a cold-start rattle that clears within 30 seconds of the engine running — that's typically VANOS or oil pressure-related valve train noise, and it's worth diagnosing before it progresses. Also pay attention to any burning oil smell from the engine bay: BMW oil leaks at valve cover gaskets and oil filter housing gaskets drip onto exhaust components below, and what starts as a smell becomes a more urgent situation if ignored. On manual BMW models, a clutch that vibrates during engagement or a shudder at low-speed takeoff usually means dual-mass flywheel wear — we can convert to a single-mass setup at significantly lower cost than an OEM dual-mass replacement."
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
`,

'Jeep': `    whatHeading: "Full-Service Jeep Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has been working on Jeeps in South Salt Lake since 1990 — from daily-driven Cherokees to Wranglers that see regular use on Moab slickrock and the trails off Big and Little Cottonwood Canyons. We handle everything Jeep owners run into over the life of a rig: 4WD system service and diagnosis, transfer case and differential fluid, death wobble from worn front-end components, Pentastar valve train, axle and CV service, brakes, suspension, cooling, exhaust, and check engine diagnostics. Every Jeep gets a free diagnosis before any work starts — we check what your specific vehicle is telling us, not a checklist built for something else.",
    whyIntro: "Jeep dealers in the Salt Lake area are billing $150–175 per hour, and most of them are handling Wranglers and Gladiators the same way they handle Pacificas — through a service department structure where your rig gets written up by one person, worked on by another, and handed back with a printed inspection and a list of items to approve or decline. At Scott's, you're dealing with one mechanic throughout. The person who crawls under your Jeep and diagnoses the death wobble is the person who rebuilds the front end and hands you the keys. We've been working on lifted rigs, modified Jeeps, and bone-stock daily drivers in South Salt Lake since 1990, and we understand the difference between a Jeep that needs a repair and a Jeep that needs an honest assessment.",
    whoContent: {
      heading: "Who to Trust for Jeep Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're not a franchise, and we don't have a service advisor filtering what gets communicated to the mechanic. If you bring your Wrangler, Cherokee, Gladiator, or Grand Cherokee to us, the mechanic who diagnoses it is the one who repairs it — and the one who explains what was found when you pick it up.",
        "Jeeps have their own personality: 4WD systems that need to be exercised and serviced, front ends that develop play after years of flex and trail abuse, differentials that pick up water in a stream crossing and need to be inspected before the contamination causes damage. We've been working with Jeep owners across the Salt Lake Valley for over three decades — people who drive these vehicles hard and want a straight answer about what they actually need."
      ]
    },
    whenContent: [
      "Death wobble is the Jeep symptom that gets deferred more than almost any other — a shimmy at highway speeds that comes and goes, often worse after hitting a bump or expansion joint on I-15. It's tempting to slow down and work around it, but death wobble is always a worn-component problem: track bar, ball joints, tie rod ends, or wheel bearings are the usual suspects, and the list of candidates grows if the Jeep has been lifted. The longer it goes unaddressed, the more wear propagates to adjacent steering components. Bring it in before a manageable front-end rebuild becomes a much larger job.",
      "Jeep 4WD systems — Command-Trac, Quadra-Trac, Quadra-Drive — need to be serviced at regular intervals, not just when something breaks. Transfer case fluid, front and rear differential fluid, and axle seals that get submerged during a water crossing are all on the list. Differential contamination after a trail run is a common cause of gear damage that announces itself much later, after the Jeep is already back in daily-driver rotation. If your Jeep has been through standing water recently — or if you can't remember when the 4WD fluids were last changed — that's a good reason to bring it in."
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
`,

'Dodge': `    whatHeading: "Full-Service Dodge and Ram Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has been servicing Dodge and Ram vehicles in South Salt Lake since 1990. These are trucks and performance cars with real mechanical personalities — HEMI V8s with the cylinder deactivation system that collapses lifters on high-mileage engines, ZF 8-speed transmissions, Charger and Challenger brakes that take serious heat on Parleys Canyon grades, Durango drivetrains doing real towing on Utah mountain passes, and TIPM electrical systems that develop faults over time. We handle all of it. Free diagnosis on every vehicle before any work starts — no estimate without knowing what we're actually dealing with.",
    whyIntro: "Dodge and Ram dealers in Salt Lake are billing at $150–175 per hour for service work on vehicles that their service departments process in volume. Your HEMI gets written up by a service advisor who may or may not understand what MDS lifter collapse sounds like, handed to a tech on a flat-rate clock, and returned with a multipoint inspection. At Scott's, the mechanic who pulls the diagnostic codes on your Charger or Ram is the same one who drops the pan, checks the lifters, and explains what was found. We're not running a quota system. We're an independent shop that's been doing this work in South Salt Lake since 1990, and we've worked through enough HEMI lifter failures and TIPM electrical gremlins to know how to diagnose them correctly before recommending a repair.",
    whoContent: {
      heading: "Who to Trust for Dodge and Ram Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We work on Dodge Chargers, Challengers, Durangos, and Ram 1500 through 2500 trucks — everything from daily-driver Rams doing I-15 commutes to performance Chargers that see canyon road use and Durangos that tow regularly on mountain grades. One mechanic handles your vehicle from diagnosis through repair.",
        "Dodge and Ram vehicles have specific failure patterns worth knowing: the HEMI's MDS system creates collapsed lifter failures at high mileage that require either individual lifter replacement or a full MDS delete, the ZF 8-speed needs fluid service that most owners skip, and TIPM electrical faults present as intermittent no-start, fan runaway, or fuel pump issues that take real diagnostic work to trace. We know these platforms and can explain what your vehicle actually needs."
      ]
    },
    whenContent: [
      "The HEMI tick is the symptom that Dodge and Ram owners argue about longest before bringing it in. A cold-start knock that's present at idle and then fades — or doesn't — is often an MDS lifter beginning to collapse, not just normal engine noise. On high-mileage HEMI engines (typically past 80,000 miles), the multi-displacement system's lifters are a known failure point. The longer a collapsed lifter runs, the more camshaft lobe damage follows. If your HEMI has been ticking for more than a few weeks, the diagnosis conversation is worth having sooner rather than after you're looking at a much larger repair.",
      "Dodge Charger and Challenger owners doing regular canyon runs between Salt Lake and Park City should be checking their brake pads more often than most street cars. These are heavy performance vehicles — a Charger R/T runs around 4,000 pounds — and Parleys Canyon puts significant thermal load on the braking system. Glazed rotors and heat-fatigued brake fluid are both common results of canyon driving without regular brake inspection. Bring it in at the first sign of fade, longer pedal travel, or any grinding — not after the next canyon run."
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
`,

'Hyundai': `    whatHeading: "Full-Service Hyundai Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has serviced Hyundais in South Salt Lake across the full range of what these vehicles need: GDI carbon cleaning on Theta II engines, dual-clutch transmission actuator diagnosis and service, AWD rear coupling fluid, cooling and brake system work, suspension and CV axle service, and check engine diagnostics including Theta II engine codes that owners often first encounter as unexpected warning lights. Every Hyundai that comes in gets a free diagnosis before any work is recommended — we look at what your specific vehicle is showing before suggesting a repair or a fluid service.",
    whyIntro: "Hyundai dealers in Salt Lake charge in the same tier as Toyota and Honda dealers — $150–165 per hour — and the service department process is similar: a service advisor writes it up, a tech runs the job on a flat-rate ticket, and the car comes back with a printed multipoint inspection. For Hyundai owners dealing with a Theta II recall situation, a DCT that's jerky at low speeds, or a check engine light with a cylinder misfire code, that service model can be expensive and slow. At Scott's, the mechanic who reads your Hyundai's codes and identifies the DCT actuator fault is the same one who does the service — and explains it to you in plain language before any work begins. We don't replace components that a proper diagnosis shows don't need replacing.",
    whoContent: {
      heading: "Who to Trust for Hyundai Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're not a franchise and we don't process vehicles through a service advisor. The mechanic who diagnoses your Sonata, Tucson, Palisade, or Santa Fe is the person who repairs it and hands you the keys — same person, complete accountability.",
        "Hyundai's Theta II 2.0L and 2.4L engines have a well-documented recall history involving connecting rod bearing failure, and many Hyundai owners across the Salt Lake Valley are in various stages of that situation — extended warranties, oil consumption tests, waiting on parts. We know the recall background and the failure pattern, and we can give you a straight answer about where your specific vehicle stands and what your options are."
      ]
    },
    whenContent: [
      "The Theta II engine recall has created an unusual situation for Hyundai owners: connecting rod bearing failure can occur without much warning, and the early signals are easy to dismiss. A knocking sound under load, unexpected oil consumption between changes, a check engine light with a rod knock code — these are the precursors. If your Sonata, Santa Fe, Tucson, or Elantra GT has a Theta II 2.0L or 2.4L and is past 60,000 miles, it's worth having the engine inspected even if you haven't noticed anything yet. The cost of catching it early is a diagnostic visit. The cost of catching it late is an engine.",
      "Hyundai's 7-speed dual-clutch transmission — used in the Elantra, Tucson, and Sonata — develops a jerky, hesitant feel at low speeds and during parking-lot maneuvering as the DCT actuator wears. Many owners assume this is a transmission replacement situation; in most cases it's a DCT actuator service that restores normal shift behavior. If your Hyundai has started to lurch or hesitate at low speeds, bring it in for diagnosis before the repair assumption turns into an unnecessary bill. We'll identify whether it's the actuator, the clutch pack, or something else entirely."
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
`,

'Kia': `    whatHeading: "Full-Service Kia Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has been servicing Kia vehicles in South Salt Lake across the full range of what the lineup needs: Theta II engine diagnosis and inspection on Optima, Sorento, and Sportage, GDI carbon cleaning, steering coupler service, AWD rear differential coupling fluid, brake and suspension work, and Stinger drivetrain service for Utah's performance-oriented buyers. Kia's Utah presence has grown significantly — the Telluride and Sorento are all over the Salt Lake Valley — and we service all of them. Free diagnosis before any work is recommended.",
    whyIntro: "Kia dealers in Salt Lake are billing $150–165 per hour, and the service model is the same one you'll find at any volume dealer: a service advisor writes up your car, a tech runs the job to a flat-rate clock, and the estimate arrives before anyone has actually looked at your specific vehicle's condition. For Kia owners navigating the Theta II engine recall, a steering coupler clunk that comes and goes, or a GDI engine that's starting to hesitate at idle, that system produces a lot of unnecessary repair recommendations. At Scott's, you're working directly with the mechanic who looks at your car. If the Telluride's rear differential coupling just needs a fluid change rather than a replacement, that's what we tell you — and that's all we charge for.",
    whoContent: {
      heading: "Who to Trust for Kia Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We work on the full Kia lineup — Telluride, Sorento, Sportage, Optima, Stinger, and everything else in the range. The mechanic who diagnoses your Kia is the one who repairs it. No service advisors between you and the person doing the work.",
        "The Kia Stinger deserves a separate mention: it's a rear-wheel-drive performance sedan with a turbocharged 2.0L or 3.3L twin-turbo V6, and it attracts a different kind of driver than most Kias. It's also a vehicle that benefits from a shop comfortable with performance platforms, manual and dual-clutch transmission behavior, and turbocharged engine service. We work on Stingers the same way we work on everything else — thorough diagnosis first, repairs only for what's actually needed."
      ]
    },
    whenContent: [
      "If your Kia Optima, Sorento, or Sportage has a Theta II 2.0L or 2.4L engine and is past 60,000 miles — especially if you can't confirm the recall service has been completed — it's worth having the engine inspected. Connecting rod bearing failure on these engines can progress quickly from a light knock under acceleration to catastrophic failure. The early warning sounds like a faint tap when the engine is under load that's different from normal engine noise. Don't wait for a check engine light; rod knock codes often appear after the damage is already underway.",
      "The steering coupler clunk on Kia vehicles — a thud or knock felt through the steering wheel when turning at low speed, most obvious in parking lots or during U-turns — is often misdiagnosed as a suspension issue. The steering coupler is a small intermediate shaft joint between the steering column and rack that develops play over time. It's an inexpensive repair relative to what a suspension inspection costs, but it requires knowing what you're looking for. Bring it in when the clunk first appears rather than after the play in the steering wheel has had time to transfer load to the rack."
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
`,

'Volkswagen': `    whatHeading: "Full-Service Volkswagen Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has been servicing Volkswagens in South Salt Lake since 1990 — Jettas, Golfs, GTIs, Tiguans, Passats, and the rest of the VW lineup. These are German-engineered vehicles with specific requirements: VW-approved oil ratings (502, 504, 507) that aren't interchangeable with generic full synthetic, TSI timing chain tensioners that have a documented failure history when the early revision parts are still in service, DSG dual-clutch transmissions that need fluid and filter service every 40,000 miles regardless of what the owner's manual says, and GDI engines that accumulate carbon on intake valves the way all direct-injection engines do. We handle all of it, free diagnosis first.",
    whyIntro: "VW dealers in Salt Lake are billing $160–185 per hour — comparable to BMW and Audi — for vehicles that are, in many cases, Jetta and Tiguan owners running practical family transportation. The dealer service model applies the same volume-processing approach to a Golf GTI as it does to a Touareg: service advisor, flat-rate tech, multipoint inspection list to approve or decline. At Scott's, you're dealing with a mechanic who understands what a TSI tensioner failure looks like in progress, what the correct VW 507 oil is actually for, and why the 'lifetime' DSG fluid recommendation is one of the more expensive service myths VW has perpetuated. We use VW-spec fluids, we know the platform's specific failure patterns, and we explain what we find before any work begins. Independently owned in South Salt Lake since 1990.",
    whoContent: {
      heading: "Who to Trust for Volkswagen Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. VW owners in Salt Lake tend to be methodical about their vehicles — Jetta and GTI owners who know the difference between VW 504 and 507 oil, Tiguan owners who've read enough forums to know about the DSG fluid situation. We work on those vehicles with the same attention to spec that the platform demands, without dealer overhead.",
        "SLC's VW community is real — GTI and Golf R drivers who know Parleys and Big Cottonwood Canyon, Jetta owners who want their manual transmission clutch done right, Tiguan owners doing the Wasatch Front ski commute all winter. We've been here since 1990 and we know what the platform needs in Utah conditions: road salt winters, altitude-loaded engines on canyon grades, and the kind of stop-and-go that wears a DSG clutch pack faster than highway miles."
      ]
    },
    whenContent: [
      "The TSI timing chain tensioner is the VW repair that can't be deferred once it shows up. Early-revision tensioners in the 1.8T and 2.0T TSI engines — used widely in Jetta, Golf, Tiguan, and Passat — can fail catastrophically when the tensioner loses oil pressure hold and the chain skips. The warning signs are rattling on cold starts (especially in cold Utah mornings), a check engine code for cam timing, or rough running after startup that improves as the engine warms. If your TSI-equipped VW is rattling on cold starts, bring it in immediately. A failed tensioner can destroy the engine before it fully warms up — there is no recovery from a chain jump on these engines.",
      "DSG fluid is the service that VW officially called 'lifetime fill' in the owner's manual, and real-world results have corrected that position. The dual-clutch transmission in Jetta, Golf, and Tiguan develops hesitant, jerky shifts — especially at low speeds and during stop-and-go — when the fluid degrades. At 40,000-mile intervals, a DSG fluid and filter service restores shift quality and prevents accelerated clutch pack wear. If your VW's DSG has never been serviced and has more than 40,000 miles on it, that's the first thing to address before blaming the transmission itself for shift behavior."
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
`,

};

// ─────────────────────────────────────────────────────────────────────────────
// Mazda is in extendedBrandContent — same insertion but different marker
// ─────────────────────────────────────────────────────────────────────────────

const mazdaV2 = `    whatHeading: "Full-Service Mazda Repair Since 1990",
    whatIntro: "Scott's Auto & Clutch Repair has been servicing Mazdas in South Salt Lake since 1990 — from older generations through the current SkyActiv lineup of Mazda3, CX-5, CX-9, and MX-5 Miata. SkyActiv direct-injection engines are among the most reliable platforms built in the last decade, but they do accumulate carbon on intake valves by 50,000 miles in ways that affect idle quality and throttle response. Miata owners with dual-mass flywheel clutch chatter have a better option than they're often told. AWD CX-5 and CX-9 rear differential coupling fluid is a 30,000-mile service that most owners miss. We handle all of it — free diagnosis first, every time.",
    whyIntro: "Mazda dealers in Salt Lake are billing $145–165 per hour for vehicles that are typically owned by people who care about their cars more than average and want the repair done correctly, not just quickly. The Mazda ownership culture — especially among Miata and Mazda3 manual drivers — tends to attract people who notice when a repair is done right and when it isn't. At Scott's, you're working with a mechanic who understands the MX-5's dual-mass flywheel situation well enough to have the honest conversation about whether a solid flywheel conversion makes sense for your specific use. We've been working on Mazdas in South Salt Lake since 1990, and we have a genuine appreciation for what the platform does right — and a clear picture of what the known wear points are.",
    whoContent: {
      heading: "Who to Trust for Mazda Repair in South Salt Lake",
      paras: [
        "Scott's Auto & Clutch Repair has been independently owned and operated in South Salt Lake since 1990. We're a clutch shop at our core — it's in the name, and it's been the heart of the business for over three decades. That matters for Mazda owners because the MX-5 Miata clutch is a platform we know well: the dual-mass flywheel chatters as it wears, and the right repair involves understanding whether a like-for-like replacement or a solid flywheel conversion fits how the car is actually used.",
        "For the rest of the Mazda lineup — CX-5, CX-9, Mazda3, Mazda6, CX-30 — we handle the full range of service and repair. SkyActiv engines are legitimately durable at 200,000 miles and beyond with proper maintenance, and the biggest maintenance items most owners miss are the intake carbon cleaning at 50,000 miles and the AWD coupling fluid at 30,000. We check both on any SkyActiv-equipped Mazda that comes through the shop."
      ]
    },
    whenContent: [
      "MX-5 Miata clutch chatter is a distinctive symptom: a shuddering vibration when releasing the clutch from a stop, especially noticeable in first gear, that tends to come and go or get worse over time. The dual-mass flywheel that came factory in NC and ND Miatas is designed to smooth out drivetrain vibration, but as the flywheel's internal damper wears, it begins to transmit torque inconsistently through the engagement zone. The stock repair is a like-for-like flywheel replacement, which solves the problem temporarily. A solid flywheel conversion is another option — it eliminates the dual-mass design entirely at the cost of a slightly harsher engagement feel, and it's the right choice for Miatas used at track days or driven enthusiastically on mountain roads. Bring it in when the chatter starts, before the worn flywheel begins to affect clutch disc wear as well.",
      "CX-5 and CX-9 AWD rear differential coupling fluid is a service that Mazda's official maintenance schedule treats inconsistently — it's easy to miss, and most owners have no idea it exists until the AWD system starts to feel hesitant or the coupling overheats under sustained use on mountain grades. The fluid degrades over 30,000 miles and loses its thermal stability. For Utah CX-5 and CX-9 owners who use the AWD system regularly — ski season on the Wasatch Front, summer trips up Big Cottonwood or American Fork Canyon — this is a service that should be on the calendar. A SkyActiv intake carbon cleaning belongs on the same schedule, as carbon accumulation past 50,000 miles affects idle, cold-start quality, and fuel economy in ways that get worse gradually enough to go unnoticed until the cleaning reveals what was lost."
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
`;

// ─────────────────────────────────────────────────────────────────────────────
// Apply all insertions
// ─────────────────────────────────────────────────────────────────────────────

let content = fs.readFileSync(TARGET, 'utf8');
let modified = content;

// Insert v2 fields into main brandContent brands (insert after opening { before 'intro:')
for (const [brand, fields] of Object.entries(v2Fields)) {
  const marker = `  '${brand}': {\n    intro:`;
  if (!modified.includes(marker)) {
    console.warn(`WARNING: marker not found for ${brand}`);
    continue;
  }
  modified = modified.replace(marker, `  '${brand}': {\n${fields}    intro:`);
  console.log(`✓ Applied v2 fields to ${brand}`);
}

// Insert v2 fields into extendedBrandContent Mazda (insert before 'issues:')
const mazdaMarker = `  'Mazda': {\n    issues:`;
if (modified.includes(mazdaMarker)) {
  modified = modified.replace(mazdaMarker, `  'Mazda': {\n${mazdaV2}    issues:`);
  console.log('✓ Applied v2 fields to Mazda');
} else {
  console.warn('WARNING: Mazda marker not found');
}

fs.writeFileSync(TARGET, modified, 'utf8');
console.log('\nDone. vehicleBrandContent.js updated.');
