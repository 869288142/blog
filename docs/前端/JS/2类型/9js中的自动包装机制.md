有一行语句：
```js
1.toString() //error
```
那么问题来了，为什么报错？

我的第一想法就是1是一个基本类型，所以它没有toString方法

嗯，理直气壮

接下来有大佬show me code
```js
let n = 1 
n.toString() //1
```
这有点小尴尬

我突然想起来之前Java中基本类型与之对应包装类的自动包装和自动拆包
```java
1 //自动装箱
2 Integer total = 99;
3 
4 //自动拆箱
5 int totalprim = total;
```
比较一下
ps：由于js中弱类型 所以没法声明变量其类型
```js
  // 重头戏 自动装箱
  let n = 1
  n.toString()
  // 自动拆箱
  let nObj = new Number (1)
  let r = nObj + 1 //r = 2 
  // 等同于这一行 nObj方法用于获取Number包装类包装的value值
  let r = nObj.valueOf() +1
  
```
我们可以做一个验证
```js
  new Number(1).toString() // 1 pass 
```

嗯，我尝试打断点跟踪错误关键点

失败了，所以我写了一段小代码来帮助我们分辨
```js
(function (rest) {
  rest.forEach( e => {
    try{
      e.toString()
    } catch(e) {
      console.log(e)
    }
  })
})([undefined, null, true, 1, '2', {}, Symbol('3')])
```
这里只有undefined null 被以变量形式访问仍然toString报错

这里可以按照转换为包装类的理解 Boolean Number Symbol
而undefined 和 null 虽然使用Objcet.prototype.toString().call(type) 可以得到Undefined 、 Null 这两种类型 undefined 、 null 作为对应类型的唯一专用值(ECMAScript 原型类型定义)

