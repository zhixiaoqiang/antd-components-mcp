## API


### Tag

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| closeIcon | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false` | ReactNode | false | 4.4.0 |
| color | Color of the Tag | string | - |  |
| icon | Set the icon of tag | ReactNode | - |  |
| bordered | Whether has border style | boolean | true | 5.4.0 |
| onClose | Callback executed when tag is closed | (e: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |

### Tag.CheckableTag

| Property | Description                                     | Type              | Default |
| -------- | ----------------------------------------------- | ----------------- | ------- |
| checked  | Checked status of Tag                           | boolean           | false   |
| onChange | Callback executed when Tag is checked/unchecked | (checked) => void | -       |