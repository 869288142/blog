Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter
同名会被后面的源对象覆盖,浅拷贝

Object.assign(target, ...source)
合并到target并返回target



为对象添加属性
class Point{
   constructor(x,y){
      Object.assign(this,{x,y});
   }
}
上面的方法可以为对象Point类的实例对象添加属性x和属性y。


为对象添加方法
// 方法也是对象
// 将两个方法添加到类的原型对象上
// 类的实例会有这两个方法
Object.assign(SomeClass.prototype,{
    someMethod(arg1,arg2){...},
    anotherMethod(){...}
});
将方法添加到类的原型对象上后，类的实例能继承这两个方法。


克隆对象
//克隆对象的方法
function clone(origin){
    //获取origin的原型对象
    let originProto = Obejct.getPrototypeOf(origin);
    //根据原型对象，创建新的空对象，再assign
    return Object.assign(Object.create(originProto),origin);
}
为属性指定默认值


// 默认值对象
const DEFAULTS = {
   logLevel : 0,
   outputFormat : 'html'
};
 
// 利用assign同名属性会覆盖的特性，指定默认值，如果options里有新值的话，会覆盖掉默认值
function processContent(options){
   options = Object.assign({},DEFAULTS,options);
   console.log(options);
   //...