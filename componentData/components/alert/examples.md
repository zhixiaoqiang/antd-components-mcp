## Alert 组件示例
### 基本
最简单的用法，适用于简短的警告提示。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => <Alert message="Success Text" type="success" />;
export default App;
```
### 四种样式
共有四种样式 `success`、`info`、`warning`、`error`。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => (
  <>
    <Alert message="Success Text" type="success" />
    <br />
    <Alert message="Info Text" type="info" />
    <br />
    <Alert message="Warning Text" type="warning" />
    <br />
    <Alert message="Error Text" type="error" />
  </>
);
export default App;
```
### 可关闭的警告提示
显示关闭按钮，点击可关闭警告提示。

```tsx
import React from 'react';
import { CloseSquareOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  console.log(e, 'I was closed.');
};
const App: React.FC = () => (
  <>
    <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      onClose={onClose}
    />
    <br />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      closable
      onClose={onClose}
    />
    <br />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description Error Description Error Description"
      type="error"
      onClose={onClose}
      closable={{
        'aria-label': 'close',
        closeIcon: <CloseSquareOutlined />,
      }}
    />
  </>
);
export default App;
```
### 含有辅助性文字介绍
含有辅助性文字介绍的警告提示。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => (
  <>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <br />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <br />
    <Alert
      message="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <br />
    <Alert
      message="Error Text"
      description="Error Description Error Description Error Description Error Description"
      type="error"
    />
  </>
);
export default App;
```
### 图标
可口的图标让信息类型更加醒目。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => (
  <>
    <Alert message="Success Tips" type="success" showIcon />
    <br />
    <Alert message="Informational Notes" type="info" showIcon />
    <br />
    <Alert message="Warning" type="warning" showIcon closable />
    <br />
    <Alert message="Error" type="error" showIcon />
    <br />
    <Alert
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <br />
    <Alert
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <br />
    <Alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    />
    <br />
    <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>
);
export default App;
```
### 顶部公告
页面顶部通告形式，默认有图标且 `type` 为 'warning'。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => (
  <>
    <Alert message="Warning text" banner />
    <br />
    <Alert
      message="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert showIcon={false} message="Warning text without icon" banner />
    <br />
    <Alert type="error" message="Error text" banner />
  </>
);
export default App;
```
### 轮播的公告
配合 [react-text-loop-next](https://npmjs.com/package/react-text-loop-next) 或 [react-fast-marquee](https://npmjs.com/package/react-fast-marquee) 实现消息轮播通知栏。

```tsx
import React from 'react';
import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';
const App: React.FC = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
);
export default App;
```
### 平滑地卸载
平滑、自然的卸载提示。

```tsx
import React, { useState } from 'react';
import { Alert, Switch } from 'antd';
const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <>
      {visible && (
        <Alert message="Alert Message Text" type="success" closable afterClose={handleClose} />
      )}
      <p>click the close button to see the effect</p>
      <Switch onChange={setVisible} checked={visible} disabled={visible} />
    </>
  );
};
export default App;
```
### React 错误处理
友好的 [React 错误处理](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) 包裹组件。

```tsx
import React, { useState } from 'react';
import { Alert, Button } from 'antd';
const { ErrorBoundary } = Alert;
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };
  if (error) {
    throw error;
  }
  return (
    <Button danger onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};
const App: React.FC = () => (
  <ErrorBoundary>
    <ThrowError />
  </ErrorBoundary>
);
export default App;
```
### 自定义图标
可口的图标让信息类型更加醒目。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
const icon = <SmileOutlined />;
const App: React.FC = () => (
  <>
    <Alert icon={icon} message="showIcon = false" type="success" />
    <br />
    <Alert icon={icon} message="Success Tips" type="success" showIcon />
    <br />
    <Alert icon={icon} message="Informational Notes" type="info" showIcon />
    <br />
    <Alert icon={icon} message="Warning" type="warning" showIcon />
    <br />
    <Alert icon={icon} message="Error" type="error" showIcon />
    <br />
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <br />
    <Alert
      icon={icon}
      message="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <br />
    <Alert
      icon={icon}
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <br />
    <Alert
      icon={icon}
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
    />
  </>
);
export default App;
```
### 操作
可以在右上角自定义操作项。

```tsx
import React from 'react';
import { Alert, Button, Space } from 'antd';
const App: React.FC = () => (
  <>
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          UNDO
        </Button>
      }
      closable
    />
    <br />
    <Alert
      message="Error Text"
      showIcon
      description="Error Description Error Description Error Description Error Description"
      type="error"
      action={
        <Button size="small" danger>
          Detail
        </Button>
      }
    />
    <br />
    <Alert
      message="Warning Text"
      type="warning"
      action={
        <Space>
          <Button type="text" size="small">
            Done
          </Button>
        </Space>
      }
      closable
    />
    <br />
    <Alert
      message="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space direction="vertical">
          <Button size="small" type="primary">
            Accept
          </Button>
          <Button size="small" danger ghost>
            Decline
          </Button>
        </Space>
      }
      closable
    />
  </>
);
export default App;
```
### 组件 Token
自定义组件 Token。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Alert, ConfigProvider } from 'antd';
const icon = <SmileOutlined />;
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Alert: {
          withDescriptionIconSize: 32,
          withDescriptionPadding: 16,
        },
      },
    }}
  >
    <Alert
      icon={icon}
      message="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
  </ConfigProvider>
);
export default App;
```
