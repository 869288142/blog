## native修饰符

一般来说，vue本身提供了v-on:eventName这个语法来提供vue的事件绑定，通常使用@eventName这个语法糖代替上述语法。

使用过程中没有考虑@eventName作用标签的类型，因为一般将该语法用在html原生标签，在组件标签上使用的时候，出现了@click="handler"无法触发handler事件。

以下为事故现场：
``` html
<my-component @click="handler"><my-component/>
```
使用该组件的vue实例
**注：handler( )为ES6语法，等同于handler:function( )**
``` javascript
    methods:{
        handler(){
            console.log('click me');
        }
    }
```
经过面向搜索编程(百度)
发现默认@eventName使用在组件上**是表示绑定了组件自定义eventName**
要绑定原生DOM事件，需要使用.native来修饰@eventName，即 **@eventName.native** 语法

那么自定义事件又是怎么一肥事呢？

一般来说，自定义事件用于Vue自定义组件，用于内部DOM元素事件响应时，开放给组件外部的API。

**specially，他需要组件内部使用$emit('defineEventName',value)这个方法来触发，这也表明了一开始我的错误想法，以为是触发组件内部的原生DOM的click方法，这里指明了使用@evnetName作用在组件上，不会触发原生DOM事件，即一开始的无反应。**

这里完成了一个@click="handler",而不是用native修饰符的例子，基于Vue自定义事件

my-component组件内部实现
``` html
    <template>
        <button @click="in">click me</button>
    </template>
```

``` javascript
    methods:{
        in(){
            this.$emit('click')
        }
    }
```
这个例子在点击按钮click me之后能够通过$emit('click')触发组件自定义的click事件以调用使用该组件上的Vue实例上的handler方法，打印出click me。