## API


| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |
| action | Uploading URL | string \| (file) => Promise&lt;string> | - |  |
| beforeUpload | Hook function which will be executed before uploading. Uploading will be stopped with `false` or a rejected Promise returned. When returned value is `Upload.LIST_IGNORE`, the list of files that have been uploaded will ignore it. **Warning：this function is not supported in IE9** | (file, fileList) => boolean \| Promise&lt;File> \| `Upload.LIST_IGNORE` | - |  |
| customRequest | Override for the default xhr behavior allowing for additional customization and the ability to implement your own XMLHttpRequest | function | - |  |
| data | Uploading extra params or function which can return uploading extra params | object \| (file) => object \| Promise&lt;object> | - |  |
| defaultFileList | Default list of files that have been uploaded | object\[] | - |  |
| directory | Support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | boolean | false |  |
| disabled | Disable upload button | boolean | false | When customizing Upload children, please pass the disabled attribute to the child node at the same time to ensure the disabled rendering effect is consistent. |
| fileList | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | [UploadFile](#uploadfile)\[] | - |  |
| headers | Set request headers, valid above IE10 | object | - |  |
| iconRender | Custom show icon | (file: UploadFile, listType?: UploadListType) => ReactNode | - |  |
| isImageUrl | Customize if render &lt;img /> in thumbnail | (file: UploadFile) => boolean | [(inside implementation)](https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68) |  |
| itemRender | Custom item of uploadList | (originNode: ReactElement, file: UploadFile, fileList: object\[], actions: { download: function, preview: function, remove: function }) => React.ReactNode | - | 4.16.0 |
| listType | Built-in stylesheets, support for four types: `text`, `picture`, `picture-card` or `picture-circle` | string | `text` | `picture-circle`(5.2.0+) |
| maxCount | Limit the number of uploaded files. Will replace current one when `maxCount` is `1` | number | - | 4.10.0 |
| method | The http method of upload request | string | `post` |  |
| multiple | Whether to support selected multiple files. `IE10+` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false |  |
| name | The name of uploading file | string | `file` |  |
| openFileDialogOnClick | Click open file dialog | boolean | true |  |
| previewFile | Customize preview file logic | (file: File \| Blob) => Promise&lt;dataURL: string> | - |  |
| progress | Custom progress bar | [ProgressProps](/components/progress/#api) (support `type="line"` only) | { strokeWidth: 2, showInfo: false } | 4.3.0 |
| showUploadList | Whether to show default upload list, could be an object to specify `extra`, `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` and `downloadIcon` individually | boolean \| { extra?: ReactNode \| (file: UploadFile) => ReactNode, showPreviewIcon?: boolean \| (file: UploadFile) => boolean, showDownloadIcon?: boolean \| (file: UploadFile) => boolean, showRemoveIcon?: boolean \| (file: UploadFile) => boolean, previewIcon?: ReactNode \| (file: UploadFile) => ReactNode, removeIcon?: ReactNode \| (file: UploadFile) => ReactNode, downloadIcon?: ReactNode \| (file: UploadFile) => ReactNode } | true | `extra`: 5.20.0, `showPreviewIcon` function: 5.21.0, `showRemoveIcon` function: 5.21.0, `showDownloadIcon` function: 5.21.0 |
| withCredentials | The ajax upload with cookie sent | boolean | false |  |
| onChange | A callback function, can be executed when uploading state is changing. It will trigger by every uploading phase. see [onChange](#onchange) | function | - |  |
| onDrop | A callback function executed when files are dragged and dropped into the upload area | (event: React.DragEvent) => void | - | 4.16.0 |
| onDownload | Click the method to download the file, pass the method to perform the method logic, and do not pass the default jump to the new TAB | function(file): void | (Jump to new TAB) |  |
| onPreview | A callback function, will be executed when the file link or preview icon is clicked | function(file) | - |  |
| onRemove | A callback function, will be executed when removing file button is clicked, remove event will be prevented when the return value is false or a Promise which resolve(false) or reject | function(file): boolean \| Promise | - |  |

### UploadFile

Extends File with additional props.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| crossOrigin | CORS settings attributes | `'anonymous'` \| `'use-credentials'` \| `''` | - | 4.20.0 |
| name | File name | string | - | - |
| percent | Upload progress percent | number | - | - |
| status | Upload status. Show different style when configured | `error` \| `done` \| `uploading` \| `removed` | - | - |
| thumbUrl | Thumb image url | string | - | - |
| uid | unique id. Will auto-generate when not provided | string | - | - |
| url | Download url | string | - | - |

### onChange

> 💡 The function will be called when uploading is in progress, completed, or failed.

When uploading state change, it returns:

```jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
```

1. `file` File object for the current operation.

   ```jsx
   {
      uid: 'uid',      // unique identifier, negative is recommended, to prevent interference with internally generated id
      name: 'xx.png',   // file name
      status: 'done' | 'uploading' | 'error' | 'removed', // Intercepted file by beforeUpload doesn't have a status field.
      response: '{"status": "success"}', // response from server
      linkProps: '{"download": "image"}', // additional HTML props of file link
      xhr: 'XMLHttpRequest{ ... }', // XMLHttpRequest Header
   }
   ```

2. `fileList` current list of files

3. `event` response from the server, including uploading progress, supported by advanced browsers.