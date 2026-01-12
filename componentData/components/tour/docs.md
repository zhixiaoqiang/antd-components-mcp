## 何时使用
常用于引导用户了解产品功能。
## API
### Tour
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 是否显示箭头，包含是否指向元素中心的配置 | `boolean` \| `{ pointAtCenter: boolean}` | `true` |  |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), string> | - |  |
| closeIcon | 自定义关闭按钮 | `React.ReactNode` | `true` | 5.9.0 |
| disabledInteraction | 禁用高亮区域交互 | `boolean` | `false` | 5.13.0 |
| gap | 控制高亮区域的圆角边框和显示间距 | `{ offset?: number \| [number, number]; radius?: number }` | `{ offset?: 6 ; radius?: 2 }` | 5.0.0 (数组类型的 `offset`: 5.9.0 ) |
| keyboard | 是否启用键盘快捷行为 | boolean | true | 6.2.0 |
| placement | 引导卡片相对于目标元素的位置 | `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | `bottom` |  |
| onClose | 关闭引导时的回调函数 | `Function` | - |  |
| onFinish | 引导完成时的回调 | `Function` | - |  |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色 | `boolean \| { style?: React.CSSProperties; color?: string; }` | `true` |  |
| type | 类型，影响底色与文字颜色 | `default` \| `primary` | `default` |  |
| open | 打开引导 | `boolean` | - |  |
| onChange | 步骤改变时的回调，current 为当前的步骤 | `(current: number) => void` | - |  |
| current | 当前处于哪一步 | `number` | - |  |
| scrollIntoViewOptions | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数 | `boolean \| ScrollIntoViewOptions` | `true` | 5.2.0 |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| indicatorsRender | 自定义指示器 | `(current: number, total: number) => ReactNode` | - | 5.2.0 |
| actionsRender | 自定义操作按钮 | `(originNode: ReactNode, info: { current: number, total: number }) => ReactNode` | - | 5.25.0 |
| zIndex | Tour 的层级 | number | 1001 | 5.3.0 |
| getPopupContainer | 设置 Tour 浮层的渲染节点，默认是 body | `(node: HTMLElement) => HTMLElement` | body | 5.12.0 |
### TourStep 引导步骤卡片
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| target | 获取引导卡片指向的元素，为空时居中于屏幕 | `() => HTMLElement` \| `HTMLElement` | - |  |
| arrow | 是否显示箭头，包含是否指向元素中心的配置 | `boolean` \| `{ pointAtCenter: boolean}` | `true` |  |
| closeIcon | 自定义关闭按钮 | `React.ReactNode` | `true` | 5.9.0 |
| cover | 展示的图片或者视频 | `ReactNode` | - |  |
| title | 标题 | `ReactNode` | - |  |
| description | 主要描述部分 | `ReactNode` | - |  |
| placement | 引导卡片相对于目标元素的位置 | `center` `left` `leftTop` `leftBottom` `right` `rightTop` `rightBottom` `top` `topLeft` `topRight` `bottom` `bottomLeft` `bottomRight` | `bottom` |  |
| onClose | 关闭引导时的回调函数 | `Function` | - |  |
| mask | 是否启用蒙层，也可传入配置改变蒙层样式和填充色，默认跟随 Tour 的 `mask` 属性 | `boolean \| { style?: React.CSSProperties; color?: string; }` | `true` |  |
| type | 类型，影响底色与文字颜色 | `default` \| `primary` | `default` |  |
| nextButtonProps | 下一步按钮的属性 | `{ children: ReactNode; onClick: Function }` | - |  |
| prevButtonProps | 上一步按钮的属性 | `{ children: ReactNode; onClick: Function }` | - |  |
| scrollIntoViewOptions | 是否支持当前元素滚动到视窗内，也可传入配置指定滚动视窗的相关参数，默认跟随 Tour 的 `scrollIntoViewOptions` 属性 | `boolean \| ScrollIntoViewOptions` | `true` | 5.2.0 |
