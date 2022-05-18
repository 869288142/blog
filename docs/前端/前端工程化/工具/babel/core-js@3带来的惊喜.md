# core-js

这个名词肯定很多人没听过，今天也是在配置babelpolyfill方法发现的

## 起因

[![uRp8Og.png](https://s2.ax1x.com/2019/10/07/uRp8Og.png)](https://imgchr.com/i/uRp8Og)

在使用useBuiltIns:usage按需加载polyfill时，npm run build，就出现上述的提示

```js
{
  "presets": [
    ["@babel/preset-env", {
      "useBuiltIns": "usage",
      "targets": {
        "chrome": "58",
        "ie": "11"
      }
    }]
  ]
}
```

大意是说我们使用了useBuiltIns选项但是没有指定core-js警告，但是告诉你默认是使用core-js@2，但是这个默认行为以后可能会发生改变，最好显示设置core.js，然后列出了@2和@3两个版本

## core-js介绍

其实core-js是我们能够使用新的API的最重要的包，然而一般情况它隐藏在webpack编译后的代码中，我们一般不会去查看，所以容易被遗忘，我们在webpack生成环境下，查看编译后的代码，可以看到例如includes就是从core-js导出到我们的代码去的

![uR9QE9.png](https://s2.ax1x.com/2019/10/07/uR9QE9.png)

### core-js是什么

* **它是JavaScript标准库的polyfill**
* 它尽可能的进行模块化，让你能选择你需要的功能
* **它可以不污染全局空间**
* 它和babel高度集成，可以对core-js的引入进行最大程度的优化


## 升级core-js@3动机


目前我们使用的都默认是core-js@2，它在一年半之前就封锁了分支，至此之后的特性都只会添加到core-js@3，这里有一个生产例子，使用了core-js@2不支持的新特性，导致错误

**core-js@2出现的问题**

[Vue-cli使用flat报错](https://juejin.im/post/5d7efbbb6fb9a06b2650c74a)


**vue-cli也会在V4升级core-js**

[Roadmap for Vue-cli4](https://github.com/vuejs/vue-cli/issues/3649)

**core-js@3添加的特性**

[具体core-js@3才有的特性看这里](https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpreset-env)

## core-js@3 特性概览


* 支持ECMAScript稳定功能，引入core-js@3冻结期间的新功能，比如flat

* 加入到ES2016-ES2019中的提案，现在已经被标记为稳定功能

* **更新了提案的实现，增加了proposals配置项，由于提案阶段不稳定，需要谨慎使用**

* **增加了对一些web标准的支持，比如URL 和 URLSearchParams**

* **现在支持原型方法，同时不污染原型**

* 删除了过时的特性


##  core-js@3与babel

以前我们实现API的时候，会引入整个polyfill,其实polyfill只是包括了以下两个包

```js
core-js
regenerator-runtime
```

**core-js@3升级之后弃用了@babel/polyfill**，以下是等价实现

```js
// babel.config.js
presets: [
  ["@babel/preset-env", {
    useBuiltIns: "entry", // or "usage"
    corejs: 3,
  }]
]

import "core-js/stable";
import "regenerator-runtime/runtime";
```

## 总结

core-js@3废弃了babel-polyfill，实现了完全无污染的API转译，非常有潜力，但是其暂时会增加打包体积，这个还得看未来普及度上来之后的权衡