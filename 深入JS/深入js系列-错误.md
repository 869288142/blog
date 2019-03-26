####错误

1.编译错误(早期错误)
```js
var a;
42 = a; // 语法错误

var a = /+foo/; // 非法正则错误

function bar(a,b,a) { "use strict"; } // 参数重名错误

(function(){
"use strict";
var a = {
b: 42,
b: 43
}; // 对象属性重名错误！
})();
```

2.运行时错误

3.try...finally
我们看一下try中有return语句出现的情况
```js
function foo() {
  try {
    return 42;
  }
  finally {
    console.log( "Hello" );
  }
  console.log( "never runs" );
}
console.log( foo() );
// Hello
// 42
```
这里return 42 先执行，并将foo() 函数的返回值设置为42。然后try 执行完毕，接着执
行finally。最后foo() 函数执行完毕，console.log(..) 显示返回值。

throw亦是如此
```js
function foo() {
  try {
    throw 42;
  }
  finally {
    console.log( "Hello" );
  }
console.log( "never runs" );
}
console.log( foo() );
// Hello
// Uncaught Exception: 42
```