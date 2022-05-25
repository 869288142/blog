import{_ as n,c as a,o as s,a as t}from"./app.a3c81315.js";const d='{"title":"\u8DEF\u7531\u539F\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3","slug":"\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3"},{"level":3,"title":"hash\u5B9E\u73B0","slug":"hash\u5B9E\u73B0"},{"level":3,"title":"history\u5B9E\u73B0","slug":"history\u5B9E\u73B0"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u8DEF\u7531/\u8DEF\u7531\u539F\u7406.md"}',p={},o=t(`<h1 id="\u8DEF\u7531\u539F\u7406" tabindex="-1">\u8DEF\u7531\u539F\u7406 <a class="header-anchor" href="#\u8DEF\u7531\u539F\u7406" aria-hidden="true">#</a></h1><h2 id="\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3" tabindex="-1">\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3 <a class="header-anchor" href="#\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u7684\u6838\u5FC3" aria-hidden="true">#</a></h2><ol><li>\u5982\u4F55\u6539\u53D8 URL \u5374\u4E0D\u5F15\u8D77\u9875\u9762\u5237\u65B0\uFF1F</li><li>\u5982\u4F55\u68C0\u6D4B URL \u53D8\u5316\u4E86\uFF1F</li><li>\u5BF9\u5E94\u53D8\u5316\u7684URL\u5207\u6362\u5BF9\u5E94\u89C6\u56FE</li></ol><h3 id="hash\u5B9E\u73B0" tabindex="-1">hash\u5B9E\u73B0 <a class="header-anchor" href="#hash\u5B9E\u73B0" aria-hidden="true">#</a></h3><ol><li>hash \u662F URL \u4E2D hash (#) \u53CA\u540E\u9762\u7684\u90A3\u90E8\u5206\uFF0C\u5E38\u7528\u4F5C\u951A\u70B9\u5728\u9875\u9762\u5185\u8FDB\u884C\u5BFC\u822A\uFF0C\u6539\u53D8 URL \u4E2D\u7684 hash \u90E8\u5206\u4E0D\u4F1A\u5F15\u8D77\u9875\u9762\u5237\u65B0</li><li>\u901A\u8FC7 hashchange \u4E8B\u4EF6\u76D1\u542C URL \u7684\u53D8\u5316\uFF0C\u6539\u53D8URL \u7684\u65B9\u5F0F\u53EA\u6709\u8FD9\u51E0\u79CD\uFF1A\u901A\u8FC7\u6D4F\u89C8\u5668\u524D\u8FDB\u540E\u9000\u6539\u53D8 URL\u3001\u901A\u8FC7&lt;a&gt;\u6807\u7B7E\u6539\u53D8 URL\u3001\u901A\u8FC7window.location\u6539\u53D8URL\uFF0C\u8FD9\u51E0\u79CD\u60C5\u51B5\u6539\u53D8 URL \u90FD\u4F1A\u89E6\u53D1 hashchange \u4E8B\u4EF6</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html; charset=GBK<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Jquery test web page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u5B9A\u4E49\u8DEF\u7531 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>about<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- \u6E32\u67D3\u8DEF\u7531\u5BF9\u5E94\u7684 UI --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routeView<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// \u9875\u9762\u52A0\u8F7D\u5B8C\u4E0D\u4F1A\u89E6\u53D1 hashchange\uFF0C\u8FD9\u91CC\u4E3B\u52A8\u89E6\u53D1\u4E00\u6B21 hashchange \u4E8B\u4EF6</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> onLoad<span class="token punctuation">)</span>
    <span class="token comment">// \u76D1\u542C\u8DEF\u7531\u53D8\u5316</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;hashchange&#39;</span><span class="token punctuation">,</span> onHashChange<span class="token punctuation">)</span>

    <span class="token comment">// \u8DEF\u7531\u89C6\u56FE</span>
    <span class="token keyword">var</span> routerView <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">function</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      routerView <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#routeView&#39;</span><span class="token punctuation">)</span>
      <span class="token function">onHashChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8DEF\u7531\u53D8\u5316\u65F6\uFF0C\u6839\u636E\u8DEF\u7531\u6E32\u67D3\u5BF9\u5E94 UI</span>
    <span class="token keyword">function</span> <span class="token function">onHashChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;#/home&#39;</span><span class="token operator">:</span>
          routerView<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;Home&#39;</span>
          <span class="token keyword">return</span>
        <span class="token keyword">case</span> <span class="token string">&#39;#/about&#39;</span><span class="token operator">:</span>
          routerView<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;About&#39;</span>
          <span class="token keyword">return</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p><img src="https://user-gold-cdn.xitu.io/2018/7/11/164888109d57995f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""></p><h3 id="history\u5B9E\u73B0" tabindex="-1">history\u5B9E\u73B0 <a class="header-anchor" href="#history\u5B9E\u73B0" aria-hidden="true">#</a></h3><ol><li>history \u63D0\u4F9B\u4E86 pushState \u548C replaceState \u4E24\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6539\u53D8 URL \u7684 path \u90E8\u5206\u4E0D\u4F1A\u5F15\u8D77\u9875\u9762\u5237\u65B0\u3002</li><li>history \u63D0\u4F9B\u7C7B\u4F3C hashchange \u4E8B\u4EF6\u7684 popstate \u4E8B\u4EF6\uFF0C\u4F46 popstate \u4E8B\u4EF6\u6709\u4E9B\u4E0D\u540C\uFF1A\u901A\u8FC7\u6D4F\u89C8\u5668\u524D\u8FDB\u540E\u9000\u6539\u53D8 URL \u65F6\u4F1A\u89E6\u53D1 popstate \u4E8B\u4EF6\uFF0C\u901A\u8FC7pushState/replaceState\u6216&lt;a&gt;\u6807\u7B7E\u6539\u53D8 URL \u4E0D\u4F1A\u89E6\u53D1 popstate \u4E8B\u4EF6\u3002\u597D\u5728\u6211\u4EEC\u53EF\u4EE5\u62E6\u622A pushState/replaceState\u7684\u8C03\u7528\u548C&lt;a&gt;\u6807\u7B7E\u7684\u70B9\u51FB\u4E8B\u4EF6\u6765\u68C0\u6D4B URL \u53D8\u5316\uFF0C\u6240\u4EE5\u76D1\u542C URL \u53D8\u5316\u53EF\u4EE5\u5B9E\u73B0\uFF0C\u53EA\u662F\u6CA1\u6709 hashchange \u90A3\u4E48\u65B9\u4FBF\u3002</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Content-Type<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/html; charset=GBK<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Jquery test web page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>about<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>

      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routeView<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// \u9875\u9762\u52A0\u8F7D\u5B8C\u4E0D\u4F1A\u89E6\u53D1 hashchange\uFF0C\u8FD9\u91CC\u4E3B\u52A8\u89E6\u53D1\u4E00\u6B21 hashchange \u4E8B\u4EF6</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> onLoad<span class="token punctuation">)</span>
    <span class="token comment">// \u76D1\u542C\u8DEF\u7531\u53D8\u5316</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;popstate&#39;</span><span class="token punctuation">,</span> onPopState<span class="token punctuation">)</span>

    <span class="token comment">// \u8DEF\u7531\u89C6\u56FE</span>
    <span class="token keyword">var</span> routerView <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">function</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      routerView <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#routeView&#39;</span><span class="token punctuation">)</span>
      <span class="token function">onPopState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

      <span class="token comment">// \u62E6\u622A &lt;a&gt; \u6807\u7B7E\u70B9\u51FB\u4E8B\u4EF6\u9ED8\u8BA4\u884C\u4E3A\uFF0C \u70B9\u51FB\u65F6\u4F7F\u7528 pushState \u4FEE\u6539 URL\u5E76\u66F4\u65B0\u624B\u52A8 UI\uFF0C\u4ECE\u800C\u5B9E\u73B0\u70B9\u51FB\u94FE\u63A5\u66F4\u65B0 URL \u548C UI \u7684\u6548\u679C\u3002</span>
      <span class="token keyword">var</span> linkList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;a[href]&#39;</span><span class="token punctuation">)</span>
      linkList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">el</span> <span class="token operator">=&gt;</span>
        el<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> el<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token function">onPopState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8DEF\u7531\u53D8\u5316\u65F6\uFF0C\u6839\u636E\u8DEF\u7531\u6E32\u67D3\u5BF9\u5E94 UI</span>
    <span class="token keyword">function</span> <span class="token function">onPopState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;/home&#39;</span><span class="token operator">:</span>
          routerView<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;Home&#39;</span>
          <span class="token keyword">return</span>
        <span class="token keyword">case</span> <span class="token string">&#39;/about&#39;</span><span class="token operator">:</span>
          routerView<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;About&#39;</span>
          <span class="token keyword">return</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><p><img src="https://user-gold-cdn.xitu.io/2018/7/11/164888478584a217?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt=""></p>`,11),e=[o];function c(l,u,k,i,r,g){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{d as __pageData,m as default};
