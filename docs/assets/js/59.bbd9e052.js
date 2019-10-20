(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{292:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript运行环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript运行环境","aria-hidden":"true"}},[t._v("#")]),t._v(" javascript运行环境")]),t._v(" "),a("p",[t._v("js如果只在引擎中运行，它会严格遵循并且可以预测的，但是js几乎都在宿主环境中运行，"),a("strong",[t._v("浏览器或者Node环境")])]),t._v(" "),a("h2",{attrs:{id:"ecmascript中的annex-b"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript中的annex-b","aria-hidden":"true"}},[t._v("#")]),t._v(" ECMAScript中的Annex B")]),t._v(" "),a("p",[a("strong",[t._v("介绍了浏览器兼容性问题导致与官方规范的差异")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("在非严格模式中允许八进制数值常量存在，如0123（即十进制的83）。")])]),t._v(" "),a("li",[a("p",[t._v('window.escape(..) 和window.unescape(..) 让你能够转义（escape）和回转（unescape）带有% 分隔符的十六进制字符串。例如，window.escape( "? foo=97%&bar=3%" ) 的结果为"%3Ffoo%3D97%25%26bar%3D3%25"。')])]),t._v(" "),a("li",[a("p",[t._v("String.prototype.substr 和String.prototype.substring 十分相似，除了前者的第二个参数是结束位置索引（非自包含），后者的第二个参数是长度（需要包含的字符数）。")])])]),t._v(" "),a("h2",{attrs:{id:"web-ecmascript规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-ecmascript规范","aria-hidden":"true"}},[t._v("#")]),t._v(" Web ECMAScript规范")]),t._v(" "),a("p",[a("strong",[t._v("介绍官方ECMAScript和目前浏览器中JavaScript实现的差异")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("String.prototype 中返回HTML 格式字符串的附加方法：anchor(..)、big(..)、\nblink(..)、bold(..)、fixed(..)、fontcolor(..)、fontsize(..)、italics(..)、\nlink(..)、small(..)、strike(..) 和sub(..)"),a("strong",[t._v("以上内容在实际开发中很少使用，也不推荐，我们更倾向于使用其他的内建")])])]),t._v(" "),a("li",[a("p",[t._v("DOM API 和自定义工具集。")])]),t._v(" "),a("li",[a("p",[t._v('RegExp 扩展：RegExp.$1 .. RegExp.$9（匹配组） 和RegExp.lastMatch/RegExp["$&"]（最近匹配）。')])]),t._v(" "),a("li",[a("p",[t._v("Function.prototype 附加方法：Function.prototype.arguments（别名为arguments 对象）和Function.caller（别名为arguments.caller）。")])])]),t._v(" "),a("h2",{attrs:{id:"宿主对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宿主对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 宿主对象")]),t._v(" "),a("p",[t._v("由宿主对象创建并提供给js引擎的变量，包括内建对象和函数\n常见的宿主对象，如下例子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "object"--正如所料')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "[object HTMLDivElement]"')]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tagName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "DIV"')]),t._v("\n")])])]),a("p",[t._v("需要注意"),a("strong",[t._v("宿主对象的行为差异")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("无法访问正常的object 内建方法，如toString()")])]),t._v(" "),a("li",[a("p",[t._v("无法写覆盖")])]),t._v(" "),a("li",[a("p",[t._v("包含一些预定义的只读属性")])]),t._v(" "),a("li",[a("p",[t._v("包含无法将this 重载为其他对象的方法")])])]),t._v(" "),a("h2",{attrs:{id:"全局dom变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局dom变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局DOM变量")]),t._v(" "),a("p",[t._v("一个不太为人所知的事实是：由于浏览器演进的历史遗留问题，"),a("strong",[t._v("在创建带有id 属性\n的DOM 元素时也会创建同名的全局变量")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    oo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 永远也不会运行")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" foo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// HTML元素")]),t._v("\n")])])]),a("p",[t._v("当页面出现多个id同名时，我们可以直接使用该全局变量来获取同id的HTMLCollection")]),t._v(" "),a("p",[t._v("故意设置两个id同名，当然编码时不推荐，简易保持唯一\n"),a("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1361028/201903/1361028-20190321005447181-2011121765.png",alt:""}})]),t._v(" "),a("p",[t._v("使用id作为变量名来获取同名DOM\n"),a("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1361028/201903/1361028-20190321005517270-736407046.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"原生原型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生原型","aria-hidden":"true"}},[t._v("#")]),t._v(" 原生原型")]),t._v(" "),a("p",[a("strong",[t._v("不要扩展原生原型，因为随着规范发展，扩展的功能可能会被实现，使得扩展和规范冲突")])]),t._v(" "),a("p",[t._v("必要的扩展建议作如下处理")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Netscape 4没有Array.push")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("push")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"shim-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shim-polyfill","aria-hidden":"true"}},[t._v("#")]),t._v(" shim/polyfill")]),t._v(" "),a("p",[t._v("polyfill 能有效地为不符合最新规范的老版本浏览器填补缺失的功能，让你能够通过可靠的代码来支持所有你想要支持的运行环境,shim/polyfill能够填充新的API，但是没法填充新的语法，我们可以使用bable来将新的语法转换成旧的语法")]),t._v(" "),a("h2",{attrs:{id:"宿主环境实现的限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宿主环境实现的限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 宿主环境实现的限制")]),t._v(" "),a("p",[t._v("下面列出一些已知的限制：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("字符串常量中允许的最大字符数（并非只是针对字符串值）")])]),t._v(" "),a("li",[a("p",[t._v("可以作为参数传递到函数中的数据大小（也称为栈大小，以字节为单位）")])]),t._v(" "),a("li",[a("p",[t._v("函数声明中的参数个数")])]),t._v(" "),a("li",[a("p",[t._v("未经优化的调用栈（例如递归）的最大层数，即函数调用链的最大长度")])]),t._v(" "),a("li",[a("p",[t._v("JavaScript 程序以阻塞方式在浏览器中运行的最长时间（秒）")])]),t._v(" "),a("li",[a("p",[t._v("变量名的最大长度")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);