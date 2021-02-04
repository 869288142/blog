# overflow

overflow是一个我们在需要不换行省略号、或者阻止内容溢出常用的属性,在工作上，遇到了一些很有趣的问题，在此深度学习一下overflow

```css
/* 单行省略号 */
white-space: nowrap
overflow: hidden
text-overflow: ellipsis

/* 隐藏溢出的内容 */
overflow: hidden
```

## overflow定义

CSS uses the term overflow to describe the contents of a box that extend outside one of that box’s edges (i.e., its content edge, padding edge, border edge, or margin edge)

CSS采用overflow来描述盒子中的内容溢出盒子边界的行为，盒子边界分为 content edge padding edge border edge margin edge

## overflow裁剪细节


### 作用对象

限制元素内部内容可视区域

### 作用范围

This value indicates that the box’s content is clipped to its padding box 

官方上说的是以作用元素的padding-area作为采用作为裁剪范围，我们验证一下

![KKPqcF.png](https://s2.ax1x.com/2019/10/20/KKPqcF.png)

我们在父元素处设置10px的border，设置overflow: hidden,此border没有被裁剪，而同时的padding 10px被裁剪了,所以官方说的裁剪是以padding-box为区域是没有错的。

## overflow hidden 对子元素的影响

### 子元素为blcok无定宽

此时子元素是自适应的，padding、border、margin会压缩content的空间


![KKmaX6.png](https://s2.ax1x.com/2019/10/20/KKmaX6.png)

通过上图可以看到我们设置的padding、border、margin不会增加子元素的实际宽度，而是去缩减内容区的宽度

### 子元素为blcok定宽

此时子元素是非自适应的，padding、border、margin不会压缩content的空间，实际宽度会大于父元素

![KKn6VU.png](https://s2.ax1x.com/2019/10/20/KKn6VU.png)

设置一个大于父元素的宽度，查看子元素的宽度，此时元素的宽度会根据padding、border、margin增加

### 子元素为flex-item

此时子元素无论定宽与否都是非自适应的，padding、border、margin不会压缩content的空间，实际宽度会大于父元素，但是在overflow表现下，与block非定宽表现一致

![KK8p1e.png](https://s2.ax1x.com/2019/10/20/KK8p1e.png)



