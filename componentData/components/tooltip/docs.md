## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| title | 提示文字 | ReactNode \| () => ReactNode | - | - |
| color | 设置背景颜色，使用该属性后内部文字颜色将自适应 | string | - | 5.27.0 |
| classNames | 语义化结构 class | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - |  |
| styles | 语义化结构 style | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
### 共同的 API
<Antd component="Alert" title="以下 API 为 Tooltip、Popconfirm、Popover 共享的 API。" type="info" banner="true"></Antd>
<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 请参考 [dom-align](https://github.com/yiminghe/dom-align) 进行配置 | object | - |  |
| arrow | 修改箭头的显示状态以及修改箭头是否指向目标元素中心 | boolean \| { pointAtCenter: boolean } | true | 5.2.0 |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | true |  |
| color | 背景颜色 | string | - | 4.3.0 |
| classNames | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - | |
| defaultOpen | 默认是否显隐 | boolean | false | 4.23.0 |
| ~~destroyTooltipOnHide~~ | 关闭后是否销毁 dom | boolean | false |  |
| destroyOnHidden | 关闭后是否销毁 dom | boolean | false | 5.25.0 |
| fresh | 默认情况下，Tooltip 在关闭时会缓存内容。设置该属性后会始终保持更新 | boolean | false | 5.10.0 |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |  |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |  |
| ~~overlayClassName~~ | 卡片类名, 请使用 `classNames.root` 替换 | string | - |  |
| ~~overlayStyle~~ | 卡片样式, 请使用 `styles.root` 替换| React.CSSProperties | - |  |
| ~~overlayInnerStyle~~ | 卡片内容区域的样式对象, 请使用 `styles.body` 替换 | React.CSSProperties | - |  |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - | |
| trigger | 触发行为，可选 `hover` \| `focus` \| `click` \| `contextMenu`，可使用数组设置多个触发行为 | string \| string\[] | `hover` |  |
| open | 用于手动控制浮层显隐，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | false | 4.23.0 |
| zIndex | 设置 Tooltip 的 `z-index` | number | - |  |
| onOpenChange | 显示隐藏的回调 | (open: boolean) => void | - | 4.23.0 |
### ConfigProvider - tooltip.unique {#config-provider-tooltip-unique}
可以通过 ConfigProvider 全局配置 Tooltip 的唯一性显示。当 `unique` 设置为 `true` 时，同一时间 ConfigProvider 下的 Tooltip 只会显示一个，提供更好的用户体验和平滑的过渡效果。
注意：配置后 `getContainer`、`arrow` 等属性将会失效。
```tsx
import { Button, ConfigProvider, Space, Tooltip } from 'antd';
export default () => (
  <ConfigProvider
    tooltip={{
      unique: true,
    }}
  >
    <Space>
      <Tooltip title="第一个提示">
        <Button>按钮 1</Button>
      </Tooltip>
      <Tooltip title="第二个提示">
        <Button>按钮 2</Button>
      </Tooltip>
    </Space>
  </ConfigProvider>
);
```
## FAQ
### 为何有时候 HOC 组件无法生效？
请确保 `Tooltip` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onPointerEnter`、`onPointerLeave`、`onFocus`、`onClick` 事件。
请查看 https://github.com/ant-design/ant-design/issues/15909
### 为何 Tooltip 的内容在关闭时不会更新？
Tooltip 默认在关闭时会缓存内容，以防止内容更新时出现闪烁：
```jsx
// `title` 不会因为 `user` 置空而闪烁置空
<Tooltip open={user} title={user?.name} />
```
<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KVx7QLOYwVsAAAAAAAAAAAAADrJ8AQ/original" />
</div>
如果需要在关闭时也更新内容，可以设置 `fresh` 属性（例如 [#44830](https://github.com/ant-design/ant-design/issues/44830) 中的场景）：
```jsx
<Tooltip open={user} title={user?.name} fresh />
```
<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rUbsR4xWpMsAAAAAAAAAAAAADrJ8AQ/original" />
</div>
---
<!-- 请确保在 FAQ 最后 -->
<Antd component="Alert" title="以下常见问题均适用于 Tooltip、Popconfirm、Popover 组件" type="warning" banner="true"></Antd>
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
