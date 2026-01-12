## Timeline 组件示例
### 基本用法
基本的时间轴。

```tsx
import React from 'react';
import { Timeline } from 'antd';
const App: React.FC = () => (
  <Timeline
    items={[
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        content: 'Solve initial network problems 2015-09-01',
      },
      {
        content: 'Technical testing 2015-09-01',
      },
      {
        content: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
```
### 变体样式
通过 `variant` 设置时间轴的样式。

```tsx
import React from 'react';
import { Timeline } from 'antd';
const App: React.FC = () => (
  <Timeline
    variant="filled"
    items={[
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        content: 'Solve initial network problems 2015-09-01',
      },
      {
        content: 'Technical testing 2015-09-01',
      },
      {
        content: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
```
### 等待及排序
节点支持 `loading` 属性表示加载，`reverse` 属性用于控制节点排序。

```tsx
import React, { useState } from 'react';
import { Button, Flex, Timeline } from 'antd';
const App: React.FC = () => {
  const [reverse, setReverse] = useState(false);
  const handleClick = () => {
    setReverse(!reverse);
  };
  return (
    <Flex vertical gap="middle" align="flex-start">
      <Timeline
        reverse={reverse}
        items={[
          {
            content: 'Create a services site 2015-09-01',
          },
          {
            content: 'Solve initial network problems 2015-09-01',
          },
          {
            content: 'Technical testing 2015-09-01',
          },
          {
            loading: true,
            content: 'Recording...',
          },
        ]}
      />
      <Button type="primary" onClick={handleClick}>
        Toggle Reverse
      </Button>
    </Flex>
  );
};
export default App;
```
### 最后一个及排序
节点支持 `loading` 属性表示加载，`reverse` 属性用于控制节点排序。

```tsx
import React from 'react';
import { Flex, Timeline } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle" align="flex-start">
    <Timeline
      pending="Recording..."
      items={[
        {
          content: 'Create a services site 2015-09-01',
        },
      ]}
    />
    <Timeline
      pending="Recording..."
      pendingDot="🔴"
      items={[
        {
          content: 'Create a services site 2015-09-01',
        },
      ]}
    />
  </Flex>
);
export default App;
```
### 交替展现
内容在时间轴两侧轮流出现。

```tsx
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App: React.FC = () => (
  <Timeline
    mode="alternate"
    items={[
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        content: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        icon: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
      },
      {
        color: 'red',
        content: 'Network problems being solved 2015-09-01',
      },
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        icon: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
        content: 'Technical testing 2015-09-01',
      },
    ]}
  />
);
export default App;
```
### 水平布局
水平方向的时间线。

```tsx
import React from 'react';
import { Divider, Flex, Timeline } from 'antd';
import type { TimelineProps } from 'antd';
const sharedProps: TimelineProps = {
  orientation: 'horizontal',
  items: [
    {
      content: 'Init',
    },
    {
      content: 'Start',
    },
    {
      content: 'Pending',
    },
    {
      content: 'Complete',
    },
  ],
};
const App: React.FC = () => (
  <Flex vertical>
    <Timeline {...sharedProps} mode="start" />
    <Divider />
    <Timeline {...sharedProps} mode="end" />
    <Divider />
    <Timeline {...sharedProps} mode="alternate" />
  </Flex>
);
export default App;
```
### 水平布局
水平方向的时间线。

```tsx
import React from 'react';
import { Divider, Flex, Timeline } from 'antd';
import type { TimelineProps } from 'antd';
const longText = 'Long Text '.repeat(5);
const sharedProps: TimelineProps = {
  orientation: 'horizontal',
  styles: {
    item: {
      boxShadow: '0 0 1px rgba(255,0,0,0.6)',
    },
  },
  items: [
    {
      title: longText,
      content: longText,
    },
    {
      content: longText,
    },
    {
      content: longText,
    },
    {
      title: longText,
      content: longText,
    },
  ],
};
const App: React.FC = () => (
  <Flex vertical>
    <Timeline {...sharedProps} mode="start" />
    <Divider />
    <Timeline {...sharedProps} mode="end" />
    <Divider />
    <Timeline {...sharedProps} mode="alternate" />
  </Flex>
);
export default App;
```
### 自定义时间轴点
可以设置为图标或其他自定义元素。

```tsx
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { theme, Timeline } from 'antd';
const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Timeline
      items={[
        {
          content: 'Create a services site 2015-09-01',
        },
        {
          content: 'Solve initial network problems 2015-09-01',
        },
        {
          icon: (
            <ClockCircleOutlined
              style={{
                fontSize: 20,
                // Only need to set when `fontSize` is customized
                background: token.colorBgContainer,
              }}
            />
          ),
          color: 'red',
          content: 'Technical testing 2015-09-01',
        },
        {
          content: 'Network problems being solved 2015-09-01',
        },
      ]}
    />
  );
};
export default App;
```
### 另一侧时间轴点
时间轴点可以在另一侧。

```tsx
import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App: React.FC = () => (
  <Timeline
    mode="end"
    items={[
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        content: 'Solve initial network problems 2015-09-01',
      },
      {
        icon: <ClockCircleOutlined />,
        color: 'red',
        content: 'Technical testing 2015-09-01',
      },
      {
        content: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
```
### 标题
使用 `title` 标签单独展示时间。

```tsx
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Timeline } from 'antd';
const App: React.FC = () => {
  const [mode, setMode] = useState<'start' | 'alternate' | 'end'>('start');
  const onChange = (e: RadioChangeEvent) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="start">Start</Radio>
        <Radio value="end">End</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            title: '2015-09-01',
            content: 'Create a services',
          },
          {
            title: '2015-09-01 09:12:11',
            content: 'Solve initial network problems',
          },
          {
            content: 'Technical testing',
          },
          {
            title: '2015-09-01 09:12:11',
            content: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};
export default App;
```
### 标题占比
使用 `titleSpan` 设置标题占比空间。

```tsx
import React from 'react';
import { Flex, Timeline, Typography } from 'antd';
import type { TimelineProps } from 'antd';
const items: TimelineProps['items'] = [
  { title: '05:10', content: 'Create a services' },
  { title: '09:03', content: 'Solve initial network problems' },
  { content: 'Technical testing' },
  { title: '11:28', content: 'Network problems being solved' },
];
const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <Typography.Title level={5} style={{ margin: 0 }}>
        titleSpan = 100px
      </Typography.Title>
      <Timeline items={items} titleSpan="100px" />
      <Typography.Title level={5} style={{ margin: 0 }}>
        titleSpan = 25%
      </Typography.Title>
      <Timeline items={items} titleSpan="25%" />
      <Typography.Title level={5} style={{ margin: 0 }}>
        titleSpan = 18, mode = end
      </Typography.Title>
      <Timeline items={items} titleSpan={18} mode="end" />
    </Flex>
  );
};
export default App;
```
### 语义化自定义
通过语义化结构，可以实现更丰富的定制样式。

```tsx
import React from 'react';
import { Timeline } from 'antd';
const App: React.FC = () => (
  <Timeline
    items={[
      {
        content: 'Create a services site 2015-09-01',
      },
      {
        content: 'Solve initial network problems 2015-09-01',
        styles: {
          root: {
            height: 100,
          },
          rail: {
            borderStyle: 'dashed',
          },
        },
      },
      {
        content: '...for a long time...',
        styles: {
          root: {
            height: 100,
          },
          rail: {
            borderStyle: 'dashed',
          },
          content: {
            opacity: 0.45,
          },
        },
      },
      {
        content: 'Technical testing 2015-09-01',
      },
      {
        content: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Timeline 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Timeline } from 'antd';
import type { TimelineProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(() => ({
  root: {
    padding: 8,
    borderRadius: 4,
  },
}));
const styles: TimelineProps['styles'] = {
  itemIcon: {
    borderColor: '#1890ff',
  },
};
const stylesFn: TimelineProps['styles'] = (info) => {
  if (info.props.orientation === 'vertical') {
    return {
      root: {
        padding: '10px 6px',
        border: '1px solid #A294F9',
      },
      itemIcon: {
        borderColor: '#A294F9',
      },
    } satisfies TimelineProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  const sharedProps: TimelineProps = {
    classNames,
    items: [
      {
        title: '2015-09-01',
        content: 'Create a services site',
      },
      {
        title: '2015-09-01 09:12:11',
        content: 'Solve initial network problems',
      },
      {
        content: 'Technical testing',
      },
    ],
  };
  return (
    <Flex vertical gap="middle">
      <Timeline {...sharedProps} orientation="horizontal" styles={styles} />
      <Timeline {...sharedProps} orientation="vertical" styles={stylesFn} />
    </Flex>
  );
};
export default App;
```
### 组件 Token
自定义组件 Token。

```tsx
import React from 'react';
import { ConfigProvider, Timeline } from 'antd';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Timeline: {
          tailColor: 'red',
          tailWidth: 10,
          dotBorderWidth: 1,
          dotBg: 'yellow',
          dotSize: 20,
          itemPaddingBottom: 10,
        },
      },
    }}
  >
    <Timeline
      items={[
        {
          content: 'Create a services site 2015-09-01',
        },
        {
          content: 'Solve initial network problems 2015-09-01',
        },
        {
          content: 'Technical testing 2015-09-01',
        },
        {
          content: 'Network problems being solved 2015-09-01',
        },
      ]}
    />
  </ConfigProvider>
);
export default App;
```
