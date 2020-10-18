# AST

AST全称**抽象语法树**，`AST`整体内容归属于**编译原理**


## 编译流程

1. `code` 解析成 `AST`  属于`parse`阶段

2. 修改 `AST`  

3. `AST` 生成 `code`  属于`generator`阶段

一般而言，编译原理要做的基本也是上面3步，不过对于一般场景来说，**`parse`和`generator`我们不需要关注**，库会帮我们处理，**我们需要关注的是，如何将AST转换成我们想要的AST**


## AST应用场景

* 预编译语言`sass`、`jsx`、`es6+`、`TypeScript`

* `lint`和`formate`

可以说基本前端目前绝大数工具都离不开`AST`，可见`AST`的重要性

## AST操作库

本次基于babel使用的编译器

### 解析

```js
let { parse } = require("@babel/parser")

const code = `let a = 1`

const ast = parser.parse(code);

console.log(ast);
```

### 生成

```js
let { parse } = require("@babel/parser")

let generate = require("@babel/generator").default

const code = 'class Example {}';
const ast = parse(code);

const output = generate(ast, { /* options */ });
```

### 转换

```js
let { parse } = require("@babel/parser")
const traverse = require("@babel/traverse").default;

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

我们把上述三个过程组合一下

```js
let { parse } = require("@babel/parser")

let generate = require("@babel/generator").default

const traverse = require("@babel/traverse").default;

const code = `function square(n) {
    return n * n;
  }`;

const ast = parse(code);

// 修改AST

traverse(ast, {
    enter(path) {
      if (path.isIdentifier({ name: "n" })) {
        path.node.name = "x";
      }
    }
  });

const output = generate(ast, { /* options */ });

console.log(output);
```

### 转换函数使用注意点

* traverse使用的是深度遍历树的实现

### AST对比工具

[AST可视化](https://astexplorer.net/)

## 实践Codemod

## 可读性

## 多实践