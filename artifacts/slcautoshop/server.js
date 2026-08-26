const crypto = require('crypto');
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
const vehicleModels = require('./data/vehicleModels');
const { getContent: getBrandContent } = require('./data/vehicleBrandContent');
const { serviceFaqs, getSymptomFaqs, getLocationFaqs, getGeoFaqs } = require('./data/pageFaqs');
const { getLocationSeoContent } = require('./data/locationSeoContent');
const geoPages = require('./data/geoPages');
const serviceGeoPages = require('./data/serviceGeoPages');
const allReviews = require('./data/reviews.json');

// Pick N random reviews and format them for the testimonials partial
// Returns a single-element array with a FAQPage schema object, or an empty
// array if there are no FAQs — designed to be spread into a structuredData list.
function faqPageSchema(faqs) {
  if (!faqs || !faqs.length) return [];
  return [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "author": { "@type": "Person", "@id": site.domain + "/#owner", "name": site.owner.name },
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  }];
}

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
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": site.rating.value,
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": String(site.rating.count),
    "reviewCount": String(site.rating.count)
  },
  "sameAs": [
    "https://g.page/r/CYDFwHsY4XoBEBM/review",
    "https://www.yelp.com/biz/scotts-auto-clutch-and-towing-salt-lake-city",
    "https://www.bbb.org/us/ut/salt-lake-city/profile/auto-repair/scotts-auto-and-clutch-repair-inc-1166-13000150",
    "https://www.mapquest.com/us/utah/scotts-auto-clutch-towing-541917678",
    "https://local.yahoo.com/info-19929074-scott-s-auto-clutch-towing-south-salt-lake/",
    "https://www.waze.com/live-map/directions/us/ut/salt-lake-city/scotts-auto-and-clutch-repair?to=place.ChIJ22zJn92KUocRgMXAexjhegE"
  ]
};

const app = express();
const PORT = process.env.PORT || 3000;
const CSS_VER = process.env.CSS_VER || (() => { try { return require('child_process').execSync('git rev-parse --short HEAD').toString().trim(); } catch (e) { return 'prod'; } })();

// Middleware
app.set('trust proxy', 1);
app.use((req, res, next) => {
  if (process.env.NODE_ENV !== 'production') return next();
  if (req.secure || req.headers['x-forwarded-proto'] === 'https') return next();
  return res.redirect(301, 'https://' + req.headers.host + req.url);
});
app.use(compression());
// Generate a fresh nonce for every request — must run before Helmet so the
// CSP directive functions can read res.locals.cspNonce when headers are written.
app.use((_req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(16).toString('base64');
  next();
});
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:     ["'self'"],
      scriptSrc:      ["'self'", (_req, res) => `'nonce-${res.locals.cspNonce}'`],
      styleSrc:       ["'self'", (_req, res) => `'nonce-${res.locals.cspNonce}'`, "https://fonts.googleapis.com"],
      fontSrc:        ["'self'", "https://fonts.gstatic.com"],
      imgSrc:         ["'self'", "data:", "https://raw.githubusercontent.com"],
      connectSrc:     ["'self'"],
      frameSrc:       ["'self'", "https://www.google.com", "https://maps.google.com"],  // Maps embed
      frameAncestors: ["'self'", "https://*.replit.dev", "https://*.replit.app"],
    },
  },
  crossOriginEmbedderPolicy: false,
  frameguard: false,
  hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
}));
// Permissions-Policy — not in Helmet defaults
app.use((_req, res, next) => {
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Shared locals (available in all templates)
const SERVICE_LINK_TERMS = [
  ['catalytic converter', '/services/catalytic-converter-service-near-south-salt-lake-ut'],
  ['clutch replacement',  '/services/clutch-repair-near-south-salt-lake-ut'],
  ['clutch repair',       '/services/clutch-repair-near-south-salt-lake-ut'],
  ['brake service',       '/services/brake-service-near-south-salt-lake-ut'],
  ['brake repair',        '/services/brake-service-near-south-salt-lake-ut'],
  ['CV joint',            '/services/cv-joint-repair-near-south-salt-lake-ut'],
  ['CV axle',             '/services/cv-joint-repair-near-south-salt-lake-ut'],
  ['timing chain',        '/services/timing-chain-repair-near-south-salt-lake-ut'],
  ['timing belt',         '/services/timing-belt-replacement-near-south-salt-lake-ut'],
  ['water pump',          '/services/water-pump-replacement-near-south-salt-lake-ut'],
  ['shock absorber',      '/services/shock-replacement-near-south-salt-lake-ut'],
  ['strut',               '/services/strut-replacement-near-south-salt-lake-ut'],
  ['exhaust',             '/services/exhaust-repair-near-south-salt-lake-ut'],
  ['check engine light',  '/services/check-engine-light-engine-repair-near-south-salt-lake-ut'],
  ['leveling kit',        '/services/lift-leveling-kit-installation-near-south-salt-lake-ut'],
  ['lift kit',            '/services/lift-leveling-kit-installation-near-south-salt-lake-ut'],
  ['transfer case',       '/services/transmission-repair-near-south-salt-lake-ut'],
  ['transmission',        '/services/transmission-repair-near-south-salt-lake-ut'],
];

app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.cssVer = CSS_VER;
  res.locals.services = services;
  res.locals.allLocations = locations;
  res.locals.allSymptoms = symptoms;
  res.locals.allVehicleBrands = vehicleBrands;
  res.locals.vehicleModels = vehicleModels;
  res.locals.allGeoPages = geoPages;
  res.locals.allServiceGeoPages = serviceGeoPages;

  const usedTerms = new Set();
  const MAX_AUTO_LINKS_PER_PAGE = 3;
  const linkState = { count: 0 };
  res.locals.linkifyServices = (text) => {
    if (!text) return '';
    if (linkState.count >= MAX_AUTO_LINKS_PER_PAGE) return text;
    let result = text;
    // Use the city-specific clutch geo URL when on a location page
    const clutchOverride = res.locals._clutchGeoSlug;
    for (const [term, url] of SERVICE_LINK_TERMS) {
      if (linkState.count >= MAX_AUTO_LINKS_PER_PAGE) break;
      if (usedTerms.has(term)) continue;
      let linkUrl = url;
      if (clutchOverride && (term === 'clutch repair' || term === 'clutch replacement')) {
        linkUrl = '/services/' + clutchOverride;
      }
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b`, 'i');
      const match = regex.exec(result);
      if (match) {
        result = result.slice(0, match.index) +
          `<a href="${linkUrl}">${match[0]}</a>` +
          result.slice(match.index + match[0].length);
        usedTerms.add(term);
        linkState.count++;
      }
    }
    return result;
  };

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

// Old React-site symptom slugs that were reworded on the current site and share
// no common prefix with the new slug, so the prefix fallback can't map them.
// Maps old slug (without the "-repair-south-salt-lake" suffix) → current slug.
const LEGACY_SYMPTOM_SLUG_ALIASES = {
  'clicking-noise-turning':  'clicking-when-turning',
  'clutch-pedal-feels-soft': 'soft-clutch-pedal',
  'exhaust-smell-cabin':     'exhaust-smell-in-cabin',
  'grinding-noise-shifting': 'grinding-when-shifting',
  'rough-ride-bumps':        'rough-ride-over-bumps',
};

app.use((req, res, next) => {
  const p = req.path;

  // Old symptom pattern: /symptoms/{slug}-repair-south-salt-lake
  // Resolution order: (1) exact current slug, (2) explicit alias for old React-site
  // slugs that were reworded and share no prefix with the current slug, (3) fall back
  // to the longest current symptom slug that prefixes the captured value (handles old
  // slugs that embedded the related service, e.g. "sulfur-smell-exhaust").
  const symptomMatch = p.match(/^\/symptoms\/(.+)-repair-south-salt-lake$/);
  if (symptomMatch) {
    const captured = symptomMatch[1];
    let target = symptoms.find(s => s.slug === captured);
    if (!target && LEGACY_SYMPTOM_SLUG_ALIASES[captured]) {
      target = symptoms.find(s => s.slug === LEGACY_SYMPTOM_SLUG_ALIASES[captured]);
    }
    if (!target) {
      target = symptoms
        .filter(s => captured.startsWith(s.slug + '-') || captured.startsWith(s.slug))
        .sort((a, b) => b.slug.length - a.slug.length)[0];
    }
    if (target) return res.redirect(301, '/symptoms/' + target.slug);
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

  // Short location slug (no -ut-auto-repair suffix) → full canonical slug
  // e.g. /locations/murray → /locations/murray-ut-auto-repair
  const shortLocMatch = p.match(/^\/locations\/([^/]+)$/);
  if (shortLocMatch && !shortLocMatch[1].endsWith('-ut-auto-repair')) {
    const canonical = shortLocMatch[1].toLowerCase() + '-ut-auto-repair';
    const loc = locations.find(l => l.slug === canonical);
    if (loc) return res.redirect(301, '/locations/' + canonical);
  }

  // Short vehicle brand slug (no -repair-salt-lake-city-ut suffix) → full canonical slug
  // e.g. /vehicle-brands/gmc → /vehicle-brands/gmc-repair-salt-lake-city-ut
  const shortBrandMatch = p.match(/^\/vehicle-brands\/([^/]+)$/);
  if (shortBrandMatch && !shortBrandMatch[1].endsWith('-repair-salt-lake-city-ut')) {
    const canonical = shortBrandMatch[1].toLowerCase() + '-repair-salt-lake-city-ut';
    const brand = vehicleBrands.find(b => b.slug === canonical);
    if (brand) return res.redirect(301, '/vehicle-brands/' + canonical);
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
    preloadImage: site.heroImage,
    metaTitle: "Auto Repair South Salt Lake UT | Since 1990 | Scott's Auto & Clutch Repair",
    metaDesc: "Family-owned shop serving the Salt Lake Valley since 1990. Clutch repair, brakes, CV axles, transmissions & more. Free estimates. Call (801) 485-4089.",
    canonical: '/',
    structuredData: [
    {
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
      "founder": {
        "@type": "Person",
        "@id": site.domain + "/#owner",
        "name": site.owner.name,
        "jobTitle": site.owner.jobTitle,
        "worksFor": { "@id": site.domain + "/#business" }
      },
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
        "ratingValue": site.rating.value,
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": String(site.rating.count),
        "reviewCount": String(site.rating.count)
      },
      "review": allReviews
        .slice()
        .sort((a, b) => (b.rating - a.rating) || (b.text.length - a.text.length))
        .slice(0, 5)
        .map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5", "worstRating": "1" },
          "reviewBody": r.text
        })),
      "sameAs": [
        "https://g.page/r/CYDFwHsY4XoBEBM/review",
        "https://www.yelp.com/biz/scotts-auto-clutch-and-towing-salt-lake-city",
        "https://www.bbb.org/us/ut/salt-lake-city/profile/auto-repair/scotts-auto-and-clutch-repair-inc-1166-13000150",
        "https://www.mapquest.com/us/utah/scotts-auto-clutch-towing-541917678",
        "https://local.yahoo.com/info-19929074-scott-s-auto-clutch-towing-south-salt-lake/",
        "https://www.waze.com/live-map/directions/us/ut/salt-lake-city/scotts-auto-and-clutch-repair?to=place.ChIJ22zJn92KUocRgMXAexjhegE"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": site.domain,
      "name": site.name
    }
    ],
    pageTestimonials: pickReviews(4 + Math.floor(Math.random() * 3))
  });
});

// About
app.get('/about', (req, res) => {
  res.render('about', {
    activePage: 'about',
    metaTitle: "About Scott's Auto & Clutch Repair | Our Story, Team, and Shop",
    metaDesc: "Meet the family behind our shop. 36+ years keeping Salt Lake Valley drivers on the road with straight answers, careful work, and no surprises at checkout.",
    canonical: '/about',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Scott's Auto & Clutch Repair",
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
      ]},
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Scott Bierman",
        "url": site.domain + "/about",
        "jobTitle": "Owner & Master Mechanic",
        "worksFor": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
        "knowsAbout": [
          "Clutch repair and replacement",
          "Manual transmission service",
          "Automotive diagnostics",
          "Brake system repair",
          "Exhaust system repair"
        ]
      }
    ]
  });
});

// Contact
app.get('/contact', (req, res) => {
  res.render('contact', {
    activePage: 'contact',
    metaTitle: "Contact Us | Scott's Auto & Clutch Repair in South Salt Lake",
    metaDesc: "Call, text, or visit for a free estimate. Located at 144 W Crystal Ave, open Mon–Fri 8 to 5:30. Walk-ins welcome. Reach us at (801) 485-4089.",
    canonical: '/contact',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Scott's Auto & Clutch Repair",
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
    metaTitle: "Auto Repair Services South Salt Lake UT | Scott's Auto & Clutch Repair",
    metaDesc: "Clutch repair, brake service, CV joints, timing chains, exhaust & more. All makes and models. Honest pricing, free diagnosis. Call (801) 485-4089.",
    canonical: '/services',
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Auto Repair Services at Scott's Auto & Clutch Repair",
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
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Clutch Repair & Replacement",
            "name": "Clutch Repair Near " + geo.locationName + ", UT",
            "description": geo.intro,
            "provider": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
            "areaServed": {
              "@type": "City",
              "name": geo.locationName,
              "containedInPlace": { "@type": "State", "name": "Utah" }
            },
            "url": site.domain + "/services/" + geo.slug
          },
          ...faqPageSchema(getGeoFaqs(geo))
        ]
      });
    }
    // Check service geo pages (11 services × 16 cities)
    const serviceGeo = serviceGeoPages.find(g => g.slug === req.params.slug);
    if (serviceGeo) {
      const mainService = services.find(s => s.slug === serviceGeo.mainServiceSlug);
      // Pull FAQs from the main service so FAQPage schema fires on geo pages too
      const geoPageFaqs = (mainService && mainService.faq && mainService.faq.length > 0)
        ? mainService.faq
        : (serviceFaqs[serviceGeo.mainServiceSlug] || []);
      return res.render('service-geo', {
        activePage: 'services',
        metaTitle: serviceGeo.metaTitle,
        metaDesc: serviceGeo.metaDesc,
        canonical: '/services/' + serviceGeo.slug,
        geo: serviceGeo,
        mainService: mainService || null,
        pageFaqs: geoPageFaqs,
        faqTitle: 'Frequently Asked Questions — ' + serviceGeo.serviceFullName + ' Near ' + serviceGeo.locationName,
        pageTestimonials: pickReviews(2 + Math.floor(Math.random() * 2)),
        structuredData: [
          businessSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
              { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": site.domain + "/locations" },
              { "@type": "ListItem", "position": 3, "name": serviceGeo.locationName, "item": site.domain + "/locations/" + serviceGeo.citySlug + "-ut-auto-repair" },
              { "@type": "ListItem", "position": 4, "name": serviceGeo.serviceFullName + ' Near ' + serviceGeo.locationName, "item": site.domain + "/services/" + serviceGeo.slug }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": serviceGeo.serviceFullName,
            "name": serviceGeo.serviceFullName + " Near " + serviceGeo.locationName + ", UT",
            "provider": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
            "areaServed": {
              "@type": "City",
              "name": serviceGeo.locationName,
              "containedInPlace": { "@type": "State", "name": "Utah" }
            },
            "url": site.domain + "/services/" + serviceGeo.slug
          },
          ...faqPageSchema(geoPageFaqs)
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
        "serviceType": service.fullName,
        "category": "Automotive Repair",
        "description": service.intro,
        "url": site.domain + "/services/" + service.slug,
        "provider": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
        "areaServed": { "@type": "City", "name": "South Salt Lake, UT" },
        "hasOfferCatalog": service.specializedServices && service.specializedServices.length ? {
          "@type": "OfferCatalog",
          "name": service.fullName + " Services",
          "itemListElement": service.specializedServices.map((s, i) => ({
            "@type": "Offer",
            "position": i + 1,
            "itemOffered": { "@type": "Service", "name": s }
          }))
        } : undefined
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
    preloadImage: service.heroImage || null,
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
        "name": "Service Areas — Scott's Auto & Clutch Repair",
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

  // Find the city-specific clutch geo page (e.g. clutch-repair-near-murray-ut)
  const citySlug = location.slug.replace(/-ut-auto-repair$/, '');
  const clutchGeo = geoPages.find(g => g.slug === 'clutch-repair-near-' + citySlug + '-ut') || null;
  // Expose to linkifyServices so inline body-text links also use the geo URL
  res.locals._clutchGeoSlug = clutchGeo ? clutchGeo.slug : null;

  // Build a map of mainServiceSlug → serviceGeoSlug for this city
  const serviceGeoMap = {};
  serviceGeoPages.filter(g => g.citySlug === citySlug).forEach(g => {
    serviceGeoMap[g.mainServiceSlug] = g.slug;
  });

  res.render('location-detail', {
    activePage: 'locations',
    metaTitle: location.metaTitle,
    metaDesc: location.metaDesc,
    canonical: '/locations/' + location.slug,
    location,
    locSeo,
    clutchGeo,
    serviceGeoMap,
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
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Auto Repair & Maintenance",
        "name": "Auto Repair Near " + location.name + ", UT",
        "description": location.whyChooseUs,
        "provider": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
        "areaServed": {
          "@type": "City",
          "name": location.name,
          "containedInPlace": { "@type": "State", "name": "Utah" }
        },
        "url": site.domain + "/locations/" + location.slug
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
        "description": "Symptom-based car problem guide. Find your symptom and learn what might be causing it. Free diagnosis at Scott's Auto & Clutch Repair, South Salt Lake.",
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

  // Intentional internal-link routing: 3 same-category + 3 same-service + 1 bridge
  const others = symptoms.filter(s => s.slug !== symptom.slug);
  const sameCategory = others.filter(s => s.category === symptom.category).slice(0, 3);
  const sameService = others.filter(s =>
    s.relatedService === symptom.relatedService &&
    !sameCategory.find(x => x.slug === s.slug)
  ).slice(0, 3);
  const bridge = others.filter(s =>
    s.category !== symptom.category &&
    !sameService.find(x => x.slug === s.slug)
  ).slice(0, 1);
  const relatedSymptoms = [...sameCategory, ...sameService, ...bridge].slice(0, 7);

  res.render('symptom-detail', {
    activePage: 'symptoms',
    metaTitle: symptom.metaTitle || `${symptom.shortName} Repair South Salt Lake | Scott's Auto & Clutch Repair`,
    metaDesc: symptom.metaDesc || `${symptom.shortName} diagnosis and repair. Expert service since 1990. Call (801) 485-4089.`,
    canonical: '/symptoms/' + symptom.slug,
    symptom,
    relatedService,
    relatedSymptoms,
    pageFaqs: sFaqs,
    faqTitle: 'Frequently Asked Questions — ' + symptom.name,
    ctaTitle: 'Experiencing ' + symptom.shortName + '?',
    ctaDesc: "Contact Scott's Auto & Clutch Repair today for a free diagnosis. We'll get your vehicle running right.",
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
      },
      {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": symptom.name + " — Causes, Diagnosis & Repair in South Salt Lake, UT",
        "description": symptom.intro,
        "image": symptom.introImage
          ? { "@type": "ImageObject", "url": site.domain + "/assets/" + symptom.introImage, "width": 760, "height": 428 }
          : { "@type": "ImageObject", "url": site.domain + "/assets/hero-600-DnXM3vMX.webp", "width": 600, "height": 400 },
        "url": site.domain + "/symptoms/" + symptom.slug,
        "author": { "@type": "Person", "name": "Scott Bierman", "url": site.domain + "/about" },
        "publisher": {
          "@type": "Organization",
          "name": site.name,
          "url": site.domain,
          "logo": { "@type": "ImageObject", "url": site.domain + site.headerLogo }
        },
        "about": { "@type": "Thing", "name": symptom.name },
        "specialty": "Automotive Repair",
        "proficiencyLevel": "Expert",
        "datePublished": symptom.datePublished || "2024-01-01",
        "dateModified": symptom.dateModified || "2026-05-01"
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
        "name": "Vehicle Brands We Service — Scott's Auto & Clutch Repair",
        "url": site.domain + "/vehicle-brands",
        "description": "All makes and models serviced at Scott's Auto & Clutch Repair in South Salt Lake, UT — domestic, import, and luxury.",
        "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
      },
      { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Vehicle Brands", "item": site.domain + "/vehicle-brands" }
      ]}
    ]
  });
});

// Vehicle Model Detail (e.g. /vehicle-brands/honda/civic-repair-salt-lake-city-ut)
app.get('/vehicle-brands/:makeKey/:modelSlug', (req, res, next) => {
  const makeData = vehicleModels[req.params.makeKey];
  if (!makeData) return next();
  const model = makeData.models.find(m => m.slug + '-repair-salt-lake-city-ut' === req.params.modelSlug);
  if (!model) return next();
  const brand = vehicleBrands.find(b => b.slug === makeData.brandSlug);
  res.render('vehicle-model', {
    activePage: 'vehicles',
    model,
    brand,
    makeData,
    site,
    cspNonce: res.locals.cspNonce,
    canonical: '/vehicle-brands/' + req.params.makeKey + '/' + req.params.modelSlug,
    pageTitle: model.metaTitle,
    metaTitle: model.metaTitle,
    metaDesc: model.metaDesc,
    breadcrumbs: [
      { label: 'Home', url: '/' },
      { label: 'Vehicle Brands', url: '/vehicle-brands' },
      { label: makeData.brandName, url: '/vehicle-brands/' + makeData.brandSlug },
      { label: model.name }
    ],
    pageTestimonials: pickReviews(3 + Math.floor(Math.random() * 2)),
    structuredData: [
      businessSchema,
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
          { "@type": "ListItem", "position": 2, "name": "Vehicle Brands", "item": site.domain + "/vehicle-brands" },
          { "@type": "ListItem", "position": 3, "name": makeData.brandName + " Repair", "item": site.domain + "/vehicle-brands/" + makeData.brandSlug },
          { "@type": "ListItem", "position": 4, "name": model.fullName + " Repair", "item": site.domain + "/vehicle-brands/" + req.params.makeKey + "/" + req.params.modelSlug }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": model.fullName + " Repair & Maintenance",
        "name": model.heading,
        "description": model.metaDesc,
        "provider": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
        "areaServed": { "@type": "City", "name": "South Salt Lake", "containedInPlace": { "@type": "State", "name": "Utah" } },
        "url": site.domain + "/vehicle-brands/" + req.params.makeKey + "/" + req.params.modelSlug
      }
    ]
  });
});

// Vehicle Brand Detail
app.get('/vehicle-brands/:slug', (req, res) => {
  const brand = vehicleBrands.find(v => v.slug === req.params.slug);
  if (!brand) return res.status(404).render('404', { metaTitle: 'Page Not Found' });

  const bc = getBrandContent(brand.name);

  // Build the model-tag list that the brand page links to. Match the curated
  // brand.models name list to actual model pages case-insensitively, then append
  // any model pages the list doesn't cover — so every model page is linked from
  // its brand page and none are left orphaned (sitemap-only).
  const makeModels = vehicleModels[brand.makeKey];
  const modelPages = (makeModels && makeModels.models) || [];
  const normModel = s => String(s).toLowerCase().replace(/[^a-z0-9]/g, '');
  const usedModelSlugs = new Set();
  const modelTags = [];
  (brand.models || []).forEach(name => {
    const md = modelPages.find(p => normModel(p.name) === normModel(name));
    if (md) usedModelSlugs.add(md.slug);
    modelTags.push({ label: brand.name + ' ' + name, slug: md ? md.slug : null });
  });
  modelPages.forEach(p => {
    if (!usedModelSlugs.has(p.slug)) modelTags.push({ label: brand.name + ' ' + p.name, slug: p.slug });
  });

  res.render('vehicle-detail', {
    activePage: 'vehicles',
    modelTags,
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
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": brand.name + " Repair & Maintenance",
        "name": brand.name + " Repair in South Salt Lake, UT",
        "description": brand.tagline,
        "provider": { "@type": "AutoRepair", "@id": site.domain + "/#business" },
        "areaServed": { "@type": "City", "name": "South Salt Lake", "containedInPlace": { "@type": "State", "name": "Utah" } },
        "url": site.domain + "/vehicle-brands/" + brand.slug
      }
    ]
  });
});

// Privacy & Terms
app.get('/privacy', (req, res) => {
  res.render('legal', {
    metaTitle: "Privacy Policy | Scott's Auto & Clutch Repair — Salt Lake City",
    metaDesc: "Scott's Auto & Clutch Repair privacy policy. We don't sell your data — contact info only, never shared with third parties. Questions? Call (801) 485-4089.",
    canonical: '/privacy',
    pageTitle: "Privacy Policy — Scott's Auto & Clutch Repair",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy — Scott's Auto & Clutch Repair",
      "url": site.domain + "/privacy",
      "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
    },
    content: `
      <p>Scott's Auto & Clutch Repair ("we," "us," or "our") operates the slcautoshop.com website and provides automotive repair services at ${site.fullAddress}. This privacy policy explains what information we collect, how we use it, and how we protect it.</p>

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
      <p><strong>Scott's Auto & Clutch Repair</strong><br>
      ${site.fullAddress}<br>
      Phone: <a href="tel:+18014854089">(801) 485-4089</a></p>
    `
  });
});

app.get('/terms', (req, res) => {
  res.render('legal', {
    metaTitle: "Terms of Service | Scott's Auto & Clutch Repair",
    metaDesc: "Scott's Auto & Clutch Repair service terms — warranty details, shop policies, and your rights as a customer. Questions? Call us at (801) 485-4089.",
    canonical: '/terms',
    pageTitle: "Terms of Service — Scott's Auto & Clutch Repair",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service — Scott's Auto & Clutch Repair",
      "url": site.domain + "/terms",
      "publisher": { "@type": "AutoRepair", "@id": site.domain + "/#business", "name": site.name }
    },
    content: `
      <p>These terms of service govern your use of the slcautoshop.com website and your relationship with Scott's Auto & Clutch Repair, located at ${site.fullAddress}. By using this website or visiting our shop, you agree to the following terms.</p>

      <h2>Repair &amp; Maintenance Services</h2>
      <p>Scott's Auto & Clutch Repair provides automotive repair and maintenance services for passenger vehicles, trucks, and SUVs. We service most domestic and foreign vehicle brands. All repair work begins only after a written or verbal estimate is provided and approved by the vehicle owner.</p>
      <p>Final charges may occasionally differ from an initial estimate if additional problems are discovered during the course of a repair. In those situations, we will always contact you before proceeding with any additional work. We will not perform unapproved repairs.</p>

      <h2>Appointments &amp; Vehicle Drop-Off</h2>
      <p>Appointments are preferred and help us plan diagnostic time for your vehicle. Walk-ins are welcome based on availability. When you drop off your vehicle, please ensure you have removed any personal valuables. Scott's Auto & Clutch Repair is not responsible for personal items left in the vehicle during service.</p>

      <h2>Estimates</h2>
      <p>Estimates are provided based on the described symptoms and a visual inspection of the vehicle. Diagnostic fees may apply for complex or intermittent problems that require extended testing. Any diagnostic fees will be disclosed before diagnostic work begins.</p>

      <h2>Warranty on Work Performed</h2>
      <p>We stand behind the quality of our repairs. Warranty terms vary by service type and the parts used, and specific warranty information will be provided at the time your vehicle is returned. Warranty coverage applies to defects in workmanship and parts supplied by our shop under normal operating conditions.</p>

      <h2>Website Use</h2>
      <p>The information on slcautoshop.com is provided for general informational purposes about our business and services. While we make every effort to keep information current and accurate, we make no warranties regarding the completeness or accuracy of content on this site. Information about specific services, pricing, or availability is subject to change.</p>

      <h2>Limitation of Liability</h2>
      <p>To the extent permitted by law, Scott's Auto & Clutch Repair shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or any reliance on the information provided herein.</p>

      <h2>Contact</h2>
      <p>Questions about these terms or our service policies? We're happy to answer. Reach us at:</p>
      <p><strong>Scott's Auto & Clutch Repair</strong><br>
      ${site.fullAddress}<br>
      Phone: <a href="tel:+18014854089">(801) 485-4089</a></p>
    `
  });
});

// ── Shared URL catalogue (used by sitemap + IndexNow) ────────────────────────
const highVolumeBrands = new Set([
  'toyota-repair-salt-lake-city-ut', 'honda-repair-salt-lake-city-ut',
  'ford-repair-salt-lake-city-ut', 'chevrolet-repair-salt-lake-city-ut',
  'nissan-repair-salt-lake-city-ut', 'subaru-repair-salt-lake-city-ut',
  'mazda-repair-salt-lake-city-ut', 'hyundai-repair-salt-lake-city-ut',
  'kia-repair-salt-lake-city-ut', 'volkswagen-repair-salt-lake-city-ut',
  'jeep-repair-salt-lake-city-ut', 'dodge-repair-salt-lake-city-ut',
  'ram-repair-salt-lake-city-ut', 'gmc-repair-salt-lake-city-ut',
  'bmw-repair-salt-lake-city-ut', 'mercedes-benz-repair-salt-lake-city-ut',
  'audi-repair-salt-lake-city-ut', 'lexus-repair-salt-lake-city-ut',
  'acura-repair-salt-lake-city-ut', 'infiniti-repair-salt-lake-city-ut',
]);

// lastmod per data file — derived from the file's last git commit so the
// sitemap accurately reflects when each content type actually changed.
// Falls back to the deploy date if git isn't available (e.g. some hosts).
function gitMtime(relPath) {
  try {
    const out = require('child_process')
      .execSync(`git log -1 --format=%cI -- ${relPath}`, { cwd: __dirname, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    if (out) return out.slice(0, 10); // YYYY-MM-DD
  } catch (e) { /* fall through */ }
  return new Date().toISOString().slice(0, 10);
}
const LASTMOD = {
  services:        gitMtime('data/services.js'),
  symptoms:        gitMtime('data/symptoms.js'),
  locations:       gitMtime('data/locations.js'),
  geoPages:        gitMtime('data/geoPages.js'),
  serviceGeoPages: gitMtime('data/serviceGeoPages.js'),
  vehicleBrands:   gitMtime('data/vehicleBrandContent.js'),
  vehicleModels:   gitMtime('data/vehicleModels.js'),
  site:            gitMtime('data/site.js'),
  reviews:         gitMtime('data/reviews.json'),
};
// Most recent change across all content — used for the sitemap index and core pages
const LASTMOD_SITE   = Object.values(LASTMOD).sort().pop();
const LASTMOD_STABLE = '2025-01-15'; // legal pages — manually bumped when the actual policy changes

// Returns [{path, priority, freq, lastmod}] for every indexable URL on the site.
function getSitemapEntries() {
  const entries = [];
  const add = (path, priority = '0.8', freq = 'monthly', lastmod = LASTMOD_SITE) =>
    entries.push({ path, priority, freq, lastmod });

  add('/', '1.0', 'weekly', LASTMOD_SITE);
  add('/about', '0.7', 'monthly', LASTMOD.site);
  add('/contact', '0.8', 'monthly', LASTMOD.site);
  add('/services', '0.9', 'weekly', LASTMOD.services);
  add('/locations', '0.9', 'weekly', LASTMOD.locations);
  add('/symptoms', '0.9', 'weekly', LASTMOD.symptoms);
  add('/vehicle-brands', '0.8', 'weekly', LASTMOD.vehicleBrands);

  services.forEach(s => add('/services/' + s.slug, '0.8', 'monthly', LASTMOD.services));
  geoPages.forEach(g => add('/services/' + g.slug, '0.8', 'monthly', LASTMOD.geoPages));
  serviceGeoPages.forEach(g => add('/services/' + g.slug, '0.7', 'monthly', LASTMOD.serviceGeoPages));
  locations.forEach(l => add('/locations/' + l.slug, '0.9', 'monthly', LASTMOD.locations));
  symptoms.forEach(s => add('/symptoms/' + s.slug, '0.8', 'monthly', LASTMOD.symptoms));
  vehicleBrands.forEach(v => {
    add('/vehicle-brands/' + v.slug, highVolumeBrands.has(v.slug) ? '0.8' : '0.6', 'monthly', LASTMOD.vehicleBrands);
  });
  // Vehicle model pages
  Object.values(vehicleModels).forEach(makeData => {
    makeData.models.forEach(model => {
      add('/vehicle-brands/' + makeData.makeKey + '/' + model.slug + '-repair-salt-lake-city-ut', '0.7', 'monthly', LASTMOD.vehicleModels);
    });
  });

  add('/privacy', '0.3', 'yearly', LASTMOD_STABLE);
  add('/terms', '0.3', 'yearly', LASTMOD_STABLE);
  return entries;
}

// ── Sitemap helpers ───────────────────────────────────────────────────────────
function urlsetXml(entries) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  entries.forEach(({ path, priority, freq, lastmod }) => {
    xml += `  <url>\n    <loc>${site.domain}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  });
  return xml + `</urlset>`;
}

function sitemapRoute(path, entriesFn) {
  app.get(path, (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.send(urlsetXml(entriesFn()));
  });
}

// ── Sitemap index ─────────────────────────────────────────────────────────────
const SUB_SITEMAPS = [
  { slug: 'sitemap-core.xml',          label: 'Core pages' },
  { slug: 'sitemap-services.xml',      label: 'Service & geo pages' },
  { slug: 'sitemap-service-areas.xml', label: 'Service × area pages' },
  { slug: 'sitemap-locations.xml',     label: 'Location pages' },
  { slug: 'sitemap-symptoms.xml',      label: 'Symptom pages' },
  { slug: 'sitemap-vehicles.xml',      label: 'Vehicle brand pages' },
  { slug: 'sitemap-vehicle-models.xml', label: 'Vehicle model pages' },
];

// lastmod per sub-sitemap — the latest mtime across the data it contains
const SUB_SITEMAP_LASTMOD = {
  'sitemap-core.xml':           LASTMOD_SITE,
  'sitemap-services.xml':       [LASTMOD.services, LASTMOD.geoPages].sort().pop(),
  'sitemap-service-areas.xml':  LASTMOD.serviceGeoPages,
  'sitemap-locations.xml':      LASTMOD.locations,
  'sitemap-symptoms.xml':       LASTMOD.symptoms,
  'sitemap-vehicles.xml':       LASTMOD.vehicleBrands,
  'sitemap-vehicle-models.xml': LASTMOD.vehicleModels,
};

app.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml');
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  SUB_SITEMAPS.forEach(({ slug }) => {
    xml += `  <sitemap>\n    <loc>${site.domain}/${slug}</loc>\n    <lastmod>${SUB_SITEMAP_LASTMOD[slug]}</lastmod>\n  </sitemap>\n`;
  });
  xml += `</sitemapindex>`;
  res.send(xml);
});

// ── Sub-sitemaps ──────────────────────────────────────────────────────────────

// Core: homepage, section indexes, legal
sitemapRoute('/sitemap-core.xml', () => [
  { path: '/',              priority: '1.0', freq: 'weekly',  lastmod: LASTMOD_SITE },
  { path: '/services',      priority: '0.9', freq: 'weekly',  lastmod: LASTMOD.services },
  { path: '/locations',     priority: '0.9', freq: 'weekly',  lastmod: LASTMOD.locations },
  { path: '/symptoms',      priority: '0.9', freq: 'weekly',  lastmod: LASTMOD.symptoms },
  { path: '/vehicle-brands',priority: '0.8', freq: 'weekly',  lastmod: LASTMOD.vehicleBrands },
  { path: '/contact',       priority: '0.8', freq: 'monthly', lastmod: LASTMOD.site },
  { path: '/about',         priority: '0.7', freq: 'monthly', lastmod: LASTMOD.site },
  { path: '/privacy',       priority: '0.3', freq: 'yearly',  lastmod: LASTMOD_STABLE },
  { path: '/terms',         priority: '0.3', freq: 'yearly',  lastmod: LASTMOD_STABLE },
]);

// Services: individual service detail pages + clutch geo pages
sitemapRoute('/sitemap-services.xml', () => {
  const entries = [];
  services.forEach(s => entries.push({ path: '/services/' + s.slug, priority: '0.8', freq: 'monthly', lastmod: LASTMOD.services }));
  geoPages.forEach(g => entries.push({ path: '/services/' + g.slug, priority: '0.8', freq: 'monthly', lastmod: LASTMOD.geoPages }));
  return entries;
});

// Service × area: the 240 service-geo combo pages (15 services × 16 cities)
sitemapRoute('/sitemap-service-areas.xml', () =>
  serviceGeoPages.map(g => ({ path: '/services/' + g.slug, priority: '0.7', freq: 'monthly', lastmod: LASTMOD.serviceGeoPages }))
);

// Locations: individual location detail pages
sitemapRoute('/sitemap-locations.xml', () =>
  locations.map(l => ({ path: '/locations/' + l.slug, priority: '0.9', freq: 'monthly', lastmod: LASTMOD.locations }))
);

// Symptoms: symptom detail pages
sitemapRoute('/sitemap-symptoms.xml', () =>
  symptoms.map(s => ({ path: '/symptoms/' + s.slug, priority: '0.8', freq: 'monthly', lastmod: LASTMOD.symptoms }))
);

// Vehicles: all brand pages
sitemapRoute('/sitemap-vehicles.xml', () =>
  vehicleBrands
    .map(v => ({
      path: '/vehicle-brands/' + v.slug,
      priority: highVolumeBrands.has(v.slug) ? '0.8' : '0.6',
      freq: 'monthly',
      lastmod: LASTMOD.vehicleBrands,
    }))
);

// Vehicle model pages — all make/model pages
sitemapRoute('/sitemap-vehicle-models.xml', () => {
  const entries = [];
  Object.values(vehicleModels).forEach(makeData => {
    makeData.models.forEach(model => {
      entries.push({
        path: '/vehicle-brands/' + makeData.makeKey + '/' + model.slug + '-repair-salt-lake-city-ut',
        priority: highVolumeBrands.has(makeData.brandSlug) ? '0.7' : '0.5',
        freq: 'monthly',
        lastmod: LASTMOD.vehicleModels,
      });
    });
  });
  return entries;
});

// ── IndexNow — active crawl submission ───────────────────────────────────────
// IndexNow lets us push URLs directly to search engines instead of waiting for
// them to re-crawl. Bing indexes immediately; data is shared with other engines.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

if (INDEXNOW_KEY) {
  // Serve the key verification file at /{key}.txt as required by the protocol.
  app.get('/' + INDEXNOW_KEY + '.txt', (req, res) => {
    res.type('text/plain');
    res.send(INDEXNOW_KEY);
  });
}

async function submitIndexNow() {
  if (!INDEXNOW_KEY) return;

  const urlList = getSitemapEntries().map(e => site.domain + e.path);

  try {
    const resp = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(site.domain).hostname,
        key: INDEXNOW_KEY,
        keyLocation: `${site.domain}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });
    console.log(`IndexNow: submitted ${urlList.length} URLs — HTTP ${resp.status}`);
  } catch (err) {
    console.error('IndexNow submission failed:', err.message);
  }
}

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`# ${site.name}
# Standard crawlers
User-agent: *
Allow: /
Crawl-delay: 1

# AI search crawlers — explicitly allowed for search visibility
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GoogleOther
Allow: /

# Apple Intelligence search crawler
User-agent: Applebot-Extended
Allow: /

# Meta AI search crawler
User-agent: meta-externalagent
Allow: /

# Google-Extended powers AI Overviews / Gemini grounding — separate from Googlebot
User-agent: Google-Extended
Allow: /

# AI training-only crawlers — no search referral value, blocked
User-agent: CCBot
Disallow: /

User-agent: cohere-ai
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Diffbot
Disallow: /

User-agent: ImagesiftBot
Disallow: /

Sitemap: ${site.domain}/sitemap.xml`);
});

// ── 404 catch-all ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).render('404', {
    metaTitle: 'Page Not Found | Scott\'s Auto & Clutch Repair',
    metaDesc: 'The page you requested could not be found. Return to the homepage or browse our services.',
    canonical: '/404',
    noindex: true
  });
});

// Start
app.listen(PORT, () => {
  console.log(`SLC Auto Shop running at http://localhost:${PORT}`);
  // Submit all URLs to IndexNow on startup — kicks pages out of "discovered" queue.
  // Non-blocking: server serves requests immediately while this runs in the background.
  submitIndexNow();
});
