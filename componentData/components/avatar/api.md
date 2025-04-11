## API
### Avatar
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| alt | 图像无法显示时的替代文本 | string | - |  |
| gap | 字符类型距离左右两侧边界单位像素 | number | 4 | 4.3.0 |
| icon | 设置头像的自定义图标 | ReactNode | - |  |
| shape | 指定头像的形状 | `circle` \| `square` | `circle` |  |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.7.0 |
| src | 图片类头像的资源地址或者图片元素 | string \| ReactNode | - | ReactNode: 4.8.0 |
| srcSet | 设置图片类头像响应式资源地址 | string | - |  |
| draggable | 图片是否允许拖动 | boolean \| `'true'` \| `'false'` | true |  |
| crossOrigin | CORS 属性设置 | `'anonymous'` \| `'use-credentials'` \| `''` | - | 4.17.0 |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () => boolean | - |  |
> Tip：你可以设置 `icon` 或 `children` 作为图片加载失败的默认 fallback 行为，优先级为 `icon` > `children`
### Avatar.Group <Badge>4.5.0+</Badge>
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| max | 设置最多显示相关配置，`5.18.0` 前可使用 [参数](https://github.com/ant-design/ant-design/blob/9d134859becbdae5b9ce276f6d9af4264691d81f/components/avatar/group.tsx#L35-L38) | `{ count?: number; style?: CSSProperties; popover?: PopoverProps }` | - | 5.18.0 |
| size | 设置头像的大小 | number \| `large` \| `small` \| `default` \| { xs: number, sm: number, ...} | `default` | 4.8.0 |
| shape | 设置头像的形状 | `circle` \| `square` | `circle` | 5.8.0 |