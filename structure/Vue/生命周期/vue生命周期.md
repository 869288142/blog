# 生命周期
现在很容易见到生命周期这个概念，简单点来理解就是就是某个时间点，就会运行对应的程序，生动来说就是如果按照人的一生的各个阶段来做事情，那我们会更清晰，更优效率，更重要的是，每个阶段都有一些可以做的不可以做的，我们学习代码的生命周期就是找出每个阶段，它允许我们做什么。

官方生命周期视图：
![](https://cn.vuejs.org/images/lifecycle.png)


beforeCreate 
created 数据响应构建完毕  数据请求
beforeMount
mounted DOM渲染完毕  绑定事件
beforeDestroy 销毁前的处理，比如自己绑定的事件
destroyed

|生命周期| 数据 | DOM | 事件 |
| :------:| :------:| :------: | :------: |
| created | 初始化完毕 可以操作数据 |  | |
| mounted |  | 渲染完毕 可以操作DOM | 可以绑定 |
| beforeDestroy |  |  | 自绑定事件在这手动销毁|


一般在created初始化数据，比如axios这些，这样可以避免在渲染完毕后，mounted时修改数据触发视图再更新一次

这里还有一个小技巧，在编写页面需要一些数组的非响应操作，比如你想用一个元素重复填充数组某个长度
```js
this.arr.length = n
this.arr.fill(obj)
```
但是别忘记联调后记得去掉
