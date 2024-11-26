---
sidebar_position: 5
---

# PDFDocumentProxy

## pdfDocumentProxy.annotationStorage

获取、设置 PDF 临时注释。

`annotationStorage` 主要用于在使用 PDF.js 时动态添加或修改注释，而不一定能读取到使用其他 PDF 工具添加的批注和注解。

这是因为这些注释通常被嵌入在 PDF 文档的结构中，而 `annotationStorage` 是 PDF.js 的一个运行时存储，用于临时管理动态注释。

如果需要获取 PDF 中的注释，需要使用 `pdfPageProxy.getAnnotations()`。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  const annotation = {
    id: 'unique-id', // 注释 ID，后续可以通过 ID 再获取
    rect: [100, 100, 200, 200], // 位置和大小
    contents: '这是一个注释内容', // 内容
    color: [0, 0, 255], // 注释的颜色 (RGB)
    author: 'xxx', // 注释的作者
    modificationDate: new Date().toISOString(), // 修改日期
    type: 'Text' // 类型
  }
  // 添加注释到 annotationStorage
  pdfDocumentProxy.annotationStorage.setValue(annotation.id, annotation)
  // 获取注释
  console.log(pdfDocumentProxy.annotationStorage.getAll()['unique-id'])
  console.log(pdfDocumentProxy.annotationStorage.getValue('unique-id', 'defaultValue'))
})
```

## pdfDocumentProxy.filterFactory

过滤工厂实例，可以追加各种过滤器。

官方解释为 `The filter factory instance`。应用方式不详。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})

pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  console.log(pdfDocumentProxy.filterFactory)
  // pdfDocumentProxy.filterFactory 有很多原型方法，如 addAlphaFilter addFilter addHCMFilter 等
})
```

## pdfDocumentProxy.numPages

获取 PDF 总页数

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  console.log(pdfDocumentProxy.numPages) // 14
})
```

## pdfDocumentProxy.loadingTask

获取用于加载 PDF 文档对象

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  console.log(pdfDocumentProxy.loadingTask === pdfDocumentLoadingTask) // true
})
```

## pdfDocumentProxy.fingerprints

获取 PDF 的指纹

返回长度为 2 的数组。一般没有编辑过的 PDF 只会有一个指纹，编辑过的 PDF 会返回第二个指纹。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  console.log(pdfDocumentProxy.fingerprints) // ['110dd61fd57444010b1ab5ff38782f0f', '51e5dd1015bb6c73d97454339b52ff77']
})
```

## pdfDocumentProxy.getPage()

获取 PDF 指定页面内容。页码从 1 开始。

返回 `PDFPageProxy`。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getPage(1).then(pdfPageProxy => {
    console.log(pdfPageProxy)
  })
})
```

## pdfDocumentProxy.getPageIndex()

通过页面 ref 获取当前页码。页码从 0 开始。

官方文档说对于大 PDF 文件这个方法会比慢，推荐使用 `getDestination`。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  // 获取第三页
  pdfDocumentProxy.getPage(3).then(pdfPageProxy => {
    // pdfPageProxy.ref 形如 { gen: 0, num: 104 }
    pdfDocumentProxy.getPageIndex(pdfPageProxy.ref).then(index => {
      console.log(index) // 2
    })
  })
})
```

## pdfDocumentProxy.getDestinations()

获取 PDF 中所有命名目标。

这个方法原文档标注返回 `promise`，我没有实现成功。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getDestinations().then(destinations => {
    console.log(destinations)
  })
})
```

## pdfDocumentProxy.getDestination()

获取 PDF 中指定页码的命名目标。要注意的是，参数必须有效，否则会报错。

这个方法原文档标注返回 `promise`，我没有实现成功。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getDestination('some_destination').then(destination => {
    console.log(destination)
  })
})
```

## pdfDocumentProxy.getPageLabels()

获取 PDF 文档中每一页的标签。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getPageLabels().then(labels => {
    console.log(labels)
  })
})
```

## pdfDocumentProxy.getAttachments()

获取 PDF 文档中的附件。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getAttachments().then(attachments => {
    console.log(attachments)
  })
})
```

## pdfDocumentProxy.getMetadata()

获取 PDF 文档的元信息。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getMetadata().then(metadata => {
    console.log(JSON.stringify(metadata, null, 4))
    // {
    //   "info": {
    //   "PDFFormatVersion": "1.4",
    //     "Language": null,
    //     "EncryptFilterName": null,
    //     "IsLinearized": false,
    //     "IsAcroFormPresent": false,
    //     "IsXFAPresent": false,
    //     "IsCollectionPresent": false,
    //     "IsSignaturesPresent": false,
    //     "Producer": "pdfeTeX-1.21a",
    //     "Creator": "TeX",
    //     "CreationDate": "D:20090401163925-07'00'",
    //     "Custom": {
    //     "PTEX.Fullbanner": "This is pdfeTeX, Version 3.141592-1.21a-2.2 (Web2C 7.5.4) kpathsea version 3.5.6"
    //   },
    //   "ModDate": "D:20240625212432+08'00'"
    // },
    //   "metadata": null,
    //   "contentDispositionFilename": null,
    //   "contentLength": 1016738
    // }
  })
})
```

## pdfDocumentProxy.getPageLayout()

获取 PDF 文档的布局方式。

返回字符串布局方式，如： `SinglePage` `OneColumn` `TwoColumnLeft` `TwoColumnRight` `TwoPageLeft` `TwoPageRight`

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getPageLayout().then(layout => {
    console.log(layout) // SinglePage
  })
})
```

## pdfDocumentProxy.isPureXfa

获取 PDF 文档是否为纯 XFA 文档。

一般普通无交互文档都是 `false`，使用 XML Forms Architecture (XFA) 的技术构建的交互动态表单文档返回 `true`，使用 AcroForms 技术实现的动态表单文档也会返回 `false`。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  console.log(pdfDocumentProxy.isPureXfa) // false
})
```

## pdfDocumentProxy.allXfaHtml

获取纯 XFA 的 PDF 文档的 HTML 数据。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  if (pdfDocumentProxy.isPureXfa) {
    console.log(pdfDocumentProxy.allXfaHtml)
  }
})
```

## pdfDocumentProxy.getPageMode()

获取 PDF 文档的页面模式。

* "UseNone"：不显示任何额外的面板，标准显示 PDF 页面。
* "UseThumbs"：显示页面缩略图面板。
* "UseBookmarks"：显示书签（大纲）面板，通常用于导航。
* "FullScreen"：以全屏模式显示 PDF 文档。
* "UseOC"：显示可选内容组（通常用于图层控制）。
* "UseAttachments"：显示附件面板，列出 PDF 中包含的附件。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getPageMode().then(mode => {
    console.log(mode) // UseNone
  })
})
```




