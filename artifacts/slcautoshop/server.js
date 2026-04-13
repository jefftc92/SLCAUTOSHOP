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
// Routes
// ============================

// Home
app.get('/', (req, res) => {
  res.render('home', {
    activePage: 'home',
    metaTitle: 'Salt Lake City Auto Repair: SLC Auto Shop - Expert Care',
    metaDesc: "Expert auto repair in South Salt Lake, UT. Clutch repair, brake service, transmission work since 1990. Call (801) 485-4089.",
    canonical: '/',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": site.name,
      "image": site.domain + site.heroImage,
      "telephone": site.phone,
      "url": site.domain,
      "priceRange": "$$",
      "description": "Family-owned auto repair shop in South Salt Lake since 1990. Specializing in clutch repair, brake service, CV joint repair, timing chain and belt replacement, and complete auto service for all makes and models.",
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
        { "@type": "City", "name": "Sandy" }
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
    metaTitle: 'Salt Lake City Mechanics: About SLC Auto Shop - Experts',
    metaDesc: "Family-owned since 1990. 36+ years of expert auto repair in South Salt Lake. Call (801) 485-4089.",
    canonical: '/about'
  });
});

// Contact
app.get('/contact', (req, res) => {
  res.render('contact', {
    activePage: 'contact',
    metaTitle: 'Salt Lake City Auto Repair: Contact SLC Auto Shop',
    metaDesc: "Contact Scott's Auto and Clutch for a free quote. Clutch repair, brake service, transmission work. Call (801) 485-4089.",
    canonical: '/contact'
  });
});

// Services Index
app.get('/services', (req, res) => {
  res.render('services-index', {
    activePage: 'services',
    metaTitle: 'Salt Lake City Auto Repair Services: SLC Auto Shop',
    metaDesc: "Complete auto repair services in South Salt Lake. Clutch, brakes, timing, exhaust, and more. Call (801) 485-4089.",
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
      const clutchService = services.find(s => s.slug === 'clutch-repair-south-salt-lake-ut');
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

  // Add FAQPage schema if service has FAQs
  const allFaqs = (service.faq && service.faq.length > 0) ? service.faq : (serviceFaqs[service.slug] || []);
  if (allFaqs.length > 0) {
    schemaList.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    });
  }

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
    metaTitle: 'Utah Auto Repair Locations: SLC Auto Shop',
    metaDesc: "Scott's Auto and Clutch serves the entire Salt Lake Valley. Find your community. Call (801) 485-4089.",
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
    metaTitle: 'Car Symptom Diagnostic Guide: SLC Auto Shop',
    metaDesc: "What's wrong with your car? Browse our symptom guide for common vehicle problems. Free diagnosis. Call (801) 485-4089.",
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
    metaTitle: `South Salt Lake ${symptom.name} Repair: SLC Auto Shop`,
    metaDesc: `${symptom.name} repair in South Salt Lake. Expert diagnosis and repair since 1990. Call (801) 485-4089.`,
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
    metaTitle: 'Salt Lake City Car Brand Repair: SLC Auto Shop',
    metaDesc: "Expert repair for all vehicle brands. Toyota, Honda, Ford, Chevy, Subaru, BMW, and more. Call (801) 485-4089.",
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
    faqTitle: 'Frequently Asked Questions — ' + brand.name + ' Repair'
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

  const addUrl = (path, priority = '0.8', freq = 'monthly') => {
    xml += `  <url><loc>${site.domain}${path}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>\n`;
  };

  addUrl('/', '1.0', 'weekly');
  addUrl('/about', '0.7', 'monthly');
  addUrl('/contact', '0.8', 'monthly');
  addUrl('/services', '0.9', 'weekly');
  addUrl('/locations', '0.9', 'weekly');
  addUrl('/symptoms', '0.9', 'weekly');
  addUrl('/vehicle-brands', '0.9', 'weekly');

  services.forEach(s => addUrl('/services/' + s.slug));
  geoPages.forEach(g => addUrl('/services/' + g.slug));
  locations.forEach(l => addUrl('/locations/' + l.slug, '0.9'));
  symptoms.forEach(s => addUrl('/symptoms/' + s.slug));
  vehicleBrands.forEach(v => addUrl('/vehicle-brands/' + v.slug));

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

// 404 catch-all
app.use((req, res) => {
  res.status(404).render('404', { metaTitle: 'Page Not Found' });
});

// Start
app.listen(PORT, () => {
  console.log(`SLC Auto Shop running at http://localhost:${PORT}`);
});
