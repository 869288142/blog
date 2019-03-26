###思考
作为一个编程人员，你可能从来没仔细思考过，为什么这么多高级语言会有类型这东西。
实际上，类型有点类似生活中的类别，我们日常生活，早已经把这个概念理解到了，切肉和切水果会用不同的刀。

#####语言级别的类型给我们带来了什么
类似分类，我们会用合适的类别去做它擅长的事，编程语言的类型给我们带来的就是它们自身的特性，比如我们在条件判断一个开关状态的时候，通常用布尔值更方便，另外一方面，编程语言提供了超越生活的操作，类型转换，学习类型，有利于我们从容应对显式转换，更加要提及的是，对于隐式转换，我们能更加快速定位问题。

#####我们js的隐式转换，一边带着恐惧，一边还在使用着它，因为一昧地强制转换，带来的代码冗余是很可怕的

看一个例子
```js
//一个常见的例子
a + "" //隐式转换为字符串
String(a) + " " //显式转换字符串

//另外一个常见例子
var a = 42;
var b = null;
var c = "foo";
a && b
if (a && (b || c)) { //在js里 && || 算不上是逻辑运算符，而是返回一个值，然后隐式转换为布尔值
  console.log( "yep" );
}

// 可以看这个例子
let a = 1
let b = null
console.log(a && b)
console.log(a || b)

//看看我们第二个例子的显式转换版本，好吧，确实是“显式”，但是可读性和简洁性大大下降
if (!!a && (!!b || !!c)) {
  console.log( "yep" );
}
```

#####“捷径”
现在的人都是想着学习"有用的",但是谁来告诉你有用，答案是没有人能准确告诉你，就像一个人的成功，是很难复制的，粮食构筑了我们强壮的身体，而知识，带来的是我们思维高度的变化，就算忘记了，思维的转变都已经发生，因为学习了C++，它的指针思想，让我对值传递和引用传递的理解更加深刻，学习了java，在我学习TypeScript时，意识到静态语言的好处，从而理解声明式类型系统和线型类型系统的区别，我很快掌握了TypeScript想要干什么，按照这个思路我很快就上手了


#### ECMAScript 语言类型
Undefined Null Boolean String Number Object

js内置类型

    null undefined boolean number string object symbol

我们依次来理解这些值的场合

##### undefined(未定义)
什么叫未定义？
```js
let a //这是未定义？ 还是说一个未存在的变量b是未定义
```
引入一个C++的概念，声明和定义
```js
let a = 1 //定义：可以为变量分配存储空间，并且可以给变量一个初始值

let b //声明：告诉编译器这个变量的名字和类型（extern int a;(在没有赋值的情况下，变量前加上关键字extern一定为声明)）
```

#####js无法区分未定义变量和未声明变量
```js
let a = 1
b //没有声明的变量
typeof a //undefined
typeof b  //undefined
```

不过我们这样做, typeof不会区分undefined和undeclared,但是给了我们应对的方法
```js
//DEBUG 是一个开发环境下定义的全局变量，生产环境下没有这个变量
// 这样会抛出错误，ReferenceError: DEBUG is not defined
if (DEBUG) {
console.log( "Debugging is starting" );
}
// 这样是安全的
if (typeof DEBUG !== "undefined") {
console.log( "Debugging is starting" );
}
```

也许你不知道,undefined并不是一个关键字，这意味着我们可以定义它或者给它赋值,但是永远不要这样子做
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

#####undefined小结

undefined在规范下，只出现在变量未定义或者未声明情况下，我们使用下面100%安全的检测方法
```js
  typeof v === "undefined" //检测一个变量未定义或未声明
```