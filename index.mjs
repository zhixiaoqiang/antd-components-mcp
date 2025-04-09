#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Console } from "node:console";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { z } from "zod";
import { EXTRACT_COMPONENTS_DATA_DIR, EXTRACT_COMPONENTS_LIST_PATH, EXTRACT_DATA_DIR, ROOT_DIR } from "./constants/path";

// Get the directory of the current script
globalThis.console = new Console(process.stderr);


// Check if the data directory exists
if (!existsSync(EXTRACT_DATA_DIR) || !existsSync(EXTRACT_COMPONENTS_DATA_DIR)) {
  console.error(`Error: Data directory not found at ${EXTRACT_DATA_DIR}`);
  console.error("Please run the extraction script first:");
  console.error("  node scripts/extract-docs.mjs [path/to/ant-design]");
  process.exit(1);
}

// Check if the components index exists
if (!existsSync(EXTRACT_COMPONENTS_LIST_PATH)) {
  console.error(`Error: Components index not found at ${EXTRACT_COMPONENTS_LIST_PATH}`);
  console.error("Please run the extraction script first.");
  process.exit(1);
}

// Initialize the MCP server
const server = new McpServer({
  name: "Ant Design Components",
  version: "1.0.0",
  description: "Provides documentation and examples for Ant Design components",
});

// ===============================================
// MCP Tools
// ===============================================

// Tool: get-component-docs
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
  },
);

// Tool: list-component-examples
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

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
