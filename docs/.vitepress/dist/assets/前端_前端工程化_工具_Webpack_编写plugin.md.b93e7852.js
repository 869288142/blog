import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const g='{"title":"\u7F16\u5199plugin","description":"","frontmatter":{},"headers":[{"level":2,"title":"HelloWorldPlugin","slug":"helloworldplugin"},{"level":2,"title":"\u83B7\u53D6plugin\u63D2\u4EF6\u914D\u7F6E","slug":"\u83B7\u53D6plugin\u63D2\u4EF6\u914D\u7F6E"},{"level":2,"title":"\u9A8C\u8BC1plugin\u63D2\u4EF6\u914D\u7F6E","slug":"\u9A8C\u8BC1plugin\u63D2\u4EF6\u914D\u7F6E"},{"level":2,"title":"\u5185\u7F6Ehook\u7C7B\u578B\u3001","slug":"\u5185\u7F6Ehook\u7C7B\u578B\u3001"},{"level":3,"title":"Synchronous Hooks","slug":"synchronous-hooks"},{"level":3,"title":"Asynchronous Hooks","slug":"asynchronous-hooks"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u5DE5\u5177/Webpack/\u7F16\u5199plugin.md"}',o={},t=p(`<h1 id="\u7F16\u5199plugin" tabindex="-1">\u7F16\u5199plugin <a class="header-anchor" href="#\u7F16\u5199plugin" aria-hidden="true">#</a></h1><h2 id="helloworldplugin" tabindex="-1">HelloWorldPlugin <a class="header-anchor" href="#helloworldplugin" aria-hidden="true">#</a></h2><ul><li><p>\u58F0\u660E\u4E00\u4E2A<code>class</code></p></li><li><p>\u7F16\u5199<code>apply</code>\u65B9\u6CD5</p></li></ul><p><strong>HelloWorldPlugin.js</strong></p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">HelloWorldPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6CE8\u518C\u6307\u5B9Ahook\u903B\u8F91</span>
      compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World Plugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>
        stats <span class="token comment">/* stats is passed as an argument when done hook is tapped.  */</span>
      <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HelloWorldPlugin<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u83B7\u53D6plugin\u63D2\u4EF6\u914D\u7F6E" tabindex="-1">\u83B7\u53D6plugin\u63D2\u4EF6\u914D\u7F6E <a class="header-anchor" href="#\u83B7\u53D6plugin\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">HelloWorldPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6CE8\u518C\u6307\u5B9Ahook\u903B\u8F91</span>
      compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World Plugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>
        stats <span class="token comment">/* stats is passed as an argument when done hook is tapped.  */</span>
      <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HelloWorldPlugin<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u9A8C\u8BC1plugin\u63D2\u4EF6\u914D\u7F6E" tabindex="-1">\u9A8C\u8BC1plugin\u63D2\u4EF6\u914D\u7F6E <a class="header-anchor" href="#\u9A8C\u8BC1plugin\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>
<span class="token keyword">const</span> <span class="token punctuation">{</span> validate  <span class="token punctuation">}</span> <span class="token operator">=</span>  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;schema-utils&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;string&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">HelloWorldPlugin</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">validate</span><span class="token punctuation">(</span>schema<span class="token punctuation">,</span> options<span class="token punctuation">,</span> <span class="token string">&#39;Hello World Plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token punctuation">}</span>
    <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6CE8\u518C\u6307\u5B9Ahook\u903B\u8F91</span>
      compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World Plugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>
        stats <span class="token comment">/* stats is passed as an argument when done hook is tapped.  */</span>
      <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> HelloWorldPlugin<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5185\u7F6Ehook\u7C7B\u578B\u3001" tabindex="-1">\u5185\u7F6Ehook\u7C7B\u578B\u3001 <a class="header-anchor" href="#\u5185\u7F6Ehook\u7C7B\u578B\u3001" aria-hidden="true">#</a></h2><h3 id="synchronous-hooks" tabindex="-1">Synchronous Hooks <a class="header-anchor" href="#synchronous-hooks" aria-hidden="true">#</a></h3><ul><li><p>Sync Hook</p></li><li><p>Bail Hooks \u53EF\u4EE5\u4E2D\u65AD\u540E\u9762\u7684hook</p></li><li><p>Waterfall Hooks</p></li></ul><p>\u53C2\u6570\u6765\u81EA\u4E0A\u4E00\u4E2A<code>plugin</code>\u503C</p><h3 id="asynchronous-hooks" tabindex="-1">Asynchronous Hooks <a class="header-anchor" href="#asynchronous-hooks" aria-hidden="true">#</a></h3><ul><li><p>Async Series Hook \u5F02\u6B65\u987A\u5E8F\u94A9\u5B50</p></li><li><p>Async waterfall</p></li><li><p>Async Series Bail \u5F02\u6B65\u53EF\u505C\u6B62\u987A\u5E8F\u94A9\u5B50</p></li><li><p>Async Parallel \u5F02\u6B65\u65E0\u5E8F\u94A9\u5B50</p></li></ul>`,15),e=[t];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{g as __pageData,m as default};
