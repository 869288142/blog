# AST

AST全称抽象语法树，是将代码用一棵树的形式表现出来的一种方式，个人觉得，是为了我们操作代码，毕竟操作文本要麻烦的多，目前前端很多工具都使用到了AST来做一些转换，今天来了解一下

## 编译流程

code 解析成 AST  parse

modify AST  修改

AST 生成 code  generator

编译主要就是上面三步，我们的关注点在认识一颗抽象语法树的结构，如何去操作


## 编译工具

本次基于babel使用的编译器

### 解析

```js
let parser = require("@babel/parser")

const code = `let a = 1`

const ast = parser.parse(code);

console.log(ast);
```

### 转换

```js
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});
```

### 生成

```js
mport {parse} from '@babel/parser';
import generate from '@babel/generator';

const code = 'class Example {}';
const ast = parse(code);

const output = generate(ast, { /* options */ }, code);
```

我们把上述三个过程组合一下

```js
let parser = require("@babel/parser") 

let traverse = require("@babel/traverse").default

let generate = require("@babel/generator").default


exports.transform = function(path, options) {

// fs读取文件
const fs = require("fs")
let  code = fs.readFileSync(path, {
  encoding: "utf8"
})
  
//解析成AST 
const ast = parser.parse(code);

// 对AST进行修改

traverse(ast, {
  ...options
})


// 生成代码
const output = generate(ast, { /* options */ }, code);

// 输出代码
console.log(output);

}

```

这个函数接受一个文件路径和一个修改的options

```js
// code.js

let a = () => {
  
}
```

```js
// index.js

let t = require("@babel/types")
let { transform } = require("./transform")

let options = {

  ArrowFunctionExpression(path){
    let node = path.node;
    let params = node.params;
    let body = node.body;
    if(!t.isBlockStatement(body)){
        let returnStatement = t.returnStatement(body);
        body = t.blockStatement([returnStatement]);
    }
    let funcs = t.functionExpression(null, params, body, false, false);
    path.replaceWith(funcs);
  }

}

transform("./code.js", options)


```
![uWSVt1.png](https://s2.ax1x.com/2019/10/07/uWSVt1.png)

我们成功把箭头函数转换成了普通函数

## AST工程关注点-节点修改

**babel修改AST时，会采用深度遍历整颗节点数**，我们需要做的是，对AST树转换为我们想要的，比如上面匹配到箭头函数就替换成普通函数一样

### 节点

