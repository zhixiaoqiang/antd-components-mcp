## Switch 组件示例

### 基本

#### zh-CN

最简单的用法。

#### en-US

The most basic usage.

```typescript
import React from 'react';
import { Switch } from 'antd';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const App: React.FC = () => <Switch defaultChecked onChange={onChange} />;

export default App;

```

### 不可用

#### zh-CN

Switch 失效状态。

#### en-US

Disabled state of `Switch`.

```typescript
import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <Space direction="vertical">
      <Switch disabled={disabled} defaultChecked />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};

export default App;

```

### 文字和图标

#### zh-CN

带有文字和图标。

#### en-US

With text and icon.

```typescript
import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Space, Switch } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical">
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </Space>
);

export default App;

```

### 两种大小

#### zh-CN

`size="small"` 表示小号开关。

#### en-US

`size="small"` represents a small sized switch.

```typescript
import React from 'react';
import { Switch } from 'antd';

const App: React.FC = () => (
  <>
    <Switch defaultChecked />
    <br />
    <Switch size="small" defaultChecked />
  </>
);

export default App;

```

### 加载中

#### zh-CN

标识开关操作仍在执行中。

#### en-US

Mark a pending state of switch.

```typescript
import React from 'react';
import { Switch } from 'antd';

const App: React.FC = () => (
  <>
    <Switch loading defaultChecked />
    <br />
    <Switch size="small" loading />
  </>
);

export default App;

```

### 自定义组件 Token

#### zh-CN

自定义组件 Token。

#### en-US

Custom component token.

```typescript
import React from 'react';
import { ConfigProvider, Space, Switch } from 'antd';

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Switch: {
          trackHeight: 14,
          trackMinWidth: 32,
          // opacityLoading: 0.1,
          colorPrimary: 'rgb(25, 118, 210, 0.5)',
          trackPadding: -3,
          handleSize: 20,
          handleBg: 'rgb(25, 118, 210)',
          handleShadow:
            'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
          // innerMinMargin: 4,
          // innerMaxMargin: 8,
        },
      },
    }}
  >
    <Space>
      <Switch defaultChecked />
    </Space>
  </ConfigProvider>
);

export default App;

```

