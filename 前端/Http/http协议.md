特点:
1.支持客户/服务器模式
2.简单快速
3.灵活
4.无连接*  每次连接只处理一个请求，完成后就断开 Keep-Alive
5.无状态*  无法得知客户端状态 

cookie 4kb  服务器设置返回到客户端 连接时设置到请求头中发给服务器
session 保存在服务端，发送sessionId给客户端 ，用户凭借sessionId来操作自己的session，用cookie持久化





请求行（request line）、请求头部（header）、空行和请求数据四个部分组成

请求行 请求头 请求数据

请求行 方法 URL http版本

请求数据 参数

HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。

状态行 消息报头 响应正文(数据)

状态行 http版本 状态码 原因短语


头部：

通用头部
Connection：允许客户端和服务器指定与请求/响应连接有关的选项

Date：提供日期和时间标志，说明报文是什么时间创建的

MIME-Version：给出了发送端使用的MIME版本

Trailer：如果报文采用了分块传输编码方式，就可以用这个首部列出位于报文拖挂部分的首部集合

Transfer-Encoding：告知接收端为了保证报文的可靠传输，对报文采用了什么编码方式

Update：给出了发送端可能想要“升级”使用的新版本或协议

Via：显示了报文经过的中间节点(代理、网关)

Cache-Control：用于随报文传送缓存指示

请求头部

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

响应头部
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

实体头部

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













1、常用的HTTP方法有哪些？
GET： 用于请求访问已经被URI（统一资源标识符）识别的资源，可以通过URL传参给服务器。
POST：用于传输信息给服务器，主要功能与GET方法类似，但一般推荐使用POST方式。
PUT： 传输文件，报文主体中包含文件内容，保存到对应URI位置。
HEAD： 获得报文首部，与GET方法类似，只是不返回报文主体，一般用于验证URI是否有效。
DELETE：删除文件，与PUT方法相反，删除对应URI位置的文件。
OPTIONS：查询相应URI支持的HTTP方法。

2、GET方法与POST方法的区别
区别一：
get重点在从服务器上获取资源，post重点在向服务器发送数据；
区别二：
get传输数据是通过URL请求，以field（字段）= value的形式，置于URL后，并用"?"连接，多个请求数据间用"&"连接，如http://127.0.0.1/Test/login.action?name=admin&password=admin，这个过程用户是可见的；
post传输数据通过Http的post机制，将字段与对应值封存在请求实体中发送给服务器，这个过程对用户是不可见的；
区别三：
Get传输的数据量小，因为受URL长度限制，但效率较高；
Post可以传输大量数据，所以上传文件时只能用Post方式；
区别四：
get是不安全的，因为URL是可见的，可能会泄露私密信息，如密码等；
post较get安全性较高；
区别五：
get方式只能支持ASCII字符，向服务器传的中文字符可能会乱码。
post支持标准字符集，可以正确传递中文字符。

4、常见的HTTP相应状态码

返回的状态
1xx：指示信息--表示请求已接收，继续处理
2xx：成功--表示请求已被成功接收、理解、接受
3xx：重定向--要完成请求必须进行更进一步的操作
4xx：客户端错误--请求有语法错误或请求无法实现
5xx：服务器端错误--服务器未能实现合法的请求


200：请求被正常处理
204：请求被受理但没有资源可以返回
206：客户端只是请求资源的一部分，服务器只对请求的部分资源执行GET方法，相应报文中通过Content-Range指定范围的资源。
301：永久性重定向
302：临时重定向
303：与302状态码有相似功能，只是它希望客户端在请求一个URI的时候，能通过GET方法重定向到另一个URI上
304：发送附带条件的请求时，条件不满足时返回，与重定向无关
307：临时重定向，与302类似，只是强制要求使用POST方法
400：请求报文语法有误，服务器无法识别
401：请求需要认证
403：请求的对应资源禁止被访问
404：服务器无法找到对应资源
500：服务器内部错误
503：服务器正忙

100 "continue"
101 "switching protocols"
102 "processing"

200 "ok"
201 "created"
202 "accepted"
203 "non-authoritative information"
204 "no content"
205 "reset content"
206 "partial content"
207 "multi-status"
208 "already reported"
226 "im used"

300 "multiple choices"
301 "moved permanently"
302 "found"
303 "see other"
304 "not modified"
305 "use proxy"
307 "temporary redirect"
308 "permanent redirect"


400 "bad request"
401 "unauthorized"
402 "payment required"
403 "forbidden"
404 "not found"
405 "method not allowed"
406 "not acceptable"
407 "proxy authentication required"
408 "request timeout"
409 "conflict"
410 "gone"
411 "length required"
412 "precondition failed"
413 "payload too large"
414 "uri too long"
415 "unsupported media type"
416 "range not satisfiable"
417 "expectation failed"
418 "I'm a teapot"
422 "unprocessable entity"
423 "locked"
424 "failed dependency"
426 "upgrade required"
428 "precondition required"
429 "too many requests"
431 "request header fields too large"

500 "internal server error"
501 "not implemented"
502 "bad gateway"
503 "service unavailable"
504 "gateway timeout"
505 "http version not supported"
506 "variant also negotiates"
507 "insufficient storage"
508 "loop detected"
510 "not extended"
511 "network authentication required"