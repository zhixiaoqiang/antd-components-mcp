## Segmented 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Segmented } from 'antd';
const Demo: React.FC = () => (
  <Segmented<string>
    options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
    onChange={(value) => {
      console.log(value); // string
    }}
  />
);
export default Demo;
```
### 垂直方向
垂直方向。

```tsx
import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
const Demo: React.FC = () => (
  <Segmented
    orientation="vertical"
    options={[
      { value: 'List', icon: <BarsOutlined /> },
      { value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);
export default Demo;
```
### Block 分段选择器
`block` 属性使其适合父元素宽度。

```tsx
import React from 'react';
import { Segmented } from 'antd';
const Demo: React.FC = () => (
  <Segmented<string | number> options={[123, 456, 'longtext-longtext-longtext-longtext']} block />
);
export default Demo;
```
### 胶囊形状
胶囊型的 Segmented。

```tsx
import React, { useState } from 'react';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Flex, Segmented } from 'antd';
import type { SizeType } from '../../config-provider/SizeContext';
const Demo: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle');
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Segmented<SizeType> options={['small', 'middle', 'large']} value={size} onChange={setSize} />
      <Segmented
        size={size}
        shape="round"
        options={[
          { value: 'light', icon: <SunOutlined /> },
          { value: 'dark', icon: <MoonOutlined /> },
        ]}
      />
    </Flex>
  );
};
export default Demo;
```
### 不可用
Segmented 不可用。

```tsx
import React from 'react';
import { Flex, Segmented } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented options={['Map', 'Transit', 'Satellite']} disabled />
    <Segmented
      options={[
        'Daily',
        { label: 'Weekly', value: 'Weekly', disabled: true },
        'Monthly',
        { label: 'Quarterly', value: 'Quarterly', disabled: true },
        'Yearly',
      ]}
    />
  </Flex>
);
export default App;
```
### 受控模式
受控的 Segmented。

```tsx
import React, { useState } from 'react';
import { Segmented } from 'antd';
const Demo: React.FC = () => {
  const [value, setValue] = useState<string>('Map');
  return (
    <Segmented<string>
      options={['Map', 'Transit', 'Satellite']}
      value={value}
      onChange={setValue}
    />
  );
};
export default Demo;
```
### 自定义渲染
自定义渲染每一个 Segmented Item。

```tsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Flex, Segmented } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" alt="User 1" />
              <div>User 1</div>
            </div>
          ),
          value: 'user1',
          tooltip: { title: 'hello user1', color: 'gold' },
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#f56a00' }} alt="User 2">
                K
              </Avatar>
              <div>User 2</div>
            </div>
          ),
          value: 'user2',
          tooltip: { title: 'hello user2', color: 'pink' },
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} alt="User 3" />
              <div>User 3</div>
            </div>
          ),
          value: 'user3',
          tooltip: { title: 'hello user3', color: 'geekblue' },
        },
      ]}
    />
    <Segmented
      options={[
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Spring</div>
              <div>Jan-Mar</div>
            </div>
          ),
          value: 'spring',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Summer</div>
              <div>Apr-Jun</div>
            </div>
          ),
          value: 'summer',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Autumn</div>
              <div>Jul-Sept</div>
            </div>
          ),
          value: 'autumn',
        },
        {
          label: (
            <div style={{ padding: 4 }}>
              <div>Winter</div>
              <div>Oct-Dec</div>
            </div>
          ),
          value: 'winter',
        },
      ]}
    />
  </Flex>
);
export default App;
```
### 动态数据
动态加载数据。

```tsx
import React, { useState } from 'react';
import { Button, Flex, Segmented } from 'antd';
const Demo: React.FC = () => {
  const [options, setOptions] = useState(['Daily', 'Weekly', 'Monthly']);
  const [moreLoaded, setMoreLoaded] = useState(false);
  const handleLoadOptions = () => {
    setOptions((prev) => [...prev, 'Quarterly', 'Yearly']);
    setMoreLoaded(true);
  };
  return (
    <Flex gap="small" align="flex-start" vertical>
      <Segmented options={options} />
      <Button type="primary" disabled={moreLoaded} onClick={handleLoadOptions}>
        Load more options
      </Button>
    </Flex>
  );
};
export default Demo;
```
### 三种大小
我们为 `<Segmented />` 组件定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。

```tsx
import React from 'react';
import { Flex, Segmented } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Segmented size="large" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    <Segmented size="small" options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
  </Flex>
);
export default App;
```
### 设置图标
给 Segmented Item 设置 Icon。

```tsx
import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
const Demo: React.FC = () => (
  <Segmented
    options={[
      { label: 'List', value: 'List', icon: <BarsOutlined /> },
      { label: 'Kanban', value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);
export default Demo;
```
### 只设置图标
在 Segmented Item 选项中只设置 Icon。

```tsx
import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
const Demo: React.FC = () => (
  <Segmented
    options={[
      { value: 'List', icon: <BarsOutlined /> },
      { value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);
export default Demo;
```
### 配合 name 使用
可以为 Segmented 配置 `name` 参数，为组合内的 input 元素赋予相同的 `name` 属性，使浏览器把 Segmented 下的 input 真正看作是一组（例如可以通过方向键始终**在同一组内**更改选项）。

```tsx
import React from 'react';
import { Segmented } from 'antd';
const Demo: React.FC = () => (
  <Segmented<string> options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} name="group" />
);
export default Demo;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Segmented 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { CloudOutlined, RocketOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Flex, Segmented } from 'antd';
import type { SegmentedProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 2px;
  `,
}));
const styleFn: SegmentedProps['styles'] = (info) => {
  if (info.props.vertical) {
    return {
      root: {
        border: '1px solid #77BEF0',
        padding: 4,
        width: 100,
      },
      icon: {
        color: '#77BEF0',
      },
      item: {
        textAlign: 'start',
      },
    } satisfies SegmentedProps['styles'];
  }
  return {};
};
const styles: SegmentedProps['styles'] = {
  root: {
    padding: 4,
    width: 260,
  },
};
const options: SegmentedProps['options'] = [
  {
    label: 'Boost',
    value: 'boost',
    icon: <RocketOutlined />,
  },
  {
    label: 'Stream',
    value: 'stream',
    icon: <ThunderboltOutlined />,
  },
  {
    label: 'Cloud',
    value: 'cloud',
    icon: <CloudOutlined />,
  },
];
const App: React.FC = () => {
  const segmentedSharedProps: SegmentedProps = {
    options,
    classNames,
  };
  return (
    <Flex vertical gap="middle">
      <Segmented {...segmentedSharedProps} styles={styles} />
      <Segmented {...segmentedSharedProps} styles={styleFn} vertical />
    </Flex>
  );
};
export default App;
```
### 受控同步模式
测试受控模式下两个 Segmented 同步 state。

```tsx
import React, { useState } from 'react';
import { Segmented } from 'antd';
const Demo: React.FC = () => {
  const [foo, setFoo] = useState<string | number>('AND');
  return (
    <>
      <Segmented value={foo} options={['AND', 'OR', 'NOT']} onChange={setFoo} />
      &nbsp;&nbsp;
      <Segmented value={foo} options={['AND', 'OR', 'NOT']} onChange={setFoo} />
    </>
  );
};
export default Demo;
```
### 统一高度
与其他组件保持统一高度。

```tsx
import React from 'react';
import { Button, Flex, Input, Segmented, Select } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <div>
      <Segmented
        size="large"
        style={{ marginInlineEnd: 6 }}
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Button type="primary" size="large">
        Button
      </Button>
    </div>
    <div>
      <Segmented
        size="middle"
        style={{ marginInlineEnd: 6 }}
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Input placeholder="default size" style={{ width: 150 }} />
    </div>
    <div>
      <Segmented
        size="small"
        style={{ marginInlineEnd: 6 }}
        options={['Daily', 'Weekly', 'Monthly']}
      />
      <Select
        size="small"
        defaultValue="lucy"
        aria-label="select"
        style={{ width: 150 }}
        options={[{ label: 'Lucy', value: 'lucy' }]}
      />
    </div>
  </Flex>
);
export default App;
```
### 自定义组件 Token
自定义组件 Token。

```tsx
import React from 'react';
import { ConfigProvider, Segmented } from 'antd';
const Demo: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemColor: '#222',
            itemHoverColor: '#333',
            itemHoverBg: 'rgba(0, 0, 0, 0.06)',
            itemSelectedBg: '#aaa',
            itemActiveBg: '#ccc',
            itemSelectedColor: '#fff',
          },
        },
      }}
    >
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    </ConfigProvider>
    &nbsp;&nbsp;
    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            itemColor: '#222',
            itemHoverColor: '#333',
            itemHoverBg: 'rgba(0, 0, 0, 0.06)',
            itemSelectedBg: 'linear-gradient(225deg, #c200ff 0%, #00ffff 100%)',
            itemActiveBg: '#ccc',
            itemSelectedColor: '#fff',
          },
        },
      }}
    >
      <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
    </ConfigProvider>
  </>
);
export default Demo;
```
