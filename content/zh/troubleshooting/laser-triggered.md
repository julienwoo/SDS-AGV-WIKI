---
title: 近距激光触发
severity: red
accessLevel: 1
alarmCode: LaserClose 0x02100206
---

🧭 **预防** — 缠膜松脱和托盘摆放不齐是常见诱因;见《[现场操作规范](../reference/site-best-practices.md)》第 4–5 节。

## 症状

- 行驶途中突然停止
- 红灯闪烁 + 报警声(见[指示灯说明](../reference/indicator-lights.md))
- 显示的故障名称:近距激光触发(laser close-range trigger)

## 报警 / 错误

AGV 屏幕和 RCS 上显示:

- `LaserClose`(0x02100206)— 近距离区域检测到物体

代码不是这个(`LaserBreakdown`、`LaserCloseDisabled`)?→ 查看[报警代码](../reference/alarm-codes.md);`LaserBreakdown` 属于硬件故障——停止并上报,不要复位

## 恢复步骤

按顺序逐步排查。如果某一步排查完就已解决,到此为止即可,不需要继续;如果排查完这一步激光仍处于触发状态,再进行下一步。

1. 检查车前/侧/后方,清除 AGV 路径上的障碍物或人员。
2. 确认具体是哪一路激光触发,检查其周围是否有掉落物或遮挡物。
3. 路径和激光区域确认已清空 → [复位](../operations/reset.md),然后点击启动。
4. 同一位置仍反复触发 → 手动将 AGV 移过该路段,再复位 + 启动继续。
5. 仍未解决 → [手动完成任务](../operations/manual-task-complete.md),记录具体位置 + AGV 编号,并按现场流程上报。
