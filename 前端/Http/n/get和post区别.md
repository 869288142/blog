一直以来很好奇为什么get只可以传k-v，而post可以传对象

然后今天去阅读了axios parsebody co-body rawbody 的源码发现


前台：




后台：

POST的数据是传到后台是写到了Stream里，需要取出buffer，然后转化为字符串，然后再解析对应的Content-type类型，比如application/json被解析为JSON对象

get是放在url上，后台直接解析这个字符串，也可以再把这个字符串拼装成以&分割的对象，缺点是参数都失去原有类型，都为字符串，实质上任何方法在url加参数，都能通过这种解析方式得到

