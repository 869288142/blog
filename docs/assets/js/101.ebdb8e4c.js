(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{247:function(s,t,n){"use strict";n.r(t);var a=n(0),e=Object(a.a)({},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),n("p",[s._v("哦豁，找不到变量，意料之外")]),s._v(" "),n("p",[s._v("我发现犯了一个错误，没导入，@import 'path/to/file.scss'，不过这样的话，每个.vue文件导入起来很麻烦，我们需要一种导入然后默认在.vue导入使用，比较方便")]),s._v(" "),n("p",[s._v("暂时没研究原理，在"),n("a",{attrs:{href:"https://cli.vuejs.org/zh/config/#css-loaderoptions",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方配置手册"),n("OutboundLink")],1),s._v("找到了解决方案")]),s._v(" "),n("p",[s._v("根目录下新建vue.config.js")]),s._v(" "),s._m(2)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"传递scss全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传递scss全局变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 传递scss全局变量")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当我们尝试在一个scss文件中定义全局变量然后在.vue文件中使用的时候\n"),t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190226195702447-1326998466.png",alt:""}})])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaderOptions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 给 sass-loader 传递选项")]),s._v("\n      sass"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// @/ 是 src/ 的别名")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 所以这里假设你有 `src/variables.scss` 这个文件")]),s._v("\n        data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[s._v('`@import "@/variables.scss";`')])]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])}],!1,null,null,null);t.default=e.exports}}]);