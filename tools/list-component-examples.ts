import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import {  listComponentExamples } from "../utils/components";


// Tool: list-component-examples
export const registryTool = (server: McpServer) => {
  server.tool(
    "list-component-examples",
    "Lists all examples available for a specific component with descriptions",
    { componentName: z.string() },
    async ({ componentName }) => {
      const examplesMarkdown = await listComponentExamples(componentName);
  
      return {
        content: [
          {
            type: "text",
            text: examplesMarkdown,
          },
        ],
      };
    },
  );
}

