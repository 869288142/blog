from 后面用逗号分隔就是最原始的多表查询 笛卡尔积(表的行的乘积)
数据库表join常见用法
left join(left outer join) 左外连接 左边加两表交集
right join 右连接  右表加两表交集
inner join 内连接 两表交集

sequelize 数据库include 模型如果加了where语句会变成inner join 需要列出所有父级选项可以在include 对象选项上增加require: false 

聚合函数:
