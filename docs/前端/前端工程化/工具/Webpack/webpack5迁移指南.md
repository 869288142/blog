# 你想知道webpack5的一切

## 构建优化

### 打包速度-缓存

webpack4我们会使用`cache-loader`或者`hard-source-webpack-plugin`来为那些昂贵的操作进行缓存，webpack5内置了此缓存系统，以后又可以少配一个缓存了，开启方法如下：

```js
    cache: {
        // 1. Set cache type to filesystem
        type: 'filesystem',

        buildDependencies: {
            // 2. Add your config as buildDependency to get cache invalidation on config change
            config: [__filename],

            // 3. If you have other things the build depends on you can add them here
            // Note that webpack, loaders and all modules referenced from your config are automatically added
        },
    },
```

之前需要对缓存的方法进行选型，还要编写清除缓存的规则，现在都内置了，缓存的效果也比上述两个方法要好，对于node_modules的缓存更新是根据package.json触发的

### 打包体积-tree-shaking改善

**Nested tree-shaking**

```js
// inner.js
export const a = 1;
export const b = 2;

// module.js
export * as inner from './inner';
// or import * as inner from './inner'; export { inner };

// user.js
import * as module from './module';
console.log(module.inner.a);

```

变量b会被删除

**Inner-module tree-shaking**

webpack4没有分析模块中的导入导出关系，webpack5新增了这部分的分析算法，它能够分析模块的导入导出关系，以提供更友好的tree-shaking功能

```js
import { something } from './something';

function usingSomething() {
  return something;
}

export function test() {
  return usingSomething();
}
```

在开启`optimization.unusedExports`和`optimization.sideEffects`时，test函数会被删除，这些标志可以被分析

* function declarations
* class declarations
* export default with or variable declarations with
  * function expressions
  * class expressions
  * sequence expressions
  * /\*#__PURE__\*/ expressions
  * local variables
  * imported bindings


**CommonJs Tree Shaking**

webpack5支持一些CommonJs结构的tree-shaking

* exports|this|module.exports.xxx = ...
* exports|this|module.exports = require("...") (reexport)
* exports|this|module.exports.xxx = require("...").xxx (reexport)
* Object.defineProperty(exports|this|module.exports, "xxx", ...)
* require("abc").xxx
* require("abc").xxx()
* importing from ESM
* require() a ESM
* flagged exportType (special handling for non-strict ESM import):
    * Object.defineProperty(exports|this|module.exports, "__esModule", { value: true|!0 })
    * exports|this|module.exports.__esModule = true|!0


**Side-Effect analysis**

webapck5能够根据静态分析自动获取一些Side-Effect-free

### 代码体积-改善代码生成

生成体积更小的代码

### 运行速度优化

只有在需要时，entry才会被导出

### 作用域提升优化

scope hosting运行在不同entery进行作用域提升

### Tree Shaking生成信息改善

export * has been improved to track more info and do no longer flag the default export as used.

export * will now show warnings when webpack is sure that there are conflicting exports.

import() allows to manually tree shake the module via /* webpackExports: ["abc", "default"] */ magic comment.


* 使用稳定缓存提升构建速度

* 改善长期缓存算法

* 通过优化tree-shaking和代码生成来减少bundle体积大小

* 提升web平台兼容性

* 整体架构优化和提前引入一些breakingChange，让整体代码更加稳定

## 移除项

迁移的时候注意警告即可

### Syntax deprecated

```js
require.include
// 使用下列代替
Rule.parser.requireInclude
```

## 长期缓存优化

### 稳定的Chunk, Module IDs

### contenthash 真实file的hash

## Module Federation

## 新的web平台支持特性

### JSON module

需要使用默认导出

### Asset modules

import url from "./image.png" and setting type: "asset" in module.rules when matching such import. (old way)

new URL("./image.png", import.meta.url) (new way)

## 内置 Progress

缓存指南
  contenthash
  runtimeChunk
  合理拆包

拆包