## API


```jsx
<Card title="Card title">Card content</Card>
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| actions | The action list, shows at the bottom of the Card | Array&lt;ReactNode> | - |  |
| activeTabKey | Current TabPane's key | string | - |  |
| ~~bordered~~ | Toggles rendering of the border around the card, please use `variant` instead | boolean | true |  |
| variant | Variants of Card | `outlined` \| `borderless` \| | `outlined` | 5.24.0 |
| cover | Card cover | ReactNode | - |  |
| defaultActiveTabKey | Initial active TabPane's key, if `activeTabKey` is not set | string | `The key of first tab` |  |
| extra | Content to render in the top-right corner of the card | ReactNode | - |  |
| hoverable | Lift up when hovering card | boolean | false |  |
| loading | Shows a loading indicator while the contents of the card are being fetched | boolean | false |  |
| size | Size of card | `default` \| `small` | `default` |  |
| tabBarExtraContent | Extra content in tab bar | ReactNode | - |  |
| tabList | List of TabPane's head | [TabItemType](/components/tabs#tabitemtype)[] | - |  |
| tabProps | [Tabs](/components/tabs/#tabs) | - | - |  |
| title | Card title | ReactNode | - |  |
| type | Card style type, can be set to `inner` or not set | string | - |  |
| classNames | Config Card build-in module's className | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.14.0 |
| styles | Config Card build-in module's style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.14.0 |
| onTabChange | Callback when tab is switched | (key) => void | - |  |

### Card.Grid

| Property  | Description                     | Type          | Default | Version |
| --------- | ------------------------------- | ------------- | ------- | ------- |
| className | The className of container      | string        | -       |         |
| hoverable | Lift up when hovering card grid | boolean       | true    |         |
| style     | The style object of container   | CSSProperties | -       |         |

### Card.Meta

| Property    | Description                   | Type          | Default | Version |
| ----------- | ----------------------------- | ------------- | ------- | ------- |
| avatar      | Avatar or icon                | ReactNode     | -       |         |
| className   | The className of container    | string        | -       |         |
| description | Description content           | ReactNode     | -       |         |
| style       | The style object of container | CSSProperties | -       |         |
| title       | Title content                 | ReactNode     | -       |         |