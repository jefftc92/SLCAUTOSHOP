// Page-specific FAQs for all page types
// Format: { q: 'question', a: 'answer' }

// ─── Service FAQs (fallback for services without inline faq[]) ───────────────
const serviceFaqs = {
  'timing-chain-repair-near-south-salt-lake-ut': [
    {q:'How much does timing chain replacement cost?',a:'Timing chain replacement typically ranges from $800–$2,500 depending on the engine. V6 and V8 engines with dual chains cost more due to additional labor. We provide a detailed quote before any work begins.'},
    {q:'What happens if I ignore a stretched timing chain?',a:'A stretched timing chain causes poor engine timing, rough idle, and reduced power. If the chain skips or breaks in an interference engine, it can bend valves and destroy the engine, turning a $1,500 repair into a $5,000+ engine replacement.'},
    {q:'How long does timing chain replacement take?',a:'Most timing chain jobs take 6–10 hours depending on the engine. Some vehicles like the GM 3.6L V6 require partial engine removal. We typically complete the job within 1–2 business days.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'},
    {q:'Do you offer towing if my vehicle can\'t be driven?',a:'Yes. If your repair totals over $1,000, we cover the tow to our shop. You shouldn\'t have to pay to get your car here on top of dealing with the breakdown. Call us and we\'ll arrange it.'}
  ],
  'water-pump-replacement-near-south-salt-lake-ut': [
    {q:'How do I know if my water pump is failing?',a:'Common signs include coolant leaking from the front of the engine, a whining or grinding noise from the pump pulley, engine overheating, and steam from the radiator. Any of these warrant immediate inspection.'},
    {q:'Should I replace the timing belt with the water pump?',a:'If your engine uses a timing belt and the water pump is driven by it, absolutely, they share the same labor. Replacing both together saves $300–$500 in repeated labor costs. We always recommend this when applicable.'},
    {q:'How much does water pump replacement cost?',a:'Water pump replacement typically costs $400–$900 including parts and labor. Engines where the water pump is driven by the timing belt or chain cost more due to additional disassembly. We quote before we start.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'}
  ],
  'exhaust-repair-near-south-salt-lake-ut': [
    {q:'Can you weld my exhaust instead of replacing it?',a:'Often yes. If the pipe or muffler has a small crack or hole, welding is a cost-effective repair. However, if the metal is rusted thin throughout, replacement is more reliable. We assess and recommend the most economical option that will actually last.'},
    {q:'Why is my exhaust so loud suddenly?',a:'A sudden increase in exhaust volume usually means a hole, crack, or disconnected section in the exhaust system. Utah road salt accelerates rust, and thermal cycling from our temperature extremes causes fatigue cracks. We find and fix the exact location.'},
    {q:'Will a bad exhaust system cause me to fail emissions?',a:'Yes. Exhaust leaks before the catalytic converter allow unmetered air into the system, triggering error codes and causing emission test failures. We repair the leak and verify the system passes before returning your vehicle.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'}
  ],
  'catalytic-converter-service-near-south-salt-lake-ut': [
    {q:'Why are catalytic converters so expensive?',a:'Catalytic converters contain precious metals, platinum, palladium, and rhodium, that cost hundreds of dollars per ounce. The converter itself is the most expensive exhaust component. We source quality converters and always diagnose the root cause before recommending replacement.'},
    {q:'Can my catalytic converter be repaired instead of replaced?',a:'In rare cases, yes. If the converter substrate is intact but an upstream issue caused the failure, a bad oxygen sensor, misfiring engine, fixing the root cause and clearing codes may resolve it. We always find the cause first.'},
    {q:'How do I protect my catalytic converter from theft?',a:'We install catalytic converter anti-theft shields and cages. These bolt-on guards make cutting the converter extremely difficult and time-consuming, deterring thieves. Toyota Tacoma, Prius, and Honda Element are the most targeted vehicles in Utah.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'},
    {q:'Do you offer towing if my vehicle can\'t be driven?',a:'Yes. If your repair totals over $1,000, we cover the tow to our shop. You shouldn\'t have to pay to get your car here on top of dealing with the breakdown. Call us and we\'ll arrange it.'}
  ],
  'strut-replacement-near-south-salt-lake-ut': [
    {q:'How do I know if my struts are worn out?',a:'Signs include excessive bouncing after bumps, nose-diving when braking, body roll in corners, uneven tire wear, and clunking noises over rough pavement. If your vehicle has over 80,000 miles, struts are worth inspecting even without obvious symptoms.'},
    {q:'Do I need an alignment after strut replacement?',a:'Yes, always. Replacing struts changes the suspension geometry. We include an alignment check with every strut replacement job to ensure proper tire wear and predictable handling.'},
    {q:'What is the difference between struts and shocks?',a:'Struts are a structural part of the suspension, they support the vehicle weight and include the coil spring. Shocks only dampen movement and are not structural. Most modern cars use struts in front and either struts or shocks in the rear.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'},
    {q:'Do you offer towing if my vehicle can\'t be driven?',a:'Yes. If your repair totals over $1,000, we cover the tow to our shop. You shouldn\'t have to pay to get your car here on top of dealing with the breakdown. Call us and we\'ll arrange it.'}
  ],
  'timing-belt-replacement-near-south-salt-lake-ut': [
    {q:'When should I replace my timing belt?',a:'Most manufacturers recommend replacement between 60,000–105,000 miles depending on the engine. Check your owner\'s manual for the exact interval. Do not wait until it breaks, on interference engines, a broken belt can destroy the engine instantly.'},
    {q:'What else should be replaced with the timing belt?',a:'We recommend replacing the tensioner, idler pulleys, and water pump at the same time. These components have the same service life and are already exposed during the job. Doing them together saves $300–$500 in future labor.'},
    {q:'How much does timing belt replacement cost?',a:'Timing belt replacement typically costs $500–$1,200 including the belt, tensioner, pulleys, and labor. Adding the water pump is an additional $150–$300 in parts. We provide a complete quote before starting.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'},
    {q:'Do you offer towing if my vehicle can\'t be driven?',a:'Yes. If your repair totals over $1,000, we cover the tow to our shop. You shouldn\'t have to pay to get your car here on top of dealing with the breakdown. Call us and we\'ll arrange it.'}
  ],
  'welding-services-near-south-salt-lake-ut': [
    {q:'What types of automotive welding do you offer?',a:'We perform MIG and stick welding for exhaust system repair, frame patching, suspension bracket fabrication, exhaust manifold repair, and custom fabrication. If it\'s metal on a vehicle, we can likely weld it.'},
    {q:'Can you weld a cracked exhaust manifold?',a:'In many cases, yes. Cast iron manifolds can be welded if the crack is accessible and the metal is thick enough. Some cracks in thin areas or on complex castings are better addressed with replacement. We assess each situation honestly.'},
    {q:'Is welding a permanent fix?',a:'A proper weld on good metal is as strong as or stronger than the original. However, if the surrounding metal is rusted thin, a weld patch is a temporary fix. We\'ll tell you honestly whether welding or replacement is the better long-term solution.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'}
  ],
  'shock-replacement-near-south-salt-lake-ut': [
    {q:'How long do shocks last?',a:'Most shocks last 50,000–100,000 miles depending on driving conditions. Utah\'s rough roads, potholes, and mountain driving wear shocks faster than average. If your vehicle bounces excessively or feels floaty, they\'re likely worn.'},
    {q:'Can I replace just the rear shocks?',a:'Yes, but we recommend replacing in pairs, both rears or both fronts. Mixing old and new shocks creates uneven handling. If all four are due for replacement, doing them together is most cost-effective.'},
    {q:'Do shocks affect braking distance?',a:'Yes. Worn shocks allow excessive weight transfer during braking, which increases stopping distance by 10–20%. This is especially dangerous on Utah\'s mountain descents and wet roads. Good shocks are a safety item, not just a comfort one.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'}
  ],
  'complete-auto-service-near-south-salt-lake-ut': [
    {q:'What does a full vehicle inspection include?',a:'Our complete inspection covers engine, transmission, brakes, suspension, exhaust, cooling system, belts, hoses, fluids, tires, lights, and battery. We provide a written report with any issues found, prioritized by urgency.'},
    {q:'Do I have to go to the dealer for maintenance to keep my warranty?',a:'No. Federal law (Magnuson-Moss Warranty Act) protects your right to have maintenance performed at any qualified shop without voiding your warranty. Keep your receipts, we provide detailed invoices for your records.'},
    {q:'How often should I have my vehicle serviced?',a:'We recommend oil changes every 5,000–7,500 miles, brake inspections every 15,000 miles, and a comprehensive inspection annually. Utah\'s mountain driving, temperature extremes, and road salt mean shorter intervals than factory normal schedules suggest.'},
    {q:'Is there a warranty on the repair?',a:'Yes. Every repair we perform is backed by a 2-year parts and labor warranty. If something we fixed gives you trouble within two years, bring it back and we make it right at no charge.'},
    {q:'How does your pricing compare to dealers and chain shops?',a:'Our labor rates and parts pricing are consistently below dealer rates, typically 20–40% less for the same repair. We use quality parts and back every job with a 2-year parts and labor warranty. You get a written estimate before any work starts so there are no surprises.'}
  ]
};

// ─── Symptom FAQs, unique set for every symptom ────────────────────────────
const symptomFaqs = {
  'clutch-slipping': [
    {q:'How much does clutch replacement cost?',a:'Clutch replacement typically runs $800–$1,800 depending on your vehicle. If the flywheel needs resurfacing or replacement, add $200–$400. Diagnosis is free, and you get a written estimate before any work begins.'},
    {q:'How long does a new clutch last?',a:'A properly installed clutch lasts 60,000 to 100,000 miles under normal driving. Utah\'s mountain grades and stop-and-go traffic shorten that, so drivers commuting through the canyons or up onto the benches often see 50,000 to 70,000 miles. Towing and frequent hard launches shorten clutch life further.'},
    {q:'Should I replace the flywheel when I replace the clutch?',a:'Only if it needs it. We measure flywheel runout and check the surface for glazing or heat damage. If it\'s within spec, the clutch kit alone is the complete repair. If it\'s damaged from extended slipping, installing a new disc on it leads to repeat slipping within a few months.'},
    {q:'Can I make my clutch last longer?',a:'Yes. Avoid riding the clutch in traffic or on hills, since partial engagement generates heat that wears the disc faster. Hold the car on a grade with the brake, not the clutch. Shift to second earlier on steep onramps to reduce peak load on the disc. These habits add tens of thousands of miles to clutch life.'}
  ],
  'grinding-when-shifting': [
    {q:'How much does grinding gear repair cost?',a:'If the cause is hydraulic (fluid, master or slave cylinder), repairs typically run $200–$600. If the clutch disc needs replacement, expect $800–$1,800. If synchronizer damage has progressed to a full transmission rebuild, costs can reach $2,000–$4,000+. Diagnosing early is the best way to stay on the cheaper end. Diagnosis is always free.'},
    {q:'How long do synchronizers typically last?',a:'Synchronizer rings are designed to last the life of the vehicle when treated correctly. Aggressive or quick shifting wears them faster, and grinding from a poorly-releasing clutch wears them faster still. On gearboxes that have been driven gently with healthy clutch hydraulics, original synchronizers commonly last past 200,000 miles. On a forced gearbox, they can fail by 80,000.'},
    {q:'Can I make my synchronizers last longer once they\'re wearing?',a:'Yes. Slow your shifts a bit and pause briefly with the clutch fully pressed before engaging the next gear. That gives the input shaft time to slow down, which reduces the load on the synchronizer rings. Avoid downshifting into low gears at high RPM. These habits won\'t reverse wear, but they slow it noticeably.'},
    {q:'Should I replace the clutch when I fix the hydraulic system?',a:'Only if the clutch disc is worn. If the grinding is purely a hydraulic issue and the disc still has plenty of life, the hydraulic repair is the complete fix. We measure disc wear during the diagnosis so you know whether to plan for a clutch job soon or whether you have years left on it.'}
  ],
  "stiff-clutch-pedal": [
    {
      "q": "Does a stiff pedal mean I need a new clutch?",
      "a": "Not necessarily. A cable, pedal pivot, hydraulic component, or release mechanism may be binding. We inspect the system before deciding whether work inside the bell housing is needed."
    },
    {
      "q": "How do you tell whether my clutch uses a cable or hydraulics?",
      "a": "We check the vehicle design and inspect the linkage or hydraulic components. Some hydraulic clutches share the brake-fluid reservoir, so the presence or absence of a separate reservoir is not enough to identify the design."
    },
    {
      "q": "Should I replace both clutch cylinders together?",
      "a": "Only when their condition or the repair procedure supports it. We explain any shared labor and why each part is recommended. One failed cylinder does not automatically mean the other needs replacement."
    },
    {
      "q": "What determines the repair cost?",
      "a": "The failed part and access needed determine the estimate. An external cable or pivot repair differs from a job that requires transmission removal. We explain the recommended work before you approve it."
    }
  ],
  "transmission-slipping": [
    {
      "q": "Does slipping mean I need a rebuild?",
      "a": "Not always. Fluid level, pressure controls, and internal wear can affect an automatic. A manual vehicle may have a clutch problem. Testing determines the repair; symptoms alone do not establish a rebuild is needed."
    },
    {
      "q": "Will changing the fluid fix slipping?",
      "a": "Only if the diagnosed problem can be addressed by the appropriate fluid service. Fresh fluid cannot restore worn friction parts. We check the transmission design, symptoms, fluid, and service history before recommending work."
    },
    {
      "q": "Is jumping out of gear the same as clutch slipping?",
      "a": "No. A slipping manual clutch can let the engine rev while the gear lever stays in gear. A lever that moves into neutral calls for checks of linkage, mounts, and gearbox engagement components."
    },
    {
      "q": "When should transmission fluid be changed?",
      "a": "Use the maintenance schedule and fluid specification for your vehicle and transmission. Towing or other severe use may change the schedule. There is no single mileage interval that applies to every transmission."
    }
  ],
  'hard-to-shift-gears': [
    {q:'How much does hard-to-shift gears repair cost?',a:'Hydraulic clutch repairs (master/slave cylinder, fluid) typically run $200–$600. A full clutch replacement is $800–$1,800. If the transmission itself has sustained synchronizer damage, costs rise significantly. Catching it while the cause is still hydraulic is the cheapest path. Diagnosis is always free.'},
    {q:'Does cold weather affect manual transmission shift feel?',a:'Yes. Cold transmission fluid is thicker and slower to flow around the gears and synchronizer rings, so the first few shifts after a cold start feel heavier. Cold hydraulic fluid in the clutch line slows slave cylinder travel for the same reason. If hard shifting only shows up cold and clears up within a few miles, that\'s normal. Hard shifting that persists when warm needs diagnosis.'},
    {q:'Can I use a different gear oil to make shifting smoother?',a:'Only the oil specified for your transmission. Manufacturers spec specific viscosity and friction characteristics, and synchronizer rings are designed around those properties. Aftermarket additives or wrong-spec oil can make synchronizer engagement worse, not better, and may void warranty on a recent transmission rebuild.'},
    {q:'Will my synchronizers heal if I stop forcing the shifts?',a:'No. Synchronizer wear is mechanical material loss; it doesn\'t regenerate. What gentler shifting does is stop adding to the wear. A gearbox that grinds into 2nd today will grind into 2nd tomorrow if the synchronizer ring isn\'t replaced, but it won\'t grind worse if you give it more time on each shift.'}
  ],
  "soft-clutch-pedal": [
    {
      "q": "Will bleeding fix a soft clutch pedal?",
      "a": "Bleeding can remove air, but it does not repair a leak or a failed cylinder. We check why the pedal is soft before deciding whether bleeding is enough."
    },
    {
      "q": "Can a cylinder fail without a visible leak?",
      "a": "Yes. A master cylinder can lose pressure through internal seal bypass without leaving fluid outside. We check cylinder operation rather than ruling out a fault because the ground is dry."
    },
    {
      "q": "Do both clutch cylinders need replacement?",
      "a": "Not automatically. We base the recommendation on their condition, the vehicle design, and any shared access labor. An internal slave cylinder may require transmission removal."
    },
    {
      "q": "Can I drive if the clutch pedal stays down?",
      "a": "Do not continue driving if you cannot disengage the clutch or select gears reliably. Stop safely and call to discuss towing. Pumping the pedal is not a repair."
    }
  ],
  'burning-smell': [
    {q:'How much does clutch repair cost after a burning smell?',a:'If the disc is worn but the flywheel is still smooth, clutch replacement runs $800–$1,800. If the flywheel was heat-damaged by extended slipping, add $200–$400 for resurfacing or replacement. Catching it at the first burning smell is almost always cheaper than waiting. Diagnosis is free.'},
    {q:'How can I avoid burning my clutch on Utah hills?',a:'Use the brake to hold the car on grades, not the clutch. Engage the gear quickly and decisively rather than slipping the disc to creep forward. Shift up to second gear earlier on steep onramps to reduce peak torque load on the disc. Drivers who break the habit of riding the clutch routinely add tens of thousands of miles to clutch life.'},
    {q:'Does towing always burn out a clutch faster?',a:'Within rated capacity, no. Within the vehicle\'s tow rating, a properly used clutch handles trailer loads without excessive wear. The problems start when load approaches the rating, when launches happen at high RPM, or when the same clutch is used for both daily commuting and frequent towing. Plan for 30 to 50 percent shorter clutch life if you tow regularly.'},
    {q:'Can a clutch recover after it burns once?',a:'Sometimes. A single mild overheat that didn\'t glaze the disc surface or warp the flywheel may not need immediate replacement. But the disc\'s heat-handling capacity has been reduced, and it\'s easier to overheat next time. We inspect for glazing and surface damage to tell you whether you have miles left or whether replacement is the right call.'}
  ],
  "clicking-when-turning": [
    {
      "q": "Does clicking during a turn always mean a CV joint?",
      "a": "No. Repeated clicking under power can point to a CV joint, but steering, suspension, or brake components can also click or pop. We reproduce the noise when safe and inspect before choosing a repair."
    },
    {
      "q": "Should I replace both CV axles at once?",
      "a": "Not automatically. We inspect both axles and boots, then recommend work based on their condition. A problem on one side does not establish that the other will fail soon."
    },
    {
      "q": "How long can I drive with a clicking CV joint?",
      "a": "There is no reliable safe mileage or time limit based on the sound alone. Arrange an inspection promptly. Stop driving if you also notice loose steering, severe vibration, or difficulty controlling the vehicle."
    },
    {
      "q": "Can you replace the boot instead of the axle?",
      "a": "Sometimes. A boot repair may be appropriate if the joint is still serviceable. Noise, wear, contamination, and parts availability help determine whether a boot, joint, or axle replacement makes sense."
    }
  ],
  'vibration-when-accelerating': [
    {q:'How much does acceleration vibration repair cost?',a:'A CV axle replacement is $400–$800 per side. Motor mount replacement runs $300–$600 per mount. A wheel balance is $80–$120 for all four. We diagnose first so you only pay for what\'s actually needed, diagnosis is free.'},
    {q:'Should I replace both CV axles or just the failing one?',a:'If the vibration is clearly from one side, the other side may have years of life left. We inspect both joints and boots before recommending. On a vehicle approaching 150,000 miles where both axles are original, doing them together is often the better call. On a newer car with one impact-damaged axle, replacing only the damaged side is the right repair.'},
    {q:'How are motor mounts checked when diagnosing vibration?',a:'We open the hood while a helper applies the brake and shifts between Drive and Reverse with the engine running. Excessive engine movement during the load reversal points to collapsed mounts. Visible cracks in the rubber or the engine sitting at an unusual angle are also strong indicators. Motor mounts often get blamed on CV joints incorrectly, and vice versa.'},
    {q:'Can tire balance issues cause acceleration vibration?',a:"They can. Tires out of balance produce vibration that builds with speed regardless of throttle, which can mimic an inner CV joint or U-joint. Balancing the tires is part of any vibration diagnosis we run. If balancing resolves the vibration, tire or wheel imbalance was contributing. That result does not, by itself, establish the condition of every drivetrain component."}
  ],
  'soft-brake-pedal': [
    {q:'How much does a soft brake pedal repair cost?',a:'A brake fluid flush is $100–$150. Master cylinder replacement runs $300–$600. A leaking caliper or wheel cylinder is $200–$500 per corner. If a brake line has failed, add $150–$400 for the line. Written estimate before any work begins, diagnosis is free.'},
    {q:'How often should brake fluid be flushed?',a:'Every 2 to 3 years, regardless of mileage. Brake fluid absorbs moisture from the air over time, which lowers its boiling point and corrodes internal seal surfaces. Old fluid contributes to soft pedal symptoms even when no component has fully failed. A flush is one of the cheapest brake services and one of the most underutilized.'},
    {q:'Should I replace the master cylinder if a caliper is leaking?',a:'Not automatically. The master cylinder may be perfectly healthy. We pressure-test the master cylinder separately from the rest of the system. If it holds pressure correctly, only the leaking caliper needs replacement. If the master cylinder is also bypassing fluid internally, we\'ll show you the test results before recommending it.'},
    {q:'Why do new brake hoses sometimes resolve a soft pedal?',a:'Rubber brake hoses can balloon under pressure as they age. Instead of transferring full hydraulic pressure to the calipers, the hose absorbs some of it by expanding. Replacing tired hoses with fresh ones (or stainless braided lines) restores firm pedal feel even when the rest of the system is healthy.'}
  ],
  'squeaking-brakes': [
    {q:'How much does a brake pad replacement cost?',a:'Brake pad replacement typically runs $150–$400 per axle including parts and labor. If the rotors need resurfacing or replacement, add $100–$300 per axle. We inspect before recommending, you won\'t pay for rotors unless they actually need it. Diagnosis is free.'},
    {q:'How long do brake pads usually last?',a:'Front pads typically last 30,000 to 70,000 miles depending on driving style. Stop-and-go commuters wear pads faster than highway drivers. Mountain descents and aggressive driving cut pad life further. Utah drivers who use canyon roads or commute through downtown traffic often replace front pads every 35,000 to 50,000 miles.'},
    {q:'Should I replace rotors every time I replace pads?',a:'Only if the rotors need it. We measure rotor thickness against minimum spec and check for runout and surface damage. If the rotor is within spec and smooth, the new pads bed in fine on the existing surface. If it\'s scored, warped, or below minimum thickness, replacement is the safe call. About half the time, rotors can be reused.'},
    {q:'Can I make brake pads last longer?',a:'Yes. Look further ahead and coast to slow naturally before applying the brakes. Avoid riding the brake on long descents; downshift to use engine braking instead, especially on canyon roads. Don\'t pre-load the brakes by resting your foot on the pedal. These habits add 10,000 to 20,000 miles of life to a set of pads.'}
  ],
  'grinding-brakes': [
    {q:'How much does grinding brake repair cost?',a:'When pads and rotors both need replacement (which is common with grinding), expect $300–$700 per axle. If a caliper has seized and needs replacement, add $200–$400. Catching it at the squeak stage before rotors are scored is always cheaper. Diagnosis is free.'},
    {q:'Will I always need new rotors if my brakes are grinding?',a:'Often, yes, but not always. If the grinding has only happened for a short time and the grooves haven\'t cut deep, rotors can sometimes be resurfaced. After weeks of metal-on-metal contact, the rotor surface is usually too damaged or too thin to save. We measure thickness and groove depth before making the call.'},
    {q:'Can I cause damage by driving with grinding brakes for one more day?',a:'Yes, in two ways. Each stop scores the rotor deeper and reduces the chance of saving it. The reduced friction surface also extends stopping distance, so any emergency stop in that window has a measurably worse outcome. Same-day repair is the right answer.'},
    {q:'How do I know if the caliper is the problem instead of the pads?',a:'A stuck caliper produces grinding even when the pads have material left. The wheel hub on the affected side runs significantly hotter than the other after driving, the pads on that side wear unevenly front-to-back, and the vehicle pulls toward the dragging side under braking. We check hub temperatures after a road test.'}
  ],
  'steering-vibration': [
    {q:'How much does steering vibration repair cost?',a:'A wheel balance runs $80–$120. A four-wheel alignment is $100–$150. Tie rod ends or ball joints are $300–$700 per side including alignment. Wheel bearings are $300–$600 per corner. Diagnosis is free, we identify the cause before recommending a repair.'},
    {q:'How can I tell if the vibration is brakes or suspension?',a:'Vibration that only appears when braking points to rotors. Vibration present at cruise speed without braking points to balance, alignment, or suspension wear. Vibration that\'s there both ways usually means more than one issue is present, which is why a full diagnosis covers both systems rather than guessing at one.'},
    {q:'How often should tie rod ends be inspected?',a:'Once a year on vehicles past 100,000 miles. Tie rod ends and ball joints develop play gradually, and a quick lift-and-rock check catches the wear before it causes a roadside failure. Many shops include this inspection during oil changes; we cover it as part of any front-end service.'},
    {q:'Can poor wheel balance cause steering vibration over time?',a:'It can. Persistent imbalance puts uneven loading on wheel bearings and tie rod ends, accelerating their wear. A bad balance ignored for 20,000 miles often reveals a worn bearing or tie rod end when finally diagnosed. Keeping the wheels balanced is cheap insurance against more expensive front-end work later.'}
  ],
  'vibration-when-braking': [
    {q:'How much does brake vibration repair cost?',a:'Rotor replacement with new pads typically runs $300–$700 per axle. If a stuck caliper is the root cause (which leads to repeat rotor warping), add $200–$400 for the caliper. We service brake slide pins on every brake job to prevent recurrence. Diagnosis is free.'},
    {q:'Why do my new rotors warp again so quickly?',a:'A stuck caliper slide pin is the usual culprit. If the slide isn\'t moving freely, one pad presses harder on the rotor than the other, concentrating heat on one face. The rotor warps from uneven thermal cycling within 10,000 to 20,000 miles. We service slide pins with every brake job for that reason.'},
    {q:'Can I avoid warping rotors on canyon descents?',a:'Yes. Use lower gears to engine-brake instead of riding the brake pedal. Apply the brakes firmly in short bursts to slow down, then release fully so the rotors can cool. Steady, light pressure is what builds heat; firm-then-release lets airflow do the cooling work. This habit alone doubles rotor life on canyon-driving vehicles.'},
    {q:'Should I replace rotors in pairs?',a:'Yes, on the same axle. Rotors on the same axle should match in thickness and surface condition for even braking. Replacing only one front rotor while the other is worn produces uneven brake force and can pull the vehicle under hard stops. If one is past spec, plan on the pair.'}
  ],
  'engine-rattling': [
    {q:'How much does timing chain repair cost?',a:'Timing chain replacement typically runs $800–$2,500 depending on the engine. V6 and V8 engines with dual chains or complex VVT systems cost more. Diagnosis is free, we confirm the chain is the issue before quoting, since startup rattle can have other causes.'},
    {q:'How often should oil be changed to prevent timing chain stretch?',a:'Every 5,000 to 7,500 miles for most engines, sooner for vehicles with extended chain wear histories like certain Honda and Hyundai 4-cylinders. Fresh oil keeps the chain rollers and tensioner passages clean. Engines run on extended intervals develop chain problems significantly earlier than those maintained on schedule.'},
    {q:'Should I replace the water pump when I do the timing chain?',a:'On engines where the water pump is driven by the timing chain, absolutely. The labor is identical and the pump is exposed during the job. On engines where the water pump is belt-driven separately, we evaluate it independently and only include it if there\'s wear evidence.'},
    {q:'Can I drive a few hundred more miles with startup rattle?',a:'You probably have miles left, but the timeline is unpredictable. The rattle indicates the chain has stretched enough that the tensioner is at or near the end of its travel. Once the tensioner runs out of compensation, the chain can jump teeth without further warning. On interference engines, that destroys valves and pistons.'}
  ],
  'check-engine-timing': [
    {q:'How much does timing system repair cost?',a:'A VVT solenoid replacement runs $150–$400. An oil service to restore VVT pressure is $80–$120. A full timing chain replacement is $800–$2,500 depending on the engine. Diagnosis is free, we distinguish solenoid issues from chain stretch with live data before recommending parts.'},
    {q:'What does a P0016 code mean exactly?',a:'P0016 means the camshaft position sensor and crankshaft position sensor disagree about engine timing on Bank 1. The cam appears to be in a different position than the crank says it should be. The mismatch is usually a stretched timing chain that has shifted the cam relationship, but it can also be a failed sensor, a clogged VVT solenoid, or low oil pressure starving the timing system.'},
    {q:'Can low oil cause timing codes?',a:'Yes. Variable valve timing systems use oil pressure to move the cam phaser. When oil level is low or pressure is reduced from worn pump or sludged passages, the phaser can\'t respond fast enough to commanded changes. The ECM detects the slow response and stores a correlation code, even though the chain itself may be fine.'},
    {q:'How do you diagnose VVT problems versus chain stretch?',a:'Live scan data is the key. We watch the VVT actuator\'s commanded position versus actual position in real time across various engine speeds. Slow or unresponsive phaser action with healthy oil pressure points to a VVT solenoid or sludged passages. Consistent mechanical offset that doesn\'t respond to commands points to chain stretch. The repairs are very different.'}
  ],
  'check-engine-light': [
    {q:'How much does check engine light diagnosis cost?',a:'Diagnosis is free at Scott\'s. Repair costs depend on what the light reveals, anywhere from $50–$100 for a sensor or gas cap to $2,000+ for a catalytic converter or internal engine repair. You\'ll get a written estimate before any work begins.'},
    {q:'How long can I keep driving with a steady check engine light?',a:'A steady light means a stored fault that should be diagnosed within a few days, not weeks. Driving with the light on doesn\'t cause immediate damage in most cases, but the underlying problem is rarely improving on its own. Putting it off also risks the catalyst monitor failing on your next emissions test if you\'re due for one.'},
    {q:'Should I just clear the codes myself with a code reader?',a:'No. Clearing codes erases the fault history but doesn\'t fix the underlying problem, and it resets the readiness monitors that emissions testing needs. The light comes back as soon as the fault recurs, often within a few drive cycles. The only difference is you\'ve made the diagnostic harder for whoever finds it next.'},
    {q:'Why do I sometimes get the same code back after a repair?',a:'Either the original repair didn\'t fully address the root cause, or there\'s a separate problem feeding the same code. P0420 returning after a converter replacement often means the engine is running rich and damaging the new converter the same way it damaged the old one. We verify the underlying cause before authorizing parts.'}
  ],
  'engine-overheating': [
    {q:'How much does overheating repair cost?',a:'A thermostat replacement runs $150–$350. A water pump is $400–$900. A radiator replacement is $500–$1,200. Head gasket failure, if caught late, can reach $2,000–$4,000+. Catching overheating early is the single best way to keep repair costs low. Diagnosis is free.'},
    {q:'What should I do if my car is overheating right now?',a:'Pull over immediately and turn off the engine. Don\'t open the radiator cap while the system is hot; pressurized coolant can cause severe burns. Let the engine cool for at least 30 minutes before checking the coolant level. If the gauge is in the red, call for a tow rather than trying to make it to a shop.'},
    {q:'How long does a water pump typically last?',a:'Most water pumps last 80,000 to 150,000 miles depending on the design and how the cooling system has been maintained. Pumps driven by the timing belt or chain often last close to the chain\'s service life and are replaced together. Pumps driven by accessory belts can fail earlier in some designs.'},
    {q:'Can I use water instead of coolant in an emergency?',a:'Briefly and only as a roadside fix. Water cools but lacks the corrosion inhibitors and freeze protection coolant provides. Pure water in a cooling system corrodes aluminum components and can freeze and crack the block in cold weather. Get the system flushed and refilled with the correct coolant as soon as possible.'}
  ],
  'coolant-leak': [
    {q:'How much does a coolant leak repair cost?',a:'A hose replacement runs $100–$250. A radiator is $500–$1,200. A water pump driven by a timing belt or chain is $600–$1,500 including the belt/chain service. A head gasket is $2,000–$4,000+. Written estimate before any work starts, diagnosis is free.'},
    {q:'How often should coolant be flushed?',a:'Every 2 years or 30,000 miles for green (IAT) coolant. Every 5 years or 150,000 miles for orange, yellow, or pink (OAT/HOAT) chemistries. Old coolant loses its corrosion inhibitors and starts attacking aluminum components, radiators, and water pump impellers. Flushing on schedule is one of the cheapest ways to prevent expensive cooling system repairs.'},
    {q:'Can I mix different colors of coolant?',a:'Don\'t. Mixing incompatible coolant chemistries causes the additive packages to react, which degrades both formulations and can produce sludge that clogs the radiator and heater core. If a vehicle has had coolant mixed, the right fix is a complete flush and refill with the correct type for that engine.'},
    {q:'Will a small coolant leak fix itself?',a:'No. Cooling systems are sealed circuits, and a leak doesn\'t reseal on its own. What may happen is that mineral deposits temporarily clog a small seep, hiding the symptom for a while. Eventually the seep reopens or the underlying component fails completely. Topping off without finding the source delays an inevitable repair.'}
  ],
  'loud-exhaust': [
    {q:'How much does exhaust repair cost?',a:'A welded patch on a small hole or crack runs $150–$300. Section replacement (muffler or resonator) is $300–$700 including parts and labor. A full system replacement runs $600–$1,500 depending on the vehicle. We do welding in-house, which often makes repairs cheaper than full replacement. Diagnosis is free.'},
    {q:'Can a loud exhaust be welded instead of replaced?',a:'Often yes. Small holes or cracks in otherwise solid pipe can be cut out and a new section welded in place. We do welding in-house, which gives us repair flexibility many shops don\'t have. If the surrounding metal is paper-thin from rust, welding won\'t hold and replacement is the right call.'},
    {q:'How long does an exhaust system last in Utah?',a:'Original exhaust systems on Utah vehicles typically last 8 to 12 years before significant rust failures appear. Salt used on winter roads accelerates corrosion compared to drier climates. Stainless steel exhaust sections last considerably longer than mild steel, which is why some replacement sections are worth the upgrade.'},
    {q:'Can a loud exhaust cause emissions failure?',a:'Yes, when the leak is upstream of the catalytic converter. Outside air entering the exhaust at that location skews the oxygen sensor reading, the ECM compensates with extra fuel, and emissions climb above the threshold. Leaks downstream of the converter (muffler-area) don\'t affect emissions but can fail visual inspection.'}
  ],
  'exhaust-smell-in-cabin': [
    {q:'How much does an exhaust leak repair cost?',a:'A manifold gasket replacement runs $200–$500. A cracked manifold that needs full replacement is $400–$1,200 depending on the vehicle. Pipe section welding or replacement is $150–$400. We treat cabin exhaust smell as a priority repair, diagnosis is free and we get you in quickly.'},
    {q:'Why is the smell worse with the AC on fresh air?',a:'The fresh-air intake on most vehicles is at the base of the windshield, in front of the firewall. An exhaust leak from a cracked manifold or a near-firewall pipe section sits directly in that intake zone. Running fresh-air mode actively pulls those fumes into the cabin. Switching to recirculation reduces the smell, which is itself a diagnostic clue.'},
    {q:'How quickly should this repair be done?',a:'Same-day if possible, this week at the latest. Carbon monoxide exposure is cumulative and affects passengers (especially children) more severely than the driver in the front seat. Don\'t drive the vehicle with passengers until the source is found and repaired. We treat this as a priority repair when vehicles arrive with this symptom.'},
    {q:'Can a manifold gasket fix a cabin smell on its own?',a:'Sometimes. If the leak is at the manifold-to-head joint, a fresh gasket and proper bolt torque can seal it. If the manifold itself has cracked from heat cycling (common on cast iron manifolds past 10 years), the manifold needs replacement, not just a new gasket. We inspect for cracks before recommending the repair scope.'}
  ],
  'failed-emissions': [
    {q:'How much does an emissions repair cost?',a:'An oxygen sensor or EVAP component replacement runs $150–$400. A catalytic converter is $800–$2,000 depending on the vehicle. If the failure was caused by an upstream engine issue (rich running, misfires), that repair is required alongside the converter or it will fail again. Diagnosis is free.'},
    {q:'How long do catalytic converters typically last?',a:'Original catalytic converters typically last 100,000 to 150,000 miles on engines that have been maintained correctly. Misfires, overheating events, and chronic rich running shorten that lifespan dramatically. A converter that fails before 80,000 miles usually points to an underlying engine condition rather than a defective converter.'},
    {q:'What if my readiness monitors aren\'t set?',a:'You\'ll fail the emissions test on monitor status alone, regardless of how well the engine runs. Recently disconnected batteries or ECM resets clear all monitors. Each monitor needs a specific drive cycle to set; some take a single trip, others take days of mixed driving. We can scan monitor status before your test date to confirm readiness.'},
    {q:'Will replacing the catalytic converter fix the underlying problem?',a:'Only if the converter itself is the problem. If the engine is running rich, misfiring, or has an upstream exhaust leak, the new converter will degrade the same way the old one did, often within a year or two. We diagnose the root cause before recommending a converter to make sure the repair lasts.'}
  ],
  'sulfur-smell': [
    {q:'How much does sulfur smell diagnosis and repair cost?',a:'Diagnosis is free. If the root cause is a fuel system issue (injectors, fuel pressure regulator, sensor), repair runs $150–$600. A catalytic converter replacement is $800–$2,000. We diagnose the root cause first, installing a new converter without fixing the underlying problem means the new one fails too.'},
    {q:'Does a sulfur smell always mean I need a new catalytic converter?',a:'Not always. A rich-running engine produces the same sulfur smell because excess fuel overwhelms a healthy converter. Stuck injectors, failing fuel pressure regulators, or a coolant temperature sensor stuck in the cold reading can all cause it. Installing a new converter without finding the cause means the new converter fails the same way.'},
    {q:'Can certain gas station fuels cause this smell?',a:'Yes. Some gasoline blends contain higher sulfur content than others, and switching to a different brand or grade can reduce the smell on a borderline-healthy converter. If the smell appeared after a fill at a specific station and faded after switching, fuel sulfur content was the trigger. The converter is still degrading; the new fuel just masked it temporarily.'},
    {q:'How long until a sulfur-smelling converter fails completely?',a:'Variable. Some converters produce mild sulfur smell for years before triggering a P0420 code. Others go from occasional smell to consistent failure within months. The smell is a warning, not a fixed timeline. Diagnosing it early lets us catch underlying engine conditions before they finish damaging the converter.'}
  ],
  'bouncy-ride': [
    {q:'How much does strut or shock replacement cost?',a:'Strut replacement typically runs $350–$700 per axle (pair) including parts, labor, and alignment. Shock replacement is $200–$500 per axle. An alignment is always included with strut work. Diagnosis is free, we confirm which corners need replacement before starting.'},
    {q:'How long do shocks and struts typically last?',a:'Most shocks last 50,000 to 100,000 miles. Struts often last similar mileages. Utah\'s rough roads, mountain driving, and pothole season after winter wear them faster than average. If your vehicle is past 80,000 miles and bouncing more than once on the bounce test, the dampers are due regardless of how the ride feels day-to-day.'},
    {q:'Should shocks always be replaced in pairs?',a:'On the same axle, yes. Mismatched damping (one new, one old) creates handling asymmetry that can cause pulling under braking and uneven cornering. We recommend front pairs or rear pairs together, even when only one corner shows clear failure, because the partner is aging on the same clock and will fail soon anyway.'},
    {q:'Why does my car ride differently after a strut replacement?',a:'New struts feel firmer than the worn ones you\'ve been driving on, often noticeably so. That\'s because most drivers gradually adapt to declining damping over years, accepting bouncier behavior as normal. New struts restore the manufacturer\'s designed ride quality. The difference is real and what the vehicle was supposed to feel like.'}
  ],
  'nose-dive-braking': [
    {q:'How much does front strut replacement cost?',a:'Front strut replacement typically runs $400–$800 for the pair, including parts, labor, and a post-installation alignment. The alignment is required after strut work, skipping it accelerates tire wear. Diagnosis is free.'},
    {q:'How does nose dive affect tire wear?',a:'On MacPherson strut suspensions, exaggerated nose dive shifts camber slightly under braking. Repeated over thousands of stops, that geometry change wears the inner edge of the front tires faster than the outer. Replacing front struts and aligning afterward usually resolves both the nose dive and the tire wear pattern.'},
    {q:'Should an alignment always be done after strut replacement?',a:'Yes, every time. Strut replacement changes suspension geometry, and the alignment angles that were correct for the old struts won\'t be correct for the new ones. Skipping the alignment saves a small amount upfront and accelerates tire wear by thousands of dollars over the life of the next set of tires.'},
    {q:'How can I tell if my front struts are worn before symptoms get severe?',a:'The bounce test catches most cases: push down firmly on a front corner and release. If it bounces more than once before settling, the strut is significantly worn. Oil seepage on the strut body is another reliable indicator. We check both during any front-end inspection.'}
  ],
  'uneven-tire-wear': [
    {q:'How much does alignment and suspension repair cost?',a:'A four-wheel alignment runs $100–$150. If worn suspension components (control arm bushings, ball joints, tie rods) are causing the misalignment, those repairs add $300–$700 per component before the alignment can hold. Diagnosis is free, we identify what\'s causing the wear pattern before recommending repairs.'},
    {q:'How often should alignment be checked?',a:'Annually, or after any significant pothole or curb impact. Suspension components settle and wear gradually, and alignment angles drift outside spec without obvious symptoms. Catching alignment drift early saves the next set of tires from accelerated edge wear. Most alignment shops offer cheap or free alignment checks.'},
    {q:'Can I rotate tires to even out uneven wear?',a:'For mild edge wear, yes; rotating to a position with reversed loading lets the tire wear back toward even. Cupping or scalloped wear is permanent (the material is gone) and won\'t smooth out with rotation. We can advise whether your specific wear pattern is recoverable through rotation or whether the tires are too far gone.'},
    {q:'How long do tires last when alignment is correct?',a:'Quality tires typically last 50,000 to 70,000 miles with correct alignment, regular rotation, and proper inflation. Utah\'s rough roads shorten that somewhat. Tires that aren\'t lasting that long despite proper maintenance usually point to alignment, suspension wear, or under-inflation as the underlying cause.'}
  ],
  'rough-ride-over-bumps': [
    {q:'How much does shock absorber replacement cost?',a:'Shock replacement typically runs $200–$500 per axle (pair) depending on the vehicle. If mount bushings are also worn, add $100–$200 for bushing replacement. Doing them together in one visit avoids a second labor charge later. Diagnosis is free.'},
    {q:'How long do shocks typically last?',a:'Most shocks last 50,000 to 100,000 miles depending on the vehicle and the roads it\'s driven on. Utah\'s rough pavement and mountain conditions wear shocks faster than average. Drivers who commute in the Salt Lake valley after a hard winter often see shock symptoms 10,000 to 20,000 miles earlier than the manufacturer\'s suggested replacement interval.'},
    {q:'Should I replace bushings when I replace shocks?',a:'Often, yes. Shock mount bushings and surrounding suspension bushings have aged on the same clock as the shocks. Installing new shocks on tired bushings means the new dampers can\'t do their full job, and the rough ride only partially improves. We inspect bushings during any shock or strut job and recommend replacement when warranted.'},
    {q:'Can I do a quick check at home to evaluate my shocks?',a:'Yes. Push down firmly on each corner of the vehicle and release. A healthy shock allows one bounce-and-settle. Two or more bounces indicates the shock has lost significant damping. Also look for oil residue on the shock body, which means the internal seal has failed. Both are signs the shock is due for replacement.'}
  ],
  'default': [
    {q:'How do I know if this symptom is serious?',a:'Any unusual sound, smell, or behavior from your vehicle warrants inspection. Some symptoms are minor and inexpensive to fix; others indicate developing problems that get more expensive if ignored. We provide honest assessments of urgency and cost so you can make an informed decision.'},
    {q:'How much does diagnosis cost?',a:'We diagnose with professional-grade scan tools and hands-on inspection. The diagnosis fee is applied toward the repair if you choose to have the work done with us.'},
    {q:'How long does repair typically take?',a:'Most repairs are completed within 1–2 business days. Simple services like brake pads or fluids are often same-day. Complex jobs like timing chain or clutch replacement may take 2–3 days. We keep you informed throughout.'}
  ]
};

// ─── Location page FAQs ──────────────────────────────────────────────────────
function getLocationFaqs(location) {
  const name = location.name || location.n;
  const dist = location.distance || location.d;
  const isHome = location.isHome || location.home || false;

  if (isHome) {
    return [
      {q:'Where is Scott\'s Auto & Clutch located?',a:"We are at 144 W Crystal Ave, South Salt Lake, UT 84115. Use the Get Directions link to plan your route to the shop."},
      {q:'What are your hours?',a:'We\'re open Monday through Friday, 9:00 AM to 5:30 PM. Saturday appointments are available by request. Call (801) 485-4089 or text us to schedule.'},
      {q:'Do you offer free estimates?',a:'Yes. We provide free visual inspections and estimates for most services. For complex diagnostics requiring specialized equipment, we charge a diagnostic fee that is applied toward the repair cost if you proceed with us.'}
    ];
  }

  return [
    {q:`How far is Scott's Auto & Clutch Repair from ${name}?`,a:`Our shop is at 144 W Crystal Ave in South Salt Lake. Distance and travel time from ${name} depend on your starting point. Use the Get Directions link for a current route.`},
    {q:`Do you service vehicles from ${name}?`,a:`Absolutely. ${name} is one of our most common service areas. We've been serving ${name} drivers since 1990 and understand the specific driving conditions and wear patterns that come with the area.`},
    {q:`What's the best route from ${name} to your shop?`,a:`Use the Get Directions link with your starting address in ${name}. The destination is 144 W Crystal Ave, South Salt Lake, UT 84115. Call (801) 485-4089 if you need help finding the shop.`}
  ];
}

// ─── Geo clutch page FAQs, unique per city ──────────────────────────────────
const geoFaqMap = {
  'clutch-repair-near-sugar-house-ut': [
    {q:'How does Sugar House terrain affect clutch wear?',a:'Sugar House\'s hills accelerate clutch wear significantly. The steep grades on 2100 South and 1300 East force repeated uphill clutch engagements under load. Hill-start drivers in Sugar House typically need clutch service 15,000–20,000 miles sooner than flat-terrain drivers with the same vehicle.'},
    {q:'How much does clutch repair cost for Sugar House drivers?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."},
    {q:'My car rolls back on Sugar House hills before the clutch catches. What does that mean?',a:"Rolling backward on a hill does not, by itself, mean the clutch is worn out. Use the brakes to hold the vehicle and follow the hill-start procedure in your owner's manual. Tell us if the engine revs rise without a matching increase in speed."}
  ],
  'clutch-repair-near-millcreek-ut': [
    {q:"How can canyon driving affect clutch wear?",a:"Repeated starts in slow canyon traffic can add clutch wear, particularly when the clutch is kept partially engaged. Driving downhill with the clutch fully engaged is different from slipping it. Canyon use alone cannot tell us when a clutch will need replacement."},
    {q:'How far is your shop from Millcreek, and is the drive worth it?',a:"Our shop is at 144 W Crystal Ave in South Salt Lake. Use the Get Directions link for the route and travel time from your starting point in Millcreek. Call before leaving to confirm an appointment."},
    {q:'My clutch slips when I downshift to engine-brake on canyon descents. What\'s wrong?',a:"If you notice slipping after a canyon trip, tell us which gear you were in and whether the engine revs rose without the car gaining speed. An inspection is needed to distinguish worn friction parts from a release-system problem."}
  ],
  'clutch-repair-near-murray-ut': [
    {q:'Does State Street stop-and-go traffic wear clutches faster in Murray?',a:"Stop-and-go traffic means more starts than steady-speed driving. Avoid using a partially engaged clutch to hold the car still. We cannot predict clutch life from the number or location of traffic lights."},
    {q:'How much does clutch repair cost, and are there cheaper options in Murray?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."},
    {q:'I ride the clutch in Fashion Place traffic to stay in gear. Is that bad?',a:"Avoid holding the car still with a partially engaged clutch. At a prolonged stop, select neutral and use the brake as described in your owner's manual. Report any new slipping, shuddering, or difficulty selecting a gear."}
  ],
  'clutch-repair-near-salt-lake-city-ut': [
    {q:'Are Avenues hill starts that hard on a clutch?',a:"Hill starts can increase wear when the clutch slips for a prolonged period. Use the hill-start procedure in your owner's manual. A street grade does not translate into a fixed number of miles lost from clutch life."},
    {q:'Can Salt Lake City drivers use TRAX to get to your shop?',a:"Use UTA's current trip planner with 144 W Crystal Ave, South Salt Lake as your destination. Check the complete route, including the walk or connecting ride from the station, before arranging drop-off or pickup."},
    {q:'My clutch engagement point is near the top of the pedal. Do I need replacement soon?',a:"A high engagement point cannot tell you how many miles a clutch has left. If the pedal position changes or the engine revs rise without the car accelerating, arrange an inspection before relying on the car for hill driving."}
  ],
  'clutch-repair-near-taylorsville-ut': [
    {q:"How should I use the clutch when merging onto the freeway?",a:"Merging does not require a special clutch-saving shift pattern. Choose a gear and speed appropriate for the vehicle and traffic, and fully release the clutch after shifting. Have new slipping or shuddering checked."},
    {q:'How far is the drive to your shop from Taylorsville?',a:"Our shop is at 144 W Crystal Ave in South Salt Lake. Use the Get Directions link for the route and travel time from your starting point in Taylorsville. Call before leaving to confirm an appointment."},
    {q:'My clutch shudders when I accelerate from the 4700 South lights. What does that mean?',a:"Shudder when moving away from a stop can involve clutch friction surfaces, mounts, or other components. Note whether it happens when the vehicle is cold, warm, or carrying a load so we can check it under similar conditions."}
  ],
  'clutch-repair-near-west-valley-city-ut': [
    {q:'Can event traffic near USANA Amphitheatre actually damage a clutch in one evening?',a:"Prolonged slipping in slow traffic can overheat a clutch. A burning smell warrants attention, but it does not establish that the clutch was damaged in one evening or identify the component involved."},
    {q:'How much does clutch repair cost for West Valley City drivers?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."},
    {q:'How far is the drive to Scott\'s from West Valley City?',a:"Our shop is at 144 W Crystal Ave in South Salt Lake. Use the Get Directions link for the route and travel time from your starting point in West Valley City. Call before leaving to confirm an appointment."}
  ],
  'clutch-repair-near-holladay-ut': [
    {q:'My clutch only slips when cold. Is that a flywheel problem?',a:"Tell us whether slipping happens only when cold or continues after warm-up. That pattern helps guide the inspection, but it does not identify a flywheel problem by itself."},
    {q:'How does Big Cottonwood Canyon access affect clutch life in Holladay?',a:"Clutch wear during canyon use depends on how often and how long the clutch slips, vehicle load, and its condition. Once the clutch is fully engaged, it should not be continuously slipping on a climb or descent. Report slipping or shuddering rather than assuming it is normal canyon wear."},
    {q:'How far is your shop from Holladay, and what\'s the route?',a:"Our shop is at 144 W Crystal Ave in South Salt Lake. Use the Get Directions link for the route and travel time from your starting point in Holladay. Call before leaving to confirm an appointment."}
  ],
  'clutch-repair-near-cottonwood-heights-ut': [
    {q:"What does a clutch inspection check after canyon-driving symptoms?",a:"An inspection can distinguish worn clutch friction parts from a release-system fault or another cause of difficult shifting. Tell us whether symptoms occur during a hill start, under load, or after warm-up so we can investigate the conditions you noticed."},
    {q:'If I smell burning mid-canyon, should I pull over or keep going?',a:"If you notice a burning smell or loss of drive while climbing, stop in a safe place and call for advice. There is no fixed cooling time that makes a slipping clutch safe to drive again."},
    {q:'How much does clutch repair cost for Cottonwood Heights drivers?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."}
  ],
  'clutch-repair-near-sandy-ut': [
    {q:"How should I wait at a traffic light in a manual vehicle?",a:"Avoid resting your foot on the clutch pedal or holding the vehicle on a hill with the clutch. Use the brakes to hold the car and follow the stopping and hill-start instructions in your owner's manual."},
    {q:'How do I reach your shop from Sandy via TRAX?',a:"Use UTA's current trip planner with 144 W Crystal Ave, South Salt Lake as your destination. Check the complete route, including the walk or connecting ride from the station, before arranging drop-off or pickup."},
    {q:'How much does clutch replacement cost for Sandy vehicles?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."}
  ],
  'clutch-repair-near-draper-ut': [
    {q:'Why is Point of the Mountain so hard on clutches when towing?',a:"Towing adds load, especially during starts and climbs. A fully engaged clutch should transmit power without continuous slipping; high engine revs alone do not prove clutch overheating. Stay within the vehicle's towing limits and have slipping checked."},
    {q:'Is it worth the 15-minute drive from Draper to Scott\'s for clutch repair?',a:"Call us with the symptoms, vehicle details, and any previous repair records before making the trip. We can discuss an appointment and whether the vehicle should be towed. Our shop is in South Salt Lake."},
    {q:'I smell burning on Point of the Mountain when towing. Is my clutch damaged?',a:"If the engine revs climb without the vehicle gaining speed while towing, stop safely and arrange an inspection. Continuing to drive with a slipping clutch can cause additional damage."}
  ],
  'clutch-repair-near-west-jordan-ut': [
    {q:'Does Mountain View Corridor driving create specific clutch wear patterns?',a:"Road name alone does not establish a clutch failure pattern. Tell us whether difficulty shifting or slipping occurs during acceleration, after warm-up, or in a particular gear. Those details are more useful than assuming the commute damaged a specific part."},
    {q:'How far is West Jordan from your shop?',a:"Our shop is at 144 W Crystal Ave in South Salt Lake. Use the Get Directions link for the route and travel time from your starting point in West Jordan. Call before leaving to confirm an appointment."},
    {q:'My clutch pedal feels stiffer than usual on Mountain View Corridor. What\'s happening?',a:"A stiff pedal can involve the release mechanism, linkage, or hydraulic system, depending on the vehicle. Tell us whether the change was sudden and whether selecting gears has become harder."}
  ],
  'clutch-repair-near-south-jordan-ut': [
    {q:'How does Daybreak\'s roundabout design affect clutch life?',a:"Low-speed driving involves frequent gear changes, but clutch life depends on driving technique and vehicle condition. Avoid riding the clutch, and follow the manufacturer's adjustment guidance; many hydraulic systems self-adjust."},
    {q:'Can I reach your shop from South Jordan via TRAX?',a:"Use UTA's current trip planner with 144 W Crystal Ave, South Salt Lake as your destination. Check the complete route, including the walk or connecting ride from the station, before arranging drop-off or pickup."},
    {q:'How much does clutch service cost for South Jordan vehicles?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."}
  ],
  'clutch-repair-near-riverton-ut': [
    {q:'Riverton is far. Is the drive to your shop really worth it?',a:"Call before travelling so we can discuss your symptoms, vehicle, and service history. A clear description of slipping, shuddering, or difficult shifting helps us plan the inspection. Use the map link for the current route to our South Salt Lake shop."},
    {q:"Does a longer commute mean I need clutch replacement at a fixed mileage?",a:"Clutch replacement has no universal mileage interval. Driving technique, towing, traffic, and the vehicle all affect wear. Arrange an inspection for slipping, shuddering, or difficulty shifting rather than replacing the clutch based on commute distance alone."},
    {q:'Can Jordan River flooding affect clutch condition for Riverton drivers?',a:"Do not drive through floodwater. If clutch symptoms began after the vehicle was submerged or exposed to deep water, mention that history when arranging an inspection. Wet weather alone does not prove water entered the clutch housing."}
  ],
  'clutch-repair-near-herriman-ut': [
    {q:'Herriman is 20 minutes away. Why do locals drive to Scott\'s?',a:"Clutch repair is a specialty at our South Salt Lake shop. Call with your vehicle details and symptoms to discuss an appointment, the inspection process, and whether towing is appropriate."},
    {q:'How do Herriman\'s hillside streets affect clutch components?',a:"Repeated hill starts can add wear if the clutch slips for a long time. That does not establish which components need replacement. We inspect the clutch and release system before recommending a repair."},
    {q:'What\'s the best way to do hill starts in Herriman without burning the clutch?',a:"Rolling backward before moving off on a hill is not proof of a worn clutch. Use the brakes and your vehicle's recommended hill-start procedure. Avoid holding the vehicle still with a partially engaged clutch."}
  ],
  'clutch-repair-near-kearns-ut': [
    {q:"How can I merge safely without riding the clutch?",a:"Choose a gear that lets you merge safely without straining the engine, and follow your vehicle's operating instructions. If the engine revs rise but the car does not accelerate normally, have the clutch inspected."},
    {q:'How affordable is clutch repair at Scott\'s for Kearns families?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle. The inspection determines whether the clutch, release system, flywheel, or other parts need work. Ask for an estimate for your specific vehicle before authorizing repairs."},
    {q:'How far is the drive from Kearns to your shop?',a:"Our shop is at 144 W Crystal Ave in South Salt Lake. Use the Get Directions link for the route and travel time from your starting point in Kearns. Call before leaving to confirm an appointment."}
  ],
  'clutch-repair-near-midvale-ut': [
    {q:"How should I use the clutch when entering I-15 or I-215?",a:"Follow traffic signals and merge at a safe speed for the conditions. Do not change your approach speed to protect the clutch. Report slipping or shuddering during acceleration so we can inspect the vehicle."},
    {q:'Can I reach your shop from Midvale on TRAX?',a:"Use UTA's current trip planner with 144 W Crystal Ave, South Salt Lake as your destination. Check the complete route, including the walk or connecting ride from the station, before arranging drop-off or pickup."},
    {q:'How much does clutch work cost for Midvale vehicles, and how quickly can you fit me in?',a:"Clutch replacement typically runs $800–$1,800 depending on the vehicle and work needed. Call (801) 485-4089 for current appointment availability and a vehicle-specific estimate. Completion time depends on the diagnosis and parts availability."}
  ]
};

function getGeoFaqs(geo) {
  const slug = geo.slug || '';
  if (geoFaqMap[slug]) return geoFaqMap[slug];

  // Fallback for any geo page not in the map
  const name = geo.locationName;
  const dist = geo.distance;
  const drive = geo.driveTime;
  return [
    {q:`How much does clutch repair cost near ${name}?`,a:`Clutch replacement typically costs $800–$1,800 depending on your vehicle. We provide an exact quote after diagnosis, before any work begins.`},
    {q:`Is it worth driving ${dist} from ${name} to Scott's?`,a:`We specialize in clutch work, it\'s in our name. ${name} drivers who come to us after a general shop couldn\'t diagnose the problem find the ${drive} drive worthwhile. An accurate diagnosis the first time costs less than a second repair.`},
    {q:`Why should ${name} drivers choose Scott's for clutch repair?`,a:`We\'ve specialized in clutch repair since 1990. We understand how ${name}\'s driving conditions affect clutch components and use that to diagnose accurately. You\'ll have a complete, honest quote before we start.`}
  ];
}

function getSymptomFaqs(symptom) {
  const slug = symptom.slug || '';
  if (symptomFaqs[slug]) return symptomFaqs[slug];
  // Substring fallback for any new slugs not yet mapped
  for (const key of Object.keys(symptomFaqs)) {
    if (key !== 'default' && slug.includes(key)) return symptomFaqs[key];
  }
  return symptomFaqs['default'];
}

module.exports = { serviceFaqs, getSymptomFaqs, getLocationFaqs, getGeoFaqs };
