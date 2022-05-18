# Vue、Angular、React对比

前端在复杂性日增的今天，三个框架被我们熟知，Vue、React、Angular，三个经常经常被我们拿来讨论，对比，比如学习哪个？

## 前端框架解决的核心问题

在我入门的时候，第一个学习的就是Vue，基本跳过了后台php、jsp结合JQuery,三个框架成为了开发三选一的问题，在后面的工作和学习中，我逐渐意识到**前框框架解决的核心问题在于数据和视图同步，我也发现挺多人意识到了这一点，并且在向大众普及这个前端需要解决的核心问题**

## 前端框架如何解决数据向视图的复杂映射

我们说目前前端的核心问题是数据和视图的同步，这里我姑且采用了一个个人觉得更适合的名词，数据到视图的映射，那么框架们是以怎么样的思路思考这个问题的呢，我们这里开展一个功能实现的讨论，首先是JQuery实现,**我们需要更新输入框值**

### 直接命令式

```js
// 当前用户名的值
let curUsername = 'cj'
// 找到类名为username的元素
let username = $('.username')
// 设置username为cj
username.val(curUsername)
```

按照以下步骤，即可完成我们的小需求

* 定义修改的值

* 找到需要修改的元素

* 修改元素的值为我们给定的值

**问题**

这里找到元素、设置元素的值，明显是很命令式的写法，如果我们需要多次操作，一个简单的方法就是**多次重复这段代码**

### 使用函数维护

```js
function updateUsername(username) {
  let usernameInput = $('.username')
  usernameInput.val(username)
}

let curUsername = 'cj'
updateUsername(curUsername)
```

**从上述代码可以抽象出，我们只需要关心改变的值和改变的元素，其他细节是我们不需要知道的，中间选取元素、修改元素在过程中可以认为是完全抽离成一个新的抽象，下面就是基于这一点的思考**

### 更深的思考

既然我们关注的点在于**目标元素、数据**，这两者可以在编译时确定，**只要我们更新这个数据，系统就更新对应引用这个数据的元素，从而将我们从指定元素、修改元素的重复劳动中脱离出来**，这是一个基本的思路，当然Vue采用的是上述的思路，而React采用的是暴力diff的方式

### 目前实现

* Vue绑定数据和节点在一起，在数据更新时，更新对应的元素

* React比较直接，直接对整个组件diff，找到前后不同的地方，内部根本不需要知道数据和节点的对应关系

* Angular，接触很少，目前好像是脏检查和proxy结合

## 关于Virtual DOM解决的问题

目前来说，Virtual DOM 和配套的diff算法，逐渐出现在大家面前，**这里我们为什么要引入这两套技术？，大家其实看的也多了，解决DOM更新缓慢，跨平台等，那么它引入的初心是什么**，这还得看React为什么要引入它

### 为什么需要Virtual DOM

Virtual DOM是由React推出时引入的技术，个人理解是，**React系统不知道数据对应的节点是哪些，所以按照常规方式来说，肯定是要更新全部节点，React需要一种在操作节点之前用于性能优化的一套方案，这就是React引入Virtual DOM技术的初心**

### Vue为什么引入Virtual DOM

目前很多Vue响应式基本实现会像以下一样：

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id='app'>
        <h3>姓名</h3>
        <p>{{name}}</p>
        <h3>年龄</h3>
        <p>{{age}}</p>
    </div>
</body>
</html>
<script>
document.addEventListener('DOMContentLoaded', function(){
    let opt = {el:'#app', data:{name:'检索中...', age:30}}
    let vm = new Vue(opt)
    setTimeout(() => {
        opt.data.name = '王永峰'
    }, 2000);
}, false)
class Vue{
    constructor(opt){
        this.opt = opt
        this.observe(opt.data)
        let root = document.querySelector(opt.el)
        this.compile(root)
    }
    // 为响应式对象 data 里的每一个 key 绑定一个观察者对象
    observe(data){ 
        Object.keys(data).forEach(key => {
            let obv = new Observer() 
            data["_"+key] = data[key]
            // 通过 getter setter 暴露 for 循环中作用域下的 obv，闭包产生
            Object.defineProperty(data, key, {
                get(){
                    Observer.target && obv.addSubNode(Observer.target);
                    return data['_'+key]
                }, 
                set(newVal){
                    obv.update(newVal)
                    data['_'+key] = newVal
                }
            })
        })
    }
    // 初始化页面，遍历 DOM，收集每一个key变化时，随之调整的位置，以观察者方法存放起来    
    compile(node){
        [].forEach.call(node.childNodes, child =>{
            if(!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)){
                let key = RegExp.$1.trim()
                child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'),this.opt.data[key]) 
                Observer.target = child
                this.opt.data[key] 
                Observer.target = null
            }
            else if (child.firstElementChild) 
            this.compile(child)
        })
    }    
}
// 常规观察者类
class Observer{
    constructor(){
        this.subNode = []    
    }
    addSubNode(node){
        this.subNode.push(node)
    }
    update(newVal){
        this.subNode.forEach(node=>{
            node.innerHTML = newVal
        })
    }
}
</script>
```

上述代码是Vue1的核心实现简化，每个数据知道引用自己的精确节点，**Vue的实现是在每个节点编译，引用数据时都为其生成一个Watcher，显而易见，为每一个引用数据的节点都要生成一个Watcher，是有比较大的内存压力，如何解决，很简单，将粒度提升到组件级别，将低粒度的diff交给Virtual DOM**

## 前端框架认知反思

**框架解决的核心是选择节点，操作节点这一过程的抽象，将其隐藏在框架实现之内，我们只需要关注数据和节点的对于关系即可**，其余技术是在这个大背景下的优化。

## 数据驱动方案

**数据驱动方案决定了其性能以及后续性能与优化方向**，数据驱动是前端的一大潮流，已经成为了框架必备特性了，因为从前面的讨论得知，操作节点、修改节点已经可以很好地进行抽象，优化。这里简单讨论一下三个框架的数据驱动方案

### Vue

#### 数据驱动设计

Vue2的数据驱动还是数据劫持和Virtual DOM方案结合，即**保持了较为精准的更新能力又保持了内存使用的低水平**，Vue这种方式有着天然的性能优势，所以**大家在对组件的认知上不仅仅要知道组件复用才被抽取**，其实，**组件可以进行良好的代码组件，维持适当大小的组件规模，还可以利用Vue2的数据驱动方案进行一个天然的性能优化**，关于这一点具体的情况，后面我会研究分离组件和整体的性能差异

#### 模板优化

Vue使用模板时，还可以获得静态优化的优势，在Vue3更加优化了模板编译

### React

#### 数据驱动设计

**React更新采用了Virtual DOM，解决了数据更新时，完全替换的问题，实现了局部更新的可能**，但是**对于数据更新这一层薄弱，或者说，完全不知道数据变了，需要我们主动setState，这就产生了后续需要在生命周期交由开发者避免不必要的渲染优化**，这里还有一个重要的点，就是时间分片，**React推出了Fiber,用于优化视图更新时的性能问题**，这里多说一句，**Vue3本来也实现了时间分片，考虑到收益不大，又移除了，这应该是本身Vue的数据驱动方案的优势造成时间分片的收益较低**

#### 模板优化

由于采用了JSX，没法提供足够的信息在编译时进行优化,但是**可以尝试在JSX 编译成 React.createElement 的整个过程进行优化**，目前 FaceBook 推出了**Prepack** 用于这个过程的优化

### Angular

#### 数据驱动设计

angular9目前采用了脏检测和proxy结合的方式，基本没使用，不予评价

#### 模板优化

Angular支持模板，随着V9版本发布，ivy渲染引擎推出，用于优化，也算是一个弥补

## 数据驱动设计反思

实现数据驱动的方式有很多，Vue和Angular走得是类MVVM的形式，React实质上不可以称为MVVM框架，就如它所说的，他就是一个视图层框架，**数据驱动的不同方式各有优劣，个人能力水平有限，也说不出谁好谁坏**，但是**可以看出的是，每个数据驱动的方式都有存在一点缺陷，框架本身也针对这些缺陷在优化**

## 组件化设计

**组件化除了数据驱动另外一大前端趋势**，框架如何设计组件也是一个关注点

### Vue

**定义**

```js
Vue.component("my-component", {
  props:['props1'],
  template: `
    <div @click="clickHandler">
      <slot><slot>
    </div>
  `,
  methods: {
    clickHandler() {
      this.$emit('click')
    }
  }
});
```

**使用**

```html
<my-component @click="clickHandler" :props1="props1" data-x="dataX">
  <template #default>slot</template>
</my-component>
```

#### 数据入口

**Vue在组件上划分了props和attrs，组件内部提供了props选项来捕获特点的attr转换为props，其余会成为attrs直接附加到组件根节点上，实质上，这是一种默认大于配置的想法**，默认无关的属性应该附加到根节点，但是总会有少数情况，所以**后续Vue提供了inheritAttrs来控制attr作用元素**

#### 组件事件

Vue在组件之前的事件采用了发布订阅模式EventEmitter来实现，这个模式比起直接传递回调函数，有以下好处

* 在认知上，区分了触发者和响应者

#### 组件内容替换

Vue提供了slot机制，用于提供扩展组件内部节点，值得一提的是，scopedSlot机制


### React

**定义**

```js
function Square(props) {
  return (
    <button onClick={props.onClick}>
      {props.props1}
    </button>
    <div>props.slot<div>
  );
}
```

**使用**

```js
<Square value={} onClick={() => this.handlerClick(i)  slot={}}/>
```

#### 数据入口

**React没有区分Props和attrs，只是将数据解析好，完全交给开发者去控制**

#### 组件事件

React采用了将父组件直接传入子组件的方式，个人认为像Vue那样的EventEmitter对于开发者更加友好

#### 组件内容替换

React没有为slot提供特殊语法，可以直接将slot以普通属性的方式传递进来，剩下的交由组件内部处理

### Angular

**定义**

```js
@Component({
  // 省略
})
export class ProductAlertsComponent implements OnInit {
  // 定义数据入口
  @Input() product;

  // 定义外部事件
  @Output() notify = new EventEmitter();
  constructor() { }

}
```
```html
<div>
  <button @click="notify.emit()"></button>
  <ng-content></ng-content>
</div>
```

**使用**

```html
<component
  (notify)="onNotify()"
  [product]="product">
  <div>slot</div>
</component>
```

#### 数据入口

Angular也只是提供了一个数据入口

#### 组件事件

Angular类似Vue一样，使用了发布订阅模式来管理组件之间的事件

#### 组件内容替换

Angular提供了类似slot的机制来扩展组件节点能力

## 组件化设计反思

毫无疑问，组件化一定是未来的持续保持的前端框架特性，如何设计一个良好的组件，这是值得思考的，三个框架也有自己的思考，，这里不予评价


## 框架特性

这一点我想只是从我的认知来讲，框架除去数据驱动和组件化设计之外，它对开发者带来哪些特性，能力有限，这里分析不是很深入

### Vue

**Vue 是适应开发者，让开发者怎么爽怎么来，Vue很多特性都是基于开发者角度去开发的**，比如attr和props，Angular和React就不会这样处理，完全交给开发者去处理细节，所以就导致，Vue好像看起来没啥框架上的特点，实质上，Vue将一些对开发者认知不友好的处理，内置到了框架之内

### React

**React 设计是改变开发者，提供强大而复杂的机制**，当然这么做，就会社区非常繁荣，后续也可以吸收一些良好的范式，目前我也在学习React，不得不说，React更像是学院派，社区能够诞生很多不错的Idea

* 推崇函数式编程

### Angular

Angular给我最深的印象是Service和DI的机制,它也为开发者考虑了很多，很多库直接用官方的就可以了，完全不需要考虑用哪个，Angular的脚手架用起来还是挺舒服的

* Service将与视图渲染无关的逻辑提取到单独代码中

* DI解决了对象管理混乱的问题

* 更加贴近java那套OOP

## 总结

**从前端框架解决的问题出发，我们反思了数据驱动、组件化等框架必备特性，脱去这两点，剩余的框架特性，推崇的编程范式，也是值得我们品味的**，比如Angular视图渲染逻辑和数据分离，在React、Vue我们也可以借鉴，**三大框架未来在保持数据驱动和组件化特性下，框架特性这一块，很可能还是要统一走一套，比如Vue3的hook和React的hook,这一点是对开发者友好的**，学习、认知成本没那么高，有人会在这种文章上说，谁抄谁这种话，我认为试试不妥的，希望大家能够以一个更高层的视觉看到目前前端的发展。



