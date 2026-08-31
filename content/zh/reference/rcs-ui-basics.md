---
title: RCS 常见状态定义
severity: green
accessLevel: 1
alarmCode: N/A
---

## 关于本页

RCS 网页界面中经常会看到的字段速查。如果要实际排查问题,请改用[系统架构概览](../system-knowledge/architecture.md)和[系统级问题诊断](../system-knowledge/diagnosis-guide.md)。

## 1. AGV Operating Mode(运行模式)

车辆列表页面,**Operating Mode** 字段(通过该行的"Control"按钮编辑):

| Operating Mode | 含义 |
|---|---|
| Assignable | 可以正常接收任务 |
| Unassignable | 已连接,但不接收任务——用于人为将该 AGV 锁定排除在外 |
| Disconnected | 连接已丢失,仍停留在最后已知位置——RCS 会避免让其他 AGV 经过该位置 |
| Offline | 已被物理移走——RCS 完全忽略其位置信息 |

## 2. Vehicle and StorageBin Lock / Unlock

| 对象 | 由什么导致锁定 | 手动解锁方式 |
|---|---|---|
| Vehicle(车辆) | 将 Operating Mode 设为 **Unassignable** | 车辆列表页的"Unlock"按钮 |
| StorageBin(库位) | 某个任务预留了该库位(地图上显示为 **Lock** 标记) | 库位状态页的"Unlock Inventory Location" |

⚠️ 手动解锁适用于因中断/失败的任务而卡住的锁定情况——操作前请先确认该 AGV 或库位确实不再被占用,否则可能导致碰撞或库位被重复占用。

## 3. 任务与订单状态

**Order(订单)**(即 WMS 发起的请求)的生命周期:

| 状态 | 含义 | 可执行的操作 |
|---|---|---|
| Received | 订单已到达 RCS | 取消、修改优先级/有效期/指定车辆 |
| In Progress | AGV 任务执行中 | 取消、手动完成、安全重新分配、转移 |
| Completed / Cancelled / Expired | 已结束——从"Current Orders"中移除,只能在订单列表中查看 | — |

**Task(任务)**(即 RCS 派发给某台 AGV 的具体动作)——一个订单可以生成多个任务。逐个任务的阶段推进(Begin Execution → Loaded → Unloaded → Completed / Task Error)记录在[AGV 状态含义](agv-status.md#task-progress-from-the-sites-rcswms-task-flow)和[现场工作流程](../system-knowledge/site-workflows.md)中。

## 4. StorageBin Occupancy and Usage Status

| 字段 | 取值 | 含义 |
|---|---|---|
| Location Status | Free / Occupied | 该位置是否实际有货物 |
| Usage Status | Available / Disabled | 该库位是否能被分配新任务 |

地图图标说明:

- 白色方块 —— 空
- 蓝色方块 —— 有货
- "Disabled" 标记(左下角) —— 已停用
- "Lock" 标记(右下角) —— 当前已被预留(见第 2 节)

双击方块可查看完整详情(可用性、锁定信息、货物情况)——支持多层货架。
