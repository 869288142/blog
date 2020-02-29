(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{341:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"借用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借用函数"}},[t._v("#")]),t._v(" 借用函数")]),t._v(" "),a("h2",{attrs:{id:"缘由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缘由"}},[t._v("#")]),t._v(" 缘由")]),t._v(" "),a("p",[t._v("JavaScript在很多地方采用了原型模式来保存方法，有些方法在规范之初，被故意设计成不限于该类型所使用，而是通用的")]),t._v(" "),a("h2",{attrs:{id:"一个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个例子"}},[t._v("#")]),t._v(" 一个例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在过去ES5中，我们常常使用arguments来操作函数接受的实参，但是我们需要一些数组的操作，将arguments转换为真正的数组")]),t._v(" "),a("p",[t._v("我们可以看一下ECMAScript规范\n"),a("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1361028/201906/1361028-20190605234552277-1778207546.png",alt:""}})]),t._v(" "),a("p",[t._v("可以看到规范中描述大体可以概括将start和end之间的元素迭代到一个新建的数组中，而不限于迭代对象是谁")]),t._v(" "),a("h2",{attrs:{id:"借用形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#借用形式"}},[t._v("#")]),t._v(" 借用形式")]),t._v(" "),a("h3",{attrs:{id:"原型借用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原型借用"}},[t._v("#")]),t._v(" 原型借用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("每次都要写明方法所在的原型，太繁琐了")])]),t._v(" "),a("h3",{attrs:{id:"字面值借用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字面值借用"}},[t._v("#")]),t._v(" 字面值借用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" slice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slice\nslice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("call\n")])])]),a("p",[a("strong",[t._v("虽然少了长度，但是新建的实例优点浪费,保存起来还是得call")])]),t._v(" "),a("h3",{attrs:{id:"绑定方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定方法"}},[t._v("#")]),t._v(" 绑定方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" slice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("通过上述过程,call的this值被固定为Array.prototype.slice，调用方法时相当于Array.prototype.slice.call(context,args)")])])])}),[],!1,null,null,null);s.default=r.exports}}]);