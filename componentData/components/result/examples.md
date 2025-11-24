## Result 组件示例
### Success
成功的结果。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);
export default App;
```
### Info
展示处理结果。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
```
### Warning
警告类型的结果。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
```
### 403
你没有此页面的访问权限。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
```
### 404
此页面未找到。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
```
### 500
服务器发生了错误。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
```
### Error
复杂的错误反馈。

```tsx
import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
const App: React.FC = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);
export default App;
```
### 自定义 icon
自定义 icon。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
const App: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Result 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Button, Result } from 'antd';
import type { ResultProps } from 'antd';
const classNamesObject: ResultProps['classNames'] = {
  root: 'demo-result-root',
  title: 'demo-result-title',
  subTitle: 'demo-result-subtitle',
  icon: 'demo-result-icon',
  extra: 'demo-result-extra',
  body: 'demo-result-body',
};
const classNamesFn: ResultProps['classNames'] = (info) => {
  if (info.props.status === 'success') {
    return {
      root: 'demo-result-root--success',
    } satisfies ResultProps['classNames'];
  }
  return {
    root: 'demo-result-root--default',
  } satisfies ResultProps['classNames'];
};
const stylesObject: ResultProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed', padding: 16 },
  title: { fontStyle: 'italic', color: '#1890ff' },
  subTitle: { fontWeight: 'bold' },
  icon: { opacity: 0.8 },
  extra: { backgroundColor: '#f0f0f0', padding: 8 },
  body: { backgroundColor: '#fafafa', padding: 12 },
};
const stylesFn: ResultProps['styles'] = (info) => {
  if (info.props.status === 'error') {
    return {
      root: { backgroundColor: '#fff2f0', borderColor: '#ff4d4f' },
      title: { color: '#ff4d4f' },
    } satisfies ResultProps['styles'];
  } else {
    return {
      root: { backgroundColor: '#f6ffed', borderColor: '#52c41a' },
      title: { color: '#52c41a' },
    } satisfies ResultProps['styles'];
  }
};
const App: React.FC = () => {
  return (
    <>
      <Result
        status="info"
        title="classNames Object"
        subTitle="This is a subtitle"
        styles={stylesObject}
        classNames={classNamesObject}
        extra={<Button type="primary">Action</Button>}
      >
        <div>Content area</div>
      </Result>
      <Result
        status="success"
        title="classNames Function"
        subTitle="Dynamic class names"
        styles={stylesFn}
        classNames={classNamesFn}
        extra={<Button>Action</Button>}
      />
    </>
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { Button, ConfigProvider, Result } from 'antd';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Result: {
          titleFontSize: 18,
          subtitleFontSize: 14,
          iconFontSize: 48,
          extraMargin: `12px 0 0 0`,
        },
      },
    }}
  >
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  </ConfigProvider>
);
export default App;
```
