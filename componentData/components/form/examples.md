## Form 组件示例
### 基本使用
基本的表单数据域控制展示，包含布局、初始化、验证、提交。

```tsx
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 表单方法调用
通过 `Form.useForm` 对表单数据域进行交互。
> 注意 `useForm` 是 [React Hooks](https://zh-hans.react.dev/reference/react/hooks) 的实现，只能用于函数组件。如果是在 Class Component 下，你也可以通过 `ref` 获取数据域：https://codesandbox.io/p/sandbox/ngtjtm

```tsx
import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        break;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        break;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };
  const onFinish = (values: any) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };
  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          allowClear
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          options={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
            { label: 'other', value: 'other' },
          ]}
        />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 表单布局
表单有三种布局。

```tsx
import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import type { FormProps } from 'antd';
type LayoutType = Parameters<typeof Form>[0]['layout'];
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const onFormLayoutChange: FormProps<any>['onValuesChange'] = ({ layout }) => {
    setFormLayout(layout);
  };
  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 表单混合布局
在 `Form.Item` 上单独定义 `layout`，可以做到一个表单多种布局。

```tsx
import React from 'react';
import { Divider, Form, Input } from 'antd';
const App: React.FC = () => (
  <>
    <Form name="layout-multiple-horizontal" layout="horizontal">
      <Form.Item
        label="horizontal"
        name="horizontal"
        rules={[{ required: true }]}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Input />
      </Form.Item>
      <Form.Item layout="vertical" label="vertical" name="vertical" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item layout="vertical" label="vertical2" name="vertical2" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
    <Divider />
    <Form name="layout-multiple-vertical" layout="vertical">
      <Form.Item label="vertical" name="vertical" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="vertical2" name="vertical2" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        layout="horizontal"
        label="horizontal"
        name="horizontal"
        rules={[{ required: true }]}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Input />
      </Form.Item>
    </Form>
  </>
);
export default App;
```
### 表单禁用
设置表单组件禁用，仅对 antd 组件有效。

```tsx
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  Transfer,
  Tree,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormDisabledDemo: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select options={[{ label: 'Demo', value: 'demo' }]} />
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
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
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
        <Form.Item label="Rate">
          <Rate />
        </Form.Item>
        <Form.Item label="Mentions">
          <Mentions defaultValue="@afc163" />
        </Form.Item>
        <Form.Item label="Transfer">
          <Transfer
            dataSource={Array.from({ length: 20 }, (_, i) => ({
              key: i.toString(),
              title: `Content ${i + 1}`,
              description: `Description of content ${i + 1}`,
            }))}
            targetKeys={['1', '3', '5']}
            render={(item) => item.title}
          />
        </Form.Item>
        <Form.Item label="Tree">
          <Tree
            checkable
            defaultExpandedKeys={['0-0', '0-1']}
            defaultSelectedKeys={['0-0-0', '0-1-0']}
            defaultCheckedKeys={['0-0-0-0', '0-1-0']}
            treeData={[
              {
                title: 'Parent 1',
                key: '0-0',
                children: [
                  {
                    title: 'Child 1-1',
                    key: '0-0-0',
                    children: [
                      {
                        title: 'Grandchild 1-1-1',
                        key: '0-0-0-0',
                      },
                    ],
                  },
                  {
                    title: 'Child 1-2',
                    key: '0-0-1',
                  },
                ],
              },
              {
                title: 'Parent 2',
                key: '0-1',
                children: [
                  {
                    title: 'Child 2-1',
                    key: '0-1-0',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormDisabledDemo />;
```
### 表单变体
改变表单内所有组件的变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
      <Form.Item label="Form variant" name="variant">
        <Segmented options={['outlined', 'filled', 'borderless', 'underlined']} />
      </Form.Item>
      <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="InputNumber"
        name="InputNumber"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="TextArea"
        name="TextArea"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Mentions"
        name="Mentions"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Mentions />
      </Form.Item>
      <Form.Item
        label="Select"
        name="Select"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Select />
      </Form.Item>
      <Form.Item
        label="Cascader"
        name="Cascader"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Cascader />
      </Form.Item>
      <Form.Item
        label="TreeSelect"
        name="TreeSelect"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <TreeSelect />
      </Form.Item>
      <Form.Item
        label="DatePicker"
        name="DatePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="RangePicker"
        name="RangePicker"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 必选样式
通过 `requiredMark` 切换必选与可选样式。

```tsx
import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag } from 'antd';
import type { FormProps } from 'antd';
type RequiredMark = boolean | 'optional' | 'customize';
const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
  <>
    {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
    {label}
  </>
);
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');
  const onRequiredTypeChange: FormProps<any>['onValuesChange'] = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark === 'customize' ? customizeRequiredMark : requiredMark}
    >
      <Form.Item label="Required Mark" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value>Default</Radio.Button>
          <Radio.Button value="optional">Optional</Radio.Button>
          <Radio.Button value={false}>Hidden</Radio.Button>
          <Radio.Button value="customize">Customize</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A" required tooltip="This is a required field">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        label="Field B"
        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 表单尺寸
设置表单组件尺寸，仅对 antd 组件有效。

```tsx
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
import type { FormProps } from 'antd';
type SizeType = Parameters<typeof Form>[0]['size'];
const App: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange: FormProps<any>['onValuesChange'] = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select options={[{ label: 'Demo', value: 'demo' }]} />
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [{ value: 'hangzhou', label: 'Hangzhou' }],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Button</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 表单标签可换行
使用 `labelWrap` 可以开启 `label` 换行。

```tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
const App: React.FC = () => (
  <Form
    name="wrap"
    labelCol={{ flex: '110px' }}
    labelAlign="left"
    labelWrap
    wrapperCol={{ flex: 1 }}
    colon={false}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Normal label" name="username" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item label="A super long label text" name="password" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item label="A super long label text" name="password1">
      <Input />
    </Form.Item>
    <Form.Item label=" ">
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 非阻塞校验
`rule` 添加 `warningOnly` 后校验不再阻塞表单提交。

```tsx
import React from 'react';
import { Button, Form, Input, message, Space } from 'antd';
const App: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="url"
        label="URL"
        rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onFill}>
            Fill
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 字段监听 Hooks
`useWatch` 允许你监听字段变化，同时仅当该字段变化时重新渲染。API 文档请[查阅此处](#formusewatch)。

```tsx
import React from 'react';
import { Form, Input, InputNumber, Typography } from 'antd';
const Demo: React.FC = () => {
  const [form] = Form.useForm<{ name: string; age: number }>();
  const nameValue = Form.useWatch('name', form);
  // The selector is static and does not support closures.
  const customValue = Form.useWatch((values) => `name: ${values.name || ''}`, form);
  return (
    <>
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item name="name" label="Name (Watch to trigger rerender)">
          <Input />
        </Form.Item>
        <Form.Item name="age" label="Age (Not Watch)">
          <InputNumber />
        </Form.Item>
      </Form>
      <Typography>
        <pre>Name Value: {nameValue}</pre>
        <pre>Custom Value: {customValue}</pre>
      </Typography>
    </>
  );
};
export default Demo;
```
### 校验时机
对于有异步校验的场景，过于频繁的校验会导致后端压力。可以通过 `validateTrigger` 改变校验时机，或者 `validateDebounce` 改变校验频率，或者 `validateFirst` 设置校验短路。

```tsx
import React from 'react';
import { Alert, Form, Input } from 'antd';
const App: React.FC = () => (
  <Form name="trigger" style={{ maxWidth: 600 }} layout="vertical" autoComplete="off">
    <Alert title="Use 'max' rule, continue type chars to see it" />
    <Form.Item
      hasFeedback
      label="Field A"
      name="field_a"
      validateTrigger="onBlur"
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required onBlur" />
    </Form.Item>
    <Form.Item
      hasFeedback
      label="Field B"
      name="field_b"
      validateDebounce={1000}
      rules={[{ max: 3 }]}
    >
      <Input placeholder="Validate required debounce after 1s" />
    </Form.Item>
    <Form.Item
      hasFeedback
      label="Field C"
      name="field_c"
      validateFirst
      rules={[{ max: 6 }, { max: 3, message: 'Continue input to exceed 6 chars' }]}
    >
      <Input placeholder="Validate one by one" />
    </Form.Item>
  </Form>
);
export default App;
```
### 仅校验
通过 `validateFields` 的 `validateOnly` 可以动态调整提交按钮的 `disabled` 状态。

```tsx
import React from 'react';
import type { FormInstance } from 'antd';
import { Button, Form, Input, Space } from 'antd';
interface SubmitButtonProps {
  form: FormInstance;
}
const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form}>Submit</SubmitButton>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 字段路径前缀
在某些场景，你希望统一设置一些字段的前缀。你可以通过 HOC 实现该效果。

```tsx
import React from 'react';
import { Button, Form, Input } from 'antd';
import type { FormItemProps } from 'antd';
const MyFormItemContext = React.createContext<(string | number)[]>([]);
interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
}
function toArr(str: string | number | (string | number)[]): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup: React.FC<React.PropsWithChildren<MyFormItemGroupProps>> = ({
  prefix,
  children,
}) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};
const App: React.FC = () => {
  const onFinish = (value: object) => {
    console.log(value);
  };
  return (
    <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
      <MyFormItemGroup prefix={['user']}>
        <MyFormItemGroup prefix={['name']}>
          <MyFormItem name="firstName" label="First Name">
            <Input />
          </MyFormItem>
          <MyFormItem name="lastName" label="Last Name">
            <Input />
          </MyFormItem>
        </MyFormItemGroup>
        <MyFormItem name="age" label="Age">
          <Input />
        </MyFormItem>
      </MyFormItemGroup>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
export default App;
```
### 动态增减表单项
动态增加、减少表单项。`add` 方法参数可用于设置初始值。

```tsx
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};
const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };
  return (
    <Form
      name="dynamic_form_item"
      {...formItemLayoutWithOutLabel}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 passengers'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passengers' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input placeholder="passenger name" style={{ width: '60%' }} />
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add field
              </Button>
              <Button
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{ width: '60%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                Add field at head
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 动态增减嵌套字段
嵌套表单字段需要对 `field` 进行拓展，将 `field.name` 应用于控制字段。

```tsx
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};
const App: React.FC = () => (
  <Form
    name="dynamic_form_nest_item"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    autoComplete="off"
  >
    <Form.List name="users">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
              <Form.Item
                {...restField}
                name={[name, 'first']}
                rules={[{ required: true, message: 'Missing first name' }]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                {...restField}
                name={[name, 'last']}
                rules={[{ required: true, message: 'Missing last name' }]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <MinusCircleOutlined onClick={() => remove(name)} />
            </Space>
          ))}
          <Form.Item>
            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
              Add field
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 动态增减嵌套纯字段
嵌套 `noStyle` 字段的动态表单示例。

```tsx
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const onFinish = (values: any) => {
  console.log('Received values of form:', values);
};
const App: React.FC = () => (
  <Form
    name="dynamic_form_no_style"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    autoComplete="off"
  >
    <Form.Item label="Users">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map((field) => (
              <Space key={field.key} style={{ marginBottom: 16 }}>
                <Form.Item noStyle name={[field.name, 'lastName']} rules={[{ required: true }]}>
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item noStyle name={[field.name, 'firstName']} rules={[{ required: true }]}>
                  <Input placeholder="First Name" />
                </Form.Item>
                <MinusCircleOutlined
                  onClick={() => {
                    remove(field.name);
                  }}
                />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 复杂的动态增减表单项
多个 Form.List 嵌套的使用场景。

```tsx
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Space, Typography } from 'antd';
const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name="dynamic_form_complex"
      style={{ maxWidth: 600 }}
      autoComplete="off"
      initialValues={{ items: [{}] }}
    >
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
            {fields.map((field) => (
              <Card
                size="small"
                title={`Item ${field.name + 1}`}
                key={field.key}
                extra={
                  <CloseOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                }
              >
                <Form.Item label="Name" name={[field.name, 'name']}>
                  <Input />
                </Form.Item>
                {/* Nest Form.List */}
                <Form.Item label="List">
                  <Form.List name={[field.name, 'list']}>
                    {(subFields, subOpt) => (
                      <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16 }}>
                        {subFields.map((subField) => (
                          <Space key={subField.key}>
                            <Form.Item noStyle name={[subField.name, 'first']}>
                              <Input placeholder="first" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'second']}>
                              <Input placeholder="second" />
                            </Form.Item>
                            <CloseOutlined
                              onClick={() => {
                                subOpt.remove(subField.name);
                              }}
                            />
                          </Space>
                        ))}
                        <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button>
                      </div>
                    )}
                  </Form.List>
                </Form.Item>
              </Card>
            ))}
            <Button type="dashed" onClick={() => add()} block>
              + Add Item
            </Button>
          </div>
        )}
      </Form.List>
      <Form.Item noStyle shouldUpdate>
        {() => (
          <Typography>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 嵌套结构与校验信息
`name` 属性支持嵌套数据结构。通过 `validateMessages` 或 `message` 自定义校验信息模板，模板内容可参考[此处](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)。

```tsx
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values: any) => {
  console.log(values);
};
const App: React.FC = () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
    </Form.Item>
    <Form.Item name={['user', 'website']} label="Website">
      <Input />
    </Form.Item>
    <Form.Item name={['user', 'introduction']} label="Introduction">
      <Input.TextArea />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 复杂一点的控件
这里演示 `Form.Item` 内有多个元素的使用方式。`<Form.Item name="field" />` 只会对它的直接子元素绑定表单功能，例如直接包裹了 Input/Select。如果控件前后还有一些文案或样式装点，或者一个表单项内有多个控件，你可以使用内嵌的 `Form.Item` 完成。你可以给 `Form.Item` 自定义 `style` 进行内联布局，或者添加 `noStyle` 作为纯粹的无样式绑定组件（类似 3.x 中的 `getFieldDecorator`）。
```diff
- <Form.Item label="Field" name="field">
-   <Input />
- </Form.Item>
+ <Form.Item label="Field">
+   <Form.Item name="field" noStyle><Input /></Form.Item> // 直接包裹才会绑定表单
+   <span>description</span>
+ </Form.Item>
```
这里展示了三种典型场景：
- `Username`：输入框后面有描述文案或其他组件，在 `Form.Item` 内使用 `<Form.Item name="field" noStyle />` 去绑定对应子控件。
- `Address`：有两个控件，在 `Form.Item` 内使用两个 `<Form.Item name="field" noStyle />` 分别绑定对应控件。
- `BirthDate`：有两个内联控件，错误信息展示各自控件下，使用两个 `<Form.Item name="field" />` 分别绑定对应控件，并修改 `style` 使其内联布局。
> 注意，在 label 对应的 Form.Item 上不要在指定 `name` 属性，这个 Item 只作为布局作用。
更复杂的封装复用方式可以参考下面的 `自定义表单控件` 演示。

```tsx
import React from 'react';
import { Button, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};
const App: React.FC = () => (
  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Username">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[{ required: true, message: 'Username is required' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
        <Tooltip title="Useful information">
          <Typography.Link href="#API">Need Help?</Typography.Link>
        </Tooltip>
      </Space>
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select
            placeholder="Select province"
            options={[
              { label: 'Zhejiang', value: 'Zhejiang' },
              { label: 'Jiangsu', value: 'Jiangsu' },
            ]}
          />
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Input street" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
      <Form.Item
        name="year"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <Input placeholder="Input birth year" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
      >
        <Input placeholder="Input birth month" />
      </Form.Item>
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 自定义表单控件
自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：
> - 提供受控属性 `value` 或其它与 [`valuePropName`](#formitem) 的值同名的属性。
> - 提供 `onChange` 事件或 [`trigger`](#formitem) 的值同名的事件。
> - 转发 ref 或者传递 id 属性到 dom 以支持 `scrollToField` 方法。

```tsx
import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
type Currency = 'rmb' | 'dollar';
interface PriceValue {
  number?: number;
  currency?: Currency;
}
interface PriceInputProps {
  id?: string;
  value?: PriceValue;
  onChange?: (value: PriceValue) => void;
}
const PriceInput: React.FC<PriceInputProps> = (props) => {
  const { id, value = {}, onChange } = props;
  const [number, setNumber] = useState(0);
  const [currency, setCurrency] = useState<Currency>('rmb');
  const triggerChange = (changedValue: { number?: number; currency?: Currency }) => {
    onChange?.({ number, currency, ...value, ...changedValue });
  };
  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({ number: newNumber });
  };
  const onCurrencyChange = (newCurrency: Currency) => {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({ currency: newCurrency });
  };
  return (
    <span id={id}>
      <Input
        type="text"
        value={value.number || number}
        onChange={onNumberChange}
        style={{ width: 100 }}
      />
      <Select
        value={value.currency || currency}
        style={{ width: 80, margin: '0 8px' }}
        onChange={onCurrencyChange}
        options={[
          { label: 'RMB', value: 'rmb' },
          { label: 'Dollar', value: 'dollar' },
        ]}
      />
    </span>
  );
};
const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };
  const checkPrice = (_: any, value: { number: number }) => {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };
  return (
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={onFinish}
      initialValues={{
        price: { number: 0, currency: 'rmb' },
      }}
    >
      <Form.Item name="price" label="Price" rules={[{ validator: checkPrice }]}>
        <PriceInput />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 表单数据存储于上层组件
通过 `onFieldsChange` 和 `fields`，可以把表单的数据存储到上层组件或者 [Redux](https://github.com/reactjs/redux)、[dva](https://github.com/dvajs/dva) 中，更多可参考 [rc-field-form 示例](https://rc-field-form.react-component.now.sh/?selectedKind=rc-field-form&selectedStory=StateForm-redux&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)。
**注意：** 将表单数据存储于外部容器[并非好的实践](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978)，如无必要请避免使用。

```tsx
import React, { useState } from 'react';
import { Form, Input, Typography } from 'antd';
const { Paragraph } = Typography;
interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}
interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void;
  fields: FieldData[];
}
const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="inline"
    fields={fields}
    onFieldsChange={(_, allFields) => {
      onChange(allFields);
    }}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[{ required: true, message: 'Username is required!' }]}
    >
      <Input />
    </Form.Item>
  </Form>
);
const App: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([{ name: ['username'], value: 'Ant Design' }]);
  return (
    <>
      <CustomizedForm
        fields={fields}
        onChange={(newFields) => {
          setFields(newFields);
        }}
      />
      <Paragraph style={{ maxWidth: 440, marginTop: 24 }}>
        <pre style={{ border: 'none' }}>{JSON.stringify(fields, null, 2)}</pre>
      </Paragraph>
    </>
  );
};
export default App;
```
### 多表单联动
通过 `Form.Provider` 在表单间处理数据。本例子中，Modal 的确认按钮在 Form 之外，通过 `form.submit` 方法调用表单提交功能。反之，则推荐使用 `<Button htmlType="submit" />` 调用 web 原生提交逻辑。

```tsx
import React, { useEffect, useRef, useState } from 'react';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Form, Input, InputNumber, Modal, Space, Typography } from 'antd';
import type { GetRef } from 'antd';
type FormInstance = GetRef<typeof Form>;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
interface UserType {
  name: string;
  age: string;
}
interface ModalFormProps {
  open: boolean;
  onCancel: () => void;
}
// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, open }: { form: FormInstance; open: boolean }) => {
  const prevOpenRef = useRef<boolean>(null);
  useEffect(() => {
    prevOpenRef.current = open;
  }, [open]);
  const prevOpen = prevOpenRef.current;
  useEffect(() => {
    if (!open && prevOpen) {
      form.resetFields();
    }
  }, [form, prevOpen, open]);
};
const ModalForm: React.FC<ModalFormProps> = ({ open, onCancel }) => {
  const [form] = Form.useForm();
  useResetFormOnCloseModal({
    form,
    open,
  });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal title="Basic Drawer" open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item name="name" label="User Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="age" label="User Age" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const showUserModal = () => {
    setOpen(true);
  };
  const hideUserModal = () => {
    setOpen(false);
  };
  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  return (
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        if (name === 'userForm') {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue('users') || [];
          basicForm.setFieldsValue({ users: [...users, values] });
          setOpen(false);
        }
      }}
    >
      <Form {...layout} name="basicForm" onFinish={onFinish} style={{ maxWidth: 600 }}>
        <Form.Item name="group" label="Group Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {/* Create a hidden field to make Form instance record this */}
        <Form.Item name="users" noStyle />
        <Form.Item
          label="User List"
          shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
        >
          {({ getFieldValue }) => {
            const users: UserType[] = getFieldValue('users') || [];
            return users.length ? (
              <Flex vertical gap={8}>
                {users.map((user) => (
                  <Space key={user.name}>
                    <Avatar icon={<UserOutlined />} />
                    {`${user.name} - ${user.age}`}
                  </Space>
                ))}
              </Flex>
            ) : (
              <Typography.Text className="ant-form-text" type="secondary">
                ( <SmileOutlined /> No user yet. )
              </Typography.Text>
            );
          }}
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
          <Button htmlType="button" style={{ margin: '0 8px' }} onClick={showUserModal}>
            Add User
          </Button>
        </Form.Item>
      </Form>
      <ModalForm open={open} onCancel={hideUserModal} />
    </Form.Provider>
  );
};
export default App;
```
### 内联登录栏
内联登录栏，常用在顶部导航栏中。

```tsx
import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);
  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  return (
    <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !clientReady ||
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 登录框
普通的登录框，可以容纳更多的元素。
> 🛎️ 想要 3 分钟实现登录表单？试试 [Pro Components](https://procomponents.ant.design/components/login-form)！

```tsx
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="">Register now!</a>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 注册新用户
用户填写必须的信息以注册新用户。

```tsx
import React, { useState } from 'react';
import type { CascaderProps, FormItemProps, FormProps } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
} from 'antd';
import type { DefaultOptionType } from 'antd/es/select';
interface FormCascaderOption {
  value: string;
  label: string;
  children?: FormCascaderOption[];
}
const residences: CascaderProps<FormCascaderOption>['options'] = [
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
const formItemLayout: FormProps = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout: FormItemProps = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 70 }}
        defaultValue={'86'}
        options={[
          { label: '+86', value: '86' },
          { label: '+87', value: '87' },
        ]}
      />
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{ width: 70 }}
        defaultValue={'USD'}
        options={[
          { label: '$', value: 'USD' },
          { label: '¥', value: 'CNY' },
        ]}
      />
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const onWebsiteChange = (value: string) => {
    setAutoCompleteResult(
      value ? ['.com', '.org', '.net'].map((domain) => `${value}${domain}`) : [],
    );
  };
  const websiteOptions = autoCompleteResult.map<DefaultOptionType>((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          { type: 'array', required: true, message: 'Please select your habitual residence!' },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { type: 'tel', message: 'The input is not valid phone number!' },
        ]}
      >
        {/* Demo only, real usage should wrap as custom component */}
        <Space.Compact block>
          {prefixSelector}
          <Input style={{ width: '100%' }} />
        </Space.Compact>
      </Form.Item>
      <Form.Item
        name="donation"
        label="Donation"
        rules={[{ required: true, message: 'Please input donation amount!' }]}
      >
        {/* Demo only, real usage should wrap as custom component */}
        <Space.Compact block>
          <InputNumber style={{ width: '100%' }} />
          {suffixSelector}
        </Space.Compact>
      </Form.Item>
      <Form.Item
        name="website"
        label="Website"
        rules={[{ required: true, message: 'Please input website!' }]}
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
          <Input />
        </AutoComplete>
      </Form.Item>
      <Form.Item
        name="intro"
        label="Intro"
        rules={[{ required: true, message: 'Please input Intro' }]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select
          placeholder="select your gender"
          defaultValue={'male'}
          options={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ]}
        />
      </Form.Item>
      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[{ required: true, message: 'Please input the captcha you got!' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Get captcha</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 高级搜索
三列栅格式的表单排列方式，常用于数据表格的高级搜索。
有部分定制的样式代码，由于输入标签长度不确定，需要根据具体情况自行调整。
> 🛎️ 想要 3 分钟实现？ 试试 ProForm 的[查询表单](https://procomponents.ant.design/components/form#%E6%9F%A5%E8%AF%A2%E7%AD%9B%E9%80%89)！

```tsx
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';
const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle: React.CSSProperties = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    const count = expand ? 10 : 6;
    const children: React.ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      children.push(
        <Col span={8} key={i}>
          {i % 3 !== 1 ? (
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          ) : (
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Select something!',
                },
              ]}
              initialValue="1"
            >
              <Select
                options={[
                  {
                    value: '1',
                    label:
                      'longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
                  },
                  {
                    value: '2',
                    label: '222',
                  },
                ]}
              />
            </Form.Item>
          )}
        </Col>,
      );
    }
    return children;
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form form={form} name="advanced_search" style={formStyle} onFinish={onFinish}>
      <Row gutter={24}>{getFields()}</Row>
      <div style={{ textAlign: 'end' }}>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Collapse
          </a>
        </Space>
      </div>
    </Form>
  );
};
const App: React.FC = () => {
  const { token } = theme.useToken();
  const listStyle: React.CSSProperties = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  return (
    <>
      <AdvancedSearchForm />
      <div style={listStyle}>Search Result List</div>
    </>
  );
};
export default App;
```
### 弹出层中的新建表单
当用户访问一个展示了某个列表的页面，想新建一项但又不想跳转页面时，可以用 Modal 弹出一个表单，用户填写必要信息后创建新的项。
> 🛎️ 想要 3 分钟实现？试试 ProForm 的 [Modal 表单](https://procomponents.ant.design/components/form#modal-%E8%A1%A8%E5%8D%95)！

```tsx
import React, { useState } from 'react';
import { Button, Form, Input, Modal, Radio } from 'antd';
interface Values {
  title?: string;
  description?: string;
  modifier?: string;
}
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<Values>();
  const [open, setOpen] = useState(false);
  const onCreate = (values: Values) => {
    console.log('Received values of form: ', values);
    setFormValues(values);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Collection
      </Button>
      <pre>{JSON.stringify(formValues, null, 2)}</pre>
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
        onCancel={() => setOpen(false)}
        destroyOnHidden
        modalRender={(dom) => (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            initialValues={{ modifier: 'public' }}
            clearOnDestroy
            onFinish={(values) => onCreate(values)}
          >
            {dom}
          </Form>
        )}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Modal>
    </>
  );
};
export default App;
```
### 时间类控件
时间类组件的 `value` 类型为 `dayjs` 对象，所以在提交服务器前需要预处理。

```tsx
import React from 'react';
import { Button, DatePicker, Form, TimePicker } from 'antd';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};
const rangeConfig = {
  rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
};
const onFinish = (fieldsValue: any) => {
  // Should format date value before submit.
  const rangeValue = fieldsValue['range-picker'];
  const rangeTimeValue = fieldsValue['range-time-picker'];
  const values = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
    'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
    'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
    'range-time-picker': [
      rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
    ],
    'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
  };
  console.log('Received values of form: ', values);
};
const App: React.FC = () => (
  <Form
    name="time_related_controls"
    {...formItemLayout}
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
  >
    <Form.Item name="date-picker" label="DatePicker" {...config}>
      <DatePicker />
    </Form.Item>
    <Form.Item name="date-time-picker" label="DatePicker[showTime]" {...config}>
      <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="month-picker" label="MonthPicker" {...config}>
      <DatePicker picker="month" />
    </Form.Item>
    <Form.Item name="range-picker" label="RangePicker" {...rangeConfig}>
      <RangePicker />
    </Form.Item>
    <Form.Item name="range-time-picker" label="RangePicker[showTime]" {...rangeConfig}>
      <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
    </Form.Item>
    <Form.Item name="time-picker" label="TimePicker" {...config}>
      <TimePicker />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### 自行处理表单数据
`Form` 具有自动收集数据并校验的功能，但如果您不需要这个功能，或者默认的行为无法满足业务需求，可以选择自行处理数据。

```tsx
import React, { useState } from 'react';
import type { InputNumberProps } from 'antd';
import { Form, InputNumber } from 'antd';
type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];
const validatePrimeNumber = (
  number: number,
): {
  validateStatus: ValidateStatus;
  errorMsg: string | null;
} => {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }
  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
};
const formItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 12 },
};
const tips =
  'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';
const App: React.FC = () => {
  const [number, setNumber] = useState<{
    value: number;
    validateStatus?: ValidateStatus;
    errorMsg?: string | null;
  }>({ value: 11 });
  const onNumberChange: InputNumberProps['onChange'] = (value) => {
    setNumber({
      ...validatePrimeNumber(value as number),
      value: value as number,
    });
  };
  return (
    <Form style={{ maxWidth: 600 }}>
      <Form.Item
        {...formItemLayout}
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <InputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 自定义校验
我们提供了 `validateStatus` `help` `hasFeedback` 等属性，你可以不通过 Form 自己定义校验的时机和内容。
1. `validateStatus`: 校验状态，可选 'success', 'warning', 'error', 'validating'。
2. `hasFeedback`：用于给输入框添加反馈图标。
3. `help`：设置校验文案。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TimePicker,
  TreeSelect,
} from 'antd';
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const App: React.FC = () => (
  <Form {...formItemLayout} style={{ maxWidth: 600 }}>
    <Form.Item
      label="Fail"
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error" />
    </Form.Item>
    <Form.Item label="Warning" validateStatus="warning">
      <Input placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
    </Form.Item>
    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="validating"
      help="The information is being validated..."
    >
      <Input placeholder="I'm the content is being validated" id="validating" />
    </Form.Item>
    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input placeholder="I'm the content" id="success" />
    </Form.Item>
    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input placeholder="Warning" id="warning2" />
    </Form.Item>
    <Form.Item
      label="Fail"
      hasFeedback
      validateStatus="error"
      help="Should be combination of numbers & alphabets"
    >
      <Input placeholder="unavailable choice" id="error2" />
    </Form.Item>
    <Form.Item label="Success" hasFeedback validateStatus="success">
      <DatePicker style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <TimePicker style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item label="Error" hasFeedback validateStatus="error">
      <DatePicker.RangePicker style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Select
        allowClear
        placeholder="I'm Select"
        defaultValue={'1'}
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
        ]}
      />
    </Form.Item>
    <Form.Item
      label="Validating"
      hasFeedback
      validateStatus="error"
      help="Something breaks the rule."
    >
      <Cascader placeholder="I'm Cascader" options={[{ value: 'xx', label: 'xx' }]} allowClear />
    </Form.Item>
    <Form.Item label="Warning" hasFeedback validateStatus="warning" help="Need to be checked">
      <TreeSelect
        placeholder="I'm TreeSelect"
        treeData={[{ value: 'xx', label: 'xx' }]}
        allowClear
      />
    </Form.Item>
    <Form.Item label="inline" style={{ marginBottom: 0 }}>
      <Form.Item
        validateStatus="error"
        help="Please select right date"
        style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
      >
        <DatePicker />
      </Form.Item>
      <span
        style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}
      >
        -
      </span>
      <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
        <DatePicker />
      </Form.Item>
    </Form.Item>
    <Form.Item label="Success" hasFeedback validateStatus="success">
      <InputNumber style={{ width: '100%' }} />
    </Form.Item>
    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input allowClear placeholder="with allowClear" />
    </Form.Item>
    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input.Password placeholder="with input password" />
    </Form.Item>
    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Input.Password allowClear placeholder="with input password and allowClear" />
    </Form.Item>
    <Form.Item label="Success" hasFeedback validateStatus="success">
      <Input.OTP />
    </Form.Item>
    <Form.Item label="Warning" hasFeedback validateStatus="warning">
      <Input.OTP />
    </Form.Item>
    <Form.Item label="Error" hasFeedback validateStatus="error">
      <Input.OTP />
    </Form.Item>
    <Form.Item label="Fail" validateStatus="error" hasFeedback>
      <Mentions />
    </Form.Item>
    <Form.Item label="Fail" validateStatus="error" hasFeedback help="Should have something">
      <Input.TextArea allowClear showCount />
    </Form.Item>
  </Form>
);
export default App;
```
### 动态校验规则
根据不同情况执行不同的校验规则。

```tsx
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick, form]);
  const onCheckboxChange = (e: { target: { checked: boolean } }) => {
    setCheckNick(e.target.checked);
  };
  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };
  return (
    <Form form={form} name="dynamic_rule" style={{ maxWidth: 600 }}>
      <Form.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[{ required: true, message: 'Please input your name' }]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="nickname"
        label="Nickname"
        rules={[{ required: checkNick, message: 'Please input your nickname' }]}
      >
        <Input placeholder="Please input your nickname" />
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Checkbox checked={checkNick} onChange={onCheckboxChange}>
          Nickname is required
        </Checkbox>
      </Form.Item>
      <Form.Item {...formTailLayout}>
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 校验与更新依赖
Form.Item 可以通过 `dependencies` 属性，设置关联字段。当关联字段的值发生变化时，会触发校验与更新。

```tsx
import React from 'react';
import { Alert, Form, Input, Typography } from 'antd';
const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      name="dependencies"
      autoComplete="off"
      style={{ maxWidth: 600 }}
      layout="vertical"
    >
      <Alert title=" Try modify `Password2` and then modify `Password`" type="info" showIcon />
      <Form.Item label="Password" name="password" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      {/* Field */}
      <Form.Item
        label="Confirm Password"
        name="password2"
        dependencies={['password']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>
      {/* Render Props */}
      <Form.Item noStyle dependencies={['password2']}>
        {() => (
          <Typography>
            <p>
              Only Update when <code>password2</code> updated:
            </p>
            <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
          </Typography>
        )}
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 滑动到错误字段
校验失败时/手动滚动到错误字段。

```tsx
import React from 'react';
import { Button, Flex, Form, Input, Select } from 'antd';
const App = () => {
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      scrollToFirstError={{ behavior: 'instant', block: 'end', focus: true }}
      style={{ paddingBlock: 32 }}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item label={null}>
        <Button onClick={() => form.scrollToField('bio')}>Scroll to Bio</Button>
      </Form.Item>
      <Form.Item name="username" label="UserName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Occupation" name="occupation">
        <Select
          options={[
            { label: 'Designer', value: 'designer' },
            { label: 'Developer', value: 'developer' },
            { label: 'Product Manager', value: 'product-manager' },
          ]}
        />
      </Form.Item>
      <Form.Item name="motto" label="Motto">
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item name="bio" label="Bio" rules={[{ required: true }]}>
        <Input.TextArea rows={6} />
      </Form.Item>
      <Form.Item label={null}>
        <Flex gap="small">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button danger onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 校验其他组件
以上演示没有出现的表单控件对应的校验演示。

```tsx
import React from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Col,
  ColorPicker,
  Form,
  InputNumber,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Upload,
} from 'antd';
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};
const App: React.FC = () => (
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}
    initialValues={{
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
      'color-picker': null,
    }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Plain Text">
      <span className="ant-form-text">China</span>
    </Form.Item>
    <Form.Item
      name="select"
      label="Select"
      hasFeedback
      rules={[{ required: true, message: 'Please select your country!' }]}
    >
      <Select
        placeholder="Please select a country"
        options={[
          { label: 'China', value: 'china' },
          { label: 'U.S.A', value: 'usa' },
        ]}
      />
    </Form.Item>
    <Form.Item
      name="select-multiple"
      label="Select[multiple]"
      rules={[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]}
    >
      <Select
        mode="multiple"
        placeholder="Please select favourite colors"
        options={[
          { label: 'Red', value: 'red' },
          { label: 'Green', value: 'green' },
          { label: 'Blue', value: 'blue' },
        ]}
      />
    </Form.Item>
    <Form.Item label="InputNumber">
      <Form.Item name="input-number" noStyle>
        <InputNumber min={1} max={10} />
      </Form.Item>
      <span className="ant-form-text" style={{ marginInlineStart: 8 }}>
        machines
      </span>
    </Form.Item>
    <Form.Item name="switch" label="Switch" valuePropName="checked">
      <Switch />
    </Form.Item>
    <Form.Item name="slider" label="Slider">
      <Slider
        marks={{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }}
      />
    </Form.Item>
    <Form.Item name="radio-group" label="Radio.Group">
      <Radio.Group>
        <Radio value="a">item 1</Radio>
        <Radio value="b">item 2</Radio>
        <Radio value="c">item 3</Radio>
      </Radio.Group>
    </Form.Item>
    <Form.Item
      name="radio-button"
      label="Radio.Button"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value="a">item 1</Radio.Button>
        <Radio.Button value="b">item 2</Radio.Button>
        <Radio.Button value="c">item 3</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item name="checkbox-group" label="Checkbox.Group">
      <Checkbox.Group>
        <Row>
          <Col span={8}>
            <Checkbox value="A" style={{ lineHeight: '32px' }}>
              A
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B" style={{ lineHeight: '32px' }} disabled>
              B
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C" style={{ lineHeight: '32px' }}>
              C
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D" style={{ lineHeight: '32px' }}>
              D
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E" style={{ lineHeight: '32px' }}>
              E
            </Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="F" style={{ lineHeight: '32px' }}>
              F
            </Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>
    <Form.Item name="rate" label="Rate">
      <Rate />
    </Form.Item>
    <Form.Item
      name="upload"
      label="Upload"
      valuePropName="fileList"
      getValueFromEvent={normFile}
      extra="longgggggggggggggggggggggggggggggggggg"
    >
      <Upload name="logo" action="/upload.do" listType="picture">
        <Button icon={<UploadOutlined />}>Click to upload</Button>
      </Upload>
    </Form.Item>
    <Form.Item label="Dragger">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single or bulk upload.</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
    <Form.Item
      name="color-picker"
      label="ColorPicker"
      rules={[{ required: true, message: 'color is required!' }]}
    >
      <ColorPicker />
    </Form.Item>
    <Form.Item label={null}>
      <Space>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="reset">reset</Button>
      </Space>
    </Form.Item>
  </Form>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 Form 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { Button, Form, Input, Space } from 'antd';
import type { FormProps } from 'antd';
import { createStyles } from 'antd-style';
const useStyles = createStyles(({ token }) => ({
  root: {
    padding: token.padding,
    maxWidth: 800,
    marginTop: 32,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
}));
const stylesObject: FormProps['styles'] = {
  label: {
    textAlign: 'end',
    color: '#333',
    fontWeight: 500,
  },
  content: {
    paddingInlineStart: 12,
  },
};
const stylesFunction: FormProps['styles'] = (info) => {
  if (info.props.variant === 'filled') {
    return {
      root: {
        border: '1px solid #1677FF',
      },
      label: {
        textAlign: 'end',
        color: '#1677FF',
      },
      content: {
        paddingInlineStart: 12,
      },
    } satisfies FormProps['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  const sharedProps: FormProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    autoComplete: 'off',
    classNames,
  };
  const sharedFormContent = (
    <>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please enter username!' }]}
      >
        <Input placeholder="Please enter username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter email!' }]}
      >
        <Input placeholder="Please enter email" />
      </Form.Item>
      <Form.Item label={null}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Space>
      </Form.Item>
    </>
  );
  return (
    <>
      <Form {...sharedProps} styles={stylesObject}>
        {sharedFormContent}
      </Form>
      <Form {...sharedProps} styles={stylesFunction} variant="filled">
        {sharedFormContent}
      </Form>
    </>
  );
};
export default App;
```
### getValueProps + normalize
配合 `getValueProps` 和 `normalize`，可以转换 `value` 的格式，如将时间戳转成 `dayjs` 对象再传给 `DatePicker`。

```tsx
import React from 'react';
import type { FormProps } from 'antd';
import { Button, DatePicker, Form } from 'antd';
import dayjs from 'dayjs';
const dateTimestamp = dayjs('2024-01-01').valueOf();
type FieldType = {
  date?: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};
const App: React.FC = () => (
  <Form
    name="getValueProps"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ date: dateTimestamp }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Date"
      name="date"
      rules={[{ required: true }]}
      getValueProps={(value) => ({ value: value && dayjs(Number(value)) })}
      normalize={(value) => value && `${dayjs(value).valueOf()}`}
    >
      <DatePicker />
    </Form.Item>
    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
```
### Disabled Input Debug
Test disabled Input with validate state

```tsx
import React from 'react';
import { Form, Input } from 'antd';
const App: React.FC = () => (
  <Form style={{ maxWidth: 600 }}>
    <Form.Item label="Normal0">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail0" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled0" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled value="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal1">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail1" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" value="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled1" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled value="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal2">
      <Input placeholder="unavailable choice" addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="Fail2" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="FailDisabled2" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled addonBefore="Buggy!" />
    </Form.Item>
    <Form.Item label="Normal3">
      <Input placeholder="unavailable choice" prefix="人民币" value="50" />
    </Form.Item>
    <Form.Item label="Fail3" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" prefix="人民币" value="50" />
    </Form.Item>
    <Form.Item label="FailDisabled3" validateStatus="error" help="Buggy!">
      <Input placeholder="unavailable choice" disabled prefix="人民币" value="50" />
    </Form.Item>
  </Form>
);
export default App;
```
### 测试 label 省略
`label` 中使用 `<Typography.Text ellipsis>` 时应该显示 `...`。

```tsx
import React from 'react';
import { Form, Input, Typography } from 'antd';
const App: React.FC = () => (
  <Form
    name="label-ellipsis"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtextlongtextlongtextlongtextlongtextlongtextlongtext
        </Typography.Text>
      }
      name="username"
    >
      <Input />
    </Form.Item>
    <Form.Item
      label={
        <Typography.Text ellipsis>
          longtext longtext longtext longtext longtext longtext longtext
        </Typography.Text>
      }
      name="password"
    >
      <Input.Password />
    </Form.Item>
  </Form>
);
export default App;
```
### 测试特殊 col 24 用法
See issue [#32980](https://github.com/ant-design/ant-design/issues/32980).

```tsx
import React from 'react';
import { Button, Divider, Form, Input, Select } from 'antd';
const sharedItem = (
  <Form.Item
    label={
      <a
        href="https://github.com/ant-design/ant-design/issues/36459"
        target="_blank"
        rel="noreferrer"
      >
        #36459
      </a>
    }
    initialValue={['bamboo']}
    name="select"
    style={{ boxShadow: '0 0 3px red' }}
  >
    <Select
      style={{ width: '70%' }}
      mode="multiple"
      options={[
        { label: 'Bamboo', value: 'bamboo' },
        { label: 'Little', value: 'little' },
        { label: 'Light', value: 'light' },
      ]}
    />
  </Form.Item>
);
const App: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        name="col-24-debug"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        {sharedItem}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Form
        name="responsive"
        labelCol={{ sm: 24, xl: 24 }}
        wrapperCol={{ sm: 24, xl: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Divider />
      <Form layout="vertical">
        {sharedItem}
        <Form.Item label="col12" name="col12" labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
          <Input />
        </Form.Item>
      </Form>
    </>
  );
};
export default App;
```
### 引用字段
请优先使用 `ref`！

```tsx
import React from 'react';
import type { InputRef } from 'antd';
import { Button, Form, Input } from 'antd';
const App: React.FC = () => {
  const [form] = Form.useForm();
  const ref = React.useRef<InputRef>(null);
  return (
    <Form form={form} initialValues={{ list: ['light'] }} style={{ maxWidth: 600 }}>
      <Form.Item name="test" label="test">
        <Input ref={ref} />
      </Form.Item>
      <Form.List name="list">
        {(fields) =>
          fields.map((field) => (
            <Form.Item {...field} key={field.key}>
              <Input ref={ref} />
            </Form.Item>
          ))
        }
      </Form.List>
      <Button
        htmlType="button"
        onClick={() => {
          form.getFieldInstance('test').focus();
        }}
      >
        Focus Form.Item
      </Button>
      <Button
        onClick={() => {
          form.getFieldInstance(['list', 0]).focus();
        }}
      >
        Focus Form.List
      </Button>
    </Form>
  );
};
export default App;
```
### Custom feedback icons
自定义反馈图标可以通过 `hasFeedback={{ icons: ... }}` 或 `<Form FeedbackIcons={icons}>` 传递（`Form.Item` 必须具有 `hasFeedback` 属性）。

```tsx
import React from 'react';
import { AlertFilled, CloseSquareFilled } from '@ant-design/icons';
import { Button, Form, Input, Mentions, Tooltip } from 'antd';
import { createStaticStyles } from 'antd-style';
import uniqueId from 'lodash/uniqueId';
const classNames = createStaticStyles(({ css }) => ({
  'custom-feedback-icons': css`
    .ant-form-item-feedback-icon {
      pointer-events: all;
    }
  `,
}));
const App: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form
      name="custom-feedback-icons"
      form={form}
      style={{ maxWidth: 600 }}
      feedbackIcons={({ errors }) => ({
        error: (
          <Tooltip
            key="tooltipKey"
            title={errors?.map((error) => <div key={uniqueId()}>{error}</div>)}
            color="red"
          >
            <CloseSquareFilled />
          </Tooltip>
        ),
      })}
    >
      <Form.Item
        name="custom-feedback-test-item"
        label="Test"
        className={classNames['custom-feedback-icons']}
        rules={[{ required: true, type: 'email' }, { min: 10 }]}
        help=""
        hasFeedback
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="custom-feedback-test-item2"
        label="Test"
        className={classNames['custom-feedback-icons']}
        rules={[{ required: true, type: 'email' }, { min: 10 }]}
        help=""
        hasFeedback={{
          icons: ({ errors }) => ({
            error: (
              <Tooltip
                key="tooltipKey"
                title={errors?.map((error) => <div key={uniqueId()}>{error}</div>)}
                color="pink"
              >
                <AlertFilled />
              </Tooltip>
            ),
            success: false,
          }),
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="custom-feedback-test-item3"
        label="Test"
        className={classNames['custom-feedback-icons']}
        hasFeedback
        validateStatus="success"
        initialValue="@mention1"
      >
        <Mentions
          allowClear
          options={[
            {
              value: 'mention1',
              label: 'mention1',
            },
            {
              value: 'mention2',
              label: 'mention2',
            },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, Form, Input } from 'antd';
const App: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Form: {
          labelRequiredMarkColor: 'pink',
          labelColor: 'green',
          labelFontSize: 16,
          labelHeight: 34,
          labelColonMarginInlineStart: 4,
          labelColonMarginInlineEnd: 12,
          itemMarginBottom: 18,
          inlineItemMarginBottom: 18,
        },
      },
    }}
  >
    <Form
      name="component-token"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  </ConfigProvider>
);
export default App;
```
