'use strict';
// Service-defined hero blurbs for city × service pages.
// One per service; {{CITY}} is replaced with the city name at render time.
// The city stays geographical; the service determines the meaning of the page.
// Each hero: (1) what Scott's does for that city's drivers, (2) diagnosis-first approach.

const serviceHeros = {
  'clutch-repair':
    "Scott's Auto & Clutch repairs slipping, worn, and malfunctioning clutches for {{CITY}} drivers at our South Salt Lake shop. We diagnose the clutch and hydraulic system first to determine whether the problem needs adjustment, hydraulic repair, or a complete clutch replacement.",

  'brake-service':
    "Scott's provides brake diagnosis and repair for {{CITY}} drivers at our South Salt Lake shop, including pads, rotors, calipers, and hydraulic brake problems. We inspect the braking system first so the repair addresses the actual source of the noise, vibration, or reduced stopping power.",

  'cv-joint-repair':
    "Scott's diagnoses and repairs worn CV joints and axles for {{CITY}} drivers at our South Salt Lake shop, from torn boots to the clicking you hear on turns. We inspect the joint and boot condition first to confirm whether a reboot or a full axle replacement is the right fix.",

  'timing-chain-repair':
    "Scott's diagnoses and replaces worn timing chains, tensioners, and guides for {{CITY}} drivers at our South Salt Lake shop. We verify the noise or code is actually the timing chain before recommending the job, since a cold-start rattle can have more than one cause.",

  'water-pump-replacement':
    "Scott's diagnoses and replaces leaking or failing water pumps for {{CITY}} drivers at our South Salt Lake shop. We check the cooling system first to confirm the water pump is actually causing the coolant loss or overheating before recommending replacement.",

  'exhaust-repair':
    "Scott's repairs exhaust leaks, damaged pipes, hangers, and mufflers for {{CITY}} drivers at our South Salt Lake shop. We trace the leak or noise from manifold to tailpipe first so the repair fixes the actual failure point rather than replacing good parts.",

  'catalytic-converter-service':
    "Scott's diagnoses and services catalytic converter problems for {{CITY}} drivers at our South Salt Lake shop, including P0420 codes, failed emissions, and theft replacements. We confirm the converter is actually the fault first, since upstream sensor and engine issues can trigger the same code.",

  'strut-replacement':
    "Scott's diagnoses and replaces worn struts for {{CITY}} drivers at our South Salt Lake shop, addressing a bouncy ride, nose-dive under braking, and uneven tire wear. We inspect the full strut assembly and mounts first to confirm what's actually worn before recommending replacement.",

  'timing-belt-replacement':
    "Scott's inspects and replaces timing belts for {{CITY}} drivers at our South Salt Lake shop, before an aging belt fails and damages the engine. We check the belt, tensioner, and related components together so the job is done once and done right.",

  'welding-services':
    "Scott's provides automotive welding for {{CITY}} drivers at our South Salt Lake shop, from exhaust and bracket repairs to structural and fabrication work. We assess the metal and the failure first to determine whether a weld repair or a replacement part is the sounder fix.",

  'shock-replacement':
    "Scott's diagnoses and replaces worn shocks for {{CITY}} drivers at our South Salt Lake shop, addressing a rough ride, excessive bounce, and poor control over bumps. We inspect the shocks and suspension first to confirm what's actually worn before recommending replacement.",

  'complete-auto-service':
    "Scott's handles complete auto repair and maintenance for {{CITY}} drivers at our South Salt Lake shop, across brakes, drivetrain, cooling, exhaust, and engine work. We start every visit with a diagnosis so you know exactly what your vehicle needs before any work begins.",

  'head-gasket-repair':
    "Scott's diagnoses and repairs head gasket failures for {{CITY}} drivers at our South Salt Lake shop, from coolant loss and overheating to white exhaust smoke. We confirm the head gasket is the cause with proper testing first, since several problems can mimic the same symptoms.",

  'lift-leveling-kit-installation':
    "Scott's installs lift and leveling kits for {{CITY}} truck and SUV owners at our South Salt Lake shop, with proper alignment and component checks. We go over your goals and your vehicle first so the kit fits your tires, stance, and how you actually drive.",

  'check-engine-light-engine-repair':
    "Scott's diagnoses check engine lights and handles the engine repairs behind them for {{CITY}} drivers at our South Salt Lake shop. We pull live data and verify the actual fault first, so you're not replacing parts based on a code number alone.",

  'transmission-repair':
    "Scott's diagnoses and repairs transmission problems for {{CITY}} drivers at our South Salt Lake shop, from slipping and rough shifts to fluid service and rebuilds. We check the fluid, codes, and behavior first to determine what the transmission actually needs before recommending major work.",
};

// Resolve a hero for a given service key and city, with {{CITY}} filled in.
function getServiceHero(serviceKey, city) {
  const t = serviceHeros[serviceKey];
  return t ? t.replace(/\{\{CITY\}\}/g, city) : null;
}

module.exports = { serviceHeros, getServiceHero };
