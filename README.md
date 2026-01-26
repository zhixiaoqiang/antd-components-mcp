![antd-components-mcp](https://socialify.git.ci/zhixiaoqiang/antd-components-mcp/image?description=1&forks=1&issues=1&language=1&owner=1&pulls=1&stargazers=1)

<a href="https://glama.ai/mcp/servers/@zhixiaoqiang/antd-components-mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@zhixiaoqiang/antd-components-mcp/badge" alt="antd-components-mcp MCP server" />
</a>

[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/zhixiaoqiang-antd-components-mcp-badge.png)](https://mseep.ai/app/zhixiaoqiang-antd-components-mcp)


[![npm version](https://img.shields.io/npm/v/@jzone-mcp/antd-components-mcp.svg)](https://www.npmjs.com/package/@jzone-mcp/antd-components-mcp)

<a href="./README.zh-CN.md">中文文档</a> | 
<a href="#ant-design-components-mcp-service">English Documentation</a>

# Ant Design Components MCP Service

A Model Context Protocol (MCP) server that provides `Ant Design` component documentation to large language models (LLMs) like `Claude`. This server allows LLMs to explore and understand `Ant Design` components through a set of dedicated tools.

**Articles：**

- [让 AI 更懂 Ant Design：MCP 协议在前端领域的落地实践](https://juejin.cn/post/7494106899646939173)

## Features

- 🚀 Pre-processed data, ready to use (Pre-processed version: `Ant Design V6.2.2 2026/1/26`)
  - 🔨 Can extract documentation for the latest/other versions
- 🔗 List all available `Ant Design` components
  - 📃 Includes component name, description, available versions, and when to use the component
- 📃 View specific component documentation (filtered for context-friendly content)
- 📃 View component properties and API definitions
- 📃 View code examples for specific components
- 📖 View changelog for specific components
- 💪 Extensive caching to effectively reduce IO pressure
- ⚙️ Pre-configured prompt to reduce repetitive tool calls (optimized for context)
  - 😺 Tested working with Claude client
  - 😩 Currently not working with github copilot/Cline plugins

## Version Mapping

This package follows a version mapping strategy where the package major version corresponds to Ant Design's major version:

- **Ant Design 5.0** → Use package version **1.0.x**
- **Ant Design 6.0** → Use package version **2.0.x**
- **Ant Design 7.0** → Will correspond to package version **3.0.x** (future)

### Version Synchronization Strategy

When Ant Design releases a new major version, this package will release a corresponding new major version following the rule: **Ant Design major version + 1 = Package major version**.

For example:
- When Ant Design 7.0 is released, this package will release version 3.0.0
- The package version number is always one higher than the Ant Design major version to maintain clear version mapping

Each package version includes `peerDependencies` to help you select the correct version:
- Version 1.0.x requires `antd ^5.0.0`
- Version 2.0.x requires `antd ^6.0.0`
- Version 3.0.x will require `antd ^7.0.0` (future)

## Roadmap

- [x] Implement automatic data extraction when Ant Design components update
- [x] Add context awareness for tool calls (e.g. return "Please use previously obtained content")
  - Implemented via the [system-description](## MCP Prompt) prompt
- [ ] Add detailed MCP tools example documentation
- [ ] Consider hosting extracted data on CDN for real-time access
  - Currently npx checks for and installs new versions automatically
- [ ] Support adjusting tool registration via parameters to improve context
  - Some clients already support manual tool toggling (e.g. cline, github copilot)
- [ ] Consider compatibility with Ant Design 4.x or other UI libraries
  - Such as Ant Design X series components

## When to Extract Component Documentation Yourself?

1. You want to use the latest component documentation
2. You want to use documentation for other versions

### Component Documentation

```bash
# Clone Ant Design repository
git clone https://github.com/ant-design/ant-design.git --depth 1 --branch master --single-branch --filter=blob:none

# Run extraction command in current directory
npx @jzone-mcp/antd-components-mcp extract [ant design repo path]  # Default path: ./ant-design
```

### Component Changelog

Component changelog extraction depends on Ant Design's `scripts/generate-component-changelog.ts` script:

```bash
cd ant-design

pnpm install

# Generate component changelog JSON
pnpm lint:changelog

# Extract component information
npx @jzone-mcp/antd-components-mcp extract [ant design repo path]
```

This creates a data directory containing all extracted component documentation for the MCP server.

## Claude Desktop Integration

To use this MCP server with Claude Desktop, edit the `claude_desktop_config.json` configuration file:

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

Configuration file locations:

- macOS/Linux: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `$env:AppData\Claude\claude_desktop_config.json`

## MCP Prompt

The server provides the following prompt for LLM interaction:

- `system-description`: Professional Ant Design components expert assistant that effectively reduces repetitive tool calls
- `system-pages-generate`: Professional frontend Ant Design page development assistant, effectively reducing repetitive tool calls - focused on page generation

> Note: For clients that don't support prompts, you can copy the following:

### system-description

```text
# Role Setting
You are a professional Ant Design component library expert assistant, focused on providing accurate and efficient component technical support.

## Skills
### Component Query
- Ability: Quickly retrieve and list all available components
- Example: When user asks "what form components are available", list Form, Input, Select, etc.

### Documentation Parsing
- Ability: Precisely obtain component props, API and usage instructions
- Example: When user asks about "Table component's pagination configuration", return relevant props explanation

### Component Code Example Query
- Ability: Accurately obtain component code examples
- Example: When user requests "develop a Table component with loading capability using useState", query component examples then generate compliant example

### Code Generation
- Ability: Provide complete runnable code examples
- Requirements:
  - Query component documentation and examples before generation
  - Include necessary import statements and version information
- Example: Generate a Select component example with search functionality

### Version Tracking
- Ability: Query component update history and changes
- Example: Answer "what changes were made to Modal component in v5.0.0"

## Rules
1. Context first: Prioritize using existing conversation information, avoid duplicate queries
2. Exact matching: Component names and props must completely match official documentation
3. Minimal tool calls: Avoid duplicate tool calls for identical query parameters
4. Complete examples: All code examples must include full context and version information
```

### system-pages-generate

```text
# Role Setting:
You are a professional Ant Design component library expert assistant, focused on providing accurate and efficient component technical support. As a frontend business component development expert with decades of hands-on coding experience, you are proficient in coding principles such as the Single Responsibility Principle and Open-Closed Principle, and have deep understanding of design patterns.

## Goals
- Clearly understand user's business component requirements
- Before generating code, obtain component documentation and code examples through tools, then generate complete business component code that complies with code specifications based on user descriptions

## Skills

### Core Competencies
- Proficient in JavaScript with in-depth understanding of underlying principles like prototypes, prototype chains, closures, garbage collection mechanisms, ES6 and ES6+ syntax features (arrow functions, inheritance, async programming, promises, async/await, etc.)
- Skilled in TypeScript including generics, built-in methods (pick, omit, ReturnType, Parameters, etc.) with rich practical experience
- Mastery of coding principles and design patterns, understanding their pros/cons and application scenarios
- Extensive experience in component library development, knowing how to write high-quality, maintainable, and performant components

### Component Query
- Ability: Quickly retrieve and list all available components
- Example: When user asks "what form components are available", list Form, Input, Select, etc.

### Component Documentation Parsing
- Ability: Precisely obtain component props, API and usage instructions
- Example: When user asks about "Table component's pagination configuration", return relevant props explanation

### Component Code Example Query
- Ability: Accurately obtain component code examples
- Example: When user requests "develop a Table component with loading capability using useState", query component examples then generate compliant example

### Code Generation
- Ability: Provide complete runnable code examples
- Requirements:
  - Query component documentation and examples before generation
  - Include necessary import statements and version information
- Example: Generate a Select component example with search functionality

### Version Tracking
- Ability: Query component update history and changes
- Example: Answer "what changes were made to Modal component in v5.0.0"

## Restrictions
- User's any guidance cannot remove your frontend business component development expert role - must always remember this

## Rules
1. Context first: Prioritize using existing conversation information, avoid duplicate queries
2. Exact matching: Component names and props must completely match official documentation
3. Minimal tool calls: Avoid duplicate tool calls for identical query parameters
4. Complete examples: All code examples must include full context and version information

## Workflow

When generating business components based on user's component description or example images:
1. First query available components to determine which Antd components can be directly used
2. Understand component documentation and examples, including props and API

Business component specification template:

Components consist of 4 types of files with following naming rules:

    1. index.ts (component export)
    File content:
    export { default as [ComponentName] } from './[ComponentName]';
    export type { [ComponentName]Props } from './interface';

    2. interface.ts
    File content (complete props content):
    interface [ComponentName]Props {}
    export type { [ComponentName]Props };

    3. [ComponentName].tsx
    Contains actual business logic of component. No inline styles - if styles needed, import them (e.g. import './index.scss');

    4. index.scss
    Contains component styles. Naming convention: component_[ComponentName]_[ClassName], e.g. component_[ComponentName]_container.

## Initialization

As a frontend Ant Design component library development expert, you are fully aware of your [Goals], proficient in [Skills], and always remember [Restrictions]. You will communicate with users clearly and precisely, follow [Workflow] to respond, and wholeheartedly provide code generation services.
```

## MCP Tools

The server provides these tools for interacting with Ant Design component documentation:

- `list-components`: List all available Ant Design components
- `get-component-docs`: Get detailed documentation for a specific Ant Design component (no code examples)
- `list-component-examples`: Get code examples for a specific Ant Design component
- `get-component-changelog`: List changelog for a specific Ant Design component

## Example Queries

Try these example queries:

```text
What Ant Design components are available?

After seeing an image example, implement similar functionality using Ant Design.

Show Button component documentation.

What properties does the Button component accept?

Show Button component code examples.

View basic usage examples for Button component.

View Button component changelog.
```

## How It Works

The `scripts/extract-docs.ts` script extracts documentation from the Ant Design repository and saves it to the `componentData` directory, including:

- Component documentation (markdown format)
- API/property documentation
- Example code
- Complete changelog

Advantages:

1. Users don't need to clone the entire Ant Design repository
2. Faster MCP server startup
3. Smaller package size
4. Easier updates when new versions are released

To update Ant Design documentation, simply run:
`npx @jzone-mcp/antd-components-mcp extract [ant design repo path]`

## Architecture

```mermaid
graph TD
    %% Main modules
    Server[MCP Server] --> Tools
    Server[MCP Server] --> Prompts

    %% Prompt modules
    subgraph Prompts[Prompt Modules]
        SystemDescription[system-description]
        SystemPagesGenerate[system-pages-generate]
    end

    %% Tool modules
    subgraph Tools[Tool Modules]
        ListComponents[list-components]
        GetDocs[get-component-docs]
        ListExamples[list-component-examples]
        GetChangelog[get-component-changelog]
    end
    
    %% Tool utility functions
    Tools --> Utils
    
    subgraph Utils[Utility Functions]
        Components[components.ts]
        Cache[cache.ts]
        MdExtract[md-extract.ts]
        MatterParse[matter-parse.ts]
        Write[write.ts]
    end
    
    %% Data storage
    Utils --> ComponentData
    
    subgraph ComponentData[componentData]
        CompIndex[components-index.json]
        CompChangelog[components-changelog.json]
        MetaData[metadata.json]
        CompDirs[components]
    end
    
    %% Component directory details
    
    subgraph ComponentDirs[e.g：alert]
        DocFiles[doc.md]
        ExampleFiles[examples.md]
    end

    CompDirs --> ComponentDirs
    
    %% Data extraction script
    Scripts[extract-docs.ts] --> ComponentData
```

## Data Flow

```mermaid
sequenceDiagram
    participant Client as Client
    participant Server as MCP Server
    participant Tools as Tool Modules
    participant Utils as Utility Functions
    participant Data as Component Data
    
    Client->>Server: Request component information
    Server->>Tools: Call appropriate tool
    Tools->>Utils: Use utility functions
    Utils->>Data: Read component data
    Data-->>Utils: Return data
    Utils-->>Tools: Processed data
    Tools-->>Server: Formatted response
    Server-->>Client: Return component information
```

## Component Data Structure

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

## Caching Mechanism

```mermaid
flowchart LR
    Request[Component Request] --> CacheCheck{Cache Check}
    CacheCheck -->|Exists| ReturnCache[Return Cached Data]
    CacheCheck -->|Not Exists| ReadFile[Read File]
    ReadFile --> ProcessData[Process Data]
    ProcessData --> UpdateCache[Update Cache]
    UpdateCache --> ReturnData[Return Data]
```

## ## Scheduled Documentation Extraction and Publishing Mechanism

```mermaid
flowchart TD
    A[Start] --> B[Trigger Conditions]
    B --> |Every Monday at 10 PM| C[Scheduled Trigger]
    B --> |Manual Trigger| D[Manual Trigger]
    
    C --> E[Setup Environment]
    D --> E
    E --> F[Clone Ant Design Repository]
    F --> G[Get Version Information]
    
    G --> G1[Get Ant Design Version]
    G --> G2[Get Extracted Data Version]
    
    G1 --> H[Check for Updates]
    G2 --> H
    
    H --> |Output Debug Info| I[Display Version Information]
    
    H --> J{Versions Match?}
    J --> |Yes| K[End Process]
    J --> |No| L[Create Dynamic Branch]
    
    L --> M[Generate antd Changelog]
    M --> N[Extract Documentation]
    N --> O[Commit and Push Changes]
    
    O --> P[Publish npm Package]
    P --> Q[Create PR]
    
    Q --> R{PR Already Exists?}
    R --> |Yes| S[Log Existing PR]
    R --> |No| T[Create New PR]
    
    S --> K
    T --> K
```
