const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const path = require('path');

// Data
const site = require('./data/site');
const services = require('./data/services');
const locations = require('./data/locations');
const symptoms = require('./data/symptoms');
const vehicleBrands = require('./data/vehicleBrands');
const { getContent: getBrandContent } = require('./data/vehicleBrandContent');
const { serviceFaqs, getSymptomFaqs, getLocationFaqs, getGeoFaqs } = require('./data/pageFaqs');
const { getLocationSeoContent } = require('./data/locationSeoContent');
const geoPages = require('./data/geoPages');
const allReviews = require('./data/reviews.json');

// Pick N random reviews and format them for the testimonials partial
function pickReviews(count) {
  const shuffled = allReviews.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(r => ({
    name: r.author,
    initial: r.author.charAt(0).toUpperCase(),
    quote: r.text
  }));
}

// Shared LocalBusiness entity — referenced on every inner page so Google
// can tie every URL back to the physical shop without re-crawling the homepage.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": site.domain + "/#business",
  "name": site.name,
  "url": site.domain,
  "telephone": site.phone,
  "priceRange": "$$",
  "foundingDate": "1990",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": site.address,
    "addressLocality": site.city,
    "addressRegion": site.state,
    "postalCode": site.zip,
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7183,
    "longitude": -111.8883
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:30" }
  ]
};

const app = express();
const PORT = process.env.PORT || 3000;
const CSS_VER = Date.now();

// Middleware
app.use(compression());
app.use(helmet({
  contentSecurityPolicy: false, // Allow Google Fonts etc.
  crossOriginEmbedderPolicy: false,
}));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Shared locals (available in all templates)
app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.cssVer = CSS_VER;
  res.locals.services = services;
  res.locals.allLocations = locations;
  res.locals.allSymptoms = symptoms;
  res.locals.allVehicleBrands = vehicleBrands;
  res.locals.allGeoPages = geoPages;
  next();
});

// Favicon
app.get('/favicon.ico', (req, res) => res.redirect(301, '/assets/scotts-logo.svg'));

// ============================
// Trailing Slash Redirect (301 Permanent)
// Ensures /path/ always redirects to /path to prevent duplicate content
// ============================

app.use((req, res, next) => {
  if (req.path.length > 1 && req.path.endsWith('/')) {
    const clean = req.path.slice(0, -1);
    const q = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
    // Prevent open redirect: reject any path that starts with // (scheme-relative URL)
    if (!clean.startsWith('//')) {
      return res.redirect(301, clean + q);
    }
  }
  next();
});

// ============================
// Legacy URL Redirects (301 Permanent)
// Handles old React-site URL patterns that Google may have indexed
// ============================

app.use((req, res, next) => {
  const p = req.path;

  // Old symptom pattern: /symptoms/{slug}-repair-south-salt-lake
  const symptomMatch = p.match(/^\/symptoms\/(.+)-repair-south-salt-lake$/);
  if (symptomMatch) {
    return res.redirect(301, '/symptoms/' + symptomMatch[1]);
  }

  // Old service pattern: /services/{slug}-south-salt-lake-ut (missing -near-)
  // e.g. /services/clutch-repair-south-salt-lake-ut → /services/clutch-repair-near-south-salt-lake-ut
  const serviceOldMatch = p.match(/^\/services\/(.+)-south-salt-lake-ut$/) ;
  if (serviceOldMatch && !p.includes('-near-south-salt-lake-ut')) {
    return res.redirect(301, '/services/' + serviceOldMatch[1] + '-near-south-salt-lake-ut');
  }

  // Old location pattern: /locations/{slug}-auto-repair-near-{city} or similar variants
  const locationNearMatch = p.match(/^\/locations\/(.+)-near-(.+)$/);
  if (locationNearMatch) {
    return res.redirect(301, '/locations/' + locationNearMatch[1]);
  }

  // Old React site /makes/:make pattern → /vehicle-brands/:make-repair-salt-lake-city-ut
  const makesMatch = p.match(/^\/makes\/([^/]+)$/);
  if (makesMatch) {
    const slug = makesMatch[1].toLowerCase() + '-repair-salt-lake-city-ut';
    const brand = vehicleBrands.find(b => b.slug === slug);
    return res.redirect(301, brand ? '/vehicle-brands/' + slug : '/vehicle-brands');
  }

  next();
});

// ============================
// Routes
// ============================

// Home
app.get('/', (req, res) => {
  res.render('home', {
    activePage: 'home',
    metaTitle: "Auto Repair Salt Lake City | Scott's Auto & Clutch",
    metaDesc: "Family-owned South Salt Lake shop. Clutch, brakes, transmission, and full service for all makes and models. Free estimates. (801) 485-4089.",
    canonical: '/',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": site.domain + "/#business",
      "name": site.name,
      "alternateName": "SLC Auto Shop",
      "image": site.domain + site.heroImage,
      "logo": site.domain + "/assets/logo.webp",
      "telephone": site.phone,
      "url": site.domain,
      "priceRange": "$$",
      "foundingDate": "1990",
      "description": "Family-owned auto repair shop in South Salt Lake since 1990. Brakes, clutch, transmission, engine, exhaust, and full service for all makes and models.",
      "slogan": "Honest diagnostics since 1990.",
      "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
      "currenciesAccepted": "USD",
      "knowsAbout": [
        "Clutch repair and replacement",
        "Manual transmission service",
        "Brake repair",
        "CV joint and axle repair",
        "Timing chain replacement",
        "Timing belt replacement",
        "Water pump replacement",
        "Exhaust repair",
        "Catalytic converter service",
        "Strut and shock replacement",
        "Automotive welding",
        "Engine diagnostics",
        "Emissions testing and repair"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": site.address,
        "addressLocality": site.city,
        "addressRegion": site.state,
        "postalCode": site.zip,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.7183,
        "longitude": -111.8883
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "17:30" }
      ],
      "areaServed": [
        { "@type": "City", "name": "South Salt Lake" },
        { "@type": "City", "name": "Salt Lake City" },
        { "@type": "City", "name": "Murray" },
        { "@type": "City", "name": "Millcreek" },
        { "@type": "City", "name": "Sugar House" },
        { "@type": "City", "name": "West Valley City" },
        { "@type": "City", "name": "Taylorsville" },
        { "@type": "City", "name": "Sandy" },
        { "@type": "City", "name": "Draper" },
        { "@type": "City", "name": "West Jordan" },
        { "@type": "City", "name": "South Jordan" },
        { "@type": "City", "name": "Riverton" },
        { "@type": "City", "name": "Herriman" },
        { "@type": "City", "name": "Holladay" },
        { "@type": "City", "name": "Cottonwood Heights" },
        { "@type": "City", "name": "Midvale" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5",
        "ratingCount": "150"
      },
      "sameAs": []
    },
    pageTestimonials: pickReviews(4 + Math.floor(Math.random() * 3))
  });
});

// About
app.get('/about', (req, res) => {
  res.render('about', {
    activePage: 'about',
    metaTitle: "About Scott's Auto & Clutch | Our Story, Team, and Shop",
    metaDesc: "Meet the family behind our shop. 36+ years keeping Salt Lake Valley drivers on the road with straight answers, careful work, and no surprises at checkout.",
    canonical: '/about',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Scott's Auto and Clutch",
        "url": site.domain + "/about",
        "description": "Family-owned auto repair shop in South Salt Lake since 1990. Honest diagnosis, fair pricing, quality work for all makes and models.",
        "mainEntity": {
          "@type": "AutoRepair",
          "@id": site.domain + "/#business",
          "name": site.name,
          "foundingYear": String(site.founded),
          "telephone": site.phone,
          "address": { "@type": "PostalAddress", "streetAddress": site.address, "addressLocality": site.city, "addressRegion": site.state, "postalCode": site.zip, "addressCountry": "US" }
        }
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": site.domain + "/about" }
      ]}
    ]
  });
});

// Contact
app.get('/contact', (req, res) => {
  res.render('contact', {
    activePage: 'contact',
    metaTitle: "Contact Us | Scott's Auto & Clutch in South Salt Lake",
    metaDesc: "Call, text, or visit for a free estimate. Located at 144 W Crystal Ave, open Mon–Fri 8 to 5:30. Walk-ins welcome. Reach us at (801) 485-4089.",
    canonical: '/contact',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Scott's Auto and Clutch",
        "url": site.domain + "/contact",
        "mainEntity": {
          "@type": "AutoRepair",
          "@id": site.domain + "/#business",
          "name": site.name,
          "telephone": site.phone,
          "openingHours": "Mo-Fr 08:00-17:30",
          "address": { "@type": "PostalAddress", "streetAddress": site.address, "addressLocality": site.city, "addressRegion": site.state, "postalCode": site.zip, "addressCountry": "US" }
        }
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Contact", "item": site.domain + "/contact" }
      ]}
    ]
  });
});

// Services Index
app.get('/services', (req, res) => {
  res.render('services-index', {
    activePage: 'services',
    metaTitle: "Auto Repair Services Salt Lake City | Scott's Auto & Clutch",
    metaDesc: "Full-service mechanic work in South Salt Lake. From oil changes to clutch replacement, drivetrain, exhaust, cooling, and suspension. All makes, one shop.",
    canonical: '/services',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Auto Repair Services at Scott's Auto & Clutch",
        "url": site.domain + "/services",
        "itemListElement": services.map((s, i) => ({
          "@type": "ListItem", "position": i + 1, "name": s.name, "url": site.domain + "/services/" + s.slug
        }))
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": site.domain + "/services" }
      ]}
    ]
  });
});

// Service Detail
app.get('/services/:slug', (req, res) => {
  const service = services.find(s => s.slug === req.params.slug);

  // Check geo pages for clutch repair
  if (!service) {
    const geo = geoPages.find(g => g.slug === req.params.slug);
    if (geo) {
      const clutchService = services.find(s => s.slug === 'clutch-repair-near-south-salt-lake-ut');
      return res.render('geo-clutch', {
        activePage: 'services',
        metaTitle: geo.metaTitle,
        metaDesc: geo.metaDesc,
        canonical: '/services/' + geo.slug,
        geo,
        clutchService,
        pageFaqs: getGeoFaqs(geo),
        faqTitle: 'Frequently Asked Questions — Clutch Repair Near ' + geo.locationName,
        pageTestimonials: pickReviews(1 + Math.floor(Math.random() * 2)),
        structuredData: [
          businessSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
              { "@type": "ListItem", "position": 2, "name": "Services", "item": site.domain + "/services" },
              { "@type": "ListItem", "position": 3, "name": "Clutch Repair Near " + geo.locationName, "item": site.domain + "/services/" + geo.slug }
            ]
          }
        ]
      });
    }
    return res.status(404).render('404', { metaTitle: 'Page Not Found' });
  }

  const relatedServices = service.relatedSlugs
    ? service.relatedSlugs.map(slug => services.find(s => s.slug === slug)).filter(Boolean)
    : [];

  const schemaList = [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.fullName,
        "description": service.intro,
        "provider": {
          "@type": "AutoRepair",
          "name": site.name,
          "telephone": site.phone,
          "address": { "@type": "PostalAddress", "streetAddress": site.address, "addressLocality": site.city, "addressRegion": site.state, "postalCode": site.zip, "addressCountry": "US" }
        },
        "areaServed": { "@type": "State", "name": "Utah" }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": site.domain + "/services" },
          { "@type": "ListItem", "position": 3, "name": service.name, "item": site.domain + "/services/" + service.slug }
        ]
      }
    ];

  // FAQPage schema is output by the faq.ejs partial — do not duplicate it here
  const allFaqs = (service.faq && service.faq.length > 0) ? service.faq : (serviceFaqs[service.slug] || []);

  res.render('service-detail', {
    activePage: 'services',
    metaTitle: service.metaTitle,
    metaDesc: service.metaDesc,
    canonical: '/services/' + service.slug,
    service,
    relatedServices,
    structuredData: schemaList,
    pageFaqs: allFaqs,
    faqTitle: 'Frequently Asked Questions — ' + service.fullName,
    pageTestimonials: pickReviews(4 + Math.floor(Math.random() * 3))
  });
});

// Locations Index
app.get('/locations', (req, res) => {
  res.render('locations-index', {
    activePage: 'locations',
    metaTitle: "Service Areas | Auto Repair Across the Salt Lake Valley",
    metaDesc: "Serving 15+ Salt Lake Valley communities from our South Salt Lake shop. Find your neighborhood, get directions, or schedule a drop-off via TRAX.",
    canonical: '/locations',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Service Areas — Scott's Auto & Clutch",
        "url": site.domain + "/locations",
        "itemListElement": locations.map((l, i) => ({
          "@type": "ListItem", "position": i + 1, "name": l.name + ", UT", "url": site.domain + "/locations/" + l.slug
        }))
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": site.domain + "/locations" }
      ]}
    ]
  });
});

// Location Detail
app.get('/locations/:slug', (req, res) => {
  const location = locations.find(l => l.slug === req.params.slug);
  if (!location) return res.status(404).render('404', { metaTitle: 'Page Not Found' });

  const locSeo = getLocationSeoContent(location.slug);
  const baseFaqs = getLocationFaqs(location);
  const extraFaqs = (locSeo && locSeo.extraFaqs) || [];
  const allLocFaqs = [...baseFaqs, ...extraFaqs];

  res.render('location-detail', {
    activePage: 'locations',
    metaTitle: location.metaTitle,
    metaDesc: location.metaDesc,
    canonical: '/locations/' + location.slug,
    location,
    locSeo,
    pageFaqs: allLocFaqs,
    faqTitle: 'Frequently Asked Questions — ' + location.name + ' Auto Repair',
    faqAlt: false,
    pageTestimonials: pickReviews(4 + Math.floor(Math.random() * 3)),
    structuredData: [
      businessSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
          { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": site.domain + "/locations" },
          { "@type": "ListItem", "position": 3, "name": location.name, "item": site.domain + "/locations/" + location.slug }
        ]
      }
    ]
  });
});

// Symptoms Index
app.get('/symptoms', (req, res) => {
  res.render('symptoms-index', {
    activePage: 'symptoms',
    metaTitle: "What's Wrong With My Car? | Symptom Guide by Scott's Auto",
    metaDesc: "Hear something unusual or see a warning light? Our symptom guide covers common car problems. Free diagnosis at our South Salt Lake shop.",
    canonical: '/symptoms',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Car Symptom Guide — What's Wrong With My Car?",
        "url": site.domain + "/symptoms",
        "description": "Symptom-based car problem guide. Find your symptom and learn what might be causing it. Free diagnosis at Scott's Auto & Clutch, South Salt Lake.",
        "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Symptom Guide", "item": site.domain + "/symptoms" }
      ]}
    ]
  });
});

// Symptom Detail
app.get('/symptoms/:slug', (req, res) => {
  const symptom = symptoms.find(s => s.slug === req.params.slug);
  if (!symptom) return res.status(404).render('404', { metaTitle: 'Page Not Found' });

  const relatedService = services.find(s => s.slug === symptom.relatedService);
  const sFaqs = getSymptomFaqs(symptom);

  res.render('symptom-detail', {
    activePage: 'symptoms',
    metaTitle: symptom.metaTitle || `${symptom.shortName} Repair South Salt Lake | Scott's Auto & Clutch`,
    metaDesc: symptom.metaDesc || `${symptom.shortName} diagnosis and repair. Expert service since 1990. Call (801) 485-4089.`,
    canonical: '/symptoms/' + symptom.slug,
    symptom,
    relatedService,
    pageFaqs: sFaqs,
    faqTitle: 'Frequently Asked Questions — ' + symptom.name,
    ctaTitle: 'Experiencing ' + symptom.shortName + '?',
    ctaDesc: "Contact Scott's Auto and Clutch today for a free diagnosis. We'll get your vehicle running right.",
    pageTestimonials: pickReviews(4 + Math.floor(Math.random() * 3)),
    structuredData: [
      businessSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
          { "@type": "ListItem", "position": 2, "name": "Symptoms Guide", "item": site.domain + "/symptoms" },
          { "@type": "ListItem", "position": 3, "name": symptom.shortName, "item": site.domain + "/symptoms/" + symptom.slug }
        ]
      }
    ]
  });
});

// Vehicle Brands Index
app.get('/vehicle-brands', (req, res) => {
  res.render('vehicles-index', {
    activePage: 'vehicles',
    metaTitle: "Car Brands We Repair | Domestic, Import, and Luxury",
    metaDesc: "We service every major vehicle brand — Toyota, Honda, BMW, Porsche, and more. Same careful work, regardless of badge. Call (801) 485-4089.",
    canonical: '/vehicle-brands',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Vehicle Brands We Service — Scott's Auto & Clutch",
        "url": site.domain + "/vehicle-brands",
        "description": "All makes and models serviced at Scott's Auto & Clutch in South Salt Lake, UT — domestic, import, and luxury.",
        "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Vehicle Brands", "item": site.domain + "/vehicle-brands" }
      ]}
    ]
  });
});

// Vehicle Brand Detail
app.get('/vehicle-brands/:slug', (req, res) => {
  const brand = vehicleBrands.find(v => v.slug === req.params.slug);
  if (!brand) return res.status(404).render('404', { metaTitle: 'Page Not Found' });

  const bc = getBrandContent(brand.name);
  res.render('vehicle-detail', {
    activePage: 'vehicles',
    metaTitle: brand.metaTitle,
    metaDesc: brand.metaDesc,
    canonical: '/vehicle-brands/' + brand.slug,
    brand,
    brandContent: bc,
    pageFaqs: bc.faqs || [],
    faqTitle: 'Frequently Asked Questions — ' + brand.name + ' Repair',
    faqAlt: true,
    pageTestimonials: pickReviews(4 + Math.floor(Math.random() * 3)),
    structuredData: [
      businessSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
          { "@type": "ListItem", "position": 2, "name": "Vehicle Brands", "item": site.domain + "/vehicle-brands" },
          { "@type": "ListItem", "position": 3, "name": brand.name + " Repair", "item": site.domain + "/vehicle-brands/" + brand.slug }
        ]
      }
    ]
  });
});

// Privacy & Terms
app.get('/privacy', (req, res) => {
  res.render('legal', {
    metaTitle: "Privacy Policy | Scott's Auto & Clutch — Salt Lake City",
    metaDesc: "Scott's Auto & Clutch privacy policy. We don't sell your data — contact info only, never shared with third parties. Questions? Call (801) 485-4089.",
    canonical: '/privacy',
    pageTitle: "Privacy Policy — Scott's Auto & Clutch",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy — Scott's Auto and Clutch",
      "url": site.domain + "/privacy",
      "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
    },
    content: `
      <p>Scott's Auto and Clutch ("we," "us," or "our") operates the slcautoshop.com website and provides automotive repair services at ${site.fullAddress}. This privacy policy explains what information we collect, how we use it, and how we protect it.</p>

      <h2>Information We Collect</h2>
      <p>When you contact us by phone, text message, or through our website, we may collect personal information including your name, phone number, email address, and details about your vehicle such as the year, make, model, and mileage. This information is provided voluntarily when you request a quote, schedule a service appointment, or reach out with questions about your vehicle.</p>
      <p>Our website may also automatically collect standard technical information such as your browser type, referring URL, and general geographic region. This data is used in aggregate form only and is not linked to any individual.</p>

      <h2>How We Use Your Information</h2>
      <p>We use the information you provide exclusively to deliver automotive repair and maintenance services. Specifically, we use your contact information to respond to service inquiries, schedule appointments, provide repair estimates, communicate updates about your vehicle while it is in our care, and follow up after service is complete.</p>
      <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We do not use your information to send unsolicited messages unrelated to your vehicle service.</p>

      <h2>Data Retention</h2>
      <p>We retain customer information for as long as necessary to provide ongoing service and for legitimate business purposes such as warranty tracking and service history. You may request deletion of your information at any time by contacting us directly.</p>

      <h2>Third-Party Services</h2>
      <p>Our website may use standard analytics tools to understand how visitors use the site. These services may set cookies or collect anonymized usage data in accordance with their own privacy policies. We do not use advertising tracking or behavioral targeting on this site.</p>

      <h2>Your Rights</h2>
      <p>You have the right to request access to any personal information we hold about you, to request corrections, or to ask that we delete it. To exercise any of these rights, contact us using the information below.</p>

      <h2>Contact Us</h2>
      <p>If you have questions or concerns about this privacy policy or how we handle your information, please contact us:</p>
      <p><strong>Scott's Auto and Clutch</strong><br>
      ${site.fullAddress}<br>
      Phone: <a href="tel:+18014854089">(801) 485-4089</a></p>
    `
  });
});

app.get('/terms', (req, res) => {
  res.render('legal', {
    metaTitle: "Terms of Service | Scott's Auto & Clutch",
    metaDesc: "Scott's Auto & Clutch service terms — warranty details, shop policies, and your rights as a customer. Questions? Call us at (801) 485-4089.",
    canonical: '/terms',
    pageTitle: "Terms of Service — Scott's Auto & Clutch",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service — Scott's Auto and Clutch",
      "url": site.domain + "/terms",
      "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
    },
    content: `
      <p>These terms of service govern your use of the slcautoshop.com website and your relationship with Scott's Auto and Clutch, located at ${site.fullAddress}. By using this website or visiting our shop, you agree to the following terms.</p>

      <h2>Repair &amp; Maintenance Services</h2>
      <p>Scott's Auto and Clutch provides automotive repair and maintenance services for passenger vehicles, trucks, and SUVs. We service most domestic and foreign vehicle brands. All repair work begins only after a written or verbal estimate is provided and approved by the vehicle owner.</p>
      <p>Final charges may occasionally differ from an initial estimate if additional problems are discovered during the course of a repair. In those situations, we will always contact you before proceeding with any additional work. We will not perform unapproved repairs.</p>

      <h2>Appointments &amp; Vehicle Drop-Off</h2>
      <p>Appointments are preferred and help us plan diagnostic time for your vehicle. Walk-ins are welcome based on availability. When you drop off your vehicle, please ensure you have removed any personal valuables. Scott's Auto and Clutch is not responsible for personal items left in the vehicle during service.</p>

      <h2>Estimates</h2>
      <p>Estimates are provided based on the described symptoms and a visual inspection of the vehicle. Diagnostic fees may apply for complex or intermittent problems that require extended testing. Any diagnostic fees will be disclosed before diagnostic work begins.</p>

      <h2>Warranty on Work Performed</h2>
      <p>We stand behind the quality of our repairs. Warranty terms vary by service type and the parts used, and specific warranty information will be provided at the time your vehicle is returned. Warranty coverage applies to defects in workmanship and parts supplied by our shop under normal operating conditions.</p>

      <h2>Website Use</h2>
      <p>The information on slcautoshop.com is provided for general informational purposes about our business and services. While we make every effort to keep information current and accurate, we make no warranties regarding the completeness or accuracy of content on this site. Information about specific services, pricing, or availability is subject to change.</p>

      <h2>Limitation of Liability</h2>
      <p>To the extent permitted by law, Scott's Auto and Clutch shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or any reliance on the information provided herein.</p>

      <h2>Contact</h2>
      <p>Questions about these terms or our service policies? We're happy to answer. Reach us at:</p>
      <p><strong>Scott's Auto and Clutch</strong><br>
      ${site.fullAddress}<br>
      Phone: <a href="tel:+18014854089">(801) 485-4089</a></p>
    `
  });
});

// Sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml');

  // Dynamic date — reflects the current content state to signal freshness to crawlers.
  const today = new Date().toISOString().split('T')[0];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  const addUrl = (path, priority = '0.8', freq = 'monthly', lastmod = today) => {
    xml += `  <url><loc>${site.domain}${path}</loc><lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>\n`;
  };

  // Core pages
  addUrl('/', '1.0', 'weekly');
  addUrl('/about', '0.7', 'monthly');
  addUrl('/contact', '0.8', 'monthly');
  addUrl('/services', '0.9', 'weekly');
  addUrl('/locations', '0.9', 'weekly');
  addUrl('/symptoms', '0.9', 'weekly');
  addUrl('/vehicle-brands', '0.8', 'weekly');

  // Main service pages
  services.forEach(s => addUrl('/services/' + s.slug, '0.8', 'monthly'));

  // Geo clutch pages — unique city content, high local intent
  geoPages.forEach(g => addUrl('/services/' + g.slug, '0.8', 'monthly'));

  // Location pages — strong local signals, well-differentiated content
  locations.forEach(l => addUrl('/locations/' + l.slug, '0.9', 'monthly'));

  // Symptom pages
  symptoms.forEach(s => addUrl('/symptoms/' + s.slug, '0.8', 'monthly'));

  // Vehicle brand pages — exclude defunct/no-US-market brands to protect crawl budget.
  // These brands have been discontinued or exited the US market and generate no real search demand.
  const defunctBrands = new Set([
    'pontiac-repair-salt-lake-city-ut',   // discontinued 2010
    'saturn-repair-salt-lake-city-ut',    // discontinued 2010
    'mercury-repair-salt-lake-city-ut',   // discontinued 2011
    'saab-repair-salt-lake-city-ut',      // bankrupt 2011
    'hummer-repair-salt-lake-city-ut',    // discontinued 2010
    'scion-repair-salt-lake-city-ut',     // discontinued 2016
    'plymouth-repair-salt-lake-city-ut',  // discontinued 2001
    'suzuki-repair-salt-lake-city-ut',    // exited US market 2012
    'isuzu-repair-salt-lake-city-ut',     // exited US consumer market 2009
    'fiat-repair-salt-lake-city-ut',      // effectively exited US market
    'smart-repair-salt-lake-city-ut',     // exited US market 2019
    'gm-repair-salt-lake-city-ut',        // manufacturer umbrella, not a consumer brand
  ]);

  // High-volume active brands at 0.8; lower-volume active brands at 0.6
  const highVolumeBrands = new Set([
    'toyota-repair-salt-lake-city-ut',
    'honda-repair-salt-lake-city-ut',
    'ford-repair-salt-lake-city-ut',
    'chevrolet-repair-salt-lake-city-ut',
    'nissan-repair-salt-lake-city-ut',
    'subaru-repair-salt-lake-city-ut',
    'mazda-repair-salt-lake-city-ut',
    'hyundai-repair-salt-lake-city-ut',
    'kia-repair-salt-lake-city-ut',
    'volkswagen-repair-salt-lake-city-ut',
    'jeep-repair-salt-lake-city-ut',
    'dodge-repair-salt-lake-city-ut',
    'ram-repair-salt-lake-city-ut',
    'gmc-repair-salt-lake-city-ut',
    'bmw-repair-salt-lake-city-ut',
    'mercedes-benz-repair-salt-lake-city-ut',
    'audi-repair-salt-lake-city-ut',
    'lexus-repair-salt-lake-city-ut',
    'acura-repair-salt-lake-city-ut',
    'infiniti-repair-salt-lake-city-ut',
  ]);

  vehicleBrands.forEach(v => {
    if (defunctBrands.has(v.slug)) return; // skip — no search demand, wastes crawl budget
    const priority = highVolumeBrands.has(v.slug) ? '0.8' : '0.6';
    addUrl('/vehicle-brands/' + v.slug, priority, 'monthly');
  });

  addUrl('/privacy', '0.3', 'yearly');
  addUrl('/terms', '0.3', 'yearly');

  xml += `</urlset>`;
  res.send(xml);
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml`);
});

// ── 404 catch-all ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', { metaTitle: 'Page Not Found' });
});

// Start
app.listen(PORT, () => {
  console.log(`SLC Auto Shop running at http://localhost:${PORT}`);
});
