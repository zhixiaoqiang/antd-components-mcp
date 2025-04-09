import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { loadComponentsList } from "../utils/components";

// Tool: list-component-examples
export const registryTool = (server: McpServer) => {
  server.tool("list-components", "Lists all available Ant Design components", async () => {
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

