const collapsable = true

module.exports = {
  '/CSS/': [
    {
      title: 'CSS世界', // 侧边栏名称
      collapsable,
      children: ['/CSS/CSS世界/世界观']
    },
    {
      title: '盒模型', // 侧边栏名称
      collapsable,
      children: [
        '/CSS/盒模型/width',
        '/CSS/盒模型/height',
        '/CSS/盒模型/content',
        '/CSS/盒模型/padding',
        '/CSS/盒模型/border',
        '/CSS/盒模型/margin'
      ]
    },
    {
      title: '流', // 侧边栏名称
      collapsable,
      children: [
        '/CSS/流/重新认识bolck和inline-block',
        '/CSS/流/内联元素',
        '/CSS/流/内联元素并列',
        '/CSS/流/内联元素垂直居中',
        '/CSS/流/破坏流',
        '/CSS/流/定位',
        '/CSS/流/层叠',
      ]
    },
    {
      title: '选择器', // 侧边栏名称
      collapsable,
      children: [
        '/CSS/选择器/first-child、last-child误解',
        '/CSS/选择器/选择器整理',
      ]
    },
    {
      title: '常见布局', // 侧边栏名称
      collapsable,
      children: [
        '/CSS/常见布局/居中方案',
        '/CSS/常见布局/单栏布局',
        '/CSS/常见布局/两栏布局',
        '/CSS/常见布局/三栏布局',
        '/CSS/常见布局/flex',
      ]
    },
    {
      title: '文本', // 侧边栏名称
      collapsable,
      children: [
        '/CSS/文本/文本',
      ]
    },
    {
      title: '装饰与美化', // 侧边栏名称
      collapsable,
      children: [
        '/CSS/装饰与美化/装饰与美化',
        '/CSS/装饰与美化/元素的显示与隐藏',
      ]
    },
  ]
}

delete require.cache[module.filename]