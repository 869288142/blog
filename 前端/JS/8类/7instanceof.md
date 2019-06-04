##对象关系

### 检测类关系

#### instanceof 检测对象和构造函数的关系
instanceof 操作符的左操作数是一个普通的对象，右操作数是一个函数。
```js
a instanceof Foo
```
instanceof 回答的问题是：在a 的整条\[[Prototype]] 链中是否出现Foo.prototype，换句话说，就是是否为Foo类的实例，以下是instanceof的polyfill
```js
function instanceOf(obj, constructorPrototype) {
  let curNode = obj
  while(curNode !== null) {
    curNode = curNode.__proto__ 
    if(curNode === constructorPrototype.prototype) {
      return true
    }
  }
  return false
}
```

#### isPrototypeOf 检测对象和对象的关系
```js
let o = {}
let b = Object.create(o)
let c = Object.create(b)
isPrototypeOf(c,o); // true
```
isPrototypeOf函数由两个参数组成，检测第一个参数原型链上是否出现第二个参数所指的对象，也就是检测对象是否出现在原型链上，以下是isPrototypeOf的polyfill
```js
function isPrototypeOf2 (L, R) {
  function F () {}
  F.prototype = R
  return L instanceof F
}
```