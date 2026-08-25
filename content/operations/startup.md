---
title: AGV Start-up
severity: green
accessLevel: 1
alarmCode: N/A
---

## Symptom

Daily procedure — not a fault. Use this to bring a VNP15(VL)-66 AGV from powered-off to ready-for-task at the start of a shift, based on the manual's "Inspection and Preparation before Using the AGV" sequence.

## Access Level

🟢 **Operator – Level 1**

## Step-by-Step Procedure

1. **Appearance check** — confirm the vehicle body, sensors (lasers, photoelectric sensors, warning lights), human-machine interaction buttons, and moving parts (drive wheels, driven wheels, load-bearing wheels, mast wheels) show no visible damage and nothing is loose.
2. **Connect the battery plug** if it was disconnected (this is normally only needed after shipping/storage, or after a full power-down — see [AGV Shut-down](shutdown.md)).
3. **Release the Emergency Stop switch** if it was pressed — pull it back out.
4. **Turn the power key clockwise** to start the AGV. The main control board boots and the touch screen shows the Windows login screen.
5. **Log in** to the software system with the site's account.
6. **Check the handheld device** — with the rotary switch in Manual, use the handheld device to move the AGV forward, backward, turn, and raise/lower the fork, confirming each responds normally (see [Manual Driving](manual-driving.md)).
7. **Check the tri-color light and voice announcer** — opening the AGV interface should trigger an alarm sound with both lights flashing red slowly, per the manual's daily inspection check. If you don't hear the sound, or the lights show something else, keep the AGV powered off until the fault is found — do not put it into service.
8. **Confirm network connectivity** — the AGV should already be configured to the site wireless network; confirm it shows connected before relying on RCS to dispatch it.
9. **Set the rotary switch to Automatic** (see [Auto / Manual Mode](auto-manual-mode.md)) once the checks above pass.
10. **Confirm in RCS** that the AGV appears connected with a normal battery level and is ready to receive tasks.

## Expected Result

AGV shows a normal Automatic-standby light pattern (see [Indicator Lights](../reference/indicator-lights.md)), appears connected in RCS with sufficient battery, and is ready to receive tasks.

## If Not Solved

If the AGV does not boot, shows a fault immediately, or the daily alarm-sound/light check fails, see [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md) — and do not put the AGV into service if the audible-visual alarm check itself fails.

## Escalation

If the AGV fails to complete start-up after the steps above, or the appearance check finds damage, do not attempt further troubleshooting yourself. Record what you found and hand off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact per your site's internal process.

## Information Required

- AGV ID
- Which step failed
- Screenshot of AGV screen / RCS status
- Time of occurrence
