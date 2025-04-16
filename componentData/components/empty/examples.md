## Empty 组件示例
### 基本
简单的展示。

```tsx
import React from 'react';
import { Empty } from 'antd';
const App: React.FC = () => <Empty />;
export default App;
```
### 选择图片
可以通过设置 `image` 为 `Empty.PRESENTED_IMAGE_SIMPLE` 选择另一种风格的图片。

```tsx
import React from 'react';
import { Empty } from 'antd';
const App: React.FC = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
```
### 自定义
自定义图片链接、图片大小、描述、附属内容。

```tsx
import React from 'react';
import { Button, Empty, Typography } from 'antd';
const App: React.FC = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    styles={{ image: { height: 60 } }}
    description={
      <Typography.Text>
        Customize <a href="#API">Description</a>
      </Typography.Text>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);
export default App;
```
### 全局化配置
自定义全局组件的 Empty 样式。

```tsx
import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Space,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);
const style: React.CSSProperties = { width: 200 };
const App: React.FC = () => {
  const [customize, setCustomize] = useState(true);
  return (
    <>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={setCustomize}
      />
      <Divider />
      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <Space direction="vertical" style={{ width: '100%' }}>
          <h4>Select</h4>
          <Select style={style} />
          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />
          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />
          <h4>Transfer</h4>
          <Transfer />
          <h4>Table</h4>
          <Table
            style={{ marginTop: 8 }}
            columns={[
              { title: 'Name', dataIndex: 'name', key: 'name' },
              { title: 'Age', dataIndex: 'age', key: 'age' },
            ]}
          />
          <h4>List</h4>
          <List />
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
```
### 无描述
无描述展示。

```tsx
import React from 'react';
import { Empty } from 'antd';
const App: React.FC = () => <Empty description={false} />;
export default App;
```
