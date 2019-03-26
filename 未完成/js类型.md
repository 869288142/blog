语言类型 类型决定操作数的操作方法、值的行为

ECMAScript 语言类型
    
    Undefined Null Boolean String Number Object

学习类型有助于我们合理利用值的自带行为，和提高在类型转换时，我们处理的能力

举个例子就是说,我们可以用1，0代表一个close/on状态，但是，boolean 这个类型，用来描述一个只有两个状态的值时，更有可读性，在falsy(假值)处理的时候，我们能够辨认到falsy
可能有哪些，从而认知到程序的边界在哪里，出现问题时，能够快速定位

javascript内置类型,除对象以外，其余6种被称为基本类型

    null undefined boolean number string object symbol


undefined

区分undefined和undeclared(未定义)
```js
  var a //undefined 已定义未赋值
  b //undeclared  未定义
```
看一段代码
```js
// 如果DEBUG未定义会报错
if(DEBUG) {
 //dosomething 
}

// DEBUG未定义时，typeof DEBUG 返回 undefined
if(typeof DEBUG !== "undefined") {
  //dosomething
}
```
如果我们的全局变量在开发环境中，设置到debug.js,开发环境中是不加载debug.js的，那么直接使用DEBUG，就会出现RefenceError错误，当然我们不需要这个错误，只是希望，没有这个变量，或者这个变量未定义时，不触发这个条件

验证一个变量未被定义或者未被赋值
```js
typeof v === "undefined"
```

区分undefined和null
undefined 从未赋值 非关键词
null 曾经赋值、目前没值  关键词

```js
// 非严格
undefined = 2 //可以

// 可以定义一个变量叫undefined,但是永远不要这样做

function foo() {
"use strict";
var undefined = 2;
console.log( undefined ); // 2
}
foo();
```

如果区分一个null呢
```js
var a = null
typeof  a // "object"而不是"null"

(!a && typeof === "object") //true
Ob
```

string 有字符串数组的类似操作，但不是字符串数组 每次操作都是返回一个新的字符串

number 基于IEEE 754标准实现 js采用的是双精度(64位二进制)

IEEE 754规范实现都有的问题
```js
0.1 + 0.2 === 0.3 //false
// 原因是 0.1 0.2 不精确，相加不等于0.3 而是一个类似0.30000000004 的值，所以条件判断结果为false
```
知道偏差值的存在，我们可以利用这一点来修正这个错误
```js
// 设置一个误差范围值，js通常来说是2^-52
// 一个ES6 Number提供的误差值 EPSILON

// polyfill
if(!Number.EPSILON){
  Number.EPSILON = Math.pow(2, -52)
}

//判断相等的方式
function numbersCloseEnoughToEqual(n1,n2) {
return Math.abs( n1 - n2 ) < Number.EPSILON;
}
var a = 0.1 + 0.2;
var b = 0.3;
numbersCloseEnoughToEqual( a, b ); // true
numbersCloseEnoughToEqual( 0.0000001, 0.0000002 ); // false
```
数字中的特殊值：
1.无效数值 NaN 操作数不为数字类型或者无法被解析为十进制或十六进制数字
```js
var a = 2 / "foo"
a == NaN // false
a === NaN // false
//更有趣的是
NaN != NaN // true
```
判断NaN
```js
// 内置的isNaN
var a = 2 / "foo";
var b = "foo";
a; // NaN
b; "foo"
window.isNaN( a ); // true
window.isNaN( b ); // true——晕！
```
isNaN对非数字类型直接返回true,我们不能直接使用它来检测NaN
```js
// 先检测数值，再用isNaN来检测数字是否是NaN
typeof n === "number" && window.isNaN(n)

// 由于NaN是js中唯一一个自反的值，我们可以这样检测
n !== n

// 好消息是，ES6，Number.isNaN帮我们封装了这个操作
Number.isNaN() //现在只有NaN返回true
```

2.无穷 Infinity 在除以0或者数值溢出时出现
```js
// 除以0
var a = 1 / 0 // Infinity
var b = -1 / 0 // -Infinity

// 数值溢出
var a = Number.MAX_VALUE; // 1.7976931348623157e+308
a + a; // Infinity
a + Math.pow( 2, 970 ); // Infinity
a + Math.pow( 2, 969 ); // 1.7976931348623157e+308
```

3.零值 -0，在乘除0的时候会出现
```js
var a = 0 / -3; // -0
var b = 0 * -3; // -0
```
-0，在数字表示其他信息(比如移动的方向)，此时符号代表了它的方向信息，如果没有符号，信息就会丢失

```js
// 区分0 和 -0
-0 === 0 // true

function isNegZero(n) {
  n = Number( n )
  return (n === 0) && (1/n === -Infinity)
}
isNegZero(-0) //true
isNegZero(0) //true
```
ES6提供处理NaN和0、-0以及其他情况绝对相等的方法 Object.is(),不过在效率和可读性，不如使用===，和类型上的判断方法，Object.is用来处理特殊相等，比如0， -0
```js
// polyfill
if (!Object.is) {
  Object.is = function(v1, v2) {
  // 判断是否是-0
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2;
  }
  // 判断是否是NaN
  if (v1 !== v1) {
    return v2 !== v2;
  }
  // 其他情况
    return v1 === v2;
  };
}

var a = 2 / "foo";
var b = -3 * 0;
Object.is( a, NaN ); // true
Object.is( b, -0 ); // true
Object.is( b, 0 ); // false
```

对象

js的传递方式是值传递，特点就在于我们无法通过改变一个值而引起同一值的改变
基本类型是值复制
对象是引用复制
```js
var a = [1,2,3];
var b = a;
a; // [1,2,3]
b; // [1,2,3]
// 然后
b = [4,5,6];
a; // [1,2,3]
b; // [4,5,6]

b=[4,5,6] 并不影响a 指向值[1,2,3]，除非b 不是指向数组的引用，而是指向a 的指针，
但在JavaScript 中不存在这种情况！
```

显示强制类型转换

隐式强制类型转换

字符串 数字 布尔转换

基本规则 抽象操作

ToString 非字符串转换到字符串

所有的对象toString都被委托到Object.prototype.toString(),除非自己定义了toString方法,当然内置类型，已经帮我们定义了一些合适的toString方法
```js
let o = {

}
console.log(o); // {}
console.log(`${o}`) // [object Object]

var a = [1,2,3];
a.toString(); // "1,2,3"
```
ToNumber 转换到数字
其中true 转换为1，false 转换为0。undefined 转换为NaN，null 转换为0。

对象会进行抽象操作ToPromitive，先检查valueof方法，有就返回基本类型，然后强制转换，没有就toString返回，返回强制转换，两者都没，就会出现TypeError

ToBoolean

假值
• undefined
• null
• false
• +0、-0 和NaN
• ""

假值对象 
```js
// 不是包装了假值的对象
var a = new Boolean( false );
var b = new Number( 0 );
var c = new String( "" );

var d = Boolean( a && b && c );
d; // true
```

定义: 浏览器在js语法基础上定义了外来值
```js
doucment.all
```
```
document.all 并不是一个标准用法，早就被废止了。
有人也许会问：“既然这样的话，浏览器能否将它彻底去掉？”这个想法是好的，只不过
仍然有很多JavaScript 程序在使用它。
那为什么它要是假值呢？因为我们经常通过将document.all 强制类型转换为布尔值（比如
在if 语句中）来判断浏览器是否是老版本的IE。IE 自诞生之日起就始终遵循浏览器标准，
较其他浏览器更为有力地推动了Web 的发展。
if(document.all) { /* it’s IE */ } 依然存在于许多程序中，也许会一直存在下去，这对
IE 的用户体验来说不是一件好事。
虽然我们无法彻底摆脱document.all，但为了让新版本更符合标准，IE 并不打算继续支持
if (document.all) { .. }。
“那我们应该怎么办？”
“也许可以修改JavaScript 的类型机制，将document.all 作为假值来处理！”
```

真值

字符串和数字之间的转换
```js
var a = 42;
var b = String( a );
var c = "3.14";
var d = Number( c );
b; // "42"
d; // 3.14

// 其他方法
var a = 42;
var b = a.toString();
var c = "3.14";
var d = +c;
b; // "42"
d; // 3.14
```
+的应用
```js
// 获取当前时间戳
var timestamp = +new Date();
// 可读性更好
var timestamp = Date.now();
```
~
```js
~42 // -(42+1) ===> -43
~x // -(x+1)

var a = "Hello World";
if (a.indexOf( "lo" ) >= 0) { // true
// 找到匹配！
}
if (a.indexOf( "lo" ) != -1) { // true
// 找到匹配！
}
if (a.indexOf( "ol" ) < 0) { // true
// 没有找到匹配！
}
if (a.indexOf( "ol" ) == -1) { // true
// 没有找到匹配！
}

这些条件暴露了indexOf的底层实现，返回-1或者大于0的值，我们需要得到一个真值或者假值，可以这么做

var a = "Hello World";
~a.indexOf( "lo" ); // -4 <-- 真值!
if (~a.indexOf( "lo" )) { // true
// 找到匹配！
}
~a.indexOf( "ol" ); // 0 <-- 假值!
!~a.indexOf( "ol" ); // true
if (!~a.indexOf( "ol" )) { // true
// 没有找到匹配！
}
~x 只在x为-1返回0，其余情况非0都为真

这部分ES提供了新语法,显式为我们提供true或者false而无需手动转换
a.includes("lo") //true
```
显式解析数字字符串
```js
var a = "42";
var b = "42px";
Number( a ); // 42
parseInt( a ); // 42
Number( b ); // NaN
parseInt( b ); // 42
```
在要求字符串为全数字时，使用转换，非数字部分不影响结果，就解析

注意pareseInt和pareseFloat第二个参数,不制定的话，会导致采用字符串第一个字符来决定，最后手动设置进制，ES5之后默认是10进制

显式转换为布尔值 Boolean(v) !!v
```js
var a = "0";
var b = [];
var c = {};
var d = "";
var e = 0;
var f = null;
var g;
Boolean( a ); // true
Boolean( b ); // true
Boolean( c ); // true
Boolean( d ); // false
Boolean( e ); // false
Boolean( f ); // false
Boolean( g ); // false
```
隐式强制转换 可以减少冗余 让代码更简洁

字符串和数字

通常的理解是看操作数是否含有字符串
```js
var a = "42";
var b = "0";
var c = 42;
var d = 0;
a + b; // "420"
c + d; // 42

然而
var a = [1,2];
var b = [3,4];
a + b; // "1,23,4"
```
我们看一下ES5规范怎么定义：

根据ES5 规范11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串
的话，+ 将进行拼接操作。如果其中一个操作数是对象（包括数组），则首先对其调用
ToPrimitive 抽象操作（规范9.1 节），该抽象操作再调用[[DefaultValue]]（规范8.12.8
节），以数字作为上下文。

字符串+ 的操作数交换位置后结果可能不一致

布尔值到数字的隐式强制类型转换

隐式强制转换为布尔值的场合

    (1) if (..) 语句中的条件判断表达式。
    (2) for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。
    (3) while (..) 和do..while(..) 循环中的条件判断表达式。
    (4) ? : 中的条件判断表达式。
    (5) 逻辑运算符||（逻辑或）和&&（逻辑与）左边的操作数（作为条件判断表达式）。

&& 和|| 运算符的返回值并不一定是布尔类型，而是两个操作数其中一个的值。
```js
var a = 42;
var b = "abc";
var c = null;
a || b; // 42
a && b; // "abc"
c || b; // "abc"
c && b; // null

a || b;
// 大致相当于(roughly equivalent to):
a ? a : b;
a && b;
// 大致相当于(roughly equivalent to):
a ? b : a;
```
符号的强制类型转换
```js
var s1 = Symbol( "cool" );
String( s1 ); // "Symbol(cool)"
var s2 = Symbol( "not cool" );
s2 + ""; // TypeError
```

宽松相等和严格相等

抽象相等比较算法 ==行为
类型相等 就比较值
类型不相等 就进行隐式类型转换

字符串和数字之间的相等比较
(1) 如果Type(x) 是数字，Type(y) 是字符串，则返回x == ToNumber(y) 的结果。
(2) 如果Type(x) 是字符串，Type(y) 是数字，则返回ToNumber(x) == y 的结果。

其他类型和布尔类型之间的相等比较
(1) 如果Type(x) 是布尔类型，则返回ToNumber(x) == y 的结果；
(2) 如果Type(y) 是布尔类型，则返回x == ToNumber(y) 的结果。

```js
var x = true;
var y = "42";
x == y; // false

Type(x) 是布尔值，所以ToNumber(x) 将true 强制类型转换为1，变成1 == "42"，二者的
类型仍然不同，"42" 根据规则被强制类型转换为42，最后变成1 == 42，结果为false。
我个人建议无论什么情况下都不要使用== true 和== false
```

null和undefined 相等比较

(1) 如果x 为null，y 为undefined，则结果为true。
(2) 如果x 为undefined，y 为null，则结果为true。

对象和非对象之间的相等比较

1) 如果Type(x) 是字符串或数字，Type(y) 是对象，则返回x == ToPrimitive(y) 的结果；
(2) 如果Type(x) 是对象，Type(y) 是字符串或数字，则返回ToPromitive(x) == y 的结果

比较少见的情况

修改对象的valueOf返回其他数字
```js
var i = 2;
Number.prototype.valueOf = function() {
  return i++;
};
var a = new Number( 42 );
if (a == 2 && a == 3) {
  console.log( "Yep, this happened." );
}
```

假值的相等比较
```js
"0" == null; // false
"0" == undefined; // false
"0" == false; // true -- 晕！
"0" == NaN; // false
"0" == 0; // true
"0" == ""; // false
false == null; // false
false == undefined; // false
false == NaN; // false
false == 0; // true -- 晕！
false == ""; // true -- 晕！
false == []; // true -- 晕！ 1
false == {}; // false 2
"" == null; // false
"" == undefined; // false
"" == NaN; // false
"" == 0; // true -- 晕！
"" == []; // true -- 晕！ 1
"" == {}; // false  2
0 == null; // false
0 == undefined; // false
0 == NaN; // false
0 == []; // true -- 晕！ 1
0 == {}; // false 2
```
极端情况
```js
[] == ![] //true
// 分解
[] == false
[] == 0
"" == 0
0 == 0 //true
```
如何处理7种特殊情况
避免 == false
注意 "" == 0 "" === []

安全措施
值含有false true [] "" 0 不要使用==

抽象关系比较
比较双方首先调用ToPrimitive，如果结果出现非字符串，就根据ToNumber 规则将双方强
制类型转换为数字来进行比较。
```js
var a = [ 42 ];
var b = [ "43" ];

a < b; // true
b < a; // false
```

如果比较双方都是字符串，则按字母顺序来进行比较：
```js
var a = [ "42" ];
var b = [ "043" ];
a < b; // false
```
这里可以看到一个sort的常见bug，默认情况下，sort回调是、
```js
(a, b) => a>b 
//会比较齐位部分的字母顺序之和
var a = [5,15];
console.log(a.sort()) // 15, 5
```