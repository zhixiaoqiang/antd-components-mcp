import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentDocumentation } from "../utils/components";

// Tool: list-component-examples
export const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-docs",
    "Gets detailed documentation for a specific component",
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

