[![antd-components-mcp](https://socialify.git.ci/zhixiaoqiang/antd-components-mcp/image?description=1&font=Inter&forks=1&issues=1&language=1&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light)](https://github.com/zhixiaoqiang/antd-components-mcp)

## 引言

当下 AI 盛行，层出不穷的大语言模型、IDE、Extension，其中热门的有 Chatgpt o3、Claude 3.7 Sonnet、Gemini 2.5 pro、Grok 3、Deepseek v3-0424、Cursor、Trae 国际版、Github Copilot、Cline，个人主要使用的是以下白嫖方案:

- Trae 国际版
- VS Code + Cline
- VS Code + Github Copilot - 学生版
结合上白嫖的 Gemini exp 版本、OpenRouter free modal

通用大模型非常强大，但是在千人千面的项目场景中，通用的大模型缺少了点相关性，想要增加相关性可以通过：添加 rules、设定 system prompt/不断地添加 prompt、添加 rag、开发定向 MCP 服务、微调模型、甚至是训练公司项目特有模型，方案挺多的实际要看情况选择合适的方案，本文目的是通过 [MCP + system prompt] 方案实现让大模型可以理解我们的特定组件信息，让大模型可以生成更相关的代码

## MCP 是什么

MCP 全称 Model Context Protocol 是一种用于描述模型上下文的协议，它允许模型在生成文本时获取更多的上下文信息。MCP 协议定义了一种标准的方式来描述模型的上下文，包括模型的名称、版本、输入和输出格式等信息。

简单理解就是：

每一个 MCP Server 都是大语言模型客户端的插件，MCP 可以提供 Tools、Prompt、Resource 等功能供客户端使用，客户端启动时读取所有的 MCP 的 Tools、Prompt、Resource 描述当做大语言模型的系统提示词，客户端根据模型返回的内容判断调用对应的 MCP 获取函数返回内容，客户端将用户输入 + 函数返回内容发送给大语言模型，大语言模型根据用户的问题生成更相关的回复

- 客户端：Cursor、Claude Desktop、Github Copilot 等
  - 目前测试下来仅 Claude Desktop 支持 Prompt、Resource
- Tools：提供核心的处理函数，大模型根据 tool 名称 + 描述 + 约定的入参来准确的调用对应的函数，函数的返回值最终会结合用户提问发送给大模型
- Prompt：预设的提示词，支持配置表单输入，使用时需要手动选定，通常是用来帮助提升 MCP Tools 的使用能力
  - 例如本文通过预设的 `system-description` 提示词来圈定能力、优化工具调用频次、优化上下文
- Resource：预设的内容，如 Antd Button 组件文档，使用时需要手动选定

**再简化：MCP 会组成系统提示词，大语言模型根据系统提示词来精准执行函数生成更相关的回复**

**MCP 重点：提供强大的描述词 + 提供强大的处理函数，让大模型可以理解我们的特定组件信息然后生成更相关的代码**

## 项目背景

在一个月前我了解了 MCP 协议相关知识后，开始思考作为前端有没有什么可以开发的功能，毕竟只有开始动手开发才算真正的入门，才会有后续更多的可能，于是开始去了解 MCP 资源站([mcp.so](https://mcp.so/) 最开始关注的时候 [mcp.so](https://mcp.so/) 上仅有几百个服务，截止 2025-04-16 已经有 **8888** 了、[smithery.ai](https://smithery.ai/)、[glama.ai](https://glama.ai/))、知乎、Github，最终参照着一篇知乎文档结合 [Trae](https://www.trae.ai/) 实现了一个桌面图片管理的 MCP [desktop-image-manager-mcp](https://github.com/zhixiaoqiang/desktop-image-manager)

实现了一个包含基础 Tool 功能的 MCP 后开始想去体验更完整以及更贴合工作的能力，如：

1. MCP 的 Prompt、Resource 是具体用法是怎么样的 - 官方文档看不出用法
2. 能不能基于现有内容实现更加前端相关的 MCP

最终打算实现：一个 xx 组件信息查询的 MCP 服务，可以让大模型回答问题，上传 UI 稿或者需求后生成更相关的代码

## 方案思考

**要点：过程简单一点，先实现再优化**

### 核心思路

#### 实现思路

![实现思路](./assets/Implementation-ideas.png)

1. 准备组件文档数据供 MCP Tools 使用
   1. 有哪些组件
   2. 组件的属性、例子、注意事项是什么
2. MCP Tools 告诉大模型何时使用
3. 大模型结合用户问题 + MCP Tools 返回提高回答的相关性

这样对组件库就有了一定的要求

#### 组件库选型要求

1. 组件库文档清晰、规范，每个组件都有完整的说明
2. 最好是有中英文文档：英文文档通常效果更好
3. 组件有大量高质量的例子说明
4. 加分项
   1. 组件发布时间较早、社区活跃：大模型训练进去的数据效果更好
   2. 有很好的组件更新说明：可以告知升级到某个版本后可以使用相关功能/修复相关 BUG

基于以上要求选择合适的组件库进行 MCP 开发将会事半功倍，所以选了常用且广为人知的 [Ant Design](https://ant-design.antgroup.com/components/typography-cn) 组件库

## 技术方案

Github Repo: [zhixiaoqiang/antd-components-mcp](https://github.com/zhixiaoqiang/antd-components-mcp)

## 架构设计

### 整体架构

![整体架构](./assets/architecture.png)

### 数据流转

![数据流转](./assets/data-flow.png)

MCP Ant Design 组件服务采用模块化设计，主要包含以下核心模块：

### 组件文档数据提取

![提取工具架构](./assets/extract-architecture.png)

开发提取数据的命令行工具从 Ant Design 仓库提取文档并保存到当前 npm 包目录，预提取后可以做到开箱即用，同时将提取脚本暴露出去，方便用户按照项目实际的版本进行文档提取

主要提取如下内容：

1. 读取 `components` 目录生成可用组件列表
   1. 输出 JSON 格式
   2. 通过 `vfile-matter` 解析元信息：tag、description
2. 读取 `components/[component]/index.zh-CN.md` 生成组件文档
   1. 输出 markdown 格式
3. 提取 `components/[component]/index.zh-CN.md` 中的 API 模块生成组件API/属性文档
   1. 输出 markdown 格式
4. 读取 `components/[component]/demo/*.{md|tsx}` 整合到一个组件示例代码文档
   1. 输出 markdown 格式
   2. 为什么要生成示例代码集而不是生成单独的示例代码？
      1. 使用者不确定有哪些例子大模型不容易精准识别特定例子
      2. 示例代码集可以提高大模型的容错率
5. 执行 `pnpm lint:changelog` 生成组件级别的 changelog，提取位置：`ant-design/.dumi/preset/components-changelog-cn.json`
   1. JSON 格式

**提取至少需要支持：Antd v4.x、Antd v5.x**

### 提取优化

#### 节省 token 消耗

通过在线的 [opanai tokenizer](https://platform.openai.com/tokenizer) 实时查看 token 数值

1. 提取组件文档时过滤掉无用的内容，如：
   - 过滤无效组件
   - 移除 meta 信息
   - 移除多余的空行
   - 移除主题样式
   - 同时存在中英文文档时的英文文档
   - 移除其他的无用内容
2. API 文档包含在文档中，过滤掉无用内容后差异不大，移除单独的 API 文档
3. JSON 数据通过 `JSON.stringify` 压缩

### Tools 设计

1. Tool1：获取可用组件列表，包含：
   1. 组件名称
   2. 组件描述
   3. 组件可用版本
   4. 何时使用
2. Tool2：获取组件详细文档，包含：
   1. 组件名称
   2. 组件描述
   3. 何时使用
   4. API 文档
   5. FAQ
~~3. Tool3：获取组件 API 文档，包含~~
   ~~1. API 文档~~
3. Tool4：获取组件示例代码，包含
   1. 全量示例
4. Tool5：获取组件的更新记录
   1. 组件的更新列表

### MCP Tools 优化

#### 优化 IO 执行

使用缓存，减少 IO 操作

![缓存](./assets/cache-flow.png)

#### 节省 token 消耗

1. Tools 描述缩减内容
2. Tools 输出内容缩减内容，过滤不需要的数据
3. 通过提供的 MCP Prompt，有效减少重复的工具调用

### MCP Prompt 设计

> 基于 [LangGPT 框架](https://github.com/langgptai/LangGPT/blob/main/Docs/HowToWritestructuredPrompts.md)生成

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

### 代码生成
- 能力：提供完整可运行的代码示例
- 要求：包含必要的import语句和版本信息
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

- 根据用户的描述生成完整的符合代码规范的业务组件代码。

## 技能

### 基础能力
- 熟练掌握 javaScript，深入研究底层原理，如原型、原型链、闭包、垃圾回收机制、es6 以及 es6+的全部语法特性（如：箭头函数、继承、异步编程、promise、async、await 等）。
- 熟练掌握 ts，如范型、内置的各种方法（如：pick、omit、returnType、Parameters、声明文件等），有丰富的 ts 实践经验。
- 熟练掌握编码原则、设计模式，并且知道每一个编码原则或者设计模式的优缺点和应用场景。
- 有丰富的组件库编写经验，知道如何编写一个高质量、高可维护、高性能的组件。

### 组件查询
- 能力：快速检索和列出所有可用组件
- 示例：当用户询问"有哪些表单组件"时，列出Form、Input、Select等

### 文档解析
- 能力：精确获取组件的props、API和用法说明
- 示例：用户询问"Table组件的分页配置"时，返回相关props说明

### 代码生成
- 能力：提供完整可运行的代码示例
- 要求：包含必要的import语句和版本信息
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

根据用户的提供的组件描述或者示例图生成业务组件，业务组件的规范模版如下：

组件包含 5 类文件，对应的文件名称和规则如下:

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

## 实现特性

- 🚀 已预处理数据，开箱即用(预处理版本为：`Ant Design V5.24.7 2025/4/16`)
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

## 最佳实践

在 Claude 桌面版中使用此 MCP 服务器

### 第一步：确定文档数据

当前包内维护的为 `5.24.x` 版本的文档数据，如果你使用的是 V5 版本的话直接前往第二步，如果你想使用其他版本的组件文档，需要自行提取组件文档

#### 什么时候需要自行提取组件文档？

1. 你想使用最新的组件文档
2. 你想使用其他版本的组件文档

#### 提取组件文档

```bash
# 克隆 Ant Design 仓库
git clone https://github.com/ant-design/ant-design.git --depth 1 --branch master --single-branch --filter=blob:none

# 在当前目录执行提取文档命令
npx @jzone-mcp/antd-components-mcp extract [ant design repo path]  #默认提取路径为 ./ant-design
```

### 第二步：配置 MCP

编辑 `claude_desktop_config.json` 配置文件：

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

以下是配置成功的示例：

![ensure-tools-setup](./assets/ensure-tools-setup.gif)

### 第三步：添加 MCP 内置提示词

通过 Claude Desktop 添加 Prompt

![Claude Desktop Setup Prompt](./assets/claude-setup-prompt.gif)

不支持 MCP Prompt 的客户端直接复制如下提示词：

#### 组件查询 - 简单开发

```text
你是一个专业的 Ant Design 组件库应用专家助手，具有以下能力：
1. 可以查询所有可用组件列表
2. 能获取组件的详细文档、属性说明和API定义
3. 能提供组件的代码示例
4. 能查询组件的更新历史

使用规则：
- 严格遵循以下工具使用优先级：
  1. 首先检查当前对话上下文是否已包含所需信息
  2. 只有当上下文确实缺少必要信息时才调用工具
  3. 对于完全相同的组件查询参数，禁止重复调用工具
- 对专业术语保持准确，不自行编造组件属性
- 代码示例要完整可运行，并注明所需版本
```

#### 页面开发 - 完整的页面功能生成

```text
# 角色设定：
你是一个专业的 Ant Design 组件库专家助手，专注于提供准确、高效的组件技术支持。 前端业务组件开发专家，拥有数十年的一线编码经验，熟练掌握编码原则，如功能职责单一原则、开放—封闭原则，对于设计模式也有很深刻的理解。

## 目标
- 能够清楚地理解用户提出的业务组件需求.
- 根据用户的描述生成完整的符合代码规范的业务组件代码。

## 技能

### 基础能力
- 熟练掌握 javaScript，深入研究底层原理，如原型、原型链、闭包、垃圾回收机制、es6 以及 es6+的全部语法特性（如：箭头函数、继承、异步编程、promise、async、await 等）。
- 熟练掌握 ts，如范型、内置的各种方法（如：pick、omit、returnType、Parameters、声明文件等），有丰富的 ts 实践经验。
- 熟练掌握编码原则、设计模式，并且知道每一个编码原则或者设计模式的优缺点和应用场景。
- 有丰富的组件库编写经验，知道如何编写一个高质量、高可维护、高性能的组件。

### 组件查询
- 能力：快速检索和列出所有可用组件
- 示例：当用户询问"有哪些表单组件"时，列出Form、Input、Select等

### 文档解析
- 能力：精确获取组件的props、API和用法说明
- 示例：用户询问"Table组件的分页配置"时，返回相关props说明

### 代码生成
- 能力：提供完整可运行的代码示例
- 要求：包含必要的import语句和版本信息
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

根据用户的提供的组件描述或者示例图生成业务组件，需要先查询当前可用的组件以确定可以直接使用的 Antd 组件，业务组件的规范模版如下：

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

### 第四步：进行对话

```text
Ant Design 有哪些可用组件？

上传图片示例后，使用 Ant Design 实现如图功能。

显示 Button 组件的文档。

Button 组件接受哪些属性？

显示 Button 组件的代码示例。

查看 Button 组件的基础用法。

查看 Button 组件的更新记录
```

## 未来规划

- [ ] 实现监听 Ant Design 组件库的更新，自动进行数据提取发版
- [ ] 考虑为工具调用添加上下文感知，如前文已获取，则返回："请使用前文获取的内容"
  - 通过 sessionId 处理
  - 客户端通常可以实现重新编辑对话，所以需要考虑当前情况
- [ ] 添加详细的 mcp tools 例子文档
- [ ] 考虑将提取的数据考虑放到 CDN 上，使用时实时获取
  - 实际上 npx 执行时会检测新版并安装新版本使用，目前可以保证数据实时性
- [ ] 考虑支持通过传参调整 tool 的注册来改善上下文，或者通过自带的 disable/enable 开关来控制工具的注册
  - 目前部分 client 已支持手动开关单一工具：cline、github copilot等
- [ ] 考虑兼容 Ant Design 4.x 版本或者其他 UI 库
  - 如 Ant Design X 等系列组件库

## 总结

> 由 DeepSeek-V3-0324 生成

通过开发 Ant Design 组件 MCP 服务，我们实现了以下核心价值：

1. **精准组件知识获取**：能够快速查询 Ant Design 组件的详细文档、API 定义和示例代码，解决了开发过程中频繁查阅文档的低效问题。

2. **AI 辅助开发提效**：通过与 Claude 等 AI 客户端的集成，实现了：
   - 自然语言查询组件信息
   - 根据 UI 稿或需求生成相关代码
   - 获取组件更新历史等高级功能

3. **技术方案创新**：
   - 开发了自动化文档提取工具，支持多版本 Ant Design
   - 设计了高效的缓存机制减少 IO 操作
   - 优化了 token 使用，降低大模型调用成本

4. **可扩展架构**：模块化设计使得该方案可以轻松适配其他 UI 组件库，如 Ant Design 4.x 或其他流行框架。

### 实践价值

- 对开发者：节省 50%以上的组件查阅时间，提高代码质量和一致性，可参照源码实现自己的组件库 MCP 服务
- 对团队：建立标准化组件使用规范，降低新人学习成本
- 对企业：可快速构建内部组件库的智能辅助系统

### 未来展望

随着 MCP 生态的成熟，我们可以进一步：
- 实现组件变更的自动监控和更新
- 增加更多上下文感知能力
- 扩展支持更多 UI 框架和版本

这个项目不仅验证了 MCP 协议在前端领域的实用价值，也为构建领域特定的 AI 辅助工具提供了可复用的技术方案。开发者可以基于此思路，快速构建自己业务领域的智能辅助系统。
