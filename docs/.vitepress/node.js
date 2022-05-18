const collapsable = true

module.exports = {
  '/node/': [
    {
      text: 'package Manager', // 侧边栏名称
      collapsable,
      children: [
        '/node/包管理器/pm',
        '/node/包管理器/npm还是yarn',
        '/node/包管理器/npm版本知识',
      ]
    },
  ]
}

delete require.cache[module.filename]