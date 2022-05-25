import{_ as e,c as a,o as n,a as s}from"./app.a3c81315.js";const f='{"title":"\u751F\u547D\u5468\u671F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u573A\u666F","slug":"\u573A\u666F"},{"level":2,"title":"\u8BBE\u8BA1\u7406\u5FF5","slug":"\u8BBE\u8BA1\u7406\u5FF5"},{"level":2,"title":"\u6E90\u7801\u5206\u6790","slug":"\u6E90\u7801\u5206\u6790"},{"level":3,"title":"beforeCreate","slug":"beforecreate"},{"level":3,"title":"created","slug":"created"},{"level":3,"title":"beforeMount","slug":"beforemount"},{"level":3,"title":"mounted","slug":"mounted"},{"level":3,"title":"beforeDestroy","slug":"beforedestroy"},{"level":3,"title":"destroyed","slug":"destroyed"},{"level":2,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3"},{"level":2,"title":"\u6709\u8DA3\u7684\u6269\u5C55","slug":"\u6709\u8DA3\u7684\u6269\u5C55"},{"level":3,"title":"\u66F4\u7075\u6D3B\u7684freeze","slug":"\u66F4\u7075\u6D3B\u7684freeze"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u6E90\u7801\u5206\u6790/\u7EC4\u4EF6/\u6269\u5C55/\u751F\u547D\u5468\u671F.md"}',t={},o=s(`<h1 id="\u751F\u547D\u5468\u671F" tabindex="-1">\u751F\u547D\u5468\u671F <a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a></h1><h2 id="\u573A\u666F" tabindex="-1">\u573A\u666F <a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a></h2><p>\u7528\u4E8E\u5728\u7EC4\u4EF6\u67D0\u4E2A\u65F6\u95F4\u8282\u70B9\u8FD0\u884C\uFF0CVue\u516C\u5F00\u4E86\u4EE5\u4E0B\u751F\u547Dhook</p><div class="language-js"><pre><code><span class="token comment">// \u521B\u5EFA\u524D\uFF0C\u65E0\u4EF7\u503C</span>
beforeCreate  
<span class="token comment">// \u521B\u5EFA\u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6\u6570\u636E </span>
created <span class="token operator">*</span>
<span class="token comment">// \u6302\u8F7D\u524D,\u65E0\u4EF7\u503C</span>
beforeMount
<span class="token comment">// \u6302\u8F7D\u540E</span>
mounted <span class="token operator">*</span>

<span class="token comment">// \u66F4\u65B0\u524D</span>
beforeUpdate
<span class="token comment">// \u66F4\u65B0\u5B8C\u6210\u540E</span>
updated

<span class="token comment">// \u9500\u6BC1\u524D</span>
beforeDestroy <span class="token operator">*</span>
<span class="token comment">// \u9500\u6BC1\u540E</span>
destroyed

\u7F13\u5B58hook
activated \u7F13\u5B58\u7EC4\u4EF6\u6FC0\u6D3B

deactivated \u7F13\u5B58\u7EC4\u4EF6\u505C\u7528
</code></pre></div><h2 id="\u8BBE\u8BA1\u7406\u5FF5" tabindex="-1">\u8BBE\u8BA1\u7406\u5FF5 <a class="header-anchor" href="#\u8BBE\u8BA1\u7406\u5FF5" aria-hidden="true">#</a></h2><p>hook\u9002\u7528\u4E8E\u65F6\u95F4\u8282\u70B9\u8FD0\u884C\u4E00\u4E9B\u4EE3\u7801\u7684\u673A\u5236\uFF0C\u5B9E\u73B0\u6BD4\u8F83\u8282\u70B9\uFF0C\u5173\u952E\u662F\u5982\u4F55\u628A\u63E1\u8FD0\u884C\u7684\u65F6\u95F4\u8282\u70B9</p><h2 id="\u6E90\u7801\u5206\u6790" tabindex="-1">\u6E90\u7801\u5206\u6790 <a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a></h2><h3 id="beforecreate" tabindex="-1">beforeCreate <a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>$attrs
<span class="token keyword">this</span><span class="token punctuation">.</span>$listeners
<span class="token keyword">this</span><span class="token punctuation">.</span>$slots
</code></pre></div><p>\u6CA1\u4EC0\u4E48\u4EF7\u503C\uFF0CVue3\u5DF2\u7ECF\u79FB\u9664</p><h3 id="created" tabindex="-1">created <a class="header-anchor" href="#created" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u6570\u636E</span>
props
inject 
data
computed

<span class="token comment">// \u65B9\u6CD5</span>
</code></pre></div><h3 id="beforemount" tabindex="-1">beforeMount <a class="header-anchor" href="#beforemount" aria-hidden="true">#</a></h3><p>\u6CA1\u4EC0\u4E48\u4EF7\u503C</p><h3 id="mounted" tabindex="-1">mounted <a class="header-anchor" href="#mounted" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>\u6240\u6709\u9009\u9879\u53EF\u7528\uFF0C\u6700\u65E9\u8981\u5728\u6B64\u9636\u6BB5\u624D\u80FD\u83B7\u53D6\u5230\u8282\u70B9
</code></pre></div><h3 id="beforedestroy" tabindex="-1">beforeDestroy <a class="header-anchor" href="#beforedestroy" aria-hidden="true">#</a></h3><p>\u5B9E\u4F8B\u9500\u6BC1\u524D\uFF0C\u53EF\u4EE5\u505A\u4E00\u4E9B\u6E05\u7406\u5DE5\u4F5C</p><h3 id="destroyed" tabindex="-1">destroyed <a class="header-anchor" href="#destroyed" aria-hidden="true">#</a></h3><p>\u5B9E\u4F8B\u9500\u6BC1\uFF0C\u6CA1\u4EF7\u503C</p><h2 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h2><p>created\u6570\u636E\u51C6\u5907\u5B8C\u6BD5</p><p>mounted\u662F\u6700\u65E9\u83B7\u53D6\u8282\u70B9\u7684hook</p><p>beforeDestroy\u7528\u4E8E\u6E05\u7406</p><p>activated \u7528\u4E8E\u4EE3\u66FF\u7F13\u5B58\u65F6\u7684mounted</p><p>deactivated \u7528\u4E8E\u4EE3\u66FF\u7F13\u5B58\u65F6\u7684beforeDestroy\u7528\u4E8E\u6E05\u7406</p><h2 id="\u6709\u8DA3\u7684\u6269\u5C55" tabindex="-1">\u6709\u8DA3\u7684\u6269\u5C55 <a class="header-anchor" href="#\u6709\u8DA3\u7684\u6269\u5C55" aria-hidden="true">#</a></h2><h3 id="\u66F4\u7075\u6D3B\u7684freeze" tabindex="-1">\u66F4\u7075\u6D3B\u7684freeze <a class="header-anchor" href="#\u66F4\u7075\u6D3B\u7684freeze" aria-hidden="true">#</a></h3><p>\u5728\u4E00\u4E9B\u573A\u666F\u4E0B\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981Vue\u7684\u54CD\u5E94\u5F0F\u80FD\u529B\uFF0C\u4F46\u662F\u6A21\u677F\u5FC5\u8981\u8981\u628A\u6570\u636E\u653E\u5230Vue\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u51BB\u7ED3\u6570\u636E\u63D0\u9AD8\u6027\u80FD</p><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5176\u5B9E\u6709\u66F4\u7075\u6D3B\u7684\u65B9\u6CD5\uFF0C\u4E0A\u9762\u7684list\u540E\u7EED\u662F\u65E0\u6CD5\u53D8\u6210\u54CD\u5E94\u5F0F\u7684\uFF0C\u800C\u4E0B\u9762\u7684\u65B9\u6CD5\u662F\u53EF\u884C\u7684\uFF0C\u4F46\u662F\u4E0D\u63D0\u5021\uFF0C\u5728\u53EF\u7EF4\u62A4\u6027\u4E0A\u5F88\u5DEE\uFF0C\u522B\u4EBA\u770B\u4E0D\u51FA\u6765\u8FD9\u6837\u662F\u4E0D\u54CD\u5E94\u7684\uFF0C\u5176\u6B21\u5F88\u5BB9\u6613\u8986\u76D6\u53D8\u91CF</p><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4F7F\u7528\u4E00\u4E2A\u672A\u54CD\u5E94\u6570\u636E</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> list
<span class="token punctuation">}</span>
</code></pre></div>`,32),p=[o];function r(c,d,l,i,u,h){return n(),a("div",null,p)}var m=e(t,[["render",r]]);export{f as __pageData,m as default};
