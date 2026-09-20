const locations = [
  {
    slug: "south-salt-lake-ut-auto-repair", name: "South Salt Lake", state: "UT", distance: "Our Location", driveTime: "0 min", zipCodes: ["84115", "84119"], isHome: true,
    intro: "Scott's Auto & Clutch Repair has called South Salt Lake home since 1990. Our shop at 144 W Crystal Ave sits right between I-15 and State Street, making us one of the most accessible auto repair shops in the valley. Whether you're coming from the 3300 South exit or cutting through on West Temple, you're never more than a few minutes away.",
    whyChooseUs: "South Salt Lake's mix of industrial corridors and residential neighborhoods means heavy stop-and-go traffic on State Street and 3300 South. That kind of driving accelerates brake wear and clutch fatigue, especially if you drive a manual. We see it every day, and we fix it every day.",
    landmarks: [],
    neighborhoods: ["Central Pointe", "Gadsby Triangle", "Fitts Park", "Dallas-Evergreen", "Crystal Park"],
    aboutCity: "South Salt Lake was incorporated in 1938 and has transformed from an industrial hub into a diverse community of over 25,000 residents. The city's central location between downtown Salt Lake City and the southern suburbs makes it a crossroads for commuters throughout the valley. Its ongoing revitalization along State Street has brought new restaurants, breweries, and creative businesses alongside long-established industrial and commercial operations. The Central Pointe TRAX hub makes South Salt Lake one of the most transit-accessible communities in Utah."
  },
  {
    slug: "sugar-house-ut-auto-repair", name: "Sugar House", state: "UT", distance: "3 miles", driveTime: "5 min", zipCodes: ["84106"], isHome: false,
    intro: "Sugar House drivers have been bringing their vehicles to Scott's Auto & Clutch Repair for over three decades. We're just 3 miles south on Highland Drive or State Street, a straight 5-minute shot from Sugar House Park. No freeway needed.",
    whyChooseUs: "Sugar House's hilly terrain around Sugarhouse Park and the 1300 East corridor puts extra strain on clutches and brakes. The constant elevation changes between 2100 South and I-80 mean your drivetrain works harder than in flat parts of the valley.",
    landmarks: [],
    neighborhoods: ["Sugar House Proper", "Forest Dale", "Gilmer Park", "Highland Park", "Emerson"],
    aboutCity: "Sugar House is one of Salt Lake City's oldest and most distinctive neighborhoods, originally named for a sugar beet processing plant that operated here in the 1850s. Today it's known for its walkable shopping district, tree-lined residential streets, and strong community identity. Sugar House Park's 110 acres provide year-round recreation for tens of thousands of residents. Westminster University adds a collegiate energy to the neighborhood, while ongoing development has brought new housing and retail to the 2100 South corridor."
  },
  {
    slug: "millcreek-ut-auto-repair", name: "Millcreek", state: "UT", distance: "3 miles", driveTime: "7 min", zipCodes: ["84106", "84109"], isHome: false,
    intro: "Millcreek residents are just 3 miles from our shop, a quick 7-minute drive down 3300 South or Highland Drive. We've been the go-to mechanic for Millcreek families since 1990, especially for drivers who commute through Parley's Canyon or head up to the ski resorts.",
    whyChooseUs: "Millcreek sits at the mouth of two major canyons, and that geography defines the driving conditions. Residents heading up Big Cottonwood or Millcreek Canyon deal with steep grades that stress clutches, brakes, and cooling systems more than any flatland driving.",
    landmarks: [],
    neighborhoods: ["Canyon Rim", "Millcreek Proper", "Meadowmoor", "Mount Olympus", "Sunnydale"],
    aboutCity: "Millcreek was incorporated as a city in 2016 after decades as an unincorporated Salt Lake County township, making it one of Utah's newest cities despite being one of the valley's oldest settled areas. Named for the creek flowing from the Wasatch Mountains, Millcreek is home to nearly 63,000 residents across a mix of established mid-century neighborhoods and newer developments. The city's eastern edge borders the Wasatch Mountains, giving residents direct access to Millcreek Canyon, Big Cottonwood Canyon, and the trails of the Wasatch Front."
  },
  {
    slug: "murray-ut-auto-repair", name: "Murray", state: "UT", distance: "4 miles", driveTime: "8 min", zipCodes: ["84107", "84121", "84123"], isHome: false,
    intro: "Murray drivers are just 4 miles from our shop, about 8 minutes straight up State Street. We've been serving Murray families since 1990, and many of our longest-running customers come from the Fashion Place Mall and Intermountain Medical Center areas.",
    whyChooseUs: "Murray's central location means heavy traffic on State Street and I-15. The constant stop-and-go around Fashion Place Mall and the 5300 South interchange wears down brakes faster than highway driving, we see that pattern every day from Murray customers.",
    landmarks: [],
    neighborhoods: ["Downtown Murray", "Historic Murray", "Vine Street District", "Murray City Center", "Fashion Place"],
    aboutCity: "Murray was founded in 1903 as a smelter town processing ore from the Bingham Canyon Mine and has grown into one of Salt Lake County's largest cities with over 50,000 residents. Intermountain Medical Center is the region's flagship hospital, making Murray a healthcare hub for the entire valley. The city's central location along State Street and I-15 makes it one of the valley's most accessible communities, and its strong TRAX connectivity links Murray residents to downtown, the airport, and southern suburbs."
  },
  {
    slug: "salt-lake-city-ut-auto-repair", name: "Salt Lake City", state: "UT", distance: "4 miles", driveTime: "10 min", zipCodes: ["84101", "84102", "84103", "84104", "84105", "84111"], isHome: false,
    intro: "Downtown Salt Lake City drivers are just 4 miles from our shop, about 10 minutes south on State Street or I-15. We serve everyone from downtown office commuters to University of Utah students to Avenues residents who need a mechanic they can trust.",
    whyChooseUs: "Salt Lake City driving is uniquely demanding. Between the steep Avenues streets, downtown one-way grid, freeway merging on I-15 and I-80, and winter inversions that mean cold starts for months, your vehicle works harder than most people realize.",
    landmarks: [],
    neighborhoods: ["Downtown", "The Avenues", "Capitol Hill", "Liberty Wells", "Central City", "9th & 9th", "East Central", "Poplar Grove", "Rose Park"],
    aboutCity: "Salt Lake City is Utah's capital and largest city, home to over 200,000 residents in the city proper and 1.2 million in the greater metro area. Founded in 1847, the city is headquarters to major corporations, world-class universities, and internationally recognized healthcare systems. The Wasatch Mountains immediately to the east provide access to some of the best skiing in North America, Alta, Snowbird, Park City, and Brighton are all within 45 minutes. The city's downtown core is undergoing significant growth and development."
  },
  {
    slug: "taylorsville-ut-auto-repair", name: "Taylorsville", state: "UT", distance: "5 miles", driveTime: "10 min", zipCodes: ["84118", "84123", "84129"], isHome: false,
    intro: "Taylorsville residents are 5 miles from our shop, a 10-minute drive east on 4700 South or 5400 South. We've been the trusted mechanic for Taylorsville families who need honest auto repair without dealership pricing.",
    whyChooseUs: "Taylorsville's wide arterial roads, 4700 South, Redwood Road, 5400 South, encourage higher speeds that stress braking systems. The I-215 belt route runs through the heart of Taylorsville, and the merge ramps put extra load on transmissions.",
    landmarks: [],
    neighborhoods: ["Taylorsville Proper", "Bennion", "Valley Hi", "Oquirrh Shadows"],
    aboutCity: "Taylorsville is a city of about 60,000 residents in the heart of Salt Lake County, incorporated in 1996. The city's central location at the intersection of I-215, Redwood Road, and 4700 South makes it a natural crossroads for the southwest valley. Taylorsville is known for its family-oriented neighborhoods, strong school system, and proximity to both the University of Utah Medical Center and Intermountain Health facilities."
  },
  {
    slug: "west-valley-city-ut-auto-repair", name: "West Valley City", state: "UT", distance: "7 miles", driveTime: "12 min", zipCodes: ["84119", "84120", "84128"], isHome: false,
    intro: "West Valley City drivers are 7 miles east of our shop, about 12 minutes on 3500 South. We've been a trusted alternative to the chain shops for West Valley families since 1990.",
    whyChooseUs: "West Valley City's sprawling layout means longer commutes and more highway miles. Whether you're driving 5600 West to the USANA Amphitheatre or merging onto I-215, your vehicle accumulates wear fast.",
    landmarks: [],
    neighborhoods: ["Chesterfield", "West Ridge", "Lake Park", "Redwood", "Hunter"],
    aboutCity: "West Valley City is Utah's second-largest city with over 140,000 residents, incorporated in 1980 from what was previously an unincorporated area west of Salt Lake City. It's one of the most culturally diverse communities in Utah, with significant Latino, Pacific Islander, and refugee populations contributing to a vibrant community fabric. The city is home to major entertainment venues including USANA Amphitheatre and the Maverik Center, and continues to develop its commercial and residential base."
  },
  {
    slug: "holladay-ut-auto-repair", name: "Holladay", state: "UT", distance: "5 miles", driveTime: "9 min", zipCodes: ["84117", "84121"], isHome: false,
    intro: "Holladay is one of our closest neighboring communities, just 5 miles and 9 minutes from our shop on Highland Drive or 4500 South. Many Holladay residents drive through our area daily on their commute.",
    whyChooseUs: "Holladay sits at the base of the Wasatch Mountains, and many residents commute up Big Cottonwood Canyon for skiing or recreation. That canyon driving creates specific wear patterns on brakes, clutches, and cooling systems that we know well.",
    landmarks: [],
    neighborhoods: ["Holladay Village", "Cottonwood", "Olympus Cove", "Holladay Hills", "Knollwood"],
    aboutCity: "Holladay was incorporated in 1999 and is home to about 31,000 residents in one of the east bench's most desirable communities. Nestled between Mount Olympus and the broader Salt Lake Valley, Holladay offers established neighborhoods with mature trees, strong schools, and easy access to both Big and Little Cottonwood Canyons. The city has maintained its quiet residential character while continuing to develop its Holladay Village commercial core."
  },
  {
    slug: "cottonwood-heights-ut-auto-repair", name: "Cottonwood Heights", state: "UT", distance: "6 miles", driveTime: "10 min", zipCodes: ["84121"], isHome: false,
    intro: "Cottonwood Heights drivers are about 6 miles from our shop, a 10-minute drive down Highland Drive or Fort Union Boulevard. We're the trusted mechanic for residents who put serious miles on their vehicles between canyon recreation and valley commuting.",
    whyChooseUs: "Cottonwood Heights is the gateway to both Big and Little Cottonwood Canyons, some of the most demanding driving conditions in Utah, with steep grades, altitude changes, and winter road treatments that stress brakes, clutches, and cooling systems.",
    landmarks: [],
    neighborhoods: ["Canyon Estates", "Fort Union", "Cottonwood Proper", "Kings Hill"],
    aboutCity: "Cottonwood Heights was incorporated in 2005 and has about 34,000 residents. The city sits between Big Cottonwood Canyon and Little Cottonwood Canyon, providing access to four world-class ski resorts, Brighton, Solitude, Snowbird, and Alta. Cottonwood Heights is one of the more affluent communities in Salt Lake County, with highly rated schools and an active outdoor recreation culture. Many residents are year-round canyon users who need vehicles capable of handling demanding mountain driving conditions."
  },
  {
    slug: "sandy-ut-auto-repair", name: "Sandy", state: "UT", distance: "8 miles", driveTime: "12 min", zipCodes: ["84070", "84092", "84093", "84094"], isHome: false,
    intro: "Sandy is one of the valley's largest suburbs, and our shop is just 8 miles north, about 12 minutes up I-15 or State Street. We're worth the short drive for clutch specialists and honest pricing that Sandy's chain shops can't match.",
    whyChooseUs: "Sandy drivers deal with I-15 commuting, 10600 South congestion, and uphill terrain toward the Wasatch foothills. The combination creates mixed wear patterns that require an experienced mechanic to diagnose correctly.",
    landmarks: [],
    neighborhoods: ["Sandy City Center", "Dimple Dell", "Alta Canyon", "Pepperwood", "Hidden Valley"],
    aboutCity: "Sandy is home to over 96,000 residents and is the sixth-largest city in Utah, known for a strong blend of suburban amenities and outdoor access. The city is home to America First Field (Real Salt Lake's stadium), South Towne Center, and direct TRAX access to downtown Salt Lake City. Sandy's eastern neighborhoods border the Wasatch foothills with access to Corner Canyon mountain biking trails and multiple ski resort corridors."
  },
  {
    slug: "draper-ut-auto-repair", name: "Draper", state: "UT", distance: "12 miles", driveTime: "15 min", zipCodes: ["84020"], isHome: false,
    intro: "Draper is 12 miles south, but our clutch and drivetrain expertise makes the 15-minute I-15 drive worthwhile. Many Draper residents have come to us after being disappointed by generic chain shops closer to home.",
    whyChooseUs: "Draper sits where I-15 begins its climb toward Point of the Mountain. That terrain plus tech corridor traffic on Bangerter Highway means Draper vehicles accumulate unique wear patterns that a specialist needs to understand.",
    landmarks: [],
    neighborhoods: ["Draper City Center", "SunCrest", "South Mountain", "Corner Canyon"],
    aboutCity: "Draper has about 51,000 residents and sits at the southern boundary of Salt Lake County, bordering Utah County. The city has grown rapidly as a tech hub and is a core part of Utah's 'Silicon Slopes' corridor, with major corporate campuses along Bangerter Highway. Draper's eastern neighborhoods border the Wasatch foothills and Corner Canyon, providing direct access to mountain biking, hiking, and skiing. The city has one of the highest median household incomes in Utah."
  },
  {
    slug: "west-jordan-ut-auto-repair", name: "West Jordan", state: "UT", distance: "8 miles", driveTime: "12 min", zipCodes: ["84081", "84084", "84088"], isHome: false,
    intro: "West Jordan drivers are about 8 miles east, a 12-minute drive up Redwood Road or the 201. We've been the honest alternative to dealerships for West Jordan families since 1990.",
    whyChooseUs: "West Jordan's suburban sprawl means every errand involves driving. Between the 7800 South commercial strip, Mountain View Corridor, and school traffic, vehicles accumulate city miles fast.",
    landmarks: [],
    neighborhoods: ["West Jordan Center", "Jordan Landing", "Copper Hills", "Harvest Village"],
    aboutCity: "West Jordan is the fourth-largest city in Utah with about 116,000 residents, one of the fastest-growing cities in the valley over the past two decades. It's a primarily residential community with major commercial development along Bangerter Highway and 7800 South. West Jordan has a strong family-oriented character with top-rated schools, active parks, and significant community investment in recreation facilities."
  },
  {
    slug: "south-jordan-ut-auto-repair", name: "South Jordan", state: "UT", distance: "10 miles", driveTime: "14 min", zipCodes: ["84009", "84095"], isHome: false,
    intro: "South Jordan residents are 10 miles from our shop, about 14 minutes on I-15 or Bangerter Highway. We're the clutch and drivetrain specialists South Jordan drivers come to when they need it done right.",
    whyChooseUs: "South Jordan's mix of Bangerter Highway commuting, 10400 South congestion, and the Daybreak community's roundabouts means diverse driving conditions that stress different vehicle systems.",
    landmarks: [],
    neighborhoods: ["Daybreak", "River View", "Jordan Willows", "South Jordan Proper"],
    aboutCity: "South Jordan has about 77,000 residents and has grown rapidly over the past two decades. The nationally recognized master-planned Daybreak community has been a major driver of growth, bringing thousands of new residents and a TRAX light rail connection to the southwest valley. South Jordan's location along Bangerter Highway provides convenient access to I-15 and I-215, making it a well-connected suburb with a strong family-oriented community."
  },
  {
    slug: "riverton-ut-auto-repair", name: "Riverton", state: "UT", distance: "12 miles", driveTime: "16 min", zipCodes: ["84065"], isHome: false,
    intro: "Riverton is 12 miles southwest, about 16 minutes on Bangerter Highway and I-15. Our clutch expertise and honest pricing bring Riverton drivers to our shop when local shops can't diagnose the problem.",
    whyChooseUs: "Riverton's position at the edge of the valley means longer commutes. Those extra daily miles add up fast on drivetrain components, worn clutches, tired brakes, and stressed CV joints show up earlier than Riverton residents expect.",
    landmarks: [],
    neighborhoods: ["Riverton Proper", "Western Springs", "Midas Creek"],
    aboutCity: "Riverton has about 44,000 residents and maintains a distinct small-town feel even as surrounding communities have grown rapidly. The city's western edge borders the Jordan River, and its Wasatch Mountain views to the east are among the best in the valley. Riverton has grown significantly since 2000 and continues to develop its commercial and civic infrastructure while preserving the agricultural character of its founding community."
  },
  {
    slug: "herriman-ut-auto-repair", name: "Herriman", state: "UT", distance: "15 miles", driveTime: "20 min", zipCodes: ["84096"], isHome: false,
    intro: "Herriman is the furthest community we regularly serve, 15 miles, about 20 minutes on Mountain View Corridor and I-15. Our clutch repair specialty brings Herriman drivers to our shop because there aren't many clutch specialists in the southwest valley.",
    whyChooseUs: "Herriman is one of Utah's fastest-growing cities, and its location at the base of the Oquirrh foothills means hilly terrain that stresses drivetrains. The long commute means preventive maintenance is more important, not less.",
    landmarks: [],
    neighborhoods: ["Herriman Town Center", "Anthem", "Blackridge"],
    aboutCity: "Herriman has grown from about 1,500 residents in 2000 to over 60,000 today, one of the fastest-growing cities in the western US over that period. Located at the base of the Oquirrh Mountains in the southwest corner of Salt Lake County, Herriman offers stunning mountain views and newly built neighborhoods. The city's growth has been driven by affordable housing, strong schools, and the extension of Mountain View Corridor. Most residents commute 20-30+ miles to employment centers."
  },
  {
    slug: "kearns-ut-auto-repair", name: "Kearns", state: "UT", distance: "7 miles", driveTime: "12 min", zipCodes: ["84118"], isHome: false,
    intro: "Kearns drivers are 7 miles from our shop, about 12 minutes east on 4700 South or 5400 South. We've been serving Kearns families who want honest auto repair at fair prices since 1990.",
    whyChooseUs: "Kearns is a working-class community where vehicles aren't luxuries, they're necessities. We understand that, and we price accordingly. No upselling, no unnecessary repairs, no surprises.",
    landmarks: [],
    neighborhoods: ["Kearns Proper", "Oquirrh Park", "Western Hills"],
    aboutCity: "Kearns has about 36,000 residents and is best known internationally for the Utah Olympic Oval, the indoor speed skating venue from the 2002 Winter Olympics that produced American Olympic champions and continues to train world-class athletes. Kearns is an unincorporated community administered by Salt Lake County, with a strong working-class identity and diverse population. The community has deep roots in the mining and smelting industries that shaped the west side of Salt Lake Valley."
  },
  {
    slug: "midvale-ut-auto-repair", name: "Midvale", state: "UT", distance: "5 miles", driveTime: "8 min", zipCodes: ["84047"], isHome: false,
    intro: "Midvale is one of our closest communities, just 5 miles south, about 8 minutes on State Street or I-15. We share the same working-class roots as Midvale and we've been serving its drivers since 1990.",
    whyChooseUs: "Midvale sits at the junction of I-15 and I-215, making it a crossroads for valley traffic. The 7200 South interchange is especially demanding, short merge lanes force hard acceleration that stresses clutches and brakes.",
    landmarks: [],
    neighborhoods: ["Midvale City Center", "Bingham Junction", "Old Midvale", "East Midvale"],
    aboutCity: "Midvale has about 35,000 residents and a rich industrial heritage rooted in the smelting and mining industries that shaped the southwest valley. The city has reinvented itself with the Bingham Junction mixed-use development near its TRAX stations, drawing new residents and businesses while honoring its working-class roots. Midvale's location at the I-15/I-215 junction makes it one of the most centrally located mid-valley communities."
  }
];

const locationMetaMap = {
  'south-salt-lake-ut-auto-repair': { t: "Auto Repair Shop South Salt Lake UT | Since 1990",                      d: "Your neighborhood auto repair shop at 144 W Crystal Ave, South Salt Lake. Clutch, brakes, CV joints & more since 1990. (801) 485-4089." },
  'sugar-house-ut-auto-repair':     { t: "Auto Repair Sugar House UT | Scott's Auto & Clutch Repair",            d: "Three miles south of Sugar House with TRAX drop-off. Drop your car, catch the train, pick up after work. Honest diagnosis. (801) 485-4089." },
  'millcreek-ut-auto-repair':       { t: "Auto Repair Millcreek UT | Scott's Auto & Clutch Repair",              d: "Millcreek's independent mechanic since 1990. Subaru boxer engines, Honda, Toyota, and everything else this canyon-driving community owns. (801) 485-4089." },
  'murray-ut-auto-repair':          { t: "Auto Repair Murray UT | 4 Miles | Free Diagnosis",                         d: "Murray drivers, Scott's Auto & Clutch Repair is just 4 miles away in South Salt Lake. Clutch, brakes, CV joints & more. (801) 485-4089." },
  'salt-lake-city-ut-auto-repair':  { t: "Auto Repair Salt Lake City UT | Scott's Auto & Clutch Repair",         d: "Trusted auto repair for Salt Lake City drivers since 1990. Clutch specialists, full service shop, honest pricing. Call (801) 485-4089." },
  'taylorsville-ut-auto-repair':    { t: "Auto Repair Taylorsville UT | Scott's Auto & Clutch Repair",           d: "Taylorsville families, minivans, SUVs, and daily drivers, five miles east and 35+ years of trusted service to the community. (801) 485-4089." },
  'west-valley-city-ut-auto-repair':{ t: "Auto Repair West Valley City UT | Since 1990",                         d: "West Valley commercial vehicles, work trucks, and family cars get fast turnaround at our South Salt Lake shop. Seven miles east. Call (801) 485-4089." },
  'holladay-ut-auto-repair':        { t: "Auto Repair Holladay UT | Scott's Auto & Clutch Repair",               d: "Five miles from Holladay, and 30+ years of experience with luxury, import, and canyon-driving vehicles common to the neighborhood. (801) 485-4089." },
  'cottonwood-heights-ut-auto-repair':{ t: "Auto Repair Cottonwood Heights UT | Since 1990",                    d: "Ski-canyon commuters to Alta, Snowbird, Brighton, and Solitude trust our shop for winter-wear inspection and year-round service. (801) 485-4089." },
  'sandy-ut-auto-repair':           { t: "Auto Repair Sandy UT | 8 Miles | Free Diagnosis",                         d: "Sandy drivers trust Scott's Auto & Clutch Repair for clutch repair, brakes, and full auto service. Just 8 miles away. Free diagnosis. (801) 485-4089." },
  'draper-ut-auto-repair':          { t: "Auto Repair Draper UT | Scott's Auto & Clutch Repair",                 d: "Draper drivers make the 12-mile I-15 run for brakes, engine, drivetrain, and luxury service without dealership pricing. Call (801) 485-4089." },
  'west-jordan-ut-auto-repair':     { t: "Auto Repair West Jordan UT | Scott's Auto & Clutch Repair",            d: "Eight miles east of West Jordan. Family vehicles, minivans, and SUVs serviced by a shop that tells you what's wrong, not what's profitable. (801) 485-4089." },
  'south-jordan-ut-auto-repair':    { t: "Auto Repair South Jordan UT | Scott's Auto & Clutch Repair",           d: "Ten miles north of Daybreak and South Jordan. Modern diagnostic equipment handles newer crossovers, SUVs, and family sedans. (801) 485-4089." },
  'riverton-ut-auto-repair':        { t: "Auto Repair Riverton UT | Scott's Auto & Clutch Repair",               d: "Auto repair for Riverton drivers at Scott's Auto & Clutch Repair in South Salt Lake. Call (801) 485-4089 to discuss your vehicle and plan drop-off." },
  'herriman-ut-auto-repair':        { t: "Auto Repair Herriman UT | Scott's Auto & Clutch Repair",               d: "Fifteen miles via Bangerter Highway. Herriman's trucks, SUVs, and family vehicles get careful work at fair pricing. (801) 485-4089." },
  'kearns-ut-auto-repair':          { t: "Auto Repair Kearns UT | Scott's Auto & Clutch Repair",                 d: "Seven miles east via 5400 South. Kearns customers have stuck with us across decades of repeat visits. Free estimates. Call (801) 485-4089." },
  'midvale-ut-auto-repair':         { t: "Auto Repair Midvale UT | Scott's Auto & Clutch Repair",                d: "Five miles straight up State Street. The closest family-owned auto shop to Midvale for brakes, clutch, engine, and full service. (801) 485-4089." }
};

locations.forEach(loc => {
  const lm = locationMetaMap[loc.slug];
  loc.metaTitle = lm ? lm.t : (loc.isHome ? "South Salt Lake Auto Repair | Scott's Auto & Clutch Repair" : loc.name + " Auto Repair | Scott's Auto & Clutch Repair");
  loc.metaDesc  = lm ? lm.d : (loc.isHome ? "Expert auto repair in South Salt Lake since 1990. Clutch repair, brake service, transmission work. 144 W Crystal Ave. Call (801) 485-4089." : "Expert auto repair near " + loc.name + ", UT. " + loc.distance + " from our shop. Call (801) 485-4089.");
  loc.heading = loc.isHome
    ? "Auto Repair Shop South Salt Lake UT, Brakes, Clutch & More"
    : "Auto Repair Shop " + loc.name + " UT, Brakes, Clutch & More";
});

module.exports = locations;
