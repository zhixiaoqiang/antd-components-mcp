## API


**Note:** Part of the Calendar's locale is read from `value`. So, please set the locale of `dayjs` correctly.

```jsx
// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
// import dayjs from 'dayjs';
// import 'dayjs/locale/zh-cn';
// dayjs.locale('zh-cn');

<Calendar cellRender={cellRender} onPanelChange={onPanelChange} onSelect={onSelect} />
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| cellRender | Customize cell content | function(current: dayjs, info: { prefixCls: string, originNode: React.ReactElement, today: dayjs, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| dateFullCellRender | Customize the display of the date cell, the returned content will override the cell | function(date: Dayjs): ReactNode | - |  |
| fullCellRender | Customize cell content | function(current: dayjs, info: { prefixCls: string, originNode: React.ReactElement, today: dayjs, range?: 'start' \| 'end', type: PanelMode, locale?: Locale, subType?: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| defaultValue | The date selected by default | [dayjs](https://day.js.org/) | - |  |
| disabledDate | Function that specifies the dates that cannot be selected, `currentDate` is same dayjs object as `value` prop which you shouldn't mutate it](https://github.com/ant-design/ant-design/issues/30987) | (currentDate: Dayjs) => boolean | - |  |
| fullscreen | Whether to display in full-screen | boolean | true |  |
| showWeek | Whether to display week number | boolean | false | 5.23.0 |
| headerRender | Render custom header in panel | function(object:{value: Dayjs, type: 'year' \| 'month', onChange: f(), onTypeChange: f()}) | - |  |
| locale | The calendar's locale | object | [(default)](https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json) |  |
| mode | The display mode of the calendar | `month` \| `year` | `month` |  |
| validRange | To set valid range | \[[dayjs](https://day.js.org/), [dayjs](https://day.js.org/)] | - |  |
| value | The current selected date | [dayjs](https://day.js.org/) | - |  |
| onChange | Callback for when date changes | function(date: Dayjs) | - |  |
| onPanelChange | Callback for when panel changes | function(date: Dayjs, mode: string) | - |  |
| onSelect | Callback for when a date is selected, include source info | function(date: Dayjs, info: { source: 'year' \| 'month' \| 'date' \| 'customize' }) | - | `info`: 5.6.0 |