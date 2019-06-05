# height

## auto


## 100%
对于height属性，如果父元素height为auto，只要子元素在文档流中，其百分比值完全被忽略了。
文档规范
`CSS2.1中如果包含块的高度没有显式指定，并且该元素不是绝对定位，则计算值为auto`
**解决方案**
1. 设置显式的高度 具体值或者html、body100%
2. 使用绝对定位


## max-height
默认值 none
## min-height
默认值 auto


### max|min-height 与height 作用细节
1. 权重可以覆盖!important
2. min超过max的话，以min胜出

[展开收起技术](https://demo.cssworld.cn/3/3-2.php)