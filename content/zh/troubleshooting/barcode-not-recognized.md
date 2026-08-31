---
title: 货物条码识别失败
severity: yellow
accessLevel: 1
alarmCode: UnrecognizedBarcode 0x0240001D / NoneTargetBarcode 0x0240002F
---

🧭 **预防** — 正确粘贴条码(见《[现场操作规范](../reference/site-best-practices.md)》第 3 节)可避免大多数此类问题。

## 症状

- AGV 在取货点停止,无法继续装载
- 任务卡住,或显示 **Task Error**(任务错误),而不是进入 Loaded(已装载)状态

## 报警 / 错误

AGV 屏幕和 RCS 上显示:

- `UnrecognizedBarcode`(0x0240001D)— 货物条码未识别
- `NoneTargetBarcode`(0x0240002F)— 目标条码未识别

## 恢复步骤

1. 检查条码是否存在、完好、清晰可读
2. 重新调整条码位置,使其完全落在扫描区域内
3. 重新扫描

属于更广泛的装载/货叉相关故障,或者是这个系列的其他代码?→ 查看[报警代码](../reference/alarm-codes.md),并按现场流程上报。
