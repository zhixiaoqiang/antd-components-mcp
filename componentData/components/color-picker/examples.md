## ColorPicker 组件示例
### 基本使用
最简单的使用方法。

```tsx
import React from 'react';
import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker defaultValue="#1677ff" />;
export default Demo;
```
### 触发器尺寸大小
触发器有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把触发器设为大、小尺寸。若不设置 `size`，则尺寸默认为中。

```tsx
import React from 'react';
import { ColorPicker, Space } from 'antd';
const Demo = () => (
  <Space>
    <Space direction="vertical">
      <ColorPicker defaultValue="#1677ff" size="small" />
      <ColorPicker defaultValue="#1677ff" />
      <ColorPicker defaultValue="#1677ff" size="large" />
    </Space>
    <Space direction="vertical">
      <ColorPicker defaultValue="#1677ff" size="small" showText />
      <ColorPicker defaultValue="#1677ff" showText />
      <ColorPicker defaultValue="#1677ff" size="large" showText />
    </Space>
  </Space>
);
export default Demo;
```
### 受控模式
通过 `value` 和 `onChange` 设置组件为受控模式，如果通过 `onChangeComplete` 受控则会锁定展示颜色。

```tsx
import React, { useState } from 'react';
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
type Color = GetProp<ColorPickerProps, 'value'>;
const Demo: React.FC = () => {
  const [color, setColor] = useState<Color>('#1677ff');
  return (
    <Space>
      <ColorPicker value={color} onChange={setColor} />
      <ColorPicker value={color} onChangeComplete={setColor} />
    </Space>
  );
};
export default Demo;
```
### 渐变色
通过 `mode` 设置颜色为单一颜色还是渐变色。

```tsx
import React from 'react';
import { ColorPicker, Space } from 'antd';
const DEFAULT_COLOR = [
  {
    color: 'rgb(16, 142, 233)',
    percent: 0,
  },
  {
    color: 'rgb(135, 208, 104)',
    percent: 100,
  },
];
const Demo = () => (
  <Space direction="vertical">
    <ColorPicker
      defaultValue={DEFAULT_COLOR}
      allowClear
      showText
      mode={['single', 'gradient']}
      onChangeComplete={(color) => {
        console.log(color.toCssString());
      }}
    />
    <ColorPicker
      defaultValue={DEFAULT_COLOR}
      allowClear
      showText
      mode="gradient"
      onChangeComplete={(color) => {
        console.log(color.toCssString());
      }}
    />
  </Space>
);
export default Demo;
```
### 渲染触发器文本
渲染触发器的默认文本, `showText` 为 `true` 时生效。自定义文本时，可以使用 `showText` 为函数的方式，返回自定义的文本。

```tsx
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { ColorPicker, Space } from 'antd';
const Demo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Space direction="vertical">
      <ColorPicker defaultValue="#1677ff" showText allowClear />
      <ColorPicker
        defaultValue="#1677ff"
        showText={(color) => <span>Custom Text ({color.toHexString()})</span>}
      />
      <ColorPicker
        defaultValue="#1677ff"
        open={open}
        onOpenChange={setOpen}
        showText={() => (
          <DownOutlined
            rotate={open ? 180 : 0}
            style={{
              color: 'rgba(0, 0, 0, 0.25)',
            }}
          />
        )}
      />
    </Space>
  );
};
export default Demo;
```
### 禁用
设置为禁用状态。

```tsx
import React from 'react';
import { ColorPicker } from 'antd';
export default () => <ColorPicker defaultValue="#1677ff" showText disabled />;
```
### 禁用透明度
禁用颜色透明度。

```tsx
import React from 'react';
import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker defaultValue="#1677ff" disabledAlpha />;
export default Demo;
```
### 清除颜色
清除已选择的颜色。

```tsx
import React from 'react';
import { ColorPicker } from 'antd';
export default () => {
  const [color, setColor] = React.useState<string>('#1677ff');
  return (
    <ColorPicker
      value={color}
      allowClear
      onChange={(c) => {
        setColor(c.toHexString());
      }}
    />
  );
};
```
### 自定义触发器
自定义颜色面板的触发器。

```tsx
import React, { useMemo, useState } from 'react';
import { Button, ColorPicker } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
const Demo: React.FC = () => {
  const [color, setColor] = useState<Color>('#1677ff');
  const bgColor = useMemo<string>(
    () => (typeof color === 'string' ? color : color!.toHexString()),
    [color],
  );
  const btnStyle: React.CSSProperties = {
    backgroundColor: bgColor,
  };
  return (
    <ColorPicker value={color} onChange={setColor}>
      <Button type="primary" style={btnStyle}>
        open
      </Button>
    </ColorPicker>
  );
};
export default Demo;
```
### 自定义触发事件
自定义颜色面板的触发事件，提供 `click` 和 `hover` 两个选项。

```tsx
import React from 'react';
import { ColorPicker } from 'antd';
const Demo = () => <ColorPicker defaultValue="#1677ff" trigger="hover" />;
export default Demo;
```
### 颜色编码
编码格式，支持`HEX`、`HSB`、`RGB`。

```tsx
import React, { useState } from 'react';
import { ColorPicker, Space } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
type Color = Extract<GetProp<ColorPickerProps, 'value'>, string | { cleared: any }>;
type Format = GetProp<ColorPickerProps, 'format'>;
const HexCase: React.FC = () => {
  const [colorHex, setColorHex] = useState<Color>('#1677ff');
  const [formatHex, setFormatHex] = useState<Format | undefined>('hex');
  const hexString = React.useMemo<string>(
    () => (typeof colorHex === 'string' ? colorHex : colorHex?.toHexString()),
    [colorHex],
  );
  return (
    <Space>
      <ColorPicker
        format={formatHex}
        value={colorHex}
        onChange={setColorHex}
        onFormatChange={setFormatHex}
      />
      <span>HEX: {hexString}</span>
    </Space>
  );
};
const HsbCase: React.FC = () => {
  const [colorHsb, setColorHsb] = useState<Color>('hsb(215, 91%, 100%)');
  const [formatHsb, setFormatHsb] = useState<ColorPickerProps['format']>('hsb');
  const hsbString = React.useMemo(
    () => (typeof colorHsb === 'string' ? colorHsb : colorHsb?.toHsbString()),
    [colorHsb],
  );
  return (
    <Space>
      <ColorPicker
        format={formatHsb}
        value={colorHsb}
        onChange={setColorHsb}
        onFormatChange={setFormatHsb}
      />
      <span>HSB: {hsbString}</span>
    </Space>
  );
};
const RgbCase: React.FC = () => {
  const [colorRgb, setColorRgb] = useState<Color>('rgb(22, 119, 255)');
  const [formatRgb, setFormatRgb] = useState<ColorPickerProps['format']>('rgb');
  const rgbString = React.useMemo(
    () => (typeof colorRgb === 'string' ? colorRgb : colorRgb?.toRgbString()),
    [colorRgb],
  );
  return (
    <Space>
      <ColorPicker
        format={formatRgb}
        value={colorRgb}
        onChange={setColorRgb}
        onFormatChange={setFormatRgb}
      />
      <span>RGB: {rgbString}</span>
    </Space>
  );
};
const Demo: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <HexCase />
    <HsbCase />
    <RgbCase />
  </Space>
);
export default Demo;
```
### 预设颜色
设置颜色选择器的预设颜色。

```tsx
import React from 'react';
import { generate, green, presetPalettes, red } from '@ant-design/colors';
import { ColorPicker, theme } from 'antd';
import type { ColorPickerProps } from 'antd';
type Presets = Required<ColorPickerProps>['presets'][number];
function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map<Presets>(([label, colors]) => ({ label, colors, key: label }));
}
const Demo: React.FC = () => {
  const { token } = theme.useToken();
  const presets = genPresets({ primary: generate(token.colorPrimary), red, green });
  return <ColorPicker presets={presets} defaultValue="#1677ff" />;
};
export default Demo;
```
### 自定义面板
通过 `panelRender` 自由控制面板的渲染。

```tsx
import React from 'react';
import { cyan, generate, green, presetPalettes, red } from '@ant-design/colors';
import { Col, ColorPicker, Divider, Row, Space, theme } from 'antd';
import type { ColorPickerProps } from 'antd';
type Presets = Required<ColorPickerProps>['presets'][number];
function genPresets(presets = presetPalettes) {
  return Object.entries(presets).map<Presets>(([label, colors]) => ({ label, colors, key: label }));
}
const HorizontalLayoutDemo = () => {
  const { token } = theme.useToken();
  const presets = genPresets({
    primary: generate(token.colorPrimary),
    red,
    green,
    cyan,
  });
  const customPanelRender: ColorPickerProps['panelRender'] = (
    _,
    { components: { Picker, Presets } },
  ) => (
    <Row justify="space-between" wrap={false}>
      <Col span={12}>
        <Presets />
      </Col>
      <Divider type="vertical" style={{ height: 'auto' }} />
      <Col flex="auto">
        <Picker />
      </Col>
    </Row>
  );
  return (
    <ColorPicker
      defaultValue={token.colorPrimary}
      styles={{ popupOverlayInner: { width: 480 } }}
      presets={presets}
      panelRender={customPanelRender}
    />
  );
};
const BasicDemo = () => (
  <ColorPicker
    defaultValue="#1677ff"
    panelRender={(panel) => (
      <div className="custom-panel">
        <div
          style={{
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.88)',
            lineHeight: '20px',
            marginBottom: 8,
          }}
        >
          Color Picker
        </div>
        {panel}
      </div>
    )}
  />
);
export default () => (
  <Space direction="vertical">
    <Space>
      <span>Add title:</span>
      <BasicDemo />
    </Space>
    <Space>
      <span>Horizontal layout:</span>
      <HorizontalLayoutDemo />
    </Space>
  </Space>
);
```
### Pure Render
Pure Panel

```tsx
import React, { useState } from 'react';
import { ColorPicker } from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: PureRenderColorPicker } = ColorPicker;
type Color = GetProp<ColorPickerProps, 'value'>;
const Demo: React.FC = () => {
  const [color, setColor] = useState<Color>('#1677ff');
  return (
    <div style={{ paddingInlineStart: 100 }}>
      <PureRenderColorPicker value={color} onChange={setColor} />
    </div>
  );
};
export default Demo;
```
