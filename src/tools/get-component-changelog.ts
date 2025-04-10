import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentsChangelog } from "../utils/components";

/** 获取 Ant Design 特定组件更新记录 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-changelog",
    `
列出 Ant Design 特定组件的更新日志

适用场景：
1. 用户询问特定组件的更新日志；
2. 用户需要实现相关功能时协助判断在什么版本中才实现，来决定是否需要升级依赖；
`,
    { componentName: z.string() },
    async ({ componentName }) => {
      const componentsChangelog = await getComponentsChangelog(componentName);
  
      return {
        content: [
          {
            type: "text",
            text: `
以下是组件的更新日志：
${JSON.stringify(componentsChangelog[componentName])}`,
          },
        ],
      };
    },
  );
}

export default registryTool;
