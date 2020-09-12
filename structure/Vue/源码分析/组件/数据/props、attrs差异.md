# props、attrs分析

## 设计理念

1. 根据props定义区分props与attrs

2. attrs默认被作用于节点

### 优点：

开发者只需要关注组件内部的数据props，而其余属性默认挂载到DOM节点上，降低了开发认知成本

### 缺点：

* attrs默认被传递给根节点，这是默认情况，**开发者不总是传递attrs到根节点**，所以2.4开放了**inheritAttrs选项，将attrs可选为开发者控制**


## props

下载一份非压缩的vue源码，然后找到

```js
// initProps函数
initProps
```

当然，这个搜关键字也是一个读源码的一个小技巧,
在这里加一个断点

![1Ylp40.png](https://s2.ax1x.com/2020/02/02/1Ylp40.png)

**整体代码如下：**

``` html
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
    <div id="app">
      <c-button :txt="txt" data-test="ttt" @click="test"></c-button>
    </div>
  </body>
  <script>
    Vue.component("c-button", {
      template: `<div>{{txt}}</div>`,
      props: {
        txt: {
          type: String
        }
      },
      mounted() {
        console.log(this);
      },
    })
    // 定义一份全局数据
    app = new Vue({
      el: "#app",
      data: {
        txt: '333'
      },
      methods: {
        test() {
          console.log(11);
        }
      },
      mounted() {
        console.log(1);
      }
    });
    var a = 1
  </script>
</html>

```

然后查看结果

![1YlKC6.png](https://s2.ax1x.com/2020/02/02/1YlKC6.png)

我们就这样可以往前或者往后调试初始化props的整个过程了

![1YljxO.png](https://s2.ax1x.com/2020/02/02/1YljxO.png)


前一个函数是`initState`

![1Y1JQU.png](https://s2.ax1x.com/2020/02/02/1Y1JQU.png)

可以看到其实**propsOptions是options的props属性**，实质上，**options就是我们平常写的那个组件对象**

```js
// options
{
  props: {

  }
  data() {
    return {

    }
  }
  // 等等....
}
```
### initProps

```js
  function initProps (vm, propsOptions) {

    // 我们访问的props
    var props = vm._props = {};

    // propsOptions是我们定义的props

    // 实际上的props传入值
    var propsData = vm.$options.propsData || {};

    // 遍历所有定义的props，处理
    for (var key in propsOptions) loop( key );

    var loop = function ( key ) {
      
      var value = validateProp(key, propsOptions, propsData, vm);

      // 定义props的值到props上
      defineReactive$$1(props, key, value, function () {
          if (!isRoot && !isUpdatingChildComponent) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            );
          }
        });

      // 将props定义到this上
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    
  }
```

initProps依次做了以下事情：

* 将`propsData`与`propsOptions`进行**对比，验证其合法性**

* 将合法值定义到`_props`上

* 将`_props`处理好的属性代理到组件实例(this)上

### propsData处理

搜索源代码`PropsData`,找到以下代码

```js
// 此语句初始化
var propsData = extractPropsFromVNodeData(data, Ctor, tag);
```

我们看一下`extractPropsFromVNodeData`内部实现

```js
  function extractPropsFromVNodeData (
    data,
    Ctor,
    tag
  ) {

    var propOptions = Ctor.options.props;

    // propsData
    var res = {};

    var attrs = data.attrs;
    var props = data.props;

    // 遍历propOptions处理，如果attrs存在propOptions的key，则删除attrs中的key
    for (var key in propOptions) {
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
    return res
  }
// checkProp
function checkProp (
    res,  // propsData
    hash, // 哈希表，其实就是对象
    key,  // 默认Key AB
    altKey, // 连字符key a-b
    preserve // 是否保留
  ) {
    if (isDef(hash)) {
      if (hasOwn(hash, key)) {

        res[key] = hash[key];

        // 不保留则删除
        if (!preserve) {
          delete hash[key];
        }
        return true
      } else if (hasOwn(hash, altKey)) {
        res[key] = hash[altKey];
        // 不保留则删除
        if (!preserve) {
          delete hash[altKey];
        }
        return true
      }
    }
    return false
  }  
```

`extractPropsFromVNodeData`主要做了以下事情：

* 遍历props定义的Key

  * 将`props`合并到`propData`

  * 将`attrs`按照合并到`propData`,并且从**attrs删除此key**

### 小结

经过我们阅读源码，得到了以下几点

* 除了使用render函数显式传递props,其余传入到组件的都是attrs，组件内部会进行一次筛选，分成attrs和Props，其伪代码如下：

```js
// data是指模板编译后的静态render函数或者render渲染函数的data数据，这里先略过Vue编译过程
const attrs = data.attrs
const props = data.props

// 将传入的attrs和props对组件定义的Props进行验证，解析出最终的props
vm._props = attrs.checkProps + props.checkProps

// 将_Props的key都代理到vm上，实现this.key -> this._props.key
proxy(vm, "_props", key);

// 暴露_props公共接口

vm.$props = vm._props
```



## attrs

### render

* attrs是render函数第二个对象的attrs对象

```js
h(tag,{
  attrs // 这里是data的attrs
}, children ) 
```

### template

* template生成AST

* AST生成render函数

```js
"function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('jz-fa-date-picker',{attrs:{"show-time":""}})],1)}
}"
```



