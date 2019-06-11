# ES6继承


## 区别

ES5 写法

```js
function Point(x, y) {
  this.x = x
  this.y = y
}
Point.prototype.show = function() {
  console.log(`show ${this.x} ${this.y}`)
}
function ColorPoint(x, y, color) {
  this.color = color
  Point.call(this, x, y)
}
Object.setPrototypeOf(ColorPoint.prototype, Point.prototype)
ColorPoint.prototype.toString = function() {
  console.log(`${this.x} ${this.y} ${this.color}`)
}

let c = new ColorPoint(1, 2, 'red')
c.show()
```

ES6 写法

```js
class Point {
  show() {
    console.log(`show ${this.x} ${this.y}`)
  }
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y) // 调用父类的constructor(x, y)
    this.color = color
  }
  toString() {
    console.log(`${this.x} ${this.y} ${this.color}`)
  }
}
```

与ES6相比,有以下差异

1.原来的借用构造函数形式变化，在ES6中新的关键字super可以代指父类构造器，通过super()即可调用父类构造器来初始化子类中属于父类继承的属性，值得注意的是，**super不像this是运行时决定的，它和一般变量一样，基于词法作用域绑定，也就是继承的是谁，那么super就指向谁，不能再后期动态改变**
ES5
```js
function ColorPoint() {
  // 需要借用父类的构造函数来初始化属于父类的属性
  Point.call(this,arguments)
}

class ColorPoint extends Point {
  constructor(x, y, color) {
  // 直接用super代指父类构造器，此时
  super(x, y) 
  this.color = color
}
```
ES6
```js
class ParentA {
constructor() { this.id = "a"; }
foo() { console.log( "ParentA:", this.id ); }
}
class ParentB {
constructor() { this.id = "b"; }
foo() { console.log( "ParentB:", this.id ); }
}
class ChildA extends ParentA {
foo() {
super.foo();
console.log( "ChildA:", this.id );
}
}
class ChildB extends ParentB {
foo() {
super.foo();
console.log( "ChildB:", this.id );
}
}
var a = new ChildA();
a.foo(); // ParentA: a
// ChildA: a
var b = new ChildB(); // ParentB: b
b.foo(); // ChildB: b

b.foo.call( a ); // ParentB: a 可以看到这里不是ParentA而是ParentB，没用在call的时候动态改变其super绑定
// ChildB: a 
```

2.**不需要手动链接原型链，extends作为链接原型链的语法糖，可以帮我们自动完成原型链的链接**
ES5
```js
Object.setPrototypeOf(ColorPoint.prototype, Point.prototype)
```
ES6
```js
class ColorPoint extends Point 
```
3.**被忽略的原型链-构造函数原型链**，在ES6中，由于静态方法的出现，extends运算符在背地里创建了除原型链的另外一个原型链
```js
class Point {
  show() {
    console.log(`show ${this.x} ${this.y}`)
  }
  static test() {
    console.log("test")
  }
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y) // 调用父类的constructor(x, y)
    this.color = color
  }
  toString() {
    console.log(`${this.x} ${this.y} ${this.color}`)
  }
}
console.log(Object.getPrototypeOf(ColorPoint) === Point) // true
ColorPoint.test()// test
```
4.对象生成的步骤不一样，**ES5是先生成子类this然后用父类构造器装饰this，ES6则是必须调用super()获取父类的this，然后用子类构造器修饰this**，不调用super会报错,改变了对象获取方式，还可以使得扩展原生对象成为可能，比如定义自己的数组
```js
class Point {
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    // super(x, y) // 调用父类的constructor(x, y)
    this.color = color
  }
}
let c = new ColorPoint()
```