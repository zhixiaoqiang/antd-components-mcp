## API


Properties that shared by all types.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| format | The template function of the content | function(percent, successPercent) | (percent) => percent + `%` | - |
| percent | To set the completion percentage | number | 0 | - |
| showInfo | Whether to display the progress value and the status icon | boolean | true |
| status | To set the status of the Progress, options: `success` `exception` `normal` `active`(line only) | string | - |
| strokeColor | The color of progress bar | string | - | - |
| strokeLinecap | To set the style of the progress linecap | `round` \| `butt` \| `square`, see [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) | `round` | - |
| success | Configs of successfully progress bar | { percent: number, strokeColor: string } | - | - |
| trailColor | The color of unfilled part | string | - | - |
| type | To set the type, options: `line` `circle` `dashboard` | string | `line` |
| size | Progress size | number \| \[number \| string, number] \| { width: number, height: number } \| "small" \| "default" | "default" | 5.3.0, Object: 5.18.0 |

### `type="line"`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| steps | The total step count | number | - | - |
| rounding | The function to round the value | (step: number) => number | Math.round | 5.24.0 |
| strokeColor | The color of progress bar, render `linear-gradient` when passing an object, could accept `string[]` when has `steps`. | string \| string[] \| { from: string; to: string; direction: string } | - | 4.21.0: `string[]` |
| percentPosition | Progress value position, passed in object, `align` indicates the horizontal position of the value, `type` indicates whether the value is inside or outside the progress bar | { align: string; type: string } | { align: \"end\", type: \"outer\" } | 5.18.0 |

### `type="circle"`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| steps | The total step count.When passing an object, `count` refers to the number of steps, and `gap` refers to the distance between them.When passing number, the default value for `gap` is 2. | number \| { count: number, gap: number } | - | 5.16.0 |
| strokeColor | The color of circular progress, render gradient when passing an object | string \| { number%: string } | - | - |
| strokeWidth | To set the width of the circular progress, unit: percentage of the canvas width | number | 6 | - |

### `type="dashboard"`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| steps | The total step count.When passing an object, `count` refers to the number of steps, and `gap` refers to the distance between them.When passing number, the default value for `gap` is 2. | number \| { count: number, gap: number } | - | 5.16.0 |
| gapDegree | The gap degree of half circle, 0 ~ 295 | number | 75 |
| gapPosition | The gap position, options: `top` `bottom` `left` `right` | string | `bottom` |
| strokeWidth | To set the width of the dashboard progress, unit: percentage of the canvas width | number | 6 |