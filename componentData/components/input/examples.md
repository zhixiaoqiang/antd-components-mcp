## Input 组件示例
### 基本使用
基本使用。

```tsx
import React from 'react';
import { Input } from 'antd';
const App: React.FC = () => <Input placeholder="Basic usage" />;
export default App;
```
### 三种大小
我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

```tsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Flex, Input } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
    <Input placeholder="default size" prefix={<UserOutlined />} />
    <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
  </Flex>
);
export default App;
```
### 形态变体
Input 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Flex, Input } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Input placeholder="Outlined" />
    <Input placeholder="Filled" variant="filled" />
    <Input placeholder="Borderless" variant="borderless" />
    <Input placeholder="Underlined" variant="underlined" />
    <Input.Search placeholder="Filled" variant="filled" />
  </Flex>
);
export default App;
```
### 面性变体 Debug
Filled Debug.

```tsx
import React from 'react';
import { Flex, Input } from 'antd';
const { TextArea } = Input;
const App: React.FC = () => (
  <Flex vertical gap={20}>
    <Flex gap={12}>
      <Input placeholder="Filled" variant="filled" />
      <Input placeholder="Filled" variant="filled" disabled />
      <Input placeholder="Filled" variant="filled" status="error" value="Filled Error" />
    </Flex>
    <Flex gap={12}>
      <Input prefix="$" placeholder="Filled" variant="filled" />
      <Input prefix="$" placeholder="Filled" variant="filled" disabled />
      <Input prefix="$" placeholder="Filled" variant="filled" status="error" value="Filled Error" />
    </Flex>
    <Flex gap={12}>
      <Input addonBefore="http://" addonAfter=".com" placeholder="Filled" variant="filled" />
      <Input
        addonBefore="http://"
        addonAfter=".com"
        placeholder="Filled"
        variant="filled"
        disabled
      />
      <Input
        addonBefore="http://"
        addonAfter=".com"
        placeholder="Filled"
        variant="filled"
        status="error"
        value="Filled Error"
      />
    </Flex>
    <Flex gap={12}>
      <Input addonAfter=".com" placeholder="Filled" variant="filled" />
      <Input addonAfter=".com" placeholder="Filled" variant="filled" disabled />
      <Input
        addonAfter=".com"
        placeholder="Filled"
        variant="filled"
        status="error"
        value="Filled Error"
      />
    </Flex>
    <Flex gap={12}>
      <Input addonBefore="http://" placeholder="Filled" variant="filled" />
      <Input addonBefore="http://" placeholder="Filled" variant="filled" disabled />
      <Input
        addonBefore="http://"
        placeholder="Filled"
        variant="filled"
        status="error"
        value="Filled Error"
      />
    </Flex>
    <TextArea variant="filled" placeholder="Basic" />
    <TextArea variant="filled" placeholder="Basic" status="error" value="Filled Error" />
    <TextArea variant="filled" placeholder="Allow Clear" allowClear />
    <TextArea variant="filled" placeholder="Show Count" showCount />
    <TextArea
      variant="filled"
      placeholder="Show Count"
      showCount
      status="error"
      value="Filled Error"
    />
  </Flex>
);
export default App;
```
### 前置/后置标签
用于配置一些固定组合。

```tsx
import React from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';
const selectBefore = (
  <Select
    defaultValue="http://"
    options={[
      { value: 'http://', label: 'http://' },
      { value: 'https://', label: 'https://' },
    ]}
  />
);
const selectAfter = (
  <Select
    defaultValue=".com"
    options={[
      { value: '.com', label: '.com' },
      { value: '.jp', label: '.jp' },
      { value: '.cn', label: '.cn' },
      { value: '.org', label: '.org' },
    ]}
  />
);
const App: React.FC = () => (
  <Space vertical>
    <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
    <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
    <Input
      addonBefore={<Cascader placeholder="cascader" style={{ width: 150 }} />}
      defaultValue="mysite"
    />
  </Space>
);
export default App;
```
### 紧凑模式
使用 Space.Compact 创建紧凑模式，更多请查看 [Space.Compact](/components/space-cn#spacecompact) 文档。

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];
const App: React.FC = () => (
  <Space vertical size="middle">
    <Space.Compact>
      <Input defaultValue="26888888" />
    </Space.Compact>
    <Space.Compact>
      <Input style={{ width: '20%' }} defaultValue="0571" />
      <Input style={{ width: '80%' }} defaultValue="26888888" />
    </Space.Compact>
    <Space.Compact>
      <Space.Addon>https://</Space.Addon>
      <Search placeholder="input search text" allowClear />
    </Space.Compact>
    <Space.Compact style={{ width: '100%' }}>
      <Input defaultValue="Combine input and button" />
      <Button type="primary">Submit</Button>
    </Space.Compact>
    <Space.Compact>
      <Select defaultValue="Zhejiang" options={options} />
      <Input defaultValue="Xihu District, Hangzhou" />
    </Space.Compact>
    <Space.Compact size="large">
      <Space.Addon>
        <SearchOutlined />
      </Space.Addon>
      <Input placeholder="large size" />
      <Input placeholder="another input" />
    </Space.Compact>
  </Space>
);
export default App;
```
### 输入框组合
`Input.Group` 已废弃，可以使用 [Space.Compact](/components/space-cn#spacecompact) 替代 `Input.Group`。

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import {
  AutoComplete,
  Button,
  Cascader,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Select,
  Tooltip,
} from 'antd';
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => (
  <div className="site-input-group-wrapper">
    <Input.Group size="large">
      <Row gutter={8}>
        <Col span={5}>
          <Input defaultValue="0571" />
        </Col>
        <Col span={8}>
          <Input defaultValue="26888888" />
        </Col>
      </Row>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input style={{ width: '20%' }} defaultValue="0571" />
      <Input style={{ width: '30%' }} defaultValue="26888888" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="https://ant.design" />
      <Button type="primary">Submit</Button>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input
        style={{ width: 'calc(100% - 200px)' }}
        defaultValue="git@github.com:ant-design/ant-design.git"
      />
      <Tooltip title="search git url">
        <Button icon={<SearchOutlined />} />
      </Tooltip>
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        defaultValue="Zhejiang"
        options={[
          { label: 'Zhejiang', value: 'Zhejiang' },
          { label: 'Jiangsu', value: 'Jiangsu' },
          { label: 'Other', value: 'Other' },
        ]}
      />
      <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input.Search allowClear style={{ width: '40%' }} defaultValue="0571" />
      <Input.Search allowClear style={{ width: '40%' }} defaultValue="26888888" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        defaultValue="Option1"
        options={[
          { label: 'Option1', value: 'Option1' },
          { label: 'Option2', value: 'Option2' },
        ]}
      />
      <Input style={{ width: '50%' }} defaultValue="input content" />
      <InputNumber prefix="@" />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input style={{ width: '50%' }} defaultValue="input content" />
      <DatePicker style={{ width: '50%' }} />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Input style={{ width: '30%' }} defaultValue="input content" />
      <DatePicker.RangePicker style={{ width: '70%' }} />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        defaultValue="Option1-1"
        options={[
          { label: 'Option1-1', value: 'Option1-1' },
          { label: 'Option1-2', value: 'Option1-2' },
        ]}
      />
      <Select
        defaultValue="Option2-2"
        options={[
          { label: 'Option2-1', value: 'Option2-1' },
          { label: 'Option2-2', value: 'Option2-2' },
        ]}
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        defaultValue="1"
        options={[
          { label: 'Between', value: '1' },
          { label: 'Except', value: '2' },
        ]}
      />
      <Input style={{ width: 100, textAlign: 'center' }} placeholder="Minimum" />
      <Input
        className="site-input-split"
        style={{
          width: 30,
          borderInlineStart: 0,
          borderInlineEnd: 0,
          pointerEvents: 'none',
        }}
        placeholder="~"
        disabled
      />
      <Input
        className="site-input-right"
        style={{ width: 100, textAlign: 'center' }}
        placeholder="Maximum"
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        defaultValue="Sign Up"
        style={{ width: '30%' }}
        options={[
          { label: 'Sign Up', value: 'Sign Up' },
          { label: 'Sign In', value: 'Sign In' },
        ]}
      />
      <AutoComplete
        style={{ width: '70%' }}
        placeholder="Email"
        options={[{ value: 'text 1' }, { value: 'text 2' }]}
      />
    </Input.Group>
    <br />
    <Input.Group compact>
      <Select
        style={{ width: '30%' }}
        defaultValue="Home"
        options={[
          { label: 'Home', value: 'Home' },
          { label: 'Company', value: 'Company' },
        ]}
      />
      <Cascader style={{ width: '70%' }} options={options} placeholder="Select Address" />
    </Input.Group>
  </div>
);
export default App;
```
### 搜索框
带有搜索按钮的输入框。

```tsx
import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';
type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;
const suffix = <AudioOutlined style={{ fontSize: 16, color: '#1677ff' }} />;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const App: React.FC = () => (
  <Space vertical>
    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
    <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
    <Space.Compact>
      <Space.Addon>https://</Space.Addon>
      <Search placeholder="input search text" allowClear onSearch={onSearch} />
    </Space.Compact>
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
);
export default App;
```
### 搜索框 loading
用于 `onSearch` 的时候展示 `loading`。

```tsx
import React from 'react';
import { Input } from 'antd';
const { Search } = Input;
const App: React.FC = () => (
  <>
    <Search placeholder="input search loading default" loading />
    <br />
    <br />
    <Search placeholder="input search loading with enterButton" loading enterButton />
    <br />
    <br />
    <Search placeholder="input search text" enterButton="Search" size="large" loading />
  </>
);
export default App;
```
### 文本域
用于多行输入。

```tsx
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const App: React.FC = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
);
export default App;
```
### 适应文本高度的文本域
`autoSize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autoSize` 可以设定为一个对象，指定最小行数和最大行数。

```tsx
import React, { useState } from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const App: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <TextArea placeholder="Autosize height based on content lines" autoSize />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        placeholder="Autosize height with minimum and maximum number of lines"
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <div style={{ margin: '24px 0' }} />
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    </>
  );
};
export default App;
```
### 一次性密码框
一次性密码输入框。

```tsx
import React from 'react';
import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';
type OTPProps = GetProps<typeof Input.OTP>;
const { Title } = Typography;
const App: React.FC = () => {
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };
  const onInput: OTPProps['onInput'] = (value) => {
    console.log('onInput:', value);
  };
  const sharedProps: OTPProps = {
    onChange,
    onInput,
  };
  return (
    <Flex gap="middle" align="flex-start" vertical>
      <Title level={5}>With formatter (Upcase)</Title>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      <Title level={5}>With Disabled</Title>
      <Input.OTP disabled {...sharedProps} />
      <Title level={5}>With Length (8)</Title>
      <Input.OTP length={8} {...sharedProps} />
      <Title level={5}>With variant</Title>
      <Input.OTP variant="filled" {...sharedProps} />
      <Title level={5}>With custom display character</Title>
      <Input.OTP mask="🔒" {...sharedProps} />
      <Title level={5}>With custom ReactNode separator</Title>
      <Input.OTP separator={<span>/</span>} {...sharedProps} />
      <Title level={5}>With custom function separator</Title>
      <Input.OTP
        separator={(i) => <span style={{ color: i & 1 ? 'red' : 'blue' }}>—</span>}
        {...sharedProps}
      />
    </Flex>
  );
};
export default App;
```
### 输入时格式化展示
结合 [Tooltip](/components/tooltip-cn) 组件，实现一个数值输入框，方便内容超长时的全量展现。

```tsx
import React, { useState } from 'react';
import { Input, Tooltip } from 'antd';
interface NumericInputProps {
  style: React.CSSProperties;
  value: string;
  onChange: (value: string) => void;
}
const formatNumber = (value: number) => new Intl.NumberFormat().format(value);
const NumericInput = (props: NumericInputProps) => {
  const { value, onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };
  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };
  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Tooltip
      trigger={['focus']}
      title={title}
      placement="topLeft"
      classNames={{ root: 'numeric-input' }}
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={16}
      />
    </Tooltip>
  );
};
const App: React.FC = () => {
  const [value, setValue] = useState('');
  return <NumericInput style={{ width: 120 }} value={value} onChange={setValue} />;
};
export default App;
```
### 前缀和后缀
在输入框上添加前缀或后缀图标。注意：Input.Password 的 `suffix` 属性在 `>=5.27.0` 版本支持。

```tsx
import React from 'react';
import { InfoCircleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Tooltip } from 'antd';
const App: React.FC = () => (
  <>
    <Input
      placeholder="Enter your username"
      prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
    />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" />
    <br />
    <br />
    <Input prefix="￥" suffix="RMB" disabled />
    <br />
    <br />
    <Input.Password
      suffix={<LockOutlined />} // `suffix` available since `5.27.0`
      placeholder="input password support suffix"
    />
  </>
);
export default App;
```
### 密码框
密码框。

```tsx
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
const App: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Space vertical>
      <Input.Password placeholder="input password" />
      <Input.Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      <Space>
        <Input.Password
          placeholder="input password"
          visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
        />
        <Button style={{ width: 80 }} onClick={() => setPasswordVisible((prevState) => !prevState)}>
          {passwordVisible ? 'Hide' : 'Show'}
        </Button>
      </Space>
      <Input.Password disabled placeholder="disabled input password" />
    </Space>
  );
};
export default App;
```
### 带移除图标
带移除图标的输入框，点击图标删除所有内容。

```tsx
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};
const App: React.FC = () => (
  <>
    <Input placeholder="input with clear icon" allowClear onChange={onChange} />
    <br />
    <br />
    <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} />
  </>
);
export default App;
```
### 带字数提示
展示字数提示。

```tsx
import React from 'react';
import { Flex, Input } from 'antd';
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};
const App: React.FC = () => (
  <Flex vertical gap={32}>
    <Input showCount maxLength={20} onChange={onChange} />
    <TextArea showCount maxLength={100} onChange={onChange} placeholder="can resize" />
    <TextArea
      showCount
      maxLength={100}
      onChange={onChange}
      placeholder="disable resize"
      style={{ height: 120, resize: 'none' }}
    />
  </Flex>
);
export default App;
```
### = 5.10.0">定制计数能力
在某些场景下，需要定制计数能力（例如 emoji 长度以 1 计算），可以通过 `count` 属性来实现。在该模式下，通过 `count.max` 属性来超出原生 `maxLength` 的限制。

```tsx
import React from 'react';
import { Flex, Input, Typography } from 'antd';
import { runes } from 'runes2';
const App: React.FC = () => (
  <Flex vertical gap={16}>
    <div>
      <Typography.Title level={5}>Exceed Max</Typography.Title>
      <Input
        count={{
          show: true,
          max: 10,
        }}
        defaultValue="Hello, antd!"
      />
    </div>
    <div>
      <Typography.Title level={5}>Emoji count as length 1</Typography.Title>
      <Input
        count={{
          show: true,
          strategy: (txt) => runes(txt).length,
        }}
        defaultValue="🔥🔥🔥"
      />
    </div>
    <div>
      <Typography.Title level={5}>Not exceed max</Typography.Title>
      <Input
        count={{
          show: true,
          max: 6,
          strategy: (txt) => runes(txt).length,
          exceedFormatter: (txt, { max }) => runes(txt).slice(0, max).join(''),
        }}
        defaultValue="🔥 antd"
      />
    </div>
  </Flex>
);
export default App;
```
### 自定义状态
使用 `status` 为 Input 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Input, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <Input status="error" placeholder="Error" />
    <Input status="warning" placeholder="Warning" />
    <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Error with prefix" />
    <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Warning with prefix" />
  </Space>
);
export default App;
```
### 聚焦
聚焦额外配置属性。

```tsx
import React, { useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Button, Input, Space, Switch } from 'antd';
const App: React.FC = () => {
  const inputRef = useRef<InputRef>(null);
  const [input, setInput] = useState(true);
  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Ant Design love you!',
    ref: inputRef,
  };
  return (
    <Space vertical style={{ width: '100%' }}>
      <Space wrap>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'start',
            });
          }}
        >
          Focus at first
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'end',
            });
          }}
        >
          Focus at last
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'all',
            });
          }}
        >
          Focus to select all
        </Button>
        <Button
          onClick={() => {
            inputRef.current!.focus({
              preventScroll: true,
            });
          }}
        >
          Focus prevent scroll
        </Button>
        <Switch
          checked={input}
          checkedChildren="Input"
          unCheckedChildren="TextArea"
          onChange={() => {
            setInput(!input);
          }}
        />
      </Space>
      <br />
      {input ? <Input {...sharedProps} /> : <Input.TextArea {...sharedProps} />}
    </Space>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Input 的[语义化结构](#semantic-input)样式。

```tsx
import React from 'react';
import { Flex, Input } from 'antd';
import type { GetProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const styles = createStaticStyles(({ css, cssVar }) => ({
  focusEffect: css`
    border-width: ${cssVar.lineWidth};
    border-radius: ${cssVar.borderRadius};
    transition: box-shadow ${cssVar.motionDurationMid};
    &:hover {
      border: 1px solid #d9d9d9;
    }
    &:focus-visible {
      border-color: lab(66.128% 0 0);
      box-shadow: 0 0 0 4px color-mix(in oklab, lab(66.128% 0 0) 50%, transparent);
    }
  `,
}));
type InputProps = GetProps<typeof Input>;
type PasswordProps = GetProps<typeof Input.Password>;
type TextAreaProps = GetProps<typeof Input.TextArea>;
type OTPProps = GetProps<typeof Input.OTP>;
type SearchProps = GetProps<typeof Input.Search>;
const { Search, TextArea, OTP, Password } = Input;
const stylesFn: InputProps['styles'] = (info) => {
  if (info.props.size === 'middle') {
    return {
      root: {
        borderColor: '#696FC7',
      },
    } satisfies InputProps['styles'];
  }
  return {};
};
const stylesFnTextArea: TextAreaProps['styles'] = (info) => {
  if (info.props.showCount) {
    return {
      root: { borderColor: '#BDE3C3' },
      textarea: { resize: 'none' },
      count: { color: '#BDE3C3' },
    } satisfies TextAreaProps['styles'];
  }
  return {};
};
const stylesFnPassword: PasswordProps['styles'] = (info) => {
  if (info.props.size === 'middle') {
    return {
      root: {
        borderColor: '#F5D3C4',
      },
    } satisfies PasswordProps['styles'];
  }
  return {};
};
const stylesFnOTP: OTPProps['styles'] = (info) => {
  if (info.props.size === 'middle') {
    return {
      input: {
        borderColor: '#6E8CFB',
        width: 32,
      },
    } satisfies OTPProps['styles'];
  }
  return {};
};
const stylesFnSearch: SearchProps['styles'] = (info) => {
  if (info.props.size === 'large') {
    return {
      root: { color: '#4DA8DA' },
      input: { color: '#4DA8DA', borderColor: '#4DA8DA' },
      prefix: { color: '#4DA8DA' },
      suffix: { color: '#4DA8DA' },
      count: { color: '#4DA8DA' },
      button: {
        root: { color: '#4DA8DA', borderColor: '#4DA8DA' },
        icon: { color: '#4DA8DA' },
      },
    } satisfies SearchProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const classNames = styles;
  return (
    <Flex vertical gap="large">
      <Input
        classNames={{ root: classNames.focusEffect }}
        placeholder="Object"
        name="input-object"
      />
      <Input
        classNames={classNames}
        styles={stylesFn}
        placeholder="Function"
        size="middle"
        name="input-fn"
      />
      <TextArea
        classNames={classNames}
        styles={stylesFnTextArea}
        value="TextArea"
        showCount
        name="textarea-fn"
      />
      <Password
        classNames={classNames}
        styles={stylesFnPassword}
        value="Password"
        size="middle"
        name="password-fn"
      />
      <OTP classNames={classNames} styles={stylesFnOTP} size="middle" length={6} separator="*" />
      <Search
        classNames={classNames}
        styles={stylesFnSearch}
        size="large"
        placeholder="Search"
        name="search-fn"
      />
    </Flex>
  );
};
export default App;
```
### Style Debug
Buggy! 测试一些踩过的样式坑。

```tsx
import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;
const App: React.FC = () => (
  <div style={{ backgroundColor: 'rgba(0, 0, 128, .2)' }}>
    <Input placeholder="Unbordered" variant="borderless" />
    <Input placeholder="Unbordered" variant="borderless" size="large" />
    <TextArea placeholder="Unbordered" variant="borderless" />
    <TextArea placeholder="Unbordered" variant="borderless" allowClear />
    <Input placeholder="Unbordered" variant="borderless" allowClear />
    <Input prefix="￥" suffix="RMB" variant="borderless" />
    <Input prefix="￥" suffix="RMB" disabled variant="borderless" />
    <TextArea allowClear style={{ border: '2px solid #000' }} />
    {/* status */}
    <Input defaultValue="error" variant="borderless" status="error" />
    <Input defaultValue="warning" variant="borderless" status="warning" />
    <Input prefix="$" defaultValue="error" variant="borderless" status="error" />
    <Input prefix="$" defaultValue="warning" variant="borderless" status="warning" />
  </div>
);
export default App;
```
### 文本对齐
默认对齐效果。

```tsx
import React from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Select,
  TimePicker,
  TreeSelect,
  Typography,
} from 'antd';
const { Text } = Typography;
const { RangePicker } = DatePicker;
const narrowStyle: React.CSSProperties = {
  width: 50,
};
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const selectOptions = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
];
const App: React.FC = () => (
  <>
    <Mentions style={{ width: 100 }} rows={1} />
    <Input.TextArea rows={1} style={{ width: 100 }} />
    <Button type="primary">Button</Button>
    <Input style={{ width: 100 }} />
    <Text copyable>Ant Design</Text>
    <Input prefix="1" suffix="2" style={{ width: 100 }} />
    <Input addonBefore="1" addonAfter="2" style={{ width: 100 }} />
    <InputNumber style={{ width: 100 }} />
    <DatePicker style={{ width: 100 }} />
    <TimePicker style={{ width: 100 }} />
    <Select style={{ width: 100 }} defaultValue="jack" options={selectOptions} />
    <Select style={{ width: 100 }} defaultValue="" options={selectOptions} />
    <Select style={{ width: 100 }} options={selectOptions} />
    <TreeSelect style={{ width: 100 }} />
    <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} />
    <RangePicker />
    <DatePicker picker="month" />
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
    </Radio.Group>
    <AutoComplete style={{ width: 100 }} placeholder="input here" />
    <br />
    <Input prefix="$" addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
    <Input style={narrowStyle} suffix="Y" />
    <Input style={narrowStyle} />
    <Input style={narrowStyle} defaultValue="1" suffix="Y" />
  </>
);
export default App;
```
### 文本域
用于多行输入。

```tsx
import React, { useState } from 'react';
import { Button, Input } from 'antd';
const { TextArea } = Input;
const defaultValue =
  'The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows. The autoSize property applies to textarea nodes, and only the height changes automatically. In addition, autoSize can be set to an object, specifying the minimum number of rows and the maximum number of rows.';
const App: React.FC = () => {
  const [autoResize, setAutoResize] = useState(false);
  return (
    <>
      <Button onClick={() => setAutoResize(!autoResize)} style={{ marginBottom: 16 }}>
        Auto Resize: {String(autoResize)}
      </Button>
      <TextArea rows={4} autoSize={autoResize} defaultValue={defaultValue} />
      <TextArea allowClear style={{ width: 93 }} />
      <br />
      <TextArea
        style={{
          resize: 'both',
        }}
        showCount
      />
    </>
  );
};
export default App;
```
### debug token
token debug

```tsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Input } from 'antd';
const App: React.FC = () => (
  <>
    <ConfigProvider theme={{ token: { controlHeight: 28 } }}>
      <Input placeholder="Basic usage" />
    </ConfigProvider>
    <ConfigProvider
      componentSize="small"
      theme={{ token: {}, components: { Input: { inputFontSizeSM: 12 } } }}
    >
      <Input placeholder="Basic usage" />
    </ConfigProvider>
    <ConfigProvider theme={{ components: { Input: { inputFontSize: 10 } } }}>
      <Input placeholder="With prefix" prefix={<UserOutlined />} />
    </ConfigProvider>
  </>
);
export default App;
```
