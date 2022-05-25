import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const g='{"title":"eslint\u63D2\u4EF6\u7F16\u5199","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521D\u59CB\u5316\u6A21\u7248","slug":"\u521D\u59CB\u5316\u6A21\u7248"},{"level":2,"title":"\u7F16\u5199\u4EE3\u7801\u548C\u7528\u4F8B","slug":"\u7F16\u5199\u4EE3\u7801\u548C\u7528\u4F8B"},{"level":2,"title":"\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5","slug":"\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5"},{"level":2,"title":"\u63D2\u4EF6\u4F7F\u7528","slug":"\u63D2\u4EF6\u4F7F\u7528"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u4EE3\u7801\u8D28\u91CF/linter/eslint/eslint\u63D2\u4EF6\u7F16\u5199.md"}',p={},o=t(`<h1 id="eslint\u63D2\u4EF6\u7F16\u5199" tabindex="-1">eslint\u63D2\u4EF6\u7F16\u5199 <a class="header-anchor" href="#eslint\u63D2\u4EF6\u7F16\u5199" aria-hidden="true">#</a></h1><h2 id="\u521D\u59CB\u5316\u6A21\u7248" tabindex="-1">\u521D\u59CB\u5316\u6A21\u7248 <a class="header-anchor" href="#\u521D\u59CB\u5316\u6A21\u7248" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5B89\u88C5eslint\u6A21\u7248</span>
npm i <span class="token operator">-</span>g yo
npm i <span class="token operator">-</span>g generator<span class="token operator">-</span>eslint
<span class="token comment">// </span>
yo eslint<span class="token operator">:</span>plugin
yo eslint<span class="token operator">:</span>rule
</code></pre></div><h2 id="\u7F16\u5199\u4EE3\u7801\u548C\u7528\u4F8B" tabindex="-1">\u7F16\u5199\u4EE3\u7801\u548C\u7528\u4F8B <a class="header-anchor" href="#\u7F16\u5199\u4EE3\u7801\u548C\u7528\u4F8B" aria-hidden="true">#</a></h2><p><strong>lib/rules/max-params.js</strong></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">docs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;\u6700\u591A\u53C2\u6570&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u83B7\u53D6\u51FD\u6570\u7684\u53C2\u6570\u7684\u5F00\u59CB\u3001\u7ED3\u675F\u4F4D\u7F6E
     * @param {node} node AST Node 
     */</span>
    <span class="token keyword">function</span> <span class="token function">getFunctionParamsLoc</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> paramsLength <span class="token operator">=</span> node<span class="token punctuation">.</span>params<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">start</span><span class="token operator">:</span> node<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>loc<span class="token punctuation">.</span>start<span class="token punctuation">,</span>
        <span class="token literal-property property">end</span><span class="token operator">:</span> node<span class="token punctuation">.</span>params<span class="token punctuation">[</span>paramsLength <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>loc<span class="token punctuation">.</span>end<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">FunctionDeclaration</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>params<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          context<span class="token punctuation">.</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token function">getFunctionParamsLoc</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">,</span>
            node<span class="token punctuation">,</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u53C2\u6570\u6700\u591A\u4E0D\u80FD\u8D85\u8FC73\u4E2A&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>/tests/lib/rules/max-params.js</strong></p><div class="language-js"><pre><code><span class="token keyword">var</span> ruleTester <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RuleTester</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ruleTester<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;max-params&quot;</span><span class="token punctuation">,</span> rule<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">valid</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;function test(d, e, f) {}&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">invalid</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&quot;function test(a, b, c, d) {}&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">errors</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u53C2\u6570\u6700\u591A\u4E0D\u80FD\u8D85\u8FC73\u4E2A&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5" tabindex="-1">\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5 <a class="header-anchor" href="#\u8FD0\u884C\u5355\u5143\u6D4B\u8BD5" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">npm</span> run <span class="token builtin class-name">test</span>
</code></pre></div><h2 id="\u63D2\u4EF6\u4F7F\u7528" tabindex="-1">\u63D2\u4EF6\u4F7F\u7528 <a class="header-anchor" href="#\u63D2\u4EF6\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># \u5DF2\u7ECF\u53D1\u5E03</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-my-eslist-plugin

<span class="token comment">#\u672C\u673A\u8C03\u8BD5</span>

<span class="token function">npm</span> <span class="token function">link</span>

</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;zoo&quot;</span> <span class="token comment">// \u4F60\u7684 ESLint plugin \u7684\u540D\u5B57</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token punctuation">{</span>
    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;zoo/rule-name&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14),e=[o];function c(l,u,r,i,k,d){return a(),s("div",null,e)}var y=n(p,[["render",c]]);export{g as __pageData,y as default};
