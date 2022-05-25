# 扩充第三方模块类型

typescript自带类型系统，但是目前社区很多库都是JavaScript实现的，如何让这些库与typescript兼容是一个难题，经过微软多次尝试，提出了xx.d.ts方案

## d.ts编写

有时候我们的库或者第三方库没有x.d.ts声明，我们需要自己编写

## 引用依赖

### /// \<reference path="..." /> 

TypeScript使用下述名叫**三斜线指令**的一种,**用来声明不同声明之间的依赖,用于编写TS代码**：

```js
/// <reference path="..." /> 
```
**场景**

比如我们需要一些node的定义

**Validation.ts**

```js
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}
```

**LettersOnlyValidator.ts**

```js
// 这里引入Validation.ts声明
/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    // LettersOnlyValidator 实现StringValidator 接口
    export class LettersOnlyValidator 
    implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}
```

### /// \<reference types="..." />

在**编写d.ts时，如果需要引入其他声明文件，使用此命令**

```js
/// <reference types="node" />
```

## 全局库

typescript中文网有一个这样的模板

```js
// 调用形式f()
myLib(3) 

declare function myLib(a: string): string;
declare function myLib(a: number): number;

// 提供类型给开发者
var x: myLib

interface myLib {
    name: string;
    length: number;
    extras?: string[];
}

// 全局变量时，将此类型拓展至此语法内
declare namespace myLib {
    //~ We can write 'myLib.timeout = 50;'
    let timeout: number;

    //~ We can access 'myLib.version', but not change it
    const version: string;

    //~ There's some class we can create via 'let c = new myLib.Cat(42)'
    //~ Or reference e.g. 'function f(c: myLib.Cat) { ... }
    class Cat {
        constructor(n: number);

        //~ We can read 'c.age' from a 'Cat' instance
        readonly age: number;

        //~ We can invoke 'c.purr()' from a 'Cat' instance
        purr(): void;
    }

    //~ We can declare a variable as
    //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
    interface CatSettings {
        weight: number;
        name: string;
        tailLength?: number;
    }

    //~ We can write 'const v: myLib.VetID = 42;'
    //~  or 'const v: myLib.VetID = "bob";'
    type VetID = string | number;

    //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
    function checkCat(c: Cat, s?: VetID);
}
```

## 扩充全局库

``` ts
declare global {
    // 扩展String类型的方法
    interface String {
      fancyFormat(opts: StringFormatOptions): string;
    }
}

export {}
```

## 编写环境模块

比如常见的资源模块
https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules

``` ts
declare module "*!text" {
  const content: string;
  export default content;
}
// Some do it the other way around.
declare module "json!*" {
  const value: any;
  export default value;
}
```

## 扩展第三方库
https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html
``` ts
import { greeter } from "super-greeter";
/*~ Here, declare the same module as the one you imported above
 *~ then we expand the existing declaration of the greeter function
 */
export module "super-greeter" {
  export interface GreeterFunction {
    /** Greets even better! */
    hyperGreet(): void;
  }
}
        
```



## 生成声明文件

### 配置

**tsconfig.json**

``` js
{
    "compilerOptions": {
      // 生成声明文件
      "declaration": true,
      // 生成声明文件sourceMap
      "declarationMap": true,
      // 指定声明文件和声明文件sourceMap输出目录
      "declarationDir": "./lib/types"
    },
  }

```

###  合并为一个文件

#### 安装api-extractor

``` shell
npm install -g @microsoft/api-extractor
```

#### 初始化api-extractor

``` shell
api-extractor init
```

#### 设置合并入口

**api-extractor.json**

``` js
"mainEntryPointFilePath": "<projectFolder>/lib/index.d.ts",
```

#### 执行命令合并声明文件

``` shell
api-extractor run --local --verbose
```