## Progress 组件示例
### 进度条
标准的进度条。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </Flex>
);
export default App;
```
### 进度圈
圈形的进度。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Flex>
);
export default App;
```
### 小型进度条
适合放在较狭窄的区域内。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="small" style={{ width: 180 }}>
    <Progress percent={30} size="small" />
    <Progress percent={50} size="small" status="active" />
    <Progress percent={70} size="small" status="exception" />
    <Progress percent={100} size="small" />
  </Flex>
);
export default App;
```
### 响应式进度圈
响应式的圈形进度，当 `width` 小于等于 20 的时候，进度信息将不会显示在进度圈里面，而是以 Tooltip 的形式显示。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex align="center" gap="small">
    <Progress
      type="circle"
      trailColor="#e6f4ff"
      percent={60}
      strokeWidth={20}
      size={14}
      format={(number) => `进行中，已完成${number}%`}
    />
    <span>代码发布</span>
  </Flex>
);
export default App;
```
### 小型进度圈
小一号的圈形进度。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex wrap gap="small">
    <Progress type="circle" percent={30} size={80} />
    <Progress type="circle" percent={70} size={80} status="exception" />
    <Progress type="circle" percent={100} size={80} />
  </Flex>
);
export default App;
```
### 动态展示
会动的进度条才是好进度条。

```tsx
import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Progress, Space } from 'antd';
const App: React.FC = () => {
  const [percent, setPercent] = useState<number>(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  return (
    <Flex vertical gap="small">
      <Flex vertical gap="small">
        <Progress percent={percent} type="line" />
        <Progress percent={percent} type="circle" />
      </Flex>
      <Space.Compact>
        <Button onClick={decline} icon={<MinusOutlined />} />
        <Button onClick={increase} icon={<PlusOutlined />} />
      </Space.Compact>
    </Flex>
  );
};
export default App;
```
### 自定义文字格式
`format` 属性指定格式。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Progress type="circle" percent={75} format={(percent) => `${percent} Days`} />
    <Progress type="circle" percent={100} format={() => 'Done'} />
  </Flex>
);
export default App;
```
### 仪表盘
通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置 `gapDegree` 为你想要的值。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Progress type="dashboard" percent={75} />
    <Progress type="dashboard" percent={75} gapDegree={30} />
  </Flex>
);
export default App;
```
### 分段进度条
分段展示进度，可以用于细化进度语义。

```tsx
import React from 'react';
import { Flex, Progress, Tooltip } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Tooltip title="3 done / 3 in progress / 4 to do">
      <Progress percent={60} success={{ percent: 30 }} />
    </Tooltip>
    <Flex gap="small" wrap>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} type="circle" />
      </Tooltip>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} success={{ percent: 30 }} type="dashboard" />
      </Tooltip>
    </Flex>
  </Flex>
);
export default App;
```
### 边缘形状
通过设定 `strokeLinecap="butt"` 可以将进度条边缘的形状从闭合的圆形的圆弧调整为断口，详见 [stroke-linecap](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap)。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="small">
    <Progress strokeLinecap="butt" percent={75} />
    <Flex wrap gap="small">
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress strokeLinecap="butt" type="dashboard" percent={75} />
    </Flex>
  </Flex>
);
export default App;
```
### 自定义进度条渐变色
渐变色封装，`circle` 与 `dashboard` 设置渐变时 `strokeLinecap` 会被忽略。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
import type { ProgressProps } from 'antd';
const twoColors: ProgressProps['strokeColor'] = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors: ProgressProps['strokeColor'] = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ffccc7',
};
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Progress percent={99.9} strokeColor={twoColors} />
    <Progress percent={50} status="active" strokeColor={{ from: '#108ee9', to: '#87d068' }} />
    <Flex gap="small" wrap>
      <Progress type="circle" percent={90} strokeColor={twoColors} />
      <Progress type="circle" percent={100} strokeColor={twoColors} />
      <Progress type="circle" percent={93} strokeColor={conicColors} />
    </Flex>
    <Flex gap="small" wrap>
      <Progress type="dashboard" percent={90} strokeColor={twoColors} />
      <Progress type="dashboard" percent={100} strokeColor={twoColors} />
      <Progress type="dashboard" percent={93} strokeColor={conicColors} />
    </Flex>
  </Flex>
);
export default App;
```
### 步骤进度条
带步骤的进度条。

```tsx
import React from 'react';
import { green, red } from '@ant-design/colors';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Progress percent={50} steps={3} />
    <Progress percent={30} steps={5} />
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
  </Flex>
);
export default App;
```
### 步骤进度圈
步骤进度圈，支持颜色分段展示，默认间隔为 2px。

```tsx
import React from 'react';
import { Flex, Progress, Slider, Typography } from 'antd';
const App: React.FC = () => {
  const [stepsCount, setStepsCount] = React.useState<number>(5);
  const [stepsGap, setStepsGap] = React.useState<number>(7);
  return (
    <>
      <Typography.Title level={5}>Custom count:</Typography.Title>
      <Slider min={2} max={10} value={stepsCount} onChange={setStepsCount} />
      <Typography.Title level={5}>Custom gap:</Typography.Title>
      <Slider step={4} min={0} max={40} value={stepsGap} onChange={setStepsGap} />
      <Flex wrap gap="middle" style={{ marginTop: 16 }}>
        <Progress
          type="dashboard"
          steps={8}
          percent={50}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
        />
        <Progress
          type="circle"
          percent={100}
          steps={{ count: stepsCount, gap: stepsGap }}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
        />
      </Flex>
    </>
  );
};
export default App;
```
### 尺寸
进度条尺寸。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Flex vertical gap="small" style={{ width: 300 }}>
      <Progress percent={50} />
      <Progress percent={50} size="small" />
      <Progress percent={50} size={[300, 20]} />
    </Flex>
    <Flex align="center" wrap gap={30}>
      <Progress type="circle" percent={50} />
      <Progress type="circle" percent={50} size="small" />
      <Progress type="circle" percent={50} size={20} />
    </Flex>
    <Flex align="center" wrap gap={30}>
      <Progress type="dashboard" percent={50} />
      <Progress type="dashboard" percent={50} size="small" />
      <Progress type="dashboard" percent={50} size={20} />
    </Flex>
    <Flex align="center" wrap gap={30}>
      <Progress steps={3} percent={50} />
      <Progress steps={3} percent={50} size="small" />
      <Progress steps={3} percent={50} size={20} />
      <Progress steps={3} percent={50} size={[20, 30]} />
    </Flex>
  </Flex>
);
export default App;
```
### 改变进度数值位置
改变进度数值位置，可使用 `percentPosition` 调整，使进度条数值在进度条内部、外部或底部。

```tsx
import React from 'react';
import { Flex, Progress } from 'antd';
const App: React.FC = () => (
  <Flex gap="small" vertical>
    <Progress
      percent={0}
      percentPosition={{ align: 'center', type: 'inner' }}
      size={[200, 20]}
      strokeColor="#E6F4FF"
    />
    <Progress percent={10} percentPosition={{ align: 'center', type: 'inner' }} size={[300, 20]} />
    <Progress
      percent={50}
      percentPosition={{ align: 'start', type: 'inner' }}
      size={[300, 20]}
      strokeColor="#B7EB8F"
    />
    <Progress
      percent={60}
      percentPosition={{ align: 'end', type: 'inner' }}
      size={[300, 20]}
      strokeColor="#001342"
    />
    <Progress percent={100} percentPosition={{ align: 'center', type: 'inner' }} size={[400, 20]} />
    <Progress percent={60} percentPosition={{ align: 'start', type: 'outer' }} />
    <Progress percent={100} percentPosition={{ align: 'start', type: 'outer' }} />
    <Progress percent={60} percentPosition={{ align: 'center', type: 'outer' }} size="small" />
    <Progress percent={100} percentPosition={{ align: 'center', type: 'outer' }} />
  </Flex>
);
export default App;
```
