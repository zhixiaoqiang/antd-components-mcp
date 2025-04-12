## 何时使用
- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。
## API
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrows | 是否显示箭头 | boolean | false | 5.17.0 |
| autoplay | 是否自动切换，如果为 object 可以指定 `dotDuration` 来展示指示点进度条 | boolean \| { dotDuration?: boolean } | false | dotDuration: 5.24.0 |
| autoplaySpeed | 自动切换的间隔（毫秒） | number | 3000 |  |
| adaptiveHeight | 高度自适应 | boolean | false |  |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` | string | `bottom` |  |
| dots | 是否显示面板指示点，如果为 `object` 则可以指定 `dotsClass` | boolean \| { className?: string } | true |  |
| draggable | 是否启用拖拽切换 | boolean | false |  |
| fade | 使用渐变切换动效 | boolean | false |  |
| infinite | 是否无限循环切换（实现方式是复制两份 children 元素，如果子元素有副作用则可能会引发 bug） | boolean | true |  |
| speed | 切换动效的时间（毫秒） | number | 500 |  |
| easing | 动画效果 | string | `linear` |  |
| effect | 动画效果函数 | `scrollx` \| `fade` | `scrollx` |  |
| afterChange | 切换面板的回调 | (current: number) => void | - |  |
| beforeChange | 切换面板的回调 | (current: number, next: number) => void | - |  |
| waitForAnimate | 是否等待切换动画 | boolean | false |  |
更多 API 可参考：<https://react-slick.neostack.com/docs/api>
## 方法
| 名称                           | 描述                                              |
| ------------------------------ | ------------------------------------------------- |
| goTo(slideNumber, dontAnimate) | 切换到指定面板, dontAnimate = true 时，不使用动画 |
| next()                         | 切换到下一面板                                    |
| prev()                         | 切换到上一面板                                    |
## FAQ
### 如何自定义箭头？
可参考 [#12479](https://github.com/ant-design/ant-design/issues/12479)。
