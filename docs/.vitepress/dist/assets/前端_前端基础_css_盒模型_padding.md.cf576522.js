import{_ as n,c as a,o as s,a as p}from"./app.a3c81315.js";const h='{"title":"padding","description":"","frontmatter":{},"headers":[{"level":2,"title":"padding\u7279\u6027","slug":"padding\u7279\u6027"},{"level":2,"title":"padding\u7684\u767E\u5206\u6BD4\u503C","slug":"padding\u7684\u767E\u5206\u6BD4\u503C"},{"level":2,"title":"padding\u4E0E\u56FE\u5F62\u7ED8\u5236","slug":"padding\u4E0E\u56FE\u5F62\u7ED8\u5236"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/css/\u76D2\u6A21\u578B/padding.md"}',t={},o=p(`<h1 id="padding" tabindex="-1">padding <a class="header-anchor" href="#padding" aria-hidden="true">#</a></h1><h2 id="padding\u7279\u6027" tabindex="-1">padding\u7279\u6027 <a class="header-anchor" href="#padding\u7279\u6027" aria-hidden="true">#</a></h2><p>\u5185\u8054\u5143\u7D20\u7684padding\u5728\u89C6\u89C9\u5C42\u548C\u5E03\u5C40\u4E0A\u65E0\u5F71\u54CD\uFF0C\u53EF\u4EE5\u7528\u6765\u5728\u4E0D\u6539\u53D8\u5E03\u5C40\u60C5\u51B5\u4E0B,\u6BD4\u5982\u4EE5\u4E0B\u5E94\u7528\uFF1A</p><p><strong>\u589E\u52A0\u70B9\u51FB\u533A\u57DF</strong></p><div class="language-css"><pre><code><span class="token selector">article a</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.25em 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5B9E\u73B0\u9AD8\u5EA6\u53EF\u63A7\u7684\u5206\u5272\u7EBF</strong></p><div class="language-html"><pre><code>a + a:before {
  content: &quot;&quot;;
  font-size: 0;
  padding: 10px 3px 1px;
  margin-left: 6px;
  border-left: solid 1px gray;
}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>\u767B\u5F55<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>\u6CE8\u518C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="padding\u7684\u767E\u5206\u6BD4\u503C" tabindex="-1">padding\u7684\u767E\u5206\u6BD4\u503C <a class="header-anchor" href="#padding\u7684\u767E\u5206\u6BD4\u503C" aria-hidden="true">#</a></h2><ol><li><p><strong>\u4E0D\u652F\u6301\u8D1F\u503C</strong></p></li><li><p><strong>\u652F\u6301\u767E\u5206\u6BD4\u503C</strong>\uFF0C\u4F46\u662F\u5176\u767E\u5206\u6BD4\u503C\u6C38\u8FDC\u76F8\u5BF9\u4E0E\u5BBD\u5EA6\u8BA1\u7B97</p></li></ol><p>\u8FD9\u70B9\u53EF\u4EE5\u5B9E\u73B0\u81EA\u9002\u5E94\u56FE\u50CF\u5982</p><div class="language-css"><pre><code>  <span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><h2 id="padding\u4E0E\u56FE\u5F62\u7ED8\u5236" tabindex="-1">padding\u4E0E\u56FE\u5F62\u7ED8\u5236 <a class="header-anchor" href="#padding\u4E0E\u56FE\u5F62\u7ED8\u5236" aria-hidden="true">#</a></h2><p>padding\u548Cbackground-clip\u914D\u5408\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u56FE\u5F62\u7684\u7ED8\u5236\u6548\u679C\u3002</p><p><strong>\u4E09\u6A2A\u7EBF</strong></p><div class="language-css"><pre><code><span class="token selector">.icon-menu</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 140px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 35px 0<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 10px solid<span class="token punctuation">;</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 10px solid<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>\u53CC\u5C42\u539F\u70B9\u6548\u679C</strong></p><div class="language-css"><pre><code><span class="token selector">.icon-dot</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 10px solid<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),e=[o];function c(l,i,u,r,d,k){return s(),a("div",null,e)}var _=n(t,[["render",c]]);export{h as __pageData,_ as default};
