import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const v='{"title":"options","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E90\u7801\u5206\u6790","slug":"\u6E90\u7801\u5206\u6790"},{"level":2,"title":"componentOptions","slug":"componentoptions"},{"level":2,"title":"new Vue\u573A\u666F","slug":"new-vue\u573A\u666F"},{"level":3,"title":"vm.constructor","slug":"vm-constructor"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u6E90\u7801\u5206\u6790/\u7EC4\u4EF6/\u6269\u5C55/options.md"}',p={},o=t(`<h1 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u901A\u8FC7$options\u8BBF\u95EE\u7528\u4E8E\u521D\u59CB\u5316\u7684\u9009\u9879</p><p>\u6570\u636E</p><h2 id="\u6E90\u7801\u5206\u6790" tabindex="-1">\u6E90\u7801\u5206\u6790 <a class="header-anchor" href="#\u6E90\u7801\u5206\u6790" aria-hidden="true">#</a></h2><h2 id="componentoptions" tabindex="-1">componentOptions <a class="header-anchor" href="#componentoptions" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B63\u5E38\u5408\u5E76\u9009\u9879\u8981\u6162\uFF0C\u7EC4\u4EF6\u9009\u9879\u53EF\u4EE5\u8D70\u8FD9\u4E2A\u4F18\u5316</span>
  <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
    <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
    options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    vm
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728initInternalComponent\u6253\u4E0A\u4E00\u4E2A\u65AD\u70B9</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">createComponentInstanceForVnode</span> <span class="token punctuation">(</span>
    vnode<span class="token punctuation">,</span> <span class="token comment">// we know it&#39;s MountedComponentVNode but flow doesn&#39;t</span>
    parent <span class="token comment">// activeInstance in lifecycle state</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u7EC4\u4EF6option</span>
    <span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">_isComponent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">_parentVnode</span><span class="token operator">:</span> vnode<span class="token punctuation">,</span>
      <span class="token literal-property property">parent</span><span class="token operator">:</span> parent
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5185\u8054\u6A21\u677F</span>
    <span class="token keyword">var</span> inlineTemplate <span class="token operator">=</span> vnode<span class="token punctuation">.</span>data<span class="token punctuation">.</span>inlineTemplate<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDef</span><span class="token punctuation">(</span>inlineTemplate<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>render <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
      options<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> inlineTemplate<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u8FD9\u91CC\u8C03\u7528_init</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">.</span>Ctor</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>createComponentInstanceForVnode\u9996\u5148\u6839\u636E\u662F\u5426\u6709\u5185\u8054\u6A21\u677F\u6DFB\u52A0<code>render\u3001staticRenderFns</code>\u5C5E\u6027\uFF0C\u521D\u59CB\u4F1A\u6DFB\u52A0<code>_isComponent\u3001_parentVNode\u3001parent</code>\u5C5E\u6027\uFF0C\u6700\u540E\u8C03\u7528<code>new vnode.componentOptions.Ctor(options)</code>\uFF0C\u5B9E\u9645\u4E0A\uFF0C<code>vnode.componentOptions.Ctor</code>\u662F\u4E00\u4E2A<code>Vue.extend</code>\u7684\u7C7B,\u8FD9\u91CC\u5C31\u7B49\u4E8E\u8C03\u7528\u4E86</p><div class="language-js"><pre><code><span class="token comment">// Vue.prototype._init</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">initInternalComponent</span> <span class="token punctuation">(</span><span class="token parameter">vm<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// \u539F\u578B\u7EE7\u627F\u7236\u7EA7\u7684Options</span>
  <span class="token keyword">var</span> opts <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>



  <span class="token keyword">var</span> parentVnode <span class="token operator">=</span> options<span class="token punctuation">.</span>_parentVnode<span class="token punctuation">;</span>
  

  opts<span class="token punctuation">.</span>parent <span class="token operator">=</span> options<span class="token punctuation">.</span>parent<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentVnode <span class="token operator">=</span> parentVnode<span class="token punctuation">;</span>

  <span class="token keyword">var</span> vnodeComponentOptions <span class="token operator">=</span> parentVnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">;</span>

  opts<span class="token punctuation">.</span>propsData <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>propsData<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_parentListeners <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>listeners<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_renderChildren <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>children<span class="token punctuation">;</span>
  opts<span class="token punctuation">.</span>_componentTag <span class="token operator">=</span> vnodeComponentOptions<span class="token punctuation">.</span>tag<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>render<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    opts<span class="token punctuation">.</span>render <span class="token operator">=</span> options<span class="token punctuation">.</span>render<span class="token punctuation">;</span>
    opts<span class="token punctuation">.</span>staticRenderFns <span class="token operator">=</span> options<span class="token punctuation">.</span>staticRenderFns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7EC4\u4EF6\u7684$options\u521D\u59CB\u5316\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u662F\u5C06\u4E00\u4E9B\u8FD0\u884C\u65F6\u7684\u53D8\u91CF\u76F4\u63A5\u5408\u5E76\u4E0A\u53BB\uFF0C\u56E0\u4E3A<strong>Vue\u5185\u90E8\u5B9E\u4F8B\u5316\u7684\u7EC4\u4EF6\u65E0\u9700\u4F20\u5165\u5916\u90E8Options,\u6240\u4EE5Vue\u5185\u90E8\u5C31\u5BF9\u5176\u505A\u4E86\u4E0A\u8FF0\u4F18\u5316\uFF0C\u5E38\u89C4\u7684new Vue\u8FD8\u662F\u8D70\u53E6\u5916\u4E00\u4E2A\u6D41\u7A0B</strong></p><h2 id="new-vue\u573A\u666F" tabindex="-1">new Vue\u573A\u666F <a class="header-anchor" href="#new-vue\u573A\u666F" aria-hidden="true">#</a></h2><div class="language-js"><pre><code>vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
  <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
  options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  vm
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u5C06<code>vm.constructor.options</code>\u548C\u4F20\u5165\u7684<code>options</code>\u8FDB\u884C\u5408\u5E76,\u8FD9\u91CC\u9700\u8981\u5173\u6CE8\u7684\u662F<code>vm.constructor</code></p><h3 id="vm-constructor" tabindex="-1">vm.constructor <a class="header-anchor" href="#vm-constructor" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">resolveConstructorOptions</span> <span class="token punctuation">(</span><span class="token parameter">Ctor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">var</span> options <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options<span class="token punctuation">;</span>

  <span class="token comment">// \u5F80\u7EE7\u627F\u94FE\u4E0A\u8FED\u4EE3\u68C0\u6D4B\u5E76\u5408\u5E76\u9009\u9879</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>super<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> superOptions <span class="token operator">=</span> <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>super<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> cachedSuperOptions <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>superOptions<span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>superOptions <span class="token operator">!==</span> cachedSuperOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// super option changed,</span>
      <span class="token comment">// need to resolve new options.</span>
      Ctor<span class="token punctuation">.</span>superOptions <span class="token operator">=</span> superOptions<span class="token punctuation">;</span>
      <span class="token comment">// check if there are any late-modified/attached options (#4976)</span>
      <span class="token keyword">var</span> modifiedOptions <span class="token operator">=</span> <span class="token function">resolveModifiedOptions</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// update base extend options</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>modifiedOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">extend</span><span class="token punctuation">(</span>Ctor<span class="token punctuation">.</span>extendOptions<span class="token punctuation">,</span> modifiedOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      options <span class="token operator">=</span> Ctor<span class="token punctuation">.</span>options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>superOptions<span class="token punctuation">,</span> Ctor<span class="token punctuation">.</span>extendOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">.</span>components<span class="token punctuation">[</span>options<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> Ctor<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> options
<span class="token punctuation">}</span>
</code></pre></div>`,17),e=[o];function c(u,i,l,r,k,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{v as __pageData,f as default};
