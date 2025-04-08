## API


> This component is available since `antd@5.5.0`.

<!-- prettier-ignore -->
| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| allowClear | 	Allow clearing color selected | boolean | false | |
| arrow | Configuration for popup arrow | `boolean \| { pointAtCenter: boolean }` | true | |
| children | Trigger of ColorPicker | React.ReactNode | - | |
| defaultValue | Default value of color | string \| `Color` | - | |
| defaultFormat | Default format of color | `rgb` \| `hex` \| `hsb` | `hex` | 5.9.0 |
| disabled | Disable ColorPicker | boolean | - | |
| disabledAlpha | Disable Alpha | boolean | - | 5.8.0 |
| disabledFormat | Disable format of color | boolean | - | |
| destroyTooltipOnHide | Whether destroy popover when hidden | `boolean` | false | 5.7.0 |
| format | Format of color | `rgb` \| `hex` \| `hsb` | - | |
| mode | Configure single or gradient color | `'single' \| 'gradient' \| ('single' \| 'gradient')[]` | `single` | 5.20.0 |
| open | Whether to show popup | boolean | - | |
| presets | Preset colors | `{ label: ReactNode, colors: Array<string \| Color>, defaultOpen?: boolean, key?: React.Key }[]` | - | `defaultOpen: 5.11.0, key: 5.23.0` |
| placement | Placement of popup | The design of the [placement](/components/tooltip/#api) parameter is the same as the `Tooltips` component. | `bottomLeft` | |
| panelRender | Custom Render Panel | `(panel: React.ReactNode, extra: { components: { Picker: FC; Presets: FC } }) => React.ReactNode` | - | 5.7.0 |
| showText | Show color text | boolean \| `(color: Color) => React.ReactNode` | - | 5.7.0 |
| size | Setting the trigger size | `large` \| `middle` \| `small` | `middle` | 5.7.0 |
| trigger | ColorPicker trigger mode | `hover` \| `click` | `click` | |
| value | Value of color | string \| `Color` | - | |
| onChange | Callback when `value` is changed | `(value: Color, css: string) => void` | - | |
| onChangeComplete | Called when color pick ends. Will not change the display color when `value` controlled by `onChangeComplete` | `(value: Color) => void` | - | 5.7.0 |
| onFormatChange | Callback when `format` is changed | `(format: 'hex' \| 'rgb' \| 'hsb') => void` | - | |
| onOpenChange | Callback when `open` is changed | `(open: boolean) => void` | - | |
| onClear | Called when clear | `() => void` | - | 5.6.0 |

### Color

<!-- prettier-ignore -->
| Property | Description | Type | Version |
| :-- | :-- | :-- | :-- |
| toCssString | Convert to CSS support format | `() => string` | 5.20.0 |
| toHex | Convert to `hex` format characters, the return type like: `1677ff` | `() => string` | - |
| toHexString | Convert to `hex` format color string, the return type like: `#1677ff` | `() => string` | - |
| toHsb | Convert to `hsb` object  | `() => ({ h: number, s: number, b: number, a number })` | - |
| toHsbString | Convert to `hsb` format color string, the return type like: `hsb(215, 91%, 100%)` | `() => string` | - |
| toRgb | Convert to `rgb` object  | `() => ({ r: number, g: number, b: number, a number })` | - |
| toRgbString | Convert to `rgb` format color string, the return type like: `rgb(22, 119, 255)` | `() => string` | - |