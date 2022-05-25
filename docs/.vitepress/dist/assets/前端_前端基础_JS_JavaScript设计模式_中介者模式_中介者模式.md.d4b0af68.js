import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const h='{"title":"\u4E2D\u4ECB\u8005\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u5B9E\u73B0\u8981\u70B9","slug":"\u5B9E\u73B0\u8981\u70B9"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u8D2D\u4E70\u5546\u54C1","slug":"\u8D2D\u4E70\u5546\u54C1"},{"level":2,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9"},{"level":2,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u4E2D\u4ECB\u8005\u6A21\u5F0F/\u4E2D\u4ECB\u8005\u6A21\u5F0F.md"}',p={},o=t(`<h1 id="\u4E2D\u4ECB\u8005\u6A21\u5F0F" tabindex="-1">\u4E2D\u4ECB\u8005\u6A21\u5F0F <a class="header-anchor" href="#\u4E2D\u4ECB\u8005\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u4E2D\u4ECB\u8005\u6A21\u5F0F\u7684\u4F5C\u7528\u5C31\u662F\u89E3\u9664\u5BF9\u8C61\u4E0E\u5BF9\u8C61\u4E4B\u95F4\u7684\u7D27\u8026\u5408\u5173\u7CFB\u3002\u4E2D\u4ECB\u8005\u6A21\u5F0F\u4F7F\u7F51\u72B6\u7684\u591A\u5BF9\u591A\u5173\u7CFB\u53D8\u6210\u4E86\u76F8\u5BF9\u7B80\u5355\u7684\u4E00\u5BF9\u591A\u5173\u7CFB</p><h2 id="\u5B9E\u73B0\u8981\u70B9" tabindex="-1">\u5B9E\u73B0\u8981\u70B9 <a class="header-anchor" href="#\u5B9E\u73B0\u8981\u70B9" aria-hidden="true">#</a></h2><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="\u8D2D\u4E70\u5546\u54C1" tabindex="-1">\u8D2D\u4E70\u5546\u54C1 <a class="header-anchor" href="#\u8D2D\u4E70\u5546\u54C1" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">var</span> goods <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u624B\u673A\u5E93\u5B58</span>
  <span class="token string-property property">&#39;red|32G&#39;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;red|16G&#39;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;blue|32G&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;blue|16G&#39;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> mediator <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> colorSelect <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;colorSelect&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    memorySelect <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;memorySelect&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    numberInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;numberInput&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    colorInfo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;colorInfo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    memoryInfo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;memoryInfo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    numberInfo <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;numberInfo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    nextBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;nextBtn&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">changed</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> color <span class="token operator">=</span> colorSelect<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// \u989C\u8272</span>
        memory <span class="token operator">=</span> memorySelect<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// \u5185\u5B58</span>
        number <span class="token operator">=</span> numberInput<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token comment">// \u6570\u91CF</span>
        stock <span class="token operator">=</span> goods<span class="token punctuation">[</span>color <span class="token operator">+</span> <span class="token string">&#39;|&#39;</span> <span class="token operator">+</span> memory<span class="token punctuation">]</span> <span class="token comment">// \u989C\u8272\u548C\u5185\u5B58\u5BF9\u5E94\u7684\u624B\u673A\u5E93\u5B58\u6570\u91CF</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> colorSelect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u6539\u53D8\u7684\u662F\u9009\u62E9\u989C\u8272\u4E0B\u62C9\u6846</span>
        colorInfo<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> color
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> memorySelect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        memoryInfo<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> memory
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>obj <span class="token operator">===</span> numberInput<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        numberInfo<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> number
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextBtn<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span>
        nextBtn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u624B\u673A\u989C\u8272&#39;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>memory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextBtn<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span>
        nextBtn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u9009\u62E9\u5185\u5B58\u5927\u5C0F&#39;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>number <span class="token operator">-</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">!==</span> number <span class="token operator">-</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8F93\u5165\u8D2D\u4E70\u6570\u91CF\u662F\u5426\u4E3A\u6B63\u6574\u6570</span>
        nextBtn<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span>
        nextBtn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u8D2D\u4E70\u6570\u91CF&#39;</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      nextBtn<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span>
      nextBtn<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;\u653E\u5165\u8D2D\u7269\u8F66&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u4E8B\u4EF6\u51FD\u6570\uFF1A</span>
colorSelect<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mediator<span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
memorySelect<span class="token punctuation">.</span><span class="token function-variable function">onchange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mediator<span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
numberInput<span class="token punctuation">.</span><span class="token function-variable function">oninput</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  mediator<span class="token punctuation">.</span><span class="token function">changed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h2><ul><li>\u4E2D\u4ECB\u8005\u6A21\u5F0F\u4F7F\u5404\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u5F97\u4EE5\u89E3\u8026\uFF0C<strong>\u4EE5\u4E2D\u4ECB\u8005\u548C\u5BF9\u8C61\u4E4B\u95F4\u7684\u4E00\u5BF9\u591A\u5173\u7CFB\u53D6\u4EE3\u4E86\u5BF9\u8C61\u4E4B\u95F4\u7684\u7F51\u72B6\u591A\u5BF9\u591A\u5173\u7CFB</strong>\u3002<strong>\u5404\u4E2A\u5BF9\u8C61\u53EA\u9700\u5173\u6CE8\u81EA\u8EAB\u529F\u80FD\u7684\u5B9E\u73B0\uFF0C\u5BF9\u8C61\u4E4B\u95F4\u7684\u4EA4\u4E92\u5173\u7CFB\u4EA4\u7ED9\u4E86\u4E2D\u4ECB\u8005\u5BF9\u8C61\u6765\u5B9E\u73B0\u548C\u7EF4\u62A4</strong></li></ul><h2 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h2><ul><li>\u6700\u5927\u7684\u7F3A\u70B9\u662F\u7CFB\u7EDF\u4E2D\u4F1A\u65B0\u589E\u4E00\u4E2A\u4E2D\u4ECB\u8005\u5BF9\u8C61\uFF0C\u56E0\u4E3A<strong>\u5BF9\u8C61\u4E4B\u95F4\u4EA4\u4E92\u7684\u590D\u6742\u6027\uFF0C\u8F6C\u79FB\u6210\u4E86\u4E2D\u4ECB\u8005\u5BF9\u8C61\u7684\u590D\u6742\u6027\uFF0C\u4F7F\u5F97\u4E2D\u4ECB\u8005\u5BF9\u8C61\u7ECF\u5E38\u662F\u5DE8\u5927\u7684</strong>\u3002\u4E2D\u4ECB\u8005\u5BF9\u8C61\u81EA\u8EAB\u5F80\u5F80\u5C31\u662F\u4E00\u4E2A\u96BE\u4EE5\u7EF4\u62A4\u7684\u5BF9\u8C61</li></ul>`,11),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{h as __pageData,f as default};
