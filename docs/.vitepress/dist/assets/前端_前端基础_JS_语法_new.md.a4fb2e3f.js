import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const w='{"title":"new","description":"","frontmatter":{},"headers":[],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u8BED\u6CD5/new.md"}',t={},o=p(`<h1 id="new" tabindex="-1">new <a class="header-anchor" href="#new" aria-hidden="true">#</a></h1><p>new \u64CD\u4F5C\u7B26\u505A\u4E86\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C06\u5BF9\u8C61\u8D4B\u503C\u7ED9this</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//Person {}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;cj&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span> 
</code></pre></div><ol start="2"><li>\u6267\u884C\u6784\u9020\u51FD\u6570\u7684\u4EE3\u7801\uFF0C\u5C06\u6784\u9020\u5668\u4E2D\u7684this.prop\u5C5E\u6027\u6DFB\u52A0\u5230this\u4E0A</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//Person {}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//Person {name: &#39;cj&#39;, age: 24}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span> <span class="token punctuation">(</span><span class="token string">&#39;cj&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u4E3Athis\u5BF9\u8C61\u8BBE\u7F6E\u539F\u578B\u4E3A\u5176f.prototype \u8BBE\u7F6E\u6784\u9020\u51FD\u6570\u7684constructor\u6307\u5411\u6784\u9020\u51FD\u6570\u672C\u8EAB</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">//\u76F8\u5F53\u4E8Ethis.__proto__ = String.prototype</span>
  <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Person <span class="token comment">//\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u7528\u4E8E\u5206\u8FA8\u7C7B\u578B\uFF0C\u73B0\u5728\u5E38\u7528instanceof \u6765\u9274\u522B\u539F\u578B</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span> <span class="token comment">//\u53EF\u6709\u53EF\u65E0,\u9690\u5F0F\u8FD4\u56DE</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;cj&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span> <span class="token comment">//\u7531Person\u7C7B\u578B\u53D8\u6210\u4E86String\u7C7B\u578B</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">//String {name: &#39;cj&#39;, age: 24}</span>
</code></pre></div><ol start="4"><li>\u9690\u5F0Freturn this \u5148\u8BC1\u660Enew \u8C03\u7528\u51FD\u6570\u6700\u7EC8\u64CD\u4F5C\u8FD4\u56DE\u7684\u65F6\u5019\u51FD\u6570\u7684\u8FD4\u56DE\u503C</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u53EF\u6709\u53EF\u65E0,\u9690\u5F0F\u8FD4\u56DE,\u8FD9\u91CC\u82E5\u662F\u8FD4\u56DE\u57FA\u672C\u7C7B\u578B\u3001\u7CFB\u7EDF\u4F1A\u8FD4\u56DEthis\u5BF9\u8C61 \u53EF\u4EE5\u8BD5\u8BD5 return null</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;cj&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">//{} \u8BC1\u660Enew\u64CD\u4F5C\u7B26\u5BF9\u51FD\u6570\u64CD\u4F5C\u662F\u8FD4\u56DE\u5176\u51FD\u6570\u8FD4\u56DE\u503C</span>
</code></pre></div><p>\u5B8C\u6574\u7684new\u6A21\u62DF\u5B9E\u73B0\uFF0C\u66F4\u8BE6\u7EC6\u7684\u5EFA\u8BAE\u9605\u8BFBECMAScript\u89C4\u8303</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">_new</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>agrs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">//\u5229\u7528\u95ED\u5305\u5206\u79BB\u6784\u9020\u51FD\u6570\u548C\u53C2\u6570</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//\u521B\u5EFA\u65B0\u5BF9\u8C61</span>
    Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> f<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token comment">// \u7B49\u540C\u4E8Eobj.__proto__ = f.prototype \u8D4B\u4E88\u65B0\u5BF9\u8C61\u539F\u578B</span>
    f<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> f <span class="token comment">//\u5C06\u6784\u9020\u5668\u539F\u578B\u7684constructor\u8BBE\u7F6E\u4E3A\u6784\u9020\u5668\u672C\u8EAB</span>
    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">f</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">//\u5C06\u53C2\u6570\u8D4B\u503C\u5230\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">return</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj <span class="token comment">//\u5982\u679C\u8C03\u7528\u7684\u6784\u9020\u51FD\u6570\u6709\u5F15\u7528\u7C7B\u578B\u7684\u8FD4\u56DE\u503C\u5219\u8FD4\u56DE\u5176\u8FD4\u56DE\u503C\uFF0C\u5426\u5219\u8FD4\u56DE\u65B0\u5BF9\u8C61</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token function">_new</span><span class="token punctuation">(</span>Person<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;cj&#39;</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token comment">//Person {name: &#39;cj&#39;, age: 24}</span>
</code></pre></div>`,12),e=[o];function c(l,u,k,r,i,m){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{w as __pageData,g as default};
