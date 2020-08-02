# webpack

webpack之所以风靡，与SPA和ES6模块的风靡关系很大，因为**ES6模块在浏览器端兼容性不是很好，而且请求多个模块会浪费很多个HTTP请求时间，所以需要一个模块化打包工具，webpack应运而生**

## webpack原理简述

遍历整个依赖图，完成对应转换后，输入代码，这当中设计到两个知识点，一个是图的生成和解析，一个就是代码转换，也就是经常说到的AST应用

## webpack安装

```shell
npm install --save-dev webpack

npm install --save-dev webpack-cli
```

## webpack使用

```js
  "start": "webpack"
```

## webpack用法

### entry

默认值为 `./src`

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

### 出口

默认值为`./dist`

```js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

## 配置CSS

### 基础配置

```shell
npm install --save-dev style-loader css-loader
```

### 后处理

```shell
npm i -D  postcss-loader
```

#### 私有前缀补充

新增postcss.config.js

```js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

新增.browserslistrc

配置支持浏览器范围

```xml
> 1%
last 2 versions
```

#### 分离css文件

```shell
npm install --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        // use: [MiniCssExtractPlugin.loader,"style-loader", "css-loader", "postcss-loader"]
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()]
};
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()]
};

```