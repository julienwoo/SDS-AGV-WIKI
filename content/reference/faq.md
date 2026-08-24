---
title: Frequently Asked Questions
severity: green
accessLevel: 1
alarmCode: N/A
---

## General

**Q: What should I try before contacting VisionNav Service?**
A: Check this wiki first — search for your symptom (e.g. "AGV stopped", "laser alarm", "charging"). Most day-to-day issues are Level 1 operator fixes: resets, clearing a path, or a mode switch.

**Q: How do I know if I'm allowed to fix something myself?**
A: Every article lists an **Access Level**. 🟢 Level 1 (Operator) issues are safe for any trained operator to handle. 🟡 Level 2 (Supervisor) issues should go to a supervisor. 🔴 Level 3 items (map, navigation parameters, safety parameters, RCS configuration, network configuration, software/database) must never be changed on site — always contact VisionNav Service.

**Q: I reset the AGV but the same alarm keeps coming back. What do I do?**
A: Stop resetting it. Repeated resets can mask a real hardware or configuration issue. Note the alarm code, take a screenshot, and escalate to VisionNav Service.

**Q: The AGV shows "Blocked" — is that a fault?**
A: No. `Blocked` just means the AGV's path is temporarily occupied. It should clear itself within seconds once the obstruction is gone. See [AGV Status](agv-status.md).

**Q: Can I move a stopped AGV by hand?**
A: Only in Manual mode, and only if you're trained to do so — see [Manual Driving](../operations/manual-driving.md). Never push or drag a powered AGV.

**Q: Who can log into RCS and what can they do?**
A: RCS login and basic monitoring (checking AGV/task status) is typically a Supervisor (Level 2) function. Ask your site administrator about your account's permissions.

## Contact VisionNav Service

When escalating, please have the following ready — this dramatically speeds up support:

- **AGV ID**
- **Alarm Code** (if any)
- **Screenshot** of the AGV screen and/or RCS
- **Location / Station ID**
- **Task ID** (if applicable)
- **Time of occurrence**

**Contact:**
- Phone: +86 400-XXX-XXXX
- Email: service@visionnav.com
- Hours: 24/7 for Level 3 emergencies, 09:00–18:00 (GMT+8) for general support

*(Update these contact details for your specific project in `content/reference/faq.md` and `content/manifest.json`.)*
