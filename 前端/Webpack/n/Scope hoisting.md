# Scope hoisting

Scope hoisting 就是作用域提升的意思

## 实例

`constant.js`
```js
export default 'Hello,Jack-cool';

```

入口文件 `main.js:`

```js
import str from './constant.js';
console.log(str);
```

**打包结果**

```js
[
  (function (module, __webpack_exports__, __webpack_require__) {
    var __WEBPACK_IMPORTED_MODULE_0__constant_js__ = __webpack_require__(1);
    console.log(__WEBPACK_IMPORTED_MODULE_0__constant_js__["a"]);
  }),

  (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_exports__["a"] = ('Hello,Jack-cool');
  })
]
```

**启用Scope Hoisting**

```js
[
  (function (module, __webpack_exports__, __webpack_require__) {
    var constant = ('Hello,Jack-cool');
    console.log(constant);
  })
]
```

**constant.js的内容被安全地合并到了main.js**，这样有以下好处：

* 代码体积更小，因为函数申明语句会产生大量代码

* 代码在运行时因为创建的函数作用域更少了，内存开销也随之变小。

## 开启

**webpack4**内置了 Scope hoisting 插件**ModuleConcatenationPlugin**，内部通过

```js
module.exports = {
  //   开启ModuleConcatenationPlugin
  optimization: {
    concatenateModules: true,
  },
};
```

注意，webpack 在生产环境自动启用了此特性，而开发环境关闭有利于构建效率，我们完全无需干涉，下面这样是错误的

```js
{
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()];
}
```

## 提升规则

### 不能被提升的代码

* Non ES6 Module

* export * from "cjs-module"

* Using eval()

* Affected By ProvidePlugin Or Using module

* In Multiple Chunks

## 输出不提升原因

```js
module.exports = {
  //...
  stats: {
    // Examine all modules
    maxModules: Infinity,
    // Display bailout reasons
    optimizationBailout: true
  }
};
```

## 总结

Scope hoisting已经无需我们配置，我们只要关心代码需要使用ES6 module 语法管理即可，以后这个概念慢慢会被人遗忘

