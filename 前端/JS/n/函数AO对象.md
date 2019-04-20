### 执行环境简称环境

#### 执行环境的作用
执行环境定义了变量或者函数有权访问的其他数据
每一个执行环境有一个与之关联的变量对象(VO)
环境定义的所有变量和函数都保存在这个对象中。
代码无法访问这个对象，解析器会使用它。

每个函数有自己的执行环境，函数执行时，对应环境会被压入环境栈，执行完后弹出，控制权交给之前的执行环境

当代码在一个环境中执行，会创建 VO 的一个作用域链，保证对执行环境有权访问的所有变量和函数的有序访问。

作用域链的前端，始终为当前执行的代码所在环境得到 VO，如果这个环境为函数，则将活动对象(AO)作为 VO。

VO 一开始只有 arguments 对象


#### 执行对象的核心VO

##### 执行对象存储的内容 变量声明 函数声明 函数形参
VO 对象初始化步骤：

1：分析参数

      1-1:函数接收参数，添加到AO的属性上面，值全部都是undefine,如AO.age=undefine

      1-2:接收实参，形成AO对应的属性值
    
      PS:
      arguments此时初始化完毕

2：分析变量声明，如 var age,

     2-1：如果AO上还没有age属性，则添加AO 属性，值是undefine

     2-2：如果AO 上面已经有了age属性,则不做任何操作。

3：分析函数的声明，如果 funcion foo(){},

    3-1： 则把函数赋给AO.foo,如果数据属性已经存在，则要被现在的新的值覆盖

**code**

```javascript
function test(a, b) {
    console.log(a);

    var a = 123;

    function a() {}

    console.log(b);

    var b = 234;

    console.log(b);

    function b() {}

    console.log(a);

    var b = function() {};

    console.log(b);
}

test(1);
```

结果：

    fn-a  fn-b 234 123 fn-b

VO 对象生成解析：

    1.计算机执行到test()函数时，在执行的前一刻会创建一个ao对象。

``` javascript
    ao{

    }
```

    2.这是第一步，创建一个ao对象，第二步是将函数内所有的形参和变量声明储存到ao对象中，value为undefined；

``` javascript
ao{

    a:undefined，

    b:undefined

}
```

第三步将形参和实参进行统一。

``` javascript
ao{

    a:1,

    b:undefined

}
```

第四步将所有的函数声明的函数名作为 ao 对象中的 key，函数整体内容作为 value，存储到 ao 对象中

``` javascript
ao{

    a:function(){},

    b:function(){}

}
```
VO 的 this 对象和 arguments 对象初始化：

函数调用时，AO会自动取得this和arguments这两个特殊变量。并且只在AO对象上查找这两个变量


