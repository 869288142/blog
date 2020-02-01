# Vue

## Vue构造器

```js
function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}
```

这里Vue将初始化和构造进行了分离，使用了以下代码提升开发体验

```js
// 非new 调用
!(this instanceof Vue)

// 这里Vue采用了警告用户的方式，个人觉得可以静默调用new Vue

if(!(this instanceof Vue)){
  new Vue(options)
}
```

## Vue原型初始化

类一般将方法设置到原型上，如下：

```js
Vue.prototype.fun = function fun() {

}
```

`Vue`将原型设置的代码进行了如下分类，命名为`XXXMixin`,这使得代码更加聚齐，方便阅读和维护

```js
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
```

