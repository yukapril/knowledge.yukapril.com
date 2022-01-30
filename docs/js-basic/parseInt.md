# parseInt

`parseInt` 是日常用于把字符串变成数字的常用方法。甚至有时候我们还用它进行取整。但这里面细节特别多，甚至有一些用法错误。

## 语法

具体的语法规范<sup>[[1]](#参考)</sup>不再贴出来，我尽可能简单来说：

```js
parseInt(string, radix)
```

它有两个参数，第一个是  `被解析的值` ，第二个是 `进制基数`。两个参数需要分别来讲。

## 语法-进制基数

首先是，这个值会被转成数值。官方说法是 `ToInt32`，这个简单理解为转成数字就好了。

`ToInt32` 规则大概是：

* 先进行数字化，进行 `ToNumber`；
* 如果是 `NaN` `+0` `-0` `Infinity` 之类，返回 `0`；
* 其他情况，主要是取绝对值，在进行向下取整，即 `floor(abs(number))`；
* 当然还有一些边界情况，这个一般遇不到。

```js
parseInt('123', '10')
// 等价于
parseInt('123', 10) //=> 123

parseInt('123', '10.9')
// 等价于
parseInt('123', 10) //=> 123
```

处理后的结果，如果小于 `2` 或者大于 `36`，此时是非法的，直接就返回 `NaN`。

```js
parseInt('123', 45) //=> NaN
parseInt('123', -2) //=> NaN
```

如果是 `0`，默认当做 `10` 处理。

```js
parseInt('123', 0) //=> 123
```

如果不传参数，那么如果 `被解析的值` 是 `0x` `0X` 开头（当然是长度超过 2 才算），此时默认当做 `16` 处理。

```js
parseInt('0x123')
// 等价于
parseInt('0x123', 16) //=> 291 
```

如果不传参数，那么如果 `被解析的值` 是 `0` 开头（当然是长度超过 1 才算），那么默认可能当做 `8` 处理，也可能当做 `10` 处理。这一条仅在古老的浏览器有效，ECMAScript 5 之前。

最后，默认当做 `10` 处理。

## 语法-被解析的值

这个值分为两种情况，一种是 `String`，另一种是 `非 String`。

先说 `非 String` 的情况。这个时候，需要把此值转换为 `String`，即 `String(value)`。

例如：

```js
parseInt(true, 10)
// 等价于
parseInt(String(true), 10)
// 等价于
parseInt('true', 10)

parseInt(15, 10)
// 等价于
parseInt(String(15), 10)
// 等价于
parseInt('15', 10)
```

之后就可以按照参数是 `String` 的方式来处理了。具体 `ToString` 的逻辑，可以参考另一篇文章 [ToString 处理方案](/js-basic/toString.html)。

> 最复杂的 `ToString`，我单独拆出来一篇文章单独讨论了，否则本文太长。

剩下的处理部分就简单多了。

1. 看字符串前面是否有空格之类，有的话可以忽略，如：

```js
parseInt('  123', 10) //=> 123
```

2. 如果字符串一开始是合法的，后续有不合法字符，则合法字符部分正常解析，不合法部分忽略：

```js
parseInt('123a', 10)
// 123合法，a不合法。则相当于
parseInt('123', 10) //=> 123

parseInt('123abcd', 12)
// 123abc合法，d不合法。则相当于
parseInt('123abc', 12) //=> 24755
```

这里要注意的就是，不是所有字符都是非法的，比如上面的例子 `parseInt('123abcd', 12)`。

## 参考

[1] [浏览器工作原理与实践](https://time.geekbang.org/column/article/134456)

[2] [window.setTimeout MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)