# 实现一个可复用的点击区域之外方法

随着3大框架的风靡，我们从以前的layer等UI库迁移到了更加强大的UI库，比如vue的好伙伴element,组件库的作用是封装一些常用的功能，将HTML、CSS、JS作为一个功能单元封装为一个整体，向外界暴露合理的接口，它极大地提升了我们的开发效率，最近遇到一个要自己写一个select(选择器)场景，以下的场景一下子让我懵了

![KylgHg.png](https://s2.ax1x.com/2019/10/27/KylgHg.png)

比如上图的选择器，我们除了点击输入框时，会切换列表展开状态，点击列表项会收起列表，同时，我们需要**在点击其他区域时，也要关闭列表**，本文基于此需求展开

## DOM判断

这个需求**最重要的点就是需要判断点击区域在指定区域之外，执行指定的逻辑**，沿着这个思路，我竟然想去了去计算当前点击的坐标是否在指定区域，这显然是不行的，从视觉上难以判断，有没有能够从编码上判断的方法呢，比如，判断点击的DOM不是指定的DOM，于是有了第一版的方案


```js
// 给元素绑定click事件
element.addEventListener("click",(e) => {
  const { target } = e
  
  // 判断target是不是在指定DOM
}, false);
```

这里有两个严重的问题

* 按照上述代码，需要**为页面上的每个DOM元素都绑定一个事件，无论在代码量和性能上，都十分不好**

* 指定DOM**只能是满足条件的，要是比较多，会导致这部分逻辑很复杂**


## 事件委托

原先的代码，会导致绑定和事件在每个DOM节点上重复，其实，程序只需要知道本次点击的是谁，不需要关注绑定事件的是谁，这个时候，我们的事件委托就上场了。

```js
// 给元素绑定click事件
document.addEventListener("click",(e) => {
  const { target } = e
  
  // 判断target是不是在指定DOM
}, false);
```

我们将事件绑定在document上，默认情况下，事件是遵循冒泡模型，从事件源往document上触发对应类型的事件，所以事件点击时候，能够在doucument上统一接受到事件源，另外，这里测试了一下，因为在某些场景下，可能会使用到捕获模型

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <button id="button"></button>
</body>
<script>
  // 注册捕获阶段触发的事件
  document.getElementById("button").addEventListener("click", () => {

  }, true)
  //  代理document内元素的click 
  document.addEventListener("click", (e)=> {
    const { target } = e
    console.log(target);
  })
</script>
</html>
```

![Ky8Qhj.png](https://s2.ax1x.com/2019/10/27/Ky8Qhj.png)

可以看到，**即使使用了捕获模型，我们的事件源也是一样可以正确获取**，当然，这只是一个尝试，一般来说，这个不用尝试都知道是这样的,**利用事件委托,我们很好地减少了事件绑定重复**，有一个微不足道的缺点，就是阻止了事件传播，如**阻止事件冒泡的元素不能正确触发我们的document事件，但是这个可以接受**

## contains

我们一开始是判断DOM节点特有的标志来执行我们的程序

```js
// 判断指定节点
if($(target).attr("id") === xxx)
```

这样子太受限了，需要写很多条件，况且我们需要的是区域，所以最好能够有个API能判断是否在一个区域，正好，有一个API

```js
node.contains( otherNode ) 

node 是否包含otherNode节点.
otherNode 是否是node的后代节点.
```

contains这个API，可以判断一个节点是否包含在另外一个节点之内，这个内部是指是否为判断节点本身或者其后台节点，于是，我们利用此API，就可以完美判断一个节点是否在一个区域之外

```js
// 触发事件节点在区域外
!node.contains(target)
```

最终的代码是

```js
document.addEventListener("click",(e) => {
  const { target } = e
  
  if(!node.contains(target)) {
    // 点击区域之外的事情
  }
}, false);
```

## 复用拓展

上述的最终代码已经可以用了，但是对于多个元素来说，他们需要不同的callback,这里我们我们进行一个改造

```js
let nodeList = []

document.addEventListener("click",(e) => {
  const { target } = e
  nodeList.map(({node, cb}) => {
    if(!node.contains(target)) {
      cb()
      // 点击区域之外的事情
    }
  })

 
}, false);


// 将你需要实现点击区域之外的逻辑置入nodeList之中
nodeList.push({
  node: node,
  cb: function () {

  }
})

```

由于节点和callback是每个需要此交互的都不同，这里讲节点和callback存储到一个全局的列表中去，然后点击页面时，去触发列表中点击元素不在其指定范围的callback，使得逻辑得以复用，而每个元素自己的业务逻辑可以分离，不过这里有个小问题就是要注意在指定节点移除时，要及时手动移除nodeList中对应的逻辑

## v-clickout指令实现


```js
const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;

on(document, 'mousedown', e => (startClick = e));

on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
      (vnode.context.popperElm.contains(mouseup.target) ||
      vnode.context.popperElm.contains(mousedown.target)))) return;

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};

```
