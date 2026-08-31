---
title: Manually Complete a Task
severity: green
accessLevel: 1
alarmCode: N/A
---

## What it's for

When a severe fault (a Level 4+ error, in RoboTune's own severity scale — not to be confused with this wiki's Access Level 1/2/3) stops the AGV mid-task, the AGV can no longer report the task as finished on its own. This function tells RCS "this task was completed by hand" so RCS stops waiting on it and can move on.

This is a RCS/RoboTune-side action, separate from the AGV's own Reset button.

## Precondition

- The AGV must be in **Manual mode**.
- The pickup/drop-off must already be physically completed by driving the AGV by hand.

## Steps

1. Confirm the AGV is in Manual mode (see [Auto / Manual Mode](auto-manual-mode.md)).
2. Drive the AGV to finish the pickup or drop-off by hand (see [Manual Driving](manual-driving.md)).
3. Open the task control screen (RoboTune, or your site's RCS panel) and select **Manual Completion** / **Manually Complete Current Task** on the affected task.
4. Confirm RCS now shows the task as complete.

## Caution

This only updates RCS's record of the task — it does not fix whatever caused the Level 4+ error in the first place. Still record the original alarm code and hand it off per your site's process; don't treat "task marked complete" as "issue resolved."

## Access Level

🟢 **Operator – Level 1** — trained operators only; this changes RCS task state, so confirm the precondition above before using it.
