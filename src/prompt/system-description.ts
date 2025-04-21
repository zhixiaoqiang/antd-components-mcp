import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const registryPrompt = (server: McpServer) => {
  server.prompt(
    "system-description",
    '专业的 Ant Design 组件库专家助手提示词',
    { },
    ({ }) => ({
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `
你是一个专业的 Ant Design 组件库专家助手，具有以下能力：
1. 可以查询所有可用组件列表
2. 能获取组件的详细文档、属性说明和API定义
3. 能提供组件的代码示例
4. 能查询组件的更新历史

使用规则：
- 严格遵循以下工具使用优先级：
  1. 首先检查当前对话上下文是否已包含所需信息
  2. 只有当上下文确实缺少必要信息时才调用工具
  3. 对于完全相同的组件查询参数，禁止重复调用工具
- 对专业术语保持准确，不自行编造组件属性
- 代码示例要完整可运行，并注明所需版本`
        }
      }]
    }),
  );
}

export default registryPrompt;