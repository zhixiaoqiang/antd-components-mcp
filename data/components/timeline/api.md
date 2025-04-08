## API


### Timeline

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| mode | By sending `alternate` the timeline will distribute the nodes to the left and right | `left` \| `alternate` \| `right` | - |  |
| pending | Set the last ghost node's existence or its content | ReactNode | false |  |
| pendingDot | Set the dot of the last ghost node when pending is true | ReactNode | &lt;LoadingOutlined /&gt; |  |
| reverse | Whether reverse nodes or not | boolean | false |  |
| items | Each node of timeline | [Items](#Items)[] | - | 5.2.0 |

### Items

Node of timeline.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Set the circle's color to `blue`, `red`, `green`, `gray` or other custom colors | string | `blue` |
| dot | Customize timeline dot | ReactNode | - |
| label | Set the label | ReactNode | - |
| children | Set the content | ReactNode | - |
| position | Customize node position | `left` \| `right` | - |