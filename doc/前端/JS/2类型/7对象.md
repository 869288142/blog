### 开篇

#### 值的传递方式 
1.值传递 表示传递过程中复制了值
2.引用传递  表示传递过程中传递的是值的引用

#### js的传递方式 值传递
看下面的例子
```js
// 这里值传递很容易理解 
var a = 1
var b = a // a = 1 b = 1
b = 3 // a = 1 b = 3

// 引用也是值传递
var a = [1,2,3];
var b = a;
a; // [1,2,3]
b; // [1,2,3]


// 然后
b = [4,5,6];
a; // [1,2,3]
b; // [4,5,6]

// 假如是引用传递
b = [4,5,6];
a; // [4,5,6]
b; // [4,5,6]

b=[4,5,6] 并不影响a 指向值[1,2,3]，除非b 不是指向数组的引用，而是指向a 的指针，在C++你可以用指针来实现这种变化
但在JavaScript 中不存在这种情况！

```

#### 如何生成对象
1.使用对象字面值
```js
let person = {
  age: 21
}
```
2.使用构造函数
```js
function Person(age) {
  this.age = age
}
let person = new Person(age)
```

我们先看一下原生构造函数

    String() // 字符串
    Number() // 数字 
    Boolean() // 布尔
    Array() // 数组
    Object() // 对象
    Function() // 函数
    RegExp() // 正则
    Date() // 日期
    Error() // 异常父类
    Symbol()——ES6 中新加入的！ // symbol

#### 如何区分内置对象
所有typeof 返回值为"object" 的对象（如数组）都包含一个内部属性[[Class]],目前ES6好像删除了这个属性，且在Symbol上开放了toStringTag使得开发者能够使用修改Object.prototype.toString.call()的行为,可以对[Object xxx]中的xxx进行定制
```js
Object.prototype.toString.call( null )
// "[object Null]"

Object.prototype.toString.call( undefined )
// "[object Undefined]"

Object.prototype.toString.call( "abc" )
// "[object String]"

Object.prototype.toString.call( 42 )
// "[object Number]"

Object.prototype.toString.call( true )
// "[object Boolean]"

Object.prototype.toString.call( Symbol())
// "[object Symbol]"

Object.prototype.toString.call( {} )
// "[object Object]"

Object.prototype.toString.call( [1,2,3] )
// "[object Array]"

Object.prototype.toString.call( new Date() )
// "[object Date]"
Object.prototype.toString.call( new Error() )
// "[object Error]"

Object.prototype.toString.call( new Function () )
// "[object Function]"

Object.prototype.toString.call( /regex-literal/i );
// "[object RegExp]"
```
#### 对象包装和拆封
##### 包装
默默无闻的对象包装和拆封，但很重要，注意下面的例子，"abc"是我经常使用的字符串表达方式，它是基本值,是没有.length和.toString方法的，需要把它封装成对象才能访问这些属性或者方法
```js
  // 自动包装前
  var a = new String("abc")
  a.length // 3
  a.toUpperCase // ABC
  // 自动包装后
  var a = "abc" 
  a.length // 3
  a.toUpperCase // "ABC"
```
一般情况下，最好是让js引擎来决定使用封装对象的时机，就是说我们优先考虑"abc"、42 而不是 new String("abc") new Number(42)

特殊情况 封装对象结果和基本值不同
```js
var a = new Boolean( false ); // 对象是真值
if (!a) {
console.log( "Oops" ); // 执行不到这里
}
```

##### 拆封
使用包装对象的valueof函数即可
```js
var a = new String( "abc" );
var b = new Number( 42 );
var c = new Boolean( true );
a.valueOf(); // "abc"
b.valueOf(); // 42
c.valueOf(); // true
```

#### 原生函数作为构造函数
```js
var a = new Array( 1, 2, 3 );
a; // [1, 2, 3]

var b = [1, 2, 3];
b; // [1, 2, 3]
```
##### 产生问题
###### Array
Array作为构造函数时，单个参数被认为是预设数组的长度
1. 这个异常行为很容易被人忘记导出容易犯错
2. 预设长度会导致空数组，就是数组包含未赋值的元素，更严重的问题是，**数组api对这种称为稀疏数组的行为不一致**
```js
var a = new Array( 3 ); // [empty * 3] 而不是 [3] 

a.map((e, index) => index) // [empty * 3] 而不是 [0，1， 2]

a.join("-") //  - -
```
**生成指定长度undefined单元数组**
```js
var a = Array.apply( null, { length: 3 } );
a; // [ undefined, undefined, undefined ]

ES6 Array.from()
var a = Array.from({length: 3})
a; // [ undefined, undefined, undefined ]
```

###### Object()
使用Object构造对象，需要逐个赋值
```js
var c = new Object();
c.foo = "bar";
c; // { foo: "bar" }
var d = { foo: "bar" };
d; // { foo: "bar" }
```
###### Function
需要在动态定义函数和函数体时才使用
```js
var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6));
```

###### RegExp
在动态定义正则表达式时使用
```js
var name = "Kyle";
var namePattern = new RegExp( "\\b(?:" + name + ")+\\b", "ig" );
var matches = someText.match( namePattern );
```
###### Date
用来获取时间戳
```js
new Date().getTime()

// ES6 新API
Date.now
```
###### Error
获取函数调用栈信息和产生错误的代码行号
```js
```

###### Symbol()
```js
Symbol() /不能使用new
```