## API


#### Checkbox

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | If get focus when component mounted | boolean | false |  |
| checked | Specifies whether the checkbox is selected | boolean | false |  |
| defaultChecked | Specifies the initial state: whether or not the checkbox is selected | boolean | false |  |
| disabled | If disable checkbox | boolean | false |  |
| indeterminate | The indeterminate checked state of checkbox | boolean | false |  |
| onChange | The callback function that is triggered when the state changes | (e: CheckboxChangeEvent) => void | - |  |
| onBlur | Called when leaving the component | function() | - |  |
| onFocus | Called when entering the component | function() | - |  |

#### Checkbox Group

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultValue | Default selected value | (string \| number)\[] | \[] |  |
| disabled | If disable all checkboxes | boolean | false |  |
| name | The `name` property of all `input[type="checkbox"]` children | string | - |  |
| options | Specifies options | string\[] \| number\[] \| Option\[] | \[] |  |
| value | Used for setting the currently selected value | (string \| number \| boolean)\[] | \[] |  |
| onChange | The callback function that is triggered when the state changes | (checkedValue: T[]) => void | - |  |

##### Option

```typescript
interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}
```

### Methods

#### Checkbox

| Name          | Description                          | Version |
| ------------- | ------------------------------------ | ------- |
| blur()        | Remove focus                         |         |
| focus()       | Get focus                            |         |
| nativeElement | Returns the DOM node of the Checkbox | 5.17.3  |