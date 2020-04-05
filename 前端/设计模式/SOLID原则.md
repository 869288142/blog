# SOLID原则

solid原则是指五大原则的缩写，之所以提出这五大原则，是因为人们在长期编程实践中，发现了这些原则指导下，代码的质量更高

## S 

S全称`Single Responsibility Principle`，中文翻译了**单一职责原则**，用大白话来说，就是**只做一件事情**

### 例子

我们需要从网络上获取一些 JSON 数据，然后解析它，并把结果保存在本地数据库中

一般会像下面一样**直接把所有的实现按照顺序写到一个函数里**

```js
function getDataAndSaveToDb (){
  // 获取数据

  // 解析

  // 保存
}
```

那么使用单一职责原则该怎么写呢，如下：

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

从代码上而言，在JavaScript应用单一职责原则，更多是对于函数和对象，将不同职责封装为更加具有可描述性的函数或者对象

### 好处

* **可读性强**

* **职责变动时，对其他职责不会造成影响**，代码的**可维护性好**

* 代码粒度变小后，代码本身更**利于单元测试,代码复用**。


### 坏处

* 代码粒度变小后，**增大了代码之间相互联系的难度**

### 注意点

* 那些**确实会发生变化**，并且**不是随着需求同时变化的职责**，才有必要被分离

* **原则不必一成不变地遵循，在方便性和稳定性有一些取舍**，比如JQuery的attr方法就是既负责取值又负责赋值，明显是违反了单一职责原则，对于JQuery开发者而言，会带来一些困难，但对于使用者而言，更加方便使用


## O

O全称`Open-Closed Principle`，中文翻译了**开闭原则**，用大白话来说，就是**对修改关闭，对扩展开放，就是说当扩展时，不能去修改源代码本身，应该提供一个合适的扩展方式**

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

### 好处

* 无需修改旧代码，只需要测试新的代码行为

### 坏处

* 由于需要把不需要变化的地方封装起来，引入了抽象层次，增大代码的复杂度

### 注意点

* **挑选出最容易发生变化的地方，然后构造抽象来封闭这些变化**

* **在不可避免发生修改的时候，尽量修改那些相对容易修改的地方**,拿一个开源库来说，修改它提供的配置文件，总比修改它的源代码来得简单

### 实现手段

* 使用回调函数

* 利用钩子函数

## L

L全称`Liskov Substitution Principle`，中文翻译为**里氏替换原则**，子类可以代替父类

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

### 好处

* 很容易就得到符合开闭原则的代码



## I

I全称`Interface Segregation Principle`，翻译为**接口隔离原则**
，具体表现为**实现多个小接口而不是一个大接口,避免实现类实现不避免的方法**

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

### 好处

* 提高了遵循里氏替换的可能性

### 坏处

* 需要建立一个良好的类型抽象

## D

D全称Dependency Inversion Principle，翻译为依赖倒置，**高级模块不应该依赖具象的低级模块，它们都应该依赖相应模块的抽象层**

### 例子

### 好处





## LKP

LKP中文翻译为最少知识原则，主要思想是指减少与其他实体发生相互作用


### 注意事项

* 单一职责中我们将函数和对象划分了更小的粒度，这使得越来越多的对象产生错综复杂的联系，还可能降低它们的复杂性

### 实现方案

* 引入中介进行通信


## 参考文章

https://juejin.im/post/5c1c49ed518825544d43ba7a

https://juejin.im/post/5c1de5a6e51d4546376994d6

https://juejin.im/post/5c1f845ee51d4568020a8ba8

