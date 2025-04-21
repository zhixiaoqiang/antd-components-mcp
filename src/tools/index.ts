import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import getComponentDocs from "./get-component-docs";
import listComponentExamples from "./list-component-examples";
import getComponentChangelog from "./get-component-changelog";
import listComponents from "./list-components";

export default function registryTools(server: McpServer) {
  [getComponentDocs, listComponentExamples, getComponentChangelog, listComponents].forEach((registryFn) => {
    registryFn(server)
  })
}
