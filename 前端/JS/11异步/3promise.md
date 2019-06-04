生成Promise对象
```js
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});
```

取得Promise决议状态,then返回一个新的promise
```js
promise.then(function(value) {
  // success
}, function(error) {
  // failure
});
```

捕获错误 promise及then中的错误

同时捕获同步和异步错误 try