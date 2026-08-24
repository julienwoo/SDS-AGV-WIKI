---
title: AGV Status Meanings
severity: green
accessLevel: 1
alarmCode: N/A
---

## Overview

These are the statuses you will typically see for an AGV in RCS.

| Status | Meaning | Action Needed |
|---|---|---|
| Idle | AGV is Ready and waiting for a task | None — normal |
| Running | AGV is executing an assigned task | None — normal |
| Blocked | AGV's path is temporarily obstructed | Clear the path; see [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md) |
| Charging | AGV is docked and charging | None — normal |
| Fault | AGV has an active alarm and cannot operate | Check the alarm code; see relevant Troubleshooting article |
| Manual | AGV is under manual/operator control | None — expected while driving manually |
| Offline | AGV is not communicating with RCS | See [Communication Problem](../troubleshooting/communication.md) |
| Parked | AGV is powered on but intentionally out of the task pool | None — normal, e.g. after Shut-down procedure |
| E-Stop | Emergency stop is active | See [Emergency Stop Recovery](../operations/emergency-stop.md) |

## Notes

- `Blocked` is not itself a fault — it is expected behavior when the AGV's planned path is temporarily occupied. It should clear on its own within seconds once the obstruction is gone.
- `Fault` always has an associated alarm code — check the AGV screen or RCS alarm panel for the specific code and refer to [Alarm Codes](alarm-codes.md).
