## 何时使用
当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 自定义组件内部各语义化结构的类名。支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - |  |
| extra | 操作区 | ReactNode | - |  |
| icon | 自定义 icon | ReactNode | - |  |
| status | 结果的状态，决定图标和颜色 | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| styles | 自定义组件内部各语义化结构的内联样式。支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| subTitle | subTitle 文字 | ReactNode | - |  |
| title | title 文字 | ReactNode | - |  |
