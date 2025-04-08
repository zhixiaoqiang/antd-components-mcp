#!/usr/bin/env node
/**
 * This script tests the MCP Ant Design Components server
 * using the official MCP SDK client. It runs through all the available tools
 * and displays sample output for each.
 *
 * Usage:
 *   node scripts/test-server.mjs
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

// Set up the MCP client to communicate with our server
const transport = new StdioClientTransport({
  command: "node",
  args: [resolve(rootDir, "index.mjs")],
});

const client = new Client({
  name: "antd-components-client",
  version: "1.0.0",
});

// Connect to the server
console.log("Connecting to MCP server...");
await client.connect(transport);
console.log("Connected to MCP server successfully!");

// Run example tool calls
try {
  // List components
  console.log("\n--- LISTING COMPONENTS ---");
  const components = await client.callTool({
    name: "list-components",
    arguments: {},
  });
  console.log(components.content[0].text);

  // Get component documentation
  console.log("\n--- GET COMPONENT DOCUMENTATION ---");
  const docs = await client.callTool({
    name: "get-component-docs",
    arguments: {
      componentName: "Button", // Using PascalCase
    },
  });
  console.log(docs.content[0].text);

  // Get component props
  console.log("\n--- GET COMPONENT PROPS ---");
  const props = await client.callTool({
    name: "get-component-props",
    arguments: {
      componentName: "Button", // Using PascalCase
    },
  });
  console.log(props.content[0].text);

  // List component examples
  console.log("\n--- LIST COMPONENT EXAMPLES ---");
  const examples = await client.callTool({
    name: "list-component-examples",
    arguments: {
      componentName: "Button", // Using PascalCase
    },
  });
  console.log(examples.content[0].text);

  // Get component example
  console.log("\n--- GET COMPONENT EXAMPLE ---");
  const example = await client.callTool({
    name: "get-component-example",
    arguments: {
      componentName: "Button", // Using PascalCase
      exampleName: "basic",
    },
  });
  console.log(example.content[0].text);

  // Search components
  console.log("\n--- SEARCH COMPONENTS ---");
  const searchResults = await client.callTool({
    name: "search-components",
    arguments: {
      pattern: "Button|Input", // Using PascalCase
    },
  });
  console.log(searchResults.content[0].text);
} catch (error) {
  console.error("Error during testing:", error);
} finally {
  // Close the connection
  await client.close();
  console.log("\nTests completed, disconnected from server.");
}
