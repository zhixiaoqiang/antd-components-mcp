## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 `title` 提示，提供一个 `按钮/文字/操作` 的文案解释。

## API
| 参数  | 说明     | 类型                         | 默认值 |
| ----- | -------- | ---------------------------- | ------ |
| title | 提示文字 | ReactNode \| () => ReactNode | -      |
### 共同的 API
<embed src="./shared/sharedProps.zh-CN.md"></embed>


## FAQ
### 为何 Tooltip 的内容在关闭时不会更新？
Tooltip 默认在关闭时会缓存内容，以防止内容更新时出现闪烁：
```jsx
// `title` 不会因为 `user` 置空而闪烁置空
<Tooltip open={user} title={user?.name} />
```
<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*KVx7QLOYwVsAAAAAAAAAAAAADrJ8AQ/original" />
</div>
如果需要在关闭时也更新内容，可以设置 `fresh` 属性（例如 [#44830](https://github.com/ant-design/ant-design/issues/44830) 中的场景）：
```jsx
<Tooltip open={user} title={user?.name} fresh />
```
<div>
<img alt="no blink" height="50" src="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*rUbsR4xWpMsAAAAAAAAAAAAADrJ8AQ/original" />
</div>
---
<!-- 请确保在 FAQ 最后 -->
<embed src="./shared/sharedFAQ.zh-CN.md"></embed>
