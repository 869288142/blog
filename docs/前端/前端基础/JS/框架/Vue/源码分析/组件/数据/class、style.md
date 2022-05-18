# class、style

## 设计理念

* 自动将style、class作用于根节点

* style与class会与现有的合并而不是取代


### 优点

* 绝大多数情况下，class与style都是作用于组件根节点，开发者无需处理这一统一逻辑

* 自动的style和class合并也十分方便

### 缺点：

暂无

## 源码分析：

class与style的逻辑应用范围太窄，这里只分析一些有趣的点


### style组合陷阱

详见style组合陷阱

### 解析style正则

```js
const parseStyleText = cached(function (cssText) {
  const res = {}
  const listDelimiter = /;(?![^(]*\))/g
  const propertyDelimiter = /:(.+)/
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      const tmp = item.split(propertyDelimiter)
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
    }
  })
  return res
})
```

