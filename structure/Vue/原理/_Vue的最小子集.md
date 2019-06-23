# Vue

## 命令式
```js
// 当前用户名的值
let curUsername = "cj"
// 找到类名为username的元素
let username = $(".username")
// 设置username为cj
username.val(curUsername)
```

**如果更新多次呢**

**包裹成函数**

```js
function updateUsername(username) {
  let usernameInput = $(".username")
  usernameInput.val(username)
}

let curUsername = "cj"
updateUsername(curUsername)
```
## 命令式缺陷

**可以想象，虽然我们可以为每个操作定义一个函数，然后代码会变为一堆每个DOM对应的操作函数，而且很多代码都是特点场景下的不可复用**

## 声明式
```js
let username = "cj"
// 使用赋值语句就能更新视图
username = "ll"
```

## 声明式的好处

1. 声明式使我们从**怎么做过渡到做什么的思维上，告诉程序我们要做什么，具体过程交给程序完成**

2. 语句的颗粒度很少，便于复用和维护，可以将基本的语句组成更复杂的程序

## 声明式实现

### 核心

```js
let username = "cj"
// 使用赋值语句就能更新视图
username = "ll"
```
要想实现上述效果，我们可以监听username的赋值操作，代码如下：

```js
let data = {
  username: "cj"
}
Object.defineProperty(data, "username", {
  set() {
    console.log("username变化了")
  }
})
data.username  = " ll" // "username变化了"
```
通过Object.defineProperty我们可以**检测到属性的赋值行为，在这里我们可以触发视图更新**
```js
let person = {
  data: {
    name: '',
    age: ''
  }
}
function binding(obj) {
    for (let key in obj.data) {
      Object.defineProperty(obj, key, {
        get() {
          console.log('getter')
          return obj.data.key
        },
        // 在赋值的时候更新key对应的DOM的value值
        set(value) {
          console.log('setter: ' + value)
          let dom = document.querySelector(`#${key}`)
          dom.value = value
          console.log('dom.value: ' + dom.value)
          obj.data.key = value
          console.log('obj.data.key: ' + obj.data.key)
        }
      })
    }
  }
binding(person)
```
**完整的例子**
```html
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div>
      <form action="" class="form">
        <div>
          <label for="name">name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label for="age">age</label>
          <input type="text" name="age" id="age" />
        </div>
      </form>
    </div>
  </body>
  <script>
    // 实现Model到View的单向绑定
    //Model
    let person = {
      data: {
        name: '',
        age: ''
      }
    }
    //ViewModel
    function binding(obj) {
      for (let key in obj.data) {
        Object.defineProperty(obj, key, {
          get() {
            console.log('getter')
            return obj.data.key
          },
          set(value) {
            console.log('setter: ' + value)
            let dom = document.querySelector(`#${key}`)
            dom.value = value
            console.log('dom.value: ' + dom.value)
            obj.data.key = value
            console.log('obj.data.key: ' + obj.data.key)
          }
        })
      }
    }

    binding(person)
  </script>
</html>

```

### 问题 

核心代码中，虽然可以使用对person的data直接赋值改变DOM的值，但是将key对于到DOM的id属性来操作指定DOM，不利于维护


## 引入观察者模式

### 必要性 

在前面我们已经实现了整个响应式系统最关键的一部分了，下面我们**如何处理数据更新时通知对应的DOM，怎么对应呢，需要一个对应关系，key和DOM的id对应，处理起有点麻烦**，那么**换个关联关系，我们把在模板解析时里面引用这个数据的DOM，全部收集起来，让这个数据记住谁引用了它，然后在数据更新时，通知这些引用者更新，就可以了,而这些数据的引用者在观察者模式中成为观察者，这个机制，称之为观察者模式**

### 观察者模式定义

**观察者将自己注册到被观察者的容器中时，被观察者变化时，通知观察者们更新**

### 观察者实现
```js
class Subject{
  constructor(){
    this.subs = [];
  }
  addSub(sub){
    this.subs.push(sub);
  }
  notify(){
    this.subs.forEach(sub=> {
      sub.update();
    });
  }
}

 class Observer {
  constructor(key) {
    this.key = key
  }
  update() {
    console.log(this.key, "update")
  }
}

let subject = new Subject();
let ob = new Observer();
//目标添加观察者了
subject.addSub(ob);
//目标发布消息调用观察者的更新方法了
subject.notify();   //update
```

### 观察者模式与数据监听结合

```js
function binding(obj) {
  for (let key in obj.data) {
    // 为当前key创建被观察者
    let subject  = new Subject()
    // 手动创建一个观察者
    let ob = new Observer(key)
    subject.addSub(ob)
    Object.defineProperty(obj, key, {
      get() {
        return obj.data.key
      },
      set(value) {
        obj.data.key = value
        subject.notify()
        let dom = document.querySelector(`#${key}`)
        dom.value = value
      }
    })
  }
}
```
**在为每个属性定义属性拦截器时，我们为其创建一个被观察者**，让其可以**在某个时机收集观察者**，关于某个时机，下面会讲，这里我们手动新建一个观察者，尝试更新person.age，可以看到输出 age update,说明我们的结合思路没错，**剩下的就是怎么收集观察者**


### 收集观察者的时机

**现在我们可以在对数据赋值的时候，更新数据，同时为每个数据增加了一个被观察者，更新数据，被观察者会通知它的观察者们更新，那么我们如何获取数据的观察者呢**


```html
<span :name ="name"> </span>
```

看到以上代码