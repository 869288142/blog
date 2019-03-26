解构赋值出现的契机：
```javascript
    let obj = {
        a: 1,
        b: 2
    }
    // 取值
    let a = obj.a
    let b = obj.b
```    
问题核心：

    每次取值既要确定对象属性名，还得重新定义一个变量占用多一行，代码行数和重复的声明a，使得代码不够简洁，能否通过左边变量名，匹配到右边的属性名从而取得对应的值，ES6解构语法核心就基于这样的模式匹配思想

上面的问题解构方案:
```javascript
    let obj = {
        a: 1,
        b: 2
    }
    // 取值
    let {a, b} = obj
    // a=1 b=2
```

    很明显看到，我们无需在右侧显式声明取值属性名，完全依据右边结构进行对应取值，非常优雅

应用场景：

1.对象声明解构
```javascript
    let obj = {
        a: 1,
        b: 2
    }
    // 取值
    let {a, b} = obj
    // a=1 b=2
```
2.对象赋值解构
```javascript
    let a, b
    let obj = {
        a: 1,
        b: 2
    }
    // 取值
    ({a, b} = obj)
    // 更常见的场景是变量c d被声明到全局,这种情况在vue很常见，数据被提前声明到data选项，数据访问一般都是this.xxxdata,此时就很有用了
    ({a:c, b:d} = obj)
```
3.变量交换
```javascript
    [x,y] = [y,x]
```
4.数组解构
```javascript
   let  [first,] = arr//获取 
   let [first, ...rest] = arr//获取第一个，以及剩余参数
```
5.函数对象实参解构
```javascript
    function buildAnimal({accessory = "", animal = "cat", color = 'rainbow', hairType = 'straight'} = {})
    {...}
```