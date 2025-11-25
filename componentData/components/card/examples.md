## Card 组件示例
### 典型卡片
包含标题、内容、操作区域。

```tsx
import React from 'react';
import { Card, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical size={16}>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);
export default App;
```
### 无边框
在灰色背景上使用无边框的卡片。

```tsx
import React from 'react';
import { Card } from 'antd';
const App: React.FC = () => (
  <Card title="Card title" variant="borderless" style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default App;
```
### 简洁卡片
只包含内容区域。

```tsx
import React from 'react';
import { Card } from 'antd';
const App: React.FC = () => (
  <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default App;
```
### 更灵活的内容展示
可以利用 `Card.Meta` 支持更灵活的内容。

```tsx
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default App;
```
### 栅格卡片
在系统概览页面常常和栅格进行配合。

```tsx
import React from 'react';
import { Card, Col, Row } from 'antd';
const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
    </Col>
  </Row>
);
export default App;
```
### 预加载的卡片
数据读入前会有文本块样式。

```tsx
import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Switch } from 'antd';
const actions: React.ReactNode[] = [
  <EditOutlined key="edit" />,
  <SettingOutlined key="setting" />,
  <EllipsisOutlined key="ellipsis" />,
];
const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <Flex gap="middle" align="start" vertical>
      <Switch checked={!loading} onChange={(checked) => setLoading(!checked)} />
      <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
      <Card loading={loading} actions={actions} style={{ minWidth: 300 }}>
        <Card.Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" />}
          title="Card title"
          description={
            <>
              <p>This is the description</p>
              <p>This is the description</p>
            </>
          }
        />
      </Card>
    </Flex>
  );
};
export default App;
```
### 网格型内嵌卡片
一种常见的卡片内容区隔模式。

```tsx
import React from 'react';
import { Card } from 'antd';
const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};
const App: React.FC = () => (
  <Card title="Card Title">
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>
);
export default App;
```
### 内部卡片
可以放在普通卡片内部，展示多层级结构的信息。

```tsx
import React from 'react';
import { Card } from 'antd';
const App: React.FC = () => (
  <Card title="Card title">
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
);
export default App;
```
### 带页签的卡片
可承载更多内容。

```tsx
import React, { useState } from 'react';
import { Card } from 'antd';
const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];
const contentList: Record<string, React.ReactNode> = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};
const tabListNoTitle = [
  {
    key: 'article',
    label: 'article',
  },
  {
    key: 'app',
    label: 'app',
  },
  {
    key: 'project',
    label: 'project',
  },
];
const contentListNoTitle: Record<string, React.ReactNode> = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};
const App: React.FC = () => {
  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');
  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };
  return (
    <>
      <Card
        style={{ width: '100%' }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={<a href="#">More</a>}
        onTabChange={onTab2Change}
        tabProps={{
          size: 'middle',
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  );
};
export default App;
```
### 支持更多内容配置
一种支持封面、头像、标题和描述信息的卡片。

```tsx
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const App: React.FC = () => (
  <Card
    style={{ width: 300 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Card 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { EditOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Flex } from 'antd';
import type { CardMetaProps, CardProps } from 'antd';
import { createStyles } from 'antd-style';
const { Meta } = Card;
const useStyles = createStyles(({ token }) => ({
  root: {
    width: 300,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    border: `1px solid ${token.colorBorderSecondary}`,
  },
  header: {
    borderBottom: 'none',
    paddingBottom: 8,
  },
  body: {
    paddingTop: 0,
  },
}));
const stylesCard: CardProps['styles'] = {
  root: {
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
};
const stylesCardFn: CardProps['styles'] = (info) => {
  if (info.props.variant === 'outlined') {
    return {
      root: {
        borderColor: '#696FC7',
        boxShadow: '0 2px 8px #A7AAE1',
        borderRadius: 8,
      },
      extra: {
        color: '#696FC7',
      },
      title: {
        fontSize: 16,
        fontWeight: 500,
        color: '#A7AAE1',
      },
    } satisfies CardProps['styles'];
  }
};
const stylesCardMeta: CardMetaProps['styles'] = {
  title: {
    color: '#A7AAE1',
  },
  description: {
    color: '#A7AAE1',
  },
};
const actions = [
  <HeartOutlined key="heart" style={{ color: '#ff6b6b' }} />,
  <ShareAltOutlined key="share" style={{ color: '#4ecdc4' }} />,
  <EditOutlined key="edit" style={{ color: '#45b7d1' }} />,
];
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  const sharedCardProps: CardProps = {
    classNames,
    actions,
  };
  const sharedCardMetaProps: CardMetaProps = {
    avatar: <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />,
    description: 'This is the description',
  };
  return (
    <Flex gap="middle">
      <Card
        {...sharedCardProps}
        title="Object Card"
        styles={stylesCard}
        extra={<Button type="link">More</Button>}
        variant="borderless"
      >
        <Meta {...sharedCardMetaProps} title="Object Card Meta title" />
      </Card>
      <Card
        {...sharedCardProps}
        title="Function Card"
        styles={stylesCardFn}
        extra={
          <Button type="link" styles={{ root: { color: '#A7AAE1' } }}>
            More
          </Button>
        }
      >
        <Meta {...sharedCardMetaProps} styles={stylesCardMeta} title="Function Card Meta title" />
      </Card>
    </Flex>
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, ConfigProvider } from 'antd';
export default () => (
  <ConfigProvider
    theme={{
      components: {
        Card: {
          headerBg: '#e6f4ff',
          bodyPaddingSM: 22,
          headerPaddingSM: 20,
          headerPadding: 18,
          bodyPadding: 26,
          headerFontSize: 20,
          headerFontSizeSM: 20,
          headerHeight: 60,
          headerHeightSM: 60,
          actionsBg: '#e6f4ff',
          actionsLiMargin: `2px 0`,
          tabsMarginBottom: 0,
          extraColor: 'rgba(0,0,0,0.25)',
        },
      },
    }}
  >
    <Card
      title="Card title"
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      extra="More"
      tabList={[
        {
          key: 'tab1',
          label: 'tab1',
        },
        {
          key: 'tab2',
          label: 'tab2',
        },
      ]}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </ConfigProvider>
);
```
