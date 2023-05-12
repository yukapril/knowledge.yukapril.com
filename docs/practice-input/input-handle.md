---
sidebar_position: 3
draft: true
---

# 受控组件输入框处理

## 原生输入框受控处理

这个很简单。在输入后，直接移除不需要的内容，就算是受控了。

```html
<input type="text" id="input" placeholder="只能输入4个数字">
```

```js
const input = document.getElementById('input')
input.addEventListener('input', () => {
  input.value = formatter(input.value)
})

// 受控处理
function formatter (value) {
  let val = value
  val = value.replace(/\D/g, '')
  if (val.length > 4) val = val.substring(0, 4)
  return val
}
```

## vue 输入框受控处理

