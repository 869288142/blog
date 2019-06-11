# flex
flex：

概念：

flex容器：

display:flex

flex项:


轴:水平的主轴、垂直的交叉轴

容器的属性：

**flex-direction(决定主轴的方向、即项目的排列方向)**

* row(默认值): 主轴为水平方向，起点在左端

* row-reverse: 主轴为水平方向，起点在右端

* column: 主轴为垂直方向，起点在上面

* column-reverse: 主轴为垂直方向，起点在下面

**flex-wrap(决定如何换行，默认是对item缩放)**
* nowrap(默认值)： 不换行
* warp: 换行，第一行在上方
* wrap-reverse: 换行，第一行在下方

**flex-flow(flex-direction、flex-wrap的简写)**
* \<felx-direction> || \<flex-wrap>

**justify-content(item在主轴上的对齐方式)**
* flex-start: 左对齐
* flex-end: 右对齐
* center: 居中
* space-between: 两端对齐,每个项目之间间隔相等
* space-around: 每个项目的两侧间隔相等

**align-items(定义项目在交叉轴上如何对齐)**
* strech(默认值)： 如果项目未设置高度或为auto，讲占满容器高度
* flex-start: 交叉轴的起点对齐
* flex-end: 交叉轴的终点对齐
* center: 交叉轴的中点对齐
* baseline： 项目的第一行文字的基线对齐

**align-content(定义多根轴线，多行)**


项目属性

**order(定义项目的排列顺序，值越小，排列越靠前，默认为0)**
* order: \<integer>

**lex-grow(定义项目的放大比例，默认为0，如果存在剩余空间，也不放大)**
* flex-grow: \<default> 

**flex-shrink(定义项目的缩小比例，默认为1，即空间不足时，会缩小该项目)**
* flex-shrink: \<number>

**flex-basis(定义分配多余空间前，项目占据的主轴空间，)**
* flex-basis：\<length> | auto(默认值)

**flex(flex-grow、flex-shrink、flex-basis简写)**
* auto(* * auto)
* none(* * auto)

**align-self(设置单个项目的对齐方式，可覆盖align-items属性)**
* auto(默认值，继承父元素的align-items)
* 其余与algin-items一致

[flex详细讲解](https://www.runoob.com/w3cnote/flex-grammar.html)

[flex应用例子](https://www.cnblogs.com/lynnmn/p/6262941.html)