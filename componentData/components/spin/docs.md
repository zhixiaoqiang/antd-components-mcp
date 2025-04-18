## 何时使用
页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| delay | 延迟显示加载效果的时间（防止闪烁） | number (毫秒) | - |
| fullscreen | 显示带有 `Spin` 组件的背景 | boolean | false | 5.11.0 |
| indicator | 加载指示符 | ReactNode | - |  |
| percent | 展示进度，当设置 `percent="auto"` 时会预估一个永远不会停止的进度 | number \| 'auto' | - | 5.18.0 |
| size | 组件大小，可选值为 `small` `default` `large` | string | `default` |  |
| spinning | 是否为加载中状态 | boolean | true |  |
| tip | 当作为包裹元素时，可以自定义描述文案 | ReactNode | - |
| wrapperClassName | 包装器的类属性 | string | - |
### 静态方法
- `Spin.setDefaultIndicator(indicator: ReactNode)`
  你可以自定义全局默认 Spin 的元素。
