# new
new 操作符做了以下事情：
  1.创建一个对象，将对象赋值给this
```js
function Person(name, age) {
  console.log(this) //Person {}
}
let p = new Person('cj', 24) 
```
2.执行构造函数的代码，将构造器中的this.prop属性添加到this上
```js
function Person(name, age) {
  console.log(this) //Person {}
  this.name = name
  this.age = age
  console.log(this) //Person {name: 'cj', age: 24}
}
let p = new Person ('cj', 24)
```
3.为this对象设置原型为其f.prototype 设置构造函数的constructor指向构造函数本身
```js
function Person(name, age) {
  this.name = name
  this.age = age
  Object.setPrototypeOf(this, String.prototype) //相当于this.__proto__ = String.prototype
  Person.prototype.constructor = Person //这个熟悉可以用于分辨类型，现在常用instanceof 来鉴别原型
  return this //可有可无,隐式返回
}
let p = new Person('cj', 24) //由Person类型变成了String类型
console.log(p instanceof String) //true
console.log(p) //String {name: 'cj', age: 24}
```
4.隐式return this
先证明new 调用函数最终操作返回的时候函数的返回值
```js
function Person(name, age) {
  this.name = name
  this.age = age
  return {} //可有可无,隐式返回,这里若是返回基本类型、系统会返回this对象 可以试试 return null
}
let p = new Person('cj', 24)
console.log(p) //{} 证明new操作符对函数操作是返回其函数返回值
```

完整的new模拟实现
```js
function Person(name, age) {
  this.name = name
  this.age = age
}

function _new(f) {
  return function (...agrs) {  //利用闭包分离构造函数和参数
    let obj = {} //创建新对象
    Object.setPrototypeOf(obj, f.prototype)// 等同于obj.__proto__ = f.prototype 赋予新对象原型
    f.prototype.constructor = f //将构造器原型的constructor设置为构造器本身
    let result = f.apply(obj, args) //将参数赋值到新对象
    return result === 'object' ? result : obj //如果调用的构造函数有引用类型的返回值则返回其返回值，否则返回新对象
  }
}

let p = _new(Person)('cj', 24)
console.log(p) //Person {name: 'cj', age: 24}
```