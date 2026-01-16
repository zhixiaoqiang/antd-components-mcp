## Tooltip 组件示例
### 基本
最简单的用法。

```tsx
import React from 'react';
import { Tooltip } from 'antd';
const App: React.FC = () => (
  <Tooltip title="prompt text">
    <span>Tooltip will show on mouse enter.</span>
  </Tooltip>
);
export default App;
```
### 平滑过渡
通过 [ConfigProvider 全局配置](#config-provider-tooltip-unique) 实现同一时间只显示一个 Tooltip 的平滑过渡效果。

```tsx
import React from 'react';
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
const SharedButton = ({ placement = 'top' }: { placement?: 'top' | 'bottom' }) => (
  <Tooltip title="Hello, Ant Design!" placement={placement}>
    <Button type="primary">Button</Button>
  </Tooltip>
);
const App: React.FC = () => {
  return (
    <ConfigProvider
      tooltip={{
        unique: true,
      }}
    >
      <Flex vertical gap="small">
        <Flex gap="small" justify="center">
          <SharedButton />
          <SharedButton />
        </Flex>
        <Flex gap="small" justify="center">
          <SharedButton placement="bottom" />
          <SharedButton placement="bottom" />
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};
export default App;
```
### 位置
位置有 12 个方向。

```tsx
import React from 'react';
import { Button, ConfigProvider, Flex, Tooltip } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 80;
const App: React.FC = () => (
  <ConfigProvider button={{ style: { width: buttonWidth, margin: 4 } }}>
    <Flex vertical justify="center" align="center" className="demo">
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button>TR</Button>
        </Tooltip>
      </Flex>
      <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
        <Flex align="center" vertical>
          <Tooltip placement="leftTop" title={text}>
            <Button>LT</Button>
          </Tooltip>
          <Tooltip placement="left" title={text}>
            <Button>Left</Button>
          </Tooltip>
          <Tooltip placement="leftBottom" title={text}>
            <Button>LB</Button>
          </Tooltip>
        </Flex>
        <Flex align="center" vertical>
          <Tooltip placement="rightTop" title={text}>
            <Button>RT</Button>
          </Tooltip>
          <Tooltip placement="right" title={text}>
            <Button>Right</Button>
          </Tooltip>
          <Tooltip placement="rightBottom" title={text}>
            <Button>RB</Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
        <Tooltip placement="bottomLeft" title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button>BR</Button>
        </Tooltip>
      </Flex>
    </Flex>
  </ConfigProvider>
);
export default App;
```
### 箭头展示
支持显示、隐藏以及将箭头保持居中定位。

```tsx
import React, { useMemo, useState } from 'react';
import { Button, ConfigProvider, Flex, Segmented, Tooltip } from 'antd';
import type { TooltipProps } from 'antd';
const text = <span>prompt text</span>;
const buttonWidth = 80;
const App: React.FC = () => {
  const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');
  const mergedArrow = useMemo<TooltipProps['arrow']>(() => {
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
        value={arrow}
        options={['Show', 'Hide', 'Center']}
        onChange={setArrow}
        style={{ marginBottom: 24 }}
      />
      <Flex vertical justify="center" align="center" className="demo">
        <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
          <Tooltip placement="topLeft" title={text} arrow={mergedArrow}>
            <Button>TL</Button>
          </Tooltip>
          <Tooltip placement="top" title={text} arrow={mergedArrow}>
            <Button>Top</Button>
          </Tooltip>
          <Tooltip placement="topRight" title={text} arrow={mergedArrow}>
            <Button>TR</Button>
          </Tooltip>
        </Flex>
        <Flex style={{ width: buttonWidth * 5 + 32 }} justify="space-between" align="center">
          <Flex align="center" vertical>
            <Tooltip placement="leftTop" title={text} arrow={mergedArrow}>
              <Button>LT</Button>
            </Tooltip>
            <Tooltip placement="left" title={text} arrow={mergedArrow}>
              <Button>Left</Button>
            </Tooltip>
            <Tooltip placement="leftBottom" title={text} arrow={mergedArrow}>
              <Button>LB</Button>
            </Tooltip>
          </Flex>
          <Flex align="center" vertical>
            <Tooltip placement="rightTop" title={text} arrow={mergedArrow}>
              <Button>RT</Button>
            </Tooltip>
            <Tooltip placement="right" title={text} arrow={mergedArrow}>
              <Button>Right</Button>
            </Tooltip>
            <Tooltip placement="rightBottom" title={text} arrow={mergedArrow}>
              <Button>RB</Button>
            </Tooltip>
          </Flex>
        </Flex>
        <Flex justify="center" align="center" style={{ whiteSpace: 'nowrap' }}>
          <Tooltip placement="bottomLeft" title={text} arrow={mergedArrow}>
            <Button>BL</Button>
          </Tooltip>
          <Tooltip placement="bottom" title={text} arrow={mergedArrow}>
            <Button>Bottom</Button>
          </Tooltip>
          <Tooltip placement="bottomRight" title={text} arrow={mergedArrow}>
            <Button>BR</Button>
          </Tooltip>
        </Flex>
      </Flex>
    </ConfigProvider>
  );
};
export default App;
```
### 贴边偏移
当 Tooltip 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

```tsx
import React from 'react';
import { Button, Tooltip } from 'antd';
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
      <Tooltip title="Thanks for using antd. Have a nice day !" open>
        <Button type="primary">Scroll The Window</Button>
      </Tooltip>
    </div>
  );
};
export default App;
```
### 自动调整位置
气泡框不可见时自动调整位置。

```tsx
import React from 'react';
import type { TooltipProps } from 'antd';
import { Button, Tooltip, Typography } from 'antd';
const Block = React.forwardRef<HTMLDivElement, Partial<TooltipProps>>((props, ref) => (
  <div
    ref={ref}
    style={{
      overflow: 'auto',
      position: 'relative',
      padding: '24px',
      border: '1px solid #e9e9e9',
    }}
  >
    <div
      style={{
        width: '200%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: 16,
      }}
    >
      <Tooltip {...props} placement="left" title="Prompt Text">
        <Button>Adjust automatically / 自动调整</Button>
      </Tooltip>
      <Tooltip {...props} placement="left" title="Prompt Text" autoAdjustOverflow={false}>
        <Button>Ignore / 不处理</Button>
      </Tooltip>
    </div>
  </div>
));
const App: React.FC = () => {
  const containerRef1 = React.useRef<HTMLDivElement>(null);
  const containerRef2 = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    containerRef1.current!.scrollLeft = containerRef1.current!.clientWidth * 0.5;
    containerRef2.current!.scrollLeft = containerRef2.current!.clientWidth * 0.5;
  }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
      <Typography.Title level={5}>With `getPopupContainer`</Typography.Title>
      <Block ref={containerRef1} getPopupContainer={(trigger) => trigger.parentElement!} />
      <Typography.Title level={5}>Without `getPopupContainer`</Typography.Title>
      <Block ref={containerRef2} />
    </div>
  );
};
export default App;
```
### 隐藏后销毁
通过 `destroyOnHidden` 控制提示关闭时是否销毁 dom 节点。

```tsx
import React from 'react';
import { Tooltip } from 'antd';
const App: React.FC = () => (
  <Tooltip destroyOnHidden title="prompt text">
    <span>Dom will destroyed when Tooltip close</span>
  </Tooltip>
);
export default App;
```
### 多彩文字提示
我们添加了多种预设色彩的文字提示样式，用作不同场景使用。

```tsx
import React from 'react';
import { Button, Divider, Space, Tooltip } from 'antd';
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">Presets</Divider>
    <Space wrap>
      {colors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
    <Divider titlePlacement="start">Custom</Divider>
    <Space wrap>
      {customColors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}
    </Space>
  </>
);
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Tooltip } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTooltip } = Tooltip;
const App: React.FC = () => (
  <>
    <InternalTooltip title="Hello, Pink Pure Panel!" color="pink" />
    <InternalTooltip title="Hello, Customize Color Pure Panel!" color="#f50" />
    <InternalTooltip title="Hello, Pure Panel!" placement="bottomLeft" style={{ width: 200 }} />
  </>
);
export default App;
```
### Debug
Debug 用例。

```tsx
import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
const zeroWidthEle = <div />;
const App: React.FC = () => (
  <Flex vertical gap={72} align="flex-start">
    <span />
    <Tooltip
      open
      title="Thanks for using antd. Have a nice day !"
      arrow={{ pointAtCenter: true }}
      placement="topLeft"
    >
      <Button>Point at center</Button>
    </Tooltip>
    <Tooltip open title={zeroWidthEle} placement="topLeft">
      <Button>Min Width</Button>
    </Tooltip>
    <Tooltip open title={zeroWidthEle} placement="top">
      <Button>Min Width</Button>
    </Tooltip>
  </Flex>
);
export default App;
```
### 禁用
通过设置 `title={null}` 或者 `title=""` 可以禁用 Tooltip。

```tsx
import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Tooltip title={disabled ? null : 'prompt text'}>
      <Button onClick={() => setDisabled(!disabled)}>{disabled ? 'Enable' : 'Disable'}</Button>
    </Tooltip>
  );
};
export default App;
```
### 禁用子元素
Disabled 子元素。

```tsx
import React from 'react';
import { Button, Checkbox, Input, InputNumber, Select, Space, Tooltip } from 'antd';
const WrapperTooltip: React.FC<React.PropsWithChildren> = (props) => (
  <Tooltip title="Thanks for using antd. Have a nice day !" {...props} />
);
const App: React.FC = () => (
  <Space>
    <WrapperTooltip>
      <Button disabled>Disabled</Button>
    </WrapperTooltip>
    <WrapperTooltip>
      <Input disabled placeholder="disabled" />
    </WrapperTooltip>
    <WrapperTooltip>
      <InputNumber disabled />
    </WrapperTooltip>
    <WrapperTooltip>
      <Checkbox disabled />
    </WrapperTooltip>
    <WrapperTooltip>
      <Select disabled />
    </WrapperTooltip>
  </Space>
);
export default App;
```
### 自定义子组件
与自定义组件一起使用.

```tsx
import React from 'react';
import { Tooltip } from 'antd';
const ComponentWithEvents = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => (
    <span ref={ref} {...props}>
      This text is inside a component with the necessary events exposed.
    </span>
  ),
);
const App: React.FC = () => (
  <Tooltip title="prompt text">
    <ComponentWithEvents />
  </Tooltip>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Tooltip 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Button, Flex, Tooltip } from 'antd';
import type { TooltipProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  container: css`
    padding: 10px;
  `,
}));
const styles: TooltipProps['styles'] = {
  container: {
    borderRadius: 12,
    boxShadow: 'inset 0 0 8px #ccc',
  },
};
const stylesFn: TooltipProps['styles'] = (info) => {
  if (!info.props.arrow) {
    return {
      container: {
        backgroundColor: 'rgba(53, 71, 125, 0.8)',
        padding: 12,
        color: '#fff',
        borderRadius: 4,
      },
    } satisfies TooltipProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  return (
    <Flex gap="middle">
      <Tooltip classNames={classNames} styles={styles} arrow={false} title="Object text">
        <Button>Object Style</Button>
      </Tooltip>
      <Tooltip classNames={classNames} styles={stylesFn} arrow={false} title="Function text">
        <Button type="primary">Function Style</Button>
      </Tooltip>
    </Flex>
  );
};
export default App;
```
