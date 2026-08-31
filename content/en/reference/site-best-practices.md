---
title: Site Operation Best Practices
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this page

Daily pallet and cargo-handling practices for operators, forklift drivers, and shift supervisors. Most of the faults in [Troubleshooting](#/category/troubleshooting) trace back to Sections 2–5 below — following these prevents a large share of them before they ever happen.

## 1. Power-On / Power-Off

Wait for the AGV to finish **initialization** and confirm status and localization look normal before dispatching tasks — see [AGV Power On / Off](../operations/power-on-off.md). Dispatching too early risks bad localization or abnormal task execution.

## 2. Empty Pallet Stacking

| Requirement | If violated |
|---|---|
| Counting from the bottom, the second pallet must not extend beyond the first pallet's edge | Horizontal in-position switch may not trigger correctly → positioning/detection fault |
| Stack must stay vertically aligned — no leaning or crooked pallets | AGV may collide with sensors during pickup/drop-off → equipment damage or a safety stop |

💡 Mark maximum stack height and allowable tilt on the floor so operators can self-check.

## 3. Pallet Barcode Placement

Affix the barcode **close to the pallet block/foot, as low as reasonably possible.** A barcode placed too high or at an inconsistent angle is a common cause of [Cargo Barcode Not Recognized](../troubleshooting/barcode-not-recognized.md).

## 4. Stretch Wrap Film

| Requirement | If violated |
|---|---|
| Film must not cover the pallet's fork-entry holes | Perception/localization fault during pickup |
| No loose or protruding edges — film fully adhered to the load | The AGV's 3D safety zone can mistake flapping film for an obstacle → [3D Guard Triggered by Pallet Wrap](../troubleshooting/pallet-wrap-3d-guard.md) or [Close-Range Laser Triggered](../troubleshooting/laser-triggered.md) |

💡 Do a visual check after wrapping and trim any loose or protruding film.

## 5. Pallet Placement

Place pallets **flat, centered, and aligned to the floor markings**, with no tilt — this matters most under racking, where clearance is already tight. A misaligned or tilted pallet can leave too little room for the AGV, triggering the safety laser or leaving it stuck under the rack. See [Cargo Detection Timeout](../troubleshooting/perception-timeout.md).

**Orientation for deep pallets:** per the project's technical specification, a pallet up to 1.2 m deep can be presented to the AGV from its short side. A pallet deeper than 1.2 m — including the 1.4 m pallets used on this site — must be turned so the AGV approaches it from the **long side** instead (see [Pallet & Cargo Dimensions](../operations/pallet-dimensions.md)). Don't stand a 1.4 m pallet the other way around: presenting it from the short side leaves the AGV carrying an unstable load that can sway in transit.

**Cargo must not overhang the pallet.** If a load extends past the pallet's edges, square it up so it sits fully within the pallet's footprint before the AGV is dispatched to it.

## 6. Non-Standard Pallets

Irregular pallets (e.g., non-spec 4-way/4-hole pallets) should go through **manual forklift handling**, not the AGV automated flow — their dimensions can cause pickup failures, localization errors, or equipment damage.

## 7. Manual Work Near the AGV

Before reaching into the AGV's path or working by hand near it — clearing an obstacle, checking or wiping a sensor, adjusting a pallet or its wrap, freeing a jam — **press E-Stop first, even if the AGV already looks stopped.** Only release E-Stop once you've stepped clear and confirmed it's safe to resume — see [Emergency Stop Recovery](../operations/emergency-stop.md) for the full release procedure.

## If a fault keeps recurring

Check compliance with Sections 2–5 first — these fault families are the most common downstream effect:

- Perception/cargo-detection faults (excessive cargo angle/offset, barcode not recognized, cargo detection timeout) → [Cargo Barcode Not Recognized](../troubleshooting/barcode-not-recognized.md), [Cargo Detection Timeout](../troubleshooting/perception-timeout.md), or check [Alarm Codes](../reference/alarm-codes.md) for other codes in this family
- Safety protection triggers (close-range laser, 3D guard) → [Close-Range Laser Triggered](../troubleshooting/laser-triggered.md), [3D Protection Close-Range Trigger](../troubleshooting/pallet-wrap-3d-guard.md)
- Other load/unload safety check failures → check [Alarm Codes](../reference/alarm-codes.md) for the matching code and escalate per your site's process
