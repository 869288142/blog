vue使用了单文件组件方式来解耦视图即.vue后缀文件名

单文件组件组成部分：

```javascript
<template>

</template>

<script>

</script>

<style>

</style>
```

其中template、script以及实现了私有化

那么style如何实现私有化？

    为此vue为style提供了一个scoped属性用于实现样式私有化

```javascript
    <style scoped>

    </style>
```    

实现样式私有化的原理：

    先看一个例子

```javascript
<style scoped>
.example {
  color: red;
}
</style>

<template>
  <div class="example">hi</div>
</template>
```    
显示结果
```javascript
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
</style>

<template>
  <div class="example" data-v-f3f3eg9>hi</div>
</template>
```

从上面两段代码对比可以得知scoped为组件设置一个data-v-id这个全局唯一属性，在对应的样式后面追加了一个属性选择器来唯一确定样式作用对象

属性选择器是一个容易被人遗忘点属性呢

    看个简单例子
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .main[data-a]{
            height: 300px;
            background-color:black;
        }
    </style>
</head>

<body>
    <div class="main" data-a>
    </div>
</body>

</html>
```    
大家会看到背景有300px高度被渲染成黑色的

我们分析一下不同类型组件组合引用的情况的渲染情况

1.一般组件引用私有组件
文件
```javascript
    //content.vue
<template>
    <div class="content">
        <p class="title"></p>
        <!-- v-button假设是上面定义的组件 -->
        <v-button></v-button>
    </div>
</template>
...
<style>
    .content{
        width: 1200px;
        margin: 0 auto;
    }
    .content .button{
        border-raduis: 5px;
    }
</style>
```
渲染结果：
```html
<div class="content">
    <p class="title"></p>
    <!-- v-button假设是上面定义的组件 -->
    <div data-v-2311c06a class="button-warp">
        <button data-v-2311c06a class="button">text</button>
    </div>
</div>
```
```css
*button.vue渲染出来的css*/
.button-warp[data-v-2311c06a]{
    display:inline-block;
}
.button[data-v-2311c06a]{
    padding: 5px 10px;
    font-size: 12px;
    border-radus: 2px;
}
/*content.vue渲染出来的css*/
.content{
    width: 1200px;
    margin: 0 auto;
}
.content .button{
    border-raduis: 5px;
}
```

可以看到，虽然在content组件修改了button的border-radius属性，但是内部组件的样式权重比外部的高，如果想要生效，就需要增加权重

2.私有组件引用私有组件
```html
<div data-v-57bc25a0 class="content">
    <p data-v-57bc25a0 class="title"></p>
    <!-- v-button假设是上面定义的组件 -->
    <div data-v-57bc25a0 data-v-2311c06a class="button-warp">
        <button data-v-2311c06a class="button">text</button>
    </div>
</div>
```
```css
    /*button.vue渲染出来的css*/
.button-warp[data-v-2311c06a]{
    display:inline-block;
}
.button[data-v-2311c06a]{
    padding: 5px 10px;
    font-size: 12px;
    border-radus: 2px;
}
/*content.vue渲染出来的css*/
.content[data-v-57bc25a0]{
    width: 1200px;
    margin: 0 auto;
}
.content .button[data-v-57bc25a0]{
    border-raduis: 5px;
}
```

可以看出.content .button后面属性选择器里面的自定义属性是content的data-v-id，这样就无法影响到button.vue

3.
```html
<div data-v-57bc25a0 class="content">
    <p data-v-57bc25a0 class="title"></p>
    <!-- v-button假设是上面定义的组件 -->
    <div data-v-57bc25a0  class="button-warp">
        <button  class="button">text</button>
    </div>
</div>
```
```css
    /*button.vue渲染出来的css*/
.button-warp{
    display:inline-block;
}
.button{
    padding: 5px 10px;
    font-size: 12px;
    border-radus: 2px;
}
/*content.vue渲染出来的css*/
.content[data-v-57bc25a0]{
    width: 1200px;
    margin: 0 auto;
}
.content .button[data-v-57bc25a0]{
    border-raduis: 5px;
}
```

这种情况与私有组件引用私有组件类似，出现了属性选择器出现正在选择器表达式点末尾，导致样式无法对子组件内部元素生效




这里可以增加一个不带scoped的style和scoped的style共存，来在普通的style中去全局样式来改变,但是这样也不优雅，为了避免全局污染需要定义好全局样式名称


总结：

    1.组件的style加入了scoped后，组件的所有元素都会加一个唯一的data-v-id属性，属性选择会被加入到表达式末尾，同时这个自定义属性会作用到子组件的根元素上

    2.因为私有组件会把属性选择器加到CSS表达式末端，导致CSS无法选择到子组件内部元素，所以一个猜想是把属性选择器移至父级选择器末端，而不是表达式末端来实现css样式私有化与样式作用到子元素的效果

第二点总结的vue-loader语法支持

深度选择器：

    >>>
```javascript
    //content.vue
<template>
    <div class="content">
        <p class="title"></p>
        <!-- v-button假设是上面定义的组件 -->
        <v-button></v-button>
    </div>
</template>
...
<style>
    .content{
        width: 1200px;
        margin: 0 auto;
    }
    .content >>> .button{
        border-raduis: 5px;
    }
</style>
```    

上述css渲染结果：
```css
    /*button.vue渲染出来的css*/
.button-warp[data-v-2311c06a]{
    display:inline-block;
}
.button[data-v-2311c06a]{
    padding: 5px 10px;
    font-size: 12px;
    border-radus: 2px;
}
/*content.vue渲染出来的css*/
.content[data-v-57bc25a0]{
    width: 1200px;
    margin: 0 auto;
}
.content[data-v-57bc25a0] .button{
    border-raduis: 5px;
}
```

可以看到在表达式中父级结束选择器.content这里使用了深度选择器来实现了属性选择器的移动，达到了修改子组件样式的效果，当然，实际项目中我记得vue-loader 10.x好像是不完全支持>>>，这里就要大家升级一下项目的vue-loader了。

以下附上本人在项目中使用element-UI和vux这两个分别在pc端和手机端受宠的vue框架，我查看了这两者的组件源码，他们都没使用scoped这种方法私有化样式，所以可以采用下面的方法：


    1.样式少：

    直接在组件上写一个style内联标签

    2.样式多

    组件上写一个class进行style的集合配置

    3.scoped的style修改子组件样式

    在子class和父class之间插入一个>>>深度选择器来实现属性选择器的移位

