## API
### Timeline
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| mode | 通过设置 `mode` 可以改变时间轴和内容的相对位置 | `left` \| `alternate` \| `right` | - |  |
| pending | 指定最后一个幽灵节点是否存在或内容 | ReactNode | false |  |
| pendingDot | 当最后一个幽灵节点存在時，指定其时间图点 | ReactNode | &lt;LoadingOutlined /&gt; |  |
| reverse | 节点排序 | boolean | false |  |
| items | 选项配置 | [Items](#Items)[] | - | 5.2.0 |
### Items
时间轴的每一个节点。
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 指定圆圈颜色 `blue`、`red`、`green`、`gray`，或自定义的色值 | string | `blue` |
| dot | 自定义时间轴点 | ReactNode | - |
| label | 设置标签 | ReactNode | - |
| children | 设置内容 | ReactNode | - |
| position | 自定义节点位置 | `left` \| `right` | - |