const symptoms = [
  {
    slug: "clutch-slipping-repair-south-salt-lake",
    name: "Clutch Slipping or High Engagement",
    shortName: "Clutch Slipping",
    priority: "High",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "Clutch slipping—when your engine revs sharply but the car barely accelerates—means the friction disc can no longer grip the flywheel firmly enough to transfer engine power to the wheels. You'll notice it most when pulling onto the freeway, climbing hills, or towing: the RPMs climb while vehicle speed lags behind. In Utah's stop-and-go traffic and mountain driving conditions, clutch slip wears the remaining friction material faster with every mile. The sooner you have it diagnosed, the better the odds that only the clutch assembly needs replacing—not the flywheel.",
    serviceBlurb: "Clutch slipping almost always means the friction disc is past its service life. We inspect the full clutch assembly and flywheel condition before recommending a repair path, and we'll also check for oil leaks at the rear main seal and transmission input shaft—since contamination is a common reason clutches wear out prematurely even before the friction material is fully gone. You'll have a complete diagnosis and an honest quote before any work begins.",
    smsBody: "Hi, I'm experiencing clutch slipping or high engagement.",
    causes: [
      { title: "Worn Clutch Disc", desc: "The friction material on the clutch disc wears down over time, reducing its ability to grip the flywheel and transfer power effectively." },
      { title: "Oil Contamination", desc: "Leaking rear main seal or transmission input shaft seal can allow oil onto the clutch disc, causing it to slip even when the disc isn't fully worn." },
      { title: "Weak Pressure Plate Springs", desc: "The pressure plate springs lose tension over time, reducing the clamping force needed to keep the clutch engaged under load." },
      { title: "Worn or Damaged Flywheel", desc: "A glazed, scored, or warped flywheel surface prevents proper friction contact with the clutch disc." },
      { title: "Incorrect Clutch Adjustment", desc: "Improper clutch cable or hydraulic adjustment can prevent full engagement, causing partial slipping during acceleration." },
      { title: "Aggressive Driving Habits", desc: "Frequent hard launches, riding the clutch, or towing heavy loads accelerates clutch wear, especially on Utah's mountain roads." }
    ]
  },
  {
    slug: "grinding-noise-shifting-repair-south-salt-lake",
    name: "Grinding Noise When Shifting",
    shortName: "Grinding When Shifting",
    priority: "High",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "Grinding when you push the clutch in and try to shift means the clutch isn't fully releasing—so you're forcing spinning gears together instead of letting the synchronizers match their speeds. Every grind is wearing metal off your synchronizers, and synchronizer damage can escalate a clutch replacement into a full transmission rebuild if ignored long enough. Common culprits are low or contaminated hydraulic fluid, a failing master or slave cylinder, or a worn clutch disc that no longer fully disengages. The sooner this is diagnosed, the better the chance you're looking at a clutch job rather than a transmission job.",
    serviceBlurb: "Grinding when shifting is a race against time on your synchronizers. We start with a hydraulic system check—bleed, pressure test, and cylinder inspection—to determine if it's a release problem or actual disc wear. In most cases, a complete clutch replacement stops the grinding immediately. If we find synchronizer damage, we'll give you an honest assessment of transmission condition so you can make an informed decision before any work begins.",
    smsBody: "Hi, I'm hearing grinding noises when shifting.",
    causes: [
      { title: "Worn Clutch Disc", desc: "A thin clutch disc may not fully disengage, causing gears to clash and grind on every shift." },
      { title: "Hydraulic System Issue", desc: "Low clutch fluid or a failing master/slave cylinder prevents the clutch from fully releasing." },
      { title: "Worn Synchronizers", desc: "Transmission synchronizers wear over time, especially on the most frequently used gears like 2nd and 3rd." },
      { title: "Clutch Cable Adjustment", desc: "An improperly adjusted clutch cable can prevent full disengagement of the clutch disc." }
    ]
  },
  {
    slug: "stiff-clutch-pedal-repair-south-salt-lake",
    name: "Stiff Clutch Pedal",
    shortName: "Stiff Clutch Pedal",
    priority: "Medium",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "A clutch pedal that requires noticeably more effort than it used to is more than just uncomfortable—it means your clutch system is working against increased resistance somewhere in the mechanical or hydraulic path. Common causes include a fraying clutch cable (friction inside the housing increases as the cable degrades), a failing master or slave cylinder struggling to build pressure, or a pressure plate with weakened springs that increase the load on the pedal. Left unaddressed, a stiff pedal typically progresses to one that won't return properly or fails to disengage completely mid-drive.",
    serviceBlurb: "A stiff pedal is often a cable or hydraulic component issue—which means the fix is frequently less involved and less expensive than a full clutch replacement. We'll pressure-test the hydraulic system, inspect the master and slave cylinders, and check the clutch cable and pivot points to isolate the resistance. We'll also measure clutch disc wear while we're at it so you have a complete picture of your clutch system's health.",
    smsBody: "Hi, my clutch pedal is very stiff.",
    causes: [
      { title: "Worn Clutch Cable", desc: "A frayed or corroded cable increases resistance as the inner strands wear against the housing." },
      { title: "Failing Pressure Plate", desc: "A worn pressure plate with weakened springs puts more mechanical load on the pedal." },
      { title: "Hydraulic System Issue", desc: "A failing master or slave cylinder creates increased resistance throughout the pedal stroke." },
      { title: "Pivot/Linkage Wear", desc: "Worn pivot points or linkage components add friction to the pedal mechanism." }
    ]
  },
  {
    slug: "transmission-slipping-repair-south-salt-lake",
    name: "Transmission Slipping",
    shortName: "Transmission Slipping",
    priority: "High",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "When your transmission slips—popping out of gear, failing to engage properly, or letting the engine rev without vehicle speed increasing—it's both a performance problem and a safety concern, especially at freeway speeds. In manual transmissions, the most common cause is a worn clutch assembly; in automatics, slipping usually points to low or burnt transmission fluid, worn clutch packs inside the unit, or failing solenoids. This symptom tends to worsen quickly: what starts as occasional slipping under load often progresses to constant slipping within weeks. Diagnosing it early dramatically lowers the cost of the repair.",
    serviceBlurb: "Transmission slipping can range from a straightforward clutch replacement in a manual to a fluid service or solenoid replacement in an automatic—or in more serious cases, a rebuild. We road-test your vehicle, pull stored fault codes, check fluid condition and level, and inspect for external leaks before recommending a repair path. Early diagnosis frequently allows us to solve slipping with a targeted service rather than a full rebuild.",
    smsBody: "Hi, my transmission is slipping.",
    causes: [
      { title: "Worn Clutch Components", desc: "A slipping clutch assembly is the most common cause in manual transmissions." },
      { title: "Low Transmission Fluid", desc: "Low or contaminated fluid directly affects gear engagement in automatic transmissions." },
      { title: "Worn Synchronizers", desc: "Worn synchronizers allow gears to disengage unexpectedly under load." },
      { title: "Detent Spring Wear", desc: "Worn detent springs can no longer hold gears firmly in position." }
    ]
  },
  {
    slug: "hard-to-shift-gears-repair-south-salt-lake",
    name: "Hard to Shift Gears",
    shortName: "Hard to Shift Gears",
    priority: "Medium",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "Struggling to get your vehicle into first or reverse—or fighting the shifter on every gear change—usually means the clutch isn't fully disengaging when you press the pedal. When the input shaft keeps spinning, you're trying to mesh moving gears against stationary ones, which is hard on synchronizers and generates resistance you feel through the shifter. Air in the hydraulic line, a failing cylinder, or a misadjusted clutch cable are frequent causes and are often correctable without touching the clutch disc itself. Getting this diagnosed early can prevent synchronizer damage that turns a $400 clutch job into a much more expensive transmission repair.",
    serviceBlurb: "Difficulty shifting is often a hydraulic release problem—air in the line, a worn cylinder, or a cable adjustment—which is a simpler repair than the clutch disc. We bleed and pressure-test the clutch hydraulic system, inspect the shift linkage for worn bushings or cables, and check clutch disc clearance. If the disc is also worn, we'll let you know upfront so you can plan accordingly rather than be surprised later.",
    smsBody: "Hi, I'm having trouble shifting gears.",
    causes: [
      { title: "Worn Clutch Disc", desc: "A worn disc may not fully disengage, preventing clean gear engagement." },
      { title: "Hydraulic Problems", desc: "Air in the clutch hydraulic system prevents full clutch disengagement." },
      { title: "Shift Linkage Wear", desc: "Worn bushings or cables make shifting vague and imprecise." },
      { title: "Low Transmission Fluid", desc: "Insufficient fluid increases internal resistance during gear changes." }
    ]
  },
  {
    slug: "burning-smell-clutch-repair-south-salt-lake",
    name: "Burning Smell from Clutch",
    shortName: "Burning Smell",
    priority: "High",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "That sharp, acrid burning smell—like overheated brake pads but distinctly different—is your clutch disc slipping against the flywheel and generating intense heat. Each slip event burns off a thin layer of friction material permanently, and the heat itself can glaze the flywheel surface, making the problem compound quickly. It's especially common when navigating Utah's mountain passes, sitting in slow traffic, or towing loads near the vehicle's limit. If you're smelling it regularly rather than as a rare occurrence, the clutch is likely approaching the end of its service life and should be inspected before it fails completely at an inconvenient time.",
    serviceBlurb: "When a clutch is generating enough heat to smell, it's in the late stages of its life. We inspect the clutch system thoroughly and check for oil leaks at the rear main seal or input shaft while the transmission is accessible—since contamination is a common reason clutches burn out before the friction material is fully worn. We'll give you an honest assessment of everything we find before recommending any repair.",
    smsBody: "Hi, I'm smelling a burning smell from my clutch.",
    causes: [
      { title: "Slipping Clutch", desc: "A worn clutch disc slips against the flywheel, generating excessive heat from friction." },
      { title: "Riding the Clutch", desc: "Resting your foot on the clutch pedal causes partial engagement and constant heat buildup." },
      { title: "Hill Driving", desc: "Utah's mountain roads put extra demands on clutches, especially in stop-and-go traffic on grades." },
      { title: "Heavy Towing", desc: "Towing loads near or beyond your vehicle's rated capacity accelerates clutch wear dramatically." }
    ]
  },
  {
    slug: "clutch-pedal-feels-soft-repair-south-salt-lake",
    name: "Clutch Pedal Feels Soft or Spongy",
    shortName: "Soft Clutch Pedal",
    priority: "Medium",
    category: "Clutch",
    relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "A soft or spongy clutch pedal—one that compresses more than normal before the clutch releases—is almost always a hydraulic system problem, and unlike mechanical wear, it can get suddenly and dramatically worse with little warning. Air in the hydraulic line is the most common cause and is a relatively quick fix with a bleed. A failing slave or master cylinder is more serious: when internal seals fail, the pedal can slowly sink to the floor under sustained pressure. If you notice clutch fluid dripping near the firewall or a wet spot at the bell housing, you have an active leak that needs same-day attention.",
    serviceBlurb: "A spongy pedal almost always means a bleed, a cylinder replacement, or both. Our hydraulic clutch service includes a full system bleed to remove air, inspection of the master and slave cylinders under pressure, and a check of all lines and fittings for seepage. If a cylinder is leaking internally, we'll quote the replacement so you have the full picture before any work begins.",
    smsBody: "Hi, my clutch pedal feels soft or spongy.",
    causes: [
      { title: "Air in Hydraulic System", desc: "Air bubbles in the clutch fluid compress instead of transmitting pressure, creating a spongy feel." },
      { title: "Failing Slave Cylinder", desc: "A worn seal in the slave cylinder allows fluid to bypass, reducing pressure." },
      { title: "Failing Master Cylinder", desc: "Internal leaks in the master cylinder reduce pedal pressure and allow the pedal to slowly sink." },
      { title: "Fluid Leak", desc: "A leak anywhere in the hydraulic system reduces available fluid and causes a soft pedal." }
    ]
  },
  {
    slug: "clicking-noise-turning-repair-south-salt-lake",
    name: "Clicking Noise When Turning",
    shortName: "Clicking When Turning",
    priority: "Medium",
    category: "CV Joint",
    relatedService: "cv-joint-repair-south-salt-lake-ut",
    intro: "A sharp clicking or popping sound that appears only when turning—especially at low speeds in parking lots or making tight U-turns—is the textbook symptom of a worn outer CV joint. The joint's internal ball bearings have lost their lubrication, usually because the rubber CV boot tore and allowed the grease to escape while road grit entered. CV joints don't typically fail suddenly; they click for weeks or months before breaking completely. But when they do break, you lose drive to that wheel entirely—often leaving you stranded in the most inconvenient location possible.",
    serviceBlurb: "We'll diagnose the extent of CV joint wear and give you a clear recommendation on what repair approach makes sense for your vehicle and budget. We also inspect the opposite axle while your vehicle is on the lift—if one boot has torn, the other is often aging close behind, and catching it early prevents a repeat visit.",
    smsBody: "Hi, I hear clicking when turning.",
    causes: [
      { title: "Worn CV Joint", desc: "The most common cause—the joint's internal ball bearings have worn from lack of lubrication after grease loss." },
      { title: "Torn CV Boot", desc: "A torn boot lets grease escape and allows road grit to enter and destroy the joint." },
      { title: "Damaged CV Axle", desc: "A bent or impact-damaged axle can cause clicking and vibration during turns." }
    ]
  },
  {
    slug: "vibration-when-accelerating-repair-south-salt-lake",
    name: "Vibration When Accelerating",
    shortName: "Vibration Accelerating",
    priority: "Medium",
    category: "CV Joint",
    relatedService: "cv-joint-repair-south-salt-lake-ut",
    intro: "Vibration that builds as you accelerate—particularly on the freeway or during hard acceleration from a stop—points to a drivetrain component that's out of balance or damaged under load. A worn inner CV joint is the most common cause on front-wheel-drive vehicles, especially one that's been clicking for a while and has progressed. On rear-wheel-drive and 4WD vehicles, a worn U-joint or an out-of-balance driveshaft produces similar sensations. The pattern matters for diagnosis: vibration that's worse under power vs. at a constant speed vs. when coasting all point to different components, which is why a thorough road-test diagnosis is the right starting point.",
    serviceBlurb: "Drivetrain vibration diagnosis starts with a detailed road test to characterize when and how the vibration appears. We then inspect CV axles, driveshaft U-joints, wheel bearings, and tire balance to isolate the source. On front-wheel-drive vehicles, this is most often a CV axle replacement—a straightforward repair that resolves the vibration and prevents more expensive drivetrain damage from developing.",
    smsBody: "Hi, I feel vibration when accelerating.",
    causes: [
      { title: "Worn Inner CV Joint", desc: "The inner CV joint transmits power and causes vibration under acceleration load when worn." },
      { title: "Bent CV Axle", desc: "A bent axle creates vibration that increases with vehicle speed and engine load." },
      { title: "Worn U-Joint", desc: "On rear-wheel-drive vehicles, worn U-joints cause similar vibration under acceleration." }
    ]
  },
  {
    slug: "soft-brake-pedal-repair-south-salt-lake",
    name: "Soft or Spongy Brake Pedal",
    shortName: "Soft Brake Pedal",
    priority: "High",
    category: "Brakes",
    relatedService: "brake-service-south-salt-lake-ut",
    intro: "A brake pedal that feels soft, spongy, or travels further than usual before the brakes engage is a safety emergency—your braking system is not building the hydraulic pressure it needs to stop effectively. The most common cause is air in the brake lines, but a failing master cylinder or an active fluid leak are more serious possibilities that can deteriorate without warning. Brake fluid absorbs moisture over time, which lowers its boiling point and can cause vapor lock (sudden loss of braking) under sustained heavy use. This is one of the symptoms where we strongly recommend not driving until it's inspected—the consequences of brake failure are severe.",
    serviceBlurb: "A soft pedal gets our immediate attention because it directly affects stopping distance. We do a complete hydraulic system inspection—master cylinder, calipers, brake lines, and fluid condition—followed by a full system bleed. If we find a failed component, we'll identify it precisely and give you a written quote before any parts are ordered. We don't start work until you understand exactly what's wrong and agree to the repair.",
    smsBody: "Hi, my brake pedal feels soft or spongy.",
    causes: [
      { title: "Air in Brake Lines", desc: "Air bubbles compress instead of transmitting pressure, creating a spongy feel and reduced braking force." },
      { title: "Brake Fluid Leak", desc: "A leak at any point in the hydraulic circuit reduces system pressure." },
      { title: "Worn Master Cylinder", desc: "Internal seals fail and allow fluid to bypass, preventing full pressure buildup." },
      { title: "Contaminated Brake Fluid", desc: "Old fluid absorbs moisture, lowering its boiling point and risking vapor lock under hard braking." }
    ]
  },
  {
    slug: "squeaking-brakes-repair-south-salt-lake",
    name: "Squeaking or Squealing Brakes",
    shortName: "Squeaking Brakes",
    priority: "Medium",
    category: "Brakes",
    relatedService: "brake-service-south-salt-lake-ut",
    intro: "Brake squeal is your vehicle's built-in early warning system: all modern brake pads include a small metal wear indicator that contacts the rotor when the pads wear to approximately 2–3mm remaining, producing that characteristic high-pitched squeal. Caught at the squeal stage, you're almost always looking at pad replacement only—rotors typically still have adequate material. Ignore the squeal and it becomes a grind within weeks, meaning the metal backing plate is contacting the rotor and cutting grooves that require full rotor replacement. Addressing squeaky brakes early is one of the most cost-effective maintenance decisions you can make.",
    serviceBlurb: "Squeaking brakes caught early usually mean pad replacement only—no rotors needed. Our brake inspection measures pad thickness, rotor thickness and runout, and checks caliper slide pins for binding (stuck slides cause uneven wear that leads to squealing even on newer pads). We'll tell you up front whether your rotors have enough material left or need replacement—no surprises.",
    smsBody: "Hi, my brakes are squeaking.",
    causes: [
      { title: "Worn Brake Pads", desc: "The metal wear indicator tab contacts the rotor when pads are near their minimum thickness, creating a squealing sound." },
      { title: "Glazed Pads or Rotors", desc: "Overheated brake components develop a hard, glazed surface that squeals under light pressure." },
      { title: "Dust or Debris", desc: "Brake dust buildup between the pad and rotor can cause intermittent squeaking, especially after sitting overnight." },
      { title: "Low-Quality Brake Pads", desc: "Cheap pads often use harder friction compounds that are more prone to noise and vibration." }
    ]
  },
  {
    slug: "grinding-brakes-repair-south-salt-lake",
    name: "Grinding Noise When Braking",
    shortName: "Grinding Brakes",
    priority: "High",
    category: "Brakes",
    relatedService: "brake-service-south-salt-lake-ut",
    intro: "Metal-on-metal grinding when you brake means your brake pads have worn completely through—the steel backing plate is now contacting your rotors directly. Every stop you make is cutting grooves deeper into the rotor surface, turning what would have been a straightforward pad replacement into a pad-and-rotor job. A stuck brake caliper can produce the same grinding even on a pad with material remaining, because it keeps one pad pressed against the rotor continuously. Either way, grinding brakes need same-day attention: braking performance is compromised and the damage accumulates with every mile driven.",
    serviceBlurb: "Metal-on-metal grinding means we'll assess rotor condition carefully alongside the pads—scoring from the contact often means the rotors can't be reused. We also inspect caliper function and brake hardware as part of the job, and road-test every brake repair before the car leaves the shop to make sure everything is working properly.",
    smsBody: "Hi, my brakes are grinding.",
    causes: [
      { title: "Completely Worn Pads", desc: "The metal backing plate is grinding directly against the rotor, cutting grooves with every stop." },
      { title: "Stuck Caliper", desc: "A seized caliper piston or slide pin keeps the pad pressed against the rotor continuously." },
      { title: "Rotor Damage", desc: "Deep existing grooves in the rotor surface create a grinding sensation even with pads present." }
    ]
  },
  {
    slug: "steering-vibration-repair-south-salt-lake",
    name: "Steering Wheel Vibration",
    shortName: "Steering Vibration",
    priority: "Medium",
    category: "Brakes",
    relatedService: "brake-service-south-salt-lake-ut",
    intro: "Vibration you feel through the steering wheel—especially when applying the brakes at highway speeds—almost always points to warped front brake rotors. As rotors heat and cool through repeated braking, they can develop slight thickness variations across their surface; when the pads clamp on an uneven surface, you feel it as a rhythmic pulsation through the pedal and steering column. Worn tie rod ends, loose wheel bearings, and out-of-balance tires can also transmit vibration through the steering, which is why a thorough front-end inspection alongside any brake check makes sense before parts are ordered.",
    serviceBlurb: "Steering vibration diagnosis covers both the brake system and the front suspension simultaneously. We measure rotor runout with a dial indicator to confirm warping, check brake fluid condition, and inspect front-end components—tie rods, ball joints, and wheel bearings—for play. This approach ensures we identify the actual cause of the vibration rather than replacing parts based on guesswork.",
    smsBody: "Hi, my steering wheel vibrates.",
    causes: [
      { title: "Warped Brake Rotors", desc: "Heat cycling warps the rotor surface, creating pulsation felt through the brake pedal and steering wheel." },
      { title: "Uneven Pad Deposits", desc: "Brake pad material deposited unevenly on the rotor surface causes thickness variation and pulsation." },
      { title: "Worn Front Suspension", desc: "Worn tie rod ends or ball joints allow movement that transmits road vibration through the steering column." }
    ]
  },
  {
    slug: "vibration-when-braking-repair-south-salt-lake",
    name: "Vibration When Braking",
    shortName: "Vibration When Braking",
    priority: "Medium",
    category: "Brakes",
    relatedService: "brake-service-south-salt-lake-ut",
    intro: "Pulsation or vibration when you press the brake pedal—a rhythmic shudder that gets more pronounced as you brake harder—is a classic sign of warped rotors or disc thickness variation (DTV). Rotors warp from repeated heat cycles, from aggressive braking that overheats the disc, or from uneven caliper pressure caused by a stuck slide pin. The pulsation you feel is the brake pads riding over the uneven rotor surface with every wheel rotation. Rotors can sometimes be resurfaced if enough material remains, but modern vehicles often use thinner rotors from the factory that need replacement once warped.",
    serviceBlurb: "Brake pulsation is almost always rotor-related, and the right repair depends on how much material remains. We measure rotor thickness and runout precisely before recommending resurfacing or replacement, so you're not paying for new rotors if yours can be saved. We also inspect caliper slide pins for binding—a stuck slide is a common root cause of the uneven heating that warps rotors in the first place.",
    smsBody: "Hi, I feel vibration when braking.",
    causes: [
      { title: "Warped Rotors", desc: "The most common cause—repeated heat cycling warps the rotor surface and creates pulsation." },
      { title: "Uneven Pad Wear", desc: "A stuck caliper slide causes one pad to wear faster, creating uneven rotor loading and vibration." },
      { title: "Loose Wheel Bearing", desc: "A worn wheel bearing allows the rotor to wobble slightly, which can feel similar to rotor pulsation." }
    ]
  },
  {
    slug: "engine-rattling-startup-repair-south-salt-lake",
    name: "Engine Rattling on Startup",
    shortName: "Engine Rattling",
    priority: "High",
    category: "Timing",
    relatedService: "timing-chain-repair-south-salt-lake-ut",
    intro: "A metallic rattling from the engine in the first 2–5 seconds after a cold start—one that fades once the engine warms up—is one of the most recognizable signs of a stretched timing chain. The chain develops slack over time and slaps against the guides before oil pressure from the pump builds enough to tension the system. That the rattle fades doesn't mean it's harmless: every cold start is stressing the guides and tensioner, and a chain that's jumped a tooth—or broken entirely—can destroy an interference engine in seconds. This is a symptom worth diagnosing before it escalates into a catastrophic engine failure.",
    serviceBlurb: "Timing chain diagnosis involves physically inspecting chain stretch, tensioner condition, and guide wear. If the chain has already jumped, we use a scan tool to check cam-to-crank correlation before any disassembly so we understand the full extent of the problem. We'll give you a complete picture of the timing system's condition and a clear recommendation before any work is authorized.",
    smsBody: "Hi, my engine rattles on startup.",
    causes: [
      { title: "Stretched Timing Chain", desc: "A stretched chain slaps against the guides before oil pressure builds on cold startup." },
      { title: "Worn Chain Tensioner", desc: "A failing tensioner can't maintain proper chain tension, especially at low oil pressure on startup." },
      { title: "Worn Chain Guides", desc: "Plastic guides wear down over time, allowing chain movement that creates the rattle." }
    ]
  },
  {
    slug: "check-engine-timing-repair-south-salt-lake",
    name: "Check Engine Light (Timing Related)",
    shortName: "Check Engine (Timing)",
    priority: "High",
    category: "Timing",
    relatedService: "timing-chain-repair-south-salt-lake-ut",
    intro: "Timing-related check engine codes—like P0016, P0017, P0340, or P0341—mean your engine's computer has detected that the relationship between crankshaft and camshaft positions is off. Engine timing is precise to fractions of a degree, and even minor deviations cause power loss, rough running, and poor fuel economy. The underlying cause can range from a worn timing chain or failed VVT actuator to low oil pressure starving the timing system. In interference engines—which includes many modern 4-cylinders—a jumped timing chain can cause pistons and valves to collide, resulting in catastrophic engine damage that's far more expensive than a timing chain service.",
    serviceBlurb: "Timing fault codes require both scan tool analysis and mechanical inspection to diagnose correctly. We check VVT actuator function, cam sensor signal quality, oil pressure to the timing system, and physically measure chain stretch. The repair depends on what's actually causing the timing error—some cases are solvable with an oil flush that clears sludge from VVT passages; others require a full mechanical timing service. We always verify the root cause before recommending parts.",
    smsBody: "Hi, I have a timing-related check engine light.",
    causes: [
      { title: "Timing Chain Stretch", desc: "A stretched chain shifts the cam-to-crank timing relationship, triggering correlation fault codes." },
      { title: "Failed Cam Sensor", desc: "A failing camshaft position sensor sends incorrect timing signals to the ECM." },
      { title: "VVT System Issue", desc: "Variable valve timing actuators or solenoids can fail and trigger timing-related codes." }
    ]
  },
  {
    slug: "check-engine-light-repair-south-salt-lake",
    name: "Check Engine Light",
    shortName: "Check Engine Light",
    priority: "Medium",
    category: "General",
    relatedService: "complete-auto-service-south-salt-lake-ut",
    intro: "A check engine light can represent anything from a loose gas cap to a misfiring cylinder or a failing catalytic converter—the only way to know is to read the fault codes stored in your vehicle's computer. If the light is steady, it indicates a stored fault that's affecting emissions or performance. If it's flashing, that signals an active misfire, which can damage your catalytic converter within minutes—reduce speed and get it diagnosed the same day. At Scott's, we scan the codes, explain exactly what they mean in plain language, and give you an honest assessment of urgency and cost before recommending any repair.",
    serviceBlurb: "We scan your vehicle's fault codes with professional diagnostic equipment that captures live sensor data and freeze frame information—not just the basic code number. From there we explain what the code means, what caused it, and what it will take to fix it, in plain language with no pressure. We verify the fault is real before recommending parts, because guessing at the cause based on a code number alone leads to unnecessary repairs.",
    smsBody: "Hi, my check engine light is on.",
    causes: [
      { title: "Oxygen Sensor Failure", desc: "A failing O2 sensor is one of the most frequent check engine light causes and affects fuel economy." },
      { title: "Catalytic Converter Efficiency", desc: "A degraded converter triggers P0420/P0430 codes when efficiency falls below EPA thresholds." },
      { title: "Loose or Cracked Gas Cap", desc: "A failing gas cap causes evaporative emission system codes—often the simplest fix." },
      { title: "Ignition System Issues", desc: "Misfires from worn spark plugs or failing coil packs trigger multiple fault codes." }
    ]
  },
  {
    slug: "engine-overheating-repair-south-salt-lake",
    name: "Engine Overheating",
    shortName: "Engine Overheating",
    priority: "High",
    category: "Cooling",
    relatedService: "water-pump-replacement-south-salt-lake-ut",
    intro: "An overheating engine—where the temperature gauge climbs into the red zone or you see steam from under the hood—is a genuine mechanical emergency. Continuing to drive even for a few minutes can warp the aluminum cylinder head, blow a head gasket, or seize the engine entirely, turning a $500–800 water pump replacement into a $3,000+ engine repair. If your gauge starts climbing, the safest move is to pull over, turn off the engine, and call us rather than trying to make it to a shop. The most common causes we see are a failed water pump, a stuck thermostat, a coolant leak, or a clogged radiator.",
    serviceBlurb: "Cooling system diagnosis always starts with a complete inspection: we pressure-test the system for leaks, test thermostat operation, check water pump flow, and inspect the radiator and all hoses. If overheating has already occurred, we check for head gasket compromise (combustion gases in the coolant, milky oil) before recommending a cooling system repair—because replacing the water pump on an engine with a blown gasket won't solve the problem and creates an expensive repeat visit.",
    smsBody: "Hi, my engine is overheating.",
    causes: [
      { title: "Failed Water Pump", desc: "The water pump circulates coolant throughout the engine—when the impeller or seal fails, circulation stops." },
      { title: "Coolant Leak", desc: "A leak reduces coolant volume below the level needed for effective heat transfer." },
      { title: "Stuck Thermostat", desc: "A thermostat stuck in the closed position blocks coolant from reaching the radiator." },
      { title: "Clogged or Leaking Radiator", desc: "A restricted or damaged radiator can't dissipate heat fast enough, especially in hot weather." }
    ]
  },
  {
    slug: "coolant-leak-repair-south-salt-lake",
    name: "Coolant Leak",
    shortName: "Coolant Leak",
    priority: "High",
    category: "Cooling",
    relatedService: "water-pump-replacement-south-salt-lake-ut",
    intro: "Coolant puddles under your car (green, orange, or pink with a slightly sweet smell), a temperature gauge that runs higher than normal, or a reservoir that needs topping off repeatedly are all signs of a cooling system leak. What looks like a minor seep can leave you stranded within days if a hose fails completely, and low coolant is the leading cause of roadside overheating. Common sources include the water pump weep hole (a design feature that signals seal failure before it fails catastrophically), radiator hose connections, the radiator core itself, or in more serious cases, a head gasket. A pressure test of the cooling system is the fastest and most accurate way to find where the leak is originating.",
    serviceBlurb: "We pressure-test your cooling system to precisely locate the source of the leak—often finding failures that aren't visible to the naked eye, like a pinhole in the radiator core or a seeping water pump seal. Once the leak source is confirmed, we explain exactly what's failing and why before quoting any repair. Many coolant leaks are straightforward hose replacements; others point to the water pump or radiator. We'll give you an honest assessment of which components are near their end so you can make one repair visit instead of two.",
    smsBody: "Hi, I think I have a coolant leak.",
    causes: [
      { title: "Water Pump Seal Failure", desc: "The water pump weep hole leaks when the internal seal fails—a designed warning before complete failure." },
      { title: "Radiator Hose", desc: "Cracked, softened, or loose hose clamps are one of the most common coolant leak sources." },
      { title: "Radiator Damage", desc: "Corrosion from old coolant or physical impact can crack the radiator core or end tanks." },
      { title: "Head Gasket", desc: "A failing head gasket can leak coolant externally or allow it to mix with engine oil internally." }
    ]
  },
  {
    slug: "loud-exhaust-repair-south-salt-lake",
    name: "Loud Exhaust Noise",
    shortName: "Loud Exhaust",
    priority: "Medium",
    category: "Exhaust",
    relatedService: "exhaust-repair-south-salt-lake-ut",
    intro: "A sudden increase in exhaust volume—your vehicle sounding louder, more raspy, or with a distinct ticking at idle—almost always means a hole, crack, or separated joint somewhere in the exhaust system. Exhaust leaks before the muffler bypass its noise-dampening entirely and let raw exhaust sound escape. Utah's freeze-thaw cycles and winter road salt accelerate exhaust rust, making this especially common on vehicles with more than 80,000 miles. Beyond the noise, an exhaust leak affects your oxygen sensor's fuel trim readings—potentially triggering a check engine light—and can allow carbon monoxide to enter the cabin if the leak is under the vehicle.",
    serviceBlurb: "Exhaust repairs range from a flex pipe patch or joint reseal to a section or full system replacement, depending on where the failure is. We inspect the entire exhaust system from manifold to tailpipe—hangers, flex pipes, catalytic converter condition, and muffler—before quoting. We don't recommend more work than necessary, but we'll also tell you about sections that are close to failing so you can address them in one visit rather than coming back in a few months.",
    smsBody: "Hi, my exhaust is really loud.",
    causes: [
      { title: "Exhaust Leak", desc: "A hole or crack in the exhaust pipe lets gases escape before the muffler, bypassing its noise reduction." },
      { title: "Damaged Muffler", desc: "Rust through the muffler body or baffles significantly increases exhaust volume." },
      { title: "Broken Exhaust Hanger", desc: "A failed hanger lets the exhaust sag, stressing joints until they crack or separate." }
    ]
  },
  {
    slug: "exhaust-smell-cabin-repair-south-salt-lake",
    name: "Exhaust Smell in Cabin",
    shortName: "Exhaust Smell in Cabin",
    priority: "High",
    category: "Exhaust",
    relatedService: "exhaust-repair-south-salt-lake-ut",
    intro: "Exhaust fumes entering your vehicle's cabin is not a symptom to investigate tomorrow—carbon monoxide from combustion gases is colorless and can cause headaches, confusion, and loss of consciousness at surprisingly low concentrations. The exhaust smell you detect (from other combustion byproducts) means CO is present too. Roll down your windows immediately and get fresh air; if the smell is strong, pull over safely. Common entry points include a cracked exhaust manifold near the firewall, an exhaust leak routed under the floor, or deteriorated body seals. This repair should be treated as urgent and the vehicle should not be driven with passengers until it's resolved.",
    serviceBlurb: "When exhaust is entering the cabin, we treat it as an urgent safety repair. We inspect the full exhaust routing with the vehicle on a lift, specifically checking for cracked manifolds near the firewall and leaks in areas beneath the floorpan. We also check the HVAC system's fresh-air intake routing, which can draw exhaust fumes in from a leak directly below the windshield base—a common and easily overlooked entry point.",
    smsBody: "Hi, I smell exhaust inside my car.",
    causes: [
      { title: "Exhaust Leak Under the Vehicle", desc: "A leak in the exhaust routing under the floor allows fumes to enter through gaps in the floor or HVAC." },
      { title: "Cracked Exhaust Manifold", desc: "A cracked manifold near the firewall leaks exhaust gases directly into the engine bay near the cabin." },
      { title: "Damaged Body Seals", desc: "Worn trunk, door, or floor grommets allow exhaust fumes to be drawn into the cabin." }
    ]
  },
  {
    slug: "failed-emissions-repair-south-salt-lake",
    name: "Failed Emissions Test",
    shortName: "Failed Emissions",
    priority: "Medium",
    category: "Exhaust",
    relatedService: "catalytic-converter-service-south-salt-lake-ut",
    intro: "Failing Utah's emissions test means your vehicle's exhaust exceeds the state's pollutant thresholds—and your registration can't be renewed until it passes. The most common causes are a worn catalytic converter (especially on vehicles over 100,000 miles), a failing oxygen sensor skewing the fuel mixture, or an engine misfire sending unburned fuel into the exhaust. The key to a successful repair is accurate root-cause diagnosis: replacing the catalytic converter on an engine that's running too rich or misfiring will result in the new converter failing prematurely. We find the underlying cause first, so the repair sticks and your vehicle passes on the retest.",
    serviceBlurb: "Emissions failures require finding the root cause, not just replacing the component that's over the threshold. We scan for fault codes, evaluate oxygen sensor response times and signal quality, check catalytic converter efficiency codes in detail, and look for any underlying engine conditions—misfires, rich fuel trims—that would damage a new converter. Our goal is for your vehicle to pass the retest on the first attempt, not just get it close.",
    smsBody: "Hi, I failed my emissions test.",
    causes: [
      { title: "Worn Catalytic Converter", desc: "A converter past its service life can't reduce CO, HC, and NOx to Utah's passing thresholds." },
      { title: "Failing Oxygen Sensor", desc: "A slow or dead O2 sensor causes incorrect fuel mixture, raising exhaust emission levels." },
      { title: "Exhaust Leak Before O2 Sensor", desc: "An upstream exhaust leak introduces outside air, causing false lean readings and incorrect fuel trim." },
      { title: "Engine Misfire", desc: "Misfires send raw unburned fuel into the exhaust, overwhelming the converter and failing the test." }
    ]
  },
  {
    slug: "sulfur-smell-exhaust-repair-south-salt-lake",
    name: "Sulfur Smell from Exhaust",
    shortName: "Sulfur Smell",
    priority: "Medium",
    category: "Exhaust",
    relatedService: "catalytic-converter-service-south-salt-lake-ut",
    intro: "A rotten egg or sulfur smell from your exhaust means hydrogen sulfide isn't being converted properly—something a healthy catalytic converter handles automatically. The smell appears when the converter is failing, when the engine is running too rich (too much fuel overwhelming the converter), or during the converter's break-in period on some new vehicles. It's often accompanied by sluggish acceleration and a check engine light with P0420 or P0430 codes. Beyond the smell, running an engine rich long-term washes oil off cylinder walls with excess fuel and causes additional engine wear—so the underlying cause matters as much as the converter condition.",
    serviceBlurb: "A sulfur smell with a P0420 or P0430 code doesn't automatically mean you need a new catalytic converter—it means the converter's efficiency has fallen below threshold, which can result from the converter itself or from an engine running rich. We check fuel trims, oxygen sensor function, and look for injector or fuel pressure issues before recommending a converter replacement. Installing a new converter on an engine with an unresolved rich condition will fail the new converter within months.",
    smsBody: "Hi, my exhaust smells like rotten eggs.",
    causes: [
      { title: "Failing Catalytic Converter", desc: "A worn converter can't process hydrogen sulfide in exhaust gases, allowing the smell to pass through." },
      { title: "Rich Fuel Mixture", desc: "Excess fuel overwhelms the converter's ability to fully oxidize exhaust compounds." },
      { title: "Fuel System Issue", desc: "A stuck injector, faulty pressure regulator, or failing fuel sensor creates a persistent rich condition." }
    ]
  },
  {
    slug: "bouncy-ride-repair-south-salt-lake",
    name: "Bouncy or Rough Ride",
    shortName: "Bouncy Ride",
    priority: "Medium",
    category: "Suspension",
    relatedService: "strut-replacement-south-salt-lake-ut",
    intro: "If your vehicle bounces two or three times after hitting a bump—rather than settling quickly—your shock absorbers or struts have lost their damping ability and are no longer controlling the suspension's spring movement. Beyond comfort, worn dampers increase stopping distance (the nose pitches more than it should under braking), reduce steering precision on uneven pavement, and cause tires to bounce rather than maintain full road contact. Many drivers adapt gradually to a worsening ride without realizing how significantly handling has degraded. Shocks and struts are typically recommended for inspection every 50,000 miles and are a common deficiency on high-mileage vehicles.",
    serviceBlurb: "Strut work is done in pairs—both fronts or both rears—to maintain even handling and prevent the vehicle from pulling to one side. A wheel alignment is performed after strut replacement because new components alter the suspension geometry. We'll also inspect the opposing pair while we're working so you have a clear picture of their condition.",
    smsBody: "Hi, my vehicle has a bouncy ride.",
    causes: [
      { title: "Worn Struts", desc: "Struts lose their hydraulic damping ability over time and can no longer control spring rebound." },
      { title: "Worn Shock Absorbers", desc: "Shocks degrade gradually, eventually allowing the suspension to bounce freely on every irregularity." },
      { title: "Deteriorated Bushings", desc: "Worn rubber suspension bushings allow excessive movement that amplifies ride harshness." }
    ]
  },
  {
    slug: "nose-dive-braking-repair-south-salt-lake",
    name: "Nose Dive When Braking",
    shortName: "Nose Dive Braking",
    priority: "Medium",
    category: "Suspension",
    relatedService: "strut-replacement-south-salt-lake-ut",
    intro: "When your vehicle's front end dips dramatically forward under braking—to the point where it feels like the nose might touch the ground—your front struts have lost their ability to resist weight transfer during deceleration. This isn't just a comfort issue: an exaggerated nose dive reduces rear-tire contact patch during braking, extends stopping distance, and makes the vehicle harder to control in an emergency stop. On vehicles with MacPherson strut suspension (most front-wheel-drive cars), struts are also structural components that affect wheel alignment—worn struts often lead to tire wear problems as a secondary symptom.",
    serviceBlurb: "Front strut work restores the vehicle's ability to resist weight transfer under braking. We inspect the full strut assembly—not just the damper—and discuss with you exactly what needs to be replaced and why. A wheel alignment is performed after strut replacement because suspension geometry changes with new components, which would otherwise accelerate tire wear.",
    smsBody: "Hi, my car nose dives when braking.",
    causes: [
      { title: "Worn Front Struts", desc: "Struts that have lost damping force can't resist the forward weight transfer during braking." },
      { title: "Worn Strut Top Mounts", desc: "Deteriorated top mounts allow excessive strut travel and add to the nose-dive sensation." }
    ]
  },
  {
    slug: "uneven-tire-wear-repair-south-salt-lake",
    name: "Uneven Tire Wear",
    shortName: "Uneven Tire Wear",
    priority: "Medium",
    category: "Suspension",
    relatedService: "strut-replacement-south-salt-lake-ut",
    intro: "Tires that wear faster on one edge, develop a scalloped or cupped pattern, or show feathering across the tread are sending a clear diagnostic signal about your suspension or alignment. Inner edge wear typically means excessive negative camber; outer edge wear points to positive camber or under-inflation; cupping and scalloping indicate worn shock absorbers or struts allowing the tire to bounce and skip across the road surface. Replacing the tires without fixing the underlying alignment or suspension problem will result in the new tires wearing the same way. Suspension and alignment diagnosis should always precede a tire purchase when unusual wear patterns are present.",
    serviceBlurb: "Uneven tire wear diagnosis starts with measuring all four alignment angles—camber, caster, and toe—and inspecting struts, shocks, tie rod ends, and ball joints for wear. We'll show you the alignment measurements before and after adjustment so you can confirm the correction was made. We'll also advise whether the existing tires can be rotated to even the wear or whether the wear pattern is too severe to recover.",
    smsBody: "Hi, I have uneven tire wear.",
    causes: [
      { title: "Worn Struts or Shocks", desc: "Failed dampers allow the tire to bounce and skip, creating a scalloped or cupped wear pattern." },
      { title: "Wheel Alignment Issues", desc: "Incorrect camber or toe angles cause one-sided or feathered wear patterns across the tread." },
      { title: "Improper Inflation", desc: "Under-inflation causes shoulder wear; over-inflation causes center wear on the tread." }
    ]
  },
  {
    slug: "rough-ride-bumps-repair-south-salt-lake",
    name: "Rough Ride Over Bumps",
    shortName: "Rough Ride Over Bumps",
    priority: "Medium",
    category: "Suspension",
    relatedService: "shock-replacement-south-salt-lake-ut",
    intro: "Feeling every pothole and expansion joint as a sharp jolt—rather than a dampened thud—means your shock absorbers or struts can no longer cushion the suspension's movement after a bump. Shocks and struts degrade gradually over years of use, and most drivers adapt to the worsening ride quality without realizing how far it has fallen. On Utah's roads, where winter potholes can be severe, worn shocks also mean your tires spend less time in full contact with the pavement—affecting both wet-road traction and braking distance. A simple bounce test at our shop takes about 30 seconds and gives a reliable read on shock absorber condition.",
    serviceBlurb: "Shock absorber replacement is typically one of the more cost-effective suspension repairs—shocks are simpler assemblies than struts and don't require spring compressors or alignment correction afterward. We bounce-test all four corners, inspect for oil leakage from the shock body (a sign of internal seal failure), and check mounting bushings while we're at it. If only one shock has clearly failed, we still recommend replacing the pair on that axle to keep handling balanced.",
    smsBody: "Hi, I have a rough ride over bumps.",
    causes: [
      { title: "Worn Shock Absorbers", desc: "Shocks lose their ability to dampen spring rebound over time, transmitting every road irregularity harshly." },
      { title: "Worn Struts", desc: "On strut-equipped vehicles, worn struts can no longer absorb bump energy and transmit it directly to the cabin." },
      { title: "Deteriorated Bushings", desc: "Worn rubber bushings amplify road noise and harshness that shocks would otherwise filter out." }
    ]
  }
];

module.exports = symptoms;
