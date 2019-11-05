# JSON(JavaScript Object Notation)

**JSON是一种轻量级数据交换格式**，它常常与XML进行对比，在推出之后，在一些领域以压倒性的优势风靡，目前web数据传输常用的就是JSON格式

## JSON语法

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



JSON格式  JSON容错解析

https://github.com/douglascrockford/JSON-js/pulls