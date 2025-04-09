## API

通用属性参考：[通用属性](/docs/react/common-props)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 组件自动获取焦点 | boolean | false |  |
| checked | 指定当前是否选中 | boolean | false |  |
| checkedChildren | 选中时的内容 | ReactNode | - |  |
| className | Switch 器类名 | string | - |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| defaultValue | `defaultChecked` 的别名 | boolean | - | 5.12.0 |
| disabled | 是否禁用 | boolean | false |  |
| loading | 加载中的开关 | boolean | false |  |
| size | 开关大小，可选值：`default` `small` | string | `default` |  |
| unCheckedChildren | 非选中时的内容 | ReactNode | - |  |
| value | `checked` 的别名 | boolean | - | 5.12.0 |
| onChange | 变化时的回调函数 | function(checked: boolean, event: Event) | - |  |
| onClick | 点击时的回调函数 | function(checked: boolean, event: Event) | - |  |