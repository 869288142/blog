# 唤端

唤端的意思是从网页端唤起其他APP端，这个需求相对比较少见

## 唤端的方法

### URL Scheme

URL Scheme需要APP内部提供接口，常见的如下

|  APP   | URL Scheme  |
|  ----  | ----  |
| 微信  | weixin:// |
| 	淘宝  | taobao:// | 
| 	微博  | sinaweibo:// | 
| 	QQ  | mqq:// | 
| 	知乎  | zhihu:// | 
| 	短信  | sms:// | 

### Universal Link

Universal Link 是苹果在 WWDC2015 上为 iOS9 引入的新功能，通过传统的 HTTP 链接即可打开 APP。如果用户未安装 APP，则会跳转到该链接所对应的页面。

**Universal Link需要根据官网在站点下进行配置**

Universal Link有一个最大的问题就是需要站点是https，需要与特点的appID进行绑定，但是好处就是能够直接唤起app，并且失败静默跳转到失败页面中去

## 使用方法

### iframe

```html
<iframe src="weixin://">
```


### a标签

```html
<a href="weixin://"></a>
```


### window.location

```js
window.location.href = 'weixin://'
```

三者中目前window.location的兼容性是最好的

## 检测唤端失败，跳转到对应市场


