# vue3

## 优化

### 体积

* api全部支持tree-shaking,按需加载

### 性能

* 响应式性能提升

* 模板动静分离diff

* 变量提升，将不变的提升

* 事件缓存

* SSR代码直出

## composition-api

## 特性


`effectScope`

**能够做到hook共享**

``` js
function createSharedComposable(composable) {
  let subscribers = 0
  let state, scope

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop()
      state = scope = null
    }
  }

  return (...args) => {
    subscribers++
    if (!state) {
      // 创建effectScope
      scope = effectScope(true)
      // 
      state = scope.run(() => composable(...args))
    }
    onScopeDispose(dispose)
    return state
  }
}
```

## hook本质

* **内置框架更新能力**

* **聚合**

## ref vs reactive
``` js
const count = ref(1)
count.value


const obj = reactive({ count })
obj.count
// add key is reactive
obj.unknow = 1
// delete is reactive
delete obj.unknow 
```

##  watch  

### watch vs watchEffect

* 惰性地执行副作用
* 更具体地说明应触发侦听器重新运行的状态
* 访问被侦听状态的先前值和当前值

### flush选项

``` js
  // 原先watch 只是在组件渲染前调用，现在可以调整到组件渲染后调用
  watchEffect(
      () => {
      },
      {
        flush: 'pre' // TODO: post | sync
      }
    )
```

