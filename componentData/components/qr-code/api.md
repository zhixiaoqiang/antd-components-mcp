## API

通用属性参考：[通用属性](/docs/react/common-props)

> 自 `antd@5.1.0` 版本开始提供该组件。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| :-- | :-- | :-- | :-- | :-- |
| value | 扫描后的文本 | string | - |
| type | 渲染类型 | `canvas \| svg ` | `canvas` | 5.6.0 |
| icon | 二维码中图片的地址（目前只支持图片地址） | string | - |
| size | 二维码大小 | number | 160 |
| iconSize | 二维码中图片的大小 | number \| { width: number; height: number } | 40 | 5.19.0 |
| color | 二维码颜色 | string | `#000` |
| bgColor | 二维码背景颜色 | string | `transparent` | 5.5.0 |
| bordered | 是否有边框 | boolean | `true` |
| errorLevel | 二维码纠错等级 | `'L' \| 'M' \| 'Q' \| 'H' ` | `M` |
| status | 二维码状态 | `active \| expired \| loading \| scanned` | `active` | scanned: 5.13.0 |
| statusRender | 自定义状态渲染器 | (info: [StatusRenderInfo](/components/qr-code-cn#statusrenderinfo)) => React.ReactNode | - | 5.20.0 |
| onRefresh | 点击"点击刷新"的回调 | `() => void` | - |

### StatusRenderInfo

```typescript
type StatusRenderInfo = {
  status: QRStatus;
  locale: Locale['QRCode'];
  onRefresh?: () => void;
};
```