---
title: AGV Power On / Off
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. How to power an AGV on at the start of a shift and off at the end of one, per the manual's power-on sequence and pre-maintenance shutdown sequence.

## Power On

1. Connect the battery plug, if it was disconnected (normally only needed after shipping/storage).
2. Release the Emergency Stop switch, if pressed — pull it back out.
3. Insert the power key and turn it clockwise. The main control board boots and the touch screen shows the Windows login screen.
4. Log in with the site's account.
5. With the rotary switch in Manual, use the handheld device to check forward/backward/turn/fork movement responds normally (see [Manual Driving](manual-driving.md)).
6. Confirm the daily audible-visual check: opening the AGV interface should sound an alarm with both lights flashing red slowly (see [Indicator Lights](../reference/indicator-lights.md)). If you don't hear or see this, keep the AGV powered off and escalate — don't put it into service.
7. Confirm the AGV shows connected to the site wireless network.
8. Turn the rotary switch to Automatic (see [Auto / Manual Mode](auto-manual-mode.md)).

### ⚠️ Initialization — read this before you dispatch anything

After a power failure, the AGV checks on its own whether it needs to **initialize**, and shows "Initialization" in its status. Initialization is a self-test of the electrical system, and **the forks move on their own during it** — so before it starts, visually confirm nothing and no one is in the way. The AGV must be in Auto (rotary switch in Auto) for initialization to run. Wait for it to finish and reach Standby before dispatching any task — dispatching too early risks bad localization or an abnormal task.

## Power Off (end of shift)

1. Let the AGV finish or safely pause its current task, then park it at its designated location.
2. Turn the rotary switch to Manual.
3. Lower the forks to their lowest position with the handheld device.
4. Tap **Shut down** on the AGV's on-screen interface to close the AGV software (this does not shut down Windows by itself).
5. Shut down the computer's operating system separately.
6. Once the screen shows "no signal," turn the power key counter-clockwise to cut power.

### Full power-off (before maintenance, or parking for an extended period)

Do the routine power-off above, then also open the battery cover and unplug the battery discharge plug to fully disconnect power. Coordinate this with a supervisor — it's the required state before any oil change or electrical work, not a routine daily step.

## Escalation

If the AGV won't boot, faults immediately, or fails the daily audible-visual check, don't keep trying — record what happened and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained contact.
