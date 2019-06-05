# 执行环境(环境)

## 执行环境的用处
执行环境**定义了变量或函数有权访问的其他数据**，**每一个执行环境都存在一个关联的变量对象(VO)**,代码无法访问，内部解析器会使用它，如果**环境为函数，则将函数的AO作为VO**,**函数执行时，会创建一个以当前函数VO为前端的作用域链**，以**保证执行环境有权访问的所有变量和函数的有序访问。**

## 顶级AO对象 全局
全局对象(Global object) 是在**进入任何执行上下文之前就已经创建**了的对象；这个对象只存在一份，它的属性在程序中任何地方都可以访问，全局对象的生命周期终止于程序退出那一刻。


### 全局对象初始化
全局对象初始创建阶段将Math、String、Date、parseInt作为自身属性，等属性初始化，**同样也可以有额外创建的其它对象作为属性（其可以指向到全局对象自身）**。例如，在DOM中，全局对象的window属性就可以引用全局对象自身(当然，**并不是所有的具体实现都是这样**)
```js
global = {
  Math: <...>,
  String: <...>
  ...
  ...
  window: global //引用自身
};
```
**证据**
Chrome
打印global对象时，显示了Window类型对象，里面有一个属性叫window就是global本身

![](https://user-gold-cdn.xitu.io/2019/4/22/16a450b56cccb2fd?w=728&h=53&f=png&s=10602)

可以看到**global和global.window是指向同一对象**
![](https://user-gold-cdn.xitu.io/2019/4/22/16a450cd65ec5628?w=458&h=76&f=png&s=4027)

### 全局对象访问
```js
// 相当于 global.String(10)
String(10);
// 相当于 global.window.a = 10 === global.a = 10
window.a = 10; 
// 相当于 // global.b = 20;
this.b = 20; 
```

## 函数的VO对象AO

### 函数AO对象生成过程
**函数执行前**
1.分析参数

    1.1 函数接收参数，添加到AO的属性上面，值被初始化为undefined

    1.2 接收实参，形成AO对应的属性值
    

2.分析变量声明，如 var a,

    2.1：如果AO上还没有a属性键名，则添加a属性键名并且初始化为undefined

    2.2：如果AO 上面已经有了a属性,则不做任何操作

3.分析函数的声明，如果 funcion a(){},

    3.1：无论是否该函数名存在，都会覆盖当前函数名对应的属性
**函数执行时**
4.对已经存在的变量声明进行赋值操作    
**实例**
```js
function test(a, b) {
  var c = 10;
  function d() {}
  var e = function _e() {};
  (function x() {});
}
 
test(10); // call
```

1.分析参数

1.1 函数接收参数，添加到AO的属性上面，值被初始化为undefined
```js
AO(test) = {
    a: undefined,
    b: undefined
}
```
1.2 接收实参，形成AO对应的属性值
```js
AO(test) = {
    a: 10,
    b: undefined
}
```    

2.分析变量声明，如 var a,

2.1：如果AO上还没有a属性键名，则添加a属性键名并且初始化为undefined
```js
AO(test) = {
    a: 10,
    b: undefined,
    c: undefined,
    e: undefined
}
```
2.2：如果AO 上面已经有了a属性,则不做任何操作

3.分析函数的声明，如果 funcion a(){},

3.1：无论是否该函数名存在，都会覆盖当前函数名对应的属性
```js
AO(test) = {
    a: 10,
    b: undefined,
    c: undefined,
    d: <reference to FunctionDeclaration "d">,
    e: undefined
}
```
**函数执行时**
4.对已经存在的变量声明进行赋值操作 
```js
AO(test) = {
    a: 10,
    b: undefined,
    c: 10,
    d: <reference to FunctionDeclaration "d">,
    e: <reference to FunctionExpression "_e">
}
```

























