# node 调试技巧

## 使用方法

### 命令

``` shell
# 开启调试模式
node --inspect entry.js
# 开启调试模式并且在第一行启用断点
node --inspect-brk entry.js
```

### 客户端

#### Chrome

**打开谷歌控制台发现Node的标志进入即可**

#### VSCode



## 调试npm 全局命令

``` shell
node --inspect  ./node_modules/bin/npm_package_name
```