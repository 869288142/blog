(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{274:function(t,v,a){"use strict";a.r(v);var _=a(28),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,a=t._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型系统"}},[t._v("#")]),t._v(" 类型系统")]),t._v(" "),a("p",[t._v("作为一个编程人员，学习一门语言第一步就是学习语言的类型，但是你可能从来没仔细思考过，为什么这么多高级语言会有类型这东西。\n实际上，类型有点类似生活中的类别，我们日常生活，早已经把这个概念理解到了，切肉和切水果会用不同的刀，他们之间的效率差别被我们潜意识所识别，正常思考会忽略这一步。")]),t._v(" "),a("h2",{attrs:{id:"语言级别的类型给我们带来了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言级别的类型给我们带来了什么"}},[t._v("#")]),t._v(" 语言级别的类型给我们带来了什么")]),t._v(" "),a("p",[t._v("参考《Types and Programming Languages》 第一章")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("检测错误")])])]),t._v(" "),a("p",[t._v("静态语言")]),t._v(" "),a("p",[t._v("我们常见的静态类型检查能够在程序运行前检测出代码中的一些错误。比如类型转换错误，非本类型上的操作\n我们在更改数据结构类型时，不需要手动去查找每个引用的地方，编译器会告诉我们新更改的数据类型哪里不对")]),t._v(" "),a("p",[t._v("动态语言")]),t._v(" "),a("p",[t._v("可以使用类型检查工具来提供类型检查")]),t._v(" "),a("p",[a("strong",[t._v("这也是为什么静态语言在大型系统构建上的优势，因为错误尽可能在编译期就被发现了，而动态语言的错误都在运行期检查。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[t._v("语言安全")])])]),t._v(" "),a("p",[a("strong",[t._v("静态类型不是语言安全的唯一实现方式，也不意味静态语言安全")]),t._v("，"),a("strong",[t._v("安全代表非安全操作会被编译器阻止，而不是去支持")]),t._v("，比如C++，能够操作底层，稍不注意就会引起系统崩溃。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[t._v("效率")])])]),t._v(" "),a("p",[t._v("代码的运行效率不应该由人工来调整，编译器应该足够聪明去自己优化代码，其中的"),a("strong",[t._v("优化信息依赖类型")]),t._v("。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[t._v("抽象")])])]),t._v(" "),a("p",[t._v("组建大型软件系统时，我们都需要模块化系统，类型为这些模块提供了模型类型， 在"),a("strong",[t._v("使用者和实现者之前提供了契约")]),t._v("，使其能够通过这个契约进行交流，比如现在的")]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("strong",[t._v("文档化")]),t._v("\n类型系统不像注释会根据代码更改而过期，你可以根据类型随时更新文档\n动态语言一般比静态语言生成文档要麻烦一些，不过可以借助工具来生成")])]),t._v(" "),a("h2",{attrs:{id:"现有的类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现有的类型系统"}},[t._v("#")]),t._v(" 现有的类型系统")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("静态类型系统\n静态语言类型目前有两种，一种是声明式类型(java)，一种是线性类型(TypeScript)")])]),t._v(" "),a("li",[a("p",[t._v("动态类型系统 javascript")])]),t._v(" "),a("li",[a("p",[t._v("混合类型系统(gradual typing) Python3.5有一个提案，思路就是在动态语言上使用可选的类型注解，有点像Flow，但是混合类型系统会在运行时借助这些信息优化性能，而Flow的话，只是在做了静态类型检查")])])]),t._v(" "),a("p",[a("strong",[t._v("扯了那么多，是为了大家深刻认识到类型系统的重要性，别做出明明需要的是一个boolean值，你还去用其他类型表示，比如用1、0表示再来判断转换为boolean值")])]),t._v(" "),a("h2",{attrs:{id:"ecmascript-语言类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-语言类型"}},[t._v("#")]),t._v(" ECMAScript 语言类型")]),t._v(" "),a("p",[t._v("Undefined Null Boolean String Number Object Symbol")]),t._v(" "),a("p",[t._v("js内置类型")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("null undefined boolean number string object symbol\n")])])]),a("p",[t._v("我们接下来来逐个分析这些类型")])])}),[],!1,null,null,null);v.default=r.exports}}]);