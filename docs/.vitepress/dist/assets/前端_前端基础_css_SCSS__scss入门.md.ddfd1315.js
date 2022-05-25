import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const b='{"title":"scss\u57FA\u672C\u8BED\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53D8\u91CF","slug":"\u53D8\u91CF"},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570"},{"level":2,"title":"\u6D41\u7A0B\u63A7\u5236","slug":"\u6D41\u7A0B\u63A7\u5236"},{"level":3,"title":"if","slug":"if"},{"level":3,"title":"for","slug":"for"},{"level":3,"title":"while","slug":"while"},{"level":3,"title":"each","slug":"each"},{"level":2,"title":"mixin","slug":"mixin"},{"level":2,"title":"extend","slug":"extend"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/css/SCSS/_scss\u5165\u95E8.md"}',t={},o=p(`<h1 id="scss\u57FA\u672C\u8BED\u6CD5" tabindex="-1">scss\u57FA\u672C\u8BED\u6CD5 <a class="header-anchor" href="#scss\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a></h1><h2 id="\u53D8\u91CF" tabindex="-1">\u53D8\u91CF <a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a></h2><p><code>$\u5F00\u5934 \u5C0F\u5199\u5E76\u7531\u4E2D\u5212\u7EBF\u5206\u5272,\u9ED8\u8BA4\u4E3A\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u4F7F\u7528global\u58F0\u660E\u4E3A\u5168\u5C40\u4F5C\u7528\u57DF</code></p><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$base-color</span></span><span class="token punctuation">:</span> #c6538c<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-dark</span></span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$base-color</span><span class="token punctuation">,</span> 0.88<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.alert </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$border-dark</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$grid-width</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$gutter-width</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

<span class="token keyword">@function</span> <span class="token function">grid-width</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token variable">$n</span> <span class="token operator">*</span> <span class="token variable">$grid-width</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$gutter-width</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#sidebar </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">grid-width</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

<span class="token selector">\u6307\u5B9A\u53C2\u6570
p </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$hue</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$saturation</span></span><span class="token punctuation">:</span> 100%<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$lightness</span></span><span class="token punctuation">:</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1">\u6D41\u7A0B\u63A7\u5236 <a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a></h2><h3 id="if" tabindex="-1">if <a class="header-anchor" href="#if" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">triangle</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$direction</span> == up </span><span class="token punctuation">{</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$direction</span> == right </span><span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$direction</span> == down </span><span class="token punctuation">{</span>
    <span class="token property">border-top-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$direction</span> == left </span><span class="token punctuation">{</span>
    <span class="token property">border-right-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@error</span> <span class="token string">&quot;Unknown direction #{$direction}.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

.next</span> <span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">triangle</span><span class="token punctuation">(</span>5px<span class="token punctuation">,</span> black<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="for" tabindex="-1">for <a class="header-anchor" href="#for" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$base-color</span></span><span class="token punctuation">:</span> #036<span class="token punctuation">;</span>

<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">3 </span><span class="token punctuation">{</span>
  <span class="token property">ul</span><span class="token punctuation">:</span><span class="token function">nth-child</span><span class="token punctuation">(</span>3n <span class="token operator">+</span> <span class="token variable">#{$i}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">$base-color</span><span class="token punctuation">,</span> <span class="token variable">$i</span> <span class="token operator">*</span> 5%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="while" tabindex="-1">while <a class="header-anchor" href="#while" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token comment">/// Divides \`$value\` by \`$ratio\` until it&#39;s below \`$base\`.</span>
<span class="token keyword">@function</span> <span class="token function">scale-below</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$base</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$ratio</span></span><span class="token punctuation">:</span> 1.618<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$value</span> &gt; <span class="token variable">$base</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$value</span></span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$ratio</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">@return</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token property"><span class="token variable">$normal-font-size</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token selector">sup </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">scale-below</span><span class="token punctuation">(</span>20px<span class="token punctuation">,</span> 16px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="each" tabindex="-1">each <a class="header-anchor" href="#each" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token property"><span class="token variable">$sizes</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">,</span> 50px<span class="token punctuation">,</span> 80px<span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$size</span> in <span class="token variable">$sizes</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.icon-<span class="token variable">#{$size}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="mixin" tabindex="-1">mixin <a class="header-anchor" href="#mixin" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token keyword">@mixin</span> <span class="token selector">reset-list </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@mixin</span> <span class="token selector">horizontal-list </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> reset-list<span class="token punctuation">;</span>

  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    <span class="token selector">margin: </span><span class="token punctuation">{</span>
      <span class="token property">left</span><span class="token punctuation">:</span> -2px<span class="token punctuation">;</span>
      <span class="token property">right</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">nav ul </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> horizontal-list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="extend" tabindex="-1">extend <a class="header-anchor" href="#extend" aria-hidden="true">#</a></h2><div class="language-scss"><pre><code><span class="token selector">.error </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>--serious </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> .error<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-css"><pre><code><span class="token selector">.error, .error--serious</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fdd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.error--serious</span> <span class="token punctuation">{</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,20),e=[o];function c(l,i,u,r,k,d){return a(),s("div",null,e)}var v=n(t,[["render",c]]);export{b as __pageData,v as default};
