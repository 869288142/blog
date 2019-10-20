(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{206:function(i,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[a("h1",{attrs:{id:"复用机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复用机制","aria-hidden":"true"}},[i._v("#")]),i._v(" 复用机制")]),i._v(" "),a("h2",{attrs:{id:"mixins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mixins","aria-hidden":"true"}},[i._v("#")]),i._v(" mixins")]),i._v(" "),a("p",[i._v("在OOP中，mixins被认为是一种实现多继承的方式")]),i._v(" "),a("p",[i._v("多继承其实有很多缺点，在学习C++的时候，就会很头疼，其中也有一些很经典的问题MRO、重复调用等")]),i._v(" "),a("p",[i._v("在Vue也是作为一种多继承的方式，可以全局继承或者局部继承mixins")]),i._v(" "),a("p",[i._v("其本意是为了提供一些复用选项，但是minix带来了一些"),a("strong",[i._v("问题")])]),i._v(" "),a("ol",[a("li",[a("p",[i._v("为组件带来了隐式依赖关系")]),i._v(" "),a("p",[i._v("有时候组件会依赖mixin中的一个方法，通常就是this.mixin此类调用，你需要查找一边组件的方法才知道这个方法是mixin还是组件本身")]),i._v(" "),a("p",[i._v("有时候mixin会调用组件内的方法")]),i._v(" "),a("p",[i._v("无论两者其一，都使得组件本身无法得以复用。")]),i._v(" "),a("p",[i._v("可能mixin调用了其他mixin，mixin不像组件有着继承树之类的形状，他们层次结构被拘束在同一层，可维护性很差")])]),i._v(" "),a("li",[a("p",[i._v("mixin导致名称冲突")]),i._v(" "),a("p",[i._v("你可能不知不觉中与现有的mixin冲突，导致出现问题")]),i._v(" "),a("p",[i._v("由于冲突时，你可能会重命名该方法，但是你却得去查找这些调用以修复，难以维护")])])]),i._v(" "),a("h2",{attrs:{id:"hoc-待学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hoc-待学习","aria-hidden":"true"}},[i._v("#")]),i._v(" HOC(待学习)")]),i._v(" "),a("h2",{attrs:{id:"function-based提案-vue3实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-based提案-vue3实现","aria-hidden":"true"}},[i._v("#")]),i._v(" Function based提案(Vue3实现)")])])}),[],!1,null,null,null);t.default=e.exports}}]);