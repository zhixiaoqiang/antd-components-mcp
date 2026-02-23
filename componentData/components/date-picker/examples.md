## DatePicker 组件示例
### 基本
最简单的用法，在浮层中可以选择或者输入日期。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const App: React.FC = () => (
  <Space vertical>
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
);
export default App;
```
### 范围选择器
通过设置 `picker` 属性，指定范围选择器类型。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App: React.FC = () => (
  <Space vertical size={12}>
    <RangePicker />
    <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker
      picker="year"
      id={{
        start: 'startInput',
        end: 'endInput',
      }}
      onFocus={(_, info) => {
        console.log('Focus:', info.range);
      }}
      onBlur={(_, info) => {
        console.log('Blur:', info.range);
      }}
    />
  </Space>
);
export default App;
```
### 多选
多选，不支持 `showTime` 以及 `picker="time"`。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Flex } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
const onChange: DatePickerProps<Dayjs, true>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const defaultValue = [dayjs('2000-01-01'), dayjs('2000-01-03'), dayjs('2000-01-05')];
const App: React.FC = () => (
  <Flex vertical gap="small">
    <DatePicker
      multiple
      onChange={onChange}
      maxTagCount="responsive"
      defaultValue={defaultValue}
      size="small"
    />
    <DatePicker multiple onChange={onChange} maxTagCount="responsive" defaultValue={defaultValue} />
    <DatePicker
      multiple
      onChange={onChange}
      maxTagCount="responsive"
      defaultValue={defaultValue}
      size="large"
    />
  </Flex>
);
export default App;
```
### 多选 Debug
非响应式间距测试。

```tsx
import React from 'react';
import { DatePicker, Flex } from 'antd';
import dayjs from 'dayjs';
const defaultValue = Array.from({ length: 10 }).map((_, i) => dayjs('2000-01-01').add(i, 'day'));
const App: React.FC = () => (
  <Flex vertical gap="small">
    <DatePicker multiple placeholder="Bamboo" />
    <DatePicker multiple defaultValue={defaultValue} size="small" />
    <DatePicker multiple defaultValue={defaultValue} />
    <DatePicker multiple defaultValue={defaultValue} size="large" />
  </Flex>
);
export default App;
```
### 选择确认
DatePicker 默认会根据 `picker` 的交互行为，自动选择是否需要确认按钮。你也可以通过 `needConfirm` 属性来手动设置是否需要确认按钮。当有 `needConfirm` 时，用户始终需要点击确认按钮才能完成选择。反之，则会在选择或者失去焦点时提交。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import type { Dayjs } from 'dayjs';
const onChange: DatePickerProps<Dayjs, false>['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const App: React.FC = () => <DatePicker onChange={onChange} needConfirm />;
export default App;
```
### 切换不同的选择器
提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

```tsx
import React, { useState } from 'react';
import type { DatePickerProps, TimePickerProps } from 'antd';
import { DatePicker, Select, Space, TimePicker } from 'antd';
import type { Dayjs } from 'dayjs';
type PickerType = 'time' | 'date';
interface PickerWithTypeProps {
  type: PickerType;
  onChange: TimePickerProps['onChange'] | DatePickerProps<Dayjs, false>['onChange'];
}
const PickerWithType: React.FC<PickerWithTypeProps> = ({ type, onChange }) => {
  if (type === 'time') {
    return <TimePicker onChange={onChange} />;
  }
  if (type === 'date') {
    return <DatePicker onChange={onChange} />;
  }
  return <DatePicker picker={type} onChange={onChange} />;
};
const App: React.FC = () => {
  const [type, setType] = useState<PickerType>('time');
  return (
    <Space>
      <Select
        aria-label="Picker Type"
        value={type}
        onChange={setType}
        options={[
          { label: 'Time', value: 'time' },
          { label: 'Date', value: 'date' },
          { label: 'Week', value: 'week' },
          { label: 'Month', value: 'month' },
          { label: 'Quarter', value: 'quarter' },
          { label: 'Year', value: 'year' },
        ]}
      />
      <PickerWithType type={type} onChange={(value) => console.log(value)} />
    </Space>
  );
};
export default App;
```
### 日期格式
使用 `format` 属性，可以自定义日期显示格式。当 `format` 为数组时，选择器输入框可以输入数组中任意一个有效格式。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat: DatePickerProps['format'] = (value) =>
  `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat: DatePickerProps['format'] = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
    <DatePicker defaultValue={dayjs('2015/01', monthFormat)} format={monthFormat} picker="month" />
    <DatePicker defaultValue={dayjs()} format={customWeekStartEndFormat} picker="week" />
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />
    <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={customFormat} />
  </Space>
);
export default App;
```
### 日期时间选择
增加选择时间功能，当 `showTime` 为一个对象时，其属性会传递给内建的 `TimePicker`。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, GetProps } from 'antd';
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
const { RangePicker } = DatePicker;
const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
  console.log('onOk: ', value);
};
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker
      showTime
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
    <RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={(value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }}
      onOk={onOk}
    />
  </Space>
);
export default App;
```
### 格式对齐
输入格式对齐，通过键盘左右切换焦点。失去焦点时会尝试对齐到最后合法的日期。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
const App: React.FC = () => (
  <Space vertical>
    <DatePicker
      format={{
        format: 'YYYY-MM-DD',
        type: 'mask',
      }}
      onChange={onChange}
    />
    <DatePicker
      format={{
        format: 'YYYY-MM-DD HH:mm:ss',
        type: 'mask',
      }}
      onChange={onChange}
    />
  </Space>
);
export default App;
```
### 日期限定范围
通过 `minDate` 和 `maxDate` 限定日期范围。

```tsx
import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY-MM-DD';
const App: React.FC = () => (
  <DatePicker
    defaultValue={dayjs('2019-09-03', dateFormat)}
    minDate={dayjs('2019-08-01', dateFormat)}
    maxDate={dayjs('2020-10-31', dateFormat)}
  />
);
export default App;
```
### 禁用
选择框的不可用状态。你也可以通过数组单独禁用 RangePicker 的其中一项。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
    <DatePicker picker="month" defaultValue={dayjs('2015-06', 'YYYY-MM')} disabled />
    <RangePicker
      defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
      disabled
    />
    <RangePicker
      defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
      disabled={[false, true]}
    />
    <DatePicker
      defaultValue={dayjs('2019-09-03', dateFormat)}
      minDate={dayjs('2019-06-01', dateFormat)}
      maxDate={dayjs('2020-06-30', dateFormat)}
    />
  </Space>
);
export default App;
```
### 不可选择日期和时间
可用 `disabledDate` 和 `disabledTime` 分别禁止选择部分日期和时间，其中 `disabledTime` 需要和 `showTime` 一起使用。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
import type { GetProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const range = (start: number, end: number) => {
  const result: number[] = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};
const disabledDateForMonth: RangePickerProps['disabledDate'] = (current) => {
  // Can not select months before this month
  return current && current < dayjs().startOf('month');
};
const disabledDateTime = () => ({
  disabledHours: () => range(0, 24).splice(4, 20),
  disabledMinutes: () => range(30, 60),
  disabledSeconds: () => [55, 56],
});
const disabledRangeTime: RangePickerProps['disabledTime'] = (_, type) => {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
};
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{ defaultOpenValue: dayjs('00:00:00', 'HH:mm:ss') }}
    />
    <DatePicker picker="month" disabledDate={disabledDateForMonth} />
    <RangePicker disabledDate={disabledDate} />
    <RangePicker
      disabledDate={disabledDate}
      disabledTime={disabledRangeTime}
      showTime={{
        hideDisabledOptions: true,
        defaultOpenValue: [dayjs('00:00:00', 'HH:mm:ss'), dayjs('11:59:59', 'HH:mm:ss')],
      }}
      format="YYYY-MM-DD HH:mm:ss"
    />
  </Space>
);
export default App;
```
### 允许留空
在范围选择时，可以允许留空。这对于需要保留“至今”日期项颇为有用。

```tsx
import React from 'react';
import { DatePicker } from 'antd';
const App: React.FC = () => (
  <DatePicker.RangePicker
    placeholder={['Start Date', 'Till Now']}
    allowEmpty={[false, true]}
    onChange={(date, dateString) => {
      console.log(date, dateString);
    }}
  />
);
export default App;
```
### 选择不超过一定的范围
使用 `disabledDate` 的 `info.from` 来限制动态的日期区间选择。

```tsx
import React from 'react';
import { DatePicker, Space, Typography } from 'antd';
import type { DatePickerProps } from 'antd';
import type { Dayjs } from 'dayjs';
const { RangePicker } = DatePicker;
const getYearMonth = (date: Dayjs) => date.year() * 12 + date.month();
// Disabled 7 days from the selected date
const disabled7DaysDate: DatePickerProps['disabledDate'] = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-6, 'days');
    const maxDate = from.add(6, 'days');
    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();
      case 'month':
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
      default:
        return Math.abs(current.diff(from, 'days')) >= 7;
    }
  }
  return false;
};
// Disabled 6 months from the selected date
const disabled6MonthsDate: DatePickerProps['disabledDate'] = (current, { from, type }) => {
  if (from) {
    const minDate = from.add(-5, 'months');
    const maxDate = from.add(5, 'months');
    switch (type) {
      case 'year':
        return current.year() < minDate.year() || current.year() > maxDate.year();
      default:
        return (
          getYearMonth(current) < getYearMonth(minDate) ||
          getYearMonth(current) > getYearMonth(maxDate)
        );
    }
  }
  return false;
};
const App: React.FC = () => (
  <Space vertical>
    <Typography.Title level={5}>7 days range</Typography.Title>
    <RangePicker disabledDate={disabled7DaysDate} />
    <Typography.Title level={5}>6 months range</Typography.Title>
    <RangePicker disabledDate={disabled6MonthsDate} picker="month" />
  </Space>
);
export default App;
```
### 预设范围
可以预设常用的日期范围以提高用户体验。自 `5.8.0` 开始，preset value 支持回调函数返回值方式。

```tsx
import React from 'react';
import type { TimeRangePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
const { RangePicker } = DatePicker;
const onChange = (date: Dayjs | null) => {
  if (date) {
    console.log('Date: ', date);
  } else {
    console.log('Clear');
  }
};
const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
  if (dates) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  } else {
    console.log('Clear');
  }
};
const rangePresets: TimeRangePickerProps['presets'] = [
  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
];
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker
      presets={[
        { label: 'Yesterday', value: dayjs().add(-1, 'd') },
        { label: 'Last Week', value: dayjs().add(-7, 'd') },
        { label: 'Last Month', value: dayjs().add(-1, 'month') },
      ]}
      onChange={onChange}
    />
    <RangePicker presets={rangePresets} onChange={onRangeChange} />
    <RangePicker
      presets={[
        {
          label: <span aria-label="Current Time to End of Day">Now ~ EOD</span>,
          value: () => [dayjs(), dayjs().endOf('day')], // 5.8.0+ support function
        },
        ...rangePresets,
      ]}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      onChange={onRangeChange}
    />
  </Space>
);
export default App;
```
### 额外的页脚
在浮层中加入额外的页脚，以满足某些定制信息的需求。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker renderExtraFooter={() => 'extra footer'} />
    <DatePicker renderExtraFooter={() => 'extra footer'} showTime />
    <RangePicker renderExtraFooter={() => 'extra footer'} />
    <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
    <DatePicker renderExtraFooter={() => 'extra footer'} picker="month" />
  </Space>
);
export default App;
```
### 三种大小
三种大小的输入框，若不设置，则为 `middle`。

```tsx
import React, { useState } from 'react';
import type { ConfigProviderProps, RadioChangeEvent } from 'antd';
import { DatePicker, Radio, Space } from 'antd';
type SizeType = ConfigProviderProps['componentSize'];
const { RangePicker } = DatePicker;
const App: React.FC = () => {
  const [size, setSize] = useState<SizeType>('middle');
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  return (
    <Space vertical size={12}>
      <Radio.Group value={size} onChange={handleSizeChange}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="middle">middle</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <DatePicker size={size} />
      <DatePicker size={size} picker="month" />
      <RangePicker size={size} />
      <DatePicker size={size} picker="week" />
    </Space>
  );
};
export default App;
```
### 定制单元格
使用 `cellRender` 可以自定义单元格的内容和样式。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space, theme } from 'antd';
import type { Dayjs } from 'dayjs';
const App: React.FC = () => {
  const { token } = theme.useToken();
  const style: React.CSSProperties = {
    border: `1px solid ${token.colorPrimary}`,
    borderRadius: '50%',
  };
  const cellRender: DatePickerProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type !== 'date') {
      return info.originNode;
    }
    if (typeof current === 'number' || typeof current === 'string') {
      return <div className="ant-picker-cell-inner">{current}</div>;
    }
    return (
      <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
        {current.date()}
      </div>
    );
  };
  return (
    <Space size={12} vertical>
      <DatePicker cellRender={cellRender} />
      <DatePicker.RangePicker cellRender={cellRender} />
    </Space>
  );
};
export default App;
```
### 定制面板
通过 `components` 替换对应面板。

```tsx
import React from 'react';
import type { DatePickerProps } from 'antd';
import { Button, DatePicker, Flex, Slider, Space, Typography } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
type DateComponent = Required<NonNullable<DatePickerProps<Dayjs>['components']>>['date'];
type GetProps<T> = T extends React.ComponentType<infer P> ? P : never;
const MyDatePanel = (props: GetProps<DateComponent>) => {
  const { value, onSelect, onHover } = props;
  // Value
  const startDate = React.useMemo(() => dayjs().date(1).month(0), []);
  const [innerValue, setInnerValue] = React.useState(value || startDate);
  React.useEffect(() => {
    if (value) {
      setInnerValue(value);
    }
  }, [value]);
  // Range
  const dateCount = React.useMemo(() => {
    const endDate = startDate.add(1, 'year').add(-1, 'day');
    return endDate.diff(startDate, 'day');
  }, [startDate]);
  const sliderValue = Math.min(Math.max(0, innerValue.diff(startDate, 'day')), dateCount);
  // Render
  return (
    <Flex vertical gap="small" style={{ padding: 16 }}>
      <Typography.Title level={4} style={{ margin: 0 }} title="no, it's not">
        The BEST Picker Panel
      </Typography.Title>
      <Slider
        min={0}
        max={dateCount}
        value={sliderValue}
        onChange={(nextValue) => {
          const nextDate = startDate.add(nextValue, 'day');
          setInnerValue(nextDate);
          onHover?.(nextDate);
        }}
        tooltip={{
          formatter: (nextValue) => startDate.add(nextValue || 0, 'day').format('YYYY-MM-DD'),
        }}
      />
      <Button
        type="primary"
        onClick={() => {
          onSelect(innerValue);
        }}
      >{`That's It!`}</Button>
    </Flex>
  );
};
const App: React.FC = () => (
  <Space vertical>
    <DatePicker
      showNow={false}
      onChange={onChange}
      components={{
        date: MyDatePanel,
      }}
    />
  </Space>
);
export default App;
```
### 外部使用面板
自定义菜单，外置选择面板。

```tsx
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { DatePicker, Dropdown, Space } from 'antd';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
const DatePickerDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [panelVisible, setPanelVisible] = React.useState(false);
  const [date, setDate] = React.useState<Dayjs | null>(() => dayjs());
  return (
    <Dropdown
      arrow
      open={visible}
      trigger={['click']}
      destroyOnHidden
      onOpenChange={(open) => {
        setVisible(open);
        if (!open) {
          setPanelVisible(false);
        }
      }}
      menu={{
        items: [
          {
            key: 'today',
            label: 'Today',
            onClick() {
              setDate(dayjs());
              setVisible(false);
            },
          },
          {
            key: 'tomorrow',
            label: 'Tomorrow',
            onClick() {
              setDate(dayjs().add(1, 'day'));
              setVisible(false);
            },
          },
          {
            key: 'custom-date',
            label: (
              <div
                style={{ position: 'relative', overflow: 'hidden' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setPanelVisible(true);
                }}
              >
                <div>Customize</div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DatePicker
                    open={panelVisible}
                    styles={{
                      root: {
                        pointerEvents: 'none',
                        opacity: 0,
                        position: 'absolute',
                        bottom: -12,
                        insetInlineStart: 0,
                      },
                    }}
                    onChange={(date) => {
                      setDate(date);
                      setVisible(false);
                      setPanelVisible(false);
                    }}
                  />
                </div>
              </div>
            ),
          },
        ],
      }}
    >
      <Space>
        <span>{date?.format('YYYY-MM-DD')}</span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
const RangePickerDemo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [panelVisible, setPanelVisible] = React.useState(false);
  const [dates, setDates] = React.useState<[Dayjs, Dayjs] | null>(() => [
    dayjs(),
    dayjs().add(1, 'day'),
  ]);
  return (
    <Dropdown
      arrow
      open={visible}
      trigger={['click']}
      destroyOnHidden
      onOpenChange={(open) => {
        setVisible(open);
        if (!open) {
          setPanelVisible(false);
        }
      }}
      menu={{
        items: [
          {
            key: '7',
            label: '7 days',
            onClick() {
              setDates([dayjs(), dayjs().add(7, 'day')]);
              setVisible(false);
            },
          },
          {
            key: '30',
            label: '30 days',
            onClick() {
              setDates([dayjs(), dayjs().add(30, 'day')]);
              setVisible(false);
            },
          },
          {
            key: 'custom-date',
            label: (
              <div
                style={{ position: 'relative', overflow: 'hidden' }}
                onClick={(e) => {
                  e.stopPropagation();
                  setPanelVisible(true);
                }}
              >
                <div>Customize</div>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DatePicker.RangePicker
                    open={panelVisible}
                    styles={{
                      root: {
                        pointerEvents: 'none',
                        opacity: 0,
                        position: 'absolute',
                        bottom: 0, // RangePicker use this style
                        insetInlineStart: 0,
                      },
                    }}
                    onChange={(ranges) => {
                      if (ranges?.[0] && ranges?.[1]) {
                        setDates([ranges[0], ranges[1]]);
                      } else {
                        setDates(null);
                      }
                      setVisible(false);
                      setPanelVisible(false);
                    }}
                  />
                </div>
              </div>
            ),
          },
        ],
      }}
    >
      <Space>
        <span>
          {dates
            ? `${dates[0].format('YYYY-MM-DD')} ~ ${dates[1].format('YYYY-MM-DD')}`
            : 'Select range'}
        </span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};
const Demo = () => {
  return (
    <div style={{ display: 'flex', gap: '20%' }}>
      <div>
        <div style={{ marginBottom: 12 }}>DatePicker</div>
        <DatePickerDemo />
      </div>
      <div>
        <div style={{ marginBottom: 12 }}>RangePicker</div>
        <RangePickerDemo />
      </div>
    </div>
  );
};
export default Demo;
```
### 佛历格式
通过 `locale` 配置支持特殊的年历格式。

```tsx
import React from 'react';
import { ConfigProvider, DatePicker, Space, Typography } from 'antd';
import type { DatePickerProps } from 'antd';
import en from 'antd/es/date-picker/locale/en_US';
import enUS from 'antd/es/locale/en_US';
import dayjs from 'dayjs';
import buddhistEra from 'dayjs/plugin/buddhistEra';
dayjs.extend(buddhistEra);
const { Title } = Typography;
// Component level locale
const buddhistLocale: typeof en = {
  ...en,
  lang: {
    ...en.lang,
    fieldDateFormat: 'BBBB-MM-DD',
    fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    yearFormat: 'BBBB',
    cellYearFormat: 'BBBB',
  },
};
// ConfigProvider level locale
const globalBuddhistLocale: typeof enUS = {
  ...enUS,
  DatePicker: {
    ...enUS.DatePicker!,
    lang: buddhistLocale.lang,
  },
};
const defaultValue = dayjs('2024-01-01');
const App: React.FC = () => {
  const onChange: DatePickerProps['onChange'] = (_, dateStr) => {
    console.log('onChange:', dateStr);
  };
  return (
    <Space vertical>
      <Title level={4}>By locale props</Title>
      <DatePicker defaultValue={defaultValue} locale={buddhistLocale} onChange={onChange} />
      <DatePicker
        defaultValue={defaultValue}
        showTime
        locale={buddhistLocale}
        onChange={onChange}
      />
      <Title level={4}>By ConfigProvider</Title>
      <ConfigProvider locale={globalBuddhistLocale}>
        <Space vertical>
          <DatePicker defaultValue={defaultValue} onChange={onChange} />
          <DatePicker defaultValue={defaultValue} showTime onChange={onChange} />
        </Space>
      </ConfigProvider>
    </Space>
  );
};
export default App;
```
### 自定义状态
使用 `status` 为 DatePicker 添加状态，可选 `error` 或者 `warning`。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <DatePicker status="error" style={{ width: '100%' }} />
    <DatePicker status="warning" style={{ width: '100%' }} />
    <DatePicker.RangePicker status="error" style={{ width: '100%' }} />
    <DatePicker.RangePicker status="warning" style={{ width: '100%' }} />
  </Space>
);
export default App;
```
### 形态变体
DatePicker 形态变体，可选 `outlined` `filled` `borderless` `underlined` 四种形态。

```tsx
import React from 'react';
import { DatePicker, Flex } from 'antd';
const { RangePicker } = DatePicker;
const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Flex gap={8}>
      <DatePicker placeholder="Outlined" />
      <RangePicker placeholder={['Outlined Start', 'Outlined End']} />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="Filled" variant="filled" />
      <RangePicker placeholder={['Filled Start', 'Filled End']} variant="filled" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="Borderless" variant="borderless" />
      <RangePicker placeholder={['Borderless Start', 'Borderless End']} variant="borderless" />
    </Flex>
    <Flex gap={8}>
      <DatePicker placeholder="Underlined" variant="underlined" />
      <RangePicker placeholder={['Underlined Start', 'Underlined End']} variant="underlined" />
    </Flex>
  </Flex>
);
export default App;
```
### 自定义语义结构的样式和类
通过 `classNames` 和 `styles` 传入对象/函数可以自定义 DatePicker 的[语义化结构](#semantic-dom)样式。

```tsx
import React from 'react';
import { DatePicker, Flex } from 'antd';
import type { DatePickerProps } from 'antd';
import { createStyles } from 'antd-style';
import type { Dayjs } from 'dayjs';
const useStyles = createStyles(({ token }) => ({
  root: {
    border: `1px solid ${token.colorPrimary}`,
    width: 200,
  },
}));
const stylesObject: DatePickerProps<Dayjs>['styles'] = {
  input: { fontStyle: 'italic' },
  suffix: { opacity: 0.85 },
};
const stylesFn: DatePickerProps<Dayjs>['styles'] = (info) => {
  if (info.props.size === 'large') {
    return {
      root: { borderColor: '#722ed1' },
      popup: {
        container: { border: '1px solid #722ed1', borderRadius: 8 },
      },
    } satisfies DatePickerProps<Dayjs>['styles'];
  }
  return {};
};
const App: React.FC = () => {
  const { styles: classNames } = useStyles();
  return (
    <Flex vertical gap="middle">
      <DatePicker classNames={classNames} styles={stylesObject} placeholder="Object" />
      <DatePicker classNames={classNames} styles={stylesFn} placeholder="Function" size="large" />
    </Flex>
  );
};
export default App;
```
### Filled Debug
Filled Debug

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker variant="filled" defaultValue={dayjs('2015-06-06', dateFormat)} disabled />
    <DatePicker
      variant="filled"
      picker="month"
      defaultValue={dayjs('2015-06', 'YYYY-MM')}
      disabled
    />
    <RangePicker
      variant="filled"
      defaultValue={[dayjs('2015-06-06', dateFormat), dayjs('2015-06-06', dateFormat)]}
      disabled
    />
    <RangePicker
      variant="filled"
      defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
      disabled={[false, true]}
    />
    <DatePicker
      defaultValue={dayjs('2023-12-25')}
      variant="filled"
      status="error"
      style={{ width: '100%' }}
      previewValue={false}
    />
    <DatePicker variant="filled" status="warning" style={{ width: '100%' }} />
    <RangePicker variant="filled" status="error" style={{ width: '100%' }} />
    <RangePicker variant="filled" status="warning" style={{ width: '100%' }} />
  </Space>
);
export default App;
```
### 弹出位置
可以通过 `placement` 手动指定弹出的位置。

```tsx
import React, { useState } from 'react';
import type { DatePickerProps, RadioChangeEvent } from 'antd';
import { DatePicker, Radio } from 'antd';
const { RangePicker } = DatePicker;
const App: React.FC = () => {
  const [placement, setPlacement] = useState<DatePickerProps['placement']>('topLeft');
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
      <DatePicker placement={placement} />
      <br />
      <br />
      <RangePicker placement={placement} />
    </>
  );
};
export default App;
```
### 受控面板
通过组合 `mode` 与 `onPanelChange` 控制要展示的面板。

```tsx
import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { DatePickerProps, GetProps } from 'antd';
import type { Dayjs } from 'dayjs';
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
const { RangePicker } = DatePicker;
type RangeValue = [Dayjs | null | undefined, Dayjs | null | undefined] | null;
const ControlledDatePicker = () => {
  const [mode, setMode] = useState<DatePickerProps['mode']>('time');
  const handleOpenChange = (open: boolean) => {
    if (open) {
      setMode('time');
    }
  };
  const handlePanelChange: DatePickerProps['onPanelChange'] = (_, newMode) => {
    setMode(newMode);
  };
  return (
    <DatePicker
      mode={mode}
      showTime
      onOpenChange={handleOpenChange}
      onPanelChange={handlePanelChange}
    />
  );
};
const ControlledRangePicker = () => {
  const [mode, setMode] = useState<RangePickerProps['mode']>(['month', 'month']);
  const [value, setValue] = useState<RangeValue>([null, null]);
  const handlePanelChange: RangePickerProps['onPanelChange'] = (newValue, newModes) => {
    setValue(newValue);
    setMode([
      newModes[0] === 'date' ? 'month' : newModes[0],
      newModes[1] === 'date' ? 'month' : newModes[1],
    ]);
  };
  return (
    <RangePicker
      placeholder={['Start month', 'End month']}
      format="YYYY-MM"
      value={value}
      mode={mode}
      onChange={setValue}
      onPanelChange={handlePanelChange}
    />
  );
};
const App: React.FC = () => (
  <Space vertical size={12}>
    <ControlledDatePicker />
    <ControlledRangePicker />
  </Space>
);
export default App;
```
### 自定义日期范围选择
当 `RangePicker` 无法满足业务需求时，可以使用两个 `DatePicker` 实现类似的功能。
> - 通过设置 `disabledDate` 方法，来约束开始和结束日期。
> - 通过 `open` `onOpenChange` 来优化交互。

```tsx
import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';
const App: React.FC = () => {
  const [startValue, setStartValue] = useState<Dayjs | null>(null);
  const [endValue, setEndValue] = useState<Dayjs | null>(null);
  const [endOpen, setEndOpen] = useState(false);
  const disabledStartDate = (startDate: Dayjs) => {
    if (!startDate || !endValue) {
      return false;
    }
    return startDate.valueOf() > endValue.valueOf();
  };
  const disabledEndDate = (endDate: Dayjs) => {
    if (!endDate || !startValue) {
      return false;
    }
    return endDate.valueOf() <= startValue.valueOf();
  };
  const handleStartOpenChange = (open: boolean) => {
    if (!open) {
      setEndOpen(true);
    }
  };
  const handleEndOpenChange = (open: boolean) => {
    setEndOpen(open);
  };
  return (
    <Space>
      <DatePicker
        disabledDate={disabledStartDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={startValue}
        placeholder="Start"
        onChange={setStartValue}
        onOpenChange={handleStartOpenChange}
      />
      <DatePicker
        disabledDate={disabledEndDate}
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        value={endValue}
        placeholder="End"
        onChange={setEndValue}
        open={endOpen}
        onOpenChange={handleEndOpenChange}
      />
    </Space>
  );
};
export default App;
```
### 前后缀
自定义前缀 `prefix` 和后缀图标 `suffixIcon`。

```tsx
import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { DatePicker, Space } from 'antd';
import type { Dayjs } from 'dayjs';
const smileIcon = <SmileOutlined />;
const { RangePicker } = DatePicker;
const onChange = (date: Dayjs | (Dayjs | null)[] | null, dateString: string | string[] | null) => {
  console.log(date, dateString);
};
const App: React.FC = () => (
  <Space vertical size={12}>
    <DatePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="month" />
    <RangePicker suffixIcon={smileIcon} onChange={onChange} />
    <DatePicker suffixIcon={smileIcon} onChange={onChange} picker="week" />
    <DatePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="month" />
    <RangePicker suffixIcon="ab" onChange={onChange} />
    <DatePicker suffixIcon="ab" onChange={onChange} picker="week" />
    <DatePicker prefix={smileIcon} onChange={onChange} picker="week" />
    <DatePicker prefix="Event Period" onChange={onChange} picker="week" />
    <RangePicker prefix={smileIcon} onChange={onChange} picker="week" />
    <RangePicker prefix="Event Period" onChange={onChange} picker="week" />
  </Space>
);
export default App;
```
### \_InternalPanelDoNotUseOrYouWillBeFired
调试用组件，请勿直接使用。

```tsx
import React from 'react';
import { DatePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalDatePicker } = DatePicker;
const App: React.FC = () => <InternalDatePicker />;
export default App;
```
### 组件 Token
Component Token Debug.

```tsx
import React from 'react';
import { ConfigProvider, DatePicker, Divider, Flex, Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
/** Test usage. Do not use in your production. */
const { RangePicker } = DatePicker;
const App: React.FC = () => (
  <>
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            presetsWidth: 160,
            zIndexPopup: 888,
            cellHoverWithRangeBg: '#f0f0f0',
            cellActiveWithRangeBg: '#e6bbff',
            cellRangeBorderColor: 'green',
            timeColumnWidth: 80,
            timeColumnHeight: 250,
            timeCellHeight: 30,
            cellWidth: 64,
            cellHeight: 40,
            textHeight: 45,
            withoutTimeCellHeight: 70,
          },
        },
      }}
    >
      <Space vertical>
        <DatePicker
          presets={[
            { label: 'Yesterday', value: dayjs().add(-1, 'd') },
            { label: 'Last Week', value: dayjs().add(-7, 'd') },
            { label: 'Last Month', value: dayjs().add(-1, 'month') },
          ]}
        />
        <RangePicker />
        <TimePicker />
        <DatePicker picker="month" />
      </Space>
    </ConfigProvider>
    <Divider />
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            controlHeightSM: 32,
            controlHeight: 40,
          },
        },
      }}
    >
      <Flex vertical gap={8}>
        <DatePicker multiple size="small" />
        <DatePicker multiple />
        <DatePicker multiple size="large" />
      </Flex>
    </ConfigProvider>
  </>
);
export default App;
```
### suffixIcon
suffixIcon 测试。

```tsx
import React from 'react';
import { DatePicker, Space } from 'antd';
const App: React.FC = () => (
  <Space orientation="vertical">
    <DatePicker suffixIcon />
    <DatePicker suffixIcon={false} />
    <DatePicker />
    <DatePicker suffixIcon={null} />
    <DatePicker suffixIcon={'123'} />
  </Space>
);
export default App;
```
