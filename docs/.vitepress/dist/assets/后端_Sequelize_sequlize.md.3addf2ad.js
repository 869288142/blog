import{_ as n,c as s,o as a,a as t}from"./app.a3c81315.js";const m='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"\u540E\u7AEF/Sequelize/sequlize.md"}',p={},e=t(`<p>sequelize // \u5B9A\u4E49\u6A21\u578B // \u4E3B\u952E id \u6570\u5B57 \u81EA\u589E // \u5916\u952E // \u4E00\u822C\u5217 \u540D\u79F0 \u7C7B\u578B // \u5E38\u89C1\u7C7B\u578B</p><table><thead><tr><th style="text-align:center;">sequelize</th><th style="text-align:center;">datatype</th></tr></thead><tbody><tr><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><div class="language-js"><pre><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token parameter">app</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u53D6\u51FA\u9700\u8981\u7C7B\u578B</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token constant">STRING</span><span class="token punctuation">,</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token constant">DATE</span> <span class="token punctuation">}</span> <span class="token operator">=</span> app<span class="token punctuation">.</span>Sequelize<span class="token punctuation">;</span>

  
  <span class="token keyword">const</span> User <span class="token operator">=</span> app<span class="token punctuation">.</span>model<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">INTEGER</span><span class="token punctuation">,</span> <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token constant">STRING</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token constant">INTEGER</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">timestamps</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">freezeTableName</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> User<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>//\u8FBE\u6210\u76EE\u7684\u4E3A\u4FBF\u5229 \u6574\u6570 \u770B\u6570\u636E\u6700\u5927\u503C\u51B3\u5B9A \u9ED8\u8BA4 INTEGER</p><p>\u5C0F\u6570 \u770B\u6570\u636E\u5927\u5C0F\u548C\u7CBE\u5EA6\u51B3\u5B9A \u5B9A\u70B9\u6570 DECIMAL NUMERIC \u4FDD\u8BC1\u786E\u5B9A\u7CBE\u5EA6 \u5373\u5C0F\u6570\u4F4D \u9ED8\u8BA4 \u6D6E\u70B9\u6570 FLOAT DOUBLE \u4F1A\u51FA\u73B0\u8BEF\u5DEE</p><p>\u5B57\u7B26\u4E32 CHAR \u6548\u7387\u9AD8 \u53D6\u51FA\u65F6\u4F1A\u5E26\u4E0A\u4E0D\u8DB3\u4F4D\u4E0A\u7684\u7A7A\u683C \u9ED8\u8BA4 VARCHAR \u5360\u7528\u7A7A\u95F4\u5C0F</p><p>\u4F7F\u7528sequelize.sync\u540C\u6B65model \u8868\u4F1A\u6309\u7167\u7279\u5B9A\u987A\u5E8F\u521B\u5EFA \u53EF\u80FD\u4F1A\u51FA\u73B0\u5FAA\u574F\u5F15\u7528</p><div class="language-ts"><pre><code><span class="token keyword">const</span> Document <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;document&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  author<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Version <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;version&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  timestamp<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">DATE</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Document<span class="token punctuation">.</span><span class="token function">hasMany</span><span class="token punctuation">(</span>Version<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u5C06 documentId \u5C5E\u6027\u6DFB\u52A0\u5230 version</span>
Document<span class="token punctuation">.</span><span class="token function">belongsTo</span><span class="token punctuation">(</span>Version<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&#39;Current&#39;</span><span class="token punctuation">,</span>
  foreignKey<span class="token operator">:</span> <span class="token string">&#39;currentVersionId&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD9\u5C06 currentVersionId \u5C5E\u6027\u6DFB\u52A0\u5230 document</span>
</code></pre></div><p>\u4F46\u662F\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u5C06\u5BFC\u81F4\u4EE5\u4E0B\u9519\u8BEF: Cyclic dependency found. documents is dependent of itself. Dependency chain: documents -&gt; versions =&gt; documents.</p><p>\u89E3\u51B3\u65B9\u6848\uFF1A \u4E3A\u4E86\u7F13\u89E3\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5411\u5176\u4E2D\u4E00\u4E2A\u5173\u8054\u4F20\u9012 constraints: false\uFF1A</p><div class="language-ts"><pre><code>Document<span class="token punctuation">.</span><span class="token function">hasMany</span><span class="token punctuation">(</span>Version<span class="token punctuation">)</span><span class="token punctuation">;</span>
Document<span class="token punctuation">.</span><span class="token function">belongsTo</span><span class="token punctuation">(</span>Version<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&#39;Current&#39;</span><span class="token punctuation">,</span>
  foreignKey<span class="token operator">:</span> <span class="token string">&#39;currentVersionId&#39;</span><span class="token punctuation">,</span>
  constraints<span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0D\u8BBE\u7F6E\u5916\u952E\u7EA6\u675F</p><div class="language-ts"><pre><code><span class="token keyword">const</span> Trainer <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;trainer&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Series \u5C06\u6709\u4E00\u4E2A trainerId = Trainer.id \u5916\u53C2\u8003\u952E</span>
<span class="token comment">// \u4E4B\u540E\u6211\u4EEC\u8C03\u7528 Trainer.hasMany(series)</span>
<span class="token keyword">const</span> Series <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;series&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
  subTitle<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">TEXT</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7528 \`Trainer\` \u8BBE\u7F6E\u5916\u952E\u5173\u7CFB\uFF08hasMany\uFF09</span>
  trainerId<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    references<span class="token operator">:</span> <span class="token punctuation">{</span>
      model<span class="token operator">:</span> Trainer<span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Video \u5C06\u6709 seriesId = Series.id \u5916\u53C2\u8003\u952E</span>
<span class="token comment">// \u4E4B\u540E\u6211\u4EEC\u8C03\u7528 Series.hasOne(Video)</span>
<span class="token keyword">const</span> Video <span class="token operator">=</span> sequelize<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">&#39;video&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">STRING</span><span class="token punctuation">,</span>
  sequence<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">TEXT</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7528 \`Series\` \u8BBE\u7F6E\u5173\u7CFB(hasOne) </span>
  seriesId<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    references<span class="token operator">:</span> <span class="token punctuation">{</span>
      model<span class="token operator">:</span> Series<span class="token punctuation">,</span> <span class="token comment">// \u65E2\u53EF\u4EE5\u662F\u8868\u793A\u8868\u540D\u7684\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F Sequelize \u6A21\u578B</span>
      key<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Series<span class="token punctuation">.</span><span class="token function">hasOne</span><span class="token punctuation">(</span>Video<span class="token punctuation">)</span><span class="token punctuation">;</span>
Trainer<span class="token punctuation">.</span><span class="token function">hasMany</span><span class="token punctuation">(</span>Series<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5173\u8054 \u4E3A\u4E86\u8054\u5408\u67E5\u8BE2(join)</p><p>\u5148\u5728\u6A21\u578B\u5B9A\u4E49\u5916\u952E</p><div class="language-ts"><pre><code>trainerId<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> Sequelize<span class="token punctuation">.</span><span class="token constant">INTEGER</span><span class="token punctuation">,</span>
    references<span class="token operator">:</span> <span class="token punctuation">{</span>
      model<span class="token operator">:</span> Trainer<span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token string">&#39;id&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre></div><p>\u7136\u540E\u624B\u52A8\u5173\u8054</p><p>\u5173\u8054 \u4E00\u5BF9\u4E00 \u4E00\u4E0B\u4E24\u8005\u5728\u9700\u8981\u8C03\u7528\u5173\u8054\u7684\u65F6\u5019\u589E\u52A0\u5373\u53EF BelongsTo \u5728\u8C03\u7528\u6A21\u578B\u63D2\u5165\u5916\u952E \u5916\u952E\u5728source HasOne \u5728\u53C2\u6570\u6A21\u578B\u63D2\u5165\u5916\u952E \u5916\u952E\u5728target \u4E00\u5BF9\u591A source.hasMany(target)</p>`,18),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
