(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{258:function(s,t,a){"use strict";a.r(t);var r=a(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[s._v("#")]),s._v(" string")]),s._v(" "),a("p",[s._v("字符串的概念早就深入我们的思维，因为日常我们接触的最多的就是文本，所以对字符串特别熟悉，一看到需要的是字符串，我们就能联想到字符串这个类型去存储它。")]),s._v(" "),a("h2",{attrs:{id:"字符串用途"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串用途","aria-hidden":"true"}},[s._v("#")]),s._v(" 字符串用途")]),s._v(" "),a("p",[s._v("暂时想到就是，用于存储字符，这个太常见了，等以后有了新的理解再展开。")]),s._v(" "),a("h2",{attrs:{id:"字符串的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串的理解","aria-hidden":"true"}},[s._v("#")]),s._v(" 字符串的理解")]),s._v(" "),a("p",[s._v("字符串通常提供了索引访问方式，比如charAt(i),但是其内部是不是数组不好说，"),a("strong",[s._v("但是字符串本身是不可变的，每次修改都会返回新的字符串。")])]),s._v(" "),a("h2",{attrs:{id:"字符串检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串检测","aria-hidden":"true"}},[s._v("#")]),s._v(" 字符串检测")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v("\n")])])]),a("h2",{attrs:{id:"字符串定义方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串定义方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 字符串定义方式")]),s._v(" "),a("p",[s._v('在很长一段时间，js定义字符串只有""这种方式')]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"something"')]),s._v("\n")])])]),a("p",[s._v("但是，我们更多的常见，是需要动态拼接字符串，而这种方式，带来了许多问题,了解过java的同学可能都知道，"),a("strong",[s._v("字符串是不可变的，使用 + 号连接字符串，不是在原先的字符串上操作，而是产生了一个新的字符串")]),s._v("，这有两个问题")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fun("')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('")"')]),s._v("  \n")])])]),a("p",[s._v("上面是一个简单的例子，但是其已经展示了+号拼接字符串带来的噪音，可以看到使用+，"),a("strong",[s._v('无论在阅读或者修改时，都需要关心+号拼接导致的多子段字符串带来的""影响，尤其在更复杂的拼接情况下，带来的噪音更加大，几乎导致维护困难')])]),s._v(" "),a("h2",{attrs:{id:"不如让解释器帮我们拼接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不如让解释器帮我们拼接","aria-hidden":"true"}},[s._v("#")]),s._v(" 不如让解释器帮我们拼接")]),s._v(" "),a("p",[s._v("+号是刚开始解释器与我们的一个约定，而且在js中，+号的规则还有点小复杂，我们能重新与解释器约定新的语法吗，"),a("strong",[s._v('移除这种+号和""带来的代码可读性的降低')])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`fun( ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("  )`")])]),s._v("\nstr  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])])]),a("p",[s._v("通过新的语法，"),a("strong",[s._v('我们移除了拼接的+和多余的""，使得嵌入的字符串变量尤为清晰')]),s._v("，新的语法好处不止如此，记得我们上面说的+号导致的多次创建临时变量问题，也得以解决，解"),a("strong",[s._v("释器在解释模板字符串时，会将整个模板交给解释器默认的解析函数，将里面的变量解析后得到一个字符串，没有多次创建临时字符串的问题，性能非常之高，附上专业的性能测试数据，模板字符串比普通拼接快83%,可以预见，越复杂的字符串场景，收益越大")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://i.bmp.ovh/imgs/2019/09/0dc8cd5efbd72ab8.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"模板字符串另一好处-减少转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板字符串另一好处-减少转义","aria-hidden":"true"}},[s._v("#")]),s._v(" 模板字符串另一好处----- 减少转义")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("template "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"<div class=''></div> \"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"<div class=''></div> \"")]),s._v("\n")])])]),a("p",[s._v('虽然现在脚手架都普及到随便找个教程都能起飞了，但是总会使用到使用Vue.component注册组件的情况，emmm，这时候使用老的+号，拼接，导致每行都需要""作为包装，而因为""的包裹，DOM的双引号属性都需要进行转义，'),a("strong",[s._v('有""和转义的干扰，导致这个模板看起来极度恶心，一不小心就会Vue告诉你没有闭合标签，还要找半天，这都是+号拼接引起的问题')]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("template "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v("`<div class=''></div>  \n            <div class=''></div> `")])]),s._v("\n")])])]),a("p",[a("strong",[s._v('改用模板字符串后，多余的""和转义都不见了，就像在写.vue一样模板很清晰，很舒服，就是少了个高亮，哪天有人写个这种特殊场景的高亮，就更舒服了')])]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[a("strong",[s._v("模板字符串的出现，使用字符串的可读性、可维护性大大提高，建议无脑直接使用")]),s._v("，避免后期由于字符串扩展导致需要变更定义方式，当然，这边笔者也会大量使用，如果有其他坑，会及时更新。")])])}],!1,null,null,null);t.default=e.exports}}]);