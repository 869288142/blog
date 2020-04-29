(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{205:function(t,s,a){"use strict";a.r(s);var n=a(28),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[t._v("#")]),t._v(" 指令")]),t._v(" "),a("h2",{attrs:{id:"场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),a("p",[t._v("Vue推崇数据驱动视图，而不是直接操作DOM，为了处理一些可复用的DOM逻辑，提供了指令这样的复用机制")]),t._v(" "),a("h2",{attrs:{id:"基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[t._v("#")]),t._v(" 基本语法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    doSomething\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用v-name")]),t._v("\n")])])]),a("h3",{attrs:{id:"hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hook"}},[t._v("#")]),t._v(" hook")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("bind")]),t._v("：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("inserted")]),t._v("：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("update")]),t._v("：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("componentUpdated")]),t._v("：指令所在组件的 VNode 及其子 VNode 全部更新后调用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("unbind")]),t._v("：只调用一次，指令与元素解绑时调用。")])])]),t._v(" "),a("h3",{attrs:{id:"hook函数传入参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hook函数传入参数"}},[t._v("#")]),t._v(" hook函数传入参数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("el")]),t._v(" 指令作用的DOM")]),t._v(" "),a("li",[a("strong",[t._v("binding")]),t._v(" 对象")]),t._v(" "),a("li",[a("strong",[t._v("vnode")]),t._v(" 编译生成的虚拟节点")]),t._v(" "),a("li",[a("strong",[t._v("oldVnode")]),t._v(" 编译生成的旧节点")])]),t._v(" "),a("p",[a("strong",[t._v("bind对象")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name 指令名称 不包含v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("前缀 \n\n  arg 指令参数 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n  modifiers 修饰符对象 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n  expression 指令表达式字符串形式 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n\n  value 指令绑定值 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"设计理念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计理念"}},[t._v("#")]),t._v(" 设计理念")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将脏DOM操作封装到指令中")])]),t._v(" "),a("li",[a("p",[t._v("自动提供DOM的生命周期来避免维护事件状态")])])]),t._v(" "),a("h2",{attrs:{id:"源码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[t._v("#")]),t._v(" 源码分析")]),t._v(" "),a("p",[t._v("指令主要价值点在于指令提供的hook机制如何实现")])])}),[],!1,null,null,null);s.default=r.exports}}]);