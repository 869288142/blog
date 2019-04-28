call
```js
Function.prototype.call2 = function(context) {
  context = context || window;
  context.fn = this;
   for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args +')');
  delete context.fn;
  return result
}

```
apply
```js
Function.prototype.apply2 = function (context, arr) {
  context = context || window;
  context.fn = this;
  var result;
  if (!arr) {
      result = context.fn();
  }
  else {
      var args = [];
      for (var i = 0, len = arr.length; i < len; i++) {
          args.push('arr[' + i + ']');
      }
      result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result;
}
```
bind
```js
Function.prototype.bind2 = function(context) {
  var self = this
  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1)
  var fNOP = function() {}
  var fBound = function() {
    // 这个时候的arguments是指bind返回的函数传入的参数
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(
      this instanceof fBound ? this : context,
      args.concat(bindArgs)
    )
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
}
```