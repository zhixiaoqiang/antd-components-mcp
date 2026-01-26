## 何时使用
- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。
## API
```jsx
<Pagination onChange={onChange} total={50} />
```
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| align | 对齐方式 | start \| center \| end | - | 5.19.0 |
| classNames | 自定义组件内部各语义化结构的类名。支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - |  |
| current | 当前页数 | number | - |  |
| defaultCurrent | 默认的当前页数 | number | 1 |  |
| defaultPageSize | 默认的每页条数 | number | 10 |  |
| disabled | 禁用分页 | boolean | - |  |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | false |  |
| itemRender | 用于自定义页码的结构，可用于优化 SEO | (page, type: 'page' \| 'prev' \| 'next', originalElement) => React.ReactNode | - |  |
| pageSize | 每页条数 | number | - |  |
| pageSizeOptions | 指定每页可以显示多少条 | number\[] | \[`10`, `20`, `50`, `100`] |  |
| responsive | 当 size 未指定时，根据屏幕宽度自动调整尺寸 | boolean | - |  |
| showLessItems | 是否显示较少页面内容 | boolean | false |  |
| showQuickJumper | 是否可以快速跳转至某页 | boolean \| { goButton: ReactNode } | false |  |
| showSizeChanger | 是否展示 `pageSize` 切换器 | boolean \| [SelectProps](/components/select-cn#api) | - | SelectProps: 5.21.0 |
| totalBoundaryShowSizeChanger | 当 `total` 大于该值时，`showSizeChanger` 默认为 true | number | 50 |  |
| showTitle | 是否显示原生 tooltip 页码提示 | boolean | true |  |
| showTotal | 用于显示数据总量和当前数据顺序 | function(total, range) | - |  |
| simple | 当添加该属性时，显示为简单分页 | boolean \| { readOnly?: boolean } | - |  |
| size | 组件尺寸 | `large` \| `middle` \| `small` | `middle` |  |
| styles | 自定义组件内部各语义化结构的内联样式。支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - |  |
| total | 数据总数 | number | 0 |  |
| onChange | 页码或 `pageSize` 改变的回调，参数是改变后的页码及每页条数 | function(page, pageSize) | - |  |
| onShowSizeChange | pageSize 变化的回调 | function(current, size) | - |  |
