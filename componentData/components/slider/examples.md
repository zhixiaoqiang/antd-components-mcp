## Slider 组件示例
### 基本
基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。

```tsx
import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked: boolean) => {
    setDisabled(checked);
  };
  return (
    <>
      <Slider defaultValue={30} disabled={disabled} />
      <Slider range defaultValue={[20, 50]} disabled={disabled} />
      Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
    </>
  );
};
export default App;
```
### 带输入框的滑块
和 [数字输入框](/components/input-number-cn) 组件保持同步。

```tsx
import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
const IntegerStep: React.FC = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange: InputNumberProps['onChange'] = (newValue) => {
    setInputValue(newValue as number);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const DecimalStep: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange: InputNumberProps['onChange'] = (value) => {
    if (Number.isNaN(value)) {
      return;
    }
    setInputValue(value as number);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={1}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.01}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={1}
          style={{ margin: '0 16px' }}
          step={0.01}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const App: React.FC = () => (
  <Space style={{ width: '100%' }} vertical>
    <IntegerStep />
    <DecimalStep />
  </Space>
);
export default App;
```
### 带 icon 的滑块
滑块左右可以设置图标来表达业务含义。

```tsx
import React, { useState } from 'react';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
interface IconSliderProps {
  max: number;
  min: number;
}
const IconSlider: React.FC<IconSliderProps> = (props) => {
  const { max, min } = props;
  const [value, setValue] = useState(0);
  const mid = Number(((max - min) / 2).toFixed(5));
  const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
  const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
  return (
    <div className="icon-wrapper">
      <FrownOutlined className={preColorCls} />
      <Slider {...props} onChange={setValue} value={value} />
      <SmileOutlined className={nextColorCls} />
    </div>
  );
};
const App: React.FC = () => <IconSlider min={0} max={20} />;
export default App;
```
### 自定义提示
使用 `tooltip.formatter` 可以格式化 `Tooltip` 的内容，设置 `tooltip.formatter={null}`，则隐藏 `Tooltip`。

```tsx
import React from 'react';
import type { SliderSingleProps } from 'antd';
import { Slider } from 'antd';
const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value}%`;
const App: React.FC = () => (
  <>
    <Slider tooltip={{ formatter }} />
    <Slider tooltip={{ formatter: null }} />
  </>
);
export default App;
```
### 事件
当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `mouseup` 或者 `keyup` 时，会触发 `onChangeComplete` 事件，并把当前值作为参数传入。

```tsx
import React from 'react';
import { Slider } from 'antd';
const onChange = (value: number | number[]) => {
  console.log('onChange: ', value);
};
const onChangeComplete = (value: number | number[]) => {
  console.log('onChangeComplete: ', value);
};
const App: React.FC = () => (
  <>
    <Slider defaultValue={30} onChange={onChange} onChangeComplete={onChangeComplete} />
    <Slider
      range
      step={10}
      defaultValue={[20, 50]}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
    />
  </>
);
export default App;
```
### 带标签的滑块
使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。

```tsx
import React from 'react';
import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
const marks: SliderSingleProps['marks'] = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};
const App: React.FC = () => (
  <>
    <h4>included=true</h4>
    <Slider marks={marks} defaultValue={37} />
    <Slider range marks={marks} defaultValue={[26, 37]} />
    <h4>included=false</h4>
    <Slider marks={marks} included={false} defaultValue={37} />
    <h4>marks & step</h4>
    <Slider marks={marks} step={10} defaultValue={37} />
    <h4>step=null</h4>
    <Slider marks={marks} step={null} defaultValue={37} />
  </>
);
export default App;
```
### 垂直
垂直方向的 Slider。

```tsx
import React from 'react';
import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
const style: React.CSSProperties = {
  display: 'inline-block',
  height: 300,
  marginInlineStart: 70,
};
const marks: SliderSingleProps['marks'] = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: { color: '#f50' },
    label: <strong>100°C</strong>,
  },
};
const App: React.FC = () => (
  <>
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </>
);
export default App;
```
### 控制 ToolTip 的显示
当 `tooltip.open` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

```tsx
import React from 'react';
import { Slider } from 'antd';
const App: React.FC = () => <Slider defaultValue={30} tooltip={{ open: true }} />;
export default App;
```
### 反向
设置 `reverse` 可以将滑动条置反。

```tsx
import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
const App: React.FC = () => {
  const [reverse, setReverse] = useState(true);
  return (
    <>
      <Slider defaultValue={30} reverse={reverse} />
      <Slider range defaultValue={[20, 50]} reverse={reverse} />
      Reversed: <Switch size="small" checked={reverse} onChange={setReverse} />
    </>
  );
};
export default App;
```
### 范围可拖拽
可以设置 `range.draggableTrack`，使得范围刻度整体可拖拽。

```tsx
import React from 'react';
import { Slider } from 'antd';
const App: React.FC = () => <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />;
export default App;
```
### 多点组合
范围多个点组合。

```tsx
import React from 'react';
import { Slider } from 'antd';
function getGradientColor(percentage: number) {
  const startColor = [135, 208, 104];
  const endColor = [255, 204, 199];
  const midColor = startColor.map((start, i) => {
    const end = endColor[i];
    const delta = end - start;
    return (start + delta * percentage).toFixed(0);
  });
  return `rgb(${midColor.join(',')})`;
}
const App: React.FC = () => {
  const [value, setValue] = React.useState([0, 10, 20]);
  const start = value[0] / 100;
  const end = value[value.length - 1] / 100;
  return (
    <Slider
      range
      defaultValue={value}
      onChange={setValue}
      styles={{
        track: {
          background: 'transparent',
        },
        tracks: {
          background: `linear-gradient(to right, ${getGradientColor(start)} 0%, ${getGradientColor(
            end,
          )} 100%)`,
        },
      }}
    />
  );
};
export default App;
```
### 动态增减节点
点击添加节点，拖出或者按键删除节点。

```tsx
import React from 'react';
import { Slider } from 'antd';
const App: React.FC = () => {
  const [value, setValue] = React.useState([20, 80]);
  return (
    <Slider
      range={{ editable: true, minCount: 1, maxCount: 5 }}
      value={value}
      onChange={setValue}
    />
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Sliders 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Slider } from 'antd';
import type { SliderSingleProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    width: 300px;
  `,
}));
const classNamesFn = createStaticStyles(({ css, cssVar }) => ({
  root: css`
    width: 100px;
    &:hover .ant-slider-handle:after {
      box-shadow: 0 0 0 ${cssVar.lineWidthBold} #722ed1;
    }
  `,
  handle: css`
    &.ant-slider-handle:hover::after,
    &.ant-slider-handle:active::after,
    &.ant-slider-handle:focus::after,
    &.ant-slider-handle::after {
      box-shadow: 0 0 0 ${cssVar.lineWidthBold} #722ed1;
    }
  `,
}));
const stylesObject: SliderSingleProps['styles'] = {
  track: { backgroundImage: 'linear-gradient(180deg, #91caff, #1677ff)' },
  handle: { borderColor: '#1677ff', boxShadow: '0 2px 8px #1677ff' },
};
const stylesFn: SliderSingleProps['styles'] = (info) => {
  if (info.props.orientation === 'vertical') {
    return {
      root: { height: 300 },
      track: { backgroundImage: 'linear-gradient(180deg, #722cc0, #722ed1)' },
      handle: { borderColor: '#722ed1', boxShadow: '0 2px 8px #722ed1' },
    } satisfies SliderSingleProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const sharedProps: SliderSingleProps = {
    defaultValue: 30,
  };
  return (
    <Flex vertical gap="middle">
      <Slider {...sharedProps} classNames={classNames} styles={stylesObject} />
      <Slider
        {...sharedProps}
        classNames={classNamesFn}
        orientation="vertical"
        reverse
        styles={stylesFn}
      />
    </Flex>
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, Slider } from 'antd';
const style: React.CSSProperties = {
  display: 'inline-block',
  height: 300,
  marginInlineStart: 70,
};
const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: { color: '#f50' },
    label: <strong>100°C</strong>,
  },
};
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Slider: {
          controlSize: 20,
          railSize: 4,
          handleSize: 22,
          handleSizeHover: 18,
          dotSize: 8,
          handleLineWidth: 6,
          handleLineWidthHover: 2,
          railBg: '#9f3434',
          railHoverBg: '#8d2424',
          trackBg: '#b0b0ef',
          trackHoverBg: '#c77195',
          handleColor: '#e6f6a2',
          handleActiveColor: '#d22bc4',
          dotBorderColor: '#303030',
          dotActiveBorderColor: '#918542',
          trackBgDisabled: '#1a1b80',
        },
      },
    }}
  >
    <Slider defaultValue={30} disabled />
    <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
    <div style={style}>
      <Slider vertical defaultValue={30} />
    </div>
    <div style={style}>
      <Slider vertical range step={10} defaultValue={[20, 50]} />
    </div>
    <div style={style}>
      <Slider vertical range marks={marks} defaultValue={[26, 37]} />
    </div>
  </ConfigProvider>
);
export default App;
```
