自 `antd@4.20.0` 版本开始提供该组件。
## 何时使用
- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。
## API
> 自 `antd@4.20.0` 版本开始提供该组件。
### Segmented
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将宽度调整为父元素宽度的选项 | boolean | false |  |
| defaultValue | 默认选中的值 | string \| number |  |  |
| disabled | 是否禁用 | boolean | false |  |
| onChange | 选项变化时的回调函数 | function(value: string \| number) |  |  |
| options | 数据化配置选项内容 | string\[] \| number\[] \| SegmentedItemType\[] | [] |  |
| size | 控件尺寸 | `large` \| `middle` \| `small` | `middle` |  |
| vertical | 排列方向 | boolean | `false` | 5.21.0 |
| value | 当前选中的值 | string \| number |  |  |
| shape | 形状 | `default` \| `round` | `default` | 5.24.0 |
| name | Segmented 下所有 `input[type="radio"]` 的 `name` 属性。若未设置，则将回退到随机生成的名称 | string |  | 5.23.0 |
### SegmentedItemType
| 属性      | 描述             | 类型             | 默认值 | 版本 |
| --------- | ---------------- | ---------------- | ------ | ---- |
| label     | 分段项的显示文本 | ReactNode        | -      |      |
| value     | 分段项的值       | string \| number | -      |      |
| icon      | 分段项的显示图标 | ReactNode        | -      |      |
| disabled  | 分段项的禁用状态 | boolean          | false  |      |
| className | 自定义类名       | string           | -      |      |
