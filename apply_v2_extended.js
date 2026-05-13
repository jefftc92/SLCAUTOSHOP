#!/usr/bin/env node
// Applies v2 brand content from v2_content_batch3.js into vehicleBrandContent.js
// Handles the extendedBrandContent brands (insert before 'issues:' marker)
// Run from the SLCAUTOSHOP root directory

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const TARGET = path.join(__dirname, 'artifacts/slcautoshop/data/vehicleBrandContent.js');
const BATCH3 = path.join(__dirname, 'v2_content_batch3.js');

// Load batch3 variables into a sandbox context
// 'const' is block-scoped and won't pollute the context object — replace with 'var'
let batch3Code = fs.readFileSync(BATCH3, 'utf8');
batch3Code = batch3Code.replace(/^const /gm, 'var ');
const ctx = vm.createContext({});
vm.runInContext(batch3Code, ctx);

// Map exact brand key (as it appears in vehicleBrandContent.js) → variable name
const brands = {
  'Mercedes-Benz': ctx.mercedesV2,
  'Audi':          ctx.audiV2,
  'Lexus':         ctx.lexusV2,
  'Acura':         ctx.acuraV2,
  'Infiniti':      ctx.infinitiV2,
  'Ram':           ctx.ramV2,
  'GMC':           ctx.gmcV2,
  'Buick':         ctx.buickV2,
  'Cadillac':      ctx.cadillacV2,
  'Chrysler':      ctx.chryslerV2,
  'Lincoln':       ctx.lincolnV2,
  'Volvo':         ctx.volvoV2,
  'Land Rover':    ctx.landRoverV2,
  'Porsche':       ctx.porscheV2,
  'MINI':          ctx.miniV2,
  'Mitsubishi':    ctx.mitsubishiV2,
};

// ─────────────────────────────────────────────────────────────────────────────
// Recursive JS serializer — produces JS source text (not JSON)
// ─────────────────────────────────────────────────────────────────────────────

function serializeValue(val, baseIndent) {
  if (typeof val === 'string') {
    const escaped = val
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n');
    return `"${escaped}"`;
  }
  if (typeof val === 'number') {
    return String(val);
  }
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

// Convert a brand v2 object to the insertion string (4-space base indent)
function brandToInsertionString(brandObj) {
  const BASE = '    ';
  const lines = Object.entries(brandObj).map(
    ([key, val]) => `${BASE}${key}: ${serializeValue(val, BASE)}`
  );
  return lines.join(',\n') + ',\n';
}

// ─────────────────────────────────────────────────────────────────────────────
// Apply insertions
// ─────────────────────────────────────────────────────────────────────────────

let content = fs.readFileSync(TARGET, 'utf8');
let modified = content;

for (const [brand, obj] of Object.entries(brands)) {
  if (!obj) {
    console.warn(`WARNING: no content found for ${brand} in batch3`);
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
console.log('\nDone. vehicleBrandContent.js updated with extended brand v2 content.');
