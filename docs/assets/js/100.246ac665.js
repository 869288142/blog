(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{207:function(a,t,s){"use strict";s.r(t);var e=s(0),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"vuex在iframe使用遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex在iframe使用遇到的问题","aria-hidden":"true"}},[a._v("#")]),a._v(" Vuex在iframe使用遇到的问题")]),a._v(" "),s("p",[a._v("正常来说，只要vuex的数据变化，依赖其数据的组件自然会发生变化，但是我在主页面提交vuex数据的时候，发现使用数组的变异方法无法使用，emmm,所以开始了我的探索")]),a._v(" "),s("h2",{attrs:{id:"突然起来的解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#突然起来的解决方案","aria-hidden":"true"}},[a._v("#")]),a._v(" 突然起来的解决方案")]),a._v(" "),s("p",[a._v("Vue能够检测到引用变化，然后响应，试试直接赋值新引用给数组")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("...")]),a._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("没错， 奇思妙想就解决了这个问题，只是，只要操作数组，记得重新赋值，写起来很不偷懒，如果能够找到原因，彻底解决，那么就更好")]),a._v(" "),s("h2",{attrs:{id:"猜想1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#猜想1","aria-hidden":"true"}},[a._v("#")]),a._v(" 猜想1")]),a._v(" "),s("p",[a._v("是不是因为跨ifrmae原型不一样导致的失效")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("instanceof")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Array")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false")]),a._v("\n")])])]),s("p",[a._v("以前学基础的时候，就知道了instanceof可以检测原型是否为本window上的，果不然，原型不对，我们尝试修改一下")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("__proto__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("__proto__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("===")]),a._v(" Array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Prototype\n")])])]),s("p",[a._v("嗯，尝试了下push，仍然不行")]),a._v(" "),s("h2",{attrs:{id:"猜想2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#猜想2","aria-hidden":"true"}},[a._v("#")]),a._v(" 猜想2")]),a._v(" "),s("p",[a._v("我们都知道数组更新是由__ob__这个属性驱动的，我们看一下前后变化")]),a._v(" "),s("p",[a._v("嗯，打开侧边栏时，dep的id变化了，就是重新生成了dep，诶，什么时候生成了新的dep呢，难道了添加了一个组件依赖vuex，这个dep就会重新更新？？？，这里我们尝试了一下，并不会")]),a._v(" "),s("h2",{attrs:{id:"水落石出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#水落石出","aria-hidden":"true"}},[a._v("#")]),a._v(" 水落石出")]),a._v(" "),s("p",[a._v("原来我们在新创建的组件里把vuex的属性作为了data,此对象整个被重新定义响应了，只要将Vuex的属性放到computed即可")])])}),[],!1,null,null,null);t.default=r.exports}}]);