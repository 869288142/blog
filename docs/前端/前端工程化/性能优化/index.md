# 前端性能优化清单

## http

### 缓存

* 协商缓存和强缓存

* `CDN`缓存

### 压缩

* 使用合适的压缩算法和压缩比

### 并行

* http2

* http3

### DNS优化

* `DNS PrefetchDNS Prefetch`

### Cookie

* 精简`cookie`


## 常见资源

### 脚本


#### 工程上

* 将脚本外置

* 将脚本放到底部

* 使用`tree-shaking`和`scope-hosting`等代码精简技术

* 压缩

* 延迟加载

* 按需加载

### 样式表

#### 工程上

* 将样式表外置

* 将样式表放到头部

* 压缩

* 延迟加载

* 按需加载

### 图片

* 优先使用`webp`格式

* 调整适当的压缩比

* 响应式图片

* 优先使用缩略图

* 图片懒加载

# image component 
## format

## quality

## scrset 

## lazy

## preload 



### svg

* 使用`svg sprite`

### 字体

* 使用字体裁剪服务

## AJAX

* 缓存`ajax`

## 性能优化指标

### FMP(First Meaningful Paint)

表示页面的“主要内容”开始出现在屏幕上的时间点。**它是我们测量用户加载体验的主要指标**

### LCP(Largest Contentful Paint)

表示可视区“内容”最大的可见元素开始出现在屏幕上的时间点。

### TTI (Time to Interactive)

表示网页第一次 **完全达到可交互状态** 的时间点。

### FCI First CPU Idle

第一次CPU空闲，主线程空闲就代表可以接收用户的响应了

### FID First Input Delay

首次输入延迟,按照TTI前后输入划分时间长短

### DCL DomContentloaded

 表示DomContentloaded事件触发的时间，解析完html就会触发

### L 

表示onLoad事件触发的时间，加载完所有资源

## 性能测试工具

* lighthouse

## 代码优化

### DOM

* 尽量避免操作`DOM`

* 离线操作`DOM`,然后一次性操作

* 操作`DOM`的时候进行读写分离

* 虚拟滚动

* [合理使用合成层](https://fed.taobao.org/blog/2016/04/26/performance-composite/)


### 动画

* 尽量使用`css`使用而不是`js`实现

* 使用只会触发重绘的属性实现动画

### 减少重排、重绘

[触发重排、重绘的属性](https://csstriggers.com/)





