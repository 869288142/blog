# border

## border-width不支持百分比

1. 语义上，边框不应该根据包裹的物体大小变化

2. 没有使用场景

## border-width关键字

thin 1px
medium 3px
thick 4px

## border-style

默认值 none

solid

dashed 虚框

dotted IE8实现原点

double

**实现三道杠**

```css
width: 120px;
height: 20px;
border-top: 60px double;
border-bottom: 20px solid;
```

## border-color 

默认值 `color`

## border技巧

1.增加点击区域大小，使用透明border

2.三角形绘制

3.等高布局

```css
  .box {
    border-left: 150px solid #333;
    background-color: #f0f3f9;
  }
  .box > nav {
    width: 150px;
    margin-left: -150px;
    float: left;
  }
  .box > section {
    overflow: hidden;
  }
```