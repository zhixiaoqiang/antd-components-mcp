打造一个 antd 组件库 MCP 服务器，它能够：
- 功能：
  - 询问项目 antd 版本，为后续功能使用提供更多说明：例如需要升级版本
  - 列出组件库的组件
    - 组件名称
    - 可用的版本
    - 简单描述
    - 使用文档链接
    - ：可以通过自然语言来确定应该使用的组件
  - 列出对应组件代码例子
    - 例子名称
    - 例子描述
    - 例子代码
  - 查看对应组件更新日志
  - 查看组件完整文档
  - 查看组件支持的属性
    - API

要求：
- 读取本地的组件文档信息
  - 编写解析 antd 文档的脚本，生成如组件列表、组件代码例子、组件更新日志等信息
- 编写测试服务的代码
- 支持 cache 避免重复的文件读取
<!-- - 数据需要提取存储到数据库 -->
<!-- 
相关资料：
- https://juejin.cn/post/7439660326700072986
- https://juejin.cn/post/7409191765708947465#heading-12
- https://www.zhihu.com/question/304174916/answer/825079036?share_code=1ikgytlCI2pkA&utm_psn=1892940782559802442
- https://github1s.com/Tecvan-fe/vercel-ai-demo/blob/main/packages/mdc-mcp/src/services/component-service.ts -->