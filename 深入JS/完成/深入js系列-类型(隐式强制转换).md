###隐式强制转换
在其可控的情况下，减少冗余，让代码更简洁，很多地方都进行了隐式转换，比如常见的三目表达式、if()、for()、while、逻辑运算符 || &&，适当通过语言机制，抽象和隐藏一些细枝末节，有助于提高代码可读性，以三目表示式为例
```js
a? trueAction : falseAction

!!a ? trueAction : falseAction
```

1.字符串和数字之间的隐式转换
通过重载，+ 运算符即能用于数字加法，也能用于字符串拼接。JavaScript 怎样来判断我们
```js
var a = "42";
var b = "0";
var c = 42;
var d = 0;
a + b; // "420"
c + d; // 42
```
通常我们的理解是，两个操作数中至少其中之一含有字符串，结果就为字符串，这种解释对了一半,看下面例子
```js
var a = [1,2];
var b = [3,4];
a + b; // "1,23,4" 这里如何解释呢
```

我们得看一下ES5规范：

    根据ES5 规范11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其中一个操作数是对象（包括数组），则首先对其调用ToPrimitive 抽象操作（规范9.1 节），该抽象操作再调用[[DefaultValue]]（规范8.12.8
    节），以数字作为上下文

简单来说，如果+其中的一个操作数是字符串(或者通过此规范能得到字符串)，则进行字符串拼接，否则执行数字加法

1,23,4的过程解析：

    数组的valueOf() 操作无法得到简单基本类型值，于是它转而调用toString()。因此上例中的两个数组变成了"1,2" 和"3,4"。+ 将它们拼接后返回"1,23,4"。

这里有一个坑经常被提及
```js
[]+ {} // "[object Object]"
{} + [] // 0
```
[] + {} 

    [].toSting()的结果是"" + {} ，这是相当于隐式将{}转换为字符串，由于valueof返回自身，所以转向了toString方法，而一般对象没没有设置toString方法的话，默认是调用Object.prototype.toString,所以最终结果是 "[obejct Obejct]"

{} + [] 

    {} 被认为是一个空白代码块，解析的是 + [],此时 [].valueof返回是数组本身，而不是基本值，转而调用toString,返回了"",然后使用Number("")转换成数字，最后结果是0

这里有一个需要注意的地方 a+""和String(a)区别在于，a+ ""会根据ToPrimitive抽象操作规则，a+ ""会对a调用valueOf方法，然后通过ToString抽象操作将返回值转换为字符串，而String(a)则是直接调用ToString
```js
var a = {
  valueOf: function() { return 42; },
  toString: function() { return 4; }
};
a + ""; // "42"
String( a ); // "4"
```
目前ES6对ToPrimitive抽象操作在Symbol上定义了一个名为Symbol.toPrimitive变量来供我们改写ToPrimitive行为，看下面例子
```js
// hint表示js引擎获取到的操作偏好
let obj = {
  [Symbol.toPrimitive](hint) {
    if(hint === 'number'){
      console.log('Number场景');
      return 123;
    }
    if(hint === 'string'){
      console.log('String场景');
      return 'str';
    }
    if(hint === 'default'){
      console.log('Default 场景');
      return 'default';
    }
  }
}
console.log(2*obj); // Number场景 246
console.log(3+obj); // String场景 3default
console.log(obj + "");  // Default场景 default
console.log(String(obj)); //String场景 str
```

目前内置对象对Symbol.ToPrimitive使用，比如Date对象
```js
var a = [1, 2, 3]

a.valueOf = function () {

    return 'hello'

}

a.valueOf() // "hello"

a.toString() // "1,2,3"

'' + a // "hello"

var date = new Date()

date.valueOf() // 1536416960724

date.toString() // "Sat Sep 08 2018 22:29:20 GMT+0800 (中国标准时间)"

'' + date // "Sat Sep 08 2018 22:29:20 GMT+0800 (中国标准时间)"

这里date.valueOf能够获取基本值，但是行为被Symbol.ToPrimitive定义为优先返回toString
```

2.布尔值到数字的隐式强制转换
再将某些复杂的布尔逻辑转换为数字加法的时候，隐式强制转换能派上大用处，当然情况比较少见，特殊情况特殊处理
例如我们需要保证参数中只能有一个为true，
```js
function onlyOne(a,b,c) {
  return !!((a && !b && !c) ||
  (!a && b && !c) || (!a && !b && c));
}
var a = true;
var b = false;
onlyOne( a, b, b ); // true
onlyOne( b, a, b ); // true
onlyOne( a, b, a ); // false
```
参数少我们尚可对所有情况进行枚举，但是3个参数就应该开始使得代码的可读性下降，多个参数枚举使得代码会更加难读，还更容易出错
```js
function onlyOne() {
var sum = 0;
for (var i=0; i < arguments.length; i++) {
// 跳过假值，和处理0一样，但是避免了NaN
  if (arguments[i]) {
      sum += arguments[i];
    }
    }
     return sum == 1;
}
var a = true;
var b = false;
onlyOne( b, a ); // true
onlyOne( b, a, b, b, b ); // true
```
“异常”的逻辑运算符 && ||，我觉得应该称之为选择器运算符，因为它们是返回操作数之中的其一
```js
var a = 42;
var b = "abc";
var c = null;
a || b; // 42
a && b; // "abc"
c || b; // "abc"
c && b; // null
```
3.符号的强制转换
ES6允许符号显式转换字符串，而隐式转换会产生错误
```js
var s1 = Symbol( "cool" );
String( s1 ); // "Symbol(cool)"
var s2 = Symbol( "not cool" );
s2 + ""; // TypeError
```

4.宽松相等和严格相等

4.1== 、=== 的区别，常见的误区是“== 检查值是否相等，=== 检查值和类型是否相等”。听起来蛮有道理，然而
还不够准确。很多JavaScript 的书籍和博客也是这样来解释的，但是很遗憾他们都错了。
正确的解释是：“== 允许在相等比较中进行强制类型转换，而=== 不允许。”

4.2相等比较的性能
如果两个值的类型不同，我们就需要考虑有没有强制类型转换的必要，有就用==，没有就
用===，不用在乎性能。

4.3抽象相等，==运算符的行为，这是隐式强制转换最让人诟病的，开发人员认为它们过于晦涩，很难掌握和运用。

规则


    两个值类型相同，仅比较它们相等，需要注意非常规的NaN!=NaN以及+0 == -0，对于对象，只判断其引用是否相等，不发生强制类型转换

    两个不同类型的值会发生隐式强制转换

4.3.1 字符串和数字之间的相等比较，将字符串转换为数字再进行比较，具体规范如下

    (1) 如果Type(x) 是数字，Type(y) 是字符串，则返回x == ToNumber(y) 的结果。
    (2) 如果Type(x) 是字符串，Type(y) 是数字，则返回ToNumber(x) == y 的结果。

例子
```js
var a = 42;
var b = "42";
a === b; // false
a == b; // true
```

4.3.2 其他类型和布尔类型之间的相等比较，将布尔值转换为数字，然后继续比较，这种比较会导致宽松相等会进行多次的隐式类型转换，不要使用 宽松相等来和布尔值比较，它的隐式转换过于晦涩。

    (1) 如果Type(x) 是布尔类型，则返回ToNumber(x) == y 的结果；
    (2) 如果Type(y) 是布尔类型，则返回x == ToNumber(y) 的结果

例子
```js
var x = true;
var y = "42";
x == y; // false
```
解析

    Type(x) 是布尔值，所以ToNumber(x) 将true 强制类型转换为1，变成1 == "42"，二者的类型仍然不同，"42" 根据规则被强制类型转换为42，最后变成1 == 42，结果为false。

5 null和undefined之间的相等比较，在==情况下它们相等
规范

    (1) 如果x 为null，y 为undefined，则结果为true。
    (2) 如果x 为undefined，y 为null，则结果为true。    

6 对象和非对象之间的相等比较，对对象进行ToPrimitive操作然后进行操作
规范

    (1) 如果Type(x) 是字符串或数字，Type(y) 是对象，则返回x == ToPrimitive(y) 的结果；
    (2) 如果Type(x) 是对象，Type(y) 是字符串或数字，则返回ToPromitive(x) == y 的结果。

例子
```js
var a = 42;
var b = [ 42 ];
a == b; // true
```       
解析

    [ 42 ] 首先调用ToPromitive 抽象操作（参见4.2 节），返回"42"，变成"42" == 42，然后又变成42 == 42，最后二者相等。

== 中的假值比较
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
false == []; // true -- 晕！
false == {}; // false
"" == null; // false
"" == undefined; // false
"" == NaN; // false
"" == 0; // true -- 晕！
"" == []; // true -- 晕！
"" == {}; // false
0 == null; // false
0 == undefined; // false
0 == NaN; // false
0 == []; // true -- 晕！
0 == {}; // false
```   
应对假值比较的特殊情况
```js
"0" == false; // true -- 晕！
false == 0; // true -- 晕！
false == ""; // true -- 晕！
false == []; // true -- 晕！
// 前面四种我们可以通过不使用== boolean来避免
// 这个比较少用
"" == []; // true -- 晕！

// == "" == 0 我们得特别注意，在有 [] 、0 、"" 我们尽量少使用
"" == 0; // true -- 晕！
0 == []; // true -- 晕！

```
#####小结，对于宽松相等，对象会被ToPrimitive抽象操作转换为基本值，然后我们只需要记住数字、布尔、字符串比较的隐式转换规则即可

    字符串和数字比较，字符串会被转换数字
    布尔值和其他类型比较，会被转换成数字