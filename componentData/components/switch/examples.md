## Switch 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Switch } from 'antd';
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
const App: React.FC = () => <Switch defaultChecked onChange={onChange} />;
export default App;
```
### 不可用
Switch 失效状态。

```tsx
import React, { useState } from 'react';
import { Button, Space, Switch } from 'antd';
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <Space vertical>
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
带有文字和图标。

```tsx
import React from 'react';
import { CheckOutlined, CloseOutlined, FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Flex, Switch } from 'antd';
const Demo: React.FC = () => (
  <Flex gap="medium" align="flex-start" justify="flex-start" vertical>
    <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
    <Switch checkedChildren={1} unCheckedChildren={0} defaultChecked />
    <Switch
      defaultChecked
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
    />
    <Switch
      defaultChecked
      checkedChildren={
        <Flex gap={4} justify="flex-start" align="center">
          <SmileOutlined />
          Happy
        </Flex>
      }
      unCheckedChildren={
        <Flex gap={4} justify="flex-start" align="center">
          <FrownOutlined />
          Sad
        </Flex>
      }
    />
  </Flex>
);
export default Demo;
```
### 两种大小
`size="small"` 表示小号开关。

```tsx
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
标识开关操作仍在执行中。

```tsx
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
自定义组件 Token。

```tsx
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
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Switch 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Switch } from 'antd';
import type { GetProp, SwitchProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyle = createStyles((props) => {
  const { cssVar, css } = props;
  return {
    root: css`
      width: 40px;
      background-color: ${cssVar.colorPrimary};
    `,
    muiRoot: css`
      min-width: 32px;
      height: 14px;
      line-height: 14px;
      &&.ant-switch-checked {
        background-color: rgba(25, 118, 210, 0.5);
        .ant-switch-handle {
          inset-inline-start: calc(100% - 17px);
        }
      }
    `,
    muiIndicator: css`
      top: -3px;
      width: 20px;
      height: 20px;
      &&& {
        inset-inline-start: -3px;
      }
      &&&::before {
        background-color: rgb(25, 118, 210);
        border-radius: 999px;
        box-shadow:
          rgba(0, 0, 0, 0.2) 0 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0 1px 1px 0,
          rgba(0, 0, 0, 0.12) 0 1px 4px 0;
      }
    `,
  };
});
const stylesObject: SwitchProps['styles'] = {
  root: {
    backgroundColor: '#F5D2D2',
  },
};
const stylesFn: SwitchProps['styles'] = (info): GetProp<SwitchProps, 'styles', 'Return'> => {
  if (info.props.size === 'medium') {
    return {
      root: {
        backgroundColor: '#BDE3C3',
      },
    };
  }
  return {};
};
const Demo: React.FC = () => {
  const { styles: classNames } = useStyle();
  return (
    <Flex vertical align="flex-start" justify="flex-start" gap="medium">
      <Switch
        size="small"
        checkedChildren="on"
        unCheckedChildren="off"
        styles={stylesObject}
        classNames={{ root: classNames.root }}
      />
      <Switch
        size="medium"
        checkedChildren="on"
        unCheckedChildren="off"
        styles={stylesFn}
        classNames={classNames}
      />
      <Switch
        defaultChecked
        classNames={{ root: classNames.muiRoot, indicator: classNames.muiIndicator }}
      />
    </Flex>
  );
};
export default Demo;
```
