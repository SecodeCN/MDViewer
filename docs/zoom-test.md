# Zoom Test - 缩放测试

This file is for testing the new 2000% zoom capability.

## Mermaid Diagram - Flow Chart

```mermaid
graph TD
    A[开始] --> B{检查条件}
    B -->|条件1| C[处理A]
    B -->|条件2| D[处理B]
    B -->|条件3| E[处理C]
    C --> F[合并结果]
    D --> F
    E --> F
    F --> G{验证结果}
    G -->|成功| H[完成]
    G -->|失败| I[重试]
    I --> B
```

## Mermaid Diagram - Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server
    participant Database
    
    User->>Browser: 请求页面
    Browser->>Server: HTTP GET
    Server->>Database: 查询数据
    Database-->>Server: 返回结果
    Server-->>Browser: HTML 响应
    Browser-->>User: 显示页面
    
    User->>Browser: 双击图表
    Browser->>Browser: 打开缩放模态框
    Browser-->>User: 显示 2000% 缩放
```

## Test Instructions - 测试说明

1. 双击上面的任意一个图表
2. 在弹出的缩放模态框中，使用 "+" 按钮多次点击
3. 验证缩放级别可以达到 2000%
4. 使用鼠标滚轮也可以缩放
5. 使用键盘快捷键 "+" 和 "-" 进行缩放
6. 按 "0" 重置缩放

Expected behavior:
- 缩放应该可以从 50% 放大到 2000%
- 在高缩放级别下，可以拖动图表进行平移
- 图表应该保持清晰度（SVG 格式）
