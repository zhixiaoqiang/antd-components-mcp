## Flex 组件示例
### 基本布局
最简单的用法。

```tsx
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex, Radio } from 'antd';
const baseStyle: React.CSSProperties = {
  width: '25%',
  height: 54,
};
const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('horizontal');
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Flex vertical={value === 'vertical'}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
        ))}
      </Flex>
    </Flex>
  );
};
export default App;
```
### 对齐方式
设置对齐方式。

```tsx
import React from 'react';
import { Button, Flex, Segmented } from 'antd';
import type { FlexProps } from 'antd';
const boxStyle: React.CSSProperties = {
  width: '100%',
  height: 120,
  borderRadius: 6,
  border: '1px solid #40a9ff',
};
const justifyOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignOptions = ['flex-start', 'center', 'flex-end'];
const App: React.FC = () => {
  const [justify, setJustify] = React.useState<FlexProps['justify']>(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState<FlexProps['align']>(alignOptions[0]);
  return (
    <Flex gap="middle" align="start" vertical>
      <p>Select justify :</p>
      <Segmented options={justifyOptions} onChange={setJustify} />
      <p>Select align :</p>
      <Segmented options={alignOptions} onChange={setAlignItems} />
      <Flex style={boxStyle} justify={justify} align={alignItems}>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
      </Flex>
    </Flex>
  );
};
export default App;
```
### 设置间隙
使用 `gap` 设置元素之间的间距，预设了 `small`、`middle`、`large` 三种尺寸，也可以自定义间距。

```tsx
import React from 'react';
import { Button, Flex, Radio, Slider } from 'antd';
import type { ConfigProviderProps } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
const App: React.FC = () => {
  const [gapSize, setGapSize] = React.useState<SizeType | 'customize'>('small');
  const [customGapSize, setCustomGapSize] = React.useState<number>(0);
  return (
    <Flex gap="middle" vertical>
      <Radio.Group value={gapSize} onChange={(e) => setGapSize(e.target.value)}>
        {['small', 'middle', 'large', 'customize'].map((size) => (
          <Radio key={size} value={size}>
            {size}
          </Radio>
        ))}
      </Radio.Group>
      {gapSize === 'customize' && <Slider value={customGapSize} onChange={setCustomGapSize} />}
      <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </Flex>
    </Flex>
  );
};
export default App;
```
### 自动换行
自动换行。

```tsx
import React from 'react';
import { Button, Flex } from 'antd';
const Demo: React.FC = () => (
  <Flex wrap gap="small">
    {Array.from({ length: 24 }, (_, i) => (
      <Button key={i} type="primary">
        Button
      </Button>
    ))}
  </Flex>
);
export default Demo;
```
### 组合使用
嵌套使用，可以实现更复杂的布局。

```tsx
import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
const cardStyle: React.CSSProperties = {
  width: 620,
};
const imgStyle: React.CSSProperties = {
  display: 'block',
  width: 273,
};
const App: React.FC = () => (
  <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
    <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
      <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
        <Typography.Title level={3}>
          “antd is an enterprise-class UI design language and React UI library.”
        </Typography.Title>
        <Button type="primary" href="https://ant.design" target="_blank">
          Get Started
        </Button>
      </Flex>
    </Flex>
  </Card>
);
export default App;
```
### 调试专用
调试专用。

```tsx
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Flex } from 'antd';
const App: React.FC = () => (
  <>
    <Flex vertical>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 60,
            backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
          }}
        />
      ))}
    </Flex>
    <Flex style={{ marginTop: 20 }}>
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: '25%',
            height: i % 2 ? 60 : 40,
            backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
          }}
        />
      ))}
    </Flex>
  </>
);
export default App;
```
