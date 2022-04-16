# RxJS

Reactive Extensions For JavaScript 全称JavaScript响应式拓展

## 思想

基于stream的reactive编程模型

## 特点

* 基于流编程

* 响应式编程

### 特性

#### Observable

``` ts

import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  // 发出信号
  subscriber.next(1);

  // 发出错误
  subscriber.error(1);

  // 完成后不会执行
  subscriber.complete();
  subscriber.next(4);
});
// 订阅信号
const subscription = observable.subscribe({
  next: console.log,
  error: console.log,
  complete: console.log,
});

// 销毁订阅
subscription.unsubscribe();

```
#### Subject

多博


#### Scheduler

TODO 调度器

``` ts
import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';
 
const observable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}).pipe(
  observeOn(asyncScheduler)
);
 
console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
     console.log('done');
  }
});
console.log('just after subscribe');
```
#### Operators

##### Creation Operators

##### Pipeable Operators





