---
title: Frequently Asked Questions
severity: green
accessLevel: 1
alarmCode: N/A
---

## General

**Q: What should I try before escalating?**
A: Check this wiki first — search for your symptom (e.g. "AGV stopped", "laser alarm", "charging") or look up the exact alarm code in [Alarm Codes](alarm-codes.md). Most day-to-day issues are Level 1 operator fixes: checking for an obstacle, a mode switch, or a Reset.

**Q: How do I know if I'm allowed to fix something myself?**
A: Every article lists an **Access Level**. 🟢 Level 1 (Operator) issues are safe for any trained operator to handle — the manual specifies operators can power the AGV on/off, switch Auto/Manual mode, Reset, Pause, and use Emergency Stop. 🟡 Level 2 (Supervisor) issues — cancelling/reassigning tasks, checking network status across multiple AGVs — should go to a supervisor. 🔴 Level 3 items (map edits, safety laser zone configuration, RCS/network configuration, task-feature/handling-solution configuration in RoboTune) must never be changed on site by operators or supervisors.

**Q: I reset the AGV but the same alarm keeps coming back. What do I do?**
A: Stop resetting it. Repeated resets can mask a real hardware or configuration issue. Note the exact alarm name/code, take a screenshot, and escalate per your site's process (see below).

**Q: What does it mean if a task shows "Task Error" in RCS?**
A: It means the task didn't progress normally through Begin Execution → Loaded → Unloaded → Completed. Check the AGV itself for an active alarm code first — see [Task Execution Problem](../troubleshooting/task-execution.md) and [AGV Status](agv-status.md).

**Q: Can I move a stopped AGV by hand?**
A: Only in Manual mode, only after swiping the vehicle's ID card, and only if you're trained to do so — see [Manual Driving](../operations/manual-driving.md). Never push or drag a powered AGV, and never handle a load that hasn't been confirmed by your project.

**Q: Who is allowed to debug, configure, or repair the AGV?**
A: Per the manual: trial runs and debugging are performed by the company's project team or designated partners; all maintenance and repair work is carried out by specially trained maintenance and repair personnel; and minimum age for any operator or repair role is 18. Day-to-day operation (power on/off, mode switching, Reset, Pause, E-Stop) is the only thing general operators are expected to do themselves.

## Escalating an issue

This project does not currently have an online, network, or phone VisionNav technical support channel — there is no support hotline or support email to call. When you can't resolve something at your access level, escalate internally: record the exact alarm name/code, the AGV ID, a screenshot of the AGV screen and/or RCS, the location/station ID, the task ID (if applicable), and the time of occurrence, then hand this off to your site's trained maintenance/repair personnel or your project's VisionNav-trained project team contact, following your site's own internal escalation process.
