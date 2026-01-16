## Pagination 组件示例
### 基本
基础分页。

```tsx
import React from 'react';
import { Pagination } from 'antd';
const App: React.FC = () => <Pagination defaultCurrent={1} total={50} />;
export default App;
```
### 方向
```tsx
import React from 'react';
import { Pagination } from 'antd';
const App: React.FC = () => (
  <>
    <Pagination align="start" defaultCurrent={1} total={50} />
    <br />
    <Pagination align="center" defaultCurrent={1} total={50} />
    <br />
    <Pagination align="end" defaultCurrent={1} total={50} />
  </>
);
export default App;
```
### 更多
更多分页。

```tsx
import React from 'react';
import { Pagination } from 'antd';
const App: React.FC = () => <Pagination defaultCurrent={6} total={500} />;
export default App;
```
### 改变
改变每页显示条目数。

```tsx
import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};
const App: React.FC = () => (
  <>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
      disabled
    />
  </>
);
export default App;
```
### 跳转
快速跳转到某一页。

```tsx
import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
const onChange: PaginationProps['onChange'] = (pageNumber) => {
  console.log('Page: ', pageNumber);
};
const App: React.FC = () => (
  <>
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    <br />
    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
  </>
);
export default App;
```
### 尺寸
小尺寸和大尺寸的分页控件。

```tsx
import React from 'react';
import type { PaginationProps } from 'antd';
import { Divider, Flex, Pagination } from 'antd';
const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Divider titlePlacement="start">Small</Divider>
    <Pagination size="small" total={50} />
    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    <Pagination size="small" total={50} showTotal={showTotal} />
    <Pagination
      size="small"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
    <Divider titlePlacement="start">Large</Divider>
    <Pagination size="large" total={50} />
    <Pagination size="large" total={50} showSizeChanger showQuickJumper />
    <Pagination size="large" total={50} showTotal={showTotal} />
    <Pagination
      size="large"
      total={50}
      disabled
      showTotal={showTotal}
      showSizeChanger
      showQuickJumper
    />
  </Flex>
);
export default App;
```
### 简洁
简单的翻页。

```tsx
import React from 'react';
import { Pagination } from 'antd';
const App: React.FC = () => (
  <>
    <Pagination simple defaultCurrent={2} total={50} />
    <br />
    <Pagination simple={{ readOnly: true }} defaultCurrent={2} total={50} />
    <br />
    <Pagination disabled simple defaultCurrent={2} total={50} />
  </>
);
export default App;
```
### 受控
受控制的页码。

```tsx
import React, { useState } from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
const App: React.FC = () => {
  const [current, setCurrent] = useState(3);
  const onChange: PaginationProps['onChange'] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return <Pagination current={current} onChange={onChange} total={50} />;
};
export default App;
```
### 总数
通过设置 `showTotal` 展示总共有多少数据。

```tsx
import React from 'react';
import { Pagination } from 'antd';
const App: React.FC = () => (
  <>
    <Pagination
      total={85}
      showTotal={(total) => `Total ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
    <br />
    <Pagination
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </>
);
export default App;
```
### 全部展示
展示所有配置选项。

```tsx
import React from 'react';
import { Pagination } from 'antd';
const App: React.FC = () => (
  <Pagination
    total={85}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);
export default App;
```
### 上一步和下一步
修改上一步和下一步为文字链接。

```tsx
import React from 'react';
import type { PaginationProps } from 'antd';
import { Pagination } from 'antd';
const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const App: React.FC = () => <Pagination total={500} itemRender={itemRender} />;
export default App;
```
### 线框风格
线框化样式。

```tsx
import React from 'react';
import { ConfigProvider, Pagination } from 'antd';
const App: React.FC = () => (
  <ConfigProvider theme={{ token: { wireframe: true } }}>
    <Pagination showSizeChanger defaultCurrent={3} total={500} />
    <br />
    <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
    <br />
    <Pagination size="small" defaultCurrent={50} total={500} />
    <br />
    <Pagination disabled size="small" defaultCurrent={50} total={500} />
  </ConfigProvider>
);
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import type { PaginationProps } from 'antd';
import { ConfigProvider, Pagination } from 'antd';
const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Pagination: {
          itemSize: 20,
          itemSizeSM: 12,
          itemActiveBg: '#e7cc87',
          itemActiveColor: '#eee',
          itemActiveColorHover: '#fff',
          itemLinkBg: '#344324',
          itemActiveBgDisabled: '#9c1515',
          itemInputBg: '#9c1515',
          miniOptionsSizeChangerTop: 0,
          itemBg: '#b5f5ec',
        },
      },
    }}
  >
    <Pagination
      showSizeChanger
      defaultCurrent={3}
      total={500}
      itemRender={itemRender}
      showQuickJumper
      showTotal={(total) => `Total ${total} items`}
    />
    <br />
    <Pagination showSizeChanger defaultCurrent={3} total={500} disabled />
  </ConfigProvider>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Pagination 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyle = createStyles(({ css }) => ({
  root: css`
    border: 2px dashed #ccc;
    padding: 8px;
  `,
}));
const styleFn: PaginationProps['styles'] = ({ props }) => {
  if (props.size === 'small') {
    return {
      item: {
        backgroundColor: `rgba(200, 200, 200, 0.3)`,
        marginInlineEnd: 4,
      },
    } satisfies PaginationProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles } = useStyle();
  const paginationSharedProps: PaginationProps = {
    total: 500,
    classNames: { root: styles.root },
  };
  return (
    <Flex vertical gap="middle">
      <Pagination {...paginationSharedProps} styles={{ item: { borderRadius: 999 } }} />
      <Pagination {...paginationSharedProps} size="small" styles={styleFn} />
    </Flex>
  );
};
export default App;
```
