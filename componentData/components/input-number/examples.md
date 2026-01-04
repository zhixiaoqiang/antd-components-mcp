## InputNumber 组件示例
### 基本
数字输入框。

```tsx
import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};
const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />;
export default App;
```
### 三种大小
三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```tsx
import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber, Space } from 'antd';
const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};
const App: React.FC = () => (
  <Space wrap>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </Space>
);
export default App;
```
### 前置/后置标签
用于配置一些固定组合。

```tsx
import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, InputNumber, Select, Space } from 'antd';
const selectBefore = (
  <Select
    defaultValue="add"
    style={{ width: 60 }}
    options={[
      { label: '+', value: 'add' },
      { label: '-', value: 'minus' },
    ]}
  />
);
const selectAfter = (
  <Select
    defaultValue="USD"
    style={{ width: 60 }}
    options={[
      { label: '$', value: 'USD' },
      { label: '€', value: 'EUR' },
      { label: '£', value: 'GBP' },
      { label: '¥', value: 'CNY' },
    ]}
  />
);
const App: React.FC = () => (
  <Space vertical>
    <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
    <InputNumber addonBefore={selectBefore} addonAfter={selectAfter} defaultValue={100} />
    <InputNumber addonAfter={<SettingOutlined />} defaultValue={100} />
    <InputNumber
      addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
      defaultValue={100}
    />
    <InputNumber
      addonBefore="+"
      addonAfter={<SettingOutlined />}
      defaultValue={100}
      disabled
      controls
    />
    <InputNumber
      prefix="¥"
      addonBefore="+"
      addonAfter={<SettingOutlined />}
      defaultValue={100}
      disabled
      controls
    />
  </Space>
);
export default App;
```
### 不可用
点击按钮切换可用状态。

```tsx
import React, { useState } from 'react';
import { Button, InputNumber } from 'antd';
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <InputNumber min={1} max={10} disabled={disabled} defaultValue={3} />
      <div style={{ marginTop: 20 }}>
        <Button onClick={toggle} type="primary">
          Toggle disabled
        </Button>
      </div>
    </>
  );
};
export default App;
```
### 高精度小数
通过 `stringMode` 开启高精度小数支持，`onChange` 事件将返回 string 类型。对于旧版浏览器，你需要 BigInt polyfill。

```tsx
import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};
const App: React.FC = () => (
  <InputNumber<string>
    style={{ width: 200 }}
    defaultValue="1"
    min="0"
    max="10"
    step="0.00000000000001"
    onChange={onChange}
    stringMode
  />
);
export default App;
```
### 格式化展示
通过 `formatter` 格式化数字，以展示具有具体含义的数据，往往需要配合 `parser` 一起使用。
> 这里有一个更复杂的货币格式化输入框：[https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo](https://codesandbox.io/s/currency-wrapper-antd-input-3ynzo)

```tsx
import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber, Space } from 'antd';
const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};
const formatter: InputNumberProps<number>['formatter'] = (value) => {
  const [start, end] = `${value}`.split('.') || [];
  const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$ ${end ? `${v}.${end}` : `${v}`}`;
};
const App: React.FC = () => (
  <Space>
    <InputNumber<number>
      defaultValue={1000}
      formatter={formatter}
      parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
      onChange={onChange}
    />
    <InputNumber<number>
      defaultValue={100}
      min={0}
      max={100}
      formatter={(value) => `${value}%`}
      parser={(value) => value?.replace('%', '') as unknown as number}
      onChange={onChange}
    />
  </Space>
);
export default App;
```
### 键盘行为
使用 `keyboard` 属性可以控制键盘行为。

```tsx
import React, { useState } from 'react';
import { Checkbox, InputNumber, Space } from 'antd';
const App: React.FC = () => {
  const [keyboard, setKeyboard] = useState(true);
  return (
    <Space>
      <InputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <Checkbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </Checkbox>
    </Space>
  );
};
export default App;
```
### 鼠标滚轮
启用鼠标滚轮控制。

```tsx
import React from 'react';
import type { InputNumberProps } from 'antd';
import { InputNumber } from 'antd';
const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};
const onStep: InputNumberProps['onStep'] = (value, info) => {
  console.log('onStep', value, info);
};
const App: React.FC = () => (
  <InputNumber
    min={1}
    max={10}
    defaultValue={3}
    onChange={onChange}
    onStep={onStep}
    changeOnWheel
  />
);
export default App;
```
### 形态变体
InputNumber 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Flex, InputNumber } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap={12}>
    <InputNumber placeholder="Outlined" style={{ width: 200 }} />
    <InputNumber placeholder="Filled" variant="filled" style={{ width: 200 }} />
    <InputNumber placeholder="Borderless" variant="borderless" style={{ width: 200 }} />
    <InputNumber placeholder="Underlined" variant="underlined" style={{ width: 200 }} />
  </Flex>
);
export default App;
```
### 拨轮
数字拨轮。

```tsx
import React from 'react';
import type { InputNumberProps } from 'antd';
import { Flex, InputNumber } from 'antd';
const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};
const sharedProps = {
  mode: 'spinner' as const,
  min: 1,
  max: 10,
  defaultValue: 3,
  onChange,
  style: { width: 150 },
};
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <InputNumber {...sharedProps} placeholder="Outlined" />
    <InputNumber {...sharedProps} variant="filled" placeholder="Filled" />
  </Flex>
);
export default App;
```
### Filled Debug
Filled Debug.

```tsx
import React from 'react';
import { Flex, InputNumber } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Flex gap={12}>
      <InputNumber placeholder="Filled" variant="filled" />
      <InputNumber placeholder="Filled" variant="filled" disabled />
      <InputNumber placeholder="Filled" variant="filled" status="error" />
    </Flex>
    <Flex gap={12}>
      <InputNumber prefix="$" placeholder="Filled" variant="filled" />
      <InputNumber prefix="$" placeholder="Filled" variant="filled" disabled />
      <InputNumber prefix="$" placeholder="Filled" variant="filled" status="error" />
    </Flex>
    <Flex gap={12}>
      <InputNumber addonBefore="http://" addonAfter=".com" placeholder="Filled" variant="filled" />
      <InputNumber
        addonBefore="http://"
        addonAfter=".com"
        placeholder="Filled"
        variant="filled"
        disabled
      />
      <InputNumber
        addonBefore="http://"
        addonAfter=".com"
        placeholder="Filled"
        variant="filled"
        status="error"
      />
    </Flex>
    <Flex gap={12}>
      <InputNumber addonAfter=".com" placeholder="Filled" variant="filled" />
      <InputNumber addonAfter=".com" placeholder="Filled" variant="filled" disabled />
      <InputNumber addonAfter=".com" placeholder="Filled" variant="filled" status="error" />
    </Flex>
    <Flex gap={12}>
      <InputNumber addonBefore="http://" placeholder="Filled" variant="filled" />
      <InputNumber addonBefore="http://" placeholder="Filled" variant="filled" disabled />
      <InputNumber addonBefore="http://" placeholder="Filled" variant="filled" status="error" />
    </Flex>
    <Flex gap={12}>
      <InputNumber
        addonBefore="http://"
        placeholder="Outlined"
        variant="outlined"
        status="warning"
      />
      <InputNumber
        addonBefore="http://"
        placeholder="Filled"
        variant="filled"
        status="warning"
        disabled
      />
      <InputNumber addonBefore="http://" placeholder="Filled" variant="filled" status="warning" />
    </Flex>
  </Flex>
);
export default App;
```
### 超出边界
当通过受控将 `value` 超出边界时，提供警告样式。

```tsx
import React, { useState } from 'react';
import { Button, InputNumber, Space } from 'antd';
const App: React.FC = () => {
  const [value, setValue] = useState<string | number | null>('99');
  return (
    <Space>
      <InputNumber min={1} max={10} value={value} onChange={setValue} />
      <Button
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </Button>
    </Space>
  );
};
export default App;
```
### 前缀/后缀
在输入框上添加前缀或后缀图标。

```tsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Flex, InputNumber, Space } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <InputNumber prefix="￥" style={{ width: '100%' }} />
    <Space.Compact block>
      <Space.Addon>
        <UserOutlined />
      </Space.Addon>
      <InputNumber prefix="￥" style={{ width: '100%' }} />
    </Space.Compact>
    <InputNumber prefix="￥" disabled style={{ width: '100%' }} />
    <InputNumber suffix="RMB" style={{ width: '100%' }} />
  </Flex>
);
export default App;
```
### 自定义状态
使用 `status` 为 InputNumber 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { InputNumber, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <InputNumber status="error" style={{ width: '100%' }} />
    <InputNumber status="warning" style={{ width: '100%' }} />
    <InputNumber status="error" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
    <InputNumber status="warning" style={{ width: '100%' }} prefix={<ClockCircleOutlined />} />
  </Space>
);
export default App;
```
### 聚焦
聚焦额外配置属性。

```tsx
import React, { useRef } from 'react';
import type { GetRef } from 'antd';
import { Button, InputNumber, Space } from 'antd';
type InputNumberRef = GetRef<typeof InputNumber>;
const App: React.FC = () => {
  const inputRef = useRef<InputNumberRef>(null);
  return (
    <Space vertical style={{ width: '100%' }}>
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current?.focus({ cursor: 'start' });
          }}
        >
          Focus at first
        </Button>
        <Button
          onClick={() => {
            inputRef.current?.focus({ cursor: 'end' });
          }}
        >
          Focus at last
        </Button>
        <Button
          onClick={() => {
            inputRef.current?.focus({ cursor: 'all' });
          }}
        >
          Focus to select all
        </Button>
        <Button
          onClick={() => {
            inputRef.current?.focus({ preventScroll: true });
          }}
        >
          Focus prevent scroll
        </Button>
      </Space>
      <InputNumber style={{ width: '100%' }} defaultValue={999} ref={inputRef} />
    </Space>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 InputNumber 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, InputNumber } from 'antd';
import type { InputNumberProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyle = createStyles(({ token }) => ({
  root: {
    border: `1px solid ${token.colorPrimary}`,
    borderRadius: 8,
    width: 200,
  },
}));
const stylesObject: InputNumberProps['styles'] = {
  input: {
    fontSize: 14,
  },
};
const stylesFn: InputNumberProps['styles'] = ({ props }) => {
  if (props.size === 'large') {
    return {
      root: {
        backgroundColor: 'rgba(250,250,250, 0.5)',
        borderColor: '#722ed1',
      },
    } satisfies InputNumberProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles: classNames } = useStyle();
  const sharedProps: InputNumberProps = {
    classNames,
  };
  return (
    <Flex vertical gap="middle">
      <InputNumber {...sharedProps} styles={stylesObject} placeholder="Object" />
      <InputNumber {...sharedProps} styles={stylesFn} placeholder="Function" size="large" />
    </Flex>
  );
};
export default App;
```
### 图标按钮
可以扩展 `controls` 属性用以设置自定义图标。

```tsx
import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { InputNumber } from 'antd';
const App: React.FC = () => (
  <InputNumber controls={{ upIcon: <ArrowUpOutlined />, downIcon: <ArrowDownOutlined /> }} />
);
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { InputNumber } from 'antd';
/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalInputNumber } = InputNumber;
export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
    <InternalInputNumber style={{ width: '100%' }} />
  </div>
);
```
