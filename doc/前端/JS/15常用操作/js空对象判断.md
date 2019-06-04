###js 判断空对象

首先要区分一个概念，**空对象和空引用**：

    空对象：｛｝是指不含任何属性的对象，当然对象属性包括字面值和函数。

    空引用：obj=null 是指变量值指向null变量，当然在js默认不赋值的情况下，一个变量为undefined.

空对象的讨论：

    原型：
        原型上包括了继承属性，有可以枚举的属性和不可以枚举的属性。默认对象都继承了Object。
    自身：
        自身属性同样包括了可枚举的属性和不可枚举的属性。

限定场景：

    后台JSON对象：

    判断后台传来的对象为空对象，此时，该对象一般为JSON对象，此时可以忽略原型上的属性判断，因为JSON对象也是一个普通对象，不过它的结构有时候比较特殊，该对象默认基础Objcet，然而，作为一个从后台传来的对象，后台无法实现原型继承、不可枚举这种特性，这个时候，只需要关注对象自身可枚举属性时是否为空即可。

解决方案：

方案 1：

```javascript
var data = {};
var b = JSON.stringify(data) == "{}";
alert(b); //true
```

方案 2：
    
    Object.keys(obj)返回不包括原型上的可枚举属性，即自身的可枚举属性

```javascript
var data = {};
var b = Object.keys(data).length === 0;
```

方案 2 模拟实现：

    for in语法遍历原型及自身上的可枚举属性，需要结合hasOwnProperty去除原型上的可枚举属性

```javascript
var data = {};
function isEmptyObj(obj) {
    for (var key in obj) {
        if ({}.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
var b=isEmptyObj(data);
console.log(b);
```
方案 3：

    Objcet.getOwnPropertyNames(obj)返回不包括原型上的所有自身属性(包括不可枚举的属性)

```javascript
var data = {};
var b=Object.getOwnPropertyNames(data)===0;
console.log(b);
```