# pointer-event

最近在一个组件发现button禁用时，不只是单纯显示禁用的样式，比如灰色和禁选图标,而且点击时事件也不会触发

## 定义

pointer-events 指定元素对鼠标事件的处理方式

## 属性值

这里大部分值是应用于SVG的，暂时没涉及到，只看通用部分

pointer-events: auto;
pointer-events: none;


### auto

默认值

### none

**元素永远不会成为鼠标事件的target**。但是，当其后代元素的pointer-events属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在**捕获或冒泡阶段触发父元素的事件侦听器**。