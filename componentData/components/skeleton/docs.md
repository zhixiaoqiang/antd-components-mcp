## 何时使用
- 网络较慢，需要长时间等待加载处理的情况下。
- 图文信息内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。
## API
### 共同的 API
<Antd component="Alert" title="以下 API 为 Skeleton、Avatar、Button、Input、Image、Node 共享的 API。" type="info" banner="true"></Antd>
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |  |
| classNames | 用于自定义 Skeleton 组件内部各语义化结构的 class，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), string> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), string> | - | 6.0.0 |
| styles | 用于自定义 Skeleton 组件内部各语义化结构的行内 style，支持对象或函数 | Record<[SemanticDOM](#semantic-dom), CSSProperties> \| (info: { props }) => Record<[SemanticDOM](#semantic-dom), CSSProperties> | - | 6.0.0 |
### Skeleton
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| avatar | 是否显示头像占位图 | boolean \| [SkeletonAvatar](#skeletonavatar) | false |  |
| loading | 为 true 时，显示占位图。反之则直接展示子组件 | boolean | - |  |
| paragraph | 是否显示段落占位图 | boolean \| [SkeletonParagraphProps](#skeletonparagraphprops) | true |  |
| round | 为 true 时，段落和标题显示圆角 | boolean | false |  |
| title | 是否显示标题占位图 | boolean \| [SkeletonTitleProps](#skeletontitleprops) | true |  |
#### SkeletonTitleProps
| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |
#### SkeletonParagraphProps
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array&lt;number \| string> | - |
### Skeleton.Avatar
| 属性  | 说明                 | 类型                                      | 默认值    |
| ----- | -------------------- | ----------------------------------------- | --------- |
| shape | 指定头像的形状       | `circle` \| `square`                      | `circle`  |
| size  | 设置头像占位图的大小 | number \| `large` \| `small` \| `default` | `default` |
### Skeleton.Button
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false | 4.17.0 |
| shape | 指定按钮的形状 | `circle` \| `round` \| `square` \| `default` | - |  |
| size | 设置按钮的大小 | `large` \| `small` \| `default` | - |  |
### Skeleton.Input
| 属性 | 说明             | 类型                            | 默认值 |
| ---- | ---------------- | ------------------------------- | ------ |
| size | 设置输入框的大小 | `large` \| `small` \| `default` | -      |
