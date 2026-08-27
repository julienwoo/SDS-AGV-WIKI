---
title: Site Operation Best Practices
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this page

Daily pallet and cargo-handling practices for operators, forklift drivers, and shift supervisors. Most of the faults in [Troubleshooting](#/category/troubleshooting) trace back to Sections 2–5 below — following these prevents a large share of them before they ever happen.

## 1. Power-On / Power-Off

Wait for the AGV to finish **initialization** and confirm status and localization look normal before dispatching tasks — see [AGV Start-up](../operations/startup.md). Dispatching too early risks bad localization or abnormal task execution.

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

Place pallets **flat, centered, and aligned to the floor markings**, with no tilt — this matters most under racking, where clearance is already tight. A misaligned or tilted pallet can leave too little room for the AGV, triggering the safety laser or leaving it stuck under the rack. See [Insufficient Adaptive Insertion Space](../troubleshooting/adaptive-space-insufficient.md) and [Perception Detection Timeout](../troubleshooting/perception-timeout.md).

## 6. Non-Standard Pallets

Irregular pallets (e.g., non-spec 4-way/4-hole pallets) should go through **manual forklift handling**, not the AGV automated flow — their dimensions can cause pickup failures, localization errors, or equipment damage.

## If a fault keeps recurring

Check compliance with Sections 2–5 first — these fault families are the most common downstream effect:

- Perception/cargo-detection faults (excessive cargo angle/offset, barcode not recognized) → [Task Execution Problem](../troubleshooting/task-execution.md), [Cargo Barcode Not Recognized](../troubleshooting/barcode-not-recognized.md)
- Safety protection triggers (close-range laser, control-region slowdown/stop) → [Close-Range Laser Triggered](../troubleshooting/laser-triggered.md), [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md)
- Load/unload safety check failures (insufficient pickup clearance, loading/unloading safety exceptions) → [Task Execution Problem](../troubleshooting/task-execution.md), [Insufficient Adaptive Insertion Space](../troubleshooting/adaptive-space-insufficient.md)
