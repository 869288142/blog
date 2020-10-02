# XSS

## XSS是什么？

XSS全称**跨站脚本攻击（Cross Site Scripting）**，因为缩写CSS和样式表CSS缩写冲突，所以就叫XSS，是**一种比较常见的安全漏洞**

## XSS攻击的目的和危害

### 目的

1. cookie劫持

2. 篡改网页，进行钓鱼或者恶意传播

3. 网站重定向

4. 获取用户信息

### 危害

1. 传播类危害

2. 系统安全威胁

## XSS漏洞执行点

1. 页面直出Dom

2. 客户端跳转链接： location.href / location.replace() / location.assign()

3. 取值写入页面：innerHTML、document.write及各种变种。这里主要会写入携带可执行Payload的HTML片段。

4. 脚本动态执行：eval、setTimeout()、setInterval()

5. 不安全属性设置：setAttribute。不安全属性前面见过：a标签的href、iframe的src、object的data

6. HTML5 postMessage来自不安全域名的数据。

7. 有缺陷的第三方库。

##  XSS漏洞注入点

1. 服务端返回数据

2. 用户输入的数据

3. 链接参数：window.location对象三个属性href、search、hash

4. 客户端存储:cookie、localStorage、sessionStorage

5. 跨域调用：postMessage数据、Referer、window.name

## 常见案例

### 节点攻击

比如留言板输入

```html
<script>alert(“hey!you are attacked”)</script>
```

那么其他人打开网站时，就会看到`hey!you are attacked`,也就被攻击了

### 劫持流量实现恶意跳转

比如想办法在网页注入一段这样的代码

```html
<script>window.location.href="http://www.baidu.com";</script>
```

下次打开这个网站的时候，你的网站就跳到别的网站去了，甚至在微信那边，会被人举报封域名，非常的严重

### 获取用户cookie

只要能在网页下注入脚本，比如

```html
<script>alert(document.cookie)</script> // 这里可以换成发送到我们指定的后台
```

有了cookie我们就能登录用户的网站，为所欲为

## XSS工具防御策略

1. 接入公共的DOM XSS防御JS 

2. 内部漏洞扫描系统扫描

###  执行点防御方法


|  执行点   | 防御  |
|  ----  | ----  |
| 页面直出Dom  | 服务端XSS过滤 |
| 客户端跳转链接  | 域名白名单（例如：只允许qq.com域）、链接地址XSS过滤 |
| 客户端跳转链接  | 域名白名单（例如：只允许qq.com域）、链接地址XSS过滤 |
| 取值写入页面  | 客户端XSS过滤 |
| 脚本动态执行  | 确保执行Js字符串来源可信 |
| 不安全属性设置  | 内容XSS过滤，包含链接同客户端跳转链接 |
| HTML5 postMessage  | origin限制来源 |
| 有缺陷的第三方库  | 不使用 |


### 其他安全防御手段

1. 对于Cookie使用httpOnly

2. 在HTTP Header中使用Content Security Policy

### CSP


### 自动化检测XSS漏洞的工具

w3af


## 参考文章

https://zhuanlan.zhihu.com/p/26177815

https://wetest.qq.com/lab/view/422.html?from=content_gad

https://tech.meituan.com/2018/09/27/fe-security.html

https://zhuanlan.zhihu.com/p/78340391

## 其他常见

http://insights.thoughtworks.cn/eight-security-problems-in-front-end/

https://insights.thoughtworks.cn/eight-security-problems-in-front-end-2/

https://juejin.im/post/6855129007906963464



https://web.dev/secure/