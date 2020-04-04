# Vue

## 声明式-Vue 为例

```js
let username = 'cj'
// 使用赋值语句就能更新视图
username = 'll'
```

## 声明式的本质

**不去关心怎么做，而是告诉程序应该做什么，至于怎么做，隐藏到程序之中去，可以极大的提高代码的维护性和可读性**。

## 声明式的好处

1. 声明式使我们从**怎么做过渡到做什么的思维上，告诉程序我们要做什么，具体过程交给程序完成**

2. 语句的颗粒度很少，便于复用和维护，可以将基本的语句组成更复杂的程序

## 声明式实现

### 监测变化

**如何检测 value 变化**

```js
let username = 'cj'
// 使用赋值语句就能更新视图
username = 'll'
```

要想实现上述效果，我们可以监听 username 的赋值操作，代码如下：

```js
let data = {
  username: 'cj'
}
Object.defineProperty(data, 'username', {
  set() {
    console.log('username变化了')
  }
})
data.username = ' ll' // "username变化了"
```

### 视图更新-理解版

通过 Object.defineProperty 我们可以**检测到属性的赋值行为，在这里我们可以触发视图更新**

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

核心代码中，虽然可以使用对 person 的 data 直接赋值改变 DOM 的值，但是将 key 对于到 DOM 的 id 属性来操作指定 DOM，不利于维护，我们需要收集引用此 key 对应的 DOM

## 如何找到 key 对应的 DOM

### 思路整理

思考一下我们怎么把数据放到 DOM 上的，emmm

```html
<h1>{{name}}</h1>
```

嗯，我们将值填入到 DOM 中使用了{{k}}语法，其中的 k 为属性名称，为什么使用一个语法呢，我们思考一下，等会**我们要把{{k}},替换成具体的值，所以需要一个标记来记录它是特别的**

### 遍历 DOM 树

DOM 属于多叉树，由于这里没有特殊要求，我们采用深度优先遍历方式来遍历指定的 DOM 树

```js
// 深度遍历DOM
function compile(node) {
  ;[].forEach.call(node.childNodes, child => {
    if (child.childNodes) {
      ;[].forEach.call(child.childNodes, compile)
    }
  })
}
```

### DOM 节点

我们在遍历 DOM 节点的时候，收集我们标记的节点即可

```html
<body>
  <div id="app">
    <h1>{{a}}</h1>
    <span>{{name}}</span>
  </div>
</body>
<script>
  function compile(node) {
    ;[].forEach.call(node.childNodes, child => {
      if (/\{\{(.*)\}\}/.test(child.innerHTML)) {
        // 获取正则中(.*)捕获的内容，即{{key}}中的key
        let key = RegExp.$1.trim()
        console.log('key', key)
      }
      if (child.childNodes) {
        ;[].forEach.call(child.childNodes, compile)
      }
    })
  }
</script>
```

**我们通过深度优先的方式遍历了 DOM 树，并且可以辨认特殊节点，取得使用的 key，那么我们的数据从哪里来，DOM 保存到哪里**

### 问题 1-视图初始化

毫无疑问，页面初始化时，我们需要把数据填充到 DOM 里面去，而数据存在于 data 对象中，我们尝试完成这一步

```js
let data = {
  a: '1',
  name: 'cj'
}
function compile(node) {
  ;[].forEach.call(node.childNodes, child => {
    if (/\{\{(.*)\}\}/.test(child.innerHTML)) {
      // 获取正则中(.*)捕获的内容，即{{key}}中的key
      let key = RegExp.$1.trim()
      child.innerHTML = child.innerHTML.replace(
        new RegExp('\\{\\{' + key + '\\}\\}', 'g'),
        data[key]
      )
    }
    if (child.childNodes) {
      ;[].forEach.call(child.childNodes, compile)
    }
  })
}
```

好的，我们成功使用了了正则将{{key}}替换成了 data 里面的具体值，**那么如何在下次数据更新时再次更新 DOM 呢，嗯，重新编译整个模板是个办法，但是我们不是知道了使用 key 对应的 DOM 了吗，那么我们收集起来，在对应 key 变化后，通知这些 DOM 更新不就行了。**

### 收集 DOM 节点

怎么收集 DOM 节点呢，嗯，Vue 采用了一种很聪明的方法，嗯，就是在取得 key 对应的值的时候，触发对应 key 的 getter 来保存此 DOM 节点,为了能在 getter 中获取到 DOM 节点，将触发的 getter 对应的 DOM 保存到 Dep.target 上去，然后在 getter 保存其到此 key 对应的 dep(依赖对象中去)

```js
let data = {
  a: '1',
  name: 'cj'
}
function compile(node) {
  ;[].forEach.call(node.childNodes, child => {
    if (/\{\{(.*)\}\}/.test(child.innerHTML)) {
      // 获取正则中(.*)捕获的内容，即{{key}}中的key
      let key = RegExp.$1.trim()
      // 使用data[key]触发了key对应的getter,然后将此节点保存到Dep.target上去
      Dep.target = child
      child.innerHTML = child.innerHTML.replace(
        new RegExp('\\{\\{' + key + '\\}\\}', 'g'),
        data[key]
      )
      Dep.target = null
    }
    if (child.childNodes) {
      ;[].forEach.call(child.childNodes, compile)
    }
  })
}


Object.defineProperty(obj, key, {
  let dep = new Dep()
  // 触发getter的时候
  get() {
    Dep.target && dep.addSubNode(Dep.target)
    return obj.data.key
  },
  set(value) {

  }
})
```

### 回到触发视图更新

在这个时候，我们已经收集了属性对应的正确 DOM，然后接下来我们怎么在属性更新时，更新 DOM 的内容呢，在一开始我们提及了 Object.defineProperty 可以检测属性的赋值操作，那么我们现在来尝试一下

```js
observe(data) {
Object.keys(data).forEach(key => {
  let dep = new Dep()
  data['_' + key] = data[key]
  // 通过 getter setter 暴露 for 循环中作用域下的 dep，闭包产生
  Object.defineProperty(data, key, {
    get() {
      Dep.target && dep.addSubNode(Dep.target)
      return data['_' + key]
    },
    set(newVal) {
      // 通知对应key的dep进行更新
      dep.update(newVal)
      // 更新data
      data['_' + key] = newVal
    }
  })
})

```

在下面这个片段

```js
set(newVal) {
    // 通知对应key的dep进行更新
    dep.update(newVal)
    // 更新data
    data['_' + key] = newVal
  }
```
当Object.defineProperty检测到属性的赋值操作时，同时dep队列依据此次更新的值更新DOM,同时更新data中的值，完成一个一次数据赋值的响应式操作


### Vue核心流程图
