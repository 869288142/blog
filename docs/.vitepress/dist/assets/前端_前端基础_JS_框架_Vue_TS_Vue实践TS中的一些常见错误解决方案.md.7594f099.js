import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const m='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/TS/Vue\u5B9E\u8DF5TS\u4E2D\u7684\u4E00\u4E9B\u5E38\u89C1\u9519\u8BEF\u89E3\u51B3\u65B9\u6848.md"}',t={},o=p(`<p>###mixin\u62A5\u9519</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">,</span> Vue <span class="token punctuation">,</span>Mixins<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span>
<span class="token keyword">import</span> httpminix <span class="token keyword">from</span> <span class="token string">&#39;../mixin/httpMixin&#39;</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  mixins<span class="token operator">:</span><span class="token punctuation">[</span>httpminix<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">apiGet</span><span class="token punctuation">(</span><span class="token string">&#39;/show&#39;</span><span class="token punctuation">)</span> <span class="token comment">//HelloWorld\u4E0A\u6CA1\u6709apiGet\u65B9\u6CD5</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>###\u89E3\u51B3\u65B9\u6848</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">,</span> Vue <span class="token punctuation">,</span>Mixins<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span>
<span class="token keyword">import</span> httpminix <span class="token keyword">from</span> <span class="token string">&#39;../mixin/httpMixin&#39;</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token comment">// \u8FD9\u91CC\u4ECE\u7EE7\u627FVue\u6539\u6210\u7EE7\u627FMinix\u51FD\u6570\uFF0C\u8FD9\u6837\u5C31\u6709\u63D0\u793A\u4E86</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span> <span class="token keyword">extends</span> <span class="token class-name">Mixins</span><span class="token punctuation">(</span>httpminix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> r <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">apiGet</span><span class="token punctuation">(</span><span class="token string">&#39;/show&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>###\u6269\u5C55\u5C5E\u6027\u62A5\u9519 \u6211\u4EEC\u73B0\u5728\u4EE3\u7801\u91CC\u5199\u4E00\u6BB5window,\u7136\u540E\u7528\u7F16\u8F91\u5668\u8DF3\u8F6C\u5230\u5176.d.ts\u6587\u4EF6\u4E2D\u53BB</p><div class="language-ts"><pre><code><span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF window \u7C7B\u578B\u4E3AWindow</span>
<span class="token keyword">declare</span> <span class="token keyword">var</span> window<span class="token operator">:</span> Window<span class="token punctuation">;</span>
<span class="token comment">// \u622A\u53D6Window\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">Window</span>
</code></pre></div><p>\u7531\u4E8E\u8FD9\u4E2A\u63A5\u53E3\u4E3A\u5168\u5C40\u63A5\u53E3\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u58F0\u660E\u4E00\u4E2A\u540C\u540D\u5168\u5C40\u5168\u5C40\u63A5\u53E3\uFF0CTS\u4F1A\u5E2E\u6211\u4EEC\u5408\u5E76</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E5F\u53EF\u4EE5\u6DFB\u52A0 </span>
  <span class="token comment">// \u5B57\u7B26\u4E32\u7B7E\u540D \u53EF\u4EE5\u5141\u8BB8\u6DFB\u52A0\u672A\u77E5\u540D\u79F0\u5C5E\u6027</span>
  <span class="token punctuation">[</span>p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u8FD9\u6837\u5C31\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u4EE3\u7801\u4E0D\u62A5\u9519</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
window<span class="token punctuation">.</span>axios <span class="token operator">=</span> axios
</code></pre></div><p>\u7136\u540E\u6211\u4EEC\u53D1\u73B0</p><div class="language-ts"><pre><code>window<span class="token punctuation">.</span>axios <span class="token comment">//\u8FD9\u91CC\u6CA1\u6709\u5C5E\u6027\u63D0\u793A</span>
</code></pre></div><p>\u7136\u540E\u6211\u60F3\u628A\u8FD9\u4E2Aaxios\u5177\u4F53\u7C7B\u578B\u6302\u8F7D\u4E0A\u53BB,\u5F53\u7136\u4E00\u60F3\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837\u505A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>AxiosStatic<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  axios<span class="token operator">:</span> AxiosStatic
<span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u53D1\u73B0\u62A5\u9519\u4E86\uFF0Cwindow\u4E0A\u6CA1\u6709axios\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u5C31\u5F88\u7591\u60D1\uFF0C\u5C1D\u8BD5\u6539\u56DE\u53BB\uFF0C\u4ECD\u7136\u62A5\u9519</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>AxiosStatic<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u5C31\u60F3\u8FD9\u4E24\u4E2A\u533A\u522B\u5C31\u662F\u5BFC\u5165\u4E86\u4E00\u4E2A\u7C7B\u578B\uFF0C\u7A81\u7136\u60F3\u5230 ###TS\u4E2D\u6CA1\u6709import\u548Cexport\u7684TS\u6587\u4EF6\u53D8\u91CF\u88AB\u89C6\u4E3A\u5168\u5C40</p><p>\u7136\u540E\u56DE\u53BB\u4E00\u770B\u539F\u672CWindow\u7684\u5B9A\u4E49</p><div class="language-ts"><pre><code><span class="token comment">// \u6CE8\u610Flib.dom.d.ts\u8FD9\u91CC\u6CA1\u6709export</span>
<span class="token keyword">interface</span> <span class="token class-name">Window</span>
</code></pre></div><p>\u597D\u7684\uFF0C\u60F3\u901A\u4E86\uFF0C\u5C31\u662F\u56E0\u4E3A\u4F7F\u7528import\u5BFC\u5165\u4E86\u4E00\u4E2A\u7C7B\u578B\uFF0C\u5BFC\u81F4\u6211\u81EA\u5B9A\u4E49Window\u63A5\u53E3\u53D8\u6210\u4E86\u6A21\u5757\u5185\u7684\uFF0C\u8FD9\u65F6\u5019\u7684\u89E3\u51B3\u65B9\u6848\u5F53\u7136\u662F\u770B\u770B\u5185\u7F6E\u8BED\u6CD5\u6709\u6CA1\u6709\u80FD\u663E\u793A\u5B9A\u4E49\u5168\u5C40\u6027\u7684\u53D8\u91CF</p><div class="language-ts"><pre><code><span class="token comment">// bingo  \u6B64\u65F6window.axios\u6709\u63D0\u793A\u5566</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AxiosStatic <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span>
      axios<span class="token operator">:</span> AxiosStatic
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>TS\u4E3A\u6211\u4EEC\u5728\u6A21\u5757\u5B9A\u4E49\u5168\u5C40\u63D0\u4F9B\u4E86\u4E00\u4E2A\u65B9\u5F0F,\u7528\u4E8E\u89E3\u51B3\u5728\u6A21\u5757\u4E2D\u6269\u5C55\u5168\u5C40</p><div class="language-ts"><pre><code><span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token comment">// your type code</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6269\u5C55Vue\u5C5E\u6027\u4F8B\u5B50</p><div class="language-ts"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;vue/types/vue&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    $message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

\u5728\u7EC4\u4EF6\u7C7B\u4E2D\u53EF\u4EE5\u8FD9\u6837\u8BBF\u95EE
<span class="token keyword">this</span><span class="token punctuation">.</span>$messgae <span class="token comment">//\u8FD9\u91CC\u6709\u5C5E\u6027\u63D0\u793A</span>
</code></pre></div><p>####\u603B\u7ED3 \u9700\u8981\u6269\u5C55\u4E00\u4E2A\u7B2C\u4E09\u65B9\u58F0\u660E\u6587\u4EF6\uFF0C\u9700\u8981\u786E\u5B9A\u5176\u547D\u540D\u7A7A\u95F4\u4EE5\u53CA\u6269\u5C55\u53D8\u91CF\u5B9E\u73B0\u7684\u63A5\u53E3\u7ED3\u6784\uFF0C\u7136\u540E\u590D\u5236\u8BE5\u63A5\u53E3\u5199\u4E00\u6B21\u81EA\u5DF1\u7684\u7C7B\u578B\u5373\u53EF</p>`,24),e=[o];function c(l,k,i,u,r,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{m as __pageData,y as default};
