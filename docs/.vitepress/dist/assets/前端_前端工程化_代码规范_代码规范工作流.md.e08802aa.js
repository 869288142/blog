import{_ as n,c as s,o as a,a as e}from"./app.a3c81315.js";const h='{"title":"\u4EE3\u7801\u89C4\u8303\u843D\u5730\u6D41\u7A0B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EE3\u7801\u89C4\u8303\u7684\u597D\u5904","slug":"\u4EE3\u7801\u89C4\u8303\u7684\u597D\u5904"},{"level":2,"title":"\u4EE3\u7801\u89C4\u8303\u5DE5\u4F5C\u6D41","slug":"\u4EE3\u7801\u89C4\u8303\u5DE5\u4F5C\u6D41"},{"level":2,"title":"\u4EE3\u7801\u89C4\u8303\u5DE5\u5177","slug":"\u4EE3\u7801\u89C4\u8303\u5DE5\u5177"},{"level":3,"title":"prettier","slug":"prettier"},{"level":3,"title":"prettier\u914D\u5408eslint","slug":"prettier\u914D\u5408eslint"},{"level":3,"title":"\u7EDF\u4E00\u7F16\u8F91\u5668\u4EE3\u7801\u98CE\u683C","slug":"\u7EDF\u4E00\u7F16\u8F91\u5668\u4EE3\u7801\u98CE\u683C"},{"level":2,"title":"\u96C6\u6210\u5230VSCode","slug":"\u96C6\u6210\u5230vscode"},{"level":2,"title":"\u96C6\u6210\u5230webpack","slug":"\u96C6\u6210\u5230webpack"},{"level":2,"title":"\u63D0\u4EA4\u4EE3\u7801\u9A8C\u8BC1\u5361\u70B9","slug":"\u63D0\u4EA4\u4EE3\u7801\u9A8C\u8BC1\u5361\u70B9"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u4EE3\u7801\u89C4\u8303/\u4EE3\u7801\u89C4\u8303\u5DE5\u4F5C\u6D41.md"}',t={},p=e(`<h1 id="\u4EE3\u7801\u89C4\u8303\u843D\u5730\u6D41\u7A0B" tabindex="-1">\u4EE3\u7801\u89C4\u8303\u843D\u5730\u6D41\u7A0B <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303\u843D\u5730\u6D41\u7A0B" aria-hidden="true">#</a></h1><h2 id="\u4EE3\u7801\u89C4\u8303\u7684\u597D\u5904" tabindex="-1">\u4EE3\u7801\u89C4\u8303\u7684\u597D\u5904 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303\u7684\u597D\u5904" aria-hidden="true">#</a></h2><ul><li>\u9879\u76EE\u5728\u4EE3\u7801\u98CE\u683C\u4E0A\u662F\u7EDF\u4E00\u7684\uFF0C\u540C\u65F6\u63D0\u4F9B\u4EE3\u7801\u98CE\u683C\u683C\u5F0F\u5316\uFF0C<strong>\u9605\u8BFB\u548C\u5F00\u53D1\u4F53\u9A8C\u597D</strong></li></ul><h2 id="\u4EE3\u7801\u89C4\u8303\u5DE5\u4F5C\u6D41" tabindex="-1">\u4EE3\u7801\u89C4\u8303\u5DE5\u4F5C\u6D41 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303\u5DE5\u4F5C\u6D41" aria-hidden="true">#</a></h2><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8049b0abe614c639ebe487d11f0ab7e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="\u4EE3\u7801\u89C4\u8303\u5DE5\u5177" tabindex="-1">\u4EE3\u7801\u89C4\u8303\u5DE5\u5177 <a class="header-anchor" href="#\u4EE3\u7801\u89C4\u8303\u5DE5\u5177" aria-hidden="true">#</a></h2><h3 id="prettier" tabindex="-1">prettier <a class="header-anchor" href="#prettier" aria-hidden="true">#</a></h3><p>prettier\u662F\u4E00\u4E2A\u4E13\u95E8\u7BA1\u7406\u4EE3\u7801\u98CE\u683C\u7684\u5DE5\u5177\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><p><strong>\u5B89\u88C5prettier</strong></p><div class="language-shell"><pre><code><span class="token function">npm</span> i prettier -D
</code></pre></div><p><strong>.prettierrc.js\uFF0Cprettier\u7684\u4E13\u5C5E\u914D\u7F6E\u6587\u4EF6\uFF0C\u653E\u7F6E\u5728\u9879\u76EE\u6839\u76EE\u5F55</strong></p><div class="language-js"><pre><code><span class="token comment">// \u5E38\u89C1\u7684\u4E00\u4E9B\u98CE\u683C\u914D\u7F6E</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// \u4F7F\u7528tab\u65F6\u8F6C\u5316\u4E3A2\u4E2A\u7A7A\u683C</span>
  <span class="token string-property property">&quot;endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span> <span class="token comment">//\u4E00\u884C\u6700\u591A\u591A\u5C11\u5B57\u7B26</span>
  <span class="token string-property property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="prettier\u914D\u5408eslint" tabindex="-1">prettier\u914D\u5408eslint <a class="header-anchor" href="#prettier\u914D\u5408eslint" aria-hidden="true">#</a></h3><p><code>prettier</code>\u548C<code>eslint</code>\u90FD\u6709\u98CE\u683C\u7BA1\u7406\u90E8\u5206\uFF0C\u6240\u4EE5\u4F1A\u6709\u4E00\u5B9A\u7684\u89C4\u5219\u51B2\u7A81\uFF0C\u6211\u4EEC\u9700\u8981\u534F\u8C03\u5B83\u4EEC\u7684\u914D\u7F6E\uFF0C\u4E0B\u9762\u7684\u64CD\u4F5C\u539F\u7406\u662F\u5148\u7528<code>eslint-plugin-prettier</code>\u8BA9<code>eslint</code>\u683C\u5F0F\u5316\u65F6\u4F7F\u7528<code>prettier</code>\u6765\u683C\u5F0F\u5316\uFF0C\u540C\u65F6\u4F7F\u7528<code>eslint-config-prettier</code>\u6765\u5904\u7406<code>prettier</code>\u548C<code>eslint</code>\u7684\u683C\u5F0F\u5316\u89C4\u5219\u51B2\u7A81\u90E8\u5206</p><div class="language-shell"><pre><code>  <span class="token function">npm</span> i -D eslint prettier eslint-config-prettier  eslint-plugin-prettier
</code></pre></div><div class="language-js"><pre><code><span class="token comment">/* eslint-disable */</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;prettier&#39;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;prettier/prettier&#39;</span><span class="token operator">:</span> <span class="token string">&#39;warn&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;prettier&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u7EDF\u4E00\u7F16\u8F91\u5668\u4EE3\u7801\u98CE\u683C" tabindex="-1">\u7EDF\u4E00\u7F16\u8F91\u5668\u4EE3\u7801\u98CE\u683C <a class="header-anchor" href="#\u7EDF\u4E00\u7F16\u8F91\u5668\u4EE3\u7801\u98CE\u683C" aria-hidden="true">#</a></h3><p><strong>.editorconfig</strong></p><div class="language-"><pre><code># http://editorconfig.org
root = true

[*]
#\u7F29\u8FDB\u98CE\u683C\uFF1A\u7A7A\u683C
indent_style = space
#\u7F29\u8FDB\u5927\u5C0F4
indent_size = 4
#\u6362\u884C\u7B26lf
end_of_line = lf
#\u5B57\u7B26\u96C6utf-8
charset = utf-8
#\u662F\u5426\u5220\u9664\u884C\u5C3E\u7684\u7A7A\u683C
trim_trailing_whitespace = true
#\u662F\u5426\u5728\u6587\u4EF6\u7684\u6700\u540E\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C
insert_final_newline = true
</code></pre></div><h2 id="\u96C6\u6210\u5230vscode" tabindex="-1">\u96C6\u6210\u5230VSCode <a class="header-anchor" href="#\u96C6\u6210\u5230vscode" aria-hidden="true">#</a></h2><ol><li><p>\u4E0B\u8F7Deslint\u63D2\u4EF6</p></li><li><p>\u914D\u7F6E\u4FDD\u5B58\u81EA\u52A8fix</p></li></ol><p><strong>setting.json</strong></p><div class="language-json"><pre><code><span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="\u96C6\u6210\u5230webpack" tabindex="-1">\u96C6\u6210\u5230webpack <a class="header-anchor" href="#\u96C6\u6210\u5230webpack" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> eslint-loader --save-dev
</code></pre></div><p><strong>\u914D\u7F6Ewebpack</strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">enforce</span><span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u63D0\u4EA4\u4EE3\u7801\u9A8C\u8BC1\u5361\u70B9" tabindex="-1">\u63D0\u4EA4\u4EE3\u7801\u9A8C\u8BC1\u5361\u70B9 <a class="header-anchor" href="#\u63D0\u4EA4\u4EE3\u7801\u9A8C\u8BC1\u5361\u70B9" aria-hidden="true">#</a></h2><p>\u65E0\u8BBA<code>eslint</code>\u548C<code>prettier</code>\u7684\u98CE\u683C\u63A7\u5236\u591A\u5F3A\uFF0C\u5F00\u53D1\u90FD\u5F88\u5BB9\u6613\u7ED5\u8FC7\uFF0C\u56E0\u6B64\u9700\u8981\u5728\u4EE3\u7801\u63A8\u9001\u5230\u4EE3\u7801\u4ED3\u5E93\u4E4B\u524D\u8FDB\u884C\u4E00\u6B21\u68C0\u67E5\uFF0C\u51CF\u5C11\u4E0D\u5408\u89C4\u8303\u7684\u4EE3\u7801\u8FDB\u5165\u4ED3\u5E93\u7684\u53EF\u80FD\uFF0C<strong>\u8FD9\u91CC\u4E3B\u8981\u662F\u57FA\u4E8E<code>git</code>\u8FDB\u884C\u4EE3\u7801\u63D0\u4EA4\u589E\u91CF\u68C0\u67E5</strong></p><ol><li>\u5B89\u88C5<code>husky</code>\u548C<code>lint-staged</code></li></ol><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev husky lint-staged
</code></pre></div><ol start="2"><li>\u914D\u7F6E<code>husky</code>\u548C<code>lint-staged</code></li></ol><div class="language-js"><pre><code><span class="token punctuation">{</span>
   <span class="token string-property property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token string-property property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token string-property property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token string-property property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token string-property property">&quot;src/**/*.{js,jsx,ts,tsx,json,css,scss,md}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;eslint --fix&quot;</span>
       <span class="token punctuation">]</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u5982\u4F55\u4F7F\u7528\u81EA\u5B9A\u4E49\u547D\u4EE4\u548C<code>lint-staged</code>\u914D\u7F6E</li></ol><p><strong>\u83B7\u53D6lint-staged\u4F20\u9012\u7684\u6587\u4EF6</strong></p><div class="language-js"><pre><code><span class="token comment">// \u83B7\u53D6lint-staged\u4F20\u9012\u7684\u53D8\u52A8\u6587\u4EF6</span>
process<span class="token punctuation">.</span>argv
</code></pre></div><p><strong>\u63A7\u5236lint-staged\u9A8C\u8BC1\u6210\u529F\u4E0E\u5426</strong></p><div class="language-js"><pre><code><span class="token comment">// \u5F02\u5E38\u9000\u51FA,lint-staged\u4E0D\u901A\u8FC7</span>
process<span class="token punctuation">.</span>exitCode <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">// \u6B63\u5E38\u9000\u51FA\uFF0Clint-staged\u901A\u8FC7</span>
process<span class="token punctuation">.</span>exitCode <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u4EE3\u7801\u89C4\u8303\u662F\u4E00\u4EF6\u975E\u5E38\u6709\u4EF7\u503C\u7684\u4E8B\u60C5\uFF0C\u6211\u4EEC\u901A\u8FC7\u8BBE\u8BA1\u6574\u4E2A\u4EE3\u7801\u89C4\u8303\u64CD\u4F5C\u6D41\u7A0B\u548C\u5BF9\u4E00\u4E9B\u6BD4\u5982\u683C\u5F0F\u5316\u3001\u4EE3\u7801\u63A8\u9001\u9650\u5236\u6280\u672F\u7684\u9009\u578B\uFF0C\u6765\u5E2E\u52A9\u6211\u4EEC\u5B8C\u6210\u6B64\u89C4\u8303</p>`,40),o=[p];function r(c,l,i,u,d,k){return a(),s("div",null,o)}var m=n(t,[["render",r]]);export{h as __pageData,m as default};
