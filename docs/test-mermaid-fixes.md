# Mermaid 图表测试

本文档用于测试 PNG 下载和初始显示大小修复。

## 小型流程图

这是一个简单的小流程图，应该以自然大小显示：

```mermaid
graph LR
    A[开始] --> B[结束]
```

## 中等流程图

这是一个中等大小的流程图：

```mermaid
graph TD
    A[开始] --> B{判断}
    B -->|是| C[选项1]
    B -->|否| D[选项2]
    C --> E[结束]
    D --> E
```

## 序列图

测试序列图的显示效果：

```mermaid
sequenceDiagram
    participant 用户
    participant 系统
    participant 数据库
    用户->>系统: 发送请求
    系统->>数据库: 查询数据
    数据库-->>系统: 返回结果
    系统-->>用户: 显示数据
```

## 复杂流程图

测试较复杂的流程图：

```mermaid
graph TB
    Start[开始] --> Input[输入数据]
    Input --> Process1{处理1}
    Process1 -->|成功| Process2[处理2]
    Process1 -->|失败| Error1[错误处理1]
    Process2 --> Process3{处理3}
    Process3 -->|成功| Output[输出结果]
    Process3 -->|失败| Error2[错误处理2]
    Error1 --> Retry{重试?}
    Error2 --> Retry
    Retry -->|是| Input
    Retry -->|否| End[结束]
    Output --> End
```

## 测试说明

双击任意图表可以打开缩放模态框，然后：
1. 点击 PNG 按钮测试 PNG 下载功能
2. 观察图表初始显示大小是否合适
