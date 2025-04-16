## Anchor 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Anchor, Col, Row } from 'antd';
const App: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);
export default App;
```
### 横向 Anchor
横向 Anchor。

```tsx
import React from 'react';
import { Anchor } from 'antd';
const App: React.FC = () => (
  <>
    <div style={{ padding: '20px' }}>
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{ width: '100vw', height: '100vh', textAlign: 'center', background: '#FFFBE9' }}
      />
    </div>
  </>
);
export default App;
```
### 静态位置
不浮动，状态不随页面滚动变化。

```tsx
import React from 'react';
import { Anchor } from 'antd';
const App: React.FC = () => (
  <Anchor
    affix={false}
    items={[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
```
### 自定义 onClick 事件
点击锚点不记录历史。

```tsx
import React from 'react';
import { Anchor } from 'antd';
const handleClick = (
  e: React.MouseEvent<HTMLElement>,
  link: {
    title: React.ReactNode;
    href: string;
  },
) => {
  e.preventDefault();
  console.log(link);
};
const App: React.FC = () => (
  <Anchor
    affix={false}
    onClick={handleClick}
    items={[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
```
### 自定义锚点高亮
自定义锚点高亮。

```tsx
import React from 'react';
import { Anchor } from 'antd';
const getCurrentAnchor = () => '#anchor-demo-static';
const App: React.FC = () => (
  <Anchor
    affix={false}
    getCurrentAnchor={getCurrentAnchor}
    items={[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
```
### 设置锚点滚动偏移量
锚点目标滚动到屏幕正中间。

```tsx
import React, { useEffect, useState } from 'react';
import { Anchor, Col, Row } from 'antd';
const style: React.CSSProperties = {
  height: '30vh',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  position: 'fixed',
  top: 0,
  insetInlineStart: 0,
  width: '75%',
  color: '#fff',
};
const App: React.FC = () => {
  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <div>
      <Row>
        <Col span={18}>
          <div
            id="part-1"
            style={{ height: '100vh', background: 'rgba(255,0,0,0.02)', marginTop: '30vh' }}
          >
            Part 1
          </div>
          <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }}>
            Part 2
          </div>
          <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }}>
            Part 3
          </div>
        </Col>
        <Col span={6}>
          <Anchor
            targetOffset={targetOffset}
            items={[
              { key: 'part-1', href: '#part-1', title: 'Part 1' },
              { key: 'part-2', href: '#part-2', title: 'Part 2' },
              { key: 'part-3', href: '#part-3', title: 'Part 3' },
            ]}
          />
        </Col>
      </Row>
      <div style={style} ref={topRef}>
        <div>Fixed Top Block</div>
      </div>
    </div>
  );
};
export default App;
```
### 监听锚点链接改变
监听锚点链接改变

```tsx
import React from 'react';
import { Anchor } from 'antd';
const onChange = (link: string) => {
  console.log('Anchor:OnChange', link);
};
const App: React.FC = () => (
  <Anchor
    affix={false}
    onChange={onChange}
    items={[
      {
        key: '1',
        href: '#anchor-demo-basic',
        title: 'Basic demo',
      },
      {
        key: '2',
        href: '#anchor-demo-static',
        title: 'Static demo',
      },
      {
        key: '3',
        href: '#api',
        title: 'API',
        children: [
          {
            key: '4',
            href: '#anchor-props',
            title: 'Anchor Props',
          },
          {
            key: '5',
            href: '#link-props',
            title: 'Link Props',
          },
        ],
      },
    ]}
  />
);
export default App;
```
### 替换历史中的 href
替换浏览器历史记录中的路径，后退按钮将返回到上一页而不是上一个锚点。

```tsx
import React from 'react';
import { Anchor, Col, Row } from 'antd';
const App: React.FC = () => (
  <Row>
    <Col span={16}>
      <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
      <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
      <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
    </Col>
    <Col span={8}>
      <Anchor
        replace
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}
      />
    </Col>
  </Row>
);
export default App;
```
### 废弃的 JSX 示例
调试使用

```tsx
import React from 'react';
import { Anchor } from 'antd';
const { Link } = Anchor;
const App: React.FC = () => (
  <Anchor affix={false}>
    <Link href="#anchor-demo-basic" title="Basic demo" />
    <Link href="#anchor-demo-static" title="Static demo" />
    <Link href="#api" title="API">
      <Link href="#anchor-props" title="Anchor Props" />
      <Link href="#link-props" title="Link Props" />
    </Link>
  </Anchor>
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { Anchor, Col, ConfigProvider, Row } from 'antd';
/** Test usage. Do not use in your production. */
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Anchor: {
          linkPaddingBlock: 100,
          linkPaddingInlineStart: 50,
        },
      },
    }}
  >
    <Row>
      <Col span={16}>
        <div id="part-1" style={{ height: '100vh', background: 'rgba(255,0,0,0.02)' }} />
        <div id="part-2" style={{ height: '100vh', background: 'rgba(0,255,0,0.02)' }} />
        <div id="part-3" style={{ height: '100vh', background: 'rgba(0,0,255,0.02)' }} />
      </Col>
      <Col span={8}>
        <Anchor
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'Part 1',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'Part 2',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'Part 3',
            },
          ]}
        />
      </Col>
    </Row>
  </ConfigProvider>
);
```
