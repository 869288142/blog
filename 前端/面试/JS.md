


作用域链(变量声明、变量提升、AO)  

类(创建、继承、ES6变化、深拷贝和浅拷贝) 原型链(属性屏蔽、类族检测 原型检测)  this 


函数 函数声明 函数表达式    调用方式(call apply bind)
异步解决方案 promise async、await 错误处理 优化
语法糖(箭头函数)，以及一些新的扩展（数组，字符串，对象，方法等），以及异步编程的解决方案（promise，async，await）、解构赋值的出现
闭包(内存泄漏)(IIFE) 模块化


















var a = 10;
(function () {
    console.log(a)
    a = 5
    console.log(window.a)
    var a = 20;
    console.log(a)
})()

var b = 10;
(function b(){
    b = 20;
    console.log(b); 
})();

































js深入系列进度


js学习进度
undefined  完成
null 完成
true 完成
数字 完成
字符串 完成
对象 完成
符号 完成

类型上的操作


