# Promise.try

## 什么是 Promise.try

**普通写法**

```js
function getUsername(userId) {
  return database.users.get({ id: userId })
        .then(function (user) {
            return user.name;
        });
}
```

**Promise.try 写法**

```js
function getUsername(userId) {
    return Promise.try(function() {
        return database.users.get({id: userID});
    }).then(function(user) {
        return user.name;
    });
} 
```

从上述代码对比而言，看起来只是将Promise的起点`database.users.get({ id: userId })`用一个函数包裹起来了，这样做有什么用呢，我们接下来分析一下

## 为什么Promise.try是有益的

### 更好的错误处理

一直以来我们对Promise的错误处理都是下面这种方式

```js
p.then(something).catch(errorHandler)    
```

潜意识下，**我们会觉得catch捕获这里的所有错误，实际上如果p本身出现了错误，那么错误无法被catch捕获**,就像那么下面的例子

```js
function p() {
  c
  return Promise.resolve()
}

p().then().catch((err) => {console.log(err)})
```

如果我们要处理这种错误，需要这样处理

```js
function p() {
  c
  return Promise.resolve()
}
try {
  p().then().catch((err) => {console.log(err)})
} catch (error) {
  console.log(error + '\n' + 3)
}
```

可以看到这样处理有一个很大的问题，将**异常区分了同步异常和异步异常，我们为了处理同步异常，不得不使用try-catch**,接下来看一下使用Promise.try的写法如何

```js
function getUsername(userId) {
    return Promise.try(function() {
        return database.users.get({id: userID});
    }).then(function(user) {
        return user.name;
    });
} 
```

**使用了Promise.try,我们将Promise链中起点位置的异常统一用.catch接受**，运行一下代码可以看到效果

```js
Promise.try = function(func) {
	return new Promise(function(resolve, reject) {
		resolve(func());
	});
}
function p() {
  c
  return Promise.resolve()
}

Promise.try(p).then().catch((err) => {console.log(err + "\n")})
```

**当然Promise.try一个可以提升阅读体验的好处**

```js
function getUsername(userId) {
  return database.users.get({ id: userId })
        .then(function (user) {
            return user.name;
        });
}
```

**Promise.try 写法**

```js
function getUsername(userId) {
    return Promise.try(function() {
        return database.users.get({id: userID});
    }).then(function(user) {
        return user.name;
    });
} 
```

可以看到使用Promise.try开启的Promise链，**业务代码都是天然垂直对齐的，十分方便阅读**

## Promise.try实现核心

Promise.try的实现依赖了Promise构造函数会抛出异常到catch的特性,下面代码可以证明

```js
new Promise((resolve, reject) => {
  c
}).catch((err) => {
  console.log(err + "3")
})
```