# eslint插件编写


## 初始化模版

``` js
// 安装eslint模版
npm i -g yo
npm i -g generator-eslint
// 
yo eslint:plugin
yo eslint:rule
```

## 编写代码和用例

**lib/rules/max-params.js** 
```js
module.exports = {
  meta: {
    docs: {
      description: "最多参数",
    },
  },
  create: function (context) {
    /**
     * 获取函数的参数的开始、结束位置
     * @param {node} node AST Node 
     */
    function getFunctionParamsLoc(node) {
      const paramsLength = node.params.length;
      return {
        start: node.params[0].loc.start,
        end: node.params[paramsLength - 1].loc.end,
      };
    }
    return {
      FunctionDeclaration: (node) => {
        if (node.params.length > 3) {
          context.report({
            loc: getFunctionParamsLoc(node),
            node,
            message: "参数最多不能超过3个",
          });
        }
      },
    };
  },
};
```
**/tests/lib/rules/max-params.js**

```js
var ruleTester = new RuleTester();
ruleTester.run("max-params", rule, {
  valid: ["function test(d, e, f) {}"],
  invalid: [
    {
        code: "function test(a, b, c, d) {}",
        errors: [{
            message: "参数最多不能超过3个",
        }]
    },
  ],
});
```

## 运行单元测试

```shell
npm run test
```

## 插件使用

```shell
# 已经发布
npm install eslint-plugin-my-eslist-plugin

#本机调试

npm link

```

```js
{
    "plugins": [
        "zoo" // 你的 ESLint plugin 的名字
    ]
}
```

```js
{
    "rules": {
        "zoo/rule-name": 2
    }
}
```