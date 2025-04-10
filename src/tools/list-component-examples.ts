import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {  listComponentExamples } from "../utils/components";


/** 获取 Ant Design 特定组件示例 */
const registryTool = (server: McpServer) => {
  server.tool(
    "list-component-examples",
    "获取 Ant Design 特定组件的代码示例",
    { componentName: z.string() },
    async ({ componentName }) => {
      const componentExamples = await listComponentExamples(componentName);
  
      return {
        content: [
          {
            type: "text",
            text: componentExamples,
          },
        ],
      };
    },
  );
}

export default registryTool;
