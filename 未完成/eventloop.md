MacroTask（宏任务）

script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。

MicroTask（微任务）

Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver（具体使用方式查看这里）

![avatar](https://user-gold-cdn.xitu.io/2019/1/18/1685f037d48da0de?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行Task（宏任务），否则就一次性执行完所有微任务。

每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。

同步 执行所有微任务 检查宏任务 执行所有微任务

**差异1**
timer阶段处理 Node10和浏览器都是执行完所有timer 再执行microTask
Node11 实现每次timer之后就执行microTask

```js
setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(function() {
    console.log('promise1');
  });
}, 0);
setTimeout(() => {
  console.log('timer2');
  Promise.resolve().then(function() {
    console.log('promise2');
  });
}, 0);

// Node 11 版本
timer1
promise1
timer2
promise2

// Node 11以下版本
timer1
timer2
promise1
promise2
```

**差异2**
PS await 处理方式 谷歌73 Node11

```js
async function async1(){
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2(){
    console.log('async2')
}
console.log('script start')
setTimeout(function(){
    console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')

// Node 11 73 以下
script start -> async1 start -> async2 -> promise1 -> script end -> async1 end -> promise2 -> setTimeout

// node11  谷歌73 以上
script start -> async1 start -> async2 -> promise1 -> script end -> promise2 -> async1 end -> setTimeout

```

async 函数解析
```js
async function f(){
  await p
  console.log(1);
}
//node.js8及即将推广的标准应该会解析成下面这样
function f(){
  Promise.resolve(p).then(()=>{
    console.log(1)
  })
}
//其余的版本应该会解析成下面的这样
function f(){
  new Promise(resolve=>{
    resolve(p)
  }).then(()=>{
    console.log(1)
  })
}
```