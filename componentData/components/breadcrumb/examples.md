## Breadcrumb 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Breadcrumb } from 'antd';
const App: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: 'An Application',
        },
      ]}
    />
  );
};
export default App;
```
### 带有图标的
图标放在文字前面。

```tsx
import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
);
export default App;
```
### 带有参数的
带有路由参数的。

```tsx
import React from 'react';
import { Breadcrumb } from 'antd';
const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: 'Users',
      },
      {
        title: ':id',
        href: '',
      },
    ]}
    params={{ id: 1 }}
  />
);
export default App;
```
### 分隔符
使用 `separator=">"` 可以自定义分隔符。

```tsx
import React from 'react';
import { Breadcrumb } from 'antd';
const App: React.FC = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Application Center',
        href: '',
      },
      {
        title: 'Application List',
        href: '',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
```
### 带下拉菜单的面包屑
面包屑支持下拉菜单。

```tsx
import React from 'react';
import { Breadcrumb } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const App: React.FC = () => (
  <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">Component</a>,
      },
      {
        title: <a href="">General</a>,
        menu: { items: menuItems },
      },
      {
        title: 'Button',
      },
    ]}
  />
);
export default App;
```
### 独立的分隔符
自定义单独的分隔符。

```tsx
import React from 'react';
import { Breadcrumb } from 'antd';
const App: React.FC = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Breadcrumb 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Breadcrumb, Flex } from 'antd';
import type { BreadcrumbProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 8px;
    border-radius: 4px;
  `,
  item: css`
    color: #1890ff;
  `,
  separator: css`
    color: rgba(0, 0, 0, 0.45);
  `,
}));
const styles: BreadcrumbProps['styles'] = {
  root: { border: '1px solid #f0f0f0', padding: 8, borderRadius: 4 },
  item: { color: '#1890ff' },
  separator: { color: 'rgba(0, 0, 0, 0.45)' },
};
const stylesFn: BreadcrumbProps['styles'] = (info) => {
  const items = info.props.items || [];
  if (items.length > 2) {
    return {
      root: { border: '1px solid #F5EFFF', padding: 8, borderRadius: 4 },
      item: { color: '#8F87F1' },
    } satisfies BreadcrumbProps['styles'];
  }
  return {};
};
const items = [
  { title: 'Ant Design' },
  { title: <a href="">Component</a> },
  { title: 'Breadcrumb' },
];
const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <Breadcrumb
        classNames={classNames}
        items={items.slice(0, 2)}
        styles={styles}
        aria-label="Breadcrumb with Object"
      />
      <Breadcrumb
        classNames={classNames}
        items={items}
        styles={stylesFn}
        aria-label="Breadcrumb with Function"
      />
    </Flex>
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, ConfigProvider } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Breadcrumb: {
          itemColor: '#b02121',
          lastItemColor: '#0f3a88',
          iconFontSize: 28,
          linkColor: '#979a42',
          linkHoverColor: '#9450c0',
          separatorColor: '#b41b60',
          separatorMargin: 22,
        },
      },
    }}
  >
    <Breadcrumb
      separator=">"
      items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">General</a>,
          menu: { items: menuItems },
        },
        {
          title: 'Application Center',
          href: '',
        },
        {
          href: '',
          title: <HomeOutlined />,
        },
        {
          href: '',
          title: (
            <>
              <UserOutlined />
              <span>Application List</span>
            </>
          ),
        },
      ]}
    />
  </ConfigProvider>
);
```
