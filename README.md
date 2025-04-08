# Ant Design Components Model Context Protocol Server

A Model Context Protocol (MCP) server that exposes Ant Design component documentation to Large Language Models (LLMs) like Claude. This server allows an LLM to explore and understand Ant Design components through a set of specialized tools.

## Features

- Easy to use - no need to clone the entire Ant Design repository
- Pre-extracted component documentation for faster startup
- List all available Ant Design components
- Get detailed component documentation including descriptions and usage
- View component props and API definitions
- Browse code examples for specific components
- Search for components by name or functionality

## Initial Setup

Before using the MCP server for the first time, you need to extract the documentation from the Ant Design repository:

```bash
# First, clone the Ant Design repository (can be temporary)
git clone https://github.com/ant-design/ant-design.git

# Extract documentation
cd mcp-antd-components
npm run extract   # Uses the default ./ant-design path
# OR
node scripts/extract-docs.mjs /path/to/ant-design  # For a custom path

# After extraction is complete, the Ant Design repo can be deleted if desired
```

This will create a `data` directory with all the extracted component documentation, which the MCP server will use.

### Testing the Server

To verify that everything is working correctly, you can run the test script:

```bash
npm test
# OR
node scripts/test-server.mjs
```

This will run the MCP server and test all available tools with sample queries.

## Usage

### Command Line

Run the MCP server:

```bash
# Run server with pre-extracted data
npm start
# OR
npx -y mcp-antd-components
```

### Claude Desktop Integration

To use this MCP server with Claude Desktop, edit your `claude_desktop_config.json` configuration file:

```json
{
  "mcpServers": {
    "Ant Design Components": {
      "command": "npx",
      "args": ["-y", "mcp-antd-components"]
    }
  }
}
```

Location of the configuration file:

- macOS/Linux: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `$env:AppData\Claude\claude_desktop_config.json`

### Claude Code Integration

To use this MCP server with Claude Code CLI, follow these steps:

1. **Add the Ant Design Components MCP server to Claude Code**

   ```bash
   # Basic syntax
   claude mcp add antd-components npx -y mcp-antd-components
   ```

2. **Verify the MCP server is registered**

   ```bash
   # List all configured servers
   claude mcp list

   # Get details for your Ant Design components server
   claude mcp get antd-components
   ```

3. **Remove the server if needed**

   ```bash
   claude mcp remove antd-components
   ```

4. **Use the tool in Claude Code**

   Once configured, you can invoke the tool in your Claude Code session by asking questions about Ant Design components.

**Tips:**

- Use the `-s` or `--scope` flag with `project` (default) or `global` to specify where the configuration is stored

## MCP Tools

The server provides the following tools for LLMs to interact with Ant Design component documentation:

- `list-components`: Lists all available Ant Design components in PascalCase format (e.g., Button, DatePicker)
- `get-component-props`: Gets the props and API documentation for a specific component (use PascalCase names like "Button")
- `get-component-docs`: Gets detailed documentation for a specific component (use PascalCase names like "DatePicker")
- `list-component-examples`: Lists all examples available for a specific component (use PascalCase names like "Table")
- `get-component-example`: Gets the code for a specific component example (component name in PascalCase)
- `search-components`: Search for components by name pattern (works with PascalCase patterns)

## Examples

Example queries to try:

```
What components are available in Ant Design?
Show me the documentation for the Button component.
What props does the Table component accept?
Show me code examples for the Modal component.
Get the example "basic" for the Form component.
Find components related to Input or Form elements.
```

Note: Component names are provided in PascalCase (e.g., Button, DatePicker, Table) to match React component naming conventions, even though the internal directory structure uses kebab-case (e.g., button, date-picker, table).

## How It Works

The `scripts/extract-docs.mjs` script extracts documentation from the Ant Design repository and saves it to the `data` directory. This includes:

- Component documentation (markdown)
- API/props documentation
- Example code
- Common props documentation

This approach has several advantages:
1. Users don't need to clone the entire Ant Design repository
2. Faster startup time for the MCP server
3. Smaller package size
4. Easier to update when new versions are released

To update the documentation for a new version of Ant Design, simply run the extraction script again with the updated repository.