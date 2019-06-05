# 迭代器
## 遍历器（Iterator)设计目的

    一是为各种数据结构，提供一个统一的、简便的访问接口

    二是使得数据结构的成员能够按某种次序排列

    三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费

实例 
Map下的Symbol(Symbol.iterator)属性
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190221171952489-1544170293.png)

迭代协议(规范)
```js
[Symbol.iterator]: function() {
    return {
      next: function() {
        return value
      }
    }
  }
```
实例 默认的对象没有实现iterator接口，我们定义一个，使得for of 可以直接作用在对象上
```js
const obj = {
  name: "cj",
  age: 24,
  [Symbol.iterator]: function() {
    let nextIndex = 0
    // 获取当前对象的可枚举属性
    let keys = Object.keys(this)
    // 保留this
    let that = this
    return {
      next: function (){
        return nextIndex < keys.length
          ? { value: that[keys[nextIndex++]], done: false }
          : { value: undefined, done: true }
      }
    }
  }
}

for (let e of obj) {
  console.log(e)
}
```
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190221173554629-753127394.png)

##  用到迭代器的场合

    for of
    
    ... spread运算符 涉及到数组

    对数组和Set结构赋值

    其他涉及到数组参数的，比如Array.form Promise.all() Promise.race

##  默认实现Iterator接口对象

    String
    Array
    Map
    Set
    TypedArray
    函数的 arguments 对象
    NodeList 对象
