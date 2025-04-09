## Message 组件示例

### Hooks 调用（推荐）

#### zh-CN

通过 `message.useMessage` 创建支持读取 context 的 `contextHolder`。请注意，我们推荐通过顶层注册的方式代替 `message` 静态方法，因为静态方法无法消费上下文，因而 ConfigProvider 的数据也不会生效。

#### en-US

Use `message.useMessage` to get `contextHolder` with context accessible issue. Please note that, we recommend to use top level registration instead of `message` static method, because static method cannot consume context, and ConfigProvider data will not work.

```typescript
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

#### zh-CN

包括成功、失败、警告。

#### en-US

Messages of success, error and warning types.

```typescript
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

#### zh-CN

自定义时长 `10s`，默认时长为 `3s`。

#### en-US

Customize message display duration from default `3s` to `10s`.

```typescript
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

### 加载中

#### zh-CN

进行全局 loading，异步自行移除。

#### en-US

Display a global loading indicator, which is dismissed by itself asynchronously.

```typescript
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

#### zh-CN

可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。

#### en-US

`message` provides a promise interface for `onClose`. The above example will display a new message when the old message is about to close.

```typescript
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

### 自定义样式

#### zh-CN

使用 `style` 和 `className` 来定义样式。

#### en-US

The `style` and `className` are available to customize Message.

```typescript
import React from 'react';
import { Button, message } from 'antd';

const App: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'This is a prompt message with custom className and style',
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };

  return (
    <>
      {contextHolder}
      <Button onClick={success}>Customized style</Button>
    </>
  );
};

export default App;

```

### 更新消息内容

#### zh-CN

可以通过唯一的 `key` 来更新内容。

#### en-US

Update message content with unique `key`.

```typescript
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

#### zh-CN

静态方法无法消费 Context，推荐优先使用 Hooks 版本。

#### en-US

Static methods cannot consume Context. Please use hooks first.

```typescript
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

#### zh-CN

调试用组件，请勿直接使用。

#### en-US

Debug usage. Do not use in your production.

```typescript
import React from 'react';
import { message } from 'antd';

/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = message;

export default () => <InternalPanel content="Hello World!" type="error" />;

```

### 组件 Token

#### zh-CN

Component Token Debug.

#### en-US

Component Token Debug

```typescript
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

