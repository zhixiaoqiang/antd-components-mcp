## API


| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| addonAfter | The label text displayed after (on the right side of) the input field | ReactNode | - |  |
| addonBefore | The label text displayed before (on the left side of) the input field | ReactNode | - |  |
| autoFocus | If get focus when component mounted | boolean | false | - |
| changeOnBlur | Trigger `onChange` when blur. e.g. reset value in range by blur | boolean | true | 5.11.0 |
| changeOnWheel | Allow control with mouse wheel | boolean | - | 5.14.0 |
| controls | Whether to show `+-` controls, or set custom arrows icon | boolean \| { upIcon?: React.ReactNode; downIcon?: React.ReactNode; } | - | 4.19.0 |
| decimalSeparator | Decimal separator | string | - | - |
| placeholder | placeholder | string | - |  |
| defaultValue | The initial value | number | - | - |
| disabled | If disable the input | boolean | false | - |
| formatter | Specifies the format of the value presented | function(value: number \| string, info: { userTyping: boolean, input: string }): string | - | info: 4.17.0 |
| keyboard | If enable keyboard behavior | boolean | true | 4.12.0 |
| max | The max value | number | [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) | - |
| min | The min value | number | [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) | - |
| parser | Specifies the value extracted from formatter | function(string): number | - | - |
| precision | The precision of input value. Will use `formatter` when config of `formatter` | number | - | - |
| readOnly | If readonly the input | boolean | false | - |
| status | Set validation status | 'error' \| 'warning' | - | 4.19.0 |
| prefix | The prefix icon for the Input | ReactNode | - | 4.17.0 |
| suffix | The suffix icon for the Input | ReactNode | - | 5.20.0 |
| size | The height of input box | `large` \| `middle` \| `small` | - | - |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal | number \| string | 1 | - |
| stringMode | Set value as string to support high precision decimals. Will return string value by `onChange` | boolean | false | 4.13.0 |
| value | The current value | number | - | - |
| variant | Variants of Input | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | The callback triggered when the value is changed | function(value: number \| string \| null) | - | - |
| onPressEnter | The callback function that is triggered when Enter key is pressed | function(e) | - | - |
| onStep | The callback function that is triggered when click up or down buttons | (value: number, info: { offset: number, type: 'up' \| 'down' }) => void | - | 4.7.0 |