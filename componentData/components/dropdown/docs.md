## 何时使用
当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。
## API
### Dropdown
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean \| { pointAtCenter: boolean } | false |  |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean | true | 5.2.0 |
| classNames | 用于自定义 Dropdown 组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - |  |
| disabled | 菜单是否禁用 | boolean | - |  |
| ~~destroyPopupOnHide~~ | 关闭后是否销毁 Dropdown，使用 `destroyOnHidden` 替换 | boolean | false |  |
| destroyOnHidden | 关闭后是否销毁 Dropdown | boolean | false | 5.25.0 |
| ~~dropdownRender~~ | 自定义下拉框内容，使用 `popupRender` 替换 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| popupRender | 自定义弹出框内容 | (menus: ReactNode) => ReactNode | - | 5.25.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 菜单配置项 | [MenuProps](/components/menu-cn#api) | - |  |
| ~~overlayClassName~~ | 下拉根元素的类名称, 请使用 `classNames.root` 替换 | string | - |  |
| ~~overlayStyle~~ | 下拉根元素的样式，请使用 `styles.root` | CSSProperties | - |  |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| styles | 用于自定义 Dropdown 组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom) , CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom) , CSSProperties> | - |  |
| trigger | 触发下拉的行为，移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 菜单是否显示 | boolean | - |  |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发 | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |
## 注意
请确保 `Dropdown` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
## FAQ
### Dropdown 在水平方向超出屏幕时会被挤压该怎么办？ {#faq-dropdown-squeezed}
你可以通过 `width: max-content` 来解决这个问题，参考 [#43025](https://github.com/ant-design/ant-design/issues/43025#issuecomment-1594394135)。
