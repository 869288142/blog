# Monorepos

`Monorepos`是指一个仓库下同时管理多个包的一种代码组织方式

## Monorepos好处

* 管理调试方便，不需要打开多个仓库，，不需要使用`npm link`

* 便于管理依赖关系，不需要变动后手动去更新依赖的项目 

* 统一第三方依赖，同时占用空间小

## Monorepos坏处

* 代码量容易非常大，降低编译和代码管理效率

* 处理单个包的git操作比较麻烦

## Yarn Workspace-更好地管理依赖

在`yarn`推出`node_modules`扁平化组织后，`yarn workspace`,本质上是项目级别的代码扁平化管理

### 配置workspace

**package.json**

``` json
// 必须
"private": true,
// 指定packages目录
"workspaces": ["packages/*"] 
```

### 常见操作

workspace的操作就是在yarn 后面跟着workspace 关键字，代表操作工作空间，如下:

``` shell
# 根目录安装
yarn packageName  add axios
# 为packageName包安装axios
yarn workspace packageName add axios

# 运行单个命令
yarn workspace packageName run dev
# 全部子包运行此命令
yarn workspace run dev 
```

## 使用learn管理子包发布

