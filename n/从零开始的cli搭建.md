webpack  将所有资源视为JS,从入口开始寻找依赖并打包整个依赖

安装webpack
npm i -D  webpack

核心概念
入口
出口
中间件 loader(将资源转换为webpack可识别的js资源) plugin(做一些额外工作)

配置文件 webpack.config.js
```js
let path = require('path')
module.exports = {
  entry: './src/main.js', //入口
  output: {  //出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack-bundle.js'
  }
}
```
没有loader的 webpack是冒得灵魂的

我们加入最常见的bable
别老是到处百度,有啥不会的npm包,上npm看一下官方文档就好

npm install -D babel-loader @babel/core @babel/preset-env webpack

直接上最新的babel 和 babel-loader

既然是一个loader,我们看一下loader怎么配置
```
module: {
  rules: [
    {
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
瞄一下，在webpack.config.js配置一个module的选项，里面有一个rules选项,就论我们添加的这个对象，test表示正则匹配到js后缀名的文件, use选项表示我们使用的loader和options

现在vue.config.js是这样的
```js
let path = require('path')
module.exports = {
  entry: './src/main.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack-bundle.js'
  }
}
```
好，现在我们在src/main.js里面写一些esnext语法
```js
// main.js
let a = 1
export default a 
```

现在反应过来了，怎么通过命令行运行webapck,我们知道一般直接在命令行可以运行的都是全局有设置环境变量，path,那么node，一般都是安装到全局，即 npm i package -g ,这些命令可以被CMD全局识别，这里插入一个小知识，很多命令行都会自带cmd文件，我们可以去node_modules中找到.bin目录，看到有一个webpack.cmd,那么在这个目录下我们可以直接运行cmd，比如说node_modules/.bin/webpack,但是慵懒的程序员怎么可以在运行命令的时候，去翻一个node_modules的.bin目录呢

好滴，npm的package.json提供了一个字段叫bin
![](https://img2018.cnblogs.com/blog/1361028/201903/1361028-20190301100014356-1762486906.png)
看到了么，这就是node_modules/.bin/command.cmd，
如果一个命令是在npm package.json scripts里面使用，那么node会去node_module里面找到这里.bin中对应的cmd文件，执行该命令
我们改一下我们项目的package.json
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```
这时候我们 npm run build

然而会提醒你必须安装一个叫webpack-cli的,大致是帮我们管理webpack的命令行工具，安装就是了

然后 npm run build 

dist目录一闪，噔噔蹬
![](https://img2018.cnblogs.com/blog/1361028/201903/1361028-20190301102527083-1919406790.png)

我们的main.js被转译完成了

接下来我们搭建一个最重要的，热更新

先安装

npm i -D webpack-dev-serve

然后配置