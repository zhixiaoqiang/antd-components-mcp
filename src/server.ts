#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import getComponentDocs from "./tools/get-component-docs";
import listComponentExamples from "./tools/list-component-examples";
import getComponentChangelog from "./tools/get-component-changelog";
import listComponents from "./tools/list-components";

export default function main() {
  // 创建 MCP 服务器
  const server = new McpServer(
    {
      name: "Ant Design Components MCP",
      version: process.env.VERSION || "1.0.0",
    },
    {
      capabilities: {
        tools: {},
        prompts: {},
      },
      instructions:
        "你是一个 Ant Design 组件库查询助手，包括可用的组件列表、组件的属性、用法、示例、更新日志等",
    }
  );

  getComponentDocs(server);
  listComponentExamples(server);
  getComponentChangelog(server);
  listComponents(server);

  // 启动服务器
  const transport = new StdioServerTransport();
  server.connect(transport);
}
