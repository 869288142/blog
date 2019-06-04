flex 用法
container display flex
item  无需区分块级元素 margin: 0 auto(自身) 行内或者内联样式 text-align center (上级元素)  flex  justify-content center  主轴方向居中

这里有一个属性用于指定主轴方向 flex-direction column 可以将默认在水平方向的主轴旋转到垂直方向

垂直 交叉轴 默认从上到下 与主轴始终垂直 align-items  center 居中
垂直居中块级元素和行内、内联元素都很麻烦 行内元素 需要设置一个同级元素 基线居中
我们可以设置一个span 高度为100% 然后设置vertical-align middle 设置需要的元素为vertical-align middle  

块级元素可以设置
.parent{
  position: relative
}
.child{
  position: absolute
  left: 50%
  top: 50%
  然后将子元素自身移动自身长、宽一半的距离
}