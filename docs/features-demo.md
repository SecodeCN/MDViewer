# MD Viewer 完整功能演示

这个文档展示了 MD Viewer 支持的所有 Markdown 格式和功能。

## 📝 基础文本格式

### 文本样式

- **粗体文本**
- *斜体文本*
- ***粗斜体文本***
- ~~删除线文本~~
- ==高亮文本==（部分渲染器支持）
- `行内代码`
- <u>下划线</u>（HTML 标签）
- H~2~O（下标）
- X^2^（上标）

### 特殊字符

使用 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存文件

---

## 📋 列表

### 无序列表

- 水果
  - 苹果
  - 香蕉
    - 小香蕉
    - 大香蕉
  - 橙子
- 蔬菜
  - 番茄
  - 黄瓜

### 有序列表

1. 第一步：打开文件夹
2. 第二步：选择文件
3. 第三步：开始编辑
   1. 子步骤 A
   2. 子步骤 B
4. 第四步：保存文件

### 任务列表

- [x] 完成项目初始化
- [x] 添加基础功能
- [x] 代码高亮支持
- [x] 数学公式支持
- [x] 流程图支持
- [ ] 添加导出 PDF 功能
- [ ] 多语言支持

---

## 💻 代码块

### JavaScript

```javascript
// 异步函数示例
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// 使用箭头函数
const greet = (name) => `Hello, ${name}!`;
console.log(greet('MD Viewer'));
```

### Python

```python
# 数据处理示例
import pandas as pd
import numpy as np

def process_data(df):
    """处理数据框"""
    # 删除空值
    df_clean = df.dropna()
    
    # 计算统计信息
    stats = {
        'mean': df_clean.mean(),
        'std': df_clean.std(),
        'count': len(df_clean)
    }
    
    return stats

# 装饰器示例
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"执行时间: {end - start:.2f}秒")
        return result
    return wrapper
```

### HTML/CSS

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>示例页面</title>
    <style>
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World!</h1>
    </div>
</body>
</html>
```

### SQL

```sql
-- 复杂查询示例
SELECT 
    u.username,
    COUNT(o.id) as order_count,
    SUM(o.total_amount) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY u.id
HAVING total_spent > 1000
ORDER BY total_spent DESC
LIMIT 10;
```

---

## 📊 表格

### 基础表格

| 功能 | 支持 | 优先级 | 说明 |
|------|:----:|:------:|------|
| GFM 语法 | ✅ | 高 | GitHub Flavored Markdown |
| 代码高亮 | ✅ | 高 | 支持 180+ 种语言 |
| 数学公式 | ✅ | 中 | KaTeX 渲染 |
| 流程图 | ✅ | 中 | Mermaid 支持 |
| 图表 | ✅ | 低 | 各种图表类型 |

### 对齐示例

| 左对齐 | 居中对齐 | 右对齐 |
|:-------|:-------:|-------:|
| 内容1 | 内容2 | 内容3 |
| A | B | C |
| 很长的内容 | 中等 | 短 |

---

## 🔗 链接和图片

### 链接

- [外部链接](https://github.com)
- [带标题的链接](https://www.google.com "Google 搜索")
- [内部锚点](#数学公式)
- <https://www.example.com>
- 自动链接: www.example.com

### 图片

![示例图片](https://via.placeholder.com/600x300/667eea/ffffff?text=MD+Viewer "这是一张示例图片")

---

## 📐 数学公式

### 行内公式

这是一个行内公式：$E = mc^2$，爱因斯坦的质能方程。

勾股定理：$a^2 + b^2 = c^2$

### 块级公式

$$
\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

**矩阵示例：**

$$
\begin{bmatrix}
a & b & c \\
d & e & f \\
g & h & i
\end{bmatrix}
$$

**求和公式：**

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

**积分：**

$$
\int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

**复杂公式：**

$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$

---

## 📈 流程图和图表

### Mermaid 流程图

```mermaid
graph TD
    A[开始] --> B{是否登录?}
    B -->|是| C[显示主页]
    B -->|否| D[跳转登录页]
    D --> E[用户登录]
    E --> F{登录成功?}
    F -->|是| C
    F -->|否| D
    C --> G[浏览内容]
    G --> H[结束]
```

### 序列图

```mermaid
sequenceDiagram
    participant 用户
    participant 浏览器
    participant 服务器
    participant 数据库
    
    用户->>浏览器: 打开页面
    浏览器->>服务器: 发送请求
    服务器->>数据库: 查询数据
    数据库-->>服务器: 返回结果
    服务器-->>浏览器: 返回响应
    浏览器-->>用户: 显示页面
```

### 甘特图

```mermaid
gantt
    title 项目开发计划
    dateFormat  YYYY-MM-DD
    section 设计阶段
    需求分析           :a1, 2024-01-01, 7d
    UI设计            :a2, after a1, 5d
    section 开发阶段
    前端开发          :b1, after a2, 10d
    后端开发          :b2, after a2, 12d
    section 测试阶段
    单元测试          :c1, after b1, 3d
    集成测试          :c2, after b2, 4d
```

### 饼图

```mermaid
pie title 编程语言使用占比
    "JavaScript" : 40
    "Python" : 25
    "Java" : 15
    "C++" : 10
    "其他" : 10
```

### 状态图

```mermaid
stateDiagram-v2
    [*] --> 空闲
    空闲 --> 运行中: 开始任务
    运行中 --> 暂停: 暂停
    暂停 --> 运行中: 恢复
    运行中 --> 完成: 任务完成
    运行中 --> 失败: 出错
    失败 --> 空闲: 重置
    完成 --> [*]
```

### 类图

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
        +move()
    }
    class Dog {
        +String breed
        +bark()
        +fetch()
    }
    class Cat {
        +String color
        +meow()
        +scratch()
    }
    Animal <|-- Dog
    Animal <|-- Cat
```

### ER 关系图

```mermaid
erDiagram
    用户 ||--o{ 订单 : 创建
    订单 ||--|{ 订单明细 : 包含
    商品 ||--o{ 订单明细 : 关联
    用户 {
        int id PK
        string 用户名
        string 邮箱
    }
    订单 {
        int id PK
        date 下单时间
        float 总金额
    }
```

---

## 🏗️ PlantUML 图表

PlantUML 是另一种强大的 UML 图表工具，支持更多专业图表类型。

### PlantUML 时序图

```plantuml
@startuml
skinparam backgroundColor #FEFEFE
skinparam sequenceMessageAlign center

actor 用户 as U
participant "前端应用" as F
participant "后端服务" as B
database "数据库" as D

U -> F: 1. 点击登录按钮
activate F
F -> B: 2. 发送登录请求
activate B
B -> D: 3. 验证用户信息
activate D
D --> B: 4. 返回用户数据
deactivate D
B --> F: 5. 返回登录结果
deactivate B
F --> U: 6. 显示登录成功
deactivate F
@enduml
```

### PlantUML 用例图

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor 普通用户 as User
actor 管理员 as Admin

rectangle "MD Viewer 系统" {
    User -- (打开文件夹)
    User -- (浏览Markdown文件)
    User -- (编辑文件)
    User -- (切换主题)
    Admin -- (管理用户)
    Admin -- (系统配置)
    (编辑文件) .> (保存文件) : include
    (浏览Markdown文件) .> (渲染预览) : include
}
@enduml
```

### PlantUML 类图

```plantuml
@startuml
skinparam classAttributeIconSize 0

class MDViewer {
    - currentFile: String
    - isModified: Boolean
    - viewMode: String
    --
    + initMarked(): void
    + loadFile(path): Promise
    + saveFile(): Promise
    + updatePreview(): void
}

class Editor {
    - content: String
    - encoding: String
    --
    + getValue(): String
    + setValue(text): void
}

class Preview {
    - htmlContent: String
    --
    + render(markdown): void
    + renderMermaid(): void
    + renderPlantUML(): void
}

class DiagramRenderer {
    <<interface>>
    + encode(code): String
    + render(element): void
}

MDViewer *-- Editor
MDViewer *-- Preview
Preview ..> DiagramRenderer
@enduml
```

### PlantUML 活动图

```plantuml
@startuml
start
:用户打开 MD Viewer;
if (是否有上次打开的文件夹?) then (是)
    :自动恢复文件夹;
    :加载文件列表;
else (否)
    :显示欢迎页面;
endif

:用户选择Markdown文件;
:读取文件内容;
:解析Markdown语法;

fork
    :渲染普通文本;
fork again
    :渲染代码高亮;
fork again
    :渲染Mermaid图表;
fork again
    :渲染PlantUML图表;
fork again
    :渲染数学公式;
end fork

:显示预览结果;
stop
@enduml
```

### PlantUML 组件图

```plantuml
@startuml
skinparam componentStyle rectangle

package "MD Viewer 前端" {
    [standalone-app.js] as app
    [marked.js] as marked
    [highlight.js] as hljs
    [mermaid.js] as mermaid
    [plantuml-encoder] as encoder
    [KaTeX] as katex
}

package "外部服务" {
    [PlantUML Server] as pumlserver
}

package "浏览器 API" {
    [File System Access API] as fsapi
    [IndexedDB] as idb
}

app --> marked : Markdown解析
app --> hljs : 代码高亮
app --> mermaid : Mermaid渲染
app --> encoder : PlantUML编码
app --> katex : 公式渲染
encoder --> pumlserver : SVG请求
app --> fsapi : 文件读写
app --> idb : 数据持久化
@enduml
```

### PlantUML 状态图

```plantuml
@startuml
skinparam stateBackgroundColor #f0f0f0

[*] --> 空闲

state 空闲 {
    [*] --> 等待输入
    等待输入 --> 欢迎页面 : 显示欢迎信息
}

空闲 --> 编辑中 : 打开文件
编辑中 --> 已修改 : 修改内容
已修改 --> 编辑中 : 保存成功
已修改 --> 编辑中 : 放弃修改
编辑中 --> 空闲 : 关闭文件
已修改 --> 空闲 : 确认关闭

state 编辑中 {
    [*] --> 预览模式
    预览模式 --> 分栏模式 : 切换
    分栏模式 --> 预览模式 : 切换
}

@enduml
```

### PlantUML 思维导图

```plantuml
@startmindmap
* MD Viewer
** 📁 文件管理
*** 打开文件夹
*** 文件树导航
*** 最近打开
*** 文件搜索
** ✏️ 编辑功能
*** 实时预览
*** 分栏模式
*** 快捷保存
** 🎨 渲染能力
*** Markdown 语法
**** GFM 支持
**** 任务列表
**** 表格
*** 代码高亮
**** 180+ 语言
*** 图表支持
**** Mermaid
**** PlantUML
*** 数学公式
**** KaTeX
** 🌙 用户体验
*** 深色/浅色主题
*** 目录导航
*** 图表缩放
@endmindmap
```

### PlantUML 甘特图

```plantuml
@startgantt
title MD Viewer 开发计划
project starts 2024-01-01

[需求分析] lasts 5 days
[UI设计] lasts 7 days
[UI设计] starts at [需求分析]'s end

[核心开发] lasts 15 days
[核心开发] starts at [UI设计]'s end

[Mermaid集成] lasts 5 days
[Mermaid集成] starts at [核心开发]'s end

[PlantUML集成] lasts 5 days
[PlantUML集成] starts at [Mermaid集成]'s end

[测试] lasts 7 days
[测试] starts at [PlantUML集成]'s end

[上线部署] happens at [测试]'s end
@endgantt
```

---

## 💬 引用

### 普通引用

> 💡 **提示**: 这是一个引用块。
> 
> 引用可以包含多行内容，以及 **格式化文本**、`代码`等。

### 嵌套引用

> 第一层引用
> > 第二层引用
> > > 第三层引用
> > > 
> > > 可以包含代码：`console.log('Hello')`

### 带作者的引用

> "生活就像一盒巧克力，你永远不知道下一颗是什么味道。"
> 
> —— 阿甘正传

---

## ⚠️ 提示框（自定义样式）

> ℹ️ **信息**
> 
> 这是一个信息提示框。

> ✅ **成功**
> 
> 操作已成功完成！

> ⚠️ **警告**
> 
> 请注意，这个操作可能会导致数据丢失。

> ❌ **错误**
> 
> 发生了一个错误，请重试。

---

## 📌 其他功能

### 脚注

这是一段包含脚注的文本[^1]。你也可以使用命名脚注[^note]。

[^1]: 这是第一个脚注的内容。
[^note]: 这是命名脚注的详细说明。

### 定义列表

HTML
: 超文本标记语言，用于创建网页的标准标记语言。

CSS
: 层叠样式表，用于描述网页的外观和格式。

JavaScript
: 一种高级的、解释型的编程语言。

### 缩写

HTML、CSS、JS 是前端开发的三大基础技术。

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript

### Emoji 支持

😀 😃 😄 😁 😆 😅 🤣 😂 🙂 🙃 😉 😊 😇

🚀 💡 📝 ✅ ❌ ⚠️ 📊 📈 🔧 🎯

---

## 🎨 HTML 嵌入

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; text-align: center;">
    <h3>这是嵌入的 HTML</h3>
    <p>可以使用自定义样式</p>
</div>

<details>
<summary>点击展开/收起</summary>

这是隐藏的内容，点击上面可以展开或收起。

可以包含：
- 列表
- **格式化文本**
- `代码`

</details>

---

## 📝 总结

MD Viewer 支持：

1. ✅ **完整的 GFM 语法**
2. ✅ **180+ 种语言的代码高亮**
3. ✅ **数学公式渲染（KaTeX）**
4. ✅ **Mermaid 流程图和图表**
5. ✅ **PlantUML 专业 UML 图表**
6. ✅ **任务列表**
7. ✅ **表格对齐**
8. ✅ **Emoji 支持**
9. ✅ **脚注和定义列表**
10. ✅ **HTML 嵌入**
11. ✅ **实时编辑和保存**
12. ✅ **图表缩放功能**

### Mermaid vs PlantUML 对比

| 特性 | Mermaid | PlantUML |
|------|:-------:|:--------:|
| 渲染方式 | 客户端 | 服务器端 |
| 离线使用 | ✅ 支持 | ❌ 需要网络 |
| 语法简洁度 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| 图表类型 | 常用类型 | 更丰富 |
| 专业 UML | 基础支持 | ⭐⭐⭐⭐⭐ |
| 自定义样式 | 有限 | 丰富 |

---

**感谢使用 MD Viewer！** 🎉

如果你有任何问题或建议，欢迎反馈。

---

*最后更新: 2026-01-08*
