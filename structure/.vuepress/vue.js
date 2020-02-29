const collapsable = true
module.exports =  {
  '/Vue/': [
    {
      title: '思想', // 侧边栏名称
      collapsable,
      children: [
        '/Vue/思想/复用', 
        '/Vue/思想/DOM异步更新队列',
        '/Vue/思想/遐想',
      ]
    },
    {
      title: '原理', // 侧边栏名称
      collapsable,
      children: ['/Vue/原理/响应式']
    },
    {
      title: '组件', // 侧边栏名称
      collapsable,
      children: [
        '/Vue/组件/模板',
        '/Vue/组件/scoped',
        '/Vue/组件/模板限制',
      ]
    },
    {
      title: '路由', // 侧边栏名称
      collapsable,
      children: ['/Vue/路由/路由原理','/Vue/路由/拦截登录',]
    },
    {
      title: '脚手架', // 侧边栏名称
      collapsable,
      children: [
        '/Vue/脚手架/3.0',
        '/Vue/脚手架/自动化注册全局组件',
        '/Vue/脚手架/跨域代理',
        '/Vue/脚手架/部署',
        '/Vue/脚手架/传递scss全局变量',
      ]
    },
    {
      title: '最佳实践', // 侧边栏名称
      collapsable,
      children: [
        '/Vue/最佳实践/Vue组件增强',
      ]
    },
    {
      title: '源码分析', // 侧边栏名称
      collapsable,
      children: [
        '/Vue/源码分析/组件/数据/props、attrs差异',
        '/Vue/源码分析/组件/数据/provide、inject',
        '/Vue/源码分析/组件/数据/class、style',
        '/Vue/源码分析/组件/事件/事件',
        '/Vue/源码分析/组件/插槽/slot、scopedSlot',
        '/Vue/源码分析/组件/模式/无状态组件',
        '/Vue/源码分析/组件/扩展/过滤器',
        '/Vue/源码分析/组件/扩展/生命周期',
        '/Vue/源码分析/组件/扩展/指令',
        '/Vue/源码分析/组件/扩展/组件引用',
      ]
    },
  ]
}
delete require.cache[module.filename]