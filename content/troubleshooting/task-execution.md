---
title: Task Execution Problem
severity: yellow
accessLevel: 2
alarmCode: TSK-601 / TSK-602
---

## Symptom

AGV accepts a task from RCS but fails to complete it — it may stop mid-task, skip a step, fail to pick/drop a load, or show the task stuck "In Progress" indefinitely. This also covers fork and other mechanical action failures (pickup/drop-off not completing).

## Alarm Code

`TSK-601` — Task timeout / stuck in progress
`TSK-602` — Load handling (fork/mechanism) fault

## Severity

🟡 Medium — impacts throughput; may indicate a load, station, or mechanical issue.

## Access Level

🟡 **Supervisor – Level 2** — cancelling or reassigning a task should be done by a supervisor to avoid losing track of load state.

## Possible Causes

- Load (pallet/cart) is mispositioned at the pickup/drop-off point
- Station sensor not detecting the load correctly
- Fork or lifting mechanism fault or obstruction
- Destination station is occupied or blocked
- Task was sent with incorrect parameters (wrong station/load type)

## Step-by-Step Troubleshooting

1. **Check the AGV's physical state** — is it correctly positioned at the pickup/drop-off point, and is the fork/mechanism in a normal position?
2. **Check the load** — is the pallet/cart present, correctly placed, and within spec (weight, size, position)?
3. **Check the destination station** — confirm it is clear and not already occupied.
4. **Check RCS task detail** for the specific step where the task is stuck.
5. **If safe**, clear any physical obstruction around the fork/mechanism.
6. **Cancel the task** in RCS (Supervisor action) if it cannot proceed, rather than leaving it stuck.
7. **Manually verify load state** (is the load still on the AGV, on the station, or on the floor?) before reassigning.
8. **Reassign or re-create the task** once the physical situation is confirmed safe and correct.

## Expected Result

The physical obstruction or misalignment is cleared, the task either resumes or is safely cancelled, and a fresh task completes normally.

## If Not Solved

If the fork/mechanism does not respond, makes abnormal noise, or the same task fails repeatedly at the same station, stop sending tasks to that station/AGV pairing and escalate.

## Escalation

Contact **VisionNav Service** for mechanical faults, repeated task failures, or anything involving physical damage risk.

## Information Required

- AGV ID
- Task ID
- Alarm Code (TSK-601 / TSK-602)
- Screenshot of RCS task detail
- Station ID (pickup and destination)
- Load description (type, approximate weight)
- Time of occurrence
