# webpack4最佳实践

## 安装webpack

``` shell
yarn add webpack@4.44.1
```

## js

- [x] 基本配置
  - [x] babel
  - [x] babel.config.js暴露
  - [x] polyfill 引入babel-polyfill即可

- [x] 代码优化
  - [x] Scope Hoisting
  - [x] tree Shaking

- [x] 调试
  - [x] source-map

- [x] 构建性能
  - [x] cache-loader
  - [x] thread-loader
  - [x] DllPlugin externals  跟项目不兼容

- [x] 压缩
  - [x] 压缩

- [x] 规范
  - [x] eslint 具体配置
  - [x] prettier 按需

## css

- [x] 基本配置
  - [x] sass
  - [x] postcss
  - [x] .browserslistrc暴露

- [x] 代码优化
  - [x] treeShaking 无法静态分析，风险大，不做

- [x] 构建性能
  - [x] fibers

- [x] 压缩
  - [x] 压缩

- [ ] 代码规范
  - [ ] styleLint  暂时没必要

## svg

- [x] svg
  - [x] 移除title
  - [x] 合并symbol

## vue

- [x] vue


## webpack

- [ ] 构建性能 接入项目后再具体优化

- [ ] 打包体积 接入项目后再具体优化

  - [ ] 按需加载
  - [ ] 拆分代码