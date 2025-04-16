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
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="input here"
      />
      <br />
      <br />
      <AutoComplete
        value={value}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
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
      onSearch={handleSearch}
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
      onSearch={handleSearch}
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
    filterOption={(inputValue, option) =>
      option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
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
    popupClassName="certain-category-search-dropdown"
    popupMatchSelectWidth={500}
    style={{ width: 250 }}
    options={options}
    size="large"
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
      onSearch={handleSearch}
      size="large"
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
    <Space direction="vertical" style={{ width: '100%' }}>
      <AutoComplete
        options={options}
        onSearch={(text) => setOptions(getPanelValue(text))}
        status="error"
        style={{ width: 200 }}
      />
      <AutoComplete
        options={anotherOptions}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        status="warning"
        style={{ width: 200 }}
      />
    </Space>
  );
};
export default App;
```
### 多种形态
可选 `outlined` `filled` `borderless` 三种形态。

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
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
      />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        placeholder="Filled"
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
        variant="filled"
      />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        placeholder="Borderless"
        onSearch={(text) => setOptions(getPanelValue(text))}
        onSelect={globalThis.console.log}
        variant="borderless"
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
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="UnClearable"
        allowClear={false}
      />
      <br />
      <br />
      <AutoComplete
        options={options}
        style={{ width: 200 }}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="Customized clear icon"
        allowClear={{ clearIcon: <CloseSquareFilled /> }}
      />
    </>
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
            searchValue="centered"
            showSearch
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
import { AutoComplete, Space, Switch } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalAutoComplete } = AutoComplete;
const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
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
    </Space>
  );
};
export default App;
```
