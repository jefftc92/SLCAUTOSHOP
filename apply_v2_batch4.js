#!/usr/bin/env node
// Applies v2 brand content from v2_content_batch4.js into vehicleBrandContent.js
// Handles the minor/discontinued brands in extendedBrandContent (insert before 'issues:')
// Run from the SLCAUTOSHOP root directory

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const TARGET = path.join(__dirname, 'artifacts/slcautoshop/data/vehicleBrandContent.js');
const BATCH4 = path.join(__dirname, 'v2_content_batch4.js');

let batch4Code = fs.readFileSync(BATCH4, 'utf8');
batch4Code = batch4Code.replace(/^const /gm, 'var ');
const ctx = vm.createContext({});
vm.runInContext(batch4Code, ctx);

const brands = {
  'Fiat':       ctx.fiatV2,
  'Jaguar':     ctx.jaguarV2,
  'Suzuki':     ctx.suzukiV2,
  'Isuzu':      ctx.isuzuV2,
  'Saab':       ctx.saabV2,
  'Saturn':     ctx.saturnV2,
  'Pontiac':    ctx.pontiacV2,
  'Mercury':    ctx.mercuryV2,
  'Plymouth':   ctx.plymouthV2,
  'Hummer':     ctx.hummerV2,
  'Scion':      ctx.scionV2,
  'Smart':      ctx.smartV2,
  'GM':         ctx.gmV2,
};

function serializeValue(val, baseIndent) {
  if (typeof val === 'string') {
    const escaped = val.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
    return `"${escaped}"`;
  }
  if (typeof val === 'number') return String(val);
  if (Array.isArray(val)) {
    const childIndent = baseIndent + '  ';
    const items = val.map(item => `${childIndent}${serializeValue(item, childIndent)}`);
    return `[\n${items.join(',\n')}\n${baseIndent}]`;
  }
  if (typeof val === 'object' && val !== null) {
    const childIndent = baseIndent + '  ';
    const props = Object.entries(val).map(
      ([k, v]) => `${childIndent}${k}: ${serializeValue(v, childIndent)}`
    );
    return `{\n${props.join(',\n')}\n${baseIndent}}`;
  }
  return String(val);
}

function brandToInsertionString(brandObj) {
  const BASE = '    ';
  const lines = Object.entries(brandObj).map(
    ([key, val]) => `${BASE}${key}: ${serializeValue(val, BASE)}`
  );
  return lines.join(',\n') + ',\n';
}

let content = fs.readFileSync(TARGET, 'utf8');
let modified = content;

for (const [brand, obj] of Object.entries(brands)) {
  if (!obj) {
    console.warn(`WARNING: no content found for ${brand} in batch4`);
    continue;
  }
  const marker = `  '${brand}': {\n    issues:`;
  if (!modified.includes(marker)) {
    console.warn(`WARNING: marker not found for '${brand}' — skipping`);
    continue;
  }
  const fields = brandToInsertionString(obj);
  modified = modified.replace(marker, `  '${brand}': {\n${fields}    issues:`);
  console.log(`✓  Applied v2 fields to ${brand}`);
}

fs.writeFileSync(TARGET, modified, 'utf8');
console.log('\nDone. vehicleBrandContent.js updated with minor brand v2 content.');
