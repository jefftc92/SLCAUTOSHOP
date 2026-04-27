// Page-specific FAQs for all page types
// Format: { q: 'question', a: 'answer' }

// ─── Service FAQs (fallback for services without inline faq[]) ───────────────
const serviceFaqs = {
  'timing-chain-repair-near-south-salt-lake-ut': [
    {q:'How much does timing chain replacement cost?',a:'Timing chain replacement typically ranges from $800–$2,500 depending on the engine. V6 and V8 engines with dual chains cost more due to additional labor. We provide a detailed quote before any work begins.'},
    {q:'What happens if I ignore a stretched timing chain?',a:'A stretched timing chain causes poor engine timing, rough idle, and reduced power. If the chain skips or breaks in an interference engine, it can bend valves and destroy the engine—turning a $1,500 repair into a $5,000+ engine replacement.'},
    {q:'How long does timing chain replacement take?',a:'Most timing chain jobs take 6–10 hours depending on the engine. Some vehicles like the GM 3.6L V6 require partial engine removal. We typically complete the job within 1–2 business days.'}
  ],
  'water-pump-replacement-near-south-salt-lake-ut': [
    {q:'How do I know if my water pump is failing?',a:'Common signs include coolant leaking from the front of the engine, a whining or grinding noise from the pump pulley, engine overheating, and steam from the radiator. Any of these warrant immediate inspection.'},
    {q:'Should I replace the timing belt with the water pump?',a:'If your engine uses a timing belt and the water pump is driven by it, absolutely—they share the same labor. Replacing both together saves $300–$500 in repeated labor costs. We always recommend this when applicable.'},
    {q:'How much does water pump replacement cost?',a:'Water pump replacement typically costs $400–$900 including parts and labor. Engines where the water pump is driven by the timing belt or chain cost more due to additional disassembly. We quote before we start.'}
  ],
  'exhaust-repair-near-south-salt-lake-ut': [
    {q:'Can you weld my exhaust instead of replacing it?',a:'Often yes. If the pipe or muffler has a small crack or hole, welding is a cost-effective repair. However, if the metal is rusted thin throughout, replacement is more reliable. We assess and recommend the most economical option that will actually last.'},
    {q:'Why is my exhaust so loud suddenly?',a:'A sudden increase in exhaust volume usually means a hole, crack, or disconnected section in the exhaust system. Utah road salt accelerates rust, and thermal cycling from our temperature extremes causes fatigue cracks. We find and fix the exact location.'},
    {q:'Will a bad exhaust system cause me to fail emissions?',a:'Yes. Exhaust leaks before the catalytic converter allow unmetered air into the system, triggering error codes and causing emission test failures. We repair the leak and verify the system passes before returning your vehicle.'}
  ],
  'catalytic-converter-service-near-south-salt-lake-ut': [
    {q:'Why are catalytic converters so expensive?',a:'Catalytic converters contain precious metals—platinum, palladium, and rhodium—that cost hundreds of dollars per ounce. The converter itself is the most expensive exhaust component. We source quality converters and always diagnose the root cause before recommending replacement.'},
    {q:'Can my catalytic converter be repaired instead of replaced?',a:'In rare cases, yes. If the converter substrate is intact but an upstream issue caused the failure—a bad oxygen sensor, misfiring engine—fixing the root cause and clearing codes may resolve it. We always find the cause first.'},
    {q:'How do I protect my catalytic converter from theft?',a:'We install catalytic converter anti-theft shields and cages. These bolt-on guards make cutting the converter extremely difficult and time-consuming, deterring thieves. Toyota Tacoma, Prius, and Honda Element are the most targeted vehicles in Utah.'}
  ],
  'strut-replacement-near-south-salt-lake-ut': [
    {q:'How do I know if my struts are worn out?',a:'Signs include excessive bouncing after bumps, nose-diving when braking, body roll in corners, uneven tire wear, and clunking noises over rough pavement. If your vehicle has over 80,000 miles, struts are worth inspecting even without obvious symptoms.'},
    {q:'Do I need an alignment after strut replacement?',a:'Yes, always. Replacing struts changes the suspension geometry. We include an alignment check with every strut replacement job to ensure proper tire wear and predictable handling.'},
    {q:'What is the difference between struts and shocks?',a:'Struts are a structural part of the suspension—they support the vehicle weight and include the coil spring. Shocks only dampen movement and are not structural. Most modern cars use struts in front and either struts or shocks in the rear.'}
  ],
  'timing-belt-replacement-near-south-salt-lake-ut': [
    {q:'When should I replace my timing belt?',a:'Most manufacturers recommend replacement between 60,000–105,000 miles depending on the engine. Check your owner\'s manual for the exact interval. Do not wait until it breaks—on interference engines, a broken belt can destroy the engine instantly.'},
    {q:'What else should be replaced with the timing belt?',a:'We recommend replacing the tensioner, idler pulleys, and water pump at the same time. These components have the same service life and are already exposed during the job. Doing them together saves $300–$500 in future labor.'},
    {q:'How much does timing belt replacement cost?',a:'Timing belt replacement typically costs $500–$1,200 including the belt, tensioner, pulleys, and labor. Adding the water pump is an additional $150–$300 in parts. We provide a complete quote before starting.'}
  ],
  'welding-services-near-south-salt-lake-ut': [
    {q:'What types of automotive welding do you offer?',a:'We perform MIG and stick welding for exhaust system repair, frame patching, suspension bracket fabrication, exhaust manifold repair, and custom fabrication. If it\'s metal on a vehicle, we can likely weld it.'},
    {q:'Can you weld a cracked exhaust manifold?',a:'In many cases, yes. Cast iron manifolds can be welded if the crack is accessible and the metal is thick enough. Some cracks in thin areas or on complex castings are better addressed with replacement. We assess each situation honestly.'},
    {q:'Is welding a permanent fix?',a:'A proper weld on good metal is as strong as or stronger than the original. However, if the surrounding metal is rusted thin, a weld patch is a temporary fix. We\'ll tell you honestly whether welding or replacement is the better long-term solution.'}
  ],
  'shock-replacement-near-south-salt-lake-ut': [
    {q:'How long do shocks last?',a:'Most shocks last 50,000–100,000 miles depending on driving conditions. Utah\'s rough roads, potholes, and mountain driving wear shocks faster than average. If your vehicle bounces excessively or feels floaty, they\'re likely worn.'},
    {q:'Can I replace just the rear shocks?',a:'Yes, but we recommend replacing in pairs—both rears or both fronts. Mixing old and new shocks creates uneven handling. If all four are due for replacement, doing them together is most cost-effective.'},
    {q:'Do shocks affect braking distance?',a:'Yes. Worn shocks allow excessive weight transfer during braking, which increases stopping distance by 10–20%. This is especially dangerous on Utah\'s mountain descents and wet roads. Good shocks are a safety item, not just a comfort one.'}
  ],
  'complete-auto-service-near-south-salt-lake-ut': [
    {q:'What does a full vehicle inspection include?',a:'Our complete inspection covers engine, transmission, brakes, suspension, exhaust, cooling system, belts, hoses, fluids, tires, lights, and battery. We provide a written report with any issues found, prioritized by urgency.'},
    {q:'Do I have to go to the dealer for maintenance to keep my warranty?',a:'No. Federal law (Magnuson-Moss Warranty Act) protects your right to have maintenance performed at any qualified shop without voiding your warranty. Keep your receipts—we provide detailed invoices for your records.'},
    {q:'How often should I have my vehicle serviced?',a:'We recommend oil changes every 5,000–7,500 miles, brake inspections every 15,000 miles, and a comprehensive inspection annually. Utah\'s mountain driving, temperature extremes, and road salt mean shorter intervals than factory normal schedules suggest.'}
  ]
};

// ─── Symptom FAQs — unique set for every symptom ────────────────────────────
const symptomFaqs = {
  'clutch-slipping': [
    {q:'Can I still drive with a slipping clutch?',a:'Temporarily, but it will deteriorate quickly. A slipping clutch generates extreme heat that accelerates wear exponentially. What might be a clutch disc replacement today can become a flywheel replacement tomorrow if you keep driving on it.'},
    {q:'How much does clutch replacement cost?',a:'Clutch replacement typically costs $800–$1,800 depending on the vehicle. Trucks and performance vehicles cost more. If the flywheel needs resurfacing or replacement, add $200–$500. We provide a detailed quote before starting any work.'},
    {q:'How long does a new clutch last?',a:'A properly installed clutch lasts 60,000–100,000 miles under normal driving. Utah\'s hills and mountain driving reduce this. Drivers who navigate the Avenues or canyon roads regularly may see 50,000–70,000 mile clutch life.'}
  ],
  'grinding-when-shifting': [
    {q:'Why does my transmission grind when I shift?',a:'Grinding usually means the clutch isn\'t fully disengaging, so you\'re forcing spinning gears together instead of letting them match speeds. A failing clutch hydraulic system—master or slave cylinder—is the most common and least expensive cause. Worn synchronizers inside the transmission are more serious.'},
    {q:'Is grinding when shifting an emergency?',a:'Not immediately dangerous, but continued driving with a grinding gearbox accelerates wear on synchronizers and gear teeth. What starts as a hydraulic issue can become a full transmission rebuild if ignored long enough.'},
    {q:'Can grinding be fixed without replacing the transmission?',a:'Often yes. If the grinding is caused by the clutch hydraulic system or a release component, the repair is external and relatively affordable. Internal synchronizer wear requires disassembly but isn\'t always a full rebuild—we\'ll tell you what we actually find.'}
  ],
  'stiff-clutch-pedal': [
    {q:'Why is my clutch pedal so hard to press?',a:'Increased pedal effort usually means a fraying clutch cable, a failing master or slave cylinder struggling to build pressure, or a pressure plate with weakened springs putting extra mechanical load on the pedal. Each has a different repair, which is why diagnosis matters before parts are ordered.'},
    {q:'Can a stiff clutch pedal be fixed without replacing the clutch?',a:'Often yes. If the stiffness is coming from the cable, hydraulic cylinders, or pivot points—rather than the clutch disc itself—the repair is limited to those components. We measure clutch disc wear at the same time so you have the full picture.'},
    {q:'How much does it cost to fix a stiff clutch pedal?',a:'Cable replacement typically runs $150–$300 including labor. Master or slave cylinder replacement is $200–$450. If the pressure plate is also failing, a complete clutch replacement is $800–$1,800. We quote the exact cause before any work begins.'}
  ],
  'transmission-slipping': [
    {q:'What causes a transmission to slip?',a:'In manual transmissions, slipping almost always means a worn clutch assembly. In automatics, low or burnt transmission fluid, worn clutch packs inside the unit, or failing solenoids are the common culprits. The repair path is very different depending on which system is involved.'},
    {q:'Can transmission slipping be fixed without a full rebuild?',a:'Frequently yes. Manual transmission slipping is usually a clutch replacement—not a transmission rebuild. Automatic slipping can sometimes be addressed with a fluid service or solenoid replacement. We road-test, pull codes, and inspect fluid condition before recommending any repair.'},
    {q:'Is transmission slipping dangerous?',a:'It can be, especially at freeway speeds—when a transmission pops out of gear or refuses to engage, you lose drive to the wheels unexpectedly. Slipping also tends to worsen quickly. Early diagnosis usually means a much simpler and cheaper repair.'}
  ],
  'hard-to-shift-gears': [
    {q:'Why is my manual transmission hard to shift?',a:'When a clutch doesn\'t fully disengage, you\'re trying to mesh moving gears against stationary ones—which creates resistance you feel through the shifter. Air in the hydraulic line, a failing cylinder, or a worn clutch cable are frequent causes and are often fixable without touching the clutch disc.'},
    {q:'Can hard shifting damage my transmission?',a:'Yes. Forcing a gearbox through hard shifts repeatedly wears the synchronizers that normally smooth each gear change. Synchronizer damage can turn a $400 hydraulic repair into a $1,500+ transmission rebuild if left unaddressed.'},
    {q:'How much does it cost to fix hard shifting?',a:'A hydraulic bleed or adjustment is $80–$150. Cylinder replacement runs $200–$450. If the clutch disc is also worn and needs replacement, that\'s $800–$1,800 all-in. We identify the actual cause before recommending any parts.'}
  ],
  'soft-clutch-pedal': [
    {q:'Why does my clutch pedal feel spongy or go to the floor?',a:'Air in the hydraulic line is the most common cause—the pedal feels soft because air compresses instead of transmitting pressure. A failing master or slave cylinder is more serious; when internal seals fail, the pedal can slowly sink under sustained pressure or drop to the floor without warning.'},
    {q:'How serious is a soft or spongy clutch pedal?',a:'It warrants attention this week, not next month. A soft pedal from air in the line is a bleed-and-done repair. But if a cylinder is seeping internally, it typically gets worse without warning—sometimes failing completely mid-drive. The earlier you catch it, the simpler the fix.'},
    {q:'Can a soft clutch pedal fix itself?',a:'No. Air doesn\'t disappear from a hydraulic system, and a seeping cylinder seal doesn\'t reseal itself. If you notice clutch fluid dripping near the firewall or a wet spot at the bell housing, there\'s an active leak that needs same-day attention.'}
  ],
  'burning-smell': [
    {q:'Why does my car smell like burning when I drive?',a:'That sharp, acrid burning smell from a manual transmission vehicle is almost always the clutch disc overheating from slipping against the flywheel. It happens from riding the clutch in traffic, aggressive hill starts, or a disc that\'s worn thin and slipping under normal load.'},
    {q:'Is a burning clutch smell dangerous to ignore?',a:'The smell itself isn\'t toxic in brief exposure, but it signals active damage. Each overheating event permanently burns off friction material and can glaze the flywheel surface, turning a disc-only replacement into a more expensive job that includes flywheel resurfacing or replacement.'},
    {q:'Can I fix a burning clutch smell without replacing the clutch?',a:'If the overheating is from a driving habit—riding the clutch in traffic or on hills—correcting the habit may stop it before permanent damage is done. But if the disc is already burned or glazed, it will continue slipping and smelling until replaced. We inspect and tell you honestly what we find.'}
  ],
  'clicking-when-turning': [
    {q:'What causes clicking when I turn the steering wheel?',a:'Clicking that appears only during turns—especially at low speed—is the classic sign of a worn outer CV joint. The joint\'s protective boot has torn, grease has escaped, and road grit has contaminated the bearing surfaces. The damaged joint clicks as it articulates through the turn.'},
    {q:'How urgent is a clicking CV joint?',a:'Moderately urgent. CV joints don\'t usually fail suddenly—they click for weeks or months while the internal bearings progressively wear. Eventually the joint can bind or break entirely, leaving you stranded. Most clicking CV joints last 2–4 months before failing, but there\'s no reliable way to predict exactly when.'},
    {q:'Is it cheaper to replace just the CV joint or the whole axle?',a:'In most cases, replacing the complete CV axle (half-shaft) is actually more cost-effective than rebuilding individual joints. Quality remanufactured axles are widely available and the labor to swap the whole axle is identical to rebuilding a single joint on the bench.'}
  ],
  'vibration-when-accelerating': [
    {q:'Why does my car vibrate when I accelerate?',a:'Vibration that builds during acceleration points to a drivetrain component that\'s damaged or out of balance under load. A worn inner CV joint is the most common cause on front-wheel-drive vehicles. On rear-wheel-drive and 4WD vehicles, a worn U-joint or unbalanced driveshaft produces similar sensations. Vibration pattern—worse under power vs. at constant speed vs. coasting—helps isolate the source.'},
    {q:'Is acceleration vibration a safety issue?',a:'It can be. A failing CV joint or U-joint that breaks completely removes drive to that wheel—or drops the driveshaft in the case of a broken U-joint, which can cause serious loss of control. A vibration that\'s getting progressively worse deserves diagnosis before it reaches that point.'},
    {q:'How much does it cost to fix vibration when accelerating?',a:'A CV axle replacement typically runs $300–$600 per side including parts and labor. A driveshaft balance or U-joint replacement is $200–$500. Wheel bearing replacement is $250–$500. We road-test first to characterize the vibration, then inspect the most likely components.'}
  ],
  'soft-brake-pedal': [
    {q:'Why does my brake pedal feel soft or spongy?',a:'Air in the brake lines, a leaking master cylinder, worn brake hoses that expand under pressure, or a brake fluid leak all cause a soft pedal. Any condition that prevents full hydraulic pressure is a braking safety issue that warrants same-day inspection.'},
    {q:'Is a soft brake pedal an emergency?',a:'Yes. A soft pedal means your braking system isn\'t building full pressure—which means your stopping distance is longer than it should be. If the pedal goes to the floor, do not drive the vehicle. Have it towed for immediate inspection.'},
    {q:'How much does it cost to fix a soft brake pedal?',a:'A brake fluid flush is $80–$120. Master cylinder replacement is $300–$500. A brake line replacement is $150–$300. A caliper rebuild or replacement is $200–$400 per corner. We diagnose the exact cause before recommending any repair.'}
  ],
  'squeaking-brakes': [
    {q:'Why do my brakes squeak?',a:'Most brake squeaking is the wear indicator—a small metal tab that contacts the rotor when pads reach approximately 2–3mm remaining, producing a squeal as a warning signal. Other causes include brake dust, glazed pad surfaces, or low-quality pad materials. The wear indicator means it\'s time to act.'},
    {q:'Are squeaking brakes dangerous?',a:'Squeaking from wear indicators means you have some pad life left—but not much. You typically have 1,000–2,000 miles before pads wear through to metal-on-metal contact, which reduces stopping power and damages rotors. Don\'t wait for grinding.'},
    {q:'How much does brake pad replacement cost?',a:'Front brake pad replacement typically costs $150–$350 per axle including quality pads and labor. If rotors need resurfacing, add $100–$200. If rotors need full replacement, add $200–$400. We inspect and quote the complete job before starting.'}
  ],
  'grinding-brakes': [
    {q:'Why are my brakes grinding?',a:'Metal-on-metal grinding means your brake pads have worn completely through—the steel backing plate is now contacting the rotor directly. This is also what happens when a caliper seizes and keeps a pad pressed against the rotor continuously. Either way, the rotors are being damaged with every stop.'},
    {q:'Can I drive with grinding brakes?',a:'You shouldn\'t. Grinding brakes have reduced stopping power and are destroying your rotors with every mile driven. What starts as a $300 brake job becomes $600–$800 when rotors are scored too deeply to resurface. Get them inspected immediately.'},
    {q:'Will grinding brakes always require new rotors?',a:'Not always—it depends on how long the metal contact has been occurring. If caught quickly, rotors can sometimes be resurfaced. Once deep grooves are cut in, replacement is the only option. We measure rotor thickness and surface condition to make the right call.'}
  ],
  'steering-vibration': [
    {q:'Why does my steering wheel shake?',a:'Vibration through the steering wheel when braking usually means warped front rotors—the pads are clamping an uneven surface with every wheel rotation. At highway speeds without braking, vibration points more toward out-of-balance tires, a worn wheel bearing, or loose tie rod ends.'},
    {q:'Is steering vibration dangerous?',a:'It depends on the cause. Warped rotors reduce braking effectiveness and increase stopping distance. A loose tie rod end or worn ball joint is more serious—these components can fail suddenly at speed, causing a loss of steering control. Vibration that appears suddenly or worsens quickly should be inspected that day.'},
    {q:'Can steering vibration be caused by brakes, tires, or suspension all at once?',a:'Yes—and they can overlap, making the symptom harder to pin down without a proper diagnosis. We measure rotor runout with a dial indicator, check front-end components for play, and evaluate tire condition and balance before recommending any repair.'}
  ],
  'vibration-when-braking': [
    {q:'Why does my car shudder when I brake?',a:'A rhythmic pulsation or shudder when braking is the textbook symptom of rotor disc thickness variation—the brake pads ride over a rotor surface that isn\'t perfectly flat, and you feel every high and low spot as a vibration through the pedal. Rotors warp from heat cycling, aggressive braking, or uneven caliper pressure from a stuck slide pin.'},
    {q:'Can I drive with rotor vibration?',a:'Yes, but braking efficiency is reduced and it will get progressively worse. The same heat cycles that warped the rotor continue to distort it further with every use. Most rotors that are causing noticeable pedal pulsation need attention within the next few thousand miles.'},
    {q:'Can warped rotors be resurfaced instead of replaced?',a:'Modern vehicles often come with rotors that are close to the minimum thickness specification from the factory, leaving little material for resurfacing. We measure actual rotor thickness before making that call—if there\'s enough material, resurfacing saves $150–$200 per axle over full replacement.'}
  ],
  'engine-rattling': [
    {q:'What causes engine rattling only at startup?',a:'A metallic rattle in the first 2–5 seconds after a cold start that fades once the engine warms is the most recognizable sign of a stretched timing chain. The chain slaps against its guides before oil pressure builds enough to tension the system. The fact that it fades doesn\'t make it harmless—every cold start is stressing the guides and tensioner.'},
    {q:'Is cold-start engine rattling urgent?',a:'Yes. A stretched timing chain doesn\'t repair itself—it continues to stretch. If the chain skips a tooth or breaks in an interference engine, pistons and valves can collide, resulting in catastrophic engine damage that costs $4,000–$8,000 to fix. Catching it at the rattle stage means a $1,000–$2,500 timing service instead.'},
    {q:'How is a timing chain problem diagnosed?',a:'We physically inspect chain stretch using measurement tools and check tensioner and guide condition. If the chain has already jumped, we use a scan tool to check cam-to-crank correlation before any disassembly. This tells us the full scope of the problem before a quote is given.'}
  ],
  'check-engine-timing': [
    {q:'What do timing-related check engine codes actually mean?',a:'Codes like P0016, P0017, P0340, or P0341 tell your engine computer that the relationship between the crankshaft and camshaft positions is off. Engine timing is precise to fractions of a degree—even small deviations cause rough running, power loss, and poor fuel economy. The underlying cause can be mechanical (worn chain) or electrical (failed cam sensor, VVT actuator).'},
    {q:'Can I drive with a timing-related check engine light?',a:'Cautiously and briefly. A P0016 or P0017 correlation code means timing is off enough that the computer detected it—which means performance and fuel economy are already affected. In interference engines, a chain that\'s jumped a tooth is inches away from catastrophic valve contact. We recommend prompt diagnosis, not driving until a convenient time.'},
    {q:'How is a timing chain fault diagnosed accurately?',a:'Scan tool data alone isn\'t enough—codes point toward the timing system, but the cause (stretched chain, failed VVT solenoid, low oil pressure, clogged VVT passages, bad cam sensor) requires both electronic and mechanical inspection. We check all of these before recommending parts.'}
  ],
  'check-engine-light': [
    {q:'Can I drive with the check engine light on?',a:'A steady check engine light means something needs attention but isn\'t an immediate emergency. A flashing check engine light means stop driving—the engine is actively misfiring and continued driving can destroy the catalytic converter in minutes. Either way, come in for diagnosis.'},
    {q:'How much does check engine light diagnosis cost?',a:'We use professional scan tools that read manufacturer-specific codes and capture live sensor data—not just the basic code number. We explain what the code means in plain language and tell you the urgency before recommending any repair.'},
    {q:'Why did my check engine light come back after it was repaired?',a:'Multiple separate faults can trigger the same light. If a different code returned, it\'s a new problem. If the exact same code returned, the root cause may not have been fully addressed. We always verify the fault is real and find the underlying cause rather than just clearing codes.'}
  ],
  'engine-overheating': [
    {q:'What should I do if my car is overheating right now?',a:'Pull over immediately and turn off the engine. Do NOT open the radiator cap while the system is hot—pressurized coolant can cause severe burns. Let it cool for at least 30 minutes before checking the coolant level. If the gauge is in the red, call for a tow rather than trying to make it to a shop.'},
    {q:'What causes a car to overheat?',a:'Common causes include a coolant leak reducing system volume, a failed water pump that stops coolant circulation, a thermostat stuck in the closed position, a clogged radiator that can\'t dissipate heat, a broken cooling fan, or a head gasket leak. We pressure-test the cooling system and check all components to find the actual cause.'},
    {q:'How much engine damage does a single overheating event cause?',a:'It depends on severity and duration. A brief overheat may cause no permanent damage. A significant overheat can warp the aluminum cylinder head or blow the head gasket—repairs that run $1,500–$3,500. A severe event can crack the block. This is why overheating demands immediate action, not waiting to see if it happens again.'}
  ],
  'coolant-leak': [
    {q:'Where do coolant leaks usually come from?',a:'The most common sources are the water pump weep hole (a designed warning that the internal seal is failing), radiator hose connections where clamps have softened, the radiator core itself from corrosion or impact, and in more serious cases, the head gasket. A pressure test of the cooling system finds leaks that aren\'t visible to the naked eye.'},
    {q:'How urgent is a coolant leak?',a:'A small seep can leave you stranded within days if the hose fails completely or if coolant level drops low enough to overheat the engine. Low coolant is the leading cause of roadside overheating. A leak that\'s actively dripping or growing warrants same-week attention at minimum.'},
    {q:'Can I use stop-leak products to fix a coolant leak?',a:'Stop-leak products can mask a minor seep temporarily, but they don\'t solve the underlying failure. They can also clog the water pump impeller, radiator passages, and heater core—turning a simple hose or water pump replacement into a much larger cooling system overhaul. We don\'t recommend them as a solution.'}
  ],
  'loud-exhaust': [
    {q:'Why is my exhaust suddenly so loud?',a:'A sudden increase in exhaust volume means a hole, crack, or separated joint somewhere in the system. Common failure points include flex pipes (which fatigue from engine movement), muffler seams that rust through, and exhaust manifold gaskets that fail. Utah\'s road salt and freeze-thaw cycles accelerate rust on any exposed exhaust metal.'},
    {q:'Can I pass Utah emissions with a loud exhaust?',a:'It depends on where the leak is. A leak upstream of the catalytic converter introduces outside air that disrupts O2 sensor readings, often triggering a check engine light and causing an emissions failure. A leak downstream of the converter—muffler area—won\'t affect emissions but may still fail a visual inspection.'},
    {q:'Should I repair or replace the exhaust section that\'s leaking?',a:'For small holes or cracks in otherwise solid pipe, welding is cost-effective and permanent. For rusted-through sections where the surrounding metal is paper-thin, welding won\'t hold and pipe replacement is necessary. We inspect the whole system, not just the obvious failure point, so you\'re not back in six months with the next section.'}
  ],
  'exhaust-smell-in-cabin': [
    {q:'Why do I smell exhaust fumes inside my car?',a:'Exhaust fumes entering the cabin means combustion gases—including carbon monoxide—are finding a path in from outside. The most common entry points are exhaust leaks routed under the floorpan, a cracked manifold near the firewall, and deteriorated body seals or floor grommets that draw fumes in under suction. The HVAC fresh-air intake at the base of the windshield can pull in fumes from a leak directly below.'},
    {q:'Is exhaust smell inside the car dangerous?',a:'Yes. Carbon monoxide is colorless and odorless—the exhaust smell you detect comes from other combustion byproducts, but CO is present too. It causes headaches, nausea, confusion, and at higher concentrations, loss of consciousness. Roll down the windows immediately and don\'t drive the vehicle with passengers until it\'s repaired.'},
    {q:'What should I do right now if I smell exhaust while driving?',a:'Open all windows immediately to ventilate the cabin. If the smell is strong or you feel any headache or dizziness, pull over safely and step outside. Don\'t dismiss it as a one-time thing—CO exposure is cumulative. Have the vehicle inspected before driving it again, especially with passengers.'}
  ],
  'failed-emissions': [
    {q:'Why did my vehicle fail the Utah emissions test?',a:'The most common causes are a worn catalytic converter that can\'t reduce pollutants below Utah\'s threshold, a failing oxygen sensor skewing the fuel mixture, engine misfires sending raw fuel through the exhaust, or EVAP system leaks. Each has a specific diagnostic code that tells us what system is involved—but the code alone doesn\'t tell us why the component failed.'},
    {q:'How much does it cost to fix a failed emissions test?',a:'Costs vary widely depending on the actual cause. An oxygen sensor replacement runs $150–$300. An EVAP leak repair is $100–$400. A catalytic converter is $800–$2,500 depending on the vehicle. We diagnose the root cause first—replacing a converter on a misfiring engine will fail the new converter within months.'},
    {q:'Can you guarantee my car will pass the retest after repair?',a:'We diagnose the exact failure cause, make the repair, and verify readiness monitors are complete using our own testing equipment before returning the vehicle. Our goal is a first-attempt retest pass, not just getting close to the threshold.'}
  ],
  'sulfur-smell': [
    {q:'Why does my exhaust smell like rotten eggs?',a:'Hydrogen sulfide in exhaust gases is normally converted by a healthy catalytic converter. When you smell it, the converter either can\'t process it (worn converter) or is being overwhelmed (engine running too rich from a fuel system or sensor issue). P0420 and P0430 codes often appear alongside this smell.'},
    {q:'Does a sulfur smell always mean I need a new catalytic converter?',a:'Not necessarily. A rich fuel condition—from a stuck injector, bad pressure regulator, or failing oxygen sensor—produces the smell by overwhelming the converter\'s capacity, not because the converter itself is defective. Installing a new converter on an engine with an unresolved rich condition will fail the replacement within months. We find the cause before recommending parts.'},
    {q:'Can a rotten-egg exhaust smell cause health problems?',a:'Hydrogen sulfide at the concentrations produced by a failing converter isn\'t directly toxic in brief exposure, but it\'s a strong indicator that the converter is no longer reducing other harmful exhaust compounds including hydrocarbons and carbon monoxide. The smell is as much a warning about what you can\'t smell as what you can.'}
  ],
  'bouncy-ride': [
    {q:'Why does my car bounce two or three times after a bump?',a:'That repeated bouncing after a road irregularity—rather than a single dampened thud—means your shocks or struts have lost their damping ability. They can no longer control the spring\'s oscillation after compression. Push down firmly on any corner of your car and release it; if it bounces more than once, the dampers on that corner are worn.'},
    {q:'Are worn shocks a safety issue or just a comfort issue?',a:'Both, but the safety aspect gets underestimated. Worn shocks increase braking distance because the nose pitches more under braking, reduce cornering stability, and cause tires to lose contact with the road on uneven surfaces. In an emergency stop, the difference between firm and worn shocks is measurable stopping distance.'},
    {q:'How much does strut or shock replacement cost?',a:'Strut replacement typically costs $400–$800 per pair including parts, labor, and alignment. Shock replacement is usually $200–$500 per pair. We replace in pairs on each axle for balanced handling, and we inspect the opposing pair while we\'re working so you have a complete picture of their condition.'}
  ],
  'nose-dive-braking': [
    {q:'Why does my car dip so sharply when I brake?',a:'Nose dive under braking is weight transfer—and the front struts\' job is to resist it. When struts lose their damping force, the front end drops sharply because there\'s nothing controlling the spring compression. The more weight that transfers forward, the less rear-tire contact patch you have for braking, which extends stopping distance.'},
    {q:'Is nose dive when braking a safety concern?',a:'Yes. Beyond the unsettling feel, exaggerated nose dive means rear tires are partially unloaded during braking—they contribute less stopping force. In an emergency stop, especially on Utah\'s wet or snow-packed roads, this reduces braking effectiveness at the moment you need it most.'},
    {q:'Does nose dive also affect tire wear?',a:'Often yes. On vehicles with MacPherson strut suspension, struts are structural components that affect camber angle. Worn struts frequently cause inner edge tire wear as a secondary symptom—which is why we check tire wear patterns alongside suspension condition during any strut inspection.'}
  ],
  'uneven-tire-wear': [
    {q:'What causes tires to wear unevenly?',a:'The wear pattern tells a diagnostic story. Inner edge wear usually means excessive negative camber from worn suspension or misalignment. Outer edge wear points to positive camber or chronic under-inflation. Scalloped or cupped wear across the tread is almost always worn shocks or struts allowing the tire to bounce and skip rather than maintain road contact.'},
    {q:'Should I fix the alignment or suspension before buying new tires?',a:'Always. Replacing tires without correcting the underlying cause will produce the same uneven wear on your expensive new set. Depending on severity, you can sometimes rotate tires to even the wear before replacement—but the suspension or alignment cause must be addressed first regardless.'},
    {q:'Can uneven tire wear be reversed by rotating tires?',a:'Mild feathering or slight edge wear can be improved with rotation to a position where the load profile is reversed. Scalloped or cupped wear from bouncing is permanent—that material is gone and the irregular surface won\'t smooth out. We\'ll advise whether rotation helps or whether the tires are too far gone to recover.'}
  ],
  'rough-ride-over-bumps': [
    {q:'Why does every bump feel so harsh in my car?',a:'When shocks or struts lose their hydraulic damping ability, the spring\'s energy isn\'t absorbed—it\'s transmitted directly to the cabin. The result is sharp, jarring impacts instead of dampened thuds. Shock absorbers degrade gradually over years, so most drivers adapt to the worsening ride without realizing how far it\'s fallen from new.'},
    {q:'How are shocks and struts different when it comes to ride quality?',a:'Both provide hydraulic damping, but struts are structural—they include the coil spring and are a load-bearing suspension member. Shock absorbers are supplemental dampers only. Both affect ride harshness the same way when worn, but strut replacement requires spring compressors and a subsequent wheel alignment, while shock replacement is simpler.'},
    {q:'Do rough-riding shocks need to be replaced in pairs?',a:'Yes. We always replace shocks in axle pairs—both rears or both fronts—to maintain even handling balance. Installing one new shock next to one worn shock creates pull and uneven cornering. If all four are worn, replacing them together in one visit is most cost-effective.'}
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
      {q:'Where is Scott\'s Auto & Clutch located?',a:'We\'re at 144 W Crystal Ave in South Salt Lake, UT 84117. We\'re right between I-15 and State Street, just south of 3300 South. The Central Pointe TRAX station is a 3-minute walk from our shop.'},
      {q:'What are your hours?',a:'We\'re open Monday through Friday, 8:00 AM to 5:30 PM. Saturday appointments are available by request. Call (801) 485-4089 or text us to schedule.'},
      {q:'Do you offer free estimates?',a:'Yes. We provide free visual inspections and estimates for most services. For complex diagnostics requiring specialized equipment, we charge a diagnostic fee that is applied toward the repair cost if you proceed with us.'}
    ];
  }

  return [
    {q:`How far is Scott's Auto & Clutch from ${name}?`,a:`We're ${dist} from ${name}—a quick drive to 144 W Crystal Ave in South Salt Lake. Many ${name} customers drop off their vehicle and take TRAX to work from our nearby Central Pointe station.`},
    {q:`Do you service vehicles from ${name}?`,a:`Absolutely. ${name} is one of our most common service areas. We've been serving ${name} drivers since 1990 and understand the specific driving conditions and wear patterns that come with the area.`},
    {q:`What's the best route from ${name} to your shop?`,a:`Most ${name} drivers reach us via State Street or I-15 to the 3300 South exit. We're at 144 W Crystal Ave, just west of State Street. Call (801) 485-4089 if you need turn-by-turn directions.`}
  ];
}

// ─── Geo clutch page FAQs — unique per city ──────────────────────────────────
const geoFaqMap = {
  'clutch-repair-near-sugar-house-ut': [
    {q:'How does Sugar House terrain affect clutch wear?',a:'Sugar House\'s hills accelerate clutch wear significantly. The steep grades on 2100 South and 1300 East force repeated uphill clutch engagements under load. Hill-start drivers in Sugar House typically need clutch service 15,000–20,000 miles sooner than flat-terrain drivers with the same vehicle.'},
    {q:'How much does clutch repair cost for Sugar House drivers?',a:'Clutch replacement typically costs $800–$1,800 depending on your vehicle. Because Sugar House\'s hills put extra stress on the flywheel surface, we always inspect flywheel condition during any clutch job—resurfacing adds $200–$400 if needed, and skipping it risks the new clutch wearing prematurely.'},
    {q:'My car rolls back on Sugar House hills before the clutch catches—what does that mean?',a:'If your engagement point has shifted to near the top of pedal travel and the car rolls before catching, the clutch disc is wearing thin. The friction material is losing its ability to grip quickly under load. This is the stage where replacement prevents you from getting stranded on a hill.'}
  ],
  'clutch-repair-near-millcreek-ut': [
    {q:'Why do Millcreek canyon drivers burn through clutches faster?',a:'The stop-start pattern at the Millcreek Canyon toll booth alone causes dozens of clutch engagements in a few hundred feet of road. Add switchback climbing in first or second gear and descents where drivers downshift to engine-brake, and Millcreek canyon-access clutches can wear 10,000–15,000 miles sooner than identical vehicles on flat terrain.'},
    {q:'How far is your shop from Millcreek, and is the drive worth it?',a:'We\'re 3 miles west of Millcreek—about 7 minutes on 3300 South. We\'ve been the clutch specialist for Millcreek drivers since 1990, which means we\'ve seen the specific wear patterns canyon driving creates. A clutch replaced correctly the first time is worth more than a cheaper job done nearby.'},
    {q:'My clutch slips when I downshift to engine-brake on canyon descents—what\'s wrong?',a:'Slipping on downshifts while descending means the disc surface is glazed from heat. Canyon descents generate significant heat in the clutch even when used correctly. A glazed disc won\'t improve—once the surface is hardened and smooth, it can\'t develop the grip it had when new. Replacement is the fix.'}
  ],
  'clutch-repair-near-murray-ut': [
    {q:'Does State Street stop-and-go traffic wear clutches faster in Murray?',a:'Yes. Murray commuters who drive State Street daily engage and disengage their clutch hundreds more times per trip than highway drivers. The Fashion Place corridor between 5900 South and 6400 South is especially brutal for manual transmissions—the signal timing forces full stops at nearly every block.'},
    {q:'How much does clutch repair cost, and are there cheaper options in Murray?',a:'Clutch replacement runs $800–$1,800 depending on your vehicle. There are general shops closer to Murray, but clutch diagnosis requires specialist experience—misdiagnosed clutch problems often lead to unnecessary parts and repeat visits. We\'ve been doing clutch work since 1990 and it\'s our primary specialty.'},
    {q:'I ride the clutch in Fashion Place traffic to stay in gear—is that bad?',a:'It\'s one of the fastest ways to wear out a clutch. Partially engaging the clutch in traffic keeps the disc slipping against the flywheel under load, generating heat with every second. Use neutral and the brake instead. A driver who breaks this habit can extend clutch life by 20,000–30,000 miles.'}
  ],
  'clutch-repair-near-salt-lake-city-ut': [
    {q:'Are Avenues hill starts that hard on a clutch?',a:'Capitol Hill and Avenues streets regularly exceed 15% grade—among the steepest in the valley. A hill start on a 15% grade puts two to three times the load on the clutch disc compared to a flat start. Daily Avenues commuters should expect clutch replacement 20,000–30,000 miles earlier than valley-floor drivers with the same vehicle.'},
    {q:'Can Salt Lake City drivers use TRAX to get to your shop?',a:'Yes—TRAX makes our shop genuinely convenient. Take any Red or Blue Line to Central Pointe station and we\'re a 3-minute walk. Drop your vehicle with us in the morning, commute to work downtown on TRAX, and pick up that evening.'},
    {q:'My clutch engagement point is near the top of the pedal—do I need replacement soon?',a:'If the clutch fully releases only in the final inch of pedal travel, yes—that\'s a strong sign the disc is worn thin. Avenues drivers should take this seriously: a clutch that fails on an uphill street is both inconvenient and a hazard. We recommend not waiting more than a few weeks to have it inspected.'}
  ],
  'clutch-repair-near-taylorsville-ut': [
    {q:'Why does Taylorsville\'s I-215 interchange wear clutches hard?',a:'The I-215 on-ramps in Taylorsville are notably short, requiring full-throttle clutch engagement from near-standstill in first gear. If you use these ramps daily, you\'re loading your clutch disc at maximum pressure every commute. That high-RPM, high-load engagement pattern is harder on the disc than slow city driving.'},
    {q:'How far is the drive to your shop from Taylorsville?',a:'We\'re 5 miles east—a 10-minute drive on 4700 South directly to our shop in South Salt Lake. Most Taylorsville drivers use 4700 South or the I-215 East interchange. No freeway required if you prefer surface streets.'},
    {q:'My clutch shudders when I accelerate from the 4700 South lights—what does that mean?',a:'A shuddering clutch under acceleration usually means the disc surface is uneven from heat cycling—it grabs unevenly across its surface. Unlike a slipping clutch, shudder won\'t improve on its own. The uneven contact accelerates disc wear until full replacement is needed.'}
  ],
  'clutch-repair-near-west-valley-city-ut': [
    {q:'Can event traffic near USANA Amphitheatre actually damage a clutch in one evening?',a:'Yes. Stop-and-go traffic at walking speeds on 5600 West—especially if you\'re riding the clutch to control speed in the crowd—generates enough heat to glaze the disc surface in a single concert or event. A burning smell after that evening is a warning that your clutch absorbed more heat than it should have.'},
    {q:'How much does clutch repair cost for West Valley City drivers?',a:'Clutch replacement typically runs $800–$1,800. West Valley\'s stop-and-go on 3500 South puts above-average wear on throw-out bearings in addition to the disc—so we inspect the full release system, not just the disc and pressure plate, during any clutch job.'},
    {q:'How far is the drive to Scott\'s from West Valley City?',a:'We\'re 7 miles east—about 12 minutes on 3500 South. It\'s a direct route with no freeway required. We\'re open Monday–Friday 8 AM–5:30 PM, and we can often fit a diagnosis appointment within a day or two of calling.'}
  ],
  'clutch-repair-near-holladay-ut': [
    {q:'My clutch only slips when cold—is that a flywheel problem?',a:'Cold slipping that improves once warmed up is often a glazed flywheel surface. The disc needs the flywheel to be slightly rough to grip properly; a polished or glazed surface reduces grip when both components are cold and contracting. We always inspect the flywheel during clutch replacement—resurfacing or replacing it is essential for a lasting repair.'},
    {q:'How does Big Cottonwood Canyon access affect clutch life in Holladay?',a:'The thermal cycle is the key factor: flat valley driving heats the clutch gradually, then canyon climbing in first or second gear generates intense heat, followed by engine-braking descents that cycle the flywheel temperature again. This repeated heating and cooling accelerates both disc wear and flywheel glazing for Holladay canyon-access drivers.'},
    {q:'How far is your shop from Holladay, and what\'s the route?',a:'We\'re 5 miles north on Highland Drive—a straight 9-minute drive with no freeway required. Highland Drive becomes State Street as you approach our shop. We\'re at 144 W Crystal Ave, just west of State Street at the 3300 South area.'}
  ],
  'clutch-repair-near-cottonwood-heights-ut': [
    {q:'Why do Little Cottonwood Canyon drivers need clutch specialists specifically?',a:'Little Cottonwood has the steepest sustained grade of any paved road in the Salt Lake Valley. Climbing toward Snowbird or Alta in first or second gear—especially in slow canyon traffic during traction-law conditions—puts extraordinary heat into the clutch disc and pressure plate. General mechanics see this infrequently; we see it regularly from Cottonwood Heights customers.'},
    {q:'If I smell burning mid-canyon, should I pull over or keep going?',a:'Pull over immediately and let the clutch cool for at least 5 minutes. A clutch that\'s already burning is generating enough heat to glaze the disc surface and potentially warp the flywheel. Five minutes of cooling can prevent permanent damage. If the smell continues after cooling, the clutch needs replacement—don\'t push on to the resort.'},
    {q:'How much does clutch repair cost for Cottonwood Heights drivers?',a:'Clutch replacement runs $800–$1,800 depending on your vehicle. Canyon drivers should budget for flywheel resurfacing ($200–$400 additional) in roughly 40% of cases—the extreme heat cycles that Cottonwood Heights roads create leave flywheel surfaces glazed more often than valley driving.'}
  ],
  'clutch-repair-near-sandy-ut': [
    {q:'Sandy\'s 10600 South has long red-light cycles—how should I wait in a manual?',a:'Use neutral and the brake, not first gear with the clutch in. Resting your foot on the clutch pedal while stopped loads the throw-out bearing continuously under engine vibration. Sandy\'s long light cycles amplify this—a driver who holds the clutch at every 10600 South light can double their throw-out bearing wear over a year of commuting.'},
    {q:'How do I reach your shop from Sandy via TRAX?',a:'Take the TRAX Blue Line north to the Central Pointe station—we\'re a 3-minute walk from the platform. It\'s a straightforward option for Sandy drivers who want to drop their vehicle and continue their day without waiting. Call ahead and we\'ll have you checked in when you arrive.'},
    {q:'How much does clutch replacement cost for Sandy vehicles?',a:'Clutch replacement typically runs $800–$1,800 depending on the make and model. Sandy\'s mix of I-15 merging and foothill hill starts tends to wear both the disc and the throw-out bearing simultaneously—so we inspect the full release system during any clutch job rather than just the obvious worn component.'}
  ],
  'clutch-repair-near-draper-ut': [
    {q:'Why is Point of the Mountain so hard on clutches when towing?',a:'The I-15 grade at Point of the Mountain is long and sustained. Trucks towing trailers or boats must hold first or second gear at high RPM for an extended climb—often in summer heat with the engine and clutch already warm. The combination of sustained high-RPM engagement, heavy load, and ambient heat creates enough friction heat to cause clutch slipping mid-hill. We see this from Draper towing customers regularly.'},
    {q:'Is it worth the 15-minute drive from Draper to Scott\'s for clutch repair?',a:'The drive to a clutch specialist pays for itself in diagnosis accuracy. A correctly identified clutch problem means the right parts, replaced once. A misdiagnosis means a second repair visit on top of the first. We\'ve been doing clutch work since 1990—Draper drivers who\'ve tried closer general shops frequently end up with us afterward.'},
    {q:'I smell burning on Point of the Mountain when towing—is my clutch damaged?',a:'If you smelled burning and noticed the engine RPM climbing without a matching speed increase, yes—the clutch slipped under towing load. A single severe slipping event can glaze both the disc and flywheel. Pull the trailer load until you can have it inspected. Continued towing with a heat-damaged clutch risks failure mid-grade.'}
  ],
  'clutch-repair-near-west-jordan-ut': [
    {q:'Does Mountain View Corridor driving create specific clutch wear patterns?',a:'Mountain View Corridor\'s high-speed exits require quick downshifts from 55 mph that simultaneously load the synchronizers and clutch disc. West Jordan drivers on this corridor daily present with combined disc wear and hydraulic fatigue—both the mechanical clutch and the release system show wear at the same time, which is why we inspect the full clutch system rather than just the disc.'},
    {q:'How far is West Jordan from your shop?',a:'We\'re 8 miles northeast—about 12 minutes on Redwood Road or the 201. Most West Jordan drivers use 3500 South East or 201 West to I-15 North. It\'s a straightforward drive with good parking at our shop.'},
    {q:'My clutch pedal feels stiffer than usual on Mountain View Corridor—what\'s happening?',a:'Increased pedal effort on high-speed roads often points to the hydraulic master cylinder beginning to fail. The higher line pressures from aggressive downshifting stress the master cylinder seals more than city driving. A stiff pedal that\'s getting progressively harder is worth diagnosing before the cylinder fails completely.'}
  ],
  'clutch-repair-near-south-jordan-ut': [
    {q:'How does Daybreak\'s roundabout design affect clutch life?',a:'Daybreak\'s roundabouts require constant first-to-second gear cycling at 15–20 mph—a gentler load than freeway driving, but a high-frequency one. Throw-out bearing wear accumulates from the repetitive partial clutch engagement at each roundabout entry and exit. South Jordan Daybreak drivers should check clutch pedal free play every 10,000 miles and note any increase in pedal effort.'},
    {q:'Can I reach your shop from South Jordan via TRAX?',a:'Yes. Take the TRAX Red Line from the Daybreak station north to Central Pointe station—we\'re a 3-minute walk from the platform. It\'s a practical option for South Jordan commuters who want to drop their vehicle in the morning and pick it up after work.'},
    {q:'How much does clutch service cost for South Jordan vehicles?',a:'Clutch replacement runs $800–$1,800 depending on your vehicle. Bangerter Highway driving adds above-average throw-out bearing wear from aggressive deceleration events at exit ramps, so we inspect the complete release system during any South Jordan clutch job.'}
  ],
  'clutch-repair-near-riverton-ut': [
    {q:'Riverton is far—is the drive to your shop really worth it?',a:'Riverton commuters put 25+ miles each way on their vehicles, which means your clutch accumulates wear faster than a closer suburb. Getting an accurate diagnosis from a clutch specialist—rather than a repeat repair from a shop that guessed at the cause—is worth the 16-minute drive. Many Riverton customers come to us after a failed repair elsewhere.'},
    {q:'At 25+ miles each way, when should Riverton drivers expect to replace a clutch?',a:'Plan for replacement at 60,000–70,000 miles rather than waiting for the typical 80,000–100,000 mile interval. Commute miles are harder on a clutch than highway miles—they involve more engagement cycles and higher-RPM starts than steady freeway driving. This is especially true for Riverton drivers who use Bangerter Highway\'s grade-separated ramps.'},
    {q:'Can Jordan River flooding affect clutch condition for Riverton drivers?',a:'It can. Western Riverton neighborhoods near the Jordan River occasionally see floodwater that splashes up into bell housings during heavy spring runoff. Water contamination on the clutch disc causes both glazing and slipping—often misdiagnosed as normal wear. If your clutch started slipping after wet conditions, mention that when you bring it in.'}
  ],
  'clutch-repair-near-herriman-ut': [
    {q:'Herriman is 20 minutes away—why do locals drive to Scott\'s?',a:'There are almost no clutch specialists in the southwest valley. Herriman\'s growth has outpaced specialty repair shops. We\'ve been doing clutch work since 1990—before most of Herriman\'s neighborhoods existed. When a general shop can\'t diagnose the problem, Herriman drivers call us.'},
    {q:'How do Herriman\'s hillside streets affect clutch components?',a:'Herriman\'s hillside developments at the base of the Oquirrh Mountains have residential driveways and streets with 10–15% grades. Daily launches from those grades put extreme stress on clutch release bearings and pressure plate springs—components that flat-terrain drivers barely stress. Herriman drivers tend to need full clutch replacement, not just disc replacement, because the pressure plate components wear faster under hill-start loads.'},
    {q:'What\'s the best way to do hill starts in Herriman without burning the clutch?',a:'Use the handbrake for hill starts on steep grades instead of holding the car on the clutch. Bring the clutch to its engagement point, release the handbrake as you feel the car resist rolling backward, then release the clutch fully as you accelerate. This eliminates the partial-engagement slipping that burns discs on steep hills.'}
  ],
  'clutch-repair-near-kearns-ut': [
    {q:'The 4500 South I-15 on-ramp is brutal on clutches—what can I do?',a:'The ramp is short and steep, which forces most drivers to launch hard from first gear at full throttle. Shifting to second gear earlier—even if it feels sluggish briefly—reduces the peak torque load on the disc and pressure plate significantly. It adds a second to your merge but can add 10,000 miles to your clutch life if you do it every day.'},
    {q:'How affordable is clutch repair at Scott\'s for Kearns families?',a:'We price our clutch work honestly—$800–$1,800 depending on your vehicle, with no unnecessary upselling. We diagnose first and quote before touching anything. Kearns customers tell us they appreciate knowing what they\'re paying for before we start, and we hold to that quote unless we discover a genuinely different problem during disassembly.'},
    {q:'How far is the drive from Kearns to your shop?',a:'We\'re 7 miles east—about 12 minutes on 5400 South or 4700 South. The drive is straightforward on surface streets with no freeway required if you prefer it. We\'re open Monday–Friday 8 AM–5:30 PM.'}
  ],
  'clutch-repair-near-midvale-ut': [
    {q:'The I-15/I-215 junction near Midvale has short merge lanes—how do I protect my clutch?',a:'Time your on-ramp entry to match the gap rather than launching from a full stop whenever possible. The first-gear, full-throttle launch from standstill is the hardest single event on your clutch disc. If you merge from a rolling start at 20–25 mph instead, you reduce peak clutch load substantially and can skip directly to second gear.'},
    {q:'Can I reach your shop from Midvale on TRAX?',a:'Midvale is one of the most TRAX-accessible communities for our shop. Take the Blue Line north to Central Pointe station—we\'re a 3-minute walk. Drop your vehicle in the morning and commute to work or school; pick it up in the afternoon.'},
    {q:'How much does clutch work cost for Midvale vehicles, and how quickly can you fit me in?',a:'Clutch replacement runs $800–$1,800. For Midvale customers, we can typically schedule a diagnosis within a day or two of calling and complete most clutch replacements the same day or the next morning. Call (801) 485-4089 and we\'ll find a slot that works.'}
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
    {q:`How much does clutch repair cost near ${name}?`,a:`Clutch replacement typically costs $800–$1,800 depending on your vehicle. We provide an exact quote after diagnosis—before any work begins.`},
    {q:`Is it worth driving ${dist} from ${name} to Scott's?`,a:`We specialize in clutch work—it\'s in our name. ${name} drivers who come to us after a general shop couldn\'t diagnose the problem find the ${drive} drive worthwhile. An accurate diagnosis the first time costs less than a second repair.`},
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
