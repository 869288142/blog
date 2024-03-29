# promise

## 核心：
**现在运行的部分和将来运行的部分之间的关系**

## 常用方案：
从现在到将来的等待，通常使用一个回调函数在结果返回时得到结果



- [x] callback劣势

    - [x] 回调地狱

    - [x] 信任问题

        - [x] 调用过早

        - [x] 调用过晚或者没有调用

        - [x] 调用次数不正确（过多或者过少）

        - [x] 没有把参数正确传回

        - [x] 吞掉错误或者异常


### 回调带来的问题导致的需求：

一种更同步、更顺序、更阻塞的方式表达异步来提供与我们大脑思维一致

## Promise诞生

### 对于回调函数带来的问题的解决：
    
#### 调用过早

**本质：一个方法可能会同步执行也可能会异步执行，导致结果不可靠**
```javascript
function result(data) {
console.log( a );//0(同步回调调用)、1(异步回调调用)
}
var a = 0;
ajax( "..pre-cached-url..", result );
a++;
```        
**解决方案：**

then方法总是会异步调用其回调

#### 调用过晚

**解决方案:**

在Promise对象执行resolve或reject方法后，then注册的回调函数会被自动执行

#### 没有被调用

**解决方案：**

1.只要决议，那么回调函数就会调用完成回调和拒绝回调其中一个

2.回调函数出现错误，可以在后续代码中捕获这些错误，当然回调已经被执行了

3.Promise本身永远不被决议，可以使用race这个竞态机制来获取一个输出信号，防止其永久挂住程序

#### 调用次数过多或者过少

**解决方案：**

Promise只会接受第一次决议，并默默地忽略任何后续调用
    
#### 没有把参数正确传回

**解决方案：**

Promise在决议时，只接受第一个参数，如果需要多个参数，可以使用数组或者对象包裹参数

#### 吞掉错误或者异常          

**解决方案：**

在Promise创建过程中或者查看决议过程中，出现js异常，那么异常会被捕捉并且使得这个promise被拒绝              

#### 保证Promise可信任(保证返回的值为Promise)

**解决方案：** 
Promise.resolve()

1.传入一个非Promise、非thenable值，那么会得到用这个值填充promise

2.传入一个真正的promise，那么会原样返回这个promise

3.传入一个非Promise的thenable值，会展开这个值，持续到得到一个非类Promise的值    
    

## Promise 基本API


```javascript
new Promise((resolve,reject)=>{
    resolve()、reject()
})
then() catch()
```

如何验证是否为promise 检测是否具有then方法


快捷创建已经被决议的Promise：
```javascript
Promise.resolve()//完成
Promise.reject()//拒绝
```

then和catch方法也会返回一个新的Promise

**不要依赖promise回调的顺序**


### promise局限性：

1.顺序错误处理，导致Promise链中的错误容易被忽略掉

2.单一值导致后续处理变量繁琐

3.单决议在事件中需要注意创建新的Promise链

4.Promise导致的性能问题

