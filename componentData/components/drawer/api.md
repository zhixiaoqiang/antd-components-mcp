## API

通用属性参考：[通用属性](/docs/react/common-props)

<!-- prettier-ignore -->
:::warning{title=注意}
v5 使用 `rootClassName` 与 `rootStyle` 来配置最外层元素样式。原 v4 `className` 与 `style` 改至配置 Drawer 窗体样式以和 Modal 对齐。
:::

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 抽屉展开后是否将焦点切换至其 DOM 节点 | boolean | true | 4.17.0 |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - |  |
| className | Drawer 容器外层 className 设置，如果需要设置最外层，请使用 rootClassName | string | - |  |
| classNames | 语义化结构 className | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.10.0 |
| closeIcon | 自定义关闭图标。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | &lt;CloseOutlined /> |  |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false |  |
| extra | 抽屉右上角的操作区域 | ReactNode | - | 4.17.0 |
| footer | 抽屉的页脚 | ReactNode | - |  |
| forceRender | 预渲染 Drawer 内元素 | boolean | false |  |
| getContainer | 指定 Drawer 挂载的节点，**并在容器内展现**，`false` 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| height | 高度，在 `placement` 为 `top` 或 `bottom` 时使用 | string \| number | 378 |  |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true |  |
| mask | 是否展示遮罩 | boolean | true |  |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true |  |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| rootStyle | 可用于设置 Drawer 最外层容器的样式，和 `style` 的区别是作用节点包括 `mask` | CSSProperties | - |  |
| size | 预设抽屉宽度（或高度），default `378px` 和 large `736px` | 'default' \| 'large' | 'default' | 4.17.0 |
| style | 设计 Drawer 容器样式，如果你只需要设置内容部分请使用 `styles.body` | CSSProperties | - |  |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.10.0 |
| title | 标题 | ReactNode | - |  |
| loading | 显示骨架屏 | boolean | false | 5.17.0 |
| open | Drawer 是否可见 | boolean | - |
| width | 宽度 | string \| number | 378 |  |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 |  |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - |  |
| drawerRender | 自定义渲染抽屉 | (node: ReactNode) => ReactNode | - | 5.18.0 |