# SLC Auto Shop — Node.js/Express Website

Scott's Auto and Clutch website built with **Express.js + EJS** (converted from React/Vite SSR).

## Quick Start

```bash
npm install
npm start
# → http://localhost:3000
```

For development with auto-reload:
```bash
npm run dev
```

## Project Structure

```
slcautoshop/
├── server.js              # Express server + all routes
├── package.json
├── data/                  # All site content (data-driven)
│   ├── site.js            # Global config (phone, address, hours, etc.)
│   ├── services.js        # 12 service pages with full content
│   ├── locations.js       # 17 service area pages
│   ├── symptoms.js        # 25 symptom pages
│   ├── vehicleBrands.js   # 41 vehicle brand pages
│   └── geoPages.js        # 16 clutch repair geo-variant pages
├── views/                 # EJS templates
│   ├── partials/          # Shared components (header, footer, CTA, etc.)
│   ├── home.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   ├── services-index.ejs
│   ├── service-detail.ejs
│   ├── locations-index.ejs
│   ├── location-detail.ejs
│   ├── symptoms-index.ejs
│   ├── symptom-detail.ejs
│   ├── vehicles-index.ejs
│   ├── vehicle-detail.ejs
│   ├── geo-clutch.ejs
│   ├── legal.ejs
│   └── 404.ejs
└── public/
    ├── css/style.css      # Full responsive stylesheet
    ├── images/            # Copy your images here
    └── assets/            # Copy your Vite-built assets here
```

## Routes (123 total pages)

| Route Pattern | Count | Template |
|---|---|---|
| `/` | 1 | home.ejs |
| `/about` | 1 | about.ejs |
| `/contact` | 1 | contact.ejs |
| `/services` | 1 | services-index.ejs |
| `/services/:slug` | 12 | service-detail.ejs |
| `/services/clutch-repair-near-*` | 16 | geo-clutch.ejs |
| `/locations` | 1 | locations-index.ejs |
| `/locations/:slug` | 17 | location-detail.ejs |
| `/symptoms` | 1 | symptoms-index.ejs |
| `/symptoms/:slug` | 25 | symptom-detail.ejs |
| `/vehicle-brands` | 1 | vehicles-index.ejs |
| `/vehicle-brands/:slug` | 41 | vehicle-detail.ejs |
| `/privacy` | 1 | legal.ejs |
| `/terms` | 1 | legal.ejs |
| `/sitemap.xml` | 1 | Generated |
| `/robots.txt` | 1 | Generated |

## Images Setup

Copy your existing image assets from the React build:

1. Copy `/images/hero.webp` and `/images/symptoms-hero.webp` → `public/images/`
2. Copy `/images/makes/` folder → `public/images/makes/`
3. Copy all `/assets/*.webp` files → `public/assets/`

The filenames (with Vite hashes like `clutch-400-BTrBnRFg.webp`) are preserved to match.

## Adding/Editing Content

All content lives in the `data/` directory as plain JavaScript objects. To add a new service, location, symptom, or vehicle brand, just add an entry to the appropriate data file — no template changes needed.

## SEO Features

- Server-rendered HTML (no JavaScript required for content)
- Auto-generated sitemap.xml with all 123 pages
- robots.txt
- Canonical URLs on every page
- JSON-LD structured data on homepage
- Breadcrumb navigation on all inner pages
- Proper meta titles and descriptions
- Semantic HTML with proper heading hierarchy

## Deployment

Works on any Node.js host (Render, Railway, DigitalOcean, VPS, etc.):

```bash
# Set PORT env var if needed (defaults to 3000)
PORT=8080 npm start
```

For production, consider adding a reverse proxy (nginx/Caddy) in front for SSL termination and static file caching.
