# props

props是一个用于向子组件传递数据的一个接口

## 源码解析

**initState**

```js
 function initState (vm) {
   
    var opts = vm.$options;

    if (opts.props) { initProps(vm, opts.props); }
  }
```

在initState函数中，如果组件对象有配置props这个选型，就调用props初始化props数据

**initProps**

```js
  function initProps (vm, propsOptions) {

    // 初始化组件的props对象
    var props = vm._props = {};

    // cache prop keys so that future props updates can iterate using Array
    // instead of dynamic object key enumeration.
    
    var keys = vm.$options._propKeys = [];



    var isRoot = !vm.$parent;
    // root instance props should be converted
    if (!isRoot) {
      toggleObserving(false);
    }
    var loop = function ( key ) {
      keys.push(key);
      var value = validateProp(key, propsOptions, propsData, vm);
      /* istanbul ignore else */
      {
        var hyphenatedKey = hyphenate(key);
        if (isReservedAttribute(hyphenatedKey) ||
            config.isReservedAttr(hyphenatedKey)) {
          warn(
            ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
            vm
          );
        }
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
      }
      // static props are already proxied on the component's prototype
      // during Vue.extend(). We only need to proxy props defined at
      // instantiation here.

      // 将this.key 代理到this._props_key,方便我们获取数据
      if (!(key in vm)) {
        proxy(vm, "_props", key);
      }
    };

    // 为Props定义一个set，提醒用户不能修改props来更新组件视图
    for (var key in propsOptions) loop( key );

    toggleObserving(true);
  }
```