# this 
## 特性 
**调用时绑定 类似动态作用域，this永远指向其调用者** 


1.一个常见且有趣的场景，js一些对象的实例方法可以被其它对象使用，有一个很有趣的比喻，我们家没有锅，去借别人家的，但是出来的效果是一致的

箭头函数this是静态绑定的，指向其最近的作用域链中的this

这里this按照作用域链来查找
作用域类型 全局作用域 函数作用域



## 默认绑定

此时调用者是window,所以this就是window

**this非严格模式下指向全局对象，严格模式下为undefined**
```js
function foo() {
console.log( this.a ); // this指向全局对象
}
var a = 2;
foo(); // 2
```

## 隐式绑定  只有最后一层会影响调用位置

此时调用者是方法前的对象,this指向调用其的对象

**this指向调用其的对象**
```js
function foo() {
console.log( this.a );
}
var obj2 = {
a: 42,
foo: foo
};
var obj1 = {
a: 2,
obj2: obj2
};
obj1.obj2.foo(); // 42
```
## 显式绑定

js中有一些方法可以指定调用者，此时this指向指定的调用者

**this指向call、apply、bind第一个参数**
```js
// 简单的辅助绑定函数 bind有一个特点，就是bind一次的函数无法再改变this,箭头函数与其效果一致
function bind(fn, obj) {
return function() {
return fn.apply( obj, arguments );
};
}
var obj = {
a:2
};
var bar = bind( foo, obj );
var b = bar( 3 ); // 2 3
console.log( b ); // 5
```


## new绑定

## 箭头函数

箭头函数的this是词法作用域，写在那里就是那里的this

## 绑定优先级

判断this
现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的
顺序来进行判断：

1. 函数是否在new 中调用（new 绑定）？如果是的话this 绑定的是新创建的对象。
var bar = new foo()

2. 函数是否通过call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是
指定的对象。

var bar = foo.call(obj2)

3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上
下文对象。
var bar = obj1.foo()

4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到
全局对象。
var bar = foo()