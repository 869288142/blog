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

## git 技巧

### 提交记录

#### 美化`git pull`
    
* 不会有`merge`的记录干扰，提交清晰

``` shell
// 单次
git pull --rebase --autostash
```

``` shell
// 永久设置
git config --global rebase.autoStash true
```

#### 美化`git merge`

``` shell
// 切换到feature分支将当前分支rebase到master分支
git rebase master 

// 将feature所有commit合并成一个
git merge --squash
```

#### 禁用快速合并，方便后续回退代码

``` shell
git merge –no-ff
```


### 撤销代码

#### 撤销暂存区提交文件

``` shell
git reset -q HEAD -- filepath
```

#### 修改提交信息

``` shell
git commit --amend info
```

#### 撤销本地commit 

``` shell
git reset --soft HEAD
```

#### 撤销远程commit

##### 普通commit

``` shell
git revert COMMIT_ID
```

##### 合并commit

``` shell
git revert COMMIT_ID -m PARENT_ID
```

### 找回代码

#### 找回丢失文件

``` shell
git fsck --lost-found 
```

`.git/lost-found/other`

#### git reflog

查到最近的`commit id`后进行恢复

### 小技巧

####  git tag

`git tag` 可以快照，作为一个项目的里程碑，稍后你可以从这个`tag`中签出代码进行操作


### 注意事项

#### 修正文件大小写

``` shell
git mv --force myfile MyFile
```

#### git merge revert 后再次meger, 内容被忽略

`三向合并`，需要产生新的公共节点才行

### 模型

* `gitlab flow`

#### 注意问题

* 如何处理`hotfix`

* `master` `pre-production` `prodution` 之间如何传递代码