# pm2

## 常见命令

## pm2注意事项

### 僵尸进程

同时执行`pm2 reload`会导致旧进程没有删除，代码没更新，处理手段

``` shell
// 找到pm2 名称对应的子线程
ps -ef | grep name
// 找到pm2 现在使用到的子线程
pm2 ls | grep name
// 不在使用到的线程即为僵尸进程，删除即可
kill -9 pid
```