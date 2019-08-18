(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{259:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"借用函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#借用函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 借用函数")]),t._v(" "),s("h2",{attrs:{id:"缘由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缘由","aria-hidden":"true"}},[t._v("#")]),t._v(" 缘由")]),t._v(" "),s("p",[t._v("JavaScript在很多地方采用了原型模式来保存方法，有些方法在规范之初，被故意设计成不限于该类型所使用，而是通用的")]),t._v(" "),s("h2",{attrs:{id:"一个例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个例子","aria-hidden":"true"}},[t._v("#")]),t._v(" 一个例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在过去ES5中，我们常常使用arguments来操作函数接受的实参，但是我们需要一些数组的操作，将arguments转换为真正的数组")]),t._v(" "),s("p",[t._v("我们可以看一下ECMAScript规范\n"),s("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1361028/201906/1361028-20190605234552277-1778207546.png",alt:""}})]),t._v(" "),s("p",[t._v("可以看到规范中描述大体可以概括将start和end之间的元素迭代到一个新建的数组中，而不限于迭代对象是谁")]),t._v(" "),s("h2",{attrs:{id:"借用形式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#借用形式","aria-hidden":"true"}},[t._v("#")]),t._v(" 借用形式")]),t._v(" "),s("h3",{attrs:{id:"原型借用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型借用","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型借用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("strong",[t._v("每次都要写明方法所在的原型，太繁琐了")])]),t._v(" "),s("h3",{attrs:{id:"字面值借用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字面值借用","aria-hidden":"true"}},[t._v("#")]),t._v(" 字面值借用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" slice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slice\nslice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call\n")])])]),s("p",[s("strong",[t._v("虽然少了长度，但是新建的实例优点浪费,保存起来还是得call")])]),t._v(" "),s("h3",{attrs:{id:"绑定方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绑定方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 绑定方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" slice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("通过上述过程,call的this值被固定为Array.prototype.slice，调用方法时相当于Array.prototype.slice.call(context,args)")])])])}],!1,null,null,null);a.default=r.exports}}]);