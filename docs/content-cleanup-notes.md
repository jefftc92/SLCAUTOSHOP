# Factual content cleanup

This change corrects identified errors and overly certain claims in customer-facing copy. It keeps the existing pages and URLs. It is not a certification of every automotive statement or a prediction of Google rankings.

## Changes

- Replace incorrect turn-by-turn directions and unsupported TRAX walking-time claims with the shop address and existing directions link. Remove the unreliable landmark blocks; maps remain available.
- Replace city-specific clutch lifespan predictions and diagnoses based only on geography, pedal position, or rollback with symptoms to report and checks that distinguish possible causes.
- Explain that a cooling-system pressure test checks for leaks, not thermostat operation or coolant circulation. Make combined water-pump, thermostat, and timing-belt recommendations engine-specific.
- Distinguish symptoms from confirmed failures, including warning lights, emissions-test failures, vibration, exhaust odor, and milky oil.
- Correct model-generation counts in Kia and Smart copy; remove the blanket Acura TL timing-belt interval and unsupported J-series VTC claim.
- Remove selected unsupported local demographic, competitor, tire-fitment, and maintenance-schedule assertions. Replace awkward symptom headings and selected filler with information relevant to the section.

The landmark removals account for much of the deleted text. No service, location, symptom, brand, or model page is consolidated or deleted.

## Shop details requiring owner confirmation

These existing claims were not silently replaced with invented policies:

| Topic | Confirmation needed |
| --- | --- |
| Saturday appointments | The home FAQ offers appointments by request, while other hours information says closed. Are exceptions available? |
| Diagnostic fees | The home FAQ describes charges for complex diagnostics; many service pages advertise free diagnosis. Which checks are free, and when does a fee apply? |
| Warranty | Does the two-year parts-and-labor warranty apply to every repair? Confirm mileage limits and exclusions. |
| Pricing and savings | Confirm the $800–$1,800 clutch estimate and the advertised 20–40% dealer savings before treating them as current promises. |
| Towing | Confirm the free-towing offer for repairs over $1,000, including distance and eligibility limits. |
| Capabilities and availability | Confirm claims about factory-level equipment, hybrid/ADAS work, stock, and same-day completion. |
| Travel estimates | Existing city-level distance and drive-time summaries remain approximate and have not been individually measured from a defined starting address. Use current map directions to plan a visit. |

This pass addresses identified content problems; remaining model-specific schedules and repair claims should be checked against the applicable manufacturer service information before presenting them as verified facts.

## Validation

The local server runs with IndexNow disabled during verification. The full sitemap crawl checks all 728 pages across seven sitemaps for successful rendering, one H1, a matching production canonical, a nonempty unique title and meta description, and no noindex directive. It also checks internal page links, image sources, reachability from the homepage, and JSON-LD syntax.

An existing separate issue remains: 256 pages render more than one FAQPage schema object. This copy change does not alter schema generation.
