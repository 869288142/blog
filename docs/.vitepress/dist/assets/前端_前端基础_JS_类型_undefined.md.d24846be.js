import{_ as n,c as s,o as a,a as e}from"./app.a3c81315.js";const h='{"title":"undefined","description":"","frontmatter":{},"headers":[{"level":2,"title":"undefined(\u672A\u5B9A\u4E49)","slug":"undefined-\u672A\u5B9A\u4E49"},{"level":2,"title":"undefined undeclared","slug":"undefined-undeclared"},{"level":3,"title":"typeof\u5BF9\u672A\u5B9A\u4E49\u53D8\u91CF\u548C\u672A\u58F0\u660E\u53D8\u91CF\u5904\u7406\u4E00\u89C6\u540C\u4EC1","slug":"typeof\u5BF9\u672A\u5B9A\u4E49\u53D8\u91CF\u548C\u672A\u58F0\u660E\u53D8\u91CF\u5904\u7406\u4E00\u89C6\u540C\u4EC1"},{"level":2,"title":"undefined\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57","slug":"undefined\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57"},{"level":2,"title":"\u4F7F\u7528void 0\u83B7\u53D6\u5B89\u5168\u7684undefined","slug":"\u4F7F\u7528void-0\u83B7\u53D6\u5B89\u5168\u7684undefined"},{"level":2,"title":"undefined\u7528\u9014","slug":"undefined\u7528\u9014"},{"level":2,"title":"undefined\u68C0\u6D4B","slug":"undefined\u68C0\u6D4B"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u7C7B\u578B/undefined.md"}',t={},o=e(`<h1 id="undefined" tabindex="-1">undefined <a class="header-anchor" href="#undefined" aria-hidden="true">#</a></h1><h2 id="undefined-\u672A\u5B9A\u4E49" tabindex="-1">undefined(\u672A\u5B9A\u4E49) <a class="header-anchor" href="#undefined-\u672A\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u4EC0\u4E48\u53EB\u672A\u5B9A\u4E49\uFF1F</p><div class="language-js"><pre><code><span class="token keyword">let</span> a <span class="token comment">//\u8FD9\u662F\u672A\u5B9A\u4E49\uFF1F \u8FD8\u662F\u8BF4\u4E00\u4E2A\u672A\u5B58\u5728\u7684\u53D8\u91CFb\u662F\u672A\u5B9A\u4E49</span>
</code></pre></div><p>\u5F15\u5165\u4E00\u4E2AC++\u7684\u6982\u5FF5\uFF0C\u58F0\u660E\u548C\u5B9A\u4E49</p><div class="language-js"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">//\u5B9A\u4E49\uFF1A\u53EF\u4EE5\u4E3A\u53D8\u91CF\u5206\u914D\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7ED9\u53D8\u91CF\u4E00\u4E2A\u521D\u59CB\u503C</span>

<span class="token keyword">let</span> b <span class="token comment">//\u58F0\u660E\uFF1A\u544A\u8BC9\u7F16\u8BD1\u5668\u8FD9\u4E2A\u53D8\u91CF\u7684\u540D\u5B57\u548C\u7C7B\u578B</span>
</code></pre></div><h2 id="undefined-undeclared" tabindex="-1">undefined undeclared <a class="header-anchor" href="#undefined-undeclared" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// let a \u58F0\u660E</span>
<span class="token comment">// \u672A\u58F0\u660E</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  a
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  error <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u53D8\u91CF\u672A\u5B9A\u4E49&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="typeof\u5BF9\u672A\u5B9A\u4E49\u53D8\u91CF\u548C\u672A\u58F0\u660E\u53D8\u91CF\u5904\u7406\u4E00\u89C6\u540C\u4EC1" tabindex="-1">typeof\u5BF9\u672A\u5B9A\u4E49\u53D8\u91CF\u548C\u672A\u58F0\u660E\u53D8\u91CF\u5904\u7406\u4E00\u89C6\u540C\u4EC1 <a class="header-anchor" href="#typeof\u5BF9\u672A\u5B9A\u4E49\u53D8\u91CF\u548C\u672A\u58F0\u660E\u53D8\u91CF\u5904\u7406\u4E00\u89C6\u540C\u4EC1" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
b <span class="token comment">//\u6CA1\u6709\u58F0\u660E\u7684\u53D8\u91CF</span>
<span class="token keyword">typeof</span> a <span class="token comment">//undefined</span>
<span class="token keyword">typeof</span> b  <span class="token comment">//undefined</span>
</code></pre></div><p>\u5728\u8FD9\u79CD\u673A\u5236\uFF0Ctypeof\u63D0\u4F9B\u4E86\u4E00\u79CD\u5BF9\u672A\u5B9A\u4E49\u53D8\u91CF\u548C\u672A\u58F0\u660E\u53D8\u91CF100%\u5B89\u5168\u7684\u68C0\u6D4B\u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token comment">//DEBUG \u662F\u4E00\u4E2A\u5F00\u53D1\u73AF\u5883\u4E0B\u5B9A\u4E49\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0B\u6CA1\u6709\u8FD9\u4E2A\u53D8\u91CF</span>
<span class="token comment">// \u8FD9\u6837\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0CReferenceError: DEBUG is not defined</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">DEBUG</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;Debugging is starting&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8FD9\u6837\u662F\u5B89\u5168\u7684</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token constant">DEBUG</span> <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;Debugging is starting&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="undefined\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57" tabindex="-1">undefined\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57 <a class="header-anchor" href="#undefined\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57" aria-hidden="true">#</a></h2><p>\u4E5F\u8BB8\u4F60\u4E0D\u77E5\u9053,<strong>undefined\u5E76\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57</strong>\uFF0C\u8FD9\u610F\u5473\u7740\u6211\u4EEC\u53EF\u4EE5<strong>\u5B9A\u4E49</strong>\u5B83\u6216\u8005\u7ED9\u5B83<strong>\u8D4B\u503C</strong>,\u4F46\u662F\u6C38\u8FDC\u4E0D\u8981\u8FD9\u6837\u5B50\u505A</p><div class="language-js"><pre><code><span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">//\u53EF\u4EE5,\u4F46\u662F\u6CA1\u6548\u679C</span>

<span class="token comment">// \u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\u53EBundefined,\u4F46\u662F\u6C38\u8FDC\u4E0D\u8981\u8FD9\u6837\u505A</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token keyword">undefined</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4F7F\u7528void-0\u83B7\u53D6\u5B89\u5168\u7684undefined" tabindex="-1">\u4F7F\u7528void 0\u83B7\u53D6\u5B89\u5168\u7684undefined <a class="header-anchor" href="#\u4F7F\u7528void-0\u83B7\u53D6\u5B89\u5168\u7684undefined" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">void</span> <span class="token number">0</span> <span class="token comment">// undefined</span>
</code></pre></div><h2 id="undefined\u7528\u9014" tabindex="-1">undefined\u7528\u9014 <a class="header-anchor" href="#undefined\u7528\u9014" aria-hidden="true">#</a></h2><p>undefined\u53EA\u662F\u4F5C\u4E3A\u7CFB\u7EDF\u7ED9\u672A\u5B9A\u4E49\u53D8\u91CF\u7684\u521D\u59CB\u503C\uFF0C\u6211\u4EEC\u6700\u597D\u4E0D\u8981\u624B\u52A8\u628A\u5B83\u8D4B\u503C\u7ED9\u53D8\u91CF</p><h2 id="undefined\u68C0\u6D4B" tabindex="-1">undefined\u68C0\u6D4B <a class="header-anchor" href="#undefined\u68C0\u6D4B" aria-hidden="true">#</a></h2><p>undefined\u5728\u89C4\u8303\u4E0B\uFF0C\u53EA\u51FA\u73B0\u5728\u53D8\u91CF\u672A\u5B9A\u4E49\u6216\u8005\u672A\u58F0\u660E\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E0B\u9762100%\u5B89\u5168\u7684\u68C0\u6D4B\u65B9\u6CD5</p><div class="language-js"><pre><code>  <span class="token keyword">typeof</span> v <span class="token operator">===</span> <span class="token string">&quot;undefined&quot;</span> <span class="token comment">//\u68C0\u6D4B\u4E00\u4E2A\u53D8\u91CF\u672A\u5B9A\u4E49\u6216\u672A\u58F0\u660E</span>
</code></pre></div>`,22),p=[o];function c(d,u,i,l,r,k){return a(),s("div",null,p)}var g=n(t,[["render",c]]);export{h as __pageData,g as default};
