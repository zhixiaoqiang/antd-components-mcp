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
| autoFocus | 打开后自动聚焦下拉框 | boolean | false | 4.21.0 |
| disabled | 菜单是否禁用 | boolean | - |  |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | false |  |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 菜单配置项 | [MenuProps](/components/menu-cn#api) | - | 4.24.0 |
| overlayClassName | 下拉根元素的类名称 | string | - |  |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |  |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | 触发下拉的行为，移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 菜单是否显示，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | - | 4.23.0 |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。小于 4.23.0 使用 `onVisibleChange`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |
### Dropdown.Button
属性与 Dropdown 的相同。还包含以下属性：
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| buttonsRender | 自定义左右两个按钮 | (buttons: ReactNode\[]) => ReactNode\[] | - |  |
| loading | 设置按钮载入状态，和 [Button](/components/button-cn#api) 一致 | boolean \| { delay: number, icon: ReactNode } | false | icon: 5.23.0 |
| danger | 设置危险按钮 | boolean | - | 4.23.0 |
| icon | 右侧的 icon | ReactNode | - |  |
| size | 按钮大小，和 [Button](/components/button-cn#api) 一致 | `large` \| `middle` \| `small` | `middle` |  |
| type | 按钮类型，和 [Button](/components/button-cn#api) 一致 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击左侧按钮的回调，和 [Button](/components/button-cn#api) 一致 | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |
## 注意
请确保 `Dropdown` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
## FAQ
### Dropdown 在水平方向超出屏幕时会被挤压该怎么办？
你可以通过 `width: max-content` 来解决这个问题，参考 [#43025](https://github.com/ant-design/ant-design/issues/43025#issuecomment-1594394135)。
