---
title: AGV 状态含义
severity: green
accessLevel: 1
alarmCode: N/A
---

## 车辆模式/状态(来自 AGV 本身)

这些内容来自《操作手册》的声光报警对照表(附录 6)和模式切换章节(4.4/4.5)——描述的是车辆控制系统自身所处的状态,也正是三色灯显示的依据(见[指示灯说明](indicator-lights.md))。

如果你看的是 RCS 界面?RCS 有它自己独立的 **Vehicle Status(车辆状态)** 和 **Operating Mode(运行模式)** 字段——见[RCS 常见状态定义](rcs-ui-basics.md)第 1、2 节。这两套术语并不是一一对应的。

| 状态 | 含义 | 需要的操作 |
|---|---|---|
| Initialization(初始化) | AGV 正在启动/加载软件 | 无——等待其进入待机状态即可 |
| Manual mode(手动模式) | 旋钮开关设为手动;手持终端已激活 | 无——手动驾驶时属正常现象,见[手动驾驶](../operations/manual-driving.md) |
| Maintenance mode(维护模式) | 旋钮开关设为维护 | 仅在维修作业期间出现属正常 |
| Automatic mode, on standby(自动待机) | 处于自动模式,未分配任务,等待中 | 无——正常状态,相当于"空闲" |
| Paused(已暂停) | 操作员(或 RCS)暂停了当前任务 | 按启动恢复;如果无法恢复,应视为故障并按现场流程上报 |
| Executing a task (moving)(执行任务中/移动中) | AGV 正在前往或离开任务位置 | 无——正常 |
| Automatic charging(自动充电) | AGV 已对接在自动充电站 | 无——正常 |
| Manual charging(手动充电) | AGV 已连接手动充电器 | 无——手动充电期间属正常 |
| Low battery(低电量) | 电量已降至低电量阈值以下 | 将 AGV 对接到充电站,让它自动充电 |
| Level-3 error active(3 级错误激活) | 触发了严重故障 | 检查屏幕上显示的具体报警代码;见[报警代码](alarm-codes.md),并在[故障排查](#/category/troubleshooting)中查找对应故障 |

## Task progress (from the site's RCS/WMS task flow)

项目的工作流程文档(VN25447 Workflow Drawing)显示,随着 RCS 协调 AGV、WMS 及其他现场系统(Mujin 机器人工作站、输送线等),任务会经历以下这些状态:

| 任务状态 | 含义 |
|---|---|
| Begin Execution(开始执行) | RCS 已派发任务,AGV 已开始移动执行 |
| Loaded(已装载) | AGV 已在源位置取货 |
| Unloaded(已卸货) | AGV 已在目标位置放货 |
| Completed(已完成) | 任务已端到端顺利完成 |
| Task Error(任务错误) | 任务未正常完成,需要处理 |

如果任务显示为 **Task Error**,先检查 AGV 是否有正在触发的报警代码(见[报警代码](alarm-codes.md))——大多数任务错误可以追溯到某个具体的车辆级故障(比如货物检测检查失败、偏离路径、通信中断等),而不是 RCS 单独的问题。

## 说明

- 本站无法覆盖你所在项目 WMS/RCS 可能显示的每一个内部状态标签(那些是按项目单独配置的)。以上状态是 AGV 自身手册和项目工作流程图中直接记录的内容。
- 如果 RCS 显示了这里没有列出的状态,不要假设它和上面某一行含义相同——请咨询你的主管,或负责配置你们 RCS/WMS 集成的人员。
