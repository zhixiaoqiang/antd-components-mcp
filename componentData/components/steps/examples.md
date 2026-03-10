## Steps 组件示例
### 基本用法
简单的步骤条，使用 `variant` 属性来设置不同的样式，使用 `size` 控制大小。

```tsx
import React from 'react';
import { Flex, Steps } from 'antd';
const content = 'This is a content.';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Progress',
    content,
    subTitle: 'Left 00:00:08',
  },
  {
    title: 'Waiting',
    content,
  },
];
const App: React.FC = () => (
  <Flex vertical gap="large">
    <Steps current={1} items={items} />
    <Steps current={1} items={items} variant="outlined" />
    <Steps current={1} items={items} size="small" />
    <Steps current={1} items={items} size="small" variant="outlined" />
  </Flex>
);
export default App;
```
### 步骤运行错误
使用 Steps 的 `status` 属性来指定当前步骤的状态。

```tsx
import React from 'react';
import { Steps } from 'antd';
const content = 'This is a content';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Process',
    content,
  },
  {
    title: 'Waiting',
    content,
  },
];
const App: React.FC = () => <Steps current={1} status="error" items={items} />;
export default App;
```
### 竖直方向的步骤条
简单的竖直方向的步骤条。

```tsx
import React from 'react';
import { Flex, Steps } from 'antd';
const content = 'This is a content.';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Progress',
    content,
  },
  {
    title: 'Waiting',
    content,
  },
];
const App: React.FC = () => (
  <Flex>
    <div style={{ flex: 1 }}>
      <Steps orientation="vertical" current={1} items={items} />
    </div>
    <div style={{ flex: 1 }}>
      <Steps orientation="vertical" current={1} items={items} size="small" />
    </div>
  </Flex>
);
export default App;
```
### 可点击
设置 `onChange` 后，Steps 变为可点击状态。

```tsx
import React, { useState } from 'react';
import { Divider, Steps } from 'antd';
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const content = 'This is a content.';
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            content,
          },
          {
            title: 'Step 2',
            content,
          },
          {
            title: 'Step 3',
            content,
          },
        ]}
      />
      <Divider />
      <Steps
        current={current}
        onChange={onChange}
        orientation="vertical"
        items={[
          {
            title: 'Step 1',
            content,
          },
          {
            title: 'Step 2',
            content,
          },
          {
            title: 'Step 3',
            content,
          },
        ]}
      />
    </>
  );
};
export default App;
```
### 面板式步骤
面板类型的步骤条。

```tsx
import React, { useState } from 'react';
import { Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  const sharedProps: StepsProps = {
    type: 'panel',
    current,
    onChange,
    items: [
      {
        title: 'Step 1',
        subTitle: '00:00',
        content: 'This is a content.',
      },
      {
        title: 'Step 2',
        content: 'This is a content.',
        status: 'error',
      },
      {
        title: 'Step 3',
        content: 'This is a content.',
      },
    ],
  };
  return (
    <Flex vertical gap="middle">
      <Steps {...sharedProps} />
      <Steps {...sharedProps} size="small" variant="outlined" />
    </Flex>
  );
};
export default App;
```
### 带图标的步骤条
通过设置 `items` 的 `icon` 属性，可以启用自定义图标。

```tsx
import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
const App: React.FC = () => (
  <Steps
    items={[
      {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
      },
      {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
      },
      {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
      },
      {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
      },
    ]}
  />
);
export default App;
```
### 步骤切换
通常配合内容及按钮使用，表示一个流程的处理进度。

```tsx
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];
const App: React.FC = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;
```
### 标签放置位置与进度
使用 `titlePlacement` 设置标签位置，通过 `percent` 显示进度。

```tsx
import React from 'react';
import { Steps } from 'antd';
const content = 'This is a content.';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Progress',
    content,
  },
  {
    title: 'Waiting',
    content,
  },
];
const App: React.FC = () => (
  <>
    <Steps current={1} titlePlacement="vertical" items={items} ellipsis />
    <br />
    <Steps current={1} percent={60} titlePlacement="vertical" items={items} />
    <br />
    <Steps current={1} percent={80} size="small" titlePlacement="vertical" items={items} />
  </>
);
export default App;
```
### 点状步骤条
包含步骤点的进度条。

```tsx
import React from 'react';
import { Divider, Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';
const items = [
  {
    title: 'Finished',
    content: 'This is a content.',
  },
  {
    title: 'In Progress',
    content: 'This is a content.',
  },
  {
    title: 'Waiting',
    content: 'This is a content.',
  },
];
const sharedProps: StepsProps = {
  type: 'dot',
  current: 1,
  items,
};
const sharedVerticalProps = {
  ...sharedProps,
  orientation: 'vertical',
  style: {
    flex: 'auto',
  },
} as const;
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Steps {...sharedProps} />
    <Steps {...sharedProps} variant="outlined" />
    <Divider />
    <Flex gap="middle">
      <Steps {...sharedVerticalProps} />
      <Steps {...sharedVerticalProps} variant="outlined" />
    </Flex>
  </Flex>
);
export default App;
```
### 自定义点状步骤条
为点状步骤条增加自定义展示。

```tsx
import React from 'react';
import type { StepsProps } from 'antd';
import { Popover, Steps } from 'antd';
const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const content = 'You can hover on the dot.';
const App: React.FC = () => (
  <Steps
    current={1}
    progressDot={customDot}
    items={[
      {
        title: 'Finished',
        content,
      },
      {
        title: 'In Progress',
        content,
      },
      {
        title: 'Waiting',
        content,
      },
      {
        title: 'Waiting',
        content,
      },
    ]}
  />
);
export default App;
```
### 导航步骤
导航类型的步骤条。

```tsx
import React, { useState } from 'react';
import { Flex, Steps } from 'antd';
const App: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };
  return (
    <Flex vertical gap="large">
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Step 1',
            subTitle: '00:00:05',
            status: 'finish',
            content: 'This is a content.',
          },
          {
            title: 'Step 2',
            subTitle: '00:01:02',
            status: 'process',
            content: 'This is a content.',
          },
          {
            title: 'Step 3',
            subTitle: 'waiting for longlong time',
            status: 'wait',
            content: 'This is a content.',
          },
        ]}
      />
      <Steps
        type="navigation"
        current={current}
        onChange={onChange}
        items={[
          {
            status: 'finish',
            title: 'Step 1',
          },
          {
            status: 'process',
            title: 'Step 2',
          },
          {
            status: 'wait',
            title: 'Step 3',
          },
          {
            status: 'wait',
            title: 'Step 4',
          },
        ]}
      />
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items={[
          {
            status: 'finish',
            title: 'finish 1',
          },
          {
            status: 'finish',
            title: 'finish 2',
          },
          {
            status: 'process',
            title: 'current process',
          },
          {
            status: 'wait',
            title: 'wait',
            disabled: true,
          },
        ]}
      />
    </Flex>
  );
};
export default App;
```
### 带有进度的步骤
带有进度的步骤。

```tsx
import React from 'react';
import { Steps } from 'antd';
const content = 'This is a content.';
const App: React.FC = () => (
  <Steps
    current={1}
    percent={60}
    items={[
      {
        title: 'Finished',
        content,
      },
      {
        title: 'In Progress',
        subTitle: 'Left 00:00:08',
        content,
      },
      {
        title: 'Waiting',
        content,
      },
    ]}
  />
);
export default App;
```
### Progress Debug
Buggy!

```tsx
import React, { useState } from 'react';
import type { StepsProps } from 'antd';
import { Button, Space, Steps } from 'antd';
const App: React.FC = () => {
  const [percent, setPercent] = useState<number | undefined>(0);
  const [current, setCurrent] = useState(1);
  const [status, setStatus] = useState<StepsProps['status']>('process');
  const content = 'This is a content.';
  const items = [
    {
      title: 'Finished',
      content,
    },
    {
      title: 'In Progress',
      subTitle: 'Left 00:00:08',
      content,
    },
    {
      title: 'Waiting',
      content,
    },
  ];
  return (
    <>
      <Space.Compact block>
        <Button onClick={() => setPercent(undefined)}>Percentage to undefined</Button>
        <Button
          onClick={() =>
            setPercent((prev) => {
              const next = (prev ?? 0) + 10;
              return next > 100 ? 0 : next;
            })
          }
        >
          Percentage +
        </Button>
        <Button onClick={() => setCurrent((prev) => (prev + 1) % 3)}>Current +</Button>
        <Button onClick={() => setStatus('wait')}>Status Wait</Button>
        <Button onClick={() => setStatus('process')}>Status Process</Button>
        <Button onClick={() => setStatus('finish')}>Status Finish</Button>
        <Button onClick={() => setStatus('error')}>Status Error</Button>
      </Space.Compact>
      <br />
      <Steps current={current} percent={percent} status={status} items={items} />
      <Steps current={current} percent={percent} status={status} size="small" items={items} />
      <Steps
        current={current}
        percent={percent}
        status={status}
        orientation="vertical"
        items={items}
      />
      <Steps
        current={current}
        percent={percent}
        status={status}
        size="small"
        orientation="vertical"
        items={items}
      />
      {percent}
    </>
  );
};
export default App;
```
### Steps 嵌套 Steps
测试 Steps 嵌套 Steps 的样式。

```tsx
import React, { useState } from 'react';
import type { StepsProps } from 'antd';
import { Card, Radio, Steps } from 'antd';
const App: React.FC = () => {
  const [size, setSize] = useState<StepsProps['size']>('default');
  const content = 'This is a content.';
  const horizontalSteps = (
    <Card>
      <Steps
        size={size}
        items={[
          {
            title: 'Finished',
            content,
          },
          {
            title: 'In Progress',
            content,
          },
          {
            title: 'Waiting',
            content,
          },
        ]}
      />
    </Card>
  );
  return (
    <>
      <Radio.Group
        style={{ marginBottom: 16 }}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <Radio value="small">Small</Radio>
        <Radio value="default">Default</Radio>
      </Radio.Group>
      <Steps
        size={size}
        orientation="vertical"
        items={[
          {
            title: 'Finished',
            content: horizontalSteps,
          },
          {
            title: 'In Progress',
            content,
          },
          {
            title: 'Waiting',
            content,
          },
        ]}
      />
    </>
  );
};
export default App;
```
### 内联步骤
内联类型的步骤条，适用于列表内容场景中展示对象所在流程、当前状态的情况。

```tsx
import React from 'react';
import type { StepsProps } from 'antd';
import { Avatar, List, Steps } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
    current: 0,
  },
  {
    title: 'Ant Design Title 2',
    current: 1,
    status: 'error',
  },
  {
    title: 'Ant Design Title 3',
    current: 2,
  },
  {
    title: 'Ant Design Title 4',
    current: 1,
  },
];
const items = [
  {
    title: 'Step 1',
    content: 'This is Step 1',
  },
  {
    title: 'Step 2',
    content: 'This is Step 2',
  },
  {
    title: 'Step 3',
    content: 'This is Step 3',
  },
];
const App: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
        <Steps
          style={{ marginTop: 8 }}
          type="inline"
          current={item.current}
          status={item.status as StepsProps['status']}
          items={items}
        />
      </List.Item>
    )}
  />
);
export default App;
```
### 内联样式组合
内联步骤条修改样式，通过 `offset` 进行对齐。

```tsx
import React from 'react';
import type { StepsProps } from 'antd';
import { Flex, Steps, theme } from 'antd';
const items: StepsProps['items'] = Array.from({ length: 5 }, (_, index) => ({
  title: `Step ${index + 1}`,
  subTitle: 'Sub Title',
  content: `This is Step ${index + 1}`,
}));
const App: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <Flex vertical>
      <Steps type="inline" current={1} items={items} />
      <Steps
        type="inline"
        current={4}
        items={items}
        status="finish"
        styles={{
          itemTitle: {
            color: token.colorPrimaryText,
          },
          itemSubtitle: {
            color: token.colorPrimaryTextActive,
          },
          itemRail: {
            background: token.colorTextDisabled,
          },
        }}
      />
      <Steps type="inline" current={1} items={items.slice(2)} offset={2} />
    </Flex>
  );
};
export default App;
```
### 变体 Debug
包含步骤点的进度条。

```tsx
import React from 'react';
import { ConfigProvider, Divider, Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';
const items: StepsProps['items'] = [
  {
    title: 'Finished',
    content: 'This is a content.',
  },
  {
    title: 'In Progress',
    content: 'This is a content.',
    status: 'error',
  },
  {
    title: 'Waiting',
    content: 'This is a content.',
  },
];
const App: React.FC = () => {
  const [current, setCurrent] = React.useState(1);
  const sharedProps: StepsProps = {
    current,
    variant: 'outlined',
    onChange: (current: number) => {
      setCurrent(current);
    },
    items,
  };
  const sharedPercentProps: StepsProps = {
    current,
    variant: 'outlined',
    onChange: (current: number) => {
      setCurrent(current);
    },
    items: items.map(({ status, ...item }) => item),
    percent: 60,
  };
  return (
    <Flex vertical gap="middle">
      <Steps {...sharedProps} variant="filled" />
      <Steps {...sharedProps} />
      <Steps {...sharedProps} size="small" />
      <Steps {...sharedPercentProps} size="small" />
      <Flex gap="middle">
        <Steps {...sharedPercentProps} orientation="vertical" />
        <Steps {...sharedPercentProps} size="small" orientation="vertical" />
      </Flex>
      <Flex gap="middle">
        <Steps {...sharedProps} orientation="vertical" />
        <Steps {...sharedProps} orientation="vertical" size="small" />
      </Flex>
      <Steps {...sharedProps} type="dot" size="small" />
      <Flex gap="middle">
        <Steps {...sharedProps} type="dot" size="small" orientation="vertical" />
        <Steps {...sharedProps} type="navigation" size="small" orientation="vertical" />
      </Flex>
      <Divider />
      <ConfigProvider
        theme={{
          components: {
            Steps: {
              descriptionMaxWidth: 140,
              customIconSize: 22,
            },
          },
        }}
      >
        <Steps {...sharedProps} type="dot" />
        <Steps {...sharedProps} titlePlacement="vertical" />
        <Steps {...sharedProps} titlePlacement="vertical" size="small" />
      </ConfigProvider>
    </Flex>
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Steps } from 'antd';
const content = 'This is a content.';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Steps: {
          titleLineHeight: 20,
          customIconSize: 40,
          customIconTop: 0,
          customIconFontSize: 32,
          iconSize: 20,
          iconTop: 0, // magic for ui experience
          iconFontSize: 12,
          iconSizeSM: 16,
          dotSize: 20,
          dotCurrentSize: 24,
          navArrowColor: '#163CFF',
          navContentMaxWidth: 100,
          descriptionMaxWidth: 100,
        },
      },
    }}
  >
    <Steps
      current={1}
      items={[
        {
          title: 'Finished',
          content,
        },
        {
          title: 'In Progress',
          content,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          content,
        },
      ]}
    />
    <Steps
      size="small"
      current={1}
      items={[
        {
          title: 'Finished',
          content,
        },
        {
          title: 'In Progress',
          content,
          subTitle: 'Left 00:00:08',
        },
        {
          title: 'Waiting',
          content,
        },
      ]}
    />
    <Steps
      items={[
        {
          title: 'Login',
          status: 'finish',
          icon: <UserOutlined />,
        },
        {
          title: 'Verification',
          status: 'finish',
          icon: <SolutionOutlined />,
        },
        {
          title: 'Pay',
          status: 'process',
          icon: <LoadingOutlined />,
        },
        {
          title: 'Done',
          status: 'wait',
          icon: <SmileOutlined />,
        },
      ]}
    />
    <Steps
      type="dot"
      current={1}
      items={[
        {
          title: 'Finished',
          content: 'This is a content.',
        },
        {
          title: 'In Progress',
          content: 'This is a content.',
        },
        {
          title: 'Waiting',
          content: 'This is a content.',
        },
      ]}
    />
    <Steps
      type="navigation"
      current={1}
      items={[
        {
          title: 'Step 1',
          subTitle: '00:00:05',
          status: 'finish',
          content: 'This is a content.',
        },
        {
          title: 'Step 2',
          subTitle: '00:01:02',
          status: 'process',
          content: 'This is a content.',
        },
        {
          title: 'Step 3',
          subTitle: 'waiting for longlong time',
          status: 'wait',
          content: 'This is a content.',
        },
      ]}
    />
  </ConfigProvider>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Steps 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Steps } from 'antd';
import type { StepsProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token }) => ({
  root: {
    border: `2px dashed ${token.colorBorder}`,
    borderRadius: token.borderRadius,
    padding: token.padding,
  },
}));
const stylesObject: StepsProps['styles'] = {
  itemIcon: { borderRadius: '30%' },
  itemContent: { fontStyle: 'italic' },
};
const stylesFn: StepsProps['styles'] = (info) => {
  if (info.props.type === 'navigation') {
    return {
      root: {
        borderColor: '#1890ff',
      },
    } satisfies StepsProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles } = useStyles();
  const sharedProps: StepsProps = {
    items: [
      { title: 'Finished', content: 'This is a content.' },
      { title: 'In Progress', content: 'This is a content.' },
      { title: 'Waiting', content: 'This is a content.' },
    ],
    current: 1,
    classNames: { root: styles.root },
  };
  return (
    <Flex vertical gap="middle">
      <Steps {...sharedProps} styles={stylesObject} />
      <Steps {...sharedProps} styles={stylesFn} type="navigation" />
    </Flex>
  );
};
export default App;
```
