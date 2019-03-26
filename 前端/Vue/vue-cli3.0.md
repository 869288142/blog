升级VueCli3的理由:

1.构建速度大大加快,之前看到一个升级的例子是2的3倍速度，具体可以在自己迁移一个项
目测试下，这里的优化有默认开启了多核构建、缓存
[并行和缓存](https://cli.vuejs.org/zh/guide/cli-service.html#%E7%BC%93%E5%AD%98%E5%92%8C%E5%B9%B6%E8%A1%8C%E5%A4%84%E7%90%86)

2.webpack被内置到@vue/cli-service，可以升级，其他服务基于插件注入，比如babel、TypeScript
[插件](https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E5%9C%A8%E7%8E%B0%E6%9C%89%E7%9A%84%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%AE%89%E8%A3%85%E6%8F%92%E4%BB%B6)
```
vue add @vue/eslint 
安装@vue/cli-plugin-eslint

//不带@vue可以安装第三方插件,比如我们熟知的element-ui
vue add apollo 
安装并调用 vue-cli-plugin-apollo
```
PS:这里注意的是，我们安装这些插件是为了将相关配置导入我们项目，不能取代npm包,比如安装了
```
vue add element  
如果没安装element-ui就没法使用
```

3.在项目根目录下建一个vue.config.js文件即可,这里提下create-react-app，如果需要修改webpack配置，需要执行reject命令把webpack文件暴露出来，而VueCli3可以自动合并vue.config.js配置到webpack中去，而且vue.config.js支持webpack-chain写法，可以更加方便

[vue.config.js配置项](https://cli.vuejs.org/zh/config/#vue-config-js)

eg: 跨域
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190223164613210-28941375.png)


4.提供了TypeScript PWA 支持内置支持，在vue create命令时可以自由选择，构建项目完毕后还可以手动添加对于的插件来添加

5.对于代码规范  提供了ESlint结合prettier 支持 npm run lint 一键修复风格，对于风格，可以在.eslinttec.js中修改

[ESlint配置](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)

eg: 不使用分号风格
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190223165219151-678458653.png)


6.默认提供了git 即 git-hook,用户在创建完项目即可获得git仓库，无需自己创建，不过目前我还没体验过 = =
[git-hook](https://cli.vuejs.org/zh/guide/cli-service.html#git-hook)


7.现代模式可以提供一个只面对现代浏览器的版本，和一个旧浏览器的回退版本，可以使用 vue-cli-service build --modern执行,大意是之前生成的包要兼容旧版本，如果你只需要在新版本浏览器上运行，那么兼容代码会冗余，现代模式就可以只为新版本浏览器生成代码，减少代码体积
[现代模式](https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E7%8E%B0%E4%BB%A3%E6%A8%A1%E5%BC%8F)

8.提供了可视化视图 vue ui命令即可运行，但是作为一个程序员还是习惯命令行，这个没多看，有兴趣可以进去跑跑


//生成项目
CLI2 vue init webpack name
CLI3 vue create name

最后CLI3会覆盖CLI2命令，官方提供了一个方法解决
(同时运行CLI2和CLI3的方法)[https://cli.vuejs.org/zh/guide/creating-a-project.html#%E6%8B%89%E5%8F%96-2-x-%E6%A8%A1%E6%9D%BF-%E6%97%A7%E7%89%88%E6%9C%AC]