## API


| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | Align items | `start` \| `end` \|`center` \|`baseline` | - | 4.2.0 |
| classNames | Semantic className | [Record<SemanticDOM, string>](#semantic-dom) | - |  |
| direction | The space direction | `vertical` \| `horizontal` | `horizontal` | 4.1.0 |
| size | The space size | [Size](#size) \| [Size\[\]](#size) | `small` | 4.1.0 \| Array: 4.9.0 |
| split | Set split | ReactNode | - | 4.7.0 |
| styles | Semantic style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - |  |
| wrap | Auto wrap line, when `horizontal` effective | boolean | false | 4.9.0 |

### Size

`'small' | 'middle' | 'large' | number`

### Space.Compact

Use Space.Compact when child form components are compactly connected and the border is collapsed. The supported components are：

- Button
- AutoComplete
- Cascader
- DatePicker
- Input/Input.Search
- InputNumber
- Select
- TimePicker
- TreeSelect

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| block | Option to fit width to its parent\'s width | boolean | false | 4.24.0 |
| direction | Set direction of layout | `vertical` \| `horizontal` | `horizontal` | 4.24.0 |
| size | Set child component size | `large` \| `middle` \| `small` | `middle` | 4.24.0 |