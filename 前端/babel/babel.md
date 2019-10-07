# babel

## babel初衷

在es6出现之后，由于此**版本的巨大改变，给人们带来了很多革命性的技术支持**，但是当时很多浏览器对es6支持有限，**babel就是为了达到写最新的语法，可以在任意浏览器运行而出现的。**

## 实现原理简介

babel本质就是输入新代码输出旧代码，它属于编译原理的应用具体过程如下：

```js
code -> AST  解析

modifyAST  修改

AST  -> code 生成
```

原理由于是暂时入门，知道思想即可，以后再实践操作

## 语法编译

我们知道了其实babel是一个编译器，所有动作都会修改AST达到我们的目的，那么支持新语法，也是这个原理，如何提供修改的接口呢，babel引入了插件的概念，插件可以操作AST，这样就解决了扩展问题

所以，**新语法都是有对应的插件的**

这个时候我脑子想起来es6语法那么多，总不可能一个一个配置吧，放心，babel官方也想到了这个问题，开启了一系列的探索

**.babelrc是babel的配置文件，语法需要配置presets选项**

### 1.单个引入插件

优点：无

缺点：

* 配置繁琐

使用方法

```js
// 安装
npm install --save-dev @babel/plugin-transform-arrow-functions

// 配置

{
  "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```
### 2.stage-x

这是根据ES目前提案的进展来安装一系列插件的


    Stage 0 - 稻草人: 只是一个想法，经过 TC39 成员提出即可。
    
    Stage 1 - 提案: 初步尝试。
    
    Stage 2 - 初稿: 完成初步规范。
    
    Stage 3 - 候选: 完成规范和浏览器初步实现。
    
    Stage 4 - 完成: 将被添加到下一年度发布


低级的会包裹高级的

优点：

配置方便

缺点：

由于使用了非规范确定的语法，一旦语法提案发生重大改变，代码会受到重大影响

使用方法

```js
npm install --save-dev @babel/preset-stage-0

{
  "presets": ["stage-0"]
}
```
### 3.es201x

这个是每年更新一次，包括了标准规范的语法

优点：

配置少，风险少

缺点：

配置不够灵活，每年需要更换

使用

```js
npm install --save-dev babel-preset-es2015

{
  "presets": ["es2015"]
}
```

### 4.env

优点：

1.配置简单

2.无语法破坏风险

3.持续更新

**4.更强大、灵活的配置方法**

使用方法

```js
npm install --save-dev @babel/preset-env

{
  "presets": [
    [
      "@babel/preset-env"
    ]
  ]
}
```

## API编译

### env核心配置讲解

**useBuiltIns**

**此选项要在代码入口顶层引入"@babel/polyfill**

**useBuiltIns: 'entry'**

优点

不像默认导入，需要把整个polyfill导入，而是可以**按照浏览器列表支持，选择性的加载**

缺点

体积还是相对较大

```js
npm install @babel/polyfill --save

import "@babel/polyfill";
```

此时可以根据browserslist配置根据运行环境编译语法

![u2kNVg.png](https://s2.ax1x.com/2019/10/07/u2kNVg.png)

不配置browserslist的webpack打包大小

**useBuiltIns: 'usage'**

优点：

只有**用到的才polyfill**,可以说是完美了


缺点

**不会探测引用node_modules代码，这部分不会提供polyfill**，如果第三方包没有编译成兼容版本，就可能报错

```js
npm install @babel/polyfill --save

import "@babel/polyfill";
```

此时会根据项目中引用到语法按需polyfill，体积较小

![u2EH4H.png](https://s2.ax1x.com/2019/10/07/u2EH4H.png)

## babel用法

### 原型开发

适合实时查看babel一些转译方案

https://babeljs.io/repl

### 浏览器纯编译

```html
<div id="output"></div>
<!-- Load Babel -->
<!-- v6 <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<!-- Your custom script here -->
<script type="text/babel">
const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();
</script>
```

### node纯编译

**require-hook**


原理

拦截require行为，在require时对文件进行实时编译

用法

在应用入口

require("babel-register");

import "babel-register";

**babel-cli**

用法

```js
npm install --save-dev @babel/core @babel/cli

增加npm脚本
"scripts": {
  "build": "babel src -d lib"
}
```

### 搭配webpack或者gulp构建工具

这部分查看官方文档即可

**gulp**

```js
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});
```

**webpack**

```js
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```