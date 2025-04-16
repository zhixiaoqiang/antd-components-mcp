## TimePicker 组件示例
### 基本
点击 TimePicker，然后可以在浮层中选择或者输入某一时间。

```tsx
import React from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};
const App: React.FC = () => (
  <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
);
export default App;
```
### 受控组件
value 和 onChange 需要配合使用。

```tsx
import React, { useState } from 'react';
import { TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
const App: React.FC = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const onChange = (time: Dayjs) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};
export default App;
```
### 三种大小
三种大小的输入框，大的用在表单中，中的为默认。

```tsx
import React from 'react';
import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
const App: React.FC = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
  </Space>
);
export default App;
```
### 选择确认
TimePicker 默认会根据 `picker` 的交互行为，自动选择是否需要确认按钮。你也可以通过 `needConfirm` 属性来手动设置是否需要确认按钮。当有 `needConfirm` 时，用户始终需要点击确认按钮才能完成选择。反之，则会在选择或者失去焦点时提交。

```tsx
import React from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};
const App: React.FC = () => <TimePicker onChange={onChange} needConfirm />;
export default App;
```
### 禁用
禁用时间选择。

```tsx
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const App: React.FC = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
```
### 选择时分
TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。

```tsx
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'HH:mm';
const App: React.FC = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default App;
```
### 步长选项
可以使用 `hourStep` `minuteStep` `secondStep` 按步长展示可选的时分秒。

```tsx
import React from 'react';
import { TimePicker } from 'antd';
const App: React.FC = () => <TimePicker minuteStep={15} secondStep={10} hourStep={1} />;
export default App;
```
### 附加内容
在 TimePicker 选择框底部显示自定义的内容。

```tsx
import React, { useState } from 'react';
import { Button, TimePicker } from 'antd';
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default App;
```
### 12 小时制
12 小时制的时间选择器，默认的 format 为 `h:mm:ss a`。

```tsx
import React from 'react';
import type { TimePickerProps } from 'antd';
import { Space, TimePicker } from 'antd';
const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};
const App: React.FC = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </Space>
);
export default App;
```
### 滚动即改变
通过 `changeOnScroll` 与 `needConfirm` 使其滚动时改变数值。

```tsx
import React from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};
const App: React.FC = () => <TimePicker onChange={onChange} changeOnScroll needConfirm={false} />;
export default App;
```
### 色付きポップアップ
将自定义 class 传给 `TimePicker` 弹框。

```tsx
import React from 'react';
import type { TimePickerProps } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};
const App: React.FC = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
export default App;
```
### 范围选择器
通过 `TimePicker.RangePicker` 使用时间范围选择器。

```tsx
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'HH:mm:ss';
const App: React.FC = () => {
  const startTime = dayjs('12:08:23', 'HH:mm:ss');
  const endTime = dayjs('12:08:23', 'HH:mm:ss');
  return <TimePicker.RangePicker defaultValue={[startTime, endTime]} format={format} />;
};
export default App;
```
### 形态变体
TimePicker 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Flex, TimePicker } from 'antd';
const { RangePicker } = TimePicker;
const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Flex gap={8}>
      <TimePicker placeholder="Outlined" />
      <RangePicker placeholder={['Outlined Start', 'Outlined End']} />
    </Flex>
    <Flex gap={8}>
      <TimePicker variant="filled" placeholder="Filled" />
      <RangePicker variant="filled" placeholder={['Filled Start', 'Filled End']} />
    </Flex>
    <Flex gap={8}>
      <TimePicker variant="borderless" placeholder="Borderless" />
      <RangePicker variant="borderless" placeholder={['Borderless Start', 'Borderless End']} />
    </Flex>
    <Flex gap={8}>
      <TimePicker variant="underlined" placeholder="Underlined" />
      <RangePicker variant="underlined" placeholder={['Underlined Start', 'Underlined End']} />
    </Flex>
  </Flex>
);
export default App;
```
### 自定义状态
使用 `status` 为 TimePicker 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { Space, TimePicker } from 'antd';
const App: React.FC = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);
export default App;
```
### 前后缀
自定义前缀 `prefix` 和后缀图标 `suffixIcon`。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Space, TimePicker } from 'antd';
import type { TimePickerProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange: TimePickerProps['onChange'] = (time, timeString) => {
  console.log(time, timeString);
};
const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <TimePicker
      suffixIcon={<SmileOutlined />}
      onChange={onChange}
      defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    />
    <TimePicker prefix={<SmileOutlined />} />
    <TimePicker.RangePicker prefix={<SmileOutlined />} />
  </Space>
);
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { TimePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;
const App: React.FC = () => <InternalTimePicker />;
export default App;
```
