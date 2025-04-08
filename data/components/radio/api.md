## API


### Radio/Radio.Button

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoFocus | Whether get focus when component mounted | boolean | false |
| checked | Specifies whether the radio is selected | boolean | false |
| defaultChecked | Specifies the initial state: whether or not the radio is selected | boolean | false |
| disabled | Disable radio | boolean | false |
| value | According to value for comparison, to determine whether the selected | any | - |

### RadioGroup

Radio group can wrap a group of `Radio`。

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| buttonStyle | The style type of radio button | `outline` \| `solid` | `outline` |  |
| defaultValue | Default selected value | any | - |  |
| disabled | Disable all radio buttons | boolean | false |  |
| name | The `name` property of all `input[type="radio"]` children. If not set, it will fallback to a randomly generated name | string | - |  |
| options | Set children optional | string\[] \| number\[] \| Array&lt;[CheckboxOptionType](#checkboxoptiontype)> | - |  |
| optionType | Set Radio optionType | `default` \| `button` | `default` | 4.4.0 |
| size | The size of radio button style | `large` \| `middle` \| `small` | - |  |
| value | Used for setting the currently selected value | any | - |  |
| block | Option to fit RadioGroup width to its parent width | boolean | false | 5.21.0 |
| onChange | The callback function that is triggered when the state changes | function(e:Event) | - |  |

### CheckboxOptionType

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| label | The text used to display as the Radio option | `string` | - | 4.4.0 |
| value | The value associated with the Radio option | `string` \| `number` \| `boolean` | - | 4.4.0 |
| style | The style to apply to the Radio option | `React.CSSProperties` | - | 4.4.0 |
| disabled | Specifies whether the Radio option is disabled | `boolean` | `false` | 4.4.0 |
| title | Adds the Title attribute value | `string` | - | 4.4.0 |
| id | Adds the Radio Id attribute value | `string` | - | 4.4.0 |
| onChange | Triggered when the value of the Radio Group changes | `(e: CheckboxChangeEvent) => void;` | - | 4.4.0 |
| required | Specifies whether the Radio option is required | `boolean` | `false` | 4.4.0 |