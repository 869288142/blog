import{_ as a,c as n,o as e,a as s}from"./app.a3c81315.js";const g='{"title":"\u6570\u7EC4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u7EC4\u7684\u5B9A\u4E49","slug":"\u6570\u7EC4\u7684\u5B9A\u4E49"},{"level":2,"title":"\u6570\u7EC4\u64CD\u4F5C","slug":"\u6570\u7EC4\u64CD\u4F5C"},{"level":3,"title":"\u65B0\u589E","slug":"\u65B0\u589E"},{"level":3,"title":"\u4FEE\u6539","slug":"\u4FEE\u6539"},{"level":3,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":3,"title":"\u67E5\u627E","slug":"\u67E5\u627E"},{"level":3,"title":"\u6392\u5E8F\u7B97\u6CD5","slug":"\u6392\u5E8F\u7B97\u6CD5"},{"level":3,"title":"\u79FB\u4F4D","slug":"\u79FB\u4F4D"},{"level":2,"title":"\u5E38\u89C1\u7B97\u6CD5","slug":"\u5E38\u89C1\u7B97\u6CD5"},{"level":2,"title":"\u7B97\u6CD5\u5B9E\u73B0","slug":"\u7B97\u6CD5\u5B9E\u73B0"},{"level":2,"title":"leetcode\u4E60\u9898","slug":"leetcode\u4E60\u9898"}],"relativePath":"\u57FA\u7840/\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784/\u6570\u7EC4/index.md"}',t={},p=s(`<h1 id="\u6570\u7EC4" tabindex="-1">\u6570\u7EC4 <a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a></h1><h2 id="\u6570\u7EC4\u7684\u5B9A\u4E49" tabindex="-1">\u6570\u7EC4\u7684\u5B9A\u4E49 <a class="header-anchor" href="#\u6570\u7EC4\u7684\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u7531<strong>\u76F8\u540C\u7C7B\u578B</strong>\u7684\u5143\u7D20\u7684\u96C6\u5408\uFF0C<strong>\u5982\u679C\u7531\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u7EC4\u6210\u7684\u96C6\u5408\u6210\u4E3A\u5143\u7956</strong></p><h2 id="\u6570\u7EC4\u64CD\u4F5C" tabindex="-1">\u6570\u7EC4\u64CD\u4F5C <a class="header-anchor" href="#\u6570\u7EC4\u64CD\u4F5C" aria-hidden="true">#</a></h2><h3 id="\u65B0\u589E" tabindex="-1">\u65B0\u589E <a class="header-anchor" href="#\u65B0\u589E" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> ele
</code></pre></div><h3 id="\u4FEE\u6539" tabindex="-1">\u4FEE\u6539 <a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a></h3><div class="language-js"><pre><code>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> ele
</code></pre></div><h3 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">delete</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
</code></pre></div><h3 id="\u67E5\u627E" tabindex="-1">\u67E5\u627E <a class="header-anchor" href="#\u67E5\u627E" aria-hidden="true">#</a></h3><h4 id="\u5F62\u5F0F" tabindex="-1">\u5F62\u5F0F <a class="header-anchor" href="#\u5F62\u5F0F" aria-hidden="true">#</a></h4><div class="language-js"><pre><code>arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">linearSearch</span><span class="token punctuation">(</span><span class="token parameter">condition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">condition</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> i
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="\u5185\u7F6E\u65B9\u6CD5" tabindex="-1">\u5185\u7F6E\u65B9\u6CD5 <a class="header-anchor" href="#\u5185\u7F6E\u65B9\u6CD5" aria-hidden="true">#</a></h4><ul><li><p><code>Array.prototype.indexOf</code> <code>Array.prototype.lastIndexOf</code> \u6307\u5B9A\u5143\u7D20\u5E76\u8FD4\u56DE\u4E0B\u6807</p></li><li><p><code>Array.prototype.findIndex</code> \u6307\u5B9A\u67E5\u8BE2\u6761\u4EF6\u5E76\u8FD4\u56DE\u4E0B\u6807</p></li><li><p><code>Array.prototype.find</code> \u6307\u5B9A\u67E5\u8BE2\u6761\u4EF6\u5E76\u8FD4\u56DE\u76EE\u6807\u5143\u7D20</p></li><li><p><code>Array.prototype.includes</code> \u67E5\u8BE2\u6307\u5B9A\u5143\u7D20\u662F\u5426\u5B58\u5728</p></li></ul><h3 id="\u6392\u5E8F\u7B97\u6CD5" tabindex="-1">\u6392\u5E8F\u7B97\u6CD5 <a class="header-anchor" href="#\u6392\u5E8F\u7B97\u6CD5" aria-hidden="true">#</a></h3><ul><li><code>Array.prototype.sort</code></li></ul><h3 id="\u79FB\u4F4D" tabindex="-1">\u79FB\u4F4D <a class="header-anchor" href="#\u79FB\u4F4D" aria-hidden="true">#</a></h3><p>\u5B9E\u73B0\u601D\u8DEF\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u4ECE\u524D\u5F80\u540E\u904D\u5386\uFF0C\u4F1A\u51FA\u73B0\u503C\u8986\u76D6\u7684\u95EE\u9898\uFF0C\u4ECE\u540E\u5F80\u524D\u904D\u5386\u53EF\u4EE5\u907F\u514D\u8FD9\u4E2A\u95EE\u9898</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;</span> start <span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span>  arr<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u89C1\u7B97\u6CD5" tabindex="-1">\u5E38\u89C1\u7B97\u6CD5 <a class="header-anchor" href="#\u5E38\u89C1\u7B97\u6CD5" aria-hidden="true">#</a></h2><ul><li><p>\u67E5\u627E</p><ul><li>\u7EBF\u6027\u67E5\u627E</li><li>\u4E8C\u5206\u67E5\u627E</li></ul></li><li><p>\u6392\u5E8F</p><ul><li>\u5192\u6CE1\u6392\u5E8F <ul><li>\u9009\u62E9\u6392\u5E8F\uFF1A\u5728\u5192\u6CE1\u57FA\u7840\u4E0A\u5C06\u4EA4\u6362\u6B21\u6570\u4ECEOn2\u964D\u4F4E\u5230\u4E86On</li></ul></li><li>\u63D2\u5165\u6392\u5E8F <ul><li>\u5E0C\u5C14\u6392\u5E8F\uFF1A\u5728\u63D2\u5165\u6392\u5E8F\u57FA\u7840\u4F18\u5316\u5143\u7D20\u79FB\u52A8\u6B21\u6570\u9891\u7E41\u7684\u95EE\u9898</li></ul></li><li>\u5F52\u5E76\u6392\u5E8F</li><li>\u5FEB\u901F\u6392\u5E8F</li><li>\u8BA1\u6570\u6392\u5E8F <ul><li>\u6876\u6392\u5E8F\uFF1A</li></ul></li><li>\u57FA\u6570\u6392\u5E8F <ul><li>LSD</li><li>MSD</li></ul></li><li>\u5806\u6392\u5E8F</li><li>tim sort \u878D\u5408\u63D2\u5165\u6392\u5E8F\u548C\u5F52\u5E76\u6392\u5E8F</li></ul></li></ul><h2 id="\u7B97\u6CD5\u5B9E\u73B0" tabindex="-1">\u7B97\u6CD5\u5B9E\u73B0 <a class="header-anchor" href="#\u7B97\u6CD5\u5B9E\u73B0" aria-hidden="true">#</a></h2><p><a href="https://github.com/869288142/algorithm/tree/master/array" target="_blank" rel="noopener noreferrer">\u6570\u7EC4\u7B97\u6CD5\u5B9E\u73B0</a></p><h2 id="leetcode\u4E60\u9898" tabindex="-1">leetcode\u4E60\u9898 <a class="header-anchor" href="#leetcode\u4E60\u9898" aria-hidden="true">#</a></h2><p><a href="https://github.com/869288142/leetcode/tree/master/array" target="_blank" rel="noopener noreferrer">\u6570\u7EC4\u7B97\u6CD5\u7EC3\u4E60</a></p><p><a href="https://github.com/869288142/leetcode/tree/master/binarySeach" target="_blank" rel="noopener noreferrer">\u4E8C\u5206\u67E5\u627E</a></p>`,28),o=[p];function l(r,i,c,d,u,h){return e(),n("div",null,o)}var f=a(t,[["render",l]]);export{g as __pageData,f as default};
