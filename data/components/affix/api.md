## API


| Property | Description | Type | Default |
| --- | --- | --- | --- |
| offsetBottom | Offset from the bottom of the viewport (in pixels) | number | - |
| offsetTop | Offset from the top of the viewport (in pixels) | number | 0 |
| target | Specifies the scrollable area DOM node | () => HTMLElement | () => window |
| onChange | Callback for when Affix state is changed | (affixed?: boolean) => void | - |

**Note:** Children of `Affix` must not have the property `position: absolute`, but you can set `position: absolute` on `Affix` itself:

```jsx
<Affix style={{ position: 'absolute', top: y, left: x }}>...</Affix>
```