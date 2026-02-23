## Radio 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Radio } from 'antd';
const App: React.FC = () => <Radio>Radio</Radio>;
export default App;
```
### 不可用
Radio 不可用。

```tsx
import React, { useState } from 'react';
import { Button, Radio } from 'antd';
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => {
    setDisabled(!disabled);
  };
  return (
    <>
      <Radio defaultChecked={false} disabled={disabled}>
        Disabled
      </Radio>
      <Radio defaultChecked disabled={disabled}>
        Disabled
      </Radio>
      <br />
      <Button type="primary" onClick={toggleDisabled} style={{ marginTop: 16 }}>
        Toggle disabled
      </Button>
    </>
  );
};
export default App;
```
### 单选组合
一组互斥的 Radio 配合使用。

```tsx
import React, { useState } from 'react';
import {
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';
const App: React.FC = () => {
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      options={[
        {
          value: 1,
          className: 'option-1',
          label: (
            <Flex gap="small" justify="center" align="center" vertical>
              <LineChartOutlined style={{ fontSize: 18 }} />
              LineChart
            </Flex>
          ),
        },
        {
          value: 2,
          className: 'option-2',
          label: (
            <Flex gap="small" justify="center" align="center" vertical>
              <DotChartOutlined style={{ fontSize: 18 }} />
              DotChart
            </Flex>
          ),
        },
        {
          value: 3,
          className: 'option-3',
          label: (
            <Flex gap="small" justify="center" align="center" vertical>
              <BarChartOutlined style={{ fontSize: 18 }} />
              BarChart
            </Flex>
          ),
        },
        {
          value: 4,
          className: 'option-4',
          label: (
            <Flex gap="small" justify="center" align="center" vertical>
              <PieChartOutlined style={{ fontSize: 18 }} />
              PieChart
            </Flex>
          ),
        },
      ]}
    />
  );
};
export default App;
```
### Radio.Group 垂直
垂直的 Radio.Group，配合更多输入框选项。

```tsx
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Input, Radio } from 'antd';
const labelStyle: React.CSSProperties = {
  height: 32,
  lineHeight: '32px',
};
const App: React.FC = () => {
  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group
      vertical
      onChange={onChange}
      value={value}
      options={[
        { value: 1, style: labelStyle, label: 'Option A' },
        { value: 2, style: labelStyle, label: 'Option B' },
        { value: 3, style: labelStyle, label: 'Option C' },
        {
          value: 4,
          style: labelStyle,
          label: (
            <>
              More...
              {value === 4 && (
                <Input
                  variant="filled"
                  placeholder="please input"
                  style={{ width: 120, marginInlineStart: 12 }}
                />
              )}
            </>
          ),
        },
      ]}
    />
  );
};
export default App;
```
### Block 单选组合
`block` 属性将使 Radio.Group 撑满父容器。

```tsx
import React from 'react';
import { Flex, Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
const options: CheckboxGroupProps<string>['options'] = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Radio.Group block options={options} defaultValue="Apple" />
    <Radio.Group
      block
      options={options}
      defaultValue="Apple"
      optionType="button"
      buttonStyle="solid"
    />
    <Radio.Group block options={options} defaultValue="Pear" optionType="button" />
  </Flex>
);
export default App;
```
### Radio.Group 组合 - 配置方式
通过配置 `options` 参数来渲染单选框。也可通过 `optionType` 参数来设置 Radio 类型。

```tsx
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
const plainOptions: CheckboxGroupProps<string>['options'] = ['Apple', 'Pear', 'Orange'];
const options: CheckboxGroupProps<string>['options'] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', title: 'Orange', className: 'label-3' },
];
const optionsWithDisabled: CheckboxGroupProps<string>['options'] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3', disabled: true },
];
const App: React.FC = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');
  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };
  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };
  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };
  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };
  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};
export default App;
```
### 按钮样式
按钮样式的单选组合。

```tsx
import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';
const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group onChange={onChange} defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group disabled onChange={onChange} defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </Flex>
);
export default App;
```
### 单选组合 - 配合 name 使用
可以为 Radio.Group 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Radio.Group 下的 Radio 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

```tsx
import React from 'react';
import { Radio } from 'antd';
const App: React.FC = () => (
  <Radio.Group
    name="radiogroup"
    defaultValue={1}
    options={[
      { value: 1, label: 'A' },
      { value: 2, label: 'B' },
      { value: 3, label: 'C' },
      { value: 4, label: 'D' },
    ]}
  />
);
export default App;
```
### 大小
大中小三种组合，可以和表单输入框进行对应配合。

```tsx
import React from 'react';
import { Flex, Radio } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="a">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="a" size="small">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </Flex>
);
export default App;
```
### 填底的按钮样式
实色填底的单选按钮样式。

```tsx
import React from 'react';
import { Flex, Radio } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Radio.Group defaultValue="a" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b">Shanghai</Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
    <Radio.Group defaultValue="c" buttonStyle="solid">
      <Radio.Button value="a">Hangzhou</Radio.Button>
      <Radio.Button value="b" disabled>
        Shanghai
      </Radio.Button>
      <Radio.Button value="c">Beijing</Radio.Button>
      <Radio.Button value="d">Chengdu</Radio.Button>
    </Radio.Group>
  </Flex>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义单选框的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Radio } from 'antd';
import type { RadioProps } from 'antd';
import { createStyles } from 'antd-style';
import clsx from 'clsx';
const useStyles = createStyles(({ token, css }) => ({
  root: css`
    border-radius: ${token.borderRadius}px;
    background-color: ${token.colorBgContainer};
  `,
  icon: css`
    border-color: ${token.colorWarning};
  `,
  label: css`
    color: ${token.colorTextDisabled};
    font-weight: bold;
  `,
  iconChecked: css`
    background-color: ${token.colorWarning};
  `,
  labelChecked: css`
    color: ${token.colorWarning};
  `,
}));
// Object style
const styles: RadioProps['styles'] = {
  icon: {
    borderRadius: 6,
  },
  label: {
    color: 'blue',
  },
};
const App: React.FC = () => {
  const [value, setValue] = React.useState<'styles' | 'classNames'>('styles');
  const { styles: classNamesStyles } = useStyles();
  // Function classNames - dynamically adjust based on checked state
  const classNamesFn: RadioProps['classNames'] = (info) => {
    if (info.props.checked) {
      return {
        root: clsx(classNamesStyles.root),
        icon: clsx(classNamesStyles.icon, classNamesStyles.iconChecked),
        label: clsx(classNamesStyles.label, classNamesStyles.labelChecked),
      };
    }
    return {
      root: classNamesStyles.root,
      icon: classNamesStyles.icon,
      label: classNamesStyles.label,
    };
  };
  return (
    <Flex vertical gap="middle">
      <Radio
        name="style-class"
        styles={styles}
        checked={value === 'styles'}
        onChange={() => setValue('styles')}
      >
        Object styles
      </Radio>
      <Radio
        name="style-class"
        classNames={classNamesFn}
        checked={value === 'classNames'}
        onChange={() => setValue('classNames')}
      >
        Function classNames
      </Radio>
    </Flex>
  );
};
export default App;
```
### 测试 Badge 的样式
测试 Badge 的样式。

```tsx
import React from 'react';
import { Badge, Radio } from 'antd';
const App: React.FC = () => (
  <Radio.Group buttonStyle="solid">
    <Badge count={1}>
      <Radio.Button value={1}>Click Me</Radio.Button>
    </Badge>
    <Badge count={2}>
      <Radio.Button value={2}>Not Me</Radio.Button>
    </Badge>
  </Radio.Group>
);
export default App;
```
### 线框风格
线框风格。

```tsx
import React from 'react';
import { ConfigProvider, Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
const options: CheckboxGroupProps<string | number>['options'] = [
  { value: 1, label: 'A' },
  { value: 2, label: 'B' },
  { value: 3, label: 'C' },
  { value: 4, label: 'D' },
];
const App: React.FC = () => (
  <ConfigProvider theme={{ token: { wireframe: true } }}>
    <Radio.Group value={1} options={options} />
    <br />
    <Radio.Group value={1} options={options} disabled />
  </ConfigProvider>
);
export default App;
```
### 组件 Token
组件 token debug

```tsx
import React from 'react';
import { ConfigProvider, Radio, Space } from 'antd';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Radio: {
          radioSize: 20,
          dotSize: 10,
          dotColorDisabled: 'grey',
          buttonBg: '#f6ffed',
          buttonCheckedBg: '#d9f7be',
          buttonColor: '#faad14',
          buttonPaddingInline: 20,
          buttonCheckedBgDisabled: '#fffbe6',
          buttonCheckedColorDisabled: '#ffe58f',
          buttonSolidCheckedColor: '#ffa39e',
          wrapperMarginInlineEnd: 20,
        },
      },
    }}
  >
    <Space vertical>
      <Radio checked>Test</Radio>
      <Radio checked disabled>
        Disabled
      </Radio>
      <Radio.Group defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="a" disabled>
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </Space>
  </ConfigProvider>
);
export default App;
```
