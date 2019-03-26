详情请看阮大大的bolg
[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

    option请求带来的最大问题就是，如果后台没有允许option请求，那么这个复杂请求是不成功的，此时可以采用jQuery的$.ajax来发起简单请求，其实核心就是理解复杂请求出现的条件，这里要注意的就是axios的默认Content-Type  