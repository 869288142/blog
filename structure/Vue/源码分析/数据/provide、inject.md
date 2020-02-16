# provide inject


## 设计理念

* 用于跨层级组件数据传递，将脏代码内置到框架功能中去

## 场景

```html
<google-map>
  <google-map-markers v-bind:places="iceCreamShops"></google-map-markers>
</google-map>
```
**google-map含有一个map属性，方法getMap可以取得此属性**，我们需要在`google-map-markers`需要获取到`map`属性,我们会这样做

```js
// google-map-markers
this.$parent.getMap
```

毫无疑问，这可以解决问题，如果是再增加一层嵌套呢

```html
<google-map>
  <google-map-region v-bind:shape="cityBoundaries">
    <google-map-markers v-bind:places="iceCreamShops"></google-map-markers>
  </google-map-region>
</google-map>
```

我们得这样做

```js
var map = this.$parent.map || this.$parent.$parent.map
```

从此可以预见，继续这样下去，我们可能要写很多层保护来保证获取父组件方法的hack,比如上面，provide inject就是用于解决这个问题的


```js
// google-map
provide: function () {
  return {
    getMap: this.getMap
  }
}

// 任意层子组件
inject: ['getMap']
```

## 主要实现点

### 初始化provide
```js
  function initProvide (vm) {
    var provide = vm.$options.provide;
    if (provide) {
      vm._provided = typeof provide === 'function'
        ? provide.call(vm)
        : provide;
    }
  }
```

### 解析inject

```js
function resolveInject (inject, vm) {
    if (inject) {
      // 解析结果
      var result = Object.create(null);

      // 兼容支持Symbol的情况
      var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

      for (var i = 0; i < keys.length; i++) {

        var key = keys[i];

        // 找到注入的key
        var provideKey = inject[key].from;

        // 向往上($parent)找到对应provide中与inject的Key
        var source = vm;
        while (source) {
          if (source._provided && hasOwn(source._provided, provideKey)) {
            result[key] = source._provided[provideKey];
            break
          }
          source = source.$parent;
        }
        // 没找到尝试使用默认值
        if (!source) {
          if ('default' in inject[key]) {
            var provideDefault = inject[key].default;
            result[key] = typeof provideDefault === 'function'
              ? provideDefault.call(vm)
              : provideDefault;
          } else {
            warn(("Injection \"" + key + "\" not found"), vm);
          }
        }
      }
      return result
    }
  }
```

主要过程如下：

* 向$parent的provide查找到inject的key

* 失败尝试使用默认值，默认值不存在时，发出警告


### 处理inject

```js
  function initInjections (vm) {
    // 解析到inject
    var result = resolveInject(vm.$options.inject, vm);
    if (result) {
      toggleObserving(false);
      // 将inject的属性定义到vm上
      Object.keys(result).forEach(function (key) {
        /* istanbul ignore else */
        {
          defineReactive(vm, key, result[key], function () {
            warn(
              "Avoid mutating an injected value directly since the changes will be " +
              "overwritten whenever the provided component re-renders. " +
              "injection being mutated: \"" + key + "\"",
              vm
            );
          });
        }
      });
      toggleObserving(true);
    }
  }
```