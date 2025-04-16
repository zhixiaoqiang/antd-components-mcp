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
分割线中带有文字，可以用 `orientation` 指定文字位置。

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
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
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
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
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
使用 `type="vertical"` 设置为行内的垂直分割线。

```tsx
import React from 'react';
import { Divider } from 'antd';
const App: React.FC = () => (
  <>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
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
    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} />
    <Divider type="vertical" style={{ height: 60, borderColor: '#7cb305' }} dashed />
    <div style={{ display: 'flex', flexDirection: 'column', height: 50, boxShadow: '0 0 1px red' }}>
      <Divider style={{ background: 'rgba(0,255,0,0.05)' }} orientation="left">
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
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
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
