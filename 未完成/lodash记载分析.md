使用lodash都是用如下代码
```js
const _ = require("lodash")
```
这里的加载逻辑是从当前目录的一直往上找到node_modules,找到lodash目录，默认去找package.json下的main字段中的文件

![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190206154353085-451159009.png)

lib/index.js代码如下
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190206152800820-260384283.png)

每个函数被割分为更小的单元(文件),通过require导入到index，然后根据是否为ES6模块,ES6模块返回的obj为
```js
{ default: {}}
```
然后统一加载后的对象取default属性

我想了一下，关键代码在这里
```js
Object.defineProperty(exports, "__esModule", {
  value: true
});
```
这个代码设置了当前模块为ES模块
此时这部分代码import导入的是module.exports.default属性

如果源码设置module.exports.default属性，需要使用
import * as alias from "module"
babel会转换
这部分会将模块内的属性赋值给module.exports.default
