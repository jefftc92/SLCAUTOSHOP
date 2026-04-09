const symptoms = [
  { slug: "clutch-slipping-repair-south-salt-lake", name: "Clutch Slipping or High Engagement", shortName: "Clutch Slipping", priority: "High", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "Clutch slipping—when your engine revs without a proportional increase in vehicle speed—is a sure sign your clutch disc is worn or the pressure plate is failing. As South Salt Lake's clutch repair specialists since 1990, Scott's Auto & Clutch will diagnose exactly what's happening in your manual transmission system and give you a detailed, fair quote for the repair.",
    smsBody: "Hi, I'm experiencing clutch slipping or high engagement.",
    causes: [
      { title: "Worn Clutch Disc", desc: "The friction material on the clutch disc wears down over time, reducing its ability to grip the flywheel and transfer power effectively." },
      { title: "Oil Contamination", desc: "Leaking rear main seal or transmission input shaft seal can allow oil onto the clutch disc, causing it to slip even when the disc isn't worn." },
      { title: "Weak Pressure Plate Springs", desc: "The pressure plate springs lose tension over time, reducing the clamping force needed to keep the clutch engaged under load." },
      { title: "Worn or Damaged Flywheel", desc: "A glazed, scored, or warped flywheel surface prevents proper friction contact with the clutch disc." },
      { title: "Incorrect Clutch Adjustment", desc: "Improper clutch cable or hydraulic adjustment can prevent full engagement, causing partial slipping during acceleration." },
      { title: "Aggressive Driving Habits", desc: "Frequent hard launches, riding the clutch, or towing heavy loads accelerates clutch wear, especially on Utah's mountain roads." }
    ]
  },
  { slug: "grinding-noise-shifting-repair-south-salt-lake", name: "Grinding Noise When Shifting", shortName: "Grinding When Shifting", priority: "High", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "Grinding noises when shifting gears indicate your clutch isn't fully disengaging, or synchronizers in your transmission are worn. Our mechanics will pinpoint the exact cause.",
    smsBody: "Hi, I'm hearing grinding noises when shifting.",
    causes: [
      { title: "Worn Clutch Disc", desc: "A thin clutch disc may not fully disengage, causing gears to grind." },
      { title: "Hydraulic System Issue", desc: "Low clutch fluid or a failing master/slave cylinder prevents full disengagement." },
      { title: "Worn Synchronizers", desc: "Transmission synchronizers wear over time, especially on frequently-used gears." },
      { title: "Clutch Cable Adjustment", desc: "An improperly adjusted clutch cable can prevent full disengagement." }
    ]
  },
  { slug: "stiff-clutch-pedal-repair-south-salt-lake", name: "Stiff Clutch Pedal", shortName: "Stiff Clutch Pedal", priority: "Medium", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "A stiff or hard-to-press clutch pedal makes driving exhausting and can indicate mechanical or hydraulic problems that need attention.",
    smsBody: "Hi, my clutch pedal is very stiff.",
    causes: [
      { title: "Worn Clutch Cable", desc: "Frayed or corroded cable increases resistance." },
      { title: "Failing Pressure Plate", desc: "A worn pressure plate spring increases pedal effort." },
      { title: "Hydraulic System Issue", desc: "A failing master or slave cylinder increases resistance." },
      { title: "Pivot/Linkage Wear", desc: "Worn pivot points or linkage components add friction." }
    ]
  },
  { slug: "transmission-slipping-repair-south-salt-lake", name: "Transmission Slipping", shortName: "Transmission Slipping", priority: "High", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "When your transmission slips—popping out of gear or failing to engage properly—it's a safety concern that needs immediate attention.",
    smsBody: "Hi, my transmission is slipping.",
    causes: [
      { title: "Worn Clutch Components", desc: "A slipping clutch is the most common cause in manual transmissions." },
      { title: "Low Transmission Fluid", desc: "Low or contaminated fluid affects gear engagement." },
      { title: "Worn Synchronizers", desc: "Synchronizer wear allows gears to disengage unexpectedly." },
      { title: "Detent Spring Wear", desc: "Worn detent springs can't hold gears in position." }
    ]
  },
  { slug: "hard-to-shift-gears-repair-south-salt-lake", name: "Hard to Shift Gears", shortName: "Hard to Shift Gears", priority: "Medium", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "Difficulty getting into gear—especially first or reverse—often indicates clutch or linkage problems that worsen over time.",
    smsBody: "Hi, I'm having trouble shifting gears.",
    causes: [
      { title: "Worn Clutch Disc", desc: "A worn clutch may not fully disengage for clean shifts." },
      { title: "Hydraulic Problems", desc: "Air in the clutch hydraulic system prevents full disengagement." },
      { title: "Shift Linkage Wear", desc: "Worn bushings or cables make shifting imprecise." },
      { title: "Low Transmission Fluid", desc: "Insufficient fluid increases shifting difficulty." }
    ]
  },
  { slug: "burning-smell-clutch-repair-south-salt-lake", name: "Burning Smell from Clutch", shortName: "Burning Smell", priority: "High", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "A burning smell—especially in traffic or on hills—indicates your clutch is overheating from slipping. This accelerates wear dramatically.",
    smsBody: "Hi, I'm smelling a burning smell from my clutch.",
    causes: [
      { title: "Slipping Clutch", desc: "A worn clutch disc slips and generates excessive heat." },
      { title: "Riding the Clutch", desc: "Resting your foot on the clutch pedal causes partial engagement and heat." },
      { title: "Hill Driving", desc: "Utah's mountain roads put extra stress on clutches, accelerating wear." },
      { title: "Heavy Towing", desc: "Towing beyond your vehicle's capacity overworks the clutch." }
    ]
  },
  { slug: "clutch-pedal-feels-soft-repair-south-salt-lake", name: "Clutch Pedal Feels Soft or Spongy", shortName: "Soft Clutch Pedal", priority: "Medium", category: "Clutch", relatedService: "clutch-repair-south-salt-lake-ut",
    intro: "A soft or spongy clutch pedal typically points to a hydraulic system issue—air in the lines, a failing cylinder, or a fluid leak.",
    smsBody: "Hi, my clutch pedal feels soft or spongy.",
    causes: [
      { title: "Air in Hydraulic System", desc: "Air bubbles in the clutch fluid create a spongy feel." },
      { title: "Failing Slave Cylinder", desc: "A worn seal in the slave cylinder allows fluid to bypass." },
      { title: "Failing Master Cylinder", desc: "Internal leaks in the master cylinder reduce pedal pressure." },
      { title: "Fluid Leak", desc: "A leak anywhere in the hydraulic system causes soft pedal feel." }
    ]
  },
  { slug: "clicking-noise-turning-repair-south-salt-lake", name: "Clicking Noise When Turning", shortName: "Clicking When Turning", priority: "Medium", category: "CV Joint", relatedService: "cv-joint-repair-south-salt-lake-ut",
    intro: "A clicking or popping noise when turning is the classic symptom of a worn CV joint. Left unrepaired, the joint can fail completely.",
    smsBody: "Hi, I hear clicking when turning.",
    causes: [
      { title: "Worn CV Joint", desc: "The most common cause—the joint's internal components have worn from lack of lubrication." },
      { title: "Torn CV Boot", desc: "A torn boot lets grease out and dirt in, destroying the joint." },
      { title: "Damaged CV Axle", desc: "A bent or damaged axle can cause clicking and vibration." }
    ]
  },
  { slug: "vibration-when-accelerating-repair-south-salt-lake", name: "Vibration When Accelerating", shortName: "Vibration Accelerating", priority: "Medium", category: "CV Joint", relatedService: "cv-joint-repair-south-salt-lake-ut",
    intro: "Vibration during acceleration that worsens with speed often indicates a damaged CV joint or axle that needs replacement.",
    smsBody: "Hi, I feel vibration when accelerating.",
    causes: [
      { title: "Worn Inner CV Joint", desc: "The inner CV joint transmits power and causes vibration when worn." },
      { title: "Bent CV Axle", desc: "A bent axle creates vibration that increases with speed." },
      { title: "Worn U-Joint", desc: "On rear-wheel-drive vehicles, worn U-joints cause similar symptoms." }
    ]
  },
  { slug: "soft-brake-pedal-repair-south-salt-lake", name: "Soft or Spongy Brake Pedal", shortName: "Soft Brake Pedal", priority: "High", category: "Brakes", relatedService: "brake-service-south-salt-lake-ut",
    intro: "A soft or spongy brake pedal is a safety concern—it means your braking system isn't building proper pressure. Don't delay this repair.",
    smsBody: "Hi, my brake pedal feels soft or spongy.",
    causes: [
      { title: "Air in Brake Lines", desc: "Air bubbles compress, creating a spongy feel." },
      { title: "Brake Fluid Leak", desc: "A leak reduces system pressure." },
      { title: "Worn Master Cylinder", desc: "Internal seals fail, allowing fluid to bypass." },
      { title: "Contaminated Brake Fluid", desc: "Old fluid absorbs moisture, reducing its boiling point." }
    ]
  },
  { slug: "squeaking-brakes-repair-south-salt-lake", name: "Squeaking or Squealing Brakes", shortName: "Squeaking Brakes", priority: "Medium", category: "Brakes", relatedService: "brake-service-south-salt-lake-ut",
    intro: "Squeaking brakes are your vehicle's built-in warning system telling you the brake pads are getting thin. Time for an inspection.",
    smsBody: "Hi, my brakes are squeaking.",
    causes: [
      { title: "Worn Brake Pads", desc: "The wear indicator contacts the rotor, creating a squealing sound." },
      { title: "Glazed Pads or Rotors", desc: "Overheated brake components develop a hard, glazed surface." },
      { title: "Dust or Debris", desc: "Brake dust buildup can cause intermittent squeaking." },
      { title: "Cheap Brake Pads", desc: "Low-quality pads are more prone to noise." }
    ]
  },
  { slug: "grinding-brakes-repair-south-salt-lake", name: "Grinding Noise When Braking", shortName: "Grinding Brakes", priority: "High", category: "Brakes", relatedService: "brake-service-south-salt-lake-ut",
    intro: "Grinding when braking means your pads are completely worn through and metal is contacting metal. This damages rotors and is a safety emergency.",
    smsBody: "Hi, my brakes are grinding.",
    causes: [
      { title: "Completely Worn Pads", desc: "Metal backing plate grinding against the rotor." },
      { title: "Stuck Caliper", desc: "A seized caliper keeps the pad pressed against the rotor." },
      { title: "Rotor Damage", desc: "Deep grooves in the rotor surface create grinding noise." }
    ]
  },
  { slug: "steering-vibration-repair-south-salt-lake", name: "Steering Wheel Vibration", shortName: "Steering Vibration", priority: "Medium", category: "Brakes", relatedService: "brake-service-south-salt-lake-ut",
    intro: "Vibration in the steering wheel, especially when braking, usually indicates warped brake rotors or suspension issues.",
    smsBody: "Hi, my steering wheel vibrates.",
    causes: [
      { title: "Warped Brake Rotors", desc: "Heat causes rotors to warp, creating pulsation when braking." },
      { title: "Uneven Pad Deposits", desc: "Pad material unevenly deposited on the rotor surface." },
      { title: "Worn Suspension", desc: "Worn tie rods or ball joints cause vibration." }
    ]
  },
  { slug: "vibration-when-braking-repair-south-salt-lake", name: "Vibration When Braking", shortName: "Vibration When Braking", priority: "Medium", category: "Brakes", relatedService: "brake-service-south-salt-lake-ut",
    intro: "Pulsation or vibration when applying the brakes indicates warped rotors or uneven pad wear that needs correction.",
    smsBody: "Hi, I feel vibration when braking.",
    causes: [
      { title: "Warped Rotors", desc: "The most common cause—heat warps the rotor surface." },
      { title: "Uneven Pad Wear", desc: "Stuck caliper slides cause one pad to wear more than the other." },
      { title: "Loose Wheel Bearing", desc: "A worn wheel bearing allows movement that feels like vibration." }
    ]
  },
  { slug: "engine-rattling-startup-repair-south-salt-lake", name: "Engine Rattling on Startup", shortName: "Engine Rattling", priority: "High", category: "Timing", relatedService: "timing-chain-repair-south-salt-lake-ut",
    intro: "A rattling noise on cold startup that quiets after a few seconds is a classic sign of a loose timing chain. Don't ignore it.",
    smsBody: "Hi, my engine rattles on startup.",
    causes: [
      { title: "Stretched Timing Chain", desc: "A stretched chain slaps against guides before oil pressure builds." },
      { title: "Worn Tensioner", desc: "A failing tensioner can't keep proper chain tension." },
      { title: "Worn Chain Guides", desc: "Plastic guides wear down, allowing chain movement." }
    ]
  },
  { slug: "check-engine-timing-repair-south-salt-lake", name: "Check Engine Light (Timing Related)", shortName: "Check Engine (Timing)", priority: "High", category: "Timing", relatedService: "timing-chain-repair-south-salt-lake-ut",
    intro: "Timing-related check engine codes indicate your engine's timing is off, which can cause serious damage if not addressed.",
    smsBody: "Hi, I have a timing-related check engine light.",
    causes: [
      { title: "Timing Chain Stretch", desc: "A stretched chain throws off cam/crank timing correlation." },
      { title: "Failed Cam Sensor", desc: "A failing camshaft position sensor triggers timing codes." },
      { title: "VVT System Issue", desc: "Variable valve timing components can trigger timing codes." }
    ]
  },
  { slug: "check-engine-light-repair-south-salt-lake", name: "Check Engine Light", shortName: "Check Engine Light", priority: "Medium", category: "General", relatedService: "complete-auto-service-south-salt-lake-ut",
    intro: "A check engine light can mean many things—from a loose gas cap to a serious engine problem. We'll scan the codes and diagnose the issue.",
    smsBody: "Hi, my check engine light is on.",
    causes: [
      { title: "Oxygen Sensor", desc: "A failing O2 sensor is one of the most common check engine light causes." },
      { title: "Catalytic Converter", desc: "Reduced converter efficiency triggers P0420/P0430 codes." },
      { title: "Loose Gas Cap", desc: "A loose or cracked gas cap causes evaporative system codes." },
      { title: "Ignition System", desc: "Misfires from worn plugs or coils trigger check engine lights." }
    ]
  },
  { slug: "engine-overheating-repair-south-salt-lake", name: "Engine Overheating", shortName: "Engine Overheating", priority: "High", category: "Cooling", relatedService: "water-pump-replacement-south-salt-lake-ut",
    intro: "An overheating engine can cause head gasket failure, warped heads, and catastrophic engine damage. Pull over and call us.",
    smsBody: "Hi, my engine is overheating.",
    causes: [
      { title: "Failed Water Pump", desc: "The water pump circulates coolant—when it fails, the engine overheats." },
      { title: "Coolant Leak", desc: "A leak reduces coolant volume, preventing proper cooling." },
      { title: "Failed Thermostat", desc: "A stuck-closed thermostat blocks coolant flow." },
      { title: "Radiator Problems", desc: "A clogged or leaking radiator can't dissipate heat." }
    ]
  },
  { slug: "coolant-leak-repair-south-salt-lake", name: "Coolant Leak", shortName: "Coolant Leak", priority: "High", category: "Cooling", relatedService: "water-pump-replacement-south-salt-lake-ut",
    intro: "Sweet-smelling fluid under your vehicle or a dropping coolant level means you have a leak that needs prompt repair.",
    smsBody: "Hi, I think I have a coolant leak.",
    causes: [
      { title: "Water Pump Seal", desc: "The water pump weep hole leaks when the seal fails." },
      { title: "Radiator Hose", desc: "Cracked or loose hoses are a common leak source." },
      { title: "Radiator", desc: "Corrosion or impact damage causes radiator leaks." },
      { title: "Head Gasket", desc: "A blown head gasket can leak coolant internally or externally." }
    ]
  },
  { slug: "loud-exhaust-repair-south-salt-lake", name: "Loud Exhaust Noise", shortName: "Loud Exhaust", priority: "Medium", category: "Exhaust", relatedService: "exhaust-repair-south-salt-lake-ut",
    intro: "If your vehicle is louder than normal, you likely have an exhaust leak or damaged component that needs repair.",
    smsBody: "Hi, my exhaust is really loud.",
    causes: [
      { title: "Exhaust Leak", desc: "A hole or crack in the exhaust system lets gases escape before the muffler." },
      { title: "Damaged Muffler", desc: "Rust or impact damage to the muffler increases noise." },
      { title: "Broken Exhaust Hanger", desc: "A broken hanger lets the exhaust sag and crack at joints." }
    ]
  },
  { slug: "exhaust-smell-cabin-repair-south-salt-lake", name: "Exhaust Smell in Cabin", shortName: "Exhaust Smell in Cabin", priority: "High", category: "Exhaust", relatedService: "exhaust-repair-south-salt-lake-ut",
    intro: "Exhaust fumes entering your cabin is dangerous—carbon monoxide is odorless and deadly. Get this checked immediately.",
    smsBody: "Hi, I smell exhaust inside my car.",
    causes: [
      { title: "Exhaust Leak Before Cabin", desc: "A leak under the vehicle allows fumes to enter through the floor or HVAC system." },
      { title: "Cracked Exhaust Manifold", desc: "A cracked manifold leaks exhaust near the firewall." },
      { title: "Damaged Seals", desc: "Worn trunk or door seals allow exhaust to enter the cabin." }
    ]
  },
  { slug: "failed-emissions-repair-south-salt-lake", name: "Failed Emissions Test", shortName: "Failed Emissions", priority: "Medium", category: "Exhaust", relatedService: "catalytic-converter-service-south-salt-lake-ut",
    intro: "Failed your Utah emissions test? We diagnose and fix emissions failures so you can get your registration renewed.",
    smsBody: "Hi, I failed my emissions test.",
    causes: [
      { title: "Catalytic Converter", desc: "A failing converter can't reduce emissions to passing levels." },
      { title: "Oxygen Sensor", desc: "A bad O2 sensor causes incorrect fuel mixture and high emissions." },
      { title: "Exhaust Leak", desc: "Leaks before the O2 sensor cause false readings." },
      { title: "Engine Misfire", desc: "Misfires send unburned fuel into the exhaust." }
    ]
  },
  { slug: "sulfur-smell-exhaust-repair-south-salt-lake", name: "Sulfur Smell from Exhaust", shortName: "Sulfur Smell", priority: "Medium", category: "Exhaust", relatedService: "catalytic-converter-service-south-salt-lake-ut",
    intro: "A rotten egg or sulfur smell from your exhaust indicates a catalytic converter problem or fuel system issue.",
    smsBody: "Hi, my exhaust smells like rotten eggs.",
    causes: [
      { title: "Failing Catalytic Converter", desc: "The converter can't process sulfur compounds in exhaust gases." },
      { title: "Rich Fuel Mixture", desc: "Too much fuel overwhelms the converter." },
      { title: "Fuel System Issue", desc: "A stuck injector or pressure regulator creates a rich condition." }
    ]
  },
  { slug: "bouncy-ride-repair-south-salt-lake", name: "Bouncy or Rough Ride", shortName: "Bouncy Ride", priority: "Medium", category: "Suspension", relatedService: "strut-replacement-south-salt-lake-ut",
    intro: "If your vehicle bounces excessively over bumps or feels like it's floating, your shocks or struts are likely worn out.",
    smsBody: "Hi, my vehicle has a bouncy ride.",
    causes: [
      { title: "Worn Struts", desc: "Struts lose their damping ability over time." },
      { title: "Worn Shocks", desc: "Shock absorbers wear out and can't control bounce." },
      { title: "Worn Bushings", desc: "Deteriorated bushings allow excessive suspension movement." }
    ]
  },
  { slug: "nose-dive-braking-repair-south-salt-lake", name: "Nose Dive When Braking", shortName: "Nose Dive Braking", priority: "Medium", category: "Suspension", relatedService: "strut-replacement-south-salt-lake-ut",
    intro: "If your vehicle's front end dives dramatically when braking, your front struts or shocks need replacement.",
    smsBody: "Hi, my car nose dives when braking.",
    causes: [
      { title: "Worn Front Struts", desc: "Weak struts can't resist the weight transfer during braking." },
      { title: "Worn Strut Mounts", desc: "Deteriorated mounts allow excessive strut travel." }
    ]
  },
  { slug: "uneven-tire-wear-repair-south-salt-lake", name: "Uneven Tire Wear", shortName: "Uneven Tire Wear", priority: "Medium", category: "Suspension", relatedService: "strut-replacement-south-salt-lake-ut",
    intro: "Uneven tire wear patterns indicate alignment, suspension, or inflation issues that are costing you tire life.",
    smsBody: "Hi, I have uneven tire wear.",
    causes: [
      { title: "Worn Struts/Shocks", desc: "Worn suspension components cause cupping and uneven wear." },
      { title: "Alignment Issues", desc: "Misalignment causes one-sided or feathered wear." },
      { title: "Improper Inflation", desc: "Over or under-inflated tires wear unevenly." }
    ]
  },
  { slug: "rough-ride-bumps-repair-south-salt-lake", name: "Rough Ride Over Bumps", shortName: "Rough Ride Over Bumps", priority: "Medium", category: "Suspension", relatedService: "shock-replacement-south-salt-lake-ut",
    intro: "Feeling every bump and pothole harshly means your shocks or struts can no longer absorb road imperfections.",
    smsBody: "Hi, I have a rough ride over bumps.",
    causes: [
      { title: "Worn Shocks", desc: "Shock absorbers lose their ability to dampen road impacts." },
      { title: "Worn Struts", desc: "Struts wear out and transmit every bump to the cabin." },
      { title: "Worn Bushings", desc: "Deteriorated bushings amplify road noise and harshness." }
    ]
  }
];

module.exports = symptoms;
