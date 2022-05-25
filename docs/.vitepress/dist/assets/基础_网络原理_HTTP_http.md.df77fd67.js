import{_ as t,c as e,o as n,a as p}from"./app.a3c81315.js";const g='{"title":"\u534F\u8BAE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5934\u90E8\u7C7B\u578B\uFF1A","slug":"\u5934\u90E8\u7C7B\u578B\uFF1A"},{"level":2,"title":"HTTP\u65B9\u6CD5","slug":"http\u65B9\u6CD5"},{"level":2,"title":"HTTP\u72B6\u6001\u7801","slug":"http\u72B6\u6001\u7801"},{"level":2,"title":"URL\u7F16\u7801","slug":"url\u7F16\u7801"},{"level":3,"title":"\u539F\u56E0","slug":"\u539F\u56E0"},{"level":3,"title":"\u4FDD\u7559\u5B57\u7B26\u4E0E\u672A\u4FDD\u7559\u5B57\u7B26","slug":"\u4FDD\u7559\u5B57\u7B26\u4E0E\u672A\u4FDD\u7559\u5B57\u7B26"},{"level":3,"title":"\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26","slug":"\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26"},{"level":3,"title":"\u5185\u7F6E\u7F16\u7801\u65B9\u6CD5","slug":"\u5185\u7F6E\u7F16\u7801\u65B9\u6CD5"},{"level":3,"title":"encodeURI\u4E0EencodeURIComponent \u533A\u522B","slug":"encodeuri\u4E0Eencodeuricomponent-\u533A\u522B"}],"relativePath":"\u57FA\u7840/\u7F51\u7EDC\u539F\u7406/HTTP/http.md"}',a={},o=p(`<h1 id="\u534F\u8BAE" tabindex="-1">\u534F\u8BAE <a class="header-anchor" href="#\u534F\u8BAE" aria-hidden="true">#</a></h1><p>\u7279\u70B9:</p><ul><li>\u652F\u6301\u5BA2\u6237/\u670D\u52A1\u5668\u6A21\u5F0F</li><li>\u7B80\u5355\u5FEB\u901F</li><li>\u7075\u6D3B</li><li>\u65E0\u8FDE\u63A5* \u6BCF\u6B21\u8FDE\u63A5\u53EA\u5904\u7406\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u5B8C\u6210\u540E\u5C31\u65AD\u5F00 Keep-Alive</li><li>\u65E0\u72B6\u6001* \u65E0\u6CD5\u5F97\u77E5\u5BA2\u6237\u7AEF\u72B6\u6001 session</li></ul><p>HTTP\u8BF7\u6C42\u7EC4\u6210</p><ul><li>\u8BF7\u6C42\u884C\uFF08request line\uFF09---&gt; \u65B9\u6CD5 URL http\u7248\u672C</li><li>\u8BF7\u6C42\u5934\u90E8\uFF08header\uFF09</li><li>\u7A7A\u884C</li><li>\u8BF7\u6C42\u6570\u636E ---&gt; \u53C2\u6570</li></ul><p>HTTP\u54CD\u5E94</p><ul><li>\u72B6\u6001\u884C ---&gt; http\u7248\u672C \u72B6\u6001\u7801 \u539F\u56E0\u77ED\u8BED</li><li>\u6D88\u606F\u62A5\u5934</li><li>\u7A7A\u884C</li><li>\u54CD\u5E94\u6B63\u6587</li></ul><h2 id="\u5934\u90E8\u7C7B\u578B\uFF1A" tabindex="-1">\u5934\u90E8\u7C7B\u578B\uFF1A <a class="header-anchor" href="#\u5934\u90E8\u7C7B\u578B\uFF1A" aria-hidden="true">#</a></h2><ol><li><p>\u901A\u7528\u5934\u90E8</p><p>Connection\uFF1A\u5141\u8BB8\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u6307\u5B9A\u4E0E\u8BF7\u6C42/\u54CD\u5E94\u8FDE\u63A5\u6709\u5173\u7684\u9009\u9879</p><p>Date\uFF1A\u63D0\u4F9B\u65E5\u671F\u548C\u65F6\u95F4\u6807\u5FD7\uFF0C\u8BF4\u660E\u62A5\u6587\u662F\u4EC0\u4E48\u65F6\u95F4\u521B\u5EFA\u7684</p><p>MIME-Version\uFF1A\u7ED9\u51FA\u4E86\u53D1\u9001\u7AEF\u4F7F\u7528\u7684MIME\u7248\u672C</p><p>Trailer\uFF1A\u5982\u679C\u62A5\u6587\u91C7\u7528\u4E86\u5206\u5757\u4F20\u8F93\u7F16\u7801\u65B9\u5F0F\uFF0C\u5C31\u53EF\u4EE5\u7528\u8FD9\u4E2A\u9996\u90E8\u5217\u51FA\u4F4D\u4E8E\u62A5\u6587\u62D6\u6302\u90E8\u5206\u7684\u9996\u90E8\u96C6\u5408</p><p>Transfer-Encoding\uFF1A\u544A\u77E5\u63A5\u6536\u7AEF\u4E3A\u4E86\u4FDD\u8BC1\u62A5\u6587\u7684\u53EF\u9760\u4F20\u8F93\uFF0C\u5BF9\u62A5\u6587\u91C7\u7528\u4E86\u4EC0\u4E48\u7F16\u7801\u65B9\u5F0F</p><p>Update\uFF1A\u7ED9\u51FA\u4E86\u53D1\u9001\u7AEF\u53EF\u80FD\u60F3\u8981\u201C\u5347\u7EA7\u201D\u4F7F\u7528\u7684\u65B0\u7248\u672C\u6216\u534F\u8BAE</p><p>Via\uFF1A\u663E\u793A\u4E86\u62A5\u6587\u7ECF\u8FC7\u7684\u4E2D\u95F4\u8282\u70B9(\u4EE3\u7406\u3001\u7F51\u5173)</p><p>Cache-Control\uFF1A\u7528\u4E8E\u968F\u62A5\u6587\u4F20\u9001\u7F13\u5B58\u6307\u793A</p></li><li><p>\u8BF7\u6C42\u5934\u90E8</p><p>Client-IP\uFF1A\u63D0\u4F9B\u4E86\u8FD0\u884C\u5BA2\u6237\u7AEF\u7684\u673A\u5668\u7684IP\u5730\u5740</p><p>From\uFF1A\u63D0\u4F9B\u4E86\u5BA2\u6237\u7AEF\u7528\u6237\u7684E-mail\u5730\u5740</p><p>Host\uFF1A\u7ED9\u51FA\u4E86\u63A5\u6536\u8BF7\u6C42\u7684\u670D\u52A1\u5668\u7684\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u53F7</p><p>Referer\uFF1A\u63D0\u4F9B\u4E86\u5305\u542B\u5F53\u524D\u8BF7\u6C42URI\u7684\u6587\u6863\u7684URL</p><p>UA-Color\uFF1A\u63D0\u4F9B\u4E86\u4E0E\u5BA2\u6237\u7AEF\u663E\u793A\u5668\u7684\u663E\u793A\u989C\u8272\u6709\u5173\u7684\u4FE1\u606F</p><p>UA-CPU\uFF1A\u7ED9\u51FA\u4E86\u5BA2\u6237\u7AEFCPU\u7684\u7C7B\u578B\u6216\u5236\u9020\u5546</p><p>UA-OS\uFF1A\u7ED9\u51FA\u4E86\u8FD0\u884C\u5728\u5BA2\u6237\u7AEF\u673A\u5668\u4E0A\u7684\u64CD\u4F5C\u7CFB\u7EDF\u540D\u79F0\u53CA\u7248\u672C</p><p>UA-Pixels\uFF1A\u63D0\u4F9B\u4E86\u5BA2\u6237\u7AEF\u663E\u793A\u5668\u7684\u50CF\u7D20\u4FE1\u606F</p><p>User-Agent\uFF1A\u5C06\u53D1\u8D77\u8BF7\u6C42\u7684\u5E94\u7528\u7A0B\u5E8F\u540D\u79F0\u544A\u77E5\u670D\u52A1\u5668</p><p>Accept\uFF1A\u544A\u8BC9\u670D\u52A1\u5668\u80FD\u591F\u53D1\u9001\u54EA\u4E9B\u5A92\u4F53\u7C7B\u578B</p><p>Accept-Charset\uFF1A\u544A\u8BC9\u670D\u52A1\u5668\u80FD\u591F\u53D1\u9001\u54EA\u4E9B\u5B57\u7B26\u96C6</p><p>Accept-Encoding\uFF1A\u544A\u8BC9\u670D\u52A1\u5668\u80FD\u591F\u53D1\u9001\u54EA\u4E9B\u7F16\u7801\u65B9\u5F0F</p><p>Accept-Language\uFF1A\u544A\u8BC9\u670D\u52A1\u5668\u80FD\u591F\u53D1\u9001\u54EA\u4E9B\u8BED\u8A00</p><p>TE\uFF1A\u544A\u8BC9\u670D\u52A1\u5668\u53EF\u4EE5\u4F7F\u7528\u90A3\u4E9B\u6269\u5C55\u4F20\u8F93\u7F16\u7801</p><p>Expect\uFF1A\u5141\u8BB8\u5BA2\u6237\u7AEF\u5217\u51FA\u67D0\u8BF7\u6C42\u6240\u8981\u6C42\u7684\u670D\u52A1\u5668\u884C\u4E3A</p><p>Range\uFF1A\u5982\u679C\u670D\u52A1\u5668\u652F\u6301\u8303\u56F4\u8BF7\u6C42\uFF0C\u5C31\u8BF7\u6C42\u8D44\u6E90\u7684\u6307\u5B9A\u8303\u56F4</p><p>If-Match\uFF1A\u5982\u679C\u5B9E\u4F53\u6807\u8BB0\u4E0E\u6587\u6863\u5F53\u524D\u7684\u5B9E\u4F53\u6807\u8BB0\u76F8\u5339\u914D\uFF0C\u5C31\u83B7\u53D6\u8FD9\u4EFD\u6587\u6863</p><p>If-Modified-Sinec\uFF1A\u9664\u975E\u5728\u67D0\u4E2A\u6307\u5B9A\u7684\u65E5\u671F\u4E4B\u540E\u8D44\u6E90\u88AB\u4FEE\u6539\u8FC7\uFF0C\u5426\u5219\u5C31\u9650\u5236\u8FD9\u4E2A\u8BF7\u6C42</p><p>If-None-Match\uFF1A\u5982\u679C\u63D0\u4F9B\u7684\u5B9E\u4F53\u6807\u8BB0\u4E0E\u5F53\u524D\u6587\u6863\u7684\u5B9E\u4F53\u6807\u8BB0\u4E0D\u76F8\u7B26\uFF0C\u5C31\u83B7\u53D6\u6587\u6863</p><p>If-Range\uFF1A\u5141\u8BB8\u5BF9\u6587\u6863\u7684\u67D0\u4E2A\u8303\u56F4\u8FDB\u884C\u6761\u4EF6\u8BF7\u6C42</p><p>If-Unmodified-Since\uFF1A\u9664\u975E\u5728\u67D0\u4E2A\u6307\u5B9A\u65E5\u671F\u4E4B\u540E\u8D44\u6E90\u6CA1\u6709\u88AB\u4FEE\u6539\u8FC7\uFF0C\u5426\u5219\u5C31\u9650\u5236\u8FD9\u4E2A\u8BF7\u6C42</p><p>Authorization\uFF1A\u5305\u542B\u4E86\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7ED9\u670D\u52A1\u5668\uFF0C\u4EE5\u4FBF\u5BF9\u5176\u81EA\u8EAB\u8FDB\u884C\u8BA4\u8BC1\u7684\u6570\u636E</p><p>Cookie\uFF1A\u5BA2\u6237\u7AEF\u7528\u5B83\u5411\u670D\u52A1\u5668\u4F20\u9001\u6570\u636E</p><p>Cookie2\uFF1A\u7528\u6765\u8BF4\u660E\u8BF7\u6C42\u7AEF\u652F\u6301\u7684cookie\u7248\u672C</p><p>Max-Forward\uFF1A\u5728\u901A\u5F80\u6E90\u7AEF\u670D\u52A1\u5668\u7684\u8DEF\u5F84\u4E0A\uFF0C\u5C06\u8BF7\u6C42\u8F6C\u53D1\u7ED9\u5176\u4ED6\u4EE3\u7406\u6216\u7F51\u5173\u7684\u6700\u5927\u6B21\u6570</p><p>Proxy-Authorization\uFF1A\u8FD9\u4E2A\u9996\u90E8\u5728\u4E0E\u4EE3\u7406\u8FDB\u884C\u8BA4\u8BC1\u65F6\u4F7F\u7528\u7684</p><p>Proxy-Connection\uFF1A\u8FD9\u4E2A\u9996\u90E8\u662F\u5728\u4E0E\u4EE3\u7406\u5EFA\u7ACB\u8FDE\u63A5\u65F6\u4F7F\u7528\u7684</p></li><li><p>\u54CD\u5E94\u5934\u90E8</p><p>Age\uFF1A(\u4ECE\u6700\u521D\u521B\u5EFA\u5F00\u59CB)\u54CD\u5E94\u6301\u7EED\u65F6\u95F4</p><p>Public\uFF1A\u670D\u52A1\u5668\u4E3A\u5176\u8D44\u6E90\u652F\u6301\u7684\u8BF7\u6C42\u65B9\u6CD5\u5217\u8868</p><p>Retry-After\uFF1A\u5982\u679C\u8D44\u6E90\u4E0D\u53EF\u7528\u7684\u8BDD\uFF0C\u5728\u6B64\u65E5\u671F\u6216\u65F6\u95F4\u91CD\u8BD5</p><p>Server\uFF1A\u670D\u52A1\u5668\u5E94\u7528\u7A0B\u5E8F\u8F6F\u4EF6\u7684\u540D\u79F0\u548C\u7248\u672C</p><p>Title\uFF1A\u5BF9HTML\u6587\u6863\u6765\u8BF4\uFF0C\u5C31\u662FHTML\u6587\u6863\u7684\u6E90\u7AEF\u7ED9\u51FA\u7684\u6807\u9898</p><p>Warning\uFF1A\u6BD4\u539F\u56E0\u77ED\u8BED\u66F4\u8BE6\u7EC6\u4E00\u4E9B\u7684\u8B66\u544A\u62A5\u6587</p><p>Accept-Ranges\uFF1A\u5BF9\u6B64\u8D44\u6E90\u6765\u8BF4\uFF0C\u670D\u52A1\u5668\u53EF\u63A5\u53D7\u7684\u8303\u56F4\u7C7B\u578B</p><p>Vary\uFF1A\u670D\u52A1\u5668\u4F1A\u6839\u636E\u8FD9\u4E9B\u9996\u90E8\u7684\u5185\u5BB9\u6311\u9009\u51FA\u6700\u9002\u5408\u7684\u8D44\u6E90\u7248\u672C\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF</p><p>Proxy-Authenticate\uFF1A\u6765\u81EA\u4EE3\u7406\u7684\u5BF9\u5BA2\u6237\u7AEF\u7684\u8D28\u8BE2\u5217\u8868</p><p>Set-Cookie\uFF1A\u5728\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u6570\u636E\uFF0C\u4EE5\u4FBF\u670D\u52A1\u5668\u5BF9\u5BA2\u6237\u7AEF\u8FDB\u884C\u6807\u8BC6</p><p>Set-Cookie2\uFF1A\u4E0ESet-Cookie\u7C7B\u4F3C</p><p>WWW-Authenticate\uFF1A\u6765\u81EA\u670D\u52A1\u5668\u7684\u5BF9\u5BA2\u6237\u7AEF\u7684\u8D28\u8BE2\u5217\u8868</p></li><li><p>\u5B9E\u4F53\u5934\u90E8</p><p>\u5B9E\u4F53\u9996\u90E8\uFF1A\u63CF\u8FF0\u4E3B\u4F53\u7684\u957F\u5EA6\u548C\u5185\u5BB9\uFF0C\u6216\u8005\u8D44\u6E90\u81EA\u8EAB</p><p>Allow\uFF1A\u5217\u51FA\u4E86\u53EF\u4EE5\u5BF9\u6B64\u5B9E\u4F53\u6267\u884C\u7684\u8BF7\u6C42\u65B9\u6CD5</p><p>Location\uFF1A\u544A\u77E5\u5BA2\u6237\u7AEF\u5B9E\u4F53\u5B9E\u9645\u4E0A\u4F4D\u4E8E\u4F55\u5904\uFF0C\u7528\u4E8E\u5C06\u63A5\u6536\u7AEF\u5B9A\u5411\u5230\u8D44\u6E90\u7684\u4F4D\u7F6E(URL)\u4E0A\u53BB</p><p>Content-Base\uFF1A\u89E3\u6790\u4E3B\u4F53\u4E2D\u7684\u76F8\u5BF9URL\u65F6\u4F7F\u7528\u7684\u57FA\u7840URL</p><p>Content-Encoding\uFF1A\u5BF9\u4E3B\u4F53\u6267\u884C\u7684\u4EFB\u610F\u7F16\u7801\u65B9\u5F0F</p><p>Content-Language\uFF1A\u7406\u89E3\u4E3B\u4F53\u65F6\u6700\u9002\u5B9C\u4F7F\u7528\u7684\u81EA\u7136\u8BED\u8A00</p><p>Content-Length\uFF1A\u4E3B\u4F53\u7684\u957F\u5EA6</p><p>Content-Location\uFF1A\u8D44\u6E90\u5B9E\u9645\u6240\u5904\u7684\u4F4D\u7F6E</p><p>Content-MD5\uFF1A\u4E3B\u4F53\u7684MD5\u6821\u9A8C\u548C</p><p>Content-Range\uFF1A\u5728\u6574\u4E2A\u8D44\u6E90\u4E2D\u6B64\u5B9E\u4F53\u8868\u793A\u7684\u5B57\u8282\u8303\u56F4</p><p>Content-Type\uFF1A\u8FD9\u4E2A\u4E3B\u4F53\u7684\u5BF9\u8C61\u7C7B\u578B</p><p>ETag\uFF1A\u4E0E\u6B64\u5B9E\u4F53\u76F8\u5173\u7684\u5B9E\u4F53\u6807\u8BB0</p><p>Expires\uFF1A\u5B9E\u4F53\u4E0D\u518D\u6709\u6548\uFF0C\u8981\u4ECE\u539F\u59CB\u7684\u6E90\u7AEF\u518D\u6B21\u83B7\u53D6\u5B9E\u4F53\u7684\u65E5\u671F\u548C\u65F6\u95F4</p><p>Last-Modified\uFF1A\u8FD9\u4E2A\u5B9E\u4F53\u6700\u540E\u4E00\u6B21\u88AB\u4FEE\u6539\u7684\u65E5\u671F\u548C\u65F6\u95F4</p></li></ol><h2 id="http\u65B9\u6CD5" tabindex="-1">HTTP\u65B9\u6CD5 <a class="header-anchor" href="#http\u65B9\u6CD5" aria-hidden="true">#</a></h2><pre><code>GET\uFF1A \u7528\u4E8E\u8BF7\u6C42\u8BBF\u95EE\u5DF2\u7ECF\u88ABURI\uFF08\u7EDF\u4E00\u8D44\u6E90\u6807\u8BC6\u7B26\uFF09\u8BC6\u522B\u7684\u8D44\u6E90\uFF0C\u53EF\u4EE5\u901A\u8FC7URL\u4F20\u53C2\u7ED9\u670D\u52A1\u5668\u3002

POST\uFF1A\u7528\u4E8E\u4F20\u8F93\u4FE1\u606F\u7ED9\u670D\u52A1\u5668\uFF0C\u4E3B\u8981\u529F\u80FD\u4E0EGET\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u4F46\u4E00\u822C\u63A8\u8350\u4F7F\u7528POST\u65B9\u5F0F\u3002

PUT\uFF1A \u4F20\u8F93\u6587\u4EF6\uFF0C\u62A5\u6587\u4E3B\u4F53\u4E2D\u5305\u542B\u6587\u4EF6\u5185\u5BB9\uFF0C\u4FDD\u5B58\u5230\u5BF9\u5E94URI\u4F4D\u7F6E\u3002

HEAD\uFF1A \u83B7\u5F97\u62A5\u6587\u9996\u90E8\uFF0C\u4E0EGET\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u53EA\u662F\u4E0D\u8FD4\u56DE\u62A5\u6587\u4E3B\u4F53\uFF0C\u4E00\u822C\u7528\u4E8E\u9A8C\u8BC1URI\u662F\u5426\u6709\u6548\u3002

DELETE\uFF1A\u5220\u9664\u6587\u4EF6\uFF0C\u4E0EPUT\u65B9\u6CD5\u76F8\u53CD\uFF0C\u5220\u9664\u5BF9\u5E94URI\u4F4D\u7F6E\u7684\u6587\u4EF6\u3002

OPTIONS\uFF1A\u67E5\u8BE2\u76F8\u5E94URI\u652F\u6301\u7684HTTP\u65B9\u6CD5\u3002
</code></pre><h2 id="http\u72B6\u6001\u7801" tabindex="-1">HTTP\u72B6\u6001\u7801 <a class="header-anchor" href="#http\u72B6\u6001\u7801" aria-hidden="true">#</a></h2><p><strong>\u6982\u89C8</strong></p><pre><code>1xx\uFF1A\u6307\u793A\u4FE1\u606F--\u8868\u793A\u8BF7\u6C42\u5DF2\u63A5\u6536\uFF0C\u7EE7\u7EED\u5904\u7406

2xx\uFF1A\u6210\u529F--\u8868\u793A\u8BF7\u6C42\u5DF2\u88AB\u6210\u529F\u63A5\u6536\u3001\u7406\u89E3\u3001\u63A5\u53D7

3xx\uFF1A\u91CD\u5B9A\u5411--\u8981\u5B8C\u6210\u8BF7\u6C42\u5FC5\u987B\u8FDB\u884C\u66F4\u8FDB\u4E00\u6B65\u7684\u64CD\u4F5C

4xx\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF--\u8BF7\u6C42\u6709\u8BED\u6CD5\u9519\u8BEF\u6216\u8BF7\u6C42\u65E0\u6CD5\u5B9E\u73B0

5xx\uFF1A\u670D\u52A1\u5668\u7AEF\u9519\u8BEF--\u670D\u52A1\u5668\u672A\u80FD\u5B9E\u73B0\u5408\u6CD5\u7684\u8BF7\u6C42
</code></pre><h2 id="url\u7F16\u7801" tabindex="-1">URL\u7F16\u7801 <a class="header-anchor" href="#url\u7F16\u7801" aria-hidden="true">#</a></h2><h3 id="\u539F\u56E0" tabindex="-1">\u539F\u56E0 <a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a></h3><p>\u4E00\u4E9B\u5B57\u7B26\u4F1A\u5F15\u8D77\u6B67\u4E49\uFF0C\u9700\u8981\u7279\u6B8A\u673A\u5236\u8868\u793A\u5B83\u4EEC\u7684\u542B\u4E49\uFF0C\u8F6C\u4E49\u5B57\u7B26\u5C31\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u65B9\u6CD5\uFF0C\u628A\u6E90\u5B57\u7B26\u8F6C\u4E49\u8FD9\u4E00\u8FC7\u7A0B\u88AB\u79F0\u4E3A\u7F16\u7801\uFF0C\u53CD\u8FC7\u7A0B\u88AB\u79F0\u4E3A\u89E3\u7801\uFF0C<strong>\u8FD9\u4E2A\u8FC7\u7A0B\u6CE8\u610F\u70B9\u662F\u77E5\u9053\u54EA\u4E9B\u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u7684\uFF0C\u4E0B\u9762\u6839\u636E\u89C4\u8303\u5C55\u5F00\u8FD9\u90E8\u5206</strong></p><h3 id="\u4FDD\u7559\u5B57\u7B26\u4E0E\u672A\u4FDD\u7559\u5B57\u7B26" tabindex="-1">\u4FDD\u7559\u5B57\u7B26\u4E0E\u672A\u4FDD\u7559\u5B57\u7B26 <a class="header-anchor" href="#\u4FDD\u7559\u5B57\u7B26\u4E0E\u672A\u4FDD\u7559\u5B57\u7B26" aria-hidden="true">#</a></h3><p><a href="https://datatracker.ietf.org/doc/rfc3986/?include_text=1" target="_blank" rel="noopener noreferrer">RFC3986\u6587\u6863\u89C4\u5B9A(\u7B2C\u4E8C\u7AE0\u5B57\u7B26)\uFF0CUrl\u4E2D\u53EA\u5141\u8BB8\u5305\u542B\u672A\u4FDD\u7559\u5B57\u7B26\u4EE5\u53CA\u6240\u6709\u4FDD\u7559\u5B57\u7B26\u3002</a></p><p><strong>\u4FDD\u7559\u5B57\u7B26</strong></p><table><thead><tr><th>\u4FDD\u7559\u5B57\u7B26</th><th>\u542B\u4E49</th><th>\u4F8B\u5B50</th></tr></thead><tbody><tr><td>: / ? # [] @</td><td>\u5206\u9694Url\u7684\u534F\u8BAE\u3001\u4E3B\u673A\u3001\u8DEF\u5F84\u7B49\u7EC4\u4EF6\u3002\u6BD4\u5982\uFF1A\u5192\u53F7:\u4FDD\u7559\u4E3A\u65B9\u6848\u3001\u7528\u6237/\u53E3\u4EE4\uFF0C\u4EE5\u53CA\u4E3B\u673A/\u7AEF\u53E3\u7EC4\u4EF6\u7684\u5B9A\u754C\u7B26\u4F7F\u7528\uFF1B/\u4FDD\u7559\u4E3A\u8DEF\u5F84\u7EC4\u4EF6\u4E2D\u5206\u9694\u8DEF\u5F84\u6BB5\u7684\u5B9A\u754C\u7B26\uFF1B? \u4FDD\u7559\u4F5C\u4E3A\u67E5\u8BE2\u5B57\u7B26\u4E32\u5B9A\u754C\u7B26\u4F7F\u7528\uFF1B#\u4FDD\u7559\u4E3A\u5206\u6BB5\u5B9A\u754C\u7B26\u4F7F\u7528</td><td>encodeURI(&#39; : / ? # [] @&#39;) &quot;: / ?#%5B%5D@&quot;\u5176\u4E2D[]\u88AB\u8F6C\u4E49\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u662F\u4E0D\u5B89\u5168\u5B57\u7B26</td></tr><tr><td>!$&amp;&#39;()*+,;=</td><td>\u7528\u4E8E\u5728\u6BCF\u4E2A\u7EC4\u4EF6\u4E2D\u8D77\u5230\u5206\u9694\u4F5C\u7528\u7684\u3002\u6BD4\u5982\uFF1A&amp;\u7B26\u53F7\u7528\u4E8E\u5206\u9694\u67E5\u8BE2\u591A\u4E2A\u952E\u503C\u5BF9\uFF1B=\u7528\u4E8E\u8868\u793A\u67E5\u8BE2\u53C2\u6570\u4E2D\u7684\u952E\u503C\u5BF9\u3002</td><td>encodeURI(&quot;! $ &amp; &#39; () * + ,; =&quot;) // &quot;!$&amp;&#39;()*+,;=&quot;</td></tr></tbody></table><p><strong>\u672A\u4FDD\u7559\u5B57\u7B26</strong></p><p>\u82F1\u6587\u5B57\u6BCD\uFF08a-zA-Z\uFF09\u3001\u6570\u5B57\uFF080-9\uFF09\u3001-_.~ 4\u4E2A\u7279\u6B8A\u5B57\u7B26</p><p><strong>\u672A\u4FDD\u7559\u5B57\u7B26\u4E0D\u9700\u8981\u7F16\u7801</strong></p><p><strong>\u5C0F\u7ED3</strong></p><p>\u4FDD\u7559\u5B57\u7B26\u662F\u6307\u7528\u4F5C\u7279\u6B8A\u7528\u9014\uFF0C\u800C\u672A\u4FDD\u7559\u5B57\u7B26\u662F\u6307\u89C4\u8303\u5141\u8BB8\u4F7F\u7528\u4F46\u662F\u6CA1\u7EB3\u5165\u89C4\u8303</p><h3 id="\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26" tabindex="-1">\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26 <a class="header-anchor" href="#\u9700\u8981\u7F16\u7801\u7684\u5B57\u7B26" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53D7\u9650\u5B57\u7B26</th><th>\u4E3A\u4F55\u53D7\u9650</th><th>\u4F8B\u5B50</th></tr></thead><tbody><tr><td>%</td><td>\u4F5C\u4E3A\u7F16\u7801\u5B57\u7B26\u7684\u8F6C\u4E49\u6807\u5FD7\uFF0C\u56E0\u6B64\u672C\u8EAB\u9700\u8981\u7F16\u7801</td><td>encodeURI(&#39;%&#39;) // &quot;%25&quot;</td></tr><tr><td>\u7A7A\u683C</td><td>Url\u5728\u4F20\u8F93\u7684\u8FC7\u7A0B\uFF0C\u6216\u8005\u7528\u6237\u5728\u6392\u7248\u7684\u8FC7\u7A0B\uFF0C\u6216\u8005\u6587\u672C\u5904\u7406\u7A0B\u5E8F\u5728\u5904\u7406Url\u7684\u8FC7\u7A0B\uFF0C\u90FD\u6709\u53EF\u80FD\u5F15\u5165\u65E0\u5173\u7D27\u8981\u7684\u7A7A\u683C\uFF0C\u6216\u8005\u5C06\u90A3\u4E9B\u6709\u610F\u4E49\u7684\u7A7A\u683C\u7ED9\u53BB\u6389\u3002</td><td>encodeURI(&#39; &#39;) // &quot;%20&quot;</td></tr><tr><td>&lt;&gt;&quot;</td><td>\u5C16\u62EC\u53F7\u548C\u5F15\u53F7\u901A\u5E38\u7528\u4E8E\u5728\u666E\u901A\u6587\u672C\u4E2D\u8D77\u5230\u5206\u9694Url\u7684\u4F5C\u7528\uFF0C\u6240\u4EE5\u5E94\u8BE5\u5BF9\u5176\u8FDB\u884C\u7F16\u7801</td><td>encodeURI(&#39;&lt;&gt;&quot;&#39;) // &quot;%3C%3E%22&quot;</td></tr><tr><td>{}|^~[]&#39;</td><td>\u67D0\u4E00\u4E9B\u7F51\u5173\u6216\u8005\u4F20\u8F93\u4EE3\u7406\u4F1A\u7BE1\u6539\u8FD9\u4E9B\u5B57\u7B26\u3002\u4F60\u53EF\u80FD\u4F1A\u611F\u5230\u5947\u602A\uFF0C\u4E3A\u4EC0\u4E48\u4F7F\u7528\u4E00\u4E9B\u4E0D\u5B89\u5168\u5B57\u7B26\u7684\u65F6\u5019\u5E76\u6CA1\u6709\u53D1\u751F\u4EC0\u4E48\u4E0D\u597D\u7684\u4E8B\u60C5\uFF0C\u6BD4\u5982\u65E0\u9700\u5BF9~\u5B57\u7B26\u8FDB\u884C\u7F16\u7801\uFF0C\u524D\u9762\u4E5F\u8BF4\u4E86\uFF0C\u5BF9\u67D0\u4E9B\u4F20\u8F93\u534F\u8BAE\u6765\u8BF4\u4E0D\u662F\u95EE\u9898\u3002</td><td>encodeURI(&quot;{}</td></tr><tr><td>0x00-0x1F, 0x7F</td><td>\u53D7\u9650\uFF0C\u8FD9\u4E9B\u5341\u516D\u8FDB\u5236\u8303\u56F4\u5185\u7684\u5B57\u7B26\u90FD\u5728US-ASCII\u5B57\u7B26\u96C6\u7684\u4E0D\u53EF\u6253\u5370\u533A\u95F4\u5185</td><td>\u6BD4\u5982\u6362\u884C\u952E\u662F0x0A</td></tr><tr><td>&gt;0x7F</td><td>\u53D7\u9650\uFF0C\u5341\u516D\u8FDB\u5236\u503C\u5728\u6B64\u8303\u56F4\u5185\u7684\u5B57\u7B26\u90FD\u4E0D\u5728US-ASCII\u5B57\u7B26\u96C6\u76847\u6BD4\u7279\u8303\u56F4\u5185</td><td>encodeURI(&#39;\u4EAC\u4E1C&#39;) // &quot;%E4%BA%AC%E4%B8%9C&quot;</td></tr></tbody></table><h3 id="\u5185\u7F6E\u7F16\u7801\u65B9\u6CD5" tabindex="-1">\u5185\u7F6E\u7F16\u7801\u65B9\u6CD5 <a class="header-anchor" href="#\u5185\u7F6E\u7F16\u7801\u65B9\u6CD5" aria-hidden="true">#</a></h3><ul><li><p>escape unescape</p><p>\u6B64\u89E3\u7801/\u7F16\u7801\u65B9\u6CD5\u5DF2\u7ECF\u4ECEWeb\u6807\u51C6\u4E2D\u5220\u9664\uFF0C\u4E0D\u518D\u63A8\u8350\u4F7F\u7528</p><p>\u5B57\u7B26\u768416\u8FDB\u5236\u683C\u5F0F\u503C,\u5F53\u8BE5\u503C\u5C0F\u4E8E\u7B49\u4E8E0xFF\u65F6,\u7528\u4E00\u4E2A2\u4F4D\u8F6C\u79FB\u5E8F\u5217: %xx \u8868\u793A. \u5927\u4E8E\u7684\u8BDD\u5219\u4F7F\u75284\u4F4D\u5E8F\u5217:%uxxxx \u8868\u793A\uFF0C\u800C\u65B0\u7684\u7F16\u7801\u65B9\u6CD5\u7EDF\u4E00\u8868\u793A\u6210URL\u7F16\u7801\uFF08UTF-8\uFF09</p></li></ul><div class="language-js"><pre><code><span class="token function">escape</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;%u4E2D&quot;</span>
<span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E2D&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;%E4%B8%AD&quot;</span>
</code></pre></div><h3 id="encodeuri\u4E0Eencodeuricomponent-\u533A\u522B" tabindex="-1">encodeURI\u4E0EencodeURIComponent \u533A\u522B <a class="header-anchor" href="#encodeuri\u4E0Eencodeuricomponent-\u533A\u522B" aria-hidden="true">#</a></h3><p>encodeURIComponent \u5047\u5B9A\u53C2\u6570\u662F URI \u7684\u4E00\u90E8\u5206\uFF08\u6BD4\u5982\u534F\u8BAE\u3001\u4E3B\u673A\u540D\u3001\u8DEF\u5F84\u6216\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF09\u3002\u56E0\u6B64 encodeURIComponent() \u51FD\u6570\u5C06\u8F6C\u4E49\u7528\u4E8E\u5206\u9694 URI \u5404\u4E2A\u90E8\u5206\u7684\u6807\u70B9\u7B26\u53F7\uFF08; / ?: @&amp;=+$,#\uFF09\uFF0C\u6240\u4EE5encodeURIComponent\u7684\u4E0D\u7F16\u7801\u96C6\u53EA\u670971\u4E2A\uFF0C\u6B64\u65F6URI\u7531\u4E8E\u5206\u5272URI\u7684\u6807\u70B9\u7B26\u53F7\u88AB\u8F6C\u4E49\uFF0C\u4F1A\u5BFC\u81F4\u6B64URL\u65E0\u6CD5\u4F7F\u7528</p><div class="language-js"><pre><code><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token string">&#39;https://aotu.io/&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;https%3A%2F%2Faotu.io%2F&quot;  \u6B64\u65F6\u65E0\u6CD5\u8BBF\u95EE</span>

<span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">&#39;https://aotu.io/&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &quot;https://aotu.io/&quot;</span>
</code></pre></div><p>\u6240\u4EE5encodeURI\u7531\u4E8E\u7F16\u7801URL\u6574\u4F53\uFF0C\u800CencodeURIComponent\u7528\u4E8E\u7F16\u7801URL\u5C40\u90E8\uFF0C\u8FD9\u4E2A\u5C40\u90E8\u7684\u5224\u5B9A\u5C31\u662F\u9700\u8981\u8F6C\u4E49\u7684\u90E8\u5206</p>`,35),s=[o];function d(i,r,l,c,u,h){return n(),e("div",null,s)}var R=t(a,[["render",d]]);export{g as __pageData,R as default};
