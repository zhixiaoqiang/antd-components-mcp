## 何时使用
- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 | [全局配置](/components/config-provider-cn#component-config) |
| --- | --- | --- | --- | --- | --- |
| action | 自定义操作项 | ReactNode | - |  | × |
| ~~afterClose~~ | 关闭动画结束后触发的回调函数，请使用 `closable.afterClose` 替换 | () => void | - |  | × |
| banner | 是否用作顶部公告 | boolean | false |  | × |
| variant | 警告提示样式变体 | `outlined` \| `filled` | `outlined` | 6.4.0 | 6.4.0 |
| classNames | 自定义组件内部各语义化结构的类名。支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - |  | 6.0.0 |
| closable | 可关闭配置 | boolean \| [ClosableType](#closabletype) & React.AriaAttributes | `false` |  | ✔ |
| closeIcon | （仅支持全局配置）自定义关闭图标 | ReactNode | - | × | 6.3.0 |
| description | 警告提示的辅助性文字介绍 | ReactNode | - |  | × |
| errorIcon | （仅支持全局配置）自定义错误图标 | ReactNode | - | × | 6.2.0 |
| icon | 自定义图标，`showIcon` 为 true 时有效 | ReactNode | - |  | × |
| infoIcon | （仅支持全局配置）自定义信息图标 | ReactNode | - | × | 6.2.0 |
| ~~message~~ | 警告提示内容，请使用 `title` 替换 | ReactNode | - |  | × |
| ~~onClose~~ | 关闭时触发的回调函数，请使用 `closable.onClose` 替换 | (e: MouseEvent) => void | - |  | × |
| ~~closeIcon~~ | 自定义关闭图标，请使用 `closable.closeIcon` 替代 | ReactNode | - | - | × |
| ~~closeText~~ | 自定义关闭文案，请使用 `closable.closeIcon` 替代 | ReactNode | - | - | × |
| showIcon | 是否显示辅助图标 | boolean | false，`banner` 模式下默认值为 true |  | × |
| styles | 自定义组件内部各语义化结构的内联样式。支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  | 6.0.0 |
| successIcon | （仅支持全局配置）自定义成功图标 | ReactNode | - | × | 6.2.0 |
| title | 警告提示内容 | ReactNode | - |  | × |
| type | 指定警告提示的样式，有四种选择 `success`、`info`、`warning`、`error` | string | `info`，`banner` 模式下默认值为 `warning` |  | × |
| warningIcon | （仅支持全局配置）自定义警告图标 | ReactNode | - | × | 6.2.0 |
### ClosableType
| 参数       | 说明                         | 类型                    | 默认值 | 版本 |
| ---------- | ---------------------------- | ----------------------- | ------ | ---- |
| afterClose | 关闭动画结束后触发的回调函数 | function                | -      | -    |
| closeIcon  | 自定义关闭图标               | ReactNode               | -      | -    |
| onClose    | 关闭时触发的回调函数         | (e: MouseEvent) => void | -      | -    |
### Alert.ErrorBoundary
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 自定义错误内容，如果未指定会展示报错堆栈 | ReactNode | {{ error stack }} |  |
| ~~message~~ | 自定义错误标题，如果未指定会展示原生报错信息，请使用 `title` 替换 | ReactNode | {{ error }} |  |
| title | 自定义错误标题，如果未指定会展示原生报错信息 | ReactNode | {{ error }} |  |
