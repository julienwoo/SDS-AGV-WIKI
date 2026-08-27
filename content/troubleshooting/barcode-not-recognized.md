---
title: Cargo Barcode Not Recognized
severity: yellow
accessLevel: 1
alarmCode: UnrecognizedBarcode 0x0240001D / NoneTargetBarcode 0x0240002F
---

🧭 **Prevention** — correct barcode placement (Section 3 of [Site Operation Best Practices](../reference/site-best-practices.md)) avoids most of these.

## Symptom

- AGV stops at the pickup point and won't proceed with loading
- Task stalls, or shows **Task Error** instead of progressing to Loaded

## Alarm / Error

Shown on AGV screen and RCS:

- `UnrecognizedBarcode` (0x0240001D) — cargo barcode not recognized
- `NoneTargetBarcode` (0x0240002F) — target barcode not recognized

## Recovery Steps

1. Check the barcode is present, undamaged, and legible
2. Reposition the barcode so it sits fully inside the scan area
3. Retry the scan

Broader load/fork-related fault, or a different code from this family? → [Task Execution Problem](task-execution.md) (Reference — full code table and legacy procedure)
