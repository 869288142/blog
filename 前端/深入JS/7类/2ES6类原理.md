## 更好的类语法-class

### ES6语法
为了提供更友好的OOP编程体验，官方从ES6开始提供了类相关的语法糖，但是其本质仍然是原型委托
#### 写法区别
ES5写法
对于使用传统OOP语言JAVA、C++开发者来说，ES5点类语法和它们对OOP的认识差异很大，很容易让人感到困惑 
```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```
ES6写法
ES6的写法将背后的原型隐藏了起来，语法更偏向传统的OOP语言写法。
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
#### 实现原理
##### 属性
**类的属性现在分为实例属性和静态属性**
```js
class Point {
  static name = 'Point'
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

console.log(Point.a)
```
**静态属性**
静态属性实质是类族共享的属性，JavaScript将其放置在构造函数的对象上，通过static语法来执行Point.staticProp = value这个隐式操作。
**实例属性**
实例属性会在创建对象实例时，添加到每个实例上去，目前实例属性的书写正如上面所见要写在构造器里面，目前有一个提案如下：
```js
class Point {
  a = 1
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

console.log(new Point())
```
这个提案目前已经可以在babel支持下使用，这个提案的好处就一目了然，也简洁，暂时没发现它的独特魅力，我觉得在一些不需要在构造函数初始化的属性写在这里比较有优势。

##### 方法
**值得注意的是，ES6中类所有方法都是不可枚举的**。
**静态方法**
静态方法和静态属性类似也是属于整个类族的方法,和静态属性一样，它放置在构造函数对象上,需要注意的是，静态方法的this指向构造函数而不是实例
```js
class Point {
  static test() {
    console.log("test")
  }
}

Point.test()
```
**实例方法**
实例方法采用了原型模式，构造函数本身也放在原型上，这样原型对象作为整个函数的命名空间
```js
class Point {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')'
  }
}

console.log(new Point().toString === Point.prototype.toString)
```
##### 构造函数
ES6的构造函数在不使用new运算符调用时，会报错，解决了一下的隐患
```js
function Person () {
  this.name = "cj"
}
Person() 
window.name // cj
```
在以往的组合构造模式创建的对象时，不需要new也能调用构造函数，而在非严格模式下，this指向全局对象，这就使得开发者可能无意间为全局对象添加了属性，而ES6提供了显示的阻止
```js
console.log(Point === Point.prototype.constructor) //true
console.log(new Point.prototype.constructor(1,2)) // Point { x: 1, y: 2 }
```
1.从这里我们看到了类本身指向原型上的constructor，使用new Point() 等于调用new Point.prototype.constructor(),在这里我惊讶地发现原先在创建函数模式中可有可无的constructor属性，终于派上了用处
2.由于constructor本身只是构造函数原型的一个方法，毫无疑问的是，再次定义覆盖上一个,但是JavaScript本身没给你这个机会，直接提示SyntaxError: A class may only have one constructor,之所以我想到定义多个构造函数，是为了尝试java中的构造函数重载行为，但是在JavaScript中，函数的传入参数本身就是可选的,可以说，JavaScript本身就提供了默认的函数重载行为，当然这只是在构造函数上，没有指定的参数会被初始化为undefined
```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  constructor(x) {
    this.x = x
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
// SyntaxError: A class may only have one constructor
```

### 小结
ES6为了我们隐藏了原型构建的细节，提供了更友好的clas封装，其原理是基于原型模式和构造函数模式的这组合，在一些诸如非new调用显式阻止上做了优化，而且在靠拢真正的OOP语言上更进一步。