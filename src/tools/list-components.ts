import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { loadComponentsList } from "../utils/components";

/** 列出所有可用的 Ant Design 组件 */
const registryTool = (server: McpServer) => {
  server.tool(
    "list-components", `
当用户请求一个新的用户界面（UI）使用 Ant Design 组件时使用此工具。
此工具仅返回可用的组件列表。
调用此工具后，你必须编辑或添加文件，以便将代码片段集成到代码库中。

需要前置询问用户所使用的 antd 版本
`, async () => {
    const components = await loadComponentsList();
    return {
      content: [
        {
          type: "text",
          text: `
你被赋予了一项在代码库中集成一个现有的 React 组件的任务。
以下是可用的组件：${JSON.stringify(components)}`,
        },
      ],
    };
  });
}

export default registryTool;