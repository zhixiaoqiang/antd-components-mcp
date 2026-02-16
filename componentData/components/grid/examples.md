## Grid 组件示例
### 基础栅格
从堆叠到水平排列。
使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

```tsx
import React from 'react';
import { Col, Row } from 'antd';
const App: React.FC = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);
export default App;
```
### 区块间隔
栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(n 是自然数)。
如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。
如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`。
`Row` 的 `gutter` 属性可以设置为[字符串CSS单位](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Values_and_Units)，例如：`px`、`rem`、`vw`、`vh` 等。
> 数组形式垂直间距在 `3.24.0` 之后支持。string 类型在 `5.28.0` 之后支持。

```tsx
import React from 'react';
import { Col, Divider, Row } from 'antd';
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">Horizontal</Divider>
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider titlePlacement="start">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider titlePlacement="start">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider titlePlacement="start">Gutter(string)</Divider>
    <Row gutter="2rem">
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);
export default App;
```
### 左右偏移
列偏移。
使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

```tsx
import React from 'react';
import { Col, Row } from 'antd';
const App: React.FC = () => (
  <>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>
        col-8
      </Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
      <Col span={6} offset={6}>
        col-6 col-offset-6
      </Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>
        col-12 col-offset-6
      </Col>
    </Row>
  </>
);
export default App;
```
### 栅格排序
列排序。
通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```tsx
import React from 'react';
import { Col, Row } from 'antd';
const App: React.FC = () => (
  <Row>
    <Col span={18} push={6}>
      col-18 col-push-6
    </Col>
    <Col span={6} pull={18}>
      col-6 col-pull-18
    </Col>
  </Row>
);
export default App;
```
### 排版
布局基础。
子元素根据不同的值 `start`、`center`、`end`、`space-between`、`space-around` 和 `space-evenly`，分别定义其在父节点里面的排版方式。

```tsx
import React from 'react';
import { Col, Divider, Row } from 'antd';
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">sub-element align left</Divider>
    <Row justify="start">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <Divider titlePlacement="start">sub-element align center</Divider>
    <Row justify="center">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <Divider titlePlacement="start">sub-element align right</Divider>
    <Row justify="end">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <Divider titlePlacement="start">sub-element monospaced arrangement</Divider>
    <Row justify="space-between">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <Divider titlePlacement="start">sub-element align full</Divider>
    <Row justify="space-around">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
    <Divider titlePlacement="start">sub-element align evenly</Divider>
    <Row justify="space-evenly">
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
      <Col span={4}>col-4</Col>
    </Row>
  </>
);
export default App;
```
### 对齐
子元素垂直对齐。

```tsx
import React from 'react';
import { Col, Divider, Row } from 'antd';
const DemoBox: React.FC<React.PropsWithChildren<{ value: number }>> = (props) => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">Align Top</Divider>
    <Row justify="center" align="top">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
    <Divider titlePlacement="start">Align Middle</Divider>
    <Row justify="space-around" align="middle">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
    <Divider titlePlacement="start">Align Bottom</Divider>
    <Row justify="space-between" align="bottom">
      <Col span={4}>
        <DemoBox value={100}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={50}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={120}>col-4</DemoBox>
      </Col>
      <Col span={4}>
        <DemoBox value={80}>col-4</DemoBox>
      </Col>
    </Row>
  </>
);
export default App;
```
### 排序
通过 `order` 来改变元素的排序。

```tsx
import React from 'react';
import { Col, Divider, Row } from 'antd';
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">Normal</Divider>
    <Row>
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
    <Divider titlePlacement="start">Responsive</Divider>
    <Row>
      <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
        1 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
        2 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
        3 col-order-responsive
      </Col>
      <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
        4 col-order-responsive
      </Col>
    </Row>
  </>
);
export default App;
```
### Flex 填充
Col 提供 `flex` 属性以支持填充。

```tsx
import React from 'react';
import { Col, Divider, Row } from 'antd';
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">Percentage columns</Divider>
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    <Divider titlePlacement="start">Fill rest</Divider>
    <Row>
      <Col flex="100px">100px</Col>
      <Col flex="auto">Fill Rest</Col>
    </Row>
    <Divider titlePlacement="start">Raw flex style</Divider>
    <Row>
      <Col flex="1 1 200px">1 1 200px</Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row>
    <Row wrap={false}>
      <Col flex="none">
        <div style={{ padding: '0 16px' }}>none</div>
      </Col>
      <Col flex="auto">auto with no-wrap</Col>
    </Row>
  </>
);
export default App;
```
### 响应式布局
参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设七个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl` `xxxl`。

```tsx
import React from 'react';
import { Col, Row } from 'antd';
const App: React.FC = () => (
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
);
export default App;
```
### Flex 响应式布局
支持更灵活的响应式下的任意 flex 比例，该功能需要浏览器支持 CSS Variables。

```tsx
import React from 'react';
import { Col, Row } from 'antd';
const App: React.FC = () => (
  <Row>
    {Array.from({ length: 10 }).map((_, index) => {
      const key = `col-${index}`;
      return (
        <Col
          key={key}
          xs={{ flex: '100%' }}
          sm={{ flex: '50%' }}
          md={{ flex: '40%' }}
          lg={{ flex: '20%' }}
          xl={{ flex: '10%' }}
        >
          Col
        </Col>
      );
    })}
  </Row>
);
export default App;
```
### 其他属性的响应式
`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。
其中 `xs={6}` 相当于 `xs={{ span: 6 }}`。

```tsx
import React from 'react';
import { Col, Row } from 'antd';
const App: React.FC = () => (
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>
);
export default App;
```
### 栅格配置器
可以简单配置几种等分栅格和间距。

```tsx
import React, { useState } from 'react';
import { Col, Row, Slider } from 'antd';
const gutters: Record<PropertyKey, number> = {};
const vgutters: Record<PropertyKey, number> = {};
const colCounts: Record<PropertyKey, number> = {};
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});
const App: React.FC = () => {
  const [gutterKey, setGutterKey] = useState(1);
  const [vgutterKey, setVgutterKey] = useState(1);
  const [colCountKey, setColCountKey] = useState(2);
  const cols = [];
  const colCount = colCounts[colCountKey];
  let colCode = '';
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        <div>Column</div>
      </Col>,
    );
    colCode += `  <Col span={${24 / colCount}} />\n`;
  }
  return (
    <>
      <span>Horizontal Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(gutters).length - 1}
          value={gutterKey}
          onChange={setGutterKey}
          marks={gutters}
          step={null}
          tooltip={{ formatter: (value) => gutters[value as number] }}
        />
      </div>
      <span>Vertical Gutter (px): </span>
      <div style={{ width: '50%' }}>
        <Slider
          min={0}
          max={Object.keys(vgutters).length - 1}
          value={vgutterKey}
          onChange={setVgutterKey}
          marks={vgutters}
          step={null}
          tooltip={{ formatter: (value) => vgutters[value as number] }}
        />
      </div>
      <span>Column Count:</span>
      <div style={{ width: '50%', marginBottom: 48 }}>
        <Slider
          min={0}
          max={Object.keys(colCounts).length - 1}
          value={colCountKey}
          onChange={setColCountKey}
          marks={colCounts}
          step={null}
          tooltip={{ formatter: (value) => colCounts[value as number] }}
        />
      </div>
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
        {cols}
        {cols}
      </Row>
      Another Row:
      <Row gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>{cols}</Row>
      <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}\n${colCode}</Row>`}</pre>
      <pre className="demo-code">{`<Row gutter={[${gutters[gutterKey]}, ${vgutters[vgutterKey]}]}>\n${colCode}</Row>`}</pre>
    </>
  );
};
export default App;
```
### useBreakpoint Hook
使用 `useBreakpoint` Hook 个性化布局，其中 `xs` 仅当满足最小宽度时生效。

```tsx
import React from 'react';
import { Grid, Tag } from 'antd';
const { useBreakpoint } = Grid;
const App: React.FC = () => {
  const screens = useBreakpoint();
  return (
    <>
      Current break point:{' '}
      {Object.entries(screens)
        .filter((screen) => !!screen[1])
        .map((screen) => (
          <Tag color="blue" key={screen[0]}>
            {screen[0]}
          </Tag>
        ))}
    </>
  );
};
export default App;
```
