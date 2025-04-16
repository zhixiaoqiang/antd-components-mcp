## Popconfirm 组件示例
### 基本
最简单的用法，支持确认标题和描述。
> `description` 在 `5.1.0` 版本中支持。

```tsx
import React from 'react';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
const confirm: PopconfirmProps['onConfirm'] = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel: PopconfirmProps['onCancel'] = (e) => {
  console.log(e);
  message.error('Click on No');
};
const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default App;
```
### 国际化
使用 `okText` 和 `cancelText` 自定义按钮文字。

```tsx
import React from 'react';
import { Button, Popconfirm } from 'antd';
const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    okText="Yes"
    cancelText="No"
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default App;
```
### 位置
位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrow: { pointAtCenter: true }`。

```tsx
import React from 'react';
import { Button, ConfigProvider, Flex, Popconfirm } from 'antd';
const text = 'Are you sure to delete this task?';
const description = 'Delete the task';
const buttonWidth = 80;
const App: React.FC = () => (
  <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
    <Flex vertical justify="center" align="center" className="demo">
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="topLeft"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>TL</Button>
        </Popconfirm>
        <Popconfirm
          placement="top"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>Top</Button>
        </Popconfirm>
        <Popconfirm
          placement="topRight"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>TR</Button>
        </Popconfirm>
      </Flex>
      <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
        <Flex align="center" vertical>
          <Popconfirm
            placement="leftTop"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          >
            <Button>LT</Button>
          </Popconfirm>
          <Popconfirm
            placement="left"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          >
            <Button>Left</Button>
          </Popconfirm>
          <Popconfirm
            placement="leftBottom"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          >
            <Button>LB</Button>
          </Popconfirm>
        </Flex>
        <Flex align="center" vertical>
          <Popconfirm
            placement="rightTop"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          >
            <Button>RT</Button>
          </Popconfirm>
          <Popconfirm
            placement="right"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          >
            <Button>Right</Button>
          </Popconfirm>
          <Popconfirm
            placement="rightBottom"
            title={text}
            description={description}
            okText="Yes"
            cancelText="No"
          >
            <Button>RB</Button>
          </Popconfirm>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popconfirm
          placement="bottomLeft"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>BL</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottom"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>Bottom</Button>
        </Popconfirm>
        <Popconfirm
          placement="bottomRight"
          title={text}
          description={description}
          okText="Yes"
          cancelText="No"
        >
          <Button>BR</Button>
        </Popconfirm>
      </Flex>
    </Flex>
  </ConfigProvider>
);
export default App;
```
### 贴边偏移
当 Popconfirm 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

```tsx
import React from 'react';
import { Button, Popconfirm } from 'antd';
const style: React.CSSProperties = {
  width: '300vw',
  height: '300vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div style={style}>
      <Popconfirm title="Thanks for using antd. Have a nice day !" open>
        <Button type="primary">Scroll The Window</Button>
      </Popconfirm>
    </div>
  );
};
export default App;
```
### 条件触发
可以判断是否需要弹出。

```tsx
import React, { useState } from 'react';
import { Button, message, Popconfirm, Switch } from 'antd';
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [condition, setCondition] = useState(true);
  const changeCondition = (checked: boolean) => {
    setCondition(checked);
  };
  const confirm = () => {
    setOpen(false);
    message.success('Next step.');
  };
  const cancel = () => {
    setOpen(false);
    message.error('Click on cancel.');
  };
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setOpen(newOpen);
      return;
    }
    // Determining condition before show the popconfirm.
    console.log(condition);
    if (condition) {
      confirm(); // next step
    } else {
      setOpen(newOpen);
    }
  };
  return (
    <div>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        open={open}
        onOpenChange={handleOpenChange}
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete a task</Button>
      </Popconfirm>
      <br />
      <br />
      Whether directly execute：
      <Switch defaultChecked onChange={changeCondition} />
    </div>
  );
};
export default App;
```
### 自定义 Icon 图标
自定义提示 `icon`。

```tsx
import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
const App: React.FC = () => (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
  >
    <Button danger>Delete</Button>
  </Popconfirm>
);
export default App;
```
### 异步关闭
点击确定后异步关闭气泡确认框，例如提交表单。

```tsx
import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showPopconfirm = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with async logic"
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};
export default App;
```
### 基于 Promise 的异步关闭
点击确定后异步关闭 Popconfirm，例如提交表单。

```tsx
import React from 'react';
import { Button, Popconfirm } from 'antd';
const App: React.FC = () => {
  const confirm = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(null), 3000);
    });
  return (
    <Popconfirm
      title="Title"
      description="Open Popconfirm with Promise"
      onConfirm={confirm}
      onOpenChange={() => console.log('open change')}
    >
      <Button type="primary">Open Popconfirm with Promise</Button>
    </Popconfirm>
  );
};
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App: React.FC = () => (
  <>
    <InternalPopconfirm title="Are you OK?" description="Does this look good?" />
    <InternalPopconfirm
      title="Are you OK?"
      description="Does this look good?"
      placement="bottomRight"
      style={{ width: 250 }}
    />
    <InternalPopconfirm icon={null} title="Are you OK?" />
    <InternalPopconfirm icon={null} title="Are you OK?" description="Does this look good?" />
  </>
);
export default App;
```
### 线框风格
线框风格。

```tsx
import React from 'react';
import { ConfigProvider, Popconfirm } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopconfirm } = Popconfirm;
const App: React.FC = () => (
  <ConfigProvider theme={{ token: { wireframe: true } }}>
    <InternalPopconfirm title="Are you OK?" />
    <InternalPopconfirm title="Are you OK?" placement="bottomRight" style={{ width: 250 }} />
  </ConfigProvider>
);
export default App;
```
