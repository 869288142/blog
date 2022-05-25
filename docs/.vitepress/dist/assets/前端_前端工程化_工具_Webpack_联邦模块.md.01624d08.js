import{_ as n,c as a,o as s,a as e}from"./app.a3c81315.js";var t="/blog/assets/npm-shared.1e14aa20.png",o="/blog/assets/external-1.a83f98a2.png",p="/blog/assets/external-2.d860343a.png";const b='{"title":"\u80CC\u666F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u73B0\u9636\u6BB5\u591A\u9879\u76EE\u4EE3\u7801\u5171\u4EAB\u65B9\u6848","slug":"\u73B0\u9636\u6BB5\u591A\u9879\u76EE\u4EE3\u7801\u5171\u4EAB\u65B9\u6848"},{"level":3,"title":"npm \u5305","slug":"npm-\u5305"},{"level":3,"title":"UMD + Externals","slug":"umd-externals"},{"level":2,"title":"Module Federation","slug":"module-federation"},{"level":3,"title":"Module Federation\u4F18\u70B9","slug":"module-federation\u4F18\u70B9"},{"level":3,"title":"Module Federation\u7F3A\u70B9","slug":"module-federation\u7F3A\u70B9"},{"level":2,"title":"\u4F7F\u7528\u573A\u666F","slug":"\u4F7F\u7528\u573A\u666F"},{"level":2,"title":"\u5B9E\u8DF5","slug":"\u5B9E\u8DF5"},{"level":2,"title":"\u76EE\u524D\u56FD\u5185\u5E94\u7528","slug":"\u76EE\u524D\u56FD\u5185\u5E94\u7528"},{"level":2,"title":"\u53C2\u8003\u8D44\u6599","slug":"\u53C2\u8003\u8D44\u6599"}],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u5DE5\u7A0B\u5316/\u5DE5\u5177/Webpack/\u8054\u90A6\u6A21\u5757.md"}',r={},l=e('<h1 id="\u80CC\u666F" tabindex="-1">\u80CC\u666F <a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a></h1><p><code>webpack5</code>\u5728\u53D1\u5E03\u4E4B\u65F6\uFF0C\u63A8\u51FA\u4E86\u4E00\u4E2A\u91CD\u5927\u7684\u66F4\u65B0<code>Module Federation</code>,<strong>\u5176\u89E3\u51B3\u7684\u75DB\u70B9\u4E3B\u8981\u662F\u8DE8\u9879\u76EE\u4EE3\u7801\u590D\u7528</strong></p><h2 id="\u73B0\u9636\u6BB5\u591A\u9879\u76EE\u4EE3\u7801\u5171\u4EAB\u65B9\u6848" tabindex="-1">\u73B0\u9636\u6BB5\u591A\u9879\u76EE\u4EE3\u7801\u5171\u4EAB\u65B9\u6848 <a class="header-anchor" href="#\u73B0\u9636\u6BB5\u591A\u9879\u76EE\u4EE3\u7801\u5171\u4EAB\u65B9\u6848" aria-hidden="true">#</a></h2><h3 id="npm-\u5305" tabindex="-1">npm \u5305 <a class="header-anchor" href="#npm-\u5305" aria-hidden="true">#</a></h3><p><img src="'+t+'" alt=""></p><p><code>npm</code>\u7EC4\u7EC7\u5F62\u5F0F\u4E3B\u8981\u6709\u4EE5\u4E0B\u75DB\u70B9\uFF1A</p><ul><li><p><strong>\u6BCF\u4E2A\u9879\u76EE\u90FD\u8981\u5355\u72EC\u7F16\u8BD1\uFF0C\u9879\u76EE\u7684\u7F16\u8BD1\u65F6\u957F\u4F1A\u968F\u7740\u5F15\u7528\u7684\u5171\u4EAB\u5305\u6570\u636E\u589E\u52A0</strong></p></li><li><p><strong>\u6BCF\u4E2A\u9879\u76EE\u90FD\u8981\u5355\u72EC\u53D1\u5E03\uFF0C\u53D1\u5E03\u65F6\u957F\u4E5F\u4F1A\u5927\u91CF\u589E\u52A0</strong></p></li></ul><h3 id="umd-externals" tabindex="-1">UMD + Externals <a class="header-anchor" href="#umd-externals" aria-hidden="true">#</a></h3><p><strong>\u4F7F\u7528<code>UMD</code>+<code>Externals</code>\u65B9\u5F0F\u80FD\u591F\u907F\u514D<code>npm</code>\u5171\u4EAB\u65B9\u6848\u4E2D\u9879\u76EE\u7F16\u8BD1\u6162\u548C\u9879\u76EE\u53D1\u5E03\u6162\u7684\u95EE\u9898</strong>\uFF0C\u5176\u4E3B\u8981\u7684\u95EE\u9898\u662F<code>UMD</code>\u7684\u5305\u968F\u7740\u9879\u76EE\u5F15\u7528\u5171\u4EAB\u4EE3\u7801\u6570\u91CF\u589E\u52A0\uFF0C\u5BFC\u81F4\u4E86\u4E00\u4E9B\u7EF4\u62A4\u95EE\u9898:</p><ul><li><strong><code>external</code> \u9700\u8981\u81EA\u884C\u5728 <code>html</code> \u5F15\u5165\u76F8\u5173 <code>script</code></strong>\uFF0C\u6B64\u65B9\u6848\u53EA\u9700\u5F15\u4E00\u4E2A <code>runtime</code> \u6587\u4EF6\uFF0C<code>runtime</code> \u91CC\u7EF4\u62A4\u4E86 <code>chunk</code> \u7684\u6620\u5C04\u8868\uFF0C\u6BD4\u5982\uFF1A</li></ul><p><img src="'+o+'" alt=""></p><ul><li><strong><code>external</code> \u9700\u8981\u81EA\u884C\u5904\u7406\u5E93\u7684\u4F9D\u8D56\u5173\u7CFB</strong>\uFF0C\u6BD4\u5982 <code>antd</code> \u4F9D\u8D56 <code>moment</code>\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u5206\u522B\u5F15 <code>moment</code> \u548C <code>antd</code> \u7684 <code>umd</code> \u6587\u4EF6\uFF0C\u5E76\u4E14\u4FDD\u8BC1\u987A\u5E8F</li></ul><p><img src="'+p+`" alt=""></p><ul><li><strong><code>external</code> \u6CA1\u6CD5\u62C6\u5305</strong>\uFF0C\u6BD4\u5982 <code>antd</code> \u53EA\u80FD\u5F15\u4E00\u4E2A\u5927\u7684 <code>antd</code>\uFF0C\u6B64\u65B9\u6848\u53EF\u4EE5\u62C6\uFF0C\u6BD4\u5982\u53EA\u7528\u4E86 <code>Button</code>\uFF0C\u53EF\u4EE5\u4E0D\u5F15\u6574\u4E2A <code>antd</code></li></ul><h2 id="module-federation" tabindex="-1">Module Federation <a class="header-anchor" href="#module-federation" aria-hidden="true">#</a></h2><h3 id="module-federation\u4F18\u70B9" tabindex="-1">Module Federation\u4F18\u70B9 <a class="header-anchor" href="#module-federation\u4F18\u70B9" aria-hidden="true">#</a></h3><ul><li><p>\u5171\u4EAB\u4EE3\u7801\u66F4\u65B0\u65F6\uFF0C\u4F7F\u7528\u5171\u4EAB\u4EE3\u7801\u7684\u9879\u76EE\u65E0\u9700\u7F16\u8BD1\u548C\u53D1\u5E03</p></li><li><p>\u4F7F\u7528\u5171\u4EAB\u4EE3\u7801\u80FD\u591F\u505A\u5230\u66F4\u53CB\u597D\u7684\u4F53\u79EF\u4F18\u5316\uFF0C\u540C\u65F6\u4F9D\u8D56\u5173\u7CFB\u4E5F\u53EF\u4EE5\u81EA\u52A8\u5316\u5173\u7CFB</p></li></ul><h3 id="module-federation\u7F3A\u70B9" tabindex="-1">Module Federation\u7F3A\u70B9 <a class="header-anchor" href="#module-federation\u7F3A\u70B9" aria-hidden="true">#</a></h3><ul><li><p>\u4F53\u79EF\u51CF\u5C11\u540C\u65F6\uFF0C\u8BF7\u6C42\u6570\u589E\u52A0\u4E86</p></li><li><p>\u4F9D\u8D56\u90FD\u662F\u8FD0\u884C\u65F6\u52A0\u8F7D\u7684</p></li></ul><h2 id="\u4F7F\u7528\u573A\u666F" tabindex="-1">\u4F7F\u7528\u573A\u666F <a class="header-anchor" href="#\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a></h2><ul><li><p>\u8DE8\u9879\u76EE\u4EE3\u7801\u5171\u4EAB</p></li><li><p>\u4F9D\u8D56\u5916\u7F6E\u5316\uFF0C\u63D0\u5347\u7F16\u8BD1\u901F\u5EA6</p></li></ul><h2 id="\u5B9E\u8DF5" tabindex="-1">\u5B9E\u8DF5 <a class="header-anchor" href="#\u5B9E\u8DF5" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">ModuleFederationPluginOptions</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
     * \u66B4\u9732\u7684\u6587\u4EF6\u5165\u53E3
	 */</span>
	exposes<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> ExposesObject<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> ExposesObject<span class="token punctuation">;</span>

	<span class="token comment">/**
     * \u66B4\u9732\u7684runtime\u6587\u4EF6\u540D\u79F0
	 */</span>
	filename<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Options for library.
	 */</span>
	library<span class="token operator">?</span><span class="token operator">:</span> LibraryOptions<span class="token punctuation">;</span>

	<span class="token comment">/**
	 * \u5BB9\u5668\u540D\u79F0\uFF0C\u552F\u4E00
	 */</span>
	name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * \u8FDC\u7A0B\u5BB9\u5668\u7C7B\u578B
	 */</span>
	remoteType<span class="token operator">?</span><span class="token operator">:</span>
		<span class="token operator">|</span> <span class="token string">&quot;var&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;module&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;assign&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;this&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;window&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;self&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;global&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;commonjs&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;commonjs2&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;commonjs-module&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;amd&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;amd-require&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;umd&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;umd2&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;jsonp&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;system&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;promise&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;import&quot;</span>
		<span class="token operator">|</span> <span class="token string">&quot;script&quot;</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * \u4F7F\u7528\u7684\u8FDC\u7A0B\u6A21\u5757
	 */</span>
	remotes<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> RemotesObject<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> RemotesObject<span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Share scope name used for all shared modules (defaults to &#39;default&#39;).
	 */</span>
	shareScope<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * \u5171\u4EAB\u6A21\u5757
	 */</span>
	shared<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> SharedObject<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> SharedObject<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">SharedConfig</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
	 * Include the provided and fallback module directly instead behind an async request. This allows to use this shared module in initial load too. All possible shared modules need to be eager too.
	 */</span>
	eager<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Provided module that should be provided to share scope. Also acts as fallback module if no shared module is found in share scope or version isn&#39;t valid. Defaults to the property name.
	 */</span>
	<span class="token keyword">import</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Package name to determine required version from description file. This is only needed when package name can&#39;t be automatically determined from request.
	 */</span>
	packageName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Version requirement from module in share scope.
	 */</span>
	requiredVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Module is looked up under this key from the share scope.
	 */</span>
	shareKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Share scope name.
	 */</span>
	shareScope<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 *\u53EA\u5141\u8BB8\u52A0\u8F7D\u4E00\u4E2A\u4F9D\u8D56\u4E00\u4E2A\u7248\u672C\uFF0C\u9ED8\u8BA4\u7981\u6B62
	 */</span>
	singleton<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * Do not accept shared module if version is not valid (defaults to yes, if local fallback module is available and shared module is not a singleton, otherwise no, has no effect if there is no required version specified).
	 */</span>
	strictVersion<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * \u5339\u914D\u517C\u5BB9\u7248\u672C
	 */</span>
	version<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">ExposesConfig</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
	 * \u66B4\u9732\u7684\u6A21\u5757\u4F4D\u7F6E
	 */</span>
	<span class="token keyword">import</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * chunk\u6587\u4EF6\u540D\u79F0
	 */</span>
	name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">RemotesConfig</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
	 * Container locations from which modules should be resolved and loaded at runtime.
	 */</span>
	external<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">/**
	 * The name of the share scope shared with this remote.
	 */</span>
	shareScope<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u76EE\u524D\u56FD\u5185\u5E94\u7528" tabindex="-1">\u76EE\u524D\u56FD\u5185\u5E94\u7528 <a class="header-anchor" href="#\u76EE\u524D\u56FD\u5185\u5E94\u7528" aria-hidden="true">#</a></h2><p><code>emp.js</code></p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1">\u53C2\u8003\u8D44\u6599 <a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a></h2><p><a href="https://zhuanlan.zhihu.com/p/115403616" target="_blank" rel="noopener noreferrer">\u7CBE\u8BFB Webpack5 \u65B0\u7279\u6027 - \u6A21\u5757\u8054\u90A6</a></p><p><a href="https://mp.weixin.qq.com/s/sdIVsfmRlhDtT6DF2dmsJQ" target="_blank" rel="noopener noreferrer">\u8C03\u7814 Federated Modules\uFF0C\u5E94\u7528\u79D2\u5F00\uFF0C\u5E94\u7528\u96C6\u65B9\u6848\uFF0C\u5FAE\u524D\u7AEF\u52A0\u8F7D\u65B9\u6848\u6539\u8FDB\u7B49</a></p><p><a href="http://www.alloyteam.com/2020/04/14338/" target="_blank" rel="noopener noreferrer">\u63A2\u7D22 webpack5 \u65B0\u7279\u6027 Module federation \u5728\u817E\u8BAF\u6587</a></p><p><a href="https://juejin.cn/post/6844904149746745357#heading-0" target="_blank" rel="noopener noreferrer">\u63A2\u7D22webpack4\u4E0Ewebpack5\u591A\u9879\u76EE\u516C\u5171\u4EE3\u7801\u590D\u7528\u67B6\u6784</a></p><p><a href="https://indepth.dev/posts/1173/webpack-5-module-federation-a-game-changer-in-javascript-architecture#module-federation-allows-a-javascript-application-to-dynamically-run-code-from-another-bundle/build,-on-both-client-and-server." target="_blank" rel="noopener noreferrer">Webpack 5 Module Federation: A game-changer in JavaScript architecture</a></p><p><a href="https://github.com/module-federation/module-federation-examples" target="_blank" rel="noopener noreferrer">module-federation-examples</a></p>`,35),c=[l];function i(d,u,k,m,h,g){return s(),a("div",null,c)}var q=n(r,[["render",i]]);export{b as __pageData,q as default};
