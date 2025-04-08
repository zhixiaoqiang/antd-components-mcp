## API


### List

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bordered | Toggles rendering of the border around the list | boolean | false |  |
| dataSource | DataSource array for list | any\[] | - |  |
| footer | List footer renderer | ReactNode | - |  |
| grid | The grid type of list. You can set grid to something like {gutter: 16, column: 4} | [object](#list-grid-props) | - |  |
| header | List header renderer | ReactNode | - |  |
| itemLayout | The layout of list | `horizontal` \| `vertical` | `horizontal` |  |
| loading | Shows a loading indicator while the contents of the list are being fetched | boolean \| [SpinProps](/components/spin/#api) ([more](https://github.com/ant-design/ant-design/issues/8659)) | false |  |
| loadMore | Shows a load more content | ReactNode | - |  |
| locale | The i18n text including empty text | object | {emptyText: `No Data`} |  |
| pagination | Pagination [config](/components/pagination/), hide it by setting it to false | boolean \| object | false |  |
| renderItem | Customize list item when using `dataSource` | (item: T, index: number) => ReactNode | - |  |
| rowKey | Item's unique value, could be an Item's key which holds a unique value of type `React.Key` or function that receives Item and returns a `React.Key` | `keyof` T \| (item: T) => `React.Key` | `"key"` |  |
| size | Size of list | `default` \| `large` \| `small` | `default` |  |
| split | Toggles rendering of the split under the list item | boolean | true |  |

### pagination

Properties for pagination.

| Property | Description                               | Type                         | Default  |
| -------- | ----------------------------------------- | ---------------------------- | -------- |
| position | The specify the position of `Pagination`  | `top` \| `bottom` \| `both`  | `bottom` |
| align    | The specify the alignment of `Pagination` | `start` \| `center` \| `end` | `end`    |

More about pagination, please check [`Pagination`](/components/pagination/).

### List grid props

| Property | Description              | Type   | Default | Version |
| -------- | ------------------------ | ------ | ------- | ------- |
| column   | The column of grid       | number | -       |         |
| gutter   | The spacing between grid | number | 0       |         |
| xs       | `<576px` column of grid  | number | -       |         |
| sm       | `≥576px` column of grid  | number | -       |         |
| md       | `≥768px` column of grid  | number | -       |         |
| lg       | `≥992px` column of grid  | number | -       |         |
| xl       | `≥1200px` column of grid | number | -       |         |
| xxl      | `≥1600px` column of grid | number | -       |         |

### List.Item

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| actions | The actions content of list item. If `itemLayout` is `vertical`, shows the content on bottom, otherwise shows content on the far right | Array&lt;ReactNode> | - |  |
| classNames | Semantic structure className | [`Record<actions \| extra, string>`](#semantic-dom) | - | 5.18.0 |
| extra | The extra content of list item. If `itemLayout` is `vertical`, shows the content on right, otherwise shows content on the far right | ReactNode | - |  |
| styles | Semantic DOM style | [`Record<actions \| extra, CSSProperties>`](#semantic-dom) | - | 5.18.0 |

### List.Item.Meta

| Property    | Description                  | Type      | Default | Version |
| ----------- | ---------------------------- | --------- | ------- | ------- |
| avatar      | The avatar of list item      | ReactNode | -       |         |
| description | The description of list item | ReactNode | -       |         |
| title       | The title of list item       | ReactNode | -       |         |