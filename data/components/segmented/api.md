## API


> This component is available since `antd@4.20.0`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| block | Option to fit width to its parent\'s width | boolean | false |  |
| defaultValue | Default selected value | string \| number |  |  |
| disabled | Disable all segments | boolean | false |  |
| onChange | The callback function that is triggered when the state changes | function(value: string \| number) |  |  |
| options | Set children optional | string\[] \| number\[] \| SegmentedItemType\[] | [] |  |
| size | The size of the Segmented. | `large` \| `middle` \| `small` | `middle` |  |
| vertical | Orientation | boolean | `false` | 5.21.0 |
| value | Currently selected value | string \| number |  |  |
| shape | shape of Segmented | `default` \| `round` | `default` | 5.24.0 |
| name | The `name` property of all `input[type="radio"]` children. if not set, it will fallback to a randomly generated name | string |  | 5.23.0 |

### SegmentedItemType

| Property  | Description                      | Type             | Default | Version |
| --------- | -------------------------------- | ---------------- | ------- | ------- |
| label     | Display text for Segmented item  | ReactNode        | -       |         |
| value     | Value for Segmented item         | string \| number | -       |         |
| icon      | Display icon for Segmented item  | ReactNode        | -       |         |
| disabled  | Disabled state of segmented item | boolean          | false   |         |
| className | The additional css class         | string           | -       |         |