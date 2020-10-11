const collapsable = true

module.exports = {
  '/node/': [
    {
      title: 'package Manager', // 侧边栏名称
      collapsable,
      children: ['/node/包管理器/pm','/node/包管理器/npm还是yarn']
    },
  ]
}

delete require.cache[module.filename]