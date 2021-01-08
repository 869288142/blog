# MV*架构分析

## MVC

### 原始MVC

`MVC`模式最早由`Trygve Reenskaug`在`1978`年提出，[论文]((http://heim.ifi.uio.no/~trygver/themes/mvc/mvc-index.html))、[中文翻译](https://juejin.cn/post/6844903696837378061#heading-0)

![](./origin_mvc.jpg)

在论文中，**`MVC`是直接与`Controller`进行交互 然后由`Controller`来组织`View`和`Model`最终展示给用户**

### MVC概念

[`MVC`在提出时，细节不够完善]，更多的是一种理念，下图为常见的`MVC`的实现：

### MVC想要解决的问题

在没有任何架构里面，**逻辑，数据，界面**三者混合在一起，十分难以维护，`MVC` 架构里，将**逻辑，数据，界面**的处理划分为三个部分，**模型Model-视图View-控制Controller**。各个部分的功能如下：

* `Model` 模型，负责数据的加载和存储。
* `View` 视图，负责界面的展示。
* `Controller` 控制器，负责逻辑控制。


### MVC数据流向

在 `MVC` 架构中，`View` 产生事件，通知到 `Controller`，`Controller` 中进行一系列逻辑处理，之后通知给 `Model` 去更新数据，`Model` 更新数据后，再将数据结构通知给 `View` 去更新界面。

###  MVC 架构模式的缺点

* `Model`直接和`View`耦合，导致`Model`无法复用，代码会比较冗余

## MVP


### MVP概念

**与MVC对比，MVP不只是把Controller命名成了Presenter，它从架构上把View和Model进行了解耦**

![](./mvp.png)


### MVP想要解决的问题

`MVP` 要解决的问题和 `MVC` 大同小异：控制逻辑，数据处理逻辑和界面交互耦合，同时能将 `MVC` 中的 `View` 和 `Model` 解耦。它将逻辑，数据，界面的处理划分为三个部分，**模型(Model)-视图(View)-控制器(Presenter)**。各个部分的功能如下：

* `Model` 模型，负责数据的加载和存储。
* `View` 视图，负责界面的展示。
* `Presenter` 控制器，负责逻辑控制。

### MVP数据流向


`MVP` 和 `MVC` 最大的不同，就是 `View` 和 `Model` 不相互持有，都通过 `Presenter` 做中转。`View` 产生事件，通知给 `Presenter`，`Presenter` 中进行逻辑处理后，通知 `Model` 更新数据，`Model` 更新数据后，通知数据结构给 `Presenter`，`Presenter` 再通知 `View` 更新界面

###  MVP 架构模式的缺点

* 在`MVC`架构代码分层上进一步完成了`Model`和`View`的解耦，使得`Model`代码更加稳定可用


## MVVM


### MVVM概念

![](./mvvm.png)

### MVVM想要解决的问题

`MVVM` 要解决的问题和 `MVC`，`MVP` 大同小异：控制逻辑，数据处理逻辑和界面交互耦合，并且同时能将 `MVC` 中的 `View` 和 `Model` 解耦，还可以把 `MVP` 中 `Presenter` 和 `View` 也解耦，MVVM 架构里，将逻辑，数据，界面的处理划分为三个部分，**模型(Model)-视图(View)-逻辑(ViewModel)**。各个部分的功能如下：

* **Model 模型**，负责数据的加载和存储。
* **View 视图**，负责界面的展示。
* **ViewModel 控制器**，负责逻辑控制。


### MVVM数据流向

`View` 产生事件，自动通知给 `ViewMode`，`ViewModel` 中进行逻辑处理后，通知 `Model` 更新数据，`Model` 更新数据后，通知数据结构给 `ViewModel`，`ViewModel` 自动通知 `View` 更新界面。

###  MVVM 架构模式的优缺点

优点：

* 结构清晰，职责划分清晰
* 模块间充分解耦
* 在 MVP 的基础上，MVVM 把 View 和 ViewModel 也进行了解耦

缺点：

* Debug 困难，由于 View 和 ViewModel 解耦，导致 Debug 时难以一眼看出 View 的事件传递
* 代码复杂性增大


## 参考资料

https://www.jianshu.com/p/be63c37b02cb

https://juejin.cn/post/6844903696837378061

https://juejin.cn/post/6844903938873901064

https://segmentfault.com/a/1190000021158929

https://segmentfault.com/a/1190000023325805

https://draveness.me/mvx/




https://www.wildcrest.com/Potel/Portfolio/mvp.pdf

http://blog.hudongdong.com/ios/459.html/comment-page-1

http://www.uml.org.cn/zjjs/2015021310.asp


https://www.cnblogs.com/winter-cn/archive/2012/09/16/2687184.html