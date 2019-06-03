egg DI容器规则
 // 从controller目录解析其文件名,目录会被.分割，文件名下划线会被转换成大小写分割风格
```js
  app/service/biz/user.js => ctx.service.biz.user

  app/service/sync_user.js => ctx.service.syncUser

  app/service/HackerNews.js => ctx.service.hackerNews
};
```
### this.service/controller.filename(lower)


egg-sequelize DI
所有单词大写，分割线被忽略，/被解析成目录分级
| model file | class name |
| :------:| :------: |
|person.js|	app.model.Person|
|user_group.js|	app.model.UserGroup|
|user/profile.js|	app.model.User.Profile|

### this.ctx.model.filename(upper)
