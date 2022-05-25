import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const m='{"title":"extend","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5"},{"level":3,"title":"\u573A\u666F","slug":"\u573A\u666F"},{"level":3,"title":"\u8BBE\u8BA1\u7406\u5FF5","slug":"\u8BBE\u8BA1\u7406\u5FF5"},{"level":3,"title":"\u6E90\u7801\u5206\u6790","slug":"\u6E90\u7801\u5206\u6790"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u6E90\u7801\u5206\u6790/\u7EC4\u4EF6/\u6269\u5C55/extend.md"}',p={},o=t(`<h1 id="extend" tabindex="-1">extend <a class="header-anchor" href="#extend" aria-hidden="true">#</a></h1><p>Vue.extend\u662F\u4E00\u4E2A\u5E73\u65F6\u5F00\u53D1\u7528\u7684\u6BD4\u8F83\u5C11\u7684API\uFF0C\u5B83\u5728\u4E00\u4E9B\u573A\u666F\u4E0B\u5F88\u6709\u7528</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;mount-point&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token comment">// \u521B\u5EFA\u6784\u9020\u5668</span>
<span class="token keyword">var</span> Profile <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;p&gt;{{firstName}} {{lastName}} aka {{alias}}&lt;/p&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Walter&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;White&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;Heisenberg&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u521B\u5EFA Profile \u5B9E\u4F8B\uFF0C\u5E76\u6302\u8F7D\u5230\u4E00\u4E2A\u5143\u7D20\u4E0A\u3002</span>
<span class="token keyword">new</span> <span class="token class-name">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#mount-point&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u573A\u666F" tabindex="-1">\u573A\u666F <a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a></h3><ul><li>\u7528\u4E8E\u547D\u4EE4\u5F0FUI\u7F16\u7A0B\uFF0C\u6BD4\u5982toast</li></ul><h3 id="\u8BBE\u8BA1\u7406\u5FF5" tabindex="-1">\u8BBE\u8BA1\u7406\u5FF5 <a class="header-anchor" href="#\u8BBE\u8BA1\u7406\u5FF5" aria-hidden="true">#</a></h3><ul><li>extend\u8FD9\u79CD\u673A\u5236\u4E2A\u4EBA\u89C9\u5F97\u5728\u524D\u7AEF\u662F\u6BD4\u8F83\u5C11\u7528\u7684\uFF0C\u4E00\u4E2A\u53EF\u80FD\u5C31\u662F\u4E3A\u4E86\u5B9E\u73B0mixin\u673A\u5236</li></ul><h3 id="\u6E90\u7801\u5206\u6790" tabindex="-1">\u6E90\u7801\u5206\u6790 <a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>    Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">extendOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// Super\u5C31\u662FVue</span>
      <span class="token keyword">var</span> Super <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

      <span class="token keyword">var</span> SuperId <span class="token operator">=</span> Super<span class="token punctuation">.</span>cid<span class="token punctuation">;</span>

      <span class="token keyword">var</span> cachedCtors <span class="token operator">=</span> extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">||</span> <span class="token punctuation">(</span>extendOptions<span class="token punctuation">.</span>_Ctor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


      <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// \u7EE7\u627F\u5B9E\u4F8B\u5C5E\u6027</span>
      <span class="token keyword">var</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">// \u7EE7\u627F\u539F\u578B</span>
      <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Super</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// \u6539\u5199\u6539\u9020\u5176\u6784\u9020\u5668\u6307\u5411</span>
      <span class="token class-name">Sub</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Sub<span class="token punctuation">;</span>

      Sub<span class="token punctuation">.</span>cid <span class="token operator">=</span> cid<span class="token operator">++</span><span class="token punctuation">;</span>

      <span class="token comment">// \u5408\u5E76\u7236\u6784\u9020\u5668\u7684options</span>
      Sub<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
        Super<span class="token punctuation">.</span>options<span class="token punctuation">,</span>
        extendOptions
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u7EE7\u627F\u9759\u6001\u65B9\u6CD5</span>
      Sub<span class="token punctuation">.</span>extend <span class="token operator">=</span> Super<span class="token punctuation">.</span>extend<span class="token punctuation">;</span>
      Sub<span class="token punctuation">.</span>mixin <span class="token operator">=</span> Super<span class="token punctuation">.</span>mixin<span class="token punctuation">;</span>
      Sub<span class="token punctuation">.</span>use <span class="token operator">=</span> Super<span class="token punctuation">.</span>use<span class="token punctuation">;</span>

      <span class="token comment">// cache constructor</span>
      cachedCtors<span class="token punctuation">[</span>SuperId<span class="token punctuation">]</span> <span class="token operator">=</span> Sub<span class="token punctuation">;</span>
      <span class="token keyword">return</span> Sub
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u5916\u90E8\u8C03\u7528\u90FD\u9700\u8981\u8FD9\u6837</p>`,11),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
