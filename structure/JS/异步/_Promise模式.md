# Promise模式

## 并发

```js
var p1 = request( "http://some.url.1/" );
var p2 = request( "http://some.url.2/" );
Promise.all( [p1,p2] )
.then( function(msgs){
// 这里，p1和p2完成并把它们的消息传入
return request(
"http://some.url.3/?v=" + msgs.join(",")
);
} )
.then( function(msg){
console.log( msg );
} );
```

## 竞态

### 任意顺序

```js
// request(..)是一个支持Promise的Ajax工具
// 就像我们在本章前面定义的一样
var p1 = request( "http://some.url.1/" );
var p2 = request( "http://some.url.2/" );
Promise.race( [p1,p2] )
.then( function(msg){
// p1或者p2将赢得这场竞赛
return request(
"http://some.url.3/?v=" + msg
);
} )
.then( function(msg){
console.log( msg );
} );
```

### 最后一个

**某些时候会存在场景，一段事件内允许请求多次，但是只取最后一次解结果**

**思考**

* 发出的请求是否处理

    一般来说，已经发出的请求，XHR支持abort(中断请求)，但是如果服**务器已经响应了此请求，就算丢弃此次请求，还是会调用对应的后续处理，所以对已经发出的请求做丢弃处理意义不大**。

* 如何处理最后一次请求

  我们可以简单使用一个变量来控制请求

```js
let reqId = 0;

function req() {
  reqId++;
  ajax(function() {
    // 闭包保存此次请求ID，与最终ID对比，只响应最后一个
    let curReqId = reqId;
    if(curReqId == reqId) {
      // action
    }
  })
}
```

这种处理方式简单粗暴，我们可以进一步提取出通用的模式