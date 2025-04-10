import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentDocumentation } from "../utils/components";

/** 获取组件文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-docs",
    "获取 Ant Design 特定组件的详细文档，不包含 API 及代码示例",
    { componentName: z.string() },
    async ({ componentName }) => {
      const documentation = await getComponentDocumentation(componentName);
      return {
        content: [
          {
            type: "text",
            text: documentation,
          },
        ],
      };
    },
  );
}

export default registryTool;