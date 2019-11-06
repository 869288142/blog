# JSON(JavaScript Object Notation)

**JSON是一种轻量级数据交换格式**，它常常与XML进行对比，在推出之后，在一些领域以压倒性的优势风靡，目前web数据传输常用的就是JSON格式

## JSON语法

### 对象、数组

* 属性名必须用双引号包括

* **最后一个属性不能有逗号**

### 数值

* 禁止出现前导0

* 小数点后必须有数字

* 允许指数

### 布尔值

### null

### 字符串

* 允许多余空格

* 不能包含 " \  U+0000 到 U+001F

* 不能包含以下转义字符 十六进制

```js
\" or \/ or \\ or \b or \f or \n or \r or \t or \u
```

### 注释

**不允许注释**



## JSON与JavaScript

在很多资料都会看到JSON是基于ECMAScript草案，很多人会以为JSON是JavaScript子集，其实不是

```js
var code = '"\u2028\u2029"';
JSON.parse(code); // 正常
eval(code); // 报错
```

上述这段代码在ES2019以下环境会报错，因为在ES2019前，javascript不允许U+2028（行分隔符）和 U+2029（段分隔符）直接在字符串中使用，只能使用转义形式，ES2019提案将ECMAScript扩充为JSON超集，支持了这两者字符串直接表达


## JavaScript的JSON处理函数

### JSON.stringify

将数据序列化为JSON字符串

### JSON.parse

将JSON字符串反序列化为JavaScript数据



JSON容错解析 JSON和JQueryJSON区别

https://github.com/douglascrockford/JSON-js/pulls