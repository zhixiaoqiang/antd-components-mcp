## AutoComplete 组件示例
### 基本使用
基本使用，通过 `options` 设置自动完成的数据源。

```tsx
import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App: React.FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const [anotherOptions, setAnotherOptions] = useState<AutoCompleteProps['options']>([]);
  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };
  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        showSearch={{
          onSearch: (text) => setOptions(getPanelValue(text)),
        }}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        showSearch={{ onSearch: (text) => setAnotherOptions(getPanelValue(text)) }}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};
export default App;
```
### 自定义选项
可以返回自定义的 `Option` label

```tsx
import React from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
const App: React.FC = () => {
  const [options, setOptions] = React.useState<AutoCompleteProps['options']>([]);
  const handleSearch = (value: string) => {
    setOptions(() => {
      if (!value || value.includes('@')) {
        return [];
      }
      return ['gmail.com', '163.com', 'qq.com'].map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };
  return (
    <AutoComplete
      style={{ width: 200 }}
      showSearch={{ onSearch: handleSearch }}
      placeholder="input here"
      options={options}
    />
  );
};
export default App;
```
### 自定义输入组件
自定义输入组件。

```tsx
import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { AutoCompleteProps } from 'antd';
const { TextArea } = Input;
const App: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const handleSearch = (value: string) => {
    setOptions(
      !value ? [] : [{ value }, { value: value + value }, { value: value + value + value }],
    );
  };
  const handleKeyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log('handleKeyPress', ev);
  };
  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      showSearch={{ onSearch: handleSearch }}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{ height: 50 }}
        onKeyPress={handleKeyPress}
      />
    </AutoComplete>
  );
};
export default App;
```
### 不区分大小写
不区分大小写的 AutoComplete

```tsx
import React from 'react';
import { AutoComplete } from 'antd';
const options = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];
const App: React.FC = () => (
  <AutoComplete
    style={{ width: 200 }}
    options={options}
    placeholder="try to type `b`"
    showSearch={{
      filterOption: (inputValue, option) =>
        option!.value.toUpperCase().includes(inputValue.toUpperCase()),
    }}
  />
);
export default App;
```
### 查询模式 - 确定类目
[查询模式: 确定类目](https://ant.design/docs/spec/reaction#lookup-patterns) 示例。

```tsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { AutoComplete, Flex, Input } from 'antd';
const Title: React.FC<Readonly<{ title?: string }>> = (props) => (
  <Flex align="center" justify="space-between">
    {props.title}
    <a href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
      more
    </a>
  </Flex>
);
const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <Flex align="center" justify="space-between">
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </Flex>
  ),
});
const options = [
  {
    label: <Title title="Libraries" />,
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: <Title title="Solutions" />,
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: <Title title="Articles" />,
    options: [renderItem('AntDesign design language', 100000)],
  },
];
const App: React.FC = () => (
  <AutoComplete
    classNames={{
      popup: {
        root: 'certain-category-search-dropdown',
      },
    }}
    popupMatchSelectWidth={500}
    style={{ width: 250 }}
    options={options}
  >
    <Input.Search size="large" placeholder="input here" />
  </AutoComplete>
);
export default App;
```
### 查询模式 - 不确定类目
[查询模式: 不确定类目](https://ant.design/docs/spec/reaction#lookup-patterns) 示例。

```tsx
import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { AutoCompleteProps } from 'antd';
const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;
const searchResult = (query: string) =>
  Array.from({ length: getRandomInt(5) })
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });
const App: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };
  return (
    <AutoComplete
      popupMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      showSearch={{ onSearch: handleSearch }}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};
export default App;
```
### 自定义状态
使用 `status` 为 AutoComplete 添加状态，可选 `error` 或者 `warning`。

```tsx
import React, { useState } from 'react';
import { AutoComplete, Space } from 'antd';
import type { AutoCompleteProps } from 'antd';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const [anotherOptions, setAnotherOptions] = useState<AutoCompleteProps['options']>([]);
  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Space vertical style={{ width: '100%' }}>
      <AutoComplete
        options={options}
        showSearch={{
          onSearch: (text) => setOptions(getPanelValue(text)),
        }}
        status="error"
        style={{ width: 200 }}
      />
      <AutoComplete
        options={anotherOptions}
        showSearch={{
          onSearch: (text) => setAnotherOptions(getPanelValue(text)),
        }}
        status="warning"
        style={{ width: 200 }}
      />
    </Space>
  );
};
export default App;
```
### 多种形态
可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React, { useState } from 'react';
import { AutoComplete, Flex } from 'antd';
import type { AutoCompleteProps } from 'antd';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <Flex vertical gap={12}>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        placeholder="Outlined"
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        onSelect={globalThis.console.log}
      />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        placeholder="Filled"
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        onSelect={globalThis.console.log}
        variant="filled"
      />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        placeholder="Borderless"
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        onSelect={globalThis.console.log}
        variant="borderless"
      />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        placeholder="Underlined"
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
        variant="underlined"
      />
    </Flex>
  );
};
export default App;
```
### 自定义清除按钮
自定义清除按钮

```tsx
import React, { useState } from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';
const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const App: React.FC = () => {
  const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
  const getPanelValue = (searchText: string) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  return (
    <>
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        placeholder="UnClearable"
        allowClear={false}
      />
      <br />
      <br />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        showSearch={{ onSearch: (text) => setOptions(getPanelValue(text)) }}
        placeholder="Customized clear icon"
        allowClear={{ clearIcon: <CloseSquareFilled /> }}
      />
    </>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 AutoComplete 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { AutoComplete, Flex } from 'antd';
import type { AutoCompleteProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border-radius: 4px;
  `,
}));
const stylesObject: AutoCompleteProps['styles'] = {
  popup: {
    root: { borderWidth: 1, borderColor: '#1890ff' },
    list: { backgroundColor: 'rgba(240,240,240, 0.85)' },
    listItem: { color: '#272727' },
  },
};
const stylesFn: AutoCompleteProps['styles'] = ({ props }) => {
  if (props.variant === 'filled') {
    return {
      popup: {
        root: { borderWidth: 1, borderColor: '#ccc' },
        list: { backgroundColor: 'rgba(240,240,240, 0.85)' },
        listItem: { color: '#272727' },
      },
    } satisfies AutoCompleteProps['styles'];
  }
  return {};
};
const options: AutoCompleteProps['options'] = [
  { value: 'Burnaby' },
  { value: 'Seattle' },
  { value: 'Los Angeles' },
  { value: 'San Francisco' },
  { value: 'Meet student' },
];
const App: React.FC = () => {
  const sharedProps: AutoCompleteProps = {
    options,
    classNames: {
      root: classNames.root,
    },
    style: { width: 200 },
  };
  return (
    <Flex vertical gap="middle">
      <AutoComplete {...sharedProps} placeholder="object styles" styles={stylesObject} />
      <AutoComplete
        {...sharedProps}
        variant="filled"
        placeholder="function styles"
        styles={stylesFn}
      />
    </Flex>
  );
};
export default App;
```
### 在 Form 中 Debugundefined

```tsx
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Form, Input, TreeSelect } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const App: React.FC = () => (
  <Form style={{ margin: '0 auto' }} {...formItemLayout}>
    <Form.Item label="单独 AutoComplete">
      <AutoComplete />
    </Form.Item>
    <Form.Item label="单独 TreeSelect">
      <TreeSelect />
    </Form.Item>
    <Form.Item label="添加 Input.Group 正常">
      <Input.Group compact>
        <TreeSelect style={{ width: '30%' }} />
        <AutoComplete />
      </Input.Group>
    </Form.Item>
    <Form.Item label="包含 search 图标正常">
      <AutoComplete>
        <Input suffix={<SearchOutlined />} />
      </AutoComplete>
    </Form.Item>
    <Form.Item label="同时有 Input.Group 和图标发生移位">
      <Input.Group compact>
        <TreeSelect style={{ width: '30%' }} />
        <AutoComplete>
          <Input suffix={<SearchOutlined />} />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="同时有 Input.Group 和 Search 组件发生移位">
      <Input.Group compact>
        <TreeSelect style={{ width: '30%' }} />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
      </Input.Group>
    </Form.Item>
    <Form.Item label="Input Group 和 Button 结合">
      <Input.Group compact>
        <TreeSelect style={{ width: '20%' }} />
        <AutoComplete>
          <Input.Search />
        </AutoComplete>
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
      </Input.Group>
    </Form.Item>
  </Form>
);
export default App;
```
### AutoComplete 和 Select
debug demo

```tsx
import React from 'react';
import { AutoComplete, Flex, Select } from 'antd';
const AutoCompleteAndSelect = () => {
  return (
    <Flex vertical gap={16}>
      {(['small', 'middle', 'large'] as const).map((size) => (
        <Flex key={size}>
          <Select
            value="centered"
            size={size}
            style={{ width: 200 }}
            showSearch={{ searchValue: 'centered' }}
          />
          <AutoComplete value="centered" size={size} style={{ width: 200 }} />
        </Flex>
      ))}
    </Flex>
  );
};
export default AutoCompleteAndSelect;
```
### \_InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { AutoComplete, Flex, Switch } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalAutoComplete } = AutoComplete;
const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Flex vertical align="start" gap="small">
      <Switch checked={open} onChange={() => setOpen(!open)} />
      <InternalAutoComplete
        defaultValue="lucy"
        style={{ width: 120 }}
        open={open}
        options={[
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
          { label: 'Disabled', value: 'disabled' },
          { label: 'Bamboo', value: 'bamboo' },
        ]}
      />
    </Flex>
  );
};
export default App;
```
