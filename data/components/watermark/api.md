## API


> This component is available since `antd@5.1.0`.

### Watermark

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| width | The width of the watermark, the default value of `content` is its own width | number | 120 |  |
| height | The height of the watermark, the default value of `content` is its own height | number | 64 |  |
| inherit | Pass the watermark to the pop-up component such as Modal, Drawer | boolean | true | 5.11.0 |
| rotate | When the watermark is drawn, the rotation Angle, unit `°` | number | -22 |  |
| zIndex | The z-index of the appended watermark element | number | 9 |  |
| image | Image source, it is recommended to export 2x or 3x image, high priority (support base64 format) | string | - |  |
| content | Watermark text content | string \| string[] | - |  |
| font | Text style | [Font](#font) | [Font](#font) |  |
| gap | The spacing between watermarks | \[number, number\] | \[100, 100\] |  |
| offset | The offset of the watermark from the upper left corner of the container. The default is `gap/2` | \[number, number\] | \[gap\[0\]/2, gap\[1\]/2\] |  |

### Font

<!-- prettier-ignore -->
| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | font color | [CanvasFillStrokeStyles.fillStyle](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/fillStyle) | rgba(0,0,0,.15) |  |
| fontSize | font size | number | 16 |  |
| fontWeight | font weight | `normal` \| `light` \| `weight` \| number | normal |  |
| fontFamily | font family | string | sans-serif |  |
| fontStyle | font style  | `none` \| `normal` \| `italic` \| `oblique` | normal |  |
| textAlign | specify the text alignment direction  | [CanvasTextAlign](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textAlign) | `center` | 5.10.0 |