# options

可以通过$options访问用于初始化的选项

数据

## 源码分析

## componentOptions

```js
if (options && options._isComponent) {
  // 正常合并选项要慢，组件选项可以走这个优化
  initInternalComponent(vm, options);
} else {
  vm.$options = mergeOptions(
    resolveConstructorOptions(vm.constructor),
    options || {},
    vm
  );
}
```

在initInternalComponent打上一个断点

```js
function createComponentInstanceForVnode (
    vnode, // we know it's MountedComponentVNode but flow doesn't
    parent // activeInstance in lifecycle state
  ) {

    // 组件option
    var options = {
      _isComponent: true,
      _parentVnode: vnode,
      parent: parent
    };
    // 内联模板
    var inlineTemplate = vnode.data.inlineTemplate;
    if (isDef(inlineTemplate)) {
      options.render = inlineTemplate.render;
      options.staticRenderFns = inlineTemplate.staticRenderFns;
    }
    // 这里调用_init
    return new vnode.componentOptions.Ctor(options)
  }
```

createComponentInstanceForVnode首先根据是否有内联模板添加`render、staticRenderFns`属性，初始会添加`_isComponent、_parentVNode、parent`属性，最后调用`new vnode.componentOptions.Ctor(options)`，实际上，`vnode.componentOptions.Ctor`是一个`Vue.extend`的类,这里就等于调用了

```js
// Vue.prototype._init
this._init(options);
```

```js
function initInternalComponent (vm, options) {

  // 原型继承父级的Options
  var opts = vm.$options = Object.create(vm.constructor.options);



  var parentVnode = options._parentVnode;
  

  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;

  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}
```

组件的$options初始化比较简单，只是将一些运行时的变量直接合并上去，因为**Vue内部实例化的组件无需传入外部Options,所以Vue内部就对其做了上述优化，常规的new Vue还是走另外一个流程**

## new Vue场景

```js
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
);
```

这里主要是将`vm.constructor.options`和传入的`options`进行合并,这里需要关注的是`vm.constructor`

### vm.constructor

```js
function resolveConstructorOptions (Ctor) {

  var options = Ctor.options;

  // 往继承链上迭代检测并合并选项
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}
```