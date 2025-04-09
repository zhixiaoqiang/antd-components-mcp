## Popover 组件示例

### 基本

#### zh-CN

最简单的用法，浮层的大小由内容区域决定。

#### en-US

The most basic example. The size of the floating layer depends on the contents region.

<style>
.ant-popover-content p {
  margin: 0;
}
</style>

```typescript
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

#### zh-CN

鼠标移入、聚集、点击。

#### en-US

Mouse to click, focus and move in.

```typescript
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

#### zh-CN

位置有十二个方向。

#### en-US

There are 12 `placement` options available.

```typescript
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

#### zh-CN

通过 `arrow` 属性隐藏箭头。

#### en-US

Hide arrow by `arrow`.

```typescript
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

#### zh-CN

`arrow={{ pointAtCenter: true }}` 属性可以让箭头指向目标元素的中心。

#### en-US

`arrow={{ pointAtCenter: true }}` property can make the arrow point at the center of the target element.

```typescript
import React from 'react';
import { createStyles } from 'antd-style';
import { Flex, Popover } from 'antd';
import type { GetProp } from 'antd';

const useStyle = createStyles(() => ({
  item: {
    width: '280px',
    height: '280px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed purple',
  },

  box: {
    width: '40px',
    height: '40px',
    backgroundColor: 'deepskyblue',
  },

  cross: {
    position: 'relative',

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
    },
    '&::before': {
      top: '50%',
      height: '1px',
      backgroundColor: 'red',
    },
    '&::after': {
      left: '50%',
      width: '1px',
      backgroundColor: 'blue',
    },
  },
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
  const { styles, cx } = useStyle();
  return (
    <Flex gap={16} wrap>
      {placements.map((placement) => (
        <div key={placement} className={styles.item}>
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
            <div className={cx(styles.box, styles.cross)} />
          </Popover>
        </div>
      ))}
    </Flex>
  );
};

export default App;

```

### 贴边偏移

#### zh-CN

当 Popover 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

#### en-US

Auto adjust Popup and arrow position when Popover is close to the edge of the screen. Will be out of screen when exceed limitation.

```typescript
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

#### zh-CN

使用 `open` 属性控制浮层显示。

#### en-US

Use `open` prop to control the display of the card.

```typescript
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

#### zh-CN

以下示例显示如何创建可悬停和单击的弹出窗口。

#### en-US

The following example shows how to create a popover which can be hovered and clicked.

```typescript
import React, { useState } from 'react';
import { Button, Popover } from 'antd';

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

  const hoverContent = <div>This is hover content.</div>;
  const clickContent = <div>This is click content.</div>;
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
        <Button>Hover and click / 悬停并单击</Button>
      </Popover>
    </Popover>
  );
};

export default App;

```

### _InternalPanelDoNotUseOrYouWillBeFired

#### zh-CN

调试用组件，请勿直接使用。

#### en-US

Debug usage. Do not use in your production.

```typescript
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

#### zh-CN

线框样式。

#### en-US

Wireframe style.

```typescript
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

#### zh-CN

Component Token Debug.

#### en-US

Component Token Debug.

```typescript
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

