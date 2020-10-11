const httpSidebar = require('./http')
const htmlSidebar = require('./html')
const cssSidebar = require('./css')
const jsSidebar = require('./js')
const vueSidebar = require('./vue')
const nodeSidebar = require('./node')
const collapsable = true
let browserSidebar = {
  '/browser/': [
    {
      title: 'ajax', // 侧边栏名称
      collapsable,
      children: ['/browser/ajax/ajax',]
    },
    {
      title: 'bom', // 侧边栏名称
      collapsable,
      children: []
    },
    {
      title: 'dom', // 侧边栏名称
      collapsable,
      children: ['/browser/dom/事件']
    },
    {
      title: '跨域', // 侧边栏名称
      collapsable,
      children: ['/browser/跨域/jsonp','/browser/跨域/跨域',]
    },
    {
      title: '存储', // 侧边栏名称
      collapsable,
      children: ['/browser/存储/存储']
    },
    {
      title: '开发者工具', // 侧边栏名称
      collapsable,
      children: ['/browser/调试技巧/开发者工具']
    },
    
  ]
}
let config = {
  themeConfig: {
    nav: [
      {
        text: '前端',
        items: [
          { text: 'browser', link: '/browser/' },
          { text: 'HTTP', link: '/HTTP/' },
          { text: 'HTML', link: '/HTML/' },
          { text: 'CSS', link: '/CSS/' },
          { text: 'JS', link: '/JS/' },
          { text: 'Vue', link: '/Vue/' },
          { text: 'node', link: '/node/' }
        ]
      }
    ],
    sidebar: {
      ...htmlSidebar,
      ...cssSidebar,
      ...jsSidebar,
      ...vueSidebar,
      ...httpSidebar,
      ...browserSidebar,
      ...nodeSidebar
    }
  },
  sidebarDepth: 3,
  base: "/blog/",
  dest: "./docs"
}

module.exports = config