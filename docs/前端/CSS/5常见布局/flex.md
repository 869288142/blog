flex：

概念：

flex容器：

    display:flex

flex项:


轴:水平的主轴、垂直的交叉轴

容器的属性：

    1. flex-direction(决定主轴的方向、即项目的排列方向)
        1.1 row(默认值): 主轴为水平方向，起点在左端
        1.2 row-reverse: 主轴为水平方向，起点在右端
        1.3 column: 主轴为垂直方向，起点在上面
        1.4 column-reverse: 主轴为垂直方向，起点在下面

    2.flex-wrap(决定如何换行，默认是对item缩放)
        2.1 nowrap(默认值)： 不换行
        2.2 warp: 换行，第一行在上方
        2.3 wrap-reverse: 换行，第一行在下方

    3.flex-flow(flex-direction、flex-wrap的简写)
        3.1 <felx-direction> || <flex-wrap>

    4.justify-content(item在主轴上的对齐方式)
        4.1flex-start: 左对齐
        4.2flex-end: 右对齐
        4.3center: 居中
        4.4space-between: 两端对齐,每个项目之间间隔相等
        4.5space-around: 每个项目的两侧间隔相等

    5.align-items(定义项目在交叉轴上如何对齐)
        5.1strech(默认值)： 如果项目未设置高度或为auto，讲占满容器高度
        5.2flex-start: 交叉轴的起点对齐
        5.3flex-end: 交叉轴的终点对齐
        5.4center: 交叉轴的中点对齐
        5.5baseline： 项目的第一行文字的基线对齐

    6.align-content(定义多根轴线，多行)


项目属性

    1.order(定义项目的排列顺序，值越小，排列越靠前，默认为0)
        1.1order: <integer>

    2.flex-grow(定义项目的放大比例，默认为0，如果存在剩余空间，也不放大)
        2.1flex-grow: <default> 

    3.flex-shrink(定义项目的缩小比例，默认为1，即空间不足时，会缩小该项目)
        3.1flex-shrink: <number>

    4.flex-basis(定义分配多余空间前，项目占据的主轴空间，)
        4.4flex-basis：<length> | auto(默认值)

    5.flex(flex-grow、flex-shrink、flex-basis简写)
        5.1auto(1,1,auto)
        5.2none(0,0,auto)

    6.align-self(设置单个项目的对齐方式，可覆盖align-items属性)
        6.1auto(默认值，继承父元素的align-items)
        6.2其余与algin-items一致

[flex详细讲解](https://www.runoob.com/w3cnote/flex-grammar.html)

[flex应用例子](https://www.cnblogs.com/lynnmn/p/6262941.html)