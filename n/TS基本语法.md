核心思想

    在代码静态分析时尽量暴露错误，并且可以由AST得到一些api的参数

TS为我们带来了什么：

    1.静态类型检查(提升代码质量，提前发现错误)
    2.类型推断(减少查阅api的时间)
    3.more



##类型系统
###变量
let/const v :type
type
```ts
// 数字
let n: number = 666

// 布尔值
let isDone: boolean = false

// 字符串
let name: string = 'cj'

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
```

类型断言(忽略系统的类型检查)
```ts
    // 跳过检查
    let someValue: any = "this is a string";

    let strLength: number = (<string>someValue).length;
```
###结构

接口  实现接口类型检查  也可以使用implements作为真正的接口
用于抽象一些通用规范让实现者强制执行这些规范
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

// 索引签名
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

类:
```ts
// 只是变量和函数加上了类的权限，其定义完全与普通的一致
public 公有 默认值
// 当变量是private或者protected时，这个变量来源需要一致，整个类型才会兼容
private 私有  类外部无法访问
protected 保护  特别地在子类中可以访问

// readonly 必须


// 参数属性 可以在构造函数参数里定义变量映射到类实例属性去
class Octopus {
 
    readonly numberOfLegs: number = 8;

    constructor(readonly name: string) {
    }
    // 等同于
    readonly name:string
    constructor(name: string){

    }
}
// 静态属性 被类的所有实例共享
static var = value
// 访问
classname.var

// abstract 抽象类，允许类存在实现和抽象，是类和接口的折中
```
函数:
```ts
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

联合类型(或)
    type|type

交叉类型(且)
    type&type

类型推导(根据初始化) 发生在初始化变量和成员 设置默认参数值和决定函数返回值
```ts
// 注意类型推导中类型取自候选类型列表
// (Rhino | Elephant | Snake)[] 类型推导结果
let zoo = [new Rhino(), new Elephant(), new Snake()];
// 我们需要其类型为共同父类 Animal
let zoo: Animal[] = [new Rhino(), new Elephant(), new Snake()];
```
上下文推导(例如事件)  上下文归类会在很多情况下使用到。通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。 上下文类型也会做为最佳通用类型的候选类型  从左边赋值变量推测右边值的类型
```ts
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error mouseEvent上meiyoubutton属性
};
```





模块
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


















装饰器 不侵入代码实现扩展 
作用对象 类 方法 访问符 属性 参数
开启方式
tsconfig.json
"experimentalDecorators": true,       
"emitDecoratorMetadata": true
npm i -D reflect-metadata
安装npm 装饰器  rou

