block 不是指display block 而是指会自动换行的元素
除了block还有 table、list-item

使用“附加盒子” 显示list-item的符号

外在盒子负责一行显示还是换行显示
内在盒子负责宽高

使用两个盒子，及外在盒子、内在盒子来表示inline-block

inline-block元素由外在的内联盒子和内在的块级容器盒子组成
block 元素由外在的块级盒子和内在的块级容器盒子组成
inline 内外均为内联盒子

width、height 作用在内盒子

外部尺寸、

内部尺寸 包裹性 首选最小宽度 最大宽度

宽度分离原则 width与 padding、border、margin共存

box-sizing content-box border-box

border-sizing 初衷是为了解决替换元素宽度的自适应问题

重置盒子input、textarea、img、video、object

为何height：100%无效

如何使height100%生效
1.为父级显式设置高度 content-box
2.使用绝对定位   padding-box

min-width、height初始值 auto
max-width、height初始值为none  因为max-width 会覆盖width


替换元素 
外观不受CSS影响 appearance 属性可以改变
有自己尺寸

替换元素尺寸计算 内容尺寸、HTML属性尺寸、CSS尺寸

content 可以将非替换元素更改为替换元素

content内容生成技术
1.content 辅助元素生成 
.element:before {
  content: ""
}

  清除浮动 .clear:after: {
    content: '';
    display: block;
    clear: both;
  }

2.字符内容生成


padding 无负值  百分比值相对于宽度计算

父元素为内联元素 padding 会出现断行现象

margin

概念：
元素尺寸 border-box offsetHeight
元素内部尺寸 padding-box  clientWidth
元素外部尺寸 margin-box

充分利用空间时 margin会改变元素宽度




与margin: auto相关事实
1.不设置width或者height，也会自动填充
div
2.不设置width或者height，也会自动填充对应方位 
设置宽度则会失效
div {
  position: absolute;
  left:0;
  right:0;
}

margin解决的问题就是为了填充闲置空间

margin填充规则：
1.一侧定制，一侧auto auto为剩余空间大小
margin-left:auto 右对齐
2.两则都是auto，则平分空间

margin无效:

1.display inline 非替换元素的垂直margin无效

2.margin合并时

3.绝对定位的非定位方位margin“无效”，即top、bottom、left、right没有定义的方位，此方位无效

4.定高容器子元素margin-bottom、定宽子元素margin-right失效

6 内联特性导致margin失效


border border-width不支持百分比 默认medium 3px 

border-style 
默认值 none
solid
double 
三道杠
.icon-menu {
  width: 120px;
  height: 20px;
  border-top: 60px double;
  border-bottom: 20px solid;
}

border-color 没指定时采用color作为颜色

照片框
.add {
  color: #ccc;
  border: 2px dashed
}

.add:before {
  border-top: 10px solid
}

.add:after {
  border-left: 10px solid
}

.add:hover {
  color: #06C
}


三角形

div {
  width: 0
  border: 10px solid
  border:  #f30 transparent transparent
}


等高布局

字母x  x-height 是中线(medium)和基线(baseline)

middle 是基线上1/2 x-height 高度

ex 图片和文字居中




BFC 不影响其他元素的独立块

触发BFC 

float 不为none
overflow 为auto、scroll、hidden
display table-cell table-caption inline-block
position 不为relative static
