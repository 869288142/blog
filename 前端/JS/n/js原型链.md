方法和属性的查找方法
本对象-原型对象依次循环下去
```js
  let s = '1'
  s.f()
  s s.__proto__(String.prototype) String.prototype.__proto__(Object.prototype)
```

1. 如果在[[Prototype]] 链上层存在名为foo 的普通数据访问属性（参见第3 章）并且没
有被标记为只读（writable:false），那就会直接在myObject 中添加一个名为foo 的新
属性，它是屏蔽属性。
2. 如果在[[Prototype]] 链上层存在foo，但是它被标记为只读（writable:false），那么
无法修改已有属性或者在myObject 上创建屏蔽属性。如果运行在严格模式下，代码会
抛出一个错误。否则，这条赋值语句会被忽略。总之，不会发生屏蔽。
3. 如果在[[Prototype]] 链上层存在foo 并且它是一个setter（参见第3 章），那就一定会
调用这个setter。foo 不会被添加到（或者说屏蔽于）myObject，也不会重新定义foo 这
个setter。

var anotherObject = {
a:2
};
var myObject = Object.create( anotherObject );
anotherObject.a; // 2
myObject.a; // 2
146 ｜ 第5 章
anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false
myObject.a++; // 隐式屏蔽！
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty( "a" ); // true

var anotherObject = {
cool: function() {
console.log( "cool!" );
}
};
var myObject = Object.create( anotherObject );
myObject.doCool = function() {
this.cool(); // 内部委托！
};
myObject.doCool(); // "cool!"