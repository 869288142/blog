# extend

Vue.extend是一个平时开发用的比较少的API，它在一些场景下很有用

### 语法

```js
<div id="mount-point"></div>
// 创建构造器
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point')
```

### 场景

* 用于命令式UI编程，比如toast

### 设计理念

* extend这种机制个人觉得在前端是比较少用的，一个可能就是为了实现mixin机制

### 源码分析

```js
    Vue.extend = function (extendOptions) {

      // Super就是Vue
      var Super = this;

      var SuperId = Super.cid;

      var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});


      if (cachedCtors[SuperId]) {
        return cachedCtors[SuperId]
      }

      // 继承实例属性
      var Sub = function VueComponent (options) {
        this._init(options);
      };

      // 继承原型
      Sub.prototype = Object.create(Super.prototype);
      // 改写改造其构造器指向
      Sub.prototype.constructor = Sub;

      Sub.cid = cid++;

      // 合并父构造器的options
      Sub.options = mergeOptions(
        Super.options,
        extendOptions
      );

      // 继承静态方法
      Sub.extend = Super.extend;
      Sub.mixin = Super.mixin;
      Sub.use = Super.use;

      // cache constructor
      cachedCtors[SuperId] = Sub;
      return Sub
    };
  }
```

外部调用都需要这样