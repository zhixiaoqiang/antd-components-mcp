## FloatButton 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { FloatButton } from 'antd';
const App: React.FC = () => <FloatButton onClick={() => console.log('onClick')} />;
export default App;
```
### 类型
通过 `type` 改变悬浮按钮的类型。

```tsx
import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <>
    <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ insetInlineEnd: 24 }} />
    <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ insetInlineEnd: 94 }} />
  </>
);
export default App;
```
### 形状
通过 `shape` 设置不同的形状。

```tsx
import React from 'react';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <>
    <FloatButton
      shape="circle"
      type="primary"
      style={{ insetInlineEnd: 94 }}
      icon={<CustomerServiceOutlined />}
    />
    <FloatButton
      shape="square"
      type="primary"
      style={{ insetInlineEnd: 24 }}
      icon={<CustomerServiceOutlined />}
    />
  </>
);
export default App;
```
### 描述
可以通过 `description` 设置文字内容。
> 仅当 `shape` 属性为 `square` 时支持。由于空间较小，推荐使用比较精简的双数文字。

```tsx
import React from 'react';
import { FileTextOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <>
    <FloatButton
      icon={<FileTextOutlined />}
      description="HELP INFO"
      shape="square"
      style={{ insetInlineEnd: 24 }}
    />
    <FloatButton description="HELP INFO" shape="square" style={{ insetInlineEnd: 94 }} />
    <FloatButton
      icon={<FileTextOutlined />}
      description="HELP"
      shape="square"
      style={{ insetInlineEnd: 164 }}
    />
  </>
);
export default App;
```
### 含有气泡卡片的悬浮按钮
设置 tooltip 属性，即可开启气泡卡片。

```tsx
import React from 'react';
import { FloatButton } from 'antd';
const App: React.FC = () => <FloatButton tooltip={<div>Documents</div>} />;
export default App;
```
### 浮动按钮组
按钮组合使用时，推荐使用 `<FloatButton.Group />`，并通过设置 `shape` 属性改变悬浮按钮组的形状。悬浮按钮组的 `shape` 会覆盖内部 FloatButton 的 `shape` 属性。

```tsx
import React from 'react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <>
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
    <FloatButton.Group shape="square" style={{ insetInlineEnd: 94 }}>
      <FloatButton icon={<QuestionCircleOutlined />} />
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);
export default App;
```
### 菜单模式
设置 `trigger` 属性即可开启菜单模式。提供 `hover` 和 `click` 两种触发方式。

```tsx
import React from 'react';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <>
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ insetInlineEnd: 24 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
    <FloatButton.Group
      trigger="hover"
      type="primary"
      style={{ insetInlineEnd: 94 }}
      icon={<CustomerServiceOutlined />}
    >
      <FloatButton />
      <FloatButton icon={<CommentOutlined />} />
    </FloatButton.Group>
  </>
);
export default App;
```
### 受控模式
通过 `open` 设置组件为受控模式，需要配合 `trigger` 一起使用。

```tsx
import React, { useState } from 'react';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton, Switch } from 'antd';
const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <>
      <Switch onChange={setOpen} checked={open} style={{ margin: 16 }} />
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{ insetInlineEnd: 24 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
      <FloatButton.Group
        open={open}
        shape="square"
        trigger="click"
        style={{ insetInlineEnd: 88 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </>
  );
};
export default App;
```
### 弹出方向
自定义弹出位置，提供了四个预设值：`top`、`right`、`bottom`、`left`，默认值为 `top`。

```tsx
import React from 'react';
import {
  CommentOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Flex, FloatButton } from 'antd';
const BOX_SIZE = 100;
const BUTTON_SIZE = 40;
const wrapperStyle: React.CSSProperties = {
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
};
const boxStyle: React.CSSProperties = {
  width: BOX_SIZE,
  height: BOX_SIZE,
  position: 'relative',
};
const insetInlineEnd: React.CSSProperties['insetInlineEnd'][] = [
  (BOX_SIZE - BUTTON_SIZE) / 2,
  -(BUTTON_SIZE / 2),
  (BOX_SIZE - BUTTON_SIZE) / 2,
  BOX_SIZE - BUTTON_SIZE / 2,
];
const bottom: React.CSSProperties['bottom'][] = [
  BOX_SIZE - BUTTON_SIZE / 2,
  (BOX_SIZE - BUTTON_SIZE) / 2,
  -BUTTON_SIZE / 2,
  (BOX_SIZE - BUTTON_SIZE) / 2,
];
const icons = [
  <UpOutlined key="up" />,
  <RightOutlined key="right" />,
  <DownOutlined key="down" />,
  <LeftOutlined key="left" />,
];
const App: React.FC = () => (
  <Flex justify="space-evenly" align="center" style={wrapperStyle}>
    <div style={boxStyle}>
      {(['top', 'right', 'bottom', 'left'] as const).map((placement, i) => {
        const style: React.CSSProperties = {
          position: 'absolute',
          insetInlineEnd: insetInlineEnd[i],
          bottom: bottom[i],
        };
        return (
          <FloatButton.Group
            key={placement}
            trigger="click"
            placement={placement}
            style={style}
            icon={icons[i]}
          >
            <FloatButton />
            <FloatButton icon={<CommentOutlined />} />
          </FloatButton.Group>
        );
      })}
    </div>
  </Flex>
);
export default App;
```
### 回到顶部
返回页面顶部的操作按钮。

```tsx
import React from 'react';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <div style={{ height: '300vh', padding: 10 }}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <FloatButton.BackTop />
  </div>
);
export default App;
```
### 徽标数
右上角附带圆形徽标数字的悬浮按钮。

```tsx
import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
const App: React.FC = () => (
  <>
    <FloatButton shape="circle" style={{ insetInlineEnd: 24 + 70 + 70 }} badge={{ dot: true }} />
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 + 70 }}>
      <FloatButton
        href="https://ant.design/index-cn"
        tooltip={<div>custom badge color</div>}
        badge={{ count: 5, color: 'blue' }}
      />
      <FloatButton badge={{ count: 5 }} />
    </FloatButton.Group>
    <FloatButton.Group shape="circle">
      <FloatButton badge={{ count: 12 }} icon={<QuestionCircleOutlined />} />
      <FloatButton badge={{ count: 123, overflowCount: 999 }} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  </>
);
export default App;
```
### 调试小圆点使用
调试使用。

```tsx
import React, { useState } from 'react';
import { ConfigProvider, FloatButton, Slider } from 'antd';
import type { ConfigProviderProps, GetProp } from 'antd';
type AliasToken = GetProp<ConfigProviderProps, 'theme'>['token'];
const App: React.FC = () => {
  const [radius, setRadius] = useState<number>(0);
  const token: Partial<AliasToken> = {
    borderRadius: radius,
  };
  return (
    <>
      <Slider min={0} max={20} style={{ margin: 16 }} onChange={setRadius} />
      <ConfigProvider theme={{ token }}>
        <FloatButton shape="square" badge={{ dot: true }} />
      </ConfigProvider>
    </>
  );
};
export default App;
```
### \_InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { CustomerServiceOutlined, QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalFloatButton } = FloatButton;
const App: React.FC = () => (
  <div style={{ display: 'flex', columnGap: 16, alignItems: 'center' }}>
    <InternalFloatButton backTop />
    <InternalFloatButton icon={<CustomerServiceOutlined />} />
    <InternalFloatButton
      icon={<QuestionCircleOutlined />}
      description="HELP"
      shape="square"
      type="primary"
    />
    <InternalFloatButton
      shape="square"
      items={[
        { icon: <QuestionCircleOutlined /> },
        { icon: <CustomerServiceOutlined /> },
        { icon: <SyncOutlined /> },
      ]}
    />
    <InternalFloatButton
      open
      icon={<CustomerServiceOutlined />}
      trigger="click"
      items={[
        { icon: <QuestionCircleOutlined /> },
        { icon: <CustomerServiceOutlined /> },
        { icon: <SyncOutlined /> },
      ]}
    />
  </div>
);
export default App;
```
