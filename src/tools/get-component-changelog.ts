import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentsChangelog } from "../utils/components";

/** 获取 Ant Design 特定组件更新记录 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-changelog",
    "列出 Ant Design 特定组件的更新日志",
    { componentName: z.string() },
    async ({ componentName }) => {
      const componentsChangelog = await getComponentsChangelog(componentName);
  
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(componentsChangelog[componentName]),
          },
        ],
      };
    },
  );
}

export default registryTool;
