import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentProps } from "../utils/components";

// Tool: list-component-examples
export const registryTool = (server: McpServer) => {
  // Tool: get-component-props
  server.tool(
    "get-component-props",
    "Gets the props and API documentation for a specific component",
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
