(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{275:function(t,e,a){"use strict";a.r(e);var r=a(28),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"overflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overflow"}},[t._v("#")]),t._v(" overflow")]),t._v(" "),a("p",[t._v("overflow是一个我们在需要不换行省略号、或者阻止内容溢出常用的属性,在工作上，遇到了一些很有趣的问题，在此深度学习一下overflow")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 单行省略号 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 隐藏溢出的内容 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden\n")])])]),a("h2",{attrs:{id:"overflow定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overflow定义"}},[t._v("#")]),t._v(" overflow定义")]),t._v(" "),a("p",[t._v("CSS uses the term overflow to describe the contents of a box that extend outside one of that box’s edges (i.e., its content edge, padding edge, border edge, or margin edge)")]),t._v(" "),a("p",[t._v("CSS采用overflow来描述盒子中的内容溢出盒子边界的行为，盒子边界分为 content edge padding edge border edge margin edge")]),t._v(" "),a("h2",{attrs:{id:"overflow裁剪细节"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overflow裁剪细节"}},[t._v("#")]),t._v(" overflow裁剪细节")]),t._v(" "),a("h3",{attrs:{id:"作用对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用对象"}},[t._v("#")]),t._v(" 作用对象")]),t._v(" "),a("p",[t._v("限制元素内部内容可视区域")]),t._v(" "),a("h3",{attrs:{id:"作用范围"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用范围"}},[t._v("#")]),t._v(" 作用范围")]),t._v(" "),a("p",[t._v("This value indicates that the box’s content is clipped to its padding box")]),t._v(" "),a("p",[t._v("官方上说的是以作用元素的padding-area作为采用作为裁剪范围，我们验证一下")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2019/10/20/KKPqcF.png",alt:"KKPqcF.png"}})]),t._v(" "),a("p",[t._v("我们在父元素处设置10px的border，设置overflow: hidden,此border没有被裁剪，而同时的padding 10px被裁剪了,所以官方说的裁剪是以padding-box为区域是没有错的。")]),t._v(" "),a("h2",{attrs:{id:"overflow-hidden-对子元素的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overflow-hidden-对子元素的影响"}},[t._v("#")]),t._v(" overflow hidden 对子元素的影响")]),t._v(" "),a("h3",{attrs:{id:"子元素为blcok无定宽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子元素为blcok无定宽"}},[t._v("#")]),t._v(" 子元素为blcok无定宽")]),t._v(" "),a("p",[t._v("此时子元素是自适应的，padding、border、margin会压缩content的空间")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2019/10/20/KKmaX6.png",alt:"KKmaX6.png"}})]),t._v(" "),a("p",[t._v("通过上图可以看到我们设置的padding、border、margin不会增加子元素的实际宽度，而是去缩减内容区的宽度")]),t._v(" "),a("h3",{attrs:{id:"子元素为blcok定宽"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子元素为blcok定宽"}},[t._v("#")]),t._v(" 子元素为blcok定宽")]),t._v(" "),a("p",[t._v("此时子元素是非自适应的，padding、border、margin不会压缩content的空间，实际宽度会大于父元素")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2019/10/20/KKn6VU.png",alt:"KKn6VU.png"}})]),t._v(" "),a("p",[t._v("设置一个大于父元素的宽度，查看子元素的宽度，此时元素的宽度会根据padding、border、margin增加")]),t._v(" "),a("h3",{attrs:{id:"子元素为flex-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子元素为flex-item"}},[t._v("#")]),t._v(" 子元素为flex-item")]),t._v(" "),a("p",[t._v("此时子元素无论定宽与否都是非自适应的，padding、border、margin不会压缩content的空间，实际宽度会大于父元素，但是在overflow表现下，与block非定宽表现一致")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.ax1x.com/2019/10/20/KK8p1e.png",alt:"KK8p1e.png"}})])])}),[],!1,null,null,null);e.default=s.exports}}]);