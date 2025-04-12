## 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。
## API
各类型共用的属性。
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| format | 内容的模板函数 | function(percent, successPercent) | (percent) => percent + `%` | - |
| percent | 百分比 | number | 0 | - |
| showInfo | 是否显示进度数值或状态图标 | boolean | true | - |
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string | - | - |
| strokeColor | 进度条的色彩 | string | - | - |
| strokeLinecap | 进度条的样式 | `round` \| `butt` \| `square`，区别详见 [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) | `round` | - |
| success | 成功进度条相关配置 | { percent: number, strokeColor: string } | - | - |
| trailColor | 未完成的分段的颜色 | string | - | - |
| type | 类型，可选 `line` `circle` `dashboard` | string | `line` | - |
| size | 进度条的尺寸 | number \| \[number \| string, number] \| { width: number, height: number } \| "small" \| "default" | "default" | 5.3.0, Object: 5.18.0 |
### `type="line"`
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| steps | 进度条总共步数 | number | - | - |
| rounding | 用于四舍五入数值的函数 | (step: number) => number | Math.round | 5.24.0 |
| strokeColor | 进度条的色彩，传入 object 时为渐变。当有 `steps` 时支持传入一个数组。 | string \| string[] \| { from: string; to: string; direction: string } | - | 4.21.0: `string[]` |
| percentPosition | 进度数值位置，传入对象，`align` 表示数值的水平位置，`type` 表示数值在进度条内部还是外部 | { align: string; type: string } | { align: \"end\", type: \"outer\" } | 5.18.0 |
### `type="circle"`
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| steps | 进度条总共步数，传入 object 时，count 指步数，gap 指间隔大小。传 number 类型时，gap 默认为 2。 | number \| { count: number, gap: number } | - | 5.16.0 |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变 | string \| { number%: string } | - | - |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | - |
### `type="dashboard"`
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| steps | 进度条总共步数，传入 object 时，count 指步数，gap 指间隔大小。传 number 类型时，gap 默认为 2。 | number \| { count: number, gap: number } | - | 5.16.0 |
| gapDegree | 仪表盘进度条缺口角度，可取值 0 ~ 295 | number | 75 | - |
| gapPosition | 仪表盘进度条缺口位置 | `top` \| `bottom` \| `left` \| `right` | `bottom` | - |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number | 6 | - |
