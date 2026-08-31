---
title: Close-Range Laser Triggered
severity: red
accessLevel: 1
alarmCode: LaserClose 0x02100206
---

🧭 **Prevention** — loose stretch wrap and misaligned pallets are common triggers; see Sections 4–5 of [Site Operation Best Practices](../reference/site-best-practices.md).

## Symptom

- Stops abruptly mid-travel
- Red flashing light + alarm sound (see [Indicator Lights](../reference/indicator-lights.md))
- Fault name shown: 近距激光触发 (laser close-range trigger)

## Alarm / Error

Shown on AGV screen and RCS:

- `LaserClose` (0x02100206) — object detected in the short-range zone

Different code (`LaserBreakdown`, `LaserCloseDisabled`)? → check [Alarm Codes](../reference/alarm-codes.md); `LaserBreakdown` is a hardware fault — stop and escalate, do not reset

## Recovery Steps

Work through these in order. If a step resolves it, stop there — no need to continue. If the laser is still tripped after a step, move on to the next one.

1. Check front, side, and rear of the AGV and remove any obstacle or person in its path.
2. Confirm exactly which laser tripped, then check right around it for anything fallen or blocking it.
3. Path and laser confirmed clear → [Reset](../operations/reset.md), then Start.
4. Still trips at the same spot → manually move the AGV past that path segment, then Reset + Start to resume from there.
5. Still not resolved → [manually complete the task](../operations/manual-task-complete.md), then log the exact location + AGV ID and hand off per your site's process.
