# padding
## padding特性

内联元素的padding在视觉层和布局上无影响，可以用来在不改变布局情况下,比如以下应用：

**增加点击区域**
```css
article a {
  padding: 0.25em 0;
}
```

**实现高度可控的分割线**
```html
a + a:before {
  content: "";
  font-size: 0;
  padding: 10px 3px 1px;
  margin-left: 6px;
  border-left: solid 1px gray;
}
<a>登录</a> <a>注册</a>
```

## padding的百分比值

1. **不支持负值**

2. **支持百分比值**，但是其百分比值永远相对与宽度计算

这点可以实现自适应图像如
```css
  div {
    padding: 50%;
  }
```

## padding与图形绘制

padding和background-clip配合，可以实现一些图形的绘制效果。

**三横线**
```css
.icon-menu {
  display: inline-block;
  width: 140px;
  height: 10px;
  padding: 35px 0;
  border-top: 10px solid;
  border-bottom: 10px solid;
  background-color: currentColor;
  background-clip: content-box;
}
```
**双层原点效果**
```css
.icon-dot {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 50%;
  border: 10px solid;
  background-color: currentColor;
  background-clip: content-box;
}
```