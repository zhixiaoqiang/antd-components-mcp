## API

```jsx
<Layout>
  <Header>header</Header>
  <Layout>
    <Sider>left sidebar</Sider>
    <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
```

### Layout


The wrapper.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| className | Container className | string | - |
| hasSider | Whether contain Sider in children, don't have to assign it normally. Useful in ssr avoid style flickering | boolean | - |
| style | To customize the styles | CSSProperties | - |

### Layout.Sider

The sidebar.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| breakpoint | [Breakpoints](/components/grid/#col) of the responsive layout | `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `xxl` | - |
| className | Container className | string | - |
| collapsed | To set the current status | boolean | - |
| collapsedWidth | Width of the collapsed sidebar, by setting to 0 a special trigger will appear | number | 80 |
| collapsible | Whether can be collapsed | boolean | false |
| defaultCollapsed | To set the initial status | boolean | false |
| reverseArrow | Reverse direction of arrow, for a sider that expands from the right | boolean | false |
| style | To customize the styles | CSSProperties | - |
| theme | Color theme of the sidebar | `light` \| `dark` | `dark` |
| trigger | Specify the customized trigger, set to null to hide the trigger | ReactNode | - |
| width | Width of the sidebar | number \| string | 200 |
| zeroWidthTriggerStyle | To customize the styles of the special trigger that appears when `collapsedWidth` is 0 | object | - |
| onBreakpoint | The callback function, executed when [breakpoints](/components/grid/#api) changed | (broken) => {} | - |
| onCollapse | The callback function, executed by clicking the trigger or activating the responsive layout | (collapsed, type) => {} | - |

#### breakpoint width

```js
{
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
}
```