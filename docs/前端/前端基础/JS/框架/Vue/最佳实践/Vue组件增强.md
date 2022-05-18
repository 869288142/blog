# Vue二次封装组件

## 场景

有时候我们会**对现存组件进行增强，或者将一些基础组件进行封装**，这称为**组件的二次封装**，这个过程涉及到一些Vue的内部细节，下面逐步分析存在的问题：

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
**示例**

```js
Vue.component('customButton', {
  props: {
    // 这里声明需要的props
  }
  render(h) {
    return h("a-button", {
      style: {
        'line-height': 'normal'
      },
      attrs: this.$attrs // 这里将attrs传递给封装组件
      props:this.$props
    })
  },
})
```

### 传递prop到被封装组件的原理

直觉上，我们会想这样把props传递给子组件

```js
Vue.component('customButton', {
  props: {
    // 这里声明与被封装组件一直的propsOption
  }
  render(h) {
    return h("a-button", {
      // 将接收到的props传递给子组件
      props:this.$props
    })
  },
})
```

实际上只需要这样

```js
Vue.component('customButton', {
  props: {
    // 这里只声明你需要在此组件处理的props
  }
  render(h) {
    return h("a-button", {
      // 将接收到的props传递给子组件
      props: this.$props,
      // 不作为的Props会作为attrs传递给子组件
      attrs: this.$attrs
    })
  },
})
```

我们只需要声明需要处理的props，比如你需要对value做处理

```js
Vue.component('customButton', {
  props: {
    // 这里只声明你需要在此组件处理的props
    value: {
      
    }
  }
  render(h) {
    return h("a-button", {
      // 将处理后的value以props形式传递给子组件
      props: Object.assign(this.$props,{
        value: this.value
      })
      // 其余属性以attrs传递给子组件
      attrs: this.$attrs
    })
  },
})
```

**原因**

```js
<custom-button :data-custom-text="text" type="primary">Primary</custom-button>
```

**组件上的属性其实未处理前都是可以被认为是attrs**，只是在**后续处理的时候，按照PropsDef将两者区分处理**，也就是我们**将attrs传递给组件，组件内部会自动区分attrs和props**

### 依赖Vue内部区分props和attrs的陷阱

**实例**

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.css"
      type="text/css"
    />
  </head>
  <body>
    <div id="app">
      <jz-fa-date-picker show-time>
        <!-- <div slot="renderExtraFooter">33s</div> -->
      </jz-fa-date-picker>
    </div>
  </body>
  <script src="https://cdn.bootcss.com/moment.js/2.23.0/moment.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.js"></script>
  <script>
    Vue.component('jz-fa-date-picker', {
      name: 'jzFaDatePicker',
      model: {
        prop: 'value',
        event: 'change'
      },
      data() {
        return {
          adapterValue: moment(this.value.valueOf())
        }
      },
      methods: {
        moment
      },
      props: ['value'],
      render(h) {
        const self = this
        return h(
          'a-date-picker',
          {
            on: Object.assign({}, this.$listeners),
            // props: this.$props,
            props: Object.assign({
              ...this.$props,
              value: this.adapterValue
            }),
            // 透传 scopedSlots
            scopedSlots: Object.assign(this.$scopedSlots, {
              renderExtraFooter: () => {
                return h('a', {
                  class: {
                    'calendar-reset': true
                  },
                  domProps: {
                    innerHTML: '重置'
                  },
                  on: {
                    click() {
                      self.adapterValue = moment(1579166125694)
                    }
                  }
                })
              }
            }),
            attrs: {
              ...this.$attrs
            }
          },
          this.$slots
        )
      },
      watch: {
        value(val) {
          this.adapterValue = val
        }
      },
      mounted() {
        window.cpp = this
        console.log(this.$attrs)
      }
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
          console.log('click btn')
        }
      },
      el: '#app'
    })
  </script>
</html>

```

`show-time`是**a-date-picker**开启选择时间的选项，开启后如下：

![1Nzxjf.png](https://s2.ax1x.com/2020/02/03/1Nzxjf.png)

底部会出现**select  time**的按钮，这时候**点击重置按钮**，然后**改变传入组件的value值，重新渲染a-date-picker组件**，结果如下：

![1USh5j.png](https://s2.ax1x.com/2020/02/03/1USh5j.png)

可以看到selectTime按钮消失，使用devTool查看组件数据，发现showTime属性变成了默认的，这里简单说一下原因：

```js
// render传递给a-date-picker数据
{
  attrs: this.$attrs
}
```

`attrs`传递给`a-date-picker`之后，组件内部会自动识别props和attrs，实质上伪代码如下：

* 所有的属性以attrs传入组件

* 按照声明了PropsOptions将属于props的key移动至props对象上，并且从attrs删除

**组件更新时，会获取传入的attrs重新渲染**

丢失过程分析

* 所有的属性以attrs传入组件

* 按照声明了PropsOptions将属于props的key移动至props对象上，并且从attrs删除

* 组件更新时，会重新获取父组件的attrs

按照上述步骤 **$attrs的showTime在渲a-date-picker组件渲染时，已经被删除**了，在**重新渲染去获取attrs时，自然为空**，解决方案自然很简单了，这是属于使用不当导致的问题

```js
// 拷贝副本给子组件操作，而不是传递父组件的attrs来处理
{
  attrs: {... this.$attrs}
}
```

## DOM

`slot`和`scopedSlots`都必须传递给被封装组件

### scopedSlots

```js
// h是createElement别名
h(
  tag,
  {
    scopedSlots: this.$scopedSlots, // 这样传递scopedSlots就可以了
  },

)
```

### slots

slot传递比较复杂，Vue提供了this.$slots来获取slots，但是这与createElement的参数不一致

```js
// h是createElement别名
h(
  tag,
  {
    scopedSlots: this.$scopedSlots, // 这样传递scopedSlots就可以了
  },
  this.$slots // slot是以children传递给组件的，但是需要一个数组
)
```

**实例**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.css"
      type="text/css"
    />
  </head>
 <body>
    <div id="app">
      <jz-fa-date-picker show-time>
        <div>33s</div>
      </jz-fa-date-picker>
    </div>
  </body>
  <script src="https://cdn.bootcss.com/moment.js/2.23.0/moment.js"></script>
  <!-- <script src="./vue.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.4.10/dist/antd.js"></script>
 
  <script>
    Vue.component("jz-fa-date-picker", {
      name: "jzFaDatePicker",
      render(h) {
        console.log(this.$slots);
        const slots = Object.keys(this.$slots)
          .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        return h(
          "a-date-picker",
          {
            scopedSlots: this.$scopedSlots,
            attrs: this.$attrs
          },
          slots
        );
      },
      mounted() {
        window.cpp = this;
      }
    });
    // 定义一份全局数据
    app = new Vue({
      el: "#app",
    });
  </script>
</html>

```

`this.$slots`打印结果如下：

![1d7YcD.png](https://s2.ax1x.com/2020/02/03/1d7YcD.png)

可以看到 **this.$slots**是一个**对象**，我们**需要转换为数组**，尝试一下传递slots给组件

```js
// 将this.$slots转换为vnode数组
const slots = Object.keys(this.$slots)
  .reduce((arr, key) => arr.concat(this.$slots[key]), [])
```

**默认插槽尝试**

``` html
<jz-fa-date-picker show-time>
  <div>33s</div> // 这里是默认插槽
</jz-fa-date-picker>
```

**结果**

![1dHrZ9.png](https://s2.ax1x.com/2020/02/03/1dHrZ9.png)

`a-date-picker`的默认**插槽效果就是像上图一样定制触发按钮的样式，默认插槽渲染成功**

**具名插槽尝试**

首先看一下`a-date-picker`的`renderExtraFooter`插槽效果，是在选择面板上增加一个底部的slots

![1dHXQS.png](https://s2.ax1x.com/2020/02/03/1dHXQS.png)

**尝试封装后的组件**

![1dbiWV.png](https://s2.ax1x.com/2020/02/03/1dbiWV.png)

**具名插槽渲染成功**了，但是**具名插槽同时被渲染到了默认插槽中**去了，这里的调试过程略过，直接说一下核心原因：

* Vue内部识别具名slot时，会有以下核心语句

```js
// resolveSlots函数

function resolveSlots (
    children,
    context
  ) {
    var slots = {};

    for (var i = 0, l = children.length; i < l; i++) {

      var child = children[i];
      var data = child.data;

      // named slots should only be respected if the vnode was rendered in the
      // same context.

      // 仅当在相同上下文中呈现vnode时，才应使用命名插槽。
      if ((child.context === context || child.fnContext === context) &&
        data && data.slot != null
      ) {
        var name = data.slot;
        var slot = (slots[name] || (slots[name] = []));
        if (child.tag === 'template') {
          slot.push.apply(slot, child.children || []);
        } else {
          slot.push(child);
        }
      } else {
        (slots.default || (slots.default = [])).push(child);
      }
    }

    return slots
  }
```

我们查看到`resolveSlots`函数有一句注释，**仅当在相同上下文中呈现vnode时，才应使用命名插槽**，这里的context是指此组件实例

```js
 Vue.component("jz-fa-date-picker", {
      name: "jzFaDatePicker",
      render(h) {
        const slots = Object.keys(this.$slots)
          .reduce((arr, key) => arr.concat(this.$slots[key]), [])
          
        return h(
          "a-date-picker",
          {
            scopedSlots: this.$scopedSlots,
            attrs: this.$attrs
          },
          slots
        );
      },
      mounted() {
        window.cpp = this;
      }
    });
```

打印一下

![1wsEgx.png](https://s2.ax1x.com/2020/02/03/1wsEgx.png)

可以看到context不是我们的jzFaDatePicker实例，而是根实例，这里修复方案很简单，将vnode的context指向jzFaDatePicker实例即可

```js
const slots = Object.keys(this.$slots)
  .reduce((arr, key) => arr.concat(this.$slots[key]), [])
  .map(vnode => {
    // 这里将context修正为this
    vnode.context = this
    return vnode;
  });
```

尝试一下这个代码，仍然没有解决问题，打印一下this

![1wWYfe.png](https://s2.ax1x.com/2020/02/03/1wWYfe.png)

从上图中看到this不是我们看到的实例，而是一个Proxy，**Proxy代理一个对象的行为，然后返回一个代理对象**, **这个对象自然不能满足我们context === child.context，我们需要获取原对象**，所幸，**Vue保存了原实例对象为this._self**,我们可以这样处理

```js
const slots = Object.keys(this.$slots)
  .reduce((arr, key) => arr.concat(this.$slots[key]), [])
  .map(vnode => {
    // 这里将context修正为this._self，这才是组件真正的实例
    vnode.context = this._self
    return vnode;
  });
```

**结果**

![1wOpNj.png](https://s2.ax1x.com/2020/02/03/1wOpNj.png)

经过上述处理，我们的具名插槽也行为正常

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
      const slots = Object.keys(this.$slots)
          .reduce((arr, key) => arr.concat(this.$slots[key]), [])

      return h("a-button", {
        // 透传attrs,需要浅拷贝第一次层
        attrs: {...this.$attrs},
        // 透传props
        props: this.$props, 
        // 透传自定义事件
        on: this.$listeners,
        // 透传slots和scopedSlots
        scopedSlots
      }，slots)
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
