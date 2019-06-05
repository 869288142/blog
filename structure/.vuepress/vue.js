const collapsable = true
module.exports =  {
  '/Vue/': [
    {
      title: '思想', // 侧边栏名称
      collapsable,
      children: ['/Vue/思想/复用', '/Vue/思想/DOM异步更新队列']
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
        '/Vue/组件/scoped',
        '/Vue/组件/v-bind',
        '/Vue/组件/native修饰符',
        '/Vue/组件/组件通信'
      ]
    },
    {
      title: '生命周期', // 侧边栏名称
      collapsable,
      children: ['/Vue/生命周期/vue生命周期', '/Vue/生命周期/再解生命周期']
    },
    {
      title: '状态树', // 侧边栏名称
      collapsable,
      children: []
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
  ]
}