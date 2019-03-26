1.模型同步到数据库

  1.定义一个model
  2.migration: generate --name tablename
  3.将model代码copy到migreation中
```js
  module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      age: INTEGER
    },{
      timestamps: false,
      freezeTableName: true
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
```
  4.执行 db:migrate 


2.种子文件，便于数据迁移
1.sequelize seed:create --name tablename
2.调整数据结构
3.将数据copy到seed中
4.执行db:seed --seed filename或者db:seed:all


