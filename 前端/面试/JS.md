####定时器区别
setTimeout 只执行一次
setInterval 会一直重复执行


内存泄漏


事件模型和事件代理

闭包

new 操作符

类型检测

原型链

this及其操作


作用域链

模块化



变量提升
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



ES6-10
语法糖(箭头函数，类的定义，继承)，以及一些新的扩展（数组，字符串，对象，方法等），对作用域的重新定义，以及异步编程的解决方案（promise，async，await）、解构赋值的出现

promise async、await 错误除以 优化

类

深拷贝和浅拷贝





继承函数extend




遍历对象属性

IIFE

原型式继承

怎么实现this对象的深拷贝

异步解决方案


词法作用域 this(类似动态作用域)

类数组转数组

https://github.com/yygmind/blog/issues/4

call apply bind

eventEmitter













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


