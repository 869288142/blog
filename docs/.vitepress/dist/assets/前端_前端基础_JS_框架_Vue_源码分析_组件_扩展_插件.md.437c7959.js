import{_ as n,c as a,o as s,a as t}from"./app.a3c81315.js";const _='{"title":"\u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5"},{"level":2,"title":"\u8BBE\u8BA1\u7406\u5FF5","slug":"\u8BBE\u8BA1\u7406\u5FF5"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u6E90\u7801\u5206\u6790/\u7EC4\u4EF6/\u6269\u5C55/\u63D2\u4EF6.md"}',p={},o=t(`<h1 id="\u63D2\u4EF6" tabindex="-1">\u63D2\u4EF6 <a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a></h1><p>\u63D2\u4EF6\u673A\u5236\u662F\u5F88\u591A\u6846\u67B6\u90FD\u63D0\u4F9B\u7684\u529F\u80FD\uFF0CVue\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u63D2\u4EF6\u673A\u5236</p><h2 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>MyPlugin<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. \u6DFB\u52A0\u5168\u5C40\u65B9\u6CD5\u6216\u5C5E\u6027</span>
  Vue<span class="token punctuation">.</span><span class="token function-variable function">myGlobalMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u903B\u8F91...</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 2. \u6DFB\u52A0\u5168\u5C40\u8D44\u6E90</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">bind</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u903B\u8F91...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 3. \u6CE8\u5165\u7EC4\u4EF6\u9009\u9879</span>
  Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u903B\u8F91...</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 4. \u6DFB\u52A0\u5B9E\u4F8B\u65B9\u6CD5</span>
  <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">methodOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u903B\u8F91...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyPlugin<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u8BBE\u8BA1\u7406\u5FF5" tabindex="-1">\u8BBE\u8BA1\u7406\u5FF5 <a class="header-anchor" href="#\u8BBE\u8BA1\u7406\u5FF5" aria-hidden="true">#</a></h2><ul><li>\u7EA6\u5B9A\u4E0E\u5F00\u53D1\u8005\u7684\u6269\u5C55\u534F\u8BAE\uFF0C\u964D\u4F4E\u4F7F\u7528\u8005\u7684\u8BA4\u77E5\u8D1F\u62C5\uFF0C\u5F00\u53D1\u6846\u67B6\u672C\u8EAB\u7684\u6269\u5C55\u5165\u53E3\u7ED9\u8D21\u732E\u8005</li></ul>`,6),e=[o];function c(u,l,i,k,r,d){return s(),a("div",null,e)}var f=n(p,[["render",c]]);export{_ as __pageData,f as default};
