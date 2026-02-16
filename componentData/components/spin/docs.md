## 何时使用
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - |  |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |  |
| description | 可以自定义描述文案 | ReactNode | - | 6.3.0 |
| fullscreen | 显示带有 `Spin` 组件的背景 | boolean | false | 5.11.0 |
| indicator | 加载指示符 | ReactNode | - |  |
| percent | 展示进度，当设置 `percent="auto"` 时会预估一个永远不会停止的进度 | number \| 'auto' | - | 5.18.0 |
| size | 组件大小，可选值为 `small` `default` `large` | string | `default` |  |
| spinning | 是否为加载中状态 | boolean | true |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| ~~tip~~ | 当作为包裹元素时，可以自定义描述文案。已废弃，请使用 `description` | ReactNode | - |  |
| ~~wrapperClassName~~ | 包装器的类属性。已废弃，请使用 `classNames.root` | string | - |  |
### 静态方法
- `Spin.setDefaultIndicator(indicator: ReactNode)`
  你可以自定义全局默认 Spin 的元素。
