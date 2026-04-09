const locations = [
  {
    slug: "south-salt-lake-ut-auto-repair", name: "South Salt Lake", state: "UT", distance: "Our Location", driveTime: "0 min", zipCodes: ["84115"], isHome: true,
    intro: "Scott's Auto & Clutch has called South Salt Lake home since 1990. Our shop at 144 W Crystal Ave sits right between I-15 and State Street, making us one of the most accessible auto repair shops in the valley. Whether you're coming from the 3300 South exit or cutting through on West Temple, you're never more than a few minutes away.",
    whyChooseUs: "South Salt Lake's mix of industrial corridors and residential neighborhoods means heavy stop-and-go traffic on State Street and 3300 South. That kind of driving accelerates brake wear and clutch fatigue, especially if you drive a manual. We see it every day—and we fix it every day.",
    landmarks: [
      { name: "Central Pointe TRAX Station", distance: "0.3 miles", tip: "Drop your car off and hop on TRAX to get to work downtown—we'll text you when it's ready." },
      { name: "Smith's Ballpark", distance: "0.5 miles", tip: "Catch a game while we handle your repair. Evening games line up perfectly with our turnaround times." },
      { name: "3300 South & State Street", distance: "0.4 miles", tip: "The busiest intersection in South Salt Lake. If your brakes squeak every time you hit this light, it's time." }
    ],
    drivingTips: [
      "State Street through South Salt Lake is one of the most heavily trafficked corridors in the valley. The constant red lights wear brake pads fast—we recommend inspections every 20,000 miles for commuters here.",
      "Industrial trucks on 3300 South kick up road debris that damages exhaust systems and undercarriages. If you hear rattling after your commute, get it checked.",
      "Winter salt on I-15 corrodes exhaust components and CV boots. An annual undercarriage inspection saves expensive repairs later."
    ],
    neighborhoods: ["Central Pointe", "Gadsby Triangle", "Fitts Park", "Dallas-Evergreen", "Crystal Park"],
    aboutCity: "South Salt Lake was incorporated in 1938 and has transformed from an industrial hub into a diverse community of over 25,000 residents. The city's central location between downtown Salt Lake City and the southern suburbs makes it a crossroads for commuters, and its ongoing revitalization along State Street has brought new restaurants, breweries, and creative businesses to the area."
  },
  {
    slug: "sugar-house-ut-auto-repair", name: "Sugar House", state: "UT", distance: "3 miles", driveTime: "5 min", zipCodes: ["84106"], isHome: false,
    intro: "Sugar House drivers have been bringing their vehicles to Scott's Auto & Clutch for over three decades. We're just 3 miles south on Highland Drive—a straight 5-minute shot from Sugar House Park. No freeway needed, no hassle.",
    whyChooseUs: "Sugar House's hilly terrain around Sugarhouse Park and the 1300 East corridor puts extra strain on clutches and brakes. The constant elevation changes between 2100 South and I-80 mean your drivetrain works harder than in flat parts of the valley.",
    landmarks: [
      { name: "Sugar House Park", distance: "2.5 miles", tip: "Head south on 1300 East from the park, turn right on 3300 South, and we're just past State Street." },
      { name: "Sugar House Shopping Center", distance: "2.8 miles", tip: "If you're shopping at Whole Foods or Target, our shop is a quick detour south for your oil change or brake check." },
      { name: "Westminster University", distance: "3.0 miles", tip: "Students and faculty get straightforward pricing. We know college budgets are tight." }
    ],
    drivingTips: [
      "The 2100 South hill between 700 East and 1300 East is steep enough to accelerate clutch wear on manual transmissions. If your clutch engagement point is creeping higher, don't wait.",
      "1300 East is riddled with potholes from Sugar House Park down to 3300 South, especially after spring thaw. Struts and alignment take a beating.",
      "The I-80 on-ramp at 1300 East forces aggressive acceleration uphill. This is hard on both clutches and CV joints."
    ],
    neighborhoods: ["Sugar House Proper", "Forest Dale", "Gilmer Park", "Highland Park", "Emerson"],
    aboutCity: "Sugar House is one of Salt Lake City's oldest and most beloved neighborhoods, originally named for a sugar beet processing plant that operated here in the 1850s. Today it's known for its walkable shopping district, tree-lined residential streets, and Sugar House Park—a 110-acre green space popular year-round."
  },
  {
    slug: "millcreek-ut-auto-repair", name: "Millcreek", state: "UT", distance: "3 miles", driveTime: "7 min", zipCodes: ["84106", "84109"], isHome: false,
    intro: "Millcreek residents are just 3 miles from our shop—a quick 7-minute drive down 3300 South. We've been the go-to mechanic for Millcreek families since 1990, especially for drivers who commute through Parley's Canyon or up to the ski resorts.",
    whyChooseUs: "Millcreek sits at the mouth of two major canyons, and that geography defines the driving conditions. Residents heading up Big Cottonwood or Millcreek Canyon deal with steep grades that stress clutches, brakes, and cooling systems.",
    landmarks: [
      { name: "Millcreek Canyon Road", distance: "5 miles from our shop", tip: "If you hike or bike Millcreek Canyon regularly, your brakes are working overtime on the descent. We check rotors for warping from sustained downhill braking." },
      { name: "Skyline High School", distance: "3.5 miles", tip: "Take 3900 South west to State Street, then south to Crystal Ave. Quick and easy." },
      { name: "Millcreek Common", distance: "3 miles", tip: "The new town center on 3300 South makes a great stop before picking up your car from our shop." }
    ],
    drivingTips: [
      "Canyon driving heats up brake rotors and can cause warping over time. If you feel pulsation when braking after a canyon descent, your rotors likely need resurfacing.",
      "The 3300 South corridor from Millcreek to I-15 is heavy with commercial traffic. Keep your brakes responsive for sudden stops at Highland Drive.",
      "Millcreek Canyon's unpaved upper sections shake loose exhaust hangers and accelerate CV boot wear from road debris."
    ],
    neighborhoods: ["Canyon Rim", "Millcreek Proper", "Meadowmoor", "Mount Olympus", "Sunnydale"],
    aboutCity: "Millcreek was incorporated as a city in 2016 after decades as an unincorporated township, making it one of Utah's newest cities despite being one of the valley's oldest settled areas. Named for the creek flowing from the Wasatch Mountains, Millcreek is home to nearly 63,000 residents."
  },
  {
    slug: "murray-ut-auto-repair", name: "Murray", state: "UT", distance: "4 miles", driveTime: "8 min", zipCodes: ["84107", "84121", "84123"], isHome: false,
    intro: "Murray drivers are just 4 miles from our shop—about 8 minutes straight up State Street. We've been serving Murray families since 1990, and many of our longest-running customers commute from the Fashion Place Mall area.",
    whyChooseUs: "Murray's central location means heavy traffic on State Street and I-15. The constant stop-and-go around Fashion Place Mall and the 5300 South interchange wears down brakes faster than highway driving.",
    landmarks: [
      { name: "Fashion Place Mall", distance: "3.2 miles", tip: "Head north on State Street from 6400 South. We're at Crystal Ave, just north of 3300 South." },
      { name: "Intermountain Medical Center", distance: "2.8 miles", tip: "Healthcare workers on shift schedules appreciate our drop-off service. Leave your car, take TRAX to work." },
      { name: "Murray City Park", distance: "3.5 miles", tip: "Murray Park families trust us for the family minivan—brake checks before road trips are always a good idea." }
    ],
    drivingTips: [
      "The I-15/5300 South interchange is notorious for sudden stops. If you commute through here daily, ceramic brake pads last longer and handle the heat better.",
      "Fashion Place Mall traffic creates constant stop-and-go on State Street between 5900 South and 6400 South. Brake pads wear 30% faster in stop-and-go than highway driving.",
      "Murray's TRAX stations make it easy to drop off your car for service and take transit to work."
    ],
    neighborhoods: ["Downtown Murray", "Historic Murray", "Vine Street District", "Murray City Center", "Fashion Place"],
    aboutCity: "Murray was founded in 1903 as a smelter town and has grown into one of Salt Lake County's largest cities with over 50,000 residents. Intermountain Medical Center is the region's flagship hospital, making Murray a healthcare hub for the entire valley."
  },
  {
    slug: "salt-lake-city-ut-auto-repair", name: "Salt Lake City", state: "UT", distance: "4 miles", driveTime: "10 min", zipCodes: ["84101", "84102", "84103", "84104", "84105", "84111"], isHome: false,
    intro: "Downtown Salt Lake City drivers are just 4 miles from our shop—about 10 minutes south on State Street or I-15. We serve everyone from downtown office commuters to University of Utah students to Capitol Hill residents.",
    whyChooseUs: "Salt Lake City driving is unique. Between the steep Avenues streets, downtown one-way grid, freeway merging on I-15 and I-80, and winter inversions that mean cold starts for months, your vehicle works hard.",
    landmarks: [
      { name: "Downtown / City Creek", distance: "4 miles", tip: "Take I-15 south to the 3300 South exit, head east to State Street, then south to Crystal Ave." },
      { name: "University of Utah", distance: "5 miles", tip: "Students: take TRAX Red Line south to Central Pointe. We're a 3-minute walk from the station." },
      { name: "Liberty Park", distance: "2.5 miles", tip: "If you live near Liberty Park, we're just a quick drive south on 700 East to 3300 South." }
    ],
    drivingTips: [
      "Capitol Hill and the Avenues have some of the steepest residential streets in the state. Clutch wear is accelerated by daily hill starts.",
      "I-15 through downtown Salt Lake is the most congested stretch in Utah. The stop-and-go from 600 South to 2100 South eats brake pads fast.",
      "Winter inversions mean weeks of cold starts below freezing. Let your engine warm up briefly—it protects timing chain tensioners."
    ],
    neighborhoods: ["Downtown", "The Avenues", "Capitol Hill", "Liberty Wells", "Central City", "9th & 9th", "East Central", "Poplar Grove", "Rose Park"],
    aboutCity: "Salt Lake City is Utah's capital and largest city, home to over 200,000 residents. Founded in 1847, the city blends its historic grid layout with modern development and world-class ski resorts within 30 minutes."
  },
  {
    slug: "taylorsville-ut-auto-repair", name: "Taylorsville", state: "UT", distance: "5 miles", driveTime: "10 min", zipCodes: ["84118", "84123", "84129"], isHome: false,
    intro: "Taylorsville residents are 5 miles from our shop—a 10-minute drive east on 4700 South or up Redwood Road. We've been the trusted mechanic for Taylorsville families who need honest auto repair without the dealership markup.",
    whyChooseUs: "Taylorsville's wide arterial roads—4700 South, Redwood Road, 5400 South—encourage higher speeds that stress braking systems. The I-215 belt route also runs through Taylorsville, and the merge ramps put extra load on transmissions.",
    landmarks: [
      { name: "Valley Fair Mall area", distance: "5 miles", tip: "Head east on 4700 South to State Street, then north to 3300 South." },
      { name: "Taylorsville City Hall", distance: "5.5 miles", tip: "From City Hall on Redwood Road, take 4700 South east—straight shot to our shop." }
    ],
    drivingTips: [
      "Redwood Road's long straightaways encourage higher speeds, but the signal timing creates harsh stop-and-go cycles. Check brake pads every 25,000 miles.",
      "I-215 West runs through Taylorsville with short merge lanes that demand aggressive acceleration—hard on clutches and CV joints.",
      "4700 South between Redwood Road and I-15 has heavy truck traffic. Watch for road debris that damages tires and undercarriage components."
    ],
    neighborhoods: ["Taylorsville Proper", "Bennion", "Valley Hi", "Oquirrh Shadows"],
    aboutCity: "Taylorsville is a city of about 60,000 residents in the heart of Salt Lake County, incorporated in 1996. The city's central location makes it a natural hub for the southwest valley."
  },
  {
    slug: "west-valley-city-ut-auto-repair", name: "West Valley City", state: "UT", distance: "7 miles", driveTime: "12 min", zipCodes: ["84119", "84120", "84128"], isHome: false,
    intro: "West Valley City drivers are 7 miles east of our shop—about 12 minutes on 3500 South or 3100 South. We've been a trusted alternative to the chain shops for West Valley families since 1990.",
    whyChooseUs: "West Valley City's sprawling layout means longer commutes and more highway miles. Whether you're driving 5600 West to the USANA Amphitheatre or merging onto I-215, your vehicle accumulates wear fast.",
    landmarks: [
      { name: "USANA Amphitheatre", distance: "10 miles", tip: "Concert traffic on 5600 West creates bumper-to-bumper clutch abuse. If your clutch smells after the show, that's not normal." },
      { name: "Maverik Center", distance: "8 miles", tip: "Take 3100 South east from the arena area to reach our shop." }
    ],
    drivingTips: [
      "3500 South through West Valley is one of the widest, busiest roads in the county. The start-stop pattern is especially hard on clutches.",
      "Rail crossings near 2700 West cause sudden stops—keep extra following distance and monitor brake responsiveness.",
      "Gravel and construction debris from ongoing development can puncture CV boots and damage exhaust components."
    ],
    neighborhoods: ["Chesterfield", "West Ridge", "Lake Park", "Redwood", "Hunter"],
    aboutCity: "West Valley City is Utah's second-largest city with over 140,000 residents. Incorporated in 1980, it's one of the most diverse communities in the state."
  },
  {
    slug: "holladay-ut-auto-repair", name: "Holladay", state: "UT", distance: "5 miles", driveTime: "9 min", zipCodes: ["84117", "84121"], isHome: false,
    intro: "Holladay is one of our closest neighboring communities—just 5 miles and 9 minutes from our shop. Many Holladay residents drive through our area daily on Highland Drive or 4500 South.",
    whyChooseUs: "Holladay sits at the base of the Wasatch Mountains, and many residents commute up Big Cottonwood Canyon for skiing or recreation. That canyon driving creates specific wear patterns on brakes, clutches, and cooling systems.",
    landmarks: [
      { name: "Holladay Village", distance: "4.5 miles", tip: "From Holladay Village on Highland Drive, just head north. Highland Drive runs straight to our area." },
      { name: "Big Cottonwood Canyon mouth", distance: "7 miles from our shop", tip: "Canyon skiers: get your brakes checked before the season. Sustained downhill braking warps rotors." }
    ],
    drivingTips: [
      "Highland Drive from Holladay to our shop is one continuous road with moderate traffic—no freeway needed.",
      "Big Cottonwood Canyon's 8% grade forces sustained braking that generates extreme heat. Have rotors inspected annually if you ski regularly.",
      "Holladay's tree-lined streets have root systems creating pavement heaving that jars suspension components."
    ],
    neighborhoods: ["Holladay Village", "Cottonwood", "Olympus Cove", "Holladay Hills", "Knollwood"],
    aboutCity: "Holladay was incorporated in 1999 and is home to about 31,000 residents. Nestled at the base of Mount Olympus, the city offers a quieter residential feel with easy access to Big Cottonwood Canyon."
  },
  {
    slug: "cottonwood-heights-ut-auto-repair", name: "Cottonwood Heights", state: "UT", distance: "6 miles", driveTime: "10 min", zipCodes: ["84121"], isHome: false,
    intro: "Cottonwood Heights drivers are about 6 miles from our shop—a 10-minute drive down Highland Drive or Fort Union Boulevard. We're the trusted mechanic for residents who put serious miles on their vehicles between canyon recreation and valley commuting.",
    whyChooseUs: "Cottonwood Heights is the gateway to both Big and Little Cottonwood Canyons—some of the most demanding driving conditions in Utah with steep grades, altitude changes, and winter road treatments.",
    landmarks: [
      { name: "Big Cottonwood Canyon / Brighton", distance: "20 miles from our shop", tip: "Season pass holders: your brakes see more heat cycling than almost any other driving scenario." },
      { name: "Little Cottonwood Canyon / Snowbird", distance: "18 miles from our shop", tip: "LCC is the steepest canyon road in the valley. If you hear grinding on the descent, don't wait." }
    ],
    drivingTips: [
      "Little Cottonwood Canyon has the steepest sustained grade of any road in the Salt Lake Valley. Descend in gear to reduce brake temperature.",
      "UDOT's winter canyon restrictions require chains or AWD/4WD. If your AWD system has a warning light, get it diagnosed before canyon season.",
      "Wasatch Boulevard's curves between the two canyons are hard on suspension components."
    ],
    neighborhoods: ["Canyon Estates", "Fort Union", "Cottonwood Proper", "Kings Hill"],
    aboutCity: "Cottonwood Heights was incorporated in 2005 and has about 34,000 residents. The city sits between Big Cottonwood Canyon and Little Cottonwood Canyon, providing access to four world-class ski resorts."
  },
  {
    slug: "sandy-ut-auto-repair", name: "Sandy", state: "UT", distance: "8 miles", driveTime: "12 min", zipCodes: ["84070", "84092", "84093", "84094"], isHome: false,
    intro: "Sandy is one of the valley's largest suburbs, and our shop is just 8 miles north—about 12 minutes up I-15 or State Street. We're worth the short drive for clutch specialists and honest pricing.",
    whyChooseUs: "Sandy drivers deal with I-15 commuting, 10600 South congestion, and uphill terrain toward the Wasatch foothills. The combination creates mixed wear patterns that require an experienced mechanic.",
    landmarks: [
      { name: "South Towne Center", distance: "7 miles", tip: "Take I-15 north from 10600 South to 3300 South. About 10 minutes." },
      { name: "America First Field (RSL)", distance: "7.5 miles", tip: "Match day traffic on 9000 South is brutal on clutches." },
      { name: "Sandy Civic Center TRAX", distance: "8 miles", tip: "Take TRAX Blue Line north to Central Pointe—3-minute walk to our shop." }
    ],
    drivingTips: [
      "I-15 from Sandy to downtown is the most congested commute corridor in Utah. The daily brake-gas-brake cycle wears pads faster than the highway miles suggest.",
      "10600 South between I-15 and State Street has some of the longest red lights in the county. Idling in gear accelerates throw-out bearing wear.",
      "Sandy's eastern neighborhoods near the foothills have steep driveways. Hill starts put 2-3x normal wear on clutch components."
    ],
    neighborhoods: ["Sandy City Center", "Dimple Dell", "Alta Canyon", "Pepperwood", "Hidden Valley"],
    aboutCity: "Sandy is home to over 96,000 residents and is the sixth-largest city in Utah. The city blends suburban convenience with mountain access and strong TRAX connectivity to downtown."
  },
  {
    slug: "draper-ut-auto-repair", name: "Draper", state: "UT", distance: "12 miles", driveTime: "15 min", zipCodes: ["84020"], isHome: false,
    intro: "Draper is 12 miles south, but our clutch and drivetrain expertise makes the 15-minute I-15 drive worthwhile. Many Draper residents have come to us after being disappointed by generic chain shops closer to home.",
    whyChooseUs: "Draper sits where I-15 begins its climb toward Point of the Mountain. That terrain plus tech corridor traffic on Bangerter Highway means Draper vehicles accumulate unique wear patterns.",
    landmarks: [
      { name: "Draper TRAX station", distance: "12 miles", tip: "Take Blue Line north to Central Pointe—walkable to our shop. Great for full-day repairs." },
      { name: "Corner Canyon trails", distance: "14 miles", tip: "Mountain bikers put their SUVs through dirt roads that stress CV joints and suspension." }
    ],
    drivingTips: [
      "The I-15 grade at Point of the Mountain is where overloaded clutches and overheated brakes show their weakness. If you tow anything, get inspections before the season.",
      "Bangerter Highway's high speed limits and sudden exits create harsh braking events.",
      "Draper's foothill neighborhoods have steep grades that rival the Avenues. Manual drivers burn through clutches faster than expected."
    ],
    neighborhoods: ["Draper City Center", "SunCrest", "South Mountain", "Corner Canyon"],
    aboutCity: "Draper has about 51,000 residents and sits at the southern boundary of Salt Lake County. The city has grown rapidly as a tech hub—often called 'Silicon Slopes South.'"
  },
  {
    slug: "west-jordan-ut-auto-repair", name: "West Jordan", state: "UT", distance: "8 miles", driveTime: "12 min", zipCodes: ["84081", "84084", "84088"], isHome: false,
    intro: "West Jordan drivers are about 8 miles southwest—a 12-minute drive up Redwood Road or the 201. We've been the honest alternative to dealerships for West Jordan families since 1990.",
    whyChooseUs: "West Jordan's suburban sprawl means every errand involves driving. Between the 7800 South commercial strip, Mountain View Corridor, and school traffic, vehicles accumulate city miles fast.",
    landmarks: [
      { name: "Jordan Landing", distance: "9 miles", tip: "Head north on Bangerter to the 201, then I-15 north to 3300 South." },
      { name: "Gardner Village", distance: "6 miles", tip: "Gardner Village visitors can easily swing by our shop—just north up 1300 West." }
    ],
    drivingTips: [
      "Mountain View Corridor is fast-moving but has abrupt exits. The deceleration from 60mph to a stop is hard on brake rotors.",
      "7800 South has synchronized lights that reward steady driving. Aggressive acceleration between signals wears clutches and burns extra fuel.",
      "West Jordan's newer subdivisions have speed bumps that compress struts hundreds of times per week."
    ],
    neighborhoods: ["West Jordan Center", "Jordan Landing", "Copper Hills", "Harvest Village"],
    aboutCity: "West Jordan is the fourth-largest city in Utah with about 116,000 residents. It's one of the fastest-growing cities in the valley."
  },
  {
    slug: "south-jordan-ut-auto-repair", name: "South Jordan", state: "UT", distance: "10 miles", driveTime: "14 min", zipCodes: ["84009", "84095"], isHome: false,
    intro: "South Jordan residents are 10 miles from our shop—about 14 minutes on I-15 or Bangerter Highway. We're the clutch and drivetrain specialists South Jordan drivers come to when they need it done right.",
    whyChooseUs: "South Jordan's mix of Bangerter Highway commuting, 10400 South congestion, and the Daybreak community means diverse driving conditions that stress different vehicle systems.",
    landmarks: [
      { name: "The District at South Jordan", distance: "10 miles", tip: "From The District, hop on Bangerter north to the 201, then I-15 north to 3300 South." },
      { name: "Daybreak TRAX station", distance: "12 miles", tip: "Daybreak's TRAX station connects directly to our Central Pointe stop." }
    ],
    drivingTips: [
      "Bangerter Highway's grade-separated intersections are fast but the transitions from 55mph to exit ramps are aggressive on brakes.",
      "10400 South between Bangerter and Redwood Road is consistently among the most congested corridors in the southwest valley.",
      "Daybreak's roundabouts are gentle on brakes but the constant low-speed turning wears CV joints and tie rod ends."
    ],
    neighborhoods: ["Daybreak", "River View", "Jordan Willows", "South Jordan Proper"],
    aboutCity: "South Jordan has about 77,000 residents. The master-planned Daybreak community has been nationally recognized for its walkable design."
  },
  {
    slug: "riverton-ut-auto-repair", name: "Riverton", state: "UT", distance: "12 miles", driveTime: "16 min", zipCodes: ["84065"], isHome: false,
    intro: "Riverton is 12 miles southwest—about 16 minutes on Bangerter Highway and I-15. Our clutch expertise and honest pricing bring Riverton drivers to our shop when local shops can't diagnose the problem.",
    whyChooseUs: "Riverton's position at the edge of the valley means longer commutes. Those extra daily miles add up fast on drivetrain components—worn clutches, tired brakes, and stressed CV joints.",
    landmarks: [
      { name: "Riverton City Park", distance: "12 miles", tip: "Take 12600 South to Bangerter, then north to the 201 and I-15." }
    ],
    drivingTips: [
      "The commute from Riverton to downtown Salt Lake can be 25+ miles each way. At that distance, every 6 months of commuting equals roughly one year of typical wear.",
      "Bangerter Highway's 55mph sections transition to 40mph zones abruptly. Hard braking at transitions wears pads unevenly.",
      "Riverton's western neighborhoods near the Jordan River have roads that flood during spring runoff, threatening CV boots."
    ],
    neighborhoods: ["Riverton Proper", "Western Springs", "Midas Creek"],
    aboutCity: "Riverton has about 44,000 residents and maintains a small-town feel. The city's western edge borders the Jordan River."
  },
  {
    slug: "herriman-ut-auto-repair", name: "Herriman", state: "UT", distance: "15 miles", driveTime: "20 min", zipCodes: ["84096"], isHome: false,
    intro: "Herriman is the furthest community we regularly serve—15 miles, about 20 minutes. Our clutch repair specialty brings Herriman drivers to our shop because there aren't many clutch specialists in the southwest valley.",
    whyChooseUs: "Herriman is one of Utah's fastest-growing cities, and its location at the base of the Oquirrh foothills means hilly terrain that stresses drivetrains. The long commute means preventive maintenance is more important—not less.",
    landmarks: [
      { name: "Herriman Main Street", distance: "15 miles", tip: "Take Mountain View Corridor north to the 201, then I-15 north to 3300 South." }
    ],
    drivingTips: [
      "Mountain View Corridor is Herriman's lifeline to I-15. The distance means your vehicle racks up serious miles annually.",
      "Herriman's hillside developments have steep residential streets. Manual transmission drivers starting on steep driveways wear clutch release bearings faster.",
      "New construction zones throughout Herriman mean gravel, nails, and debris on roads."
    ],
    neighborhoods: ["Herriman Town Center", "Anthem", "Blackridge"],
    aboutCity: "Herriman has grown from about 1,500 residents in 2000 to over 60,000 today—one of the fastest-growing cities in the western US."
  },
  {
    slug: "kearns-ut-auto-repair", name: "Kearns", state: "UT", distance: "7 miles", driveTime: "12 min", zipCodes: ["84118"], isHome: false,
    intro: "Kearns drivers are 7 miles from our shop—about 12 minutes east on 4700 South or 5400 South. We've been serving Kearns families who want honest auto repair at fair prices since 1990.",
    whyChooseUs: "Kearns is a working-class community where vehicles aren't luxuries—they're necessities. We understand that, and we price accordingly. No upselling, no unnecessary repairs.",
    landmarks: [
      { name: "Utah Olympic Oval", distance: "7 miles", tip: "From the Oval on 5400 South, head east to State Street, then north to Crystal Ave." }
    ],
    drivingTips: [
      "5400 South through Kearns has heavy commercial truck traffic creating potholes that damage struts and alignment.",
      "Kearns neighborhoods have narrower streets with parking that forces tight maneuvering, wearing tie rods and CV joints.",
      "The I-15 on-ramp at 4500 South requires aggressive acceleration—monitor your clutch health if you merge here daily."
    ],
    neighborhoods: ["Kearns Proper", "Oquirrh Park", "Western Hills"],
    aboutCity: "Kearns has about 36,000 residents and is best known for the Utah Olympic Oval—the speed skating venue from the 2002 Winter Olympics."
  },
  {
    slug: "midvale-ut-auto-repair", name: "Midvale", state: "UT", distance: "5 miles", driveTime: "8 min", zipCodes: ["84047"], isHome: false,
    intro: "Midvale is one of our closest communities—just 5 miles south, about 8 minutes on State Street or I-15. We share the same working-class roots as Midvale and we've been serving its drivers since 1990.",
    whyChooseUs: "Midvale sits at the junction of I-15 and I-215, making it a crossroads for valley traffic. The 7200 South interchange is especially demanding—short merge lanes force hard acceleration that stresses clutches.",
    landmarks: [
      { name: "Midvale TRAX", distance: "5 miles", tip: "Take the Blue Line north to Central Pointe—3-minute walk to our shop." },
      { name: "7200 South & I-15", distance: "4.5 miles", tip: "If you commute through this interchange daily, your brakes and clutch need more frequent attention." }
    ],
    drivingTips: [
      "The I-15/I-215 interchange near Midvale has some of the shortest merge lanes in the valley—a clutch and brake killer.",
      "7200 South between State Street and I-15 has constant commercial traffic. Consider ceramic pads for longer life.",
      "Midvale's older neighborhoods have alley-style streets with uneven pavement that wears bushings and ball joints."
    ],
    neighborhoods: ["Midvale City Center", "Bingham Junction", "Old Midvale", "East Midvale"],
    aboutCity: "Midvale has about 35,000 residents and a rich mining heritage. The city has reinvented itself with the Bingham Junction development and strong TRAX connectivity."
  }
];

locations.forEach(loc => {
  loc.metaTitle = loc.isHome
    ? "South Salt Lake Auto Repair: Scott's Auto & Clutch - Since 1990"
    : loc.name + " Auto Repair: SLC Auto Shop - Certified Service";
  loc.metaDesc = loc.isHome
    ? "Expert auto repair in South Salt Lake since 1990. Clutch repair, brake service, transmission work. 144 W Crystal Ave. Call (801) 485-4089."
    : "Expert auto repair near " + loc.name + ", UT. Clutch repair, brake service, CV joint repair. " + loc.distance + " from our shop. Call (801) 485-4089.";
  loc.heading = loc.isHome
    ? "Auto Repair Shop South Salt Lake UT — Brakes, Clutch & More"
    : "Auto Repair Shop " + loc.name + " UT — Brakes, Clutch & More";
});

module.exports = locations;
