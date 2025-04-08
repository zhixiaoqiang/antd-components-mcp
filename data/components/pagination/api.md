## API


```jsx
<Pagination onChange={onChange} total={50} />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | Align | start \| center \| end | - | 5.19.0 |
| current | Current page number | number | - |  |
| defaultCurrent | Default initial page number | number | 1 |  |
| defaultPageSize | Default number of data items per page | number | 10 |  |
| disabled | Disable pagination | boolean | - |  |
| hideOnSinglePage | Whether to hide pager on single page | boolean | false |  |
| itemRender | To customize item's innerHTML | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | - |  |
| pageSize | Number of data items per page | number | - |  |
| pageSizeOptions | Specify the sizeChanger options | number\[] | \[`10`, `20`, `50`, `100`] |  |
| responsive | If `size` is not specified, `Pagination` would resize according to the width of the window | boolean | - |  |
| showLessItems | Show less page items | boolean | false |  |
| showQuickJumper | Determine whether you can jump to pages directly | boolean \| { goButton: ReactNode } | false |  |
| showSizeChanger | Determine whether to show `pageSize` select, it will be true when `total > 50` | boolean \| [SelectProps](/components/select#api) | - | SelectProps: 5.21.0 |
| showTitle | Show page item's title | boolean | true |  |
| showTotal | To display the total number and range | function(total, range) | - |  |
| simple | Whether to use simple mode | boolean \| { readOnly?: boolean } | - |  |
| size | Specify the size of `Pagination`, can be set to `small` | `default` \| `small` | `default` |  |
| total | Total number of data items | number | 0 |  |
| onChange | Called when the page number or `pageSize` is changed, and it takes the resulting page number and pageSize as its arguments | function(page, pageSize) | - |  |
| onShowSizeChange | Called when `pageSize` is changed | function(current, size) | - |  |