import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const y='{"title":"render \u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A21\u677F\u9650\u5236","slug":"\u6A21\u677F\u9650\u5236"},{"level":2,"title":"\u6A21\u677F\u5BF9\u5E94\u7684 render \u8868\u8FBE","slug":"\u6A21\u677F\u5BF9\u5E94\u7684-render-\u8868\u8FBE"},{"level":3,"title":"createElement \u53C2\u6570","slug":"createelement-\u53C2\u6570"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/Vue\u57FA\u7840\u77E5\u8BC6/render\u51FD\u6570.md"}',p={},o=t(`<h1 id="render-\u51FD\u6570" tabindex="-1">render \u51FD\u6570 <a class="header-anchor" href="#render-\u51FD\u6570" aria-hidden="true">#</a></h1><p>\u5E73\u65F6\u6211\u4EEC\u5927\u90E8\u5206\u65F6\u95F4\u90FD\u5728\u4F7F\u7528 Vue \u7684\u6A21\u677F\u91CC\u7F16\u5199\u7A0B\u5E8F\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u6CA1\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u5728\u6709\u4E00\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u5B8C\u5168\u7684 JavaScript \u80FD\u529B\u6765\u5E2E\u52A9\u6211\u4EEC\u63CF\u8FF0\u89C6\u56FE\uFF0C\u4EE5\u4E0B\u662F\u4E00\u4E2A\u4F8B\u5B50</p><h2 id="\u6A21\u677F\u9650\u5236" tabindex="-1">\u6A21\u677F\u9650\u5236 <a class="header-anchor" href="#\u6A21\u677F\u9650\u5236" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>anchored-heading</span> <span class="token attr-name">:level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>anchored-heading</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/x-template<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>anchored-heading-template<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 1&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h2 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 2&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h3 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 3&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h4 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 4&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>h4<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h5 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 5&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>h5<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h6 v<span class="token operator">-</span><span class="token keyword">else</span><span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;level === 6&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>slot<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>h6<span class="token operator">&gt;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E0A\u8FF0\u4F8B\u5B50\u60F3\u8981\u7F16\u5199\u4E00\u4E2A\u53EF\u63A7\u5236\u6807\u9898\u7EA7\u522B\u7684\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u770B\u5230\u7EC4\u4EF6\u5185\u90E8\u5B9E\u73B0\u4EE3\u7801\u91CD\u590D\u5F88\u591A\uFF0C\u6211\u4EEC\u7528 render \u51FD\u6570\u6539\u5199</p><div class="language-js"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;anchored-heading&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>
      <span class="token string">&#39;h&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>level<span class="token punctuation">,</span> <span class="token comment">// \u6807\u7B7E\u540D\u79F0</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default <span class="token comment">// \u5B50\u8282\u70B9\u6570\u7EC4</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u901A\u8FC7 render \u51FD\u6570\u91CD\u5199\u7684\u6807\u9898\u7EA7\u522B\u7EC4\u4EF6\uFF0C\u6E05\u6670\u800C\u7CBE\u7B80</p><h2 id="\u6A21\u677F\u5BF9\u5E94\u7684-render-\u8868\u8FBE" tabindex="-1">\u6A21\u677F\u5BF9\u5E94\u7684 render \u8868\u8FBE <a class="header-anchor" href="#\u6A21\u677F\u5BF9\u5E94\u7684-render-\u8868\u8FBE" aria-hidden="true">#</a></h2><h3 id="createelement-\u53C2\u6570" tabindex="-1">createElement \u53C2\u6570 <a class="header-anchor" href="#createelement-\u53C2\u6570" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>  <span class="token keyword">function</span> <span class="token function">createElement</span> <span class="token punctuation">(</span>
    <span class="token parameter">tag<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    children<span class="token punctuation">,</span></span>
  <span class="token punctuation">)</span>


</code></pre></div><p>createElement \u53C2\u6570\u66B4\u9732\u7684\u53C2\u6570\u6709 tag-\u6807\u7B7E\u540D\u3001\u7EC4\u4EF6\u540D\uFF0Cdata-\u6570\u636E\u5BF9\u8C61\uFF0C\u5B50\u7EA7\u5B57\u7B26\u4E32\u6216\u8005 Vnode</p><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><strong>\u52A8\u6001\u5C5E\u6027</strong></p><div class="language-js"><pre><code><span class="token comment">// v-bind</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      id
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</code></pre></div><p>\u4E0E\u6A21\u677F\u9700\u8981\u663E\u793A v-bind \u6216\u8005:\u4E00\u4E2A\u53D8\u91CF\u7684\u505A\u6CD5\u4E0D\u540C\u7684\u662F\uFF0Crender \u4E2D\u7684\u52A8\u6001\u5C5E\u6027\u76F4\u63A5\u662F\u53EF\u4EE5\u5F15\u5165\u6570\u636E\u4E2D\u7684\u53D8\u91CF\u5373\u53EF\u3002</p><h4 id="\u5143\u7D20\u9009\u9879" tabindex="-1">\u5143\u7D20\u9009\u9879 <a class="header-anchor" href="#\u5143\u7D20\u9009\u9879" aria-hidden="true">#</a></h4><p><strong>HTML \u5C5E\u6027---attrs</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p><strong>DOM \u5C5E\u6027---domProps</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">domProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">innerHTML</span><span class="token operator">:</span> <span class="token string">&#39;baz&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p><strong>style</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;14px&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>style\u4E0E\u6A21\u677F\u4E2D\u7684v-bind:style\u8BED\u6CD5\u5B8C\u5168\u4E00\u81F4</p><p><strong>class</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;class&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

</code></pre></div><p><strong>\u4E8B\u4EF6</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><h4 id="\u7EC4\u4EF6\u9009\u9879" tabindex="-1">\u7EC4\u4EF6\u9009\u9879 <a class="header-anchor" href="#\u7EC4\u4EF6\u9009\u9879" aria-hidden="true">#</a></h4><p><strong>props</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">myProp</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p><strong>slot</strong></p><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>$slots \u8BBF\u95EE\u5373\u53EF 

<span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default  \u9ED8\u8BA4

<span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>Namedslots \u5177\u540D
</code></pre></div><p><strong>\u4F5C\u7528\u57DFslot</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scopedSlots</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p><strong>\u6307\u4EE4</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;my-custom-directive&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">expression</span><span class="token operator">:</span> <span class="token string">&#39;1 + 1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">arg</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">modifiers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p><strong>nativeOn</strong></p><div class="language-js"><pre><code> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">nativeOn</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nativeClickHandler
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div>`,39),e=[o];function c(l,r,u,k,i,d){return a(),s("div",null,e)}var h=n(p,[["render",c]]);export{y as __pageData,h as default};
