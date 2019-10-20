(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{298:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[t._v("#")]),t._v(" promise")]),t._v(" "),s("h2",{attrs:{id:"核心："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心：","aria-hidden":"true"}},[t._v("#")]),t._v(" 核心：")]),t._v(" "),s("p",[s("strong",[t._v("现在运行的部分和将来运行的部分之间的关系")])]),t._v(" "),s("h2",{attrs:{id:"常用方案："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用方案：","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用方案：")]),t._v(" "),s("p",[t._v("从现在到将来的等待，通常使用一个回调函数在结果返回时得到结果")]),t._v(" "),s("h3",{attrs:{id:"回调存在的问题："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调存在的问题：","aria-hidden":"true"}},[t._v("#")]),t._v(" 回调存在的问题：")]),t._v(" "),s("p",[s("strong",[t._v("回调地狱：人脑计划和回调驱动异步不匹配，导致思维难以迅速找到整个回调流程")])]),t._v(" "),s("p",[s("strong",[t._v("信任问题：")])]),t._v(" "),s("ol",[s("li",[t._v("调用过早")]),t._v(" "),s("li",[t._v("调用过晚或者没有调用")]),t._v(" "),s("li",[t._v("调用次数不正确（过多或者过少）")]),t._v(" "),s("li",[t._v("没有把参数正确传回")]),t._v(" "),s("li",[t._v("吞掉错误或者异常")])]),t._v(" "),s("h3",{attrs:{id:"回调带来的问题导致的需求："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调带来的问题导致的需求：","aria-hidden":"true"}},[t._v("#")]),t._v(" 回调带来的问题导致的需求：")]),t._v(" "),s("p",[t._v("一种更同步、更顺序、更阻塞的方式表达异步来提供与我们大脑思维一致")]),t._v(" "),s("h2",{attrs:{id:"promise诞生"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise诞生","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise诞生")]),t._v(" "),s("h3",{attrs:{id:"对于回调函数带来的问题的解决："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对于回调函数带来的问题的解决：","aria-hidden":"true"}},[t._v("#")]),t._v(" 对于回调函数带来的问题的解决：")]),t._v(" "),s("h4",{attrs:{id:"调用过早"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用过早","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用过早")]),t._v(" "),s("p",[s("strong",[t._v("本质：一个方法可能会同步执行也可能会异步执行，导致结果不可靠")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0(同步回调调用)、1(异步回调调用)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..pre-cached-url.."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("p",[t._v("then方法总是会异步调用其回调")]),t._v(" "),s("h4",{attrs:{id:"调用过晚"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用过晚","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用过晚")]),t._v(" "),s("p",[s("strong",[t._v("解决方案:")])]),t._v(" "),s("p",[t._v("在Promise对象执行resolve或reject方法后，then注册的回调函数会被自动执行")]),t._v(" "),s("h4",{attrs:{id:"没有被调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有被调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有被调用")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("p",[t._v("1.只要决议，那么回调函数就会调用完成回调和拒绝回调其中一个")]),t._v(" "),s("p",[t._v("2.回调函数出现错误，可以在后续代码中捕获这些错误，当然回调已经被执行了")]),t._v(" "),s("p",[t._v("3.Promise本身永远不被决议，可以使用race这个竞态机制来获取一个输出信号，防止其永久挂住程序")]),t._v(" "),s("h4",{attrs:{id:"调用次数过多或者过少"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用次数过多或者过少","aria-hidden":"true"}},[t._v("#")]),t._v(" 调用次数过多或者过少")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("p",[t._v("Promise只会接受第一次决议，并默默地忽略任何后续调用")]),t._v(" "),s("h4",{attrs:{id:"没有把参数正确传回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#没有把参数正确传回","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有把参数正确传回")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("p",[t._v("Promise在决议时，只接受第一个参数，如果需要多个参数，可以使用数组或者对象包裹参数")]),t._v(" "),s("h4",{attrs:{id:"吞掉错误或者异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#吞掉错误或者异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 吞掉错误或者异常")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")])]),t._v(" "),s("p",[t._v("在Promise创建过程中或者查看决议过程中，出现js异常，那么异常会被捕捉并且使得这个promise被拒绝")]),t._v(" "),s("h4",{attrs:{id:"保证promise可信任-保证返回的值为promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保证promise可信任-保证返回的值为promise","aria-hidden":"true"}},[t._v("#")]),t._v(" 保证Promise可信任(保证返回的值为Promise)")]),t._v(" "),s("p",[s("strong",[t._v("解决方案：")]),t._v("\nPromise.resolve()")]),t._v(" "),s("p",[t._v("1.传入一个非Promise、非thenable值，那么会得到用这个值填充promise")]),t._v(" "),s("p",[t._v("2.传入一个真正的promise，那么会原样返回这个promise")]),t._v(" "),s("p",[t._v("3.传入一个非Promise的thenable值，会展开这个值，持续到得到一个非类Promise的值")]),t._v(" "),s("h2",{attrs:{id:"promise-基本api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise-基本api","aria-hidden":"true"}},[t._v("#")]),t._v(" Promise 基本API")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("、reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如何验证是否为promise 检测是否具有then方法")]),t._v(" "),s("p",[t._v("快捷创建已经被决议的Promise：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完成")]),t._v("\nPromise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拒绝")]),t._v("\n")])])]),s("p",[t._v("then和catch方法也会返回一个新的Promise")]),t._v(" "),s("p",[s("strong",[t._v("不要依赖promise回调的顺序")])]),t._v(" "),s("h3",{attrs:{id:"promise局限性："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise局限性：","aria-hidden":"true"}},[t._v("#")]),t._v(" promise局限性：")]),t._v(" "),s("p",[t._v("1.顺序错误处理，导致Promise链中的错误容易被忽略掉")]),t._v(" "),s("p",[t._v("2.单一值导致后续处理变量繁琐")]),t._v(" "),s("p",[t._v("3.单决议在事件中需要注意创建新的Promise链")]),t._v(" "),s("p",[t._v("4.Promise导致的性能问题")])])}),[],!1,null,null,null);a.default=e.exports}}]);