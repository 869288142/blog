### for in
#### 遍历范围
自身及原型上的所有可枚举属性，被屏蔽的同名属性不会被重复读取
#### 遍历规则
先遍历出整数属性（integer properties，按照升序），然后其他属性按照创建时候的顺序遍历出来。

#### 应用
这样只要保证不出现整数属性，那么就可以兼容旧版本和新版本的遍历顺序了

**整数属性的定义**
String(Math.trunc(Number(prop)) === prop
将索引转换为数字然后取整，再转换为字符串是否与原来的相等

**实例**
```js
let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for(let code of Object.keys(codes)) {
  console.log( code ); // 49, 41, 44, 1
}
```