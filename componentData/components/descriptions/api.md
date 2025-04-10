## API

### Descriptions

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| bordered | 是否展示边框 | boolean | false |  |
| colon | 配置 `Descriptions.Item` 的 `colon` 的默认值。表示是否显示 label 后面的冒号 | boolean | true |  |
| column | 一行的 `DescriptionItems` 数量，可以写成像素值或支持响应式的对象写法 `{ xs: 8, sm: 16, md: 24}` | number \| [Record<Breakpoint, number>](https://github.com/ant-design/ant-design/blob/84ca0d23ae52e4f0940f20b0e22eabe743f90dca/components/descriptions/index.tsx#L111C21-L111C56) | 3 |  |
| ~~contentStyle~~ | 自定义内容样式，请使用 `styles={{ content: {} }}` 替换 | CSSProperties | - | 4.10.0 |
| extra | 描述列表的操作区域，显示在右上方 | ReactNode | - | 4.5.0 |
| items | 描述列表项内容 | [DescriptionsItem](#descriptionitem)[] | - | 5.8.0 |
| ~~labelStyle~~ | 自定义标签样式，请使用 `styles={{ label: {} }}` 替换 | CSSProperties | - | 4.10.0 |
| layout | 描述布局 | `horizontal` \| `vertical` | `horizontal` |  |
| size | 设置列表的大小。可以设置为 `middle` 、`small`, 或不填（只有设置 `bordered={true}` 生效） | `default` \| `middle` \| `small` | - |  |
| title | 描述列表的标题，显示在最顶部 | ReactNode | - |  |
| classNames | 语义化结构 class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.23.0 |
| styles | 语义化结构 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.23.0 |

### DescriptionItem

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| ~~contentStyle~~ | 自定义内容样式，请使用 `styles={{ content: {} }}` 替换 | CSSProperties | - | 4.9.0 |
| label | 内容的描述 | ReactNode | - |  |
| ~~labelStyle~~ | 自定义标签样式，请使用 `styles={{ label: {} }}` 替换 | CSSProperties | - | 4.9.0 |
| span | 包含列的数量（`filled` 铺满当前行剩余部分） | number\| `filled` \| [Screens](/components/grid-cn#col) | 1 | `screens: 5.9.0`，`filled: 5.22.0` |

> span 是 Description.Item 的数量。 span={2} 会占用两个 DescriptionItem 的宽度。当同时配置 `style` 和 `labelStyle`（或 `contentStyle`）时，两者会同时作用。样式冲突时，后者会覆盖前者。