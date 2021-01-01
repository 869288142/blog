#  tree-shaking

Tree shaking 是一个通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code) 行为的术语,简单来说就是**剔除没有使用的代码**

## dead-code概念

* 代码不会被执行，不可到达

* 代码执行的结果不会被用到

* 代码只会影响死变量(只读不写)

tree-shaking只是一个DCE的实现，更**关注于无用代码的消除**，消除那些引用了但并没有被使用的代码

## tree-shaking的好处

对于体积敏感的web应用来说，减少代码体积是最大的优化，tree-shaking就可以很好地减少代码的体积

## javascript的tree-shaking前提

1. **使用es6模块**，tree-shaking是基于编译时代码AST做处理，此时代码是静态的，所以要基于支持静态分析的模块

2. 确认在tree-shaking之前没有被其他编写程序转换es6模块到其他模块格式，比如babel会自动转化为commonJS

3. 加入支持tree-shaking的压缩程序，比如webpack启用production模式，以开启压缩和tree-shaking，现在webpack默认的miner是teser，有更好的tree-shaking能力

4. **代码无副作用**

## 基于webpack的tree-shaking尝试

这里我们按照上面的前提进行webpack配置

```shell
npm i  webpack webpack-cli babel-loader @babel/core @babel/preset-env
```

**babel.config.json**
```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false // 关闭模块转换
      }
    ]
  ]
}
```
**webpack.config.js**
```js
var path = require('path')
module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry: path.join(__dirname, 'src/main.js'),
  output: {filename: 'webpack.bundle.js'},
  // mode: 'development',
  mode: 'production', // 生产模块开启tree-shaking
  optimization: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader'
      }
    ]
  },
  plugins: [
  ],
  optimization: {
    usedExports: true, // 开发模式下调试tree-shaking
  },
}

```

上面已经配置了babel不转译es6模块，而且生产模式下，开启了tree-shaking(terser和usedExports: true)，接来下我们只要编写es6模块的代码进行测试就可以了

## 实践

**未被使用的代码**
```js
// 未使用的变量
let a = 1
// 未使用的函数
function unsed() {
  let x = 1
}
// 未使用的类
class unsedClass {

}
```

**不可到达的代码和执行结果不会被使用的代码**

```js
// math.js

// 不可到达的代码
export function cube ( x ) {
    return x * x * x;
    return window
}
// 执行的结果没有被使用到
export function square ( x ) {
	return x.a
}
square({ a: 123 })


// main.js
import * as Math from './math.js';
console.log( Math.cube( 5 ) ); // 125
```

到此为止tree-shaking的效果都非常令人满意，接下来我们稍微加点东西

```js
// 上面square加上console.log(x.a)
export function square(x) {
  console.log(x.a);
  return x.a;
}
```

打包后发现，square仍然存在,原因就是`console.log`,它被称为副作用，我们先按照官网的方式去掉副作用

```js
// 上面square加上console.log(x.a)
export function square(x) {
  console.log(x.a);
  return x.a;
}
```

```shell
npm i -D terser-webpack-plugin
```

```js
var path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  // 入口文件地址，不需要写完，会自动查找
  entry: path.join(__dirname, 'src/main.js'),
  output: {filename: 'webpack.bundle.js'},
  // mode: 'development',
  mode: 'production',
  optimization: {
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader'
      }
    ]
  },
  plugins: [
  ],
  optimization: {
    usedExports: true,
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'] // 将console.log指定为纯函数
          }
        }
      })],
  },
}

```


再次打包，发现square方法被剔除了

## 什么是副作用

这里的副作用其实和函数式编程的副作用有出入，这里仅仅是指代码不会影响到现在执行的程序


### /\*#__PURE__\*/

在teser的帮助下，我们可以写入函数名称到teser的配置，其实webpack也提供了一个注解来帮助我们指定没有副作用的函数

```js
const x = /*#__PURE__*/i_am_dropped_if_x_is_not_used()
```

### sideEffects

当我们使用一个库时，总不可能我们自己去判断每个引入的方法是否是有副作用，然后加上`/*#__PURE__*/`注解，webpack提供了一个sideEffects来让库的开发者指定库的副作用与否，改善tree-shaking体验

**package.json**

```js
{
  "name": "your-project",
  "sideEffects": false | [...paths]
}
```

## 如何在开发模式下调试tree-shaking

只需求将webpack的usedExports属性设置为true

```js
optimization.usedExports=true
```

打包后就能看到

```js
// unused harmony export xxx
```

注意，这个只是标记，便于压缩程序如terser去除此代码，但是最终去不去除，是由压缩程序决定的，这只是标记了去除的可能性

### webpack5 tree-shaking优化

#### Nested tree-shaking(嵌套tree-shaking)

```js
// inner.js
export const a = 1;
export const b = 2;

// module.js
import * as inner from "./inner";
export { inner }

// user.js
import * as module from "./module";
console.log(module.inner.a);
```

在webpack5的时候，b变量会被剔除

#### Inner-module tree-shaking

webpack4有一个[issue](https://github.com/webpack/webpack/issues/6264)讨论了这个问题，原因是**webpack4没有进行deep scope analysis**,讨论的结果就是`webpack-deep-scope-plugin`插件的诞生，webpack5将这个优化吸收了

```js
import { something } from "./something";

function usingSomething() {
  return something;
}

export function test() {
  return usingSomething();
}
```

开启`optimization.unusedExports`和`optimization.sideEffects`时，上述的test会被移除


## 总结

要想在webpack下达到良好的tree-shaking体验，需要注意一下几点：

### 构建上

1. 使用es6模块语法

2. 关掉编译器转换es6模块的行为

3. 将webpack的mode调整为production模式

4. 第三方库尽量使用es6版本，可以配合`babel-import-plugin`

### 代码开发上

1. 尽量避免不必要的副作用

2. 合理使用webpack提供的注解`/*#__PURE__*/`和`sideEffects`去除副作用


