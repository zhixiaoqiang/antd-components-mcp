## API

通用属性参考：[通用属性](/docs/react/common-props)

### Transfer

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dataSource | 数据源，其中的数据将会被渲染到左边一栏中，`targetKeys` 中指定的除外 | [RecordType extends TransferItem = TransferItem](https://github.com/ant-design/ant-design/blob/1bf0bab2a7bc0a774119f501806e3e0e3a6ba283/components/transfer/index.tsx#L12)\[] | \[] |  |
| disabled | 是否禁用 | boolean | false |  |
| selectionsIcon | 自定义下拉菜单图标 | React.ReactNode |  | 5.8.0 |
| filterOption | 根据搜索内容进行筛选，接收 `inputValue` `option` `direction` 三个参数，(`direction` 自5.9.0+支持)，当 `option` 符合筛选条件时，应返回 true，反之则返回 false | (inputValue, option, direction: `left` \| `right`): boolean | - |  |
| footer | 底部渲染函数 | (props, { direction }) => ReactNode | - | direction: 4.17.0 |
| listStyle | 两个穿梭框的自定义样式 | object\|({direction: `left` \| `right`}) => object | - |  |
| locale | 各种语言 | { itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode \| ReactNode[]; } | { itemUnit: `项`, itemsUnit: `项`, searchPlaceholder: `请输入搜索内容` } |  |
| oneWay | 展示为单向样式 | boolean | false | 4.3.0 |
| operations | 操作文案集合，顺序从上至下 | string\[] | \[`>`, `<`] |  |
| operationStyle | 操作栏的自定义样式 | CSSProperties | - |  |
| pagination | 使用分页样式，自定义渲染列表下无效 | boolean \| { pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean } | false | 4.3.0 |
| render | 每行数据渲染函数，该函数的入参为 `dataSource` 中的项，返回值为 ReactElement。或者返回一个普通对象，其中 `label` 字段为 ReactElement，`value` 字段为 title | (record) => ReactNode | - |  |
| selectAllLabels | 自定义顶部多选框标题的集合 | (ReactNode \| (info: { selectedCount: number, totalCount: number }) => ReactNode)\[] | - |  |
| selectedKeys | 设置哪些项应该被选中 | string\[] \| number\[] | \[] |  |
| showSearch | 是否显示搜索框，或可对两侧搜索框进行配置 | boolean \| { placeholder:string,defaultValue:string } | false |  |
| showSelectAll | 是否展示全选勾选框 | boolean | true |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| targetKeys | 显示在右侧框数据的 key 集合 | string\[] \| number\[] | \[] |  |
| titles | 标题集合，顺序从左至右 | ReactNode\[] | - |  |
| onChange | 选项在两栏之间转移时的回调函数 | (targetKeys, direction, moveKeys): void | - |  |
| onScroll | 选项列表滚动时的回调函数 | (direction, event): void | - |  |
| onSearch | 搜索框内容时改变时的回调函数 | (direction: `left` \| `right`, value: string): void | - |  |
| onSelectChange | 选中项发生改变时的回调函数 | (sourceSelectedKeys, targetSelectedKeys): void | - |  |

### Render Props

Transfer 支持接收 `children` 自定义渲染列表，并返回以下参数：

| 参数            | 说明           | 类型                                              | 版本 |
| --------------- | -------------- | ------------------------------------------------- | ---- |
| direction       | 渲染列表的方向 | `left` \| `right`                                 |      |
| disabled        | 是否禁用列表   | boolean                                           |      |
| filteredItems   | 过滤后的数据   | RecordType\[]                                     |      |
| selectedKeys    | 选中的条目     | string\[] \| number\[]                            |      |
| onItemSelect    | 勾选条目       | (key: string \| number, selected: boolean)        |      |
| onItemSelectAll | 勾选一组条目   | (keys: string\[] \| number\[], selected: boolean) |      |

#### 参考示例

```jsx
<Transfer {...props}>{(listProps) => <YourComponent {...listProps} />}</Transfer>
```