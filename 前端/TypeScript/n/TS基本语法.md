# TS基本语法


## TS好处

TS为我们带来了什么：

* 静态类型检查(提升代码质量，在运行前发现错误)
* 类型推断(减少查阅api的时间)
* 自文档化，代码就是文档

详细看这里 https://juejin.im/post/59c46bc86fb9a00a4636f939


## TS成本

* TS的所有好处都建立在其类型系统上，我们需要对其类型系统非常熟悉才行

## 变量
let/const v :type
type
```ts
// 数字
let n: number = 666

// 布尔值
let isDone: boolean = false

// 字符串
let name: string = 'cj'

// symbol
let symbolKey: symbol = Symbol()

// 数组 同一类型元素集合
let arr: number[] = [1, 2, 3]

// 元组 不同类型元素集合,按照类型的顺序对应匹配
let tuple: [string,number]
// ok
x  = ['hello', 10] 
// error
x = [10, 'hello']
x = [10, 20]

// 枚举 一系列常量的管理器
enum Color {Red, Green, Blue}
//元素值按照前一个值+1
// eg
//enum Color {Red 0, Green 1, Blue 2}

// Any 不确定的类型
let noSure :any = 4

// Void 没有类型  通常用于函数返回值
// 变量
let unusable: void = undefined or null
// 函数
function f (): void {

}

// Null 和 Undefined
// 默认情况下可以把null和undefined赋值给所有类型,开启strictNullChecks之后，就只能赋值给void和它们各自
let u: undefined = undefined;
let n: null = null;

// Never 
// 与Void意义类似，但特用于抛出异常的或者根本没有返回值的函数返回值类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

// any类型保护 unknown
// unknown 类型只能被赋值给 any 类型和 unknown 类型本身，unknown能一定的检查能力，2而any就完全丧失了，强制使用类型收缩来执行代码

```

类型断言(忽略系统的类型检查)
```ts
    // 跳过检查
    let someValue: any = "this is a string";

    let strLength: number = (<string>someValue).length;
```


**上面介绍了基本类型和数组的类型定义，那么对象呢，下面开始介绍**

## 接口  

**在java中，接口用于描述行为契约，而在TS中，接口更加偏向类型契约**


语法：
interface iName {
    pName:type... 
}
```ts
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});

// 索引签名,用于放松对接口的属性操作
interface SquareConfig {
    color?: string;
    width?: number;
    readonly [propName: string]: any;
}

// 函数接口
interface SearchFunc {
    //函数签名    
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
// 接口名称属性名和函数对于形参名可以不一致，但是顺序要一致和类型上要兼容
mySearch = function(src: string, sub: string) {
  let result = src.search(sub);
  return result > -1;
}

// 类接口(作为强制规范，检查其实实例部分)
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

// 接口继承 可以多个
interface Shape {
    color: string;
}
W
interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```

## 类:
```ts
// 只是变量和函数加上了类的权限，其定义完全与普通的一致
public 公有 默认值
// 当变量是private或者protected时，这个变量来源需要一致，整个类型才会兼容
private 私有  类外部无法访问
protected 保护  特别地在子类中可以访问

// readonly 必须


// 参数属性 可以在构造函数参数里定义变量映射到类实例属性去
class Octopus {
 
    numberOfLegs: number = 8;

    // 只读属性
    readonly numberOfLegs: number = 8;
    // 静态属性
    static config: string = '33';

    constructor(readonly name: string) {
    }
    // 等同于
    readonly name:string
    constructor(name: string){

    }
}

// abstract 抽象类，允许类存在实现和抽象，是类和接口的折中
```
## 函数:
```ts
// 函数类型，包括参数类型和返回值类型

let myAdd: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

// 可选参数 ?

function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");  // ah, just right

// 默认参数
function buildName(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName("Bob", "Adams");         // ah, just right

// 剩余参数

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

// this,让TS识别函数this

function f(this: void) {
    // make sure `this` is unusable in this standalone function
}



// 函数重载
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```

## 模块
```ts
    内部模块 命名空间(编写非TS文件的声明文件.d.ts)
    外部模块  模块(Node默认且推荐的方式)
    .d.ts 扩展文件

    两者区别：

    declare module "url" {
    export interface Url {
        protocol?: string;
        hostname?: string;
        pathname?: string;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
    }

    declare module "path" {
        export function normalize(p: string): string;
        export function join(...paths: any[]): string;
        export let sep: string;
    }

    // 外部模块简写(快速使用一个外部模块)
    // 导出类型都是any
    declare module "hot-new-module";

    // 模块声明通配符(用于导入非js内容，如图片、json、文本)
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


## 类型兼容

### 基本规则

**如果x要兼容y，那么y至少具有与x相同的属性**

```js
interface Named {
    name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;
```

### 函数兼容

假设x是源函数，y是目标函数，有以下规则

* **要在y中依次找到x的所有类型，允许忽略参数**，比如下面

```js
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
x = y; // Error
```

* x的返回值必须是y的子类型

```js
let x = () => ({name: 'Alice'});
let y = () => ({name: 'Alice', location: 'Seattle'});

x = y; // OK
y = x; // Error, because x() lacks a location property
```

### 类兼容

比较两个类类型的对象时，只有实例的成员会被比较。**静态成员和构造函数不在比较的范围内**

```js
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  // OK
s = a;  // OK
```

## 类型推导

###  基础

```js
let x = 3; // x被推导为number
```

### 最佳通用类型

```js
// 这里想被推导为Animal[]类型，但是推导类型不包括此类型，结果为 (Rhino | Elephant | Snake)[]
let zoo = [new Rhino(), new Elephant(), new Snake()];

// 手动指定类型为Animal[]
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
```


### 上下文归类

```js
// window.onmousedown推导mouseEvent为event事件，没有button，所以报错
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};
```

## 声明合并

```js
// 接口合并，如果同名属性类型不同会报错
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

// 等同于
interface Box {
    height: number;
    width: number;
     scale: number;
}
let box: Box = {height: 5, width: 6, scale: 10};

// 命名空间合并，非导出成员在合并的其他命名空间不可见
namespace Animals {
    export class Zebra { }
}

namespace Animals {
    export interface Legged { numberOfLegs: number; }
    export class Dog { }
}

// 等同于
namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}
```

## 高级类型


### 交叉类型

**交叉类型是将多个类型合并为一个类型**,这在典型的面对对象模型不适合的情况下很有用

```js
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
```

### 联合类型

**联合类型是将多个类型合并为一个类型集合，可以使集合里类型之一**

```js
function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", true); // errors during compilation
```

## 类型保护

联合类型下，如何获取精准的类型

```ts
let pet = getSmallPet();

// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
```

**使用类型断言**

```ts
let pet = getSmallPet();

if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
```

如果使用类型断言，所有需要缩减类型的地方都需要加上类型断言，比较繁琐

### 用户谓词

```ts
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}


if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
```

### in

```ts
function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    return pet.swim();
  }
  return pet.fly();
}
```

### typeof 

上面的类型保护

```ts
function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

但是每个都要写类型保护，过于繁琐，TypeScript默认`typeof v === "typename"` `typeof v !== "typename"` typename为**number", "string", "boolean", or "symbol** 时，可以默认实现类型保护

### isntanceof保护

```ts
interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {}
    getPaddingString() {
        return Array(this.numSpaces + 1).join(' ');
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {}
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder('  ');
}

// 类型为SpaceRepeatingPadder | StringPadder
const padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    padder.; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}

```

## 类型运算符

### typeof

**获取类型**

```js
const a: number = 3

// 相当于: const b: number = 4
const b: typeof a = 4
```
### keyof

```js
const colors = {
  red: 'red',
  blue: 'blue'
};

type Colors = keyof typeof colors;

let color: Colors; // color 的类型是 'red' | 'blue'
color = 'red'; // ok
color = 'blue'; // ok
color = 'anythingElse'; // Error
```

### infer

```js
// 获取函数返回值类型
type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;

type Func = () => User;
type Test = ReturnType<Func>; // Test = User
```



## 映射类型

**对类型做一些映射，产生新的类型**

```js

// 将属性变为可选的
interface PersonPartial {
    name: string;
    age: number;
}
// Partial
type Partial<T> = {
    [P in keyof T]?: T[P];
}

type PersonPartial = Partial<Person>; // 属性可选

// Required
type Required<T> = {
  [P in keyof T]-?: T[P];
};

type PersonRequired = Required<Person>; // 属性必须

// 只读
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

// Exclude
type Exclude<T, U> = T extends U ? never : T;

// 相当于: type A = 'a'
type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>

// Omit
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface User {
  id: number;
  age: number;
  name: string;
};

// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, "id">

// 删除空
type NonNullable<T> = T extends null | undefined ? never : T;

// 获取函数返回值类型
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

interface SquareProps {
  onClick: () => void
}
// void
type onClickReturnType = ReturnType<SquareProps["onClick"]>; // 属性

// 获取函数参数类型
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;


interface SquareProps {
  onClick: () => void
}

// []
type onClickParameters = Parameters<SquareProps["onClick"]>; // 属性

// 实例类型
class C {
  x = 0;
  y = 0;
}

type T0 = InstanceType<typeof C>;

// 函数this类型
function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

// 移除this类型
function toHex(this: number) {
    return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());

```

## 条件类型

```js
// 用于动态生成类型
T extends U ? X : Y

type t = isTrue<number>

// 相当于 type t = false
type t1 = isTrue<false>
```

## 泛型

### 函数

```js
function identity<T>(arg: T): T {
    return arg;
}
```

### 接口

```js
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

### 类

```js
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```


### 泛型约束

```js
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
```

















