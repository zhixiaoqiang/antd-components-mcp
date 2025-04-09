## API

通用属性参考：[通用属性](/docs/react/common-props)

#### Checkbox

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | boolean | false |  |
| checked | 指定当前是否选中 | boolean | false |  |
| defaultChecked | 初始是否选中 | boolean | false |  |
| disabled | 失效状态 | boolean | false |  |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false |  |
| onChange | 变化时的回调函数 | (e: CheckboxChangeEvent) => void | - |  |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onFocus | 获得焦点时的回调 | function() | - |  |

#### Checkbox Group

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | (string \| number)\[] | \[] |  |
| disabled | 整组失效 | boolean | false |  |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - |  |
| options | 指定可选项 | string\[] \| number\[] \| Option\[] | \[] |  |
| value | 指定选中的选项 | (string \| number \| boolean)\[] | \[] |  |
| onChange | 变化时的回调函数 | (checkedValue: T[]) => void | - |  |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### 方法

#### Checkbox

| 名称          | 描述                      | 版本   |
| ------------- | ------------------------- | ------ |
| blur()        | 移除焦点                  |        |
| focus()       | 获取焦点                  |        |
| nativeElement | 返回 Checkbox 的 DOM 节点 | 5.17.3 |