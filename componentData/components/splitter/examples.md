## Splitter 组件示例
### 基本用法
初始化面板大小，面板大小限制。

```tsx
import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => (
  <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    <Splitter.Panel defaultSize="40%" min="20%" max="70%">
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
);
export default App;
```
### 受控模式
受控调整尺寸。当 Panel 之间任意一方禁用 `resizable`，则其拖拽将被禁用。

```tsx
import React from 'react';
import { Button, Flex, Splitter, Switch, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => {
  const [sizes, setSizes] = React.useState<(number | string)[]>(['50%', '50%']);
  const [enabled, setEnabled] = React.useState(true);
  return (
    <Flex vertical gap="middle">
      <Splitter
        onResize={setSizes}
        style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
      >
        <Splitter.Panel size={sizes[0]} resizable={enabled}>
          <Desc text="First" />
        </Splitter.Panel>
        <Splitter.Panel size={sizes[1]}>
          <Desc text="Second" />
        </Splitter.Panel>
      </Splitter>
      <Flex gap="middle" justify="space-between">
        <Switch
          value={enabled}
          onChange={() => setEnabled(!enabled)}
          checkedChildren="Enabled"
          unCheckedChildren="Disabled"
        />
        <Button onClick={() => setSizes(['50%', '50%'])}>Reset</Button>
      </Flex>
    </Flex>
  );
};
export default App;
```
### 垂直方向
使用垂直布局。

```tsx
import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => (
  <Splitter layout="vertical" style={{ height: 300, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    <Splitter.Panel>
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
);
export default App;
```
### 可折叠
配置 `collapsible` 提供快捷收缩能力。可以通过 `min` 限制收缩后不能通过拖拽展开。

```tsx
import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
import type { SplitterProps } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const CustomSplitter: React.FC<Readonly<SplitterProps>> = ({ style, ...restProps }) => (
  <Splitter style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', ...style }} {...restProps}>
    <Splitter.Panel collapsible min="20%">
      <Desc text="First" />
    </Splitter.Panel>
    <Splitter.Panel collapsible>
      <Desc text="Second" />
    </Splitter.Panel>
  </Splitter>
);
const App: React.FC = () => (
  <Flex gap="middle" vertical>
    <CustomSplitter style={{ height: 200 }} />
    <CustomSplitter style={{ height: 300 }} layout="vertical" />
  </Flex>
);
export default App;
```
### 多面板
多面板

```tsx
import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      Panel {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => (
  <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    <Splitter.Panel collapsible>
      <Desc text={1} />
    </Splitter.Panel>
    <Splitter.Panel collapsible={{ start: true }}>
      <Desc text={2} />
    </Splitter.Panel>
    <Splitter.Panel>
      <Desc text={3} />
    </Splitter.Panel>
  </Splitter>
);
export default App;
```
### 复杂组合
复杂组合面板，快捷折叠，禁止改变大小

```tsx
import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => (
  <Splitter style={{ height: 300, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    <Splitter.Panel collapsible>
      <Desc text="Left" />
    </Splitter.Panel>
    <Splitter.Panel>
      <Splitter layout="vertical">
        <Splitter.Panel>
          <Desc text="Top" />
        </Splitter.Panel>
        <Splitter.Panel>
          <Desc text="Bottom" />
        </Splitter.Panel>
      </Splitter>
    </Splitter.Panel>
  </Splitter>
);
export default App;
```
### 标签页中嵌套
嵌套在标签页中。

```tsx
import React from 'react';
import { Flex, Splitter, Tabs, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => {
  const SplitterContent = (
    <Splitter
      style={{
        height: 200,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Splitter.Panel collapsible>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel
        collapsible={{
          start: true,
        }}
      >
        <Desc text={2} />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text={3} />
      </Splitter.Panel>
    </Splitter>
  );
  return (
    <Tabs
      defaultActiveKey="1"
      items={[
        {
          key: '1',
          label: 'General',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'Splitter Tab',
          children: SplitterContent,
        },
      ]}
    />
  );
};
export default App;
```
### 延迟渲染模式
延迟渲染模式，拖拽时不会立即更新大小，而是等到松手时才更新。

```tsx
import React from 'react';
import { Flex, Space, Splitter, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <Splitter lazy style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel defaultSize="40%" min="20%" max="70%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
    <Splitter
      lazy
      layout="vertical"
      style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
    >
      <Splitter.Panel defaultSize="40%" min="30%" max="70%">
        <Desc text="First" />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text="Second" />
      </Splitter.Panel>
    </Splitter>
  </Space>
);
export default App;
```
### 调试
面板 2 宽度为 0，面板 3 禁止调整大小。

```tsx
import React from 'react';
import { Flex, Splitter, Typography } from 'antd';
const Desc: React.FC<Readonly<{ text?: string | number }>> = (props) => (
  <Flex justify="center" align="center" style={{ height: '100%' }}>
    <Typography.Title type="secondary" level={5} style={{ whiteSpace: 'nowrap' }}>
      Panel {props.text}
    </Typography.Title>
  </Flex>
);
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Typography.Title level={3}>[true, 0, false]</Typography.Title>
    <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel defaultSize={0}>
        <Desc text={2} />
      </Splitter.Panel>
      <Splitter.Panel resizable={false}>
        <Desc text={3} />
      </Splitter.Panel>
    </Splitter>
    <Typography.Title level={3}>[false, 0, true]</Typography.Title>
    <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel resizable={false}>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel defaultSize={0}>
        <Desc text={2} />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text={3} />
      </Splitter.Panel>
    </Splitter>
    <Typography.Title level={3}>Start have min & max</Typography.Title>
    <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel min={50} max={100}>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel>
        <Desc text={2} />
      </Splitter.Panel>
    </Splitter>
    <Typography.Title level={3}>End have min & max</Typography.Title>
    <Splitter style={{ height: 200, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <Splitter.Panel>
        <Desc text={1} />
      </Splitter.Panel>
      <Splitter.Panel min="20%" max="70%">
        <Desc text={2} />
      </Splitter.Panel>
    </Splitter>
  </Flex>
);
export default App;
```
