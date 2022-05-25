import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const g='{"title":"js\u4EE3\u7801\u98CE\u683C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003"},{"level":2,"title":"\u53D8\u91CF\u58F0\u660E","slug":"\u53D8\u91CF\u58F0\u660E"},{"level":2,"title":"\u53D8\u91CF\u8D4B\u503C","slug":"\u53D8\u91CF\u8D4B\u503C"},{"level":2,"title":"\u57FA\u672C\u7C7B\u578B","slug":"\u57FA\u672C\u7C7B\u578B"},{"level":2,"title":"\u7C7B\u578B\u6BD4\u8F83","slug":"\u7C7B\u578B\u6BD4\u8F83"},{"level":2,"title":"\u6570\u7EC4","slug":"\u6570\u7EC4"},{"level":2,"title":"\u5BF9\u8C61","slug":"\u5BF9\u8C61"},{"level":2,"title":"\u4F5C\u7528\u57DF","slug":"\u4F5C\u7528\u57DF"},{"level":2,"title":"\u51FD\u6570","slug":"\u51FD\u6570"},{"level":2,"title":"\u6D41\u7A0B\u63A7\u5236","slug":"\u6D41\u7A0B\u63A7\u5236"},{"level":2,"title":"\u9519\u8BEF\u5904\u7406","slug":"\u9519\u8BEF\u5904\u7406"},{"level":2,"title":"\u7C7B","slug":"\u7C7B"},{"level":2,"title":"\u6A21\u5757","slug":"\u6A21\u5757"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u4EE3\u7801\u89C4\u8303/\u8BED\u8A00\u98CE\u683C.md"}',t={},o=p(`<h1 id="js\u4EE3\u7801\u98CE\u683C" tabindex="-1">js\u4EE3\u7801\u98CE\u683C <a class="header-anchor" href="#js\u4EE3\u7801\u98CE\u683C" aria-hidden="true">#</a></h1><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><p><a href="https://github.com/fex-team/styleguide/blob/master/javascript.md" target="_blank" rel="noopener noreferrer">https://github.com/fex-team/styleguide/blob/master/javascript.md</a></p><p><a href="https://google.github.io/styleguide/jsguide.html" target="_blank" rel="noopener noreferrer">https://google.github.io/styleguide/jsguide.html</a></p><p><a href="https://airbnb.io/javascript/" target="_blank" rel="noopener noreferrer">https://airbnb.io/javascript/</a></p><h2 id="\u53D8\u91CF\u58F0\u660E" tabindex="-1">\u53D8\u91CF\u58F0\u660E <a class="header-anchor" href="#\u53D8\u91CF\u58F0\u660E" aria-hidden="true">#</a></h2><p><strong>let\u3001const\u4EE3\u66FFvar</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">var</span> a

<span class="token comment">// good</span>
<span class="token keyword">let</span> a 

<span class="token comment">// some situation better</span>
<span class="token keyword">const</span> a
</code></pre></div><p>var\u6709\u7740\u7F3A\u5C11\u5757\u7EA7\u4F5C\u7528\u57DF\u3001\u53D8\u91CF\u8986\u76D6\u3001\u53D8\u91CF\u63D0\u5347\u7B49\u602A\u5F02\u884C\u4E3A\uFF0C\u76EE\u524D\u5DF2\u7ECF\u53EF\u4EE5\u5B8C\u5168\u629B\u5F03\uFF0Clet\u3001const\u89E3\u51B3\u4E86\u4E0A\u8FF0\u95EE\u9898\uFF0C\u4F7F\u5F97\u4EE3\u7801\u66F4\u52A0\u5065\u58EE\uFF0C\u5EFA\u8BAE\u5168\u91CF\u8FC1\u79FB\u5230\u65B0\u7684\u58F0\u660E\u65B9\u5F0F\u3002</p><p><strong>\u6BCF\u4E2A\u53D8\u91CF\u5355\u72EC\u58F0\u660E</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> 
    b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token comment">//good</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre></div><p>\u574F\u98CE\u683C\u7684\u4EE3\u7801\u5728ES5\u65F6\u4EE3\u5F88\u5E38\u89C1\uFF0C\u5728\u7EF4\u62A4\u65F6\uFF0C\u5F88\u5BB9\u6613\u5FD8\u8BB0\u6DFB\u52A0\uFF0C\u4FDD\u6301\u58F0\u660E\uFF0C\u4ECE\u800C\u5BFC\u81F4\u610F\u5916\u7684\u5168\u5C40\u53D8\u91CF\uFF0C\u53C8\u6216\u8005\u4F60\u60F3\u79FB\u52A8\u6B64\u53D8\u91CF\uFF0C\u6B64\u79CD\u58F0\u660E\u65B9\u5F0F\u5728\u73B0\u5728\u53EF\u7EF4\u62A4\u6027\u5F88\u5DEE\uFF0C\u5EFA\u8BAE\u6BCF\u4E2A\u53D8\u91CF\u5355\u72EC\u58F0\u660E</p><p><strong>\u53D8\u91CF\u5728\u4F7F\u7528\u5904\u5B9A\u4E49</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// other code  </span>

<span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// good </span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5F88\u591A\u4EBA\u559C\u6B22\u5728\u4F5C\u7528\u57DF\u9876\u90E8\u58F0\u660E\u6240\u6709\u7528\u5230\u7684\u53D8\u91CF\uFF0C\u4F46\u662F\u8FD9\u6837\u5176\u5B9E\u9690\u5F0F\u4E2D\u6269\u5927\u4E86\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\uFF0C\u800C\u4E14\u4E0D\u5229\u4E8E\u9605\u8BFB\uFF0C\u56E0\u4E3A\u627E\u5230\u5177\u4F53\u4EE3\u7801\u5904\uFF0C\u53EF\u80FD\u58F0\u660E\u8FD8\u5728\u4E0A\u9762\u51E0\u5343\u884C\u5904\uFF0C\u5982\u679C\u7528\u5230\u7684\u5730\u65B9\u4E0A\u4E00\u884C\u5C31\u662F\u5B83\uFF0C\u53EF\u8BFB\u6027\u5F88\u597D</p><h2 id="\u53D8\u91CF\u8D4B\u503C" tabindex="-1">\u53D8\u91CF\u8D4B\u503C <a class="header-anchor" href="#\u53D8\u91CF\u8D4B\u503C" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528\u89E3\u6784</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> c <span class="token operator">=</span> a<span class="token punctuation">.</span>c

<span class="token comment">// good</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>  <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span>c<span class="token punctuation">}</span> <span class="token operator">=</span> a
</code></pre></div><p>\u89E3\u6784\u8BA9\u539F\u5148\u7684\u547D\u4EE4\u53D6\u503C\u53D8\u4E3A\u58F0\u660E\u5F0F\u53D6\u503C\uFF0C\u8BED\u4E49\u6027\u66F4\u5F3A.\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u4E0D\u8981\u89E3\u6784\u5D4C\u5957\u592A\u591A\u5C42\uFF0C\u8FD9\u6837\u8BED\u4E49\u53CD\u800C\u964D\u4F4E\u3002</p><h2 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1">\u57FA\u672C\u7C7B\u578B <a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528 void 0 \u4EE3\u66FFundefined</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">undefined</span>

<span class="token comment">// good</span>
<span class="token keyword">void</span> <span class="token number">0</span>
</code></pre></div><p>undefined\u4E0D\u662F\u4E00\u4E2A\u5173\u952E\u5B57\uFF0C\u8FD9\u4EE3\u8868\u5B83\u53EF\u4EE5\u88AB\u4FEE\u6539\uFF0Cvoid 0 \u4F1A\u8FD4\u56DE\u6B63\u786E\u7684undefined</p><p><strong>\u4F7F\u7528null\u4EE3\u66FFundefined\u8868\u793A\u6682\u65F6\u65E0\u503C</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span>

<span class="token comment">// good</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre></div><p>undefined\u662F\u7CFB\u7EDF\u4E2D\u8868\u793A\u672A\u58F0\u660E\u6216\u8005\u672A\u5B9A\u4E49\u7684\u60C5\u51B5\uFF0C\u56E0\u4E3A\u5176\u6DF7\u6DC6\u4E86\u53D8\u91CF\u662F\u672A\u58F0\u660E\u8FD8\u662F\u672A\u5B9A\u4E49\u7684\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u4F7F\u7528null\u8868\u793A\u7CFB\u7EDF\u4E2D\u672A\u8D4B\u503C\u7684\u60C5\u51B5</p><p><strong>\u5168\u9762\u4F7F\u7528\u6A21\u677F\u5B57\u7B26</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span> <span class="token operator">+</span> c <span class="token operator">+</span> <span class="token string">&quot;4&quot;</span>

<span class="token comment">// good </span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">3</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">4</span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p>\u6A21\u677F\u5B57\u7B26\u4E32\u53BB\u9664\u4E86\u5B57\u7B26\u4E32\u4E2D\u7684\u8FDE\u63A5\u7B26\uFF0C\u540C\u65F6\u51CF\u5C11\u4E86\u4EE3\u7801\u9700\u8981\u8F6C\u4E49\u7684\u6B21\u6570\uFF0C\u4F7F\u5F97\u53EF\u7EF4\u62A4\u6027\u52A0\u5F3A\u3002</p><h2 id="\u7C7B\u578B\u6BD4\u8F83" tabindex="-1">\u7C7B\u578B\u6BD4\u8F83 <a class="header-anchor" href="#\u7C7B\u578B\u6BD4\u8F83" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528===/!==</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
a <span class="token operator">==</span> <span class="token keyword">null</span>
<span class="token comment">// good</span>
a <span class="token operator">===</span> <span class="token keyword">undefined</span>
</code></pre></div><p>JS\u4E2D\u7C7B\u578B\u8F6C\u6362\u5C24\u4E3A\u590D\u6742\uFF0C\u51B5\u4E14\u663E\u5F0F\u5927\u4E8E\u9690\u5F0F\uFF0C\u5728\u7EDD\u5927\u6570\u60C5\u51B5\u4E0B\uFF0C\u5E94\u8BE5\u4F7F\u7528\u5168\u7B49</p><h2 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h2><p><strong>\u901A\u5E38\u60C5\u51B5\u4E0B\u4F7F\u7528\u5B57\u9762\u91CF\u58F0\u660E</strong></p><div class="language-js"><pre><code><span class="token comment">//bad</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//good</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
</code></pre></div><p>\u5B57\u9762\u91CF\u53EF\u8BFB\u6027\u66F4\u5F3A\uFF0C\u89E3\u6790\u6548\u7387\u4E5F\u66F4\u9AD8</p><p><strong>\u4F7F\u7528\u5C3E\u9017\u53F7</strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> values <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;first value&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;second value&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5C3E\u9017\u53F7\u4F7F\u5F97\u6570\u7EC4\u66F4\u52A0\u5BB9\u6613\u8FDB\u884C\u5B57\u9762\u91CF\u4FEE\u6539</p><h2 id="\u5BF9\u8C61" tabindex="-1">\u5BF9\u8C61 <a class="header-anchor" href="#\u5BF9\u8C61" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528\u5B57\u9762\u91CF\u6784\u9020</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//good</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><p><strong>\u5C5E\u6027\u7B80\u5199</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">stuff</span><span class="token operator">:</span> <span class="token string">&#39;candy&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">method</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stuff<span class="token punctuation">;</span>  <span class="token comment">// Returns &#39;candy&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//good</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  stuff<span class="token punctuation">,</span>
  <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stuff<span class="token punctuation">;</span>  <span class="token comment">// Returns &#39;candy&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5C5E\u6027\u7B80\u5199\u53EF\u4EE5\u4F7F\u5F97\u5B9A\u4E49\u66F4\u52A0\u6E05\u6670\uFF0C\u4F46\u662F\u4F1A\u5BFC\u81F4\u5176\u51FD\u6570\u540D\u79F0\u4E22\u5931</p><h2 id="\u4F5C\u7528\u57DF" tabindex="-1">\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p><strong>\u7981\u6B62\u4F7F\u7528with</strong></p><p>with\u521B\u5EFA\u4E86\u65B0\u7684\u4F5C\u7528\u57DF\uFF0C\u4F7F\u5F97\u4F60\u7684\u4EE3\u7801\u5F88\u6666\u6DA9</p><p><strong>\u907F\u514D\u4F7F\u7528eval</strong></p><p>eval\u7684\u529F\u80FD\u8FC7\u4E8E\u5F3A\u5927\uFF0C\u5F88\u5BB9\u6613\u51FA\u73B0\u6F0F\u6D1E</p><h2 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h2><p><strong>\u5C3D\u91CF\u4F7F\u7528\u51FD\u6570\u58F0\u660E</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u51FD\u6570\u8868\u8FBE\u5F0F\u4E0D\u4F1A\u6709\u58F0\u660E\u63D0\u5347\uFF0C\u8FD9\u4E2A\u7279\u6027\u5728\u5F88\u591A\u573A\u5408\u6709\u7528\u5904\uFF0C\u9664\u6B64\u4EE5\u5916\u51FD\u6570\u8868\u8FBE\u5F0F\u8FD8\u6709\u4E00\u4E9B\u602A\u5F02\u60C5\u51B5</p><p><strong>\u4F7F\u7528\u7BAD\u5934\u51FD\u6570\u4FDD\u6301this</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token function">getObjectLiteral</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stuff <span class="token operator">=</span> <span class="token string">&#39;fruit&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">stuff</span><span class="token operator">:</span> <span class="token string">&#39;candy&#39;</span><span class="token punctuation">,</span>
      <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> self<span class="token punctuation">.</span>stuff<span class="token punctuation">}</span> <span class="token punctuation">,</span>  <span class="token comment">// Returns &#39;fruit&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//good</span>
<span class="token keyword">class</span> <span class="token punctuation">{</span>
  <span class="token function">getObjectLiteral</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>stuff <span class="token operator">=</span> <span class="token string">&#39;fruit&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">stuff</span><span class="token operator">:</span> <span class="token string">&#39;candy&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">method</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stuff<span class="token punctuation">,</span>  <span class="token comment">// Returns &#39;fruit&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u7BAD\u5934\u51FD\u6570\u5230\u6765\u4E4B\u524D\uFF0C\u6211\u4EEC\u90FD\u662F\u4F7F\u7528\u4FDD\u5B58this\u6216\u8005bind(this)\u6765\u4FEE\u6B63this\u6307\u5411\uFF0C\u6709\u4E86\u7BAD\u5934\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u5B8C\u6210\u4E24\u8005\u7684\u5DE5\u4F5C\uFF0C\u5728\u5D4C\u5957\u5C42\u6B21\u8F83\u6DF1\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u8BFB\u6027\u4E5F\u8D8A\u597D</p><p><strong>\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  a <span class="token operator">=</span> a <span class="token operator">||</span> defaultVal<span class="token punctuation">;</span>
  <span class="token comment">// or </span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> a <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    a <span class="token operator">=</span> defaultVal<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> defaultVal</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7528\u6216\u7684\u5F62\u5F0F\u8FDB\u884C\u9ED8\u8BA4\u503C\u64CD\u4F5C\uFF0C\u4F1A\u5BFC\u81F4\u5047\u503C\u65E0\u6CD5\u4F20\u5165\uFF0C\u4F7F\u7528typeof\u4E4B\u540E\uFF0C\u4F7F\u5F97\u7528\u8BED\u5224\u65AD\u7684\u4EE3\u7801\u81A8\u80C0\uFF0C\u4F7F\u7528\u7CFB\u7EDF\u7684\u9ED8\u8BA4\u503C\u8BED\u6CD5\uFF0C\u66F4\u52A0\u7B80\u6D01\u53EF\u8BFB</p><p><strong>\u4F7F\u7528rest\u8FD0\u7B97\u7B26</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">let</span> restArg <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token comment">//good</span>
<span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><p>ES5\u65F6\u4EE3\u83B7\u53D6\u51FD\u6570\u8FD0\u884C\u65F6\u53C2\u6570\u53EA\u80FD\u4F7F\u7528arguments,\u4F46\u662F\u5176\u6709\u4E0E\u5B9E\u9645\u53C2\u6570\u7ED1\u5B9A\u7684\u7279\u6B8A\u6548\u679C\uFF0C\u4EE5\u53CA\u5176\u4E3A\u7C7B\u6570\u7EC4\uFF0C\u9700\u8981\u989D\u5916\u5904\u7406\u6210\u6570\u7EC4\u7684\u539F\u56E0\uFF0C\u65B0\u7684rest\u8BED\u6CD5\u89E3\u51B3\u4E86\u8FD9\u4E9B\u95EE\u9898</p><h2 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1">\u6D41\u7A0B\u63A7\u5236 <a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528for of \u4EE3\u66FFfor in</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">for</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> Obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Obj<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dosomething</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// good</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>Obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><p>for in \u4F1A\u8FED\u4EE3\u6574\u6761\u539F\u578B\u94FE\u4E0A\u7684\u539F\u578B\uFF0C\u8FD9\u4E00\u822C\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684\uFF0C\u4F7F\u7528for of\u7ED3\u5408Object.keys()\u80FD\u591F\u66F4\u6E05\u6670\u505A\u5230\u3002</p><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1">\u9519\u8BEF\u5904\u7406 <a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a></h2><p><strong>\u4E0D\u8981\u6355\u83B7\u5F02\u5E38\u800C\u4E0D\u505A\u4EC0\u4E48</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token function">shouldFail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fail</span><span class="token punctuation">(</span><span class="token string">&#39;expected an error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>expected<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// good</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">handleNumericResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// it&#39;s not numeric; that&#39;s fine, just continue</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token function">handleTextResponse</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9519\u8BEF\u5E94\u8BE5\u88AB\u91CD\u89C6\uFF0C\u6355\u83B7\u9519\u8BEF\u4E0D\u4F1A\u8BA9\u4F60\u9519\u8BEF\u7684\u903B\u8F91\u6B63\u786E\uFF0C\u76F8\u53CD\u51FA\u73B0\u9519\u8BEF\u4E0D\u662F\u9690\u85CF\u9519\u8BEF\uFF0C\u800C\u662F\u8981\u8FDB\u884C\u4E0A\u62A5\u7B49\u540E\u7EED\u5904\u7406</p><h2 id="\u7C7B" tabindex="-1">\u7C7B <a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a></h2><p><strong>\u4F7F\u7528class</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">Queue</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Queue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">contents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>contents<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>class\u4E0D\u9700\u8981\u64CD\u4F5Cprototype\uFF0C\u66F4\u52A0\u7B80\u6D01\uFF0C\u4E5F\u66F4OOP</p><p><strong>\u4F7F\u7528extends</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> inherits <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inherits&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">PeekableQueue</span><span class="token punctuation">(</span><span class="token parameter">contents</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Queue</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> contents<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">inherits</span><span class="token punctuation">(</span>PeekableQueue<span class="token punctuation">,</span> Queue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PeekableQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">class</span> <span class="token class-name">PeekableQueue</span> <span class="token keyword">extends</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span>
  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_queue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>extends\u4E0D\u9700\u8981\u64CD\u4F5Cprototype\uFF0C\u66F4\u52A0\u7B80\u6D01\uFF0C\u4E5F\u66F4OOP</p><h2 id="\u6A21\u5757" tabindex="-1">\u6A21\u5757 <a class="header-anchor" href="#\u6A21\u5757" aria-hidden="true">#</a></h2><p><strong>\u5BFC\u5165\u65F6\u4FDD\u6301\u540E\u7F00\u540D</strong></p><div class="language-js"><pre><code><span class="token comment">// bad</span>
<span class="token keyword">import</span> <span class="token string">&#39;../directory/file&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//good</span>
<span class="token keyword">import</span> <span class="token string">&#39;../directory/file.js&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4FDD\u6301\u540E\u7F00\u540D\u53EF\u4EE5\u63D0\u9AD8\u53EF\u8BFB\u6027\uFF0C\u8FD8\u53EF\u4EE5\u907F\u514D\u5BFB\u627E\u6A21\u5757\u65F6\uFF0C\u627E\u5230\u5176\u4ED6\u540C\u540D\u4E0D\u540C\u540E\u7F00\u7684\u6587\u4EF6</p><p><strong>\u901A\u7528\u5BFC\u5165\u65F6\u5408\u7406\u547D\u540D</strong></p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fileOne <span class="token keyword">from</span> <span class="token string">&#39;../file-one.js&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> MyClass <span class="token keyword">from</span> <span class="token string">&#39;../my-class.js&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5408\u7406\u7684\u547D\u540D\u63D0\u9AD8\u4E86\u53EF\u8BFB\u6027</p><p><strong>\u4F7F\u7528\u547D\u540D\u5BFC\u51FA\u800C\u4E0D\u662F\u9ED8\u8BA4\u5BFC\u51FA</strong></p><div class="language-js"><pre><code><span class="token comment">// Do not use default exports:</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token comment">// BAD!</span>

<span class="token comment">// Use named exports:</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
</code></pre></div><p>\u9ED8\u8BA4\u5BFC\u81F4\u4F1A\u5BFC\u81F4\u5916\u754C\u5BF9\u6A21\u5757\u7684\u547D\u4EE4\u4E0D\u4E00\u81F4\uFF0C\u5E26\u6765\u7EF4\u62A4\u95EE\u9898</p>`,89),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{g as __pageData,y as default};
