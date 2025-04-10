## API

### Image

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像描述 | string | - | 4.6.0 |
| fallback | 加载失败容错地址 | string | - | 4.6.0 |
| height | 图像高度 | string \| number | - | 4.6.0 |
| placeholder | 加载占位，为 `true` 时使用默认占位 | ReactNode | - | 4.6.0 |
| preview | 预览参数，为 `false` 时禁用 | boolean \| [PreviewType](#previewtype) | true | 4.6.0 [PreviewType](#previewyype):4.7.0 |
| src | 图片地址 | string | - | 4.6.0 |
| width | 图像宽度 | string \| number | - | 4.6.0 |
| onError | 加载错误回调 | (event: Event) => void | - | 4.12.0 |

其他属性见 [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)

### PreviewType

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 是否显示 | boolean | - | - |
| src | 自定义预览 src | string | - | 4.10.0 |
| getContainer | 指定预览挂载的节点，但依旧为全屏展示，false 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | 是否可移动 | boolean | true | 5.8.0 |
| mask | 缩略图遮罩 | ReactNode | - | 4.9.0 |
| maskClassName | 缩略图遮罩类名 | string | - | 4.11.0 |
| rootClassName | 预览图的根 DOM 类名 | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` 为缩放放大的每步倍数 | number | 0.5 | - |
| minScale | 最小缩放倍数 | number | 1 | 5.7.0 |
| maxScale | 最大放大倍数 | number | 50 | 5.7.0 |
| closeIcon | 自定义关闭 Icon | React.ReactNode | - | 5.7.0 |
| forceRender | 强制渲染预览图 | boolean | - | - |
| toolbarRender | 自定义工具栏 | (originalNode: React.ReactElement, info: Omit<[ToolbarRenderInfoType](#toolbarrenderinfotype), 'current' \| 'total'>) => React.ReactNode | - | 5.7.0, `info.image`: 5.18.0 |
| imageRender | 自定义预览内容 | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), image: [ImgInfo](#imginfo) }) => React.ReactNode | - | 5.7.0, image: 5.18.0 |
| destroyOnClose | 关闭预览时销毁子元素 | boolean | false |  |
| onTransform | 预览图 transform 变化的回调 | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onVisibleChange | 当 `visible` 发生改变时的回调 | (visible: boolean, prevVisible: boolean) => void | - | - |