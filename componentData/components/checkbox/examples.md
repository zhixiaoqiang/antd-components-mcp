## Checkbox 组件示例
### 基本用法
简单的 checkbox。

```tsx
import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const App: React.FC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;
export default App;
```
### 不可用
checkbox 不可用。

```tsx
import React from 'react';
import { Checkbox, Flex } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Checkbox defaultChecked={false} disabled />
    <Checkbox indeterminate disabled />
    <Checkbox defaultChecked disabled />
  </Flex>
);
export default App;
```
### 受控的 Checkbox
联动 checkbox。

```tsx
import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
const App: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };
  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;
  return (
    <>
      <p style={{ marginBottom: '20px' }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </p>
      <p>
        <Button type="primary" size="small" onClick={toggleChecked}>
          {!checked ? 'Check' : 'Uncheck'}
        </Button>
        <Button style={{ margin: '0 10px' }} type="primary" size="small" onClick={toggleDisable}>
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </p>
    </>
  );
};
export default App;
```
### Checkbox 组
方便的从数组生成 Checkbox 组。

```tsx
import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxOptionType, GetProp } from 'antd';
const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options: CheckboxOptionType<string>[] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3' },
];
const optionsWithDisabled: CheckboxOptionType<string>[] = [
  { label: 'Apple', value: 'Apple', className: 'label-1' },
  { label: 'Pear', value: 'Pear', className: 'label-2' },
  { label: 'Orange', value: 'Orange', className: 'label-3', disabled: false },
];
const App: React.FC = () => (
  <>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
);
export default App;
```
### 全选
在实现全选效果时，你可能会用到 `indeterminate` 属性。

```tsx
import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxProps } from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list: string[]) => {
    setCheckedList(list);
  };
  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};
export default App;
```
### 布局
Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。

```tsx
import React from 'react';
import { Checkbox, Col, Row } from 'antd';
import type { GetProp } from 'antd';
const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
  console.log('checked = ', checkedValues);
};
const App: React.FC = () => (
  <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      <Col span={8}>
        <Checkbox value="A">A</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="B">B</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">C</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">D</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">E</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Checkbox 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Checkbox, Flex } from 'antd';
import type { CheckboxProps } from 'antd';
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
const styles: CheckboxProps['styles'] = {
  icon: {
    borderRadius: 6,
  },
  label: {
    color: 'blue',
  },
};
const App: React.FC = () => {
  const { styles: classNamesStyles } = useStyles();
  // Function classNames - dynamically adjust based on checked state
  const classNamesFn: CheckboxProps['classNames'] = (info) => {
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
      <Checkbox styles={styles}>Object styles</Checkbox>
      <Checkbox classNames={classNamesFn} defaultChecked>
        Function styles
      </Checkbox>
    </Flex>
  );
};
export default App;
```
### 自定义 lineWidth
测试自定义 lineWidth 的情况：https://github.com/ant-design/ant-design/issues/46307

```tsx
import React from 'react';
import { Checkbox, ConfigProvider } from 'antd';
const App: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Checkbox: {
            lineWidth: 6,
          },
        },
      }}
    >
      <Checkbox checked />
      <Checkbox />
    </ConfigProvider>
    <Checkbox checked />
    <Checkbox />
  </>
);
export default App;
```
