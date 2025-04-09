import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { join } from "path";
import { z } from "zod";
import { EXTRACT_COMPONENTS_DATA_DIR } from "../constants/path";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { findComponentByName } from "../utils/components";

// Tool: list-component-examples
export const registryTool = (server: McpServer) => {
  server.tool(
    "list-component-examples",
    "Lists all examples available for a specific component with descriptions",
    { componentName: z.string() },
    async ({ componentName }) => {
      const examplesMarkdown = await getComponentChangelog(componentName);
  
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

