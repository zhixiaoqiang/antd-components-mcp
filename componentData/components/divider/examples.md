## Divider 组件示例
### 水平分割线
默认为水平分割线，可在中间加入文字。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
```
### 带文字的分割线
分割线中带有文字，可以用 `titlePlacement` 指定文字位置。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="start">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="end">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="start" styles={{ content: { margin: 0 } }}>
      Left Text margin with 0
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="end" styles={{ content: { margin: '0 50px' } }}>
      Right Text margin with 50px
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
```
### 设置分割线的间距大小
间距的大小。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider size="small" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider size="middle" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider size="large" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
```
### 分割文字使用正文样式
使用 `plain` 可以设置为更轻量的分割文字样式。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="start" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="end" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
```
### 垂直分割线
使用 `orientation="vertical"` 或者 `vertical` 设置为行内的垂直分割线。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    Text
    <Divider orientation="vertical" />
    <a href="#">Link</a>
    <Divider vertical />
    <a href="#">Link</a>
  </>
);
export default App;
```
### 样式自定义
测试一些 `style` 修改样式的行为。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    <Divider style={{ borderWidth: 2, borderColor: '#7cb305' }} />
    <Divider style={{ borderColor: '#7cb305' }} dashed />
    <Divider style={{ borderColor: '#7cb305' }} dashed>
      Text
    </Divider>
    <Divider vertical style={{ height: 60, borderColor: '#7cb305' }} />
    <Divider vertical style={{ height: 60, borderColor: '#7cb305' }} dashed />
    <div style={{ display: 'flex', flexDirection: 'column', height: 50, boxShadow: '0 0 1px red' }}>
      <Divider style={{ background: 'rgba(0,255,0,0.05)' }} titlePlacement="start">
        Text
      </Divider>
    </div>
  </>
);
export default App;
```
### 组件 Token
组件 Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, Divider } from 'antd';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        margin: 24,
        marginLG: 48,
        lineWidth: 5,
        colorSplit: '#1677ff',
      },
      components: {
        Divider: {
          verticalMarginInline: 16,
          textPaddingInline: 16,
          orientationMargin: 0.2,
        },
      },
    }}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="start">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="end">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="start" styles={{ content: { margin: 0 } }}>
      Left Text margin with 0
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider titlePlacement="end" styles={{ content: { margin: '0 50px' } }}>
      Right Text margin with 50px
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </ConfigProvider>
);
export default App;
```
### 变体
分隔线默认为 `solid`（实线）变体。您可以将其更改为 `dashed`（虚线）或 `dotted`（点线）。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider style={{ borderColor: '#7cb305' }}>Solid</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider variant="dotted" style={{ borderColor: '#7cb305' }}>
      Dotted
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider variant="dashed" style={{ borderColor: '#7cb305' }} dashed>
      Dashed
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义分割线的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Divider } from 'antd';
import type { DividerProps } from 'antd';
const classNamesObject: DividerProps['classNames'] = {
  root: 'demo-divider-root',
  content: 'demo-divider-content',
  rail: 'demo-divider-rail',
};
const classNamesFn: DividerProps['classNames'] = (info) => {
  if (info.props.titlePlacement === 'start') {
    return {
      root: 'demo-divider-root--start',
    } satisfies DividerProps['classNames'];
  }
  return {
    root: 'demo-divider-root--default',
  } satisfies DividerProps['classNames'];
};
const stylesObject: DividerProps['styles'] = {
  root: { borderWidth: 2, borderStyle: 'dashed' },
  content: { fontStyle: 'italic' },
  rail: { opacity: 0.85 },
};
const stylesFn: DividerProps['styles'] = (info) => {
  if (info.props.size === 'small') {
    return {
      root: { opacity: 0.6, cursor: 'default' },
    } satisfies DividerProps['styles'];
  }
  return {
    root: { backgroundColor: '#fafafa', borderColor: '#d9d9d9' },
  } satisfies DividerProps['styles'];
};
const App: React.FC = () => (
  <div>
    <Divider classNames={classNamesObject}>classNames Object</Divider>
    <Divider titlePlacement="start" classNames={classNamesFn}>
      classNames Function
    </Divider>
    <Divider styles={stylesObject}>styles Object</Divider>
    <Divider size="small" styles={stylesFn}>
      styles Function
    </Divider>
  </div>
);
export default App;
```
