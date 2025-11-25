## 何时使用
当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。
## API
### Steps
整体步骤条。
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), string> | - |  |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | number | 0 |  |
| ~~direction~~ | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | string | `horizontal` |  |
| iconRender | 自定义渲染图标，请优先使用 `items.icon` | (oriNode, info: { index, active, item }) => ReactNode | - |  |
| initial | 起始序号，从 0 开始记数 | number | 0 |  |
| ~~labelPlacement~~ | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | string | `horizontal` |  |
| orientation | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | string | `horizontal` |  |
| percent | 当前 `process` 步骤显示的进度条进度（只对基本类型的 Steps 生效） | number | - | 4.5.0 |
| progressDot | 点状步骤条，可以设置为一个 function，`titlePlacement` 将强制为 `vertical` | boolean \| (iconDot, { index, status, title, content }) => ReactNode | false |  |
| responsive | 当屏幕宽度小于 `532px` 时自动变为垂直模式 | boolean | true |  |
| size | 指定大小，目前支持普通（`default`）和迷你（`small`） | string | `default` |  |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | `process` |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| titlePlacement | 指定标签放置位置，默认水平放图标右侧，可选 `vertical` 放图标下方 | string | `horizontal` |  |
| type | 步骤条类型，可选 `default` `dot` `inline` `navigation` `panel` | string | `default` |  |
| variant | 设置样式变体 | `filled` \| `outlined` | `filled` |  |
| onChange | 点击切换步骤时触发 | (current) => void | - |  |
| items | 配置选项卡内容 | [StepItem](#stepitem) | [] | 4.24.0 |
### StepItem
步骤条内的每一个步骤。
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| content | 步骤的详情描述，可选 | ReactNode | - |  |
| ~~description~~ | 步骤的详情描述，可选 | ReactNode | - |  |
| disabled | 禁用点击 | boolean | false |  |
| icon | 步骤图标的类型，可选 | ReactNode | - |  |
| status | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | string | `wait` |  |
| subTitle | 子标题 | ReactNode | - |  |
| title | 标题 | ReactNode | - |  |
