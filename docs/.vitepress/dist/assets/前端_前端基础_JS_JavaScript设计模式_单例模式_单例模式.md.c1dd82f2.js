import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const y='{"title":"\u5355\u4F8B\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u5B9E\u73B0-\u9488\u5BF9\u5BF9\u8C61","slug":"\u5B9E\u73B0-\u9488\u5BF9\u5BF9\u8C61"},{"level":3,"title":"\u4E0D\u900F\u660E\u5B9E\u73B0","slug":"\u4E0D\u900F\u660E\u5B9E\u73B0"},{"level":3,"title":"\u900F\u660E\u5B9E\u73B0","slug":"\u900F\u660E\u5B9E\u73B0"},{"level":3,"title":"\u901A\u7528\u5355\u4F8B-\u9488\u5BF9\u903B\u8F91","slug":"\u901A\u7528\u5355\u4F8B-\u9488\u5BF9\u903B\u8F91"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u5355\u4F8B\u6A21\u5F0F/\u5355\u4F8B\u6A21\u5F0F.md"}',p={},o=t(`<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1">\u5355\u4F8B\u6A21\u5F0F <a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9</p><h2 id="\u5B9E\u73B0-\u9488\u5BF9\u5BF9\u8C61" tabindex="-1">\u5B9E\u73B0-\u9488\u5BF9\u5BF9\u8C61 <a class="header-anchor" href="#\u5B9E\u73B0-\u9488\u5BF9\u5BF9\u8C61" aria-hidden="true">#</a></h2><h3 id="\u4E0D\u900F\u660E\u5B9E\u73B0" tabindex="-1">\u4E0D\u900F\u660E\u5B9E\u73B0 <a class="header-anchor" href="#\u4E0D\u900F\u660E\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u4E0D\u900F\u660E\u5B9E\u73B0\u662F\u6307\u4F7F\u7528\u8005\u9700\u8981\u77E5\u9053\u8FD9\u4E2A\u7C7B\u662F\u5426\u662F\u5355\u4F8B\uFF0C\u4E00\u822C\u7279\u70B9\u662F\u63D0\u4F9B\u4E86\u663E\u5F0F\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\uFF0C\u6BD4\u5982\u660E\u663E\u7684\u65B9\u6CD5 getInstance</p><p><strong>\u5229\u7528\u95ED\u5305\u7F13\u5B58\u5B9E\u4F8B</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Singleton<span class="token punctuation">.</span>getInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> instance
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
</code></pre></div><p><strong>\u5229\u7528\u6784\u9020\u5668\u7F13\u5B58\u5B9E\u4F8B</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Singleton<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u900F\u660E\u5B9E\u73B0" tabindex="-1">\u900F\u660E\u5B9E\u73B0 <a class="header-anchor" href="#\u900F\u660E\u5B9E\u73B0" aria-hidden="true">#</a></h3><p>\u900F\u660E\u5B9E\u73B0\u662F\u6307\u7528\u6237\u4E0D\u9700\u8981\u77E5\u9053\u5176\u4E00\u4E2A\u5355\u4F8B\u7C7B\uFF0C\u80FD\u591F\u50CF\u4EE5\u524D\u4E00\u6837\u4F7F\u7528\u666E\u901A\u7684 new \u6765\u56DE\u53BB\u5B9E\u4F8B</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Singleton<span class="token punctuation">.</span>instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u901A\u7528\u5355\u4F8B-\u9488\u5BF9\u903B\u8F91" tabindex="-1">\u901A\u7528\u5355\u4F8B-\u9488\u5BF9\u903B\u8F91 <a class="header-anchor" href="#\u901A\u7528\u5355\u4F8B-\u9488\u5BF9\u903B\u8F91" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u800C\u8A00\uFF0C\u5355\u4F8B\u7684\u5B9E\u73B0\u4F1A\u4E0E\u5176\u521B\u5EFA\u7684\u5BF9\u8C61\u521D\u59CB\u5316\u8026\u5408</p><div class="language-js"><pre><code><span class="token keyword">var</span> createLoginLayer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
\u3000<span class="token keyword">var</span> div<span class="token punctuation">;</span>
\u3000<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
\u3000\u3000<span class="token keyword">if</span> <span class="token punctuation">(</span>\uFF01div <span class="token punctuation">)</span><span class="token punctuation">{</span>
\u3000\u3000\u3000div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span> <span class="token string">&#39;div&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000\u3000div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u6211\u662F\u767B\u5F55\u6D6E\u7A97&#39;</span><span class="token punctuation">;</span>
\u3000\u3000\u3000div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
\u3000\u3000\u3000document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span> div <span class="token punctuation">)</span><span class="token punctuation">;</span>
\u3000\u3000<span class="token punctuation">}</span>
\u3000\u3000<span class="token keyword">return</span> div<span class="token punctuation">;</span>
\u3000<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5F39\u7A97\u6C38\u8FDC\u53EA\u9700\u8981\u521B\u5EFA\u4E00\u6B21</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;loginBtn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> loginLayer <span class="token operator">=</span> <span class="token function">createLoginLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  loginLayer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">&#39;block&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u6BB5\u5B9E\u73B0\u6709\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u7BA1\u7406\u5355\u4F8B\u548C\u521B\u5EFA\u5BF9\u8C61\u7684\u804C\u8D23\u8026\u5408\u5728createLoginLayer\uFF0C\u53EF\u4EE5\u9884\u89C1\uFF0C\u5982\u679C\u521B\u5EFA\u5BF9\u8C61\u7684\u5B9E\u73B0\u6539\u53D8\u4E86\u6216\u8005\u7BA1\u7406\u5355\u4F8B\u4E0D\u9700\u8981\u4E86\uFF0C\u90FD\u4F1A\u53BB\u4FEE\u6539createLoginLayer\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u5C06\u8FD9\u4E24\u4E2A\u804C\u8D23\u8FDB\u884C\u5206\u79BB</li></ul><p>\u6211\u4EEC\u5BF9\u7BA1\u7406\u5355\u4F8B\u7684\u903B\u8F91\u8FDB\u884C\u4E00\u6B21\u62BD\u8C61\u548C\u5C01\u88C5</p><div class="language-js"><pre><code>  <span class="token keyword">let</span> <span class="token function-variable function">getSingle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span> <span class="token parameter">fn</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">let</span>  result<span class="token punctuation">;</span>
    \u3000<span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    \u3000\u3000<span class="token keyword">return</span> result <span class="token operator">||</span> <span class="token punctuation">(</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    \u3000<span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div>`,20),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{y as __pageData,h as default};
