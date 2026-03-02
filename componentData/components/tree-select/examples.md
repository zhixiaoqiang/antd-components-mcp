## TreeSelect 组件示例
### 基本
最简单的用法。

```tsx
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
          {
            value: 'leaf3',
            title: 'leaf3',
          },
          {
            value: 'leaf4',
            title: 'leaf4',
          },
          {
            value: 'leaf5',
            title: 'leaf5',
          },
          {
            value: 'leaf6',
            title: 'leaf6',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf11',
            title: <b style={{ color: '#08c' }}>leaf11</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  const onPopupScroll: TreeSelectProps['onPopupScroll'] = (e) => {
    console.log('onPopupScroll', e);
  };
  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      styles={{
        popup: {
          root: { maxHeight: 400, overflow: 'auto' },
        },
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      onPopupScroll={onPopupScroll}
    />
  );
};
export default App;
```
### 多选
多选的树选择。

```tsx
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: <b style={{ color: '#08c' }}>sss</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      showSearch
      style={{ width: '100%' }}
      value={value}
      styles={{
        popup: {
          root: { maxHeight: 400, overflow: 'auto' },
        },
      }}
      placeholder="Please select"
      allowClear
      multiple
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};
export default App;
```
### 从数据直接生成
使用 `treeData` 把 JSON 数据直接生成树结构。

```tsx
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      style={{ width: '100%' }}
      value={value}
      styles={{
        popup: {
          root: { maxHeight: 400, overflow: 'auto' },
        },
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
  );
};
export default App;
```
### 可勾选
使用勾选框实现多选功能。

```tsx
import React, { useState } from 'react';
import { TreeSelect } from 'antd';
const { SHOW_PARENT } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState(['0-0-0']);
  const onChange = (newValue: string[]) => {
    console.log('onChange ', newValue);
    setValue(newValue);
  };
  const tProps = {
    treeData,
    value,
    onChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Please select',
    style: {
      width: '100%',
    },
  };
  return <TreeSelect {...tProps} />;
};
export default App;
```
### 异步加载
异步加载树节点。

```tsx
import React, { useState } from 'react';
import type { GetProp, TreeSelectProps } from 'antd';
import { TreeSelect } from 'antd';
type DefaultOptionType = GetProp<TreeSelectProps, 'treeData'>[number];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const [treeData, setTreeData] = useState<Omit<DefaultOptionType, 'label'>[]>([
    { id: 1, pId: 0, value: '1', title: 'Expand to load' },
    { id: 2, pId: 0, value: '2', title: 'Expand to load' },
    { id: 3, pId: 0, value: '3', title: 'Tree Node', isLeaf: true },
  ]);
  const genTreeNode = (parentId: number, isLeaf = false) => {
    const random = Math.random().toString(36).substring(2, 6);
    return {
      id: random,
      pId: parentId,
      value: random,
      title: isLeaf ? 'Tree Node' : 'Expand to load',
      isLeaf,
    };
  };
  const onLoadData: TreeSelectProps['loadData'] = ({ id }) =>
    new Promise((resolve) => {
      setTimeout(() => {
        setTreeData(
          treeData.concat([genTreeNode(id, false), genTreeNode(id, true), genTreeNode(id, true)]),
        );
        resolve(undefined);
      }, 300);
    });
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <TreeSelect
      treeDataSimpleMode
      style={{ width: '100%' }}
      value={value}
      styles={{
        popup: {
          root: { maxHeight: 400, overflow: 'auto' },
        },
      }}
      placeholder="Please select"
      onChange={onChange}
      loadData={onLoadData}
      treeData={treeData}
    />
  );
};
export default App;
```
### 线性样式
通过 `treeLine` 配置线性样式。

```tsx
import React, { useState } from 'react';
import { CarryOutOutlined } from '@ant-design/icons';
import { Space, Switch, TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    icon: <CarryOutOutlined />,
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        icon: <CarryOutOutlined />,
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
            icon: <CarryOutOutlined />,
          },
          {
            value: 'leaf2',
            title: 'leaf2',
            icon: <CarryOutOutlined />,
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        icon: <CarryOutOutlined />,
        children: [
          {
            value: 'sss',
            title: 'sss',
            icon: <CarryOutOutlined />,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [treeLine, setTreeLine] = useState(true);
  const [showLeafIcon, setShowLeafIcon] = useState(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  return (
    <Space vertical>
      <Switch
        checkedChildren="showIcon"
        unCheckedChildren="showIcon"
        checked={showIcon}
        onChange={() => setShowIcon(!showIcon)}
      />
      <Switch
        checkedChildren="treeLine"
        unCheckedChildren="treeLine"
        checked={treeLine}
        onChange={() => setTreeLine(!treeLine)}
      />
      <Switch
        disabled={!treeLine}
        checkedChildren="showLeafIcon"
        unCheckedChildren="showLeafIcon"
        checked={showLeafIcon}
        onChange={() => setShowLeafIcon(!showLeafIcon)}
      />
      <TreeSelect
        treeLine={treeLine && { showLeafIcon }}
        style={{ width: 300 }}
        treeData={treeData}
        treeIcon={showIcon}
      />
    </Space>
  );
};
export default App;
```
### 弹出位置
可以通过 `placement` 手动指定弹出的位置。

```tsx
import React, { useState } from 'react';
import type { GetProp, RadioChangeEvent, TreeSelectProps } from 'antd';
import { Radio, TreeSelect } from 'antd';
type SelectCommonPlacement = GetProp<TreeSelectProps, 'placement'>;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [placement, setPlacement] = useState<SelectCommonPlacement>('topLeft');
  const placementChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button value="topLeft">topLeft</Radio.Button>
        <Radio.Button value="topRight">topRight</Radio.Button>
        <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
        <Radio.Button value="bottomRight">bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <TreeSelect
        showSearch
        styles={{
          popup: {
            root: {
              maxHeight: 400,
              overflow: 'auto',
              minWidth: 300,
            },
          },
        }}
        placeholder="Please select"
        popupMatchSelectWidth={false}
        placement={placement}
        allowClear
        treeDefaultExpandAll
        treeData={treeData}
      />
    </>
  );
};
export default App;
```
### 形态变体
TreeSelect 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Flex, TreeSelect } from 'antd';
const style: React.CSSProperties = {
  width: '100%',
  maxWidth: '100%',
};
const App: React.FC = () => {
  return (
    <Flex vertical gap="middle">
      <TreeSelect style={style} placeholder="Please select" variant="borderless" />
      <TreeSelect style={style} placeholder="Please select" variant="filled" />
      <TreeSelect style={style} placeholder="Please select" variant="outlined" />
      <TreeSelect style={style} placeholder="Please select" variant="underlined" />
    </Flex>
  );
};
export default App;
```
### 自定义状态
使用 `status` 为 TreeSelect 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { Space, TreeSelect } from 'antd';
const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <TreeSelect status="error" style={{ width: '100%' }} placeholder="Error" />
    <TreeSelect
      status="warning"
      style={{ width: '100%' }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);
export default App;
```
### 最大选中数量
你可以通过设置 `maxCount` 约束最多可选中的数量，当超出限制时会变成禁止选中状态。

```tsx
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
const MAX_COUNT = 3;
const treeData = [
  {
    title: 'Parent 1',
    value: 'parent1',
    children: [
      {
        title: 'Child 1-1',
        value: 'child1-1',
      },
      {
        title: 'Child 1-2',
        value: 'child1-2',
      },
    ],
  },
  {
    title: 'Parent 2',
    value: 'parent2',
    children: [
      {
        title: 'Child 2-1',
        value: 'child2-1',
      },
      {
        title: 'Child 2-2',
        value: 'child2-2',
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = React.useState<string[]>(['child1-1']);
  const onChange = (newValue: string[]) => {
    setValue(newValue);
  };
  const suffix = (
    <>
      <span>
        {value.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );
  return (
    <TreeSelect
      treeData={treeData}
      value={value}
      onChange={onChange}
      multiple
      maxCount={MAX_COUNT}
      style={{ width: '100%' }}
      suffixIcon={suffix}
      treeCheckable
      placeholder="Please select"
      showCheckedStrategy={TreeSelect.SHOW_CHILD}
    />
  );
};
export default App;
```
### 前后缀
自定义前缀 `prefix` 和后缀图标 `suffixIcon`。

```tsx
import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
const icon = <SmileOutlined />;
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'my leaf',
          },
          {
            value: 'leaf2',
            title: 'your leaf',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'sss',
            title: <b style={{ color: '#08c' }}>sss</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <>
      <TreeSelect
        showSearch
        suffixIcon={icon}
        style={{ width: '100%' }}
        value={value}
        styles={{
          popup: {
            root: { maxHeight: 400, overflow: 'auto' },
          },
        }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
      <br />
      <br />
      <TreeSelect
        showSearch
        prefix="Prefix"
        style={{ width: '100%' }}
        value={value}
        styles={{
          popup: {
            root: { maxHeight: 400, overflow: 'auto' },
          },
        }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </>
  );
};
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 TreeSelect 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Flex, TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token }) => ({
  root: {
    width: 300,
    borderRadius: token.borderRadius,
  },
}));
const styleObject: TreeSelectProps['styles'] = {
  input: {
    fontSize: 16,
  },
  suffix: {
    color: '#1890ff',
  },
  popup: {
    root: {
      border: '1px solid #1890ff',
    },
  },
};
const styleFunction: TreeSelectProps['styles'] = (info) => {
  if (info.props.size === 'middle') {
    return {
      suffix: {
        color: '#722ed1',
      },
      popup: {
        item: {
          color: '#722ed1',
        },
      },
    } satisfies TreeSelectProps['styles'];
  }
  return {};
};
const treeData: TreeSelectProps['treeData'] = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: 'leaf3',
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  const sharedProps: TreeSelectProps = {
    treeData,
    classNames,
  };
  return (
    <Flex vertical gap="large">
      <TreeSelect {...sharedProps} styles={styleObject} placeholder="Object" />
      <TreeSelect {...sharedProps} styles={styleFunction} placeholder="Function" size="middle" />
    </Flex>
  );
};
export default App;
```
### \_InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { TreeSelect } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTreeSelect } = TreeSelect;
const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];
const App: React.FC = () => (
  <InternalTreeSelect defaultValue="lucy" style={{ width: '100%' }} treeData={treeData} />
);
export default App;
```
### 组件 Token
组件 Token

```tsx
import React, { useState } from 'react';
import { ConfigProvider, TreeSelect } from 'antd';
const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: 'leaf1',
          },
          {
            value: 'leaf2',
            title: 'leaf2',
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [value, setValue] = useState<string>();
  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          TreeSelect: {
            nodeHoverBg: '#fff2f0',
            nodeSelectedBg: '#ffa39e',
          },
        },
      }}
    >
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={value}
        styles={{
          popup: {
            root: { maxHeight: 400, overflow: 'auto' },
          },
        }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </ConfigProvider>
  );
};
export default App;
```
