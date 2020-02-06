# 第三方js类型补充

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




## 命名空间与模块

### module

这里的module是指es6的module,比如你在TypeScript导入

```js
// TS会告诉你它不认识这个模块
import './App.png';
```

需要这样简单处理

```js
declare module '*.png' {
  
}
```

**还可以导入其他模块的声明到此模块**

```js
// node的http模块就导入了events模块
declare module "http" {
    import * as events from "events";
}
```

**导出模块变量**

```js
declare module "http" {
    // 从其他模块导入
    import * as events from "events";
    // 此模块的导出
    export interface IncomingHttpStatusHeader {
        ":status"?: number;
    }
}
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

## 第三方库

很多第三方库都有比较好的声明文件，我们可以先从@types这个仓库查看是否已经存在了类库的声明

```js
npm install @types/jquery -save
```


