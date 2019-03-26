sequelize
// 定义模型
// 主键 id 数字 自增
// 外键
// 一般列 名称 类型
// 常见类型
|sequelize|datatype|
| :------:| :------: |
|         |   
|         |   
|         |   
|         |   
|         |   
```js
module.exports = app => {
  // 取出需要类型

  const { STRING, INTEGER, DATE } = app.Sequelize;

  
  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER
  },{
    timestamps: false,
    freezeTableName: true
  });

  return User;
};
```
//达成目的为便利
整数 看数据最大值决定
默认 INTEGER 

小数 看数据大小和精度决定
定点数 DECIMAL NUMERIC 保证确定精度 即小数位
默认  浮点数 FLOAT DOUBLE 会出现误差

字符串
CHAR 效率高 取出时会带上不足位上的空格
默认  VARCHAR 占用空间小


使用sequelize.sync同步model 表会按照特定顺序创建
可能会出现循坏引用
```ts
const Document = sequelize.define('document', {
  author: Sequelize.STRING
});
const Version = sequelize.define('version', {
  timestamp: Sequelize.DATE
});

Document.hasMany(Version); // 这将 documentId 属性添加到 version
Document.belongsTo(Version, {
  as: 'Current',
  foreignKey: 'currentVersionId'
}); // 这将 currentVersionId 属性添加到 document
```
但是，上面的代码将导致以下错误: Cyclic dependency found. documents is dependent of itself. Dependency chain: documents -> versions => documents.

解决方案：
为了缓解这一点，我们可以向其中一个关联传递 constraints: false：
```ts
Document.hasMany(Version);
Document.belongsTo(Version, {
  as: 'Current',
  foreignKey: 'currentVersionId',
  constraints: false
});
```
不设置外键约束
```ts
const Trainer = sequelize.define('trainer', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});

// Series 将有一个 trainerId = Trainer.id 外参考键
// 之后我们调用 Trainer.hasMany(series)
const Series = sequelize.define('series', {
  title: Sequelize.STRING,
  subTitle: Sequelize.STRING,
  description: Sequelize.TEXT,
  // 用 `Trainer` 设置外键关系（hasMany）
  trainerId: {
    type: Sequelize.INTEGER,
    references: {
      model: Trainer,
      key: 'id'
    }
  }
});

// Video 将有 seriesId = Series.id 外参考键
// 之后我们调用 Series.hasOne(Video)
const Video = sequelize.define('video', {
  title: Sequelize.STRING,
  sequence: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  // 用 `Series` 设置关系(hasOne) 
  seriesId: {
    type: Sequelize.INTEGER,
    references: {
      model: Series, // 既可以是表示表名的字符串，也可以是 Sequelize 模型
      key: 'id'
    }
  }
});

Series.hasOne(Video);
Trainer.hasMany(Series);
```

关联  为了联合查询(join)

先在模型定义外键
```ts
trainerId: {
    type: Sequelize.INTEGER,
    references: {
      model: Trainer,
      key: 'id'
    }
  }
```  
然后手动关联

关联
一对一 一下两者在需要调用关联的时候增加即可
BelongsTo 在调用模型插入外键  外键在source 
HasOne  在参数模型插入外键  外键在target
一对多 
source.hasMany(target)