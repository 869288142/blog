# 协议
特点:
* 支持客户/服务器模式
* 简单快速
* 灵活
* 无连接*  每次连接只处理一个请求，完成后就断开 Keep-Alive
* 无状态*  无法得知客户端状态  session

HTTP请求组成

* 请求行（request line）--->  方法 URL http版本
* 请求头部（header）
* 空行
* 请求数据 ---> 参数



HTTP响应
* 状态行 ---> http版本 状态码 原因短语 
* 消息报头
* 空行
* 响应正文



## 头部类型：

1. 通用头部

    Connection：允许客户端和服务器指定与请求/响应连接有关的选项

    Date：提供日期和时间标志，说明报文是什么时间创建的

    MIME-Version：给出了发送端使用的MIME版本

    Trailer：如果报文采用了分块传输编码方式，就可以用这个首部列出位于报文拖挂部分的首部集合

    Transfer-Encoding：告知接收端为了保证报文的可靠传输，对报文采用了什么编码方式

    Update：给出了发送端可能想要“升级”使用的新版本或协议

    Via：显示了报文经过的中间节点(代理、网关)

    Cache-Control：用于随报文传送缓存指示

2. 请求头部

    Client-IP：提供了运行客户端的机器的IP地址

    From：提供了客户端用户的E-mail地址

    Host：给出了接收请求的服务器的主机名和端口号

    Referer：提供了包含当前请求URI的文档的URL

    UA-Color：提供了与客户端显示器的显示颜色有关的信息

    UA-CPU：给出了客户端CPU的类型或制造商

    UA-OS：给出了运行在客户端机器上的操作系统名称及版本

    UA-Pixels：提供了客户端显示器的像素信息

    User-Agent：将发起请求的应用程序名称告知服务器       

    Accept：告诉服务器能够发送哪些媒体类型

    Accept-Charset：告诉服务器能够发送哪些字符集

    Accept-Encoding：告诉服务器能够发送哪些编码方式

    Accept-Language：告诉服务器能够发送哪些语言

    TE：告诉服务器可以使用那些扩展传输编码

    Expect：允许客户端列出某请求所要求的服务器行为

    Range：如果服务器支持范围请求，就请求资源的指定范围

    If-Match：如果实体标记与文档当前的实体标记相匹配，就获取这份文档

    If-Modified-Sinec：除非在某个指定的日期之后资源被修改过，否则就限制这个请求

    If-None-Match：如果提供的实体标记与当前文档的实体标记不相符，就获取文档

    If-Range：允许对文档的某个范围进行条件请求

    If-Unmodified-Since：除非在某个指定日期之后资源没有被修改过，否则就限制这个请求

    Authorization：包含了客户端提供给服务器，以便对其自身进行认证的数据

    Cookie：客户端用它向服务器传送数据

    Cookie2：用来说明请求端支持的cookie版本

    Max-Forward：在通往源端服务器的路径上，将请求转发给其他代理或网关的最大次数

    Proxy-Authorization：这个首部在与代理进行认证时使用的

    Proxy-Connection：这个首部是在与代理建立连接时使用的

3. 响应头部

    Age：(从最初创建开始)响应持续时间

    Public：服务器为其资源支持的请求方法列表

    Retry-After：如果资源不可用的话，在此日期或时间重试

    Server：服务器应用程序软件的名称和版本

    Title：对HTML文档来说，就是HTML文档的源端给出的标题

    Warning：比原因短语更详细一些的警告报文

    Accept-Ranges：对此资源来说，服务器可接受的范围类型

    Vary：服务器会根据这些首部的内容挑选出最适合的资源版本发送给客户端

    Proxy-Authenticate：来自代理的对客户端的质询列表

    Set-Cookie：在客户端设置数据，以便服务器对客户端进行标识

    Set-Cookie2：与Set-Cookie类似

    WWW-Authenticate：来自服务器的对客户端的质询列表

4. 实体头部

    实体首部：描述主体的长度和内容，或者资源自身

    Allow：列出了可以对此实体执行的请求方法

    Location：告知客户端实体实际上位于何处，用于将接收端定向到资源的位置(URL)上去

    Content-Base：解析主体中的相对URL时使用的基础URL

    Content-Encoding：对主体执行的任意编码方式

    Content-Language：理解主体时最适宜使用的自然语言

    Content-Length：主体的长度

    Content-Location：资源实际所处的位置

    Content-MD5：主体的MD5校验和

    Content-Range：在整个资源中此实体表示的字节范围

    Content-Type：这个主体的对象类型

    ETag：与此实体相关的实体标记

    Expires：实体不再有效，要从原始的源端再次获取实体的日期和时间

    Last-Modified：这个实体最后一次被修改的日期和时间


## HTTP方法

    GET： 用于请求访问已经被URI（统一资源标识符）识别的资源，可以通过URL传参给服务器。

    POST：用于传输信息给服务器，主要功能与GET方法类似，但一般推荐使用POST方式。

    PUT： 传输文件，报文主体中包含文件内容，保存到对应URI位置。
    
    HEAD： 获得报文首部，与GET方法类似，只是不返回报文主体，一般用于验证URI是否有效。

    DELETE：删除文件，与PUT方法相反，删除对应URI位置的文件。

    OPTIONS：查询相应URI支持的HTTP方法。


## HTTP状态码
**概览**

    1xx：指示信息--表示请求已接收，继续处理

    2xx：成功--表示请求已被成功接收、理解、接受

    3xx：重定向--要完成请求必须进行更进一步的操作

    4xx：客户端错误--请求有语法错误或请求无法实现

    5xx：服务器端错误--服务器未能实现合法的请求













