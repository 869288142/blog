const collapsable = true
module.exports = {
  '/HTML/': [
    {
      title: 'html', // 侧边栏名称
      collapsable,
      children: ['/HTML/html/html']
    },
    {
      title: 'html5', // 侧边栏名称
      collapsable,
      children: ['/HTML/html5/特性速览']
    },
  ]
}

delete require.cache[module.filename]