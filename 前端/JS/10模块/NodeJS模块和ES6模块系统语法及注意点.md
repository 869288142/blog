###社区模块规范:

1.CommonJS规范 
规范实现者：
**NodeJS 服务端**  
Browserify 浏览器 

2.AMD规范 全称 异步模块定义 
规范实现者：
**RequireJS 浏览器**

3.CMD规范 通用模块定义
规范实现者：
seaJS 服务端和浏览器通用

###官方模块规范

1.ESM规范 就是ES6 Module
  **各浏览器和服务端**


目前常用的就是浏览器端的RequireJS、NodeJS、以及ESM

##CommonJS语法分析

###module.export
关键
1.module.exports实质上是一个对象,最后模块导出的对象就是这个引用指向的对象
```js
  module.export.key = value
  // eg: 
  module.export.a = 1; 
  // 整体管理导出，此时exports与module.exports指向断开，导致exports上的属性被忽略
  module.export = {
    a:1,
    b:1
  }
```
2.exports是一个module.export的助手变量，用于就地导出,两者默认指向同一对象，即module.exports === exports true
```js
  // 像比较长的程序,写完所有之后，再去找到需要导出的变量再移到低端的export.module上逐个添加，是相当麻烦，一般在变量下决定是否导出
  //eg 
  let fA = function () {

  }
  module.exports.fA = fA
  let fB = function () {

  }
  module.exports.fB = fB

  // exports 简洁很多
  let fA = function () {

  }
  module.fA = fA
  let fB = function () {

  }
  module.fB = fB
```
3.在逐个导出时使用exports,而在导出一个对象时，使用module.exports，不建议混用，如果需要，可以作一下处理:
```js
  // 在最后导出时将exports对象和module.exports对象合并
  exports.a = 1
  module.exports = Object.assign({
  b : 1
  },exports)
```

###require
关键:
1.模块区分，知道即可
  let f = require('url')
```js
  // 核心模块,第三方模块(npm安装),指定模块名即可
  let f = require ('modulename')
  // 自定义模块，需指定相对或者绝对路径
  let f = require('absolutePATH/relativeAPTH')
```
2.查找时,没有后缀名的会尝试添加.js、.json、.node,这里可以稍微偷个懒
```js
  let f = require('./circle')
  // 等同于
  let f = require('./circle.js')
```

##ESM语法分析：

###export var/function/class
关键:
1.导出值和内部值要有对于关系,即
```js
  // error
  export 1

  // error
  let m = 1
  export m

  // correct
  export let m = 1

  // correct
  let m = 1;
  export {m}
```
直接在声明时导出或者用一个{}包裹导出

2.export default 用于导出一个默认值，使得用户可以不需要知道内部导出变量名称即可使用
PS: 一个模块只能有一个默认导出
```js
  export default 等同 export {add as default}
  // 不能接变量声明语句
  export default let a = 1
```
普通导出与默认导出使用的区别
```js
  // 普通导出的导入使用
  export {f}
  import {f} from 'fmod'

  // 默认导出的导入使用,可以无需知道导出模块的内部变量名,任意重命名
  export default f
  import c from 'fmod'
```

3.导出值与模块值是动态绑定的
```js
export let foo = 'bar';
// 500毫秒后,其他模块拿到的foo值会变成bar
setTimeout(() => foo = 'baz', 500);
```

###import用法
关键:
1.导入非默认变量时需要使用{}语法，并且变量要与导出时变量一致
```js
  // 普通导出的导入使用
  export {f}
  import {f} from 'fmod'
```
2.导入默认变量时，省略{},并且可以重命名导出变量
```js  
  // 默认导出的导入使用,可以无需知道导出模块的内部变量名,任意重命名
  export default f
  import c from 'fmod'
```
3.可以使用*导出整体模块
```js
  // circle.js
  export let radius = 1
  export let area = 2*PI*radius
  // main.js
  import * as circle from './circle.js'
  circle.radius
  circle.area
```
4.可以使用,同时导出默认导出和常规导出
```js
import _,{each, forEach} from 'lodash'
```

5.多次import同一模块，只会执行一次

6.import可以与require混用，但是其在静态分析阶段执行，也就是会先于require加载,这在要求一定的导入顺序时要注意


###export 与 import复合写法
```js
export { foo, bar } from 'my_module';

// 可以简单理解为,但是合并写法等同于没有在当前模块中导入my_module，即无法使用
import { foo, bar } from 'my_module';
export { foo, bar };
```

###ESM加载CommmonJS
关键：
1.CommonJS模块输出对象module.exports将会被Node转换成默认导出
```js
  // 导出
  export default module.exports
  // 导入,类似导入默认
  import m from './m'
```
2.此时CommonJS模块变量遵循其规则，不会动态绑定
```js
  module.exports = 123;
  setTimeout(() => module.exports = null,500)
  //500毫秒后，module.exports仍然是123
```
3.由于CommonJS模块运行时，才会确定输出的module.exports对象，而ESM在编译时就要确定接口，导入时，不允许解构语法
```js
  import {readFile} from 'fs'
```
解决方案：
```js
  //整体导入 
  import * as express from 'express'
  const app = express.default()
  
  //默认导入,更优
  import express from 'express'
  const app = express() 
```



