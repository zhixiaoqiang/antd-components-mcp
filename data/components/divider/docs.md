
## When To Use

- Divide sections of an article.
- Divide inline text and links such as the operation column of table.

## Examples

<!-- prettier-ignore -->
<code src="./demo/horizontal.tsx">Horizontal</code>
<code src="./demo/with-text.tsx">Divider with title</code>
<code src="./demo/plain.tsx">Text without heading style</code>
<code src="./demo/vertical.tsx">Vertical</code>
<code src="./demo/customize-style.tsx" debug>Style Customization</code>
<code src="./demo/component-token.tsx" debug>Component Token</code>
<code src="./demo/variant.tsx">Variant</code>

## API

Common props ref：[Common props](/docs/react/common-props)

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

## Design Token

<ComponentTokenTable component="Divider"></ComponentTokenTable>
