table元素是一个很常用的元素。但是在开发中，我也遇到了一些值得记录下来的问题及解决方案：

1.td内容溢出时，隐藏内容并且以省略号提示
```css
.hide-content{
    /* 不换行 */
    white-space: nowrap;
    /* 超出隐藏 */
    overflow: hidden;
    /* 超出部分文字用省略号代替 */
    text-overflow: ellipsis;
}
```

2.设置表头宽度，直接设置th的宽度是无效的，因为它是基于自动计算
```css
.fixed-table{
    /* 设置固定表头表格布局算法 */
    table-layout: fixed;
}
<!-- 将表格布局算法切换到固定布局算法即可在th上设置width来固定宽度 -->
```
