(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{303:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content"}},[t._v("#")]),t._v(" content")]),t._v(" "),s("h2",{attrs:{id:"content与替换元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content与替换元素"}},[t._v("#")]),t._v(" content与替换元素")]),t._v(" "),s("h3",{attrs:{id:"替换元素定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换元素定义"}},[t._v("#")]),t._v(" 替换元素定义")]),t._v(" "),s("p",[t._v("替换元素 - 通过修改某个属性值呈现的内容就可以被替换的元素，如img object video iframe textarea input")]),t._v(" "),s("h3",{attrs:{id:"替换元素特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换元素特点"}},[t._v("#")]),t._v(" 替换元素特点")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("内容外观不受页面上的CSS影响，如需修改需要浏览器暴露的接口或者类似apprearance属性等")])]),t._v(" "),s("li",[s("p",[t._v("有自己的尺寸，即没有明确尺寸下，有一个默认尺寸")])]),t._v(" "),s("li",[s("p",[t._v("在很多CSS属性上有自己的表现规则。比如vertical-align")])])]),t._v(" "),s("h3",{attrs:{id:"替换元素尺寸计算规则-优先级从下往上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换元素尺寸计算规则-优先级从下往上"}},[t._v("#")]),t._v(" 替换元素尺寸计算规则(优先级从下往上)")]),t._v(" "),s("ol",[s("li",[t._v("固有尺寸 替换内容原本的尺寸")]),t._v(" "),s("li",[t._v("HTML尺寸 只能通过HTML原生属性改变")]),t._v(" "),s("li",[t._v("CSS尺寸")])]),t._v(" "),s("h2",{attrs:{id:"content特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content特性"}},[t._v("#")]),t._v(" content特性")]),t._v(" "),s("ol",[s("li",[t._v("content生成的文本无法选中无法复制，无法被屏幕阅读器读取，也无法被搜索引擎抓取，替换视觉层，而非内容本身。")]),t._v(" "),s("li",[t._v("empty伪类无效，无法识别content是否有内容")]),t._v(" "),s("li",[t._v("content动态生成值无法获取")])]),t._v(" "),s("h2",{attrs:{id:"content-内容生成技术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#content-内容生成技术"}},[t._v("#")]),t._v(" content 内容生成技术")]),t._v(" "),s("ol",[s("li",[t._v("清除浮动")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clear:after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[s("p",[t._v("content字符内容生成\n配合@font-face规则生成图标字体效果")])]),t._v(" "),s("li",[s("p",[t._v("content图片生成\n利用background-image插入图片，更适合base64")])]),t._v(" "),s("li",[s("p",[t._v("了解content开启闭合符号生成\n利用open-quote、close-quote,可以做到变量控制前后符号，但是用处不大")])]),t._v(" "),s("li",[s("p",[t._v("content attr属性值内容生成")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img::after")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 原生和自定义都可以 */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("alt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);