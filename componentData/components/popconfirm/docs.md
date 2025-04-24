## 何时使用
目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。
和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| cancelText | 取消按钮文字 | string | `取消` |  |
| disabled | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean | false |  |
| icon | 自定义弹出气泡 Icon 图标 | ReactNode | &lt;ExclamationCircle /> |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | string | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| showCancel | 是否显示取消按钮 | boolean | true | 4.18.0 |
| title | 确认框标题 | ReactNode \| () => ReactNode | - |  |
| description | 确认内容的详细描述 | ReactNode \| () => ReactNode | - | 5.1.0 |
| onCancel | 点击取消的回调 | function(e) | - |  |
| onConfirm | 点击确认的回调 | function(e) | - |  |
| onPopupClick | 弹出气泡点击事件 | function(e) | - | 5.5.0 |
<!-- 共同的 API -->
<Antd component="Alert" message="以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。" type="info" banner="true"></Antd>
<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 该值将合并到 placement 的配置中，设置参考 [dom-align](https://github.com/yiminghe/dom-align) | object | - |  |
| arrow | 修改箭头的显示状态以及修改箭头是否指向目标元素中心 | boolean \| { pointAtCenter: boolean } | true | 5.2.0 |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | true |  |
| color | 背景颜色 | string | - | 4.3.0 |
| defaultOpen | 默认是否显隐 | boolean | false | 4.23.0 |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip | boolean | false |  |
| fresh | 默认情况下，Tooltip 在关闭时会缓存内容。设置该属性后会始终保持更新 | boolean | false | 5.10.0 |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |  |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |  |
| ~~overlayClassName~~ | 卡片类名, 请使用 `classNames={{ root: '' }}` 替换 | string | - |  |
| ~~overlayStyle~~ | 卡片样式, 请使用 `styles={{ root: {} }}` 替换| React.CSSProperties | - |  |
| ~~overlayInnerStyle~~ | 卡片内容区域的样式对象, 请使用 `styles={{ body: {} }}` 替换 | React.CSSProperties | - |  |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| trigger | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为 | string \| string\[] | `hover` |  |
| open | 用于手动控制浮层显隐，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | false | 4.23.0 |
| zIndex | 设置 Tooltip 的 `z-index` | number | - |  |
| onOpenChange | 显示隐藏的回调 | (open: boolean) => void | - | 4.23.0 |
## FAQ
<Antd component="Alert" message="以下常见问题均适用于 Tooltip、Popconfirm、Popover 组件" type="warning" banner="true"></Antd>
### 为何在严格模式中有时候会出现 `findDOMNode is deprecated` 这个警告？
这是由于 `rc-trigger` 的实现方式导致的，`rc-trigger` 强制要求 children 能够接受 ref，否则就会 fallback 到 findDOMNode，所以 children 需要是原生 html 标签，如果不是，则需要使用 `React.forwardRef` 把 `ref` 透传到原生 html 标签。
- `findDOMNode is deprecated` 重现：<https://codesandbox.io/p/sandbox/finddomnode-c5hy96>
- 使用 `forwardRef` 消除警告：<https://codesandbox.io/p/sandbox/no-finddomnode-warning-forked-gdxczs>
### 为什么自定义子组件无法正常工作？
类似问题: [#15909](https://github.com/ant-design/ant-design/issues/15909), [#12812](https://github.com/ant-design/ant-design/issues/12812)。
请确保子元素能接受 `onMouseEnter`、`onMouseLeave`、`onPointerEnter`、`onPointerLeave`、`onFocus`、`onClick` 事件。[参考示例](http://ant.design/components/tooltip-cn#tooltip-demo-wrap-custom-component)
### placement 的行为逻辑是什么？
当屏幕空间足够时，会按照 `placement` 的设置进行弹层。当空间不足时则会取反向位置进行弹层（例如 `top` 不够时，会改为 `bottom`，`topLeft` 不够时会改为 `bottomLeft`）。单一方向如 `top` `bottom` `left` `right` 当贴边时进行自动位移：
<img alt="shift" height="200" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*sxaTTJjLtIMAAAAAAAAAAAAADrJ8AQ/original" />
当设置为边缘对齐方向如 `topLeft` `bottomRight` 等，则会仅做翻转而不做位移。
更多问题，请参考 [Tooltip FAQ](/components/tooltip-cn#faq)。
