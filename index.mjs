#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { Console } from "node:console";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

// Get the directory of the current script
const __dirname = dirname(fileURLToPath(import.meta.url));
globalThis.console = new Console(process.stderr);

// Path to the pre-extracted data
const dataDir = resolve(__dirname, "data");
const componentsDir = join(dataDir, "components");

// Check if the data directory exists
if (!existsSync(dataDir) || !existsSync(componentsDir)) {
  console.error(`Error: Data directory not found at ${dataDir}`);
  console.error("Please run the extraction script first:");
  console.error("  node scripts/extract-docs.mjs [path/to/ant-design]");
  process.exit(1);
}

// Check if the components index exists
const componentsIndexPath = join(dataDir, "components-index.json");
if (!existsSync(componentsIndexPath)) {
  console.error(`Error: Components index not found at ${componentsIndexPath}`);
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
// Utility functions
// ===============================================

// Load components index from the extracted data
async function loadComponentsIndex() {
  try {
    const indexData = await readFile(componentsIndexPath, "utf-8");
    return JSON.parse(indexData);
  } catch (error) {
    console.error(`Error loading components index: ${error.message}`);
    return [];
  }
}

// Find a component by name (case-insensitive)
async function findComponentByName(componentName) {
  const components = await loadComponentsIndex();
  return components.find(
    (c) =>
      c.name.toLowerCase() === componentName.toLowerCase() ||
      c.dirName.toLowerCase() === componentName.toLowerCase(),
  );
}

// Find components matching a pattern
async function findComponentsByPattern(pattern) {
  const components = await loadComponentsIndex();
  const regexPattern = new RegExp(pattern, "i");

  return components.filter((c) => regexPattern.test(c.name) || regexPattern.test(c.dirName));
}

// ===============================================
// Data fetching functions
// ===============================================

// Get component markdown documentation
const getComponentDocumentation = async (componentName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `Documentation for component "${componentName}" not found`;
  }

  const docPath = join(componentsDir, component.dirName, "docs.md");

  try {
    if (existsSync(docPath)) {
      return await readFile(docPath, "utf-8");
    } else {
      return `Documentation for ${component.name} not found`;
    }
  } catch (error) {
    console.error(`Error reading documentation for ${component.name}: ${error.message}`);
    return `Error reading documentation: ${error.message}`;
  }
};

// Get component API documentation
const getComponentProps = async (componentName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `API documentation for component "${componentName}" not found`;
  }

  try {
    const apiPath = join(componentsDir, component.dirName, "api.md");

    if (existsSync(apiPath)) {
      return await readFile(apiPath, "utf-8");
    }
    return `API documentation for ${component.name} not found`;
  } catch (error) {
    console.error(`Error reading API for ${component.name}: ${error.message}`);
    return `Error reading API documentation: ${error.message}`;
  }
};

// List component examples
const listComponentExamples = async (componentName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return "Component not found";
  }

  // First, check if we have examples.md with descriptions
  const examplesMdPath = join(componentsDir, component.dirName, "examples.md");

  if (!existsSync(examplesMdPath)) {
    return `No examples found for ${component.name}`;
  }
  try {
    return await readFile(examplesMdPath, "utf-8");
  } catch (error) {
    console.error(`Error reading examples markdown for ${component.name}: ${error.message}`);
    return `No examples found for ${component.name}`;
  }
};

// Get specific component example
const getComponentExample = async (componentName, exampleName) => {
  const component = await findComponentByName(componentName);

  if (!component) {
    return `Component "${componentName}" not found`;
  }

  const examplesDir = join(componentsDir, component.dirName, "examples");

  if (!existsSync(examplesDir)) {
    return `No examples found for ${component.name}`;
  }

  // Check for both TSX and JSX extensions
  const tsxPath = join(examplesDir, `${exampleName}.tsx`);
  const jsxPath = join(examplesDir, `${exampleName}.jsx`);

  const filePath = existsSync(tsxPath) ? tsxPath : existsSync(jsxPath) ? jsxPath : null;

  if (!filePath) {
    return `Example "${exampleName}" not found for ${component.name}`;
  }

  try {
    const exampleCode = await readFile(filePath, "utf-8");

    // Try to find description for this example
    let description = "";
    const examplesMdPath = join(componentsDir, component.dirName, "examples.md");

    if (existsSync(examplesMdPath)) {
      const examplesMd = await readFile(examplesMdPath, "utf-8");
      const match = examplesMd.match(new RegExp(`- \\*\\*${exampleName}\\*\\*: (.+)$`, "m"));
      if (match && match[1]) {
        description = match[1].trim();
      }
    }

    // Add a header with description if available
    if (description) {
      return `// Example: ${exampleName} - ${description}\n\n${exampleCode}`;
    }

    return exampleCode;
  } catch (error) {
    console.error(`Error reading example "${exampleName}" for ${component.name}: ${error.message}`);
    return `Error reading example: ${error.message}`;
  }
};

// ===============================================
// MCP Tools
// ===============================================

// Tool: list-components
server.tool("list-components", "Lists all available Ant Design components", async () => {
  const components = await loadComponentsIndex();
  return {
    content: [
      {
        type: "text",
        text: components.map((c) => c.name).join(", "),
      },
    ],
  };
});

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

// Tool: get-component-example
server.tool(
  "get-component-example",
  "Gets the code for a specific component example",
  {
    componentName: z.string(),
    exampleName: z.string(),
  },
  async ({ componentName, exampleName }) => {
    const exampleCode = await getComponentExample(componentName, exampleName);
    return {
      content: [
        {
          type: "text",
          text: exampleCode,
        },
      ],
    };
  },
);

// Tool: search-components
server.tool(
  "search-components",
  "Search for components by name pattern",
  { pattern: z.string() },
  async ({ pattern }) => {
    const matchingComponents = await findComponentsByPattern(pattern);

    return {
      content: [
        {
          type: "text",
          text: matchingComponents.length
            ? `Matching components: ${matchingComponents.map((c) => c.name).join(", ")}`
            : `No components found matching '${pattern}'`,
        },
      ],
    };
  },
);

// Start the server
const transport = new StdioServerTransport();
await server.connect(transport);
