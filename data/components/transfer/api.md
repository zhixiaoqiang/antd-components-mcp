## API


| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| dataSource | Used for setting the source data. The elements that are part of this array will be present the left column. Except the elements whose keys are included in `targetKeys` prop | [RecordType extends TransferItem = TransferItem](https://github.com/ant-design/ant-design/blob/1bf0bab2a7bc0a774119f501806e3e0e3a6ba283/components/transfer/index.tsx#L12)\[] | \[] |  |
| disabled | Whether disabled transfer | boolean | false |  |
| selectionsIcon | custom dropdown icon | React.ReactNode |  | 5.8.0 |
| filterOption | A function to determine whether an item should show in search result list, only works when searching, (add `direction` support since 5.9.0+) | (inputValue, option, direction: `left` \| `right`): boolean | - |  |
| footer | A function used for rendering the footer | (props, { direction }) => ReactNode | - | direction: 4.17.0 |
| listStyle | A custom CSS style used for rendering the transfer columns | object \| ({direction: `left` \| `right`}) => object | - |  |
| locale | The i18n text including filter, empty text, item unit, etc | { itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: ReactNode \| ReactNode[]; } | { itemUnit: `item`, itemsUnit: `items`, notFoundContent: `The list is empty`, searchPlaceholder: `Search here` } |  |
| oneWay | Display as single direction style | boolean | false | 4.3.0 |
| operations | A set of operations that are sorted from top to bottom | string\[] | \[`>`, `<`] |  |
| operationStyle | A custom CSS style used for rendering the operations column | object | - |  |
| pagination | Use pagination. Not work in render props | boolean \| { pageSize: number, simple: boolean, showSizeChanger?: boolean, showLessItems?: boolean } | false | 4.3.0 |
| render | The function to generate the item shown on a column. Based on an record (element of the dataSource array), this function should return a React element which is generated from that record. Also, it can return a plain object with `value` and `label`, `label` is a React element and `value` is for title | (record) => ReactNode | - |  |
| selectAllLabels | A set of customized labels for select all checkboxes on the header | (ReactNode \| (info: { selectedCount: number, totalCount: number }) => ReactNode)\[] | - |  |
| selectedKeys | A set of keys of selected items | string\[] \| number\[] | \[] |  |
| showSearch | If included, a search box is shown on each column | boolean \| { placeholder:string,defaultValue:string } | false |  |
| showSelectAll | Show select all checkbox on the header | boolean | true |  |
| status | Set validation status | 'error' \| 'warning' | - | 4.19.0 |
| targetKeys | A set of keys of elements that are listed on the right column | string\[] \| number\[] | \[] |  |
| titles | A set of titles that are sorted from left to right | ReactNode\[] | - |  |
| onChange | A callback function that is executed when the transfer between columns is complete | (targetKeys, direction, moveKeys): void | - |  |
| onScroll | A callback function which is executed when scroll options list | (direction, event): void | - |  |
| onSearch | A callback function which is executed when search field are changed | (direction: `left` \| `right`, value: string): void | - |  |
| onSelectChange | A callback function which is executed when selected items are changed | (sourceSelectedKeys, targetSelectedKeys): void | - |  |

### Render Props

Transfer accept `children` to customize render list, using follow props:

| Property | Description | Type | Version |
| --- | --- | --- | --- |
| direction | List render direction | `left` \| `right` |  |
| disabled | Disable list or not | boolean |  |
| filteredItems | Filtered items | RecordType\[] |  |
| selectedKeys | Selected items | string\[] \| number\[] |  |
| onItemSelect | Select item | (key: string \| number, selected: boolean) |  |
| onItemSelectAll | Select a group of items | (keys: string\[] \| number\[], selected: boolean) |  |

#### example

```jsx
<Transfer {...props}>{(listProps) => <YourComponent {...listProps} />}</Transfer>
```