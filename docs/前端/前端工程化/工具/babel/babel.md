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



## 语法编译

我们知道了其实babel是一个编译器，所有动作都会修改AST达到我们的目的，那么支持新语法，也是这个原理，如何提供修改的接口呢，babel引入了插件的概念，插件可以操作AST，这样就解决了扩展问题

所以，**新语法都是有对应的插件的**

这个时候我脑子想起来es6语法那么多，总不可能一个一个配置吧，放心，babel官方也想到了这个问题，开启了一系列的探索，要记住**presets只是一些常用plugin的集合**


### env

**经过stage-x和esxxxx的尝试，最终babel提出了env的预设，更新会自动包含所有的稳定提案，不稳定提案让用户作为插件自己去去使用，从而减少用户的配置**

优点：

1.配置简单

2.无语法破坏风险

3.持续更新

**4.更强大、灵活的配置方法**

**注意点**



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

**此选项要在代码入口顶层引入@babel/polyfill**

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

## 优化

### 提取helper

``` js

plugins: [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                // 禁用polyfill注入，其他地方已经注入了
                "corejs": false,
                // 开启helper 提取，从每个文件注入变成集中从模块引入
                "helpers": true,
                // 禁用 await async helper regenerator，jzfrontend已经注入了
                "regenerator": false,
            }
        ]
    ]
]

```