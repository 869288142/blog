import{_ as n,c as a,o as s,a as t}from"./app.a3c81315.js";const m='{"title":"\u6269\u5145\u7B2C\u4E09\u65B9\u6A21\u5757\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"d.ts\u7F16\u5199","slug":"d-ts\u7F16\u5199"},{"level":2,"title":"\u5F15\u7528\u4F9D\u8D56","slug":"\u5F15\u7528\u4F9D\u8D56"},{"level":3,"title":"/// <reference path=\\"...\\" />","slug":"reference-path"},{"level":3,"title":"/// <reference types=\\"...\\" />","slug":"reference-types"},{"level":2,"title":"\u5168\u5C40\u5E93","slug":"\u5168\u5C40\u5E93"},{"level":2,"title":"\u6269\u5145\u5168\u5C40\u5E93","slug":"\u6269\u5145\u5168\u5C40\u5E93"},{"level":2,"title":"\u7F16\u5199\u73AF\u5883\u6A21\u5757","slug":"\u7F16\u5199\u73AF\u5883\u6A21\u5757"},{"level":2,"title":"\u6269\u5C55\u7B2C\u4E09\u65B9\u5E93","slug":"\u6269\u5C55\u7B2C\u4E09\u65B9\u5E93"},{"level":2,"title":"\u751F\u6210\u58F0\u660E\u6587\u4EF6","slug":"\u751F\u6210\u58F0\u660E\u6587\u4EF6"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":3,"title":"\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6","slug":"\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u4EE3\u7801\u8D28\u91CF/\u9759\u6001\u8BED\u8A00/TypeScript/types.md"}',e={},p=t(`<h1 id="\u6269\u5145\u7B2C\u4E09\u65B9\u6A21\u5757\u7C7B\u578B" tabindex="-1">\u6269\u5145\u7B2C\u4E09\u65B9\u6A21\u5757\u7C7B\u578B <a class="header-anchor" href="#\u6269\u5145\u7B2C\u4E09\u65B9\u6A21\u5757\u7C7B\u578B" aria-hidden="true">#</a></h1><p>typescript\u81EA\u5E26\u7C7B\u578B\u7CFB\u7EDF\uFF0C\u4F46\u662F\u76EE\u524D\u793E\u533A\u5F88\u591A\u5E93\u90FD\u662FJavaScript\u5B9E\u73B0\u7684\uFF0C\u5982\u4F55\u8BA9\u8FD9\u4E9B\u5E93\u4E0Etypescript\u517C\u5BB9\u662F\u4E00\u4E2A\u96BE\u9898\uFF0C\u7ECF\u8FC7\u5FAE\u8F6F\u591A\u6B21\u5C1D\u8BD5\uFF0C\u63D0\u51FA\u4E86xx.d.ts\u65B9\u6848</p><h2 id="d-ts\u7F16\u5199" tabindex="-1">d.ts\u7F16\u5199 <a class="header-anchor" href="#d-ts\u7F16\u5199" aria-hidden="true">#</a></h2><p>\u6709\u65F6\u5019\u6211\u4EEC\u7684\u5E93\u6216\u8005\u7B2C\u4E09\u65B9\u5E93\u6CA1\u6709x.d.ts\u58F0\u660E\uFF0C\u6211\u4EEC\u9700\u8981\u81EA\u5DF1\u7F16\u5199</p><h2 id="\u5F15\u7528\u4F9D\u8D56" tabindex="-1">\u5F15\u7528\u4F9D\u8D56 <a class="header-anchor" href="#\u5F15\u7528\u4F9D\u8D56" aria-hidden="true">#</a></h2><h3 id="reference-path" tabindex="-1">/// &lt;reference path=&quot;...&quot; /&gt; <a class="header-anchor" href="#reference-path" aria-hidden="true">#</a></h3><p>TypeScript\u4F7F\u7528\u4E0B\u8FF0\u540D\u53EB<strong>\u4E09\u659C\u7EBF\u6307\u4EE4</strong>\u7684\u4E00\u79CD,<strong>\u7528\u6765\u58F0\u660E\u4E0D\u540C\u58F0\u660E\u4E4B\u95F4\u7684\u4F9D\u8D56,\u7528\u4E8E\u7F16\u5199TS\u4EE3\u7801</strong>\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/// &lt;reference path=&quot;...&quot; /&gt; </span>
</code></pre></div><p><strong>\u573A\u666F</strong></p><p>\u6BD4\u5982\u6211\u4EEC\u9700\u8981\u4E00\u4E9Bnode\u7684\u5B9A\u4E49</p><p><strong>Validation.ts</strong></p><div class="language-js"><pre><code>namespace Validation <span class="token punctuation">{</span>
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">StringValidator</span> <span class="token punctuation">{</span>
        <span class="token function">isAcceptable</span><span class="token punctuation">(</span>s<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>LettersOnlyValidator.ts</strong></p><div class="language-js"><pre><code><span class="token comment">// \u8FD9\u91CC\u5F15\u5165Validation.ts\u58F0\u660E</span>
<span class="token comment">/// &lt;reference path=&quot;Validation.ts&quot; /&gt;</span>
namespace Validation <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lettersRegexp <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Za-z]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token comment">// LettersOnlyValidator \u5B9E\u73B0StringValidator \u63A5\u53E3</span>
    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">LettersOnlyValidator</span> 
    <span class="token keyword">implements</span> <span class="token class-name">StringValidator</span> <span class="token punctuation">{</span>
        <span class="token function">isAcceptable</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">s</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> lettersRegexp<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="reference-types" tabindex="-1">/// &lt;reference types=&quot;...&quot; /&gt; <a class="header-anchor" href="#reference-types" aria-hidden="true">#</a></h3><p>\u5728<strong>\u7F16\u5199d.ts\u65F6\uFF0C\u5982\u679C\u9700\u8981\u5F15\u5165\u5176\u4ED6\u58F0\u660E\u6587\u4EF6\uFF0C\u4F7F\u7528\u6B64\u547D\u4EE4</strong></p><div class="language-js"><pre><code><span class="token comment">/// &lt;reference types=&quot;node&quot; /&gt;</span>
</code></pre></div><h2 id="\u5168\u5C40\u5E93" tabindex="-1">\u5168\u5C40\u5E93 <a class="header-anchor" href="#\u5168\u5C40\u5E93" aria-hidden="true">#</a></h2><p>typescript\u4E2D\u6587\u7F51\u6709\u4E00\u4E2A\u8FD9\u6837\u7684\u6A21\u677F</p><div class="language-js"><pre><code><span class="token comment">// \u8C03\u7528\u5F62\u5F0Ff()</span>
<span class="token function">myLib</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> 

declare <span class="token keyword">function</span> <span class="token function">myLib</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
declare <span class="token keyword">function</span> <span class="token function">myLib</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">a</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

<span class="token comment">// \u63D0\u4F9B\u7C7B\u578B\u7ED9\u5F00\u53D1\u8005</span>
<span class="token keyword">var</span> <span class="token literal-property property">x</span><span class="token operator">:</span> myLib

<span class="token keyword">interface</span> <span class="token class-name">myLib</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">length</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    extras<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5168\u5C40\u53D8\u91CF\u65F6\uFF0C\u5C06\u6B64\u7C7B\u578B\u62D3\u5C55\u81F3\u6B64\u8BED\u6CD5\u5185</span>
declare namespace myLib <span class="token punctuation">{</span>
    <span class="token comment">//~ We can write &#39;myLib.timeout = 50;&#39;</span>
    <span class="token keyword">let</span> <span class="token literal-property property">timeout</span><span class="token operator">:</span> number<span class="token punctuation">;</span>

    <span class="token comment">//~ We can access &#39;myLib.version&#39;, but not change it</span>
    <span class="token keyword">const</span> <span class="token literal-property property">version</span><span class="token operator">:</span> string<span class="token punctuation">;</span>

    <span class="token comment">//~ There&#39;s some class we can create via &#39;let c = new myLib.Cat(42)&#39;</span>
    <span class="token comment">//~ Or reference e.g. &#39;function f(c: myLib.Cat) { ... }</span>
    <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//~ We can read &#39;c.age&#39; from a &#39;Cat&#39; instance</span>
        readonly age<span class="token operator">:</span> number<span class="token punctuation">;</span>

        <span class="token comment">//~ We can invoke &#39;c.purr()&#39; from a &#39;Cat&#39; instance</span>
        <span class="token function">purr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//~ We can declare a variable as</span>
    <span class="token comment">//~   &#39;var s: myLib.CatSettings = { weight: 5, name: &quot;Maru&quot; };&#39;</span>
    <span class="token keyword">interface</span> <span class="token class-name">CatSettings</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">weight</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        tailLength<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//~ We can write &#39;const v: myLib.VetID = 42;&#39;</span>
    <span class="token comment">//~  or &#39;const v: myLib.VetID = &quot;bob&quot;;&#39;</span>
    type VetID <span class="token operator">=</span> string <span class="token operator">|</span> number<span class="token punctuation">;</span>

    <span class="token comment">//~ We can invoke &#39;myLib.checkCat(c)&#39; or &#39;myLib.checkCat(c, v);&#39;</span>
    <span class="token keyword">function</span> <span class="token function">checkCat</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">c</span><span class="token operator">:</span> Cat<span class="token punctuation">,</span> s<span class="token operator">?</span><span class="token operator">:</span> VetID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6269\u5145\u5168\u5C40\u5E93" tabindex="-1">\u6269\u5145\u5168\u5C40\u5E93 <a class="header-anchor" href="#\u6269\u5145\u5168\u5C40\u5E93" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> global <span class="token punctuation">{</span>
    <span class="token comment">// \u6269\u5C55String\u7C7B\u578B\u7684\u65B9\u6CD5</span>
    <span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
      <span class="token function">fancyFormat</span><span class="token punctuation">(</span>opts<span class="token operator">:</span> StringFormatOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="\u7F16\u5199\u73AF\u5883\u6A21\u5757" tabindex="-1">\u7F16\u5199\u73AF\u5883\u6A21\u5757 <a class="header-anchor" href="#\u7F16\u5199\u73AF\u5883\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u6BD4\u5982\u5E38\u89C1\u7684\u8D44\u6E90\u6A21\u5757 <a href="https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules</a></p><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;*!text&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> content<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> content<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// Some do it the other way around.</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&quot;json!*&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6269\u5C55\u7B2C\u4E09\u65B9\u5E93" tabindex="-1">\u6269\u5C55\u7B2C\u4E09\u65B9\u5E93 <a class="header-anchor" href="#\u6269\u5C55\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a></h2><p><a href="https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-plugin-d-ts.html</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> greeter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;super-greeter&quot;</span><span class="token punctuation">;</span>
<span class="token comment">/*~ Here, declare the same module as the one you imported above
 *~ then we expand the existing declaration of the greeter function
 */</span>
<span class="token keyword">export</span> <span class="token keyword">module</span> <span class="token string">&quot;super-greeter&quot;</span> <span class="token punctuation">{</span>
  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">GreeterFunction</span> <span class="token punctuation">{</span>
    <span class="token comment">/** Greets even better! */</span>
    <span class="token function">hyperGreet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
        
</code></pre></div><h2 id="\u751F\u6210\u58F0\u660E\u6587\u4EF6" tabindex="-1">\u751F\u6210\u58F0\u660E\u6587\u4EF6 <a class="header-anchor" href="#\u751F\u6210\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a></h2><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><p><strong>tsconfig.json</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u751F\u6210\u58F0\u660E\u6587\u4EF6</span>
      <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// \u751F\u6210\u58F0\u660E\u6587\u4EF6sourceMap</span>
      <span class="token string-property property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token comment">// \u6307\u5B9A\u58F0\u660E\u6587\u4EF6\u548C\u58F0\u660E\u6587\u4EF6sourceMap\u8F93\u51FA\u76EE\u5F55</span>
      <span class="token string-property property">&quot;declarationDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/types&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

</code></pre></div><h3 id="\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6" tabindex="-1">\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6 <a class="header-anchor" href="#\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6" aria-hidden="true">#</a></h3><h4 id="\u5B89\u88C5api-extractor" tabindex="-1">\u5B89\u88C5api-extractor <a class="header-anchor" href="#\u5B89\u88C5api-extractor" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -g @microsoft/api-extractor
</code></pre></div><h4 id="\u521D\u59CB\u5316api-extractor" tabindex="-1">\u521D\u59CB\u5316api-extractor <a class="header-anchor" href="#\u521D\u59CB\u5316api-extractor" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code>api-extractor init
</code></pre></div><h4 id="\u8BBE\u7F6E\u5408\u5E76\u5165\u53E3" tabindex="-1">\u8BBE\u7F6E\u5408\u5E76\u5165\u53E3 <a class="header-anchor" href="#\u8BBE\u7F6E\u5408\u5E76\u5165\u53E3" aria-hidden="true">#</a></h4><p><strong>api-extractor.json</strong></p><div class="language-js"><pre><code><span class="token string-property property">&quot;mainEntryPointFilePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;projectFolder&gt;/lib/index.d.ts&quot;</span><span class="token punctuation">,</span>
</code></pre></div><h4 id="\u6267\u884C\u547D\u4EE4\u5408\u5E76\u58F0\u660E\u6587\u4EF6" tabindex="-1">\u6267\u884C\u547D\u4EE4\u5408\u5E76\u58F0\u660E\u6587\u4EF6 <a class="header-anchor" href="#\u6267\u884C\u547D\u4EE4\u5408\u5E76\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code>api-extractor run --local --verbose
</code></pre></div>`,42),o=[p];function c(r,l,i,u,k,d){return s(),a("div",null,o)}var g=n(e,[["render",c]]);export{m as __pageData,g as default};
