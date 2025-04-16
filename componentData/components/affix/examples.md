## Affix 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Affix, Button } from 'antd';
const App: React.FC = () => {
  const [top, setTop] = React.useState<number>(100);
  const [bottom, setBottom] = React.useState<number>(100);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};
export default App;
```
### 固定状态改变的回调
可以获得是否固定的状态。

```tsx
import React from 'react';
import { Affix, Button } from 'antd';
const App: React.FC = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
export default App;
```
### 滚动容器
用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

```tsx
import React from 'react';
import { Affix, Button } from 'antd';
const containerStyle: React.CSSProperties = {
  width: '100%',
  height: 100,
  overflow: 'auto',
  boxShadow: '0 0 0 1px #1677ff',
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};
const style: React.CSSProperties = {
  width: '100%',
  height: 1000,
};
const App: React.FC = () => {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  return (
    <div style={containerStyle} ref={setContainer}>
      <div style={style}>
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};
export default App;
```
### 调整浏览器大小，观察 Affix 容器是否发生变化。跟随变化为正常。#17678
DEBUG

```tsx
import React, { useState } from 'react';
import { Affix, Button } from 'antd';
const App: React.FC = () => {
  const [top, setTop] = useState(10);
  return (
    <div style={{ height: 10000 }}>
      <div>Top</div>
      <Affix offsetTop={top}>
        <div style={{ background: 'red' }}>
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};
export default App;
```
