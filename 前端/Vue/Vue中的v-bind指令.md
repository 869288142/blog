普通：

    property="value"

    此时 value为字符串

v-bind指令

    v-bind:property="value"

    此时 value会被解析成一个变量，若是在vue实例中没有找到，会显示找不到错误

作用：

    1.用于动态绑定一个值
    2.用于传入变量

注意事项:

    :property = "value"
    
    由于使用多了v-bind指令的语法糖:property来组件的prop属性，在出现那个说找不到被绑定的变量时，要反应出来是vue把v-bind的变量到组件内去查找了，如果使用的是一个字符串字面值而已，去掉:即可。