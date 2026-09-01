---
title: Site Operation Best Practices
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this page

Daily pallet and cargo-handling practices for operators, forklift drivers, and shift supervisors. Most of the faults in [Troubleshooting](#/category/troubleshooting) trace back to Sections 2–5 below — following these prevents a large share of them before they ever happen.

## 1. Power-On / Power-Off

Wait for the AGV to finish **initialization** and confirm status and localization look normal before dispatching tasks.

## 2. Empty Pallet Stacking

| Requirement | If violated |
|---|---|
| Counting from the bottom, the second pallet must not extend beyond the first pallet's edge | Horizontal in-position switch may not trigger correctly → positioning/detection fault |
| Stack must stay vertically aligned — no leaning or crooked pallets | AGV may collide with sensors during pickup/drop-off → equipment damage or a safety stop |

💡 Mark maximum stack height and allowable tilt on the floor so operators can self-check.

## 3. Pallet Barcode Placement

Affix the barcode **close to the pallet block/foot, as low as reasonably possible.** A barcode placed too high or at an inconsistent angle is a common cause of [Cargo Barcode Not Recognized](../troubleshooting/index.md#cargo-barcode-not-recognized).

## 4. Stretch Wrap Film

| Requirement | If violated |
|---|---|
| Film must not cover the pallet's fork-entry holes | Perception/localization fault during pickup |
| No loose or protruding edges — film fully adhered to the load | The AGV's 3D safety zone can mistake flapping film for an obstacle → [3D Guard Triggered by Pallet Wrap](../troubleshooting/index.md#3d-protection-close-range-trigger) or [Close-Range Laser Triggered](../troubleshooting/index.md#close-range-laser-triggered) |

💡 Do a visual check after wrapping and trim any loose or protruding film.

## 5. Pallet Placement

Place pallets **flat, centered, and aligned to the floor markings**, with no tilt — this matters most under racking, where clearance is already tight. A misaligned or tilted pallet can leave too little room for the AGV, triggering the safety laser or leaving it stuck under the rack. See [Cargo Detection Timeout](../troubleshooting/index.md#cargo-detection-timeout).

**Orientation for deep pallets:** per the project's technical specification, a pallet up to 1.2 m deep can be presented to the AGV from its short side. A pallet deeper than 1.2 m — including the 1.4 m pallets used on this site — must be turned so the AGV approaches it from the **long side** instead. Don't stand a 1.4 m pallet the other way around: presenting it from the short side leaves the AGV carrying an unstable load that can sway in transit.

**Cargo must not overhang the pallet.** If a load extends past the pallet's edges, square it up so it sits fully within the pallet's footprint before the AGV is dispatched to it.

## 6. Non-Standard Pallets

Irregular pallets (e.g., non-spec 4-way/4-hole pallets) should go through **manual forklift handling**, not the AGV automated flow — their dimensions can cause pickup failures, localization errors, or equipment damage.

## 7. Manual Work Near the AGV

Before reaching into the AGV's path or working by hand near it — clearing an obstacle, checking or wiping a sensor, adjusting a pallet or its wrap, freeing a jam — **press E-Stop first, even if the AGV already looks stopped.** Only release E-Stop once you've stepped clear and confirmed it's safe to resume.

## If a fault keeps recurring

Check compliance with Sections 2–5 first — these fault families are the most common downstream effect:

- Perception/cargo-detection faults (excessive cargo angle/offset, barcode not recognized, cargo detection timeout) → [Cargo Barcode Not Recognized](../troubleshooting/index.md#cargo-barcode-not-recognized), [Cargo Detection Timeout](../troubleshooting/index.md#cargo-detection-timeout)
- Safety protection triggers (close-range laser, 3D guard) → [Close-Range Laser Triggered](../troubleshooting/index.md#close-range-laser-triggered), [3D Protection Close-Range Trigger](../troubleshooting/index.md#3d-protection-close-range-trigger)
- Other load/unload safety check failures → escalate per your site's process
