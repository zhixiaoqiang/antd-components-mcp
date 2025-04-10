import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentProps } from "../utils/components";

/** 获取组件 API 文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-props",
    `
获取 Ant Design 特定组件的 API 文档

适用场景：
1. 用户询问特定组件的属性时；`,
    { componentName: z.string() },
    async ({ componentName }) => {
      const propsSection = await getComponentProps(componentName);
      return {
        content: [
          {
            type: "text",
            text: `
${componentName} 组件的 api 文档：
${propsSection}
如有版本说明需要提醒用户需要使用某个版本及以上的版本`,
          },
        ],
      };
    }
  );
};

export default registryTool;