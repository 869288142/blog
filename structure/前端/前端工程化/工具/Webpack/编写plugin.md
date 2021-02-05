# 编写plugin

## HelloWorldPlugin

* 声明一个`class`

* 编写`apply`方法

**HelloWorldPlugin.js**

``` js
class HelloWorldPlugin {
    apply(compiler) {
      // 注册指定hook逻辑
      compiler.hooks.done.tap('Hello World Plugin', (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        console.log('Hello World!');
      });
    }
  }
  
module.exports = HelloWorldPlugin;
```

## 获取plugin插件配置

``` js
class HelloWorldPlugin {
    constructor(options) {
        console.log(options);
    }
    apply(compiler) {
      // 注册指定hook逻辑
      compiler.hooks.done.tap('Hello World Plugin', (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        console.log('Hello World!');
      });
    }
  }
  
module.exports = HelloWorldPlugin;
```

## 验证plugin插件配置

``` js

const { validate  } =  require('schema-utils')
const schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      }
    }
};
class HelloWorldPlugin {
    constructor(options = {}) {
        validate(schema, options, 'Hello World Plugin');
        this.options = options
    }
    apply(compiler) {
      // 注册指定hook逻辑
      compiler.hooks.done.tap('Hello World Plugin', (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        console.log('Hello World!');
      });
    }
}
  
module.exports = HelloWorldPlugin;
```

## 内置hook类型、

### Synchronous Hooks 

* Sync Hook

* Bail Hooks 可以中断后面的hook

* Waterfall Hooks

参数来自上一个`plugin`值

### Asynchronous Hooks

* Async Series Hook 异步顺序钩子

* Async waterfall 

* Async Series Bail 异步可停止顺序钩子

* Async Parallel 异步无序钩子