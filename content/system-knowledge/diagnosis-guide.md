---
title: Diagnosing System-Level Issues
severity: green
accessLevel: 2
alarmCode: N/A
---

## The rule of thumb

**An AGV alarm code showing on the vehicle or in RCS = a vehicle-level problem.** Go straight to the matching [Troubleshooting](../reference/alarm-codes.md) article.

**A task is stuck, delayed, or behaving oddly with no AGV alarm code at all = probably an integration-level condition** — a WMS order, a Mujin signal, a conveyor signal, or a barcode mismatch, sitting upstream or downstream of the AGV. Read [Site Workflows](site-workflows.md) and [System Architecture Overview](architecture.md) before assuming the vehicle is broken.

## Common symptom patterns

**A pallet unexpectedly ends up in the reject position area, and RCS shows Task Error.**
This is the system working as designed — see [To Reject Position](site-workflows.md#to-reject-position). It means a scanned barcode didn't match what WMS expected. This is not an AGV fault. Don't troubleshoot the vehicle; flag the mismatched pallet/label and the expected order to whoever manages WMS data at your site.

**An AGV is sitting idle inside a Mujin robot cell, doing nothing, no alarm yet.**
Per the [Mujin Robot Cell → Inbound Rack](site-workflows.md#3-mujin-robot-cell-inbound-rack-area) workflow, the AGV is designed to pause at a waiting point inside the cell until it gets a pickup signal. This is expected — only escalate once it actually enters Error mode (it does this on its own if the wait period expires without a signal).

**An AGV is stopped just short of a conveyor, no alarm shown.**
Check whether the conveyor has signaled `conveyorIsClear`. If it hasn't, the AGV is correctly waiting on the conveyor/PLC side — see [Outbound VAS buffer → VAS Conveyor](site-workflows.md#6-outbound-vas-buffer-vas-conveyor). This is not an AGV fault; if it's stuck longer than expected, escalate to whoever manages the conveyor PLC, not AGV maintenance.

**Multiple orders queue up for the same conveyor pallet, or WMS re-sends an order that looks already handled.**
Expected by design on the [Aranco Conveyor → Inbound Rack](site-workflows.md#5-aranco-conveyor-inbound-rack-area) workflow — WMS can send further orders before the current pallet clears the conveyor, so a queue is built in.

**A task shows Begin Execution and never advances to Loaded.**
Check whether RCS has actually dispatched an AGV to it at all (RCS-side), and whether that AGV shows a communication or motion alarm (AGV-side) — see [Communication Problem](../troubleshooting/communication.md) and [AGV Stopped / Not Moving](../troubleshooting/agv-stopped.md). If neither shows anything wrong, this is likely an RCS/WMS coordination issue rather than something fixable at the vehicle.

## When you genuinely can't tell which layer it is

Note exactly what you observed — which system showed what, and whether any AGV alarm was present — and hand it to your site's process rather than guessing. Getting this wrong (treating an integration issue as an AGV fault, or vice versa) wastes time on both sides.
