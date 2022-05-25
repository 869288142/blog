import{_ as e,c as t,o as a,a as r}from"./app.a3c81315.js";var h="/blog/assets/binary_framing_layer01.80471fa3.svg";const f='{"title":"http2\u3001http3\u4E00\u89C8","description":"","frontmatter":{},"headers":[{"level":2,"title":"http2","slug":"http2"},{"level":3,"title":"\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42","slug":"\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42"},{"level":3,"title":"\u6570\u636E\u6D41\u3001\u6D88\u606F\u548C\u5E27","slug":"\u6570\u636E\u6D41\u3001\u6D88\u606F\u548C\u5E27"},{"level":3,"title":"\u591A\u8DEF\u590D\u7528","slug":"\u591A\u8DEF\u590D\u7528"},{"level":3,"title":"\u6570\u636E\u4F18\u5148\u7EA7","slug":"\u6570\u636E\u4F18\u5148\u7EA7"},{"level":3,"title":"\u5934\u90E8\u538B\u7F29","slug":"\u5934\u90E8\u538B\u7F29"},{"level":3,"title":"\u670D\u52A1\u5668\u63A8\u9001","slug":"\u670D\u52A1\u5668\u63A8\u9001"},{"level":3,"title":"http2\u7F3A\u70B9","slug":"http2\u7F3A\u70B9"},{"level":3,"title":"\u79FB\u9664\u9488\u5BF9HTTP/1.x\u7684\u4F18\u5316","slug":"\u79FB\u9664\u9488\u5BF9http-1-x\u7684\u4F18\u5316"},{"level":2,"title":"http3","slug":"http3"},{"level":3,"title":"\u7279\u6027","slug":"\u7279\u6027"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"\u57FA\u7840/\u7F51\u7EDC\u539F\u7406/HTTP/http2\u3001http3.md"}',l={},p=r('<h1 id="http2\u3001http3\u4E00\u89C8" tabindex="-1">http2\u3001http3\u4E00\u89C8 <a class="header-anchor" href="#http2\u3001http3\u4E00\u89C8" aria-hidden="true">#</a></h1><h2 id="http2" tabindex="-1">http2 <a class="header-anchor" href="#http2" aria-hidden="true">#</a></h2><p><code>http2</code>\u81F4\u529B\u4E8E\u89E3\u51B3<code>http1.x</code>\u7684\u8FDE\u63A5\u65E0\u6CD5\u590D\u7528\uFF0C\u961F\u9996\u963B\u585E\u7B49\u95EE\u9898</p><h3 id="\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42" tabindex="-1">\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42 <a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42" aria-hidden="true">#</a></h3><p>HTTP/2 \u6240\u6709\u6027\u80FD\u589E\u5F3A\u7684\u6838\u5FC3\u5728\u4E8E\u65B0\u7684\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\uFF0C\u5B83\u5B9A\u4E49\u4E86\u5982\u4F55\u5C01\u88C5 HTTP \u6D88\u606F\u5E76\u5728\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u4F20\u8F93</p><p><img src="'+h+'" alt=""></p><p>\u8FD9\u91CC\u6240\u8C13\u7684\u201C\u5C42\u201D\uFF0C\u6307\u7684\u662F<strong>\u4F4D\u4E8E\u5957\u63A5\u5B57\u63A5\u53E3\u4E0E\u5E94\u7528\u53EF\u89C1\u7684\u9AD8\u7EA7 HTTP API \u4E4B\u95F4\u4E00\u4E2A\u7ECF\u8FC7\u4F18\u5316\u7684\u65B0\u7F16\u7801\u673A\u5236</strong>\uFF1A<code>HTTP/1.x</code> \u534F\u8BAE\u4EE5\u6362\u884C\u7B26\u4F5C\u4E3A\u7EAF\u6587\u672C\u7684\u5206\u9694\u7B26\uFF0C\u800C <code>HTTP/2</code> \u5C06\u6240\u6709\u4F20\u8F93\u7684\u4FE1\u606F\u5206\u5272\u4E3A\u66F4\u5C0F\u7684\u6D88\u606F\u548C\u5E27\uFF0C\u5E76\u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\u5BF9\u5B83\u4EEC\u7F16\u7801,<strong>\u4E00\u53E5\u8BDD\u5C31\u5C31\u662F<code>HTTP/1.x</code>\u662F\u6587\u672C\u4F20\u8F93\u7684\uFF0C<code>HTTP/2</code>\u662F\u57FA\u4E8E\u4E8C\u8FDB\u5236\u4F20\u8F93\u7684\uFF0C\u4E4B\u6240\u4EE5\u4E0D\u53EB<code>http1.2</code>\uFF0C\u4E5F\u662F\u56E0\u4E3A\u65B0\u7684\u7F16\u7801\u65B9\u5F0F\u4E0E\u65E7\u7F16\u7801\u65B9\u5F0F\u4E0D\u517C\u5BB9\u5BFC\u81F4\u7684</strong></p><h3 id="\u6570\u636E\u6D41\u3001\u6D88\u606F\u548C\u5E27" tabindex="-1">\u6570\u636E\u6D41\u3001\u6D88\u606F\u548C\u5E27 <a class="header-anchor" href="#\u6570\u636E\u6D41\u3001\u6D88\u606F\u548C\u5E27" aria-hidden="true">#</a></h3><p>\u65B0\u7684\u4E8C\u8FDB\u5236\u5206\u5E27\u673A\u5236\u6539\u53D8\u4E86\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u4EA4\u6362\u6570\u636E\u7684\u65B9\u5F0F\uFF0C\u6709\u4EE5\u4E0B<strong>\u91CD\u8981\u6982\u5FF5</strong>\uFF1A</p><ul><li><code>\u6570\u636E\u6D41</code>\uFF1A\u5DF2\u5EFA\u7ACB\u7684\u8FDE\u63A5\u5185\u7684\u53CC\u5411\u5B57\u8282\u6D41\uFF0C\u53EF\u4EE5\u627F\u8F7D\u4E00\u6761\u6216\u591A\u6761\u6D88\u606F\u3002</li><li><code>\u6D88\u606F</code>\uFF1A\u4E0E\u903B\u8F91\u8BF7\u6C42\u6216\u54CD\u5E94\u6D88\u606F\u5BF9\u5E94\u7684\u5B8C\u6574\u7684\u4E00\u7CFB\u5217\u5E27\u3002</li><li><code>\u5E27</code>\uFF1A<code>HTTP/2</code> \u901A\u4FE1\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u6BCF\u4E2A\u5E27\u90FD\u5305\u542B\u5E27\u5934\uFF0C\u81F3\u5C11\u4E5F\u4F1A\u6807\u8BC6\u51FA\u5F53\u524D\u5E27\u6240\u5C5E\u7684\u6570\u636E\u6D41\u3002</li></ul><p><code>HTTP/2</code> \u4E2D\uFF0C\u540C\u57DF\u540D\u4E0B\u6240\u6709\u901A\u4FE1\u90FD\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0A\u5B8C\u6210\uFF0C\u8BE5\u8FDE\u63A5\u53EF\u4EE5\u627F\u8F7D\u4EFB\u610F\u6570\u91CF\u7684\u53CC\u5411\u6570\u636E\u6D41\u3002\u6BCF\u4E2A\u6570\u636E\u6D41\u90FD\u4EE5\u6D88\u606F\u7684\u5F62\u5F0F\u53D1\u9001\uFF0C\u800C\u6D88\u606F\u53C8\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u7EC4\u6210\u3002\u591A\u4E2A\u5E27\u4E4B\u95F4\u53EF\u4EE5\u4E71\u5E8F\u53D1\u9001\uFF0C\u6839\u636E\u5E27\u9996\u90E8\u7684\u6D41\u6807\u8BC6\u53EF\u4EE5\u91CD\u65B0\u7EC4\u88C5\u3002<strong>\u5C06 HTTP \u6D88\u606F\u5206\u89E3\u4E3A\u72EC\u7ACB\u7684\u5E27\uFF0C\u4EA4\u9519\u53D1\u9001\uFF0C\u7136\u540E\u5728\u53E6\u4E00\u7AEF\u91CD\u65B0\u7EC4\u88C5\u662F HTTP 2 \u6700\u91CD\u8981\u7684\u4E00\u9879\u589E\u5F3A</strong></p><h3 id="\u591A\u8DEF\u590D\u7528" tabindex="-1">\u591A\u8DEF\u590D\u7528 <a class="header-anchor" href="#\u591A\u8DEF\u590D\u7528" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u6253\u5F00<a href="https://http2.akamai.com/demo" target="_blank" rel="noopener noreferrer">\u6B64\u94FE\u63A5</a>\u5BF9\u6BD4<code>http2</code>\u548C<code>http1.x</code>\u7684\u901F\u5EA6\u63D0\u5347</p><p>HTTP/2 \u4E2D\u65B0\u7684\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\u7A81\u7834\u4E86<code>http1.x</code>\u9650\u5236\uFF0C\u5B9E\u73B0\u4E86\u5B8C\u6574\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u590D\u7528\uFF1A<strong>\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u53EF\u4EE5\u5C06 HTTP \u6D88\u606F\u5206\u89E3\u4E3A\u4E92\u4E0D\u4F9D\u8D56\u7684\u5E27\uFF0C\u7136\u540E\u4EA4\u9519\u53D1\u9001\uFF0C\u6700\u540E\u518D\u5728\u53E6\u4E00\u7AEF\u628A\u5B83\u4EEC\u91CD\u65B0\u7EC4\u88C5\u8D77\u6765\u3002</strong></p><h3 id="\u6570\u636E\u4F18\u5148\u7EA7" tabindex="-1">\u6570\u636E\u4F18\u5148\u7EA7 <a class="header-anchor" href="#\u6570\u636E\u4F18\u5148\u7EA7" aria-hidden="true">#</a></h3><p>\u5728<code>http1.x</code>\u4E2D\u5148\u8BF7\u6C42\u7684\u8D44\u6E90\u5177\u6709\u6700\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u5728<code>http2</code>\u4E2D\u7531\u4E8E\u6CA1\u6709\u4E86\u963B\u585E\u95EE\u9898\uFF0C\u4F18\u5148\u7EA7\u5DF2\u7ECF\u4E0D\u662F\u7531\u8BF7\u6C42\u987A\u5E8F\u786E\u5B9A\uFF0C<code>http2</code>\u91C7\u7528\u4E86\u4F18\u5148\u7EA7\u6811\u7684\u4F18\u5148\u7EA7\u7B56\u7565,\u4ECE\u4E4B\u524D\u524D\u7AEF\u51B3\u5B9A\u8D44\u6E90\u4F18\u5148\u7EA7\u79FB\u5230\u4E86\u540E\u53F0\u51B3\u5B9A\u8D44\u6E90\u7684\u4F18\u5148\u7EA7</p><ul><li><p>\u53EF\u4EE5\u5411\u6BCF\u4E2A\u6570\u636E\u6D41\u5206\u914D\u4E00\u4E2A\u4ECB\u4E8E 1 \u81F3 256 \u4E4B\u95F4\u7684\u6574\u6570\u3002</p></li><li><p>\u6BCF\u4E2A\u6570\u636E\u6D41\u4E0E\u5176\u4ED6\u6570\u636E\u6D41\u4E4B\u95F4\u53EF\u4EE5\u5B58\u5728\u663E\u5F0F\u4F9D\u8D56\u5173\u7CFB\u3002</p></li></ul><h3 id="\u5934\u90E8\u538B\u7F29" tabindex="-1">\u5934\u90E8\u538B\u7F29 <a class="header-anchor" href="#\u5934\u90E8\u538B\u7F29" aria-hidden="true">#</a></h3><p><code>HTTP/2</code> \u4F7F\u7528 <a href="https://tools.ietf.org/html/draft-ietf-httpbis-header-compression-12" target="_blank" rel="noopener noreferrer">HPACK</a> \u538B\u7F29\u683C\u5F0F\u538B\u7F29\u8BF7\u6C42\u548C\u54CD\u5E94\u6807\u5934\u5143\u6570\u636E\uFF0C\u8FD9\u79CD\u683C\u5F0F\u91C7\u7528\u4E24\u79CD\u7B80\u5355\u4F46\u662F\u5F3A\u5927\u7684\u6280\u672F\uFF1A</p><ol><li><p>\u8FD9\u79CD\u683C\u5F0F\u652F\u6301\u901A\u8FC7\u9759\u6001\u970D\u592B\u66FC\u4EE3\u7801\u5BF9\u4F20\u8F93\u7684\u6807\u5934\u5B57\u6BB5\u8FDB\u884C\u7F16\u7801\uFF0C\u4ECE\u800C\u51CF\u5C0F\u4E86\u5404\u4E2A\u4F20\u8F93\u7684\u5927\u5C0F\u3002</p></li><li><p>\u8FD9\u79CD\u683C\u5F0F\u8981\u6C42\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u540C\u65F6\u7EF4\u62A4\u548C\u66F4\u65B0\u4E00\u4E2A\u5305\u542B\u4E4B\u524D\u89C1\u8FC7\u7684\u6807\u5934\u5B57\u6BB5\u7684\u7D22\u5F15\u5217\u8868\uFF08\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5B83\u53EF\u4EE5\u5EFA\u7ACB\u4E00\u4E2A\u5171\u4EAB\u7684\u538B\u7F29\u4E0A\u4E0B\u6587\uFF09</p></li></ol><p>\u7B80\u5355\u6765\u8BF4\u5C31\u662F<strong>\u91C7\u7528\u4E86\u7F16\u7801\u51CF\u5C11\u4E86\u4F20\u8F93\u5927\u5C0F\uFF0C\u540C\u65F6\u53EF\u4EE5\u901A\u8FC7\u7D22\u5F15\u8868\u51CF\u5C11\u91CD\u590D\u7684\u4F20\u8F93\u5B57\u6BB5</strong></p><h3 id="\u670D\u52A1\u5668\u63A8\u9001" tabindex="-1">\u670D\u52A1\u5668\u63A8\u9001 <a class="header-anchor" href="#\u670D\u52A1\u5668\u63A8\u9001" aria-hidden="true">#</a></h3><p>\u670D\u52A1\u5668\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u53D1\u9001\u591A\u4E2A\u54CD\u5E94\u3002 \u6362\u53E5\u8BDD\u8BF4\uFF0C\u9664\u4E86\u5BF9\u6700\u521D\u8BF7\u6C42\u7684\u54CD\u5E94\u5916\uFF0C\u670D\u52A1\u5668\u8FD8\u53EF\u4EE5\u5411\u5BA2\u6237\u7AEF\u63A8\u9001\u989D\u5916\u8D44\u6E90\uFF0C<strong>\u6BD4\u5982\u8BF4\u8BF7\u6C42index.html,\u6211\u4EEC\u8FD8\u53EF\u4EE5\u540C\u65F6\u628Acss\u3001js\u4E00\u8D77\u4F20\u8F93\u8FC7\u53BB</strong></p><h3 id="http2\u7F3A\u70B9" tabindex="-1">http2\u7F3A\u70B9 <a class="header-anchor" href="#http2\u7F3A\u70B9" aria-hidden="true">#</a></h3><h4 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h4><ul><li><p>\u4F18\u5148\u7EA7\u63A7\u5236\u6709\u70B9\u56F0\u96BE\uFF0C\u7279\u522B\u662F\u5728<code>CDN</code>\u73AF\u5883\u4E0B</p></li><li><p>\u76EE\u524D\u4E3B\u6D41\u6D4F\u89C8\u5668\u90FD\u53EA\u652F\u6301SSL\u7684HTTP2\u7684\u534F\u8BAE</p></li><li><p>\u670D\u52A1\u5668\u63A8\u9001\u65F6\uFF0C\u5728\u6D4F\u89C8\u5668\u53D1\u9001\u62D2\u7EDD\u4FE1\u53F7\u524D\uFF0C\u5DF2\u7ECF\u628A\u8D44\u6E90\u63A8\u9001\u5230\u6D4F\u89C8\u5668\u4E86</p></li></ul><h3 id="\u79FB\u9664\u9488\u5BF9http-1-x\u7684\u4F18\u5316" tabindex="-1">\u79FB\u9664\u9488\u5BF9HTTP/1.x\u7684\u4F18\u5316 <a class="header-anchor" href="#\u79FB\u9664\u9488\u5BF9http-1-x\u7684\u4F18\u5316" aria-hidden="true">#</a></h3><ul><li><p>\u57DF\u540D\u5206\u7247\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8BF7\u6C42</p></li><li><p>\u96EA\u78A7\u56FE\uFF0C\u53EF\u4EE5\u51CF\u5C11\u6E32\u67D3\u5185\u5B58\uFF0C\u548C\u4E0D\u5FC5\u8981\u7684css\u4EE3\u7801</p></li><li><p>\u8D44\u6E90\u5408\u5E76\uFF0C\u8D44\u6E90\u53EF\u4EE5\u6309\u9700\u52A0\u8F7D\uFF0C\u4E0D\u9700\u8981\u518D\u5408\u5E76\u6210\u4E00\u4E2A\u5927\u7684</p></li></ul><h2 id="http3" tabindex="-1">http3 <a class="header-anchor" href="#http3" aria-hidden="true">#</a></h2><p><code>http2</code>\u8FD8\u662F\u6CA1\u80FD\u89E3\u51B3<code>TCP</code>\u8FDE\u63A5\u4E0A\u7684\u963B\u585E\u95EE\u9898,\u4E22\u5305\u60C5\u51B5\u4E0B\uFF0C\u53CD\u800C\u4F1A\u6BD4<code>http1.x</code>\u8868\u73B0\u66F4\u5DEE</p><h3 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h3><ul><li><p>\u7A33\u5B9A\u7684\u5FEB\u901F\u63E1\u624B</p></li><li><p>0-RTT</p></li><li><p>\u591A\u8DEF\u590D\u7528\uFF0C\u51E0\u4E4E\u65E0\u961F\u5934\u963B\u585E</p></li><li><p>\u534F\u8BAE\u7EA7\u522B\u7684\u52A0\u5BC6\uFF0C\u52A0\u5BC6\u8BA4\u8BC1\u7684\u62A5\u6587</p></li><li><p>\u5411\u524D\u7EA0\u9519\u673A\u5236,\u53EF\u4EE5\u6839\u636E\u5DF2\u6709\u7684\u5305\u8BA1\u7B97\u51FA\u4E22\u5931\u7684\u5305\uFF0C\u6309\u7167\u8FD9\u4E2A\u5927\u5C0F\u53BB\u8BF7\u6C42\u4E22\u5931\u7684\u5305</p></li></ul><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><p><a href="https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cnhttps://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn" target="_blank" rel="noopener noreferrer">HTTP/2 \u7B80\u4ECBHTTP/2 \u7B80\u4ECB</a></p><p><a href="https://juejin.im/post/6844903667569541133#heading-38" target="_blank" rel="noopener noreferrer">HTTP2 \u8BE6\u89E3</a></p><p><a href="https://zhuanlan.zhihu.com/p/30166894" target="_blank" rel="noopener noreferrer">HTTP/2\u7279\u6027\u53CA\u5176\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u7684\u8868\u73B0</a></p><p><a href="https://zhuanlan.zhihu.com/p/32553477" target="_blank" rel="noopener noreferrer">QUIC\u534F\u8BAE\u539F\u7406\u5206\u6790</a></p>',37),o=[p];function d(i,n,c,s,T,u){return a(),t("div",null,o)}var _=e(l,[["render",d]]);export{f as __pageData,_ as default};
