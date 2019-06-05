# await async
async、await相比原生promise的有优势：

1.更加简洁,await一个promise即可,那么会自动返回这个promise的resolve值，无需在then函数的回调中手动取值，彻底解决了回调
```javascript
//Promise方式
 function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000)
    })
    promise.then((res) => {
        console.log('object :', res);
    })
}
f()
```
```javascript
//async、await
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000)
    })
    let result = await promise // 直到promise返回一个resolve值（*）
    console.log('object :', result);
}
f()
```
2.避免了then链式调用的，没有设置失败回调而导致异常被抛出到then链的末端，而导致被忽略,向下面代码一样，如果then没有设置失败回调，那么默认的失败回调会将异常抛给下一个then函数的失败回调，如果末端没有一个catch函数。那么异常就会丢失，问题是如果catch代码中的异常处理代码又有异常抛出呢，那么这个异常只能在下一个then中捕获，这是容易被忽略的错误
```javascript
//promise
let p = new Promise((resolve, reject) => {
    reject()
})
p.then().then().catch()
```
async任意一个await出现了异常，await会自动抛出reject，并且程序会被停止,异常统一在try-catch块可以捕获而不会出现捕获链无限延长的问题
```javascript
//async、await
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject('done!'), 1000)
    })
    try {
        let result = await promise // 直到promise返回一个resolve值（*）
    } catch (error) {
        console.log('object :', error);
    }
}
f()
```
3.then链式流中，数据访问不能很自然的跨层访问
```javascript
MongoClient.connect(url + db_name).then(db=> {
    return db.collection('blogs');
}).then(coll=> {
    return coll.find().toArray();
}).then(blogs=> {
    console.log(blogs.length);
}).catch(err=> {
    console.log(err);
```
先连接数据库MongoClient.connect()返回一个Promise，然后在then()方法里获得数据库对象db，然后再获取到coll对象再返回。在下一个then()方法获得coll对象，然后进行查询，查询结果返回，逐层调用then()方法，形成一个Promise链。

这时候我们有一个需求,第三个then(blogs => {})中我们只能获取到查询的结果blogs，而不能使用上面的db对象和coll对象。这个时候，如果要打印出blogs列表后，要关闭数据库db.close()怎么办？

两种处理方式：

1.使用then嵌套
```javascript
MongoClient.connect(url + db_name).then(db=> {
    let coll = db.collection('blogs');
    coll.find().toArray().then(blogs=> {
        console.log(blogs.length);
        db.close();
    }).catch(err=> {
        console.log(err);
    });
}).catch(err=> {
    console.log(err);
```
问题:
这会打断Promise链，导致then的回调地狱,而且导致在每一个then中都需要手动捕获异常，因为then没成链，不能自然传递异常

2.每个then()方法里都将db传过来
```javascript
MongoClient.connect(url + db_name).then(db=> {
    return {db:db,coll:db.collection('blogs')};
}).then(result=> {
    return {db:result.db,blogs:result.coll.find().toArray()};
}).then(result=> {
    return result.blogs.then(blogs=> {   //注意这里，result.coll.find().toArray()返回的是一个Promise，因此这里需要再解析一层
        return {db:result.db,blogs:blogs}
    })
}).then(result=> {
    console.log(result.blogs.length);
    result.db.close();
}).catch(err=> {
    console.log(err);

```
问题:
我们在then方法中，都将db和其他结果合并成一个对象，特别需要注意的是，如果传递的值含有promise，那么还需要多做一层解析，也就是需要单独给予一个then函数进行处理，况且每次都要传递一个多余的对象(对于到达实际使用地方这段路径，这个对象是不需要使用的)

async、await方案:
```javascript
let getBlogs = async function(){
    let db = await MongoClient.connect(url + db_name);
    let coll = db.collection('blogs');
    let blogs = await coll.find().toArray();
    db.close();
    return blogs;
};
 
getBlogs().then(result=> {
    console.log(result.length);
}).catch(err=> {
    console.log(err);
```
这里await解决了then链的问题，使得then跨层访问的问题从根本上被解决了，因为await的promise的resolve值被置于同一个作用域，可以随意访问

4.使得原本异步非阻塞的表达方式，变成了更加同步阻塞的代码，这得益于ES6中生成器和迭代器，赋予js函数的魔力，本质上，async、await是生成器和迭代器以及Promise结合的语法糖，它使得promise之前设计缺陷被更好地修正，目前看来，async、await，是异步的终极解决方案之一
```javascript
async function basicDemo() {
    let result = await Math.random();
    console.log(result);
}

basicDemo();
```
await由于自动返回了resolve的值，无需then，我们甚至没有感知到异步的存在，他将异步从语法层面上进行了同步化



async、await使用注意事项:

1.await虽然可以像Promise.resolve作用域很多类型的数据，但它的主要意图是用来等待Promise对象被resolved，如果await是非promise值，那么会被立即执行

2.async函数将返回值自动包装成一个promise，就像Promise.resolve一致的行为

3.await必须在async函数上下文，也就是如下代码的区别
```javascript
// 正常 for 循环
async function forDemo() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i ++) {
        await arr[i];
    }
}
forDemo();//正常输出
// 因为想要炫技把 for循环写成下面这样
async function forBugDemo() {
    let arr = [1, 2, 3, 4, 5];
    arr.forEach(item => {
        await item;
    });
}
forBugDemo();// Uncaught SyntaxError: Unexpected identifier
```
4.小心自己的并行处理，也许不小心就将ajax的并发请求发成了阻塞式同步的操作，理解这句话的核心是: await若等待的是promise,那么程序就会在此处等到promise的resolved，然后继续往下,看下面例子,这里第一个sleep会等待自身resolved完成才会往下，如果我们可以让这些函数并行，同时保持await的特性，那么效率会大大提高

```javascript
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('request done! ' + Math.random());
        }, second);
    })
}

async function bugDemo() {
    await sleep(1000);
    await sleep(1000);
    await sleep(1000);
    console.log('clear the loading~');
}

bugDemo();
```

正确的姿势是:
```javascript
async function correctDemo() {
    let p1 = sleep(1000);
    let p2 = sleep(1000);
    let p3 = sleep(1000);
    await Promise.all([p1, p2, p3]);//这里单独await每一个promise也是一样的效果
    console.log('clear the loading~');
}
correctDemo();// clear the loading~
```
