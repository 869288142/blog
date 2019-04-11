各种花里花俏的水平、垂直居中方案 *


常见三栏布局

```html
<body>
  <h3>实现三列宽度自适应布局</h3>

  <div id="left">我是左边</div>

  <div id="right">我是右边</div>

  <div id="center">我是中间</div>
</body>

html,body{ margin: 0px;width: 100%; }   h3{height: 100px;margin:20px 0 0;}  
#left,#right{width: 200px;height: 200px; background-color: #ffe6b8;position: absolute;top:120px;}  
#left{left:0px;}   #right{right: 0px;}  
#center{margin:2px 210px ;background-color: #eee;height: 200px; }
```

盒模型

选择器种类、表达式权重

优雅降级、渐进增强

定位

浮动、清除浮动
.fix{zoom:1;}
.fix:after{display:block; content:'clear'; clear:both; line-height:0; visibility:hidden;}


flex

BFC

https://github.com/yygmind/blog/issues/3

绝对定位 + 中间版块不给宽度
两侧浮动 + 中间自动撑开（使用 calc 动态计算宽度，设置对应宽度的 margin）
flex，左右设置 flex-basis，中间设置 flex-gro

采用了 absolute，导致父元素脱离了文档流，那所有的子元素也需要脱离文档流。如果页面复杂，那开发的难度可想而知
利用浮动  当中间内容高于两侧时，两侧高度不会随中间内容变高而变高
弹性盒子布局(flex)
利用负边距和浮动,实现起来比较复杂
利用网格布局


BFC等原理

BFC 的原理
其实也就是 BFC 的渲染规则（能说出以下四点就够了）。包括：

BFC 内部的子元素，在垂直方向，边距会发生重叠。
BFC在页面中是独立的容器，外面的元素不会影响里面的元素，反之亦然。
BFC区域不与旁边的float box区域重叠。（可以用来清除浮动带来的影响）。
计算BFC的高度时，浮动的子元素也参与计算。


如何生成BFC

方法1：overflow: 不为visible，可以让属性是 hidden、auto。【最常用】
方法2：浮动中：float的属性值不为none。意思是，只要设置了浮动，当前元素就创建了BFC。
方法3：定位中：只要posiiton的值不是 static或者是relative即可，可以是absolute或fixed，也就生成了一个BFC。
方法4：display为inline-block, table-cell, table-caption, flex, inline-flex


BFC应用

阻止margin重叠
可以包含浮动元素 —— 清除内部浮动(清除浮动的原理是两个div都位于同一个 BFC 区域之中)
自适应两栏布局
可以阻止元素被浮动元素覆盖
