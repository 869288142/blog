const httpSidebar = require('./http')
const htmlSidebar = require('./html')
const cssSidebar = require('./css')
const jsSidebar = require('./js')

const vueSidebar = require('./vue')
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
          { text: 'Vue', link: '/Vue/' }
        ]
      }
    ],
    sidebar: {
      ...htmlSidebar,
      ...cssSidebar,
      ...jsSidebar,
      ...vueSidebar,
      ...httpSidebar,
      ...browserSidebar
    }
  },
  sidebarDepth: 2,
  base: "/blog/",
  dest: "./docs"
}

module.exports = config