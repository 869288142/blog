import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const m='{"title":"props\u3001attrs\u5206\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BBE\u8BA1\u7406\u5FF5","slug":"\u8BBE\u8BA1\u7406\u5FF5"},{"level":3,"title":"\u4F18\u70B9\uFF1A","slug":"\u4F18\u70B9\uFF1A"},{"level":3,"title":"\u7F3A\u70B9\uFF1A","slug":"\u7F3A\u70B9\uFF1A"},{"level":2,"title":"props","slug":"props"},{"level":3,"title":"initProps","slug":"initprops"},{"level":3,"title":"propsData\u5904\u7406","slug":"propsdata\u5904\u7406"},{"level":3,"title":"\u5C0F\u7ED3","slug":"\u5C0F\u7ED3"},{"level":2,"title":"attrs","slug":"attrs"},{"level":3,"title":"render","slug":"render"},{"level":3,"title":"template","slug":"template"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u6E90\u7801\u5206\u6790/\u7EC4\u4EF6/\u6570\u636E/props\u3001attrs\u5DEE\u5F02.md"}',p={},o=t(`<h1 id="props\u3001attrs\u5206\u6790" tabindex="-1">props\u3001attrs\u5206\u6790 <a class="header-anchor" href="#props\u3001attrs\u5206\u6790" aria-hidden="true">#</a></h1><h2 id="\u8BBE\u8BA1\u7406\u5FF5" tabindex="-1">\u8BBE\u8BA1\u7406\u5FF5 <a class="header-anchor" href="#\u8BBE\u8BA1\u7406\u5FF5" aria-hidden="true">#</a></h2><ol><li><p>\u6839\u636Eprops\u5B9A\u4E49\u533A\u5206props\u4E0Eattrs</p></li><li><p>attrs\u9ED8\u8BA4\u88AB\u4F5C\u7528\u4E8E\u8282\u70B9</p></li></ol><h3 id="\u4F18\u70B9\uFF1A" tabindex="-1">\u4F18\u70B9\uFF1A <a class="header-anchor" href="#\u4F18\u70B9\uFF1A" aria-hidden="true">#</a></h3><p>\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8\u7EC4\u4EF6\u5185\u90E8\u7684\u6570\u636Eprops\uFF0C\u800C\u5176\u4F59\u5C5E\u6027\u9ED8\u8BA4\u6302\u8F7D\u5230DOM\u8282\u70B9\u4E0A\uFF0C\u964D\u4F4E\u4E86\u5F00\u53D1\u8BA4\u77E5\u6210\u672C</p><h3 id="\u7F3A\u70B9\uFF1A" tabindex="-1">\u7F3A\u70B9\uFF1A <a class="header-anchor" href="#\u7F3A\u70B9\uFF1A" aria-hidden="true">#</a></h3><ul><li>attrs\u9ED8\u8BA4\u88AB\u4F20\u9012\u7ED9\u6839\u8282\u70B9\uFF0C\u8FD9\u662F\u9ED8\u8BA4\u60C5\u51B5\uFF0C<strong>\u5F00\u53D1\u8005\u4E0D\u603B\u662F\u4F20\u9012attrs\u5230\u6839\u8282\u70B9</strong>\uFF0C\u6240\u4EE52.4\u5F00\u653E\u4E86<strong>inheritAttrs\u9009\u9879\uFF0C\u5C06attrs\u53EF\u9009\u4E3A\u5F00\u53D1\u8005\u63A7\u5236</strong></li></ul><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>\u4E0B\u8F7D\u4E00\u4EFD\u975E\u538B\u7F29\u7684vue\u6E90\u7801\uFF0C\u7136\u540E\u627E\u5230</p><div class="language-js"><pre><code><span class="token comment">// initProps\u51FD\u6570</span>
initProps
</code></pre></div><p>\u5F53\u7136\uFF0C\u8FD9\u4E2A\u641C\u5173\u952E\u5B57\u4E5F\u662F\u4E00\u4E2A\u8BFB\u6E90\u7801\u7684\u4E00\u4E2A\u5C0F\u6280\u5DE7, \u5728\u8FD9\u91CC\u52A0\u4E00\u4E2A\u65AD\u70B9</p><p><img src="https://s2.ax1x.com/2020/02/02/1Ylp40.png" alt=""></p><p><strong>\u6574\u4F53\u4EE3\u7801\u5982\u4E0B\uFF1A</strong></p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>c-button</span> <span class="token attr-name">:txt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>txt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ttt<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>c-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&quot;c-button&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{txt}}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> String
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// \u5B9A\u4E49\u4E00\u4EFD\u5168\u5C40\u6570\u636E</span>
    app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">txt</span><span class="token operator">:</span> <span class="token string">&#39;333&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p>\u7136\u540E\u67E5\u770B\u7ED3\u679C</p><p><img src="https://s2.ax1x.com/2020/02/02/1YlKC6.png" alt=""></p><p>\u6211\u4EEC\u5C31\u8FD9\u6837\u53EF\u4EE5\u5F80\u524D\u6216\u8005\u5F80\u540E\u8C03\u8BD5\u521D\u59CB\u5316props\u7684\u6574\u4E2A\u8FC7\u7A0B\u4E86</p><p><img src="https://s2.ax1x.com/2020/02/02/1YljxO.png" alt=""></p><p>\u524D\u4E00\u4E2A\u51FD\u6570\u662F<code>initState</code></p><p><img src="https://s2.ax1x.com/2020/02/02/1Y1JQU.png" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\u5176\u5B9E<strong>propsOptions\u662Foptions\u7684props\u5C5E\u6027</strong>\uFF0C\u5B9E\u8D28\u4E0A\uFF0C<strong>options\u5C31\u662F\u6211\u4EEC\u5E73\u5E38\u5199\u7684\u90A3\u4E2A\u7EC4\u4EF6\u5BF9\u8C61</strong></p><div class="language-js"><pre><code><span class="token comment">// options</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7B49\u7B49....</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="initprops" tabindex="-1">initProps <a class="header-anchor" href="#initprops" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">initProps</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> propsOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u6211\u4EEC\u8BBF\u95EE\u7684props</span>
    <span class="token keyword">var</span> props <span class="token operator">=</span> vm<span class="token punctuation">.</span>_props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// propsOptions\u662F\u6211\u4EEC\u5B9A\u4E49\u7684props</span>

    <span class="token comment">// \u5B9E\u9645\u4E0A\u7684props\u4F20\u5165\u503C</span>
    <span class="token keyword">var</span> propsData <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>propsData <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6240\u6709\u5B9A\u4E49\u7684props\uFF0C\u5904\u7406</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> propsOptions<span class="token punctuation">)</span> <span class="token function">loop</span><span class="token punctuation">(</span> key <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">key</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      
      <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token function">validateProp</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> propsOptions<span class="token punctuation">,</span> propsData<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u5B9A\u4E49props\u7684\u503C\u5230props\u4E0A</span>
      <span class="token function">defineReactive$$1</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRoot <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isUpdatingChildComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">warn</span><span class="token punctuation">(</span>
              <span class="token string">&quot;Avoid mutating a prop directly since the value will be &quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;overwritten whenever the parent component re-renders. &quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;Instead, use a data or computed property based on the prop&#39;s &quot;</span> <span class="token operator">+</span>
              <span class="token string">&quot;value. Prop being mutated: \\&quot;&quot;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">,</span>
              vm
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// \u5C06props\u5B9A\u4E49\u5230this\u4E0A</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> vm<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;_props&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    
  <span class="token punctuation">}</span>
</code></pre></div><p>initProps\u4F9D\u6B21\u505A\u4E86\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ul><li><p>\u5C06<code>propsData</code>\u4E0E<code>propsOptions</code>\u8FDB\u884C<strong>\u5BF9\u6BD4\uFF0C\u9A8C\u8BC1\u5176\u5408\u6CD5\u6027</strong></p></li><li><p>\u5C06\u5408\u6CD5\u503C\u5B9A\u4E49\u5230<code>_props</code>\u4E0A</p></li><li><p>\u5C06<code>_props</code>\u5904\u7406\u597D\u7684\u5C5E\u6027\u4EE3\u7406\u5230\u7EC4\u4EF6\u5B9E\u4F8B(this)\u4E0A</p></li></ul><h3 id="propsdata\u5904\u7406" tabindex="-1">propsData\u5904\u7406 <a class="header-anchor" href="#propsdata\u5904\u7406" aria-hidden="true">#</a></h3><p>\u641C\u7D22\u6E90\u4EE3\u7801<code>PropsData</code>,\u627E\u5230\u4EE5\u4E0B\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token comment">// \u6B64\u8BED\u53E5\u521D\u59CB\u5316</span>
<span class="token keyword">var</span> propsData <span class="token operator">=</span> <span class="token function">extractPropsFromVNodeData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> Ctor<span class="token punctuation">,</span> tag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6211\u4EEC\u770B\u4E00\u4E0B<code>extractPropsFromVNodeData</code>\u5185\u90E8\u5B9E\u73B0</p><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">extractPropsFromVNodeData</span> <span class="token punctuation">(</span>
    <span class="token parameter">data<span class="token punctuation">,</span>
    Ctor<span class="token punctuation">,</span>
    tag</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">var</span> propOptions <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">.</span>props<span class="token punctuation">;</span>

    <span class="token comment">// propsData</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">var</span> attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs<span class="token punctuation">;</span>
    <span class="token keyword">var</span> props <span class="token operator">=</span> data<span class="token punctuation">.</span>props<span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386propOptions\u5904\u7406\uFF0C\u5982\u679Cattrs\u5B58\u5728propOptions\u7684key\uFF0C\u5219\u5220\u9664attrs\u4E2D\u7684key</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> propOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">checkProp</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> props<span class="token punctuation">,</span> key<span class="token punctuation">,</span> altKey<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token operator">||</span>
      <span class="token function">checkProp</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> attrs<span class="token punctuation">,</span> key<span class="token punctuation">,</span> altKey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res
  <span class="token punctuation">}</span>
<span class="token comment">// checkProp</span>
<span class="token keyword">function</span> <span class="token function">checkProp</span> <span class="token punctuation">(</span>
    res<span class="token punctuation">,</span>  <span class="token comment">// propsData</span>
    hash<span class="token punctuation">,</span> <span class="token comment">// \u54C8\u5E0C\u8868\uFF0C\u5176\u5B9E\u5C31\u662F\u5BF9\u8C61</span>
    key<span class="token punctuation">,</span>  <span class="token comment">// \u9ED8\u8BA4Key AB</span>
    altKey<span class="token punctuation">,</span> <span class="token comment">// \u8FDE\u5B57\u7B26key a-b</span>
    preserve <span class="token comment">// \u662F\u5426\u4FDD\u7559</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>hash<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> hash<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>

        <span class="token comment">// \u4E0D\u4FDD\u7559\u5219\u5220\u9664</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>preserve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">delete</span> hash<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> altKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> hash<span class="token punctuation">[</span>altKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// \u4E0D\u4FDD\u7559\u5219\u5220\u9664</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>preserve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">delete</span> hash<span class="token punctuation">[</span>altKey<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>  
</code></pre></div><p><code>extractPropsFromVNodeData</code>\u4E3B\u8981\u505A\u4E86\u4EE5\u4E0B\u4E8B\u60C5\uFF1A</p><ul><li><p>\u904D\u5386props\u5B9A\u4E49\u7684Key</p><ul><li><p>\u5C06<code>props</code>\u5408\u5E76\u5230<code>propData</code></p></li><li><p>\u5C06<code>attrs</code>\u6309\u7167\u5408\u5E76\u5230<code>propData</code>,\u5E76\u4E14\u4ECE<strong>attrs\u5220\u9664\u6B64key</strong></p></li></ul></li></ul><h3 id="\u5C0F\u7ED3" tabindex="-1">\u5C0F\u7ED3 <a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a></h3><p>\u7ECF\u8FC7\u6211\u4EEC\u9605\u8BFB\u6E90\u7801\uFF0C\u5F97\u5230\u4E86\u4EE5\u4E0B\u51E0\u70B9</p><ul><li>\u9664\u4E86\u4F7F\u7528render\u51FD\u6570\u663E\u5F0F\u4F20\u9012props,\u5176\u4F59\u4F20\u5165\u5230\u7EC4\u4EF6\u7684\u90FD\u662Fattrs\uFF0C\u7EC4\u4EF6\u5185\u90E8\u4F1A\u8FDB\u884C\u4E00\u6B21\u7B5B\u9009\uFF0C\u5206\u6210attrs\u548CProps\uFF0C\u5176\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</li></ul><div class="language-js"><pre><code><span class="token comment">// data\u662F\u6307\u6A21\u677F\u7F16\u8BD1\u540E\u7684\u9759\u6001render\u51FD\u6570\u6216\u8005render\u6E32\u67D3\u51FD\u6570\u7684data\u6570\u636E\uFF0C\u8FD9\u91CC\u5148\u7565\u8FC7Vue\u7F16\u8BD1\u8FC7\u7A0B</span>
<span class="token keyword">const</span> attrs <span class="token operator">=</span> data<span class="token punctuation">.</span>attrs
<span class="token keyword">const</span> props <span class="token operator">=</span> data<span class="token punctuation">.</span>props

<span class="token comment">// \u5C06\u4F20\u5165\u7684attrs\u548Cprops\u5BF9\u7EC4\u4EF6\u5B9A\u4E49\u7684Props\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u89E3\u6790\u51FA\u6700\u7EC8\u7684props</span>
vm<span class="token punctuation">.</span>_props <span class="token operator">=</span> attrs<span class="token punctuation">.</span>checkProps <span class="token operator">+</span> props<span class="token punctuation">.</span>checkProps

<span class="token comment">// \u5C06_Props\u7684key\u90FD\u4EE3\u7406\u5230vm\u4E0A\uFF0C\u5B9E\u73B0this.key -&gt; this._props.key</span>
<span class="token function">proxy</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&quot;_props&quot;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u66B4\u9732_props\u516C\u5171\u63A5\u53E3</span>

vm<span class="token punctuation">.</span>$props <span class="token operator">=</span> vm<span class="token punctuation">.</span>_props
</code></pre></div><h2 id="attrs" tabindex="-1">attrs <a class="header-anchor" href="#attrs" aria-hidden="true">#</a></h2><h3 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h3><ul><li>attrs\u662Frender\u51FD\u6570\u7B2C\u4E8C\u4E2A\u5BF9\u8C61\u7684attrs\u5BF9\u8C61</li></ul><div class="language-js"><pre><code><span class="token function">h</span><span class="token punctuation">(</span>tag<span class="token punctuation">,</span><span class="token punctuation">{</span>
  attrs <span class="token comment">// \u8FD9\u91CC\u662Fdata\u7684attrs</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> children <span class="token punctuation">)</span> 
</code></pre></div><h3 id="template" tabindex="-1">template <a class="header-anchor" href="#template" aria-hidden="true">#</a></h3><ul><li><p>template\u751F\u6210AST</p></li><li><p>AST\u751F\u6210render\u51FD\u6570</p></li></ul><div class="language-js"><pre><code>&quot;<span class="token keyword">function</span> <span class="token function">anonymous</span><span class="token punctuation">(</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">with</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">attrs</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;app&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token function">_c</span><span class="token punctuation">(</span><span class="token string">&#39;jz-fa-date-picker&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">attrs</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;show-time&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>&quot;
</code></pre></div>`,44),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
