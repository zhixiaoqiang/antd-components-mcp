## Slider 组件示例

### 基本

#### zh-CN

基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。

#### en-US

Basic slider. When `range` is `true`, display as dual thumb mode. When `disable` is `true`, the slider will not be interactable.

```typescript
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

#### zh-CN

和 [数字输入框](/components/input-number-cn) 组件保持同步。

#### en-US

Synchronize with [InputNumber](/components/input-number/) component.

```typescript
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
  <Space style={{ width: '100%' }} direction="vertical">
    <IntegerStep />
    <DecimalStep />
  </Space>
);

export default App;

```

### 带 icon 的滑块

#### zh-CN

滑块左右可以设置图标来表达业务含义。

#### en-US

You can add an icon beside the slider to make it meaningful.

```css
.icon-wrapper {
  position: relative;
  padding: 0 30px;
}

.icon-wrapper .anticon {
  position: absolute;
  top: -2px;
  width: 16px;
  height: 16px;
  color: rgba(0, 0, 0, 0.25);
  font-size: 16px;
  line-height: 1;
}

.icon-wrapper .icon-wrapper-active {
  color: rgba(0, 0, 0, 0.45);
}

.icon-wrapper .anticon:first-child {
  inset-inline-start: 0;
}

.icon-wrapper .anticon:last-child {
  inset-inline-end: 0;
}
```

```typescript
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

#### zh-CN

使用 `tooltip.formatter` 可以格式化 `Tooltip` 的内容，设置 `tooltip.formatter={null}`，则隐藏 `Tooltip`。

#### en-US

Use `tooltip.formatter` to format content of `Tooltip`. If `tooltip.formatter` is null, hide it.

```typescript
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

#### zh-CN

当 Slider 的值发生改变时，会触发 `onChange` 事件，并把改变后的值作为参数传入。在 `mouseup` 或者 `keyup` 时，会触发 `onChangeComplete` 事件，并把当前值作为参数传入。

#### en-US

The `onChange` callback function will fire when the user changes the slider's value. The `onChangeComplete` callback function will fire when `mouseup` or `keyup` fired.

```typescript
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

#### zh-CN

使用 `marks` 属性标注分段式滑块，使用 `value` / `defaultValue` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。

#### en-US

Using `marks` property to mark a graduated slider, use `value` or `defaultValue` to specify the position of thumb. When `included` is false, means that different thumbs are coordinative. when `step` is null, users can only slide the thumbs onto marks.

<style>
##slider-demo-mark h4 {
  margin: 0 0 16px;
}
##slider-demo-mark .ant-slider-with-marks {
  margin-bottom: 44px;
}
</style>

```typescript
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

#### zh-CN

垂直方向的 Slider。

#### en-US

The vertical Slider.

```typescript
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

#### zh-CN

当 `tooltip.open` 为 `true` 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

#### en-US

When `tooltip.open` is `true`, ToolTip will always show, if set to `false` the ToolTip will not show, even if dragging or hovering.

```typescript
import React from 'react';
import { Slider } from 'antd';

const App: React.FC = () => <Slider defaultValue={30} tooltip={{ open: true }} />;

export default App;

```

### 反向

#### zh-CN

设置 `reverse` 可以将滑动条置反。

#### en-US

Using `reverse` to render slider reversely.

```typescript
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

#### zh-CN

可以设置 `range.draggableTrack`，使得范围刻度整体可拖拽。

#### en-US

Make range track draggable by setting `range.draggableTrack`.

```typescript
import React from 'react';
import { Slider } from 'antd';

const App: React.FC = () => <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />;

export default App;

```

### 多点组合

#### zh-CN

范围多个点组合。

#### en-US

Multiple handles combination.

```typescript
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

#### zh-CN

点击添加节点，拖出或者按键删除节点。

#### en-US

Click to add a node, drag out or press the key to delete the node.

```typescript
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

### 组件 Token

#### zh-CN

Component Token Debug.

#### en-US

Component Token Debug.

```typescript
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

