import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { loadComponentsList } from "../utils/components";

/** 列出所有可用的 Ant Design 组件 */
const registryTool = (server: McpServer) => {
  server.tool(
    "list-components", `当用户请求一个新的用户界面（UI）使用 Ant Design 组件时使用此工具。
此工具仅返回可用的组件列表。
调用此工具后，你必须编辑或添加文件，以便将代码片段集成到代码库中`, async () => {
    const components = await loadComponentsList();
    return {
      content: [
        {
          type: "text",
          text: `以下是可用的组件：${JSON.stringify(components.map(({ dirName, ...restProps }) => restProps))}`,
        },
      ],
    };
  });
}

export default registryTool;