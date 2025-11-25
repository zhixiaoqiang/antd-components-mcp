## 何时使用
- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。
## API
### Timeline
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), string> | - |  |
| items | 选项配置 | [Items](#Items)[] | - |  |
| mode | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `start` \| `alternate` \| `end` | `start` |  |
| orientation | 设置时间轴的方向 | `vertical` \| `horizontal` | `vertical` |  |
| ~~pending~~ | 指定最后一个幽灵节点是否存在或内容，请使用 `item.loading` 代替 | ReactNode | false |  |
| ~~pendingDot~~ | 当最后一个幽灵节点存在時，指定其时间图点，请使用 `item.icon` 代替 | ReactNode | &lt;LoadingOutlined /&gt; |  |
| reverse | 节点排序 | boolean | false |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| titleSpan | 设置标题占比空间，为到 dot 中心点距离 <InlinePopover previewURL="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*1NJISa7bpqgAAAAAR5AAAAgAerJ8AQ/original"></InlinePopover> | number \| string | 12 |  |
| variant | 设置样式变体 | `filled` \| `outlined` | `outlined` |  |
### Items
时间轴的每一个节点。
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 指定圆圈颜色 `blue`、`red`、`green`、`gray`，或自定义的色值 | string | `blue` |
| content | 设置内容 | ReactNode | - |
| ~~children~~ | 设置内容，请使用 `content` 替换 | ReactNode | - |
| ~~dot~~ | 自定义时间轴点，请使用 `icon` 替换 | ReactNode | - |
| icon | 自定义节点图标 | ReactNode | - |
| ~~label~~ | 设置标签，请使用 `title` 替换 | ReactNode | - |
| loading | 设置加载状态 | boolean | false |
| placement | 自定义节点位置 | `start` \| `end` | - |
| ~~position~~ | 自定义节点位置，请使用 `placement` 替换 | `start` \| `end` | - |
| title | 设置标题 | ReactNode | - |
