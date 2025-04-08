## API


### Anchor Props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| affix | Fixed mode of Anchor | boolean \| Omit<AffixProps, 'offsetTop' \| 'target' \| 'children'> | true | object: 5.19.0 |
| bounds | Bounding distance of anchor area | number | 5 |  |
| getContainer | Scrolling container | () => HTMLElement | () => window |  |
| getCurrentAnchor | Customize the anchor highlight | (activeLink: string) => string | - |  |
| offsetTop | Pixels to offset from top when calculating position of scroll | number | 0 |  |
| showInkInFixed | Whether show ink-square when `affix={false}` | boolean | false |  |
| targetOffset | Anchor scroll offset, default as `offsetTop`, [example](#anchor-demo-targetoffset) | number | - |  |
| onChange | Listening for anchor link change | (currentActiveLink: string) => void |  |  |
| onClick | Set the handler to handle `click` event | (e: MouseEvent, link: object) => void | - |  |
| items | Data configuration option content, support nesting through children | { key, href, title, target, children }\[] [see](#anchoritem) | - | 5.1.0 |
| direction | Set Anchor direction | `vertical` \| `horizontal` | `vertical` | 5.2.0 |
| replace | Replace items' href in browser history instead of pushing it | boolean | false | 5.7.0 |

### AnchorItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | The unique identifier of the Anchor Link | string \| number | - |  |
| href | The target of hyperlink | string |  |  |
| target | Specifies where to display the linked URL | string |  |  |
| title | The content of hyperlink | ReactNode |  |  |
| children | Nested Anchor Link, `Attention: This attribute does not support horizontal orientation` | [AnchorItem](#anchoritem)\[] | - |  |
| replace | Replace item href in browser history instead of pushing it | boolean | false | 5.7.0 |

### Link Props

We recommend using the items form instead.

| Property | Description                               | Type      | Default | Version |
| -------- | ----------------------------------------- | --------- | ------- | ------- |
| href     | The target of hyperlink                   | string    |         |         |
| target   | Specifies where to display the linked URL | string    |         |         |
| title    | The content of hyperlink                  | ReactNode |         |         |