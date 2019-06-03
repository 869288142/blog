#####file-loader

**解决的问题**:
我们会经常在页面引入图片(包括img的src和background的url),webpack打包后，CSS会被打包，之前引用的目录结构已经不存在了，会导致图片资源引入失败，file-loader能够指定图片存放路径，然后自动修改img中的src和background中的url。