(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{193:function(n,t,e){"use strict";e.r(t);var s=e(0),o=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"object-assign"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-assign","aria-hidden":"true"}},[n._v("#")]),n._v(" Object.assign")]),n._v(" "),e("p",[n._v("Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter\n同名会被后面的源对象覆盖,浅拷贝")]),n._v(" "),e("p",[n._v("Object.assign(target, ...source)\n合并到target并返回target")]),n._v(" "),e("p",[n._v("为对象添加属性\nclass Point{\nconstructor(x,y){\nObject.assign(this,{x,y});\n}\n}\n上面的方法可以为对象Point类的实例对象添加属性x和属性y。")]),n._v(" "),e("p",[n._v("为对象添加方法\n// 方法也是对象\n// 将两个方法添加到类的原型对象上\n// 类的实例会有这两个方法\nObject.assign(SomeClass.prototype,{\nsomeMethod(arg1,arg2){...},\nanotherMethod(){...}\n});\n将方法添加到类的原型对象上后，类的实例能继承这两个方法。")]),n._v(" "),e("p",[n._v("克隆对象\n//克隆对象的方法\nfunction clone(origin){\n//获取origin的原型对象\nlet originProto = Obejct.getPrototypeOf(origin);\n//根据原型对象，创建新的空对象，再assign\nreturn Object.assign(Object.create(originProto),origin);\n}\n为属性指定默认值")]),n._v(" "),e("p",[n._v("// 默认值对象\nconst DEFAULTS = {\nlogLevel : 0,\noutputFormat : 'html'\n};")]),n._v(" "),e("p",[n._v("// 利用assign同名属性会覆盖的特性，指定默认值，如果options里有新值的话，会覆盖掉默认值\nfunction processContent(options){\noptions = Object.assign({},DEFAULTS,options);\nconsole.log(options);\n//...")])])}],!1,null,null,null);t.default=o.exports}}]);