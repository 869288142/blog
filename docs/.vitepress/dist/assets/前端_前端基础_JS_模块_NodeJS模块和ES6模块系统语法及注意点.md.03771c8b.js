import{_ as n,c as s,o as a,a as p}from"./app.a3c81315.js";const f='{"title":"\u793E\u533A\u6A21\u5757\u89C4\u8303:","description":"","frontmatter":{},"headers":[{"level":2,"title":"CommonJS\u89C4\u8303","slug":"commonjs\u89C4\u8303"},{"level":2,"title":"AMD\u89C4\u8303 \u5168\u79F0 \u5F02\u6B65\u6A21\u5757\u5B9A\u4E49","slug":"amd\u89C4\u8303-\u5168\u79F0-\u5F02\u6B65\u6A21\u5757\u5B9A\u4E49"},{"level":2,"title":"CMD\u89C4\u8303 \u901A\u7528\u6A21\u5757\u5B9A\u4E49","slug":"cmd\u89C4\u8303-\u901A\u7528\u6A21\u5757\u5B9A\u4E49"},{"level":2,"title":"\u5B98\u65B9\u6A21\u5757\u89C4\u8303","slug":"\u5B98\u65B9\u6A21\u5757\u89C4\u8303"},{"level":3,"title":"CommonJS\u8BED\u6CD5\u5206\u6790","slug":"commonjs\u8BED\u6CD5\u5206\u6790"},{"level":3,"title":"ESM\u8BED\u6CD5\u5206\u6790\uFF1A","slug":"esm\u8BED\u6CD5\u5206\u6790\uFF1A"},{"level":3,"title":"ESM\u52A0\u8F7DCommmonJS","slug":"esm\u52A0\u8F7Dcommmonjs"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6A21\u5757/NodeJS\u6A21\u5757\u548CES6\u6A21\u5757\u7CFB\u7EDF\u8BED\u6CD5\u53CA\u6CE8\u610F\u70B9.md"}',o={},e=p(`<h1 id="\u793E\u533A\u6A21\u5757\u89C4\u8303" tabindex="-1">\u793E\u533A\u6A21\u5757\u89C4\u8303: <a class="header-anchor" href="#\u793E\u533A\u6A21\u5757\u89C4\u8303" aria-hidden="true">#</a></h1><ul><li>[ ] \u6A21\u5757 <ul><li>[x] \u95EE\u9898 <ul><li>[x] \u547D\u540D\u51B2\u7A81</li><li>[x] \u4F9D\u8D56\u7BA1\u7406</li></ul></li><li>[x] \u89C4\u8303 <ul><li>[x] CommonJS - \u670D\u52A1\u7AEF Node</li><li>[x] Amd - require.js</li><li>[x] CMD - SeaJS</li><li>[x] es module</li></ul></li><li>[x] \u6CE8\u610F\u70B9 <ul><li>[ ] es module \u548C CommonJS \u533A\u522B <ul><li>[ ] \u540C\u6B65\u52A0\u8F7D\u3001\u5F02\u6B65\u52A0\u8F7D</li><li>[ ] \u503C\u62F7\u8D1D</li><li>[ ] \u5FAA\u73AF\u5F15\u7528</li></ul></li></ul></li></ul></li></ul><h2 id="commonjs\u89C4\u8303" tabindex="-1">CommonJS\u89C4\u8303 <a class="header-anchor" href="#commonjs\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u89C4\u8303\u5B9E\u73B0\u8005\uFF1A <strong>NodeJS \u670D\u52A1\u7AEF</strong><br> Browserify \u6D4F\u89C8\u5668</p><h2 id="amd\u89C4\u8303-\u5168\u79F0-\u5F02\u6B65\u6A21\u5757\u5B9A\u4E49" tabindex="-1">AMD\u89C4\u8303 \u5168\u79F0 \u5F02\u6B65\u6A21\u5757\u5B9A\u4E49 <a class="header-anchor" href="#amd\u89C4\u8303-\u5168\u79F0-\u5F02\u6B65\u6A21\u5757\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u89C4\u8303\u5B9E\u73B0\u8005\uFF1A <strong>RequireJS \u6D4F\u89C8\u5668</strong></p><h2 id="cmd\u89C4\u8303-\u901A\u7528\u6A21\u5757\u5B9A\u4E49" tabindex="-1">CMD\u89C4\u8303 \u901A\u7528\u6A21\u5757\u5B9A\u4E49 <a class="header-anchor" href="#cmd\u89C4\u8303-\u901A\u7528\u6A21\u5757\u5B9A\u4E49" aria-hidden="true">#</a></h2><p>\u89C4\u8303\u5B9E\u73B0\u8005\uFF1A seaJS \u670D\u52A1\u7AEF\u548C\u6D4F\u89C8\u5668\u901A\u7528</p><h2 id="\u5B98\u65B9\u6A21\u5757\u89C4\u8303" tabindex="-1">\u5B98\u65B9\u6A21\u5757\u89C4\u8303 <a class="header-anchor" href="#\u5B98\u65B9\u6A21\u5757\u89C4\u8303" aria-hidden="true">#</a></h2><p>1.ESM\u89C4\u8303 \u5C31\u662FES6 Module <strong>\u5404\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u7AEF</strong></p><p>\u76EE\u524D\u5E38\u7528\u7684\u5C31\u662F\u6D4F\u89C8\u5668\u7AEF\u7684RequireJS\u3001NodeJS\u3001\u4EE5\u53CAESM</p><h3 id="commonjs\u8BED\u6CD5\u5206\u6790" tabindex="-1">CommonJS\u8BED\u6CD5\u5206\u6790 <a class="header-anchor" href="#commonjs\u8BED\u6CD5\u5206\u6790" aria-hidden="true">#</a></h3><p><strong>module.export</strong> \u5173\u952E</p><p>1.module.exports\u5B9E\u8D28\u4E0A\u662F\u4E00\u4E2A\u5BF9\u8C61,\u6700\u540E\u6A21\u5757\u5BFC\u51FA\u7684\u5BF9\u8C61\u5C31\u662F\u8FD9\u4E2A\u5F15\u7528\u6307\u5411\u7684\u5BF9\u8C61</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>export<span class="token punctuation">.</span>key <span class="token operator">=</span> value
<span class="token comment">// eg: </span>
module<span class="token punctuation">.</span>export<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> 
<span class="token comment">// \u6574\u4F53\u7BA1\u7406\u5BFC\u51FA\uFF0C\u6B64\u65F6exports\u4E0Emodule.exports\u6307\u5411\u65AD\u5F00\uFF0C\u5BFC\u81F4exports\u4E0A\u7684\u5C5E\u6027\u88AB\u5FFD\u7565</span>
module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre></div><p>2.exports\u662F\u4E00\u4E2Amodule.export\u7684\u52A9\u624B\u53D8\u91CF\uFF0C\u7528\u4E8E\u5C31\u5730\u5BFC\u51FA,\u4E24\u8005\u9ED8\u8BA4\u6307\u5411\u540C\u4E00\u5BF9\u8C61\uFF0C\u5373module.exports === exports true</p><div class="language-js"><pre><code><span class="token comment">// \u50CF\u6BD4\u8F83\u957F\u7684\u7A0B\u5E8F,\u5199\u5B8C\u6240\u6709\u4E4B\u540E\uFF0C\u518D\u53BB\u627E\u5230\u9700\u8981\u5BFC\u51FA\u7684\u53D8\u91CF\u518D\u79FB\u5230\u4F4E\u7AEF\u7684export.module\u4E0A\u9010\u4E2A\u6DFB\u52A0\uFF0C\u662F\u76F8\u5F53\u9EBB\u70E6\uFF0C\u4E00\u822C\u5728\u53D8\u91CF\u4E0B\u51B3\u5B9A\u662F\u5426\u5BFC\u51FA</span>
<span class="token comment">//eg </span>
<span class="token keyword">let</span> <span class="token function-variable function">fA</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>fA <span class="token operator">=</span> fA
<span class="token keyword">let</span> <span class="token function-variable function">fB</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>fB <span class="token operator">=</span> fB

<span class="token comment">// exports \u7B80\u6D01\u5F88\u591A</span>
<span class="token keyword">let</span> <span class="token function-variable function">fA</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>fA <span class="token operator">=</span> fA
<span class="token keyword">let</span> <span class="token function-variable function">fB</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>fB <span class="token operator">=</span> fB
</code></pre></div><p>3.\u5728\u9010\u4E2A\u5BFC\u51FA\u65F6\u4F7F\u7528exports,\u800C\u5728\u5BFC\u51FA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u4F7F\u7528module.exports\uFF0C\u4E0D\u5EFA\u8BAE\u6DF7\u7528\uFF0C\u5982\u679C\u9700\u8981\uFF0C\u53EF\u4EE5\u4F5C\u4E00\u4E0B\u5904\u7406:</p><div class="language-js"><pre><code><span class="token comment">// \u5728\u6700\u540E\u5BFC\u51FA\u65F6\u5C06exports\u5BF9\u8C61\u548Cmodule.exports\u5BF9\u8C61\u5408\u5E76</span>
exports<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
<span class="token literal-property property">b</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>exports<span class="token punctuation">)</span>
</code></pre></div><p><strong>require</strong> \u5173\u952E:</p><p>1.\u6A21\u5757\u533A\u5206\uFF0C\u77E5\u9053\u5373\u53EF let f = require(&#39;url&#39;)</p><div class="language-js"><pre><code><span class="token comment">// \u6838\u5FC3\u6A21\u5757,\u7B2C\u4E09\u65B9\u6A21\u5757(npm\u5B89\u88C5),\u6307\u5B9A\u6A21\u5757\u540D\u5373\u53EF</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">require</span> <span class="token punctuation">(</span><span class="token string">&#39;modulename&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u81EA\u5B9A\u4E49\u6A21\u5757\uFF0C\u9700\u6307\u5B9A\u76F8\u5BF9\u6216\u8005\u7EDD\u5BF9\u8DEF\u5F84</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;absolutePATH/relativeAPTH&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>2.\u67E5\u627E\u65F6,\u6CA1\u6709\u540E\u7F00\u540D\u7684\u4F1A\u5C1D\u8BD5\u6DFB\u52A0.js\u3001.json\u3001.node,\u8FD9\u91CC\u53EF\u4EE5\u7A0D\u5FAE\u5077\u4E2A\u61D2</p><div class="language-js"><pre><code><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./circle&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u7B49\u540C\u4E8E</span>
<span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./circle.js&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="esm\u8BED\u6CD5\u5206\u6790\uFF1A" tabindex="-1">ESM\u8BED\u6CD5\u5206\u6790\uFF1A <a class="header-anchor" href="#esm\u8BED\u6CD5\u5206\u6790\uFF1A" aria-hidden="true">#</a></h3><p><strong>export var/function/class</strong> \u5173\u952E:</p><p>1.\u5BFC\u51FA\u503C\u548C\u5185\u90E8\u503C\u8981\u6709\u5BF9\u4E8E\u5173\u7CFB,\u5373</p><div class="language-js"><pre><code><span class="token comment">// error</span>
<span class="token keyword">export</span> <span class="token number">1</span>

<span class="token comment">// error</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> m

<span class="token comment">// correct</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span>

<span class="token comment">// correct</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">}</span>
</code></pre></div><p>\u76F4\u63A5\u5728\u58F0\u660E\u65F6\u5BFC\u51FA\u6216\u8005\u7528\u4E00\u4E2A{}\u5305\u88F9\u5BFC\u51FA</p><p>2.export default \u7528\u4E8E\u5BFC\u51FA\u4E00\u4E2A\u9ED8\u8BA4\u503C\uFF0C\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u4E0D\u9700\u8981\u77E5\u9053\u5185\u90E8\u5BFC\u51FA\u53D8\u91CF\u540D\u79F0\u5373\u53EF\u4F7F\u7528 PS: \u4E00\u4E2A\u6A21\u5757\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u5BFC\u51FA</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> \u7B49\u540C <span class="token keyword">export</span> <span class="token punctuation">{</span>add <span class="token keyword">as</span> <span class="token keyword">default</span><span class="token punctuation">}</span>
<span class="token comment">// \u4E0D\u80FD\u63A5\u53D8\u91CF\u58F0\u660E\u8BED\u53E5</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
</code></pre></div><p>\u666E\u901A\u5BFC\u51FA\u4E0E\u9ED8\u8BA4\u5BFC\u51FA\u4F7F\u7528\u7684\u533A\u522B</p><div class="language-js"><pre><code><span class="token comment">// \u666E\u901A\u5BFC\u51FA\u7684\u5BFC\u5165\u4F7F\u7528</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>f<span class="token punctuation">}</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>f<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fmod&#39;</span>

<span class="token comment">// \u9ED8\u8BA4\u5BFC\u51FA\u7684\u5BFC\u5165\u4F7F\u7528,\u53EF\u4EE5\u65E0\u9700\u77E5\u9053\u5BFC\u51FA\u6A21\u5757\u7684\u5185\u90E8\u53D8\u91CF\u540D,\u4EFB\u610F\u91CD\u547D\u540D</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> f
<span class="token keyword">import</span> c <span class="token keyword">from</span> <span class="token string">&#39;fmod&#39;</span>
</code></pre></div><p>3.\u5BFC\u51FA\u503C\u4E0E\u6A21\u5757\u503C\u662F\u52A8\u6001\u7ED1\u5B9A\u7684</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 500\u6BEB\u79D2\u540E,\u5176\u4ED6\u6A21\u5757\u62FF\u5230\u7684foo\u503C\u4F1A\u53D8\u6210bar</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo <span class="token operator">=</span> <span class="token string">&#39;baz&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>import\u7528\u6CD5</strong> \u5173\u952E:</p><p>1.\u5BFC\u5165\u975E\u9ED8\u8BA4\u53D8\u91CF\u65F6\u9700\u8981\u4F7F\u7528{}\u8BED\u6CD5\uFF0C\u5E76\u4E14\u53D8\u91CF\u8981\u4E0E\u5BFC\u51FA\u65F6\u53D8\u91CF\u4E00\u81F4</p><div class="language-js"><pre><code><span class="token comment">// \u666E\u901A\u5BFC\u51FA\u7684\u5BFC\u5165\u4F7F\u7528</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>f<span class="token punctuation">}</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>f<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fmod&#39;</span>
</code></pre></div><p>2.\u5BFC\u5165\u9ED8\u8BA4\u53D8\u91CF\u65F6\uFF0C\u7701\u7565{},\u5E76\u4E14\u53EF\u4EE5\u91CD\u547D\u540D\u5BFC\u51FA\u53D8\u91CF</p><div class="language-js"><pre><code><span class="token comment">// \u9ED8\u8BA4\u5BFC\u51FA\u7684\u5BFC\u5165\u4F7F\u7528,\u53EF\u4EE5\u65E0\u9700\u77E5\u9053\u5BFC\u51FA\u6A21\u5757\u7684\u5185\u90E8\u53D8\u91CF\u540D,\u4EFB\u610F\u91CD\u547D\u540D</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> f
<span class="token keyword">import</span> c <span class="token keyword">from</span> <span class="token string">&#39;fmod&#39;</span>
</code></pre></div><p>3.\u53EF\u4EE5\u4F7F\u7528*\u5BFC\u51FA\u6574\u4F53\u6A21\u5757</p><div class="language-js"><pre><code><span class="token comment">// circle.js</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> radius <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> area <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span><span class="token constant">PI</span><span class="token operator">*</span>radius
<span class="token comment">// main.js</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> circle <span class="token keyword">from</span> <span class="token string">&#39;./circle.js&#39;</span>
circle<span class="token punctuation">.</span>radius
circle<span class="token punctuation">.</span>area
</code></pre></div><p>4.\u53EF\u4EE5\u4F7F\u7528,\u540C\u65F6\u5BFC\u51FA\u9ED8\u8BA4\u5BFC\u51FA\u548C\u5E38\u89C4\u5BFC\u51FA</p><div class="language-js"><pre><code><span class="token keyword">import</span> _<span class="token punctuation">,</span><span class="token punctuation">{</span>each<span class="token punctuation">,</span> forEach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span>
</code></pre></div><p>5.\u591A\u6B21import\u540C\u4E00\u6A21\u5757\uFF0C\u53EA\u4F1A\u6267\u884C\u4E00\u6B21</p><p>6.import\u53EF\u4EE5\u4E0Erequire\u6DF7\u7528\uFF0C\u4F46\u662F\u5176\u5728\u9759\u6001\u5206\u6790\u9636\u6BB5\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u4F1A\u5148\u4E8Erequire\u52A0\u8F7D,\u8FD9\u5728\u8981\u6C42\u4E00\u5B9A\u7684\u5BFC\u5165\u987A\u5E8F\u65F6\u8981\u6CE8\u610F</p><p><strong>export \u4E0E import\u590D\u5408\u5199\u6CD5</strong></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// \u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3A,\u4F46\u662F\u5408\u5E76\u5199\u6CD5\u7B49\u540C\u4E8E\u6CA1\u6709\u5728\u5F53\u524D\u6A21\u5757\u4E2D\u5BFC\u5165my_module\uFF0C\u5373\u65E0\u6CD5\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;my_module&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="esm\u52A0\u8F7Dcommmonjs" tabindex="-1">ESM\u52A0\u8F7DCommmonJS <a class="header-anchor" href="#esm\u52A0\u8F7Dcommmonjs" aria-hidden="true">#</a></h3><p>\u5173\u952E\uFF1A</p><p>1.CommonJS\u6A21\u5757\u8F93\u51FA\u5BF9\u8C61module.exports\u5C06\u4F1A\u88ABNode\u8F6C\u6362\u6210\u9ED8\u8BA4\u5BFC\u51FA</p><div class="language-js"><pre><code><span class="token comment">// \u5BFC\u51FA</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> module<span class="token punctuation">.</span>exports
<span class="token comment">// \u5BFC\u5165,\u7C7B\u4F3C\u5BFC\u5165\u9ED8\u8BA4</span>
<span class="token keyword">import</span> m <span class="token keyword">from</span> <span class="token string">&#39;./m&#39;</span>
</code></pre></div><p>2.\u6B64\u65F6CommonJS\u6A21\u5757\u53D8\u91CF\u9075\u5FAA\u5176\u89C4\u5219\uFF0C\u4E0D\u4F1A\u52A8\u6001\u7ED1\u5B9A</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
<span class="token comment">//500\u6BEB\u79D2\u540E\uFF0Cmodule.exports\u4ECD\u7136\u662F123</span>
</code></pre></div><p>3.\u7531\u4E8ECommonJS\u6A21\u5757\u8FD0\u884C\u65F6\uFF0C\u624D\u4F1A\u786E\u5B9A\u8F93\u51FA\u7684module.exports\u5BF9\u8C61\uFF0C\u800CESM\u5728\u7F16\u8BD1\u65F6\u5C31\u8981\u786E\u5B9A\u63A5\u53E3\uFF0C\u5BFC\u5165\u65F6\uFF0C\u4E0D\u5141\u8BB8\u89E3\u6784\u8BED\u6CD5</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>readFile<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs&#39;</span>
</code></pre></div><p>\u89E3\u51B3\u65B9\u6848\uFF1A</p><div class="language-js"><pre><code><span class="token comment">//\u6574\u4F53\u5BFC\u5165 </span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> express <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//\u9ED8\u8BA4\u5BFC\u5165,\u66F4\u4F18</span>
<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre></div>`,58),t=[e];function c(l,r,k,u,i,d){return a(),s("div",null,t)}var g=n(o,[["render",c]]);export{f as __pageData,g as default};
