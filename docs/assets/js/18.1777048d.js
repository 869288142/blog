(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{278:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"block-inline-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-inline-block","aria-hidden":"true"}},[t._v("#")]),t._v(" block inline-block")]),t._v(" "),s("h2",{attrs:{id:"缘由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缘由","aria-hidden":"true"}},[t._v("#")]),t._v(" 缘由")]),t._v(" "),s("p",[t._v("平时我们需要让一个块级元素在同一行显示时，都会写display: inline-block,为啥呢？")]),t._v(" "),s("p",[t._v("啊啊啊，在之前看到一个完美的解析，然后现在找不到了")]),t._v(" "),s("h2",{attrs:{id:"先看看block、inline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#先看看block、inline","aria-hidden":"true"}},[t._v("#")]),t._v(" 先看看block、inline")]),t._v(" "),s("p",[t._v("块级元素 不是单指display block 而是指会自动换行的元素")]),t._v(" "),s("p",[t._v("内联元素 不是单指display inline 而是指不会换行的元素")]),t._v(" "),s("h2",{attrs:{id:"inline-block的由来"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-block的由来","aria-hidden":"true"}},[t._v("#")]),t._v(" inline-block的由来")]),t._v(" "),s("p",[t._v("想想没有inline-block，我们如何控制inline的宽度、和高度,好吧，我暂时也没想到使用什么办法。")]),t._v(" "),s("h2",{attrs:{id:"inline-block的解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-block的解释","aria-hidden":"true"}},[t._v("#")]),t._v(" inline-block的解释")]),t._v(" "),s("p",[t._v("块级元素可以设置宽度")]),t._v(" "),s("p",[t._v("内联元素可以在同一行显示")]),t._v(" "),s("p",[t._v("如何用两者的概念来解释inline-block的行为，一个可以设置宽度并且可以在一行的元素，嗯，解析清楚了，那么问题是，规范要如何设定呢，"),s("strong",[t._v("两个不相容的东西要组合一个新的东西，具有两者特性，一个答案就是把两者的规范混入，比如说用两个盒子解释，外部盒子负责是否换行显示，内部盒子负责元素的宽度，那么inline-blcok就很容易解释其行为了")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"inline-block间距处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inline-block间距处理","aria-hidden":"true"}},[t._v("#")]),t._v(" inline-block间距处理")]),t._v(" "),s("p",[t._v("1.拆行  这个对代码可读性影响很大，慎用，况且代码被format一下，出问题也不知道")]),t._v(" "),s("p",[t._v("2.无闭合标签写法")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("space"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("##"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("惆怅\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("##"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("淡定\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("##"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("热血"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("3.font-size 0")]),t._v(" "),s("p",[t._v("4.待续")])])}],!1,null,null,null);a.default=e.exports}}]);