以下是项目中常用npm命令:

1.初始化项目(生成package.json)

    npm init 然后根据提示填写项目信息即可
    
2.添加依赖

    npm install(i) [package]@[version] (-S/-D) (-g)

    参数解析:

    1.install(i)  install有一个简写i
    2.[package]@[version] package为npm包名，后面的@[version]可选，没有的时候默认安装最新版本
    3.-S/-D,-S是--save的简写，-D是--save-dev的简写，-S与-D的区别就是-S会被打包到运行环境中去，-D只是在开发中使用，比如babel转码
    4.-g是-global的简写，这个选项会被npm包安装到全局去，一般用于一些在命令行使用的npm包，比如vue-cli，使用-g时没有-S/-D选项

3.删除依赖

    npm uninstall (-g) [package]

4.更新依赖

    npm update (-g) [package]
    查看过期包 npm outdated [package]
    查看包版本 npm ls [package]

5.运行脚本

    npm run [scriptname]
    常见的有vue-cli中的npm run dev、npm run build

最后，大家有啥不会的命令动手能力强的可以npm command -h 查看实例，不想动手的可以看看npm官网

[npm文档](https://www.npmjs.com.cn)    

