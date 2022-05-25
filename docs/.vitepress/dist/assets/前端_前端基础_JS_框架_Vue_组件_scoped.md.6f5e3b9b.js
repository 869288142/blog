import{_ as n,c as a,o as s,a as t}from"./app.a3c81315.js";const v='{"title":"scoped\u5206\u6790","description":"","frontmatter":{},"headers":[],"relativePath":"\u524D\u7AEF/\u524D\u7AEF\u57FA\u7840/JS/\u6846\u67B6/Vue/\u7EC4\u4EF6/scoped.md"}',p={},o=t(`<h1 id="scoped\u5206\u6790" tabindex="-1">scoped\u5206\u6790 <a class="header-anchor" href="#scoped\u5206\u6790" aria-hidden="true">#</a></h1><p>vue\u4F7F\u7528\u4E86\u5355\u6587\u4EF6\u7EC4\u4EF6\u65B9\u5F0F\u6765\u89E3\u8026\u89C6\u56FE\u5373.vue\u540E\u7F00\u6587\u4EF6\u540D</p><p>\u5355\u6587\u4EF6\u7EC4\u4EF6\u7EC4\u6210\u90E8\u5206\uFF1A</p><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>\u5176\u4E2Dtemplate\u3001script\u4EE5\u53CA\u5B9E\u73B0\u4E86\u79C1\u6709\u5316</p><p>\u90A3\u4E48style\u5982\u4F55\u5B9E\u73B0\u79C1\u6709\u5316\uFF1F</p><pre><code>\u4E3A\u6B64vue\u4E3Astyle\u63D0\u4F9B\u4E86\u4E00\u4E2Ascoped\u5C5E\u6027\u7528\u4E8E\u5B9E\u73B0\u6837\u5F0F\u79C1\u6709\u5316
</code></pre><div class="language-javascript"><pre><code>    <span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>\u5B9E\u73B0\u6837\u5F0F\u79C1\u6709\u5316\u7684\u539F\u7406\uFF1A</p><pre><code>\u5148\u770B\u4E00\u4E2A\u4F8B\u5B50
</code></pre><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>example <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;example&quot;</span><span class="token operator">&gt;</span>hi<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><p>\u663E\u793A\u7ED3\u679C</p><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>example<span class="token punctuation">[</span>data<span class="token operator">-</span>v<span class="token operator">-</span>f3f3eg9<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;example&quot;</span> data<span class="token operator">-</span>v<span class="token operator">-</span>f3f3eg9<span class="token operator">&gt;</span>hi<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre></div><p>\u4ECE\u4E0A\u9762\u4E24\u6BB5\u4EE3\u7801\u5BF9\u6BD4\u53EF\u4EE5\u5F97\u77E5scoped\u4E3A\u7EC4\u4EF6\u8BBE\u7F6E\u4E00\u4E2Adata-v-id\u8FD9\u4E2A\u5168\u5C40\u552F\u4E00\u5C5E\u6027\uFF0C\u5728\u5BF9\u5E94\u7684\u6837\u5F0F\u540E\u9762\u8FFD\u52A0\u4E86\u4E00\u4E2A\u5C5E\u6027\u9009\u62E9\u5668\u6765\u552F\u4E00\u786E\u5B9A\u6837\u5F0F\u4F5C\u7528\u5BF9\u8C61</p><p>\u5C5E\u6027\u9009\u62E9\u5668\u662F\u4E00\u4E2A\u5BB9\u6613\u88AB\u4EBA\u9057\u5FD8\u70B9\u5C5E\u6027\u5462</p><pre><code>\u770B\u4E2A\u7B80\u5355\u4F8B\u5B50
</code></pre><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">.main[data-a]</span><span class="token punctuation">{</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
            <span class="token property">background-color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5927\u5BB6\u4F1A\u770B\u5230\u80CC\u666F\u6709300px\u9AD8\u5EA6\u88AB\u6E32\u67D3\u6210\u9ED1\u8272\u7684</p><p>\u6211\u4EEC\u5206\u6790\u4E00\u4E0B\u4E0D\u540C\u7C7B\u578B\u7EC4\u4EF6\u7EC4\u5408\u5F15\u7528\u7684\u60C5\u51B5\u7684\u6E32\u67D3\u60C5\u51B5</p><p>1.\u4E00\u822C\u7EC4\u4EF6\u5F15\u7528\u79C1\u6709\u7EC4\u4EF6 \u6587\u4EF6</p><div class="language-javascript"><pre><code>    <span class="token comment">//content.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> v<span class="token operator">-</span>button\u5047\u8BBE\u662F\u4E0A\u9762\u5B9A\u4E49\u7684\u7EC4\u4EF6 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>v<span class="token operator">-</span>button<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>v<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>content<span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 1200px<span class="token punctuation">;</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>content <span class="token punctuation">.</span>button<span class="token punctuation">{</span>
        border<span class="token operator">-</span>raduis<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>\u6E32\u67D3\u7ED3\u679C\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- v-button\u5047\u8BBE\u662F\u4E0A\u9762\u5B9A\u4E49\u7684\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-2311c06a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-warp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-v-2311c06a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css"><pre><code><span class="token selector">*button.vue\u6E32\u67D3\u51FA\u6765\u7684css*/
.button-warp[data-v-2311c06a]</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button[data-v-2311c06a]</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">border-radus</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*content.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.content</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content .button</span><span class="token punctuation">{</span>
    <span class="token property">border-raduis</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u867D\u7136\u5728content\u7EC4\u4EF6\u4FEE\u6539\u4E86button\u7684border-radius\u5C5E\u6027\uFF0C\u4F46\u662F\u5185\u90E8\u7EC4\u4EF6\u7684\u6837\u5F0F\u6743\u91CD\u6BD4\u5916\u90E8\u7684\u9AD8\uFF0C\u5982\u679C\u60F3\u8981\u751F\u6548\uFF0C\u5C31\u9700\u8981\u589E\u52A0\u6743\u91CD</p><p>2.\u79C1\u6709\u7EC4\u4EF6\u5F15\u7528\u79C1\u6709\u7EC4\u4EF6</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-57bc25a0</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">data-v-57bc25a0</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- v-button\u5047\u8BBE\u662F\u4E0A\u9762\u5B9A\u4E49\u7684\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-57bc25a0</span> <span class="token attr-name">data-v-2311c06a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-warp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">data-v-2311c06a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css"><pre><code>    <span class="token comment">/*button.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.button-warp[data-v-2311c06a]</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button[data-v-2311c06a]</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">border-radus</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*content.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.content[data-v-57bc25a0]</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content .button[data-v-57bc25a0]</span><span class="token punctuation">{</span>
    <span class="token property">border-raduis</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u51FA.content .button\u540E\u9762\u5C5E\u6027\u9009\u62E9\u5668\u91CC\u9762\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u662Fcontent\u7684data-v-id\uFF0C\u8FD9\u6837\u5C31\u65E0\u6CD5\u5F71\u54CD\u5230button.vue</p><ol start="3"><li></li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-57bc25a0</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">data-v-57bc25a0</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- v-button\u5047\u8BBE\u662F\u4E0A\u9762\u5B9A\u4E49\u7684\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-v-57bc25a0</span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button-warp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-css"><pre><code>    <span class="token comment">/*button.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.button-warp</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">border-radus</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*content.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.content[data-v-57bc25a0]</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content .button[data-v-57bc25a0]</span><span class="token punctuation">{</span>
    <span class="token property">border-raduis</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u79CD\u60C5\u51B5\u4E0E\u79C1\u6709\u7EC4\u4EF6\u5F15\u7528\u79C1\u6709\u7EC4\u4EF6\u7C7B\u4F3C\uFF0C\u51FA\u73B0\u4E86\u5C5E\u6027\u9009\u62E9\u5668\u51FA\u73B0\u6B63\u5728\u9009\u62E9\u5668\u8868\u8FBE\u5F0F\u70B9\u672B\u5C3E\uFF0C\u5BFC\u81F4\u6837\u5F0F\u65E0\u6CD5\u5BF9\u5B50\u7EC4\u4EF6\u5185\u90E8\u5143\u7D20\u751F\u6548</p><p>\u8FD9\u91CC\u53EF\u4EE5\u589E\u52A0\u4E00\u4E2A\u4E0D\u5E26scoped\u7684style\u548Cscoped\u7684style\u5171\u5B58\uFF0C\u6765\u5728\u666E\u901A\u7684style\u4E2D\u53BB\u5168\u5C40\u6837\u5F0F\u6765\u6539\u53D8,\u4F46\u662F\u8FD9\u6837\u4E5F\u4E0D\u4F18\u96C5\uFF0C\u4E3A\u4E86\u907F\u514D\u5168\u5C40\u6C61\u67D3\u9700\u8981\u5B9A\u4E49\u597D\u5168\u5C40\u6837\u5F0F\u540D\u79F0</p><p>\u603B\u7ED3\uFF1A</p><pre><code>1.\u7EC4\u4EF6\u7684style\u52A0\u5165\u4E86scoped\u540E\uFF0C\u7EC4\u4EF6\u7684\u6240\u6709\u5143\u7D20\u90FD\u4F1A\u52A0\u4E00\u4E2A\u552F\u4E00\u7684data-v-id\u5C5E\u6027\uFF0C\u5C5E\u6027\u9009\u62E9\u4F1A\u88AB\u52A0\u5165\u5230\u8868\u8FBE\u5F0F\u672B\u5C3E\uFF0C\u540C\u65F6\u8FD9\u4E2A\u81EA\u5B9A\u4E49\u5C5E\u6027\u4F1A\u4F5C\u7528\u5230\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u4E0A

2.\u56E0\u4E3A\u79C1\u6709\u7EC4\u4EF6\u4F1A\u628A\u5C5E\u6027\u9009\u62E9\u5668\u52A0\u5230CSS\u8868\u8FBE\u5F0F\u672B\u7AEF\uFF0C\u5BFC\u81F4CSS\u65E0\u6CD5\u9009\u62E9\u5230\u5B50\u7EC4\u4EF6\u5185\u90E8\u5143\u7D20\uFF0C\u6240\u4EE5\u4E00\u4E2A\u731C\u60F3\u662F\u628A\u5C5E\u6027\u9009\u62E9\u5668\u79FB\u81F3\u7236\u7EA7\u9009\u62E9\u5668\u672B\u7AEF\uFF0C\u800C\u4E0D\u662F\u8868\u8FBE\u5F0F\u672B\u7AEF\u6765\u5B9E\u73B0css\u6837\u5F0F\u79C1\u6709\u5316\u4E0E\u6837\u5F0F\u4F5C\u7528\u5230\u5B50\u5143\u7D20\u7684\u6548\u679C
</code></pre><p>\u7B2C\u4E8C\u70B9\u603B\u7ED3\u7684vue-loader\u8BED\u6CD5\u652F\u6301</p><p>\u6DF1\u5EA6\u9009\u62E9\u5668\uFF1A</p><pre><code>&gt;&gt;&gt;
</code></pre><div class="language-javascript"><pre><code>    <span class="token comment">//content.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;content&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;title&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> v<span class="token operator">-</span>button\u5047\u8BBE\u662F\u4E0A\u9762\u5B9A\u4E49\u7684\u7EC4\u4EF6 <span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>v<span class="token operator">-</span>button<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>v<span class="token operator">-</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">...</span>
<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>content<span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 1200px<span class="token punctuation">;</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>content <span class="token operator">&gt;&gt;&gt;</span> <span class="token punctuation">.</span>button<span class="token punctuation">{</span>
        border<span class="token operator">-</span>raduis<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre></div><p>\u4E0A\u8FF0css\u6E32\u67D3\u7ED3\u679C\uFF1A</p><div class="language-css"><pre><code>    <span class="token comment">/*button.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.button-warp[data-v-2311c06a]</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button[data-v-2311c06a]</span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token property">border-radus</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*content.vue\u6E32\u67D3\u51FA\u6765\u7684css*/</span>
<span class="token selector">.content[data-v-57bc25a0]</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content[data-v-57bc25a0] .button</span><span class="token punctuation">{</span>
    <span class="token property">border-raduis</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\u5728\u8868\u8FBE\u5F0F\u4E2D\u7236\u7EA7\u7ED3\u675F\u9009\u62E9\u5668.content\u8FD9\u91CC\u4F7F\u7528\u4E86\u6DF1\u5EA6\u9009\u62E9\u5668\u6765\u5B9E\u73B0\u4E86\u5C5E\u6027\u9009\u62E9\u5668\u7684\u79FB\u52A8\uFF0C\u8FBE\u5230\u4E86\u4FEE\u6539\u5B50\u7EC4\u4EF6\u6837\u5F0F\u7684\u6548\u679C\uFF0C\u5F53\u7136\uFF0C\u5B9E\u9645\u9879\u76EE\u4E2D\u6211\u8BB0\u5F97vue-loader 10.x\u597D\u50CF\u662F\u4E0D\u5B8C\u5168\u652F\u6301&gt;&gt;&gt;\uFF0C\u8FD9\u91CC\u5C31\u8981\u5927\u5BB6\u5347\u7EA7\u4E00\u4E0B\u9879\u76EE\u7684vue-loader\u4E86\u3002</p><p>\u4EE5\u4E0B\u9644\u4E0A\u672C\u4EBA\u5728\u9879\u76EE\u4E2D\u4F7F\u7528element-UI\u548Cvux\u8FD9\u4E24\u4E2A\u5206\u522B\u5728pc\u7AEF\u548C\u624B\u673A\u7AEF\u53D7\u5BA0\u7684vue\u6846\u67B6\uFF0C\u6211\u67E5\u770B\u4E86\u8FD9\u4E24\u8005\u7684\u7EC4\u4EF6\u6E90\u7801\uFF0C\u4ED6\u4EEC\u90FD\u6CA1\u4F7F\u7528scoped\u8FD9\u79CD\u65B9\u6CD5\u79C1\u6709\u5316\u6837\u5F0F\uFF0C\u6240\u4EE5\u53EF\u4EE5\u91C7\u7528\u4E0B\u9762\u7684\u65B9\u6CD5\uFF1A</p><pre><code>1.\u6837\u5F0F\u5C11\uFF1A

\u76F4\u63A5\u5728\u7EC4\u4EF6\u4E0A\u5199\u4E00\u4E2Astyle\u5185\u8054\u6807\u7B7E

2.\u6837\u5F0F\u591A

\u7EC4\u4EF6\u4E0A\u5199\u4E00\u4E2Aclass\u8FDB\u884Cstyle\u7684\u96C6\u5408\u914D\u7F6E

3.scoped\u7684style\u4FEE\u6539\u5B50\u7EC4\u4EF6\u6837\u5F0F

\u5728\u5B50class\u548C\u7236class\u4E4B\u95F4\u63D2\u5165\u4E00\u4E2A&gt;&gt;&gt;\u6DF1\u5EA6\u9009\u62E9\u5668\u6765\u5B9E\u73B0\u5C5E\u6027\u9009\u62E9\u5668\u7684\u79FB\u4F4D
</code></pre>`,45),e=[o];function c(l,u,k,r,i,g){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{v as __pageData,m as default};
