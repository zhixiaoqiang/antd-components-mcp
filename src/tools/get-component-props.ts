import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentProps } from "../utils/components";

/** 获取组件 API 文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-props",
    "获取 Ant Design 特定组件的 API 文档",
    { componentName: z.string() },
    async ({ componentName }) => {
      const propsSection = await getComponentProps(componentName);
      return {
        content: [
          {
            type: "text",
            text: propsSection,
          },
        ],
      };
    }
  );
};

export default registryTool;