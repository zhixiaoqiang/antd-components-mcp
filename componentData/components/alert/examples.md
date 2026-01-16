## Alert 组件示例
### 基本
最简单的用法，适用于简短的警告提示。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => <Alert title="Success Text" type="success" />;
export default App;
```
### 四种样式
共有四种样式 `success`、`info`、`warning`、`error`。

```tsx
import React from 'react';
import { Alert } from 'antd';
const App: React.FC = () => (
  <>
    <Alert title="Success Text" type="success" />
    <br />
    <Alert title="Info Text" type="info" />
    <br />
    <Alert title="Warning Text" type="warning" />
    <br />
    <Alert title="Error Text" type="error" />
  </>
);
export default App;
```
### 可关闭的警告提示
显示关闭按钮，点击可关闭警告提示。

```tsx
import React from 'react';
import { Alert } from 'antd';
const onClose: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  console.log(e, 'I was closed.');
};
const App: React.FC = () => (
  <>
    <Alert
      title="Warning Title"
      type="warning"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
    <br />
    <Alert
      title="Success Title"
      type="success"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
    <br />
    <Alert
      title="Info Title"
      type="info"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
    />
    <br />
    <Alert
      title="Error Title"
      type="error"
      closable={{ closeIcon: true, onClose, 'aria-label': 'close' }}
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
      title="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    <br />
    <Alert
      title="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
    />
    <br />
    <Alert
      title="Warning Text"
      description="Warning Description Warning Description Warning Description Warning Description"
      type="warning"
    />
    <br />
    <Alert
      title="Error Text"
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
    <Alert title="Success Tips" type="success" showIcon />
    <br />
    <Alert title="Informational Notes" type="info" showIcon />
    <br />
    <Alert title="Warning" type="warning" showIcon closable />
    <br />
    <Alert title="Error" type="error" showIcon />
    <br />
    <Alert
      title="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <br />
    <Alert
      title="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <br />
    <Alert
      title="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
      closable
    />
    <br />
    <Alert
      title="Error"
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
    <Alert title="Warning text" banner />
    <br />
    <Alert
      title="Very long warning text warning text text text text text text text"
      banner
      closable
    />
    <br />
    <Alert showIcon={false} title="Warning text without icon" banner />
    <br />
    <Alert type="error" title="Error text" banner />
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
    title={
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
        <Alert
          title="Alert Message Text"
          type="success"
          closable={{ closeIcon: true, afterClose: handleClose }}
        />
      )}
      <p>click the close button to see the effect</p>
      <Switch onChange={setVisible} checked={visible} disabled={visible} />
    </>
  );
};
export default App;
```
### React 错误处理
友好的 [React 错误处理](https://zh-hans.react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) 包裹组件。

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
    <Alert icon={icon} title="showIcon = false" type="success" />
    <br />
    <Alert icon={icon} title="Success Tips" type="success" showIcon />
    <br />
    <Alert icon={icon} title="Informational Notes" type="info" showIcon />
    <br />
    <Alert icon={icon} title="Warning" type="warning" showIcon />
    <br />
    <Alert icon={icon} title="Error" type="error" showIcon />
    <br />
    <Alert
      icon={icon}
      title="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
    <br />
    <Alert
      icon={icon}
      title="Informational Notes"
      description="Additional description and information about copywriting."
      type="info"
      showIcon
    />
    <br />
    <Alert
      icon={icon}
      title="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      showIcon
    />
    <br />
    <Alert
      icon={icon}
      title="Error"
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
      title="Success Tips"
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
      title="Error Text"
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
      title="Warning Text"
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
      title="Info Text"
      description="Info Description Info Description Info Description Info Description"
      type="info"
      action={
        <Space vertical>
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
      title="Success Tips"
      description="Detailed description and advice about successful copywriting."
      type="success"
      showIcon
    />
  </ConfigProvider>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Alert 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Alert, Button, Flex } from 'antd';
import type { AlertProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 2px dashed #ccc;
    border-radius: 8px;
    padding: 12px;
  `,
}));
const styleFn: AlertProps['styles'] = ({ props: { type } }) => {
  if (type === 'success') {
    return {
      root: {
        backgroundColor: 'rgba(82, 196, 26, 0.1)',
        borderColor: '#b7eb8f',
      },
      icon: {
        color: '#52c41a',
      },
    } satisfies AlertProps['styles'];
  }
  if (type === 'warning') {
    return {
      root: {
        backgroundColor: 'rgba(250, 173, 20, 0.1)',
        borderColor: '#ffe58f',
      },
      icon: {
        color: '#faad14',
      },
    } satisfies AlertProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const alertSharedProps: AlertProps = {
    showIcon: true,
    classNames: {
      root: classNames.root,
    },
  };
  return (
    <Flex vertical gap="middle">
      <Alert
        {...alertSharedProps}
        title="Object styles"
        type="info"
        styles={{
          icon: {
            fontSize: 18,
          },
          section: {
            fontWeight: 500,
          },
        }}
        action={<Button size="small">Action</Button>}
      />
      <Alert {...alertSharedProps} title="Function styles" type="success" styles={styleFn} />
    </Flex>
  );
};
export default App;
```
