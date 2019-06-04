netstat -an  占用端口
https://github.com/MicrosoftArchive/redis/releases window安装地址


redis-server.exe --service-install redis.windows.conf 安装服务

string（字符串），hash（哈希），list（列表），set（集合）及zset(sorted set：有序集合)

string key-value
hash  key => value
list 双向列表 支持左右栈操作
set 去重list
zset 有序set

ioredis eg:

string  set(k, v) get(k)

list l/r push/pop
lrange 获取指定范围的列表值 0 -1全部
lindex 从0开始

set 唯一无序List
sadd(l, v)
smembers(l)
scad 数量
sismenber 检查元素是否在集合
zrangebyscore 指定返回元素
zset 
zadd(k,score, v)


zcard 数量
