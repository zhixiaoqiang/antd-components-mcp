## API
### Radio/Radio.Button
<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |
| checked | 指定当前是否选中 | boolean | false |
| defaultChecked | 初始是否选中 | boolean | false |
| disabled | 禁用 Radio | boolean | false |
| value | 根据 value 进行比较，判断是否选中 | any | - |
### Radio.Group
单选框组合，用于包裹一组 `Radio`。
<!-- prettier-ignore -->
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `outline` \| `solid` | `outline` |  |  |
| defaultValue | 默认选中的值 | any | - |  |  |
| disabled | 禁选所有子单选器 | boolean | false |  |  |
| name | RadioGroup 下所有 `input[type="radio"]` 的 `name` 属性。若未设置，则将回退到随机生成的名称 | string | - |  |  |
| options | 以配置形式设置子元素 | string\[] \| number\[] \| Array&lt;[CheckboxOptionType](#checkboxoptiontype)> | - |  |  |
| optionType | 用于设置 Radio `options` 类型 | `default` \| `button` | `default` | 4.4.0 |  |
| size | 大小，只对按钮样式生效 | `large` \| `middle` \| `small` | - |  |  |
| value | 用于设置当前选中的值 | any | - |  |  |
| block | 将 RadioGroup 宽度调整为其父宽度的选项 | boolean | false | 5.21.0 |  |
| onChange | 选项变化时的回调函数 | function(e:Event) | - |  |  |
### CheckboxOptionType
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| label | 用于作为 Radio 选项展示的文本 | `string` | - | 4.4.0 |
| value | 关联 Radio 选项的值 | `string` \| `number` \| `boolean` | - | 4.4.0 |
| style | 应用到 Radio 选项的 style | `React.CSSProperties` | - | 4.4.0 |
| disabled | 指定 Radio 选项是否要禁用 | `boolean` | `false` | 4.4.0 |
| title | 添加 Title 属性值 | `string` | - | 4.4.0 |
| id | 添加 Radio Id 属性值 | `string` | - | 4.4.0 |
| onChange | 当 Radio Group 的值发送改变时触发 | `(e: CheckboxChangeEvent) => void;` | - | 4.4.0 |
| required | 指定 Radio 选项是否必填 | `boolean` | `false` | 4.4.0 |