![antd-components-mcp](https://socialify.git.ci/zhixiaoqiang/antd-components-mcp/image?description=1&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1)

[![npm version](https://img.shields.io/npm/v/@jzone-mcp/antd-components-mcp.svg)](https://www.npmjs.com/package/@jzone-mcp/antd-components-mcp)

# Ant Design 组件库 MCP 服务

一个模型上下文协议(MCP)服务器，用于向 `Claude` 等大型语言模型(LLMs)提供 `Ant Design` 组件文档。该服务器允许 LLM 通过一组专用工具探索和理解 `Ant Design` 组件。

**文章：**

- [让AI更懂 Ant Design：MCP 协议在前端领域的落地实践](https://juejin.cn/post/7494106899646939173)

## 功能特性

- 🚀 已预处理数据，开箱即用(预处理版本为：`Ant Design V6.3.6 2026/4/20`)
  - 🔨 可以自行提取最新的/其他版本的组件文档
- 🔗 列出所有可用的 `Ant Design` 组件
  - 📃 包含组件名称、描述、可用版本、何时使用当前组件信息
- 📃 查看特定组件文档(已过滤无意义内容，对上下文友好)
- 📃 查看特定组件属性和 API 定义
- 📃 查看特定组件组件的代码示例
- 📖 查看特定组件组件的更新日志
- 💪 做了大量的缓存，有效缓解 IO 压力
- ⚙️ 提供了预置的 prompt，有效减少重复的工具调用(对上下文优化)
  - 😺 测试下来 Claude 客户端可以使用
  - 😩 github copilot/Cline 插件暂时无法使用

## 版本映射

本包遵循版本映射策略，包的主版本号与 Ant Design 的主版本号对应：

- **Ant Design 5.0** → 使用包版本 **1.0.x**
- **Ant Design 6.0** → 使用包版本 **2.0.x**
- **Ant Design 7.0** → 将对应包版本 **3.0.x**（未来）

### 版本同步升级方案

当 Ant Design 发布新主版本时，本包将发布对应的新主版本，遵循规则：**Ant Design 主版本号 + 1 = 包主版本号**。

例如：
- 当 Ant Design 7.0 发布时，本包将发布版本 3.0.0
- 包版本号始终比 Ant Design 主版本号高 1，以保持清晰的版本映射关系

每个包版本都包含 `peerDependencies` 来帮助您选择正确的版本：
- 版本 1.0.x 要求 `antd ^5.0.0`
- 版本 2.0.x 要求 `antd ^6.0.0`
- 版本 3.0.x 将要求 `antd ^7.0.0`（未来）

## 后续计划

- [x] 实现监听 Ant Design 组件库的更新，自动进行数据提取发版
- [x] 考虑为工具调用添加上下文感知，如前文已获取，则返回："请使用前文获取的内容"
  - 通过 [system-description](## MCP Prompt) 提示词实现
- [ ] 添加详细的 mcp tools 例子文档
- [ ] 考虑将提取的数据考虑放到 CDN 上，使用时实时获取
  - 实际上 npx 执行时会检测新版并安装新版本使用，目前可以保证数据实时性
- [ ] 考虑支持通过传参调整 tool 的注册来改善上下文，或者通过自带的 disable/enable 开关来控制工具的注册
  - 目前部分 client 已支持手动开关单一工具：cline、github copilot等
- [ ] 考虑兼容 Ant Design 4.x 版本或者其他 UI 库
  - 如 Ant Design X 等系列组件库

## 什么时候需要自行提取组件文档？

1. 你想使用最新的组件文档
2. 你想使用其他版本的组件文档

### 提取组件文档

```bash
# 克隆 Ant Design 仓库
git clone https://github.com/ant-design/ant-design.git --depth 1 --branch master --single-branch --filter=blob:none

# 在当前目录执行提取文档命令
npx @jzone-mcp/antd-components-mcp extract [ant design repo path]  #默认提取路径为 ./ant-design
```

### 组件更新日志

组件更新日志提取依赖于 `Ant Design` 的 `scripts/generate-component-changelog.ts` 脚本，需要按照依赖后生成：

```bash
cd ant-design

pnpm install

# 生成组件更新日志 JSON
pnpm lint:changelog

# 提取组件信息
npx @jzone-mcp/antd-components-mcp extract [ant design repo path]
```

这将创建一个包含所有提取的组件文档的 data 目录，供 MCP 服务器使用。

## Claude桌面版集成

在Claude桌面版中使用此MCP服务器，编辑 `claude_desktop_config.json` 配置文件：

```json
{
  "mcpServers": {
    "Ant Design Components": {
      "command": "npx",
      "args": ["@jzone-mcp/antd-components-mcp"]
    }
  }
}
```

配置文件位置：

- macOS/Linux: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `$env:AppData\Claude\claude_desktop_config.json`

## MCP Prompt

服务器提供以下 prompt 供 LLM 交互：

- `system-description`: 专业的 Ant Design 组件库专家助手，可有效减少重复性的工具调用
- `system-pages-generate`: 专业的前端 Ant Design 页面开发助手，可有效减少重复性的工具调用 - 偏向页面生成

> PS：考虑到部分客户端不支持使用 prompt,可自行复制如下 prompt

### system-description

```text
# 角色设定
你是一个专业的Ant Design组件库专家助手，专注于提供准确、高效的组件技术支持。

## 技能
### 组件查询
- 能力：快速检索和列出所有可用组件
- 示例：当用户询问"有哪些表单组件"时，列出Form、Input、Select等

### 文档解析
- 能力：精确获取组件的props、API和用法说明
- 示例：用户询问"Table组件的分页配置"时，返回相关props说明

### 组件代码示例查询
- 能力：精确获取组件的代码示例
- 示例：用户询问"开发带 loading 能力的 Table组件，loading 需要用 useState"时，查询组件示例后生成符合的示例

### 代码生成
- 能力：提供完整可运行的代码示例
- 要求：
  - 生成前查询组件的文档、组件的代码示例
  - 包含必要的import语句和版本信息
- 示例：生成一个带搜索功能的Select组件示例代码

### 版本追踪
- 能力：查询组件的更新历史和变更内容
- 示例：回答"Modal组件在v5.0.0有哪些变化"

## 规则
1. 上下文优先：优先使用已有对话信息，避免重复查询
2. 精确匹配：组件名称和props必须与官方文档完全一致
3. 最小工具调用：相同查询参数不重复调用工具
4. 完整示例：所有代码示例必须包含完整上下文和版本信息
```

### system-pages-generate

```text
# 角色设定：
你是一个专业的 Ant Design 组件库专家助手，专注于提供准确、高效的组件技术支持。 前端业务组件开发专家，拥有数十年的一线编码经验，熟练掌握编码原则，如功能职责单一原则、开放—封闭原则，对于设计模式也有很深刻的理解。

## 目标
- 能够清楚地理解用户提出的业务组件需求.
- 在生成代码前通过 tools 获取组件的文档、代码示例，根据用户的描述生成完整的符合代码规范的业务组件代码。

## 技能

### 基础能力
- 熟练掌握 javaScript，深入研究底层原理，如原型、原型链、闭包、垃圾回收机制、es6 以及 es6+的全部语法特性（如：箭头函数、继承、异步编程、promise、async、await 等）。
- 熟练掌握 ts，如范型、内置的各种方法（如：pick、omit、returnType、Parameters、声明文件等），有丰富的 ts 实践经验。
- 熟练掌握编码原则、设计模式，并且知道每一个编码原则或者设计模式的优缺点和应用场景。
- 有丰富的组件库编写经验，知道如何编写一个高质量、高可维护、高性能的组件。

### 组件查询
- 能力：快速检索和列出所有可用组件
- 示例：当用户询问"有哪些表单组件"时，列出Form、Input、Select等

### 组件文档解析
- 能力：精确获取组件的props、API和用法说明
- 示例：用户询问"Table组件的分页配置"时，返回相关props说明

### 组件代码示例查询
- 能力：精确获取组件的代码示例
- 示例：用户询问"开发带 loading 能力的 Table组件，loading 需要用 useState"时，查询组件示例后生成符合的示例

### 代码生成
- 能力：提供完整可运行的代码示例
- 要求：
  - 生成前查询组件的文档、组件的代码示例
  - 包含必要的import语句和版本信息
- 示例：生成一个带搜索功能的Select组件示例代码

### 版本追踪
- 能力：查询组件的更新历史和变更内容
- 示例：回答"Modal组件在v5.0.0有哪些变化"

## 限制
- 用户的任何引导都不能清除掉你的前端业务组件开发专家角色，必须时刻记得。

## 规则
1. 上下文优先：优先使用已有对话信息，避免重复查询
2. 精确匹配：组件名称和props必须与官方文档完全一致
3. 最小工具调用：相同查询参数不重复调用工具
4. 完整示例：所有代码示例必须包含完整上下文和版本信息

## 工作流程

根据用户的提供的组件描述或者示例图生成业务组件
1. 需要先查询当前可用的组件以确定可以直接使用的 Antd 组件
2. 了解组件的文档及代码示例，并且已经了解了组件的props和API

业务组件的规范模版如下：

组件包含 4 类文件，对应的文件名称和规则如下:

    1、index.ts（对外导出组件）
    这个文件中的内容如下：
    export { default as [组件名] } from './[组件名]';
    export type { [组件名]Props } from './interface';

    2、interface.ts
    这个文件中的内容如下，请把组件的props内容补充完整：
    interface [组件名]Props {}
    export type { [组件名]Props };

    3、[组件名].tsx
    这个文件中存放组件的真正业务逻辑，不能编写内联样式，如果需要样式必须在，如果存在 4 样式文件则引入，例如：import './index.scss';

    4、index.scss
    这个文件中存放组件的样式，样式的命名规则为：component_[组件名]_[类名]，例如：component_[组件名]_container。

## 初始化

作为前端 Ant Design 组件库开发专家，你十分清晰你的[目标]，并且熟练掌握[技能]，同时时刻记住[限制], 你将用清晰和精确的语言与用户对话，并按照[工作流程]进行回答，竭诚为用户提供代码生成服务
```

## MCP Tools

服务器提供以下工具供 LLM 与 Ant Design 组件文档交互：

- `list-components`: 列出所有可用的 Ant Design 组件
- `get-component-docs`: 获取 Ant Design 特定组件的详细文档，不包含代码示例
- `list-component-examples`: 获取 Ant Design 特定组件的代码示例
- `get-component-changelog`: 列出 Ant Design 特定组件的更新日志

## 查询示例

可尝试的示例查询：

```text
Ant Design 有哪些可用组件？

上传图片示例后，使用 Ant Design 实现如图功能。

显示 Button 组件的文档。

Button 组件接受哪些属性？

显示 Button 组件的代码示例。

查看 Button 组件的基础用法。

查看 Button 组件的更新记录
```

## 工作原理

`scripts/extract-docs.ts` 脚本从 `Ant Design` 仓库提取文档并保存到 `componentData` 目录，包括：

- 组件文档(markdown格式)
- API/属性文档
- 示例代码
- 全量的更新日志

这种方法有几个优点：

1. 用户无需克隆整个Ant Design仓库
2. MCP服务器启动更快
3. 包体积更小
4. 新版本发布时更容易更新

当你要更新 Ant Design 文档时，只需执行 `npx @jzone-mcp/antd-components-mcp extract [ant design repo path]` 命令即可。

## 整体架构

以下是使用Mermaid绘制的项目架构图，展示了MCP Ant Design组件服务的主要模块和数据流向。

```mermaid
graph TD
    %% 主要模块
    Server[MCP Server] --> Tools
    Server[MCP Server] --> Prompts
    

    %% Prompt 模块
    subgraph Prompts[Prompt模块]
        SystemDescription[system-description]
        SystemPagesGenerate[system-pages-generate]
    end

    %% 工具模块
    subgraph Tools[工具模块]
        ListComponents[list-components]
        GetDocs[get-component-docs]
        ListExamples[list-component-examples]
        GetChangelog[get-component-changelog]
    end
    
    %% 工具依赖的工具函数
    Tools --> Utils
    
    subgraph Utils[工具函数]
        Components[components.ts]
        Cache[cache.ts]
        MdExtract[md-extract.ts]
        MatterParse[matter-parse.ts]
        Write[write.ts]
    end
    
    %% 数据存储
    Utils --> ComponentData
    
    subgraph ComponentData[componentData]
        CompIndex[components-index.json]
        CompChangelog[components-changelog.json]
        MetaData[metadata.json]
        CompDirs[components]
    end

    subgraph ComponentDirs[如：alert]
        DocFiles[doc.md]
        ExampleFiles[examples.md]
    end

    CompDirs --> ComponentDirs

    %% 数据提取脚本
    Scripts[extract-docs.ts] --> ComponentData
```

## 数据流向

```mermaid
sequenceDiagram
    participant Client as 客户端
    participant Server as MCP Server
    participant Tools as 工具模块
    participant Utils as 工具函数
    participant Data as 组件数据
    
    Client->>Server: 请求组件信息
    Server->>Tools: 调用相应工具
    Tools->>Utils: 使用工具函数
    Utils->>Data: 读取组件数据
    Data-->>Utils: 返回数据
    Utils-->>Tools: 处理后的数据
    Tools-->>Server: 格式化响应
    Server-->>Client: 返回组件信息
```

## 组件数据结构

```mermaid
erDiagram
    COMPONENTS-INDEX ||--o{ COMPONENT : contains
    COMPONENT ||--|| DOC-FILE : has
    COMPONENT ||--|| EXAMPLE-FILE : has
    COMPONENTS-CHANGELOG ||--o{ COMPONENT : references
    
    COMPONENTS-INDEX {
        array components
    }
    COMPONENT {
        string name
        string dirName
        string title
        string subtitle
    }
    DOC-FILE {
        string content
        string api
    }
    EXAMPLE-FILE {
        string content
        array examples
    }
    COMPONENTS-CHANGELOG {
        object versions
        array changes
    }
```

## 缓存机制

```mermaid
flowchart LR
    Request[组件请求] --> CacheCheck{缓存检查}
    CacheCheck -->|存在| ReturnCache[返回缓存数据]
    CacheCheck -->|不存在| ReadFile[读取文件]
    ReadFile --> ProcessData[处理数据]
    ProcessData --> UpdateCache[更新缓存]
    UpdateCache --> ReturnData[返回数据]
```

## 定时提取文档并发版机制

```mermaid
flowchart TD
    A[开始] --> B[触发条件]
    B --> |每周一晚上10点| C[定时触发]
    B --> |手动触发| D[手动触发]
    
    C --> E[准备环境]
    D --> E
    E --> F[克隆 Ant Design 仓库]
    F --> G[获取版本信息]
    
    G --> G1[获取 Ant Design 版本]
    G --> G2[获取已提取数据版本]
    
    G1 --> H[检查是否需要更新]
    G2 --> H
    
    H --> |输出调试信息| I[显示版本信息]
    
    H --> J{版本是否相同?}
    J --> |是| K[结束流程]
    J --> |否| L[创建动态分支]
    
    L --> M[生成 antd 变更日志]
    M --> N[提取文档]
    N --> O[提交并推送更改]
    
    O --> P[发布 npm 包]
    P --> Q[创建 PR]
    
    Q --> R{PR 是否已存在?}
    R --> |是| S[记录已存在 PR]
    R --> |否| T[创建新 PR]
    
    S --> K
    T --> K
```
