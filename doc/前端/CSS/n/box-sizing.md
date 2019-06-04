盒模型box-sizing:

取值

1.content-box 默认值，标准盒模型，设置宽度为内容宽度，实际宽度为左右边距加上左右边框加上左右填充再加上内容宽度

2.border-box 设置宽度等于元素内容宽度，content包含了元素的border和padding

3.inherit 继承父元素的盒模型模式

兼容 iE8+


解决问题：
边框和填充被计算到盒模型内，不会破坏布局