# eventloop

eventloop意为事件循环，是js基于单线程的优化手段，其中有以下两个重要概念`task`、`microtasks`

## task

## microtasks 

## 重要改革点

### Node11改变循环策略

Execution of a Job **can be** initiated only when there is no running execution context and the execution context stack is empty…

—— [ECMAScript: Jobs and Job Queues](https://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues)

ECMA规范规定，微任务尽可能要在当前调用栈为空的时候执行，所以NodeV11版本之前，是执行完所有的timer才执行微任务，后来与浏览器统一，执行一次任务就检查微任务队列

```js
setTimeout(() => {
    console.log("timer1");
    Promise.resolve().then(function() {
        console.log("promise1");
    });
}, 0);
setTimeout(() => {
    console.log("timer2");
    Promise.resolve().then(function() {
        console.log("promise2");
    });
}, 0);
```

**node10**
```js
timer1;
timer2;
promise1;
promise2;
```
**node11**
```js
timer1;
promise1;
timer2;
promise2;
```
[相关文章](https://blog.fundebug.com/2019/04/02/nodejs-event-loop-has-changed/)

### 谷歌提案改变await规范

[使用promise.resolve代替newPromise以提升await性能](https://github.com/tc39/ecma262/pull/1250)



[详细场景分析](https://mp.weixin.qq.com/s/E-HKpdpV_rSX21kHHq-Fxg)


[辅助理解资料](https://segmentfault.com/a/1190000017954500)

## 常见问题

- [ ] [eventloop](https://html.spec.whatwg.org/#event-loop)

  - [ ] 任务队列`eventloop`

    - [x] 类别

      - [x] 宏任务`task`

      - [x] 微任务`microtask` 

    - [x] 运行过程 - **每运行一次宏任务就清空微任务队列,接下来可能会渲染UI**  

    - [x] 应用

      - [x] 合并批量任务 - **Vue的nextTick**
      - [x] 保持任务顺序的一致性

    - [x] 内置方法

      - [x] 微任务

        - [x] `queueMicrotask`

      - [x] 优化

        - [x] `requestAnimationFrame`

        - [x] `requestIdleCallback`
 
## 常见分析

https://juejin.im/post/6844903808200343559


promise顺序问题

Promise.resolve对比new Promise(r => r(v))



## 特殊例子

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

```js
// Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function () {
  console.log('mutate');
}).observe(outer, {
  attributes: true,
});

// Here's a click listener…
function onClick() {
  console.log('click');

  setTimeout(function () {
    console.log('timeout');
  }, 0);

  Promise.resolve().then(function () {
    console.log('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
```

猜测顺序，UI触发click和js触发click结果不一致，[分析](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)










