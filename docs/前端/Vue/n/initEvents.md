初始化 事件

```js
export function initEvents(vm: Component) {
  // 创建一个纯净对象(自身无属性并且无原型对象)
  vm._events = Object.create(null)
  vm._hasHookEvent = false
  // init parent attached events 将父组件注册的事件进行注册
  const listeners = vm.$options._parentListeners
  if (listeners) {
    updateComponentListeners(vm, listeners)
  }
}
```

将父组件的绑定事件绑定到子组件内部

```js
export function updateComponentListeners(
  vm: Component,
  listeners: Object,
  oldListeners: ?Object
) {
  target = vm
  updateListeners(
    listeners,
    oldListeners || {},
    // 注册事件
    add,  
    // 卸载事件
    remove,
    // 创建单次事件，立即调用并销毁
    createOnceHandler,
    // 当前vm实例
    vm
  )
  target = undefined
}
```


```js
export function updateListeners(
  on: Object,
  oldOn: Object,
  add: Function,
  remove: Function,
  createOnceHandler: Function,
  vm: Component
) {
  let name, def, cur, old, event
  // 遍历新的事件对象
  for (name in on) {
    // 新的事件函数
    def = cur = on[name]
    old = oldOn[name]
    // 新的事件函数名称，这里进行统一
    event = normalizeEvent(name)
    /* istanbul ignore if */
    if (__WEEX__ && isPlainObject(def)) {
      cur = def.handler
      event.params = def.params
    }
    // 没有在methods中定义，非生产环境会输出控制台错误
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' &&
        warn(
          `Invalid handler for event "${event.name}": got ` + String(cur),
          vm
        )
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur)
      }
      // 如果是单次事件，则立即调用
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture)
      }
      // 增加事件
      add(event.name, cur, event.capture, event.passive, event.params)
    } else if (cur !== old) {
      // 更新新的事件
      old.fns = cur
      on[name] = old
    }
  }
  // 遍历旧事件对象 并删除新的事件对象中不存在的事件
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name)
      remove(event.name, oldOn[name], event.capture)
    }
  }
}
```

总结：将新的事件对象合并到旧的事件对象中去，并移出没出现在新事件对象中的旧对象事件