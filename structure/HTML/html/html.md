# html 
标记简史
  早期人们结合字体和粗体标签来创建视觉效果。表格成为布局工具，使得代码结构不明确，很难理解
  然后CSS将外观从HTML中分离出去，使得HTML专注其语义性

语义性的重要性:
1.有意义的标记自带了一些语义性的样式，一定程序上减少了我们需要编写的样式代码
2.有意义的标记可以简便地将元素调整为你所需的样式，它在文档中添加结构并创建一个底层框架。可以直接设置元素的样式，而不需要添加其他标识符，因此避免了不必要的代码膨胀。
3.更容易处理，例如需要修改页面中的一个引用，如果这个引用加上了正确的标记，那么很容易搜索代码，找到第一个块引用元素，但是，如果这个引用只是另一个段落元素标签，就很难寻找了
4.有利于搜索引擎检索，比如h1会被重视，因为它代表标题，屏幕阅读器的用户可以依靠标题进行页面导航

减少不必要的DIV，div用于在没有元素可以实现区域分割的情况下使用