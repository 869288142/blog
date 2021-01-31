# 如何处理npm包的修改

## 情况1-npm包的bug

这种情况下我们需要走PR流程，可以临时使用`patch-package`来临时补丁，等到PR合并后使用官方的版本，使用方法如下：

1. 安装patch-package

``` shell
yarn add patch-package
```

2. 修改node_modules的文件

3. 执行patch-package命令

``` shell
npx patch-package packageName
```

4. 将patchers纳入版本管理

## 情况2-npm包不接受的feature

一般来说npm包开发者接受了`feature`的话，最好走`PR`，有时候npm包开发者认为我们`feature`受众太窄，我们可以按照情况1进行`patch-package`，或者


## patch-package 的好处

* 修改的npm包可以继续更新版本

* 修改的记录可以纳入仓库，比如fork仓库更加轻量