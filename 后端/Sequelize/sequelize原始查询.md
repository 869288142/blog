有时候ORM一些数据库操作不如SQL方便，我们需要一个原生SQL的接口，Sequelize官方文档说明如下
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190204132053775-836514448.png)
在这里我使用了如下代码
```js
const sequelize = require("sequelize")
sequelize.query("select * from user")
```
然而一个意外的错误
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190204132601852-1863825518.png)

sequelize.query is not a function 

sequelize 上面没有query这个方法

```js
Object.getOwnPropertyNames(sequelize) //取得sequlize属性,确实没有query,甚至没有finder之类的方法
```

我就猜测，方法在sequelize的原型上,导出的sequelize是一个构造函数

那么我们需要获取到实例化的sequelize而不是导入官方的构造器sequelize
```js
  //error 
  const sequelize = require("sequelize") 
  sequelize.query()

  // 获取sequelize实例
  const sequelize = new Sequelize('database', 'username', 'password', {
  // sqlite! now!
  dialect: 'sqlite',
  // the storage engine for sqlite
  // - default ':memory:'
  storage: 'path/to/database.sqlite'
  })
  // correct 以egg-sequelize 为例 model变量为sequelize实例
  this.ctx.model.query()
```