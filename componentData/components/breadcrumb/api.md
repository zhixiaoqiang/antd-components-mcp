## API
### Breadcrumb
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route, params, routes, paths) => ReactNode | - |  |
| params | 路由的参数 | object | - |  |
| items | 路由栈信息 | [items\[\]](#itemtype) | - | 5.3.0 |
| separator | 分隔符自定义 | ReactNode | `/` |  |
### ItemType
> type ItemType = Omit<[RouteItemType](#routeitemtype), 'title' | 'path'> | [SeparatorType](#separatortype)
### RouteItemType
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| className | 自定义类名 | string | - |  |
| dropdownProps | 弹出下拉菜单的自定义配置 | [Dropdown](/components/dropdown-cn) | - |  |
| href | 链接的目的地，不能和 `path` 共用 | string | - |  |
| path | 拼接路径，每一层都会拼接前一个 `path` 信息。不能和 `href` 共用 | string | - |  |
| menu | 菜单配置项 | [MenuProps](/components/menu-cn/#api) | - | 4.24.0 |
| onClick | 单击事件 | (e:MouseEvent) => void | - |  |
| title | 名称 | ReactNode | - | 5.3.0 |
### SeparatorType
```ts
const item = {
  type: 'separator', // Must have
  separator: '/',
};
```
| 参数      | 说明           | 类型        | 默认值 | 版本  |
| --------- | -------------- | ----------- | ------ | ----- |
| type      | 标记为分隔符   | `separator` |        | 5.3.0 |
| separator | 要显示的分隔符 | ReactNode   | `/`    | 5.3.0 |
### 和 browserHistory 配合
和 react-router 一起使用时，默认生成的 url 路径是带有 `#` 的，如果和 browserHistory 一起使用的话，你可以使用 `itemRender` 属性定义面包屑链接。
```jsx
import { Link } from 'react-router';
const items = [
  {
    path: '/index',
    title: 'home',
  },
  {
    path: '/first',
    title: 'first',
    children: [
      {
        path: '/general',
        title: 'General',
      },
      {
        path: '/layout',
        title: 'Layout',
      },
      {
        path: '/navigation',
        title: 'Navigation',
      },
    ],
  },
  {
    path: '/second',
    title: 'second',
  },
];
function itemRender(currentRoute, params, items, paths) {
  const isLast = currentRoute?.path === items[items.length - 1]?.path;
  return isLast ? (
    <span>{currentRoute.title}</span>
  ) : (
    <Link to={`/${paths.join('/')}`}>{currentRoute.title}</Link>
  );
}
return <Breadcrumb itemRender={itemRender} items={items} />;
```