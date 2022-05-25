import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const h='{"title":"\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u7B2C\u4E00\u7248","slug":"\u7B2C\u4E00\u7248"},{"level":3,"title":"\u7B2C\u4E8C\u7248","slug":"\u7B2C\u4E8C\u7248"},{"level":3,"title":"\u7B2C\u4E09\u7248","slug":"\u7B2C\u4E09\u7248"},{"level":2,"title":"\u597D\u5904","slug":"\u597D\u5904"},{"level":2,"title":"\u574F\u5904","slug":"\u574F\u5904"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F/\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F.md"}',p={},o=t(`<h1 id="\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" tabindex="-1">\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F <a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u53D1\u5E03\u2014\u8BA2\u9605\u6A21\u5F0F\u53C8\u53EB\u89C2\u5BDF\u8005\u6A21\u5F0F\uFF0C\u5B83<strong>\u5B9A\u4E49\u5BF9\u8C61\u95F4\u7684\u4E00\u79CD\u4E00\u5BF9\u591A\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u5F53\u4E00\u4E2A\u5BF9\u8C61\u7684\u72B6\u6001\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u6240\u6709\u4F9D\u8D56\u4E8E\u5B83\u7684\u5BF9\u8C61\u90FD\u5C06\u5F97\u5230\u901A\u77E5</strong></p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="\u7B2C\u4E00\u7248" tabindex="-1">\u7B2C\u4E00\u7248 <a class="header-anchor" href="#\u7B2C\u4E00\u7248" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callBack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callBack<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cbs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">cbs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 

eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7B2C\u4E00\u7248\u7684\u5B9E\u73B0\u5DF2\u7ECF\u5B8C\u6210\u4E86\u8BA2\u9605\u548C\u53D1\u5E03\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u5982\u679C\u73B0\u5728\u53D1\u5E03\u65F6\uFF0C\u9700\u8981\u628A\u4FE1\u606F\u7ED9\u8BA2\u9605\u8005\uFF0C\u8BE5\u5982\u4F55\u5B9E\u73B0\u5462</p><h3 id="\u7B2C\u4E8C\u7248" tabindex="-1">\u7B2C\u4E8C\u7248 <a class="header-anchor" href="#\u7B2C\u4E8C\u7248" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callBack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callBack<span class="token punctuation">)</span> 
  <span class="token punctuation">}</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cbs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">cbs</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728\u53D1\u5E03\u4FE1\u606F\u65F6\uFF0C\u5C06\u53C2\u6570\u6CE8\u5165\u5230\u8BA2\u9605\u8005\u4E0A\uFF0C\u6BD4\u8F83\u7B80\u5355\uFF0C\u76F4\u63A5\u5728\u53D1\u5E03\u65F6\u628A\u53C2\u6570\u7ED9\u8BA2\u9605\u8005\u5373\u53EF</p><h3 id="\u7B2C\u4E09\u7248" tabindex="-1">\u7B2C\u4E09\u7248 <a class="header-anchor" href="#\u7B2C\u4E09\u7248" aria-hidden="true">#</a></h3><p>\u6709\u65F6\u5019\u6211\u4EEC\u8BA2\u9605\u4E4B\u540E\u60F3\u8981\u53D6\u6D88\uFF0C\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F</p><ul><li><p>\u53D6\u6D88\u5355\u4E2A\u4E8B\u4EF6</p></li><li><p>\u53D6\u6D88\u540C\u4E00\u7C7B\u4E8B\u4EF6</p></li></ul><div class="language-js"><pre><code><span class="token punctuation">{</span>
  
  <span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_events <span class="token operator">=</span> <span class="token punctuation">{</span>
  
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">on</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> callBack</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callBack<span class="token punctuation">)</span> 
    <span class="token punctuation">}</span>
    <span class="token function">off</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> fns <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span>
      <span class="token comment">// \u4E0D\u4F20\u5177\u4F53\u4E8B\u4EF6\u5373\u53D6\u6D88\u8FD9\u4E00\u7C7B\u4E8B\u4EF6</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        fns<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> fnIndex <span class="token operator">=</span> fns<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> _fn <span class="token operator">===</span> fn<span class="token punctuation">)</span>
        fnIndex <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> fns<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>fnIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> 
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_events<span class="token punctuation">[</span>event<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cbs</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">cbs</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">let</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  
  
  eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> test3<span class="token punctuation">)</span>
  
  eventEmitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> test3<span class="token punctuation">)</span>

  eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span>

  <span class="token comment">// 1</span>
  <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u597D\u5904" tabindex="-1">\u597D\u5904 <a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a></h2><ul><li><p>\u65F6\u95F4\u4E0A\u89E3\u8026\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5F02\u6B65\u7F16\u7A0B</p></li><li><p>\u5BF9\u8C61\u4E0A\u89E3\u8026\uFF0C\u5E2E\u52A9\u5B8C\u6210\u4E00\u4E9B\u677E\u8026\u5408\u7684\u4EE3\u7801</p></li></ul><h2 id="\u574F\u5904" tabindex="-1">\u574F\u5904 <a class="header-anchor" href="#\u574F\u5904" aria-hidden="true">#</a></h2><ul><li><p>\u9700\u8981\u6D88\u8017\u4E00\u5B9A\u7684\u65F6\u95F4\u548C\u7A7A\u95F4</p></li><li><p>\u5F31\u5316\u4E86\u5BF9\u8C61\u7684\u8054\u7CFB\uFF0C\u8FC7\u5EA6\u4F7F\u7528\u4F1A\u5BFC\u81F4\u7A0B\u5EA6\u96BE\u4EE5\u8DDF\u8E2A\u7EF4\u62A4\u548C\u7406\u89E3</p></li></ul>`,18),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{h as __pageData,m as default};
