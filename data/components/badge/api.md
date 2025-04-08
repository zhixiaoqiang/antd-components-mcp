## API


### Badge

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | Customize Badge dot color | string | - |  |
| count | Number to show in badge | ReactNode | - |  |
| classNames | Semantic DOM class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.7.0 |
| dot | Whether to display a red dot instead of `count` | boolean | false |  |
| offset | Set offset of the badge dot | \[number, number] | - |  |
| overflowCount | Max count to show | number | 99 |  |
| showZero | Whether to show badge when `count` is zero | boolean | false |  |
| size | If `count` is set, `size` sets the size of badge | `default` \| `small` | - | - |
| status | Set Badge as a status dot | `success` \| `processing` \| `default` \| `error` \| `warning` | - |  |
| styles | Semantic DOM style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.7.0 |
| text | If `status` is set, `text` sets the display text of the status `dot` | ReactNode | - |  |
| title | Text to show when hovering over the badge | string | - |  |

### Badge.Ribbon

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| color | Customize Ribbon color | string | - |  |
| placement | The placement of the Ribbon, `start` and `end` follow text direction (RTL or LTR) | `start` \| `end` | `end` |  |
| text | Content inside the Ribbon | ReactNode | - |  |