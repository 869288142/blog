###起因
ES6在原先的6种内置类型上，引入了新的原始类型，其根本原因在与提供独一无二的变量，来解决变量冲突。

#####symbol 用途
1. 解决变量冲突
2. 模拟私有变量(使用WeakMap才能真正实现)
3. 元编程(Symbol.iterator、Symbol.iterator)

#####symbol
```js
  typeof v === 'symbol'
```
