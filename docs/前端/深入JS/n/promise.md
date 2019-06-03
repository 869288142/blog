### promise
#### promise是什么
我们设置回调只是为了告诉程序，当这个步骤完成之后，需要调用这个函数，也就是获取事件完成的通知

**第三方提供我们了解任务何时结束的能力，然后由我们自己的代码决定下一步做什么**

**这种行为就是把回调的控制反转再反转**

```js
function foo(x) {
  // 开始做点可能耗时的工作
}
foo(42)
on(foo, "completion") {
  // 下一步
}
on(foo, "error") {
  // foo出错处理
}
```
javaScript实现方式
```js
function foo(x) {
  // 开始做点可能耗时的工作
  // 构造一个listener事件通知处理对象并返回
  return listener
}
var evt = foo(42)
evt.on("completion", function() {
  // 可以进行下一步
})
evt.on("failure", function(err) {
  // foo出错处理
})
```
evt对象就是分离的关注点之间一个中立的第三方协商机制,promise就是一个类似上述规则的“事件机制”