
## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。



## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| cancelButtonProps | cancel 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| cancelText | 取消按钮文字 | string | `取消` |  |
| disabled | 阻止点击 Popconfirm 子元素时弹出确认框 | boolean | false |  |
| icon | 自定义弹出气泡 Icon 图标 | ReactNode | &lt;ExclamationCircle /> |  |
| okButtonProps | ok 按钮 props | [ButtonProps](/components/button-cn#api) | - |  |
| okText | 确认按钮文字 | string | `确定` |  |
| okType | 确认按钮类型 | string | `primary` |  |
| showCancel | 是否显示取消按钮 | boolean | true | 4.18.0 |
| title | 确认框标题 | ReactNode \| () => ReactNode | - |  |
| description | 确认内容的详细描述 | ReactNode \| () => ReactNode | - | 5.1.0 |
| onCancel | 点击取消的回调 | function(e) | - |  |
| onConfirm | 点击确认的回调 | function(e) | - |  |
| onPopupClick | 弹出气泡点击事件 | function(e) | - | 5.5.0 |

<!-- 共同的 API -->

<embed src="../tooltip/shared/sharedProps.zh-CN.md"></embed>





## FAQ

<embed src="../tooltip/shared/sharedFAQ.zh-CN.md"></embed>

更多问题，请参考 [Tooltip FAQ](/components/tooltip-cn#faq)。
