---
title: Troubleshooting: Common Faults
accessLevel: 1
alarmCode: N/A
---

## Safety Rule: E-Stop Before Every Fault Fix

Before doing any hands-on step below — clearing an obstacle, checking a sensor, adjusting a pallet, reaching anywhere near the AGV — **press E-Stop first, even if the AGV already looks stopped.** Confirm the area is genuinely safe before you touch anything.

Once the fix is done: release E-Stop only after you've stepped clear and confirmed it's safe to resume, then Reset and Start.

This one rule applies to every fault below, so it isn't repeated in each individual section.

---

## Cargo Barcode Not Recognized

🧭 **Prevention** — correct barcode placement (Section 3 of [Site Operation Best Practices](../reference/site-best-practices.md)) avoids most of these.

### Symptom

- AGV stops at the pickup point and won't proceed with loading
- Task stalls, or shows **Task Error** instead of progressing to Loaded
- Shown on AGV screen and RCS: `UnrecognizedBarcode` (0x0240001D) — cargo barcode not recognized, or `NoneTargetBarcode` (0x0240002F) — target barcode not recognized

### Recovery Steps

1. Check the barcode is present, undamaged, and legible
2. Reposition the barcode so it sits fully inside the scan area
3. Retry the scan

Broader load/fork-related fault, or a different code from this family? → escalate per your site's process.

---

## Close-Range Laser Triggered

### Symptom

- Stops abruptly mid-travel
- Red flashing light + alarm sound (see [Indicator Lights](../reference/indicator-lights.md))
- Fault name shown: 近距激光触发 (laser close-range trigger); on AGV screen and RCS: `LaserClose` (0x02100206) — object detected in the short-range zone

Different code (`LaserBreakdown`, `LaserCloseDisabled`)? → `LaserBreakdown` is a hardware fault — stop and escalate, do not reset

### Recovery Steps

Work through these in order. If a step resolves it, stop there — no need to continue. If the laser is still tripped after a step, move on to the next one.

1. Check front, side, and rear of the AGV and remove any obstacle or person in its path.
2. Confirm exactly which laser tripped, then check right around it for anything fallen or blocking it.
3. Path and laser confirmed clear → Reset, then Start.
4. Still trips at the same spot → manually move the AGV past that path segment, then Reset + Start to resume from there.
5. Still not resolved → manually complete the task, then log the exact location + AGV ID and hand off per your site's process.

---

## 3D Protection Close-Range Trigger

🧭 **Prevention** — see Section 4 (Stretch Wrap Film) of [Site Operation Best Practices](../reference/site-best-practices.md): no loose or protruding film, fully adhered to the load.

### Symptom

- AGV stops even though the path looks clear
- Fault name shown: 立体防护触发 (3D protection close-range trigger) — loose or flapping plastic wrap, or loose paper, around the pallet trips the AGV's 3D protection zone, a separate system from the safety laser (see [Close-Range Laser Triggered](index.md#close-range-laser-triggered) above if the fault name is laser-related instead)

### Recovery Steps

1. Check for and remove any loose or flapping plastic wrap or paper around the pallet and goods.
2. Still triggering? Check the AGV's Servo Display to pinpoint the obstacle's exact location, then clear it.
3. Retry.

---

## Cargo Detection Timeout

🧭 **Prevention** — see Section 5 (Pallet Placement) of [Site Operation Best Practices](../reference/site-best-practices.md): correct lateral offset/angle before it reaches the AGV.

### Symptom

- AGV stops trying to verify the cargo before pickup, even though nothing looks obviously wrong
- Fault name shown: 货物检测超时 (cargo detection timeout); on AGV screen and RCS: `NoGoodsDetected` (0x02400027) — "Cargo detection timeout, please check if any cargo present"

Usually a pallet-placement or pallet-dimension issue, not a hardware fault.

### Recovery Steps

1. Lateral offset or angle too large? Correct the pallet's placement, then retry.
2. Still timing out after correcting placement → measure the pallet's actual dimensions, then register them in RoboTune.
3. Manually complete the current task if it needs to be cleared while the dimensions get fixed.

---

## Storage Bin Status Mismatch

### Symptom

In an area monitored by the "明眸" (Mingmou) vision camera system, the AGV is dispatched to deliver a pallet to a storage bin that the camera shows as already occupied. RCS's bin status disagrees with what the vision camera actually sees at that location — the destination bin already has cargo in it, but the task was dispatched there anyway (see [StorageBin Occupancy and Usage Status](../reference/rcs-ui-basics.md#4-storagebin-occupancy-and-usage-status)).

### Recovery Steps

1. Have the site move away the cargo in the AGV's target bin and in front of it, then let the AGV continue its current task.
