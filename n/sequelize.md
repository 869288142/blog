sequelize默认模型finder方法返回的是模型实例
里面带有很多模型相关的属性
![](https://img2018.cnblogs.com/blog/1361028/201901/1361028-20190128201554603-492042727.png)
我们需要的是一个纯净的JSON，
我发现先JSON.stringify()可以获取一个纯净的JSON字符串
![](https://img2018.cnblogs.com/blog/1361028/201901/1361028-20190128201650623-758683950.png)

规则如下：
不包含键值：不可枚举
不包含键值类型：symbol
数组中非索引类型键会被忽略
顺序: 非数组对象不能保证以特定顺序出现在JSON中去
对undefined、function、symbol值，出现在数组中会被转换成null,出现在非数组对象中会被忽略
对布尔、数字、字符串对象会被转换成原始值

一条特别的规则：如果对象有toJSON方法，调用JSON.stringify时会先调用toJSON方法再对其返回值进行JSON.stringify()

sequelize toJSON
```js
toJSON() {
    return _.cloneDeep(
      this.get({
        plain: true
      })
    );
  }
```
sequelize实例的toJSON方法先调用get({ plain: true})方法得到一个纯净JSON字符串，然后对这个对象进行深clone

这就是为什么sequelize默认调用JSON.stringify却能直接得到一个纯净JSON字符串的原因

有时候我们需要对查询出来的对象进行一些组装，需要获取干净的JSON对象
对实例操作获取JSON对象
```js
Project.findAll({ where: { ... }, raw: true })
```