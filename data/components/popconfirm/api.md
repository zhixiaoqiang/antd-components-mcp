## API


| Param | Description | Type | Default value | Version |
| --- | --- | --- | --- | --- |
| cancelButtonProps | The cancel button props | [ButtonProps](/components/button/#api) | - |  |
| cancelText | The text of the Cancel button | string | `Cancel` |  |
| disabled | Whether show popconfirm when click its childrenNode | boolean | false |  |
| icon | Customize icon of confirmation | ReactNode | &lt;ExclamationCircle /> |  |
| okButtonProps | The ok button props | [ButtonProps](/components/button/#api) | - |  |
| okText | The text of the Confirm button | string | `OK` |  |
| okType | Button `type` of the Confirm button | string | `primary` |  |
| showCancel | Show cancel button | boolean | true | 4.18.0 |
| title | The title of the confirmation box | ReactNode \| () => ReactNode | - |  |
| description | The description of the confirmation box title | ReactNode \| () => ReactNode | - | 5.1.0 |
| onCancel | A callback of cancel | function(e) | - |  |
| onConfirm | A callback of confirmation | function(e) | - |  |
| onPopupClick | A callback of popup click | function(e) | - | 5.5.0 |

<!-- Common API -->

<embed src="../tooltip/shared/sharedProps.en-US.md"></embed>