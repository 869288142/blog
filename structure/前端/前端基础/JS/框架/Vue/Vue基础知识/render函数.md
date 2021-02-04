# render 函数

平时我们大部分时间都在使用 Vue 的模板里编写程序，一般情况下，这没什么问题，但在有一些情况下，我们需要使用完全的 JavaScript 能力来帮助我们描述视图，以下是一个例子

## 模板限制

```html
<anchored-heading :level="1">Hello world!</anchored-heading>
```

```html
<script type="text/x-template" id="anchored-heading-template">
  <h1 v-if="level === 1">
    <slot></slot>
  </h1>
  <h2 v-else-if="level === 2">
    <slot></slot>
  </h2>
  <h3 v-else-if="level === 3">
    <slot></slot>
  </h3>
  <h4 v-else-if="level === 4">
    <slot></slot>
  </h4>
  <h5 v-else-if="level === 5">
    <slot></slot>
  </h5>
  <h6 v-else-if="level === 6">
    <slot></slot>
  </h6>
</script>
```

上述例子想要编写一个可控制标题级别的组件，可以看到组件内部实现代码重复很多，我们用 render 函数改写

```js
Vue.component('anchored-heading', {
  render: function(createElement) {
    return createElement(
      'h' + this.level, // 标签名称
      this.$slots.default // 子节点数组
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

通过 render 函数重写的标题级别组件，清晰而精简

## 模板对应的 render 表达

### createElement 参数

```js
  function createElement (
    tag,
    data,
    children,
  )


```

createElement 参数暴露的参数有 tag-标签名、组件名，data-数据对象，子级字符串或者 Vnode

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <script src="./vue.js"></script>
  <body>
    <div id="app"></div>
  </body>
  <script>
    var app = new Vue({
      render(h) {
        return h('div', {})
      }
    }).$mount('#app')
  </script>
</html>
```

**动态属性**

```js
// v-bind
  data() {
    return {
      id
    }
  }
  render(h) {
    return h('div', {
      attrs: {
        id: this.id
      }
    })
  }

```

与模板需要显示 v-bind 或者:一个变量的做法不同的是，render 中的动态属性直接是可以引入数据中的变量即可。


#### 元素选项

**HTML 属性---attrs**

```js
 render(h) {
    return h('div', {
      attrs: {
        id: 'foo'
      }
    })
  }
```

**DOM 属性---domProps**

```js
 render(h) {
    return h('div', {
        domProps: {
        innerHTML: 'baz'
      },
    })
  }
```

**style**

```js
 render(h) {
    return h('div', {
      style: {
        color: 'red',
        fontSize: '14px'
      },
    })
  }
```
style与模板中的v-bind:style语法完全一致

**class**

```js
 render(h) {
    return h('div', {
      'class': {
        foo: true,
        bar: false
      },
    })
  }

```

**事件**

```js
 render(h) {
    return h('div', {
      on: {
        click: this.clickHandler
      },
    })
  }
```

#### 组件选项

**props**

```js
 render(h) {
    return h('div', {
      props: {
        myProp: 'bar'
      },
    })
  }
```

**slot**

```js
this.$slots 访问即可 

this.$slots.default  默认

this.$slots.Namedslots 具名
```

**作用域slot**

```js
 render(h) {
    return h('div', {
      scopedSlots: {
        default: props => createElement('span', props.text)
      },
    })
  }
```

**指令**

```js
 render(h) {
    return h('div', {
      directives: [
        {
          name: 'my-custom-directive',
          value: '2',
          expression: '1 + 1',
          arg: 'foo',
          modifiers: {
            bar: true
          }
        }
      ],
    })
  }
```

**nativeOn**

```js
 render(h) {
    return h('div', {
      nativeOn: {
        click: this.nativeClickHandler
      },
    })
  }
```