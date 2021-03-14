# DNS

域名系统（Domain Name System）

## 作用

将便于记忆的域名解析成实际的IP

## 解析过程

以查询 **zh.wikipedia.org** 为例：

* 客户端发送查询报文**zh.wikipedia.org**至**DNS服务器**，DNS服务器首先**检查自身缓存**，如果**存在记录则直接返回结果**。
* 如果记录老化或不存在，则：
**DNS服务器**向**根域名服务器**发送查询报文**zh.wikipedia.org**，**根域名服务器**返回顶级域**org**的**权威域名服务器**地址。
**DNS服务器**向.org域的**权威域名服务器**发送查询报文**zh.wikipedia.org**，得到二级域 **.wikipedia.org** 的**权威域名服务器**地址。
**DNS服务器**向**.wikipedia.org** 域的**权威域名服务器**发送查询报文**zh.wikipedia.org**，得到主机 **zh** 的A记录，**存入自身缓存**并返回给客户端。

## DNS缓存读取及设置

* 浏览器缓存

* 系统缓存-host

* 路由器缓存

* ISP缓存
