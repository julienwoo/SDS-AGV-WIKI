---
title: Localization Problem
severity: red
accessLevel: 2
alarmCode: LowReliability 0x02300014 / OffPath 0x0230001B
---

📁 **Reference material** — full alarm-code detail from the AGV manual, kept for lookup; not part of the current Troubleshooting quick-reference list.

## Symptom

- AGV position on RCS map doesn't match its real position on the floor
- Visibly drifts off its expected path
- May stop mid-travel with an alarm

## Alarm / Error

Shown on AGV screen and RCS:

- `OffPath` (0x0230001B) — vehicle off track
- `LowReliability` (0x02300014) — pose not reliable

## Recovery Steps

1. Compare RCS map position vs. the AGV's real position on the floor
2. Check the area for recent changes (new racking, moved pallets/equipment)
3. Code is `OffPath` → [switch to Manual](../operations/auto-manual-mode.md), [drive](../operations/manual-driving.md) the AGV back onto its path
4. Code is `LowReliability` → needs manual calibration/relocalization → [Manual Relocalization](../operations/manual-relocalization.md)
5. Confirm position matches real position before switching back to Auto
