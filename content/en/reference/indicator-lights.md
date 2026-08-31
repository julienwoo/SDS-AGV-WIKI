---
title: Indicator Lights
severity: green
accessLevel: 1
alarmCode: N/A
---

## About this table

The VNP15(VL)-66 has a **tri-color light** (red / green / yellow) with a left and right side, plus a **voice announcer**. Together they form the AGV's audible-visual alarm system. The table below is taken from the Operation Manual, Appendix 6 ("Correspondence Table of AGV Status and Audible and Visual Alarms").

| # | AGV Status | Left Light | Right Light | Voice |
|---|---|---|---|---|
| 1 | Initialization mode | Yellow, solid | Yellow, solid | Error voice (unless muted) |
| 2 | Manual mode | Red, flashing slowly | Red, flashing slowly | Error voice |
| 3 | Maintenance mode | Yellow, solid | Yellow, solid | No sound |
| 4 | Automatic mode, on standby | Yellow, solid | Yellow, solid | No sound |
| 5 | Before starting a loaded task (Auto) | Yellow, flashing slowly | Yellow, flashing slowly | No sound |
| 6 | First 2 seconds after starting a loaded task (Auto) | Green solid (forward start) / flashing (reverse start) | Green solid (forward start) / flashing (reverse start) | Departure voice |
| 7 | Paused | Yellow, flashing slowly | Yellow, flashing slowly | No sound |
| 8 | Moving straight forward (Auto) | Green, solid | Green, solid | "Forward-moving" voice |
| 9 | Moving straight backward (Auto) | Green, flashing slowly | Green, flashing slowly | "Reversing" voice |
| 10 | Forward, steering left (Auto) | Green, flashing slowly | Green, solid | "Left-turning" voice |
| 11 | Forward, steering right (Auto) | Green, solid | Green, flashing slowly | "Right-turning" voice |
| 18–19 | Automatic mode with low battery | Yellow, solid | Yellow, solid | Low-battery voice |
| 20 | Short-range laser triggered | Green/Yellow depending on motion state (see note) | Green/Yellow depending on motion state | Error voice (no sound if paused) |
| 21 | Laser shielded in Manual mode | Red, flashing slowly | Red, flashing slowly | "Laser shielded" voice |
| 22–23 | Level-3 error triggered | Red, flashing slowly | Red, flashing slowly | Error voice |
| 24 | Manual charging mode | Red, flashing slowly | Red, flashing slowly | Error voice |
| 25 | Automatic charging mode | Yellow, solid | Yellow, solid | No sound |

Row 20 (short-range laser trigger) changes with what the AGV was doing the instant the laser tripped: green flashing if it was reversing, green solid if it was moving forward, yellow solid if it was on standby, and yellow flashing with no sound if it was already paused — in every case an error voice plays except the paused case.

## General rule of thumb (from the manual's safety overview)

Section 4.6.6 of the manual gives this simpler summary, which is consistent with the table above for most states: vehicle moving forward = both lights solid green with a tick-tock sound; moving backward = both lights flashing green with a "reversing" announcement; turning left = left light flashing green, right light solid green; turning right = the mirror of that; on standby = both lights solid yellow, no sound; an abnormality (including the E-Stop being pressed) = both lights flashing slowly in red with an alarm sound.

**Note on low battery:** this same summary section describes low battery as "both lights flash rapidly in red," which does not match Appendix 6 rows 18–19 above (yellow solid, low-battery voice, no red flashing). The manual itself is inconsistent between these two sections. Until this is confirmed on your specific AGV, treat **either** a rapid red flash **or** a steady yellow light accompanied by a spoken low-battery announcement as a low-battery signal, and dock it to recharge — do not assume only one of the two is valid.

## Charging station lights (separate from the AGV's own lights)

The automatic charging station has its own three-color light and buzzer:

- 🟢 Green, solid — charging station is actively charging
- 🟡 Yellow, solid — charging station is on standby
- 🔴 Red, solid + buzzer — charging station fault

When charging finishes and the AGV has not yet disconnected, all charging-station lights turn off and the screen shows charging complete; once the AGV disconnects, the station returns to standby (yellow).

## Daily inspection

The manual recommends checking the audible-visual alarm daily: when you open the AGV's user interface, you should hear an alarm sound and see both red lights flash slowly. If you don't hear the sound, or the lights show a different/no color, keep the AGV powered off until the fault is found — do not put it into service.

## If lights don't match this table

Confirm the AGV ID and model, and treat any light/voice combination not listed here as an unknown state — do not guess. Record what you saw and hand off per your site's escalation process.
