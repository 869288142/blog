# polyfill

在es6风靡的时候，babel给了我们一个有力的转换方案，可以在低版本浏览器上写一些新语法而不用考虑兼容问题

## polyfill的诞生

### 语法和API区分

语法是用来产生特殊效果的一些符号

```js
list = [...list]
```

API分为对象静态、实例方法和函数

这里我们简单区分一下，方便下面展开

### babel的局限

为什么会出现polyfill呢，我们都知道，babel是生成AST，然后暴露了AST操作接口插件给我们，AST看起来是一个神秘的东西，但是我们可以大概知道，它是基于当前信息生成了一个代码的另外一个表现形式，但是**由于js是动态的，我们是无法得知一个实例调用的方法到底是哪个原型的，这一点就导致了后续产生了很多polyfill的方案，当然一些特殊的语法支持，也需要polyfill**

```js
a.includes(x)  // 这里是string还是array呢，我们无法得知
```

由于上述特性，处理API的编译，尤其困难

## 实验配置(babel、webpack)

### babel

```js
npm i -D  @babel/core @babel/preset-env

npm i @babel/polyfill
```


.babelrc

```json
{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "entry",
      "corejs": 2
    }]
  ]
}
```



### webpack

安装

```js
npm i -D webpack webpack-cli

npm i babel-loader
```

配置

webpack.config.js

```js
const path = require('path');
module.exports = {
  // 开发模式，能看到未压缩的代码
  mode: "development",
  // 编译入口
  entry: './src/index.js',
  // 编译出口
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 编译规则
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          // 配置babel
          loader: 'babel-loader'
        }
      }
    ]
  }
};
```

配置脚本

![u2mVKI.png](https://s2.ax1x.com/2019/10/07/u2mVKI.png)


## polyfill方案

polyfill的核心就是检测当前是否存在该方法，不存在才使用我们的实现

### 手动

**不推荐**

缺点：

非官方实现，很容易出现于规范不一致导致的问题，一些polyfill实现起来也很麻烦，仅用于临时一些修复

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function () {
    // 实现
  }
}
```

### 官方polyfill

babel提供了一个@babel/polyfill包，包括了目前所有的polyfill

**以下都基于了新的presets，env的useBuiltIns选项测试**

```js
// .babelrc 

{
  "presets": [
    ["@babel/preset-env", {
      // "useBuiltIns": "xxx",
    }]
  ]
}
```


**全部导入(entry)**

一次性全部导入整个polyfill，是一个彻底的方案

优点：

方便

缺点：

文件很大，所以后续的方案都是针对这个问题做的优化


```js
// .babelrc 

{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "entry",
    }]
  ]
}
```

![u2uYNT.png](https://s2.ax1x.com/2019/10/07/u2uYNT.png)

我们在webpack主入口导入polyfill

运行npm run start

[![u2u6UK.png](https://s2.ax1x.com/2019/10/07/u2u6UK.png)](https://imgchr.com/i/u2u6UK)

可以看到完全导入polyfill，打包后的文件增加了400K，polyfill未压缩文件在250K左右，这里有webpack的其他因素影响，但是后续测试也在此条件下进行，可以忽略

**entry选项可以支持配置browserlist配置编译目标环境，从而减少编译的代码体积**

**按需导入（usage）**

可以按照我们项目中使用的API，只导入这部分polyfill,**同时配合browserlist可以实现代码按需加载同时为运行环境按需加载**

**优点：**

配置方便

体积很少

**缺点：**

还是没有根据运行环境polyfill，导致所有运行环境被一致polyfill，稍微有点浪费，比如说同时要求IE和谷歌，他们最后的polyfill集合是两者的并集，而不是分开打包的。

**使用方法**

1. 去掉我们index.js的import "@babel/polyfill"

2. useBuiltIns配置改为usage

**效果**

![u2MEY8.png](https://s2.ax1x.com/2019/10/07/u2MEY8.png)

**注意点**

browserslist虽然可以按照指定环境检测是否需要polyfill，但是由于其源是can i use上的，其实还是不太精准的，js的polyfill比起css、html的polyfill要求更高，这是一个值得考虑的问题，不过，**vue-cli官方采用了这个方案@vue/babel-preset-app**，这是**基于useBuiltIns: 'usage'和browserslist结合进行polyfill的一个方案**

**警告**

由于babel不会编译node_modules下的包，所以这些依赖如果使用了新特性，此方案不会编译其新语法，**一个处理方式就是显式添加polyfill**,**另外一种方式就是你不知道第三方依赖用了什么，这个时候需要回退到useBuiltIns: 'entry'**


### UA检测 polyfill

我们可以根据我们使用的新特性传输给服务器，然后服务器检测浏览器的UA，就可以决定真正返回的polyfill了，**这个思路实现了真正的环境按需polyfill，不像browserslist一样会取所有兼容环境的并集。**

优点：

能够真正按照运行环境进行polyfill

缺点

多一次http请求

UA标志混乱，很可能导致Polyfill缺失

增加服务区成本

**polyfill.io**

用法

```js
<script src="https://polyfill.io/v3/polyfill.min.js?></script>
```

非常简单，导入一个cdn即可，但是这个服务是在国外，所以非常慢

**阿里fork了它的开源服务，做了如下定制**

将polyfill包进行拆分，加入了polyfill.io不认可但是工程需要的polyfill比如说RegeneratorRuntime


编写了标准的UA识别逻辑，大幅大幅降低了响应时间 通常响应时间在 30ms 以内

利用CDN提提供了高可用性的服务

**阿里polyfill**

https://polyfill.alicdn.com/polyfill.min.js
 
这个polyfill被正式用到阿里巴巴官方，前几天有看过这个script，最近好像更新为其他的了


## polyfill未来

**按需特性探测**

我们在编码时，工具可以探测源码及node_modules下使用到的特性，返回一个特性列表

**在线补丁**

就像https://polyfill.io/的方案，我们会检测按需特性探测得到的列表是否在浏览器已经支持，只下载缺失的polyfill

**按需特性探测 + 在线补丁才是终极方案**

## polyfill目前的最佳实践

目前在线补丁这方面还未成熟，我们暂时不使用在这部分，只对按需特性探测进行优化

**useBuiltIns: 'usage'和browserslist结合**

这里我们对这个方案进行一个优化

### 不编译第三方包的处理

**1.第三方包明确指出了需要的 polyfill**

只需要加此polyfill显式加入include配置中去，具体配置可以看文档

**2.没有指出需要的polyfill**

这个情况暂时没有办法处理，需要回退到useBuiltIns: 'entry'配置

## 转译API的另外一种方式

优点

1.不会造成全局污染

缺点

1.由于避免全局污染是由助手函数实现的，所以体积会比正常polyfill大

2.暂时不支持[].inclues这样的实例方法

### polyfill的问题

polyfill是会污染原型的

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function () {
    // 实现
  }
}
```

如果是开发一个组件库，就不能污染原型，因为会导致环境出现一些不可预测的问题

### @babel/plugin-transform-runtime

**用法**

安装

```js
npm install --save-dev @babel/plugin-transform-runtime

npm install --save @babel/runtime
```
配置

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,  
        "helpers": true,
        "regenerator": true,
        "useESModules": false
      }
    ]
  ]
}
```

**runtime完成的工作**

* 在开启regenerator选项时，自动引入@babel/runtime/regenerator

* 可以通过corejs定制版本

* 开启helpers选项，会将内联函数提取为helper函数，统一引入


## 总结

如果时开发组件库等第三方依赖时，采用babel-runtime机制来实现我们代码的转译，避免对运行环境的污染，在开发应用时，使用正常的polyfill