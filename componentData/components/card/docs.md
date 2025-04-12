## 何时使用
最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。
## API
```jsx
<Card title="卡片标题">卡片内容</Card>
```
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array&lt;ReactNode> | - |  |
| activeTabKey | 当前激活页签的 key | string | - |  |
| ~~bordered~~ | 是否有边框, 请使用 `variant` 替换 | boolean | true |  |
| variant | 形态变体 | `outlined` \| `borderless` \| | `outlined` | 5.24.0 |
| cover | 卡片封面 | ReactNode | - |  |
| defaultActiveTabKey | 初始化选中页签的 key，如果没有设置 activeTabKey | string | `第一个页签的 key` |  |
| extra | 卡片右上角的操作区域 | ReactNode | - |  |
| hoverable | 鼠标移过时可浮起 | boolean | false |  |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |  |
| size | card 的尺寸 | `default` \| `small` | `default` |  |
| tabBarExtraContent | tab bar 上额外的元素 | ReactNode | - |  |
| tabList | 页签标题列表 | [TabItemType](/components/tabs-cn#tabitemtype)[] | - |  |
| tabProps | [Tabs](/components/tabs-cn#tabs) | - | - |  |
| title | 卡片标题 | ReactNode | - |  |
| type | 卡片类型，可设置为 `inner` 或 不设置 | string | - |  |
| classNames | 配置卡片内置模块的 className | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.14.0 |
| styles | 配置卡片内置模块的 style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.14.0 |
| onTabChange | 页签切换的回调 | (key) => void | - |  |
### Card.Grid
| 参数      | 说明                   | 类型          | 默认值 | 版本 |
| --------- | ---------------------- | ------------- | ------ | ---- |
| className | 网格容器类名           | string        | -      |      |
| hoverable | 鼠标移过时可浮起       | boolean       | true   |      |
| style     | 定义网格容器类名的样式 | CSSProperties | -      |      |
### Card.Meta
| 参数        | 说明               | 类型          | 默认值 | 版本 |
| ----------- | ------------------ | ------------- | ------ | ---- |
| avatar      | 头像/图标          | ReactNode     | -      |      |
| className   | 容器类名           | string        | -      |      |
| description | 描述内容           | ReactNode     | -      |      |
| style       | 定义容器类名的样式 | CSSProperties | -      |      |
| title       | 标题内容           | ReactNode     | -      |      |
