#!/usr/bin/env node

/**
 * Downloads ALL images from slcautoshop.com for the Node.js site.
 * Auto-discovers vehicle brand hero images by scraping each brand page.
 * 
 * Usage:
 *   cd slcautoshop
 *   node download-images.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://slcautoshop.com';

// Known static images (logos, heroes, service thumbnails)
const staticImages = [
  '/assets/header-logo-CbiMbQv6.webp',
  '/assets/footer-logo-C8pF513W.webp',
  '/assets/hero-600-DnXM3vMX.webp',
  '/images/hero.webp',
  '/images/symptoms-hero.webp',
  '/assets/clutch-400-BTrBnRFg.webp',
  '/assets/cv-joint-400-DttndxJM.webp',
  '/assets/brake-400-CLKCOOBz.webp',
  '/assets/timing-chain-400-DglkDYua.webp',
  '/assets/water-pump-400-D_c-HhIr.webp',
  '/assets/exhaust-400-B277Cfgd.webp',
  '/assets/catalytic-400-2YczmCtR.webp',
  '/assets/struts-400-CBnjcX0e.webp',
  '/assets/timing-belt-400-DGv-XrDO.webp',
  '/assets/welding-400-ClOrwKIX.webp',
  '/assets/shocks-400-5JfGLf4L.webp',
  '/assets/complete-auto-400-DKNHQ0l2.webp',
];

// Vehicle brand slugs to scrape for hero images
const brandSlugs = [
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
  'bmw-repair-salt-lake-city-ut',
  'mercedes-benz-repair-salt-lake-city-ut',
  'audi-repair-salt-lake-city-ut',
  'lexus-repair-salt-lake-city-ut',
  'acura-repair-salt-lake-city-ut',
  'infiniti-repair-salt-lake-city-ut',
  'jeep-repair-salt-lake-city-ut',
  'dodge-repair-salt-lake-city-ut',
  'ram-repair-salt-lake-city-ut',
  'gmc-repair-salt-lake-city-ut',
  'buick-repair-salt-lake-city-ut',
  'cadillac-repair-salt-lake-city-ut',
  'chrysler-repair-salt-lake-city-ut',
  'lincoln-repair-salt-lake-city-ut',
  'volvo-repair-salt-lake-city-ut',
  'land-rover-repair-salt-lake-city-ut',
  'jaguar-repair-salt-lake-city-ut',
  'porsche-repair-salt-lake-city-ut',
  'mini-repair-salt-lake-city-ut',
  'mitsubishi-repair-salt-lake-city-ut',
  'fiat-repair-salt-lake-city-ut',
  'suzuki-repair-salt-lake-city-ut',
  'isuzu-repair-salt-lake-city-ut',
  'saab-repair-salt-lake-city-ut',
  'saturn-repair-salt-lake-city-ut',
  'pontiac-repair-salt-lake-city-ut',
  'mercury-repair-salt-lake-city-ut',
  'plymouth-repair-salt-lake-city-ut',
  'hummer-repair-salt-lake-city-ut',
  'scion-repair-salt-lake-city-ut',
  'smart-repair-salt-lake-city-ut',
  'gm-repair-salt-lake-city-ut',
];

function fetchText(urlPath) {
  return new Promise((resolve, reject) => {
    https.get(BASE + urlPath, (res) => {
      if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); res.resume(); return; }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(urlPath, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const doRequest = (url) => {
      https.get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) { doRequest(res.headers.location); return; }
        if (res.statusCode !== 200) { reject(new Error(`HTTP ${res.statusCode}`)); res.resume(); return; }
        const file = fs.createWriteStream(destPath);
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
        file.on('error', reject);
      }).on('error', reject);
    };
    doRequest(BASE + urlPath);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('');
  console.log('  SLC Auto Shop — Image Downloader');
  console.log('  ================================\n');

  const allImages = new Set();
  staticImages.forEach(img => allImages.add(img));
  console.log(`[1/4] ${staticImages.length} static images queued.\n`);

  // Discover brand hero images
  console.log('[2/4] Discovering vehicle brand hero images...');
  const brandHeroMap = {};

  for (const slug of brandSlugs) {
    try {
      const html = await fetchText('/vehicle-brands/' + slug);
      const match = html.match(/src="(\/images\/makes\/[^"]+)"/);
      if (match) {
        brandHeroMap[slug] = match[1];
        allImages.add(match[1]);
        console.log('  found: ' + path.basename(match[1]));
      } else {
        console.log('  skip:  ' + slug + ' (no hero image)');
      }
      await sleep(100);
    } catch (err) {
      console.log('  error: ' + slug + ' (' + err.message + ')');
    }
  }
  console.log(`\n  → ${Object.keys(brandHeroMap).length} brand hero images discovered.\n`);

  // Download all
  const imageList = [...allImages];
  console.log(`[3/4] Downloading ${imageList.length} images...\n`);

  let ok = 0, fail = 0;
  for (const imgPath of imageList) {
    const destPath = 'public' + imgPath;
    try {
      await downloadFile(imgPath, destPath);
      const kb = (fs.statSync(destPath).size / 1024).toFixed(1);
      console.log('  OK  ' + kb.padStart(7) + ' KB  ' + destPath);
      ok++;
    } catch (err) {
      console.log('  FAIL        ' + destPath + '  (' + err.message + ')');
      fail++;
    }
    await sleep(50);
  }

  // Update vehicleBrands.js data with discovered hero images
  console.log(`\n[4/4] Updating data/vehicleBrands.js with hero image paths...`);
  const dataPath = path.join(__dirname, 'data', 'vehicleBrands.js');
  let src = fs.readFileSync(dataPath, 'utf8');
  let updates = 0;

  for (const [slug, imgPath] of Object.entries(brandHeroMap)) {
    // Replace: heroImage: null  →  heroImage: "/images/makes/..."
    const re = new RegExp(
      `(slug:\\s*"${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*?heroImage:\\s*)(?:null|"[^"]*")`,
      's'
    );
    const replacement = `$1"${imgPath}"`;
    const newSrc = src.replace(re, replacement);
    if (newSrc !== src) { src = newSrc; updates++; }
  }

  fs.writeFileSync(dataPath, src);
  console.log(`  → Updated ${updates} brand entries.\n`);

  console.log('────────────────────────────────────────');
  console.log(`Done: ${ok} downloaded, ${fail} failed.`);
  if (fail === 0) {
    console.log('\nAll images ready! Start your site: npm start');
  } else {
    console.log('\nSome downloads failed. Re-run to retry.');
  }
  console.log('────────────────────────────────────────\n');
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
