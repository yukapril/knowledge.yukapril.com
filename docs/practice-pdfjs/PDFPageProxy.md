---
sidebar_position: 6
---

# PDFPageProxy

## pdfPageProxy.pageNumber

获取当前页码，从 `1` 开始。

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getPage(1).then(pdfPageProxy => {
    console.log(pdfPageProxy.pageNumber)
  })
})
```

## pdfPageProxy.rotate

获取当前页面旋转角度。

* 0：页面不旋转，保持默认方向
* 90：页面顺时针旋转 90 度
* 180：页面旋转 180 度
* 270：页面顺时针旋转 270 度

```js
const pdfDocumentLoadingTask = pdfjsLib.getDocument({url: './demo.pdf'})
pdfDocumentLoadingTask.promise.then(pdfDocumentProxy => {
  pdfDocumentProxy.getPage(1).then(pdfPageProxy => {
    console.log(pdfPageProxy.rotate)
  })
})
```

