## 何时使用
当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。
## API
| 参数    | 说明     | 类型                         | 默认值 | 版本 |
| ------- | -------- | ---------------------------- | ------ | ---- |
| content | 卡片内容 | ReactNode \| () => ReactNode | -      |      |
| title   | 卡片标题 | ReactNode \| () => ReactNode | -      |      |
<!-- 共同的 API -->
<embed src="../tooltip/shared/sharedProps.zh-CN.md"></embed>
## 注意
请确保 `Popover` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
## FAQ
<embed src="../tooltip/shared/sharedFAQ.zh-CN.md"></embed>
更多问题，请参考 [Tooltip FAQ](/components/tooltip-cn#faq)。
