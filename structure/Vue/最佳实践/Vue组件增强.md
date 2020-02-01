# Vue二次封装组件

## 场景

有时候我们会**对现存组件进行增强，或者将一些基础组件进行封装**，这称为**组件的二次封装**，这个过程涉及到一些Vue的内部细节，以下按照分类来解决封装组件中存在的问题：

这里我们基于一个最简单的例子进行分析，将ant-design-vue中的button组件封装：

```js
// ant-design-vue
<a-button type="primary">Primary</a-button>

// ant-design-vue-wrapper
<custom-a-button type="primary">Primary<custom-a-button/>
```
## 实例分解

**基础代码**

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.css" type="text/css">
</head>
<body>
  <div id="app">
    <a-button type="primary">Primary</a-button>
    <custom-button>Primary</custom-button>
  </div>
</body>
<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.js"></script>
<script>
  Vue.component('customButton', {
    render(h) {
      return h("a-button")
    },
  })
  var app = new Vue({
    el: '#app'
  })
</script>
</html>
```

这里是**基于render函数进行增强，它拥有完全的JavaScript，能够更加灵活处理**，render函数的第二个参数为VNodeData,其Def如下，我们**按照数据、DOM、事件三大类划分这些属性**，**逐一解决暴露其接口的问题**

```js
// render第二份参数Define
declare interface VNodeData {
  // key?: string | number;
  // slot?: string;
  // ref?: string;
  // is?: string;
  // pre?: boolean;
  // tag?: string;
  // staticClass?: string;
  // class?: any;
  // staticStyle?: { [key: string]: any };
  // style?: Array<Object> | Object;
  // normalizedStyle?: Object;
  // props?: { [key: string]: any };
  // attrs?: { [key: string]: string };
  // domProps?: { [key: string]: any };
  // hook?: { [key: string]: Function };
  // on?: ?{ [key: string]: Function | Array<Function> };
  // nativeOn?: { [key: string]: Function | Array<Function> };
  // transition?: Object;
  // show?: boolean; // marker for v-show
  // inlineTemplate?: {
  //   render: Function;
  //   staticRenderFns: Array<Function>;
  // };
  // directives?: Array<VNodeDirective>;
  // keepAlive?: boolean;
  // scopedSlots?: { [key: string]: Function };
  // model?: {
  //   value: any;
  //   callback: Function;
  // };
};
```


## 数据

### class、style

如果封装**组件的根节点就是被封装组件，那么无需对class和style处理**，否则需要在组件内部自行暴露接口，处理相关逻辑,例子如下：

``` html
<a-button type="primary" class="a">Primary</a-button>
<custom-button class="a">Primary</custom-button>
```

对于`class`，Vue会直接将其附加到根节点上，并且会合并根节点class与传入class

![13LbOx.png](https://s2.ax1x.com/2020/01/31/13LbOx.png)

对于`style`,Vue也会合并根节点已经存在的style和外部传入的style

```js
// DOM
<custom-button class="a"  style="color: red">Primary</custom-button>

// wrap component
Vue.component('customButton', {
  render(h) {
    return h("a-button", {
      style: {
        'line-height': 'normal'
      }
    })
  },
})
```

**结果**

![13z3Y8.png](https://s2.ax1x.com/2020/01/31/13z3Y8.png)

### attr

默认不在props声明的变量会被接收到`attr`中，与`class`、`style`一样，会附加到根节点上

```js
// 在新组件上使用attr属性
<custom-button class="a"  style="color: red;" data-custom-text="button">Primary</custom-button>
```

![13zO0I.png](https://s2.ax1x.com/2020/01/31/13zO0I.png)

**获取传入给组件根节点的所有attr**

```js
// 2.4新增
this.$attrs

// 值等同于
this.$vnode.data.attrs
```

`this.$attrs`和`this.$vnode.data.attrs`在2.4以后只是一个对象的不同引用，`this.$attrs`特别地拥有响应式的能力(**被defineProperty定义**)

```js
// true
this.$vnode.data.attrs === this.$attrs 
```

**源码**

![18STU0.png](https://s2.ax1x.com/2020/01/31/18STU0.png)

```js
// DOM :data-custom-text="text"
 <custom-button class="a"  style="color: red;" :data-custom-text="text" type="primary">Primary</custom-button>

// js
Vue.component('customButton', {
  render(h) {
    return h("a-button", {
      style: {
        'line-height': 'normal'
      },
      attrs: this.$attrs // 这里将attrs传递给封装组件
    })
  },
})
```

![18nxUS.png](https://s2.ax1x.com/2020/01/31/18nxUS.png)

### props

props可以使用如下方式访问

```js
// 2.2以上
this.$props
```

## DOM

### slot、scopedSlots

`slot`和`scopedSlots`都必须传递给被封装组件

```js
// 2.6之前
$slots、$scopedSlots

// 2.6以后作用域插槽合并了默认插槽，统一作为函数暴露
$scopedSlots = $slots + $scopedSlots
```

在**2.6之前slot和scopedSlots是分开的**，**2.6之后，slot被合并到scopedSlots，也就是scopedSlots包括了以前的slot，下面是兼容逻辑处理**

```js
// 2.6之前，当然这可以作为一个兼容逻辑
render(h) {
  const slots = this.$slots
  const scopedSlots = this.$scopedSlots

  for(let [name, vNodes] of Object.entries(slots)) {
    if(!(name in scopedSlots)) {
      scopedSlots[name] = function () {
        return vNodes
      }
    }
  }

  return h("custom-component", {
    scopedSlots
  })
}
// 2.6之后
render(h) {
  const scopedSlots = this.$scopedSlots
  return h("custom-component", {
    scopedSlots
  })
}
```

### directives

**指令一般用来封装操作DOM节点的命令**，**封装组件的根节点就是原组件的根节点，所以无需处理**



## 事件

事件被分为**原生事件**和**自定义事件**

```js
// 
on?: ?{ [key: string]: Function | Array<Function> };
// 原生事件，仅作用于组件
nativeOn?: { [key: string]: Function | Array<Function> };
```

### nativeOn 原生事件

由于**原生事件会直接绑定在组件的根节点上，与class、style行为一致**，这里不再演示

```js
// nativeOn
@click.native
```

### on 自定义事件

**2.4版本后**，**Vue开放了$listeners对外接口，可以获取父级所有绑定在此组件上的自定义事件**

```js
// 2.4 before，只是值等于,不推荐这样使用
this.$vnode._events

// 2.4 after
this.$listeners
```
`this.$vnode._events`和`this.$listeners`的值是一致的


### v-model处理

v-model是一个语法糖，等同于

```html
<input @input="this.value = e.target.value" :value="value"></input>
```

vue新增可以配置v-model细节的功能,在封装这类型组件的时候，一定要**注意声明与被封装组件一致的model选项，否则会出现v-model无效的情况**

```js
Vue.component('base-checkbox', {
  // 如果组件内部配置了model选项，必须在包裹组件内声明，否则v-model会无效
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```

## 汇总 customButton组件封装ant-design-vue-button

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.css" type="text/css">
</head>
<body>
  <div id="app">
    <custom-button class="a"  style="color: red;" :data-custom-text="text" type="primary" @click="click">Primary</custom-button>
  </div>
</body>
<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.js"></script>
<script>
  // 封装组件示例
  Vue.component('customButton', {
    // 这里要与组件内部的model选项相同，如果启用了此选项，需要在props声明对应的值
    model: {
      prop: 'value',
      event: 'change'
    },
    render(h) {
      // 兼容2.6以前的逻辑
      const slots = this.$slots
      const scopedSlots = this.$scopedSlots
      for(let [name, vNodes] of Object.entries(slots)) {
        if(!(name in scopedSlots)) {
          scopedSlots[name] = function () {
            return vNodes
          }
        }
      }

      return h("a-button", {
        // 透传attrs
        attrs: this.$attrs,
        // 透传props
        props: this.$props, 
        // 透传自定义事件
        on: this.$listeners,
        // 透传slots和scopedSlots
        scopedSlots
      })
    },
  })
  var app = new Vue({
    data() {
      return {
        text: 'button',
        checked: true
      }
    },
    methods: {
      click() {
        console.log('click btn');
      }
    },
    el: '#app'
  })
</script>
</html>
```
