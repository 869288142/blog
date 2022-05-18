# 传递scss全局变量
当我们尝试在一个scss文件中定义全局变量然后在.vue文件中使用的时候
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190226195702447-1326998466.png)

哦豁，找不到变量，意料之外

我发现犯了一个错误，没导入，@import 'path/to/file.scss'，不过这样的话，每个.vue文件导入起来很麻烦，我们需要一种导入然后默认在.vue导入使用，比较方便

暂时没研究原理，在[官方配置手册](https://cli.vuejs.org/zh/config/#css-loaderoptions)找到了解决方案

根目录下新建vue.config.js
```js
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/variables.scss";`
      }
    }
  }
}
```
