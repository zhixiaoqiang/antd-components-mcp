import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import systemDescription from "./system-description";
import systemPageGenerate from './system-page-generate'

export default function registryPrompts(server: McpServer) {
  [systemDescription, systemPageGenerate].forEach((registryFn) => {
    registryFn(server)
  })
}


