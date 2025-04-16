## Rate 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Rate } from 'antd';
const App: React.FC = () => <Rate />;
export default App;
```
### 半星
支持选中半星。

```tsx
import React from 'react';
import { Rate } from 'antd';
const App: React.FC = () => <Rate allowHalf defaultValue={2.5} />;
export default App;
```
### 文案展现
给评分组件加上文案展示。

```tsx
import React, { useState } from 'react';
import { Flex, Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App: React.FC = () => {
  const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span>{desc[value - 1]}</span> : null}
    </Flex>
  );
};
export default App;
```
### 只读
只读，无法进行鼠标交互。

```tsx
import React from 'react';
import { Rate } from 'antd';
const App: React.FC = () => <Rate disabled defaultValue={2} />;
export default App;
```
### 清除
支持允许或者禁用清除。

```tsx
import React from 'react';
import { Flex, Rate } from 'antd';
const App: React.FC = () => (
  <Flex gap="middle" vertical>
    <Flex gap="middle">
      <Rate defaultValue={3} />
      <span>allowClear: true</span>
    </Flex>
    <Flex gap="middle">
      <Rate defaultValue={3} allowClear={false} />
      <span>allowClear: false</span>
    </Flex>
  </Flex>
);
export default App;
```
### 其他字符
可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

```tsx
import React from 'react';
import { HeartOutlined } from '@ant-design/icons';
import { Flex, Rate } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Rate character={<HeartOutlined />} allowHalf />
    <Rate character="A" allowHalf style={{ fontSize: 36 }} />
    <Rate character="好" allowHalf />
  </Flex>
);
export default App;
```
### 自定义字符
可以使用 `(RateProps) => ReactNode` 的方式自定义每一个字符。

```tsx
import React from 'react';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Flex, Rate } from 'antd';
const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const App: React.FC = () => (
  <Flex gap="middle" vertical>
    <Rate defaultValue={2} character={({ index = 0 }) => index + 1} />
    <Rate defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} />
  </Flex>
);
export default App;
```
### 组件 Token
调试使用。

```tsx
import React from 'react';
import { ConfigProvider, Rate } from 'antd';
/** Test usage. Do not use in your production. */
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Rate: {
          starColor: 'blue',
          starSize: 40,
          starHoverScale: 'scale(2)',
          starBg: 'red',
        },
      },
    }}
  >
    <Rate defaultValue={2.5} />
  </ConfigProvider>
);
```
