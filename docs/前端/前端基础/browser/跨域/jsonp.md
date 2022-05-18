# jsonp
`jsonp` -> `JSON with Padding`

## jsonp跨域原理

利用`script`标签无跨域限制，向服务器发起请求，服务器将回调函数和参数拼接成字符串，运行设置的全局函数即可。