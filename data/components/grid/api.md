## API


If the Ant Design grid layout component does not meet your needs, you can use the excellent layout components of the community:

- [react-flexbox-grid](http://roylee0704.github.io/react-flexbox-grid/)
- [react-blocks](https://github.com/whoisandy/react-blocks/)

### Row

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | Vertical alignment | `top` \| `middle` \| `bottom` \| `stretch` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'top' \| 'middle' \| 'bottom' \| 'stretch'}` | `top` | object: 4.24.0 |
| gutter | Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]` | number \| object \| array | 0 |  |
| justify | Horizontal arrangement | `start` \| `end` \| `center` \| `space-around` \| `space-between` \| `space-evenly` \| `{[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'}` | `start` | object: 4.24.0 |
| wrap | Auto wrap line | boolean | true | 4.8.0 |

### Col

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| flex | Flex layout style | string \| number | - |  |
| offset | The number of cells to offset Col from the left | number | 0 |  |
| order | Raster order | number | 0 |  |
| pull | The number of cells that raster is moved to the left | number | 0 |  |
| push | The number of cells that raster is moved to the right | number | 0 |  |
| span | Raster number of cells to occupy, 0 corresponds to `display: none` | number | none |  |
| xs | `screen < 576px` and also default setting, could be a `span` value or an object containing above props | number \| object | - |  |
| sm | `screen ≥ 576px`, could be a `span` value or an object containing above props | number \| object | - |  |
| md | `screen ≥ 768px`, could be a `span` value or an object containing above props | number \| object | - |  |
| lg | `screen ≥ 992px`, could be a `span` value or an object containing above props | number \| object | - |  |
| xl | `screen ≥ 1200px`, could be a `span` value or an object containing above props | number \| object | - |  |
| xxl | `screen ≥ 1600px`, could be a `span` value or an object containing above props | number \| object | - |  |

You can modify the breakpoints values using by modifying `screen[XS|SM|MD|LG|XL|XXL]` with [theme customization](/docs/react/customize-theme) (since 5.1.0, [sandbox demo](https://codesandbox.io/s/antd-reproduction-template-forked-dlq3r9?file=/index.js)).

The breakpoints of responsive grid follow [BootStrap 4 media queries rules](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints) (not including `occasionally part`).