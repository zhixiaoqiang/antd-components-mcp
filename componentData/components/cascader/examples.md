## Cascader 组件示例
### 基本
省市区级联。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
import type { HTMLAriaDataAttributes } from 'antd/es/_util/aria-data-attrs';
type Option = {
  value: string;
  label: string;
  children?: Option[];
} & HTMLAriaDataAttributes;
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    'aria-label': 'Zhejiang',
    'data-title': 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        'aria-label': 'Hangzhou',
        'data-title': 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            'aria-label': 'West Lake',
            'data-title': 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    'aria-label': 'Jiangsu',
    'data-title': 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        'aria-label': 'Nanjing',
        'data-title': 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            'aria-label': 'Zhong Hua Men',
            'data-title': 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="Please select" />
);
export default App;
```
### 默认值
默认值通过数组的方式指定。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} onChange={onChange} />
);
export default App;
```
### 可以自定义显示
切换按钮和结果分开。

```tsx
import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
    ],
  },
];
const App: React.FC = () => {
  const [text, setText] = useState('Unselect');
  const onChange: CascaderProps<Option>['onChange'] = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };
  return (
    <span>
      {text}
      &nbsp;
      <Cascader options={options} onChange={onChange}>
        <a>Change city</a>
      </Cascader>
    </span>
  );
};
export default App;
```
### 移入展开
通过移入展开下级菜单，点击完成选择。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
// Just show the latest item.
const displayRender = (labels: string[]) => labels[labels.length - 1];
const App: React.FC = () => (
  <Cascader
    options={options}
    expandTrigger="hover"
    displayRender={displayRender}
    onChange={onChange}
  />
);
export default App;
```
### 禁用选项
通过指定 options 里的 `disabled` 字段。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    disabled: true,
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => <Cascader options={options} onChange={onChange} />;
export default App;
```
### 选择即改变
这种交互允许只选中父级选项。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hanzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => <Cascader options={options} onChange={onChange} changeOnSelect />;
export default App;
```
### 多选
一次性选择多个选项。通过添加 `disableCheckbox` 属性,选择具体某一个`checkbox`禁用 。可以通过类名修改禁用的样式。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}
const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <Cascader
    style={{ width: '100%' }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
);
export default App;
```
### 自定义回填方式
通过设置 `showCheckedStrategy` 选择回填方式。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
const { SHOW_CHILD } = Cascader;
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    label: 'Light',
    value: 'light',
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const onChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird'],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={[['bamboo']]}
      />
    </>
  );
};
export default App;
```
### 大小
不同大小的级联选择器。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <>
    <Cascader size="large" options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader options={options} onChange={onChange} />
    <br />
    <br />
    <Cascader size="small" options={options} onChange={onChange} />
    <br />
    <br />
  </>
);
export default App;
```
### 自定义已选项
例如给最后一项加上邮编链接。

```tsx
import React from 'react';
import { Cascader } from 'antd';
import type { CascaderProps, GetProp } from 'antd';
type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];
interface Option {
  value: string;
  label: string;
  children?: Option[];
  code?: number;
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            code: 752100,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            code: 453400,
          },
        ],
      },
    ],
  },
];
const handleAreaClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  label: string,
  option: DefaultOptionType,
) => {
  e.stopPropagation();
  console.log('clicked', label, option);
};
const displayRender: CascaderProps<Option>['displayRender'] = (labels, selectedOptions = []) =>
  labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
          {label} (<a onClick={(e) => handleAreaClick(e, label, option)}>{option.code}</a>)
        </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });
const App: React.FC = () => (
  <Cascader
    options={options}
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    displayRender={displayRender}
    style={{ width: '100%' }}
    // `optionRender` is supported since 5.16.0
    optionRender={(option) => (
      <>
        {option.label} ({option.value})
      </>
    )}
  />
);
export default App;
```
### 搜索
可以直接搜索选项并选择。
> `Cascader[showSearch]` 暂不支持服务端搜索，更多信息见 [#5547](https://github.com/ant-design/ant-design/issues/5547)

```tsx
import React from 'react';
import { Cascader } from 'antd';
import type { CascaderProps, GetProp } from 'antd';
type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];
interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value, selectedOptions) => {
  console.log(value, selectedOptions);
};
const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some((option) => (option.label as string).toLowerCase().includes(inputValue.toLowerCase()));
const App: React.FC = () => (
  <Cascader
    options={options}
    onChange={onChange}
    placeholder="Please select"
    showSearch={{ filter, onSearch: (value) => console.log(value) }}
  />
);
export default App;
```
### 动态加载选项
使用 `loadData` 实现动态加载选项。
> 注意：`loadData` 与 `showSearch` 无法一起使用。

```tsx
import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value?: string | number | null;
  label: React.ReactNode;
  children?: Option[];
  isLeaf?: boolean;
}
const optionLists: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];
const App: React.FC = () => {
  const [options, setOptions] = useState<Option[]>(optionLists);
  const onChange: CascaderProps<Option>['onChange'] = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const loadData = (selectedOptions: Option[]) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    // load options lazily
    setTimeout(() => {
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      setOptions([...options]);
    }, 1000);
  };
  return <Cascader options={options} loadData={loadData} onChange={onChange} changeOnSelect />;
};
export default App;
```
### 自定义字段名
自定义字段名。

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  code: string;
  name: string;
  items?: Option[];
}
const options: Option[] = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <Cascader
    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
    options={options}
    onChange={onChange}
    placeholder="Please select"
  />
);
export default App;
```
### 前后缀
通过 `prefix` 自定前缀，通过 `suffixIcon` 自定义选择框后缀图标，通过 `expandIcon` 自定义次级菜单展开图标。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <>
    <Cascader
      suffixIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader suffixIcon="ab" options={options} onChange={onChange} placeholder="Please select" />
    <br />
    <br />
    <Cascader
      expandIcon={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
    <br />
    <br />
    <Cascader expandIcon="ab" options={options} onChange={onChange} placeholder="Please select" />
    <br />
    <br />
    <Cascader
      prefix={<SmileOutlined />}
      options={options}
      onChange={onChange}
      placeholder="Please select"
    />
  </>
);
export default App;
```
### 扩展菜单
使用 `popupRender` 对下拉菜单进行自由扩展。

```tsx
import React from 'react';
import { Cascader, Divider } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const popupRender = (menus: React.ReactNode) => (
  <div>
    {menus}
    <Divider style={{ margin: 0 }} />
    <div style={{ padding: 8 }}>The footer is not very short.</div>
  </div>
);
const App: React.FC = () => (
  <Cascader options={options} popupRender={popupRender} placeholder="Please select" />
);
export default App;
```
### 弹出位置
可以通过 `placement` 手动指定弹出的位置。

```tsx
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Cascader, Radio } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => {
  const [placement, setPlacement] = useState<'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'>(
    'topLeft',
  );
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
      <Cascader options={options} placeholder="Please select" placement={placement} />
    </>
  );
};
export default App;
```
### 形态变体
Cascader 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { Cascader, Flex } from 'antd';
const App: React.FC = () => (
  <Flex vertical gap="middle">
    <Cascader placeholder="Please select" variant="borderless" />
    <Cascader placeholder="Please select" variant="filled" />
    <Cascader placeholder="Please select" variant="outlined" />
    <Cascader placeholder="Please select" variant="underlined" />
  </Flex>
);
export default App;
```
### 自定义状态
使用 `status` 为 Cascader 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { Cascader, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical>
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Cascader 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Cascader, Flex } from 'antd';
import type { CascaderProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token }) => {
  return {
    root: {
      borderRadius: token.borderRadiusLG,
    },
  };
});
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'meet-student',
    label: 'meet-student',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const stylesObject: CascaderProps['styles'] = {
  prefix: {
    color: '#ccc',
  },
  suffix: {
    color: '#ccc',
  },
};
const stylesFn: CascaderProps['styles'] = (info) => {
  if (info.props.variant === 'filled') {
    return {
      prefix: {
        color: '#1890ff',
      },
      suffix: {
        color: '#1890ff',
      },
      popup: {
        listItem: {
          color: '#1890ff',
        },
      },
    } satisfies CascaderProps['styles'];
  }
  return {};
};
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  return (
    <Flex vertical gap="middle">
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Object styles"
        classNames={classNames}
        styles={stylesObject}
        prefix="🏠"
      />
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Function  styles"
        variant="filled"
        classNames={classNames}
        styles={stylesFn}
        prefix="✅"
      />
    </Flex>
  );
};
export default App;
```
### = 5.10.0">面板使用
适用于一些需要内嵌适用的场景。

```tsx
import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader, Flex, Switch } from 'antd';
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const onMultipleChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Flex vertical gap="small" align="flex-start">
      <Switch
        checked={disabled}
        checkedChildren="Enabled"
        unCheckedChildren="Disabled"
        onChange={setDisabled}
        aria-label="disabled switch"
      />
      <Cascader.Panel options={options} onChange={onChange} disabled={disabled} />
      <Cascader.Panel multiple options={options} onChange={onMultipleChange} disabled={disabled} />
      <Cascader.Panel />
    </Flex>
  );
};
export default App;
```
### _InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { Cascader } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalCascader } = Cascader;
interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const App: React.FC = () => <InternalCascader options={options} placeholder="Please select" />;
export default App;
```
### Component Token
组件 Token

```tsx
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader, ConfigProvider } from 'antd';
interface Option {
  value: string;
  label: string;
  children?: Option[];
}
const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Cascader: {
          optionSelectedColor: 'red',
        },
      },
    }}
  >
    <Cascader options={options} onChange={onChange} placeholder="Please select" />
  </ConfigProvider>
);
export default App;
```
