# SVG

## 什么是SVG

SVG全称Scalable Vector Graphics，中文译为**可缩放的矢量图形**，可缩放大家都比较清楚，**矢量的意思就是缩放不会导致图像失真。**

## 为什么使用SVG

* SVG能够在缩放时不失真，这避免了传统图标在缩放时，模糊的问题

## 你的SVG模糊？

svg模糊的原因一般出现在设计过程中，对于svg的设计，有如下要求：

* 设计SVG时要对齐网格

* 按照设计的比例进行展示

* 尝试调整shape-rendering属性


## 如何定制svg的颜色

以颜色是fill实现为例
,设计给的代码一般如下
```svg
<path fill="#fff" />>

or
<style style="fill:#fff">
```

也就是svg也是DOM实现的一种，可以使用内联元素，可以用以下方式修改svg的颜色

### 更改内联样式

就想平常改变DOM一样改变即可

```svg
<path fill="#fff" />>

将白色改为黑色

<path fill="#000" />>
```

### 使用currentColor实现更强大的动态颜色

```svg
<path fill="currentColor" />>
```

将我们上面的具体颜色改为currentColor,然后外部设计我们想要的color属性即可，非常的方便，这样有什么后续变动，只需要改css即可

甚至我们可以使用此属性实现一个动态双色svg


```svg
<svg id="jzm-m10" viewBox="0 0 40 40"> 
  <g> 
    <path d="M20,23c-2.2,0-4.1-1.3-5-2c0,0.8,0,6,0,6h10c0,0,0-5.6,0-6C24.1,21.7,22.2,23,20,23z" fill="currentColor"></path> 
    <g> 
      <path d="M24.5,29h-9c-1.4,0-2.5-1.1-2.5-2.5V19h-0.5c-1.4,0-2.5-1.1-2.5-2.5v-3c0-1.4,1.1-2.5,2.5-2.5h3.6
      c0.5,0,0.9,0.3,1,0.8c0.3,1.3,1.5,2.2,2.9,2.2s2.6-0.9,2.9-2.2c0.1-0.4,0.5-0.8,1-0.8h3.6c1.4,0,2.5,1.1,2.5,2.5v3
      c0,1.4-1.1,2.5-2.5,2.5H27v7.5C27,27.9,25.9,29,24.5,29z M12.5,13c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5H14
      c0.6,0,1,0.4,1,1v8.5c0,0.3,0.2,0.5,0.5,0.5h9c0.3,0,0.5-0.2,0.5-0.5V18c0-0.6,0.4-1,1-1h1.5c0.3,0,0.5-0.2,0.5-0.5v-3
      c0-0.3-0.2-0.5-0.5-0.5h-2.9c-0.8,1.8-2.6,3-4.6,3s-3.8-1.2-4.6-3H12.5z"></path>
  </g> 
  </g> 
</svg>
```
如上图在第一个path fill值给为currentColor,然后第二个path去除fill

![nlZCad.png](https://s2.ax1x.com/2019/09/07/nlZCad.png)


```css
默认样式
.svg  {
  fill: #77809F;
  color: #dae0f8;
}
```
![nlZesS.png](https://s2.ax1x.com/2019/09/07/nlZesS.png)

```css
hover样式
.svg:hover {
  fill: #fff;
  color: #5874d8
}

```

![nlZ6sO.png](https://s2.ax1x.com/2019/09/07/nlZ6sO.png)


### 动态三色及以上

动态单色和双色我们很容易就能实现，三色的话，我们也可以借助变量的方式实现，使用css变量，然后需要动态改变svg颜色时，改变css变量即可

## svg的坑点

* 如果**使用了SVGdefs定义的渐变色**，**不要让symbol display none,否则渐变色没有生效**

* 设计给的svg**需要去除title属性，否则会出现提示**