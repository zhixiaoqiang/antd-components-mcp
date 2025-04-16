## App 组件示例
### 基本用法
获取 `message`、`notification`、`modal` 实例。

```tsx
import React from 'react';
import { App, Button, Space } from 'antd';
// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: 'Notification topLeft',
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space wrap>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};
// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
```
### Hooks 配置
对 `message`、`notification` 进行配置。

```tsx
import React from 'react';
import { App, Button, Space } from 'antd';
// Sub page
const MyPage = () => {
  const { message, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showNotification = () => {
    notification.info({
      message: 'Notification',
      description: 'Hello, Ant Design!!',
    });
  };
  return (
    <Space wrap>
      <Button type="primary" onClick={showMessage}>
        Message for only one
      </Button>
      <Button type="primary" onClick={showNotification}>
        Notification for bottomLeft
      </Button>
    </Space>
  );
};
// Entry component
export default () => (
  <App message={{ maxCount: 1 }} notification={{ placement: 'bottomLeft' }}>
    <MyPage />
  </App>
);
```
