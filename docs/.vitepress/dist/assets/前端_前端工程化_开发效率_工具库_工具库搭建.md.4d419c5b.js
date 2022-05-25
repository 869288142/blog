import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const m='{"title":"\u5DE5\u5177\u5E93\u642D\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5DE5\u5177\u5E93\u7EC4\u6210","slug":"\u5DE5\u5177\u5E93\u7EC4\u6210"},{"level":2,"title":"\u6253\u5305\u5DE5\u5177 - RollupJS","slug":"\u6253\u5305\u5DE5\u5177-rollupjs"},{"level":3,"title":"\u96C6\u6210TS","slug":"\u96C6\u6210ts"},{"level":3,"title":"\u914D\u7F6Etsconfig.json","slug":"\u914D\u7F6Etsconfig-json"},{"level":3,"title":"\u96C6\u6210babel","slug":"\u96C6\u6210babel"},{"level":3,"title":"\u98CE\u683C","slug":"\u98CE\u683C"},{"level":3,"title":"\u652F\u6301\u5F15\u5165\u5916\u90E8\u6A21\u5757","slug":"\u652F\u6301\u5F15\u5165\u5916\u90E8\u6A21\u5757"},{"level":3,"title":"\u4EE3\u7801\u538B\u7F29","slug":"\u4EE3\u7801\u538B\u7F29"},{"level":3,"title":"\u5355\u5143\u6D4B\u8BD5","slug":"\u5355\u5143\u6D4B\u8BD5"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u5F00\u53D1\u6548\u7387/\u5DE5\u5177\u5E93/\u5DE5\u5177\u5E93\u642D\u5EFA.md"}',t={},o=p(`<h1 id="\u5DE5\u5177\u5E93\u642D\u5EFA" tabindex="-1">\u5DE5\u5177\u5E93\u642D\u5EFA <a class="header-anchor" href="#\u5DE5\u5177\u5E93\u642D\u5EFA" aria-hidden="true">#</a></h1><h2 id="\u5DE5\u5177\u5E93\u7EC4\u6210" tabindex="-1">\u5DE5\u5177\u5E93\u7EC4\u6210 <a class="header-anchor" href="#\u5DE5\u5177\u5E93\u7EC4\u6210" aria-hidden="true">#</a></h2><ul><li><p>\u4EE3\u7801\u89C4\u8303</p></li><li><p>\u9759\u6001\u68C0\u67E5</p></li><li><p>\u5355\u5143\u6D4B\u8BD5</p></li><li><p>git\u63D0\u4EA4\u89C4\u8303</p></li><li><p>changelog</p></li></ul><h2 id="\u6253\u5305\u5DE5\u5177-rollupjs" tabindex="-1">\u6253\u5305\u5DE5\u5177 - RollupJS <a class="header-anchor" href="#\u6253\u5305\u5DE5\u5177-rollupjs" aria-hidden="true">#</a></h2><ul><li><p>\u66F4\u4F18\u5316\u7684\u4EE3\u7801\u9884\u7F16\u8BD1\u4F18\u5316(Tree Shaking\u3001Scope Hoisting)</p></li><li><p>config\u4FEE\u6539\u81EA\u52A8reload</p></li><li><p>\u65B9\u4FBF\u8F93\u51FA\u591A\u4E2A\u683C\u5F0F</p></li></ul><h3 id="\u96C6\u6210ts" tabindex="-1">\u96C6\u6210TS <a class="header-anchor" href="#\u96C6\u6210ts" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">npm</span> i -D typescript
<span class="token function">npm</span> i -D rollup-plugin-typescript2
<span class="token function">npm</span> i -D tslib
</code></pre></div><h3 id="\u914D\u7F6Etsconfig-json" tabindex="-1">\u914D\u7F6E<code>tsconfig.json</code> <a class="header-anchor" href="#\u914D\u7F6Etsconfig-json" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;moduleResolution&quot;</span><span class="token operator">:</span><span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;removeComments&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u7528\u9690\u5F0Fany</span>
      <span class="token string-property property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// \u7981\u7528\u9690\u5F0Fthis</span>
      <span class="token string-property property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u672A\u4F7F\u7528\u7684\u5C40\u90E8\u53D8\u91CF</span>
      <span class="token string-property property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u672A\u4F7F\u7528\u7684\u53C2\u6570</span>
      <span class="token string-property property">&quot;strict&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;esnext&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;dom.iterable&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;scripthost&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;src&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="\u96C6\u6210babel" tabindex="-1">\u96C6\u6210babel <a class="header-anchor" href="#\u96C6\u6210babel" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> @rollup/plugin-babel --save-dev
<span class="token function">npm</span> i -D @babel/core
<span class="token function">npm</span> i -D @babel/preset-env
</code></pre></div><p><strong>babel.config.js</strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u98CE\u683C" tabindex="-1">\u98CE\u683C <a class="header-anchor" href="#\u98CE\u683C" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code>eslint  
prettier 
eslint-plugin-prettier eslint-config-prettier
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
</code></pre></div><div class="language-js"><pre><code><span class="token comment">/* eslint-disable */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5B9A\u811A\u672C\u7684\u8FD0\u884C\u73AF\u5883\u3002\u6BCF\u79CD\u73AF\u5883\u90FD\u6709\u4E00\u7EC4\u7279\u5B9A\u7684\u9884\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</span>
    <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">browser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u7684\u5168\u5C40\u53D8\u91CF</span>
		<span class="token string-property property">&#39;es2020&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u542F\u7528\u9664\u4E86 modules \u4EE5\u5916\u7684\u6240\u6709 ECMAScript 6 \u7279\u6027</span>
        <span class="token literal-property property">commonjs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// CommonJS \u5168\u5C40\u53D8\u91CF\u548C CommonJS \u4F5C\u7528\u57DF (\u7528\u4E8E Browserify/WebPack \u6253\u5305\u7684\u53EA\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\u4EE3\u7801)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token string-property property">&#39;parser&#39;</span><span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">ecmaVersion</span><span class="token operator">:</span>  <span class="token number">11</span><span class="token punctuation">,</span>  <span class="token comment">// \u6307\u5B9A\u4F60\u60F3\u8981\u4F7F\u7528\u7684 ECMAScript \u7248\u672C</span>
        <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// \u5982\u679C\u4F60\u7684\u4EE3\u7801\u662F ECMAScript \u6A21\u5757\uFF0C \u8BBE\u7F6E\u4E3A module</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u51FA\u4F60\u8981\u4F7F\u7528\u7684\u5168\u5C40\u53D8\u91CF\u3002\u5C06\u53D8\u91CF\u8BBE\u7F6E\u4E3A true \u5C06\u5141\u8BB8\u53D8\u91CF\u88AB\u91CD\u5199\uFF0C\u6216 false \u5C06\u4E0D\u5141\u8BB8\u88AB\u91CD\u5199</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;plugin:@typescript-eslint/recommended&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;plugin:jest/recommended&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;prettier&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;prettier/@typescript-eslint&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">/**
         * style
         */</span>

        <span class="token comment">// \u65B9\u62EC\u53F7\u91CC\u4E0D\u8981\u52A0\u7A7A\u683C</span>
        <span class="token string-property property">&#39;array-bracket-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5728\u5DE6\u82B1\u62EC\u53F7\u548C\u540C\u4E00\u884C\u4E0A\u7684\u4E0B\u4E00\u4E2A token \u4E4B\u95F4\u8981\u6C42\u4F7F\u7528\u4E00\u4E2A\u6216\u591A\u4E2A\u7A7A\u683C</span>
        <span class="token comment">// https://eslint.org/docs/rules/block-spacing</span>
        <span class="token string-property property">&quot;block-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5927\u62EC\u53F7\u98CE\u683C\u8981\u6C42</span>
        <span class="token string-property property">&#39;brace-style&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1tbs&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allowSingleLine</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5728\u9017\u53F7\u524D\u540E\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
        <span class="token string-property property">&#39;comma-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8BA1\u7B97\u5C5E\u6027\u7A7A\u683C</span>
        <span class="token string-property property">&#39;computed-property-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u51FD\u6570\u540D\u548C\u5F00\u62EC\u53F7\u4E4B\u95F4\u6709\u7A7A\u683C</span>
        <span class="token comment">// https://eslint.org/docs/rules/func-call-spacing</span>
        <span class="token string-property property">&#39;func-call-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u952E\u548C\u503C\u4E4B\u95F4\u4F7F\u7528\u4E00\u81F4\u7684\u7A7A\u683C</span>
        <span class="token string-property property">&#39;key-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">beforeColon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u7981\u6B62\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u952E\u548C\u5192\u53F7\u4E4B\u95F4\u5B58\u5728\u7A7A\u683C</span>
            <span class="token literal-property property">afterColon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// \u8981\u6C42\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u7684\u5192\u53F7\u548C\u503C\u4E4B\u95F4\u5B58\u5728\u81F3\u5C11\u6709\u4E00\u4E2A\u7A7A\u683C</span>
            <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;strict&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236\u5728\u5192\u53F7\u524D\u540E\u53EA\u6709\u4E00\u4E2A\u7A7A\u683C</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5173\u952E\u5B57\u7A7A\u683C</span>
        <span class="token string-property property">&#39;keyword-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8FDE\u7EED\u7A7A\u884C\u6570</span>
        <span class="token string-property property">&#39;no-multiple-empty-lines&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">maxEOF</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5757\u5185\u586B\u5145</span>
        <span class="token string-property property">&#39;padded-blocks&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">blocks</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">classes</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">switches</span><span class="token operator">:</span> <span class="token string">&#39;never&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8981\u6C42\u5C3D\u53EF\u80FD\u5730\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u5141\u8BB8\u5B57\u7B26\u4E32\u4F7F\u7528\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\uFF0C\u53EA\u8981\u5B57\u7B26\u4E32\u4E2D\u5305\u542B\u4E86\u4E00\u4E2A\u5176\u5B83\u5F15\u53F7\uFF0C\u5426\u5219\u9700\u8981\u8F6C\u4E49</span>
        <span class="token literal-property property">quotes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;single&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">avoidEscape</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5F3A\u5236\u5206\u53F7\u524D\u540E\u7684\u7A7A\u683C</span>
        <span class="token string-property property">&#39;semi-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5F3A\u5236\u5206\u53F7\u51FA\u73B0\u5728\u53E5\u5B50\u672B\u5C3E</span>
        <span class="token comment">// https://eslint.org/docs/rules/semi-style</span>
        <span class="token string-property property">&#39;semi-style&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;last&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5F3A\u5236\u5706\u62EC\u53F7\u5185\u6CA1\u6709\u7A7A\u683C</span>
        <span class="token string-property property">&#39;space-in-parens&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;never&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u64CD\u4F5C\u7B26\u5468\u56F4\u6709\u7A7A\u683C</span>
        <span class="token string-property property">&#39;space-infix-ops&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u4E00\u5143\u8FD0\u7B97\u7B26\u524D\u540E\u7A7A\u683C</span>
        <span class="token comment">// https://eslint.org/docs/rules/space-unary-ops</span>
        <span class="token string-property property">&#39;space-unary-ops&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">words</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">nonwords</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u7528\u884C\u5C3E\u7A7A\u683C\uFF0C\u4E0D\u5229\u4E8Ediff</span>
        <span class="token string-property property">&#39;no-trailing-spaces&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">/**
         * error
         */</span>

        <span class="token comment">// \u5F3A\u5236\u201Cfor\u201D \u5FAA\u73AF\u4E2D\u66F4\u65B0\u5B50\u53E5\u7684\u8BA1\u6570\u5668\u671D\u7740\u6B63\u786E\u7684\u65B9\u5411\u79FB\u52A8</span>
        <span class="token comment">// https://eslint.org/docs/rules/for-direction</span>
        <span class="token string-property property">&#39;for-direction&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5F3A\u5236\u5728 getter \u5C5E\u6027\u4E2D\u51FA\u73B0\u4E00\u4E2A return \u8BED\u53E5</span>
        <span class="token comment">// https://eslint.org/docs/rules/getter-return</span>
        <span class="token string-property property">&#39;getter-return&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allowImplicit</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u5FAA\u73AF\u4E2D\u51FA\u73B0 await</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-await-in-loop</span>
        <span class="token string-property property">&#39;no-await-in-loop&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u4E0E -0 \u8FDB\u884C\u6BD4\u8F83</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-compare-neg-zero</span>
        <span class="token string-property property">&#39;no-compare-neg-zero&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u6761\u4EF6\u8BED\u53E5\u4E2D\u51FA\u73B0\u8D4B\u503C\u64CD\u4F5C\u7B26</span>
        <span class="token string-property property">&#39;no-cond-assign&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;always&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u63A7\u5236\u5B57\u7B26</span>
        <span class="token string-property property">&#39;no-control-regex&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u7528 debugger</span>
        <span class="token string-property property">&#39;no-debugger&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728 function \u5B9A\u4E49\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u53C2\u6570</span>
        <span class="token string-property property">&#39;no-dupe-args&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u5BF9\u8C61\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u91CD\u590D\u7684\u952E</span>
        <span class="token string-property property">&#39;no-dupe-keys&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u91CD\u590D case \u6807\u7B7E</span>
        <span class="token string-property property">&#39;no-duplicate-case&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u7A7A\u5757\u8BED\u53E5\uFF0C\u5141\u8BB8\u51FA\u73B0\u7A7A\u7684 catch \u5B50\u53E5</span>
        <span class="token string-property property">&#39;no-empty&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">allowEmptyCatch</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\u51FA\u73B0\u7A7A\u5B57\u7B26\u96C6</span>
        <span class="token string-property property">&#39;no-empty-character-class&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5BF9 catch \u5B50\u53E5\u4E2D\u7684\u5F02\u5E38\u91CD\u65B0\u8D4B\u503C</span>
        <span class="token string-property property">&#39;no-ex-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5E03\u5C14\u8F6C\u6362</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-extra-boolean-cast</span>
        <span class="token string-property property">&#39;no-extra-boolean-cast&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5206\u53F7</span>
        <span class="token string-property property">&#39;no-extra-semi&#39;</span><span class="token operator">:</span> <span class="token string">&#39;off&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5BF9 function \u58F0\u660E\u91CD\u65B0\u8D4B\u503C</span>
        <span class="token string-property property">&#39;no-func-assign&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u5D4C\u5957\u7684\u5757\u4E2D\u51FA\u73B0 function \u58F0\u660E</span>
        <span class="token string-property property">&#39;no-inner-declarations&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728 RegExp \u6784\u9020\u51FD\u6570\u4E2D\u51FA\u73B0\u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</span>
        <span class="token string-property property">&#39;no-invalid-regexp&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u5B57\u7B26\u4E32\u548C\u6CE8\u91CA\u4E4B\u5916\u4E0D\u89C4\u5219\u7684\u7A7A\u767D</span>
        <span class="token string-property property">&#39;no-irregular-whitespace&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5C06 Math\u3001JSON \u548C Reflect \u5BF9\u8C61\u5F53\u4F5C\u51FD\u6570\u8FDB\u884C\u8C03\u7528</span>
        <span class="token string-property property">&#39;no-obj-calls&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62 Object \u5B9E\u4F8B\u76F4\u63A5\u8C03\u7528 Object.prototype \u7684\u5185\u7F6E\u65B9\u6CD5</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-prototype-builtins</span>
        <span class="token string-property property">&#39;no-prototype-builtins&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u6B63\u5219\u8868\u8FBE\u5F0F\u5B57\u9762\u91CF\u4E2D\u51FA\u73B0\u591A\u4E2A\u7A7A\u683C</span>
        <span class="token string-property property">&#39;no-regex-spaces&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u7528\u7A00\u758F\u6570\u7EC4</span>
        <span class="token string-property property">&#39;no-sparse-arrays&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728\u5E38\u89C4\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6A21\u677F\u5B57\u9762\u91CF\u5360\u4F4D\u7B26\u8BED\u6CD5</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-template-curly-in-string</span>
        <span class="token string-property property">&#39;no-template-curly-in-string&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u4F7F\u7528\u4EE4\u4EBA\u56F0\u60D1\u7684\u591A\u884C\u8868\u8FBE\u5F0F</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-unexpected-multiline</span>
        <span class="token string-property property">&#39;no-unexpected-multiline&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728 return\u3001throw\u3001continue \u548C break \u8BED\u53E5\u540E\u51FA\u73B0\u4E0D\u53EF\u8FBE\u4EE3\u7801</span>
        <span class="token string-property property">&#39;no-unreachable&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5728 finally \u8BED\u53E5\u5757\u4E2D\u51FA\u73B0\u63A7\u5236\u6D41\u8BED\u53E5</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-unsafe-finally</span>
        <span class="token string-property property">&#39;no-unsafe-finally&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u5BF9\u5173\u7CFB\u8FD0\u7B97\u7B26\u7684\u5DE6\u64CD\u4F5C\u6570\u4F7F\u7528\u5426\u5B9A\u64CD\u4F5C\u7B26</span>
        <span class="token comment">// https://eslint.org/docs/rules/no-unsafe-negation</span>
        <span class="token string-property property">&#39;no-unsafe-negation&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8981\u6C42\u4F7F\u7528 isNaN() \u68C0\u67E5 NaN</span>
        <span class="token string-property property">&#39;use-isnan&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5F3A\u5236 typeof \u8868\u8FBE\u5F0F\u4E0E\u6709\u6548\u7684\u5B57\u7B26\u4E32\u8FDB\u884C\u6BD4\u8F83</span>
        <span class="token comment">// https://eslint.org/docs/rules/valid-typeof</span>
        <span class="token string-property property">&#39;valid-typeof&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">requireStringLiterals</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5BF9 JSSDoc \u4E0D\u6B63\u786E\u7684\u6CE8\u91CA\u8FDB\u884C\u8B66\u544A</span>
        <span class="token comment">// https://eslint.org/docs/rules/valid-jsdoc</span>
        <span class="token string-property property">&#39;valid-jsdoc&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6307\u5B9A\u6807\u8BB0\uFF1A\u5982\u7528 arg \u66FF\u4EE3 param =&gt; { &#39;arg&#39;: &#39;param&#39; }</span>
            <span class="token string-property property">&#39;prefer&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">// \u6307\u5B9A\u7C7B\u578B</span>
            <span class="token string-property property">&#39;preferType&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token comment">// \u9700\u8981\u8FD4\u56DE\u6807\u8BB0</span>
            <span class="token string-property property">&#39;requireReturn&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

            <span class="token comment">// \u5141\u8BB8\u5728\u8FD4\u56DE\u6807\u8BB0\u4E2D\u7F3A\u5C11\u7C7B\u578B</span>
            <span class="token string-property property">&#39;requireReturnType&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

            <span class="token comment">// \u6307\u5B9A\u6B63\u5219\u8868\u8FBE\u5F0F\u4EE5\u5339\u914D\u6BCF\u4E2A JSDoc \u6CE8\u91CA\u4E2D\u7684\u63CF\u8FF0</span>
            <span class="token string-property property">&#39;matchDescription&#39;</span><span class="token operator">:</span> <span class="token string">&#39;.+&#39;</span><span class="token punctuation">,</span>

            <span class="token comment">// \u5141\u8BB8\u5728\u8FD4\u56DE\u6807\u8BB0\u4E2D\u7F3A\u5C11\u63CF\u8FF0</span>
            <span class="token string-property property">&#39;requireReturnDescription&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8B66\u544A\u5728\u53D1\u5E03\u4E4B\u524D\u5E94\u8BE5\u5254\u9664 console \u7684\u8C03\u7528</span>
        <span class="token string-property property">&#39;no-console&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8B66\u544A\u5728\u6761\u4EF6\u4E2D\u4F7F\u7528\u5E38\u91CF\u8868\u8FBE\u5F0F</span>
        <span class="token string-property property">&#39;no-constant-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span>


        <span class="token comment">/**
         * variables
         */</span>

        <span class="token comment">// \u7981\u6B62\u5728\u5B9A\u4E49\u53D8\u91CF\u4E4B\u524D\u5C31\u4F7F\u7528\u4E86\u53D8\u91CF</span>
        <span class="token string-property property">&#39;no-use-before-define&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">functions</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">classes</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u8B66\u544A\u53D8\u91CF\u58F0\u660E\u4E0E\u5916\u5C42\u4F5C\u7528\u57DF\u7684\u53D8\u91CF\u540C\u540D</span>
        <span class="token comment">// &#39;no-shadow&#39;: &#39;warn&#39;,</span>

        <span class="token comment">/**
         * practices
         */</span>
        <span class="token comment">// \u7981\u6B62Yoda\u6761\u4EF6</span>
        <span class="token literal-property property">yoda</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u4E0D\u5FC5\u8981\u7684\u5B57\u7B26\u8FDE\u63A5</span>
        <span class="token string-property property">&#39;no-useless-concat&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u65E0\u9650\u5FAA\u73AF</span>
        <span class="token string-property property">&#39;no-unmodified-loop-condition&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u81EA\u8EAB\u6BD4\u8F83</span>
        <span class="token string-property property">&#39;no-self-compare&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u7528\u9690\u5F0F\u7684eval</span>
        <span class="token string-property property">&#39;no-implied-eval&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u6570\u5B57\u5B57\u9762\u91CF\u4E2D\u4F7F\u7528\u524D\u5BFC\u548C\u672B\u5C3E\u5C0F\u6570\u70B9</span>
        <span class="token string-property property">&#39;no-floating-decimal&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// for-in \u9700\u8981\u8FDB\u884C hasOwnProperty \u5224\u65AD</span>
        <span class="token string-property property">&#39;guard-for-in&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u591A\u884C\u5B57\u7B26\u4E32</span>
        <span class="token string-property property">&#39;no-multi-str&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>

        <span class="token comment">// IIFE \u5F3A\u5236\u603B\u662F\u5305\u88F9 function \u8868\u8FBE\u5F0F,\u6682\u65F6\u6CA1\u5FC5\u8981\u5F00\u542F</span>
        <span class="token comment">// &#39;wrap-iife&#39;: [&#39;error&#39;, &#39;outside&#39;, { functionPrototypeMethods: false }],</span>

        <span class="token comment">// \u7981\u6B62\u51FA\u73B0\u591A\u4E2A\u7A7A\u683C</span>
        <span class="token string-property property">&#39;no-multi-spaces&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">ignoreEOLComments</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u5FFD\u7565\u884C\u5C3E\u6CE8\u91CA\u524D\u7684\u591A\u4E2A\u7A7A\u683C</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5F53\u4EE3\u7801\u5757\u53EA\u6709\u4E00\u6761\u8BED\u53E5\u65F6\uFF0C\u5141\u8BB8\u7701\u7565\u5927\u62EC\u53F7</span>
        <span class="token literal-property property">curly</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;multi-line&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">/**
         * es6
         */</span>
        <span class="token comment">// \u5F3A\u5236\u7BAD\u5934\u51FD\u6570\u7684\u7BAD\u5934\u524D\u540E\u6709\u7A7A\u683C</span>
        <span class="token string-property property">&#39;arrow-spacing&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token string-property property">&#39;arrow-parens&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5C3D\u53EF\u80FD\u4F7F\u7528\u7B80\u5199\u5C5E\u6027</span>
        <span class="token string-property property">&quot;object-shorthand&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;avoidQuotes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u5269\u4F59\u53C2\u6570\u4EE3\u66FFarguments</span>
        <span class="token string-property property">&quot;prefer-rest-params&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u975Ethis\u6539\u53D8\u4E0B\u7981\u7528apply,\u4F7F\u7528rest\u4EE3\u66FF</span>
        <span class="token string-property property">&quot;prefer-spread&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u6269\u5C55\u8FD0\u7B97\u7B26\u524D\u6709\u5355\u5F15\u53F7</span>
        <span class="token string-property property">&quot;rest-spread-spacing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;never&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u7981\u6B62\u4F7F\u7528var</span>
        <span class="token string-property property">&quot;no-var&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u4F18\u5148\u4F7F\u7528\u7ED3\u6784</span>
        <span class="token string-property property">&quot;prefer-destructuring&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token comment">// \u4F18\u5148\u4F7F\u7528\u6A21\u7248\u5B57\u7B26\u4E32</span>
        <span class="token string-property property">&quot;prefer-template&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;error&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@typescript-eslint&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;jest&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;prettier&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u652F\u6301\u5F15\u5165\u5916\u90E8\u6A21\u5757" tabindex="-1">\u652F\u6301\u5F15\u5165\u5916\u90E8\u6A21\u5757 <a class="header-anchor" href="#\u652F\u6301\u5F15\u5165\u5916\u90E8\u6A21\u5757" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-commonjs&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u4EE3\u7801\u538B\u7F29" tabindex="-1">\u4EE3\u7801\u538B\u7F29 <a class="header-anchor" href="#\u4EE3\u7801\u538B\u7F29" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">npm</span> i rollup-plugin-terser --save-dev
</code></pre></div><h3 id="\u5355\u5143\u6D4B\u8BD5" tabindex="-1">\u5355\u5143\u6D4B\u8BD5 <a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev jest 
 ts-jest @types/jest

npx ts-jest config:init
</code></pre></div><div class="language-js"><pre><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div>`,23),e=[o];function r(c,l,u,k,i,y){return a(),s("div",null,e)}var d=n(t,[["render",r]]);export{m as __pageData,d as default};
