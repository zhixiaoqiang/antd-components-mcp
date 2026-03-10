## Select 组件示例
### 基本使用
基本使用。

```tsx
import React from 'react';
import { Select, Space } from 'antd';
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
      placeholder="select it"
    />
  </Space>
);
export default App;
```
### 带搜索框
展开后可对选项进行搜索。

```tsx
import React from 'react';
import { Select } from 'antd';
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};
const onSearch = (value: string) => {
  console.log('search:', value);
};
const App: React.FC = () => (
  <Select
    showSearch={{ optionFilterProp: 'label', onSearch }}
    placeholder="Select a person"
    onChange={onChange}
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />
);
export default App;
```
### 自定义搜索
使用 `filterOption` 自定义搜索。

```tsx
import React from 'react';
import { Select } from 'antd';
const App: React.FC = () => (
  <Select
    showSearch={{
      filterOption: (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
    }}
    placeholder="Select a person"
    options={[
      { value: '1', label: 'Jack' },
      { value: '2', label: 'Lucy' },
      { value: '3', label: 'Tom' },
    ]}
  />
);
export default App;
```
### 多字段搜索
使用 `optionFilterProp` 多字段搜索。

```tsx
import React from 'react';
import { Select } from 'antd';
const App: React.FC = () => (
  <Select
    placeholder="Select an option"
    showSearch={{
      optionFilterProp: ['label', 'otherField'],
    }}
    options={[
      { value: 'a11', label: 'a11', otherField: 'c11' },
      { value: 'b22', label: 'b22', otherField: 'b11' },
      { value: 'c33', label: 'c33', otherField: 'b33' },
      { value: 'd44', label: 'd44', otherField: 'd44' },
    ]}
  />
);
export default App;
```
### 多选
多选，从已有条目中选择。

```tsx
import React from 'react';
import { Select, Space } from 'antd';
import type { SelectProps } from 'antd';
const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Space style={{ width: '100%' }} vertical>
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
    <Select
      mode="multiple"
      disabled
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </Space>
);
export default App;
```
### 三种大小
三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。

```tsx
import React, { useState } from 'react';
import { Radio, Select, Space } from 'antd';
import type { ConfigProviderProps, RadioChangeEvent, SelectProps } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};
const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle');
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  return (
    <>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Space vertical style={{ width: '100%' }}>
        <Select
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
          options={options}
        />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
          options={options}
        />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
          options={options}
        />
      </Space>
    </>
  );
};
export default App;
```
### 自定义下拉选项
使用 `optionRender` 自定义渲染下拉选项。

```tsx
import React from 'react';
import { Select, Space } from 'antd';
const options = [
  {
    label: 'Happy',
    value: 'happy',
    emoji: '😄',
    desc: 'Feeling Good',
  },
  {
    label: 'Sad',
    value: 'sad',
    emoji: '😢',
    desc: 'Feeling Blue',
  },
  {
    label: 'Angry',
    value: 'angry',
    emoji: '😡',
    desc: 'Furious',
  },
  {
    label: 'Cool',
    value: 'cool',
    emoji: '😎',
    desc: 'Chilling',
  },
  {
    label: 'Sleepy',
    value: 'sleepy',
    emoji: '😴',
    desc: 'Need Sleep',
  },
];
const App: React.FC = () => (
  <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select your current mood."
    defaultValue={['happy']}
    onChange={(value) => {
      console.log(`selected ${value}`);
    }}
    options={options}
    optionRender={(option) => (
      <Space>
        <span role="img" aria-label={option.data.label}>
          {option.data.emoji}
        </span>
        {`${option.data.label} (${option.data.desc})`}
      </Space>
    )}
  />
);
export default App;
```
### 带排序的搜索
在搜索模式下对过滤结果项进行排序。

```tsx
import React from 'react';
import { Select } from 'antd';
const App: React.FC = () => (
  <Select
    showSearch={{
      optionFilterProp: 'label',
      filterSort: (optionA, optionB) =>
        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase()),
    }}
    style={{ width: 200 }}
    placeholder="Search to Select"
    options={[
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
);
export default App;
```
### 标签
标签形式的多选框，用户亦可自由输入。

```tsx
import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    placeholder="Tags Mode"
    onChange={handleChange}
    options={options}
  />
);
export default App;
```
### 分组
用 `OptGroup` 进行选项分组。

```tsx
import React from 'react';
import { Select } from 'antd';
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Select
    defaultValue="lucy"
    style={{ width: 200 }}
    onChange={handleChange}
    options={[
      {
        label: <span>manager</span>,
        title: 'manager',
        options: [
          { label: <span>Jack</span>, value: 'Jack' },
          { label: <span>Lucy</span>, value: 'Lucy' },
        ],
      },
      {
        label: <span>engineer</span>,
        title: 'engineer',
        options: [
          { label: <span>Chloe</span>, value: 'Chloe' },
          { label: <span>Lucas</span>, value: 'Lucas' },
        ],
      },
    ]}
  />
);
export default App;
```
### 联动
省市联动是典型的例子，联动场景我们更推荐使用 [Cascader](/components/cascader-cn/) 组件。

```tsx
import React, { useState } from 'react';
import { Select, Space } from 'antd';
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
type CityName = keyof typeof cityData;
const provinceData: CityName[] = ['Zhejiang', 'Jiangsu'];
const App: React.FC = () => {
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0] as CityName);
  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0] as CityName);
  };
  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };
  return (
    <Space wrap>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
        options={provinceData.map((province) => ({ label: province, value: province }))}
      />
      <Select
        style={{ width: 120 }}
        value={secondCity}
        onChange={onSecondCityChange}
        options={cities.map((city) => ({ label: city, value: city }))}
      />
    </Space>
  );
};
export default App;
```
### 搜索框
搜索和远程数据结合。

```tsx
import React, { useState } from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
let timeout: ReturnType<typeof setTimeout> | null;
let currentValue: string;
const toURLSearchParams = <T extends Record<string, any>>(record: T) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(record)) {
    params.append(key, value);
  }
  return params;
};
const fetchData = (value: string, callback: (data: { value: string; text: string }[]) => void) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  const params = toURLSearchParams({ code: 'utf-8', q: value });
  const fake = () => {
    fetch(`https://suggest.taobao.com/sug?${params.toString()}`)
      .then((response) => response.json())
      .then(({ result }) => {
        if (currentValue === value) {
          const data = result.map((item: any) => ({ value: item[0], text: item[0] }));
          callback(data);
        }
      });
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};
const SearchInput: React.FC<{ placeholder: string; style: React.CSSProperties }> = (props) => {
  const [data, setData] = useState<SelectProps['options']>([]);
  const [value, setValue] = useState<string>();
  const handleSearch = (newValue: string) => {
    fetchData(newValue, setData);
  };
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <Select
      showSearch={{ filterOption: false, onSearch: handleSearch }}
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};
const App: React.FC = () => <SearchInput placeholder="input search text" style={{ width: 200 }} />;
export default App;
```
### 获得选项的文本
默认情况下 `onChange` 里只能拿到 `value`，如果需要拿到选中的节点文本 `label`，可以使用 `labelInValue` 属性。
选中项的 `label` 会被包装到 `value` 中传递给 `onChange` 等函数，此时 `value` 是一个对象。

```tsx
import React from 'react';
import { Select } from 'antd';
const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};
const App: React.FC = () => (
  <Select
    labelInValue
    defaultValue={{ value: 'lucy', label: 'Lucy (101)' }}
    style={{ width: 120 }}
    onChange={handleChange}
    options={[
      {
        value: 'jack',
        label: 'Jack (100)',
      },
      {
        value: 'lucy',
        label: 'Lucy (101)',
      },
    ]}
  />
);
export default App;
```
### 自动分词
试下复制 `露西,杰克` 并粘贴到输入框里。只在 tags 和 multiple 模式下可用。

```tsx
import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Select
    mode="tags"
    style={{ width: '100%' }}
    onChange={handleChange}
    tokenSeparators={[',']}
    options={options}
  />
);
export default App;
```
### 搜索用户
一个带有远程搜索，防抖控制，请求时序控制，加载状态的多选示例。

```tsx
import React, { useMemo, useRef, useState } from 'react';
import { Avatar, Select, Spin } from 'antd';
import type { SelectProps } from 'antd';
import debounce from 'lodash/debounce';
export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType | ValueType[]>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}
function DebounceSelect<
  ValueType extends {
    key?: string;
    label: React.ReactNode;
    value: string | number;
    avatar?: string;
  } = any,
>({ fetchOptions, debounceTimeout = 300, ...props }: DebounceSelectProps<ValueType>) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      showSearch={{ filterOption: false, onSearch: debounceFetcher }}
      notFoundContent={fetching ? <Spin size="small" /> : 'No results found'}
      {...props}
      options={options}
      optionRender={(option) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {option.data.avatar && <Avatar src={option.data.avatar} style={{ marginRight: 8 }} />}
          {option.label}
        </div>
      )}
    />
  );
}
// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
  avatar?: string;
}
async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);
  return fetch(`https://660d2bd96ddfa2943b33731c.mockapi.io/api/users/?search=${username}`)
    .then((res) => res.json())
    .then((res) => {
      const results = Array.isArray(res) ? res : [];
      return results.map((user) => ({
        label: user.name,
        value: user.id,
        avatar: user.avatar,
      }));
    })
    .catch(() => {
      console.log('fetch mock data failed');
      return [];
    });
}
const App: React.FC = () => {
  const [value, setValue] = useState<UserValue[]>([]);
  return (
    <DebounceSelect
      mode="multiple"
      value={value}
      placeholder="Select users"
      fetchOptions={fetchUserList}
      style={{ width: '100%' }}
      onChange={(newValue) => {
        if (Array.isArray(newValue)) {
          setValue(newValue);
        }
      }}
    />
  );
};
export default App;
```
### 前后缀
自定义前缀 `prefix` 和后缀图标 `suffixIcon`。

```tsx
import React from 'react';
import { MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Select, Space } from 'antd';
const smileIcon = <SmileOutlined />;
const mehIcon = <MehOutlined />;
const handleChange = (value: string | string[]) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Space wrap>
    <Select
      prefix="User"
      defaultValue="lucy"
      placeholder="Select User"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
      allowClear
      showSearch
    />
    <Select
      suffixIcon={smileIcon}
      defaultValue="lucy"
      placeholder="Select"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      suffixIcon={mehIcon}
      defaultValue="lucy"
      placeholder="Select"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <br />
    <Select
      prefix="User"
      defaultValue={['lucy']}
      placeholder="Select"
      mode="multiple"
      style={{ width: 200 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      suffixIcon={smileIcon}
      defaultValue={['lucy']}
      placeholder="Select"
      mode="multiple"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
    <Select
      suffixIcon={mehIcon}
      defaultValue={['lucy']}
      placeholder="Select"
      mode="multiple"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
  </Space>
);
export default App;
```
### 扩展菜单
使用 `popupRender` 对下拉菜单进行自由扩展。如果希望点击自定义内容后关闭浮层，你需要使用受控模式自行控制（[codesandbox](https://codesandbox.io/s/ji-ben-shi-yong-antd-4-21-7-forked-gnp4cy?file=/demo.js)）。

```tsx
import React, { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Input, Select, Space } from 'antd';
import type { InputRef } from 'antd';
let index = 0;
const App: React.FC = () => {
  const [items, setItems] = useState(['jack', 'lucy']);
  const [name, setName] = useState('');
  const inputRef = useRef<InputRef>(null);
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  return (
    <Select
      style={{ width: 300 }}
      placeholder="custom dropdown render"
      popupRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={name}
              onChange={onNameChange}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) => ({ label: item, value: item }))}
    />
  );
};
export default App;
```
### 隐藏已选择选项
隐藏下拉列表中已选择的选项。

```tsx
import React, { useState } from 'react';
import { Select } from 'antd';
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{ width: '100%' }}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
};
export default App;
```
### 形态变体
Select 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Flex, Select } from 'antd';
const App: React.FC = () => (
  <Flex gap={12} vertical>
    <Flex gap={8}>
      <Select
        placeholder="Outlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Outlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Filled"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Filled"
        variant="filled"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Borderless"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Borderless"
        variant="borderless"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
    <Flex gap={8}>
      <Select
        placeholder="Underlined"
        variant="underlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
      <Select
        mode="multiple"
        defaultValue={['lucy']}
        placeholder="Underlined"
        variant="underlined"
        style={{ flex: 1 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
        ]}
      />
    </Flex>
  </Flex>
);
export default App;
```
### Filled debug
可选 `outlined` `filled` `borderless` 三种形态。

```tsx
import React from 'react';
import { Flex, Select } from 'antd';
import type { SelectProps } from 'antd';
const sharedSelectProps: SelectProps<string> = {
  value: 'lucy',
  variant: 'filled' as const,
  style: { flex: '1 1 50%', minWidth: 0 },
  options: [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'Yiminghe', label: 'yiminghe' },
  ],
};
const App: React.FC = () => (
  <Flex gap={12} vertical>
    <Flex gap={8}>
      <Select {...sharedSelectProps} disabled />
      <Select {...sharedSelectProps} disabled mode="multiple" placeholder="Outlined" />
    </Flex>
    <Flex gap={8}>
      <Select {...sharedSelectProps} status="error" />
      <Select {...sharedSelectProps} status="error" mode="multiple" placeholder="Outlined" />
    </Flex>
    <Flex gap={8}>
      <Select {...sharedSelectProps} disabled status="error" />
      <Select
        {...sharedSelectProps}
        disabled
        status="error"
        mode="multiple"
        placeholder="Outlined"
      />
    </Flex>
  </Flex>
);
export default App;
```
### 自定义选择标签
允许自定义选择标签的样式。

```tsx
import React from 'react';
import { Select, Tag } from 'antd';
import type { SelectProps } from 'antd';
type TagRender = SelectProps['tagRender'];
const options: SelectProps['options'] = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' },
];
const tagRender: TagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};
const App: React.FC = () => (
  <Select
    mode="multiple"
    tagRender={tagRender}
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%' }}
    options={options}
  />
);
export default App;
```
### 自定义选中 label
允许自定义渲染当前选中的 label, 可用于 value 回填但对应选项缺失而不想直接渲染 value 的场景。

```tsx
import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
type LabelRender = SelectProps['labelRender'];
const options = [
  { label: 'gold', value: 'gold' },
  { label: 'lime', value: 'lime' },
  { label: 'green', value: 'green' },
  { label: 'cyan', value: 'cyan' },
];
const labelRender: LabelRender = (props) => {
  const { label, value } = props;
  if (label) {
    return value;
  }
  return <span>No option match</span>;
};
const App: React.FC = () => (
  <Select labelRender={labelRender} defaultValue="1" style={{ width: '100%' }} options={options} />
);
export default App;
```
### 响应式 maxTagCount
多选下通过响应式布局让选项自动收缩。该功能对性能有所消耗，不推荐在大表单场景下使用。

```tsx
import React, { useState } from 'react';
import type { SelectProps } from 'antd';
import { Select, Space, Tooltip } from 'antd';
interface ItemProps {
  label: string;
  value: string;
}
const options: ItemProps[] = [];
for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: `Long Label: ${value}`,
    value,
  });
}
const sharedProps: SelectProps = {
  mode: 'multiple',
  style: { width: '100%' },
  options,
  placeholder: 'Select Item...',
  maxTagCount: 'responsive',
};
const App: React.FC = () => {
  const [value, setValue] = useState(['a10', 'c12', 'h17', 'j19', 'k20']);
  const selectProps: SelectProps = {
    value,
    onChange: setValue,
  };
  return (
    <Space vertical style={{ width: '100%' }}>
      <Select {...sharedProps} {...selectProps} />
      <Select {...sharedProps} disabled />
      <Select
        {...sharedProps}
        {...selectProps}
        maxTagPlaceholder={(omittedValues) => (
          <Tooltip
            styles={{ root: { pointerEvents: 'none' } }}
            title={omittedValues.map(({ label }) => label).join(', ')}
          >
            <span>Hover Me</span>
          </Tooltip>
        )}
      />
    </Space>
  );
};
export default App;
```
### 大数据
Select 默认针对大数据开启了[虚拟滚动](https://github.com/react-component/virtual-list)，因而获得了更好的性能，可以通过 `virtual={false}` 关闭。

```tsx
import React from 'react';
import type { SelectProps } from 'antd';
import { Select, Typography } from 'antd';
const { Title } = Typography;
const options: SelectProps['options'] = [];
for (let i = 0; i < 100000; i++) {
  const value = `${i.toString(36)}${i}`;
  options.push({
    label: value,
    value,
    disabled: i === 10,
  });
}
const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <>
    <Title level={4}>{options.length} Items</Title>
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
      options={options}
    />
  </>
);
export default App;
```
### 自定义状态
使用 `status` 为 Select 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { Select, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <Select status="error" style={{ width: '100%' }} />
    <Select status="warning" style={{ width: '100%' }} />
  </Space>
);
export default App;
```
### 弹出位置
可以通过 `placement` 手动指定弹出的位置。

```tsx
import React, { useState } from 'react';
import type { RadioChangeEvent, SelectProps } from 'antd';
import { Radio, Select } from 'antd';
type SelectCommonPlacement = SelectProps['placement'];
const App: React.FC = () => {
  const [placement, setPlacement] = useState<SelectCommonPlacement>('topLeft');
  const placementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Select
        defaultValue="HangZhou"
        style={{ width: 120 }}
        popupMatchSelectWidth={false}
        placement={placement}
        options={[
          {
            value: 'HangZhou',
            label: 'HangZhou #310000',
          },
          {
            value: 'NingBo',
            label: 'NingBo #315000',
          },
          {
            value: 'WenZhou',
            label: 'WenZhou #325000',
          },
        ]}
      />
    </>
  );
};
export default App;
```
### 动态高度
可以通过 `placement` 手动指定弹出的位置。

```tsx
import React, { useState } from 'react';
import type { RadioChangeEvent, SelectProps } from 'antd';
import { Button, Radio, Select, Space, Switch } from 'antd';
type SelectCommonPlacement = SelectProps['placement'];
const randomOptions = (count?: number) => {
  const length = count ?? Math.floor(Math.random() * 5) + 1;
  // Random 1 ~ 5 options
  return Array.from({ length }).map((_, index) => ({
    value: index,
    label: `Option ${index}`,
  }));
};
const App: React.FC = () => {
  const [placement, setPlacement] = useState<SelectCommonPlacement>('topLeft');
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState(() => randomOptions(3));
  const placementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <div
      style={{
        height: '100%',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Space
        style={{
          position: 'absolute',
          top: 0,
          insetInlineStart: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Radio.Group value={placement} onChange={placementChange}>
          <Radio.Button value="topLeft">TL</Radio.Button>
          <Radio.Button value="topRight">TR</Radio.Button>
          <Radio.Button value="bottomLeft">BL</Radio.Button>
          <Radio.Button value="bottomRight">BR</Radio.Button>
        </Radio.Group>
        <Switch checked={open} onChange={() => setOpen((o) => !o)} />
        <Button onClick={() => setOptions(randomOptions())}>Random</Button>
      </Space>
      <Select
        open={open}
        style={{ width: 120 }}
        placement={placement}
        options={options}
        popupMatchSelectWidth={200}
      />
    </div>
  );
};
export default App;
```
### Debug 专用
调试使用。

```tsx
import React from 'react';
import { Button, Flex, Input, Select, Space } from 'antd';
const style: React.CSSProperties = {
  width: 500,
  position: 'relative',
  zIndex: 1,
  border: '1px solid red',
  backgroundColor: '#fff',
};
const handleChange = (value: string | string[]) => {
  console.log(`selected ${value}`);
};
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Space style={style} wrap>
      <Input style={{ width: 100 }} value="222" />
      <Select
        style={{ width: 120 }}
        onChange={handleChange}
        showSearch
        placeholder="233"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'disabled', disabled: true, label: 'Disabled' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'long', label: 'I am super super long!' },
        ]}
      />
      <Select
        mode="multiple"
        style={{ width: 120 }}
        defaultValue={['lucy']}
        onChange={handleChange}
        showSearch
        placeholder="233"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'disabled', disabled: true, label: 'Disabled' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'long', label: 'I am super super long!' },
        ]}
      />
      <span className="debug-align">AntDesign</span>
      <Button>222</Button>
      {/* https://github.com/ant-design/ant-design/issues/56960 */}
      <Select
        style={{ width: 120 }}
        defaultValue=" "
        placeholder="Please select"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'disabled', disabled: true, label: 'Disabled' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'long', label: 'I am super super long!' },
        ]}
      />
    </Space>
    <div style={{ width: 200 }}>
      {/* https://github.com/ant-design/ant-design/issues/54179 */}
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        defaultValue={[1]}
        options={[
          {
            value: 1,
            label: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
          },
        ]}
      />
    </div>
    <Select defaultValue="" />
  </Flex>
);
export default App;
```
### \_InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Flex, Select, Switch } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalSelect } = Select;
const App: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <Flex vertical gap="small" align="start">
      <Switch checked={open} onChange={() => setOpen(!open)} />
      <InternalSelect
        defaultValue="lucy"
        style={{ width: 120 }}
        open={open}
        options={[
          { label: 'Jack', value: 'jack' },
          { label: 'Lucy', value: 'lucy' },
          { label: 'Disabled', value: 'disabled' },
          { label: 'Bamboo', value: 'bamboo' },
        ]}
        virtual={false}
      />
    </Flex>
  );
};
export default App;
```
### 选项文本居中
选项文本应该居中。

```tsx
import React from 'react';
import {
  AutoComplete,
  Cascader,
  Flex,
  Form,
  Input,
  Select,
  Space,
  TreeSelect,
  Typography,
} from 'antd';
const options = [
  { value: 'long', label: <Typography>long, long, long piece of text</Typography> },
  { value: 'short', label: <Typography>short</Typography> },
  { value: 'normal', label: <div>normal</div> },
];
const App: React.FC = () => (
  <>
    <Space wrap>
      <Select
        defaultValue="long, long, long piece of text"
        style={{ width: 120 }}
        allowClear
        options={options}
      />
      <Select
        placeholder="Select a option"
        style={{ width: 120, height: 60 }}
        allowClear
        options={options}
      />
      <Select
        defaultValue="normal"
        placeholder="Select a option"
        style={{ width: 120 }}
        allowClear
        options={options}
      />
      <Select
        defaultValue={['normal']}
        mode="multiple"
        placeholder="Select a option"
        style={{ width: 120 }}
        allowClear
        options={options}
      />
      <Select
        mode="multiple"
        placeholder="Select a option"
        style={{ width: 120, height: 60 }}
        allowClear
        options={options}
      />
      <Cascader
        placeholder="Select a option"
        style={{ width: 120, height: 60 }}
        allowClear
        options={options}
      />
      <TreeSelect
        showSearch
        style={{ width: 120, height: 60 }}
        placeholder="Please select"
        allowClear
        popupMatchSelectWidth={false}
        treeDefaultExpandAll
        treeData={[
          {
            value: 'parent 1',
            title: 'parent 1',
            children: options,
          },
        ]}
      />
      <Select
        prefix="Hello World"
        mode="multiple"
        allowClear
        placeholder="Select"
        style={{ minWidth: 200, height: 200 }}
        defaultValue={['long']}
        options={options}
      />
      <Select
        mode="multiple"
        style={{ width: 200 }}
        placeholder="请选择"
        maxTagCount="responsive"
        prefix="城市"
        options={options}
      />
      <Select
        style={{ width: 200 }}
        placeholder="请选择"
        prefix="城市"
        options={options}
        showSearch
        allowClear
        status="error"
      />
      <Select
        style={{ width: 100 }}
        prefix="Hi"
        options={options}
        showSearch
        allowClear
        status="warning"
        variant="filled"
        defaultValue="Bamboo"
      />
      <Select
        style={{ width: 100 }}
        prefix="Hi"
        options={options}
        showSearch
        allowClear
        status="error"
        variant="borderless"
        defaultValue="Bamboo"
      />
      <Form style={{ width: 200 }} layout="vertical">
        <Form.Item
          label="Label"
          name="bamboo"
          initialValue="Bamboo"
          style={{
            boxShadow: '0 0 0 1px red',
          }}
        >
          <Select options={options} allowClear placeholder="bamboo" />
        </Form.Item>
        <Form.Item
          label="Label"
          name="bamboo"
          initialValue="Bamboo"
          style={{
            boxShadow: '0 0 0 1px red',
          }}
        >
          <AutoComplete options={options} allowClear placeholder="bamboo" />
        </Form.Item>
      </Form>
    </Space>
    {/* Test for align */}
    <Flex vertical style={{ width: 200 }}>
      {/* Single */}
      <Input prefix="Hi" placeholder="Input" allowClear />
      <Select prefix="Hi" placeholder="Single" options={options} allowClear showSearch />
      <Select
        prefix="Hi"
        placeholder="Single"
        options={options}
        allowClear
        showSearch
        defaultValue="Bamboo"
      />
      {/* Multiple */}
      <Select placeholder="Multiple" options={options} allowClear mode="multiple" />
      <Select prefix="Hi" placeholder="Multiple" options={options} allowClear mode="multiple" />
      <Select
        prefix="Hi"
        placeholder="Multiple"
        options={options}
        allowClear
        mode="multiple"
        defaultValue={['Bamboo']}
      />
      <Select
        placeholder="Multiple"
        options={options}
        allowClear
        mode="multiple"
        defaultValue={['Bamboo']}
      />
    </Flex>
  </>
);
export default App;
```
### 组件 Token
组件 Token

```tsx
import React from 'react';
import { ConfigProvider, Select, Space } from 'antd';
import type { SelectProps } from 'antd';
const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const App: React.FC = () => (
  <Space vertical>
    <ConfigProvider
      theme={{
        components: {
          Select: {
            multipleItemBorderColor: 'rgba(0,0,0,0.06)',
            multipleItemBorderColorDisabled: 'rgba(0,0,0,0.06)',
            optionSelectedColor: '#1677ff',
            hoverBorderColor: 'red',
            activeBorderColor: 'green',
            activeOutlineColor: 'pink',
          },
        },
      }}
    >
      <Space style={{ width: '100%' }} vertical>
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          options={options}
        />
        <Select
          mode="multiple"
          disabled
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          options={options}
        />
      </Space>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        token: {
          controlHeightSM: 28,
        },
      }}
    >
      <Space style={{ width: '100%' }} vertical>
        <Select
          mode="multiple"
          allowClear
          size="small"
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          options={options}
        />
        <Select
          mode="multiple"
          allowClear
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          options={options}
        />
      </Space>
    </ConfigProvider>
    <ConfigProvider
      theme={{
        components: {
          Select: {
            paddingXXS: 0,
            controlHeight: 28,
          },
        },
      }}
    >
      <Space style={{ width: '100%' }} vertical>
        <Select style={{ width: '100%' }} defaultValue="a10" options={options} />
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          defaultValue={['a10', 'c12']}
          options={options}
        />
      </Space>
    </ConfigProvider>
  </Space>
);
export default App;
```
### 最大选中数量
你可以通过设置 `maxCount` 约束最多可选中的数量，当超出限制时会变成禁止选中状态。

```tsx
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
const MAX_COUNT = 3;
const App: React.FC = () => {
  const [value, setValue] = React.useState<string[]>(['Ava Swift']);
  const suffix = (
    <>
      <span>
        {value.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );
  return (
    <Select
      mode="multiple"
      maxCount={MAX_COUNT}
      value={value}
      style={{ width: '100%' }}
      onChange={setValue}
      suffixIcon={suffix}
      placeholder="Please select"
      options={[
        { value: 'Ava Swift', label: 'Ava Swift' },
        { value: 'Cole Reed', label: 'Cole Reed' },
        { value: 'Mia Blake', label: 'Mia Blake' },
        { value: 'Jake Stone', label: 'Jake Stone' },
        { value: 'Lily Lane', label: 'Lily Lane' },
        { value: 'Ryan Chase', label: 'Ryan Chase' },
        { value: 'Zoe Fox', label: 'Zoe Fox' },
        { value: 'Alex Grey', label: 'Alex Grey' },
        { value: 'Elle Blair', label: 'Elle Blair' },
      ]}
    />
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Select 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { MehOutlined } from '@ant-design/icons';
import { Flex, Select } from 'antd';
import type { SelectProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border-radius: 8px;
    width: 300px;
  `,
}));
const options: SelectProps['options'] = [
  { value: 'GuangZhou', label: 'GuangZhou' },
  { value: 'ShenZhen', label: 'ShenZhen' },
];
const stylesObject: SelectProps['styles'] = {
  prefix: {
    color: '#1890ff',
  },
  suffix: {
    color: '#1890ff',
  },
};
const stylesFn: SelectProps['styles'] = (info) => {
  const { props } = info;
  if (props.variant === 'filled') {
    return {
      prefix: {
        color: '#722ed1',
      },
      suffix: {
        color: '#722ed1',
      },
      popup: {
        root: {
          border: '1px solid #722ed1',
        },
      },
    } satisfies SelectProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const sharedProps: SelectProps = {
    options,
    classNames,
    prefix: <MehOutlined />,
  };
  return (
    <Flex vertical gap="middle">
      <Select {...sharedProps} styles={stylesObject} placeholder="Object" />
      <Select {...sharedProps} styles={stylesFn} placeholder="Function" variant="filled" />
    </Flex>
  );
};
export default App;
```
