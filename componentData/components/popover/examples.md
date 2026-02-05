## Popover 组件示例
### 基本
最简单的用法，浮层的大小由内容区域决定。

```tsx
import React from 'react';
import { Button, Popover } from 'antd';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App: React.FC = () => (
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);
export default App;
```
### 三种触发方式
鼠标移入、聚集、点击。

```tsx
import React from 'react';
import { Button, Popover, Space } from 'antd';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App: React.FC = () => (
  <Space wrap>
    <Popover content={content} title="Title" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="focus">
      <Button>Focus me</Button>
    </Popover>
    <Popover content={content} title="Title" trigger="click">
      <Button>Click me</Button>
    </Popover>
  </Space>
);
export default App;
```
### 位置
位置有十二个方向。

```tsx
import React from 'react';
import { Button, ConfigProvider, Flex, Popover } from 'antd';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 80;
const App: React.FC = () => (
  <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
    <Flex vertical justify="center" align="center" className="demo">
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popover placement="topLeft" title={text} content={content}>
          <Button>TL</Button>
        </Popover>
        <Popover placement="top" title={text} content={content}>
          <Button>Top</Button>
        </Popover>
        <Popover placement="topRight" title={text} content={content}>
          <Button>TR</Button>
        </Popover>
      </Flex>
      <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
        <Flex align="center" vertical>
          <Popover placement="leftTop" title={text} content={content}>
            <Button>LT</Button>
          </Popover>
          <Popover placement="left" title={text} content={content}>
            <Button>Left</Button>
          </Popover>
          <Popover placement="leftBottom" title={text} content={content}>
            <Button>LB</Button>
          </Popover>
        </Flex>
        <Flex align="center" vertical>
          <Popover placement="rightTop" title={text} content={content}>
            <Button>RT</Button>
          </Popover>
          <Popover placement="right" title={text} content={content}>
            <Button>Right</Button>
          </Popover>
          <Popover placement="rightBottom" title={text} content={content}>
            <Button>RB</Button>
          </Popover>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Popover placement="bottomLeft" title={text} content={content}>
          <Button>BL</Button>
        </Popover>
        <Popover placement="bottom" title={text} content={content}>
          <Button>Bottom</Button>
        </Popover>
        <Popover placement="bottomRight" title={text} content={content}>
          <Button>BR</Button>
        </Popover>
      </Flex>
    </Flex>
  </ConfigProvider>
);
export default App;
```
### 箭头展示
通过 `arrow` 属性隐藏箭头。

```tsx
import React, { useMemo, useState } from 'react';
import { Button, ConfigProvider, Flex, Popover, Segmented } from 'antd';
import type { PopoverProps } from 'antd';
const text = <span>Title</span>;
const buttonWidth = 80;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App: React.FC = () => {
  const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');
  const mergedArrow = useMemo<PopoverProps['arrow']>(() => {
    if (arrow === 'Hide') {
      return false;
    }
    if (arrow === 'Show') {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
      <Segmented
        options={['Show', 'Hide', 'Center']}
        onChange={setArrow}
        style={{ marginBottom: 24 }}
      />
      <Flex vertical justify="center" align="center" className="demo">
        <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
          <Popover placement="topLeft" title={text} content={content} arrow={mergedArrow}>
            <Button>TL</Button>
          </Popover>
          <Popover placement="top" title={text} content={content} arrow={mergedArrow}>
            <Button>Top</Button>
          </Popover>
          <Popover placement="topRight" title={text} content={content} arrow={mergedArrow}>
            <Button>TR</Button>
          </Popover>
        </Flex>
        <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
          <Flex align="center" vertical>
            <Popover placement="leftTop" title={text} content={content} arrow={mergedArrow}>
              <Button>LT</Button>
            </Popover>
            <Popover placement="left" title={text} content={content} arrow={mergedArrow}>
              <Button>Left</Button>
            </Popover>
            <Popover placement="leftBottom" title={text} content={content} arrow={mergedArrow}>
              <Button>LB</Button>
            </Popover>
          </Flex>
          <Flex align="center" vertical>
            <Popover placement="rightTop" title={text} content={content} arrow={mergedArrow}>
              <Button>RT</Button>
            </Popover>
            <Popover placement="right" title={text} content={content} arrow={mergedArrow}>
              <Button>Right</Button>
            </Popover>
            <Popover placement="rightBottom" title={text} content={content} arrow={mergedArrow}>
              <Button>RB</Button>
            </Popover>
          </Flex>
        </Flex>
        <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
          <Popover placement="bottomLeft" title={text} content={content} arrow={mergedArrow}>
            <Button>BL</Button>
          </Popover>
          <Popover placement="bottom" title={text} content={content} arrow={mergedArrow}>
            <Button>Bottom</Button>
          </Popover>
          <Popover placement="bottomRight" title={text} content={content} arrow={mergedArrow}>
            <Button>BR</Button>
          </Popover>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};
export default App;
```
### Arrow.pointAtCenter
`arrow={{ pointAtCenter: true }}` 属性可以让箭头指向目标元素的中心。

```tsx
import React from 'react';
import { createStaticStyles } from 'antd-style';
import { Flex, Popover } from 'antd';
import type { GetProp } from 'antd';
const classNames = createStaticStyles(({ css }) => ({
  item: css`
    width: 280px;
    height: 280px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed purple;
  `,
  box: css`
    width: 40px;
    height: 40px;
    background-color: deepskyblue;
  `,
  cross: css`
    position: relative;
    &::before, &::after {
      content: "";
      position: absolute;
      inset: 0;
    }
    &::before {
      top: 50%;
      height: 1px;
      background-color: red;
    }
    &::after {
      left: 50%;
      width: 1px;
      background-color: blue;
    }
  `,
}));
type Placement = GetProp<typeof Popover, 'placement'>;
const placements: Placement[] = [
  'topLeft',
  'top',
  'topRight',
  'leftTop',
  'left',
  'leftBottom',
  'rightTop',
  'right',
  'rightBottom',
  'bottomLeft',
  'bottom',
  'bottomRight',
];
const App = () => {
  return (
    <Flex gap={16} wrap>
      {placements.map((placement) => (
        <div key={placement} className={classNames.item}>
          <Popover
            placement={placement}
            content={
              <Flex align="center" justify="center">
                {placement}
              </Flex>
            }
            autoAdjustOverflow={false}
            arrow={{ pointAtCenter: true }}
            forceRender
            open
          >
            <div className={`${classNames.box} ${classNames.cross}`} />
          </Popover>
        </div>
      ))}
    </Flex>
  );
};
export default App;
```
### 贴边偏移
当 Popover 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

```tsx
import React from 'react';
import { Button, Popover } from 'antd';
const style: React.CSSProperties = {
  width: '300vw',
  height: '300vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const App: React.FC = () => {
  React.useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollLeft = document.documentElement.clientWidth;
  }, []);
  return (
    <div style={style}>
      <Popover content="Thanks for using antd. Have a nice day !" open>
        <Button type="primary">Scroll The Window</Button>
      </Popover>
    </div>
  );
};
export default App;
```
### 从浮层内关闭
使用 `open` 属性控制浮层显示。

```tsx
import React, { useState } from 'react';
import { Button, Popover } from 'antd';
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };
  return (
    <Popover
      content={<a onClick={hide}>Close</a>}
      title="Title"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type="primary">Click me</Button>
    </Popover>
  );
};
export default App;
```
### 悬停点击弹出窗口
以下示例显示如何创建可悬停和单击的弹出窗口。

```tsx
import React, { useState } from 'react';
import { Button, Popover } from 'antd';
const hoverContent = <div>This is hover content.</div>;
const clickContent = <div>This is click content.</div>;
const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hide = () => {
    setClicked(false);
    setHovered(false);
  };
  const handleHoverChange = (open: boolean) => {
    setHovered(open);
    setClicked(false);
  };
  const handleClickChange = (open: boolean) => {
    setHovered(false);
    setClicked(open);
  };
  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <a onClick={hide}>Close</a>
          </div>
        }
        title="Click title"
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button>Hover and click</Button>
      </Popover>
    </Popover>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Popover 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Button, Flex, Popover } from 'antd';
import type { PopoverProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  container: css`
    padding: 10px;
  `,
}));
const styles: PopoverProps['styles'] = {
  container: {
    background: '#eee',
    boxShadow: 'inset 5px 5px 3px #fff, inset -5px -5px 3px #ddd, 0 0 3px rgba(0,0,0,0.2)',
  },
  content: {
    color: '#262626',
  },
};
const stylesFn: PopoverProps['styles'] = (info) => {
  if (!info.props.arrow) {
    return {
      container: {
        backgroundColor: 'rgba(53, 71, 125, 0.8)',
        padding: 12,
        borderRadius: 4,
      },
      content: {
        color: '#fff',
      },
    } satisfies PopoverProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  return (
    <Flex gap="middle">
      <Popover content="Object text" classNames={classNames} styles={styles} arrow={false}>
        <Button>Object Style</Button>
      </Popover>
      <Popover content="Function text" classNames={classNames} styles={stylesFn} arrow={false}>
        <Button type="primary">Function Style</Button>
      </Popover>
    </Flex>
  );
};
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Popover } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopover } = Popover;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App: React.FC = () => (
  <>
    <InternalPopover content={content} title="Title" />
    <InternalPopover
      content={content}
      title="Title"
      placement="bottomLeft"
      style={{ width: 250 }}
    />
  </>
);
export default App;
```
### 线框风格
线框样式。

```tsx
import React from 'react';
import { ConfigProvider, Popover } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopover } = Popover;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App: React.FC = () => (
  <ConfigProvider theme={{ token: { wireframe: true } }}>
    <InternalPopover content={content} title="Title" />
    <InternalPopover
      content={content}
      title="Title"
      placement="bottomLeft"
      style={{ width: 250 }}
    />
  </ConfigProvider>
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, Popover } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPopover } = Popover;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Popover: {
          titleMinWidth: 40,
        },
      },
    }}
  >
    <InternalPopover content={content} title="Title" />
    <InternalPopover
      content={content}
      title="Title"
      placement="bottomLeft"
      style={{ width: 250 }}
    />
  </ConfigProvider>
);
export default App;
```
