## Notification 组件示例
### Hooks 调用（推荐）
通过 `notification.useNotification` 创建支持读取 context 的 `contextHolder`。请注意，我们推荐通过顶层注册的方式代替 `notification` 静态方法，因为静态方法无法消费上下文，因而 ConfigProvider 的数据也不会生效。

```tsx
import React, { useMemo } from 'react';
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import type { NotificationArgsProps } from 'antd';
type NotificationPlacement = NotificationArgsProps['placement'];
const Context = React.createContext({ name: 'Default' });
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  );
};
export default App;
```
### 自动关闭的延时
自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。

```tsx
import React from 'react';
import { Button, notification } from 'antd';
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
```
### 带有图标的通知提醒框
通知提醒框左侧有图标。

```tsx
import React from 'react';
import { Button, notification, Space } from 'antd';
type NotificationType = 'success' | 'info' | 'warning' | 'error';
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
        <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
        <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
        <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      </Space>
    </>
  );
};
export default App;
```
### 自定义按钮
自定义关闭按钮的样式和文字。

```tsx
import React from 'react';
import { Button, notification, Space } from 'antd';
const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type="link" size="small" onClick={() => api.destroy()}>
          Destroy All
        </Button>
        <Button type="primary" size="small" onClick={() => api.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    api.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
```
### 自定义图标
图标可以被自定义。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
```
### 位置
使用 `placement` 可以配置通知从上面、下面、左上角、右上角、左下角、右下角弹出。

```tsx
import React from 'react';
import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Divider, notification, Space } from 'antd';
import type { NotificationArgsProps } from 'antd';
type NotificationPlacement = NotificationArgsProps['placement'];
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Notification ${placement}`,
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
          top
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottom')}
          icon={<BorderBottomOutlined />}
        >
          bottom
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('topLeft')}
          icon={<RadiusUpleftOutlined />}
        >
          topLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('topRight')}
          icon={<RadiusUprightOutlined />}
        >
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          type="primary"
          onClick={() => openNotification('bottomLeft')}
          icon={<RadiusBottomleftOutlined />}
        >
          bottomLeft
        </Button>
        <Button
          type="primary"
          onClick={() => openNotification('bottomRight')}
          icon={<RadiusBottomrightOutlined />}
        >
          bottomRight
        </Button>
      </Space>
    </>
  );
};
export default App;
```
### 自定义样式
使用 style 和 className 来定义样式。

```tsx
import React from 'react';
import { Button, notification } from 'antd';
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      className: 'custom-class',
      style: {
        width: 600,
      },
    });
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
```
### 更新消息内容
可以通过唯一的 key 来更新内容。

```tsx
import React from 'react';
import { Button, notification } from 'antd';
const key = 'updatable';
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: 'Notification Title',
      description: 'description.',
    });
    setTimeout(() => {
      api.open({
        key,
        message: 'New Title',
        description: 'New description.',
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  );
};
export default App;
```
### 堆叠
堆叠配置，默认开启。超过 3 个以上的消息会被自动收起，可以通过 `threshold` 来设置不会被收起的最大数量。

```tsx
import React, { useMemo } from 'react';
import { Button, Divider, InputNumber, notification, Space, Switch } from 'antd';
const Context = React.createContext({ name: 'Default' });
const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true);
  const [threshold, setThreshold] = React.useState(3);
  const [api, contextHolder] = notification.useNotification({
    stack: enabled
      ? {
          threshold,
        }
      : false,
  });
  const openNotification = () => {
    api.open({
      message: 'Notification Title',
      description: `${Array.from(
        { length: Math.round(Math.random() * 5) + 1 },
        () => 'This is the content of the notification.',
      ).join('\n')}`,
      duration: null,
    });
  };
  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div>
        <Space size="large">
          <Space style={{ width: '100%' }}>
            <span>Enabled: </span>
            <Switch checked={enabled} onChange={(v) => setEnabled(v)} />
          </Space>
          <Space style={{ width: '100%' }}>
            <span>Threshold: </span>
            <InputNumber
              disabled={!enabled}
              value={threshold}
              step={1}
              min={1}
              max={10}
              onChange={(v) => setThreshold(v || 0)}
            />
          </Space>
        </Space>
        <Divider />
        <Button type="primary" onClick={openNotification}>
          Open the notification box
        </Button>
      </div>
    </Context.Provider>
  );
};
export default App;
```
### 显示进度条
显示自动关闭通知框的进度条。

```tsx
import React from 'react';
import { Button, notification, Space } from 'antd';
const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (pauseOnHover: boolean) => () => {
    api.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      showProgress: true,
      pauseOnHover,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button type="primary" onClick={openNotification(true)}>
          Pause on hover
        </Button>
        <Button type="primary" onClick={openNotification(false)}>
          Don&apos;t pause on hover
        </Button>
      </Space>
    </>
  );
};
export default App;
```
### 静态方法（不推荐）
静态方法无法消费 Context，推荐优先使用 Hooks 版本。

```tsx
import React from 'react';
import { Button, notification } from 'antd';
const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
const App: React.FC = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Button, notification } from 'antd';
/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = notification;
export default () => (
  <InternalPanel
    message="Hello World!"
    description="Hello World?"
    type="success"
    actions={
      <Button type="primary" size="small">
        My Button
      </Button>
    }
  />
);
```
