## 何时使用
抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。
- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。
> 开发者注意事项：
>
> 自 `5.17.0` 版本，我们提供了 `loading` 属性，内置 Spin 组件作为加载状态，但是自 `5.18.0` 版本开始，我们修复了设计失误，将内置的 Spin 组件替换成了 Skeleton 组件，同时收窄了 `loading` api 的类型范围，只能接收 boolean 类型。
## API
<!-- prettier-ignore -->
:::warning{title=注意}
v5 使用 `rootClassName` 与 `rootStyle` 来配置最外层元素样式。原 v4 `className` 与 `style` 改至配置 Drawer 窗体样式以和 Modal 对齐。
:::
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - |  |
| className | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName | string | - |  |
| classNames | 用于自定义 Drawer 组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), string> | - |  |
| closable | 是否显示关闭按钮。可通过 `placement` 配置其位置 | boolean \| { closeIcon?: React.ReactNode; disabled?: boolean; placement?: 'start' \| 'end' } | true | placement: 5.28.0 |
| ~~destroyOnClose~~ | 关闭时销毁 Drawer 里的子元素 | boolean | false |  |
| destroyOnHidden | 关闭时销毁 Drawer 里的子元素 | boolean | false | 5.25.0 |
| extra | 抽屉右上角的操作区域 | ReactNode | - | 4.17.0 |
| footer | 抽屉的页脚 | ReactNode | - |  |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  |
| focusable | 抽屉内焦点管理的配置 | `{ trap?: boolean, focusTriggerAfterClose?: boolean }` | - | 6.2.0 |
| getContainer | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| ~~height~~ | 高度，在 `placement` 为 `top` 或 `bottom` 时使用，请使用 `size` 替换 | string \| number | 378 |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 遮罩效果 | boolean \| `{ enabled?: boolean, blur?: boolean }` | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| resizable | 是否启用拖拽改变尺寸 | boolean \| [ResizableConfig](#resizableconfig) | - | boolean: 6.1.0 |
| rootStyle | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties | - |  |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px`，或自定义数字 | 'default' \| 'large' \| number \| string | 'default' | 4.17.0, string: 6.2.0 |
| styles | 用于自定义 Drawer 组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props })=> Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| title | 标题 | ReactNode | - |  |
| loading | 显示骨架屏 | boolean | false | 5.17.0 |
| open | Drawer 是否可见 | boolean | - |
| ~~width~~ | 宽度，请使用 `size` 替换 | string \| number | 378 |  |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |  |
| drawerRender | 自定义渲染抽屉 | (node: ReactNode) => ReactNode | - | 5.18.0 |
### ResizableConfig
| 参数          | 说明                     | 类型                   | 默认值 | 版本  |
| ------------- | ------------------------ | ---------------------- | ------ | ----- |
| onResizeStart | 开始拖拽调整大小时的回调 | () => void             | -      | 6.0.0 |
| onResize      | 拖拽调整大小时的回调     | (size: number) => void | -      | 6.0.0 |
| onResizeEnd   | 结束拖拽调整大小时的回调 | () => void             | -      | 6.0.0 |
