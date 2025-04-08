## API


### Tree props

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowDrop | Whether to allow dropping on the node | ({ dropNode, dropPosition }) => boolean | - |  |
| autoExpandParent | Whether to automatically expand a parent treeNode | boolean | false |  |
| blockNode | Whether treeNode fill remaining horizontal space | boolean | false |  |
| checkable | Add a Checkbox before the treeNodes | boolean | false |  |
| checkedKeys | (Controlled) Specifies the keys of the checked treeNodes (PS: When this specifies the key of a treeNode which is also a parent treeNode, all the children treeNodes of will be checked; and vice versa, when it specifies the key of a treeNode which is a child treeNode, its parent treeNode will also be checked. When `checkable` and `checkStrictly` is true, its object has `checked` and `halfChecked` property. Regardless of whether the child or parent treeNode is checked, they won't impact each other | string\[] \| {checked: string\[], halfChecked: string\[]} | \[] |  |
| checkStrictly | Check treeNode precisely; parent treeNode and children treeNodes are not associated | boolean | false |  |
| defaultCheckedKeys | Specifies the keys of the default checked treeNodes | string\[] | \[] |  |
| defaultExpandAll | Whether to expand all treeNodes by default | boolean | false |  |
| defaultExpandedKeys | Specify the keys of the default expanded treeNodes | string\[] | \[] |  |
| defaultExpandParent | If auto expand parent treeNodes when init | boolean | true |  |
| defaultSelectedKeys | Specifies the keys of the default selected treeNodes | string\[] | \[] |  |
| disabled | Whether disabled the tree | boolean | false |  |
| draggable | Specifies whether this Tree or the node is draggable. Use `icon: false` to disable drag handler icon | boolean \| ((node: DataNode) => boolean) \| { icon?: React.ReactNode \| false, nodeDraggable?: (node: DataNode) => boolean } | false | `config`: 4.17.0 |
| expandedKeys | (Controlled) Specifies the keys of the expanded treeNodes | string\[] | \[] |  |
| fieldNames | Customize node title, key, children field name | object | { title: `title`, key: `key`, children: `children` } | 4.17.0 |
| filterTreeNode | Defines a function to filter (highlight) treeNodes. When the function returns `true`, the corresponding treeNode will be highlighted | function(node) | - |  |
| height | Config virtual scroll height. Will not support horizontal scroll when enable this | number | - |  |
| icon | Insert a custom icon before the title. Need to set `showIcon` to true | ReactNode \| (props) => ReactNode | - |  |
| loadData | Load data asynchronously | function(node) | - |  |
| loadedKeys | (Controlled) Set loaded tree nodes. Need work with `loadData` | string\[] | \[] |  |
| multiple | Allows selecting multiple treeNodes | boolean | false |  |
| rootStyle | Style on the root element | CSSProperties | - | 4.20.0 |
| selectable | Whether can be selected | boolean | true |  |
| selectedKeys | (Controlled) Specifies the keys of the selected treeNodes, multiple selection needs to set `multiple` to true | string\[] | - |  |
| showIcon | Controls whether to display the `icon` node, no default style | boolean | false |  |
| showLine | Shows a connecting line | boolean \| {showLeafIcon: ReactNode \| ((props: AntTreeNodeProps) => ReactNode)} | false |  |
| switcherIcon | Customize expand/collapse icons for tree nodes (With default rotate angular style) | ReactNode \| ((props: AntTreeNodeProps) => ReactNode) | - | renderProps: 4.20.0 |
| switcherLoadingIcon | Customize loading icons for tree nodes | ReactNode | - | 5.20.0 |
| titleRender | Customize tree node title render | (nodeData) => ReactNode | - | 4.5.0 |
| treeData | The treeNodes data Array, if set it then you need not to construct children TreeNode. (key should be unique across the whole array) | array&lt;{ key, title, children, \[disabled, selectable] }> | - |  |
| virtual | Disable virtual scroll when set to false | boolean | true | 4.1.0 |
| onCheck | Callback function for when the onCheck event occurs | function(checkedKeys, e:{checked: boolean, checkedNodes, node, event, halfCheckedKeys}) | - |  |
| onDragEnd | Callback function for when the onDragEnd event occurs | function({event, node}) | - |  |
| onDragEnter | Callback function for when the onDragEnter event occurs | function({event, node, expandedKeys}) | - |  |
| onDragLeave | Callback function for when the onDragLeave event occurs | function({event, node}) | - |  |
| onDragOver | Callback function for when the onDragOver event occurs | function({event, node}) | - |  |
| onDragStart | Callback function for when the onDragStart event occurs | function({event, node}) | - |  |
| onDrop | Callback function for when the onDrop event occurs | function({event, node, dragNode, dragNodesKeys}) | - |  |
| onExpand | Callback function for when a treeNode is expanded or collapsed | function(expandedKeys, {expanded: boolean, node}) | - |  |
| onLoad | Callback function for when a treeNode is loaded | function(loadedKeys, {event, node}) | - |  |
| onRightClick | Callback function for when the user right clicks a treeNode | function({event, node}) | - |  |
| onSelect | Callback function for when the user clicks a treeNode | function(selectedKeys, e:{selected: boolean, selectedNodes, node, event}) | - |  |

### TreeNode props

| Property | Description | Type | Default |  |
| --- | --- | --- | --- | --- |
| checkable | When Tree is checkable, set TreeNode display Checkbox or not | boolean | - |  |
| disableCheckbox | Disables the checkbox of the treeNode | boolean | false |  |
| disabled | Disables the treeNode | boolean | false |  |
| icon | Customize icon. When you pass component, whose render will receive full TreeNode props as component props | ReactNode \| (props) => ReactNode | - |  |
| isLeaf | Determines if this is a leaf node(effective when `loadData` is specified). `false` will force trade TreeNode as a parent node | boolean | - |  |
| key | Used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys. P.S.: It must be unique in all of treeNodes of the tree | string | (internal calculated position of treeNode) |  |
| selectable | Set whether the treeNode can be selected | boolean | true |  |
| title | Title | ReactNode | `---` |  |

### DirectoryTree props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| expandAction | Directory open logic, optional: false \| `click` \| `doubleClick` | string \| boolean | `click` |