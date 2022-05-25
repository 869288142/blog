import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const m='{"title":"\u7B56\u7565\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u7B2C\u4E00\u7248","slug":"\u7B2C\u4E00\u7248"},{"level":3,"title":"\u7B2C\u4E8C\u7248","slug":"\u7B2C\u4E8C\u7248"},{"level":2,"title":"\u8868\u5355\u9A8C\u8BC1","slug":"\u8868\u5355\u9A8C\u8BC1"},{"level":2,"title":"\u4F18\u70B9","slug":"\u4F18\u70B9"},{"level":2,"title":"\u7F3A\u70B9","slug":"\u7F3A\u70B9"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u7B56\u7565\u6A21\u5F0F/\u7B56\u7565\u6A21\u5F0F.md"}',t={},o=p(`<h1 id="\u7B56\u7565\u6A21\u5F0F" tabindex="-1">\u7B56\u7565\u6A21\u5F0F <a class="header-anchor" href="#\u7B56\u7565\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u4E00\u7CFB\u5217\u7684\u7B97\u6CD5\uFF0C\u628A\u5B83\u4EEC\u4E00\u4E2A\u4E2A\u5C01\u88C5\u8D77\u6765\uFF0C\u5E76\u4E14\u4F7F\u5B83\u4EEC\u53EF\u4EE5\u76F8\u4E92\u66FF\u6362\u3002</p><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><p>\u5F88\u591A\u516C\u53F8\u7684<strong>\u5E74\u7EC8\u5956\u662F\u6839\u636E\u5458\u5DE5\u7684\u5DE5\u8D44\u57FA\u6570\u548C\u5E74\u5E95\u7EE9\u6548</strong>\u60C5\u51B5\u6765\u53D1\u653E\u7684\u3002\u4F8B\u5982\uFF0C\u7EE9\u6548\u4E3A S \u7684\u4EBA\u5E74\u7EC8\u5956\u6709 4 \u500D\u5DE5\u8D44\uFF0C\u7EE9\u6548\u4E3A A \u7684\u4EBA\u5E74\u7EC8\u5956\u6709 3 \u500D\u5DE5\u8D44\uFF0C\u800C\u7EE9\u6548\u4E3A B \u7684\u4EBA\u5E74\u7EC8\u5956\u662F 2 \u500D\u5DE5\u8D44\u3002\u5047\u8BBE\u8D22\u52A1\u90E8\u8981\u6C42\u6211\u4EEC\u63D0\u4F9B\u4E00\u6BB5\u4EE3\u7801\uFF0C\u6765\u65B9\u4FBF\u4ED6\u4EEC\u8BA1\u7B97\u5458\u5DE5\u7684\u5E74\u7EC8\u5956\u3002</p><h3 id="\u7B2C\u4E00\u7248" tabindex="-1">\u7B2C\u4E00\u7248 <a class="header-anchor" href="#\u7B2C\u4E00\u7248" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">calculateBonus</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">performanceLevel<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>performanceLevel <span class="token operator">===</span> <span class="token string">&#39;S&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>performanceLevel <span class="token operator">===</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>performanceLevel <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">calculateBonus</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B58\u5728\u95EE\u9898\uFF1A</p><ul><li><p>\u5982\u679C\u8981\u4FEE\u6539\u5177\u4F53\u5206\u652F\u7684\u5B9E\u73B0\uFF0C\u6216\u8005\u65B0\u589E\u5206\u652F \uFF0C\u90A3\u4E48\u5FC5\u9700\u4FEE\u6539 calculateBonus\uFF0C\u8FDD\u53CD\u5F00\u95ED\u539F\u5219</p></li><li><p>\u5206\u652F\u5B9E\u73B0\u7B97\u6CD5\u590D\u7528\u6027\u5DEE\uFF0C\u5982\u679C\u8981\u5728\u5176\u4ED6\u5730\u65B9\u590D\u7528\u8FD9\u4E9B\u8BA1\u7B97\u5956\u91D1\u7684\u7B97\u6CD5\uFF0C\u90A3\u4E48\u53EA\u80FD\u590D\u5236\u3001\u7C98\u8D34</p></li></ul><h3 id="\u7B2C\u4E8C\u7248" tabindex="-1">\u7B2C\u4E8C\u7248 <a class="header-anchor" href="#\u7B2C\u4E8C\u7248" aria-hidden="true">#</a></h3><p>\u4ECE\u4E0A\u9762\u7B2C\u4E8C\u70B9\u6765\u8BF4\uFF0C\u5956\u91D1\u7684\u7B97\u6CD5\u590D\u7528\u6027\u5DEE\uFF0C\u662F\u56E0\u4E3A\u7B97\u6CD5\u672C\u8EAB\u6CA1\u6709\u88AB\u5C01\u88C5\uFF0C\u5C01\u88C5\u5BF9\u5E94\u5206\u652F\u7684\u7B97\u6CD5\uFF0C\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token function-variable function">calculateBonus</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">performanceLevel<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>performanceLevel <span class="token operator">===</span> <span class="token string">&#39;S&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">performanceS</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>performanceLevel <span class="token operator">===</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">performanceA</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>performanceLevel <span class="token operator">===</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">performanceB</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">performanceS</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">performanceA</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">3</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">performanceB</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>

  <span class="token function">calculateBonus</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">20000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6211\u4EEC\u89E3\u51B3\u4E86\u5185\u90E8\u7B97\u6CD5\u7684\u5C01\u88C5\u590D\u7528\u95EE\u9898\uFF0C\u4F46\u662F\u968F\u7740\u5206\u652F\u590D\u6742\uFF0C\u8BA1\u7B97\u51FD\u6570\u4ECD\u7136\u4F1A\u8FDD\u53CD\u5F00\u95ED\u539F\u5219\uFF0C\u4EE3\u7801\u672C\u8EAB\u4E5F\u4F1A\u81A8\u80C0\u6BD4\u8F83\u5FEB\uFF0C\u4E0B\u9762\u4F7F\u7528\u7B56\u7565\u6A21\u5F0F\u91CD\u6784</p><p><strong>\u9762\u5411\u5BF9\u8C61\u7248\u672C</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">performanceS</span> <span class="token punctuation">{</span>
    <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">performanceA</span> <span class="token punctuation">{</span>
    <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">performanceB</span> <span class="token punctuation">{</span>
    <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Bonus</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>salary <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// \u539F\u59CB\u5DE5\u8D44</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// \u7EE9\u6548\u7B49\u7EA7\u5BF9\u5E94\u7684\u7B56\u7565\u5BF9\u8C61</span>
    <span class="token punctuation">}</span>
    <span class="token function">setSalary</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>salary <span class="token operator">=</span> salary <span class="token comment">// \u8BBE\u7F6E\u5458\u5DE5\u7684\u539F\u59CB\u5DE5\u8D44</span>
    <span class="token punctuation">}</span>
    <span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token parameter">strategy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> strategy <span class="token comment">// \u8BBE\u7F6E\u5458\u5DE5\u7EE9\u6548\u7B49\u7EA7\u5BF9\u5E94\u7684\u7B56\u7565\u5BF9\u8C61</span>
    <span class="token punctuation">}</span>
    <span class="token function">getBonus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u5F97\u5956\u91D1\u6570\u989D</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">calculate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>salary<span class="token punctuation">)</span> <span class="token comment">// \u628A\u8BA1\u7B97\u5956\u91D1\u7684\u64CD\u4F5C\u59D4\u6258\u7ED9\u5BF9\u5E94\u7684\u7B56\u7565\u5BF9\u8C61</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> bonus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bonus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  bonus<span class="token punctuation">.</span><span class="token function">setSalary</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
  bonus<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">performanceS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u7B56\u7565\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bonus<span class="token punctuation">.</span><span class="token function">getBonus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A40000</span>
  bonus<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">performanceA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u7B56\u7565\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bonus<span class="token punctuation">.</span><span class="token function">getBonus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA\uFF1A30000</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>JavaScript \u7248\u672C</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">S</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">A</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token constant">B</span><span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> <span class="token function-variable function">calculateBonus</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">level<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> strategies<span class="token punctuation">[</span>level<span class="token punctuation">]</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u8868\u5355\u9A8C\u8BC1" tabindex="-1">\u8868\u5355\u9A8C\u8BC1 <a class="header-anchor" href="#\u8868\u5355\u9A8C\u8BC1" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">let</span> strategies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">isNonEmpty</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E0D\u4E3A\u7A7A</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errorMsg
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">minLength</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> length<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9650\u5236\u6700\u5C0F\u957F\u5EA6</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errorMsg
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">isMobile</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> errorMsg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u624B\u673A\u53F7\u7801\u683C\u5F0F</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(^1[3|5|8][0-9]{9}$)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> errorMsg
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> <span class="token function-variable function">validataFunc</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> validator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Validator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">/***************\u6DFB\u52A0\u4E00\u4E9B\u6821\u9A8C\u89C4\u5219****************/</span> <span class="token comment">// \u521B\u5EFA\u4E00\u4E2Avalidator\u5BF9\u8C61</span>
    validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>userName<span class="token punctuation">,</span> <span class="token string">&#39;isNonEmpty&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&#39;</span><span class="token punctuation">)</span>
    validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>password<span class="token punctuation">,</span> <span class="token string">&#39;minLength:6&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5BC6\u7801\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E6\u4F4D&#39;</span><span class="token punctuation">)</span>
    validator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>registerForm<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">,</span> <span class="token string">&#39;isMobile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u624B\u673A\u53F7\u7801\u683C\u5F0F\u4E0D\u6B63\u786E&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> errorMsg <span class="token operator">=</span> validator<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u83B7\u5F97\u6821\u9A8C\u7ED3\u679C</span>
    <span class="token keyword">return</span> errorMsg <span class="token comment">// \u8FD4\u56DE\u6821\u9A8C\u7ED3\u679C</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">var</span> registerForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;registerForm&#39;</span><span class="token punctuation">)</span>
  registerForm<span class="token punctuation">.</span><span class="token function-variable function">onsubmit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> errorMsg <span class="token operator">=</span> <span class="token function">validataFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5982\u679CerrorMsg\u6709\u786E\u5207\u7684\u8FD4\u56DE\u503C\uFF0C\u8BF4\u660E\u672A\u901A\u8FC7\u6821\u9A8C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token comment">// \u963B\u6B62\u8868\u5355\u63D0\u4EA4</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//Validator \u5B9E\u73B0 </span>
  <span class="token keyword">class</span> <span class="token class-name">Validator</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>validatorFuncs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">dom<span class="token punctuation">,</span> rules</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       rules<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">rule</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
         <span class="token keyword">let</span> ary <span class="token operator">=</span> rule<span class="token punctuation">.</span>strategy<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">let</span> errorMsg <span class="token operator">=</span> rule<span class="token punctuation">.</span>errorMsg
         <span class="token keyword">this</span><span class="token punctuation">.</span>validatorFuncs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">let</span> strategy <span class="token operator">=</span> ary<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
   
           ary<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dom<span class="token punctuation">,</span>value<span class="token punctuation">)</span>
   
           ary<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>errorMsg<span class="token punctuation">)</span>
   
           <span class="token keyword">return</span> strategies<span class="token punctuation">[</span>strategy<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>dom<span class="token punctuation">,</span>ary<span class="token punctuation">)</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> validatorFunc <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>validatorFuncs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">validatorFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> msg
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>   
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="\u4F18\u70B9" tabindex="-1">\u4F18\u70B9 <a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a></h2><ul><li><p>\u6709\u6548\u907F\u514D\u591A\u91CD\u6761\u4EF6\u9009\u62E9</p></li><li><p>\u5B8C\u7F8E\u652F\u6301\u5F00\u95ED\u539F\u5219\uFF0C\u6613\u4E8E\u7406\u89E3\uFF0C\u6613\u4E8E\u6269\u5C55</p></li></ul><h2 id="\u7F3A\u70B9" tabindex="-1">\u7F3A\u70B9 <a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a></h2><ul><li><p>\u589E\u52A0\u7B56\u7565\u7C7B\u6216\u8005\u7B56\u7565\u5BF9\u8C61</p></li><li><p>\u4F7F\u7528\u8005\u9700\u8981\u4E86\u89E3\u7B56\u7565\u5BF9\u8C61\u672C\u8EAB\u7EC6\u8282\uFF0C\u8FDD\u53CD\u77E5\u8BC6\u6700\u5C11\u539F\u5219</p></li></ul>`,23),e=[o];function c(u,l,k,r,i,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{m as __pageData,f as default};
