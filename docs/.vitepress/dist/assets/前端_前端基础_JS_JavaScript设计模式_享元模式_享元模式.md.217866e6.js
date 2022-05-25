import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const f='{"title":"\u4EAB\u5143\u6A21\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9A\u4E49","slug":"\u5B9A\u4E49"},{"level":2,"title":"\u5B9E\u73B0\u8981\u70B9","slug":"\u5B9E\u73B0\u8981\u70B9"},{"level":2,"title":"\u5982\u4F55\u5224\u65AD\u5185\u90E8\u72B6\u6001","slug":"\u5982\u4F55\u5224\u65AD\u5185\u90E8\u72B6\u6001"},{"level":2,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":3,"title":"\u6587\u4EF6\u4E0A\u4F20","slug":"\u6587\u4EF6\u4E0A\u4F20"},{"level":2,"title":"\u597D\u5904","slug":"\u597D\u5904"},{"level":2,"title":"\u574F\u5904","slug":"\u574F\u5904"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/JavaScript\u8BBE\u8BA1\u6A21\u5F0F/\u4EAB\u5143\u6A21\u5F0F/\u4EAB\u5143\u6A21\u5F0F.md"}',t={},o=p(`<h1 id="\u4EAB\u5143\u6A21\u5F0F" tabindex="-1">\u4EAB\u5143\u6A21\u5F0F <a class="header-anchor" href="#\u4EAB\u5143\u6A21\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u5B9A\u4E49" tabindex="-1">\u5B9A\u4E49 <a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u4EAB\u5143\u6A21\u5F0F\u662F\u4E00\u79CD<strong>\u7528\u4E8E\u6027\u80FD\u4F18\u5316\u7684\u6A21\u5F0F</strong>\uFF0C<strong>\u7528\u4E8E\u5171\u4EAB\u5927\u91CF\u7C7B\u4F3C\u7684\u5BF9\u8C61\u4E2D\u76F8\u4F3C\u7684\u90E8\u5206</strong></p><h2 id="\u5B9E\u73B0\u8981\u70B9" tabindex="-1">\u5B9E\u73B0\u8981\u70B9 <a class="header-anchor" href="#\u5B9E\u73B0\u8981\u70B9" aria-hidden="true">#</a></h2><ul><li>\u63D0\u53D6\u5185\u90E8\u72B6\u6001\uFF0C\u8FD9\u662F\u88AB\u5171\u4EAB\u7684\u5BF9\u8C61</li></ul><h2 id="\u5982\u4F55\u5224\u65AD\u5185\u90E8\u72B6\u6001" tabindex="-1">\u5982\u4F55\u5224\u65AD\u5185\u90E8\u72B6\u6001 <a class="header-anchor" href="#\u5982\u4F55\u5224\u65AD\u5185\u90E8\u72B6\u6001" aria-hidden="true">#</a></h2><ul><li><p>\u5185\u90E8\u72B6\u6001\u5B58\u50A8\u4E8E\u5BF9\u8C61\u5185\u90E8</p></li><li><p>\u5185\u90E8\u72B6\u6001\u72EC\u7ACB\u4E8E\u7684\u5177\u4F53\u7684\u573A\u666F\uFF0C\u901A\u5E38\u4E0D\u4F1A\u6539\u53D8</p></li><li><p>\u5916\u90E8\u72B6\u6001\u53D6\u51B3\u4E8E\u5177\u4F53\u7684\u573A\u666F\uFF0C\u5E76\u6839\u636E\u573A\u666F\u800C\u53D8\u5316\uFF0C\u5916\u90E8\u72B6\u6001\u4E0D\u80FD\u88AB\u5171\u4EAB</p></li></ul><h2 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h2><h3 id="\u6587\u4EF6\u4E0A\u4F20" tabindex="-1">\u6587\u4EF6\u4E0A\u4F20 <a class="header-anchor" href="#\u6587\u4EF6\u4E0A\u4F20" aria-hidden="true">#</a></h3><p><strong>\u7B2C\u4E00\u7248</strong></p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">0</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">startUpload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">uploadType<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// uploadType\u533A\u5206\u662F\u63A7\u4EF6\u8FD8\u662Fflash</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> file<span class="token punctuation">;</span> <span class="token punctuation">(</span>file <span class="token operator">=</span> files<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> uploadObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Upload</span><span class="token punctuation">(</span>uploadType<span class="token punctuation">,</span> file<span class="token punctuation">.</span>fileName<span class="token punctuation">,</span> file<span class="token punctuation">.</span>fileSize<span class="token punctuation">)</span>
      uploadObj<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token comment">// \u7ED9upload\u5BF9\u8C61\u8BBE\u7F6E\u4E00\u4E2A\u552F\u4E00\u7684id</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">Upload</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">uploadType<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> fileSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>uploadType <span class="token operator">=</span> uploadType
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileName <span class="token operator">=</span> fileName
      <span class="token keyword">this</span><span class="token punctuation">.</span>fileSize <span class="token operator">=</span> fileSize
      <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token operator">=</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
      <span class="token keyword">this</span><span class="token punctuation">.</span>dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
        <span class="token string">&#39;&lt;span&gt;\u6587\u4EF6\u540D\u79F0:&#39;</span> <span class="token operator">+</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fileName <span class="token operator">+</span>
        <span class="token string">&#39;, \u6587\u4EF6\u5927\u5C0F:&#39;</span> <span class="token operator">+</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>fileSize <span class="token operator">+</span>
        <span class="token string">&#39;&lt;/span&gt;&#39;</span> <span class="token operator">+</span>
        <span class="token string">&#39;&lt;button class=&quot;delFile&quot;&gt;\u5220\u9664&lt;/button&gt;&#39;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.delFile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        that<span class="token punctuation">.</span><span class="token function">delFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">delFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileSize <span class="token operator">&lt;</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6587\u4EF6\u5417\uFF1F&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u4F7F\u7528</span>

  <span class="token function">startUpload</span><span class="token punctuation">(</span><span class="token string">&#39;plugin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;1.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;2.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;3.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token function">startUpload</span><span class="token punctuation">(</span><span class="token string">&#39;flash&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;4.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;5.html&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;6.txt&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fileSize</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre></div><p>\u8FD9\u6BB5\u4EE3\u7801\u6BEB\u65E0\u7591\u95EE\u662F\u5B9E\u73B0\u4E86\u529F\u80FD\uFF0C\u4F46\u662F\u660E\u663E\u4E00\u70B9\u662F\uFF0C\u4E0A\u4F20\u591A\u5C11\u6587\u4EF6\u5C31\u5F97\u521B\u5EFA\u591A\u5C11upload\u5BF9\u8C61</p><p><strong>\u7B2C\u4E8C\u7248</strong></p><p>\u6839\u636E\u6211\u4EEC\u4E0A\u9762\u7684\u5185\u90E8\u72B6\u6001\u5224\u65AD\u539F\u5219\uFF0CuploadType\u662F\u4E00\u4E2A\u5185\u90E8\u72B6\u6001</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token keyword">class</span> <span class="token class-name">Upload</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">fileSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>uploadType <span class="token operator">=</span> uploadType
    <span class="token punctuation">}</span>
    <span class="token function">delFile</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      uploadManager<span class="token punctuation">.</span><span class="token function">setExternalState</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// (1)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fileSize <span class="token operator">&lt;</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u6587\u4EF6\u5417\uFF1F&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fileName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u5185\u90E8\u72B6\u6001\u5DE5\u5382</span>
  <span class="token keyword">var</span> UploadFactory <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> createdFlyWeightObjs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">uploadType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>createdFlyWeightObjs<span class="token punctuation">[</span>uploadType<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> createdFlyWeightObjs<span class="token punctuation">[</span>uploadType<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>createdFlyWeightObjs<span class="token punctuation">[</span>uploadType<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Upload</span><span class="token punctuation">(</span>uploadType<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7BA1\u7406\u5916\u90E8\u72B6\u6001</span>
  <span class="token keyword">var</span> uploadManager <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> uploadDatabase <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> uploadType<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> fileSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> flyWeightObj <span class="token operator">=</span> UploadFactory<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>uploadType<span class="token punctuation">)</span>
        <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span>
        dom<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span>
          <span class="token string">&#39;&lt;span&gt;\u6587\u4EF6\u540D\u79F0:&#39;</span> <span class="token operator">+</span>
          fileName <span class="token operator">+</span>
          <span class="token string">&#39;, \u6587\u4EF6\u5927\u5C0F:&#39;</span> <span class="token operator">+</span>
          fileSize <span class="token operator">+</span>
          <span class="token string">&#39;&lt;/span&gt;&#39;</span> <span class="token operator">+</span>
          <span class="token string">&#39;&lt;button class=&quot;delFile&quot;&gt;\u5220\u9664&lt;/button&gt;&#39;</span>
        dom<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.delFile&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          flyWeightObj<span class="token punctuation">.</span><span class="token function">delFile</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span>
        uploadDatabase<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">fileName</span><span class="token operator">:</span> fileName<span class="token punctuation">,</span>
          <span class="token literal-property property">fileSize</span><span class="token operator">:</span> fileSize<span class="token punctuation">,</span>
          <span class="token literal-property property">dom</span><span class="token operator">:</span> dom<span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> flyWeightObj
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">setExternalState</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> flyWeightObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> uploadData <span class="token operator">=</span> uploadDatabase<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token keyword">in</span> uploadData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          flyWeightObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> uploadData<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">//</span>
  <span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">0</span>
  window<span class="token punctuation">.</span><span class="token function-variable function">startUpload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">uploadType<span class="token punctuation">,</span> files</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> file<span class="token punctuation">;</span> <span class="token punctuation">(</span>file <span class="token operator">=</span> files<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> uploadObj <span class="token operator">=</span> uploadManager<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
        <span class="token operator">++</span>id<span class="token punctuation">,</span>
        uploadType<span class="token punctuation">,</span>
        file<span class="token punctuation">.</span>fileName<span class="token punctuation">,</span>
        file<span class="token punctuation">.</span>fileSize
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u597D\u5904" tabindex="-1">\u597D\u5904 <a class="header-anchor" href="#\u597D\u5904" aria-hidden="true">#</a></h2><ul><li>\u662F\u4E00\u4E2A\u6BD4\u8F83\u901A\u7528\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6848</li></ul><h2 id="\u574F\u5904" tabindex="-1">\u574F\u5904 <a class="header-anchor" href="#\u574F\u5904" aria-hidden="true">#</a></h2><ul><li>\u62BD\u79BB\u51FA\u5185\u90E8\u72B6\u6001\u548C\u5916\u90E8\u72B6\u6001\u540E\uFF0C\u4EE3\u7801\u590D\u6742\u5EA6\u4F1A\u4E0A\u5347</li></ul>`,19),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{f as __pageData,h as default};
