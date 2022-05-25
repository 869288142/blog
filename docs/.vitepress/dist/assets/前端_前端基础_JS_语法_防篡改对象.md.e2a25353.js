import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const f='{"title":"\u9632\u7BE1\u6539\u5BF9\u8C61","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0D\u53EF\u6269\u5C55\u5BF9\u8C61","slug":"\u4E0D\u53EF\u6269\u5C55\u5BF9\u8C61"},{"level":2,"title":"\u5BC6\u5C01\u5BF9\u8C61","slug":"\u5BC6\u5C01\u5BF9\u8C61"},{"level":2,"title":"\u51BB\u7ED3\u5BF9\u8C61","slug":"\u51BB\u7ED3\u5BF9\u8C61"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u8BED\u6CD5/\u9632\u7BE1\u6539\u5BF9\u8C61.md"}',p={},o=t(`<h1 id="\u9632\u7BE1\u6539\u5BF9\u8C61" tabindex="-1">\u9632\u7BE1\u6539\u5BF9\u8C61 <a class="header-anchor" href="#\u9632\u7BE1\u6539\u5BF9\u8C61" aria-hidden="true">#</a></h1><p>\u4E00\u4E9B\u6838\u5FC3\u5BF9\u8C61\u53EF\u80FD\u4F1A\u88AB\u610F\u5916\u5730\u4FEE\u6539\uFF0C\u751A\u81F3\u91CD\u5199\u539F\u751F\u5BF9\u8C61\uFF0CECMAScript5\u5BF9\u8FD9\u4E2A\u95EE\u9898\u63D0\u51FA\u4E86\u4E00\u7CFB\u5217\u89E3\u51B3\u65B9\u6848</p><h2 id="\u4E0D\u53EF\u6269\u5C55\u5BF9\u8C61" tabindex="-1">\u4E0D\u53EF\u6269\u5C55\u5BF9\u8C61 <a class="header-anchor" href="#\u4E0D\u53EF\u6269\u5C55\u5BF9\u8C61" aria-hidden="true">#</a></h2><p><strong>\u4E0D\u80FD\u6DFB\u52A0\u5C5E\u6027\u548C\u65B9\u6CD5</strong></p><div class="language-js"><pre><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;cj&quot;</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">preventExtensions</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u4E0D\u53EF\u6269\u5C55</span>
person<span class="token punctuation">.</span>n <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: &quot;cj&quot; }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u68C0\u6D4B\u662F\u5426\u53EF\u6269\u5C55 false</span>
</code></pre></div><h2 id="\u5BC6\u5C01\u5BF9\u8C61" tabindex="-1">\u5BC6\u5C01\u5BF9\u8C61 <a class="header-anchor" href="#\u5BC6\u5C01\u5BF9\u8C61" aria-hidden="true">#</a></h2><p><strong>\u4E0D\u53EF\u6269\u5C55\u3001\u800C\u4E14\u73B0\u6709\u6210\u5458\u7684[[Configurable]]\u8BBE\u7F6E\u4E3Afalse\uFF0C\u4E0D\u80FD\u5220\u9664\u548C\u91CD\u5B9A\u4E49\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F46\u662F\u53EF\u4EE5\u4FEE\u6539\u5C5E\u6027</strong></p><div class="language-js"><pre><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;cj&quot;</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
<span class="token keyword">delete</span> person<span class="token punctuation">.</span>name
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cj</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token comment">// cannot redefine property name</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;1&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cj</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isSealed</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre></div><h2 id="\u51BB\u7ED3\u5BF9\u8C61" tabindex="-1">\u51BB\u7ED3\u5BF9\u8C61 <a class="header-anchor" href="#\u51BB\u7ED3\u5BF9\u8C61" aria-hidden="true">#</a></h2><p><strong>\u5BF9\u8C61\u4E0D\u53EF\u6269\u5C55\u3001\u5BC6\u5C01\uFF0C\u800C\u4E14\u5BF9\u8C61\u5C5E\u6027\u7684[[Writable]],\u5982\u679C\u5B9A\u4E49[[Set]]\u51FD\u6570\uFF0C\u8BBF\u95EE\u5668\u4ECD\u7136\u662F\u53EF\u5199\u7684</strong></p><div class="language-js"><pre><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;cj&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">_age</span><span class="token operator">:</span> <span class="token number">22</span> <span class="token punctuation">,</span><span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_age <span class="token operator">=</span> val
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cj</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">isFrozen</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre></div>`,11),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
