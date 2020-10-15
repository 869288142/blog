const collapsable = true
module.exports = {
  '/HTTP/': [
    {
      title: '协议', // 侧边栏名称
      collapsable,
      children: [
        '/HTTP/http协议',
        '/HTTP/get和post区别',
        '/HTTP/base64编码',
        '/HTTP/URL编码',
        '/HTTP/缓存',
      ]
    },
  ]
}
delete require.cache[module.filename]