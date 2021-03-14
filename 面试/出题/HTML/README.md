# HTML

## doctype作用

### doctype

``` html
<!DOCTYPE html>
```

### DTD

`HTML4`是`SGML`子集，需要使用DTD指定渲染模式，否则浏览器会自动猜测，导致渲染失误

## meta

### http-equiv

``` html
<!-- 指定字符集为utf8，HTML4常用 -->
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<!-- 已经被HTML5以下语法代替 -->
<meta charset="UTF-8">
```

``` html
<!-- 指定使用当前系统最新版本IE渲染，不设置的话IE会自动选择版本，导致渲染出错 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

### 设置优先内核

``` html
<meta name="renderer" content="webkit">
```

### 设置referrer

``` html
<meta content="always" name="referrer">
```

### 固定viewport

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
```

### 全屏模式

``` html
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
```

### 设置缓存

``` html
<meta http-equiv="Cache-Control" content="no-transform"/>
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
```

## 语义化

### 优点

1. **语义化标记能够通过标签名传递其信息**，比如`p`表示一个段落，同时**系统会赋予这些语义化标签默认的样式**，比如`p`会有默认样式

2. **有利于搜索引擎和浏览器导航**，更好地让搜索引擎和浏览器导航充分利用这些信息，比如**SEO效果更好，无障碍阅读更友好**

### 缺点

**虽然语义性强的HTML能带来很多好处，但是由于各种浏览器兼容问题，比如典型的button标签，在很多时候都会使用a标签来模拟，无需过分强调语义性，因地制宜**。