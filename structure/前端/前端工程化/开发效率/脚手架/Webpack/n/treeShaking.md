# tree Shaking

treeShaking就是摇树的意思，生动形象地表达了将代码树解析之后，在抖动过程中，删除不必要的代码

## 什么代码需要删除

* 无法执行的代码

* 执行的结果没使用

* 代码只会影响死变量

## 开启

webpack4中自动开启，主要注意代码用ES6,modules即可，同时关闭babel的模块转译

## 帮助tree Shaking

### 模块

**package.json**

```js
"sideEffects": [
  "**/*.css",
  "**/*.scss",
  "./esnext/index.js",
  "./esnext/configure.js"
],
```

### 函数

```js
/*#__PURE__*/ func()
```

### 使用插件帮助按需加载