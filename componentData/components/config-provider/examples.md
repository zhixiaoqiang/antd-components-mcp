## ConfigProvider 组件示例
### 国际化
此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。

```tsx
import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import type {
  ConfigProviderProps,
  RadioChangeEvent,
  TableProps,
  TourProps,
  UploadFile,
} from 'antd';
import {
  Button,
  Calendar,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Image,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Popconfirm,
  QRCode,
  Radio,
  Select,
  Space,
  Table,
  theme,
  TimePicker,
  Tour,
  Transfer,
  Upload,
} from 'antd';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
type Locale = ConfigProviderProps['locale'];
dayjs.locale('en');
const { RangePicker } = DatePicker;
const columns: TableProps['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [{ text: 'filter1', value: 'filter1' }],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
const Page: React.FC = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRefs = React.useRef<HTMLElement[]>([]);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const info = () => {
    Modal.info({
      title: 'some info',
      content: 'some info',
    });
  };
  const confirm = () => {
    Modal.confirm({
      title: 'some info',
      content: 'some info',
    });
  };
  const steps: TourProps['steps'] = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      target: () => tourRefs.current[0],
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => tourRefs.current[1],
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => tourRefs.current[2],
    },
  ];
  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'error',
    },
  ];
  return (
    <Space
      vertical
      size={[0, 16]}
      style={{
        width: '100%',
        paddingTop: token.padding,
        borderTop: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
      }}
    >
      <Pagination defaultCurrent={1} total={50} showSizeChanger />
      <Space wrap>
        <Select
          showSearch
          style={{ width: 200 }}
          options={[
            { label: 'jack', value: 'jack' },
            { label: 'lucy', value: 'lucy' },
          ]}
        />
        <DatePicker />
        <TimePicker />
        <RangePicker />
      </Space>
      <Space wrap>
        <Button type="primary" onClick={showModal}>
          Show Modal
        </Button>
        <Button onClick={info}>Show info</Button>
        <Button onClick={confirm}>Show confirm</Button>
        <Popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </Popconfirm>
      </Space>
      <Transfer dataSource={[]} showSearch targetKeys={[]} />
      <div
        style={{
          width: 320,
          border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
          borderRadius: token.borderRadiusLG,
        }}
      >
        <Calendar fullscreen={false} value={dayjs()} />
      </div>
      <Form name="basic" autoComplete="off" labelCol={{ sm: { span: 4 } }} wrapperCol={{ span: 6 }}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input width={200} />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ type: 'number', min: 0, max: 99 }]}
          initialValue={100}
        >
          <InputNumber width={200} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 2, span: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table dataSource={[]} columns={columns} />
      <Modal title="Locale Modal" open={open} onCancel={hideModal}>
        <p>Locale Modal</p>
      </Modal>
      <Space wrap size={80}>
        <QRCode
          value="https://ant.design/"
          status="expired"
          onRefresh={() => console.log('refresh')}
        />
        <Image
          width={160}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Space>
      <Upload listType="picture-card" fileList={fileList} />
      <Divider titlePlacement="start">Tour</Divider>
      <Button type="primary" onClick={() => setTourOpen(true)}>
        Begin Tour
      </Button>
      <Space>
        <Button
          ref={(node) => {
            node && tourRefs.current.splice(0, 0, node);
          }}
        >
          {' '}
          Upload
        </Button>
        <Button
          ref={(node) => {
            node && tourRefs.current.splice(1, 0, node);
          }}
          type="primary"
        >
          Save
        </Button>
        <Button
          ref={(node) => {
            node && tourRefs.current.splice(2, 0, node);
          }}
          icon={<EllipsisOutlined />}
        />
      </Space>
      <Tour open={tourOpen} steps={steps} onClose={() => setTourOpen(false)} />
    </Space>
  );
};
const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>(enUS);
  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
    if (!localeValue) {
      dayjs.locale('en');
    } else {
      dayjs.locale('zh-cn');
    }
  };
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>Change locale of components:</span>
        <Radio.Group value={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={enUS}>
            English
          </Radio.Button>
          <Radio.Button key="cn" value={zhCN}>
            中文
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale}>
        <Page />
      </ConfigProvider>
    </>
  );
};
export default App;
```
### 方向
这里列出了支持 `rtl` 方向的组件，您可以在演示中切换方向。

```tsx
import React, { useState } from 'react';
import {
  DownloadOutlined,
  LeftOutlined,
  MinusOutlined,
  PlusOutlined,
  RightOutlined,
  SearchOutlined as SearchIcon,
  SmileOutlined,
} from '@ant-design/icons';
import type { ConfigProviderProps, RadioChangeEvent } from 'antd';
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Input,
  InputNumber,
  Modal,
  Pagination,
  Radio,
  Rate,
  Row,
  Select,
  Space,
  Steps,
  Switch,
  Tree,
  TreeSelect,
} from 'antd';
import { createStyles } from 'antd-style';
type DirectionType = ConfigProviderProps['direction'];
const useStyles = createStyles((props) => {
  const { css } = props;
  return {
    headerExample: css`
      display: inline-block;
      width: 42px;
      height: 42px;
      vertical-align: middle;
      background-color: #eee;
      border-radius: 4px;
    `,
  };
});
const { Search } = Input;
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];
const treeSelectData = [
  {
    title: 'parent 1',
    value: '0-1',
    children: [
      {
        title: 'parent 1-0',
        value: '0-1-1',
        children: [
          { title: 'my leaf', value: 'random' },
          { title: 'your leaf', value: 'random1' },
        ],
      },
      {
        title: 'parent 1-1',
        value: 'random2',
        children: [{ title: <b style={{ color: '#08c' }}>sss</b>, value: 'random3' }],
      },
    ],
  },
];
const cascaderOptions = [
  {
    value: 'tehran',
    label: 'تهران',
    children: [
      {
        value: 'tehran-c',
        label: 'تهران',
        children: [
          {
            value: 'saadat-abad',
            label: 'سعادت آباد',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: 'اردبیل',
    children: [
      {
        value: 'ardabil-c',
        label: 'اردبیل',
        children: [
          {
            value: 'pirmadar',
            label: 'پیرمادر',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: 'گیلان',
    children: [
      {
        value: 'rasht',
        label: 'رشت',
        children: [
          {
            value: 'district-3',
            label: 'منطقه ۳',
          },
        ],
      },
    ],
  },
];
type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
const Page: React.FC<{ placement: Placement }> = (props) => {
  const { placement } = props;
  const { styles } = useStyles();
  const [currentStep, setCurrentStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(5);
  const [showBadge, setShowBadge] = useState(true);
  const selectBefore = (
    <Select
      defaultValue="Http://"
      style={{ width: 90 }}
      options={[
        { label: 'Http://', value: 'Http://' },
        { label: 'Https://', value: 'Https://' },
      ]}
    />
  );
  const selectAfter = (
    <Select
      defaultValue=".com"
      style={{ width: 80 }}
      options={[
        { label: '.com', value: '.com' },
        { label: '.jp', value: '.jp' },
        { label: '.cn', value: '.cn' },
        { label: '.org', value: '.org' },
      ]}
    />
  );
  // ==== Cascader ====
  const cascaderFilter = (inputValue: string, path: { label: string }[]) =>
    path.some((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()));
  const onCascaderChange = (value: any) => {
    console.log(value);
  };
  // ==== End Cascader ====
  // ==== Modal ====
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = () => {
    setModalOpen(false);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  // ==== End Modal ====
  const onStepsChange = (newCurrentStep: number) => {
    console.log('onChange:', newCurrentStep);
    setCurrentStep(newCurrentStep);
  };
  // ==== Badge ====
  const increaseBadge = () => {
    setBadgeCount(badgeCount + 1);
  };
  const declineBadge = () => {
    setBadgeCount((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };
  const onChangeBadge = (checked: boolean) => {
    setShowBadge(checked);
  };
  // ==== End Badge ====
  return (
    <Flex className="direction-components" vertical gap="large">
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Cascader example</Divider>
          <Cascader
            suffixIcon={<SearchIcon />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="یک مورد انتخاب کنید"
            placement={placement}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;With search:&nbsp;&nbsp;
          <Cascader
            suffixIcon={<SmileOutlined />}
            options={cascaderOptions}
            onChange={onCascaderChange}
            placeholder="Select an item"
            placement={placement}
            showSearch={{ filter: cascaderFilter }}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Divider titlePlacement="start">Switch example</Divider>
          &nbsp;&nbsp;
          <Switch defaultChecked />
          &nbsp;&nbsp;
          <Switch loading defaultChecked />
          &nbsp;&nbsp;
          <Switch size="small" loading />
        </Col>
        <Col span={12}>
          <Divider titlePlacement="start">Radio Group example</Divider>
          <Radio.Group defaultValue="c" buttonStyle="solid">
            <Radio.Button value="a">تهران</Radio.Button>
            <Radio.Button value="b" disabled>
              اصفهان
            </Radio.Button>
            <Radio.Button value="c">فارس</Radio.Button>
            <Radio.Button value="d">خوزستان</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Divider titlePlacement="start">Button example</Divider>
          <Flex wrap gap="small">
            <Button type="primary" icon={<DownloadOutlined />} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download
            </Button>
            <Space.Compact>
              <Button type="primary" icon={<LeftOutlined />}>
                Backward
              </Button>
              <Button type="primary" icon={<RightOutlined />} iconPlacement="end">
                Forward
              </Button>
            </Space.Compact>
            <Button type="primary" loading>
              Loading
            </Button>
            <Button type="primary" size="small" loading>
              Loading
            </Button>
          </Flex>
        </Col>
        <Col span={12}>
          <Divider titlePlacement="start">Tree example</Divider>
          <Tree
            showLine
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            treeData={treeData}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Input (Input Group) example</Divider>
          <Flex vertical gap="large">
            <Flex vertical gap="middle">
              <Row gutter={8}>
                <Col span={5}>
                  <Input size="large" defaultValue="0571" />
                </Col>
                <Col span={8}>
                  <Input size="large" defaultValue="26888888" />
                </Col>
              </Row>
              <Space.Compact>
                <Input style={{ width: '20%' }} defaultValue="0571" />
                <Input style={{ width: '30%' }} defaultValue="26888888" />
              </Space.Compact>
              <Space.Compact>
                <Select
                  defaultValue="Option1"
                  options={[
                    { label: 'Option1', value: 'Option1' },
                    { label: 'Option2', value: 'Option2' },
                  ]}
                />
                <Input style={{ width: '50%' }} defaultValue="input content" />
                <InputNumber />
              </Space.Compact>
              <Search placeholder="input search text" enterButton="Search" size="large" />
              <Space.Compact>
                {selectBefore}
                <Input defaultValue="mysite" />
                {selectAfter}
              </Space.Compact>
            </Flex>
            <Row>
              <Col span={12}>
                <Divider titlePlacement="start">Select example</Divider>
                <Space wrap>
                  <Select
                    mode="multiple"
                    defaultValue="مورچه"
                    style={{ width: 120 }}
                    options={[
                      { label: 'jack', value: 'jack' },
                      { label: 'مورچه', value: 'مورچه' },
                      { label: 'disabled', value: 'disabled', disabled: true },
                      { label: 'yiminghe', value: 'Yiminghe' },
                    ]}
                  />
                  <Select
                    disabled
                    defaultValue="مورچه"
                    style={{ width: 120 }}
                    options={[{ label: 'مورچه', value: 'مورچه' }]}
                  />
                  <Select
                    loading
                    defaultValue="مورچه"
                    style={{ width: 120 }}
                    options={[{ label: 'مورچه', value: 'مورچه' }]}
                  />
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    options={[
                      { label: 'jack', value: 'jack' },
                      { label: 'سعید', value: 'سعید' },
                      { label: 'Tom', value: 'tom' },
                    ]}
                  />
                </Space>
              </Col>
              <Col span={12}>
                <Divider titlePlacement="start">TreeSelect example</Divider>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  styles={{
                    popup: {
                      root: { maxHeight: 400, overflow: 'auto' },
                    },
                  }}
                  placeholder="Please select"
                  allowClear
                  treeDefaultExpandAll
                  treeData={treeSelectData}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider titlePlacement="start">Modal example</Divider>
                <Button type="primary" onClick={showModal}>
                  Open Modal
                </Button>
                <Modal title="پنچره ساده" open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </Modal>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider titlePlacement="start">Steps example</Divider>
                <Flex vertical gap="middle">
                  <Steps
                    progressDot
                    current={currentStep}
                    items={[
                      {
                        title: 'Finished',
                        description: 'This is a description.',
                      },
                      {
                        title: 'In Progress',
                        description: 'This is a description.',
                      },
                      {
                        title: 'Waiting',
                        description: 'This is a description.',
                      },
                    ]}
                  />
                  <Steps
                    current={currentStep}
                    onChange={onStepsChange}
                    items={[
                      {
                        title: 'Step 1',
                        description: 'This is a description.',
                      },
                      {
                        title: 'Step 2',
                        description: 'This is a description.',
                      },
                      {
                        title: 'Step 3',
                        description: 'This is a description.',
                      },
                    ]}
                  />
                </Flex>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Divider titlePlacement="start">Rate example</Divider>
                <Flex vertical gap="small">
                  <Rate defaultValue={2.5} />
                  <div>
                    <strong>* Note:</strong> Half star not implemented in RTL direction, it will be
                    supported after{' '}
                    <a
                      href="https://github.com/react-component/rate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      rc-rate
                    </a>{' '}
                    implement rtl support.
                  </div>
                </Flex>
              </Col>
              <Col span={12}>
                <Divider titlePlacement="start">Badge example</Divider>
                <Flex align="center" gap="middle">
                  <Badge count={badgeCount}>
                    <a href="#" className={styles.headerExample} />
                  </Badge>
                  <Space.Compact>
                    <Button icon={<MinusOutlined />} onClick={declineBadge} />
                    <Button icon={<PlusOutlined />} onClick={increaseBadge} />
                  </Space.Compact>
                </Flex>
                <Flex align="center" gap="middle" style={{ marginTop: 12 }}>
                  <Badge dot={showBadge}>
                    <a href="#" className={styles.headerExample} />
                  </Badge>
                  <Switch onChange={onChangeBadge} checked={showBadge} />
                </Flex>
              </Col>
            </Row>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Pagination example</Divider>
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider titlePlacement="start">Grid System example</Divider>
          <div className="grid-demo">
            <div className="code-box-demo">
              <p>
                <strong>* Note:</strong> Every calculation in RTL grid system is from right side
                (offset, push, etc.)
              </p>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>
                  col-8
                </Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
                <Col span={6} offset={6}>
                  col-6 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  col-12 col-offset-6
                </Col>
              </Row>
              <Row>
                <Col span={18} push={6}>
                  col-18 col-push-6
                </Col>
                <Col span={6} pull={18}>
                  col-6 col-pull-18
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Flex>
  );
};
const App: React.FC = () => {
  const [direction, setDirection] = useState<DirectionType>('ltr');
  const [placement, setPlacement] = useState<Placement>('bottomLeft');
  const changeDirection = (e: RadioChangeEvent) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
    setPlacement(directionValue === 'rtl' ? 'bottomRight' : 'bottomLeft');
  };
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginInlineEnd: 16 }}>Change direction of components:</span>
        <Radio.Group defaultValue="ltr" onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
          </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
          </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider direction={direction}>
        <Page placement={placement} />
      </ConfigProvider>
    </>
  );
};
export default App;
```
### 组件尺寸
修改默认组件尺寸。

```tsx
import React, { useState } from 'react';
import {
  Button,
  Card,
  ConfigProvider,
  DatePicker,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Table,
  Tabs,
} from 'antd';
import type { ConfigProviderProps } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
const App: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  return (
    <>
      <Radio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="medium">Medium</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <Space size={[0, 16]} style={{ width: '100%' }} vertical>
          <Input />
          <Tabs
            defaultActiveKey="1"
            items={[
              {
                label: 'Tab 1',
                key: '1',
                children: 'Content of Tab Pane 1',
              },
              {
                label: 'Tab 2',
                key: '2',
                children: 'Content of Tab Pane 2',
              },
              {
                label: 'Tab 3',
                key: '3',
                children: 'Content of Tab Pane 3',
              },
            ]}
          />
          <Input.Search allowClear />
          <Input.TextArea allowClear />
          <Select defaultValue="demo" options={[{ value: 'demo' }]} />
          <DatePicker />
          <DatePicker.RangePicker />
          <Button>Button</Button>
          <Card title="Card">
            <Table
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Age', dataIndex: 'age' },
              ]}
              dataSource={[
                { key: '1', name: 'John Brown', age: 32 },
                { key: '2', name: 'Jim Green', age: 42 },
                { key: '3', name: 'Joe Black', age: 32 },
              ]}
            />
          </Card>
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
```
### 主题
通过 `theme` 修改主题。

```tsx
import React from 'react';
import {
  Button,
  ColorPicker,
  ConfigProvider,
  Divider,
  Form,
  Input,
  InputNumber,
  Space,
  Switch,
} from 'antd';
import type { ColorPickerProps, GetProp } from 'antd';
type Color = Extract<GetProp<ColorPickerProps, 'value'>, { cleared: any }>;
type ThemeData = {
  borderRadius: number;
  colorPrimary: string;
  Button?: {
    colorPrimary: string;
    algorithm?: boolean;
  };
};
const defaultData: ThemeData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  Button: {
    colorPrimary: '#00B96B',
  },
};
export default () => {
  const [form] = Form.useForm();
  const [data, setData] = React.useState<ThemeData>(defaultData);
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: data.colorPrimary,
            borderRadius: data.borderRadius,
          },
          components: {
            Button: {
              colorPrimary: data.Button?.colorPrimary,
              algorithm: data.Button?.algorithm,
            },
          },
        }}
      >
        <Space>
          <Input />
          <Button type="primary">Button</Button>
        </Space>
      </ConfigProvider>
      <Divider />
      <Form
        form={form}
        onValuesChange={(_, allValues) => {
          setData({
            ...allValues,
          });
        }}
        name="theme"
        initialValues={defaultData}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item
          name="colorPrimary"
          label="Primary Color"
          trigger="onChangeComplete"
          getValueFromEvent={(color: Color) => color.toHexString()}
        >
          <ColorPicker />
        </Form.Item>
        <Form.Item name="borderRadius" label="Border Radius">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Button">
          <Form.Item name={['Button', 'algorithm']} valuePropName="checked" label="algorithm">
            <Switch />
          </Form.Item>
          <Form.Item
            name={['Button', 'colorPrimary']}
            label="Primary Color"
            trigger="onChangeComplete"
            getValueFromEvent={(color: Color) => color.toHexString()}
          >
            <ColorPicker />
          </Form.Item>
        </Form.Item>
        <Form.Item name="submit" wrapperCol={{ offset: 4, span: 20 }}>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
```
### 自定义波纹
波纹效果带来了灵动性，可以通过 `component` 判断来自哪个组件。你也可以使用 [`@ant-design/happy-work-theme`](https://github.com/ant-design/happy-work-theme) 提供的 HappyProvider 实现动态波纹效果。

```tsx
import React from 'react';
import { HappyProvider } from '@ant-design/happy-work-theme';
import { Button, ConfigProvider, Flex } from 'antd';
import type { ConfigProviderProps, GetProp } from 'antd';
type WaveConfig = GetProp<ConfigProviderProps, 'wave'>;
// Prepare effect holder
const createHolder = (node: HTMLElement) => {
  const { borderWidth } = getComputedStyle(node);
  const borderWidthNum = Number.parseInt(borderWidth, 10);
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.inset = `-${borderWidthNum}px`;
  div.style.borderRadius = 'inherit';
  div.style.background = 'transparent';
  div.style.zIndex = '999';
  div.style.pointerEvents = 'none';
  div.style.overflow = 'hidden';
  node.appendChild(div);
  return div;
};
const createDot = (holder: HTMLElement, color: string, left: number, top: number, size = 0) => {
  const dot = document.createElement('div');
  dot.style.position = 'absolute';
  dot.style.insetInlineStart = `${left}px`;
  dot.style.top = `${top}px`;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.borderRadius = '50%';
  dot.style.background = color;
  dot.style.transform = 'translate3d(-50%, -50%, 0)';
  dot.style.transition = 'all 1s ease-out';
  holder.appendChild(dot);
  return dot;
};
// Inset Effect
const showInsetEffect: WaveConfig['showEffect'] = (node, { event, component }) => {
  if (component !== 'Button') {
    return;
  }
  const holder = createHolder(node);
  const rect = holder.getBoundingClientRect();
  const left = event.clientX - rect.left;
  const top = event.clientY - rect.top;
  const dot = createDot(holder, 'rgba(255, 255, 255, 0.65)', left, top);
  // Motion
  requestAnimationFrame(() => {
    dot.ontransitionend = () => {
      holder.remove();
    };
    dot.style.width = '200px';
    dot.style.height = '200px';
    dot.style.opacity = '0';
  });
};
// Shake Effect
const showShakeEffect: WaveConfig['showEffect'] = (node, { component }) => {
  if (component !== 'Button') {
    return;
  }
  const seq = [0, -15, 15, -5, 5, 0];
  const itv = 10;
  let steps = 0;
  const loop = () => {
    cancelAnimationFrame((node as any).effectTimeout);
    (node as any).effectTimeout = requestAnimationFrame(() => {
      const currentStep = Math.floor(steps / itv);
      const current = seq[currentStep];
      const next = seq[currentStep + 1];
      if (next === undefined || next === null) {
        node.style.transform = '';
        node.style.transition = '';
        return;
      }
      // Trans from current to next by itv
      const angle = current + ((next - current) / itv) * (steps % itv);
      node.style.transform = `rotate(${angle}deg)`;
      node.style.transition = 'none';
      steps += 1;
      loop();
    });
  };
  loop();
};
// Component
const Wrapper: React.FC<WaveConfig & { name: string }> = ({ name, ...wave }) => (
  <ConfigProvider wave={wave}>
    <Button type="primary">{name}</Button>
  </ConfigProvider>
);
const Demo: React.FC = () => (
  <Flex gap="large" wrap>
    <Wrapper name="Disabled" disabled />
    <Wrapper name="Default" />
    <Wrapper name="Inset" showEffect={showInsetEffect} />
    <Wrapper name="Shake" showEffect={showShakeEffect} />
    <HappyProvider>
      <Button type="primary">Happy Work</Button>
    </HappyProvider>
  </Flex>
);
export default Demo;
```
### 静态方法
使用 `holderRender` 给 `message` 、`modal` 、`notification` 静态方法设置 `Provider`

```tsx
import React, { useContext, useLayoutEffect } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { App, Button, ConfigProvider, message, Modal, notification, Space } from 'antd';
const Demo: React.FC = () => {
  const { locale, theme } = useContext(ConfigProvider.ConfigContext);
  useLayoutEffect(() => {
    ConfigProvider.config({
      holderRender: (children) => (
        <StyleProvider hashPriority="high">
          <ConfigProvider componentSize="small" locale={locale} theme={theme}>
            <App message={{ maxCount: 1 }} notification={{ maxCount: 1 }}>
              {children}
            </App>
          </ConfigProvider>
        </StyleProvider>
      ),
    });
  }, [locale, theme]);
  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            message.info('This is a normal message');
          }}
        >
          message
        </Button>
        <Button
          type="primary"
          onClick={() => {
            notification.open({
              title: 'Notification Title',
              description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
          }}
        >
          notification
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: 'Do you want to delete these items?',
              icon: <ExclamationCircleFilled />,
              content: 'Some descriptions',
            });
          }}
        >
          Modal
        </Button>
      </Space>
    </div>
  );
};
export default Demo;
```
### 前缀
修改组件和图标前缀。

```tsx
import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Checkbox, ConfigProvider, Radio, Select } from 'antd';
// Ant Design site use `es` module for view
// but do not replace related lib `lib` with `es`
// which do not show correct in site.
// We may need do convert in site also.
const App: React.FC = () => {
  const [prefixCls, setPrefixCls] = useState('light');
  return (
    <>
      <Button
        style={{ marginBottom: 12 }}
        type="primary"
        onClick={() => setPrefixCls(prefixCls === 'light' ? 'dark' : 'light')}
      >
        toggle prefixCls
      </Button>
      <br />
      <ConfigProvider prefixCls={prefixCls} iconPrefixCls="bamboo">
        <SmileOutlined />
        <Select style={{ width: 120 }} />
        <Radio>test</Radio>
        <Checkbox>test</Checkbox>
      </ConfigProvider>
    </>
  );
};
export default App;
```
### 获取配置
获取父级 `Provider` 的值。如 `DisabledContextProvider`、`SizeContextProvider`。

```tsx
import React, { useState } from 'react';
import { Checkbox, ConfigProvider, Divider, Form, Input, Radio, Space } from 'antd';
import type { ConfigProviderProps } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
const ConfigDisplay = () => {
  const { componentDisabled, componentSize } = ConfigProvider.useConfig();
  return (
    <>
      <Form.Item label="componentSize value">
        <Input value={componentSize} />
      </Form.Item>
      <Form.Item label="componentDisabled value">
        <Input value={String(componentDisabled)} disabled={componentDisabled} />
      </Form.Item>
    </>
  );
};
const App: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType>('small');
  const [disabled, setDisabled] = useState<boolean>(true);
  return (
    <div>
      <Space>
        <Radio.Group
          value={componentSize}
          onChange={(e) => {
            setComponentSize(e.target.value);
          }}
        >
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
        <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
          Form disabled
        </Checkbox>
      </Space>
      <Divider />
      <ConfigProvider componentSize={componentSize}>
        <div className="example">
          <Form disabled={disabled}>
            <ConfigDisplay />
          </Form>
        </div>
      </ConfigProvider>
    </div>
  );
};
export default App;
```
### 警告
调整 warning 策略。

```tsx
import React from 'react';
import { Alert, ConfigProvider, Input, Typography } from 'antd';
const App: React.FC = () => (
  <>
    <Typography.Title level={4}>Open single page to check the console</Typography.Title>
    <ConfigProvider warning={{ strict: false }}>
      <Alert closeText="deprecated" />
      <Input.Group />
    </ConfigProvider>
  </>
);
export default App;
```
### 聚焦描边调试
调试关闭 `focusOutline` 时待覆盖组件的聚焦描边。

```tsx
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import {
  Alert,
  Anchor,
  App as AntdApp,
  AutoComplete,
  Breadcrumb,
  Button,
  Cascader,
  Checkbox,
  Collapse,
  ColorPicker,
  ConfigProvider,
  DatePicker,
  Drawer,
  Dropdown,
  FloatButton,
  Form,
  Image,
  Input,
  InputNumber,
  Mentions,
  Menu,
  Modal,
  Pagination,
  Radio,
  Rate,
  Segmented,
  Select,
  Slider,
  Space,
  Splitter,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Tour,
  Transfer,
  Tree,
  TreeSelect,
  Typography,
  Upload,
} from 'antd';
const { Text, Title } = Typography;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Dragger } = Upload;
const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'orange', label: 'Orange' },
  { value: 'banana', label: 'Banana' },
];
const cascaderOptions = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{ value: 'hangzhou', label: 'Hangzhou' }],
  },
];
const treeData = [
  {
    title: 'Parent',
    value: 'parent',
    key: 'parent',
    children: [{ title: 'Child', value: 'child', key: 'child' }],
  },
];
const tableData = [
  { key: '1', name: 'Apple', count: 3, description: 'Apple details' },
  { key: '2', name: 'Orange', count: 5, description: 'Orange details' },
];
const transferData = [
  { key: '1', title: 'Apple' },
  { key: '2', title: 'Orange' },
  { key: '3', title: 'Banana' },
  { key: '4', title: 'Pear' },
];
const tabsItems = Array.from({ length: 8 }, (_, index) => ({
  key: String(index + 1),
  label: `Tab ${index + 1}`,
  children: `Tab panel ${index + 1}`,
}));
const rowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '240px minmax(0, 1fr)',
  alignItems: 'center',
  gap: 16,
  paddingBlock: 10,
  borderBottom: '1px solid rgba(5, 5, 5, 0.06)',
};
const labelStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  minWidth: 0,
};
const targetStyle: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.35,
  wordBreak: 'break-all',
};
const controlStyle: React.CSSProperties = {
  maxWidth: 420,
  position: 'relative',
};
const sectionStyle: React.CSSProperties = {
  width: '100%',
};
const sectionTitleStyle: React.CSSProperties = {
  marginBlock: '24px 4px',
};
const inlineFloatButtonStyle: React.CSSProperties = {
  position: 'relative',
  inset: 'auto',
};
const focusTargetMap: Record<string, string> = {
  'Alert.Close': '描边位置：关闭按钮',
  'Anchor.Link': '描边位置：锚点链接',
  'Breadcrumb.Link': '描边位置：面包屑链接',
  Button: '描边位置：按钮根节点、链接形态',
  Checkbox: '描边位置：checkbox 方框外圈',
  'Collapse.Header': '描边位置：面板标题外框',
  'DatePicker.Operation': '描边位置：清除按钮',
  'Drawer.Close': '描边位置：关闭按钮',
  'Dropdown.Menu': '描边位置：菜单根节点、菜单项；触发按钮由 Button 处理',
  FloatButton: '描边位置：悬浮按钮外框',
  'FloatButton.Group': '描边位置：Group 触发按钮外框',
  'FloatButton.BackTop': '描边位置：回到顶部按钮外框',
  'Image.Root': '描边位置：图片根节点',
  'Image.Preview': '描边位置：预览层关闭按钮、工具栏按钮',
  'Input.ClearIcon': '描边位置：清除按钮；输入框 active shadow 在其他分组',
  'Menu.Item': '描边位置：菜单根节点、菜单项',
  Modal: '描边位置：对话框根节点、关闭按钮；底部按钮由 Button 处理',
  'Notification.Close': '描边位置：关闭按钮；操作按钮由 Button 处理',
  'Pagination.Item': '描边位置：页码、跳转项、上一页和下一页按钮',
  Radio: '描边位置：radio 圆点外圈',
  'Radio.Button': '描边位置：Radio.Button 分段外框',
  Segmented: '描边位置：根节点、当前聚焦项',
  Switch: '描边位置：开关外框',
  'Table.Expand': '描边位置：行展开按钮',
  Tabs: '描边位置：标签、更多、添加和删除按钮',
  'Tag.Link': '描边位置：链接形态 Tag',
  'Tour.Close': '描边位置：关闭按钮；步骤按钮由 Button 处理',
  'Transfer.Operation': '描边位置：目标列表移除按钮、穿梭按钮',
  'Tree.Node': '描边位置：树节点标题',
  'Typography.Operation': '描边位置：链接、编辑、复制和展开操作',
  'Upload.Dragger': '描边位置：拖拽上传区域',
  'Steps.Item': '原生描边位置：可点击步骤项',
  'Splitter.Collapse': '原生描边位置：分割条折叠按钮区域',
  'Form.NativeControl': 'shadow 位置：原生 file、radio、checkbox 控件',
  'Input.Outlined': 'shadow 位置：常规输入框外层',
  'Input.OTP': 'shadow 位置：当前 OTP 单格输入框',
  'InputNumber.Outlined': 'shadow 位置：常规数字输入框外层',
  'Mentions.Outlined': 'shadow 位置：常规文本域外层',
  'DatePicker.Outlined': 'shadow 位置：常规日期输入框外层',
  'TimePicker.Outlined': 'shadow 位置：常规时间输入框外层',
  'Select.Outlined': 'shadow 位置：常规选择框外层',
  'AutoComplete.Outlined': 'shadow 位置：常规自动完成输入框外层',
  'Cascader.Outlined': 'shadow 位置：常规级联选择框外层',
  'TreeSelect.Outlined': 'shadow 位置：常规树选择框外层',
  'ColorPicker.Trigger': 'shadow 位置：颜色触发器外框',
  'Pagination.QuickJumper': 'shadow 位置：快速跳转输入框',
  'Radio.FocusShadow': 'shadow 位置：radio 与 Radio.Button 聚焦节点',
  'Input.Borderless': '自定义描边位置：无边框输入框自身轮廓',
  'Input.Search.Borderless': '自定义描边位置：无边框搜索框自身轮廓',
  'Input.Password.Borderless': '自定义描边位置：无边框密码框自身轮廓',
  'Input.TextArea.Borderless': '自定义描边位置：无边框文本域自身轮廓',
  'InputNumber.Borderless': '自定义描边位置：无边框数字输入框自身轮廓',
  'Mentions.Borderless': '自定义描边位置：无边框文本域自身轮廓',
  'DatePicker.Borderless': '自定义描边位置：无边框日期输入框自身轮廓',
  'DatePicker.RangePicker.Borderless': '自定义描边位置：无边框范围输入框自身轮廓',
  'TimePicker.Borderless': '自定义描边位置：无边框时间输入框自身轮廓',
  'TimePicker.RangePicker.Borderless': '自定义描边位置：无边框时间范围输入框自身轮廓',
  'Select.Borderless': '自定义描边位置：无边框选择框自身轮廓',
  'AutoComplete.Borderless': '自定义描边位置：无边框自动完成输入框自身轮廓',
  'Cascader.Borderless': '自定义描边位置：无边框级联选择框自身轮廓',
  'TreeSelect.Borderless': '自定义描边位置：无边框树选择框自身轮廓',
  Rate: '自定义描边位置：当前星星',
  Slider: '自定义描边位置：滑块拖拽点',
  'ColorPicker.Panel': '自定义描边位置：面板内色板、滑条拖拽点、输入框',
  'AutoComplete.Token': '传递位置：AutoComplete 公开 Token 到内部 Select',
  'TimePicker.Token': '传递位置：TimePicker 公开 Token 到内部 DatePicker',
  'TimePicker.RangePicker.Token': '传递位置：TimePicker 公开 Token 到时间范围选择器',
  'Cascader.Token': '传递位置：Cascader 公开 Token 到内部 Select 和弹层',
  'TreeSelect.Token': '传递位置：TreeSelect 公开 Token 到内部 Select、Tree、Checkbox 和弹层',
  'Select.PopupToken': '传递位置：Select 组件 Token 到弹层',
  'DatePicker.PopupToken': '传递位置：DatePicker 组件 Token 到日期弹层',
  'DatePicker.RangePicker.Token': '传递位置：DatePicker 组件 Token 到 RangePicker 和弹层',
  'ColorPicker.PopupToken': '传递位置：ColorPicker 组件 Token 到 panel 弹层',
  'Dropdown.PopupToken': '传递位置：Dropdown 组件 Token 到 Menu 弹层',
  'Image.PreviewToken': '传递位置：Image 组件 Token 到预览层',
  'Modal.Token': '传递位置：Modal 组件 Token 到 portal 内容',
  'Drawer.Token': '传递位置：Drawer 组件 Token 到 portal 内容',
  'Notification.Token': '传递位置：Notification 组件 Token 到 portal 内容',
  'Tour.Token': '传递位置：Tour 组件 Token 到 portal 内容',
};
const FocusRow: React.FC<React.PropsWithChildren<{ name: string; height?: number }>> = ({
  name,
  height,
  children,
}) => (
  <div style={{ ...rowStyle, minHeight: height }}>
    <div style={labelStyle}>
      <Text strong>{name}</Text>
      <Text type="secondary" style={targetStyle}>
        {focusTargetMap[name]}
      </Text>
    </div>
    <div style={controlStyle}>{children}</div>
  </div>
);
const FocusSection: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  title,
  children,
}) => (
  <section style={sectionStyle}>
    <Title level={4} style={sectionTitleStyle}>
      {title}
    </Title>
    {children}
  </section>
);
const getPopupContainer = (triggerNode?: HTMLElement) => {
  if (!triggerNode || triggerNode === document.body) {
    return document.body;
  }
  return triggerNode.parentElement ?? document.body;
};
interface FocusOutlineDebugContentProps {
  focusOutline: boolean;
  notificationContainerRef: React.RefObject<HTMLElement | null>;
  setFocusOutline: React.Dispatch<React.SetStateAction<boolean>>;
}
const FocusOutlineDebugContent: React.FC<FocusOutlineDebugContentProps> = ({
  focusOutline,
  notificationContainerRef,
  setFocusOutline,
}) => {
  const { notification } = AntdApp.useApp();
  const tourTargetRef = React.useRef<HTMLButtonElement | null>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [tourOpen, setTourOpen] = React.useState(false);
  const [imagePreviewOpen, setImagePreviewOpen] = React.useState(false);
  const [tokenImagePreviewOpen, setTokenImagePreviewOpen] = React.useState(false);
  const [transferTargetKeys, setTransferTargetKeys] = React.useState<React.Key[]>(['2']);
  const [transferSelectedKeys, setTransferSelectedKeys] = React.useState<React.Key[]>([]);
  const showNotification: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    notificationContainerRef.current = event.currentTarget.parentElement;
    notification.open({
      message: 'Notification focus target',
      description: 'Focus the close button.',
      btn: <Button size="small">Action</Button>,
    });
  };
  const showTour: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    tourTargetRef.current = event.currentTarget;
    setTourOpen(true);
  };
  return (
    <>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Space>
          <Switch checked={focusOutline} onChange={setFocusOutline} />
          <Text>focusOutline: {String(focusOutline)}</Text>
        </Space>
        <FocusSection title="只需要覆盖 lineWidthFocus 的">
          <FocusRow name="Alert.Close">
            <Alert closable message="Closable Alert" type="info" />
          </FocusRow>
          <FocusRow name="Breadcrumb.Link">
            <Breadcrumb
              items={[
                { title: <a href="#focus-outline-debug-home">Home</a> },
                { title: <a href="#focus-outline-debug-list">List</a> },
                { title: 'Detail' },
              ]}
            />
          </FocusRow>
          <FocusRow name="Button">
            <Space>
              <Button type="primary">Button</Button>
              <Button type="link">Link Button</Button>
            </Space>
          </FocusRow>
          <FocusRow name="Checkbox">
            <Checkbox>Checkbox</Checkbox>
          </FocusRow>
          <FocusRow name="Collapse.Header">
            <Collapse
              items={[
                {
                  key: '1',
                  label: 'Collapse Header',
                  children: 'Collapse content',
                },
              ]}
            />
          </FocusRow>
          <FocusRow name="DatePicker.Operation">
            <DatePicker defaultValue={dayjs('2026-07-08')} style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="Drawer.Close">
            <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
          </FocusRow>
          <FocusRow name="Dropdown.Menu">
            <Dropdown
              menu={{
                items: [
                  { key: '1', label: 'Menu Item 1' },
                  { key: '2', label: 'Menu Item 2' },
                ],
              }}
            >
              <Button>Open Dropdown</Button>
            </Dropdown>
          </FocusRow>
          <FocusRow name="Image.Root">
            <Image
              width={96}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
          </FocusRow>
          <FocusRow name="Image.Preview">
            <Image
              width={96}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              preview={{
                getContainer: false,
                open: imagePreviewOpen,
                onOpenChange: setImagePreviewOpen,
              }}
            />
          </FocusRow>
          <FocusRow name="Input.ClearIcon">
            <Input allowClear defaultValue="Clearable Input" />
          </FocusRow>
          <FocusRow name="Menu.Item">
            <Menu
              mode="horizontal"
              selectable={false}
              items={[
                { key: 'mail', label: 'Mail' },
                { key: 'app', label: 'App' },
              ]}
            />
          </FocusRow>
          <FocusRow name="Modal">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </FocusRow>
          <FocusRow name="Notification.Close">
            <Button onClick={showNotification}>Open Notification</Button>
          </FocusRow>
          <FocusRow name="Pagination.Item">
            <Pagination defaultCurrent={5} total={500} size="small" showLessItems />
          </FocusRow>
          <FocusRow name="Radio">
            <Radio.Group defaultValue="a">
              <Radio value="a">A</Radio>
              <Radio value="b">B</Radio>
            </Radio.Group>
          </FocusRow>
          <FocusRow name="Radio.Button">
            <Radio.Group defaultValue="left">
              <Radio.Button value="left">Left</Radio.Button>
              <Radio.Button value="right">Right</Radio.Button>
            </Radio.Group>
          </FocusRow>
          <FocusRow name="Segmented">
            <Segmented options={['Daily', 'Weekly', 'Monthly']} />
          </FocusRow>
          <FocusRow name="Switch">
            <Switch />
          </FocusRow>
          <FocusRow name="Table.Expand">
            <Table
              size="small"
              pagination={false}
              dataSource={tableData}
              columns={[
                { title: 'Name', dataIndex: 'name' },
                { title: 'Count', dataIndex: 'count' },
              ]}
              expandable={{
                expandedRowRender: (record) => <Text>{record.description}</Text>,
              }}
            />
          </FocusRow>
          <FocusRow name="Tabs">
            <Tabs type="editable-card" onEdit={() => {}} items={tabsItems} />
          </FocusRow>
          <FocusRow name="Tour.Close">
            <Button onClick={showTour}>Open Tour</Button>
          </FocusRow>
          <FocusRow name="Transfer.Operation">
            <Transfer
              oneWay
              dataSource={transferData}
              targetKeys={transferTargetKeys}
              selectedKeys={transferSelectedKeys}
              onChange={setTransferTargetKeys}
              onSelectChange={(sourceSelectedKeys, targetSelectedKeys) => {
                setTransferSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
              }}
              render={(item) => item.title}
            />
          </FocusRow>
          <FocusRow name="Tree.Node">
            <Tree defaultExpandAll treeData={treeData} />
          </FocusRow>
          <FocusRow name="Typography.Operation">
            <Space wrap>
              <Typography.Link href="#focus-outline-debug-typography">Link</Typography.Link>
              <Text editable>Editable</Text>
              <Text copyable>Copyable</Text>
              <Typography.Paragraph
                ellipsis={{ rows: 1, expandable: true }}
                style={{ width: 120, margin: 0 }}
              >
                Expandable typography content
              </Typography.Paragraph>
            </Space>
          </FocusRow>
          <FocusRow name="Upload.Dragger">
            <Dragger beforeUpload={() => false} maxCount={1}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Focus Upload Dragger</p>
            </Dragger>
          </FocusRow>
        </FocusSection>
        <FocusSection title="需要处理共享或复用样式 Token 归属的">
          <FocusRow name="Anchor.Link">
            <Anchor
              affix={false}
              items={[
                { key: '1', href: '#focus-outline-anchor-1', title: 'Anchor 1' },
                { key: '2', href: '#focus-outline-anchor-2', title: 'Anchor 2' },
              ]}
            />
          </FocusRow>
          <FocusRow name="Tag.Link">
            <Tag href="#focus-outline-debug-tag" color="blue">
              Link Tag
            </Tag>
          </FocusRow>
          <FocusRow name="FloatButton">
            <FloatButton style={inlineFloatButtonStyle} />
          </FocusRow>
          <FocusRow name="FloatButton.Group" height={120}>
            <FloatButton.Group
              trigger="click"
              open
              style={inlineFloatButtonStyle}
              placement="right"
            >
              <FloatButton />
              <FloatButton />
            </FloatButton.Group>
          </FocusRow>
          <FocusRow name="FloatButton.BackTop">
            <FloatButton.BackTop visibilityHeight={0} style={inlineFloatButtonStyle} />
          </FocusRow>
        </FocusSection>
        <FocusSection title="需要覆盖浏览器原生 outline 的">
          <FocusRow name="Steps.Item">
            <Steps
              current={1}
              onChange={() => {}}
              items={[{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }]}
            />
          </FocusRow>
          <FocusRow name="Splitter.Collapse">
            <Splitter style={{ height: 96, boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)' }}>
              <Splitter.Panel collapsible min="20%">
                Panel 1
              </Splitter.Panel>
              <Splitter.Panel>Panel 2</Splitter.Panel>
            </Splitter>
          </FocusRow>
        </FocusSection>
        <FocusSection title="需要覆盖 controlOutlineWidth 的">
          <FocusRow name="Form.NativeControl">
            <Form>
              <Space wrap>
                <input aria-label="File" type="file" />
                <label>
                  <input name="native-radio" type="radio" /> Native radio
                </label>
                <label>
                  <input type="checkbox" /> Native checkbox
                </label>
              </Space>
            </Form>
          </FocusRow>
          <FocusRow name="Input.Outlined">
            <Input placeholder="Outlined Input" />
          </FocusRow>
          <FocusRow name="Input.OTP">
            <Input.OTP length={4} defaultValue="1234" />
          </FocusRow>
          <FocusRow name="InputNumber.Outlined">
            <InputNumber placeholder="Outlined InputNumber" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="Mentions.Outlined">
            <Mentions
              placeholder="Outlined Mentions"
              options={[{ value: 'antd', label: 'antd' }]}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="DatePicker.Outlined">
            <DatePicker placeholder="Outlined DatePicker" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="TimePicker.Outlined">
            <TimePicker placeholder="Outlined TimePicker" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="Select.Outlined">
            <Select placeholder="Outlined Select" options={options} style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="AutoComplete.Outlined">
            <AutoComplete
              placeholder="Outlined AutoComplete"
              options={options}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="Cascader.Outlined">
            <Cascader
              placeholder="Outlined Cascader"
              options={cascaderOptions}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="TreeSelect.Outlined">
            <TreeSelect
              treeDefaultExpandAll
              placeholder="Outlined TreeSelect"
              treeData={treeData}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="ColorPicker.Trigger">
            <ColorPicker defaultValue="#1677ff" />
          </FocusRow>
          <FocusRow name="Pagination.QuickJumper">
            <Pagination defaultCurrent={2} total={50} size="small" showQuickJumper />
          </FocusRow>
          <FocusRow name="Radio.FocusShadow">
            <Space direction="vertical">
              <Radio>Radio</Radio>
              <Radio.Group defaultValue="left">
                <Radio.Button value="left">Left</Radio.Button>
                <Radio.Button value="right">Right</Radio.Button>
              </Radio.Group>
            </Space>
          </FocusRow>
        </FocusSection>
        <FocusSection title="需要覆盖自定义 outline 或 box-shadow 的">
          <FocusRow name="Input.Borderless">
            <Input variant="borderless" placeholder="Borderless Input" />
          </FocusRow>
          <FocusRow name="Input.Search.Borderless">
            <Input.Search variant="borderless" placeholder="Borderless Search" />
          </FocusRow>
          <FocusRow name="Input.Password.Borderless">
            <Input.Password variant="borderless" placeholder="Borderless Password" />
          </FocusRow>
          <FocusRow name="Input.TextArea.Borderless">
            <TextArea variant="borderless" placeholder="Borderless TextArea" rows={2} />
          </FocusRow>
          <FocusRow name="InputNumber.Borderless">
            <InputNumber
              variant="borderless"
              placeholder="Borderless InputNumber"
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="Mentions.Borderless">
            <Mentions
              variant="borderless"
              placeholder="Borderless Mentions"
              options={[{ value: 'antd', label: 'antd' }]}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="DatePicker.Borderless">
            <DatePicker
              variant="borderless"
              placeholder="Borderless DatePicker"
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="DatePicker.RangePicker.Borderless">
            <RangePicker variant="borderless" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="TimePicker.Borderless">
            <TimePicker
              variant="borderless"
              placeholder="Borderless TimePicker"
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="TimePicker.RangePicker.Borderless">
            <TimePicker.RangePicker variant="borderless" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="Select.Borderless">
            <Select
              variant="borderless"
              placeholder="Borderless Select"
              options={options}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="AutoComplete.Borderless">
            <AutoComplete
              variant="borderless"
              placeholder="Borderless AutoComplete"
              options={options}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="Cascader.Borderless">
            <Cascader
              variant="borderless"
              placeholder="Borderless Cascader"
              options={cascaderOptions}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="TreeSelect.Borderless">
            <TreeSelect
              variant="borderless"
              treeDefaultExpandAll
              placeholder="Borderless TreeSelect"
              treeData={treeData}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="Rate">
            <Rate defaultValue={3} />
          </FocusRow>
          <FocusRow name="Slider">
            <Slider defaultValue={40} />
          </FocusRow>
          <FocusRow name="ColorPicker.Panel" height={280}>
            <ColorPicker defaultValue="#1677ff" open placement="right" />
          </FocusRow>
        </FocusSection>
        <FocusSection title="需要处理复合组件公开 Token 的">
          <FocusRow name="AutoComplete.Token">
            <AutoComplete
              placeholder="AutoComplete public token"
              options={options}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="TimePicker.Token">
            <TimePicker placeholder="TimePicker public token" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="TimePicker.RangePicker.Token">
            <TimePicker.RangePicker style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="Cascader.Token">
            <Cascader
              placeholder="Cascader public token"
              options={cascaderOptions}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="TreeSelect.Token">
            <TreeSelect
              treeCheckable
              treeDefaultExpandAll
              placeholder="TreeSelect public token"
              treeData={treeData}
              style={{ width: '100%' }}
            />
          </FocusRow>
          <FocusRow name="Select.PopupToken">
            <Select placeholder="Select popup token" options={options} style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="DatePicker.PopupToken">
            <DatePicker placeholder="DatePicker popup token" style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="DatePicker.RangePicker.Token">
            <RangePicker style={{ width: '100%' }} />
          </FocusRow>
          <FocusRow name="ColorPicker.PopupToken">
            <ColorPicker defaultValue="#1677ff" />
          </FocusRow>
          <FocusRow name="Dropdown.PopupToken">
            <Dropdown
              menu={{
                items: [
                  { key: '1', label: 'Menu Item 1' },
                  { key: '2', label: 'Menu Item 2' },
                ],
              }}
            >
              <Button>Open Dropdown</Button>
            </Dropdown>
          </FocusRow>
          <FocusRow name="Image.PreviewToken">
            <Image
              width={96}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              preview={{
                getContainer: false,
                open: tokenImagePreviewOpen,
                onOpenChange: setTokenImagePreviewOpen,
              }}
            />
          </FocusRow>
          <FocusRow name="Modal.Token">
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </FocusRow>
          <FocusRow name="Drawer.Token">
            <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
          </FocusRow>
          <FocusRow name="Notification.Token">
            <Button onClick={showNotification}>Open Notification</Button>
          </FocusRow>
          <FocusRow name="Tour.Token">
            <Button onClick={showTour}>Open Tour</Button>
          </FocusRow>
        </FocusSection>
      </Space>
      <Modal
        getContainer={false}
        title="Modal focus target"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
      >
        Focus the dialog root and close button.
      </Modal>
      <Drawer
        getContainer={false}
        title="Drawer focus target"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        Focus the close button.
      </Drawer>
      <Tour
        open={tourOpen}
        getPopupContainer={(node) => node.parentElement ?? document.body}
        onClose={() => setTourOpen(false)}
        steps={[
          {
            title: 'Tour focus target',
            description: 'Focus the close button.',
            target: () => tourTargetRef.current!,
          },
        ]}
      />
    </>
  );
};
const FocusOutlineDebugDemo = () => {
  const notificationContainerRef = React.useRef<HTMLElement | null>(null);
  const [focusOutline, setFocusOutline] = React.useState(false);
  return (
    <ConfigProvider
      getPopupContainer={getPopupContainer}
      theme={{
        token: {
          focusOutline,
        },
      }}
    >
      <AntdApp
        notification={{
          getContainer: () => notificationContainerRef.current ?? document.body,
        }}
      >
        <FocusOutlineDebugContent
          focusOutline={focusOutline}
          notificationContainerRef={notificationContainerRef}
          setFocusOutline={setFocusOutline}
        />
      </AntdApp>
    </ConfigProvider>
  );
};
export default FocusOutlineDebugDemo;
```
