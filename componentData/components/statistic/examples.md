## Statistic 组件示例
### 基本
简单的展示。

```tsx
import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button style={{ marginTop: 16 }} type="primary">
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);
export default App;
```
### 单位
通过前缀和后缀添加单位。

```tsx
import React from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
);
export default App;
```
### 动画效果
给数值添加动画进入效果，需要配合 [react-countup](https://www.npmjs.com/package/react-countup)。

```tsx
import React from 'react';
import type { StatisticProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';
const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
    </Col>
  </Row>
);
export default App;
```
### 在卡片中使用
在卡片中展示统计数值。

```tsx
import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card variant="borderless">
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card variant="borderless">
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{ color: '#cf1322' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default App;
```
### 倒计时
倒计时组件。

```tsx
import React from 'react';
import type { CountdownProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const onFinish: CountdownProps['onFinish'] = () => {
  console.log('finished!');
};
const onChange: CountdownProps['onChange'] = (val) => {
  if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log('changed!');
  }
};
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
    </Col>
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col span={24} style={{ marginTop: 32 }}>
      <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
    </Col>
    <Col span={12}>
      <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
    </Col>
  </Row>
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { Button, Col, ConfigProvider, Row, Statistic } from 'antd';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Statistic: {
          titleFontSize: 20,
          contentFontSize: 20,
        },
      },
    }}
  >
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        <Button style={{ marginTop: 16 }} type="primary">
          Recharge
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>
    </Row>
  </ConfigProvider>
);
export default App;
```
