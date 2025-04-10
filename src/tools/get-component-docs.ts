import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentDocumentation } from "../utils/components";

/** 获取组件文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-docs",
    `
获取 Ant Design 特定组件的详细文档

适用场景：
1. 用户询问如何使用特定组件；
2. 用户需要查看该组件的属性列表；
3. 用户想要获取该组件的示例代码；
4. 用户需要深入了解某个组件的功能和局限性。

该软件包应支持：
- antd 5.0.0 及以上版本；

如果不支持，请将其作为工作区依赖项添加到 package.json 文件中。`,
    { componentName: z.string() },
    async ({ componentName }) => {
      const documentation = await getComponentDocumentation(componentName);
      return {
        content: [
          {
            type: "text",
            text: `
${componentName} 组件的文档：
${documentation}
如有版本说明需要提醒用户需要使用某个版本及以上的版本
`,
          },
        ],
      };
    },
  );
}

export default registryTool;