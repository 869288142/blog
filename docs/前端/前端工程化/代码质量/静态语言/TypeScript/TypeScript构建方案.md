# TypeScript构建方案

## 编译

### 不需要babel生态

```js
npm i ts-loader -D
```

### 需要babel生态


**使用TypeScript编译再使用babel编译Vue-cli使用这种方式**
```js

npm i fork-ts-checker-webpack-plugin ts-loader -D
```

**只使用babel编译，但是不支持一些TypeScript的特性，目前CRA脚手架使用这种方式**，[不支持的特性](https://babeljs.io/docs/en/babel-plugin-transform-typescript)
```js
npm i fork-ts-checker-webpack-plugin  @babel/preset-typescript -D
```

