## Badge 组件示例
### 基本
简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

```tsx
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Avatar, Badge, Space } from 'antd';
const App: React.FC = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
```
### 独立使用
不包裹任何元素即是独立使用，可自定样式展现。
> 在右上角的 badge 则限定为红色。

```tsx
import React, { useState } from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge, Space, Switch } from 'antd';
const App: React.FC = () => {
  const [show, setShow] = useState(true);
  return (
    <Space>
      <Switch checked={show} onChange={() => setShow(!show)} />
      <Badge count={show ? 11 : 0} showZero color="#faad14" />
      <Badge count={show ? 25 : 0} />
      <Badge count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0} />
      <Badge
        className="site-badge-count-109"
        count={show ? 109 : 0}
        style={{ backgroundColor: '#52c41a' }}
      />
    </Space>
  );
};
export default App;
```
### 封顶数字
超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

```tsx
import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App: React.FC = () => (
  <Space size="large">
    <Badge count={99}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={100}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={99} overflowCount={10}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={1000} overflowCount={999}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
```
### 讨嫌的小红点
没有具体的数字。

```tsx
import React from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Badge, Space } from 'antd';
const App: React.FC = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">Link something</a>
    </Badge>
  </Space>
);
export default App;
```
### 动态
展示动态变化的效果。

```tsx
import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Space, Switch } from 'antd';
const App: React.FC = () => {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);
  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  const random = () => {
    const newCount = Math.floor(Math.random() * 100);
    setCount(newCount);
  };
  const onChange = (checked: boolean) => {
    setShow(checked);
  };
  return (
    <Space vertical>
      <Space size="large">
        <Badge count={count}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Space.Compact>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
          <Button onClick={random} icon={<QuestionOutlined />} />
        </Space.Compact>
      </Space>
      <Space size="large">
        <Badge dot={show}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Switch onChange={onChange} checked={show} />
      </Space>
    </Space>
  );
};
export default App;
```
### 可点击
用 a 标签进行包裹即可。

```tsx
import React from 'react';
import { Avatar, Badge } from 'antd';
const App: React.FC = () => (
  <a href="#">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </a>
);
export default App;
```
### 自定义位置偏移
设置状态点的位置偏移，格式为 `[left, top]`，表示状态点距默认位置左侧、上方的偏移量。

```tsx
import React from 'react';
import { Avatar, Badge } from 'antd';
const App: React.FC = () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
);
export default App;
```
### 大小
可以设置有数字徽标的大小。

```tsx
import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App: React.FC = () => (
  <Space size="middle">
    <Badge size="default" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge size="small" count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
```
### 状态点
用于表示状态的小圆点。

```tsx
import React from 'react';
import { Badge, Space } from 'antd';
const App: React.FC = () => (
  <>
    <Space>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
    </Space>
    <br />
    <Space vertical>
      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </Space>
  </>
);
export default App;
```
### 多彩徽标
我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

```tsx
import React from 'react';
import { Badge, Divider, Space } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">Presets</Divider>
    <Space vertical>
      {colors.map((color) => (
        <Badge key={color} color={color} text={color} />
      ))}
    </Space>
    <Divider titlePlacement="start">Custom</Divider>
    <Space vertical>
      <Badge color="#f50" text="#f50" />
      <Badge color="rgb(45, 183, 245)" text="rgb(45, 183, 245)" />
      <Badge color="hsl(102, 53%, 61%)" text="hsl(102, 53%, 61%)" />
      <Badge color="hwb(205 6% 9%)" text="hwb(205 6% 9%)" />
    </Space>
  </>
);
export default App;
```
### 缎带
使用缎带型的徽标。

```tsx
import React from 'react';
import { Badge, Card, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical size="middle" style={{ width: '100%' }}>
    <Badge.Ribbon text="Hippies">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="pink">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="cyan">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="green">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="purple">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="volcano">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="Hippies" color="magenta">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon>
  </Space>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Badge 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Avatar, Badge, Card, Flex, Space } from 'antd';
import type { BadgeProps } from 'antd';
import { createStaticStyles } from 'antd-style';
import type { RibbonProps } from 'antd/es/badge/Ribbon';
const badgeClassNames = createStaticStyles(({ css }) => ({
  indicator: css`
   font-size: 10px;
  `,
}));
const ribbonClassNames = createStaticStyles(({ css }) => ({
  root: css`
    width: 400px;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
  `,
}));
const badgeStyles: BadgeProps['styles'] = {
  root: {
    borderRadius: 8,
  },
};
const ribbonStyles: RibbonProps['styles'] = {
  indicator: {
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};
const badgeStylesFn: BadgeProps['styles'] = (info) => {
  if (info.props.size === 'default') {
    return {
      indicator: {
        fontSize: 14,
        backgroundColor: '#696FC7',
      },
    } satisfies BadgeProps['styles'];
  }
  return {};
};
const ribbonStylesFn: RibbonProps['styles'] = (info) => {
  if (info.props.color === '#696FC7') {
    return {
      content: {
        fontWeight: 'bold',
      },
      indicator: {
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    } satisfies RibbonProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  return (
    <Space size="large" vertical>
      <Flex gap="middle">
        <Badge size="small" count={5} classNames={badgeClassNames} styles={badgeStyles}>
          <Avatar shape="square" size="large" />
        </Badge>
        <Badge count={5} classNames={badgeClassNames} styles={badgeStylesFn}>
          <Avatar shape="square" size="large" />
        </Badge>
      </Flex>
      <Flex vertical gap="middle">
        <Badge.Ribbon text="Custom Ribbon" classNames={ribbonClassNames} styles={ribbonStyles}>
          <Card title="Card with custom ribbon" size="small">
            This card has a customized ribbon with semantic classNames and styles.
          </Card>
        </Badge.Ribbon>
        <Badge.Ribbon
          text="Custom Ribbon"
          color="#696FC7"
          classNames={ribbonClassNames}
          styles={ribbonStylesFn}
        >
          <Card title="Card with custom ribbon" size="small">
            This card has a customized ribbon with semantic classNames and styles.
          </Card>
        </Badge.Ribbon>
      </Flex>
    </Space>
  );
};
export default App;
```
### Ribbon Debug
Buggy!

```tsx
import React from 'react';
import { Badge, Card, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <Badge.Ribbon text="啦啦啦啦">
      <Card>推开窗户举起望远镜</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="啦啦啦啦" color="purple">
      <Card>推开窗户举起望远镜</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="啦啦啦啦" color="#2db7f5">
      <Card>推开窗户举起望远镜</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="啦啦啦啦" color="#2db7f5" placement="start">
      <Card>推开窗户举起望远镜</Card>
    </Badge.Ribbon>
    <Badge.Ribbon text="啦啦啦啦" color="#2db7f5" placement="end">
      <Card>推开窗户举起望远镜</Card>
    </Badge.Ribbon>
  </Space>
);
export default App;
```
### 各种混用的情况
测试 `count` `status` `color` `dot` 共用的情况。

```tsx
import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App: React.FC = () => (
  <Space size="middle" wrap>
    <Space size="middle" wrap>
      <Badge count={5} status="success">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={5} status="warning">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={5} color="blue">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={5} color="#fa541c">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot status="success">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot status="warning">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot status="processing">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot color="blue">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge dot color="#fa541c">
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
    <Space size="middle" wrap>
      <Badge count={0} showZero />
      <Badge count={0} showZero color="blue" />
      <Badge count={0} showZero color="#f0f" />
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero color="blue">
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} color="#f0f" />
      <Badge status="success" text={0} showZero />
      <Badge status="warning" text={0} />
    </Space>
  </Space>
);
export default App;
```
### 自定义标题
设置鼠标放在状态点上时显示的文字。

```tsx
import React from 'react';
import { Avatar, Badge, Space } from 'antd';
const App: React.FC = () => (
  <Space size="large">
    <Badge count={5} title="Custom hover text">
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={-5} title="Negative">
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);
export default App;
```
### 多彩徽标支持 count 显示 Debug
在使用多彩徽标的同时，支持 count 属性显示

```tsx
import React from 'react';
import { Badge, Space } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const AvatarItem = ({ color }: { color: string }) => (
  <div
    style={{
      width: 90,
      height: 90,
      lineHeight: '90px',
      background: '#ccc',
      textAlign: 'center',
    }}
  >
    {color}
  </div>
);
const App: React.FC = () => (
  <>
    <Space wrap size={['large', 'middle']}>
      {colors.map((color) => (
        <Badge color={color} count={44} key={color}>
          <AvatarItem color={color} />
        </Badge>
      ))}
    </Space>
    <Space wrap size={['large', 'middle']}>
      {colors.map((color) => (
        <Badge status="processing" color={color} text="loading" key={color} />
      ))}
    </Space>
  </>
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { NotificationOutlined } from '@ant-design/icons';
import { Avatar, Badge, ConfigProvider, Space } from 'antd';
/** Test usage. Do not use in your production. */
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Badge: {
          indicatorHeight: 24,
          indicatorHeightSM: 18,
          dotSize: 4,
          textFontWeight: 'bold',
          statusSize: 8,
        },
      },
    }}
  >
    <Space vertical>
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={26} />
      <Badge dot>
        <NotificationOutlined />
      </Badge>
      <Badge status="success" text="Success" />
      <Badge size="small" count={0} showZero />
    </Space>
  </ConfigProvider>
);
```
