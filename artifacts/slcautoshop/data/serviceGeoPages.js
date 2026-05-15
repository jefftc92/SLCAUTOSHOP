'use strict';
// 192 near-city service geo pages (12 services × 16 cities)
// SEO rule: never state what a repair "includes" — every job varies by vehicle

const CITIES = [
  {
    slug: 'sugar-house', name: 'Sugar House', distance: '3 miles', driveTime: '5 min',
    directions: 'Head south on Highland Drive (1300 East) from Sugar House into South Salt Lake. Turn right on Crystal Ave — our shop is on the right side of the street. About 5 minutes in normal daytime traffic.',
    landmarks: [
      { name: '2100 South & Highland Drive', distance: '2 min north', tip: 'The intersection where the I-80 on-ramp meets Highland Drive — head south from here and our shop is 3 minutes ahead on the right at Crystal Ave.' },
      { name: 'Sprouts Farmers Market — 2750 S Highland Drive', distance: '0.5 miles from shop', tip: 'A recognizable stop on the drive south from Sugar House. When you see Sprouts on your right heading toward South Salt Lake, Crystal Ave is the next left. We\'re halfway down the block on the right.' },
      { name: 'State Street & Crystal Ave', distance: '0.1 miles east', tip: 'The intersection at the east end of our block. If you overshoot Crystal Ave heading south on Highland Drive, you can also come west on 3300 South to State Street, then turn right on Crystal Ave — we\'re half a block west.' }
    ],
    logisticsNote: 'Most Sugar House customers drop the car in the morning and pick it up the same day. We open at 8 AM, and diagnoses are typically done within a couple of hours. If you\'d rather not sit at the shop, Uber and Lyft run consistently from our lot — the ride back to Sugar House is usually under $10 and about 5 minutes. Call ahead and we\'ll have your intake ready when you arrive.',
    processNote: 'For Sugar House customers, most jobs are completed the same day — drop off at 8 AM and pick up before close.',
    whyChooseUs: [
      { title: '5 Minutes from Sugar House', desc: 'Highland Drive to Crystal Ave — one turn, no freeway. Drop off at 8 AM, Lyft back to the neighborhood, and pick up the same day.' },
      { title: 'We Know Sugar House Terrain', desc: 'The I-80 on-ramp grade on 1300 East, the Harrison Avenue hill starts, the stop-and-go on 2100 South — we see these driving patterns from Sugar House vehicles regularly and know what each one does to a car over time.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Sugar House drivers come here because general shops send them back with the same problem. We\'ve been diagnosing and fixing cars in this valley since 1990 — and we get it right the first time.' }
    ]
  },
  {
    slug: 'millcreek', name: 'Millcreek', distance: '3 miles', driveTime: '7 min',
    directions: 'Take 3300 South west to Highland Drive, then head south briefly and turn left on Crystal Ave. We\'re on the right side of Crystal Ave. About 7 minutes from central Millcreek in light traffic.',
    landmarks: [
      { name: 'Wheeler Historic Farm — 6351 S 900 E', distance: '2 min east of route', tip: 'A recognizable Millcreek landmark near the 3300 South corridor. From here, head west on 3300 South, then turn right on Highland Drive and follow it north — Crystal Ave is about 2 miles up on your left.' },
      { name: '3300 South & Highland Drive (1300 East)', distance: '3 min from shop', tip: 'The main turn heading north toward our shop from Millcreek. Turn right on Highland Drive and stay straight — Crystal Ave is the first left after the Sugar House area. We\'re halfway down the block on the right.' },
      { name: '3300 South & State Street', distance: '0.5 miles east of shop', tip: 'If you come west on 3300 South past State Street, you\'ve gone slightly too far. Turn right on State Street, then right again on Crystal Ave — our shop is at 144 W Crystal Ave on the right side.' }
    ],
    logisticsNote: 'Millcreek customers are about 7 minutes from the shop on 3300 South. Drop your car in the morning and Uber or Lyft back to Millcreek — the return ride is typically under $10 and about 10 minutes. TRAX isn\'t on this direct route, but rideshare is readily available from our lot. Call ahead and we\'ll have the paperwork ready when you arrive.',
    processNote: 'For Millcreek customers, most jobs are done same-day — we\'ll give you an honest timeline when you call.',
    whyChooseUs: [
      { title: '7 Minutes from Millcreek', desc: '3300 South west to Highland Drive — no freeway, one turn. Drop off in the morning and most jobs are done same day.' },
      { title: 'We Know Canyon and Valley Driving', desc: 'Millcreek drivers put their cars through both canyon grades and valley stop-and-go. We see this combination regularly and know what it does to different systems over time.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Millcreek drivers come here when a general shop hasn\'t gotten to the root of the problem. We\'ve been doing this since 1990 and fix it right the first time.' }
    ]
  },
  {
    slug: 'murray', name: 'Murray', distance: '4 miles', driveTime: '8 min',
    directions: 'Head north on State Street from Murray into South Salt Lake. Turn left on Crystal Ave — we\'re about half a mile west of State Street on the right. About 8 minutes. TRAX Blue Line riders can board at Murray Central and ride to Central Pointe station, then walk 3 minutes east to our shop.',
    landmarks: [
      { name: 'Murray Central TRAX Station', distance: '4 miles south', tip: 'The most practical transit option for Murray customers. Board the Red Line here and ride one stop north to Central Pointe — a 3-minute walk from our shop. Drop your car, ride TRAX to your day, pick up when we call.' },
      { name: 'Fashion Place Mall — 6191 S State Street', distance: '4 miles south on State St', tip: 'A clear landmark on the State Street route to our shop. From Fashion Place heading north on State Street, it\'s a straight 3.5-mile drive to Crystal Ave — no turns until you reach our street.' },
      { name: '2700 South & State Street', distance: '0.2 miles from shop', tip: 'When you see the 2700 South intersection on State Street, Crystal Ave is 2 blocks north on the left. We\'re at 144 W Crystal Ave, about half a mile west of State Street on the right side.' }
    ],
    logisticsNote: 'Murray Central TRAX Station makes the drop-off easy. Board the Red Line at Murray Central, ride north to Central Pointe Station, and walk 3 minutes east to our shop. Drop your car before work, take TRAX to your day, and we\'ll call when the job is done. Uber and Lyft are also available from our lot throughout the day — the return ride to Murray Central is about 8 minutes.',
    processNote: 'Most Murray customers drop off in the morning and pick up the same day — call ahead and we\'ll confirm timing for your specific job.',
    whyChooseUs: [
      { title: '8 Minutes from Murray + TRAX', desc: 'State Street north to Crystal Ave — or drop off and take TRAX one stop from Murray Central. Most jobs are done same day.' },
      { title: 'We Know State Street Driving', desc: 'Murray\'s State Street is one of the most signal-dense corridors in the valley. We see the wear patterns that come from daily stop-and-go commuting and know exactly what to check first.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Murray drivers come here when a closer shop hasn\'t fixed the problem. We\'ve been doing this since 1990 and get it right the first time.' }
    ]
  },
  {
    slug: 'salt-lake-city', name: 'Salt Lake City', distance: '4 miles', driveTime: '10 min',
    directions: 'Take Highland Drive south from Salt Lake City into South Salt Lake. Turn left on Crystal Ave — we\'re on the right side of the street. About 10 minutes depending on your starting point. Central Pointe TRAX station is a 3-minute walk from our shop.',
    landmarks: [
      { name: 'Central Pointe TRAX Station — 900 W / 2100 S', distance: '0.3 miles from shop', tip: 'The closest TRAX stop to our shop. Both the Red and Blue Lines stop here. Walk 3 minutes east on 2100 South, then right on Crystal Ave — we\'re halfway down the block on the left at 144 W Crystal Ave.' },
      { name: 'I-80 Overpass on State Street', distance: '1 mile north of shop', tip: 'A clear route marker on State Street heading south from downtown. Once you cross under I-80, you\'re 1 mile from our turn. Stay on State Street and turn right on Crystal Ave — we\'re on the left side.' },
      { name: 'Liberty Park — 1300 S / 700 E', distance: '2 miles north of shop', tip: 'A well-known SLC landmark for Avenues and east-side drivers. Heading south from Liberty Park on State Street or Highland Drive connects directly to the route to our shop. Crystal Ave is about 2 miles south of the park.' }
    ],
    logisticsNote: 'TRAX makes this the easiest commute for Salt Lake City customers. Take the Red or Blue Line to Central Pointe Station and walk 3 minutes east to 144 W Crystal Ave — no rideshare needed. Drop your car at 8 AM, ride TRAX back to downtown or the Avenues, and we\'ll call when the diagnosis is ready. Driving from the Avenues or Capitol Hill? Take State Street south, cross under I-80, and Crystal Ave is the second major left — about 1 mile past the freeway. Uber and Lyft are available from our location throughout business hours.',
    processNote: 'Salt Lake City customers can drop off early and take TRAX or a rideshare back — most jobs are done same-day. Call ahead so we can let you know about your specific vehicle.',
    whyChooseUs: [
      { title: 'TRAX Drop-Off, Same-Day Pickup', desc: 'Take the Red or Blue Line to Central Pointe — 3 minutes east on foot. Drop off your car, ride TRAX back to downtown or the Avenues, and pick up the same day.' },
      { title: 'We Know SLC Terrain and Traffic', desc: 'Avenues hill starts, downtown grid stop-and-go, University of Utah campus congestion — we see these driving patterns from SLC vehicles regularly and know what each one does to a car.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'SLC drivers come here when a general shop sends them back with the same problem. We\'ve been diagnosing and fixing cars here since 1990 and get it right the first time.' }
    ]
  },
  {
    slug: 'taylorsville', name: 'Taylorsville', distance: '5 miles', driveTime: '10 min',
    directions: 'Take 4700 South east to Highland Drive, then head north on Highland Drive to Crystal Ave and turn right. Alternatively, take I-215 east to I-15 north, exit at 2700 South, and head east to Crystal Ave. About 10 minutes from central Taylorsville.',
    landmarks: [
      { name: '4700 South & Redwood Road — Taylorsville', distance: '5 min west of State Street', tip: 'The main intersection on the route east from central Taylorsville. Head east on 4700 South from Redwood Road and continue to State Street — turn left (north) and our shop is about 2 miles ahead. About 10 minutes from central Taylorsville.' },
      { name: '4700 South & State Street', distance: '3 min from shop', tip: 'The main turn coming from Taylorsville. After turning north on State Street from 4700 South, our shop is about 2 miles straight ahead. Crystal Ave will be on your right — we\'re at 144 W Crystal Ave.' },
      { name: '2700 South & State Street', distance: '2 blocks from shop', tip: 'When you see the 2700 South light on State Street heading north, Crystal Ave is just 2 blocks ahead on the right. If you take I-15, exit at 2700 South and head east — Crystal Ave is the first major right.' }
    ],
    logisticsNote: 'Taylorsville customers are about 10 minutes from the shop via 4700 South or I-215. Drop your car in the morning and Uber or Lyft back — the return ride to central Taylorsville is typically under 15 minutes. TRAX isn\'t directly on this route, but rideshare is available from our lot throughout the day. Call ahead and we\'ll have the intake ready when you arrive.',
    processNote: 'Most Taylorsville customers drop off at 8 AM and pick up same day — the 4700 South route takes about 10 minutes each way.',
    whyChooseUs: [
      { title: '10 Minutes on 4700 South', desc: '4700 South east to State Street, north to Crystal Ave — one turn and 10 minutes. Drop off at 8 AM and most jobs are done before the end of the day.' },
      { title: 'We Know Arterial and Freeway Driving', desc: 'Taylorsville\'s wide arterials and I-215 on-ramps create specific wear patterns from high-speed driving and abrupt stops. We see these regularly and know what to look for first.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Taylorsville drivers come here when a closer shop hasn\'t found the problem. We\'ve been doing this since 1990 and fix it right the first time.' }
    ]
  },
  {
    slug: 'west-valley-city', name: 'West Valley City', distance: '7 miles', driveTime: '12 min',
    directions: 'Take 3500 South east to I-215 east, then I-15 north. Exit at 2700 South in South Salt Lake and head east. Crystal Ave is about a mile east of the freeway. About 12 minutes in moderate traffic.',
    landmarks: [
      { name: 'USANA Amphitheatre — 5150 Upper 5 Mile Creek Rd', distance: '3 miles west of route', tip: 'A major West Valley City landmark near the 3500 South corridor. From the amphitheatre area, head east on 3500 South past Redwood Road and continue to State Street — our shop is about 10 minutes from here.' },
      { name: '3500 South & State Street', distance: '2 min from shop', tip: 'The main junction coming east from West Valley City. Turn north on State Street from 3500 South, then turn left on Crystal Ave almost immediately — we\'re halfway down the block at 144 W Crystal Ave.' },
      { name: '2700 South & State Street', distance: '0.2 miles from shop', tip: 'An alternative landmark if you take I-15 from West Valley. Exit at 2700 South, head east to State Street, then continue south 2 blocks to Crystal Ave and turn right — our shop is on the right side.' }
    ],
    logisticsNote: 'West Valley City customers are about 12 minutes away via 3500 South or I-215. Drop your car in the morning and Uber or Lyft back — the return ride to West Valley is typically under 15 minutes. TRAX isn\'t directly on this route, but rideshare is readily available from our lot. Call ahead and we\'ll have the paperwork ready when you arrive.',
    processNote: 'Most West Valley City customers drop off in the morning and pick up same day. The 3500 South route to our shop takes about 12 minutes.',
    whyChooseUs: [
      { title: '12 Minutes on 3500 South', desc: '3500 South east to State Street — no freeway required. Drop off in the morning and most jobs are done the same day.' },
      { title: 'We Know Commercial Corridor Driving', desc: 'West Valley\'s 3500 South commercial traffic, trucks, and event-night congestion create wear patterns we see regularly. We know what heavy-use driving does to different systems.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'West Valley drivers come here when a closer shop hasn\'t solved the problem. We\'ve been diagnosing and fixing cars since 1990 and get it right the first time.' }
    ]
  },
  {
    slug: 'holladay', name: 'Holladay', distance: '5 miles', driveTime: '9 min',
    directions: 'Take Highland Drive north from Holladay through Sugar House into South Salt Lake. Turn right on Crystal Ave — we\'re on the right side of the street. About 9 minutes in normal daytime traffic.',
    landmarks: [
      { name: '4500 South & Highland Drive', distance: '4 min from shop', tip: 'The main Holladay arterial on the Highland Drive route north. Stay straight on Highland Drive from here — it continues through Murray, into Sugar House, and becomes 1300 East heading toward our shop. Crystal Ave is the left turn just before 2100 South.' },
      { name: 'Holladay–Murray border on Highland Drive', distance: '3 min from shop', tip: 'As you cross from Holladay into Murray on Highland Drive, you\'re about halfway to our shop. Keep heading north — the road becomes more commercial as you approach Sugar House, and Crystal Ave is about 3 minutes ahead on your left.' },
      { name: '2100 South & Highland Drive (Sugar House area)', distance: '1 min from shop', tip: 'The well-known Sugar House intersection. From here, turn left on Crystal Ave — we\'re less than a minute ahead on the right at 144 W Crystal Ave. Most Holladay drivers use this as their final landmark.' }
    ],
    logisticsNote: 'Holladay customers are about 9 minutes from the shop on Highland Drive. Drop your car in the morning and Uber or Lyft back — the return ride to Holladay is typically under 15 minutes. TRAX isn\'t on this direct route, but rideshare is available from our lot throughout the day. Call ahead and we\'ll have the intake ready when you arrive.',
    processNote: 'Holladay customers are about 9 minutes away — most jobs are finished same day. Call ahead so we can confirm timing for your vehicle.',
    whyChooseUs: [
      { title: '9 Minutes on Highland Drive', desc: 'Highland Drive north all the way from Holladay — one turn at Crystal Ave. No freeway. Most jobs are done same day.' },
      { title: 'We Know Canyon and Valley Driving', desc: 'Holladay drivers put their cars through both Big Cottonwood Canyon grades and valley stop-and-go. We see this combination from Holladay vehicles regularly and know what it does over time.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Holladay drivers come here when a general shop hasn\'t diagnosed the problem correctly. We\'ve been doing this since 1990 and fix it right the first time.' }
    ]
  },
  {
    slug: 'cottonwood-heights', name: 'Cottonwood Heights', distance: '6 miles', driveTime: '10 min',
    directions: 'Take Fort Union Blvd west to Highland Drive, then head north on Highland Drive through Holladay and Sugar House into South Salt Lake. Turn left on Crystal Ave — we\'re on the right. About 10 minutes on all surface roads.',
    landmarks: [
      { name: 'Big Cottonwood Canyon Rd & Wasatch Blvd', distance: '5 min southeast of route', tip: 'The canyon entrance for Cottonwood Heights drivers heading to Brighton or Solitude. Head west on Big Cottonwood Canyon Rd to Highland Drive — from here it\'s a straight shot north through Holladay to our shop.' },
      { name: 'Fort Union Blvd & Highland Drive', distance: '4 min from shop', tip: 'The main turn heading north toward our shop. Take Highland Drive north from Fort Union through Holladay and Sugar House — Crystal Ave is about 4 miles ahead on the left. One turn, no freeway.' },
      { name: '3300 South & Highland Drive', distance: '2 min from shop', tip: 'A midpoint landmark heading north on Highland Drive. From here, our shop is about 2 more minutes — continue north to Crystal Ave and turn left. We\'re halfway down the block on the right at 144 W Crystal Ave.' }
    ],
    logisticsNote: 'Cottonwood Heights customers are about 10 minutes from the shop on Highland Drive. Drop your car in the morning and Uber or Lyft back — the return ride to Cottonwood Heights is typically under 15 minutes. TRAX isn\'t on this route, but rideshare is available from our lot throughout the day. Call ahead and we\'ll confirm timing before you arrive.',
    processNote: 'Cottonwood Heights customers heading up for a canyon trip can drop off on the way out and pick up on the return — most jobs are done same-day.',
    whyChooseUs: [
      { title: 'Drop Off Before the Canyon, Pick Up After', desc: '10 minutes on Highland Drive — drop off on your way to Big or Little Cottonwood and pick up on the return. Most jobs are done same day.' },
      { title: 'We Know Canyon Grade Driving', desc: 'Cottonwood Heights drivers use two steep canyon roads regularly. We see the wear patterns from canyon driving — on brakes, drivetrain, and engine components — and know what to inspect first.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Canyon-driving customers come here because general shops don\'t always recognize mountain-road wear patterns. We\'ve been diagnosing this since 1990 and fix it right the first time.' }
    ]
  },
  {
    slug: 'sandy', name: 'Sandy', distance: '8 miles', driveTime: '12 min',
    directions: 'Take I-15 north from Sandy approximately 8 miles and exit at 2700 South in South Salt Lake. Head east to Crystal Ave and turn right — we\'re on the left side of the street. About 12 minutes outside peak hours. TRAX Blue Line riders can board at Sandy Civic Center and ride to Central Pointe station.',
    landmarks: [
      { name: 'Sandy Civic Center TRAX Station — 8680 S State Street', distance: '8 miles south', tip: 'The most convenient Blue Line station for Sandy customers using transit. Board here heading north and ride to Central Pointe Station — a 3-minute walk from our shop at 144 W Crystal Ave. Drop your car, ride TRAX, pick up when we call.' },
      { name: '10600 South & I-15 interchange', distance: '6 miles south of shop', tip: 'The main freeway entry for most Sandy drivers. Head north on I-15 from here — it\'s a straight 6-mile run to the 2700 South exit. From the exit, head east about a mile and turn right on Crystal Ave.' },
      { name: 'Central Pointe TRAX Station — 900 W / 2100 S', distance: '0.3 miles from shop', tip: 'The arrival station for Sandy TRAX customers. Walk 3 minutes east on 2100 South, then turn right on Crystal Ave — we\'re halfway down the block at 144 W Crystal Ave. Both the Red and Blue Lines stop here.' }
    ],
    logisticsNote: 'Sandy customers can take the TRAX Blue Line to make drop-off and pickup easy. Board at Sandy Civic Center or Sandy Expo, ride north to Central Pointe Station, and walk 3 minutes to our shop at 144 W Crystal Ave. Drop your car in the morning, ride TRAX to work or wherever you need to be, and we\'ll call when the job is done. Uber and Lyft are also available from our lot throughout the day for the return trip to Sandy.',
    processNote: 'Sandy customers on TRAX can drop off, ride to work, and pick up the same afternoon — call ahead so we can confirm your job timing.',
    whyChooseUs: [
      { title: 'TRAX Blue Line to Our Door', desc: 'Board at Sandy Civic Center and ride north to Central Pointe — 3 minutes from our shop. Drop off the car, ride TRAX to work, and pick up the same afternoon.' },
      { title: 'We Know Freeway and Foothill Driving', desc: 'Sandy\'s I-15 ramps and eastern foothill streets create wear patterns from both high-speed driving and steep residential grades. We see these from Sandy vehicles regularly.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Sandy drivers make the trip because general shops don\'t always diagnose commuter and hill-driving wear correctly. We\'ve been doing this since 1990 and fix it the first time.' }
    ]
  },
  {
    slug: 'draper', name: 'Draper', distance: '12 miles', driveTime: '15 min',
    directions: 'Take I-15 north from Draper approximately 12 miles. Exit at 2700 South in South Salt Lake and head east. Turn right on Crystal Ave — we\'re on the left side. About 15 minutes outside rush hour. TRAX Blue Line riders can board at Draper Town Center and ride north to Central Pointe station.',
    landmarks: [
      { name: 'Draper Town Center TRAX Station — 11400 S Bangeter Hwy', distance: '12 miles south', tip: 'The most convenient Blue Line station for Draper customers using transit. Board here and ride north to Central Pointe — a 3-minute walk from our shop. Drop your car, ride TRAX, pick up when we call.' },
      { name: 'Point of the Mountain — I-15 grade at the SL/Utah County line', distance: '9 miles south of shop', tip: 'The steep I-15 grade between Salt Lake and Utah counties. Once you crest the summit heading north, our exit is about 9 miles ahead.' },
      { name: '2700 South exit off I-15 — South Salt Lake', distance: '1 mile from shop', tip: 'The turn-off for our shop. Exit at 2700 South heading east, and Crystal Ave is about a mile from the freeway on the right. We\'re at 144 W Crystal Ave, on the left side of the block.' }
    ],
    logisticsNote: 'Draper customers can take the TRAX Blue Line to simplify drop-off. Board at Draper Town Center or Kimball Lane, ride north to Central Pointe Station, and walk 3 minutes east to our shop at 144 W Crystal Ave. Drop your car in the morning, take TRAX back to Draper or wherever you need to be, and we\'ll call when the job is ready. Uber and Lyft are also available from our lot throughout the day.',
    processNote: 'Draper customers making the 15-minute drive can drop off at 8 AM — most jobs are done by afternoon. Call ahead so we can give you an accurate time estimate.',
    whyChooseUs: [
      { title: 'Worth the 15-Minute Drive', desc: 'Draper drivers make the I-15 trip because the closer options haven\'t found the problem. Drop off at 8 AM and most jobs are done by afternoon.' },
      { title: 'We Know Point of the Mountain Driving', desc: 'The I-15 grade at Point of the Mountain is one of the most demanding drives in the valley — especially towing. We see Draper vehicles with this wear pattern regularly and know what to check.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Draper customers drive here because they\'ve tried closer shops and got the wrong answer. We\'ve been doing this since 1990 and diagnose it correctly the first time.' }
    ]
  },
  {
    slug: 'west-jordan', name: 'West Jordan', distance: '8 miles', driveTime: '12 min',
    directions: 'Take Redwood Road north to 5400 South east, then head to State Street north. Turn left on Crystal Ave — we\'re about half a mile west of State Street on the right. About 12 minutes from central West Jordan in light traffic.',
    landmarks: [
      { name: '7800 South commercial area — Redwood Road corridor', distance: '5 miles south of shop', tip: 'The main West Jordan commercial area. Head north on Redwood Road from here to the UT-201 connector, then east to I-15 — it\'s a quick merge onto the freeway heading north to our 2700 South exit.' },
      { name: '5400 South & State Street', distance: '3 miles south of shop', tip: 'An alternate route from West Jordan. Turn north on State Street from 5400 South and stay straight for about 2.5 miles — Crystal Ave will be on your left just past the 2700 South light. We\'re halfway down the block.' },
      { name: '2700 South exit off I-15 — South Salt Lake', distance: '1 mile from shop', tip: 'The freeway exit if you take the Redwood Road / UT-201 route. Head east from the exit and turn right on Crystal Ave — our shop is at 144 W Crystal Ave on the left side of the block.' }
    ],
    logisticsNote: 'West Jordan customers are about 12 minutes from the shop via Redwood Road or I-15. Drop your car in the morning and Uber or Lyft back — the return ride to West Jordan is typically under 15 minutes. TRAX isn\'t directly on this route, but rideshare is available from our lot throughout the day. Call ahead and we\'ll have the intake ready when you arrive.',
    processNote: 'Most West Jordan customers drop off in the morning and pick up the same day — a 12-minute freeway trip each way.',
    whyChooseUs: [
      { title: '12 Minutes Northeast', desc: 'Redwood Road to the 201 to I-15 — or 5400 South east to State Street. Either route puts you at our door in about 12 minutes. Most jobs are done same day.' },
      { title: 'We Know Mountain View Corridor Driving', desc: 'Mountain View Corridor\'s high speeds and quick exits create specific wear patterns. Add West Jordan\'s subdivision stop-and-go and you\'ve got a car that works hard every day. We see this regularly.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'West Jordan drivers come here when the closer general shop didn\'t find the problem. We\'ve been doing this since 1990 and fix it right the first time.' }
    ]
  },
  {
    slug: 'south-jordan', name: 'South Jordan', distance: '10 miles', driveTime: '14 min',
    directions: 'Take I-15 north from South Jordan approximately 10 miles. Exit at 2700 South in South Salt Lake and head east. Turn right on Crystal Ave — we\'re on the left side. About 14 minutes by freeway. Daybreak TRAX riders can board at Daybreak Parkway and ride north to Central Pointe station.',
    landmarks: [
      { name: 'Daybreak Parkway TRAX Station', distance: '10 miles south', tip: 'The Blue Line station for Daybreak customers using transit. Board here and ride north to Central Pointe — a 3-minute walk from our shop at 144 W Crystal Ave. Drop your car in the morning and pick it up after work.' },
      { name: 'Bangerter Highway & I-15 interchange', distance: '8 miles south of shop', tip: 'The main freeway junction for most South Jordan drivers. Head north on I-15 from here — it\'s about 8 miles to the 2700 South exit for our shop. The drive is mostly open freeway and takes about 10 minutes.' },
      { name: 'Central Pointe TRAX Station — 900 W / 2100 S', distance: '0.3 miles from shop', tip: 'The arrival station for South Jordan TRAX customers. Walk 3 minutes east on 2100 South, then turn right on Crystal Ave — we\'re halfway down the block at 144 W Crystal Ave. Both Red and Blue Lines stop here.' }
    ],
    logisticsNote: 'South Jordan and Daybreak customers can take the TRAX Blue Line to simplify drop-off. Board at Daybreak Parkway station, ride north to Central Pointe Station, and walk 3 minutes east to our shop at 144 W Crystal Ave. Drop your car in the morning, ride TRAX to work, and we\'ll call when the job is done. Uber and Lyft are also available from our lot throughout the day for the return trip to South Jordan.',
    processNote: 'South Jordan customers can drop off and ride TRAX to work from Daybreak — most jobs are done same day. Call ahead to confirm.',
    whyChooseUs: [
      { title: 'Daybreak TRAX to Our Door', desc: 'Board at Daybreak Parkway on the Blue Line and ride north to Central Pointe — 3 minutes from our shop. Drop off the car, take TRAX to work, and pick up the same day.' },
      { title: 'We Know Daybreak and Bangerter Driving', desc: 'Daybreak\'s roundabouts and Bangerter Highway\'s abrupt transitions create their own wear patterns. We see these from South Jordan vehicles regularly and know what to look for.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'South Jordan drivers make the trip because they want a diagnosis they can trust. We\'ve been doing this since 1990 and get it right the first time.' }
    ]
  },
  {
    slug: 'riverton', name: 'Riverton', distance: '12 miles', driveTime: '16 min',
    directions: 'Take Bangerter Highway east from Riverton to I-15 north. Head north approximately 8 miles and exit at 2700 South in South Salt Lake. Turn east and find Crystal Ave on the right — our shop is on the left side. About 16 minutes, mostly freeway.',
    landmarks: [
      { name: 'Riverton Town Center area — 12200 S Redwood Rd', distance: '12 miles south of shop', tip: 'The main commercial area near central Riverton. Head east toward Bangerter Highway, then north to I-15 — from here the freeway run to our 2700 South exit takes about 10 minutes in light traffic.' },
      { name: 'Bangerter Highway & Mountain View Corridor junction', distance: '10 miles south of shop', tip: 'The key starting point for the freeway leg north. Head east on Bangerter to I-15, then north on I-15 for about 8 miles to the 2700 South exit. Most Riverton customers use this route.' },
      { name: '2700 South exit off I-15 — South Salt Lake', distance: '1 mile from shop', tip: 'The turn-off for our shop coming from Riverton. Head east from the exit and turn right on Crystal Ave — our shop is at 144 W Crystal Ave on the left side of the block.' }
    ],
    logisticsNote: 'Riverton customers are about 16 minutes from the shop, mostly on I-15. Drop your car in the morning and Uber or Lyft back — the return ride to Riverton is typically under 20 minutes. TRAX isn\'t directly convenient from Riverton, but rideshare is available from our lot throughout the day. Many Riverton customers drop off early and arrange a same-day pickup — call ahead to confirm timing.',
    processNote: 'Riverton customers making the 16-minute drive can drop off at 8 AM and pick up same day on most jobs — call ahead to confirm timing.',
    whyChooseUs: [
      { title: 'Worth the 16-Minute Drive', desc: 'Riverton doesn\'t have many specialists nearby. Drop off at 8 AM and pick up same day on most jobs — call ahead to confirm timing.' },
      { title: 'We Know Long-Commute Driving', desc: 'Riverton commuters put serious daily miles on their cars — Bangerter transitions, I-15 merges, and long-distance accumulation all create wear we see regularly from Riverton vehicles.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Riverton drivers make the trip because the closer shops haven\'t gotten the diagnosis right. We\'ve been doing this since 1990 and fix it correctly the first time.' }
    ]
  },
  {
    slug: 'herriman', name: 'Herriman', distance: '15 miles', driveTime: '20 min',
    directions: 'Take Mountain View Corridor north from Herriman to I-15, then north approximately 10 miles. Exit at 2700 South in South Salt Lake and head east. Turn right on Crystal Ave. About 20 minutes, mostly freeway. We open at 8 AM — many Herriman customers drop off early and arrange same-day pickup.',
    landmarks: [
      { name: 'Mountain View Corridor north entrance — Herriman area', distance: '15 miles south of shop', tip: 'The main route heading north from Herriman. Take Mountain View Corridor north until it connects with I-15 — from the freeway junction it\'s about 10 miles to our 2700 South exit in South Salt Lake.' },
      { name: '5400 South interchange off I-15', distance: '5 miles south of shop', tip: 'A useful midpoint landmark on the I-15 run north from Herriman. From here, our exit is just 3 more miles — continue to 2700 South, then head east about a mile to Crystal Ave and turn right.' },
      { name: '2700 South exit off I-15 — South Salt Lake', distance: '1 mile from shop', tip: 'The turn-off for our shop. Exit here and head east — Crystal Ave is about a mile from the freeway on the right. We\'re at 144 W Crystal Ave on the left side of the block.' }
    ],
    logisticsNote: 'Herriman customers are about 20 minutes from the shop on Mountain View Corridor and I-15. Drop your car in the morning and Uber or Lyft back — the return ride to Herriman is typically under 25 minutes. TRAX isn\'t convenient from Herriman, but rideshare is available from our lot throughout the day. Call ahead so we can confirm timing and have the intake ready when you arrive.',
    processNote: 'Herriman customers making the 20-minute drive can drop off at 8 AM and pick up same day on most jobs — call ahead to confirm timing.',
    whyChooseUs: [
      { title: 'No Closer Specialist', desc: 'Herriman doesn\'t have a dedicated specialist nearby — the 20-minute drive is worth it. Drop off at 8 AM and most jobs are done same day.' },
      { title: 'We Know Hillside and Long-Commute Driving', desc: 'Herriman\'s steep residential streets and long valley commutes create wear patterns that compound over time. We see these from Herriman vehicles regularly and know what to check first.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Herriman drivers make the 20-minute drive because the closer shops haven\'t gotten it right. We\'ve been diagnosing and fixing since 1990 and do it correctly the first time.' }
    ]
  },
  {
    slug: 'kearns', name: 'Kearns', distance: '7 miles', driveTime: '12 min',
    directions: 'Take 5400 South east from Kearns to State Street. Turn left (north) on State Street and head about 1.5 miles into South Salt Lake. Turn left on Crystal Ave — we\'re half a mile west of State Street on the right side. About 12 minutes from central Kearns.',
    landmarks: [
      { name: 'Utah Olympic Oval — 5662 Cougar Lane', distance: '2 miles east of central Kearns', tip: 'A well-known Kearns landmark near the 5400 South route east. From the Oval, continue east on 5400 South to State Street — our shop is 1.5 miles north on State Street, then left on Crystal Ave.' },
      { name: '5400 South & State Street', distance: '3 min from shop', tip: 'The main junction coming east from Kearns. Turn north on State Street from 5400 South and continue 1.5 miles — Crystal Ave is on the left. We\'re halfway down the block at 144 W Crystal Ave.' },
      { name: '2700 South & State Street', distance: '2 blocks from shop', tip: 'If you take the freeway route (4700 South east to I-15 north), exit at 2700 South and head east to State Street — Crystal Ave is 2 blocks south on State Street, then turn right. We\'re at 144 W Crystal Ave.' }
    ],
    logisticsNote: 'Kearns customers are about 12 minutes from the shop via 5400 South. Drop your car in the morning and Uber or Lyft back — the return ride to Kearns is typically under 15 minutes. TRAX isn\'t on this direct route, but rideshare is available from our lot throughout the day. Call ahead and we\'ll have the intake ready when you arrive.',
    processNote: 'Kearns customers are about 12 minutes away — drop off in the morning and most jobs are done by afternoon.',
    whyChooseUs: [
      { title: '12 Minutes on 5400 South', desc: '5400 South east to State Street — straightforward drive with no freeway required. Drop off in the morning and most jobs are done the same day.' },
      { title: 'We Know Daily-Driver Wear', desc: 'Kearns drivers use their cars hard every day — short ramps, residential stop-and-go, and work commutes all add up. We see this kind of daily-use wear from Kearns vehicles regularly.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Kearns drivers come here when they want the diagnosis done right and the repair to stick. We\'ve been doing this since 1990 and fix it the first time.' }
    ]
  },
  {
    slug: 'midvale', name: 'Midvale', distance: '5 miles', driveTime: '8 min',
    directions: 'Head north on State Street from Midvale — it\'s a straight 5-mile shot into South Salt Lake with no turns required until you reach Crystal Ave on your left. Turn left and our shop is on the right. About 8 minutes in light traffic. TRAX Blue Line riders can board at Midvale Center and ride to Central Pointe station — a 3-minute walk to our door.',
    landmarks: [
      { name: 'Midvale Center TRAX Station — 7200 S State Street', distance: '5 miles south of shop', tip: 'The most convenient Blue Line stop for Midvale transit customers. Board here heading north and ride to Central Pointe Station — a 3-minute walk from our shop at 144 W Crystal Ave. Drop your car, ride TRAX, pick up same day.' },
      { name: '7200 South & State Street', distance: '4 miles south of shop', tip: 'The main Midvale commercial intersection on State Street. From here, head straight north on State Street for 4 miles with no turns — Crystal Ave is on your left just past the 2700 South light. We\'re halfway down the block.' },
      { name: 'Central Pointe TRAX Station — 900 W / 2100 S', distance: '0.3 miles from shop', tip: 'The arrival station for Midvale TRAX customers. Walk 3 minutes east on 2100 South, then turn right on Crystal Ave — we\'re at 144 W Crystal Ave on the right. Midvale is the closest community to this station via State Street.' }
    ],
    logisticsNote: 'Midvale customers can take the TRAX Blue Line — board at Midvale Center and ride north to Central Pointe Station, then walk 3 minutes east to our shop at 144 W Crystal Ave. Drop your car in the morning, ride TRAX to work or wherever you need to be, and we\'ll call when the job is done. Uber and Lyft are also available from our lot throughout the day for the return trip to Midvale.',
    processNote: 'Midvale customers are 8 minutes away — the closest TRAX-accessible shop in the valley. Most jobs are done same day.',
    whyChooseUs: [
      { title: '8 Minutes or One TRAX Stop', desc: 'State Street north — or board the Blue Line at Midvale Center and ride to Central Pointe, a 3-minute walk from our door.' },
      { title: 'We Know I-15 Interchange Driving', desc: 'Midvale\'s I-15/I-215 interchange is one of the tightest in the valley — hard accelerations and abrupt stops create wear patterns we see from Midvale vehicles regularly.' },
      { title: 'Diagnosis Before We Recommend Anything', desc: 'We check the whole system before pointing to any specific part. You know exactly what we found and why before any work begins.' },
      { title: 'In Business Since 1990', desc: 'Midvale drivers come here because we\'re close and because we get the diagnosis right. We\'ve been doing this since 1990 and fix it the first time.' }
    ]
  }
];

// City lookup map
const cityMap = {};
CITIES.forEach(c => { cityMap[c.slug] = c; });

// ─── Content by service key → city slug ───────────────────────────────────────
const CONTENT = {

  'brake-service': {
    serviceName: 'Brake Service',
    serviceFullName: 'Brake Repair & Service',
    mainSlug: 'brake-service-near-south-salt-lake-ut',
    hasLocalContext: true,
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s hilly terrain and tight residential streets put brake systems through daily stress that flat-valley drivers rarely experience. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s 1300 East corridor drops steeply from Westminster University toward the valley floor, and daily descents — especially during school-year stop-and-go — cause front brake components to absorb far more heat than flat-terrain driving. Drivers who park on Kensington Avenue or Harrison Avenue\'s grades also put consistent daily stress on parking brake hardware.',
        localTip: 'If your brake pedal feels firm but stopping distance has increased on Sugar House\'s downhill runs, your rotors may be past their effective thickness even though they feel normal. A quick measurement tells the real story.',
        metaTitle: 'Brake Service Near Sugar House UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake service for Sugar House drivers. 3 miles south on Highland Drive. Free brake inspection, honest assessment. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek\'s canyon access routes create brake demands that flat-valley shops don\'t prepare for. We\'re 3 miles from Millcreek — about 7 minutes on 3300 South.',
        localContent: 'Millcreek\'s position at the mouth of Big Cottonwood Canyon means many residents descend several hundred vertical feet daily. Extended downhill braking — especially with a full passenger load — generates brake fade conditions that flat-terrain drivers rarely encounter. The 3300 South and 3900 South corridors add stop-and-go that keeps front brake pads working hard even after drivers reach flat ground.',
        localTip: 'If your brakes feel spongy or require extra pedal force after descending from Millcreek Canyon areas, let them cool before parking. Driving on faded brakes without a cooldown can warp rotors.',
        metaTitle: 'Brake Service Near Millcreek UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake repair for Millcreek drivers near Big Cottonwood Canyon. Canyon descents accelerate brake wear. 3 miles from Millcreek. Call (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s State Street stop-and-go is one of the most brake-intensive commutes in the valley. We\'re 4 miles north — about 8 minutes on State Street.',
        localContent: 'State Street through Murray is one of the most signal-dense corridors in the valley — drivers make 20–30 full stops on a typical run from Fashion Place Mall to the Intermountain Medical Center area. That volume of brake engagements accelerates pad wear significantly compared to freeway or residential driving. Murray commuters using State Street daily often find their brake pads wear out well ahead of the manufacturer\'s mileage estimate.',
        localTip: 'If you drive State Street regularly and your brakes squeal only at low speed, the wear indicator is telling you the pads are close to their limit. Don\'t wait for grinding — pads replaced before that point often save the rotors.',
        metaTitle: 'Brake Service Near Murray UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake service for Murray drivers on State Street. Stop-and-go traffic accelerates pad wear. 4 miles north on State Street. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'The Avenues\' steep grades create brake demands that flat-valley shops don\'t see every day. We\'re 4 miles from Salt Lake City — about 10 minutes south on Highland Drive.',
        localContent: 'Salt Lake City\'s Avenues neighborhood features some of the steepest residential grades in the valley — streets like Virginia Street and 11th Avenue descend sharply toward downtown. Residents who park on these grades and rely on their brakes to hold rather than using the parking brake put unusual stress on caliper hardware. The downtown grid\'s frequent stops and University of Utah\'s congested campus streets add stop-and-go wear on top of the hill-holding loads.',
        localTip: 'If you park on Avenues grades daily, always use the parking brake in addition to leaving the transmission in gear or park. Relying on the brake calipers alone to hold on a steep grade accelerates caliper wear faster than most drivers realize.',
        metaTitle: 'Brake Service Near Salt Lake City UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake repair for Salt Lake City drivers. Avenues hills accelerate brake system wear. 4 miles south, free inspection. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s wide arterials and I-215 interchanges create high-speed braking events that wear rotors as much as pads. We\'re 5 miles east — about 10 minutes on 4700 South.',
        localContent: 'Taylorsville\'s wide arterials — 4700 South and Redwood Road — are designed for speed, but the I-215 interchange exits and red-light-heavy intersections create unpredictable full-stop patterns. Drivers on these roads often brake from 50–55 mph down to a full stop multiple times per trip. High-speed brake applications put more thermal load on brake components per event than low-speed city stops, making rotor condition particularly important to monitor.',
        localTip: 'If your brake pedal vibrates during highway-speed stops on 4700 South or I-215, you likely have rotor runout — commonly called warping. It\'s worth having the rotors measured before replacing them outright.',
        metaTitle: 'Brake Service Near Taylorsville UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake repair for Taylorsville drivers. High-speed I-215 stops cause rotor wear. 5 miles east on 4700 South. Free inspection. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s dense commercial traffic means more emergency braking events per commute than most valley drivers expect. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City\'s 3500 South commercial corridor generates dense stop-and-go throughout the day. USANA Amphitheatre events create sudden, unpredictable congestion that forces hard braking from higher speeds. West Valley also has a higher proportion of trucks and commercial vehicles whose heavier weight creates more aggressive brake demands on the shared road surface — meaning drivers behind them face more urgent braking situations.',
        localTip: 'If you drive 3500 South regularly in a truck or SUV, check your brake fluid condition annually. Heavy vehicles generate more heat per stop, and degraded brake fluid can boil at lower temperatures — causing a soft pedal when you need it most.',
        metaTitle: 'Brake Service Near West Valley City UT | Pads & Rotors | Scott\'s Auto',
        metaDesc: 'Brake service for West Valley City drivers. Commercial stop-and-go accelerates brake wear. 7 miles east via I-215. Free inspection. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s Highland Drive grades and canyon access create consistent downhill brake demands. We\'re 5 miles north — about 9 minutes straight up Highland Drive.',
        localContent: 'Holladay sits at the base of the Wasatch foothills, and many residents descend daily from neighborhoods at 4,800–5,000 feet toward the valley floor. Highland Drive\'s long downhill grade from Big Cottonwood Canyon into Holladay is where brake fade most commonly develops for residents who aren\'t using engine braking. Holladay\'s older residential streets also have more frost heaves and surface irregularities that create the sharp brake applications that wear front brake hardware unevenly.',
        localTip: 'When descending Highland Drive from canyon areas, shift down a gear to use engine braking. This keeps your brakes from overheating and significantly extends pad and rotor life over the life of the vehicle.',
        metaTitle: 'Brake Service Near Holladay UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake repair for Holladay drivers near Big Cottonwood Canyon. Canyon descents cause brake fade. 5 miles north on Highland Drive. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon\'s 8% grade is one of the most brake-intensive descents in the valley. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Cottonwood Heights residents who ski Snowbird or Alta regularly — especially on heavy powder days with slow canyon traffic — subject their brake systems to repeated moderate braking over several miles. Canyon traction restrictions mean residents drive vehicles loaded with ski gear and passengers, adding to the thermal load on brakes with each descent.',
        localTip: 'After a ski day with multiple canyon descents, park with the windows cracked for a few minutes before shutting the engine off. Hot brake rotors can warp if they cool too quickly in cold canyon air.',
        metaTitle: 'Brake Service Near Cottonwood Heights UT | Pads & Rotors | Scott\'s',
        metaDesc: 'Brake service for Cottonwood Heights ski-canyon drivers. Little Cottonwood descents accelerate brake wear. 6 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s I-15 ramps and eastern foothill streets create high-speed braking events that wear brake components faster than residential driving. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s I-15 on and off ramps at 10600 South and 9000 South require full-speed deceleration from 70+ mph during congested periods — some of the highest-stress brake events in the daily commute. Sandy\'s eastern neighborhoods near Bell Canyon have steep access roads where residents make full-stop turns from 30+ mph daily. The combination of freeway-speed stops and hill-grade maneuvering means Sandy vehicles often need front brake service ahead of manufacturer mileage estimates.',
        localTip: 'If your brakes pull left or right under hard braking on Sandy\'s I-15 ramps, a caliper is likely sticking on one side. Pulling under braking gets worse at high speed — don\'t delay that inspection.',
        metaTitle: 'Brake Service Near Sandy UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake service for Sandy drivers. I-15 ramp deceleration puts heavy demands on brake systems. 8 miles north. Free inspection. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'Point of the Mountain\'s sustained I-15 grade is a brake fade test on every northbound commute. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'The Point of the Mountain I-15 grade between Draper and the rest of Salt Lake County is a sustained 4–5% downhill with no exits for over a mile. Draper residents towing boats, trailers, or ATVs down this grade load their brake systems heavily. SunCrest\'s hillside streets above 5,000 feet elevation create daily brake demands from driveways with 15%+ grades, where hill-start and hold loads stress caliper pistons repeatedly.',
        localTip: 'If you tow on I-15\'s Point of the Mountain grade and notice reduced braking power near the bottom, brake fade is the likely cause. Downshift to 3rd or 4th gear before the descent to reduce the load on your pads and fluid.',
        metaTitle: 'Brake Service Near Draper UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake repair for Draper drivers. Point of the Mountain towing and hill grades stress brakes. 12 miles north on I-15. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'Mountain View Corridor\'s high-speed intersections and subdivision speed bumps both contribute to West Jordan brake wear. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'Mountain View Corridor\'s 55 mph posted speed with closely spaced signal-controlled intersections creates a high-speed, high-deceleration cycle that generates more brake heat per mile than traditional stop-and-go. West Jordan\'s newer subdivisions also have speed bumps on every block, requiring low-speed brake applications hundreds of times per week that wear brake pads and hardware faster than open-road driving.',
        localTip: 'Speed bumps don\'t require hard braking — they require controlled deceleration. Using light, consistent brake pressure over speed bumps rather than hard applications reduces brake fade and uneven pad wear.',
        metaTitle: 'Brake Service Near West Jordan UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake service for West Jordan drivers. Speed bumps and highway-speed stops both wear brake systems. 8 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'Bangerter Highway ramp deceleration and Daybreak roundabout cycling both wear South Jordan brake systems steadily. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'Bangerter Highway\'s grade-separated design moves traffic at 55–65 mph, but the on-ramps and off-ramps require aggressive deceleration events that rival freeway exits in brake thermal load. Daybreak\'s roundabout-heavy street design creates continuous low-speed braking that wears front brake pads at a steady rate even in light traffic. South Jordan\'s ongoing construction activity also means more sudden stops for flaggers and changing traffic patterns.',
        localTip: 'Bangerter Highway exit ramps can be deceptively short. If your brakes feel less responsive after a Bangerter exit at speed, you may have experienced a brief brake fade episode — have your fluid boiling point tested.',
        metaTitle: 'Brake Service Near South Jordan UT | Pads, Rotors & Calipers | Scott\'s',
        metaDesc: 'Brake service for South Jordan drivers. Bangerter ramp deceleration stresses brake systems. 10 miles north. Free inspection. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s long Bangerter and I-15 commutes accumulate brake wear from both highway-speed stops and road spray corrosion. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton commuters on Bangerter Highway cover 15+ miles each way at sustained highway speeds, then face commercial and school zone stops at both ends. Long highway commutes create more high-speed deceleration events than short city commutes. Riverton\'s Jordan River flood plain roads also expose brake hardware to seasonal standing water and road spray, accelerating corrosion on rotors and hardware.',
        localTip: 'If you notice brake pulsation in winter or early spring on Riverton\'s lower elevation roads, light rust surface corrosion on rotors is usually the cause — a few firm stops will clear it. If the pulsation persists after 10–15 stops, the rotors may have actual runout.',
        metaTitle: 'Brake Service Near Riverton UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake service for Riverton drivers. Highway commutes and flood plain road spray both stress brakes. 12 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s hillside streets and steep driveways create brake demands that few southwest valley shops are prepared for. We\'re 15 miles northeast — about 20 minutes on Mountain View Corridor and I-15.',
        localContent: 'Herriman\'s hillside streets at the base of the Oquirrh Mountains have residential grades of 10–15% that force daily hard braking on descent. New construction throughout Herriman also creates unpaved transition surfaces and uneven pavement sections where drivers brake hard from otherwise normal speeds. Mountain View Corridor\'s high-speed intersections near Herriman\'s northern edge create similar brake demands to Bangerter Highway.',
        localTip: 'Herriman\'s hillside driveways can exceed 15% grade. Always set the parking brake first when parking on an upslope — putting the transmission in park under load without the parking brake engaged strains the pawl and doesn\'t relieve caliper load.',
        metaTitle: 'Brake Service Near Herriman UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake repair for Herriman drivers. Oquirrh Mountain hillside streets demand more from brake systems. 15 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns\' flat terrain and commercial density create a high daily brake application count. We\'re 7 miles east — about 12 minutes on 5400 South.',
        localContent: 'Kearns\' residential density creates a pattern of frequent, short-duration brake applications — stop signs every few blocks, school zones, and commercial cross traffic. While individual stops are less severe than canyon descents, the cumulative daily count can easily exceed 100 brake applications in a typical Kearns commute. The I-15 on-ramp at 4500 South adds hard stops for commuters who must yield at the ramp merge — a high-load event on an otherwise moderate-intensity driving day.',
        localTip: 'If your brakes squeal only in the morning cold and clear up after a few stops, that\'s usually light surface oxidation — normal behavior. If the squeal persists after the brakes are warm, the wear indicator is calling for attention.',
        metaTitle: 'Brake Service Near Kearns UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake service for Kearns drivers. Daily stop-and-go adds up fast. 7 miles east on 5400 South. Free brake inspection. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15/I-215 interchange forces high-speed braking events on every commute. We\'re 5 miles north — about 8 minutes straight up State Street.',
        localContent: 'Midvale\'s I-15/I-215 interchange is one of the tightest in the valley — short merge lanes and abrupt deceleration zones force hard stops at highway speed multiple times per commute. 7200 South\'s commercial corridor adds dense stop-and-go on top of the freeway stress. Midvale brake jobs are often driven by rotor wear rather than pad wear — high-speed stops generate more rotor heat per event than pad heat, so rotors frequently reach discard thickness before pads reach the wear indicator.',
        localTip: 'If your Midvale commute includes daily I-15/I-215 merges, ask for your rotor thickness to be measured at every oil change. Rotors thinned past spec provide less thermal mass and overheat more easily — a hidden risk that\'s cheap to catch early.',
        metaTitle: 'Brake Service Near Midvale UT | Pads, Rotors & Calipers | Scott\'s Auto',
        metaDesc: 'Brake service for Midvale drivers. I-15/I-215 interchange demands fast rotor wear. 5 miles north on State Street. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      }
    }
  },

  'cv-joint-repair': {
    serviceName: 'CV Joint Repair',
    serviceFullName: 'CV Joint & Axle Repair',
    mainSlug: 'cv-joint-repair-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s tight residential grid requires constant turning that wears outer CV joints faster than straight-road commuting. We\'re 3 miles south — 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s dense residential grid requires constant turning — narrow streets off 1300 East and the approach to Sugar House Park mean most drives involve multiple tight turns per mile. Outer CV joints absorb the most stress during loaded turns at speed, and Sugar House\'s stop-turn-go pattern creates exactly this condition repeatedly. Westminster University area parking also involves slow, tight maneuvering that loads inner CV joints differently than highway driving.',
        localTip: 'If you hear a clicking sound from a front wheel only when turning — not when going straight — that\'s almost always the outer CV joint. The clicking gets louder as the joint wears further. Address it before it fails completely.',
        metaTitle: 'CV Joint Repair Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint and axle repair for Sugar House drivers. 3 miles south of the neighborhood. Free inspection. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek Canyon\'s hairpin turns and grit-covered roads put CV joints through demanding conditions. We\'re 3 miles from Millcreek — about 7 minutes on 3300 South.',
        localContent: 'Millcreek Canyon Road\'s hairpin turns put heavy angular stress on CV joints in vehicles driven regularly up the canyon. The canyon\'s gravel parking areas and unpaved pullouts also scatter road grit that works through worn CV boots. Millcreek\'s residential streets have more frost heave and surface cracking than newer neighborhoods — potholes and broken asphalt create impact loads that can tear CV boots even when the joint itself is still healthy.',
        localTip: 'Check your CV boots visually every spring — Millcreek Canyon road grit is particularly abrasive to rubber. A torn boot caught early prevents a much costlier axle replacement later.',
        metaTitle: 'CV Joint Repair Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Millcreek drivers. Canyon grit and hairpin turns stress CV joints. 3 miles from Millcreek. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s multi-lane left turns and Fashion Place traffic put outer CV joints through high-angle, high-load conditions daily. We\'re 4 miles north — about 8 minutes on State Street.',
        localContent: 'Murray\'s State Street makes left turns across 4–6 lanes of traffic a daily occurrence. Wide-angle turns at higher-speed intersections like State and 5300 South place peak angular load on outer CV joints. Fashion Place Mall\'s parking lot subjects CV joints to constant tight-radius maneuvering with the weight of a full vehicle. Murray TRAX commuters who avoid some of this mileage may find their CV boots age from UV and ozone before the joints wear from use.',
        localTip: 'Grease on the inside of your front wheel — a dark smear on the inner wheel face — is the sign of a torn CV boot. Cleaning it off and watching for recurrence pinpoints which side needs attention.',
        metaTitle: 'CV Joint Repair Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Murray drivers. Multi-lane turns and parking lot maneuvering stress CV joints. 4 miles north on State Street. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'The Avenues\' frost heaves and University area parking structures both stress CV joints in opposite ways. We\'re 4 miles south — about 10 minutes on Highland Drive.',
        localContent: 'Salt Lake City\'s downtown one-way grid and Avenues neighborhoods require constant direction changes that load CV joints differently than highway driving. The Avenues\' severe frost heaves from aggressive winter freeze-thaw cycles are particularly hard on CV boots — impacts that flex the joint beyond its normal range can tear boots instantly. University of Utah area parking structures involve slow, full-lock turns on multiple levels that put repeated peak-angle stress on outer CV joints.',
        localTip: 'Avenues frost heaves can tear a CV boot in a single impact. After a hard pothole hit, look for a fresh grease smear on the inside of the wheel before you get back on the road.',
        metaTitle: 'CV Joint Repair Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Salt Lake City drivers. Avenues frost heaves can tear boots instantly. 4 miles south. Free inspection. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s AWD vehicle population doubles the CV joint components that need periodic inspection. We\'re 5 miles east — about 10 minutes on 4700 South.',
        localContent: 'Taylorsville\'s I-215 on and off ramps involve sweeping high-speed turns that stress CV joints under acceleration and deceleration simultaneously. AWD vehicles — common in Taylorsville for winter commuting — have CV joints on all four wheels, doubling the components that need periodic inspection. Taylorsville\'s flat terrain means CV joint wear is usually mileage-driven rather than terrain-driven, making inspection intervals particularly important.',
        localTip: 'AWD vehicles need all four axles\' CV joints inspected, not just the fronts. Rear CV joint failures are less obvious — no loud clicking during turns — and often go undetected until the joint fails completely.',
        metaTitle: 'CV Joint Repair Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint and axle repair for Taylorsville drivers. AWD vehicles need all four axles inspected. 5 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s commercial road surfaces and truck-heavy traffic create above-average CV joint wear. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City\'s commercial and light industrial zones mean more trucks and SUVs with higher CV joint loads than typical residential areas. 3500 South\'s commercial corridor has several major intersection left turns that require wide-angle CV joint extension under load. West Valley also has more road surface variation — construction zones, industrial access roads, and older pavement sections that can impact boots and joints more frequently than newer suburban streets.',
        localTip: 'Commercial SUVs and work trucks used daily in West Valley put above-average loads on CV joints. Plan for axle inspection every 40,000–50,000 miles rather than waiting for a symptom.',
        metaTitle: 'CV Joint Repair Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for West Valley City drivers. Commercial roads and truck-heavy traffic stress CV joints. 7 miles east via I-215. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s canyon access and older residential roads create CV joint demands from both terrain and road surface conditions. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay\'s proximity to Big Cottonwood Canyon creates CV joint demands from two directions: canyon road curves stress the outer joints, and the pothole-prone canyon-adjacent roads damage boots from road impact. Holladay\'s older residential streets also have more deteriorated asphalt than newer communities — sections of neighborhood roads near Holladay Blvd have surface damage that causes repeated CV boot impacts. AWD Subarus and other all-wheel-drive vehicles common to this area have rear CV joints that often need attention before the fronts.',
        localTip: 'Canyon-road vibration at speed that clears up when you slow down often points to a CV joint rather than a tire balance issue. Have the joints checked if a balance service didn\'t resolve the vibration.',
        metaTitle: 'CV Joint Repair Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Holladay drivers near Big Cottonwood Canyon. Canyon turns and road grit stress CV joints. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon\'s switchbacks are the most demanding CV joint conditions in the valley. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Little Cottonwood Canyon\'s switchbacks and ski resort parking lots create the most demanding CV joint conditions of any neighborhood in the valley. Multiple hairpin turns ascending or descending to Snowbird or Alta — often with ski gear and passengers adding load — generate sustained high-angle CV joint stress. The canyon road\'s studded-tire gravel and plowed abrasive debris also enters the wheel wells and can penetrate compromised CV boots quickly.',
        localTip: 'After ski season, inspect your CV boots for cracks or splits before summer driving season. Canyon-road impacts during winter — from plowed debris and frost heaves — can damage boots that were fine in fall.',
        metaTitle: 'CV Joint Repair Near Cottonwood Heights UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Cottonwood Heights ski-canyon drivers. Little Cottonwood switchbacks stress CV joints. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s eastern foothill roads and I-15 sweeping ramps both stress CV joints in different ways. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s easternmost neighborhoods near Bell Canyon and the foothills near Dimple Dell have steep, winding roads with surface irregularities that put above-average stress on CV joints and boots. The I-15 connector at 10600 South involves a sweeping high-speed merge that loads CV joints on acceleration. Sandy\'s broad suburban streets are generally well-maintained, but the eastern foothill transition zone has older roads with more surface damage that threatens boot integrity.',
        localTip: 'If you hear a rhythmic clicking that speeds up with vehicle speed rather than changing with steering input, that may be a brake or wheel-bearing issue rather than a CV joint. Clicking that changes when you steer points to CV joint wear.',
        metaTitle: 'CV Joint Repair Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint and axle repair for Sandy drivers. Foothill roads and I-15 ramps stress CV joints. 8 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'SunCrest\'s steep streets and Point of the Mountain I-15 ramps put CV joints under peak load daily. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s SunCrest community has some of the steepest residential access roads in the south valley. CV joints under load on steep inclines are more stressed than flat-ground starts because the axle must transmit maximum torque while managing the suspension angles on the steep grade. The tech corridor\'s I-15 connectors also involve high-speed sweeping on-ramp curves that stress joints under acceleration.',
        localTip: 'If you live on one of SunCrest\'s steep streets and notice vibration when accelerating from a full stop on the incline, have your CV axles checked — steep hill starts put maximum load on already worn joints.',
        metaTitle: 'CV Joint Repair Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Draper drivers. SunCrest steep streets put peak loads on CV joints. 12 miles north on I-15. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s Mountain View Corridor and cul-de-sac subdivision network both wear CV joints in distinct patterns. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s Mountain View Corridor alternates between 55 mph straight-line loads and right-angle intersection turns, a cycle that is particularly hard on outer CV joints. West Jordan\'s extensive subdivision network also means lots of cul-de-sac turnarounds, U-turns, and tight residential parking maneuvers that add angular wear at low speed.',
        localTip: 'Cul-de-sacs and U-turns don\'t feel stressful, but repeated full-lock turns add up on outer CV joints. If you live in a West Jordan subdivision with a cul-de-sac, inspect your boots annually.',
        metaTitle: 'CV Joint Repair Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for West Jordan drivers. Mountain View Corridor turns and cul-de-sac maneuvering stress CV joints. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'Daybreak\'s roundabout-heavy streets keep outer CV joints near peak extension angle throughout every trip. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'Daybreak\'s roundabout-heavy street design requires constant low-speed turning — every intersection is a curve rather than a straight-line stop. This concentrates CV joint angular wear differently than traditional grid streets, keeping outer joints near peak extension for longer durations per trip. South Jordan\'s rapid construction also means more gravel, dirt, and debris on roads that can accelerate CV boot deterioration before joints reach normal wear intervals.',
        localTip: 'Daybreak\'s continuous roundabout turns are low-speed but frequent. If your outer CV joints click only on tight turns at low speed, that\'s early-stage wear — caught now, the repair is an axle shaft. Ignored, it can damage the hub bearing.',
        metaTitle: 'CV Joint Repair Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for South Jordan drivers. Daybreak roundabouts keep CV joints at peak angle. 10 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s long commutes and Jordan River road conditions both work against CV boot integrity. We\'re 12 miles northeast — about 16 minutes via Bangerter and I-15.',
        localContent: 'Riverton commuters who take Bangerter Highway daily face sweeping on-ramp curves at 50+ mph that load CV joints under acceleration on curves — the most demanding combination. Jordan River flood plain roads in Riverton\'s lower areas also expose the entire drivetrain to seasonal water and debris, with CV boots particularly vulnerable to grit contamination after flooding events.',
        localTip: 'After spring flooding on Riverton\'s lower roads, rinse the undercarriage and check for fresh grease smears at the wheels. Water itself doesn\'t damage CV joints, but the grit carried by floodwater can penetrate torn boots rapidly.',
        metaTitle: 'CV Joint Repair Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Riverton drivers. Bangerter curves and flood plain roads stress CV boots. 12 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s hillside streets combine maximum torque demand with maximum joint angle on every uphill turn. We\'re 15 miles northeast — about 20 minutes via Mountain View Corridor.',
        localContent: 'Herriman\'s hillside streets require constant uphill turning from standstill — combining maximum torque demand with maximum joint angle, the most demanding CV joint condition. New construction throughout Herriman creates unpaved road sections where boot damage from road debris is more likely. Herriman\'s longer commutes also add more total mileage, meaning CV joints reach wear thresholds faster than in closer communities.',
        localTip: 'New construction areas in Herriman scatter large amounts of aggregate and rebar debris. If you drive through active construction zones regularly, inspect your CV boots monthly — debris damage happens fast and is easy to miss until grease appears.',
        metaTitle: 'CV Joint Repair Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Herriman drivers. Hillside streets combine torque and joint angle stress. 15 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns\' flat terrain creates mileage-driven CV joint wear that catches owners off guard at highway commute speeds. We\'re 7 miles east — about 12 minutes on 5400 South.',
        localContent: 'Kearns\' flat terrain generates primarily mileage-driven CV joint wear rather than terrain-driven wear. Daily I-15 commutes at highway speed accumulate CV cycles that wear inner joints differently than tight city turns wear outer joints. Commercial and work vehicles common to the Kearns area often reach CV joint wear thresholds earlier due to higher daily loads on top of commute mileage.',
        localTip: 'Inner CV joint failure is less obvious than outer — it often shows as vibration during acceleration rather than clicking during turns. If your car shudders under hard acceleration but feels fine cruising, the inner CV joint deserves inspection.',
        metaTitle: 'CV Joint Repair Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Kearns drivers. Commute mileage wears inner joints; turns wear outer joints. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15/I-215 interchange requires steering under acceleration — the peak-demand condition for CV joints. We\'re 5 miles north — about 8 minutes on State Street.',
        localContent: 'Midvale\'s I-15/I-215 interchange requires sharp maneuvering at speed — the ramp transitions involve steering input while the vehicle is under acceleration or deceleration, the most demanding condition for CV joints. 7200 South\'s commercial density also means lots of left-turn-across-traffic situations where the wheel is at full lock under load.',
        localTip: 'The I-15/I-215 interchange ramps require steering while accelerating — if you hear a single loud pop during this maneuver, a CV joint may be at the end of its life. Don\'t dismiss a single noise event; have the axles checked.',
        metaTitle: 'CV Joint Repair Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'CV joint repair for Midvale drivers. I-15/I-215 interchange puts peak demands on CV joints. 5 miles north on State Street. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'timing-chain-repair': {
    serviceName: 'Timing Chain Repair',
    serviceFullName: 'Timing Chain Replacement',
    mainSlug: 'timing-chain-repair-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s stop-start urban driving means multiple cold starts per day — the highest-stress event for timing chain components. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House drivers tend to accumulate mixed mileage — short neighborhood drives, campus commutes to Westminster University, and weekend canyon trips. This stop-start cycle means the engine cold-starts multiple times daily. Oil pressure takes 1–3 seconds to reach the chain tensioner after a cold start, and chains in this window are at maximum slack load — the wear accumulates faster than mileage alone suggests.',
        localTip: 'If you hear a rattle from the engine for the first 2–3 seconds after a cold start — then it goes away — that\'s a classic timing chain tensioner warning. Addressing it early costs a fraction of the repair after the chain jumps a tooth.',
        metaTitle: 'Timing Chain Repair Near Sugar House UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for Sugar House drivers. Cold-start rattling means the tensioner needs attention. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek\'s canyon commuters accumulate mileage faster than expected, often reaching timing chain intervals ahead of schedule. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek drivers who commute daily and also drive canyon roads accumulate mileage faster than neighborhood-only drivers, often reaching the 100,000–120,000-mile timing chain inspection window sooner than expected. Canyon driving at sustained RPM generates more heat cycles in the chain tensioner than flat-road driving. Extended highway segments can reveal tensioner wear through subtle vibration before other symptoms appear.',
        localTip: 'Timing chain stretch is invisible until symptoms appear. At 100,000+ miles, any engine rattling on cold start — even if it stops after a few seconds — warrants a professional diagnosis, not a wait-and-see approach.',
        metaTitle: 'Timing Chain Repair Near Millcreek UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for Millcreek drivers. Canyon commutes accelerate chain wear intervals. 3 miles from Millcreek. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s State Street idling keeps oil pressure low for extended periods — the condition most associated with timing chain tensioner wear. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray\'s State Street commuters who idle in heavy traffic subject the timing chain tensioner to sustained low-pressure conditions. Modern engines reduce oil pressure at idle to save fuel, which means the hydraulic tensioner relies on stored pressure during slow traffic. High-mileage vehicles whose oil change intervals have slipped beyond recommended periods are particularly susceptible to tensioner wear from degraded oil lubricating the chain.',
        localTip: 'The most preventable timing chain failure is from delayed oil changes. If your vehicle is past its oil change interval and you hear any engine noise on startup, change the oil first — sometimes that alone resolves tensioner rattle before more expensive repairs are needed.',
        metaTitle: 'Timing Chain Repair Near Murray UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Murray drivers. State Street idling creates low oil pressure conditions. 4 miles north on State Street. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s below-zero winter temperatures extend the cold-start oil pressure window — the most critical condition for timing chain health. We\'re 4 miles south — about 10 minutes.',
        localContent: 'Salt Lake City\'s winter temperatures can drop to single digits, making cold-start oil viscosity the most important factor in timing chain health. Thick cold oil takes longer to reach the chain tensioner, leaving the chain in a slack condition for several seconds per start. SLC drivers who frequently make short trips — a block to a coffee shop, a few blocks to the University — accumulate cold-start stress without fully warming the engine each time.',
        localTip: 'In single-digit winter temperatures, let your vehicle idle for 30 seconds before driving — not to warm the cabin, but to give oil pressure time to reach the timing chain tensioner. This is particularly important for vehicles with over 80,000 miles.',
        metaTitle: 'Timing Chain Repair Near Salt Lake City UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for Salt Lake City drivers. Cold winter starts stress timing chain components. 4 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s freeway-heavy commute accumulates sustained timing chain wear that fault codes often reveal before audible symptoms appear. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s freeway-heavy commute to I-15 and I-215 means vehicles spend significant time at sustained RPM — a driving pattern that generates consistent timing chain load. High-mileage Taylorsville commuter vehicles often develop timing-related fault codes before audible symptoms appear, making diagnostic scanning valuable for anyone past 100,000 miles.',
        localTip: 'A P0016 or P0017 check engine code — cam/crank correlation — often precedes audible timing chain symptoms by months. If your check engine light appears on a high-mileage vehicle, ask specifically whether the codes are timing-related.',
        metaTitle: 'Timing Chain Repair Near Taylorsville UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for Taylorsville drivers. Freeway commutes accumulate chain wear before symptoms appear. 5 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s commercial fleet vehicles reach timing chain intervals in years rather than decades of typical family-car use. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City\'s commercial vehicle mix means many timing chain services here involve trucks and fleet vehicles that accumulate mileage far faster than daily drivers. A fleet truck doing 50,000 miles per year reaches the 150,000-mile timing chain service interval in just three years. West Valley\'s harder driving conditions — frequent full-load acceleration and deceleration — age timing components more per mile than highway cruising.',
        localTip: 'Fleet and commercial vehicles in West Valley should treat 100,000 miles as the timing chain inspection milestone, not 150,000. Hard-use mileage ages the chain faster than the manufacturer\'s interval assumes.',
        metaTitle: 'Timing Chain Repair Near West Valley City UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for West Valley City drivers and commercial fleets. Hard-use mileage accelerates chain wear. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s significant temperature swings create intermittent startup rattles that appear in winter before other symptoms develop. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay\'s mix of canyon commutes and valley-floor driving creates significant temperature variation for the engine oil. Short canyon descents in winter can drop engine compartment temperature rapidly, requiring oil to re-warm before it reaches full fluidity. High-mileage Holladay vehicles often develop intermittent startup rattles that only appear on cold days — an early warning worth investigating rather than dismissing.',
        localTip: 'If your engine rattles only on cold winter mornings and never in summer, the timing tensioner is on the edge — cold oil takes longer to pressurize it than warm oil. That seasonal difference is a diagnostic clue, not a reason to wait.',
        metaTitle: 'Timing Chain Repair Near Holladay UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Holladay drivers. Intermittent winter rattles signal tensioner problems. 5 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Cold canyon ascents put the timing chain under maximum load before the oil is fully warmed — the most damaging combination. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Cottonwood Heights residents who commute to canyon resorts in winter often start their vehicles in extreme cold, then immediately drive at sustained highway speed up a steep grade — the most thermally demanding sequence for timing chain components. Cold oil under high-RPM load at altitude generates more chain wear per mile than any other driving pattern in the valley. High-mileage canyon commuter vehicles in this neighborhood should plan for timing chain inspection earlier than manufacturer intervals suggest.',
        localTip: 'Ascending Little Cottonwood Canyon in a cold, unwarmed vehicle puts maximum load on the timing chain when the oil is at its thickest. Give any vehicle over 80,000 miles 60–90 seconds of idle warm-up before a cold canyon ascent.',
        metaTitle: 'Timing Chain Repair Near Cottonwood Heights UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for Cottonwood Heights drivers. Cold canyon ascents stress timing chain components. 6 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s I-15 sustained highway operation wears timing chains at a steady rate that elevation and cold compound on winter mornings. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s I-15 commuter vehicles accumulate sustained highway mileage at high RPM that wears timing chains more quickly than low-speed city driving. The chain\'s link-on-sprocket contact at freeway speed generates heat and wear at a steady rate that doesn\'t give components a rest like traffic-paced driving does. Sandy vehicles often are well-maintained family cars where timing chain noise is dismissed as a normal engine sound until fault codes appear.',
        localTip: 'If your timing chain rattles on startup at Sandy\'s elevation in winter, don\'t assume it clears because the chain is still fine — clearing after a few seconds is actually the warning. Seek a diagnosis before the noise stops being intermittent.',
        metaTitle: 'Timing Chain Repair Near Sandy UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Sandy drivers. I-15 highway mileage accumulates chain wear fast. 8 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper\'s long I-15 commute and Point of the Mountain grade combine to create above-average timing chain wear on high-mileage vehicles. We\'re 12 miles north — about 15 minutes.',
        localContent: 'Draper\'s long I-15 commute accumulates high-mileage timing chain wear on top of the Point of the Mountain\'s sustained high-RPM grade climb. Vehicles that tow boats, trailers, or ATVs up this grade put the engine under maximum load — full throttle for extended periods — which stresses the timing system at its highest demands. High-mileage Draper vehicles whose timing chains have been neglected sometimes present with sudden power loss on the grade rather than the typical gradual symptom progression.',
        localTip: 'If you notice power is reduced on the I-15 grade compared to before, and you\'re past 100,000 miles, consider a timing chain diagnostic alongside a general engine inspection. Stretched chains rob power before they rattle.',
        metaTitle: 'Timing Chain Repair Near Draper UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Draper drivers. Point of the Mountain grade and towing stress timing systems. 12 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s many short suburban trips accumulate cold-start tensioner stress faster than highway commuters realize. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s suburban driving pattern — short trips between subdivisions, schools, and shopping — means frequent cold starts without the engine reaching full operating temperature. Each partial warm-up cycle creates a brief window of low oil pressure reaching the timing chain tensioner, and high-mileage vehicles that see many partial warm-ups per day accumulate tensioner wear faster than highway drivers. West Jordan\'s cold winters extend the below-optimal oil pressure window on each cold start.',
        localTip: 'Vehicles used primarily for short West Jordan errands and school runs get more cold starts per mile than highway commuters. At 80,000+ miles, a brief startup inspection for timing chain rattle is worth the investment.',
        metaTitle: 'Timing Chain Repair Near West Jordan UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for West Jordan drivers. Short suburban trips accumulate cold-start tensioner stress. 8 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s growing used-vehicle market means many residents have cars with unknown timing chain service histories. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s rapid growth means a growing population of older vehicles from families that kept their previous car when buying new. These older vehicles, with 120,000–160,000 miles, are in the timing chain danger zone. South Jordan\'s Bangerter Highway commutes add sustained highway mileage that accumulates chain wear faster than the neighborhood\'s flat subdivision streets alone.',
        localTip: 'If you purchased a used vehicle in South Jordan with 80,000+ miles and no service history, a timing chain inspection is worth including in your first-year maintenance plan — you don\'t know what the previous owner deferred.',
        metaTitle: 'Timing Chain Repair Near South Jordan UT | Engine Rattling? | Scott\'s',
        metaDesc: 'Timing chain repair for South Jordan drivers. Used vehicles with unknown service histories need chain evaluation. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s high annual mileage from long commutes means timing chain intervals arrive faster than most residents plan for. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton commuters accumulate some of the highest annual mileages in the valley — 25+ miles each way on Bangerter and I-15 means 12,000–15,000 miles per year just from commuting. Vehicles in Riverton often reach 150,000+ mile timing chain intervals before owners realize the interval has passed. Extended oil change intervals from busy commuter schedules also accelerate timing chain wear.',
        localTip: 'High-mileage Riverton commuter vehicles should add timing chain inspection to the 120,000-mile service checklist. The labor cost is significant, but far less than the engine damage a broken or jumped chain can cause.',
        metaTitle: 'Timing Chain Repair Near Riverton UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Riverton drivers. Long commutes accelerate chain wear past 100K faster than expected. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s cold-to-highway transition from a standing start is the highest-stress sequence for timing chain components. We\'re 15 miles northeast — about 20 minutes via Mountain View Corridor.',
        localContent: 'Herriman\'s location at the end of Mountain View Corridor means the longest daily cold-start-to-highway-speed transitions in the southwest valley. Vehicles that go from garage-cold to highway speed in under a mile don\'t have time to fully pressurize the timing chain tensioner before entering sustained high-RPM operation. This rapid thermal transition is the highest-stress sequence for timing components and accelerates wear in proportion to how often it occurs.',
        localTip: 'Herriman drivers with over 80,000 miles should let the engine idle for 45–60 seconds before entering Mountain View Corridor. This pre-oils the timing chain tensioner before the high-RPM demand of highway driving.',
        metaTitle: 'Timing Chain Repair Near Herriman UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Herriman drivers. Cold-to-highway transitions stress timing chain tensioners. 15 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns vehicles kept in service past 100,000 miles are in the timing chain danger zone — and early diagnosis is far less expensive than the alternative. We\'re 7 miles east — about 12 minutes.',
        localContent: 'Kearns\' working-class community depends on vehicles that stay reliable over long service intervals. Timing chain repairs are significant expenses that catch owners off guard when symptoms aren\'t recognized early. Many Kearns vehicles are older, higher-mileage daily drivers that receive basic maintenance but haven\'t had timing chain condition assessed. The flat terrain means chain wear is primarily mileage-driven, making the 100,000–150,000-mile window the key milestone.',
        localTip: 'Timing chain repairs are far less expensive before the chain jumps a tooth than after. If your vehicle has 100,000+ miles and you\'ve never had the timing system evaluated, a diagnostic visit costs far less than bent valves.',
        metaTitle: 'Timing Chain Repair Near Kearns UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Kearns drivers. High-mileage vehicles need timing chain evaluation before failure. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s commercial roads and I-15 proximity mean many vehicles here reach timing chain intervals faster than their owners realize. We\'re 5 miles north — about 8 minutes on State Street.',
        localContent: 'Midvale\'s mix of commercial and residential use creates vehicles that accumulate mileage quickly from multiple uses — commuting, errands, and contractor work. The I-15/I-215 interchange adds sustained highway segments that accelerate timing chain wear compared to pure neighborhood driving. Midvale also has older neighborhoods with residents who keep vehicles well past 150,000 miles, making it one of the communities where timing chain issues are most frequently encountered.',
        localTip: 'If your mechanic mentions the engine sounds "slightly loose" at idle, ask specifically about timing chain slack. A loose-sounding engine at idle on a high-mileage vehicle is often the chain before it becomes audibly obvious.',
        metaTitle: 'Timing Chain Repair Near Midvale UT | Engine Rattling? | Scott\'s Auto',
        metaDesc: 'Timing chain repair for Midvale drivers. High-mileage commercial vehicles often need timing chain evaluation. 5 miles north on State Street. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'water-pump-replacement': {
    serviceName: 'Water Pump Replacement',
    serviceFullName: 'Water Pump Replacement',
    mainSlug: 'water-pump-replacement-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s cold winters and hot summers create extreme coolant temperature cycling that stresses water pump seals more than steady-climate driving. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'The Wasatch Front\'s climate creates extreme coolant temperature cycling that stresses water pump seals and bearing preloads. Sugar House vehicles making multiple short trips daily experience more cold-to-hot cycles per week than long-distance commuters, and each cycle works the water pump seals through their full temperature range repeatedly.',
        localTip: 'A water pump that squeals when the engine first starts and quiets as it warms is telling you the bearing is worn. Don\'t ignore early bearing noise — a failed bearing seizes the pump and overheats the engine.',
        metaTitle: 'Water Pump Replacement Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Sugar House drivers. Temperature cycling stresses pump seals. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Canyon driving in summer heat generates sustained high coolant temperatures that test water pump flow rates. We\'re 3 miles from Millcreek — about 7 minutes on 3300 South.',
        localContent: 'Millcreek vehicles that regularly ascend Big or Little Cottonwood Canyon in summer — A/C on, full passenger load, climbing at low speed — put the cooling system at maximum demand. A weakening water pump that handles flat valley driving adequately can fail to keep up with canyon climbing conditions, where airflow through the radiator is minimal.',
        localTip: 'If your temperature gauge climbs above its normal position only when ascending canyon grades, the cooling system has marginal capacity — likely a water pump losing flow rate. Address it before canyon season peaks.',
        metaTitle: 'Water Pump Replacement Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Millcreek drivers. Canyon climbing at low speed stresses cooling systems. 3 miles from Millcreek. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s State Street stop-and-go exposes water pump weaknesses that highway driving and freeway cooling airflow normally mask. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray\'s State Street stop-and-go creates a cycle where the engine generates heat but airflow through the radiator is minimal at walking speeds. Water pumps that are marginally functional can handle highway speeds where fan and ram airflow assist cooling, but fail to keep up in heavy slow traffic. Murray commuters in summer who see the temperature gauge creeping up in stop-and-go, then recovering at speed, are witnessing classic water pump underperformance.',
        localTip: 'If your temperature gauge recovers when you increase speed but climbs in stop-and-go, the water pump is likely the issue, not the thermostat. Thermostat problems usually present as always-high temperature, not traffic-dependent temperature.',
        metaTitle: 'Water Pump Replacement Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Murray drivers. State Street stop-and-go exposes pump weaknesses. 4 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s extreme seasonal temperature range creates the most demanding climate for water pump seals in the valley. We\'re 4 miles south — about 10 minutes on Highland Drive.',
        localContent: 'Salt Lake City\'s climate creates the most demanding seasonal range for water pump seals — from winter temperatures of 10°F to summer peaks near 105°F. This 95-degree ambient range means coolant temperature swings from below freezing in ungaraged vehicles to 220°F during operation. The repeated expansion and contraction cycles work water pump weep-hole seals more aggressively than more moderate-climate cities.',
        localTip: 'If you find coolant pooled under your vehicle overnight, smell a sweet coolant odor from the engine bay, or see white residue near the water pump, that\'s the weep hole seal telling you the pump is past its service life.',
        metaTitle: 'Water Pump Replacement Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Salt Lake City drivers. Extreme seasonal temperature range stresses pump seals. 4 miles south. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s freeway commute means water pump failure is sudden rather than gradual — a reason to treat any temperature gauge movement as urgent. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s freeway commutes at sustained speed mean a failed pump creates sudden rather than gradual overheating — because the engine generates proportionally more heat at speed. Taylorsville drivers who commute I-15 and I-215 daily should treat any temperature gauge movement above normal as an immediate reason to pull over rather than a warning to monitor. Engine overheating at highway speed can cause damage in under two minutes.',
        localTip: 'If your temperature gauge climbs on the freeway and doesn\'t come down after slowing — pull over and stop the engine. Continued driving with an overheating engine on the freeway is the fastest way to turn a water pump repair into an engine replacement.',
        metaTitle: 'Water Pump Replacement Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Taylorsville drivers. Freeway overheating happens fast — treat any temp gauge rise as urgent. 5 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s commercial vehicles accumulate coolant heat faster per mile than passenger cars, making water pump inspection a practical fleet maintenance item. We\'re 7 miles east — about 12 minutes.',
        localContent: 'West Valley City\'s mix of commercial vehicles and daily drivers means water pump service intervals vary widely. Trucks used for commercial hauling accumulate coolant heat faster per mile than passenger cars because of higher engine loads. Commercial West Valley operators should treat water pump inspection as part of any major service interval rather than waiting for a symptom.',
        localTip: 'Commercial vehicles should have coolant tested for freeze point and pH annually. Degraded coolant becomes acidic and attacks water pump impellers and seals from the inside — a problem that doesn\'t make noise until the pump is already failing.',
        metaTitle: 'Water Pump Replacement Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for West Valley City drivers and commercial fleets. 7 miles east via I-215. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s canyon access routes expose water pump capacity limits that flat valley driving conceals. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay\'s proximity to Big Cottonwood Canyon means many residents drive at sustained low speeds in summer heat — stop-and-go canyon traffic to the canyon for hiking, camping, or skiing setup. A water pump approaching end of life handles flat valley driving fine but shows marginal performance during these sustained high-temperature, low-airflow canyon climbs.',
        localTip: 'If your A/C reduces cooling effectiveness at the same time your temperature gauge climbs on canyon grades, both symptoms may share the same root cause — the water pump isn\'t flowing enough to handle both A/C condenser load and engine cooling simultaneously.',
        metaTitle: 'Water Pump Replacement Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Holladay drivers. Canyon climbing at low speed exposes pump weaknesses. 5 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon\'s sustained low-speed summer climbing is the most demanding cooling system condition in the valley. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Little Cottonwood Canyon\'s long sustained climbs at low speed push their water pumps to maximum output for 20–30 minutes continuously. Cottonwood Heights vehicles ascending to Snowbird or Alta in summer — crawling in canyon traffic at 15 mph with a full load — need full cooling system capacity at exactly the moment airflow through the radiator is minimal. A pump with any internal wear fails to keep up.',
        localTip: 'Before canyon ski or hiking season, have your coolant tested for freeze point, boiling point, and pH. Degraded coolant has a lower boiling point, meaning the cooling system can\'t handle canyon-grade heat loads it would otherwise manage.',
        metaTitle: 'Water Pump Replacement Near Cottonwood Heights UT | Scott\'s Auto',
        metaDesc: 'Water pump replacement for Cottonwood Heights drivers. Canyon slow-speed climbing stresses cooling systems to their limit. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s I-15 commute and weekend canyon access put cooling systems through both sustained highway and slow-canyon demands. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s I-15 commute involves sustained high-speed engine operation that keeps the water pump working at high RPM for long periods. At highway speed, a failed pump creates sudden rather than gradual overheating because the engine generates proportionally more heat. Sandy families who use their vehicles for both daily commuting and weekend canyon or mountain trips put their cooling systems through the full range of demand.',
        localTip: 'If your vehicle\'s temperature gauge behaves normally in city driving but climbs on sustained I-15 segments, check the radiator cap first — a weak cap can\'t maintain the system pressure that raises the coolant\'s boiling point.',
        metaTitle: 'Water Pump Replacement Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Sandy drivers. I-15 commutes and canyon weekend trips demand full cooling capacity. 8 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'draper': {
        intro: 'Point of the Mountain\'s sustained grade is a water pump stress test on every southbound Draper commute. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Vehicles climbing Point of the Mountain in summer — especially with a full load or towing — require maximum coolant flow for several minutes continuously. Draper commuters who tow recreational equipment and notice temperature climbing on the grade but recovering at the top are often running with a marginal water pump that handles normal driving but fails to keep up with maximum cooling demand.',
        localTip: 'When towing up Point of the Mountain in summer, watch your temperature gauge through the entire grade. A pump showing first signs of wear will reveal itself here before it fails on flat ground.',
        metaTitle: 'Water Pump Replacement Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Draper drivers. Point of the Mountain grade tests pump capacity on every commute. 12 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s spring and fall temperature swings stress water pump seals through rapid thermal cycling on top of mileage wear. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s typical commute doesn\'t severely stress the cooling system, but a water pump past its service life can fail unexpectedly on any drive. West Jordan\'s spring and fall — with temperature swings from 30°F mornings to 70°F afternoons — also stress water pump seals through rapid thermal cycling that accelerates wear on higher-mileage vehicles.',
        localTip: 'White steam from under the hood on a cold morning that disappears as the engine warms is often condensation — normal. Steam that persists after the engine is warm, especially combined with a sweet smell, indicates coolant loss that needs immediate diagnosis.',
        metaTitle: 'Water Pump Replacement Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for West Jordan drivers. Temperature swings accelerate pump seal wear. 8 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan vehicles approaching 100,000 miles should include cooling system inspection before summer heat season. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s growing community has a mix of new vehicles whose cooling systems are under warranty and older high-mileage vehicles where cooling system service is overdue. The Bangerter Highway commute at sustained speeds generates steady water pump load that reveals marginal pump performance more reliably than short city trips.',
        localTip: 'At 90,000–100,000 miles, have your mechanic assess water pump condition when doing any other engine-related work. The labor to replace a water pump is often lower when combined with timing belt work — both components share significant access overlap.',
        metaTitle: 'Water Pump Replacement Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for South Jordan drivers. Bangerter Highway commutes reveal marginal pump performance. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s long commutes mean water pump failure has higher consequences than in closer communities — and preventive monitoring matters. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s long Bangerter and I-15 commutes mean water pump failure has a higher consequence than in closer communities — you\'re more likely to be far from service help when it happens. Riverton vehicles should treat any overheating sign as a reason to stop rather than top up and continue. Riverton\'s Jordan River area also has higher ambient humidity near the river that can accelerate external corrosion on older water pump housings.',
        localTip: 'Keep an eye on your coolant reservoir level between changes. A reservoir that\'s consistently low — even without visible puddles — indicates a slow leak that will eventually become an overheating event. Catch it with a pressure test before that happens.',
        metaTitle: 'Water Pump Replacement Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Riverton drivers. Long commutes make overheating prevention critical. 12 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s hillside location means cold vehicles climb grades before the coolant reaches operating temperature — stressing water pumps before they\'re fully operational. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman\'s hillside location means morning drives start with a climb immediately after a cold start. Engines climbing grades while the coolant is still below operating temperature put water pumps under load before the seal and bearing have fully stabilized. Herriman\'s elevation above the valley floor also means lower ambient air density for radiator cooling, making water pump flow rate more critical at altitude than at valley elevation.',
        localTip: 'If you live in Herriman\'s upper hillside areas, give your engine a brief idle before starting the climb. A minute of warmup before the grade protects water pump components that perform better at operating temperature than cold.',
        metaTitle: 'Water Pump Replacement Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Herriman drivers. Cold grades stress water pumps before operating temperature. 15 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns vehicles past 100,000 miles are statistically past the water pump\'s expected service life — and failure without warning is the most common outcome. We\'re 7 miles east — about 12 minutes.',
        localContent: 'Kearns\' flat terrain means water pump issues are typically mileage-driven and predictable rather than terrain-triggered. Kearns vehicles that have exceeded 100,000 miles without cooling system service are statistically past the water pump\'s expected service life. Kearns\' community also tends to keep vehicles in service well past the water pump replacement interval — making early diagnosis important when any cooling symptom appears.',
        localTip: 'A water pump that fails completely will drain your coolant in minutes. If your temperature gauge spikes suddenly in Kearns traffic, turn off the A/C and turn on the heater — the heater core acts as a secondary radiator and can buy you 5–10 minutes to safely pull over.',
        metaTitle: 'Water Pump Replacement Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Kearns drivers. Vehicles past 100K are past expected pump service life. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15 daily runs alternate between maximum pump speed and idle-speed flow — a wide operating range that stresses pump bearing preload. We\'re 5 miles north — about 8 minutes.',
        localContent: 'Midvale\'s I-15 proximity means vehicles get more sustained highway operation than neighborhood-only commuters. High-RPM water pump operation at highway speed generates more bearing wear per hour than city driving. Midvale vehicles that make daily I-15 runs and also see State Street stop-and-go alternate between maximum pump speed and idle-speed flow, stressing components through a wide operating range.',
        localTip: 'If a Midvale mechanic mentions white exhaust smoke that smells sweet, or finds small bubbles in the coolant reservoir, prioritize a cooling system pressure test over all other service items. Those signs indicate coolant combustion — related to overheating from water pump failure.',
        metaTitle: 'Water Pump Replacement Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Water pump replacement for Midvale drivers. I-15 and State Street mix stresses pump bearing across a wide speed range. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'exhaust-repair': {
    serviceName: 'Exhaust Repair',
    serviceFullName: 'Exhaust System Repair',
    mainSlug: 'exhaust-repair-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s older streets and frost heave sections fatigue exhaust hangers and flex pipes faster than smooth suburban roads. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s older residential streets have expansion joints and pavement buckles that cause the exhaust system to flex repeatedly. Repeated flexion cracks exhaust flex pipes and manifold gaskets faster than smooth-road driving. The neighborhood\'s proximity to canyon routes also means vehicles sit idle warming up in cold mornings, which concentrates condensation in the muffler and accelerates internal corrosion.',
        localTip: 'If you hear a ticking noise from the engine on cold mornings that fades as the engine warms, that\'s often an exhaust manifold crack — not an engine noise. It seals as the metal expands and returns when cold.',
        metaTitle: 'Exhaust Repair Near Sugar House UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Sugar House drivers. Older streets and cold starts accelerate exhaust system wear. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek Canyon\'s rapid heat cycles stress exhaust manifold gaskets and flex pipe welds beyond what flat-road driving produces. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek Canyon driving exposes the exhaust system to rapid heat cycles — cold approach, sustained hot climb, then cold descent — that stress exhaust manifold gaskets and flex pipe welds. Canyon road grit and seasonal moisture also attack the undercarriage from below. Millcreek\'s winter road salt applications are particularly corrosive to exhaust pipes where water collects.',
        localTip: 'After canyon driving in wet or salty conditions, a brief highway run to heat the exhaust fully will evaporate moisture from inside the system. Extended sitting after a wet canyon drive accelerates internal muffler corrosion.',
        metaTitle: 'Exhaust Repair Near Millcreek UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Millcreek drivers near Big Cottonwood Canyon. Canyon heat cycles stress manifold gaskets and flex pipes. 3 miles. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s emissions testing stations are among the busiest in the valley — and exhaust leaks are a common cause of failures here. We\'re 4 miles north — about 8 minutes on State Street.',
        localContent: 'Murray\'s State Street emissions testing stations see more vehicles from this corridor than almost any other in the valley. Exhaust leaks upstream of the O2 sensor are a common cause of emissions test failure here — they skew the sensor readings and trigger a fail even when the engine itself is running clean. Murray drivers who failed emissions should have the full exhaust system inspected before any sensor or converter work is authorized.',
        localTip: 'If you failed a Murray emissions test for a high hydrocarbon reading, have the exhaust system inspected for leaks before replacing any sensors or converters — an upstream exhaust leak mimics converter failure.',
        metaTitle: 'Exhaust Repair Near Murray UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Murray drivers. Emissions test failures often trace to exhaust leaks upstream. 4 miles north on State Street. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s intensive road salt program is the most corrosive environment for exhaust system welds and hangers in the valley. We\'re 4 miles south — about 10 minutes on Highland Drive.',
        localContent: 'Salt Lake City\'s winter road salt program is the most intensive in the valley — downtown streets receive multiple applications per snow event. This salt concentration accelerates undercarriage corrosion more aggressively than outer-valley communities. Salt Lake City vehicles often present with frame bracket corrosion, exhaust hanger deterioration, and heat shield separation that requires welding to repair properly.',
        localTip: 'Downtown Salt Lake City vehicles should have the undercarriage inspected for salt corrosion damage annually. Welding repairs on corroded brackets are significantly more difficult when the base metal has been compromised.',
        metaTitle: 'Exhaust Repair Near Salt Lake City UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Salt Lake City drivers. Winter road salt accelerates undercarriage exhaust corrosion. 4 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s I-215 interchange rough pavement transitions create daily exhaust system stress that fatigues hangers and pipe connections. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s I-215 interchange concrete sections have expansion joints that create sharp exhaust system jolts during daily commutes. Repeated impacts from poor pavement can crack welds and break exhaust hangers over time. Taylorsville also has a significant population of older, higher-mileage vehicles where original exhaust components have reached the end of their service life through simple age and corrosion.',
        localTip: 'A rattling sound from under your vehicle that changes with engine RPM but not with road speed is typically a broken exhaust hanger or loose heat shield — a quick in-shop diagnosis often resolves it without major parts replacement.',
        metaTitle: 'Exhaust Repair Near Taylorsville UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Taylorsville drivers. I-215 pavement impacts fatigue exhaust hangers and connections. 5 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s industrial roads and commercial traffic create more undercarriage stress per mile than typical residential commutes. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City\'s industrial zones generate more heavy truck traffic on shared roads, which deteriorates road surfaces faster and creates more jarring from expansion joints and pavement breaks. Commercial vehicles and pickup trucks with custom or aftermarket exhaust routing also come in regularly for weld repairs from vibration-related failures. West Valley\'s emissions testing stations see a higher proportion of commercial vehicles.',
        localTip: 'Aftermarket or custom exhaust systems in West Valley commercial vehicles often require welding repairs rather than bolt-on replacement. If your truck has custom exhaust work and develops a leak, make sure the shop you choose has in-house welding capability.',
        metaTitle: 'Exhaust Repair Near West Valley City UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for West Valley City drivers. Industrial road surfaces and commercial traffic stress exhaust systems. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s canyon proximity and older residential streets create exhaust system fatigue from heat cycles and frost heave sections. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay\'s older residential streets have frost heave sections that flex the vehicle\'s frame slightly with each pass, transmitting that flex to the exhaust system\'s hangers and flex pipes. Cumulative hanger fatigue is a common cause of exhaust rattle in Holladay vehicles with 80,000+ miles. The neighborhood\'s proximity to Big Cottonwood Canyon creates the same heat-cycle stress on manifold gaskets that affects other canyon-adjacent communities.',
        localTip: 'If you hear a rattle underneath only at certain RPM ranges and it stops when you accelerate or decelerate past that point, that\'s a resonant frequency harmonic — often from a loose heat shield that can be secured without replacing the exhaust section.',
        metaTitle: 'Exhaust Repair Near Holladay UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Holladay drivers. Frost heave streets and canyon heat cycles both fatigue exhaust systems. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon\'s extreme thermal cycling is the fastest way to crack exhaust manifold gaskets and flex pipe braiding in the valley. We\'re 6 miles north — about 10 minutes.',
        localContent: 'Little Cottonwood Canyon\'s switchbacks and sustained grades put the exhaust manifold under maximum heat stress during ascent and maximum cooling stress during descent. This repeated extreme thermal cycling cracks manifold gaskets and flex pipe braiding faster than flat-road driving. Canyon road gravel also scatters debris that impacts exhaust pipes from below, denting and cracking sections that road salt then attacks more aggressively.',
        localTip: 'If you hear exhaust ticking only during the first few minutes of a canyon ascent and it clears as the engine fully warms, an exhaust manifold leak is likely — the metal expands and seals the crack when hot.',
        metaTitle: 'Exhaust Repair Near Cottonwood Heights UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Cottonwood Heights drivers. Little Cottonwood thermal cycling cracks manifold gaskets. 6 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s I-15 underpass transitions and colder winter temperatures both stress exhaust systems in ways other commutes don\'t. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s I-15 interchange transitions create road surface variations that shock-load the exhaust system on daily commutes. Sandy\'s colder winter temperatures also cause exhaust systems to contract more severely overnight, stressing gaskets and flex connections more than valley-floor communities. Sandy vehicles with older exhaust systems often discover issues when the accumulated corrosion finally creates a leak audible in cold temperatures.',
        localTip: 'If your exhaust rattle appears in winter mornings but disappears after the vehicle warms, the exhaust manifold is likely cracked and sealing when hot. That\'s not normal behavior — have it inspected before it becomes a safety issue.',
        metaTitle: 'Exhaust Repair Near Sandy UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Sandy drivers. I-15 transitions and winter cold both stress exhaust systems. 8 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'Point of the Mountain\'s sustained full-throttle grade creates exhaust conditions similar to extended dyno testing — manifold gasket wear accelerates. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s I-15 grade creates extended periods of full-throttle exhaust gas flow at high temperature — conditions that accelerate exhaust manifold gasket deterioration. Draper\'s high elevation also means lower ambient air pressure, which slightly reduces back-pressure in the exhaust system. Canyon residents towing boats or trailers put the exhaust under maximum thermal load for sustained periods on the grade.',
        localTip: 'At Point of the Mountain, the sustained full-throttle exhaust conditions are similar to what dyno testing produces. If your vehicle has a pre-existing manifold gasket issue, the grade will make it audible when flat-road driving doesn\'t.',
        metaTitle: 'Exhaust Repair Near Draper UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Draper drivers. Point of the Mountain grade accelerates manifold gasket wear. 12 miles north on I-15. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s truck-heavy traffic and 7800 South commercial road surfaces both create exhaust system stress. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s broad road network includes sections with significant pavement deterioration near older commercial areas on 7800 South. These road surface issues create repeated undercarriage impacts that fatigue exhaust hangers and flex connections. West Jordan\'s mix of residential and commercial traffic also means more truck exhaust systems — which are larger and heavier — that require more robust repairs when weld work is needed.',
        localTip: 'If your truck\'s exhaust system has been repaired before and the repair is near a flex section, have the entire flex pipe inspected annually. Repeat failures near previous weld joints are the most common pattern.',
        metaTitle: 'Exhaust Repair Near West Jordan UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for West Jordan drivers. Commercial road surfaces and truck traffic stress exhaust systems. 8 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s Bangerter Highway expansion joints create shock loads that fracture exhaust system components at highway speed. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s rapid growth has brought infrastructure improvements, but construction transition zones create temporary road surface disruptions. Bangerter Highway\'s grade separations have expansion joint transitions that shock-load the exhaust system at highway speed. South Jordan vehicles with OEM exhaust systems past 100,000 miles often have corrosion at the pipe-to-muffler junction that fails at these transitions.',
        localTip: 'High-speed expansion joint impacts on Bangerter Highway can fracture an already-stressed exhaust pipe section. If you hear a new exhaust noise after driving Bangerter at speed, inspect the undercarriage before assuming it will resolve on its own.',
        metaTitle: 'Exhaust Repair Near South Jordan UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for South Jordan drivers. Bangerter Highway expansion joints stress exhaust connections at highway speed. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s long Bangerter commute exposes exhaust leaks that only open at highway RPM and back-pressure levels. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s long Bangerter Highway commute exposes the exhaust system to extended vibration and high-speed undercarriage airflow. Jordan River road sections near Riverton also accumulate more road moisture and spray than drier valley locations, accelerating pipe corrosion. Riverton commuters with older vehicles often discover exhaust issues when the accumulated corrosion finally creates a leak audible at highway speed.',
        localTip: 'If your exhaust is louder than it used to be at highway speed but sounds normal around town, the leak may only open up at higher RPM and back-pressure. A shop inspection at idle won\'t always find it — ask for a drive-cycle inspection.',
        metaTitle: 'Exhaust Repair Near Riverton UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Riverton drivers. Long highway commutes expose exhaust leaks that idle inspections miss. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s construction activity scatters more road debris per mile than any other southwest valley community — a primary cause of undercarriage exhaust damage. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman\'s construction boom generates more gravel and road debris on local streets than established communities. Exhaust system impacts from road debris are more common here than in settled neighborhoods, and impacts from below can dent pipes and crack heat shields that eventually develop leaks. Mountain View Corridor\'s high-speed pavement transitions also create undercarriage shock loads.',
        localTip: 'In Herriman\'s active construction zones, road debris can dent exhaust pipes from below without immediately causing a leak. Check your undercarriage after driving through any significant debris field — a dented pipe may leak later when it corrodes at the impact point.',
        metaTitle: 'Exhaust Repair Near Herriman UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Herriman drivers. Construction debris damages exhaust systems from below. 15 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns\' I-15 on-ramp transitions and commercial vehicle mix create daily undercarriage stress for exhaust systems. We\'re 7 miles east — about 12 minutes on 5400 South.',
        localContent: 'Kearns\' I-15 on-ramp transitions have some of the roughest pavement in the southwest valley, creating daily shock loads for exhaust systems on commuter vehicles. Kearns\' commercial traffic also creates more stop-and-go that builds exhaust back-pressure heat. Older Kearns vehicles frequently present with multiple exhaust system issues simultaneously — hangers, flex pipes, and muffler all degraded from age and road salt.',
        localTip: 'If your Kearns vehicle has multiple exhaust issues, consider replacing the full system rather than repairing sections individually. Piecemeal repairs on an aged system often lead to the next failure in months rather than years.',
        metaTitle: 'Exhaust Repair Near Kearns UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Kearns drivers. I-15 ramp transitions and commercial road surfaces stress exhaust systems. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15/I-215 interchange transitions create sharp exhaust system loads at highway speed that accumulate hanger and flex pipe fatigue. We\'re 5 miles north — about 8 minutes on State Street.',
        localContent: 'Midvale\'s I-15/I-215 interchange transitions have the kind of abrupt pavement changes that make the exhaust system flex sharply at highway speed. The 7200 South commercial corridor also has older pavement with expansion joint gaps wide enough to produce audible impacts at normal driving speed. Midvale\'s emissions testing location captures a representative cross-section of the valley — vehicles here that fail emissions often have exhaust leaks as the underlying cause.',
        localTip: 'Midvale\'s 7200 South expansion joints are wide enough to feel as a bump. If you notice your exhaust rattle started shortly after going over rough road sections, inspect the exhaust hangers and flex pipe first — impact-related failures are often found at the hanger attachment points.',
        metaTitle: 'Exhaust Repair Near Midvale UT | Muffler & Pipe | Scott\'s Auto',
        metaDesc: 'Exhaust repair for Midvale drivers. I-15/I-215 pavement transitions stress exhaust hangers and connections. 5 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      }
    }
  },

  'catalytic-converter-service': {
    serviceName: 'Catalytic Converter Service',
    serviceFullName: 'Catalytic Converter Service',
    mainSlug: 'catalytic-converter-service-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s street parking and high foot traffic make converter theft a genuine concern for vehicles parked overnight or during the day. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House is an urban neighborhood with significant street parking, making catalytic converter theft a real risk for vehicles parked overnight or during business hours. The neighborhood\'s density and foot traffic means theft can happen quickly in a busy area. Sugar House vehicles with high ground clearance — Subarus, trucks, and SUVs — are the most frequently targeted because the converter is easily accessible from below.',
        localTip: 'If you park on the street overnight in Sugar House, consider a catalytic converter anti-theft shield. They\'re far less expensive than replacement and provide meaningful deterrence against quick removal.',
        metaTitle: 'Catalytic Converter Service Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and anti-theft shields for Sugar House drivers. Street parking theft risk. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek\'s canyon driving creates genuine converter degradation from thermal stress — not just theft or sensor problems. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek\'s mixed commercial and residential character means street-parked vehicles are in higher-risk environments for converter theft than fully residential neighborhoods. Millcreek Canyon access roads also attract parked vehicles at trailheads where theft risk is elevated. P0420 fault codes in Millcreek vehicles often reflect genuine converter degradation from extended canyon-road thermal stress rather than converter theft.',
        localTip: 'If your P0420 code appeared shortly after a hot canyon drive, the root cause may be a rich fuel condition or oxygen sensor issue rather than a failed converter. Diagnosis before replacement matters — especially given converter replacement costs.',
        metaTitle: 'Catalytic Converter Service Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair for Millcreek drivers. Canyon thermal stress and theft risk both affect converters. 3 miles. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s State Street corridor and Fashion Place Mall parking areas create elevated converter theft risk during daytime and evening hours. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray\'s State Street commercial corridor and Fashion Place Mall parking areas create elevated converter theft risk during daytime and evening parking. Murray\'s proximity to I-15 also means stolen converters can be removed and transported quickly before detection. Converter replacements in Murray often require attention to oxygen sensors at the same time — the theft event or replacement installation frequently disturbs O2 sensor wiring.',
        localTip: 'After a catalytic converter theft in Murray, ask your installer to inspect the O2 sensor wiring harness for damage before installing the replacement. Damaged sensor wiring will trigger the same fault codes as a failed converter.',
        metaTitle: 'Catalytic Converter Service Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft replacement for Murray drivers. 4 miles north on State Street. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s urban density and strict emissions requirements make converter health a practical necessity for vehicle registration. We\'re 4 miles south — about 10 minutes on Highland Drive.',
        localContent: 'Salt Lake City\'s catalytic converter theft rate tracks with urban density — downtown and near-campus areas see the highest concentrations. The University of Utah campus parking areas and downtown structures are active theft environments. Salt Lake City also has some of Utah\'s strictest emissions testing requirements, meaning a converter issue has a direct impact on vehicle registration.',
        localTip: 'The University of Utah campus area has elevated converter theft rates, particularly targeting Priuses and older Hondas and Toyotas. If you park near campus regularly, a locking converter shield is a straightforward deterrent.',
        metaTitle: 'Catalytic Converter Service Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and anti-theft shields for Salt Lake City drivers. Urban theft risk and emissions compliance. 4 miles south. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s apartment complex parking areas and commercial strips have documented converter theft activity. We\'re 5 miles east — about 10 minutes on 4700 South.',
        localContent: 'Taylorsville\'s commercial strips and apartment complex parking areas create converter theft environments beyond just street parking. High-density residential areas near 4700 South have had documented converter theft clusters. Taylorsville\'s proximity to I-215 provides a quick exit route for thieves, making the risk meaningful for residents who park outdoors.',
        localTip: 'Taylorsville apartment parking lots without video surveillance are active areas for converter theft. If your complex has uncovered parking, document your converter before and after installation to simplify insurance claims if it\'s taken.',
        metaTitle: 'Catalytic Converter Service Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft protection for Taylorsville drivers. 5 miles east on 4700 South. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City has one of the higher catalytic converter theft rates in the Salt Lake Valley — commercial trucks and work vans are the primary targets. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City has one of the higher catalytic converter theft rates in the Salt Lake Valley. The combination of commercial density, high ground clearance vehicles, and accessible parking lots creates conditions that attract organized theft. West Valley has a strong community of commercial contractors who park trucks overnight outdoors — exactly the vehicles most frequently targeted.',
        localTip: 'West Valley contractors who park trucks outdoors overnight should install anti-theft shields on all fleet vehicles. A commercial truck without a shield in West Valley is a predictable theft target — the repair cost far exceeds the shield cost.',
        metaTitle: 'Catalytic Converter Service Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft protection for West Valley City drivers and commercial fleets. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s high proportion of Subarus and older import vehicles makes the neighborhood a predictable target for organized converter theft. We\'re 5 miles north — about 9 minutes.',
        localContent: 'Holladay\'s residential character means converter theft risk is lower than urban areas, but not zero. The neighborhood\'s share of older Toyota, Honda, and Subaru vehicles is higher than average, and these brands are frequently targeted because their converters are particularly valuable. Holladay drivers who use canyon trails and parking areas also face theft risk at trailhead parking locations.',
        localTip: 'Holladay trailhead parking at Big Cottonwood Canyon\'s entry areas is a known theft location during peak hiking and skiing seasons. Converter shields are practical for vehicles used for outdoor recreation.',
        metaTitle: 'Catalytic Converter Service Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and anti-theft shields for Holladay drivers. 5 miles north on Highland Drive. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'All-day ski parking in Cottonwood Heights canyon lots is a documented converter theft environment during ski season. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Cottonwood Heights ski resort parking near the canyon is a documented theft environment during ski season — vehicles left all day while owners ski are vulnerable. High-ground-clearance vehicles popular for canyon access are the primary targets. Cottonwood Heights vehicles returning from ski days should check for converter theft symptoms — a suddenly loud exhaust on startup is often the first sign.',
        localTip: 'All-day ski parking in canyon lots is a high-risk converter theft environment. Park closer to the lot entrance with high foot traffic if possible, and report any suspicious activity to resort security immediately.',
        metaTitle: 'Catalytic Converter Service Near Cottonwood Heights UT | Scott\'s Auto',
        metaDesc: 'Catalytic converter repair and theft protection for Cottonwood Heights ski-canyon drivers. 6 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s large apartment complexes and I-15 corridor proximity make it a frequent city for organized converter theft operations. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s I-15 corridor proximity means stolen converters can leave the area within minutes of removal. Sandy\'s large apartment complexes and commercial parking areas are active theft environments, particularly at night. Sandy\'s vehicle mix includes a high proportion of Toyotas and Hondas — whose converters command high scrap value — making this community a frequent target for organized converter theft operations.',
        localTip: 'Sandy apartment complex parking without covered structures and security cameras is a converter theft environment. Know what your vehicle\'s exhaust sounds like before you need to report a theft — the diagnostic is obvious, but the paperwork is easier if you noticed it immediately.',
        metaTitle: 'Catalytic Converter Service Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft protection for Sandy drivers. Organized theft active near I-15 corridor. 8 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper\'s P0420 codes are more likely from genuine converter degradation on newer vehicles than from theft — but root cause diagnosis matters either way. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s affluent neighborhoods and tech campus parking areas present a different converter profile — newer vehicles with higher-value converters in semi-monitored parking. Tech campus parking garages with incomplete coverage are targeted. P0420 codes in Draper vehicles are more likely from genuine converter degradation in newer, properly-maintained vehicles than from theft — but the outcome — replacement at significant cost — is the same.',
        localTip: 'If your Draper vehicle shows a P0420 code, get the root cause diagnosed before authorizing replacement. On a relatively new, well-maintained vehicle, the code may be from an upstream oxygen sensor issue or fuel trim problem rather than converter degradation.',
        metaTitle: 'Catalytic Converter Service Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter diagnosis and repair for Draper drivers. P0420 codes need root cause diagnosis, not automatic replacement. 12 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s truck and SUV population makes it a statistically significant theft location — converter shields pay for themselves in this community. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s large residential and commercial areas include numerous outdoor parking lots where converter theft risk is meaningful. The Mountain View Corridor area\'s commercial zones have had converter theft activity. West Jordan\'s truck and SUV population — higher than average for the valley — makes this community a statistically significant theft location because those vehicles\' converters are more accessible and more valuable.',
        localTip: 'West Jordan truck owners who park outdoors: anti-theft shields provide meaningful protection without reducing serviceability. Installation takes under an hour and pays for itself the first time a theft attempt is deterred.',
        metaTitle: 'Catalytic Converter Service Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and anti-theft shields for West Jordan drivers. Truck and SUV theft risk is above average. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s dark commercial zone parking and newer vehicle values both make converter theft a relevant concern here. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s newer neighborhoods and Daybreak community have lower converter theft risk than commercial areas, but Bangerter Highway commercial zones create targeted environments. South Jordan\'s rapid growth is outpacing lighting and security infrastructure in some areas, creating lower-surveillance parking conditions. Daybreak vehicles\' newer OEM converters are valuable enough to attract organized theft operations.',
        localTip: 'South Jordan\'s dark commercial zone parking near Bangerter after business hours has documented theft activity. If you park in commercial lots after 8 PM regularly, document your converter\'s location for insurance purposes.',
        metaTitle: 'Catalytic Converter Service Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft protection for South Jordan drivers. 10 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton P0420 codes are more likely from genuine mileage-related degradation than theft — and root cause diagnosis is essential before replacement. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s quieter suburban character means lower overall theft risk, but P0420 codes in Riverton vehicles are more likely experiencing genuine converter degradation than theft, particularly in older vehicles with 100,000+ miles that have had heat-intensive commutes. Root cause diagnosis before replacement is particularly important here because the underlying engine issue may re-damage a new converter.',
        localTip: 'If your Riverton vehicle fails emissions with a P0420 code and has over 120,000 miles, ask your mechanic to check for engine oil consumption. A small amount of oil burning can degrade a catalytic converter far faster than mileage alone.',
        metaTitle: 'Catalytic Converter Service Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair for Riverton drivers. Root cause diagnosis before replacement prevents repeat failure. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s higher elevation creates slightly richer cold-start conditions that contribute to converter degradation over time — worth knowing for P0420 diagnostics. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman\'s remote hillside location means lower converter theft risk than urban communities, but theft has followed growth into southern valley communities. P0420 codes in Herriman vehicles often reflect genuine degradation from high-altitude cold-start richness — engines at Herriman\'s elevation run slightly richer during warm-up, which contributes to converter degradation over time.',
        localTip: 'Vehicles at Herriman\'s elevation experience slightly richer cold-start fuel mixtures than valley-floor vehicles. Over many years, this contributes to converter degradation — a P0420 at 80,000 miles may simply be altitude-related wear.',
        metaTitle: 'Catalytic Converter Service Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair for Herriman drivers. High-altitude cold-start richness accelerates converter wear. 15 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns has active converter theft in commercial and multi-unit residential areas — and many older vehicles here are approaching genuine failure from mileage. We\'re 7 miles east — about 12 minutes.',
        localContent: 'Kearns has historically seen converter theft in its commercial and multi-unit residential areas. Working vehicles parked overnight in driveways and commercial lots are targets, and Kearns\' proximity to I-15 provides a quick exit route. Older vehicles common in Kearns may also present with genuine converter failure from mileage and deferred maintenance rather than theft — diagnosis clarifies the cause.',
        localTip: 'If you wake up in Kearns to a suddenly loud vehicle, don\'t drive it before checking underneath. A stolen converter leaves the exhaust system open — driving without a converter is both illegal and hard on oxygen sensors that follow it.',
        metaTitle: 'Catalytic Converter Service Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft replacement for Kearns drivers. 7 miles east on 5400 South. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s commercial character and hybrid vehicle population make it a specific target for organized converter theft operations. We\'re 5 miles north — about 8 minutes on State Street.',
        localContent: 'Midvale\'s commercial character and I-15/I-215 proximity create an active theft environment. The 7200 South commercial corridor\'s parking lots are targeted areas. Midvale also has a significant proportion of Priuses and hybrid vehicles whose converters are particularly valuable for their higher precious metal content — making Midvale hybrid owners a specific theft target.',
        localTip: 'Midvale Prius and hybrid owners should strongly consider a locking converter shield — hybrid converters command scrap prices 3–5 times higher than standard converter scrap value, making hybrids the most frequently targeted vehicles by organized operations.',
        metaTitle: 'Catalytic Converter Service Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Catalytic converter repair and theft protection for Midvale drivers. Hybrid vehicles are primary theft targets near I-15. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'strut-replacement': {
    serviceName: 'Strut Replacement',
    serviceFullName: 'Strut Replacement',
    mainSlug: 'strut-replacement-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s frost heave sections and hilly terrain age strut mounts faster than flat suburban streets. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s aging road infrastructure has some of the worst frost heave sections of any inner-city neighborhood. The hilly terrain sends vehicles across pavement buckles and brick sections that put sharp lateral and vertical loads on strut mounts. Westminster University area parking garage exit ramps have surface defects that produce repeated strut impacts. Sugar House vehicles often develop strut mount wear before strut damper wear.',
        localTip: 'If you hear a clunk when going over Sugar House\'s many speed bumps and frost heaves, the strut mount bearing may be the issue rather than the strut itself. Mount inspection adds only a few minutes to the strut diagnostic and can save unnecessary parts replacement.',
        metaTitle: 'Strut Replacement Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Sugar House drivers. Frost heaves and hilly terrain accelerate strut mount wear. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek Canyon Road\'s rough surface and AWD suspension geometry both create specific strut wear patterns for this neighborhood. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek Canyon Road\'s rough surface approaching the canyon gate puts strut mounts and bushings under repeated impact. Millcreek\'s residential streets in older sections have frost heave patterns that create compound impacts — up-down-lateral — that age struts faster than smooth-road driving. The neighborhood\'s Subaru population sees specific front strut wear from AWD suspension geometry.',
        localTip: 'Subaru owners in Millcreek should check rear struts alongside fronts — AWD suspension geometry distributes road impacts differently, and rear struts often wear simultaneously with fronts rather than lagging behind.',
        metaTitle: 'Strut Replacement Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Millcreek drivers. Canyon road impacts and AWD geometry create specific wear patterns. 3 miles from Millcreek. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s railroad crossings and commercial pavement create strut impacts that produce the cupped tire wear pattern that reveals worn dampers. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray\'s State Street pavement has sections with railroad-grade crossings and commercial loading zone deterioration that produce sharp strut impacts. The Fashion Place Mall area\'s parking structure ramps subject struts to loaded lateral forces. Murray vehicles with 70,000+ miles that commute State Street frequently often present with cupped tire wear — a classic sign of struts that have lost their damping.',
        localTip: 'Cupped or scalloped tire wear on a Murray commuter vehicle almost always indicates worn struts. Don\'t just replace the tires — address the struts first or the new tires will wear the same way.',
        metaTitle: 'Strut Replacement Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Murray drivers. Railroad crossings and State Street pavement create strut-damaging impacts. 4 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'The Avenues\' steep grades combined with deteriorated asphalt create compound strut loads that age components faster than any other neighborhood in the valley. We\'re 4 miles south — about 10 minutes.',
        localContent: 'Salt Lake City\'s Avenues roads are among the most strut-damaging in the valley. The steep grades combined with deteriorated asphalt and frost heave sections create compound strut loads — vertical impact plus lateral loading from cornering on the hill. The Avenues\' brick-paved intersections also produce characteristic strut knocking that many residents dismiss as "the road" rather than strut mount wear.',
        localTip: 'If your vehicle bottoms out noticeably on Avenues frost heaves where it didn\'t before, the struts are past their effective damping range. That condition lengthens stopping distances and affects lane-change stability.',
        metaTitle: 'Strut Replacement Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Salt Lake City drivers. Avenues grades and frost heaves create compound strut loads. 4 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s I-215 concrete expansion joints produce rhythmic strut mount impacts that resonate at a specific freeway speed. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s I-215 interchange concrete sections have expansion joints spaced to produce rhythmic strut impacts at normal freeway speed. Daily commuters on these sections experience thousands of repetitive strut impacts per week. Taylorsville vehicles show a higher rate of front strut mount bearing wear from these resonant-frequency impacts than from general road randomness.',
        localTip: 'If your steering wheel vibrates slightly at a specific highway speed on I-215 but not at other speeds, that\'s often a strut mount bearing resonating with the expansion joint frequency — distinct from wheel balance issues, which vibrate across a broader speed range.',
        metaTitle: 'Strut Replacement Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Taylorsville drivers. I-215 concrete expansion joints create resonant strut mount wear. 5 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s industrial road surfaces and commercial truck traffic age struts faster than residential driving for any vehicle sharing those roads. We\'re 7 miles east — about 12 minutes.',
        localContent: 'West Valley City\'s industrial roads have surface deterioration from heavy truck traffic that passenger vehicles share. Commercial delivery and warehouse access roads on 3500 South have pavement damage that puts struts through impacts beyond what they\'re designed for in passenger cars. West Valley\'s higher truck and commercial vehicle population also means strut replacement here often involves heavier-duty applications.',
        localTip: 'If you drive a truck or SUV in West Valley commercial areas, have your struts inspected at 50,000 miles rather than waiting for the typical 60,000–75,000-mile interval. Industrial road surfaces age struts faster than residential streets.',
        metaTitle: 'Strut Replacement Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for West Valley City drivers. Industrial road surfaces accelerate strut wear beyond typical intervals. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s canyon approaches and older residential streets create compound strut demands on every trip toward Big Cottonwood. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay\'s proximity to the foothills means residential streets in the upper reaches have more frost heave damage from seasonal ground movement. The approach to Big Cottonwood Canyon has road sections with erosion-related pavement cracking that produces impact patterns similar to frost heave. Holladay\'s diverse vehicle mix — including many older vehicles kept in service for canyon access — often has deferred strut service.',
        localTip: 'Canyon approaches in Holladay test strut damping thoroughly. If your vehicle bounces more than once after passing over a rough section of Highland Drive, the struts are providing minimal damping — a safety concern at canyon speeds.',
        metaTitle: 'Strut Replacement Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Holladay drivers. Canyon approach roads and older residential streets accelerate strut wear. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon road and ski vehicle loading create strut demands that residential driving can\'t replicate. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Little Cottonwood Canyon road has surface deterioration from snowplow abrasion and freeze-thaw cycling that makes the approach to Snowbird rough during and after winter. Cottonwood Heights vehicles used for ski access absorb these canyon road impacts repeatedly. The added weight of ski equipment and passengers also compresses the suspension more on these impacts, increasing the stress on strut internals per event.',
        localTip: 'If your ski vehicle feels increasingly bouncy on the canyon road approach — especially loaded with gear — that\'s the struts struggling under the combined dynamic load of road surface and added weight. Address it before ski season peaks.',
        metaTitle: 'Strut Replacement Near Cottonwood Heights UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Cottonwood Heights ski-canyon drivers. Canyon road impacts and loaded descents accelerate strut wear. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s eastern foothill roads and off-pavement recreational access accelerate strut wear beyond mileage-based intervals. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s eastern foothill roads near Bell Canyon have surfaces that mix new residential pavement with older canyon approach sections, creating abrupt transitions that produce sharp strut impacts. Sandy SUV and truck owners who use their vehicles for off-road access near the Dimple Dell area put struts through off-pavement impacts not represented in normal service intervals.',
        localTip: 'Off-road or unpaved access road use accelerates strut wear significantly faster than highway driving. If your Sandy vehicle occasionally goes off-pavement, include strut inspection in your annual service rather than waiting for symptoms.',
        metaTitle: 'Strut Replacement Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Sandy drivers. Eastern foothill roads and off-pavement use accelerate strut wear. 8 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'SunCrest\'s steep driveway exits and daily canyon-grade descents put front struts at full compression under forward acceleration daily. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s SunCrest streets have grades and surface conditions that produce daily strut loading from steep driveway exits and uphill approaches. The daily descent from SunCrest\'s elevation — with switchback curves — puts lateral loads on struts in addition to vertical damping loads. Draper commuters who tow on I-15 also compress the front struts differently when towing weight transfers front-rear under braking.',
        localTip: 'Towing regularly with a Draper vehicle accelerates rear suspension wear but also affects front strut load distribution. Have both front and rear suspension inspected together if you tow frequently.',
        metaTitle: 'Strut Replacement Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Draper drivers. SunCrest steep grades and I-15 towing both stress strut components. 12 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s unusually high density of subdivision speed bumps is a leading cause of accelerated strut wear in the community. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s subdivision network has an unusually high density of speed bumps — many newer neighborhoods have them on every block. Speed bumps, even modest ones, create daily strut impacts that accumulate to significant wear over 2–3 years of neighborhood driving. West Jordan vehicles that also commute on Mountain View Corridor get the double impact of residential speed bumps and highway-speed pavement transitions.',
        localTip: 'Speed bumps in West Jordan subdivisions are a legitimate source of strut wear acceleration. If you live in a new subdivision and cover 50+ speed bumps per day in and out, plan for strut inspection at 50,000 miles rather than 70,000.',
        metaTitle: 'Strut Replacement Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for West Jordan drivers. Subdivision speed bumps accelerate strut wear faster than flat-road driving. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s construction-era road transitions and Bangerter expansion joints both create strut impact events that drivers aren\'t expecting. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s construction-era road infrastructure includes transition sections between new pavement and existing roads that create sharp vertical drops. Bangerter Highway\'s expansion joint transitions also produce strut impact events at highway speed. Daybreak\'s roundabout-heavy design requires more lateral load from cornering per mile than grid-street communities, adding to strut sidewall stress.',
        localTip: 'If you\'re noticing your vehicle pulling to one side under braking in South Jordan traffic — especially after a larger road impact — have the strut mount inspected. Bent or worn mounts cause brake pull that\'s commonly misdiagnosed as a brake issue.',
        metaTitle: 'Strut Replacement Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for South Jordan drivers. Bangerter expansion joints and construction transitions stress strut systems. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s high annual mileage and Bangerter highway-speed strut events combine to reach inspection thresholds faster than many residents realize. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s longer commutes mean more total road miles on strut components than closer communities. Riverton vehicles that carry work equipment or recreational gear frequently are loaded closer to the suspension\'s weight rating, which compresses struts more per impact. Bangerter Highway\'s longer uninterrupted runs expose struts to sustained highway speeds where damaged components produce road wander rather than obvious bouncing.',
        localTip: 'Highway-speed road wander — the vehicle slowly drifting lane position without input — is often a worn strut rather than an alignment issue. If an alignment doesn\'t resolve the wandering, request a strut inspection.',
        metaTitle: 'Strut Replacement Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Riverton drivers. Long Bangerter commutes accumulate strut wear faster than closer suburbs. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s steep hillside driveways create front strut full-compression events on every departure from home. We\'re 15 miles northeast — about 20 minutes via Mountain View Corridor.',
        localContent: 'Herriman\'s hillside driveways are the most demanding daily strut loading condition in the southwest valley. Steep driveway exits require the vehicle to pitch forward sharply, putting front struts at full compression while under forward acceleration. New construction roads in Herriman also have surface transitions between established and new pavement that create sharp impact edges.',
        localTip: 'If your Herriman driveway exit angle is steep enough that you scrape the underside on a low-clearance vehicle, you\'re also bottoming out the front struts daily. That\'s an extreme compression event every time you leave home — strut condition is worth checking early.',
        metaTitle: 'Strut Replacement Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Herriman drivers. Steep hillside driveways create daily front strut full-compression events. 15 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns\' older road infrastructure and 4500 South I-15 ramp transition produce strut impacts that newer suburban communities rarely see. We\'re 7 miles east — about 12 minutes.',
        localContent: 'Kearns\' older road infrastructure has sections with significant pavement age-related deterioration — expansion joint gaps and frost heave patterns that are worse than newer communities. The I-15 on-ramp at 4500 South has a pavement transition rough enough to produce audible suspension impacts. Kearns vehicles that have accumulated high mileage on these roads often have struts worn past any meaningful damping capacity.',
        localTip: 'Kearns\' 4500 South I-15 on-ramp transition produces a sharp suspension impact at normal speed. If your vehicle jolts noticeably crossing that joint — and newer cars don\'t — your struts are providing minimal damping.',
        metaTitle: 'Strut Replacement Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Kearns drivers. Older road infrastructure and I-15 ramp transitions accelerate strut wear. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15 concrete joints and State Street older pavement combine to create one of the more strut-unfriendly commute profiles in the valley. We\'re 5 miles north — about 8 minutes.',
        localContent: 'Midvale\'s State Street and 7200 South have older pavement with significant expansion joint deterioration. The I-15/I-215 interchange concrete sections produce rhythmic strut impacts at highway speed. Midvale vehicles on the daily freeway run get both the interchange concrete impacts and commercial-road surface variations on 7200 South.',
        localTip: 'Midvale\'s combination of interstate concrete expansion joints and older surface street pavement is particularly hard on strut mounts. If you hear a distinct clunk at a specific highway speed on I-15 that goes away when you change lanes, the strut mount bearing is likely resonating with the joint spacing.',
        metaTitle: 'Strut Replacement Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Strut replacement for Midvale drivers. I-15 concrete joints and older surface streets create compound strut wear. 5 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      }
    }
  },

  'timing-belt-replacement': {
    serviceName: 'Timing Belt Replacement',
    serviceFullName: 'Timing Belt Replacement',
    mainSlug: 'timing-belt-replacement-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s stop-start urban driving accumulates rubber fatigue in timing belt material faster than long-distance commuters realize. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s urban driving creates multiple daily cold starts that accumulate rubber fatigue in timing belt material faster than vehicles that start once and drive long distances. Belt condition is measured in miles, but age-related cracking accelerates in stop-start environments. Sugar House vehicles approaching manufacturer-recommended replacement intervals should treat the timing belt as a scheduled maintenance item rather than waiting for symptoms.',
        localTip: 'Timing belts don\'t announce failure before breaking. If you\'re approaching the manufacturer\'s mileage or time interval — whichever comes first — don\'t wait for symptoms. On an interference engine, belt failure means bent valves.',
        metaTitle: 'Timing Belt Replacement Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Sugar House drivers. Stop-start urban driving accelerates belt aging. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Canyon thermal stress ages Millcreek timing belts beyond what mileage alone indicates — the time-based interval is just as important as mileage here. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek drivers tend to accumulate mixed mileage — neighborhood runs and canyon drives — which means belt mileage builds at a moderate pace but with above-average thermal stress. Canyon climbing at sustained RPM heats the belt and tensioner pulley consistently, accelerating wear. Millcreek vehicles near their timing belt interval should consider the additional canyon thermal cycles as a factor in replacement timing.',
        localTip: 'Timing belts on vehicles that see canyon driving should be inspected at 80,000 miles regardless of whether the manufacturer\'s replacement interval is 90,000 or 100,000. Canyon thermal stress ages belts beyond what flat-road mileage implies.',
        metaTitle: 'Timing Belt Replacement Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Millcreek drivers. Canyon thermal stress ages belts beyond mileage estimates. 3 miles from Millcreek. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s State Street stop-and-go ages the timing belt tensioner pulley faster than highway driving — and tensioner failure causes the same damage as belt failure. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray commuters on State Street accumulate miles at a moderate pace, but the stop-and-go creates additional belt-tensioner cycling that ages the tensioner pulley faster than highway driving. The tensioner is often the first timing belt system component to show wear, and its failure throws the belt and causes the same engine damage as belt failure itself.',
        localTip: 'When replacing a timing belt, ask specifically about tensioner and idler pulley condition. A worn tensioner on a new belt will fail and cause the same damage as the old belt failing — for a fraction of the original repair investment.',
        metaTitle: 'Timing Belt Replacement Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Murray drivers. State Street stop-and-go ages tensioner pulleys faster than highway driving. 4 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s extreme seasonal temperature range creates the most aggressive age-related timing belt degradation conditions in the valley. We\'re 4 miles south — about 10 minutes.',
        localContent: 'Salt Lake City\'s temperature extremes — freezing winters and 100°F summers — create the most aggressive age-related timing belt degradation conditions of any valley location. Rubber compounds lose flexibility below freezing and off-gas oxidizing compounds at high temperatures. Salt Lake City vehicles at their timing belt interval should factor belt age in years as strongly as mileage.',
        localTip: 'In Utah\'s climate, treat 7 years as a timing belt age limit even if the mileage hasn\'t reached the manufacturer\'s interval. Cold cracking and summer UV degradation age rubber compounds faster than moderate-climate manufacturers\' schedules assume.',
        metaTitle: 'Timing Belt Replacement Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Salt Lake City drivers. Extreme seasonal temperatures age belts faster than mileage alone. 4 miles south. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville freeway commuters often reach timing belt mileage and time intervals simultaneously — making the service convenient to schedule with other major maintenance. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s freeway-heavy commute accumulates timing belt mileage faster than neighborhood-only drivers. Taylorsville vehicles frequently reach manufacturer mileage intervals in 4–5 years rather than the 7–8 years slower drivers might take. The belt system\'s mileage and time intervals can both be reached simultaneously for these high-mileage commuters, making the service straightforward to schedule.',
        localTip: 'Taylorsville freeway commuters often reach timing belt intervals simultaneously with other major services — spark plug replacement, coolant flush. Combining timing belt work with these services reduces total shop time.',
        metaTitle: 'Timing Belt Replacement Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Taylorsville commuters. Freeway driving reaches mileage and time intervals faster than expected. 5 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City commercial vehicles accumulate mileage so quickly that timing belt intervals arrive before the vehicle seems "high mileage." We\'re 7 miles east — about 12 minutes.',
        localContent: 'West Valley City commercial vehicles accumulate mileage quickly, often reaching timing belt replacement intervals in 2–3 years rather than the typical 5–7 year time frame. Fleet operators in West Valley should treat timing belt replacement as a scheduled interval item — adding it to the same maintenance calendar as oil changes and brake service rather than waiting for mileage reminders.',
        localTip: 'West Valley commercial vehicles that accumulate 30,000+ miles per year will reach timing belt intervals before the vehicle reaches "high mileage" status. Don\'t wait for any symptom — on an interference engine, first symptom is engine damage.',
        metaTitle: 'Timing Belt Replacement Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for West Valley City drivers and commercial fleets. High-mileage commercial use reaches intervals faster. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s canyon-driving vehicle mix creates above-average thermal stress on timing belt materials that shortens the time to the next inspection. We\'re 5 miles north — about 9 minutes.',
        localContent: 'Holladay\'s canyon-driving vehicle mix creates above-average thermal stress on timing belt materials. Canyon climbs at sustained RPM heat both the belt and tensioner pulley consistently, accelerating wear. Holladay vehicles near their timing belt interval should consider the additional canyon thermal cycles as a factor in replacement timing — erring earlier rather than later if there\'s any question about condition.',
        localTip: 'If your Holladay vehicle has an inspection in the months before the manufacturer\'s timing belt interval, ask for belt condition to be assessed at that visit. A mechanic can spot cracking and glazing that indicates early replacement is warranted.',
        metaTitle: 'Timing Belt Replacement Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Holladay drivers. Canyon thermal stress ages belts earlier than flat-road mileage suggests. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Cold morning starts followed immediately by canyon climbing are the most thermally demanding sequence for timing belt rubber in the valley. We\'re 6 miles north — about 10 minutes.',
        localContent: 'Cottonwood Heights vehicles that ski regularly add canyon thermal stress to their timing belt system throughout the winter season. The cold morning starts followed immediately by canyon climbing are the most thermally demanding sequence for belt rubber. Vehicles at any stage of their timing belt service life should have the belt visually inspected annually if they see regular canyon use.',
        localTip: 'A timing belt that looks intact can still have micro-cracking from cold exposure. Ask your mechanic to flex the belt slightly during inspection — surface cracking that isn\'t visible straight-on becomes apparent when the belt is bent.',
        metaTitle: 'Timing Belt Replacement Near Cottonwood Heights UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Cottonwood Heights ski-canyon drivers. Cold starts and canyon climbing age belts faster. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Many Sandy vehicles with timing belts share the replacement interval with the water pump — doing both together makes economic sense. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s I-15 commuters build timing belt mileage quickly. The sustained highway operation also runs the tensioner pulley at high speed continuously, accumulating bearing wear faster than city driving. Sandy vehicles where the timing belt and water pump share a common replacement interval — common in European and Japanese vehicles — benefit from doing both services simultaneously when the interval is reached.',
        localTip: 'Many manufacturers recommend replacing the water pump at the same time as the timing belt because both are accessible with the same labor. In Sandy\'s high-mileage commuter vehicles, this combination is almost always the right call.',
        metaTitle: 'Timing Belt Replacement Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Sandy drivers. I-15 commutes build mileage quickly; water pump combo service is often economical. 8 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper\'s long I-15 commute and Point of the Mountain grade both accumulate timing belt mileage and thermal stress faster than typical valley driving. We\'re 12 miles north — about 15 minutes.',
        localContent: 'Draper\'s tech-corridor commuters often drive newer or well-maintained vehicles, making timing belt replacement a matter of scheduled maintenance rather than reactive repair. The Point of the Mountain grade adds sustained high-RPM operation to the timing belt system on every southbound commute — a factor to consider when the belt is approaching its mileage interval.',
        localTip: 'If your Draper vehicle\'s manufacturer manual gives both a mileage and time interval for timing belt replacement, use whichever comes first — not whichever is most convenient. Both limits exist because the manufacturer can\'t know how quickly you\'ll accumulate miles.',
        metaTitle: 'Timing Belt Replacement Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Draper drivers. I-15 commuting and Point of the Mountain grade accumulate belt wear fast. 12 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s frequent cold starts from short subdivision trips accumulate timing belt fatigue faster than highway driving distance suggests. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan suburban driving accumulates timing belt mileage at a moderate pace, but the subdivision\'s frequent cold starts add to belt fatigue. West Jordan vehicles that have exceeded their timing belt interval without replacement are at the highest risk in the fleet — a broken belt on a school run is an engine-damaging event. Treat the timing belt as a non-negotiable maintenance item.',
        localTip: 'If you\'re unsure whether your West Jordan vehicle has had its timing belt replaced, ask a mechanic to inspect it. Signs of original installation — date stamps on the belt, matching OEM markings — can help determine if the job has ever been done.',
        metaTitle: 'Timing Belt Replacement Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for West Jordan drivers. Don\'t wait for symptoms — interference engine belt failure is instant engine damage. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s used-vehicle market means many residents have cars with uncertain timing belt histories that deserve a professional inspection. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s growing family population tends to maintain newer vehicles, but many residents also own older secondary vehicles used for errands that may have deferred timing belt service. Bangerter Highway commutes add mileage quickly. South Jordan vehicles with 80,000+ miles and no clear service history for the timing belt should have it inspected and replaced if condition or history is uncertain.',
        localTip: 'For used vehicles purchased in South Jordan, include timing belt replacement in the first-year service plan if you can\'t verify it was recently done. A timing belt replacement you didn\'t need costs a few hundred dollars. An engine rebuild from a broken belt costs thousands.',
        metaTitle: 'Timing Belt Replacement Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for South Jordan drivers. Used vehicle timing belt history is often uncertain — don\'t assume it\'s been done. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton commuters cover 15,000+ miles per year — reaching timing belt intervals in well under 6 years on most vehicles. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton commuters who cover 25+ miles each way accumulate timing belt mileage at 15,000+ miles per year — often reaching manufacturer intervals in under 5 years. The Bangerter and I-15 sustained highway operation runs the timing system at consistent RPM for long periods, accumulating total belt tension cycles quickly. Riverton vehicles should keep an active timing belt replacement date in their service record.',
        localTip: 'Riverton commuters should know their vehicle\'s timing belt replacement interval in miles and track it actively. At 15,000 miles per year, you\'ll reach an 80,000-mile interval in just over 5 years — well within the age-based degradation window for rubber.',
        metaTitle: 'Timing Belt Replacement Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Riverton drivers. 15K+ miles per year reaches belt intervals in under 5 years. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s remote location makes proactive timing belt replacement particularly important — a broken belt 20 miles from service is a far more expensive situation. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman vehicles — many relatively new from the community\'s recent growth — may not yet be at timing belt intervals, but the community\'s older household secondary vehicles often have deferred maintenance histories. Mountain View Corridor\'s sustained highway operation adds mileage quickly. Herriman residents with any uncertainty about their timing belt service history should request inspection as part of any major service visit.',
        localTip: 'Herriman\'s farthest-from-service-shop location is a reason to address timing belt replacement proactively. A broken belt at 20+ miles from an auto shop is a far more expensive situation than one that fails near Murray or Midvale.',
        metaTitle: 'Timing Belt Replacement Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Herriman drivers. Remote location makes proactive replacement critical — don\'t risk a breakdown far from service. 15 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns vehicles kept past 150,000 miles often need a second timing belt replacement — the clock resets on each new belt. We\'re 7 miles east — about 12 minutes on 5400 South.',
        localContent: 'Kearns working-class residents often maintain vehicles for 200,000+ miles, which means timing belt replacement is a lifecycle reality rather than a one-time event. At 150,000–180,000 miles, a second timing belt replacement is appropriate on vehicles whose first replacement was around 90,000 miles. Kearns vehicle owners should track replacement mileage in their service records.',
        localTip: 'Kearns vehicles kept in service past 150,000 miles should plan for a second timing belt service. The interval doesn\'t change based on how many replacements have already been done — the clock resets on each new belt.',
        metaTitle: 'Timing Belt Replacement Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Kearns drivers. High-mileage vehicles may need a second belt service after 150K. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s older established community keeps vehicles in service long enough to need second and third timing belt replacements — ongoing maintenance rather than a one-time event. We\'re 5 miles north — about 8 minutes.',
        localContent: 'Midvale\'s I-15 commuters accumulate timing belt mileage quickly. Midvale is also one of the valley\'s older established communities where vehicles are kept in service long after their first timing belt interval, making second and third timing belt replacements more common than in newer outer-valley communities.',
        localTip: 'If a Midvale mechanic inspects your timing belt and finds the tensioner pulley has any bearing roughness, replace both the belt and tensioner together. A failed tensioner on a new belt causes the same engine damage as the belt failing alone.',
        metaTitle: 'Timing Belt Replacement Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Timing belt replacement for Midvale drivers. Long-kept vehicles need second and third belt services — the interval repeats. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'welding-services': {
    serviceName: 'Welding Services',
    serviceFullName: 'Welding Services',
    mainSlug: 'welding-services-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s older streets and frost heave sections are a consistent source of broken exhaust hangers and cracked flex pipes that benefit from in-house welding. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s older residential streets produce broken exhaust hangers and cracked flex pipes more often than newer suburban communities. The neighborhood\'s frost heave sections and speed humps contribute to hanger fatigue. Our in-house welding capability means these repairs can be done the same day rather than sending the vehicle to a separate fabrication shop.',
        localTip: 'An exhaust rattle that appears only at specific RPM ranges — then disappears — is often a loose heat shield that can be tack-welded in place in under an hour. Don\'t assume exhaust rattle requires a major repair.',
        metaTitle: 'Welding Services Near Sugar House UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Sugar House drivers. Exhaust hangers, flex pipes, and bracket repair. Same-day service. 3 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek\'s canyon access routes create undercarriage damage from rock strikes and road debris that benefit from in-house welding repair. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek\'s canyon access routes and older residential streets create a higher rate of undercarriage damage than average for valley communities. Rock strikes on exhaust pipes and frame brackets from unpaved canyon approach areas can dent and crack components that need welding repair. Millcreek vehicles with off-pavement use also present with frame bracket and skid plate welding needs that general repair shops don\'t typically handle.',
        localTip: 'If your vehicle\'s exhaust system has been bent by a rock strike, have the full undercarriage inspected before the weld repair — additional damage to hangers or heat shields often accompanies visible pipe dents.',
        metaTitle: 'Welding Services Near Millcreek UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Millcreek drivers. Rock strike repair, exhaust welding, skid plate repair. 3 miles from Millcreek. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s industrial zones generate commercial vehicles that need exhaust welding rather than bolt-on parts — and emissions test failures often trace to upstream exhaust leaks. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray\'s industrial zones on State Street generate working vehicles with higher rates of exhaust leak and frame bracket welding needs. Commercial trucks and vans with custom exhaust routing often need weld repair rather than direct part replacement. Murray\'s emissions testing concentration also means welding repair of exhaust leaks has a direct emissions test benefit for vehicles that would otherwise fail.',
        localTip: 'An exhaust weld repair can resolve an emissions test failure for a fraction of the cost of catalytic converter replacement. If you failed Murray\'s emissions test for high hydrocarbons, ask whether an exhaust leak is the upstream cause before authorizing converter work.',
        metaTitle: 'Welding Services Near Murray UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Murray drivers. Exhaust leak welding often resolves emissions failures. 4 miles north on State Street. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s intensive road salt program creates the most corrosive undercarriage environment in the valley — welding repairs here often require cleaning corroded base metal first. We\'re 4 miles south — about 10 minutes.',
        localContent: 'Salt Lake City\'s winter road salt program is the most intensive in the valley — downtown streets receive multiple applications per snow event. This salt concentration accelerates undercarriage corrosion more aggressively than outer-valley communities. Salt Lake City vehicles often present with frame bracket corrosion, exhaust hanger deterioration, and heat shield separation that requires welding to repair or secure properly.',
        localTip: 'Downtown Salt Lake City vehicles should have the undercarriage inspected for salt corrosion damage annually. Welding repairs on corroded brackets are significantly more difficult when the base metal has been compromised by deep corrosion.',
        metaTitle: 'Welding Services Near Salt Lake City UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Salt Lake City drivers. Road salt accelerates undercarriage corrosion that requires weld repair. 4 miles south. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s freeway vibration fatigues exhaust hanger welds at resonant frequencies that differ from general road stress. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s freeway-heavy commute means exhaust system vibration at highway speed is a daily constant. Sustained highway vibration fatigues exhaust hanger welds at specific resonant frequencies, leading to weld fractures at hanger attachment points. Taylorsville vehicles with highway commutes should have exhaust hangers inspected alongside any exhaust noise complaint.',
        localTip: 'Welding an exhaust hanger to a corroded attachment bracket requires cleaning the corrosion from the base metal first. A weld on a rusty surface will hold briefly then fail — ask your shop whether the attachment surface was properly cleaned before the weld was made.',
        metaTitle: 'Welding Services Near Taylorsville UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Taylorsville drivers. Freeway vibration fatigue causes hanger weld failure. 5 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s commercial operations often need structural welding and custom fabrication beyond standard exhaust work — our in-house capability handles both. We\'re 7 miles east — about 12 minutes.',
        localContent: 'West Valley City\'s industrial context means welding service requests here often include commercial fabrication — custom bracket fabrication, frame repair on work trucks, and structural welding that general automotive shops don\'t typically handle. West Valley commercial operators who have had to send vehicles to separate fab shops can consolidate that work with regular automotive service.',
        localTip: 'West Valley commercial vehicles with frame damage from loading dock impacts or road debris often have welding needs that general shops decline. In-house welding capability means your work truck can be assessed and repaired in the same location rather than being transported to a separate facility.',
        metaTitle: 'Welding Services Near West Valley City UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for West Valley City drivers and commercial fleets. Exhaust, frame, and custom fabrication welding. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s AWD vehicle population has skid plate and undertray welding needs from canyon and off-pavement excursions that most shops don\'t handle. We\'re 5 miles north — about 9 minutes.',
        localContent: 'Holladay\'s older residential streets and canyon proximity create undercarriage damage patterns that include exhaust system and AWD-specific skid plate welding needs. The neighborhood\'s Subaru and AWD vehicle population has undertray and skid plate welding needs from off-pavement excursions that general shops typically decline. Holladay\'s variety of older and newer vehicles also includes many that have accumulated road debris damage to exhaust systems.',
        localTip: 'AWD vehicle skid plates that have taken rock hits often have bent or cracked sections that aren\'t visible from the outside. If your skid plate sounds different after a rock impact, have it inspected — a cracked skid plate can fail suddenly and cause secondary damage.',
        metaTitle: 'Welding Services Near Holladay UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Holladay drivers. Exhaust repair, skid plate welding, and AWD undertray repair. 5 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon road debris creates a consistent source of exhaust pipe dents and heat shield damage that weld repair addresses without full system replacement. We\'re 6 miles north — about 10 minutes.',
        localContent: 'Little Cottonwood Canyon road debris creates a consistent source of undercarriage damage for Cottonwood Heights vehicles. Rock strikes on exhaust pipes are more common here than in flat-terrain communities. The canyon\'s aggressive winter plowing scatters gravel and debris that produces undercarriage impacts at normal canyon entry speeds. Welding repair of canyon-related exhaust damage is routine for Cottonwood Heights vehicles used for ski access.',
        localTip: 'After winter canyon season, have your vehicle\'s exhaust system checked for impact dents and crack initiation points before summer. Cracks that begin from impacts often grow through summer heat cycling before becoming audible.',
        metaTitle: 'Welding Services Near Cottonwood Heights UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Cottonwood Heights ski-canyon drivers. Canyon road debris damage repaired with in-house welding. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s lifted truck population often has custom exhaust routing that requires welding expertise when a section fails. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s eastern foothill access roads and occasional off-pavement use create undercarriage damage that requires welding repair. Bell Canyon road has sections with loose gravel and surface irregularities that produce rock strike patterns on exhaust systems. Sandy also has a population of lifted trucks whose exhaust systems were custom-routed during the lift and may need welding repair from vibration and flex-point fatigue as the lift components age.',
        localTip: 'Lifted truck exhaust systems that were routed around lift components often develop flex-point cracks at the angles where the pipe makes a turn. Annual inspection of those custom bends is worth doing before a leak develops.',
        metaTitle: 'Welding Services Near Sandy UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Sandy drivers. Lifted truck custom exhaust repair, rock strike damage, and undercarriage welding. 8 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper\'s performance and modified vehicle population needs exhaust welding expertise that stock repair shops often can\'t provide. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s upscale vehicle population includes sport vehicles and performance-modified cars with custom exhaust systems that require expertise to repair. Point of the Mountain towing also occasionally leads to trailer hitch weld failures or bent receiver hitch tubes that need structural welding repair. Draper\'s vehicle mix is diverse enough that welding service requests range from stock exhaust hanger repair to custom exhaust fabrication.',
        localTip: 'Custom exhaust systems with aftermarket headers and mid-pipes often can\'t be replaced with bolt-on parts when a section fails. In-house welding capability means a cracked custom section can be repaired rather than requiring a full aftermarket system replacement.',
        metaTitle: 'Welding Services Near Draper UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Draper drivers. Custom exhaust repair, trailer hitch welding, and performance vehicle fabrication. 12 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s subdivision speed bumps and regular towing create consistent exhaust hanger and trailer hitch welding needs. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s subdivision network has a higher density of speed bumps than most valley communities, and speed bump impacts on lower-clearance vehicles are a consistent source of exhaust system damage and bracket breakage. West Jordan truck owners with trailer hitches also periodically need receiver hitch welding when the attachment welds fatigue from regular towing loads.',
        localTip: 'Trailer receiver hitches on West Jordan trucks used for regular towing should be visually inspected annually. Fatigue cracks in hitch attachment welds can develop gradually — early detection allows weld repair rather than full hitch replacement.',
        metaTitle: 'Welding Services Near West Jordan UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for West Jordan drivers. Exhaust hanger repair and trailer hitch welding for regular towing. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s construction debris and Bangerter highway-speed impacts create undercarriage damage that benefits from weld repair before leaks develop. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s construction activity generates road debris that includes nails, fasteners, and aggregate that can impact vehicle undersides. Bangerter Highway\'s construction zone expansions have scattered road debris that can impact exhaust systems at highway speed. South Jordan also has a population of work trucks with custom tool boxes and bed-mounted equipment whose fabrication welds occasionally need reinforcement.',
        localTip: 'If a road debris impact was severe enough to leave a visible dent in your exhaust pipe, have the pipe inspected for crack initiation before it becomes an audible leak. A small dent that doesn\'t currently leak often develops a crack at the impact point within months.',
        metaTitle: 'Welding Services Near South Jordan UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for South Jordan drivers. Construction debris damage and Bangerter impact repair. 10 miles north on I-15. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s Jordan River flood season creates undercarriage damage from debris that\'s often concealed under mud until the undercarriage is washed. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s Jordan River corridor roads have seasonal flooding debris that includes wood, concrete fragments, and metal that can impact vehicle undersides. Post-flood season undercarriage inspection is worthwhile for Riverton drivers whose routes cross the lower flood plain areas. Welding repairs from flood debris damage — bent exhaust hangers, cracked skid plates — are straightforward same-day repairs that prevent secondary damage.',
        localTip: 'After Jordan River flood events, inspect your vehicle\'s undercarriage after a thorough wash. Flood debris damage is often concealed by mud — washing the undercarriage first reveals impacts that might otherwise be missed until they become leaks.',
        metaTitle: 'Welding Services Near Riverton UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Riverton drivers. Flood debris damage, exhaust hangers, and undercarriage repair. 12 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s construction zone density creates more road debris per mile than any other southwest valley community — exhaust system damage is common and repairable. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman\'s construction boom generates more road debris per mile than any other community in the southwest valley. Construction aggregate, wire, and concrete rubble are common sources of undercarriage damage. Herriman\'s newest streets also have pavement transition edges between established and new sections where vehicles drop unexpectedly at highway speed — producing undercarriage impacts that can crack exhaust systems and break brackets.',
        localTip: 'Herriman\'s construction zone pavement transitions are hard on exhaust systems. If your route includes a section where the pavement drops abruptly — common on new development connections — inspect the exhaust undercarriage annually for bracket cracking at that location.',
        metaTitle: 'Welding Services Near Herriman UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Herriman drivers. Construction zone debris creates frequent undercarriage damage. 15 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns\' I-15 ramp transitions and commercial road surfaces create daily exhaust undercarriage stress where repair over replacement is often the right call. We\'re 7 miles east — about 12 minutes.',
        localContent: 'Kearns\' I-15 on-ramp transitions and older surface streets generate consistent undercarriage stress. Commercial and work vehicles common to Kearns also have higher welding service needs than passenger cars from the loads they carry and the rough road sections they cross. Kearns\' community values repair over replacement — welding saves money when the component being repaired is structurally sound.',
        localTip: 'An exhaust pipe section that can be welded costs a fraction of a replacement section when the surrounding hangers and connections are in acceptable condition. In Kearns, where vehicles often need to serve many more years, repair-over-replace welding makes economic sense.',
        metaTitle: 'Welding Services Near Kearns UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Kearns drivers. Exhaust repair, bracket welding, and repair over replacement. 7 miles east. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15 proximity and State Street commercial character create frequent undercarriage damage events — and high-mileage factory exhaust welds often need reinforcement. We\'re 5 miles north — about 8 minutes.',
        localContent: 'Midvale\'s I-15 proximity and State Street commercial character mean undercarriage damage from road debris and pavement impacts is common. The 7200 South commercial zone has loading dock areas where debris from commercial vehicles creates road hazards. Midvale also has older vehicles whose original exhaust welds from the factory have reached their fatigue limit — small cracks at original weld seams that need reinforcing before they become leaks.',
        localTip: 'Original factory exhaust welds on high-mileage Midvale vehicles sometimes develop micro-cracks that aren\'t audible until they grow. If your mechanic mentions the exhaust looks "stressed" at the factory weld points, a preventive reinforcement weld is far cheaper than an emergency repair.',
        metaTitle: 'Welding Services Near Midvale UT | Auto Welding | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Auto welding for Midvale drivers. Factory exhaust weld reinforcement and undercarriage damage repair. 5 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      }
    }
  },

  'shock-replacement': {
    serviceName: 'Shock Replacement',
    serviceFullName: 'Shock Replacement',
    mainSlug: 'shock-replacement-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s residential density and brick pavement create a wide variety of shock absorber loads in a short distance. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s residential streets have more surface variation than newer suburban communities — brick pavement, frost heave patterns, and transitional surfaces that produce a wide variety of shock absorber loads in a short distance. The neighborhood\'s density also means lots of parking and low-speed maneuvering with full passenger loads, which compresses rear shocks more than highway vehicles see.',
        localTip: 'Rear shock wear in Sugar House vehicles often shows up as excessive squat when loaded — noticeable when you put groceries in the trunk or add passengers. A simple loaded versus unloaded bounce test reveals whether rear shocks have lost their damping.',
        metaTitle: 'Shock Replacement Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Sugar House drivers. Varied road surfaces and neighborhood loading accelerate shock wear. 3 miles south. Scott\'s Auto. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek Canyon\'s full-suspension-travel impacts accelerate shock seal wear faster than predictable pavement driving. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek Canyon\'s rough approach road and switchback sections create sustained shock absorber loading over the full excursion range — from full compression on canyon bumps to full extension on drops. Millcreek vehicles used for canyon access regularly see the full shock travel that neighborhood driving rarely demands. This full-range cycling accelerates shock seal wear faster than predictable pavement driving.',
        localTip: 'Shock absorbers that leave an oily film on the shock body — visible when you wipe the shock with a rag — have failed internal seals and are no longer providing effective damping. That\'s a clear sign replacement is due.',
        metaTitle: 'Shock Replacement Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Millcreek drivers. Canyon access accelerates shock seal wear from full-travel cycling. 3 miles from Millcreek. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s commercial traffic and railroad crossings put rear shocks under above-average impact loads for vehicles hauling or carrying cargo. We\'re 4 miles north — about 8 minutes.',
        localContent: 'Murray\'s flat commercial terrain means shock wear here is primarily mileage-driven and predictable. State Street\'s railroad grade crossings and commercial loading area pavement create specific shock events that compress the shocks sharply rather than progressively. Murray trucks and commercial SUVs used for deliveries or hauling see rear shock wear faster than passenger cars because of the load factor.',
        localTip: 'Murray commercial vehicles that carry loads regularly in the bed or cargo area should have rear shocks inspected every 40,000–50,000 miles rather than the standard 60,000–75,000 mile interval. Load-bearing use ages shocks faster than passenger-only use.',
        metaTitle: 'Shock Replacement Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Murray drivers. Commercial hauling and railroad crossings accelerate rear shock wear. 4 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'The Avenues\' steep grades and brick pavement are the most shock-demanding urban environment in the valley — 40,000 miles here counts as more than 70,000 miles elsewhere. We\'re 4 miles south — about 10 minutes.',
        localContent: 'Salt Lake City\'s Avenues neighborhood is the most shock-demanding urban environment in the valley. Steep grades, brick pavement sections, and extreme frost heave damage create impact patterns that put shocks through their full compression and extension range multiple times per block. Avenues residents accumulate shock wear dramatically faster than valley-floor drivers.',
        localTip: 'Avenues residents should check their shocks at 40,000 miles — not 70,000. The grade transitions, brick sections, and frost heave impacts in that neighborhood are equivalent to 2–3 times the shock wear per mile of flat road driving.',
        metaTitle: 'Shock Replacement Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Salt Lake City drivers. Avenues grades and frost heaves age shocks faster than any other valley neighborhood. 4 miles south. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s wide arterials extend shock life, but roof cargo carriers and trailers change the weight distribution enough to accelerate wear in ways drivers don\'t expect. We\'re 5 miles east — about 10 minutes.',
        localContent: 'Taylorsville\'s wide arterials and freeway connections provide smooth driving conditions that extend shock life compared to urban neighborhoods. However, the I-215 interchange concrete expansion joints produce rhythmic vertical excitations at freeway speed. Taylorsville trucks and SUVs with roof-mounted cargo or hitched trailers create additional dynamic shock loads from weight transfers on the interchange\'s banked curves.',
        localTip: 'Roof cargo carriers and full trailers change the weight distribution on Taylorsville vehicles significantly. If you added a cargo carrier or started towing after your last shock service, have them re-evaluated sooner — the load change accelerates wear.',
        metaTitle: 'Shock Replacement Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Taylorsville drivers. Cargo and towing loads accelerate shock wear beyond mileage-based estimates. 5 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City commercial vehicles accumulate shock wear faster than passenger cars from load-bearing use and rough industrial road surfaces. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City commercial vehicles — delivery vans, construction trucks, work vehicles — accumulate shock wear faster than passenger cars because of the combination of load-bearing use and rough industrial road surfaces. West Valley\'s 3500 South has pavement deterioration that creates impact events for commercial vehicles carrying significant cargo weight.',
        localTip: 'A delivery van or work truck that rides harsh when empty but isn\'t terrible when loaded likely has rear shocks near the end of their life — they\'re relying on the load\'s compression to provide the damping the shocks can no longer deliver.',
        metaTitle: 'Shock Replacement Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for West Valley City drivers and commercial fleets. Load-bearing use accelerates shock wear. 7 miles east via I-215. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s AWD vehicle population has rear shocks that often need replacement before the fronts — a pattern flat-road drivers rarely encounter. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay\'s residential streets in the upper neighborhood sections have frost heave damage that tests shocks through a range of bump heights. The approach to Big Cottonwood Canyon includes rough transition surfaces. Holladay\'s vehicle mix — including many Subarus and AWD vehicles — requires attention to rear shocks alongside front struts because AWD geometry distributes suspension loads differently.',
        localTip: 'AWD vehicles with independent rear suspension — most modern Subarus and crossovers — have rear shocks that wear independently of front struts. Don\'t assume front struts are the only suspension concern if the car rides rough.',
        metaTitle: 'Shock Replacement Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Holladay drivers. AWD vehicles need rear shocks inspected separately from front struts. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Loaded canyon descents from Snowbird and Alta compress shocks deeply and repeatedly in a pattern that residential driving can\'t replicate. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Cottonwood Heights ski vehicles face the most demanding shock test in the valley — descending Little Cottonwood Canyon\'s 8% grade with a full load of ski equipment and passengers, over road sections with canyon-specific surface damage. Loaded canyon descents compress shocks deeply and repeatedly. Cottonwood Heights ski vehicle owners often notice their vehicle getting progressively harsher through winter as shock fluid temperature cycles affect the damping consistency.',
        localTip: 'If your ski vehicle feels rough going down the canyon but was smooth going up, loaded downhill damping is the issue — shocks that handle empty uphill driving may fail to control loaded downhill weight transfer. That asymmetry is a safety concern on canyon grades.',
        metaTitle: 'Shock Replacement Near Cottonwood Heights UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Cottonwood Heights ski-canyon drivers. Loaded canyon descents reveal shock weaknesses. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy SUV owners who use their vehicles for ski and camping trips should plan for rear shock inspection at 60,000 miles — recreational loading creates distinct wear patterns. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s suburban terrain is generally shock-friendly, but the eastern foothill areas near Bell Canyon have road sections with more surface variation. Sandy\'s population of trucks and SUVs — used for outdoor recreation and I-15 towing — sees above-average rear shock wear from recreational loading. The I-15 southbound lanes near Sandy also have pavement sections with surface repairs that create shock events at highway speed.',
        localTip: 'Sandy SUV owners who use their vehicles for ski and camping trips should plan for rear shock inspection at 60,000 miles. Recreational load cycling — full load for weekends, empty for commuting — creates wear patterns different from consistently loaded or consistently empty driving.',
        metaTitle: 'Shock Replacement Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Sandy drivers. Recreational load cycling creates distinct shock wear patterns. 8 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper towing on I-15 can trigger trailer sway that worn rear shocks make harder to control — a safety concern beyond ride comfort. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s SunCrest hillside creates daily shock demands from steep driveway exits and residential grade changes. The sustained downhill grade from SunCrest also requires shocks to control vehicle pitch continuously. Draper vehicles used for towing — common for boating access via I-15 — see rear shock wear from the dynamic weight transfer of trailer connections and from the grade changes on access roads.',
        localTip: 'Draper vehicles that tow on I-15 should have rear shocks inspected when the trailer generates noticeable body roll or sway in turns. Worn rear shocks allow trailer-induced sway to develop faster and are harder to correct once it starts.',
        metaTitle: 'Shock Replacement Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Draper drivers. I-15 towing and SunCrest hillside grades accelerate rear shock wear. 12 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s subdivision speed bumps are a leading cause of shock wear acceleration — daily traversal adds up faster than owners realize. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s subdivision speed bumps are a leading cause of shock wear acceleration in the community. Daily traversal of 50+ speed bumps adds up to significant shock wear over 2–3 years. West Jordan\'s truck and SUV population — often used with full passenger and cargo loads for suburban family activities — compounds this with load-based wear on top of the speed bump impacts.',
        localTip: 'West Jordan pickup truck owners who use their beds for regular hauling should treat rear shock replacement as a 3–4 year maintenance item rather than waiting for bounce or ride symptoms. Loaded shock wear is more gradual and harder to detect than unloaded wear.',
        metaTitle: 'Shock Replacement Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for West Jordan drivers. Subdivision speed bumps and truck loading both accelerate shock wear. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s large SUVs and Daybreak roundabouts create above-average lateral shock loading that smaller vehicles on grid streets don\'t produce. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s roundabout-heavy street design creates lateral shock loading from cornering that traditional grid streets don\'t. Shocks absorb side-load forces during roundabout traversal in addition to vertical road impacts. South Jordan\'s family vehicles — often larger SUVs and minivans — have higher unsprung weights that demand more from shock absorbers than smaller passenger cars.',
        localTip: 'Minivans and large SUVs in South Jordan have higher center-of-gravity mass that creates more body roll in roundabouts. If your vehicle leans noticeably in Daybreak\'s roundabouts, shock condition — and sometimes sway bar link wear — is the likely cause.',
        metaTitle: 'Shock Replacement Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for South Jordan drivers. Large SUVs and Daybreak roundabouts create lateral shock loading. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton trucks that tow boat trailers regularly need rear shock inspection every 2 years — towing loads create wear that mileage count alone doesn\'t capture. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s long Bangerter and I-15 commutes accumulate shock mileage at a pace that correlates directly with the annual driving total. High-mileage Riverton commuters should include shock inspection at major mileage milestones. Riverton\'s recreational vehicle and boat-trailering population also sees above-average rear shock wear from regular towing.',
        localTip: 'Riverton trucks that tow boat trailers regularly need rear shock inspection every 2 years regardless of mileage. Trailer towing creates shock loads at angles and speeds that mile-count alone doesn\'t capture.',
        metaTitle: 'Shock Replacement Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Riverton drivers. Boat trailer towing accelerates rear shock wear beyond mileage intervals. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s steep hillside driveways create front shock rebound events on every departure from home — a wear pattern not seen in flat-terrain communities. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman\'s hillside streets and steep driveways create vertical shock demands that flat-valley communities don\'t see. Daily driveway exits with steep grade changes fully compress front shocks and then rebound them sharply — an impact pattern that ages shock seals faster than flat-road driving. Herriman\'s Mountain View Corridor approaches also create high-speed shock events from pavement transitions.',
        localTip: 'If your Herriman vehicle\'s front shocks make a popping sound on steep driveway exits, the shock body is extending too quickly after the compression — a sign the damping rebound rate has been lost. That loss affects handling in lane-change maneuvers, not just on driveways.',
        metaTitle: 'Shock Replacement Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Herriman drivers. Steep hillside driveways create daily front shock compression events. 15 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns work vehicles that spend time on rough commercial surfaces and gravel should have shock condition inspected annually — not just at mileage milestones. We\'re 7 miles east — about 12 minutes.',
        localContent: 'Kearns\' flat commercial terrain produces shock wear that\'s primarily mileage-driven. Commercial vehicles in Kearns — plumbers, contractors, delivery services — see above-average rear shock wear from daily load cycles. Kearns\' older road sections also have surface deterioration that creates more impact events per mile than newer pavement.',
        localTip: 'Kearns work vehicles that spend significant time on rough commercial loading areas or gravel surfaces should have shock condition inspected annually — a rough surface can accelerate shock wear as much as mileage-based intervals suggest for smooth road use.',
        metaTitle: 'Shock Replacement Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Kearns drivers and commercial fleets. Commercial use and rough surfaces accelerate shock wear. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale\'s I-15/I-215 interchange ramps require shocks to control weight transfer and lateral load simultaneously — failed shocks are a real safety issue here. We\'re 5 miles north — about 8 minutes on State Street.',
        localContent: 'Midvale\'s I-15/I-215 interchange creates high-speed lateral and vertical shock demands that neighborhood driving doesn\'t replicate. Interchange ramp merges at highway speed require shocks to control both weight transfer under braking and lateral load from the curved ramp simultaneously. Midvale vehicles with failed shocks are noticeably harder to control on these ramps.',
        localTip: 'If your Midvale vehicle feels unstable or requires correction in the I-15/I-215 interchange ramps where it didn\'t before, have your shocks inspected before attributing the behavior to alignment or tires. Shock condition is the primary factor in ramp stability.',
        metaTitle: 'Shock Replacement Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Shock absorber replacement for Midvale drivers. I-15/I-215 interchange demands both vertical and lateral shock control. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'complete-auto-service': {
    serviceName: 'Complete Auto Service',
    serviceFullName: 'Complete Auto Service',
    mainSlug: 'complete-auto-service-near-south-salt-lake-ut',
    cities: {
      'sugar-house': {
        intro: 'Sugar House is 3 miles from our shop — close enough to drop off before class at Westminster University and pick up the same day. We\'re about 5 minutes down Highland Drive.',
        localContent: 'Sugar House drivers have access to our shop at just 3 miles from the neighborhood — close enough to drop off before a morning walk in Sugar House Park or a Westminster University class and pick up the same day. Sugar House\'s vehicle mix includes a higher proportion of imports and older vehicles than typical suburban communities. Our all-makes service history with Sugar House customers covers everything from routine oil changes to engine diagnostics on vehicles we\'ve maintained for over a decade.',
        localTip: 'If your Sugar House vehicle has been serviced at multiple shops over the years, bring your full service history if you have it — or ask us for a comprehensive inspection to establish a maintenance baseline. Knowing what\'s been done prevents duplication and catches what\'s been skipped.',
        metaTitle: 'Complete Auto Service Near Sugar House UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Sugar House drivers. All makes and models. 3 miles south, 5 min drive. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek\'s AWD vehicle mix needs more than standard maintenance — canyon-season prep combines brakes, fluid, and tires in one visit. We\'re 3 miles from Millcreek — about 7 minutes.',
        localContent: 'Millcreek\'s canyon-access vehicle mix includes AWD Subarus, 4WD trucks, and high-clearance vehicles that see more diverse maintenance needs than typical commuter cars. We service all of these alongside domestic and import daily drivers. Millcreek customers who bring vehicles for canyon-season prep appreciate combining fluid checks, brake inspection, and tire condition assessment in a single visit.',
        localTip: 'Canyon-season preparation is a practical reason to schedule a comprehensive vehicle inspection. Combine coolant, brake fluid, and tire tread assessment in one visit before summer hiking or fall ski prep to catch deferred maintenance at the right time.',
        metaTitle: 'Complete Auto Service Near Millcreek UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Millcreek drivers. AWD and canyon-access vehicles welcome. 3 miles from Millcreek. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray drivers appreciate a shop where the oil change appointment doesn\'t become a pressure-filled upsell conversation. We\'re 4 miles north — about 8 minutes on State Street.',
        localContent: 'Murray drivers appreciate a shop that handles everything from oil changes to engine diagnostics without the upsell pressure they\'ve encountered elsewhere. Our Murray customers often discover during an oil change that a second concern — an A/C that\'s been "just a little weak," a tire that\'s "probably fine" — actually needs attention. We check it during the visit and tell you honestly what it is.',
        localTip: 'If you\'ve been dismissing a minor symptom — a slight noise, a light that comes on occasionally, an A/C that\'s not quite right — bring it up during your next oil change. A quick inspection during a routine visit often resolves it cheaply before it becomes a dedicated repair visit.',
        metaTitle: 'Complete Auto Service Near Murray UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Murray drivers. Oil changes, diagnostics, A/C, and more. 4 miles north on State Street. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City\'s seasonal extremes create a logical maintenance rhythm — cooling system before summer, battery and heating before winter. We\'re 4 miles south — about 10 minutes on Highland Drive.',
        localContent: 'Salt Lake City\'s diverse vehicle population — from University of Utah student economy cars to Capitol Hill executive vehicles — means we see a wide range of maintenance needs. Salt Lake City\'s winter and summer extremes also create a clear seasonal maintenance rhythm: cooling system and A/C before summer, battery and wiper inspection before winter.',
        localTip: 'Salt Lake City\'s extreme temperature range from winter to summer is the best argument for seasonal maintenance visits. A cooling system check in April and a battery and heating system check in October catches the most common seasonal failures before they leave you stranded.',
        metaTitle: 'Complete Auto Service Near Salt Lake City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Salt Lake City drivers. All makes, seasonal maintenance, engine diagnostics. 4 miles south. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville working families need a shop that can confirm same-day completion before they drop off — the commute can\'t wait. We\'re 5 miles east — about 10 minutes on 4700 South.',
        localContent: 'Taylorsville\'s working families depend on their vehicles for everything — commute, errands, school runs, and weekend activities. Deferred maintenance on a Taylorsville commuter vehicle has real consequences when the vehicle can\'t be out of service for more than a day. Our Taylorsville customers value same-day turnaround on common maintenance and quick turnaround on repairs that keep their schedules intact.',
        localTip: 'If you commute on I-15 or I-215 from Taylorsville and can\'t afford a day without your vehicle, call ahead before dropping off. We\'ll tell you whether your job can be completed same-day so you can plan your schedule accordingly.',
        metaTitle: 'Complete Auto Service Near Taylorsville UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair for Taylorsville drivers. Oil changes, brake service, diagnostics. 5 miles east, same-day service on most maintenance. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City commercial fleet vehicles need a shop that understands work schedules and can handle multiple vehicles without dealership pricing. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City\'s commercial vehicle population — work trucks, service vans, fleet vehicles — needs maintenance that keeps up with heavy use schedules. We handle commercial vehicles alongside passenger cars with the same diagnostic rigor. West Valley business owners who need quick turnaround and honest assessment of fleet maintenance can consolidate vehicle service here without dealership fleet program overhead.',
        localTip: 'West Valley commercial fleet vehicles benefit from a consistent maintenance shop that knows each vehicle\'s history. Consolidated records make it easier to track what\'s been done and catch deferred items before they become roadside failures.',
        metaTitle: 'Complete Auto Service Near West Valley City UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair for West Valley City drivers and commercial fleets. All makes, honest assessments, no upsells. 7 miles east. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay drivers who value honest assessment over dealership pricing bring their well-maintained vehicles here — and appreciate that we also tell them what\'s fine and doesn\'t need attention. We\'re 5 miles north — about 9 minutes.',
        localContent: 'Holladay\'s vehicle mix leans toward higher-quality, well-maintained cars and trucks whose owners value honest assessment. Our Holladay customers typically come for specific repairs but often ask for a general inspection during the visit. We inspect what we can see and report honestly — including things that are fine and don\'t need attention yet.',
        localTip: 'Holladay drivers who maintain their vehicles well often find that a comprehensive inspection every 15,000–20,000 miles catches the 1–2 items that need attention while confirming everything else is in good shape. The inspection cost is usually returned in avoided repair costs.',
        metaTitle: 'Complete Auto Service Near Holladay UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Holladay drivers. Honest assessment, no upsells. 5 miles north on Highland Drive. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Cottonwood Heights vehicles need pre-season preparation before ski season — brakes, coolant, battery, and wiper blades matter more when you\'re driving a canyon in winter. We\'re 6 miles north — about 10 minutes.',
        localContent: 'Cottonwood Heights residents use their vehicles differently than flat-valley drivers — canyon access, ski season hauling, and year-round outdoor recreation create specific maintenance patterns. We\'re familiar with the wear patterns of canyon commuter vehicles and know what to inspect beyond the standard maintenance checklist. Cottonwood Heights customers appreciate preparation-oriented service rather than reactive repairs.',
        localTip: 'Bring your Cottonwood Heights vehicle in before ski season for a targeted pre-season check — brakes, coolant, wiper blades, and battery. The investment in a pre-season inspection is far less than the cost of a breakdown during a canyon winter drive.',
        metaTitle: 'Complete Auto Service Near Cottonwood Heights UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and canyon-season prep for Cottonwood Heights drivers. 6 miles north via Highland Drive. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy I-15 commuters should ask for brake and cooling system inspection at 60,000-mile service — freeway wear doesn\'t show up in the visual check that accompanies an oil change. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s large suburban community generates a wide range of maintenance needs from diverse vehicle types and ownership styles. Sandy customers who have moved away from dealer service often find our approach — comprehensive diagnosis, honest recommendations, no package upsells — is what they were looking for. Sandy vehicles with I-15 commutes also benefit from cooling system and brake inspections calibrated to freeway-intensity use.',
        localTip: 'Sandy I-15 commuters should ask for brake and cooling system inspection at 60,000-mile service intervals rather than relying on the standard oil-change inspection. Freeway commute wear on these systems doesn\'t always show up in the visual check that accompanies an oil change.',
        metaTitle: 'Complete Auto Service Near Sandy UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Sandy drivers. I-15 commuter service intervals. 8 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper drivers who research their vehicle\'s maintenance before coming in get straight answers — we explain what we found and why before any work begins. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'Draper\'s technically-oriented population is often well-informed about their vehicle\'s maintenance needs and appreciates shops that can explain diagnostic findings in detail. We welcome questions and explain what we found and why we recommend a specific repair before any work begins. Draper customers who want to understand their maintenance decisions rather than just approve them find our approach matches their expectations.',
        localTip: 'Draper drivers who research vehicle maintenance topics before a shop visit can bring specific questions — about service intervals, OEM versus aftermarket parts, or diagnostic codes — and get straight answers. We\'ll tell you what we know and what we don\'t.',
        metaTitle: 'Complete Auto Service Near Draper UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Draper drivers. Detailed explanations, honest answers, and thorough diagnostics. 12 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan families who schedule vehicle service during school breaks have the most flexibility and the fewest backup transportation challenges. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s family-focused community depends on reliable vehicles for school, sports, and weekend activities. We service everything from economy commuter cars to family SUVs to work trucks without specializing in any segment to the exclusion of others. West Jordan customers often schedule major services during school year breaks when vehicle-free time is most available.',
        localTip: 'West Jordan families who schedule vehicle service during school breaks have the most scheduling flexibility and the fewest backup transportation challenges. Winter break maintenance visits are particularly useful for addressing items identified during the fall driving season.',
        metaTitle: 'Complete Auto Service Near West Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for West Jordan families. All makes, school-break scheduling welcome. 8 miles northeast. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan vehicles transitioning out of manufacturer warranty need an independent shop they can trust before a repair situation forces the decision. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan\'s growing population includes many younger families with newer vehicles under warranty and older families with high-mileage vehicles past their warranty. We serve both segments — warranty-qualified repairs and out-of-warranty maintenance — without the overhead of dealership service pricing. South Jordan customers with newer vehicles often first come to us for an oil change and find we\'re a practical long-term alternative.',
        localTip: 'South Jordan vehicles transitioning out of manufacturer warranty are the right moment to establish a relationship with an independent shop. The first post-warranty major service is the highest-value time to find a shop you trust, before a repair situation forces the decision under stress.',
        metaTitle: 'Complete Auto Service Near South Jordan UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair for South Jordan drivers. Post-warranty service and ongoing maintenance for all makes. 10 miles north. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s 20-minute planned drive to our shop is far more convenient than a tow from Bangerter Highway after a preventable breakdown. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s distance from the valley\'s service shop concentration means long-distance towing if a vehicle breaks down far from home. We serve Riverton customers who make the planned 20-minute drive for maintenance rather than waiting until they need emergency roadside help. Riverton vehicles that see regular maintenance are also more reliable on the long Bangerter and I-15 commutes where breakdowns are most costly.',
        localTip: 'Riverton drivers who keep up with regular maintenance statistically have far fewer roadside breakdowns than those who defer service until something fails. The 20-minute planned drive to our shop is much more convenient than a tow from Bangerter Highway.',
        metaTitle: 'Complete Auto Service Near Riverton UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Riverton drivers. 12 miles northeast via Bangerter and I-15. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman is the fastest-growing city in Utah — and many residents drive 20 minutes to our shop because there aren\'t many local options with 35 years of experience. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman is the fastest-growing city in Utah, and many residents have limited local options for comprehensive automotive service. The 20-minute drive to our shop at 144 W Crystal Ave is shorter than residents might expect from the Valley\'s southwest corner, and our track record since 1990 offers something newer local shops don\'t yet have. Herriman customers who make the drive for major repairs often establish us as their primary shop for routine service as well.',
        localTip: 'Herriman residents who haven\'t found a shop they trust locally are often best served by making the 20-minute drive to a shop with a 35-year history. The relationship is worth the distance when it means honest assessments and work done right the first time.',
        metaTitle: 'Complete Auto Service Near Herriman UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair and maintenance for Herriman drivers. 15 miles northeast via Mountain View Corridor. Scott\'s Auto & Clutch Repair. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns drivers who\'ve been over-charged elsewhere should get a second opinion before authorizing major work — we\'ll give an honest estimate with no assumptions. We\'re 7 miles east — about 12 minutes on 5400 South.',
        localContent: 'Kearns drivers depend on their vehicles for work and family life without the backup options more affluent communities might have. We understand that vehicle repair here needs to be affordable and done right without surprise charges. Our Kearns customers get the same honest quote and straightforward service we provide to every customer — no assumptions about what someone can or can\'t afford, just an honest assessment of what the vehicle needs.',
        localTip: 'Kearns residents who have been over-charged or upsold at other shops should get a second opinion from us before authorizing major work. We\'ll inspect, diagnose, and give you a complete estimate so you can compare it to what you\'ve already been quoted.',
        metaTitle: 'Complete Auto Service Near Kearns UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair for Kearns drivers. Honest pricing, no upsells, second opinions welcome. 7 miles east on 5400 South. Scott\'s Auto. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale is 5 miles from our shop — the shortest drive of any community in the south valley, and Central Pointe TRAX is a 3-minute walk from our door. About 8 minutes on State Street.',
        localContent: 'Midvale drivers are 5 miles from our shop — closer than most valley communities. Midvale\'s proximity to TRAX Blue Line also makes drop-off and pickup practical without arranging alternate transportation. Midvale customers represent one of our highest concentrations of repeat business because the short drive makes it easy to come back rather than trying a different shop each time.',
        localTip: 'Midvale TRAX riders can drop off their vehicle at our shop and board the Blue Line at the nearby Central Pointe station for work or errands. When the vehicle is ready, the return trip is equally easy — no ride coordination needed.',
        metaTitle: 'Complete Auto Service Near Midvale UT | Scott\'s Auto & Clutch Repair',
        metaDesc: 'Complete auto repair for Midvale drivers. Closest major auto shop to Midvale, 5 miles on State Street. TRAX Blue Line drop-off and pickup. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'head-gasket-repair': {
    serviceName: 'Head Gasket Repair',
    serviceFullName: 'Head Gasket Repair & Replacement',
    mainSlug: 'head-gasket-repair-near-south-salt-lake-ut',
    hasLocalContext: true,
    cities: {
      'sugar-house': {
        intro: 'Sugar House\'s hilly terrain and stop-and-go on 1300 East put consistent thermal load on cooling systems. We\'re 3 miles south — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House\'s 1300 East corridor drops steeply from Westminster University toward the valley floor, and the dense stop-and-go on 2100 South means cooling systems cycle through heat-up and cool-down patterns that stress older hoses, thermostats, and gasket sealing surfaces. Many Sugar House vehicles — particularly older FWD sedans and compact SUVs — run cooling systems near capacity in summer without drivers noticing until a temperature gauge climbs or coolant begins disappearing without an obvious puddle.',
        localTip: 'If your temperature gauge climbs and then settles during stop-and-go on 1300 East, have the cooling system pressure-tested. A slow head gasket leak often shows up as intermittent overheating months before it becomes constant — and catching it early means less secondary damage to the cylinder head.',
        metaTitle: 'Head Gasket Repair Near Sugar House UT | Scott\'s Auto',
        metaDesc: 'Head gasket diagnosis and repair for Sugar House drivers. 3 miles south on Highland Drive. Free combustion gas test before any recommendation. Scott\'s Auto. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek\'s canyon access routes put cooling systems under sustained thermal stress that flat-valley driving never generates. We\'re 3 miles from Millcreek — about 7 minutes on 3300 South.',
        localContent: 'Millcreek residents who regularly access Big Cottonwood Canyon subject their cooling systems to sustained high-load conditions — climbing 1,000+ vertical feet over several miles at throttle positions that raise coolant temperature steadily. A cooling system that holds up on flat terrain often shows its weaknesses on canyon grades. Sustained climbing with A/C on in summer is one of the most common head gasket stress patterns we see from Millcreek vehicles, and it typically shows up first as a temperature gauge that runs slightly higher than it used to.',
        localTip: 'If your vehicle runs fine in Millcreek but the temperature gauge rises when climbing toward Big Cottonwood Canyon, that\'s a cooling system problem worth diagnosing before the gasket fails completely. Canyon grades reveal marginal cooling capacity that flat driving masks.',
        metaTitle: 'Head Gasket Repair Near Millcreek UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Millcreek drivers. Canyon access grades stress cooling systems hard. 3 miles from Millcreek. Free diagnosis before any work. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray\'s State Street commuting accumulates miles quickly — and high-mileage engines are where head gasket failures are most common. We\'re 4 miles north — about 8 minutes on State Street.',
        localContent: 'Murray commuters on State Street accumulate high annual mileage, and head gasket failures are far more common after 100,000 miles than before. Many Murray head gasket jobs we see started as a different symptom — slow coolant loss or an occasional temperature spike — that was deferred until it became a bigger problem. If you\'ve been adding coolant without finding a puddle, or your heater has started blowing lukewarm, those are the early signs worth diagnosing before white smoke appears.',
        localTip: 'Murray drivers: if you\'re topping off the coolant reservoir every few months without finding a visible leak, bring it in for a pressure test. A slow internal head gasket leak often shows up as unexplained coolant loss well before the oil turns milky or the exhaust smokes.',
        metaTitle: 'Head Gasket Repair Near Murray UT | Scott\'s Auto',
        metaDesc: 'Head gasket diagnosis and repair for Murray drivers. High-mileage State Street commuters see more gasket failures. 4 miles north. Free diagnosis. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'The Avenues\' steep grades and summer heat create cooling demands that stress aging gaskets faster than flat-valley driving. We\'re 4 miles south — about 10 minutes on Highland Drive.',
        localContent: 'Salt Lake City\'s Avenues neighborhood has some of the steepest residential grades in the valley. Residents who climb to Capitol Hill or the University area in summer — with A/C running at full load — put sustained thermal stress on cooling systems that flat-valley mechanics often don\'t anticipate. The combination of steep grades, stop-and-go at intersections, and high ambient temperatures creates a head gasket stress environment that Avenues vehicles see more of than their mileage would suggest.',
        localTip: 'Avenues drivers: if the temperature gauge climbs on the uphill sections of Virginia Street or 11th Avenue and settles on flat ground, have the cooling system inspected before summer. Grade climbing with A/C load in high heat is when marginal head gaskets reveal themselves.',
        metaTitle: 'Head Gasket Repair Near Salt Lake City UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Salt Lake City drivers. Avenues grades and summer heat stress cooling systems. 4 miles south. Free diagnosis. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville\'s I-215 and freeway commuting builds miles fast — and mileage is the most reliable predictor of head gasket failure. We\'re 5 miles east — about 10 minutes on 4700 South.',
        localContent: 'Taylorsville\'s wide arterials and I-215 access create high-mileage commuting patterns that wear cooling system components steadily over time. Head gasket failures on high-mileage Taylorsville vehicles often present first as slow coolant consumption — owners add a bottle every few months without seeing a puddle — before progressing to visible symptoms. We run a combustion gas block test and pressure test before recommending head gasket work. Sometimes it\'s the thermostat or a hose, which is a much quicker repair.',
        localTip: 'Taylorsville freeway commuters who\'ve logged 120,000+ miles should have coolant and oil checked for cross-contamination at every oil change. A slow head gasket leak often shows as unexplained coolant loss months before oil turns milky.',
        metaTitle: 'Head Gasket Repair Near Taylorsville UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Taylorsville drivers. High-mileage freeway commuters see more cooling system failures. 5 miles east. Free diagnosis. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City\'s commercial vehicle fleet and high-mileage work trucks make cooling system failures a common reason drivers call for towing. We\'re 7 miles east — about 12 minutes via I-215.',
        localContent: 'West Valley City\'s vehicle mix includes a higher proportion of high-mileage work vehicles and commercial trucks than most valley communities. These vehicles — often driven hard and maintained on extended intervals — see cooling system wear that accelerates head gasket stress. We emphasize this to West Valley drivers: a single full overheat can warp the cylinder head, turning a straightforward gasket job into a repair that also requires head resurfacing. Getting here before that happens costs significantly less.',
        localTip: 'Commercial vehicles and work trucks in West Valley should have cooling system inspections every 30,000 miles regardless of whether symptoms exist. A thermostat or hose that fails on the road leads to overheating — and one overheating event can turn a cheap repair into an expensive one.',
        metaTitle: 'Head Gasket Repair Near West Valley City UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for West Valley City drivers. High-mileage work vehicles need proactive cooling care. 7 miles east via I-215. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay\'s Highland Drive grades and Big Cottonwood Canyon access put cooling systems under the highest sustained thermal load in the valley. We\'re 5 miles north — about 9 minutes on Highland Drive.',
        localContent: 'Holladay vehicles that regularly access Big Cottonwood Canyon experience among the most demanding cooling conditions in the Salt Lake Valley. Long canyon climbs at sustained throttle raise coolant temperature steadily, and the descent afterward means the cooling system cycles through heat stress repeatedly in a single trip. Holladay vehicles used for canyon recreation often develop coolant issues — slow leaks, overflow tank pressure, intermittent temperature spikes — that point to a cooling system approaching failure. We see this pattern regularly from this area.',
        localTip: 'After a ski day or summer canyon drive, let your engine idle for a minute or two before shutting it off. Abrupt shutdown when coolant is hot can create localized hot spots that stress head gasket sealing surfaces over time — especially on aluminum-head engines.',
        metaTitle: 'Head Gasket Repair Near Holladay UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Holladay drivers near Big Cottonwood Canyon. Canyon grades and heat stress cooling systems. 5 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Little Cottonwood Canyon\'s grades make Cottonwood Heights vehicles among the most cooling-system-stressed in the valley — ski season adds cold-to-high-load thermal cycling on top of grade demands. We\'re 6 miles north — about 10 minutes on Highland Drive.',
        localContent: 'Cottonwood Heights residents who ski Snowbird or Alta subject their vehicles to a demanding thermal cycle: cold engine start in sub-zero canyon temperatures, immediate sustained grade climbing with full passenger and gear load, followed by idling in lift-line and canyon traffic. This cold-to-high-load cycling stresses head gasket sealing surfaces differently than city driving, and we see a pattern of cooling system failures on ski vehicles that correlates strongly with winter canyon mileage. Canyon traction restrictions mean vehicles often idle in stop-and-go traffic longer, adding to the thermal load.',
        localTip: 'Cold-start canyon climbing is harder on head gaskets than warm-engine driving. If you\'re heading to Little Cottonwood on a below-zero morning, let the engine fully reach operating temperature before sustained grade climbing. The gasket seals more consistently when coolant is fully up to temp.',
        metaTitle: 'Head Gasket Repair Near Cottonwood Heights UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Cottonwood Heights ski-canyon drivers. Cold-start canyon grades stress gaskets. 6 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy\'s summer heat, I-15 commuting, and foothill neighborhood grades combine to create above-average cooling system stress. We\'re 8 miles north — about 12 minutes on I-15.',
        localContent: 'Sandy\'s eastern neighborhoods sit at the base of the Wasatch foothills, and many residents climb Bell Canyon access roads or steep foothill streets daily. Summer temperatures in Sandy regularly hit the upper 90s while residents run A/C at full capacity — the combination of ambient heat, grade climbing, and A/C compressor load pushes cooling systems to their limits. We see Sandy vehicles most commonly when a temperature gauge that\'s been running slightly high finally crossed a threshold the owner couldn\'t ignore.',
        localTip: 'Sandy drivers: if your temperature gauge runs noticeably higher than it used to under the same conditions — A/C on in summer, freeway speed, or foothill grade — have the thermostat and cooling system pressure-tested. A sluggish thermostat often shows up as \'running warmer\' months before a full failure.',
        metaTitle: 'Head Gasket Repair Near Sandy UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Sandy drivers. Foothill grades and summer heat stress cooling systems. 8 miles north on I-15. Free diagnosis. Scott\'s Auto. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper\'s SunCrest elevation and Point of the Mountain I-15 grade create the most altitude-plus-grade cooling challenge in the south valley. We\'re 12 miles north — about 15 minutes on I-15.',
        localContent: 'SunCrest residents in Draper live at 5,200+ feet elevation, which slightly lowers coolant boiling points and compresses the thermal margin between normal operating temperature and overheating. The daily grade descent from SunCrest also means cooling systems that run warm on the climb have to manage coolant temperature through the descent as well. Draper\'s outdoor recreation vehicle population — towing boats and ATVs over the Point of the Mountain — adds towing-load cooling stress that accelerates wear on water pumps, hoses, and gasket sealing surfaces.',
        localTip: 'SunCrest residents should confirm their coolant mixture is rated to at least -34°F freeze protection — proper mixture also raises the boiling point. At elevation, maintaining correct coolant concentration is more important than at the valley floor because the thermal margin is already compressed.',
        metaTitle: 'Head Gasket Repair Near Draper UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Draper drivers. SunCrest elevation and I-15 grades stress cooling systems. 12 miles north. Free diagnosis. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan\'s suburban driving and Mountain View Corridor commutes make this one of our most common head gasket service areas south of the freeway. We\'re 8 miles northeast — about 12 minutes.',
        localContent: 'West Jordan\'s suburban driving pattern — long arterial commutes, school runs, and weekend recreational towing — creates consistent cooling system load without dramatic heat events. Head gasket failures here are almost always mileage-driven: the 100,000–150,000 mile range on vehicles driven for a decade or more. Many West Jordan residents keep the same vehicle for years, and the combination of age, accumulated mileage, and Utah\'s temperature extremes eventually takes a toll on cooling system integrity.',
        localTip: 'West Jordan vehicles in the 100,000–150,000 mile range should have coolant changed and the system pressure-tested as preventive maintenance. Aging coolant becomes acidic and attacks gasket sealing surfaces. A coolant service is far less expensive than the problem it prevents.',
        metaTitle: 'Head Gasket Repair Near West Jordan UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for West Jordan drivers. High-mileage suburban vehicles see more gasket failures. 8 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan\'s Bangerter Highway commutes and family vehicles accumulate high mileage — and head gasket failure risk rises significantly past 100,000 miles. We\'re 10 miles north — about 14 minutes on I-15.',
        localContent: 'South Jordan drivers on Bangerter Highway cover significant annual mileage at sustained highway speeds, and vehicles here are often kept in service well past 100,000 miles. We diagnose with a combustion gas block test and pressure test before recommending head gasket work — because sometimes what looks like a head gasket problem is a thermostat, water pump, or radiator cap, each of which is a much quicker and less expensive repair. If the gasket is the cause, we tell you clearly and explain exactly what the repair involves before proceeding.',
        localTip: 'South Jordan drivers: if your heater suddenly starts blowing lukewarm instead of hot, have the coolant system inspected. Low coolant from a slow internal head gasket leak is a common first sign — it shows up in heater performance before the temperature gauge climbs.',
        metaTitle: 'Head Gasket Repair Near South Jordan UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for South Jordan drivers. Bangerter commuters build miles fast — gasket risk rises past 100K. 10 miles north. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton\'s long commutes and recreational towing put sustained load on cooling systems that short urban trips never generate. We\'re 12 miles northeast — about 16 minutes.',
        localContent: 'Riverton\'s longer-distance commuters and outdoor recreation households put above-average annual mileage on their vehicles. Towing trailers and boats through summer heat on Bangerter Highway generates sustained high-load cooling demands that stress water pumps, hoses, and gasket surfaces. Riverton vehicles with 120,000+ miles that have never had a coolant service are among the most at-risk we see — aging coolant loses its additive package and allows corrosion inside the cooling passages, which attacks gasket sealing surfaces on aluminum-head engines over time.',
        localTip: 'Riverton residents who tow regularly: check your coolant at every oil change. Towing in summer heat degrades coolant faster than normal driving, and degraded coolant accelerates the corrosion that leads to gasket failures on aluminum-head engines.',
        metaTitle: 'Head Gasket Repair Near Riverton UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Riverton drivers. Long commutes and towing accelerate cooling system wear. 12 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman\'s hillside streets and Oquirrh Mountain terrain create grade-climbing cooling demands all year — particularly severe in summer when temperatures at the base of the foothills regularly exceed 100°F. We\'re 15 miles northeast — about 20 minutes.',
        localContent: 'Herriman\'s hillside residential streets can exceed 10% grade, and many residents climb from valley floor to their neighborhoods daily. Summer temperatures combined with sustained uphill driving put cooling systems under the kind of load that reveals marginal thermostats, aging hoses, and weakened gasket sealing surfaces. Herriman is also the fastest-growing city in Utah, which means many residents are driving older vehicles while managing new home expenses — and those higher-mileage vehicles are most likely candidates for head gasket issues.',
        localTip: 'Herriman residents with vehicles over 80,000 miles: if the temperature gauge climbs heading up the hill to your neighborhood in summer, don\'t wait to see if it settles. An intermittent overheat is easier and cheaper to address before it becomes a constant one — and a single full overheat can warp the cylinder head.',
        metaTitle: 'Head Gasket Repair Near Herriman UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Herriman drivers. Oquirrh Mountain grades and summer heat stress cooling systems. 15 miles northeast. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns vehicles tend to run high annual mileage on flat terrain — and mileage is the primary driver of head gasket failure regardless of driving style. We\'re 7 miles east — about 12 minutes on 5400 South.',
        localContent: 'Kearns drivers accumulate miles on flat residential and commercial streets rather than canyon grades, which means head gasket failures here are almost always mileage-driven and chemistry-driven rather than heat-event-driven. Vehicles in the 120,000–180,000 mile range where coolant hasn\'t been changed on schedule develop acidic coolant chemistry that slowly attacks gasket sealing surfaces and corrodes the inside of aluminum cylinder heads. We see this pattern regularly from Kearns and diagnose it systematically before recommending anything.',
        localTip: 'Kearns drivers: coolant should be changed every 5 years or 60,000 miles regardless of color or how the vehicle is running. Coolant color doesn\'t indicate acidity. A $15 test strip from any auto parts store can tell you whether your coolant is still protecting the engine or slowly attacking it.',
        metaTitle: 'Head Gasket Repair Near Kearns UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Kearns drivers. High-mileage vehicles fail from aging coolant chemistry. 7 miles east on 5400 South. Free diagnosis. Scott\'s Auto. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale is 5 miles from our shop — and Central Pointe TRAX makes the drop-off simple if your vehicle can\'t safely be driven. About 8 minutes on State Street.',
        localContent: 'Midvale\'s vehicle population — a mix of high-mileage daily drivers and older import vehicles — sees head gasket failures at a predictable rate as vehicles age past 100,000 miles. TRAX access from Midvale makes our shop practical even when a vehicle can\'t safely be driven: board the Blue Line at Midvale stop, ride one stop to Central Pointe Station, and walk 3 minutes east. Drop off the car before work and we\'ll call you with what we found.',
        localTip: 'Midvale TRAX riders: if your car is overheating or showing white smoke, don\'t drive it to the shop — driving an overheating engine risks serious damage. Call us first. Repairs over $1,000 include free towing, so getting your vehicle here safely won\'t cost you extra.',
        metaTitle: 'Head Gasket Repair Near Midvale UT | Scott\'s Auto',
        metaDesc: 'Head gasket repair for Midvale drivers. 5 miles north on State Street — TRAX Blue Line drop-off. Free diagnosis before any work. Scott\'s Auto. (801) 485-4089.'
      }
    }
  },

  'lift-leveling-kit-installation': {
    serviceName: 'Lift & Leveling Kits',
    serviceFullName: 'Lift & Leveling Kit Installation',
    mainSlug: 'lift-leveling-kit-installation-near-south-salt-lake-ut',
    hasLocalContext: true,
    cities: {
      'sugar-house': {
        intro: 'Sugar House truck owners looking to level or lift are 3 miles north — about 5 minutes down Highland Drive.',
        localContent: 'Sugar House sits right at the mouth of Parleys Canyon, making it a natural launch point for runs up I-80 into the Wasatch. Trucks headed to Park City, Emigration Canyon, or the Bonneville Shoreline Trail benefit from a proper lift that clears larger all-terrain tires. The neighborhood\'s mix of canyon access and urban driving makes a leveling kit a practical everyday upgrade.',
        localTip: 'If you\'re running Parleys Canyon regularly, a 2-inch leveling kit paired with 285/70R17s gives clearance without sacrificing highway stability — confirm alignment specs after install.',
        metaTitle: 'Lift & Leveling Kit Near Sugar House UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Sugar House trucks — 3 miles, 5 min. Parleys Canyon ready. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'millcreek': {
        intro: 'Millcreek drivers are just 3 miles and about 7 minutes from our shop on Crystal Ave.',
        localContent: 'With Millcreek Canyon Road in the neighborhood, lifted trucks here earn their keep year-round on snow-packed switchbacks and rocky summer trails. The canyon\'s corridor opens up to Wasatch backcountry that rewards rigs with proper ground clearance. Millcreek\'s truck culture leans toward capable, trail-ready builds rather than purely cosmetic lifts.',
        localTip: 'Millcreek Canyon\'s tight switchbacks favor a 3- to 4-inch lift over a taller setup — you keep the clearance you need without adding excessive body roll on those narrow canyon curves.',
        metaTitle: 'Lift & Leveling Kit Near Millcreek UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Millcreek trucks — 3 miles, 7 min. Millcreek Canyon ready. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'murray': {
        intro: 'Murray truck owners are 4 miles north of our shop — a straight shot up State Street in about 8 minutes.',
        localContent: 'Murray sits between the Jordan River corridor and quick I-215 access to the Cottonwood Canyons, making it a hub for trucks that pull double duty on commutes and weekend trail runs. Drivers heading south toward Sandy or Draper trailheads benefit from the added clearance on rougher canyon approach roads. A leveling kit is among the most common same-day jobs we do for Murray truck owners.',
        localTip: 'Murray\'s easy freeway access means many owners opt for a leveling kit plus mild all-terrain tires — a balanced setup that handles I-215 on-ramps and canyon roads without a harsh daily ride.',
        metaTitle: 'Lift & Leveling Kit Near Murray UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Murray trucks — 4 miles, 8 min. Cottonwood Canyon access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'salt-lake-city': {
        intro: 'Salt Lake City trucks heading to our shop are just 4 miles south on State Street — roughly 10 minutes from most neighborhoods.',
        localContent: 'Salt Lake City is the gateway to some of Utah\'s most-used off-road corridors, including the Bonneville Shoreline Trail along the base of the Wasatch and I-80 access to the Uintas. City trucks that double as weekend rigs — hauling gear up Emigration Canyon or heading into the backcountry — benefit from a lift that doesn\'t compromise daily driving. Central Pointe TRAX is a 3-minute walk from our shop if you\'d rather drop the truck and take transit.',
        localTip: 'For SLC trucks that see Bonneville Shoreline\'s rocky approaches, a front leveling kit with a quality shock upgrade handles the pavement-to-dirt transition better than a basic spacer alone.',
        metaTitle: 'Lift & Leveling Kit Near Salt Lake City UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for SLC trucks — 4 miles, 10 min. Bonneville Trail & canyon access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'taylorsville': {
        intro: 'Taylorsville drivers are 5 miles and about 10 minutes from our shop via Redwood Road or Bangerter Highway.',
        localContent: 'Taylorsville trucks have quick access to both the Oquirrh Mountain foothills to the west and the Cottonwood Canyons corridor to the east — a range of terrain that rewards a capable lift setup. The area\'s truck culture prioritizes functional builds: leveling kits, quality all-terrain tires, and alignment specs that hold up under load. Weekend runs toward Ophir Canyon or the Tooele Valley trails are common among Taylorsville owners.',
        localTip: 'If you\'re towing or hauling regularly out of Taylorsville, consider a leveling kit matched with upgraded front struts — it corrects nose-dive under load and keeps headlights properly aimed.',
        metaTitle: 'Lift & Leveling Kit Near Taylorsville UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Taylorsville trucks — 5 miles, 10 min. Oquirrh access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'west-valley-city': {
        intro: 'West Valley City is 7 miles from our shop — about 12 minutes up Redwood Road or via I-215.',
        localContent: 'West Valley City trucks have a straight shot toward the Oquirrh Mountains, where OHV trails near Bacchus Highway and the western valley foothills offer year-round riding. The city\'s large truck-owning population includes contractors and tradespeople who want the function of a leveled truck for both work sites and weekend use. Proximity to the Tooele County trail network makes a proper lift kit a practical investment rather than just a cosmetic one.',
        localTip: 'West Valley contractors running heavy payloads should pair a leveling kit with a rear add-a-leaf or helper spring — keeps the truck level under load and protects the suspension long-term.',
        metaTitle: 'Lift & Leveling Kit Near West Valley UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for West Valley trucks — 7 miles, 12 min. Oquirrh Mountain access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'holladay': {
        intro: 'Holladay truck owners are 5 miles from our shop — about 9 minutes down Highland Drive.',
        localContent: 'Holladay sits at the base of the Wasatch with direct access to Big Cottonwood Canyon just minutes away, making it one of the valley\'s best-positioned neighborhoods for year-round trail driving. Trucks here regularly run the canyon road up to Solitude and Brighton in winter, where clearance and all-terrain tires matter on packed snow and ice. The neighborhood supports builds ranging from cosmetic leveling kits to full 4- to 6-inch suspension lifts.',
        localTip: 'Holladay trucks headed up Big Cottonwood Canyon should confirm towing specs after a lift install — tongue weight changes with suspension geometry and affects canyon braking performance when towing.',
        metaTitle: 'Lift & Leveling Kit Near Holladay UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Holladay trucks — 5 miles, 9 min. Big Cottonwood Canyon ready. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'cottonwood-heights': {
        intro: 'Cottonwood Heights is 6 miles from our shop — about 10 minutes via Fort Union Boulevard.',
        localContent: 'Cottonwood Heights is the gateway to both Big and Little Cottonwood Canyons, two of Utah\'s most-traveled mountain corridors for skiing, hiking, and Wasatch backcountry access. Trucks here face steep canyon grades, winter traction demands, and occasional rough forest service roads — all conditions where a proper lift and all-terrain tires pay dividends. The city\'s outdoor-oriented population skews toward capable, trail-ready builds.',
        localTip: 'After a lift install for Cottonwood Heights canyon driving, get a four-wheel alignment — canyon switchbacks and off-camber roads accelerate tire wear fast if your angles are even slightly off.',
        metaTitle: 'Lift & Leveling Kit Near Cottonwood Heights UT | Scott\'s',
        metaDesc: 'Lift & leveling kit installation near Cottonwood Heights — 6 miles, 10 min. Big & Little Cottonwood access. Scott\'s Auto. (801) 485-4089.'
      },
      'sandy': {
        intro: 'Sandy truck owners are 8 miles from our shop — about 12 minutes north on I-15 or State Street.',
        localContent: 'Sandy anchors the south end of the Salt Lake Valley with direct access to Little Cottonwood Canyon and quick connections to the Corner Canyon trail system in Draper. The area\'s active outdoor community keeps demand high for trucks that handle rocky Wasatch approach roads and carry gear for backcountry trips. Sandy is also a popular starting point for Uinta-bound rigs hauling ATVs or boats — setups that benefit from a leveled stance and proper rear suspension support.',
        localTip: 'Sandy rigs headed to Little Cottonwood should confirm rim backspacing before purchasing tires for a new lift — the wrong offset causes rubbing on canyon approaches where the suspension is at full travel.',
        metaTitle: 'Lift & Leveling Kit Near Sandy UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Sandy trucks — 8 miles, 12 min. Little Cottonwood Canyon access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'draper': {
        intro: 'Draper drivers are 12 miles from our shop — about 15 minutes north on I-15.',
        localContent: 'Draper sits at the foot of the Wasatch with the Corner Canyon trail system — a world-class OHV and mountain biking network — practically in the backyard. SunCrest residents and Point of the Mountain commuters regularly deal with steep winding roads that reward trucks with solid ground clearance. Draper\'s outdoor-focused population means lifted trucks and leveled SUVs are among the most common rigs on local roads.',
        localTip: 'Corner Canyon\'s rocky doubletrack is tough on stock suspension — if you\'re running it regularly, invest in a quality lift kit with upgraded shocks rather than a budget spacer kit that transfers all the impact directly to factory struts.',
        metaTitle: 'Lift & Leveling Kit Near Draper UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Draper trucks — 12 miles, 15 min. Corner Canyon & SunCrest ready. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'west-jordan': {
        intro: 'West Jordan truck owners are 8 miles from our shop — about 12 minutes via Bangerter Highway.',
        localContent: 'West Jordan gives truck owners easy access to Oquirrh Mountain OHV trails and the expansive terrain stretching toward Tooele County. The city has a strong working-truck culture, with landscaping, construction, and trades rigs that benefit from leveling kits to support payload and improve approach angles on job sites. Weekend trail runners head west toward Ophir Canyon and the Tooele Valley network where a proper lift makes a real difference.',
        localTip: 'West Jordan contractors: a 2-inch leveling kit corrects the factory rake and lets you run a full-size spare under the bed without dragging — a practical win for both work and trail use.',
        metaTitle: 'Lift & Leveling Kit Near West Jordan UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for West Jordan trucks — 8 miles, 12 min. Oquirrh Mountain access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'south-jordan': {
        intro: 'South Jordan is 10 miles from our shop — about 14 minutes north via Bangerter or Redwood Road.',
        localContent: 'South Jordan\'s neighborhoods push right up against the Oquirrh foothills, with quick access to the Jordan River Parkway and western valley OHV areas. The city\'s outdoors-oriented demographic supports strong demand for full suspension lift kits — rigs here are often loaded with overlanding gear and tow trailers to Uinta trailheads. Nearby access to SR-111 and Bacchus Highway opens up Tooele County\'s extensive off-road network.',
        localTip: 'South Jordan overland builds heading toward the Uintas often run heavy — confirm your lift kit\'s load rating matches your payload and tongue weight before the install, especially on three-quarter-ton trucks.',
        metaTitle: 'Lift & Leveling Kit Near South Jordan UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for South Jordan trucks — 10 miles, 14 min. Oquirrh & Uinta access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'riverton': {
        intro: 'Riverton truck owners are 12 miles from our shop — about 16 minutes north on Bangerter Highway.',
        localContent: 'Riverton sits at the southwest corner of the Salt Lake Valley with broad access to Oquirrh Mountain trails, the Bingham Canyon area, and the southern Jordan River corridor. The city\'s outdoor recreation culture means pickups here often pull horse trailers or haul ATVs, making proper suspension leveling both a functional and safety upgrade. Drivers also have easy access to SR-68 corridors heading into backcountry areas near the Tooele County line.',
        localTip: 'Riverton truck owners towing horse trailers: get a post-lift alignment and consider whether your hitch height changed — a leveling kit can affect hitch angle and trailer sway on highway runs.',
        metaTitle: 'Lift & Leveling Kit Near Riverton UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Riverton trucks — 12 miles, 16 min. Oquirrh trail access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'herriman': {
        intro: 'Herriman is 15 miles from our shop — about 20 minutes north via Bangerter Highway.',
        localContent: 'Herriman sits in the shadow of the Oquirrh Mountains with some of the most direct residential access to off-road terrain in the Salt Lake Valley — the foothills start practically at the edge of several neighborhoods. The city\'s newer developments attract families with trucks and SUVs geared toward active outdoor lifestyles, and the nearby Oquirrh Mountain OHV trails see heavy use from Herriman residents. SR-111 provides a natural corridor toward Tooele County\'s expansive backcountry riding areas.',
        localTip: 'Herriman\'s Oquirrh foothills involve loose shale and steep grades — a full suspension lift with a quality shock package handles that terrain far better than a leveling kit alone on rough descents.',
        metaTitle: 'Lift & Leveling Kit Near Herriman UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Herriman trucks — 15 miles, 20 min. Oquirrh Mountain trails. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'kearns': {
        intro: 'Kearns drivers are 7 miles from our shop — about 12 minutes via 4700 South or Redwood Road.',
        localContent: 'Kearns sits in the heart of the west valley with quick access to Bangerter Highway and the Oquirrh Mountain foothills to the west. The neighborhood has a strong working-class truck culture, and many owners use their rigs for daily commuting and weekend recreation in the Tooele Valley and Oquirrh Mountain OHV areas. The nearby inland port and industrial west side also means a high concentration of contractor trucks that benefit from leveling kits for improved payload stance.',
        localTip: 'Kearns trucks running west toward Tooele on SR-201 deal with highway debris regularly — a leveling kit that allows a taller all-terrain tire adds both clearance and puncture resistance on those rough corridors.',
        metaTitle: 'Lift & Leveling Kit Near Kearns UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Kearns trucks — 7 miles, 12 min. Oquirrh & Tooele access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      },
      'midvale': {
        intro: 'Midvale truck owners are just 5 miles from our shop — about 8 minutes up State Street or I-15.',
        localContent: 'Midvale sits between the Jordan River corridor and the I-215 interchange that feeds directly into the Cottonwood Canyons, giving truck owners fast access to both urban trails and serious Wasatch backcountry. The city\'s central location in the south valley makes it a natural gathering point for off-road groups that run routes east into the canyons and west toward the Oquirrh OHV areas. Midvale\'s mix of working trucks and newer capable pickups keeps demand steady for both basic leveling kits and full suspension lifts.',
        localTip: 'Midvale\'s easy Cottonwood Canyon access means your new lift will see real canyon miles quickly — schedule an alignment check within the first 500 miles after install to catch any settling before it affects tire wear.',
        metaTitle: 'Lift & Leveling Kit Near Midvale UT | Scott\'s Auto',
        metaDesc: 'Lift & leveling kit installation for Midvale trucks — 5 miles, 8 min. Cottonwood Canyon access. Written estimate. Scott\'s Auto. (801) 485-4089.'
      }
    }
  }

};

// ─── Title templates (one per service; all ≤60 chars for every city name) ─────
// Verified against the longest city: "Cottonwood Heights" (18 chars).
const TITLE_TEMPLATES = {
  'brake-service':                "Brake Service Near {{CITY}} UT | Pads & Rotors",
  'cv-joint-repair':              "CV Joint Repair Near {{CITY}} UT | Scott's Auto",
  'timing-chain-repair':          "Timing Chain Repair Near {{CITY}} UT | Scott's",
  'water-pump-replacement':       "Water Pump Replacement Near {{CITY}} UT | Scott's",
  'exhaust-repair':               "Exhaust Repair Near {{CITY}} UT | Muffler & Pipe",
  'catalytic-converter-service':  "Catalytic Converter Near {{CITY}} UT | Scott's",
  'strut-replacement':            "Strut Replacement Near {{CITY}} UT | Scott's Auto",
  'timing-belt-replacement':      "Timing Belt Replacement Near {{CITY}} UT | Scott's",
  'welding-services':             "Auto Welding Near {{CITY}} UT | Scott's Auto",
  'shock-replacement':            "Shock Replacement Near {{CITY}} UT | Scott's Auto",
  'complete-auto-service':        "Complete Auto Service Near {{CITY}} UT | Scott's",
  'head-gasket-repair':           "Head Gasket Repair Near {{CITY}} UT | Scott's Auto",
  'lift-leveling-kit-installation': "Lift & Leveling Kit Near {{CITY}} UT | Scott's Auto",
};

// Trim descriptions over 160 chars: shorten brand name first, then truncate.
function normalizeDesc(desc) {
  if (!desc || desc.length <= 160) return desc;
  const d = desc.replace("Scott's Auto & Clutch Repair", "Scott's Auto");
  return d.length <= 160 ? d : d.slice(0, 157) + '\u2026';
}

// ─── Generator ────────────────────────────────────────────────────────────────
const serviceGeoPages = [];

Object.entries(CONTENT).forEach(([serviceKey, svc]) => {
  const tmpl = TITLE_TEMPLATES[serviceKey] || (svc.serviceName + " Near {{CITY}} UT | Scott's Auto");
  CITIES.forEach(city => {
    const c = svc.cities[city.slug];
    if (!c) return; // skip if no content defined
    serviceGeoPages.push({
      slug: `${serviceKey}-near-${city.slug}-ut`,
      serviceKey,
      mainServiceSlug: svc.mainSlug,
      serviceName: svc.serviceName,
      serviceFullName: svc.serviceFullName,
      hasLocalContext: !!svc.hasLocalContext,
      locationName: city.name,
      citySlug: city.slug,
      distance: city.distance,
      driveTime: city.driveTime,
      heading: `${svc.serviceFullName} Near ${city.name}, UT`,
      intro: c.intro,
      localContent: c.localContent,
      localTip: c.localTip,
      directions: city.directions,
      logisticsNote: city.logisticsNote || null,
      landmarks: city.landmarks || null,
      processNote: city.processNote || null,
      whyChooseUs: city.whyChooseUs || null,
      metaTitle: tmpl.replace('{{CITY}}', city.name),
      metaDesc: normalizeDesc(c.metaDesc)
    });
  });
});

module.exports = serviceGeoPages;
