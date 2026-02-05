## Button 组件示例
### 语法糖
通过 `type` 语法糖，使用预设的按钮样式：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。推荐主按钮在同一个操作区域最多出现一次。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Flex>
);
export default App;
```
### 颜色与变体
同时设置 `color` 和 `variant` 属性，可以衍生出更多的变体按钮。

```tsx
import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';
const App: React.FC = () => {
  const { xxl } = useResponsive();
  return (
    <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
      <Flex vertical gap="small">
        <Flex gap="small" wrap>
          <Button color="default" variant="solid">
            Solid
          </Button>
          <Button color="default" variant="outlined">
            Outlined
          </Button>
          <Button color="default" variant="dashed">
            Dashed
          </Button>
          <Button color="default" variant="filled">
            Filled
          </Button>
          <Button color="default" variant="text">
            Text
          </Button>
          <Button color="default" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="primary" variant="solid">
            Solid
          </Button>
          <Button color="primary" variant="outlined">
            Outlined
          </Button>
          <Button color="primary" variant="dashed">
            Dashed
          </Button>
          <Button color="primary" variant="filled">
            Filled
          </Button>
          <Button color="primary" variant="text">
            Text
          </Button>
          <Button color="primary" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="danger" variant="solid">
            Solid
          </Button>
          <Button color="danger" variant="outlined">
            Outlined
          </Button>
          <Button color="danger" variant="dashed">
            Dashed
          </Button>
          <Button color="danger" variant="filled">
            Filled
          </Button>
          <Button color="danger" variant="text">
            Text
          </Button>
          <Button color="danger" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="pink" variant="solid">
            Solid
          </Button>
          <Button color="pink" variant="outlined">
            Outlined
          </Button>
          <Button color="pink" variant="dashed">
            Dashed
          </Button>
          <Button color="pink" variant="filled">
            Filled
          </Button>
          <Button color="pink" variant="text">
            Text
          </Button>
          <Button color="pink" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="purple" variant="solid">
            Solid
          </Button>
          <Button color="purple" variant="outlined">
            Outlined
          </Button>
          <Button color="purple" variant="dashed">
            Dashed
          </Button>
          <Button color="purple" variant="filled">
            Filled
          </Button>
          <Button color="purple" variant="text">
            Text
          </Button>
          <Button color="purple" variant="link">
            Link
          </Button>
        </Flex>
        <Flex gap="small" wrap>
          <Button color="cyan" variant="solid">
            Solid
          </Button>
          <Button color="cyan" variant="outlined">
            Outlined
          </Button>
          <Button color="cyan" variant="dashed">
            Dashed
          </Button>
          <Button color="cyan" variant="filled">
            Filled
          </Button>
          <Button color="cyan" variant="text">
            Text
          </Button>
          <Button color="cyan" variant="link">
            Link
          </Button>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};
export default App;
```
### 按钮图标
可以通过 `icon`属性添加图标。

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Flex wrap gap="small">
      <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="primary" shape="circle">
        A
      </Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
    </Flex>
    <Flex wrap gap="small">
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button icon={<SearchOutlined />}>Search</Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />}>
        Search
      </Button>
      <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
    </Flex>
  </Flex>
);
export default App;
```
### 按钮图标位置
通过设置 `iconPlacement` 为 `start` 或 `end` 分别设置按钮图标的位置。

```tsx
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';
const App: React.FC = () => {
  const [position, setPosition] = useState<'start' | 'end'>('end');
  return (
    <>
      <Space>
        <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
          <Radio.Button value="start">start</Radio.Button>
          <Radio.Button value="end">end</Radio.Button>
        </Radio.Group>
      </Space>
      <Divider titlePlacement="start" plain>
        Preview
      </Divider>
      <Flex gap="small" vertical>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />} iconPlacement={position}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} iconPlacement={position}>
            Search
          </Button>
        </Flex>
        <Flex wrap gap="small">
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />} type="text" iconPlacement={position}>
            Search
          </Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />} iconPlacement={position}>
            Search
          </Button>
          <Button
            icon={<SearchOutlined />}
            href="https://www.google.com"
            target="_blank"
            iconPlacement={position}
          />
          <Button type="primary" loading iconPlacement={position}>
            Loading
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default App;
```
### 按钮尺寸
按钮有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸默认为中。

```tsx
import React, { useState } from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio } from 'antd';
import type { ConfigProviderProps } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
  return (
    <>
      <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider titlePlacement="start" plain>
        Preview
      </Divider>
      <Flex gap="small" align="flex-start" vertical>
        <Flex gap="small" wrap>
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Default</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
        </Flex>
        <Button type="link" size={size}>
          Link
        </Button>
        <Flex gap="small" wrap>
          <Button type="primary" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
          <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default App;
```
### 不可用状态
添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button>Default</Button>
      <Button disabled>Default(disabled)</Button>
    </Flex>
    <Flex gap="small">
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>
        Dashed(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="text">Text</Button>
      <Button type="text" disabled>
        Text(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link">Link</Button>
      <Button type="link" disabled>
        Link(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="primary" href="https://ant.design/index-cn">
        Href Primary
      </Button>
      <Button type="primary" href="https://ant.design/index-cn" disabled>
        Href Primary(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger>Danger Default</Button>
      <Button danger disabled>
        Danger Default(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button danger type="text">
        Danger Text
      </Button>
      <Button danger type="text" disabled>
        Danger Text(disabled)
      </Button>
    </Flex>
    <Flex gap="small">
      <Button type="link" danger>
        Danger Link
      </Button>
      <Button type="link" danger disabled>
        Danger Link(disabled)
      </Button>
    </Flex>
    <Flex gap="small" className="site-button-ghost-wrapper">
      <Button ghost>Ghost</Button>
      <Button ghost disabled>
        Ghost(disabled)
      </Button>
    </Flex>
  </Flex>
);
export default App;
```
### 加载中状态
添加 `loading` 属性即可让按钮处于加载状态，`loading.icon` 可以自定义加载图标，最后三个按钮演示点击后进入加载状态。

```tsx
import React, { useState } from 'react';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
const App: React.FC = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const enterLoading = (index: number) => {
    console.log('Start loading:', index);
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
  };
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" align="center" wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
        <Button type="primary" loading={{ icon: <SyncOutlined spin /> }}>
          Loading Icon
        </Button>
      </Flex>
      <Flex gap="small" wrap>
        <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
          Icon Start
        </Button>
        <Button
          type="primary"
          loading={loadings[2]}
          onClick={() => enterLoading(2)}
          iconPlacement="end"
        >
          Icon End
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
        >
          Icon Replace
        </Button>
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3]}
          onClick={() => enterLoading(3)}
        />
        <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[3] && { icon: <SyncOutlined spin /> }}
          onClick={() => enterLoading(3)}
        >
          Loading Icon
        </Button>
      </Flex>
    </Flex>
  );
};
export default App;
```
### 多个按钮组合
按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 [Dropdown](/components/dropdown-cn/#dropdown-demo-dropdown-button) 中组合使用。

```tsx
import React from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Flex, Space } from 'antd';
const onMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};
const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];
const App: React.FC = () => (
  <Flex align="flex-start" gap="small" vertical>
    <Button type="primary">primary</Button>
    <Button>secondary</Button>
    <Space.Compact>
      <Button>Actions</Button>
      <Dropdown menu={{ items, onClick: onMenuClick }} placement="bottomRight">
        <Button icon={<EllipsisOutlined />} />
      </Dropdown>
    </Space.Compact>
  </Flex>
);
export default App;
```
### 幽灵按钮
幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const App: React.FC = () => (
  <Flex wrap gap="small" className="site-button-ghost-wrapper">
    <Button type="primary" ghost>
      Primary
    </Button>
    <Button ghost>Default</Button>
    <Button type="dashed" ghost>
      Dashed
    </Button>
    <Button type="primary" danger ghost>
      Danger
    </Button>
  </Flex>
);
export default App;
```
### 危险按钮
在 4.0 之后，危险成为一种按钮属性而不是按钮类型。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const App: React.FC = () => (
  <Flex wrap gap="small">
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
  </Flex>
);
export default App;
```
### Block 按钮
`block` 属性将使按钮适合其父宽度。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="small" style={{ width: '100%' }}>
    <Button type="primary" block>
      Primary
    </Button>
    <Button block>Default</Button>
    <Button type="dashed" block>
      Dashed
    </Button>
    <Button disabled block>
      disabled
    </Button>
    <Button type="text" block>
      text
    </Button>
    <Button type="link" block>
      Link
    </Button>
  </Flex>
);
export default App;
```
### 废弃的 Block 组
Debug usage

```tsx
import React from 'react';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import type { GetProps } from 'antd';
type ButtonGroupProps = GetProps<typeof Button.Group>;
const CustomGroup: React.FC<ButtonGroupProps> = (props) => (
  <Button.Group {...props}>
    <Button type="primary">Button 1</Button>
    <Button type="primary">Button 2</Button>
    <Tooltip title="Tooltip">
      <Button type="primary" icon={<DownloadOutlined />} disabled />
    </Tooltip>
    <Tooltip title="Tooltip">
      <Button type="primary" icon={<DownloadOutlined />} />
    </Tooltip>
  </Button.Group>
);
const App: React.FC = () => (
  <>
    <CustomGroup size="small" />
    <br />
    <CustomGroup />
    <br />
    <CustomGroup size="large" />
  </>
);
export default App;
```
### 加载中状态 bug 还原
https://github.com/ant-design/ant-design/issues/36165

```tsx
import React from 'react';
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
const Text1 = () => <>部署</>;
const Text2 = () => <span>部署</span>;
const Text3 = () => <>Submit</>;
const App: React.FC = () => (
  <Flex wrap gap="small">
    <Button>
      <span>
        <span>部署</span>
      </span>
    </Button>
    <Button loading>部署</Button>
    <Button loading>
      <Text1 />
    </Button>
    <Button loading>
      <Text2 />
    </Button>
    <Button loading>
      <Text3 />
    </Button>
    <Button loading icon={<PoweroffOutlined />}>
      <Text1 />
    </Button>
    <Button loading>按钮</Button>
  </Flex>
);
export default App;
```
### 组件 Token
组件 Token，模仿 MUI 风格的 Button

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Flex } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <div>Component Token</div>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            fontWeight: '900',
            contentFontSizeSM: 20,
            contentFontSize: 30,
            contentFontSizeLG: 40,
            paddingInlineSM: 20,
            paddingInline: 30,
            paddingInlineLG: 40,
          },
        },
      }}
    >
      <Flex gap="small" align="center">
        <Button size="small">Small</Button>
        <Button>Default</Button>
        <Button size="large">Large</Button>
      </Flex>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            dangerColor: 'green',
            dangerShadow: 'yellow',
          },
        },
      }}
    >
      <Flex gap="small" align="center">
        <Button danger>Default</Button>
        <Button danger type="primary">
          Primary
        </Button>
        <Button danger type="dashed">
          Dashed
        </Button>
        <Button danger type="text">
          Text
        </Button>
        <Button danger type="link">
          Link
        </Button>
      </Flex>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            dashedBgDisabled: 'red',
          },
        },
      }}
    >
      <Button type="dashed" disabled>
        Dashed Disabled
      </Button>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultColor: 'red',
            defaultBg: 'blue',
            defaultBorderColor: 'green',
            defaultShadow: 'yellow',
            defaultBgDisabled: 'pink',
            defaultHoverColor: 'brown',
            defaultHoverBg: 'orange',
            defaultHoverBorderColor: 'purple',
            defaultActiveColor: 'fuchsia',
            defaultActiveBg: 'aqua',
            defaultActiveBorderColor: 'lime',
          },
        },
      }}
    >
      <Flex gap="small" align="start">
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button disabled>Disabled</Button>
      </Flex>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            ghostBg: 'red',
            defaultGhostColor: 'yellow',
            defaultGhostBorderColor: 'green',
          },
        },
      }}
    >
      <Flex gap="small" align="start">
        <Button ghost>Default</Button>
        <Button ghost type="dashed">
          Dashed
        </Button>
        <Button ghost type="text">
          Text
        </Button>
        <Button ghost type="link">
          Link
        </Button>
        <Button ghost type="primary">
          Primary
        </Button>
      </Flex>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            iconGap: 40,
          },
        },
      }}
    >
      <Button icon={<SearchOutlined />}>icon gap 40</Button>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            linkHoverBg: 'red',
          },
        },
      }}
    >
      <Flex gap="small" align="center">
        <Button type="link" href="https://ant.design">
          Link
        </Button>
        <Button disabled type="link" href="https://ant.design">
          Link(disabled)
        </Button>
      </Flex>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            onlyIconSizeSM: 20,
            onlyIconSize: 30,
            onlyIconSizeLG: 40,
          },
        },
      }}
    >
      <Flex gap="small" align="center">
        <Button size="small" icon={<SearchOutlined />} />
        <Button icon={<SearchOutlined />} />
        <Button size="large" icon={<SearchOutlined />} />
      </Flex>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            primaryColor: 'red',
            primaryShadow: 'yellow',
          },
        },
      }}
    >
      <Button type="primary">Primary</Button>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            solidTextColor: 'red',
          },
        },
      }}
    >
      <Button variant="solid" color="default">
        Solid
      </Button>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            textTextColor: 'red',
            textHoverBg: 'yellow',
            textTextHoverColor: 'blue',
            textTextActiveColor: 'green',
          },
        },
      }}
    >
      <Flex gap="small" align="start">
        <Button type="text">Text</Button>
        <Button variant="text" color="default">
          Default Text
        </Button>
        <Button variant="text" color="primary">
          Primary Text
        </Button>
        <Button variant="text" color="danger">
          Danger Text
        </Button>
      </Flex>
    </ConfigProvider>
    <div>Global Token</div>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            algorithm: true,
            colorPrimary: '#1976d2',
            controlHeight: 36,
            primaryShadow:
              '0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12)',
            fontWeight: 500,
            defaultBorderColor: 'rgba(25, 118, 210, 0.5)',
            colorText: '#1976d2',
            defaultColor: '#1976d2',
            borderRadius: 4,
            colorTextDisabled: 'rgba(0, 0, 0, 0.26)',
            colorBgContainerDisabled: 'rgba(0, 0, 0, 0.12)',
            contentFontSizeSM: 12,
          },
        },
      }}
    >
      <Flex wrap gap="small">
        <Button type="text">TEXT</Button>
        <Button type="primary">CONTAINED</Button>
        <Button>OUTLINED</Button>
      </Flex>
      <Flex wrap gap="small">
        <Button type="text" disabled>
          TEXT
        </Button>
        <Button type="primary" disabled>
          CONTAINED
        </Button>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorBorderDisabled: 'rgba(0, 0, 0, 0.12)',
                colorBgContainerDisabled: 'transparent',
              },
            },
          }}
        >
          <Button disabled>OUTLINED</Button>
        </ConfigProvider>
      </Flex>
      <Flex wrap gap="small">
        <Button type="text" size="small">
          TEXT
        </Button>
        <Button type="primary" size="small">
          CONTAINED
        </Button>
        <Button size="small">OUTLINED</Button>
      </Flex>
    </ConfigProvider>
    <Flex gap="small" wrap>
      <ConfigProvider theme={{ components: { Button: { colorBorderDisabled: 'red' } } }}>
        <Button disabled>Custom Red Disabled</Button>
      </ConfigProvider>
      <ConfigProvider theme={{ components: { Button: { borderColorDisabled: 'blue' } } }}>
        <Button disabled>Legacy Blue Disabled</Button>
      </ConfigProvider>
    </Flex>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF0000',
        },
      }}
    >
      <Flex gap="small" wrap>
        <Button type="text">Text</Button>
        <Button type="link">Link</Button>
        <Button color="primary" variant="text">
          Primary Text
        </Button>
        <Button color="primary" variant="link">
          Primary Link
        </Button>
      </Flex>
    </ConfigProvider>
  </Flex>
);
export default App;
```
### 渐变按钮
自定义为渐变背景按钮。

```tsx
import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }
      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }
      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));
const App: React.FC = () => {
  const { styles } = useStyle();
  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Space>
        <Button type="primary" size="large" icon={<AntDesignOutlined />}>
          Gradient Button
        </Button>
        <Button size="large">Button</Button>
      </Space>
    </ConfigProvider>
  );
};
export default App;
```
### 自定义按钮波纹
波纹效果带来了灵动性，你也可以使用 [`@ant-design/happy-work-theme`](https://github.com/ant-design/happy-work-theme) 提供的 HappyProvider 实现动态波纹效果。

```tsx
import React from 'react';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button, ConfigProvider, Flex } from 'antd';
import type { ConfigProviderProps, GetProp } from 'antd';
type WaveConfig = GetProp<ConfigProviderProps, 'wave'>;
// Prepare effect holder
const createHolder = (node: HTMLElement) => {
  const { borderWidth } = getComputedStyle(node);
  const borderWidthNum = Number.parseInt(borderWidth, 10);
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.inset = `-${borderWidthNum}px`;
  div.style.borderRadius = 'inherit';
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  div.style.pointerEvents = 'none';
  div.style.overflow = 'hidden';
  node.appendChild(div);
  return div;
};
const createDot = (holder: HTMLElement, color: string, left: number, top: number, size = 0) => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.left = `${left}px`;
  dot.style.top = `${top}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.borderRadius = '50%';
  dot.style.background = color;
  dot.style.transform = 'translate3d(-50%, -50%, 0)';
  dot.style.transition = 'all 1s ease-out';
  holder.appendChild(dot);
  return dot;
};
// Inset Effect
const showInsetEffect: WaveConfig['showEffect'] = (node, { event, component }) => {
  if (component !== 'Button') {
    return;
  }
  const holder = createHolder(node);
  const rect = holder.getBoundingClientRect();
  const left = event.clientX - rect.left;
  const top = event.clientY - rect.top;
  const dot = createDot(holder, 'rgba(255, 255, 255, 0.65)', left, top);
  // Motion
  requestAnimationFrame(() => {
    dot.ontransitionend = () => {
      holder.remove();
    };
    dot.style.width = '200px';
    dot.style.height = '200px';
    dot.style.opacity = '0';
  });
};
// Shake Effect
const showShakeEffect: WaveConfig['showEffect'] = (node, { component }) => {
  if (component !== 'Button') {
    return;
  }
  const seq = [0, -15, 15, -5, 5, 0];
  const itv = 10;
  let steps = 0;
  const loop = () => {
    cancelAnimationFrame((node as any).effectTimeout);
    (node as any).effectTimeout = requestAnimationFrame(() => {
      const currentStep = Math.floor(steps / itv);
      const current = seq[currentStep];
      const next = seq[currentStep + 1];
      if (next === undefined || next === null) {
        node.style.transform = '';
        node.style.transition = '';
        return;
      }
      // Trans from current to next by itv
      const angle = current + ((next - current) / itv) * (steps % itv);
      node.style.transform = `rotate(${angle}deg)`;
      node.style.transition = 'none';
      steps += 1;
      loop();
    });
  };
  loop();
};
// Component
const Wrapper: React.FC<WaveConfig & { name: string }> = ({ name, ...wave }) => (
  <ConfigProvider wave={wave}>
    <Button type="primary">{name}</Button>
  </ConfigProvider>
);
const Demo: React.FC = () => (
  <Flex gap="large" wrap>
    <Wrapper name="Disabled" disabled />
    <Wrapper name="Default" />
    <Wrapper name="Inset" showEffect={showInsetEffect} />
    <Wrapper name="Shake" showEffect={showShakeEffect} />
    <HappyProvider>
      <Button type="primary">Happy Work</Button>
    </HappyProvider>
  </Flex>
);
export default Demo;
```
### 移除两个汉字之间的空格
我们默认在两个汉字之间添加空格，可以通过设置 `autoInsertSpace` 为 `false` 关闭。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary" autoInsertSpace={false}>
      确定
    </Button>
    <Button type="primary" autoInsertSpace>
      确定
    </Button>
  </Flex>
);
export default App;
```
### 自定义禁用样式背景
自定义disable下的背景颜色(适用 `default` 和 `dashed` 类型)

```tsx
import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" wrap>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultBgDisabled: 'rgba(0,0,0,0.1)',
            dashedBgDisabled: 'rgba(0,0,0,0.4)',
          },
        },
      }}
    >
      <Button type="primary" disabled>
        Primary Button
      </Button>
      <Button disabled>Default Button</Button>
      <Button type="dashed" disabled>
        Dashed Button
      </Button>
    </ConfigProvider>
  </Flex>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Button 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
import type { ButtonProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token }) => ({
  root: {
    border: `1px solid ${token.colorBorder}`,
    borderRadius: token.borderRadius,
    padding: `${token.paddingXS}px ${token.padding}px`,
    height: 'auto',
  },
  content: {
    color: token.colorText,
  },
}));
const stylesObject: ButtonProps['styles'] = {
  root: {
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
  },
};
const stylesFn: ButtonProps['styles'] = (info) => {
  if (info.props.type === 'primary') {
    return {
      root: {
        backgroundColor: '#171717',
      },
      content: {
        color: '#fff',
      },
    } satisfies ButtonProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  return (
    <Flex gap="small">
      <Button type="default" classNames={classNames} styles={stylesObject}>
        Object
      </Button>
      <Button type="primary" classNames={classNames} styles={stylesFn}>
        Function
      </Button>
    </Flex>
  );
};
export default App;
```
