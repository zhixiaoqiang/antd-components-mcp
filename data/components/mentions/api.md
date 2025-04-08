## API


### Mention

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | If allow to remove mentions content with clear icon | boolean \| { clearIcon?: ReactNode } | false | 5.13.0 |
| autoFocus | Auto get focus when component mounted | boolean | false |  |
| autoSize | Textarea height autosize feature, can be set to true \| false or an object { minRows: 2, maxRows: 6 } | boolean \| object | false |  |
| defaultValue | Default value | string | - |  |
| filterOption | Customize filter option logic | false \| (input: string, option: OptionProps) => boolean | - |  |
| getPopupContainer | Set the mount HTML node for suggestions | () => HTMLElement | - |  |
| notFoundContent | Set mentions content when not match | ReactNode | `Not Found` |  |
| placement | Set popup placement | `top` \| `bottom` | `bottom` |  |
| prefix | Set trigger prefix keyword | string \| string\[] | `@` |  |
| split | Set split string before and after selected mention | string | ` ` |  |
| status | Set validation status | 'error' \| 'warning' \| 'success' \| 'validating' | - | 4.19.0 |
| validateSearch | Customize trigger search logic | (text: string, props: MentionsProps) => void | - |  |
| value | Set value of mentions | string | - |  |
| variant | Variants of Input | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onBlur | Trigger when mentions lose focus | () => void | - |  |
| onChange | Trigger when value changed | (text: string) => void | - |  |
| onClear | Callback when click the clear button | () => void | - | 5.20.0 |
| onFocus | Trigger when mentions get focus | () => void | - |  |
| onResize | The callback function that is triggered when textarea resize | function({ width, height }) | - |  |
| onSearch | Trigger when prefix hit | (text: string, prefix: string) => void | - |  |
| onSelect | Trigger when user select the option | (option: OptionProps, prefix: string) => void | - |  |
| onPopupScroll | Trigger when mentions scroll | (e: Event) => void | - | 5.23.0 |
| options | Option Configuration | [Options](#option) | \[] | 5.1.0 |

### Mention methods

| Name    | Description  |
| ------- | ------------ |
| blur()  | Remove focus |
| focus() | Get focus    |

### Option

<!-- prettier-ignore -->
| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Title of the option | React.ReactNode | - |
| key | The key value of the option | string | - |
| disabled | Optional | boolean | - |
| className | className | string | - |
| style | The style of the option | React.CSSProperties | - |