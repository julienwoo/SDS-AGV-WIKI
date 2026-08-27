---
title: Manual Driving
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this when an AGV needs to be driven manually with the handheld device, for example to reposition it, move it out of a blocked area, or drive it back onto its path after an off-path condition (see the `OffPath` row in [Alarm Codes](../reference/alarm-codes.md)).

## Access Level

🟢 **Operator – Level 1**

## Handheld device controls

The exact handheld device varies by site, but per the manual it includes: a driving/direction joystick (forward, backward, left, right — speed increases with joystick deflection), a fork lift/lower control, a three-stage **enable button** (must be held to the middle position to activate; pressing too tightly or too loosely will not activate it), an Emergency Stop button, a horn button, and signal lights showing enable state and power state. Some handheld units also include fork spacing, mast push/retract, pitch, and side-shift controls, if the vehicle is equipped with those functions.

**The enable button must stay pressed to the middle position for any driving/fork input (other than the horn) to take effect.**

## Step-by-Step Procedure

1. **Switch the AGV to Manual mode** using the rotary switch (see [Auto / Manual Mode](auto-manual-mode.md)).
2. **Swipe the vehicle's built-in ID card** — the manual requires this specifically before manual driving is permitted, as a safety measure separate from the mode switch itself.
3. **Check the surrounding area** is clear before moving.
4. **Press the enable button to the middle position** and use the joystick to drive the AGV slowly and deliberately.
5. **Keep line of sight** with the AGV at all times while driving manually.
6. **Do not handle any cargo carrier that hasn't been confirmed** by your project — overloading or handling unstable cargo is prohibited by the manual, and the operator is responsible for any resulting risk.
7. **Stop and park** the AGV in a safe, designated location once done.
8. **Switch back to Auto mode** when manual driving is complete, if the AGV should resume automatic tasks.

## Expected Result

AGV is repositioned safely with no collisions or near-misses, and correctly returns to Auto mode when manual driving is finished.

## If Not Solved

If the AGV does not respond to the handheld device even with the enable button correctly held, treat this as a fault — see [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md).

## Escalation

If manual controls are unresponsive or behave unexpectedly, do not keep attempting to drive the AGV. Record what was observed and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Location where manual driving was needed
- Time of occurrence
