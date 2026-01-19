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
          styles={{ content: { color: '#3f8600' } }}
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
          styles={{ content: { color: '#cf1322' } }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default App;
```
### 计时器
计时器组件。

```tsx
import React from 'react';
import type { StatisticTimerProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
const { Timer } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const before = Date.now() - 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
const tenSecondsLater = Date.now() + 10 * 1000;
const onFinish: StatisticTimerProps['onFinish'] = () => {
  console.log('finished!');
};
const onChange: StatisticTimerProps['onChange'] = (val) => {
  if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log('changed!');
  }
};
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Timer type="countdown" value={deadline} onFinish={onFinish} />
    </Col>
    <Col span={12}>
      <Timer type="countdown" title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col span={12}>
      <Timer type="countdown" title="Countdown" value={tenSecondsLater} onChange={onChange} />
    </Col>
    <Col span={12}>
      <Timer type="countup" title="Countup" value={before} onChange={onChange} />
    </Col>
    <Col span={24} style={{ marginTop: 32 }}>
      <Timer
        type="countdown"
        title="Day Level (Countdown)"
        value={deadline}
        format="D 天 H 时 m 分 s 秒"
      />
    </Col>
    <Col span={24} style={{ marginTop: 32 }}>
      <Timer
        type="countup"
        title="Day Level (Countup)"
        value={before}
        format="D 天 H 时 m 分 s 秒"
      />
    </Col>
  </Row>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Statistic 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Flex, Statistic } from 'antd';
import type { StatisticProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    border: 2px dashed #ccc;
    padding: 16px;
    border-radius: 8px;
  `,
}));
const styleFn: StatisticProps['styles'] = ({ props }) => {
  const numValue = Number(props.value ?? 0);
  const isNegative = Number.isFinite(numValue) && numValue < 0;
  if (isNegative) {
    return {
      title: {
        color: '#ff4d4f',
      },
      content: {
        color: '#ff7875',
      },
    } satisfies StatisticProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const statisticSharedProps: StatisticProps = {
    classNames: { root: classNames.root },
    prefix: <ArrowUpOutlined />,
  };
  return (
    <Flex vertical gap="middle">
      <Statistic
        {...statisticSharedProps}
        title="Monthly Active Users"
        value={93241}
        styles={{ title: { color: '#1890ff', fontWeight: 600 }, content: { fontSize: '24px' } }}
        suffix="users"
      />
      <Statistic
        {...statisticSharedProps}
        title="Yearly Loss"
        value={-18.7}
        precision={1}
        styles={styleFn}
        suffix="%"
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
