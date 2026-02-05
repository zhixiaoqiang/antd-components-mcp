## Tour 组件示例
### 基本
最简单的用法。

```tsx
import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import type { TourProps } from 'antd';
const App: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          draggable={false}
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
```
### 非模态
使用 `mask={false}` 可以将引导变为非模态，同时为了强调引导本身，建议与 `type="primary"` 组合使用。

```tsx
import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import type { TourProps } from 'antd';
const App: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          draggable={false}
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin non-modal Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour open={open} onClose={() => setOpen(false)} mask={false} type="primary" steps={steps} />
    </>
  );
};
export default App;
```
### 位置
改变引导相对于目标的位置，共有 12 种位置可供选择。当 `target={null}` 时引导将会展示在正中央。

```tsx
import React, { useRef, useState } from 'react';
import { Button, Tour } from 'antd';
import type { TourProps } from 'antd';
const App: React.FC = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Center',
      description: 'Displayed in the center of screen.',
      target: null,
    },
    {
      title: 'Right',
      description: 'On the right of target.',
      placement: 'right',
      target: () => ref.current,
    },
    {
      title: 'Top',
      description: 'On the top of target.',
      placement: 'top',
      target: () => ref.current,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default App;
```
### 自定义遮罩样式
自定义遮罩样式。

```tsx
import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';
import type { TourProps } from 'antd';
const App: React.FC = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          draggable={false}
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
      mask: {
        style: {
          boxShadow: 'inset 0 0 15px #fff',
        },
        color: 'rgba(40, 0, 255, .4)',
      },
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
      mask: false,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          color: 'rgba(80, 255, 255, .4)',
        }}
      />
    </>
  );
};
export default App;
```
### 自定义指示器
自定义指示器。

```tsx
import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type { GetRef, TourProps } from 'antd';
import { Button, Divider, Space, Tour } from 'antd';
const App: React.FC = () => {
  const ref1 = useRef<GetRef<typeof Button>>(null);
  const ref2 = useRef<GetRef<typeof Button>>(null);
  const ref3 = useRef<GetRef<typeof Button>>(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current!,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current!,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current!,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        indicatorsRender={(current, total) => (
          <span>
            {current + 1} / {total}
          </span>
        )}
      />
    </>
  );
};
export default App;
```
### 自定义操作按钮
自定义操作按钮。

```tsx
import React, { useRef, useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type { GetRef, TourProps } from 'antd';
import { Button, Divider, Space, Tour } from 'antd';
const App: React.FC = () => {
  const ref1 = useRef<GetRef<typeof Button>>(null);
  const ref2 = useRef<GetRef<typeof Button>>(null);
  const ref3 = useRef<GetRef<typeof Button>>(null);
  const [open, setOpen] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => ref1.current!,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current!,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current!,
    },
  ];
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        actionsRender={(originNode, { current, total }) => (
          <>
            {current !== total - 1 && (
              <Button
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Skip
              </Button>
            )}
            {originNode}
          </>
        )}
      />
    </>
  );
};
export default App;
```
### 自定义高亮区域的样式
使用 `gap` 参数来控制高亮区域的边距和圆角。
- `5.9.0` 之前不支持单独设置两个方向上的边距和数组类型的 `offset` 参数。

```tsx
import React, { useRef, useState } from 'react';
import { Button, Col, Row, Slider, Space, Tour, Typography } from 'antd';
import type { TourProps } from 'antd';
const { Text } = Typography;
const App: React.FC = () => {
  const tourNodeRef = useRef(null);
  const [radius, setRadius] = useState(8);
  const [offsetX, setOffsetX] = useState(2);
  const [offsetY, setOffsetY] = useState(2);
  const [offset, setOffset] = useState(2);
  const [open, setOpen] = useState(false);
  const [offsetDirection, setOffsetDirection] = useState<'both' | 'individual'>('individual');
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          draggable={false}
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => tourNodeRef.current,
    },
  ];
  const offsetGap =
    offsetDirection === 'both'
      ? { offset }
      : {
          offset: [offsetX, offsetY] as [number, number],
        };
  return (
    <div ref={tourNodeRef}>
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Space style={{ display: 'flex', marginTop: 12 }} vertical>
        <Row>
          <Col span={6}>
            <Text>Radius:</Text>
          </Col>
          <Col span={12}>
            <Slider value={radius} onChange={(val) => val && setRadius(val)} />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text> offset:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offset}
              max={50}
              onChange={(val) => val && setOffset(val)}
              onFocus={() => setOffsetDirection('both')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>Horizontal offset:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offsetX}
              max={50}
              onChange={(val) => val && setOffsetX(val)}
              onFocus={() => setOffsetDirection('individual')}
            />
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <Text>Vertical offset:</Text>
          </Col>
          <Col span={12}>
            <Slider
              value={offsetY}
              max={50}
              onChange={(val) => val && setOffsetY(val)}
              onFocus={() => setOffsetDirection('individual')}
            />
          </Col>
        </Row>
      </Space>
      <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        gap={{ ...offsetGap, radius }}
      />
    </div>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Tour 的[语义化结构](#semantic-dom)样式。

```tsx
import React, { useRef, useState } from 'react';
import { Button, Divider, Flex, Space, Tour } from 'antd';
import type { TourProps, TourStepProps } from 'antd';
import { createStaticStyles } from 'antd-style';
const btnProps: {
  nextButtonProps: TourStepProps['nextButtonProps'];
  prevButtonProps: TourStepProps['prevButtonProps'];
} = {
  nextButtonProps: {
    style: {
      border: '1px solid #CDC1FF',
      color: '#CDC1FF',
    },
  },
  prevButtonProps: {
    style: {
      backgroundColor: '#CDC1FF',
      color: '#fff',
    },
  },
};
const classNames = createStaticStyles(({ css }) => ({
  root: css`border-radius: 4px;`,
  section: css`border-radius: 8px;`,
}));
const stylesObject: TourProps['styles'] = {
  mask: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  section: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    border: '2px solid #4096ff',
  },
  cover: {
    borderRadius: '12px 12px 0 0',
  },
};
const stylesFunction: TourProps['styles'] = (info) => {
  if (info.props.type === 'primary') {
    return {
      mask: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
      },
      section: {
        backgroundColor: 'rgb(205,193,255, 0.8)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      cover: {
        borderRadius: '12px 12px 0 0',
      },
    } satisfies TourProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const ref1 = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [openFn, setOpenFn] = useState<boolean>(false);
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current || document.body,
      prevButtonProps: {},
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current || document.body,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current || document.body,
    },
  ];
  const sharedProps: TourProps = {
    steps,
    classNames,
    arrow: false,
  };
  return (
    <Flex vertical gap="middle">
      <Flex gap="middle">
        <Button type="primary" onClick={() => setOpen(true)}>
          Begin Tour Object
        </Button>
        <Button type="primary" onClick={() => setOpenFn(true)}>
          Begin Tour Function
        </Button>
      </Flex>
      <Divider />
      <Tour {...sharedProps} open={open} onClose={() => setOpen(false)} styles={stylesObject} />
      <Tour
        {...sharedProps}
        steps={steps.map((s) => ({ ...s, ...btnProps }))}
        type="primary"
        open={openFn}
        onClose={() => setOpenFn(false)}
        styles={stylesFunction}
      />
      <Space>
        <Button ref={ref1} type="primary">
          Upload
        </Button>
        <Button ref={ref2}>Save</Button>
        <Button ref={ref3} type="dashed">
          Other Actions
        </Button>
      </Space>
    </Flex>
  );
};
export default App;
```
### \_InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Tour } from 'antd';
/** Test usage. Do not use in your production. */
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = Tour;
export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      background: 'rgba(50,0,0,0.65)',
      padding: 8,
    }}
  >
    <InternalPanel title="Hello World!" description="Hello World?!" />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      cover={
        <img
          draggable={false}
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      }
      current={5}
      total={7}
    />
    <InternalPanel
      title="Hello World!"
      description="Hello World?!"
      type="primary"
      current={4}
      total={5}
    />
  </div>
);
```
