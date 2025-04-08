## API


### Descriptions

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bordered | Whether to display the border | boolean | false |  |
| colon | Change default props `colon` value of Descriptions.Item. Indicates whether the colon after the label is displayed | boolean | true |  |
| column | The number of `DescriptionItems` in a row,could be a number or a object like `{ xs: 8, sm: 16, md: 24}`,(Only set `bordered={true}` to take effect) | number \| [Record<Breakpoint, number>](https://github.com/ant-design/ant-design/blob/84ca0d23ae52e4f0940f20b0e22eabe743f90dca/components/descriptions/index.tsx#L111C21-L111C56) | 3 |  |
| ~~contentStyle~~ | Customize content style, Please use `styles={{ content: {} }}` instead | CSSProperties | - | 4.10.0 |
| extra | The action area of the description list, placed at the top-right | ReactNode | - | 4.5.0 |
| items | Describe the contents of the list item | [DescriptionsItem](#descriptionitem)[] | - | 5.8.0 |
| ~~labelStyle~~ | Customize label style | CSSProperties, Please use `styles={{ label: {} }}` instead | - | 4.10.0 |
| layout | Define description layout | `horizontal` \| `vertical` | `horizontal` |  |
| size | Set the size of the list. Can be set to `middle`,`small`, or not filled | `default` \| `middle` \| `small` | - |  |
| title | The title of the description list, placed at the top | ReactNode | - |  |
| classNames | Semantic DOM class | [Record<SemanticDOM, string>](#semantic-dom) | - | 5.23.0 |
| styles | Semantic DOM style | [Record<SemanticDOM, CSSProperties>](#semantic-dom) | - | 5.23.0 |

### DescriptionItem

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| ~~contentStyle~~ | Customize content style, Please use `styles={{ content: {} }}` instead | CSSProperties | - | 4.9.0 |
| label | The description of the content | ReactNode | - |  |
| ~~labelStyle~~ | Customize label style, Please use `styles={{ label: {} }}` instead | CSSProperties | - | 4.9.0 |
| span | The number of columns included(`filled` Fill the remaining part of the current row) | number \| `filled` \| [Screens](/components/grid#col) | 1 | `screens: 5.9.0`, `filled: 5.22.0` |

> The number of span Description.Item. Span={2} takes up the width of two DescriptionItems. When both `style` and `labelStyle`(or `contentStyle`) configured, both of them will work. And next one will overwrite first when conflict.