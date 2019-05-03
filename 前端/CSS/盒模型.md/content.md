## 深入理解content

### content与替换元素

#### 替换元素定义
替换元素 - 通过修改某个属性值呈现的内容就可以被替换的元素，如img object video iframe textarea input

#### 替换元素特点
1. 内容外观不受页面上的CSS影响，如需修改需要浏览器暴露的接口或者类似apprearance属性等

2. 有自己的尺寸，即没有明确尺寸下，有一个默认尺寸

3. 在很多CSS属性上有自己的表现规则。比如vertical-align

#### 替换元素尺寸计算规则(优先级从下往上)
1. 固有尺寸 替换内容原本的尺寸
2. HTML尺寸 只能通过HTML原生属性改变
3. CSS尺寸

#### content特性
1. content生成的文本无法选中无法复制，无法被屏幕阅读器读取，也无法被搜索引擎抓取，替换视觉层，而非内容本身。
2. empty伪类无效，无法识别content是否有内容
3. content动态生成值无法获取

#### content 内容生成技术
1. 清除浮动
``` css
.clear:after {
  content: "";
  display: block;
  clear: both;
} 
```
2. content字符内容生成
配合@font-face规则生成图标字体效果

3. content图片生成
利用background-image插入图片，更适合base64

4. 了解content开启闭合符号生成
利用open-quote、close-quote,可以做到变量控制前后符号，但是用处不大

5. content attr属性值内容生成
```css
img::after {
  /* 原生和自定义都可以 */
  content: attr(alt)
}
```