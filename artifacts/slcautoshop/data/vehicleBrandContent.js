// Brand-specific unique content for SEO depth
const brandContent = {
  'Toyota': {
    issues: [
      {t:'Timing Chain Stretch',d:'Toyota timing chains can develop stretch over time, causing a rattling noise on cold starts and check engine codes for camshaft timing. We replace the chain, guides, and tensioner as a complete kit to restore proper timing.'},
      {t:'Water Pump Failure',d:'Toyota V6 and some 4-cylinder engines are prone to water pump seal failure, showing up as coolant weeping around the pump shaft. Early detection prevents overheating and engine damage.'},
      {t:'Clutch Chatter and Judder',d:'Toyota manual transmissions can develop clutch chatter and shudder during engagement, particularly in trucks and performance vehicles. We replace with quality clutch kits that eliminate the vibration.'},
      {t:'Exhaust Manifold Cracks',d:'Toyota V6 engines are prone to cracked exhaust manifolds, causing a ticking sound especially when cold and failed emissions tests. We weld or replace depending on crack severity.'},
      {t:'Carbon Buildup on Direct Injection',d:'Toyota direct-injection engines accumulate carbon deposits on intake valves over time, reducing power and fuel economy. Walnut blast cleaning restores performance without engine disassembly.'},
      {t:'Transmission Fluid Degradation',d:'Toyota automatic and CVT transmissions are sensitive to fluid quality. Despite "lifetime" fill claims, fluid degrades and causes shift quality issues on vehicles where it was never serviced.'},
      {t:'Cooling System Hose and Seal Wear',d:'Toyota cooling systems use rubber hoses, plastic reservoirs, and thermostat housings that deteriorate with age. A pressurized cooling system inspection catches leaks before they cause an overheating event.'}
    ],
    tips: [
      'Toyota engines are built around specific oil grades and change intervals. Using the correct synthetic oil spec — and not extending intervals beyond what Toyota recommends — is one of the most effective things you can do for long-term engine health.',
      'Utah\'s canyon roads and mountain grades put real demands on Toyota drivetrains. Differential and transfer case fluid in AWD and 4WD models should be changed more frequently than the factory interval suggests for flat-highway driving.',
      'Toyota cooling systems are reliable but not maintenance-free. Coolant degrades over time and loses its corrosion inhibitors. A coolant flush at the manufacturer\'s interval prevents internal rust and thermostat problems.',
      'Direct-injection Toyota engines build carbon deposits on intake valves over time — a known trade-off of GDI technology. An intake cleaning every 60-80K miles keeps combustion efficient and performance consistent.'
    ],
    faqs: [
      {q:'How often should I change my Toyota\'s oil?',a:'Depending on which engine your Toyota has, 7,500-10,000 miles on full synthetic is standard. But if you drive in heavy traffic, tow, or do a lot of mountain driving on Utah roads, we recommend 5,000-7,500 mile intervals. It\'s cheap insurance on an engine built to last 200,000+ miles.'},
      {q:'How do I know if my Toyota has a timing issue?',a:'The most common sign is a rattling or ticking noise on cold starts that quiets as the engine warms up, sometimes paired with a check engine light for camshaft timing. If you hear it, have it inspected promptly — timing issues progress to engine damage if ignored.'},
      {q:'When should my Toyota\'s transmission fluid be changed?',a:'Despite "lifetime" fluid claims, Toyota transmissions benefit from changes every 30,000-45,000 miles in real-world use. Utah\'s mountain grades and temperature swings are harder on transmission fluid than flat-highway driving.'},
      {q:'Why is my Toyota making a clicking or vibrating noise?',a:'Drivetrain noises — clicking during turns, vibration under acceleration — typically point to CV joints, differential fluid levels, or clutch components. We diagnose the actual source before recommending any repair.'},
      {q:'Is it worth investing in a high-mileage Toyota?',a:'Usually yes. Toyota engines and transmissions are among the most durable made. A well-maintained Toyota at 150,000-200,000 miles is often worth maintaining — repair costs compare favorably to a car payment, and these vehicles routinely go 250,000+ miles.'}
    ]
  },
  'Honda': {
    issues: [
      {t:'Manual Transmission Clutch Judder',d:'Honda manual transmissions can develop clutch judder and vibration, often from dual-mass flywheel wear. We convert to a single-mass flywheel setup for smoother, more durable engagement.'},
      {t:'AC Compressor Failure',d:'Honda AC compressors are prone to failure that sends metal debris through the entire system, requiring a full flush and compressor replacement — not just a component swap.'},
      {t:'VTEC Solenoid Oil Leaks',d:'Honda VTEC variable timing solenoid gaskets develop oil leaks that drip onto exhaust components, causing burning smells and smoke. It\'s a common and straightforward repair.'},
      {t:'CV Axle Boot Wear',d:'Honda CV axle boots are prone to cracking and tearing, allowing grease to escape and contaminate the joint. Catching it early means replacing just the boot rather than the entire axle.'},
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
    issues: [
      {t:'EcoBoost Turbo Carbon and Boost Issues',d:'Ford turbocharged engines can develop carbon buildup, wastegate rattle, and boost pressure problems over time. We diagnose turbo systems thoroughly rather than replacing components unnecessarily.'},
      {t:'PowerShift Dual-Clutch Shudder',d:'Ford\'s dual-clutch transmissions developed a reputation for shuddering and slipping under light acceleration. We service clutch packs and reprogram the transmission control module.'},
      {t:'Exhaust Manifold Stud Failure',d:'Ford V8 engines frequently develop cracked or broken exhaust manifold studs, causing a ticking sound especially when cold and eventual exhaust leaks. We extract broken studs and restore proper sealing.'},
      {t:'Cooling System Water Pump Failure',d:'Ford engines use water pumps with plastic impellers that crack and cause coolant loss. We replace with updated designs that address the failure pattern.'},
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
    issues: [
      {t:'AFM/DOD Lifter Failure',d:'Chevrolet V8 engines equipped with Active Fuel Management develop collapsed lifters causing misfires, ticking, and oil consumption. We replace all lifters and can permanently disable the AFM system for improved reliability.'},
      {t:'Torque Converter Shudder',d:'GM 8-speed and 10-speed automatic transmissions develop a torque converter shudder that feels like driving over rumble strips at light throttle. A fluid flush with updated specification fluid typically resolves it.'},
      {t:'Exhaust Manifold Bolt Failure',d:'Chevrolet truck engines are prone to broken exhaust manifold bolts causing exhaust leaks and ticking. Extraction and repair requires care to avoid thread damage in the cylinder head.'},
      {t:'Timing Chain Wear on V6',d:'Chevrolet V6 engines develop timing chain stretch, causing camshaft correlation fault codes and potential engine damage if ignored. A complete chain kit replacement restores proper timing.'},
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
    issues: [
      {t:'Head Gasket Leaks',d:'Subaru boxer engines are prone to head gasket failure, typically presenting as external oil seeping at the gasket line or gradual coolant loss. We replace with updated multi-layer steel gaskets designed to address the known failure pattern.'},
      {t:'Timing Belt Service',d:'Subaru boxer engines use timing belts that must be replaced at the manufacturer\'s recommended interval without exception. A broken belt destroys the engine — this is non-optional maintenance.'},
      {t:'Clutch Throw-Out Bearing Noise',d:'Subaru manual transmissions frequently develop a chirping or squeaking noise at idle that disappears when the clutch pedal is pressed. This is the throw-out bearing, and we replace it during clutch service.'},
      {t:'CV Axle Failure',d:'Subaru\'s AWD system puts continuous load on CV axles. Inner CV joint failure causes vibration and shuddering under acceleration that\'s often mistaken for a transmission or AWD system problem.'},
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
    issues: [
      {t:'CVT Transmission Failure',d:'Nissan CVT transmissions are prone to overheating and premature failure, particularly when fluid is neglected. We diagnose CVT issues and handle repairs from fluid service to full replacement depending on the failure mode.'},
      {t:'Timing Chain Guide Wear',d:'Nissan engines develop timing chain guide wear that causes cold-start rattling. If caught early, guide and tensioner replacement prevents the chain from jumping and causing engine damage.'},
      {t:'Catalytic Converter Failure',d:'Nissan V6 engines experience premature catalytic converter failure, triggering efficiency codes and failed emissions tests. We diagnose whether it\'s the converter or an upstream oxygen sensor issue before recommending replacement.'},
      {t:'Clutch Hydraulic System Leaks',d:'Nissan manual transmission vehicles develop leaks in the clutch slave and master cylinder, causing soft pedal feel and difficulty engaging gears. We replace the hydraulic components and bleed to proper feel.'},
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
    issues: [
      {t:'Cooling System Plastic Component Failure',d:'BMW cooling systems use plastic expansion tanks, thermostat housings, and water pump components that crack and leak with age. We replace with upgraded aluminum parts where available for improved longevity.'},
      {t:'Oil Leaks at Multiple Points',d:'BMW engines develop oil leaks at valve cover gaskets, oil filter housing gaskets, oil pan gaskets, and crankshaft seals. Oil dripping onto hot exhaust components creates burning smells and a fire risk.'},
      {t:'VANOS Variable Timing Issues',d:'BMW\'s VANOS variable valve timing system develops solenoid and seal wear, causing rough idle, loss of power, and fault codes. We service or replace VANOS components as needed.'},
      {t:'Dual-Mass Flywheel Wear',d:'BMW manual transmission vehicles use dual-mass flywheels that wear over time, causing clutch judder and vibration. We offer OEM replacement or single-mass flywheel conversion at significant cost savings.'},
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
    issues: [
      {t:'Front-End Death Wobble',d:'Jeep Wranglers and similar models can develop violent front-end shaking triggered by a road imperfection at highway speed. It\'s caused by worn front suspension components — track bars, ball joints, tie rod ends, or steering stabilizer. We find and replace the actual worn parts, not just mask the symptom.'},
      {t:'Engine Oil Leaks',d:'Jeep V6 and older inline-six engines develop oil cooler housing gasket leaks and valve cover leaks. Oil accumulating on the starter motor causes intermittent no-start conditions that can be hard to diagnose without knowing the source.'},
      {t:'Exhaust Manifold Cracks',d:'Jeep exhaust manifolds crack between cylinders, causing a ticking sound especially when cold and eventual failed emissions tests. We weld or replace depending on crack severity.'},
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
    issues: [
      {t:'Hemi Cam and Lifter Failure',d:'Dodge Hemi engines with MDS cylinder deactivation develop collapsed lifters and cam wear over time, causing misfires and ticking. We replace all lifters and offer MDS disable for improved long-term reliability.'},
      {t:'Exhaust Manifold Bolt Breakage',d:'Dodge Hemi engines are prone to broken exhaust manifold bolts causing a distinct ticking sound and exhaust leaks. Extraction requires careful technique to avoid damaging threads in the cylinder head.'},
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
    issues: [
      {t:'Engine Bearing Failure (Theta II)',d:'Hyundai vehicles with 2.0L and 2.4L Theta II engines are subject to an ongoing recall for connecting rod bearing failure. We diagnose affected engines, check VINs, and help navigate warranty claims where applicable.'},
      {t:'Dual-Clutch Transmission Shudder',d:'Hyundai vehicles equipped with the dual-clutch transmission can experience clutch actuator failure causing jerky acceleration, shuddering, and shifting hesitation. We service clutch actuators and reprogram the transmission control module.'},
      {t:'Catalytic Converter Theft Prevention',d:'Hyundai catalytic converters are common theft targets due to their precious metal content. We install anti-theft shields and can advise on parking habits that reduce theft risk.'},
      {t:'Strut Mount and Suspension Noise',d:'Hyundai front strut mounts develop clunking and popping noises over bumps over time. It\'s a common wear item we replace during strut service or independently.'},
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
    issues: [
      {t:'Engine Bearing Failure (Theta II)',d:'Like Hyundai, Kia vehicles with 2.0L and 2.4L Theta II engines are subject to an ongoing recall for connecting rod bearing failure. We check VINs, diagnose affected engines, and assist with warranty coordination.'},
      {t:'Steering Coupler Clunking',d:'Kia vehicles develop a clunking or popping noise when turning the steering wheel, caused by a worn intermediate steering shaft coupler. It\'s a safety-relevant issue — steering feel degrades as it worsens.'},
      {t:'AC Compressor Failure',d:'Kia AC compressors can fail and send metal debris through the entire system, requiring a full system flush and compressor replacement — not just a component swap — to prevent repeat failure.'},
      {t:'Timing Chain Rattle',d:'Kia GDI engines develop timing chain rattle from stretched chains and worn guides, typically showing up after 80,000 miles. Catching it early means chain and guide replacement rather than engine damage.'},
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
    issues: [
      {t:'Timing Chain Tensioner Failure',d:'VW turbocharged engines have a known early-revision timing chain tensioner that can fail without warning, causing the chain to skip and destroying the engine. Preventive tensioner replacement is one of the most important services we perform on VW TSI engines.'},
      {t:'Carbon Buildup on GDI Engines',d:'VW direct-injection engines suffer from significant carbon buildup on intake valves over time, causing rough idle, misfires, and power loss. We perform walnut blast carbon cleaning to restore combustion efficiency without removing the engine.'},
      {t:'DSG Dual-Clutch Transmission Issues',d:'VW DSG dual-clutch transmissions can develop mechatronic unit faults causing jerky shifts, gear selection errors, and warning lights. Fluid service every 40,000 miles prevents the most common failures.'},
      {t:'Water Pump and Thermostat Housing Leaks',d:'VW TSI engines use a combined water pump and thermostat housing that cracks and leaks with age. Coolant loss can go unnoticed until overheating occurs — we replace with updated parts during cooling system service.'},
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
    issues: [
      {t:'Mazda SkyActiv Engine Carbon Buildup',d:'Mazda\'s direct-injection SkyActiv engines accumulate carbon on intake valves, causing rough idle and power loss. We perform walnut blast carbon cleaning to restore performance.'},
      {t:'Mazda Clutch Chatter on Mazda3/MX-5',d:'Manual transmission Mazda3 and MX-5 Miata models develop clutch chatter from the dual-mass flywheel. We offer solid flywheel conversions that eliminate the vibration.'},
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
    issues: [
      {t:'Mercedes Oil Leak Epidemic',d:'Mercedes engines develop multiple oil leaks as they age—valve cover gaskets, oil cooler seals, rear main seals, and camshaft position sensor O-rings. We address all leak points systematically rather than chasing one at a time.'},
      {t:'Mercedes Balance Shaft & Timing Chain (M272/M273)',d:'The M272 V6 and M273 V8 engines have a known balance shaft gear failure that can destroy the engine if not addressed. We inspect and replace preventively.'},
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
    issues: [
      {t:'Audi Timing Chain Tensioner Failure',d:'Audi 2.0T engines share the same timing chain tensioner issue as VW—the early revision tensioner fails and causes catastrophic engine damage. Preventive replacement is critical.'},
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
    issues: [
      {t:'Lexus Dashboard Cracking',d:'While not a mechanical issue, Lexus IS and GS models are known for dashboard cracking in hot climates like Utah. We can refer you to an interior specialist while handling your mechanical needs.'},
      {t:'Lexus GX/LX Timing Belt Service',d:'Lexus GX 470 and LX 470/570 use Toyota V8 engines with timing belts that must be replaced every 90,000 miles. The belt drives the water pump—we always replace both together.'},
      {t:'Lexus IS/RC Brake Dust and Pad Wear',d:'Lexus sport models use aggressive brake pad compounds that create heavy dust and wear faster than economy pads. We offer low-dust ceramic alternatives that maintain stopping power.'}
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
    issues: [
      {t:'Infiniti VQ Engine Oil Consumption',d:'Infiniti\'s VQ-series V6 engines develop increased oil consumption after 100,000 miles from piston ring wear. We monitor consumption and recommend intervention when it exceeds 1 quart per 2,000 miles.'},
      {t:'Infiniti CVT Transmission (QX60/JX35)',d:'Infiniti QX60 uses a Nissan CVT that shares the same overheating and reliability concerns. Regular CVT fluid changes every 30,000 miles are essential.'},
      {t:'Infiniti Catalytic Converter Premature Failure',d:'Infiniti 3.5L and 3.7L V6 models experience catalytic converter efficiency codes (P0420/P0430) more frequently than average. We diagnose root cause before recommending converter replacement.'}
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
    issues: [
      {t:'Ram Hemi MDS Lifter Failure',d:'Ram 1500 5.7L Hemi engines with Multi-Displacement System (MDS) develop collapsed lifters and cam lobe wear. We replace all 16 lifters and can delete MDS to prevent recurrence.'},
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
    issues: [
      {t:'GMC Sierra AFM Lifter Collapse',d:'GMC Sierra 5.3L V8 engines share the same Active Fuel Management lifter failure as the Chevrolet Silverado. Collapsed lifters cause misfires and ticking. We replace all lifters and can disable AFM.'},
      {t:'GMC Terrain 2.4L Timing Chain Stretch',d:'GMC Terrain with the 2.4L Ecotec engine develops timing chain stretch causing rough running and check engine lights. The chain, guides, and tensioners need replacement as a set.'},
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
    issues: [
      {t:'Buick 3.6L Timing Chain Stretch',d:'Buick Enclave, LaCrosse, and Regal with the GM 3.6L V6 develop timing chain stretch causing check engine lights and rough running. Complete chain kit replacement is required.'},
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
    issues: [
      {t:'Cadillac CUE Infotainment Failure',d:'While not a mechanical repair, Cadillac CUE touchscreen delamination affects nearly all 2013–2017 models. We focus on the mechanical side—and there\'s plenty to address.'},
      {t:'Cadillac 3.6L Timing Chain Issues',d:'Cadillac ATS, CTS, and SRX with the 3.6L V6 share the GM timing chain stretch problem. We replace chains, guides, and tensioners as a complete kit.'},
      {t:'Cadillac Magnetic Ride Control Shock Failure',d:'Cadillac\'s MagneRide adaptive shocks fail over time and cost $500–$800 each at the dealer. We source quality replacements at significant savings.'}
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
    issues: [
      {t:'Volvo PCV System Failure',d:'Volvo 5-cylinder and T5/T6 engines develop PCV (positive crankcase ventilation) system failures that cause oil leaks, rough idle, and boost leaks. We replace the PCV system with upgraded components.'},
      {t:'Volvo Transmission Software Issues',d:'Volvo Geartronic automatic transmissions can develop harsh shifting from outdated software or degraded fluid. We update software and replace fluid to restore smooth operation.'},
      {t:'Volvo Cooling System Failures',d:'Volvo expansion tanks and coolant hoses become brittle and crack in Utah\'s temperature extremes. We proactively replace cooling system components to prevent roadside overheating.'}
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
    issues: [
      {t:'Land Rover Coolant System Failures',d:'Land Rover vehicles are notorious for coolant leaks—expansion tanks, hoses, water pumps, and thermostat housings all fail with age. Utah\'s temperature swings accelerate plastic component degradation.'},
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
    issues: [
      {t:'MINI Timing Chain Tensioner Failure',d:'MINI Cooper S and JCW turbocharged engines share BMW\'s timing chain tensioner issue. Early-revision tensioners fail and cause engine damage. We replace with the updated revision.'},
      {t:'MINI Thermostat and Water Pump Failure',d:'MINI uses an electric water pump and electronically controlled thermostat that fail frequently. Combined replacement prevents repeat visits.'},
      {t:'MINI Clutch and Flywheel Replacement',d:'MINI Cooper S manual transmissions develop clutch judder from the dual-mass flywheel. We offer a single-mass flywheel conversion for smoother, longer-lasting clutch operation.'}
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
    issues: [
      {t:'Mitsubishi CVT Transmission Concerns',d:'Mitsubishi Outlander and Eclipse Cross use a JATCO CVT that shares reliability concerns with Nissan\'s CVT. Regular fluid changes every 30,000 miles are essential for longevity.'},
      {t:'Mitsubishi Timing Belt Service',d:'Older Mitsubishi 4-cylinder and V6 engines use timing belts requiring replacement every 60,000 miles. This is an interference engine—belt failure destroys the engine.'},
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
    issues: [
      {t:'Jaguar Supercharged Engine Coolant Leaks',d:'Jaguar supercharged V6 and V8 engines develop coolant crossover pipe leaks and thermostat housing cracks. The supercharger adds heat that accelerates plastic component failure.'},
      {t:'Jaguar Air Suspension Failures',d:'Jaguar XJ and F-Pace air suspension systems develop air spring leaks and compressor failures similar to Land Rover (shared platform). We diagnose and replace failed components.'},
      {t:'Jaguar Timing Chain Stretch (AJ-V8)',d:'Jaguar AJ-series V8 engines develop timing chain stretch and tensioner wear causing rattle and performance loss. Complete chain kit replacement is required.'}
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
    issues: [
      {t:'Suzuki Grand Vitara Head Gasket Failure',d:'Suzuki Grand Vitara 2.7L V6 engines develop head gasket failures causing coolant loss and overheating. We replace head gaskets and resurface cylinder heads.'},
      {t:'Suzuki Timing Chain Stretch',d:'Suzuki 2.0L and 2.4L 4-cylinder engines develop timing chain stretch causing rattling and check engine lights. Chain kit replacement prevents engine damage.'},
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
    issues: [
      {t:'Isuzu Rodeo/Trooper Timing Belt Service',d:'Isuzu Rodeo and Trooper V6 engines use timing belts requiring replacement every 60,000 miles. These are interference engines—belt failure is catastrophic.'},
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
    issues: [
      {t:'Saturn Vue/Outlook Timing Chain Stretch',d:'Saturn Vue and Outlook with the GM 3.6L V6 share the timing chain stretch issue. Chain, guides, and tensioners need replacement as a set.'},
      {t:'Saturn Ion/Astra Ignition Switch Recall',d:'Saturn Ion models were part of the GM ignition switch recall. If your vehicle hasn\'t been updated, we can check recall status and help coordinate the repair.'},
      {t:'Saturn CVT Transmission (Vue)',d:'Early Saturn Vue models used a CVT transmission with known reliability issues. We diagnose CVT failures and recommend repair or replacement based on condition.'}
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
    issues: [
      {t:'Pontiac G6 3.5L V6 Intake Manifold Gasket',d:'Pontiac G6 and Grand Prix with GM 3.5L and 3.8L V6 engines develop intake manifold gasket failures causing coolant leaks and overheating. This is one of the most common GM repairs we perform.'},
      {t:'Pontiac GTO/G8 LS Engine Service',d:'Pontiac GTO and G8 use GM LS-series V8 engines that are powerful and reliable but need proper maintenance. We service LS engines including clutch replacement on manual GTO/G8 models.'},
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
    issues: [
      {t:'Plymouth Neon Head Gasket Failure',d:'The Plymouth Neon 2.0L engine is known for head gasket failures causing overheating and coolant loss. We replace head gaskets and inspect for warped cylinder heads.'},
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
    issues: [
      {t:'Hummer H2 Exhaust Manifold Bolt Failure',d:'The Hummer H2 uses the GM 6.0L/6.2L V8 that shares the exhaust manifold bolt breakage issue with Silverado and Sierra. Extraction requires skill to avoid head damage.'},
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
    issues: [
      {t:'Scion tC Clutch and Flywheel Wear',d:'Scion tC manual transmission models develop clutch chatter from the dual-mass flywheel, similar to other Toyota platforms. We offer solid flywheel conversion for longer clutch life.'},
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
    issues: [
      {t:'GM AFM/DFM Lifter Failure',d:'GM Active Fuel Management and Dynamic Fuel Management systems in 5.3L and 6.2L V8 engines develop collapsed lifters causing misfires and engine damage. This is the #1 GM repair we perform.'},
      {t:'GM 3.6L V6 Timing Chain Stretch',d:'The GM 3.6L V6 (used in Acadia, Traverse, Enclave, CTS, Equinox) develops timing chain stretch causing rough running and check engine lights. Complete chain kit replacement required.'},
      {t:'GM 10-Speed Transmission Shudder',d:'GM\'s 10-speed automatic transmission develops torque converter shudder felt at light throttle. Fluid flush with updated specification fluid usually resolves the issue.'}
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
