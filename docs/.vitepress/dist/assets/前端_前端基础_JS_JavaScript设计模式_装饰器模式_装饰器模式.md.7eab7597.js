import{_ as n,c as a,o as s,a as t}from"./app.a3c81315.js";const h='{"title":"\u88C5\u9970\u5668\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u9762\u5BF9\u5BF9\u8C61\u5B9E\u73B0","slug":"\u9762\u5BF9\u5BF9\u8C61\u5B9E\u73B0"},{"level":3,"title":"JavaScript\u5B9E\u73B0","slug":"javascript\u5B9E\u73B0"},{"level":2,"title":"\u597D\u5904","slug":"\u597D\u5904"},{"level":2,"title":"\u574F\u5904","slug":"\u574F\u5904"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u88C5\u9970\u5668\u6A21\u5F0F/\u88C5\u9970\u5668\u6A21\u5F0F.md"}',p={},o=t(`<h1 id="\u88C5\u9970\u5668\u6A21\u5F0F" tabindex="-1">\u88C5\u9970\u5668\u6A21\u5F0F <a class="header-anchor" href="#\u88C5\u9970\u5668\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u88C5\u9970\u5668\u6A21\u5F0F\u662F\u4E00\u79CD\u7ED9\u5BF9\u8C61\u52A8\u6001\u6DFB\u52A0\u804C\u8D23\u7684\u65B9\u5F0F</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="\u9762\u5BF9\u5BF9\u8C61\u5B9E\u73B0" tabindex="-1">\u9762\u5BF9\u5BF9\u8C61\u5B9E\u73B0 <a class="header-anchor" href="#\u9762\u5BF9\u5BF9\u8C61\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Plane</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D1\u5C04\u666E\u901A\u5B50\u5F39&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">MissileDecorator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">plane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>plane <span class="token operator">=</span> plane
  <span class="token punctuation">}</span>
  <span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>plane<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D1\u5C04\u5BFC\u5F39&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">AtomDecorator</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">plane</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>plane <span class="token operator">=</span> plane
  <span class="token punctuation">}</span>
  <span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>plane<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D1\u5C04\u539F\u5B50\u5F39&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> plane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Plane</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
plane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MissileDecorator</span><span class="token punctuation">(</span>plane<span class="token punctuation">)</span>
plane <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomDecorator</span><span class="token punctuation">(</span>plane<span class="token punctuation">)</span>
plane<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div><h3 id="javascript\u5B9E\u73B0" tabindex="-1">JavaScript\u5B9E\u73B0 <a class="header-anchor" href="#javascript\u5B9E\u73B0" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">let</span> plane <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D1\u5C04\u666E\u901A\u5B50\u5F39&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">missileDecorator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D1\u5C04\u5BFC\u5F39&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token function-variable function">atomDecorator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D1\u5C04\u539F\u5B50\u5F39&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fire1 <span class="token operator">=</span> plane<span class="token punctuation">.</span>fire
plane<span class="token punctuation">.</span><span class="token function-variable function">fire</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fire1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">missileDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> fire2 <span class="token operator">=</span> plane<span class="token punctuation">.</span>fire
plane<span class="token punctuation">.</span><span class="token function-variable function">fire</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fire2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">atomDecorator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
plane<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u597D\u5904" tabindex="-1">\u597D\u5904 <a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a></h2><h2 id="\u574F\u5904" tabindex="-1">\u574F\u5904 <a class="header-anchor" href="#\u574F\u5904" aria-hidden="true">#</a></h2>`,10),c=[o];function e(l,u,i,k,r,d){return s(),a("div",null,c)}var _=n(p,[["render",e]]);export{h as __pageData,_ as default};
