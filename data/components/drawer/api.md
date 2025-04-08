## API


<!-- prettier-ignore -->
:::info{title=Note}
v5 uses `rootClassName` & `rootStyle` to configure the outermost element style, instead of `className` & `style` from v4. This is done to align the API with Modal.
:::

| Props | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoFocus | Whether Drawer should get focused after open | boolean | true | 4.17.0 |
| afterOpenChange | Callback after the animation ends when switching drawers | function(open) | - |  |
| className | Config Drawer Panel className. Use `rootClassName` if want to config top DOM style | string | - |  |
| classNames | Semantic structure className | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.10.0 |
| closeIcon | Custom close icon. 5.7.0: close button will be hidden when setting to `null` or `false` | ReactNode | &lt;CloseOutlined /> |  |
| destroyOnClose | Whether to unmount child components on closing drawer or not | boolean | false |  |
| extra | Extra actions area at corner | ReactNode | - | 4.17.0 |
| footer | The footer for Drawer | ReactNode | - |  |
| forceRender | Pre-render Drawer component forcibly | boolean | false |  |
| getContainer | mounted node and display window for Drawer | HTMLElement \| () => HTMLElement \| Selectors \| false | body |  |
| headerStyle | Style of the drawer header part | CSSProperties | - |  |
| height | Placement is `top` or `bottom`, height of the Drawer dialog | string \| number | 378 |  |
| keyboard | Whether support press esc to close | boolean | true |  |
| mask | Whether to show mask or not | boolean | true |  |
| maskClosable | Clicking on the mask (area outside the Drawer) to close the Drawer or not | boolean | true |  |
| placement | The placement of the Drawer | `top` \| `right` \| `bottom` \| `left` | `right` |  |
| push | Nested drawers push behavior | boolean \| { distance: string \| number } | { distance: 180 } | 4.5.0+ |
| rootStyle | Style of wrapper element which **contains mask** compare to `style` | CSSProperties | - |  |
| style | Style of Drawer panel. Use `styles.body` if want to config body only | CSSProperties | - |  |
| styles | Semantic structure style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.10.0 |
| size | preset size of drawer, default `378px` and large `736px` | 'default' \| 'large' | 'default' | 4.17.0 |
| title | The title for Drawer | ReactNode | - |  |
| loading | Show the Skeleton | boolean | false | 5.17.0 |
| open | Whether the Drawer dialog is visible or not | boolean | false |  |
| width | Width of the Drawer dialog | string \| number | 378 |  |
| zIndex | The `z-index` of the Drawer | number | 1000 |  |
| onClose | Specify a callback that will be called when a user clicks mask, close button or Cancel button | function(e) | - |  |
| drawerRender | Custom drawer content render | (node: ReactNode) => ReactNode | - | 5.18.0 |