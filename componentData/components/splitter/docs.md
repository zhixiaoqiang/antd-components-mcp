## 何时使用
- 可以水平或垂直地分隔区域。
- 当需要自由拖拽调整各区域大小。
- 当需要指定区域的最大最小宽高时。
## API
> Splitter 组件需要通过子元素计算面板大小，因而其子元素仅支持 `Splitter.Panel`。
### Splitter
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), string> | - |  |
| collapsibleIcon | 折叠图标 | `{start?: ReactNode; end?: ReactNode}` | - | 6.0.0 |
| draggerIcon | 拖拽图标 | `ReactNode` | - | 6.0.0 |
| ~~layout~~ | 布局方向 | `horizontal` \| `vertical` | `horizontal` | - |
| lazy | 延迟渲染模式 | `boolean` | `false` | 5.23.0 |
| onCollapse | 展开-收起时回调 | `(collapsed: boolean[], sizes: number[]) => void` | - | 5.28.0 |
| orientation | 布局方向 | `horizontal` \| `vertical` | `horizontal` | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| vertical | 排列方向，与 `orientation` 同时存在，以 `orientation` 优先 | boolean | `false` |  |
| onDraggerDoubleClick | 双击拖拽条回调 | `(index: number) => void` | - | 6.3.0 |
| onResize | 面板大小变化回调 | `(sizes: number[]) => void` | - | - |
| onResizeEnd | 拖拽结束回调 | `(sizes: number[]) => void` | - | - |
| onResizeStart | 开始拖拽之前回调 | `(sizes: number[]) => void` | - | - |
### Panel
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| collapsible | 快速折叠 | `boolean \| { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean \| 'auto' }` | `false` | showCollapsibleIcon: 5.27.0 |
| defaultSize | 初始面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
| max | 最大阈值，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
| min | 最小阈值，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
| resizable | 是否开启拖拽伸缩 | `boolean` | `true` | - |
| size | 受控面板大小，支持数字 px 或者文字 '百分比%' 类型 | `number \| string` | - | - |
