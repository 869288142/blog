# git

## 与中心化仓库的差异

### 开发友好

* 可以离线工作，这在网络情况不好的时候非常重要

* 容易管理冲突

* 可以相互交换代码，而不需要通过中心仓库

* 强大的分支功能

### 代码完整性

* 代码被自动备份到其他人的仓库

* 可以通过sha-1验证完整性

### 权限控制

* 容易控制权限，不需要对所有人开放仓库写入权限，而由你自己决定是否merge

### 性能

* 非常快，保存的是内容的变更而不是单个文件的变更，部分检出的时候比较困难

### 基本操作

本地初始化仓库
``` shell
git init [--bare]
--bare为裸仓库选项，即仓库内只存在git操作记录而不保存项目目录
```
 
初始化远程仓库

``` shell
git remote add origin giturl
git pull origin master
git add *
git commit -m 'comment'
git push -u  origin master
```

远程仓库操作

```shell
git push origin master
git pull origin master
```

分支策略

修正commit 信息

``` shell
git commit --amend 修改未提交的commit信息
```

提取commit 

``` shell
git cherry-pick
```

查看最近改动

``` shell
git reflog 查找你的动作
```

查看公共节点

``` shell
git merge-base --all master t
```

git config pull.rebase true
git config rebase.autoStash true

