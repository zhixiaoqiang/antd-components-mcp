## API


### Menu

| Param | Description | Type | Default value | Version |
| --- | --- | --- | --- | --- |
| defaultOpenKeys | Array with the keys of default opened sub menus | string\[] | - |  |
| defaultSelectedKeys | Array with the keys of default selected menu items | string\[] | - |  |
| expandIcon | custom expand icon of submenu | ReactNode \| `(props: SubMenuProps & { isSubMenu: boolean }) => ReactNode` | - | 4.9.0 |
| forceSubMenuRender | Render submenu into DOM before it becomes visible | boolean | false |  |
| inlineCollapsed | Specifies the collapsed status when menu is inline mode | boolean | - |  |
| inlineIndent | Indent (in pixels) of inline menu items on each level | number | 24 |  |
| items | Menu item content | [ItemType\[\]](#itemtype) | - | 4.20.0 |
| mode | Type of menu | `vertical` \| `horizontal` \| `inline` | `vertical` |  |
| multiple | Allows selection of multiple items | boolean | false |  |
| openKeys | Array with the keys of currently opened sub-menus | string\[] | - |  |
| overflowedIndicator | Customized the ellipsis icon when menu is collapsed horizontally | ReactNode | `<EllipsisOutlined />` |  |
| selectable | Allows selecting menu items | boolean | true |  |
| selectedKeys | Array with the keys of currently selected menu items | string\[] | - |  |
| style | Style of the root node | CSSProperties | - |  |
| subMenuCloseDelay | Delay time to hide submenu when mouse leaves (in seconds) | number | 0.1 |  |
| subMenuOpenDelay | Delay time to show submenu when mouse enters, (in seconds) | number | 0 |  |
| theme | Color theme of the menu | `light` \| `dark` | `light` |  |
| triggerSubMenuAction | Which action can trigger submenu open/close | `hover` \| `click` | `hover` |  |
| onClick | Called when a menu item is clicked | function({ item, key, keyPath, domEvent }) | - |  |
| onDeselect | Called when a menu item is deselected (multiple mode only) | function({ item, key, keyPath, selectedKeys, domEvent }) | - |  |
| onOpenChange | Called when sub-menus are opened or closed | function(openKeys: string\[]) | - |  |
| onSelect | Called when a menu item is selected | function({ item, key, keyPath, selectedKeys, domEvent }) | - |  |

> More options in [rc-menu](https://github.com/react-component/menu#api)

### ItemType

> type ItemType = [MenuItemType](#menuitemtype) | [SubMenuType](#submenutype) | [MenuItemGroupType](#menuitemgrouptype) | [MenuDividerType](#menudividertype);

#### MenuItemType

| Param    | Description                          | Type      | Default value | Version |
| -------- | ------------------------------------ | --------- | ------------- | ------- |
| danger   | Display the danger style             | boolean   | false         |         |
| disabled | Whether menu item is disabled        | boolean   | false         |         |
| extra    | The extra of the menu item           | ReactNode | -             | 5.21.0  |
| icon     | The icon of the menu item            | ReactNode | -             |         |
| key      | Unique ID of the menu item           | string    | -             |         |
| label    | Menu label                           | ReactNode | -             |         |
| title    | Set display title for collapsed item | string    | -             |         |

#### SubMenuType

<!-- prettier-ignore -->
| Property | Description | Type | Default value | Version |
| --- | --- | --- | --- | --- |
| children | Sub-menus or sub-menu items | [ItemType\[\]](#itemtype) | - |  |
| disabled | Whether sub-menu is disabled | boolean | false |  |
| icon | Icon of sub menu | ReactNode | - |  |
| key | Unique ID of the sub-menu | string | - |  |
| label | Menu label | ReactNode | - |  |
| popupClassName | Sub-menu class name, not working when `mode="inline"` | string | - |  |
| popupOffset | Sub-menu offset, not working when `mode="inline"` | \[number, number] | - |  |
| theme | Color theme of the SubMenu (inherits from Menu by default) |  | `light` \| `dark` | - |  |
| onTitleClick | Callback executed when the sub-menu title is clicked | function({ key, domEvent }) | - |  |

#### MenuItemGroupType

Define `type` as `group` to make as group:

```ts
const groupItem = {
  type: 'group', // Must have
  label: 'My Group',
  children: [],
};
```

| Param    | Description            | Type                              | Default value | Version |
| -------- | ---------------------- | --------------------------------- | ------------- | ------- |
| children | Sub-menu items         | [MenuItemType\[\]](#menuitemtype) | -             |         |
| label    | The title of the group | ReactNode                         | -             |         |

#### MenuDividerType

Divider line in between menu items, only used in vertical popup Menu or Dropdown Menu. Need define the `type` as `divider`：

```ts
const dividerItem = {
  type: 'divider', // Must have
};
```

| Param  | Description            | Type    | Default value | Version |
| ------ | ---------------------- | ------- | ------------- | ------- |
| dashed | Whether line is dashed | boolean | false         |         |