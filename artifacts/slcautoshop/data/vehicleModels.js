// Aggregator for per-brand vehicle model data.
// Each brand file lives in ./vehicleModels/ and exports
// { brandName, brandSlug, makeKey, models: [...] }.
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'vehicleModels');
const models = {};

fs.readdirSync(dir)
  .filter(f => f.endsWith('.js'))
  .forEach(f => {
    const data = require(path.join(dir, f));
    if (data && data.makeKey) models[data.makeKey] = data;
  });

module.exports = models;
