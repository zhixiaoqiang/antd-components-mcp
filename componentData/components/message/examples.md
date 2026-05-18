## Message 组件示例
### Hooks 调用（推荐）
通过 `message.useMessage` 创建支持读取 context 的 `contextHolder`。请注意，我们推荐通过顶层注册的方式代替 `message` 静态方法，因为静态方法无法消费上下文，因而 ConfigProvider 的数据也不会生效。

```tsx
import React from 'react';
import { Button, message } from 'antd';
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
};
export default App;
```
### 其他提示类型
包括成功、失败、警告。

```tsx
import React from 'react';
import { Button, message, Space } from 'antd';
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'This is an error message',
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'This is a warning message',
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
        <Button onClick={warning}>Warning</Button>
      </Space>
    </>
  );
};
export default App;
```
### 修改延时
自定义时长 `10s`，默认时长为 `3s`。

```tsx
import React from 'react';
import { Button, message } from 'antd';
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message for success, and it will disappear in 10 seconds',
      duration: 10,
    });
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized display duration</Button>
    </>
  );
};
export default App;
```
### 堆叠
堆叠配置，默认关闭。超过阈值后的消息会被自动收起，可以通过 `threshold` 设置触发堆叠的数量。折叠状态下仅展示最新的消息。

```tsx
import React from 'react';
import { Button, Divider, InputNumber, message, Space, Switch } from 'antd';
const App: React.FC = () => {
  const [enabled, setEnabled] = React.useState(true);
  const [threshold, setThreshold] = React.useState(3);
  const indexRef = React.useRef(0);
  const [messageApi, contextHolder] = message.useMessage({
    stack: enabled
      ? {
          threshold,
        }
      : false,
  });
  const openMessage = () => {
    indexRef.current += 1;
    const isOdd = indexRef.current % 2 === 1;
    messageApi.open({
      type: 'info',
      content: isOdd
        ? `Message ${indexRef.current}: This is a stacked message.`
        : `Message ${indexRef.current}: This is a slightly longer stacked message.`,
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Space size="large">
        <Space style={{ width: '100%' }}>
          <span>Enabled: </span>
          <Switch
            aria-label="Enable message stack"
            checked={enabled}
            onChange={(v) => setEnabled(v)}
          />
        </Space>
        <Space style={{ width: '100%' }}>
          <span>Threshold: </span>
          <InputNumber
            aria-label="Stack threshold"
            disabled={!enabled}
            value={threshold}
            step={1}
            min={1}
            max={10}
            onChange={(v) => setThreshold(v ?? 1)}
          />
        </Space>
      </Space>
      <Divider />
      <Space>
        <Button type="primary" onClick={openMessage}>
          Open the message box
        </Button>
        <Button onClick={() => messageApi.destroy()}>Destroy all</Button>
      </Space>
    </>
  );
};
export default App;
```
### 加载中
进行全局 loading，异步自行移除。

```tsx
import React from 'react';
import { Button, message } from 'antd';
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 2500);
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display a loading indicator</Button>
    </>
  );
};
export default App;
```
### Promise 接口
可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

```tsx
import React from 'react';
import { Button, message } from 'antd';
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi
      .open({
        type: 'loading',
        content: 'Action in progress..',
        duration: 2.5,
      })
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished', 2.5));
  };
  return (
    <>
      {contextHolder}
      <Button onClick={success}>Display sequential messages</Button>
    </>
  );
};
export default App;
```
### 自定义语义结构样式
通过 `classNames` 和 `styles` 可以自定义消息的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Button, message, Space } from 'antd';
import type { GetProp, MessageArgsProps } from 'antd';
const defaultStyles: GetProp<MessageArgsProps, 'styles', 'Return'> = {
  root: {
    backgroundColor: '#f6ffed',
    border: '2px solid #95de64',
    borderRadius: 16,
    boxShadow: '4px 4px 0 #d9f7be',
  },
  icon: {
    color: '#237804',
  },
  title: {
    color: '#237804',
    fontWeight: 600,
  },
};
const stylesFn: MessageArgsProps['styles'] = ({
  props,
}): GetProp<MessageArgsProps, 'styles', 'Return'> => {
  if (props.type === 'error') {
    return {
      root: {
        ...defaultStyles.root,
        backgroundColor: '#fff2f0',
        borderColor: '#ffccc7',
        boxShadow: '4px 4px 0 #ffccc7',
      },
      icon: {
        color: '#cf1322',
      },
      title: {
        color: '#cf1322',
        fontWeight: 600,
      },
    };
  }
  return defaultStyles;
};
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const showObjectStyle = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a message with object styles',
      styles: defaultStyles,
    });
  };
  const showFunctionStyle = () => {
    messageApi.open({
      type: 'error',
      content: 'This is a message with function styles',
      styles: stylesFn,
    });
  };
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={showObjectStyle}>Object style</Button>
        <Button onClick={showFunctionStyle} type="primary">
          Function style
        </Button>
      </Space>
    </>
  );
};
export default App;
```
### 更新消息内容
可以通过唯一的 `key` 来更新内容。

```tsx
import React from 'react';
import { Button, message } from 'antd';
const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </>
  );
};
export default App;
```
### 静态方法（不推荐）
静态方法无法消费 Context，不能动态响应 ConfigProvider 提供的各项配置，启用 `layer` 时还可能导致样式异常。请优先使用 hooks 版本或者 App 组件提供的 `message` 实例。

```tsx
import React from 'react';
import { Button, message } from 'antd';
const info = () => {
  message.info('This is a normal message');
};
const App: React.FC = () => (
  <Button type="primary" onClick={info}>
    Static Method
  </Button>
);
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { message } from 'antd';
/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;
export default () => <InternalPanel content="Hello World!" type="error" />;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, message } from 'antd';
/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;
export default () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Message: {
            contentPadding: 40,
            contentBg: '#e6f4ff',
          },
        },
      }}
    >
      <InternalPanel content="Hello World!" type="error" />
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Message: {
            colorBgElevated: '#e6f4ff',
          },
        },
      }}
    >
      <InternalPanel content="Hello World!" type="error" />
    </ConfigProvider>
  </>
);
```
