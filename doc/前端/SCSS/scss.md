变量
$开头 小写并由中划线分割

块级作用域(定义在嵌套规则以内的变量) -> !global 全局变量

数据类型
数字，1, 2, 13, 10px  纯数字或者加上单位
布尔型，true, false
字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
空值，null

颜色，blue, #04a3f9, rgba(255,0,0,0.5)

数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
一维数组 
二维数组 1px 2px, 5px 6px  (1px 2px) (5px 6px)


maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)


运算

数字
SassScript 支持数字的加减乘除、取整等运算 (+, -, *, /, %) 会转换单位
关系运算 <, >, <=, >= 也可用于数字运算，

相等运算 ==, != 可用于所有数据类型。

颜色值运算
p {
  color: #010203 + #040506;
}
计算 01 + 04 = 05 02 + 05 = 07 03 + 06 = 09，然后编译为

p {
  color: #050709; }

字符串运算

+ 可用于连接字符串

p {
  cursor: e + -resize;
}
编译为

p {
  cursor: e-resize; }


函数

$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { width: grid-width(5); }

指定参数
p {
  color: hsl($hue: 0, $saturation: 100%, $lightness: 50%);
}

插值语句
通过 #{} 插值语句可以在选择器或属性名中使用变量：

流程控制

p {
  @if 1 + 1 == 2 { border: 1px solid; }
  @if 5 < 3 { border: 2px dotted; }
  @if null  { border: 3px double; }
}

@for

@for $var from <start> through <end>，或者 @for $var from <start> to <end>，区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 <start> 与 <end> 的值，而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值。另外，$var 可以是任何变量，比如 $i；<start> 和 <end> 必须是整数值

迭代数组
@each 指令的格式是 $var in <list>, $var 可以是任何变量名，比如 $length 或者 $name，而 <list> 是一连串的值，也就是值列表。



选择器嵌套

属性嵌套
font-size 
font:{
  size
}

混入

继承

