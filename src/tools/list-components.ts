import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { loadComponentsList } from "../utils/components";

/** 列出所有可用的 Ant Design 组件 */
const registryTool = (server: McpServer) => {
  server.tool("list-components", "列出所有可用的Ant Design组件", async () => {
    const components = await loadComponentsList();
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(components),
        },
      ],
    };
  });
}

export default registryTool;