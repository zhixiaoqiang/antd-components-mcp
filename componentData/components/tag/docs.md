## 何时使用
- 用于标记事物的属性和维度。
- 进行分类。
## API
### Tag
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| closeIcon | 自定义关闭按钮。5.7.0：设置为 `null` 或 `false` 时隐藏关闭按钮 | ReactNode | false | 4.4.0 |
| color | 标签色 | string | - |  |
| icon | 设置图标 | ReactNode | - |  |
| bordered | 是否有边框 | boolean | true | 5.4.0 |
| onClose | 关闭时的回调（可通过 `e.preventDefault()` 来阻止默认行为） | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |
### Tag.CheckableTag
| 参数     | 说明                 | 类型              | 默认值 |
| -------- | -------------------- | ----------------- | ------ |
| checked  | 设置标签的选中状态   | boolean           | false  |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |
