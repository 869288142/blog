const collapsable = true

module.exports = {
  '/前端/前端基础/HTML/': [
    {
      text: 'html', // 侧边栏名称
      collapsable,
      children: ['/前端/前端基础/HTML/HTML']
    },
    {
      text: 'html5', // 侧边栏名称
      collapsable,
      children: ['/HTML/html5/特性速览']
    },
  ]
}

delete require.cache[module.filename]