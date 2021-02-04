# margin
## margin与padding-box

元素设定了width和保持包裹性时，margin对尺寸没有影响，只有元素为**充分利用可用空间**时例外

```css
<div class="father">
  <div class="son"></div>
</div>

.father { width: 300px }
/* 此时son宽度变为340 */
.son { margin: 0 -20px } 
```
**处理循环列表**
```css
ul {
  margin-right: -20px;
}
ul > li {
  float: left;
  width: 100px;
  margin-right: 20px;
}
```
这里使用-margin来增加容器避免最后的间隙。

## margin的百分比值
百分比值相对于宽度计算，但是价值不大。

## 深入理解margin: auto
margin: auto是为了填充失去流动性元素的闲置尺寸设计的,本质上是为了块级元素左中右对齐而设计的。

**填充规则**

1.一侧定值，一侧auto，则auto为剩余空间大小

2.两侧auto，平分剩余空间

**margin垂直居中**

绝对定位，同时设置四个方位为0，设置宽度即可居中    

## margin合并

**只发生在垂直方向的块级元素上**

块级元素的上外边距和下外边距有时候会被合并为单个边距

1.块级元素

2.只发生在垂直方向

### 合并场景:
1.相邻兄弟元素 为了保持兄弟间距一致
```html
<ul>  
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
// 如果没有margin合并，那么第一个和最后一个与父元素的间距是其他兄弟元素间距的一半
```
2.父级与第一个/最后一个子元素 overflow: hidden解决 
```html
<div></div>
// 如果变成这样
<div>
  <div style="margin-top: 20px">
  </div>
</div>
// 如果没有合并，那么此时与之相邻的兄弟元素的间距，很可能变成变大
```
2.空块级元素的margin合并 添加内联元素
```html
<p>第一行</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p>第二行</p>

效果等同于
<p>第一行</p>
<p>第二行</p>

// 如果没有自身合并margin的话，就会中间空很多行
```
### 合并计算规则

1. 正正取大值
2. 正负值相加
3. 负负最负值

## margin无效情况

1. `inline` 非替换元素的垂直`margin`无效 

2. `margin`出现合并时，可能出现无效 

3. 绝对定位的非定位方位`margin`无效，实质上是不影响周围元素。 

4. 定高 `margin-bottom` 定宽`margin-right` 失效

5. `float`和 `overflow` 特殊情况

6. 内联特性导致`margin`失效 
