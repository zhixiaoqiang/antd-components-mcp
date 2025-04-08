## API


### Dropdown

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| arrow | Whether the dropdown arrow should be visible | boolean \| { pointAtCenter: boolean } | false |  |
| autoAdjustOverflow | Whether to adjust dropdown placement automatically when dropdown is off screen | boolean | true | 5.2.0 |
| autoFocus | Focus element in `overlay` when opened | boolean | false | 4.21.0 |
| disabled | Whether the dropdown menu is disabled | boolean | - |  |
| destroyPopupOnHide | Whether destroy dropdown when hidden | boolean | false |  |
| dropdownRender | Customize dropdown content | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| getPopupContainer | To set the container of the dropdown menu. The default is to create a div element in body, but you can reset it to the scrolling area and make a relative reposition. [Example on CodePen](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | The menu props | [MenuProps](/components/menu/#api) | - | 4.24.0 |
| overlayClassName | The class name of the dropdown root element | string | - |  |
| overlayStyle | The style of the dropdown root element | CSSProperties | - |  |
| placement | Placement of popup menu: `bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | The trigger mode which executes the dropdown action. Note that hover can't be used on touchscreens | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | Whether the dropdown menu is currently open. Use `visible` under 4.23.0 ([why?](/docs/react/faq#why-open)) | boolean | - | 4.23.0 |
| onOpenChange | Called when the open state is changed. Not trigger when hidden by click item. Use `onVisibleChange` under 4.23.0 ([why?](/docs/react/faq#why-open)) | (open: boolean, info: { source: 'trigger' \| 'menu' }) => void | - | `info.source`: 5.11.0 |

### Dropdown.Button

Same props from Dropdown. And includes additional props:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| buttonsRender | Custom buttons inside Dropdown.Button | (buttons: ReactNode\[]) => ReactNode\[] | - |  |
| loading | Set the loading status of button, the same as [Button](/components/button/#api) | boolean \| { delay: number, icon: ReactNode } | false | icon: 5.23.0 |
| danger | Set the danger status of button | boolean | - | 4.23.0 |
| icon | Icon (appears on the right) | ReactNode | - |  |
| size | Size of the button, the same as [Button](/components/button/#api) | `large` \| `middle` \| `small` | `middle` |  |
| type | Type of the button, the same as [Button](/components/button/#api) | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | The same as [Button](/components/button/#api): called when you click the button on the left | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | - |  |