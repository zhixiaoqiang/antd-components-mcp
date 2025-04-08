## API


> This component is available since `antd@5.1.0`

| Property | Description | Type | Default | Version |
| :-- | :-- | :-- | :-- | :-- |
| value | scanned text | string | - |
| type | render type | `canvas \| svg ` | `canvas` | 5.6.0 |
| icon | include image url (only image link are supported) | string | - |
| size | QRCode size | number | 160 |
| iconSize | include image size | number \| { width: number; height: number } | 40 | 5.19.0 |
| color | QRCode Color | string | `#000` |
| bgColor | QRCode Background Color | string | `transparent` | 5.5.0 |
| bordered | Whether has border style | boolean | `true` |
| errorLevel | Error Code Level | `'L' \| 'M' \| 'Q' \| 'H' ` | `M` |
| status | QRCode status | `active \| expired \| loading \| scanned` | `active` | scanned: 5.13.0 |
| statusRender | custom status render | `(info: \[StatusRenderInfo](/components/qr-code-cn#statusrenderinfo)) => React.ReactNode` | 5.20.0 |
| onRefresh | callback | `() => void` | - |

### StatusRenderInfo

```typescript
type StatusRenderInfo = {
  status: QRStatus;
  locale: Locale['QRCode'];
  onRefresh?: () => void;
};
```