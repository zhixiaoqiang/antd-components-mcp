## API


| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| children | The wrapped title | ReactNode | - |  |
| className | The className of container | string | - |  |
| dashed | Whether line is dashed | boolean | false |  |
| variant | Whether line is dashed, dotted or solid | `dashed` \| `dotted` \| `solid` | solid | 5.20.0 |
| orientation | The position of title inside divider | `start` \| `end` \| `center` | `center` | `start` `end`: 5.24.0 |
| orientationMargin | The margin-left/right between the title and its closest border, while the `orientation` should not be `center`, If a numeric value of type `string` is provided without a unit, it is assumed to be in pixels (px) by default. | string \| number | - |  |
| plain | Divider text show as plain style | boolean | true | 4.2.0 |
| style | The style object of container | CSSProperties | - |  |
| type | The direction type of divider | `horizontal` \| `vertical` | `horizontal` |  |