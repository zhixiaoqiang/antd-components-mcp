# Project Context

## Purpose

这是一个基于 Model Context Protocol (MCP) 的服务器项目，旨在为 AI 助手（如 Claude）提供 Ant Design 组件库的文档查询服务。项目的主要目标包括：

- 减少 AI 在生成 Ant Design 组件代码时的幻觉问题
- 提供准确的组件文档、API 定义和代码示例
- 支持组件更新历史查询
- 通过预处理的组件数据提高查询效率
- 提供系统提示词优化，减少重复的工具调用

## Tech Stack

- **运行时环境**: Node.js (>=16.0.0)
- **编程语言**: TypeScript 5.8.2
- **模块系统**: ES2022 (ESM)
- **构建工具**: tsup 8.4.0
- **包管理器**: pnpm
- **核心依赖**:
  - `@modelcontextprotocol/sdk`: MCP 协议 SDK
  - `zod`: 数据验证
  - `to-vfile`, `vfile-matter`: Markdown 文件处理
- **开发工具**:
  - `tsx`: TypeScript 执行工具
  - `@types/node`: Node.js 类型定义

## Project Conventions

### Code Style

- **语言**: TypeScript，启用严格模式 (`strict: true`)
- **模块格式**: ES2022 模块 (ESM)，使用 `import/export` 语法
- **命名规范**:
  - 文件命名: 使用 kebab-case（如 `get-component-docs.ts`, `list-components.ts`）
  - 函数/变量命名: 使用 camelCase（如 `loadComponentsList`, `registryTool`）
  - 类命名: 使用 PascalCase（如 `Cache`）
  - 常量命名: 使用 UPPER_SNAKE_CASE（如 `DEFAULT_TTL`）
- **代码注释**:
  - 使用 JSDoc 格式注释函数和类
  - 关键逻辑添加中文注释说明
- **格式化**:
  - 使用 2 空格缩进
  - 字符串使用单引号（根据代码示例推断）
  - 行尾不强制分号（根据代码示例推断）

### Architecture Patterns

- **MCP 服务器架构**: 基于 MCP SDK 的标准服务器实现，使用 StdioServerTransport 进行通信
- **模块化设计**:
  - `tools/`: MCP 工具模块，每个工具独立文件
  - `utils/`: 工具函数模块，提供可复用的功能
  - `prompt/`: 系统提示词模块
  - `scripts/`: 数据提取脚本
- **工具注册模式**: 通过统一的 `index.ts` 文件注册所有工具和提示词
- **缓存机制**: 使用内存缓存（Map）减少文件 IO，默认 TTL 10 分钟
- **数据存储**: 组件数据存储在 `componentData/` 目录，包含 JSON 索引和 Markdown 文档

### Testing Strategy

- **测试工具**: 使用 `tsx` 执行测试文件
- **测试文件**: `test-server.ts` 用于测试服务器功能
- **测试命令**: `pnpm test` (执行前自动构建)
- **测试环境**: 本地开发环境，通过 MCP Inspector 工具进行调试

### Git Workflow

- **主分支**: `main`
- **自动化流程**:
  - 每周一晚上 10 点自动触发文档提取和发布
  - 支持手动触发文档提取
  - 自动检测 Ant Design 版本更新
  - 自动创建动态分支、提交、发布 npm 包和创建 PR
- **版本管理**: 通过 `package.json` 的 `version` 字段管理，当前版本 1.0.43
- **发布流程**: 使用 `prepublishOnly` 钩子确保发布前构建

## Domain Context

- **MCP 协议**: Model Context Protocol，用于 AI 助手与外部数据源交互的协议
- **Ant Design**: 企业级 UI 设计语言和 React UI 库
- **组件文档结构**:
  - 每个组件有独立的目录（kebab-case 命名）
  - 包含 `docs.md`（文档和 API）和 `examples.md`（代码示例）
  - 组件索引存储在 `components-index.json`
  - 更新日志存储在 `components-changelog.json`
- **数据提取流程**:
  - 从 Ant Design 仓库提取组件文档
  - 处理 Markdown 文件，提取 frontmatter 和内容
  - 生成结构化的组件数据供 MCP 服务器使用
- **工具功能**:
  - `list-components`: 列出所有可用组件
  - `get-component-docs`: 获取组件详细文档（不含示例）
  - `list-component-examples`: 获取组件代码示例
  - `get-component-changelog`: 获取组件更新日志

## Important Constraints

- **Node.js 版本**: 必须 >= 16.0.0
- **模块系统**: 严格使用 ESM，不支持 CommonJS
- **数据版本**: 当前预处理的组件数据基于 Ant Design V6.0.0 (2025/11/24)
- **文件编码**: 构建时需保留 UTF-8 编码以支持中文字符
- **客户端兼容性**:
  - 已测试支持 Claude Desktop
  - 目前不支持 GitHub Copilot/Cline 插件
- **缓存策略**: 内存缓存，服务器重启后失效，默认 10 分钟过期

## External Dependencies

- **Ant Design 仓库**: 用于提取组件文档的源数据
  - 仓库地址: <https://github.com/ant-design/ant-design>
  - 提取命令需要访问本地克隆的仓库
- **npm 注册表**: 发布包到公共 npm 注册表
  - 注册表: <https://registry.npmjs.org/>
  - 包名: `@jzone-mcp/antd-components-mcp`
- **GitHub**: 代码仓库和问题追踪
  - 仓库: <https://github.com/zhixiaoqiang/antd-components-mcp>
  - 用于自动化 PR 创建和版本管理
