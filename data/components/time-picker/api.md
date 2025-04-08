## API

---


```jsx
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

<TimePicker defaultValue={dayjs('13:30:56', 'HH:mm:ss')} />;
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Customize clear icon | boolean \| { clearIcon?: ReactNode } | true | 5.8.0: Support object type |
| autoFocus | If get focus when component mounted | boolean | false |  |
| cellRender | Custom rendering function for picker cells | (current: number, info: { originNode: React.ReactElement, today: dayjs, range?: 'start' \| 'end', subType: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => React.ReactNode | - | 5.4.0 |
| changeOnScroll | Trigger selection when scroll the column | boolean | false | 5.14.0 |
| className | The className of picker | string | - |  |
| defaultValue | To set default time | [dayjs](http://day.js.org/) | - |  |
| disabled | Determine whether the TimePicker is disabled | boolean | false |  |
| disabledTime | To specify the time that cannot be selected | [DisabledTime](#disabledtime) | - | 4.19.0 |
| format | To set the time format | string | `HH:mm:ss` |  |
| getPopupContainer | To set the container of the floating layer, while the default is to create a div element in body | function(trigger) | - |  |
| hideDisabledOptions | Whether hide the options that can not be selected | boolean | false |  |
| hourStep | Interval between hours in picker | number | 1 |  |
| inputReadOnly | Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | false |  |
| minuteStep | Interval between minutes in picker | number | 1 |  |
| needConfirm | Need click confirm button to trigger value change | boolean | - | 5.14.0 |
| open | Whether to popup panel | boolean | false |  |
| placeholder | Display when there's no value | string \| \[string, string] | `Select a time` |  |
| placement | The position where the selection box pops up | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| popupClassName | The className of panel | string | - |  |
| popupStyle | The style of panel | CSSProperties | - |  |
| prefix | The custom prefix | ReactNode | - | 5.22.0 |
| renderExtraFooter | Called from time picker panel to render some addon to its bottom | () => ReactNode | - |  |
| secondStep | Interval between seconds in picker | number | 1 |  |
| showNow | Whether to show `Now` button on panel | boolean | - | 4.4.0 |
| size | To determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | `large` \| `middle` \| `small` | - |  |
| status | Set validation status | 'error' \| 'warning' \| 'success' \| 'validating' | - | 4.19.0 |
| suffixIcon | The custom suffix icon | ReactNode | - |  |
| use12Hours | Display as 12 hours format, with default format `h:mm:ss a` | boolean | false |  |
| value | To set time | [dayjs](http://day.js.org/) | - |  |
| variant | Variants of picker | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onCalendarChange | Callback function, can be executed when the start time or the end time of the range is changing. `info` argument is added in 4.4.0 | function(dates: \[dayjs, dayjs], dateStrings: \[string, string], info: { range:`start`\|`end` }) | - |  |
| onChange | A callback function, can be executed when the selected time is changing | function(time: dayjs, timeString: string): void | - |  |
| onOpenChange | A callback function which will be called while panel opening/closing | (open: boolean) => void | - |  |

#### DisabledTime

```typescript
type DisabledTime = (now: Dayjs) => {
  disabledHours?: () => number[];
  disabledMinutes?: (selectedHour: number) => number[];
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[];
  disabledMilliseconds?: (
    selectedHour: number,
    selectedMinute: number,
    selectedSecond: number,
  ) => number[];
};
```

Note: `disabledMilliseconds` is added in `5.14.0`.