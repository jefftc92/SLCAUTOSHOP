// Page-specific FAQs for all page types that lack them in their own data files
// Format: { q: 'question', a: 'answer' }

const serviceFaqs = {
  'timing-chain-repair-south-salt-lake-ut': [
    {q:'How much does timing chain replacement cost?',a:'Timing chain replacement typically ranges from $800–$2,500 depending on the engine. V6 and V8 engines with dual chains cost more due to additional labor. We provide a detailed quote before any work begins.'},
    {q:'What happens if I ignore a stretched timing chain?',a:'A stretched timing chain causes poor engine timing, rough idle, and reduced power. If the chain skips or breaks, it can bend valves and destroy the engine—turning a $1,500 repair into a $5,000+ engine replacement.'},
    {q:'How long does timing chain replacement take?',a:'Most timing chain jobs take 6–10 hours depending on the engine. Some vehicles like the GM 3.6L V6 require partial engine removal. We typically complete the job within 1–2 business days.'}
  ],
  'water-pump-replacement-south-salt-lake-ut': [
    {q:'How do I know if my water pump is failing?',a:'Common signs include coolant leaking from the front of the engine, a whining or grinding noise from the pump pulley, engine overheating, and steam from the radiator. Any of these warrant immediate inspection.'},
    {q:'Should I replace the timing belt with the water pump?',a:'If your engine uses a timing belt and the water pump is driven by it, absolutely—they share the same labor. Replacing both together saves $300–$500 in repeated labor costs. We always recommend this.'},
    {q:'How much does water pump replacement cost?',a:'Water pump replacement typically costs $400–$900 including parts and labor. Engines where the water pump is driven by the timing belt or chain cost more due to additional disassembly. We quote before we start.'}
  ],
  'exhaust-repair-south-salt-lake-ut': [
    {q:'Can you weld my exhaust instead of replacing it?',a:'Often yes. If the pipe or muffler has a small crack or hole, welding is a cost-effective repair. However, if the metal is rusted thin throughout, replacement is more reliable. We assess and recommend the most economical option.'},
    {q:'Why is my exhaust so loud suddenly?',a:'A sudden increase in exhaust volume usually means a hole, crack, or disconnected section in the exhaust system. Utah road salt accelerates rust, and thermal cycling from our temperature extremes causes fatigue cracks. We find and fix the exact location.'},
    {q:'Will a bad exhaust system cause me to fail emissions?',a:'Yes. Exhaust leaks before the catalytic converter allow unmetered air into the system, triggering error codes and causing emission test failures. We repair the leak and verify the system passes before returning your vehicle.'}
  ],
  'catalytic-converter-service-south-salt-lake-ut': [
    {q:'Why are catalytic converters so expensive?',a:'Catalytic converters contain precious metals—platinum, palladium, and rhodium—that cost hundreds of dollars per ounce. The converter itself is the most expensive exhaust component. We source quality converters at the best available price.'},
    {q:'Can my catalytic converter be repaired instead of replaced?',a:'In rare cases, yes. If the converter substrate is intact but an upstream issue caused the failure (bad oxygen sensor, misfiring engine), fixing the root cause and clearing codes may resolve it. We always diagnose root cause first.'},
    {q:'How do I protect my catalytic converter from theft?',a:'We install catalytic converter anti-theft shields and cages. These bolt-on guards make cutting the converter extremely difficult and time-consuming, deterring thieves. Toyota Tacoma, Prius, and Honda Element are the most targeted vehicles in Utah.'}
  ],
  'strut-replacement-south-salt-lake-ut': [
    {q:'How do I know if my struts are worn out?',a:'Signs include: excessive bouncing after bumps, nose-diving when braking, body roll in corners, uneven tire wear, and clunking noises over bumps. If your car has over 80,000 miles, have struts inspected.'},
    {q:'Do I need an alignment after strut replacement?',a:'Yes, always. Replacing struts changes the suspension geometry. We include an alignment check with every strut replacement job to ensure proper tire wear and handling.'},
    {q:'What is the difference between struts and shocks?',a:'Struts are a structural part of the suspension—they support the vehicle weight and include the coil spring. Shocks only dampen movement and are not structural. Most modern cars use struts in front and either struts or shocks in the rear.'}
  ],
  'timing-belt-replacement-south-salt-lake-ut': [
    {q:'When should I replace my timing belt?',a:'Most manufacturers recommend replacement between 60,000–105,000 miles depending on the engine. Check your owner\'s manual for the exact interval. Do not wait until it breaks—on interference engines, a broken belt destroys the engine.'},
    {q:'What else should be replaced with the timing belt?',a:'We recommend replacing the tensioner, idler pulleys, and water pump at the same time. These components have the same service life and are already exposed during the job. Doing them together saves $300–$500 in future labor.'},
    {q:'How much does timing belt replacement cost?',a:'Timing belt replacement typically costs $500–$1,200 including the belt, tensioner, pulleys, and labor. Adding the water pump is an additional $150–$300 in parts. We provide a complete quote before starting.'}
  ],
  'welding-services-south-salt-lake-ut': [
    {q:'What types of automotive welding do you offer?',a:'We perform MIG and stick welding for exhaust system repair, frame patching, suspension bracket fabrication, exhaust manifold repair, and custom fabrication. If it\'s metal on a vehicle, we can likely weld it.'},
    {q:'Can you weld a cracked exhaust manifold?',a:'In many cases, yes. Cast iron manifolds can be welded if the crack is accessible and the metal is thick enough. Some cracks in thin areas or on complex castings are better addressed with replacement. We assess each situation individually.'},
    {q:'Is welding a permanent fix?',a:'A proper weld on good metal is as strong as or stronger than the original. However, if the surrounding metal is rusted thin, a weld patch is a temporary fix. We\'ll tell you honestly whether welding or replacement is the better long-term solution.'}
  ],
  'shock-replacement-south-salt-lake-ut': [
    {q:'How long do shocks last?',a:'Most shocks last 50,000–100,000 miles depending on driving conditions. Utah\'s rough roads, potholes, and mountain driving wear shocks faster than average. If your vehicle bounces excessively or feels floaty, they\'re likely worn.'},
    {q:'Can I replace just the rear shocks?',a:'Yes, but we recommend replacing in pairs (both rears or both fronts). Mixing old and new shocks creates uneven handling. If all four are due, replacing them together is most cost-effective.'},
    {q:'Do shocks affect braking distance?',a:'Yes. Worn shocks allow excessive weight transfer during braking, which increases stopping distance by 10–20%. This is especially dangerous on Utah\'s mountain descents and wet roads. Good shocks are a safety item, not just a comfort one.'}
  ],
  'complete-auto-service-south-salt-lake-ut': [
    {q:'What does a full vehicle inspection include?',a:'Our complete inspection covers engine, transmission, brakes, suspension, exhaust, cooling system, belts, hoses, fluids, tires, lights, and battery. We provide a written report with photos of any issues found, prioritized by urgency.'},
    {q:'Do I have to go to the dealer for maintenance to keep my warranty?',a:'No. Federal law (Magnuson-Moss Warranty Act) protects your right to have maintenance performed at any qualified shop without voiding your warranty. Just keep your receipts—we provide detailed invoices for your records.'},
    {q:'How often should I have my vehicle serviced?',a:'We recommend oil changes every 5,000–7,500 miles, brake inspections every 15,000 miles, and a comprehensive inspection annually. Utah\'s mountain driving, temperature extremes, and road salt mean shorter intervals than factory "normal" schedules suggest.'}
  ]
};

// Symptom-specific FAQs
const symptomFaqs = {
  'clutch-slipping': [
    {q:'Can I still drive with a slipping clutch?',a:'Temporarily, but it will get worse quickly. A slipping clutch generates extreme heat that accelerates wear exponentially. What might be a clutch disc replacement today can become a flywheel replacement tomorrow. Get it inspected as soon as possible.'},
    {q:'How much does clutch replacement cost?',a:'Clutch replacement typically costs $800–$1,800 depending on the vehicle. Trucks and performance vehicles cost more. If the flywheel needs resurfacing or replacement, add $200–$500. We provide a detailed quote before starting.'},
    {q:'How long does a new clutch last?',a:'A properly installed clutch lasts 60,000–100,000 miles under normal driving. Utah\'s hills and mountain driving reduce this. Manual transmission drivers in the Avenues or canyon communities may see 50,000–70,000 mile clutch life.'}
  ],
  'grinding-noise-shifting': [
    {q:'Why does my transmission grind when I shift?',a:'Grinding usually means the clutch isn\'t fully disengaging, or the synchronizers inside the transmission are worn. A failing clutch hydraulic system (master or slave cylinder) is the most common cause and is much cheaper to fix than internal transmission work.'},
    {q:'Is grinding when shifting an emergency?',a:'It\'s not immediately dangerous, but continued driving with a grinding transmission accelerates damage to synchronizers and gear teeth. What starts as a hydraulic issue can become a full transmission rebuild if ignored.'},
    {q:'Can grinding be fixed without replacing the transmission?',a:'Often yes. If the issue is the clutch hydraulic system, master cylinder, or slave cylinder, the repair is external and relatively affordable. Internal synchronizer wear requires transmission disassembly but isn\'t always a full rebuild.'}
  ],
  'burning-smell-clutch': [
    {q:'Why does my car smell like burning when I drive?',a:'A burning friction smell from a manual transmission vehicle is almost always the clutch overheating. This happens from riding the clutch in traffic, hill starts, or a slipping clutch disc. The smell is the friction material overheating.'},
    {q:'Is a burning clutch smell dangerous?',a:'The smell itself isn\'t toxic in brief exposure, but it signals your clutch is being damaged. Continued overheating can warp the flywheel and destroy the pressure plate, turning a simple clutch disc replacement into a more expensive repair.'},
    {q:'Can I fix a burning clutch smell without replacing the clutch?',a:'If the burning is from bad driving habits (riding the clutch), correcting the habit may stop it. But if the clutch disc is already damaged from overheating, it will continue to slip and smell until replaced. We inspect and give you an honest assessment.'}
  ],
  'clicking-noise-turning': [
    {q:'What causes clicking when I turn the steering wheel?',a:'Clicking during turns is the classic sign of a worn outer CV joint. The joint\'s protective boot has torn, allowing grease to escape and dirt to enter. The damaged joint clicks as it articulates through the turn.'},
    {q:'How urgent is a clicking CV joint?',a:'Moderately urgent. A clicking CV joint won\'t fail suddenly, but it is getting worse. Eventually the joint can seize or break, leaving you stranded. Most CV joints last 3–6 months after clicking starts, but don\'t push it.'},
    {q:'Is it cheaper to replace the CV joint or the whole axle?',a:'In most cases, replacing the complete CV axle (half-shaft) is actually cheaper than rebuilding individual joints because quality remanufactured axles are widely available and the labor is the same either way.'}
  ],
  'check-engine-light': [
    {q:'Can I drive with the check engine light on?',a:'A steady check engine light means something needs attention but isn\'t an emergency. A flashing check engine light means stop driving—the engine is misfiring and continued driving can destroy the catalytic converter. Come in for diagnosis either way.'},
    {q:'How much does check engine light diagnosis cost?',a:'We diagnose check engine lights with professional scan tools that read manufacturer-specific codes. Many shops charge $100+ just for diagnosis. We provide honest diagnosis and apply the fee toward the repair if you choose to proceed with us.'},
    {q:'Why did my check engine light come back after repair?',a:'Multiple issues can trigger the same light. If a different code appeared, it\'s a separate problem. If the same code returned, the root cause may not have been properly addressed. We dig deeper to find the actual root cause, not just clear codes.'}
  ],
  'engine-overheating': [
    {q:'What should I do if my car is overheating?',a:'Pull over immediately and turn off the engine. Do NOT open the radiator cap while hot—pressurized coolant can cause severe burns. Let it cool for at least 30 minutes, then check coolant level. Call us for a tow if it won\'t cool down.'},
    {q:'What causes a car to overheat?',a:'Common causes include low coolant from a leak, a failed water pump, a stuck thermostat, a clogged radiator, a broken cooling fan, or a blown head gasket. We diagnose the exact cause with a cooling system pressure test.'},
    {q:'How much damage does overheating cause?',a:'A single overheating event can warp the cylinder head, blow the head gasket, or crack the engine block. Repair costs range from $1,500 for a head gasket to $5,000+ for an engine replacement. This is why coolant leaks should never be ignored.'}
  ],
  'squeaking-brakes': [
    {q:'Why do my brakes squeak?',a:'Most brake squeaking is the wear indicator—a small metal tab that touches the rotor when pads are thin, creating a squeal as a warning. Other causes include dust, glazed pads, or cheap pad materials. The wear indicator means it\'s time for new pads.'},
    {q:'Are squeaking brakes dangerous?',a:'Squeaking from wear indicators means you have some pad life left—but not much. You typically have 1,000–2,000 miles before pads wear to metal-on-metal, which damages rotors and reduces stopping power. Don\'t wait for grinding.'},
    {q:'How much does brake pad replacement cost?',a:'Front brake pad replacement typically costs $150–$350 per axle including quality pads and labor. If rotors need resurfacing, add $100–$200. If rotors need replacement, add $200–$400. We inspect and quote before starting.'}
  ],
  'grinding-brakes': [
    {q:'Why are my brakes grinding?',a:'Grinding means your brake pads have worn completely through and metal is contacting metal. The steel backing plate of the pad is grinding against the rotor, damaging it with every stop. This is a safety emergency.'},
    {q:'Can I drive with grinding brakes?',a:'You shouldn\'t. Grinding brakes have severely reduced stopping power and are damaging your rotors with every stop. What starts as a $300 brake job becomes $600–$800 when rotors are destroyed. Get them fixed immediately.'},
    {q:'Will grinding brakes damage my rotors?',a:'Yes, absolutely. Metal-on-metal contact scores deep grooves into the rotor surface, making resurfacing impossible. The rotors must be replaced entirely. In extreme cases, the caliper pistons can also be damaged. Fix grinding brakes as soon as possible.'}
  ],
  'soft-brake-pedal': [
    {q:'Why does my brake pedal feel soft or spongy?',a:'Air in the brake lines, a leaking master cylinder, worn brake hoses, or a brake fluid leak all cause a soft pedal. Any brake system issue that prevents full hydraulic pressure is a safety concern that needs immediate attention.'},
    {q:'Is a soft brake pedal an emergency?',a:'Yes. A soft brake pedal means your braking system isn\'t building full pressure. If the pedal goes to the floor, you may have very limited stopping ability. Do not drive the vehicle—have it towed to our shop for immediate inspection.'},
    {q:'How much does it cost to fix a soft brake pedal?',a:'The cost depends on the cause. A brake fluid flush is $80–$120. A master cylinder replacement is $300–$500. A brake line replacement is $150–$300. We diagnose the exact cause before recommending the repair.'}
  ],
  'bouncy-ride': [
    {q:'Why does my car bounce after hitting a bump?',a:'If your vehicle bounces more than once after a bump, your shocks or struts are worn and can\'t control the spring oscillation. This is sometimes called the "bounce test"—push down on a corner of the car and if it bounces more than once, the dampers are shot.'},
    {q:'Are worn shocks a safety issue?',a:'Yes. Worn shocks increase braking distance, reduce cornering stability, and accelerate tire wear. On Utah\'s mountain roads and in winter conditions, worn shocks can make the difference between maintaining control and losing it.'},
    {q:'How much does strut or shock replacement cost?',a:'Strut replacement typically costs $400–$800 per pair (front or rear) including parts, labor, and alignment. Shock replacement is usually $200–$500 per pair. We recommend replacing in pairs for balanced handling.'}
  ],
  'loud-exhaust': [
    {q:'Why is my exhaust suddenly loud?',a:'A sudden increase in exhaust volume means a hole, crack, or disconnected section somewhere in the exhaust system. Common locations include flex pipes, muffler seams, and exhaust manifold connections. Utah road salt accelerates exhaust corrosion.'},
    {q:'Can I pass emissions with a loud exhaust?',a:'It depends on where the leak is. A leak before the catalytic converter can cause false readings and a failed emissions test. A leak after the converter (muffler area) won\'t affect emissions but is still illegal if excessively loud.'},
    {q:'Is it better to repair or replace exhaust components?',a:'For small holes or cracks in otherwise solid pipes, welding is cost-effective. For rusted-through sections, replacement is more reliable. We always recommend the most economical option that provides a lasting repair.'}
  ],
  'failed-emissions': [
    {q:'Why did my vehicle fail the Utah emissions test?',a:'Common causes include a faulty catalytic converter, bad oxygen sensors, engine misfires, EVAP system leaks, or an exhaust leak upstream of the converter. Each triggers specific diagnostic codes that we can read and interpret.'},
    {q:'How much does it cost to fix a failed emissions test?',a:'Costs vary widely. An oxygen sensor replacement might be $150–$300. A catalytic converter is $800–$2,500. An EVAP leak might be $100–$400. We diagnose the specific cause first so you know exactly what you\'re paying for.'},
    {q:'Can you guarantee my vehicle will pass emissions after repair?',a:'We diagnose the exact cause of failure, make the repair, and verify the vehicle passes with our own emissions testing equipment before returning it. If a new issue arises during testing, we\'ll let you know before proceeding.'}
  ],
  'default': [
    {q:'How do I know if this symptom is serious?',a:'Any unusual sound, smell, or behavior from your vehicle warrants inspection. Some symptoms are minor and inexpensive to fix, while others indicate developing problems that get more expensive if ignored. We provide honest assessments.'},
    {q:'How much does diagnosis cost?',a:'We provide thorough diagnostics using professional-grade scan tools and hands-on inspection. The diagnosis fee is applied toward the cost of repair if you choose to have the work done at our shop.'},
    {q:'How long does repair typically take?',a:'Most repairs are completed within 1–2 business days. Simple jobs like brake pads or fluid services are often same-day. Complex jobs like timing chain replacement or clutch replacement may take 2–3 days. We keep you informed throughout.'}
  ]
};

// Location-specific FAQs
function getLocationFaqs(location) {
  const name = location.name || location.n;
  const dist = location.distance || location.d;
  const isHome = location.isHome || location.home || false;
  
  if (isHome) {
    return [
      {q:'Where is Scott\'s Auto & Clutch located?',a:'We\'re at 144 W Crystal Ave in South Salt Lake, UT 84115. We\'re right between I-15 and State Street, just south of 3300 South. The Central Pointe TRAX station is a 3-minute walk from our shop.'},
      {q:'What are your hours?',a:'We\'re open Monday through Friday, 8:00 AM to 5:30 PM. Saturday appointments are available by request. Call (801) 485-4089 or text us to schedule.'},
      {q:'Do you offer free estimates?',a:'Yes. We provide free visual inspections and estimates for most services. For complex diagnostics requiring specialized equipment, we charge a diagnostic fee that is applied toward the repair cost if you proceed with us.'}
    ];
  }

  return [
    {q:`How far is Scott's Auto & Clutch from ${name}?`,a:`We're ${dist} from ${name}—a quick drive to 144 W Crystal Ave in South Salt Lake. Many ${name} customers drop off their vehicle and take TRAX to work from our nearby Central Pointe station.`},
    {q:`Do you service vehicles from ${name}?`,a:`Absolutely. ${name} is one of our most common service areas. We've been serving ${name} drivers since 1990 and understand the specific driving conditions and wear patterns that ${name} roads create.`},
    {q:`What's the best route from ${name} to your shop?`,a:`Most ${name} drivers reach us via State Street or I-15 to the 3300 South exit. We're at 144 W Crystal Ave, just west of State Street and south of 3300 South. Call (801) 485-4089 if you need directions.`}
  ];
}

// Geo clutch page FAQs
function getGeoFaqs(geo) {
  const name = geo.locationName || geo.ln;
  return [
    {q:`How much does clutch repair cost for ${name} drivers?`,a:`Clutch replacement typically costs $800–$1,800 depending on your vehicle. ${name} drivers who deal with hill starts or canyon driving may need flywheel resurfacing ($200–$500 additional). We provide exact quotes before starting work.`},
    {q:`How do I know if my clutch needs replacement?`,a:`Common signs include slipping (engine revs without speed increase), difficulty shifting, grinding noises, a burning smell, or a clutch pedal that engages very high. ${name} drivers should pay extra attention because local driving conditions accelerate clutch wear.`},
    {q:`Why should ${name} drivers choose Scott's for clutch repair?`,a:`We've specialized in clutch repair since 1990—it's in our name. We understand how ${name}'s driving conditions affect clutch components and use that knowledge for accurate diagnosis. Many ${name} drivers come to us after other shops couldn't fix the problem.`}
  ];
}

function getSymptomFaqs(symptom) {
  const slug = symptom.slug || '';
  // Try to match by slug keyword
  for (const key of Object.keys(symptomFaqs)) {
    if (key !== 'default' && slug.includes(key)) return symptomFaqs[key];
  }
  return symptomFaqs['default'];
}

module.exports = { serviceFaqs, getSymptomFaqs, getLocationFaqs, getGeoFaqs };
