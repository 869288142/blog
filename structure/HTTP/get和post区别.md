# get post 区别
一直以来很好奇为什么 get 一般是传简单值，而且后台接受到后，类型全为，而 post 可以传对象，取得的会保留原有类型。然而事情并没那么简单

get、post 网上常见的区别

1.get 参数走 url，而 post 走 body,这句话其实呢，http 规范并没有明确表明 get 参数不能走 body，在一些服务器测试中，比如 node 的 http 模块，是允许 get 参数走 body 的，而 post 当然也可以走 url，当然我们不推荐使用这些骚操作

2.因为 url 所以不安全，post 走的是 body 所以安全点，其实呢，见仁见智，打开游览器控制台就能看到

3.get 参数长度限制，post 参数长度无限制，get 本身是没有限制的，只是游览器 url 有长度限制导致的

今天我们看看 url 参数和 body 参数的解析，其实这里已经暗示了一些东西，这里以我仅仅会的 Node 作为示例，

get 参数处理(url 参数处理)

```js
let http = require('http')
let url = require('url')
http
  .createServer(({ url: reqUrl }, res) => {
    //状态码+响应头属性
    res.writeHeader(200, { 'Content-Type': 'text/plain;charset=UTF-8' })
    //parse将字符串转成对象,req.url="/?url=123&name=321"，true表示params是{url:"123",name:"321"}，false表示params是url=123&name=321
    let { query: params } = url.parse(reqUrl, true)
    // 获取对象的可迭代键值对并使用for of迭代输出到body中去
    for (let [k, v] of Object.entries(params)) {
      res.write(`${k} = ${v}`)
      res.write('\n')
    }
    res.end()
  })
  .listen(3000)
```

从这里代码可以看到，后台解析是解析 url 中的字符，是不区分 http 请求类型的，只要你在 url 参数加入参数，那么就能通过对应的封装函数拿到 params

post 参数处理(body 参数处理)

```js
let http = require('http')
let typeis = require('type-is')

http
  .createServer((req, res) => {
    //暂存请求体信息
    let body = ''

    //每当接收到请求体数据，累加到post中
    req.on('data', function(chunk) {
      body += chunk //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
      console.log('chunk:', chunk)
    })

    //在end事件触发后，鉴别数据类型，按不同类别进行解析，返回结果
    req.on('end', async () => {
      // 解析参数
      console.log(typeis(req), body)
      console.log('body:', body)
      res.writeHeader(200, { 'Content-Type': 'application/json;charset=UTF-8' }) //状态码+响应头属性
      // 输出提交的数据
      res.write(body)
      res.end()
    })
  })
  .listen(3001)
```

这里监听data事件，对传输块进行累加，在完成事件时，输出请求类型和值，我们常见的koa-bodyparse中间件就是根据请求类型来解析不同Content-type的内容返回给我们的，
这里可以用postman来测试一下

form-data方式
![](https://user-gold-cdn.xitu.io/2019/4/6/169ee4d4d52f6638?w=1128&h=519&f=png&s=58185)

application/x-www-form-urlencoded方式

![](https://user-gold-cdn.xitu.io/2019/4/6/169ee4f87018647b?w=1118&h=454&f=png&s=40298)

最后的json方式


![](https://user-gold-cdn.xitu.io/2019/4/6/169ee505fb69cc1e?w=1093&h=702&f=png&s=53091)


我们最后看一下我们常用的aixos是怎么对参数处理的
put post delete 数据都会被合并到config.data上，鉴定为对象时会直接JSON序列化
![](https://user-gold-cdn.xitu.io/2019/4/6/169ee5b28dbf5c37?w=931&h=567&f=png&s=98930)


params也就是get参数会在XHR请求时被拼接到URL中去
![](https://user-gold-cdn.xitu.io/2019/4/6/169ee9154b3a2851?w=1272&h=337&f=png&s=64763)


