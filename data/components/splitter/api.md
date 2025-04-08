## API


> The Splitter component needs to calculate the panel size through its child elements, so its child elements only support `Splitter.Panel`.

### Splitter

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| layout | Layout direction | `horizontal` \| `vertical` | `horizontal` | - |
| onResizeStart | Callback before dragging starts | `(sizes: number[]) => void` | - | - |
| onResize | Panel size change callback | `(sizes: number[]) => void` | - | - |
| onResizeEnd | Drag end callback | `(sizes: number[]) => void` | - | - |
| lazy | Lazy mode | `boolean` | `false` | 5.23.0 |

### Panel

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| defaultSize | Initial panel size support number for px or 'percent%' usage | `number \| string` | - | - |
| min | Minimum threshold support number for px or 'percent%' usage | `number \| string` | - | - |
| max | Maximum threshold support number for px or 'percent%' usage | `number \| string` | - | - |
| size | Controlled panel size support number for px or 'percent%' usage | `number \| string` | - | - |
| collapsible | Quick folding | `boolean \| { start?: boolean; end?: boolean }` | `false` | - |
| resizable | Whether to enable drag and drop | `boolean` | `true` | - |