## 何时使用
当需要将文本转换成为二维码时使用。
## API
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
## FAQ
### 关于二维码纠错等级
纠错等级也叫纠错率，就是指二维码可以被遮挡后还能正常扫描，而这个能被遮挡的最大面积就是纠错率。
通常情况下二维码分为 4 个纠错级别：`L级` 可纠正约 `7%` 错误、`M级` 可纠正约 `15%` 错误、`Q级` 可纠正约 `25%` 错误、`H级` 可纠正约`30%` 错误。并不是所有位置都可以缺损，像最明显的三个角上的方框，直接影响初始定位。中间零散的部分是内容编码，可以容忍缺损。当二维码的内容编码携带信息比较少的时候，也就是链接比较短的时候，设置不同的纠错等级，生成的图片不会发生变化。
> 有关更多信息，可参阅相关资料：[https://www.qrcode.com/zh/about/error_correction](https://www.qrcode.com/zh/about/error_correction.html)
### ⚠️⚠️⚠️ 二维码无法扫描？
若二维码无法扫码识别，可能是因为链接地址过长导致像素过于密集，可以通过 size 配置二维码更大，或者通过短链接服务等方式将链接变短。
