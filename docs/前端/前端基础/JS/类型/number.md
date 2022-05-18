# number
js数字**没有明确区分浮点数和整数类型**，统一用number类型表示。

## 精度

[资料](
https://zhuanlan.zhihu.com/p/66949640)

### 大数精度

* 安全整数 `Number.MAX_SAFE_INTEGER`

* 解决思路 **转换为字符串模拟相加**

* 解决方案 `bigint`

### 小数精度

* 解决方案 转换成整数再还原获取

## IEEE 754 经典问题

### 原因
number 基于IEEE 754标准实现 js采用的是双精度(64位二进制)

我们看一个基于IEEE 754标准实现都有会有的经典问题
```js
0.1 + 0.2 === 0.3 //false
// 原因是 0.1 0.2 不精确，相加不等于0.3 而是一个类似0.30000000004 的值，所以条件判断结果为false
```

### 验证方案
我们很容易修正这个错误，知道是因为偏差值出现问题，我们可以定义一个偏差值，在此偏差值内我们认为两者相等。对于js来说，2^-52比较合适。目前ES6为我们提供了这个偏差值
```js
// Number.EPSILON ES6提供的比较偏差值
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

## 特殊值
比起其他语言，js提供了数字的很多特殊值，我们看一下它们出现的场合以及判别方式

### NaN

#### 用途
不是数字的数字，表示数字运算和数字解析中的错误,比如数字运算中操作数不为数字，或者值无法被解析为十进制或十六进制，看下面的例子
```js
var a = 2 / "foo" //NaN
var b = parseInt("f") //NaN
```
#### 判别方式

尝试一 == ===
```js
// 意料之外 NaN和自身不相等
NaN == NaN
NaN === NaN
```
尝试二 isNaN
```js
// 全局isNaN函数
var a = 2 / "foo"
is NaN(a) // true

[ undefined, null, true, false, {}, "1" , "foo" ].forEach( e => {
  console.log(e, isNaN(e))
})
// 结果 对于undefined、{} 、"foo"都返回了true，明显他们不是NaN
undefined true
null false
true false
false false
{} true
1 false
foo true

//我们需要加一层保险，目前这个方案已经被ES6实现为Number.isNaN

//polyfill
if(!Number.isNaN) {
  Number.isNaN = function(n) {
    return typeof n === "number" && isNaN(n)
    //或者
    return n!==n
  }
}

```

###  无穷数 
#### 用途
传统编译语言中 除以0 会抛出编译错误或者运行时错误，例如除以0,在js中，这个错误被定义为常量，无穷数 Infinity(Number.POSITIVE_INFINITY),还有在运算中结果溢出的情况也会出现Infinity

#### 无穷数相关运算
```js
var a = 1 / 0; // Infinity(Number.POSITIVE_INFINITY)

var b = -1 / 0; // -Infinity(Number.NEGATIVE_INfiNITY)

var a = Number.MAX_VALUE; // 1.7976931348623157e+308
a + a; // Infinity
a + Math.pow( 2, 970 ); // Infinity

// 无穷除以无穷 
Infinity / -Infinity //NaN

// 有穷正数除以Infinity
1 / Infinity // 0

// 有穷负数除以Infinity
-1 / Infinity // -0
```
#### 无穷数检测
```js
  v === Infinity
  v === -Infinity
```

### 零值(0、-0) 
#### 用途
-0 是一些数学运算中会出现

#### 运算
```js
var a = 0 / -3; // -0
var b = 0 * -3; // -0
```
-0的转换
```js
a.toString(); // "0"
a + ""; // "0"
String( a ); // "0"
// JSON也如此，很奇怪
JSON.stringify( a ); // "0"而不是"-0"

+"-0"; // -0
Number( "-0" ); // -0
JSON.parse( "-0" ); // -0

// 比较操作
var a = 0;
var b = 0 / -3;

a == b; // true
-0 == 0; // true
a === b; // true
-0 === 0; // true
0 > -0; // false
a > b; // false
```
#### 区分0和-0
```js
function isNegZero(n) {
  n = Number(n)
  return (n === 0) && (1 / n === -Infinity)
}
// 案例
isNegZero( -0 ); // true
isNegZero( 0 / -3 ); // true
isNegZero( 0 ); // false
```
### 特殊等式的统一化处理 Object.is()
对于特殊等式的统一处理(能够处理 NaN -0) Object.is()
```js
var a = 2 / "foo";
var b = -3 * 0;

Object.is( a, NaN ); // true
Object.is( b, -0 ); // true
Object.is( b, 0 ); // false

//一个简单的polyfill
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
```