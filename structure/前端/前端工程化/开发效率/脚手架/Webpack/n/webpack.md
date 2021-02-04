# webpack

webpack 之所以风靡，与 SPA 和 ES6 模块的风靡关系很大，因为**ES6 模块在浏览器端兼容性不是很好，而且请求多个模块会浪费很多个 HTTP 请求时间，所以需要一个模块化打包工具，webpack 应运而生**

## webpack 原理简述

遍历整个依赖图，完成对应转换后，输入代码，这当中设计到两个知识点，一个是图的生成和解析，一个就是代码转换，也就是经常说到的 AST 应用

## webpack 安装

```shell
npm install --save-dev webpack

npm install --save-dev webpack-cli
```

## webpack 使用

```js
  "start": "webpack"
```

## webpack 用法

### entry

默认值为 `./src`

```js
module.exports = {
  entry: "./path/to/my/entry/file.js",
};
```

### 出口

默认值为`./dist`

```js
const path = require("path");

module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
};
```

## 配置 CSS

### 基础配置

```shell
npm install --save-dev style-loader css-loader
```

### sass 

sass编译有2个版本node-sass和dart-sass(sass),node-sass安装很坑，推荐用sass即可

```shell
npm i -D sass sass-loader
```

### 后处理

postcss-preset-env自带autoprefixer，相当于css版本的babel，暂时用的少，以后理解

```shell
npm i -D  postcss-loader postcss-preset-env 
postcss-flexbugs-fixes
```

#### 私有前缀补充

新增 postcss.config.js

```js
module.exports = {
  plugins: [require("autoprefixer")],
};
```

新增.browserslistrc

配置支持浏览器范围

```xml
> 1%
last 2 versions
```

#### 分离 css 文件

```shell
npm install --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        // use: [MiniCssExtractPlugin.loader,"style-loader", "css-loader", "postcss-loader"]
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
```

### 配置 JS

#### polyfill

如果不是 SPA 类型，直接引入 babel-polyfill,SPA 类型结合 core-js3 和 useBuiltIns 配置改为 usage 按需打包即可

#### JS 转译

```shell
npm install -D babel-loader @babel/core @babel/preset-env
```

babel 主要是配置对应的语法转译插件，现在一个 **@babel/preset-env** 就可以了，其他插件按需安装

```js
  {
    test: /\.js$/,
    exclude: file => (
      /node_modules/.test(file)
    ),
    use:  [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]
  }
```

#### js 多线程打包

```js
{
    test: /\.js$/,
    exclude: file => (
      /node_modules/.test(file)
    ),
    use:  [
    loader: "thread-loader",
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]
}
```

#### 结果缓存

要制定合理的缓存策略，不然会出现编译不生效的情况

```js
{
    test: /\.js$/,
    exclude: file => (
      /node_modules/.test(file)
    ),
    use:  [
    loader: 'cache-loader',
    loader: "thread-loader", 
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]
}
```

#### 代码压缩

```js
// 生产环境自动启用
optimization: {
  minimizer: [new TerserPlugin({
      sourceMap: true,
      terserOptions: {
          compress: {
          }
      }
  })
}
```

#### Scope hoisting

Scope hoisting直译就是作用域提升，webpack4已经在生产环境默认开启了，开发环境没必要开启，可以提升构建速度，我们现在是不用配置的

```js
module.exports = {
  optimization: {
    // concatenateModules: true
  }
};
// 启用ModuleConcatenationPlugin插件
```



