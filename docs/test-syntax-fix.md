# Mermaid 语法错误修复测试

## 测试 1: HTML 标签字符（常见错误）

这个测试包含 `<abstract>` 标签，在旧版本会导致 "Syntax error in text" 错误。

```mermaid
classDiagram
    class MoleculeCluster {
        <<abstract>>
        +cluster() void
    }
    
    class BaseMolecule {
        +name: String
        +process<T>() void
    }
```

## 测试 2: 零宽字符和特殊空格

```mermaid
graph TD
    A[开始​] --> B[处​理]
    B --> C[结​束]
```

## 测试 3: 特殊字符在标签中

```mermaid
graph LR
    A[User Input: <data>] --> B[Process & Validate]
    B --> C[Output: <result>]
```

## 测试 4: 多行文本和特殊字符

```mermaid
flowchart TD
    A[Step 1:
    Initialize
    System] --> B{Check
    Configuration
    Status}
    B -->|Success| C[Continue]
    B -->|Failed| D[Stop & Report]
```

## 预期结果

所有图表应该正常显示，不应出现 "Syntax error in text mermaid version 10.6.1" 错误。
