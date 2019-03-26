MacroTask（宏任务）

script全部代码、setTimeout、setInterval、setImmediate（浏览器暂时不支持，只有IE10支持，具体可见MDN）、I/O、UI Rendering。

MicroTask（微任务）

Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver（具体使用方式查看这里）

![avatar](https://user-gold-cdn.xitu.io/2019/1/18/1685f037d48da0de?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行Task（宏任务），否则就一次性执行完所有微任务。

每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。

同步 执行所有微任务 检查宏任务 执行所有微任务

PS await 处理方式 谷歌73 Node11