# PlantUML 使用指南

MD Viewer 现在支持 PlantUML 图表渲染！PlantUML 是一个强大的 UML 图表绘制工具，支持多种图表类型。

## 基本用法

在 Markdown 中使用 PlantUML，只需将代码放入 ` ```plantuml ` 或 ` ```puml ` 代码块中：

## 时序图 (Sequence Diagram)

```plantuml
@startuml
Alice -> Bob: 你好，Bob！
Bob --> Alice: 嗨，Alice！
Alice -> Bob: 今天怎么样？
Bob --> Alice: 很好，谢谢！
@enduml
```

## 用例图 (Use Case Diagram)

```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor 用户
actor 管理员

rectangle 系统 {
    用户 -- (登录)
    用户 -- (浏览文件)
    用户 -- (编辑文件)
    管理员 -- (管理用户)
    管理员 -- (系统配置)
    (登录) .> (验证) : include
}
@enduml
```

## 类图 (Class Diagram)

```plantuml
@startuml
class MDViewer {
    - currentFile: String
    - isModified: Boolean
    + initMarked(): void
    + loadFile(): void
    + saveFile(): void
}

class Editor {
    - content: String
    + render(): void
    + getValue(): String
}

class Preview {
    + update(): void
    + renderMarkdown(): void
}

MDViewer --> Editor
MDViewer --> Preview
@enduml
```

## 活动图 (Activity Diagram)

```plantuml
@startuml
start
:打开文件夹;
:选择Markdown文件;
if (文件是否存在?) then (是)
    :加载文件内容;
    :渲染预览;
else (否)
    :显示错误信息;
endif
:完成;
stop
@enduml
```

## 组件图 (Component Diagram)

```plantuml
@startuml
package "MD Viewer" {
    [standalone-app.js] as app
    [marked.js] as marked
    [highlight.js] as hljs
    [mermaid.js] as mermaid
    [plantuml-encoder] as plantuml
}

package "外部服务" {
    [PlantUML Server] as server
}

app --> marked : 使用
app --> hljs : 使用
app --> mermaid : 使用
app --> plantuml : 编码
plantuml --> server : 请求渲染
@enduml
```

## 状态图 (State Diagram)

```plantuml
@startuml
[*] --> 未保存

未保存 --> 已保存 : 保存文件
已保存 --> 未保存 : 修改内容
已保存 --> [*] : 关闭文件
未保存 --> [*] : 放弃更改

state 已保存 {
    [*] --> 只读
    只读 --> 编辑中 : 切换到编辑模式
    编辑中 --> 只读 : 切换到预览模式
}
@enduml
```

## 思维导图 (Mind Map)

```plantuml
@startmindmap
* MD Viewer
** 功能特性
*** Markdown 渲染
*** 代码高亮
*** 图表支持
**** Mermaid
**** PlantUML
** 两种模式
*** 独立版
*** 服务器版
** 用户界面
*** 侧边栏
*** 编辑器
*** 预览区
@endmindmap
```

## ER 图 (Entity Relationship)

```plantuml
@startuml
entity "文件" as file {
    * id : number
    --
    * name : string
    * path : string
    content : text
    created_at : datetime
    updated_at : datetime
}

entity "文件夹" as folder {
    * id : number
    --
    * name : string
    * path : string
}

folder ||--o{ file : 包含
folder ||--o{ folder : 包含
@enduml
```

## 甘特图 (Gantt Chart)

```plantuml
@startgantt
project starts 2024-01-01
[设计阶段] lasts 10 days
[开发阶段] lasts 20 days
[开发阶段] starts at [设计阶段]'s end
[测试阶段] lasts 10 days
[测试阶段] starts at [开发阶段]'s end
[部署上线] happens at [测试阶段]'s end
@endgantt
```

## 注意事项

1. **网络需求**: PlantUML 图表通过 `plantuml.com` 在线服务器渲染，需要网络连接
2. **代码标记**: 可以使用 `plantuml` 或 `puml` 作为代码块语言标记
3. **起止标签**: 推荐在代码中包含 `@startuml` 和 `@enduml` 标签
4. **主题支持**: 可以使用 `skinparam` 命令自定义图表样式
5. **中文支持**: PlantUML 完全支持中文字符

## 与 Mermaid 的对比

| 特性 | PlantUML | Mermaid |
|------|----------|---------|
| 渲染方式 | 服务器端 | 客户端 |
| 图表类型 | 更丰富 | 常用类型 |
| 离线使用 | 需要本地服务器 | 可以 |
| 语法复杂度 | 较复杂 | 较简单 |
| 扩展性 | 更强 | 有限 |

## 更多资源

- [PlantUML 官网](https://plantuml.com/)
- [PlantUML 语法参考](https://plantuml.com/zh/)
- [在线编辑器](https://www.plantuml.com/plantuml/uml/)
