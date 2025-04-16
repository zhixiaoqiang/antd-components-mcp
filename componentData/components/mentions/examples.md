## Mentions 组件示例
### 基本使用
基本使用。

```tsx
import React from 'react';
import { Mentions } from 'antd';
import type { GetProp, MentionProps } from 'antd';
type MentionsOptionProps = GetProp<MentionProps, 'options'>[number];
const onChange = (value: string) => {
  console.log('Change:', value);
};
const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};
const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    onChange={onChange}
    onSelect={onSelect}
    defaultValue="@afc163"
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
```
### 形态变体
Mentions 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Flex, Mentions } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Mentions placeholder="Outlined" />
    <Mentions placeholder="Filled" variant="filled" />
    <Mentions placeholder="Borderless" variant="borderless" />
    <Mentions placeholder="Underlined" variant="underlined" />
  </Flex>
);
export default App;
```
### 异步加载
匹配内容列表为异步返回时。

```tsx
import React, { useCallback, useRef, useState } from 'react';
import { Mentions } from 'antd';
import debounce from 'lodash/debounce';
const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<{ login: string; avatar_url: string }[]>([]);
  const ref = useRef<string>(null);
  const loadGithubUsers = (key: string) => {
    if (!key) {
      setUsers([]);
      return;
    }
    fetch(`https://api.github.com/search/users?q=${key}`)
      .then((res) => res.json())
      .then(({ items = [] }) => {
        if (ref.current !== key) return;
        setLoading(false);
        setUsers(items.slice(0, 10));
      });
  };
  const debounceLoadGithubUsers = useCallback(debounce(loadGithubUsers, 800), []);
  const onSearch = (search: string) => {
    console.log('Search:', search);
    ref.current = search;
    setLoading(!!search);
    setUsers([]);
    debounceLoadGithubUsers(search);
  };
  return (
    <Mentions
      style={{ width: '100%' }}
      loading={loading}
      onSearch={onSearch}
      options={users.map(({ login, avatar_url: avatar }) => ({
        key: login,
        value: login,
        className: 'antd-demo-dynamic-option',
        label: (
          <>
            <img src={avatar} alt={login} />
            <span>{login}</span>
          </>
        ),
      }))}
    />
  );
};
export default App;
```
### 配合 Form 使用
受控模式，例如配合 Form 使用。

```tsx
import React from 'react';
import { Button, Form, Mentions, Space } from 'antd';
const { getMentions } = Mentions;
const App: React.FC = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };
  const checkMention = async (_: any, value: string) => {
    const mentions = getMentions(value);
    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };
  return (
    <Form form={form} layout="horizontal" onFinish={onFinish}>
      <Form.Item
        name="coders"
        label="Top coders"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ validator: checkMention }]}
      >
        <Mentions
          rows={1}
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        name="bio"
        label="Bio"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: true }]}
      >
        <Mentions
          rows={3}
          placeholder="You can use @ to ref user here"
          options={[
            {
              value: 'afc163',
              label: 'afc163',
            },
            {
              value: 'zombieJ',
              label: 'zombieJ',
            },
            {
              value: 'yesmeck',
              label: 'yesmeck',
            },
          ]}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Space wrap>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 自定义触发字符
通过 `prefix` 属性自定义触发字符。默认为 `@`, 可以定义为数组。

```tsx
import React, { useState } from 'react';
import { Mentions } from 'antd';
import type { MentionsProps } from 'antd';
const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};
type PrefixType = keyof typeof MOCK_DATA;
const App: React.FC = () => {
  const [prefix, setPrefix] = useState<PrefixType>('@');
  const onSearch: MentionsProps['onSearch'] = (_, newPrefix) => {
    setPrefix(newPrefix as PrefixType);
  };
  return (
    <Mentions
      style={{ width: '100%' }}
      placeholder="input @ to mention people, # to mention tag"
      prefix={['@', '#']}
      onSearch={onSearch}
      options={(MOCK_DATA[prefix] || []).map((value) => ({
        key: value,
        value,
        label: value,
      }))}
    />
  );
};
export default App;
```
### 无效或只读
通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。

```tsx
import React from 'react';
import { Mentions } from 'antd';
const options = ['afc163', 'zombiej', 'yesmeck'].map((value) => ({
  value,
  key: value,
  label: value,
}));
const App: React.FC = () => (
  <>
    <div style={{ marginBottom: 10 }}>
      <Mentions
        style={{ width: '100%' }}
        placeholder="this is disabled Mentions"
        disabled
        options={options}
      />
    </div>
    <Mentions
      style={{ width: '100%' }}
      placeholder="this is readOnly Mentions"
      readOnly
      options={options}
    />
  </>
);
export default App;
```
### 向上展开
向上展开建议。

```tsx
import React from 'react';
import { Mentions } from 'antd';
const App: React.FC = () => (
  <Mentions
    style={{ width: '100%' }}
    placement="top"
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
```
### 带移除图标
自定义清除按钮。

```tsx
import React, { useState } from 'react';
import { CloseSquareFilled } from '@ant-design/icons';
import { Mentions } from 'antd';
const App: React.FC = () => {
  const [value, setValue] = useState('hello world');
  return (
    <>
      <Mentions value={value} onChange={setValue} allowClear />
      <br />
      <br />
      <Mentions
        value={value}
        onChange={setValue}
        allowClear={{ clearIcon: <CloseSquareFilled /> }}
      />
      <br />
      <br />
      <Mentions value={value} onChange={setValue} allowClear rows={3} />
    </>
  );
};
export default App;
```
### 自动大小
自适应内容高度。

```tsx
import React from 'react';
import { Mentions } from 'antd';
const App: React.FC = () => (
  <Mentions
    autoSize
    style={{ width: '100%' }}
    options={[
      {
        value: 'afc163',
        label: 'afc163',
      },
      {
        value: 'zombieJ',
        label: 'zombieJ',
      },
      {
        value: 'yesmeck',
        label: 'yesmeck',
      },
    ]}
  />
);
export default App;
```
### 自定义状态
使用 `status` 为 Mentions 添加状态。可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { Mentions, Space } from 'antd';
import type { GetProp, MentionProps } from 'antd';
type MentionsOptionProps = GetProp<MentionProps, 'options'>[number];
const onChange = (value: string) => {
  console.log('Change:', value);
};
const onSelect = (option: MentionsOptionProps) => {
  console.log('select', option);
};
const App: React.FC = () => {
  const options = [
    {
      value: 'afc163',
      label: 'afc163',
    },
    {
      value: 'zombieJ',
      label: 'zombieJ',
    },
    {
      value: 'yesmeck',
      label: 'yesmeck',
    },
  ];
  return (
    <Space direction="vertical">
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="error"
        options={options}
      />
      <Mentions
        onChange={onChange}
        onSelect={onSelect}
        defaultValue="@afc163"
        status="warning"
        options={options}
      />
    </Space>
  );
};
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Mentions } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;
const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];
const App: React.FC = () => (
  <InternalMentions style={{ width: '100%' }} value="@" options={options} />
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, Mentions } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalMentions } = Mentions;
const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
];
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: { Mentions: { dropdownHeight: 500, controlItemWidth: 300, zIndexPopup: 1000 } },
    }}
  >
    <InternalMentions style={{ width: '100%' }} value="@" options={options} />
  </ConfigProvider>
);
export default App;
```
