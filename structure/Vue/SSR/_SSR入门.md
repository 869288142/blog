# SSR

SSR全称server side render，服务端渲染，服务端渲染在很久以前我们就在做了，例如常见的php，和jsp，这么一说就很容易了解这个概念了，那么为什么在这个时间段，又说起了SSR呢了，在三个框架横行的今天，它有什么重大优势让三大框架都专门支持了呢？

## SSR的权衡

### SSR的好处

CSR，客户端渲染，看一下CSR常见的问题

**1.白屏现象**

客户端渲染**一般采用了AJAX来获取数据，然后利用框架渲染视图**，**由于获取数据和渲染视图的时间**，特别是在**网络情况不好或者设备性能不好的情况，白屏时间更加长，对这方面要求高的网站，尤其需要SSR**

**2.SEO更好**

由于传统**SPA是走的AJAX获取数据，这方面只有谷歌会获取AJAX返回的内容，而其他引擎暂时不支持**，这就意味着**你的网站在搜索引擎面前，被人看到的机会会比正常网站机会要少**，如果你希望你的网站排名尽可能高，SSR可以解决这个问题。

###  SSR的坏处

既然SSR能够彻底解决我们的痛点，那么为什么现在在外面公司听到SSR还是比较少呢，我们看看SSR的代价有哪些

**1.开发条件严格**

**浏览器和服务端的生命周期不一致**，需要特殊处理

**一些扩展库不能直接使用**，需要特殊处理

**2.构建和部署要求更多**

比起SPA可以部署在任何服务器上，服务端渲染需要在Node环境下，当然，随着技术发展，现在已经可以部署在其他服务器上，只是需要花费多一点成本，官方已经提供了这方面的文档

**3.更多的服务端压力**

在服务端渲染，显示会增加服务器的压力，这属于CPU密集型，也称计算密集型，还记得吗，Node是在IO密集型上有重大优势，而计算密集型是单线程的弱势，这个话题到此为止，**显然大量的服务端压力，需要更多的服务器支持，负载均衡等服务器策略，良好的缓存策略等支持**


我们看到一开始SSR解决的痛点，不禁欣喜起来，马上就想使用，但是看一下我们SSR的代价，**总体上，SSR增加了运维成本和开发成本，这是一笔不小的代价，以至于我们在考虑使用SSR时，一定要慎重考虑，是否真的有必要**


## SSR核心流程

### 组件渲染为字符串

**SSR的本质是要得到渲染后的HTML字符串**，关于这部分，这里我们可以采用官方的工具  **vue-server-renderer**,使用方法如下：


```js

const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})

const renderer = require('vue-server-renderer').createRenderer()

renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
})
```

使用的步骤很简单，运行此脚本，可以看到如下结果

![ucbCg1.png](https://s2.ax1x.com/2019/10/06/ucbCg1.png)

我们已经成功得到了组件渲染后的字符串了

**vue-server-renderer原理初探**

带着好奇心，我想知道这个工具是怎么将组件生成了字符串，SPA的渲染流程是**AST->render->Vnode->具体平台代码**，我们看一下工具的源码是怎么处理的

找到包的入口，发现开发环境下引入的文件

![ucL8hQ.png](https://s2.ax1x.com/2019/10/06/ucL8hQ.png)


然后依次寻找

```js

createRenderer

createRenderer$1

createRenderer

render

createRenderFunction

renderNode


```

![ucOu8J.png](https://s2.ax1x.com/2019/10/06/ucOu8J.png)

这里我们看一下node,它是一个Vnode类型的数据，回头一下当初调用的参数

![ucONPe.png](https://s2.ax1x.com/2019/10/06/ucONPe.png)

第一个参数就是Vnode，我们发现了

```js
vm._render // 可以渲染为VNode
```

验证一下

![ucObiF.png](https://s2.ax1x.com/2019/10/06/ucObiF.png)

Vue实例调用_render之后，我们得到了组件的VNode，有了
VNode，就可以生成我们想要的东西了，比如字符串，这里就不再深入了


### 配合服务器

业务中，我们会将服务端使用这个工具，下面是配合node的express搭建服务器输出现有的组件HTML

```js
const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  // 创建实例
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  // 输出为字符串
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }

    // 不加这行会乱码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
```

上述例子在本机的8080端口搭建了一个服务器，访问效果如下

![ucyCeP.png](https://s2.ax1x.com/2019/10/06/ucyCeP.png)

更重要的是，利用浏览器的开发者工具查看，我们的网页不再是空空的一个

``` html
<div id="app">
<div>
```

而是

![ucyaex.png](https://s2.ax1x.com/2019/10/06/ucyaex.png)

在我们访问时，就得到了完整的html，而不是加载完成后，利用js再去编译模板得到html

### 添加index.html

正如我们平时开发SPA一样，需要一个叫做index.html来承载我们的应用，我们在这里也会添加一些重要信息，在上个例子，我们仅仅是利用模板字符串，拼接了html结构，但是这样维护性和可读性很低，我们需要一个SPA一样的index.html,看下面的配置


**首先添加一个 index.template.html文件**

```html
<!DOCTYPE html>
<html lang="en">
  <head><title>Hello</title></head>
  <body>
    <!--vue-ssr-outlet-->
  </body>
</html>
```

可以看到**文件中有一个特殊的片段 \<!--vue-ssr-outlet-->,这是用标志我们的SSR输出片段占用的位置**，简单来说，就是一个占位符，在客户端时，我们会根据el来挂载APP到指定位置，而在服务端，没有DOM，就需要一个这样的标志

**然后修改一下render**

```js
// 设置前代码
const renderer = require('vue-server-renderer').createRenderer()

// 设置后代码
const templatePath = "./index.template.html"
const template = fs.readFileSync(templatePath, 'utf-8');
const renderer = createRenderer({
  template
})
```

在这里，我们需要利用fs读取index.html的内容，然后后面就没什么区别了，只是将渲染片段注入的位置交给了程序进行控制

**对html进行插值**

在Vue使用的模板中，我们可以随意使用数据驱动视图，为了方便用户，官方支持render使用context为模板注入数据，下面是一个例子

```html
<html>
  <head>
    <!-- 使用双花括号(double-mustache)进行 HTML 转义插值(HTML-escaped interpolation) -->
    <title>{{ title }}</title>

    <!-- 使用三花括号(triple-mustache)进行 HTML 不转义插值(non-HTML-escaped interpolation) -->
    {{{ meta }}}
  </head>
  <body>
    <!--vue-ssr-outlet-->
  </body>
</html>
```

```js
const context = {
  title: 'hello',
  meta: `
    <meta ...>
    <meta ...>
  `
}

renderer.renderToString(app, context, (err, html) => {
  // 页面 title 将会是 "Hello"
  // meta 标签也会注入
})
```

在这里，我们只需要在模板中使用语法，然后通过renderToString来注入它专属的数据即可

### 客户端激活

为什么会有这个流程呢，一个**组件首先被渲染成了HTML字符串，这里服务器只是单纯输出了我们的HTML，什么交互逻辑都没有**，正如传统的jsp等HTML直出方案，**我们需要类似在生成的页面加入客户端的脚本**，比起JQuery那种直接操作DOM，Vue有点不一样，看下面的例子

```js
 const app = new Vue({
    template: `
    <div>
      <input type="text" v-model="count">
      <button @click="plus">+</button>
    </div>
    `,
    data() {
      return {
        count: 0
      }
    },
    methods: {
      plus() {
        this.count++
      }
    }
  })
```

我们在app实例上增加了一个小小的交互，**点击按钮就可以将input的数据加一，然而无论我们怎么点击，数据都没有变化，出什么问题了?**

还记得我们写的SPA么，是这样的

```js
var app = new Vue({
  template: `
  <div>
    <input type="text" v-model="count">
    <button @click="plus">+</button>
  </div>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus() {
      this.count++
    }
  },
}).$mount("#app")
```
在**以前我们都设置el属性或者利用$mount来挂载应用**，当然，单纯的字符串HTML，怎么可能能够交互呢，这里我们需要激活，这个步骤很简单，**只需要将相同的代码在客户端运行一遍**，正如下面这样

```js
// 用于生产HTML的Vue实例
var app 

// 挂载实例

app.$mount("#app")
```

看看效果

![uc5q8x.png](https://s2.ax1x.com/2019/10/06/uc5q8x.png)

已经拥有了我们想要的交互逻辑，到这里，我们的SSR核心流程基本结束，下面附上全部代码

<details>
<summary>index.js</summary>

```js
const Vue = require('vue')
const server = require('express')()
const { createRenderer } = require('vue-server-renderer')
const express = require('express')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

// 设置包裹HTML结构
const templatePath = './index.template.html'
const template = fs.readFileSync(templatePath, 'utf-8')
const renderer = createRenderer({
  template
})

// 配置静态资源
const serve = (path) => express.static(resolve(path))

server.use('/client.js', serve('./client.js'))

server.get('*', (req, res) => {
  // Vue
  const app = new Vue({
    template: `
    <div>
      <input type="text" v-model="count">
      <button @click="plus">+</button>
    </div>
    `,
    data() {
      return {
        count: 0
      }
    },
    methods: {
      plus() {
        this.count++
      }
    }
  })

  // HTML包裹数据
  const context = {
    title: 'hello',
    meta: `
      <meta ...>
      <meta ...>
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      console.log(err)
      return
    }
    // 不加这行会乱码
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(`
      ${html}
    `)
  })
})

server.listen(8080)

```

</details>


<details>
<summary>index.template.html</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <html>
    <head>
      <title>{{ title }}</title>
    </head>
    <body>
      <div id="app">
        <!--vue-ssr-outlet-->
      </div>
    </body>
    <!-- 这里由于需要客户端激活，引入Vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入客户端激活脚本 -->
    <script src="./client.js"></script>
  </html>
</html>

```

</details>

<details>
<summary>index.template.html</summary>

```js
// 简单复制一份Vue
const app = new Vue({
  template: `
  <div>
    <input type="text" v-model="count">
    <button @click="plus">+</button>
  </div>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    plus() {
      this.count++
    }
  }
}).$mount("#app")
```

</details>

## SSR注意点

### 生命周期

**beforeCreate created**  只会在服务端渲染时调用，这就意味着在这两个声明周期中，不能使用DOM或者BOM，当然在data函数初始化，也要注意不能出现DOM和BOM


### 服务端数据和客户端数据不一致

由于我们的数据很多时候都是从数据库动态获取的，很可能出现我们**服务端渲染完毕，然后到客户端的时候，数据库的数据已经改变了**，如果我们此时重新获取数据，**在开发环境会重新渲染整个标记的DOM，在生产环境会被跳过**

这里我尝试了一个例子，将上面的客户端激活代码改为

**服务端渲染实例**

```js
const app = new Vue({
  template: `
  <div>
    <ul>
      <li v-for="item in list">{{item.name}}</li>
    </ul>
  </div>
  `,
  data() {
    let list = new Array(8).fill({ name: "cl" });
    return {
      list
    }
  },
  methods: {
  
  }
}).$mount("#app")
```
**客户端激活实例**

```js
const app = new Vue({
  template: `
  <div>
    <ul>
      <li v-for="item in list">{{item.name}}</li>
    </ul>
  </div>
  `,
  data() {
    let list = new Array(8).fill({ name: "cl" });
    list.length = 0
    return {
      list
    }
  },
  methods: {
  
  }
}).$mount("#app")
```

在浏览器我们将网速限制到slow 3G,可以**看到会有一个有列表到列表消失的过程**，当然，这只是正在开发环境的情况，生成环境不会整个替换，官方是说避免性能损耗

**不进行diff然后重新渲染固然好，这样可以避免闪烁**，但是后期请求数据时，**新的数据和目前SSR生成的HTML数据不一致，会导致视图和数据不同步**，这是个不好的情况，目前官方提供了一个方案

**数据预取**

```js
window.__INITIAL_STATE__ = data
```

首先**对数据进行ajax预取到vuex，完成后vue-server-renderer会将Vuex中的数据内联到HTML中去**，正如上面代码所示

**客户端取值**

```js
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
```

按照上述思路，即可保证服务端和客户端使用的数据是一致的，这时候客户端就可以自由操作自己的数据了

## 总结

SSR核心流程是将组件输出为字符串，然后在浏览器端重新运行一遍组件的逻辑，让Vue接管节点，可以解决SEO和首屏渲染等痛点，但是成本高昂，需要权衡，除此之外，也带来一些开发上的问题，格外需要注意。

