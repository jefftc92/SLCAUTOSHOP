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

  next();
});

// ============================
// Routes
// ============================

// Home
app.get('/', (req, res) => {
  res.render('home', {
    activePage: 'home',
    metaTitle: "Auto Repair Salt Lake City | Scott's Auto & Clutch Since 1990",
    metaDesc: "Family-owned auto repair shop in South Salt Lake. Brakes, clutch, transmission, engine work, and full service for every make and model. Free estimates. (801) 485-4089.",
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
    }
  });
});

// About
app.get('/about', (req, res) => {
  res.render('about', {
    activePage: 'about',
    metaTitle: "About Scott's Auto & Clutch | Our Story, Team, and Shop",
    metaDesc: "Meet the family behind our shop. 36+ years keeping Salt Lake Valley drivers on the road with straight answers, careful work, and no surprises at checkout.",
    canonical: '/about'
  });
});

// Contact
app.get('/contact', (req, res) => {
  res.render('contact', {
    activePage: 'contact',
    metaTitle: "Contact Us | Scott's Auto & Clutch in South Salt Lake",
    metaDesc: "Call, text, or visit for a free estimate. Located at 144 W Crystal Ave, open Mon–Fri 8 to 5:30. Walk-ins welcome. Reach us at (801) 485-4089.",
    canonical: '/contact'
  });
});

// Services Index
app.get('/services', (req, res) => {
  res.render('services-index', {
    activePage: 'services',
    metaTitle: "Auto Repair Services Salt Lake City | Scott's Auto & Clutch",
    metaDesc: "Full-service mechanic work in South Salt Lake. From oil changes to clutch replacement, drivetrain, exhaust, cooling, and suspension. All makes, one shop.",
    canonical: '/services'
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
        faqTitle: 'Frequently Asked Questions — Clutch Repair Near ' + geo.locationName
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
    faqTitle: 'Frequently Asked Questions — ' + service.fullName
  });
});

// Locations Index
app.get('/locations', (req, res) => {
  res.render('locations-index', {
    activePage: 'locations',
    metaTitle: "Service Areas | Auto Repair Across the Salt Lake Valley",
    metaDesc: "Serving 15+ Salt Lake Valley communities from our South Salt Lake shop. Find your neighborhood, get directions, or schedule a drop-off via TRAX.",
    canonical: '/locations'
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
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": site.domain + "/locations" },
        { "@type": "ListItem", "position": 3, "name": location.name, "item": site.domain + "/locations/" + location.slug }
      ]
    }
  });
});

// Symptoms Index
app.get('/symptoms', (req, res) => {
  res.render('symptoms-index', {
    activePage: 'symptoms',
    metaTitle: "What's Wrong With My Car? | Symptom Guide by Scott's Auto",
    metaDesc: "Hearing something unusual or seeing a warning light? Our symptom guide helps you understand common car issues before you visit the shop. Free diagnosis available.",
    canonical: '/symptoms'
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
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": site.domain + "/" },
        { "@type": "ListItem", "position": 2, "name": "Symptoms Guide", "item": site.domain + "/symptoms" },
        { "@type": "ListItem", "position": 3, "name": symptom.shortName, "item": site.domain + "/symptoms/" + symptom.slug }
      ]
    }
  });
});

// Vehicle Brands Index
app.get('/vehicle-brands', (req, res) => {
  res.render('vehicles-index', {
    activePage: 'vehicles',
    metaTitle: "Car Brands We Repair | Domestic, Import, and Luxury",
    metaDesc: "We service every major vehicle brand — from Toyota and Honda to BMW and Porsche. Same careful work, regardless of badge. Browse brands or call (801) 485-4089.",
    canonical: '/vehicle-brands'
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
    faqAlt: true
  });
});

// Privacy & Terms
app.get('/privacy', (req, res) => {
  res.render('legal', {
    metaTitle: 'Privacy Policy — SLC Auto Shop',
    metaDesc: "Privacy policy for Scott's Auto and Clutch website.",
    canonical: '/privacy',
    pageTitle: 'Privacy Policy',
    content: `
      <h2>Information We Collect</h2>
      <p>When you contact us by phone, text, or through our website, we may collect your name, phone number, email address, and vehicle information to provide you with a quote or service.</p>
      <h2>How We Use Your Information</h2>
      <p>We use your information solely to provide automotive repair services, communicate with you about your vehicle, and improve our services. We do not sell or share your personal information with third parties.</p>
      <h2>Contact</h2>
      <p>If you have questions about this privacy policy, contact us at <a href="tel:+18014854089">(801) 485-4089</a> or visit us at ${site.fullAddress}.</p>
    `
  });
});

app.get('/terms', (req, res) => {
  res.render('legal', {
    metaTitle: 'Terms of Service — SLC Auto Shop',
    metaDesc: "Terms of service for Scott's Auto and Clutch website.",
    canonical: '/terms',
    pageTitle: 'Terms of Service',
    content: `
      <h2>Services</h2>
      <p>Scott's Auto and Clutch provides automotive repair and maintenance services. All estimates are provided before work begins. Final charges may vary if additional issues are discovered during repair, but we will always contact you for approval before proceeding.</p>
      <h2>Warranty</h2>
      <p>We stand behind our work. Specific warranty terms vary by service and are provided at the time of repair.</p>
      <h2>Limitation of Liability</h2>
      <p>This website is provided for informational purposes. While we strive to keep information accurate, we make no warranties about the completeness or accuracy of information on this site.</p>
      <h2>Contact</h2>
      <p>Questions about these terms? Contact us at <a href="tel:+18014854089">(801) 485-4089</a>.</p>
    `
  });
});

// Sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.set('Content-Type', 'application/xml');
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  const addUrl = (path, priority = '0.8', freq = 'monthly', lastmod = '2025-01-01') => {
    xml += `  <url><loc>${site.domain}${path}</loc><lastmod>${lastmod}</lastmod><changefreq>${freq}</changefreq><priority>${priority}</priority></url>\n`;
  };

  addUrl('', '1.0', 'weekly', '2025-04-01');
  addUrl('/about', '0.7', 'monthly', '2025-01-01');
  addUrl('/contact', '0.8', 'monthly', '2025-01-01');
  addUrl('/services', '0.9', 'weekly', '2025-03-01');
  addUrl('/locations', '0.9', 'weekly', '2025-03-01');
  addUrl('/symptoms', '0.9', 'weekly', '2025-04-01');
  addUrl('/vehicle-brands', '0.9', 'weekly', '2025-02-01');

  services.forEach(s => addUrl('/services/' + s.slug, '0.8', 'monthly', '2025-03-01'));
  geoPages.forEach(g => addUrl('/services/' + g.slug, '0.8', 'monthly', '2025-04-01'));
  locations.forEach(l => addUrl('/locations/' + l.slug, '0.9', 'monthly', '2025-03-01'));
  symptoms.forEach(s => addUrl('/symptoms/' + s.slug, '0.8', 'monthly', '2025-04-01'));
  vehicleBrands.forEach(v => addUrl('/vehicle-brands/' + v.slug, '0.7', 'monthly', '2025-02-01'));

  addUrl('/privacy', '0.3', 'yearly', '2025-01-01');
  addUrl('/terms', '0.3', 'yearly', '2025-01-01');

  xml += `</urlset>`;
  res.send(xml);
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml`);
});

// 404 catch-all
app.use((req, res) => {
  res.status(404).render('404', { metaTitle: 'Page Not Found' });
});

// Start
app.listen(PORT, () => {
  console.log(`SLC Auto Shop running at http://localhost:${PORT}`);
});
