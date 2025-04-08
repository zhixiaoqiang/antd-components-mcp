## API

> This component is available since `antd@5.10.0`. The default behavior of Flex in horizontal mode is to align upward, In vertical mode, aligns the stretch, You can adjust this via properties.


| Property | Description | type | Default | Version |
| --- | --- | --- | --- | --- |
| vertical | Is direction of the flex vertical, use `flex-direction: column` | boolean | `false` |  |
| wrap | Set whether the element is displayed in a single line or in multiple lines | [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) \| boolean | nowrap | boolean: 5.17.0 |
| justify | Sets the alignment of elements in the direction of the main axis | [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | normal |  |
| align | Sets the alignment of elements in the direction of the cross axis | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | normal |  |
| flex | flex CSS shorthand properties | [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) | normal |  |
| gap | Sets the gap between grids | `small` \| `middle` \| `large` \| string \| number | - |  |
| component | custom element type | React.ComponentType | `div` |  |