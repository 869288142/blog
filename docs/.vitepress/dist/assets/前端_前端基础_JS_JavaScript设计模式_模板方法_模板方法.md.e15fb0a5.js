import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const w='{"title":"\u6A21\u677F\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u5B9E\u73B0\u8981\u70B9","slug":"\u5B9E\u73B0\u8981\u70B9"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u9762\u5BF9\u5BF9\u8C61\u7248\u672C","slug":"\u9762\u5BF9\u5BF9\u8C61\u7248\u672C"},{"level":3,"title":"JavaScript\u7248\u672C","slug":"javascript\u7248\u672C"},{"level":2,"title":"\u597D\u5904","slug":"\u597D\u5904"},{"level":2,"title":"\u574F\u5904","slug":"\u574F\u5904"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u6A21\u677F\u65B9\u6CD5/\u6A21\u677F\u65B9\u6CD5.md"}',p={},o=t(`<h1 id="\u6A21\u677F\u65B9\u6CD5" tabindex="-1">\u6A21\u677F\u65B9\u6CD5 <a class="header-anchor" href="#\u6A21\u677F\u65B9\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u5728\u6A21\u677F\u65B9\u6CD5\u6A21\u5F0F\u4E2D\uFF0C<strong>\u5B50\u7C7B\u5B9E\u73B0\u4E2D\u7684\u76F8\u540C\u90E8\u5206\u88AB\u4E0A\u79FB\u5230\u7236\u7C7B\u4E2D\uFF0C\u800C\u5C06\u4E0D\u540C\u7684\u90E8\u5206\u7559\u5F85\u5B50\u7C7B\u6765\u5B9E\u73B0</strong>\u3002\u8FD9\u4E5F\u5F88\u597D\u5730\u4F53\u73B0\u4E86\u6CDB\u5316\u7684\u601D\u60F3\u3002</p><h2 id="\u5B9E\u73B0\u8981\u70B9" tabindex="-1">\u5B9E\u73B0\u8981\u70B9 <a class="header-anchor" href="#\u5B9E\u73B0\u8981\u70B9" aria-hidden="true">#</a></h2><ul><li><p>\u62BD\u79BB\u5B50\u7C7B\u7684\u5171\u540C\u7B97\u6CD5\u6846\u67B6\u5230\u7236\u7C7B</p></li><li><p>\u4E3A\u4E2A\u6027\u5316\u5B50\u7C7B\u63D0\u4F9B\u94A9\u5B50</p></li></ul><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="\u9762\u5BF9\u5BF9\u8C61\u7248\u672C" tabindex="-1">\u9762\u5BF9\u5BF9\u8C61\u7248\u672C <a class="header-anchor" href="#\u9762\u5BF9\u5BF9\u8C61\u7248\u672C" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
  <span class="token function">boilWater</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u628A\u6C34\u716E\u6CB8&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7C7B\u5FC5\u987B\u91CD\u5199brew\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">pourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7C7B\u5FC5\u987B\u91CD\u5199pourInCup\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5B50\u7C7B\u5FC5\u987B\u91CD\u5199addCondiments\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">customerWantsCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span> <span class="token comment">// \u9ED8\u8BA4\u9700\u8981\u8C03\u6599</span>
  <span class="token punctuation">}</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">boilWater</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">customerWantsCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5982\u679C\u6302\u94A9\u8FD4\u56DEtrue\uFF0C\u5219\u9700\u8981\u8C03\u6599</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CoffeeWithHook</span> <span class="token keyword">extends</span> <span class="token class-name">Beverage</span> <span class="token punctuation">{</span>
  <span class="token function">brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7528\u6CB8\u6C34\u51B2\u6CE1\u5496\u5561&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">pourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u628A\u5496\u5561\u5012\u8FDB\u676F\u5B50&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A0\u7CD6\u548C\u725B\u5976&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">customerWantsCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u95EE\u9700\u8981\u8C03\u6599\u5417\uFF1F&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> coffeeWithHook <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CoffeeWithHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
coffeeWithHook<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="javascript\u7248\u672C" tabindex="-1">JavaScript\u7248\u672C <a class="header-anchor" href="#javascript\u7248\u672C" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">Beverage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> <span class="token function-variable function">boilWater</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u628A\u6C34\u716E\u6CB8&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">var</span> brew <span class="token operator">=</span>
    param<span class="token punctuation">.</span>brew <span class="token operator">||</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5FC5\u987B\u4F20\u9012brew\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token keyword">var</span> pourInCup <span class="token operator">=</span>
    param<span class="token punctuation">.</span>pourInCup <span class="token operator">||</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5FC5\u987B\u4F20\u9012pourInCup\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token keyword">var</span> addCondiments <span class="token operator">=</span>
    param<span class="token punctuation">.</span>addCondiments <span class="token operator">||</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u5FC5\u987B\u4F20\u9012addCondiments\u65B9\u6CD5&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token keyword">var</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">boilWater</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">brew</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">pourInCup</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">addCondiments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token constant">F</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> Coffee <span class="token operator">=</span> <span class="token function">Beverage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">brew</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7528\u6CB8\u6C34\u51B2\u6CE1\u5496\u5561&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">pourInCup</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u628A\u5496\u5561\u5012\u8FDB\u676F\u5B50&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">addCondiments</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A0\u7CD6\u548C\u725B\u5976&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> Tea <span class="token operator">=</span> <span class="token function">Beverage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">brew</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7528\u6CB8\u6C34\u6D78\u6CE1\u8336\u53F6&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">pourInCup</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u628A\u8336\u5012\u8FDB\u676F\u5B50&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">addCondiments</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A0\u67E0\u6AAC&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> coffee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Coffee</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
coffee<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> tea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
tea<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u597D\u5904" tabindex="-1">\u597D\u5904 <a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a></h2><ul><li>\u65B0\u589E\u529F\u80FD\u65F6\uFF0C\u65E0\u9700\u6539\u52A8\u7B97\u6CD5\u903B\u8F91\u548C\u5176\u4F59\u5B9E\u73B0\uFF0C\u53EA\u9700\u65B0\u589E\u4EE3\u7801</li></ul><h2 id="\u574F\u5904" tabindex="-1">\u574F\u5904 <a class="header-anchor" href="#\u574F\u5904" aria-hidden="true">#</a></h2>`,13),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var h=n(p,[["render",e]]);export{w as __pageData,h as default};
