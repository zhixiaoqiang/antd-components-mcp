## API


### Image

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| alt | Image description | string | - | 4.6.0 |
| fallback | Load failure fault-tolerant src | string | - | 4.6.0 |
| height | Image height | string \| number | - | 4.6.0 |
| placeholder | Load placeholder, use default placeholder when set `true` | ReactNode | - | 4.6.0 |
| preview | preview config, disabled when `false` | boolean \| [PreviewType](#previewtype) | true | 4.6.0 [PreviewType](#previewtype):4.7.0 |
| src | Image path | string | - | 4.6.0 |
| width | Image width | string \| number | - | 4.6.0 |
| onError | Load failed callback | (event: Event) => void | - | 4.12.0 |

Other attributes [&lt;img>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#Attributes)

### PreviewType

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| visible | Whether the preview dialog is visible or not | boolean | - | - |
| src | Custom preview src | string | - | 4.10.0 |
| getContainer | The mounted node for preview dialog but still display at fullScreen | string \| HTMLElement \| (() => HTMLElement) \| false | - | 4.8.0 |
| movable | whether can be moved | boolean | true | 5.8.0 |
| mask | Thumbnail mask | ReactNode | - | 4.9.0 |
| maskClassName | The className of the mask | string | - | 4.11.0 |
| ~~rootClassName~~ | The classname of the preview root DOM，The v6 will be moved to the root component. | string | - | 5.4.0 |
| scaleStep | `1 + scaleStep` is the step to increase or decrease the scale | number | 0.5 | - |
| minScale | Min scale | number | 1 | 5.7.0 |
| maxScale | Max scale | number | 50 | 5.7.0 |
| closeIcon | Custom close icon | React.ReactNode | - | 5.7.0 |
| forceRender | Force render preview dialog | boolean | - | - |
| toolbarRender | Custom toolbar render | (originalNode: React.ReactElement, info: Omit<[ToolbarRenderInfoType](#toolbarrenderinfotype), 'current' \| 'total'>) => React.ReactNode | - | 5.7.0, `info.image`: 5.18.0 |
| imageRender | Custom preview content | (originalNode: React.ReactElement, info: { transform: [TransformType](#transformtype), image: [ImgInfo](#imginfo) }) => React.ReactNode | - | 5.7.0, image: 5.18.0 |
| destroyOnClose | Destroy child elements when closing preview | boolean | false |  |
| onTransform | Callback when the transform of image changed | { transform: [TransformType](#transformtype), action: [TransformAction](#transformaction) } | - | 5.7.0 |
| onVisibleChange | Callback when `visible` changed | (visible: boolean, prevVisible: boolean) => void | - | - |