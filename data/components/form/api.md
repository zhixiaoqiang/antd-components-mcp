## API


### Form

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| colon | Configure the default value of `colon` for Form.Item. Indicates whether the colon after the label is displayed (only effective when prop layout is horizontal) | boolean | true |  |
| disabled | Set form component disable, only available for antd components | boolean | false | 4.21.0 |
| component | Set the Form rendering element. Do not create a DOM node for `false` | ComponentType \| false | form |  |
| fields | Control of form fields through state management (such as redux). Not recommended for non-strong demand. View [example](#form-demo-global-state) | [FieldData](#fielddata)\[] | - |  |
| form | Form control instance created by `Form.useForm()`. Automatically created when not provided | [FormInstance](#forminstance) | - |  |
| feedbackIcons | Can be passed custom icons while `Form.Item` element has `hasFeedback` | [FeedbackIcons](#feedbackicons) | - | 5.9.0 |
| initialValues | Set value by Form initialization or reset | object | - |  |
| labelAlign | The text align of label of all items | `left` \| `right` | `right` |  |
| labelWrap | whether label can be wrap | boolean | false | 4.18.0 |
| labelCol | Label layout, like `<Col>` component. Set `span` `offset` value like `{span: 3, offset: 12}` or `sm: {span: 3, offset: 12}` | [object](/components/grid/#col) | - |  |
| layout | Form layout | `horizontal` \| `vertical` \| `inline` | `horizontal` |  |
| name | Form name. Will be the prefix of Field `id` | string | - |  |
| preserve | Keep field value even when field removed. You can get the preserve field value by `getFieldsValue(true)` | boolean | true | 4.4.0 |
| requiredMark | Required mark style. Can use required mark or optional mark. You can not config to single Form.Item since this is a Form level config | boolean \| `optional` \| ((label: ReactNode, info: { required: boolean }) => ReactNode) | true | `renderProps`: 5.9.0 |
| scrollToFirstError | Auto scroll to first failed field when submit | boolean \| [Options](https://github.com/stipsan/scroll-into-view-if-needed/tree/ece40bd9143f48caf4b99503425ecb16b0ad8249#options) \| { focus: boolean } | false | focus: 5.24.0 |
| size | Set field component size (antd components only) | `small` \| `middle` \| `large` | - |  |
| validateMessages | Validation prompt template, description [see below](#validatemessages) | [ValidateMessages](https://github.com/ant-design/ant-design/blob/6234509d18bac1ac60fbb3f92a5b2c6a6361295a/components/locale/en_US.ts#L88-L134) | - |  |
| validateTrigger | Config field validate trigger | string \| string\[] | `onChange` | 4.3.0 |
| variant | Variant of components inside form | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| wrapperCol | The layout for input controls, same as `labelCol` | [object](/components/grid/#col) | - |  |
| onFieldsChange | Trigger when field updated | function(changedFields, allFields) | - |  |
| onFinish | Trigger after submitting the form and verifying data successfully | function(values) | - |  |
| onFinishFailed | Trigger after submitting the form and verifying data failed | function({ values, errorFields, outOfDate }) | - |  |
| onValuesChange | Trigger when value updated | function(changedValues, allValues) | - |  |
| clearOnDestroy | Clear form values when the form is uninstalled | boolean | false | 5.18.0 |

> It accepts all props which native forms support but `onSubmit`.

### validateMessages

Form provides [default verification error messages](https://github.com/ant-design/ant-design/blob/6234509d18bac1ac60fbb3f92a5b2c6a6361295a/components/locale/en_US.ts#L88-L134). You can modify the template by configuring `validateMessages` property. A common usage is to configure localization:

```jsx
const validateMessages = {
  required: "'${name}' is required!",
  // ...
};

<Form validateMessages={validateMessages} />;
```

Besides, [ConfigProvider](/components/config-provider/) also provides a global configuration scheme that allows for uniform configuration error notification templates:

```jsx
const validateMessages = {
  required: "'${name}' is Required!",
  // ...
};

<ConfigProvider form={{ validateMessages }}>
  <Form />
</ConfigProvider>;
```