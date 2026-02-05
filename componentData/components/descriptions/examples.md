## Descriptions 组件示例
### 基本
简单的展示。

```tsx
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Remark',
    children: 'empty',
  },
  {
    key: '5',
    label: 'Address',
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];
const App: React.FC = () => <Descriptions title="User Info" items={items} />;
export default App;
```
### 带边框的
带边框和背景颜色列表。

```tsx
import React from 'react';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
  {
    key: '4',
    label: 'Order time',
    children: '2018-04-24 18:00:00',
  },
  {
    key: '5',
    label: 'Usage Time',
    children: '2019-04-24 18:00:00',
    span: 2,
  },
  {
    key: '6',
    label: 'Status',
    children: <Badge status="processing" text="Running" />,
    span: 3,
  },
  {
    key: '7',
    label: 'Negotiated Amount',
    children: '$80.00',
  },
  {
    key: '8',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '9',
    label: 'Official Receipts',
    children: '$60.00',
  },
  {
    key: '10',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];
const App: React.FC = () => <Descriptions title="User Info" bordered items={items} />;
export default App;
```
### 复杂文本的情况
复杂文本的情况。

```tsx
import React from 'react';
import { Badge, Descriptions, Table } from 'antd';
import type { DescriptionsProps, TableProps } from 'antd';
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const dataSource: DataType[] = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns: TableProps<DataType>['columns'] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: <div style={{ display: 'flex' }}>Billing Mode</div>,
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
  {
    key: '4',
    label: 'Order time',
    children: '2018-04-24 18:00:00',
  },
  {
    key: '5',
    label: 'Usage Time',
    span: 2,
    children: '2019-04-24 18:00:00',
  },
  {
    key: '6',
    label: 'Status',
    span: 3,
    children: <Badge status="processing" text="Running" />,
  },
  {
    key: '7',
    label: 'Negotiated Amount',
    children: '$80.00',
  },
  {
    key: '8',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '9',
    label: 'Official Receipts',
    children: '$60.00',
  },
  {
    key: '10',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
  {
    key: '11',
    label: 'Official Receipts',
    children: '$60.00',
  },
  {
    key: '12',
    label: 'Config Info',
    children: (
      <Table<DataType> size="small" pagination={false} dataSource={dataSource} columns={columns} />
    ),
  },
];
const App: React.FC = () => <Descriptions title="User Info" column={2} items={items} />;
export default App;
```
### 间距
间距

```tsx
import React from 'react';
import { Descriptions, Flex } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'long',
    children: 'loooooooooooooooooooooooooooooooooooooooooooooooong',
  },
  {
    key: '2',
    label: 'long',
    children: 'loooooooooooooooooooooooooooooooooooooooooooooooong',
  },
  {
    key: '3',
    label: 'long',
    children: 'loooooooooooooooooooooooooooooooooooooooooooooooong',
  },
  {
    key: '4',
    label: 'long',
    children: 'loooooooooooooooooooooooooooooooooooooooooooooooong',
  },
  {
    key: '5',
    label: 'long',
    children: 'loooooooooooooooooooooooooooooooooooooooooooooooong',
  },
];
const App: React.FC = () => (
  <Flex gap={8} vertical>
    <div style={{ width: 600, border: '1px solid', padding: 20 }}>
      <Descriptions title="User Info" column={2} items={items} />
    </div>
    <div style={{ width: 600, border: '1px solid', padding: 20 }}>
      <Descriptions layout="vertical" title="User Info" column={2} items={items} />
    </div>
  </Flex>
);
export default App;
```
### 自定义尺寸
自定义尺寸，适应在各种容器中展示。

```tsx
import React, { useState } from 'react';
import { Button, Descriptions, Radio } from 'antd';
import type { DescriptionsProps, RadioChangeEvent } from 'antd';
const borderedItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
  {
    key: '7',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
];
const App: React.FC = () => {
  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');
  const onChange = (e: RadioChangeEvent) => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };
  return (
    <div>
      <Radio.Group onChange={onChange} value={size}>
        <Radio value="default">default</Radio>
        <Radio value="middle">middle</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions
        bordered
        title="Custom Size"
        size={size}
        extra={<Button type="primary">Edit</Button>}
        items={borderedItems}
      />
      <br />
      <br />
      <Descriptions
        title="Custom Size"
        size={size}
        extra={<Button type="primary">Edit</Button>}
        items={items}
      />
    </div>
  );
};
export default App;
```
### 响应式
通过响应式的配置可以实现在小屏幕设备上的完美呈现。

```tsx
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    label: 'Time',
    children: '18:00:00',
  },
  {
    label: 'Amount',
    children: '$80.00',
  },
  {
    label: 'Discount',
    span: { xl: 2, xxl: 2 },
    children: '$20.00',
  },
  {
    label: 'Official',
    span: { xl: 2, xxl: 2 },
    children: '$60.00',
  },
  {
    label: 'Config Info',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
      </>
    ),
  },
  {
    label: 'Hardware Info',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        CPU: 6 Core 3.5 GHz
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
      </>
    ),
  },
];
const App: React.FC = () => (
  <Descriptions
    title="Responsive Descriptions"
    bordered
    column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
    items={items}
  />
);
export default App;
```
### 垂直
垂直的列表。

```tsx
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    key: '2',
    label: 'Telephone',
    children: '1810000000',
  },
  {
    key: '3',
    label: 'Live',
    children: 'Hangzhou, Zhejiang',
  },
  {
    key: '4',
    label: 'Address',
    span: 2,
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
  {
    key: '5',
    label: 'Remark',
    children: 'empty',
  },
];
const App: React.FC = () => <Descriptions title="User Info" layout="vertical" items={items} />;
export default App;
```
### 垂直带边框的
垂直带边框和背景颜色的列表。

```tsx
import React from 'react';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
  {
    key: '4',
    label: 'Order time',
    children: '2018-04-24 18:00:00',
  },
  {
    key: '5',
    label: 'Usage Time',
    span: 2,
    children: '2019-04-24 18:00:00',
  },
  {
    key: '6',
    label: 'Status',
    span: 3,
    children: <Badge status="processing" text="Running" />,
  },
  {
    key: '7',
    label: 'Negotiated Amount',
    children: '$80.00',
  },
  {
    key: '8',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '9',
    label: 'Official Receipts',
    children: '$60.00',
  },
  {
    key: '10',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];
const App: React.FC = () => (
  <Descriptions title="User Info" layout="vertical" bordered items={items} />
);
export default App;
```
### 自定义 label & wrapper 样式
自定义 label & wrapper 样式

```tsx
import React, { useState } from 'react';
import { Descriptions, Divider, Radio, Switch } from 'antd';
import type { DescriptionsProps } from 'antd';
const labelStyle: React.CSSProperties = { background: 'red' };
const contentStyle: React.CSSProperties = { background: 'green' };
type LayoutType = 'horizontal' | 'vertical' | undefined;
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
    styles: {
      label: labelStyle,
      content: contentStyle,
    },
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
];
const rootStyleItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
    styles: {
      label: { color: 'orange' },
      content: { color: 'blue' },
    },
  },
];
const App: React.FC = () => {
  const [border, setBorder] = useState(true);
  const [layout, setLayout] = useState('horizontal' as LayoutType);
  return (
    <>
      <Switch
        checkedChildren="Border"
        unCheckedChildren="No Border"
        checked={border}
        onChange={(e) => setBorder(e)}
      />
      <Divider />
      <Radio.Group onChange={(e) => setLayout(e.target.value)} value={layout}>
        <Radio value="horizontal">horizontal</Radio>
        <Radio value="vertical">vertical</Radio>
      </Radio.Group>
      <Divider />
      <Descriptions title="User Info" bordered={border} layout={layout} items={items} />
      <Divider />
      <Descriptions
        title="Root style"
        styles={{ label: labelStyle, content: contentStyle }}
        bordered={border}
        layout={layout}
        items={rootStyleItems}
      />
    </>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Descriptions 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Descriptions, Flex } from 'antd';
import type { DescriptionsProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const classNames = createStaticStyles(({ css }) => ({
  root: css`
    padding: 10px;
  `,
}));
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing Mode',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
];
const styles: DescriptionsProps['styles'] = {
  label: {
    color: '#000',
  },
};
const stylesFn: DescriptionsProps['styles'] = (info) => {
  if (info.props.size === 'default') {
    return {
      root: {
        borderRadius: 8,
        border: '1px solid #CDC1FF',
      },
      label: { color: '#A294F9' },
    } satisfies DescriptionsProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const descriptionsProps: DescriptionsProps = {
    title: 'User Info',
    items,
    bordered: true,
    classNames,
  };
  return (
    <Flex vertical gap="middle">
      <Descriptions {...descriptionsProps} styles={styles} size="small" />
      <Descriptions {...descriptionsProps} styles={stylesFn} size="default" />
    </Flex>
  );
};
export default App;
```
### JSX demo
JSX 风格演示。

```tsx
import React from 'react';
import { Descriptions } from 'antd';
const App: React.FC = () => (
  <Descriptions title="User Info">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
    <Descriptions.Item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
  </Descriptions>
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React, { useState } from 'react';
import type { DescriptionsProps, RadioChangeEvent } from 'antd';
import { Button, ConfigProvider, Descriptions, Radio } from 'antd';
const borderedItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
  {
    key: '7',
    label: 'Config Info',
    children: (
      <>
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </>
    ),
  },
];
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Product',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Billing',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Time',
    children: '18:00:00',
  },
  {
    key: '4',
    label: 'Amount',
    children: '$80.00',
  },
  {
    key: '5',
    label: 'Discount',
    children: '$20.00',
  },
  {
    key: '6',
    label: 'Official',
    children: '$60.00',
  },
];
const App: React.FC = () => {
  const [size, setSize] = useState<'default' | 'middle' | 'small'>('default');
  const onChange = (e: RadioChangeEvent) => {
    console.log('size checked', e.target.value);
    setSize(e.target.value);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Descriptions: {
            labelBg: 'red',
            titleColor: 'red',
            titleMarginBottom: 2,
            itemPaddingBottom: 8,
            itemPaddingEnd: 8,
            colonMarginRight: 10,
            colonMarginLeft: 20,
            contentColor: 'green',
            extraColor: 'blue',
          },
        },
      }}
    >
      <div>
        <Radio.Group onChange={onChange} value={size}>
          <Radio value="default">default</Radio>
          <Radio value="middle">middle</Radio>
          <Radio value="small">small</Radio>
        </Radio.Group>
        <br />
        <br />
        <Descriptions
          bordered
          title="Custom Size"
          size={size}
          extra={<div>extra color: blue</div>}
          items={borderedItems}
        />
        <br />
        <br />
        <Descriptions
          title="Custom Size"
          size={size}
          extra={<Button type="primary">Edit</Button>}
          items={items}
        />
      </div>
    </ConfigProvider>
  );
};
export default App;
```
### 整行
整行的展示。

```tsx
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    label: 'UserName',
    children: 'Zhou Maomao',
  },
  {
    label: 'Live',
    span: 'filled', // span = 2
    children: 'Hangzhou, Zhejiang',
  },
  {
    label: 'Remark',
    span: 'filled', // span = 3
    children: 'empty',
  },
  {
    label: 'Address',
    span: 1, // span will be 3 and warning for span is not align to the end
    children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
  },
];
const App: React.FC = () => <Descriptions bordered title="User Info" items={items} />;
export default App;
```
