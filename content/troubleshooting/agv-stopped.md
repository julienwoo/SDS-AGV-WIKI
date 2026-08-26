---
title: AGV Stopped / Not Moving
severity: red
accessLevel: 1
alarmCode: StoppedLongTime / MainThreadTimeout / ManualMode / ControlRegionStop
---

## Symptom

- Powered on, no obvious alarm, won't move or accept new tasks
- Tri-color light stuck on standby pattern (see [Indicator Lights](../reference/indicator-lights.md))
- RCS: task not progressing, or AGV shows a fault status

## Alarm / Error

Shown on AGV screen and RCS:

- `StoppedLongTime` (0x02400013)
- `MainThreadTimeout` (0x0240001A)
- `LowDiskSpace` (0x02400019)
- `ManualMode` (0x0240001C)
- `ControlRegionSlowdown` / `ControlRegionStop` (0x0220020A / 0x0220020B)
- `ControlCenterStoppedLongTime` (0x0240020E)
- No code shown → check mode / E-Stop / path first (below)

Different code? → [Alarm Codes](../reference/alarm-codes.md)

## Recovery Steps

1. Check all 4 E-Stop positions (front + rear) — release if pressed → [Emergency Stop Recovery](../operations/emergency-stop.md)
2. Confirm rotary switch is on **Auto** → [Auto / Manual Mode](../operations/auto-manual-mode.md)
3. Clear anything blocking the path
4. Check battery — critically low? → [Charging Problem](charging.md)
5. [Reset](../operations/reset.md) the AGV, then press Start
6. Code was `ManualMode`? Reset is required before Auto resumes
