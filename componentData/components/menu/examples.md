## Menu 组件示例
### 顶部导航
水平的顶部导航菜单。

```tsx
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];
const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default App;
```
### 顶部导航（dark）
水平的顶部导航菜单。

```tsx
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];
const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme="dark" />
  );
};
export default App;
```
### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。

```tsx
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];
const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default App;
```
### 缩起内嵌菜单
内嵌菜单可以被缩起/展开。
你可以在 [Layout](/components/layout-cn/#layout-demo-side) 里查看侧边布局结合的完整示例。

```tsx
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Option 1' },
  { key: '2', icon: <DesktopOutlined />, label: 'Option 2' },
  { key: '3', icon: <ContainerOutlined />, label: 'Option 3' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default App;
```
### 只展开当前父级菜单
点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

```tsx
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      { key: '11', label: 'Option 1' },
      { key: '12', label: 'Option 2' },
      { key: '13', label: 'Option 3' },
      { key: '14', label: 'Option 4' },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      { key: '21', label: 'Option 1' },
      { key: '22', label: 'Option 2' },
      {
        key: '23',
        label: 'Submenu',
        children: [
          { key: '231', label: 'Option 1' },
          { key: '232', label: 'Option 2' },
          { key: '233', label: 'Option 3' },
        ],
      },
      {
        key: '24',
        label: 'Submenu 2',
        children: [
          { key: '241', label: 'Option 1' },
          { key: '242', label: 'Option 2' },
          { key: '243', label: 'Option 3' },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: 'Navigation Three',
    children: [
      { key: '31', label: 'Option 1' },
      { key: '32', label: 'Option 2' },
      { key: '33', label: 'Option 3' },
      { key: '34', label: 'Option 4' },
    ],
  },
];
interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}
const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items as LevelKeysProps[]);
const App: React.FC = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
};
export default App;
```
### 垂直菜单
子菜单是弹出的形式。

```tsx
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1-1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
      {
        key: '1-2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];
const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
const App: React.FC = () => (
  <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} />
);
export default App;
```
### 主题
内建了两套主题 `light` 和 `dark`，默认 `light`。

```tsx
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
];
const App: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};
export default App;
```
### 子菜单主题
你可以通过 `theme` 属性来设置 SubMenu 的主题从而达到不同目录树下不同主题色的效果。该例子默认为根目录深色，子目录浅色效果。

```tsx
import React, { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const App: React.FC = () => {
  const [menuTheme, setMenuTheme] = useState<MenuTheme>('light');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? 'dark' : 'light');
  };
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  const items: MenuItem[] = [
    {
      key: 'sub1',
      icon: <MailOutlined />,
      label: 'Navigation One',
      theme: menuTheme,
      children: [
        { key: '1', label: 'Option 1' },
        { key: '2', label: 'Option 2' },
        { key: '3', label: 'Option 3' },
      ],
    },
    { key: '5', label: 'Option 5' },
    { key: '6', label: 'Option 6' },
  ];
  return (
    <>
      <Switch
        checked={menuTheme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
        getPopupContainer={(node) => node.parentNode as HTMLElement}
      />
    </>
  );
};
export default App;
```
### 切换菜单类型
展示动态切换模式。

```tsx
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { GetProp, MenuProps } from 'antd';
type MenuTheme = GetProp<MenuProps, 'theme'>;
type MenuItem = GetProp<MenuProps, 'items'>[number];
const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];
const App: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');
  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider vertical />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Menu 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 1px solid #f0f0f0;
    max-width: 600px;
    padding: 8px;
    border-radius: 4px;
  `,
  item: css`
    color: #1677ff;
  `,
}));
const items: Required<MenuProps>['items'] = [
  {
    key: 'SubMenu',
    label: 'Navigation One',
    children: [
      {
        key: 'g1',
        label: 'Item 1',
        type: 'group',
        children: [
          { key: '1', label: 'Option 1' },
          { key: '2', label: 'Option 2' },
        ],
      },
    ],
  },
  { key: 'mail', label: 'Navigation Two' },
];
const styles: MenuProps['styles'] = {
  root: { border: '1px solid #f0f0f0', padding: 8, borderRadius: 4 },
  item: { color: '#1677ff' },
  subMenu: { list: { color: '#fa541c' } },
};
const stylesFn: MenuProps['styles'] = (info) => {
  const hasSub = info.props.items?.[0];
  return {
    root: {
      backgroundColor: hasSub ? 'rgba(240,249,255, 0.6)' : 'rgba(255,255,255)',
    },
  } satisfies MenuProps['styles'];
};
const App: React.FC = () => {
  const shareProps: MenuProps = {
    classNames,
    items,
  };
  return (
    <Flex vertical gap="middle">
      <Menu {...shareProps} styles={styles} />
      <Menu mode="inline" {...shareProps} styles={stylesFn} />
    </Flex>
  );
};
export default App;
```
### Style debug
buggy!

```tsx
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: 'sub1',
    label: 'Navigation One Long Long Long Long',
    icon: <MailOutlined />,
    children: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  { key: '11', label: 'Option 11' },
  { key: '12', label: 'Option 12' },
];
const App: React.FC = () => {
  const [menuTheme, setMenuTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? 'dark' : 'light');
  };
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <Switch
        checked={menuTheme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={menuTheme}
        onClick={onClick}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineCollapsed
        // Test only. Remove in future.
        _internalRenderMenuItem={(node) =>
          React.cloneElement<any>(node, {
            style: {
              ...(node as any).props.style,
              textDecoration: 'underline',
            },
          })
        }
        // Test only. Remove in future.
        _internalRenderSubMenuItem={(node) =>
          React.cloneElement<any>(node, {
            style: {
              ...(node as any).props.style,
              background: 'rgba(255, 255, 255, 0.3)',
            },
          })
        }
        // Test only. Remove in future.
        _internalDisableMenuItemTitleTooltip
      />
    </>
  );
};
export default App;
```
### v4 版本 Menu
V4 样式的 Menu 组件。

```tsx
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu, Switch, Typography } from 'antd';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Navigation Two',
  },
  {
    key: 'sub1',
    icon: <AppstoreOutlined />,
    label: 'Navigation Two',
    children: [
      {
        key: '3',
        label: (
          <Typography.Text ellipsis>
            Ant Design, a design language for background applications, is refined by Ant UED Team
          </Typography.Text>
        ),
      },
      {
        key: '4',
        label: 'Option 4',
      },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { label: 'Option 7', key: '7' },
      { label: 'Option 8', key: '8' },
      { label: 'Option 9', key: '9' },
      { label: 'Option 10', key: '10' },
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];
const App: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };
  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <br />
      <br />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBorderRadius: 0,
              subMenuItemBorderRadius: 0,
              itemHoverColor: '#1890ff',
              itemSelectedColor: '#1890ff',
              itemSelectedBg: '#e6f7ff',
              activeBarWidth: 3,
              itemMarginInline: 0,
              itemHoverBg: 'transparent',
            },
          },
        }}
      >
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          items={items}
        />
      </ConfigProvider>
    </>
  );
};
export default App;
```
### 组件 Token
组件 Token debug。

```tsx
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { ConfigProvider, Menu, Space, theme } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { label: 'Option 1', key: 'setting:1' },
          { label: 'Option 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { label: 'Option 3', key: 'setting:3' },
          { label: 'Option 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];
const items2: MenuItem[] = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1',
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2',
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label: 'Option 3',
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <Space vertical>
      <ConfigProvider
        theme={{
          algorithm: [theme.darkAlgorithm],
          components: {
            Menu: {
              popupBg: 'yellow',
              darkPopupBg: 'red',
            },
          },
        }}
      >
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed
          items={items2}
          style={{
            width: 56,
          }}
        />
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              horizontalItemBorderRadius: 6,
              popupBg: 'red',
              horizontalItemHoverBg: '#f5f5f5',
            },
          },
        }}
      >
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              darkItemColor: '#91daff',
              darkItemBg: '#d48806',
              darkSubMenuItemBg: '#faad14',
              darkItemSelectedColor: '#ffccc7',
              darkItemSelectedBg: '#52c41a',
            },
          },
        }}
      >
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          items={items2}
          style={{
            width: 256,
          }}
        />
      </ConfigProvider>
    </Space>
  );
};
export default App;
```
### Extra Style debug
调试使用

```tsx
import React from 'react';
import { DownOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Flex, Menu, Space } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
const items1: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: 'Navigation One',
    children: [
      {
        key: '1',
        label: (
          <Flex justify="space-between">
            <span>Option 1</span>
            <DownOutlined />
          </Flex>
        ),
      },
      {
        key: '2',
        label: 'Option 2',
        extra: '⌘P',
      },
      {
        key: '3',
        label: <a href="https://www.baidu.com">Link Option</a>,
        disabled: true,
      },
    ],
  },
];
const items2: MenuItem[] = [
  { key: '1', label: 'Users', extra: '⌘U' },
  { key: '2', label: 'Profile', extra: '⌘P' },
];
const App: React.FC = () => (
  <Space vertical>
    <Menu
      mode="inline"
      defaultOpenKeys={['sub1']}
      defaultSelectedKeys={['1']}
      style={{ width: 256 }}
      items={items1}
    />
    <Menu theme="dark" style={{ width: 256 }} items={items2} />
  </Space>
);
export default App;
```
### 自定义弹出框
使用 `popupRender` 属性自定义弹出菜单的渲染。

```tsx
import React from 'react';
import type { MenuProps } from 'antd';
import { Col, ConfigProvider, Flex, Menu, Row, Space, Typography } from 'antd';
import { createStyles } from 'antd-style';
const { Title, Paragraph } = Typography;
const useStyles = createStyles(({ token }) => ({
  navigationPopup: {
    padding: token.padding,
    minWidth: 480,
    background: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  },
  menuItem: {
    borderRadius: token.borderRadius,
    transition: `all ${token.motionDurationSlow}`,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.02)',
    },
  },
  menuItemSpace: {
    padding: token.paddingSM,
  },
  leadingHeader: {
    margin: '0 !important',
    paddingBottom: token.paddingXS,
    borderBottom: `1px solid ${token.colorSplit}`,
  },
  marginLess: {
    margin: '0 !important',
  },
}));
const MenuItem = ({ title, description }: { title: string; description: string }) => {
  const { styles } = useStyles();
  return (
    <div className={styles.menuItem}>
      <Space vertical size={4} className={styles.menuItemSpace}>
        <Title level={5} className={styles.marginLess}>
          {title}
        </Title>
        <Paragraph type="secondary" className={styles.marginLess}>
          {description}
        </Paragraph>
      </Space>
    </div>
  );
};
const menuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'features',
    label: 'Features',
    children: [
      {
        key: 'getting-started',
        label: (
          <MenuItem title="Getting Started" description="Quick start guide and learn the basics." />
        ),
      },
      {
        key: 'components',
        label: <MenuItem title="Components" description="Explore our component library." />,
      },
      {
        key: 'templates',
        label: <MenuItem title="Templates" description="Ready-to-use template designs." />,
      },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    children: [
      {
        key: 'blog',
        label: <MenuItem title="Blog" description="Latest updates and articles." />,
      },
      {
        key: 'community',
        label: <MenuItem title="Community" description="Join our developer community." />,
      },
    ],
  },
];
const App: React.FC = () => {
  const { styles } = useStyles();
  const popupRender: MenuProps['popupRender'] = (_, { item }) => {
    return (
      <Flex className={styles.navigationPopup} vertical gap="middle">
        <Typography.Title level={3} className={styles.leadingHeader}>
          {item.title}
        </Typography.Title>
        <Row gutter={16}>
          {React.Children.map(item.children as React.ReactNode, (child) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return (
              <Col span={12} key={child.key}>
                {child}
              </Col>
            );
          })}
        </Row>
      </Flex>
    );
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            popupBg: '#fff',
            horizontalItemSelectedColor: '#1677ff',
            horizontalItemHoverColor: '#1677ff',
          },
          Typography: {
            titleMarginBottom: 0,
            titleMarginTop: 0,
          },
        },
      }}
    >
      <Menu mode="horizontal" items={menuItems} popupRender={popupRender} />
    </ConfigProvider>
  );
};
export default App;
```
