# SOLID原则

solid原则是指五大原则的缩写，之所以提出这五大原则，是因为人们在长期编程实践中，发现了这些原则指导下，代码的质量更高

## S 

S全称`Single Responsibility Principle`，中文翻译了**单一职责原则**，用大白话来说，就是**只做一件事情**

### 好处

* 可读性、维护性强

* 易于测试

* 更加容易被复用，这是其次的，复用只是副产物

### 例子

我们需要从网络上获取一些 JSON 数据，然后解析它，并把结果保存在本地数据库中

一般会这么写

```js
function getDataAndSaveToDb (){
  // 获取数据
  // 解析
  // 保存
}
```

使用单一职责原则编写

```js
function getDataAndSaveToDb (){
  // 获取数据
  getData()
  // 解析
  parseData()
  // 保存
  save()
}
```


## O

O全称`Open-Closed Principle`，中文翻译了**开闭原则**，用大白话来说，就是**对修改关闭，对扩展开放，就是说当扩展时，不能去修改源代码本身，应该提供一个合适的扩展方式**

### 好处

* 旧的代码修改，只需修改新的代码

### 例子

一个计算器的例子

```js
class Calculator {
  public float add(float a, float b) {
    return a + b
  }
  public float subtract(float a, float b) {
    return a — b
  }
}

// 使用
Calculator calculator = new Calculator()

float sum = calculator.add(10, 2) //the value of sum is 12
float diff = calculator.subtract(10, 2) //the value of diff is 8

```

**当扩展时,我们得去修改类本身**

```js
class Calculator {
  public float add(float a, float b) {
    return a + b
  }
  public float subtract(float a, float b) {
    return a — b
  }
  // 扩展一个新的乘法
  public float multiply(float a, float b) {
    return a * b
  }
}
```

采用开闭原则编写

```js
class Calculator {
  public float calculate(float a, float b, Operation operation) {
    return operation.compute(a, b)
  }
}

// 将操作抽象成一个类
class Addition implements Operation {
  public float compute(float a, float b) {
    return a + b
  }
}
class Subtraction implements Operation {
  public float compute(float a, float b) {
    return a — b
  }
}

// 使用

Calculator calculator = new Calculator()

Addition addition = new Addition()
Subtraction subtraction = new Subtraction()

float sum = calculator.calculate(10, 2, addition) //the value of sum is 12
float diff = calculator.calculate(10, 2, subtraction) //the value of diff is 8


```

新的扩展方式,完全不需要修改计算类本身

```js
class Multiplication implements Operation {
  public float compute(float a, float b) {
    return a * b
  }
}

Multiplication multiplication = new Multiplication()
float prod = calculator.calculate(10, 2, multiplication) // the value of prod is 20
```

## L

L全称`Liskov Substitution Principle`，中文翻译为**里氏替换原则**，子类可以代替父类

### 好处

* 很容易就得到符合开闭原则的代码

* 

### 例子

单车就是一个基类，然后山地车是一个具体子类，山地车在使用父类的地方都可以代替

```js
class Bike {
  void pedal() {
    // pedal code
  }
  
  void steer() {
    // steering code
  }
  void handBrakeFront() {
    // hand braking front code
  }
  void handBrakeBack() {
    // hand braking back code
  }
}

class MountainBike extends Bike {
  void changeGear() {
    // change gear code
  }
}
```

## I

I全称Interface Segregation Principle，翻译为接口隔离原则
，具体表现为实现多个小接口而不是一个大接口

### 好处

* 提高了遵循里氏替换的可能性

### 例子

坏的例子

```js
interface Bike {
  void pedal()
  void steer()
  void handBrakeFront()
  void handBrakeBack()
}

class MountainBike implements Bike {
  override void pedal() {
    // pedal implementation
  }
  
  override void steer() {
    // steer implementation
  }
  
  override void handBrakeFront() {
    // front hand brake implementation
  }
  
  override void handBrakeBack() {
    // back hand brake implementation
  }
  
  void changeGear() {
    // change gear code
  }
}


class ClassicBike implements Bike {
  override pedal() {
    // pedal implementation
  }
  
  override steer() {
    // steer implementation
  }
  
  override handBrakeFront() {
    // no code or throw an exception
  }
  
  override handBrakeBack() {
    // no code or throw an exception
  }
  
  void brake() {
    // foot brake code
  }
}

。
```
好的例子

```js
interface Bike() {
  void pedal()
  void steer()
}

interface HandBrakeBike {
  void handBrakeFront()
  void handBrakeBack()
}

interface FootBrakeBike {
  void footBrake()
}



class MountainBike implements Bike, HandBrakeBike {
  // same code as before
}

class ClassicBike implements Bike, FootBrakeBike {
  override pedal() {
    // pedal implementation
  }
  override steer() {
    // steer implementation
  }
  
  override footBrake() {
    // code that handles foot braking
  }
}

```

## D

D全称Dependency Inversion Principle，翻译为依赖倒置，高级模块不应该依赖具象的低级模块，它们都应该依赖相应模块的抽象层

### 好处


### 例子




## 参考文章

https://juejin.im/post/5c1c49ed518825544d43ba7a

https://juejin.im/post/5c1de5a6e51d4546376994d6

https://juejin.im/post/5c1f845ee51d4568020a8ba8

依赖倒置原则