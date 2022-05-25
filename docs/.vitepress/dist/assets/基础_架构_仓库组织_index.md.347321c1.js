import{_ as a,c as e,o as n,a as s}from"./app.a3c81315.js";const m='{"title":"Monorepos","description":"","frontmatter":{},"headers":[{"level":2,"title":"Monorepos\u597D\u5904","slug":"monorepos\u597D\u5904"},{"level":2,"title":"Monorepos\u574F\u5904","slug":"monorepos\u574F\u5904"},{"level":2,"title":"Yarn Workspace-\u66F4\u597D\u5730\u7BA1\u7406\u4F9D\u8D56","slug":"yarn-workspace-\u66F4\u597D\u5730\u7BA1\u7406\u4F9D\u8D56"},{"level":3,"title":"\u914D\u7F6Eworkspace","slug":"\u914D\u7F6Eworkspace"},{"level":3,"title":"\u5E38\u89C1\u64CD\u4F5C","slug":"\u5E38\u89C1\u64CD\u4F5C"},{"level":2,"title":"\u4F7F\u7528learn\u7BA1\u7406\u5B50\u5305\u53D1\u5E03","slug":"\u4F7F\u7528learn\u7BA1\u7406\u5B50\u5305\u53D1\u5E03"}],"relativePath":"\u57FA\u7840/\u67B6\u6784/\u4ED3\u5E93\u7EC4\u7EC7/index.md"}',o={},p=s(`<h1 id="monorepos" tabindex="-1">Monorepos <a class="header-anchor" href="#monorepos" aria-hidden="true">#</a></h1><p><code>Monorepos</code>\u662F\u6307\u4E00\u4E2A\u4ED3\u5E93\u4E0B\u540C\u65F6\u7BA1\u7406\u591A\u4E2A\u5305\u7684\u4E00\u79CD\u4EE3\u7801\u7EC4\u7EC7\u65B9\u5F0F</p><h2 id="monorepos\u597D\u5904" tabindex="-1">Monorepos\u597D\u5904 <a class="header-anchor" href="#monorepos\u597D\u5904" aria-hidden="true">#</a></h2><ul><li><p>\u7BA1\u7406\u8C03\u8BD5\u65B9\u4FBF\uFF0C\u4E0D\u9700\u8981\u6253\u5F00\u591A\u4E2A\u4ED3\u5E93\uFF0C\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528<code>npm link</code></p></li><li><p>\u4FBF\u4E8E\u7BA1\u7406\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E0D\u9700\u8981\u53D8\u52A8\u540E\u624B\u52A8\u53BB\u66F4\u65B0\u4F9D\u8D56\u7684\u9879\u76EE</p></li><li><p>\u7EDF\u4E00\u7B2C\u4E09\u65B9\u4F9D\u8D56\uFF0C\u540C\u65F6\u5360\u7528\u7A7A\u95F4\u5C0F</p></li></ul><h2 id="monorepos\u574F\u5904" tabindex="-1">Monorepos\u574F\u5904 <a class="header-anchor" href="#monorepos\u574F\u5904" aria-hidden="true">#</a></h2><ul><li><p>\u4EE3\u7801\u91CF\u5BB9\u6613\u975E\u5E38\u5927\uFF0C\u964D\u4F4E\u7F16\u8BD1\u548C\u4EE3\u7801\u7BA1\u7406\u6548\u7387</p></li><li><p>\u5904\u7406\u5355\u4E2A\u5305\u7684git\u64CD\u4F5C\u6BD4\u8F83\u9EBB\u70E6</p></li></ul><h2 id="yarn-workspace-\u66F4\u597D\u5730\u7BA1\u7406\u4F9D\u8D56" tabindex="-1">Yarn Workspace-\u66F4\u597D\u5730\u7BA1\u7406\u4F9D\u8D56 <a class="header-anchor" href="#yarn-workspace-\u66F4\u597D\u5730\u7BA1\u7406\u4F9D\u8D56" aria-hidden="true">#</a></h2><p>\u5728<code>yarn</code>\u63A8\u51FA<code>node_modules</code>\u6241\u5E73\u5316\u7EC4\u7EC7\u540E\uFF0C<code>yarn workspace</code>,\u672C\u8D28\u4E0A\u662F\u9879\u76EE\u7EA7\u522B\u7684\u4EE3\u7801\u6241\u5E73\u5316\u7BA1\u7406</p><h3 id="\u914D\u7F6Eworkspace" tabindex="-1">\u914D\u7F6Eworkspace <a class="header-anchor" href="#\u914D\u7F6Eworkspace" aria-hidden="true">#</a></h3><p><strong>package.json</strong></p><div class="language-json"><pre><code><span class="token comment">// \u5FC5\u987B</span>
<span class="token property">&quot;private&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token comment">// \u6307\u5B9Apackages\u76EE\u5F55</span>
<span class="token property">&quot;workspaces&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;packages/*&quot;</span><span class="token punctuation">]</span> 
</code></pre></div><h3 id="\u5E38\u89C1\u64CD\u4F5C" tabindex="-1">\u5E38\u89C1\u64CD\u4F5C <a class="header-anchor" href="#\u5E38\u89C1\u64CD\u4F5C" aria-hidden="true">#</a></h3><p>workspace\u7684\u64CD\u4F5C\u5C31\u662F\u5728yarn \u540E\u9762\u8DDF\u7740workspace \u5173\u952E\u5B57\uFF0C\u4EE3\u8868\u64CD\u4F5C\u5DE5\u4F5C\u7A7A\u95F4\uFF0C\u5982\u4E0B:</p><div class="language-shell"><pre><code><span class="token comment"># \u6839\u76EE\u5F55\u5B89\u88C5</span>
<span class="token function">yarn</span> packageName  <span class="token function">add</span> axios
<span class="token comment"># \u4E3ApackageName\u5305\u5B89\u88C5axios</span>
<span class="token function">yarn</span> workspace packageName <span class="token function">add</span> axios

<span class="token comment"># \u8FD0\u884C\u5355\u4E2A\u547D\u4EE4</span>
<span class="token function">yarn</span> workspace packageName run dev
<span class="token comment"># \u5168\u90E8\u5B50\u5305\u8FD0\u884C\u6B64\u547D\u4EE4</span>
<span class="token function">yarn</span> workspace run dev 
</code></pre></div><h2 id="\u4F7F\u7528learn\u7BA1\u7406\u5B50\u5305\u53D1\u5E03" tabindex="-1">\u4F7F\u7528learn\u7BA1\u7406\u5B50\u5305\u53D1\u5E03 <a class="header-anchor" href="#\u4F7F\u7528learn\u7BA1\u7406\u5B50\u5305\u53D1\u5E03" aria-hidden="true">#</a></h2>`,15),r=[p];function t(c,l,i,d,h,k){return n(),e("div",null,r)}var _=a(o,[["render",t]]);export{m as __pageData,_ as default};
