整理web渲染思路，与KOA作比较
1.开启服务器并监听端口，注册监听事件
```js
    // 原生
    let http  = require('http')
    const server = http.createServer((req, res) => {
        // res.setHeader('Content-Type', 'text/html')
        // res.end('ok')
    });
    server.listen(port)//port为端口
    // Koa  将监听事件request移出构造，设计到中间件内
    let Koa = require('koa')
    let app = new  Koa ()
    app.listen(port)
```
   
2.请求信息分析url模块
    1.路径url.parse(req.url)  请求路径的获取以及请求类型的获取(这里被Koa处理并包装成一个request对象)  
```js
    // 原生
    const server = http.createServer((req, res) => {
        let url = url.parse(req.url)
        let method = req.method
    });
    // Koa  将信息封装到request对象上，并可以通过别名简化访问
    app.use(async ctx => {
        let url = ctx.url
        let method = ctx.method
    })
    
```
  2.参数接受querystring,以及POST方法参数获取(监听res的data事件，在end方法中获取)(这里设计成了一个koa-bodyparse中间件)
```js
//get
    // 原生
    const server = http.createServer((req, res) => {
        let url = url.parse(req.url)
        let query = querystring(url.query)    
    });
    // Koa  将信息封装到request对象上，并可以通过别名简化访问
    app.use(async ctx => {
        let query = ctx.query
    })
//post
    // 原生
    const server = http.createServer((req, res) => {
        let content
        req.on('data', chunk => {
            content+=chunk
        })
        req.on('end', () => {
            let query = querystring.parse(content)
            console.log(query)
        })
    });
    // Koa  将过程封装到中间件去
    let bodyParser = require('koa-bodyparser')
    app.use(boodyParser())
    app.use(async ctx => {
        let postQuery = querystring.parse(ctx.request.body);
    })
```        

3.静态资源与动态资源(返回头信息已经被Koa处理)
    静态资源 设定静态资源路径，对静态资源路径结合fs模块返回(中间件)
```js
    // 原生
        //通过fs访问静态资源，需要手动设置内容类型以及状态码
    function staticSend(filename, headers={'Content-Type': 'text/html;charset=utf-8'}, statusCode=200) {
        res.writeHead(statusCode, http.STATUS_CODES[statusCode], headers);
        content = fs.readFileSync(filename);
        res.end(content);
    }
    const server = http.createServer((req, res) => {
        let url = url.parse(req.url)
		staticSend(`${__dirname}/${url}`)
    });
	// Koa 通过koa-static-cache中间件可以设置静态资源访问规则,只需定义访问路径即可	
	const koaStaticCache = require('koa-static-cache')
	app.use( koaStaticCache( __dirname + '/static', {
    prefix: '/public',
	} ) )

```    
    动态资源 设定对应路径的请求返回  路由处理
```js
	// 原生
	// 根据访问路径case然后处理对应路径返回结果
	// Koa
	const Router = require('koa-router');
	const router = new Router();
	router.get('/list', async (ctx, next) => {
		ctx.body = await ctx.render('list.html', {
			users
		});
	})
	app.use( router.routes() );
```	

Koa核心：这个框架有点思想和webpack类似，编写文件->loader/plugins->最终文件,而Koa就是,请求->中间件->返回
它把请求与返回优雅地处理好了,我们只需要关注中间部分逻辑，即中间件


    
