###深藏不露的width

#### width的值

**默认值auto**

特性

1. 充分利用可用空间
    比如说div，p默认是100%于父级容器的，这种行为有个专用名词 fill-available

2. 收缩与包裹
    典型代表是浮动、绝对定位、inline-block元素，英文为shrink-fit,直译收缩到合适，这里意译为包裹性更好。

3. 收缩到最小
    最容易是table-layout auto的表格中，会出现中文断行。

4. 超出容器限制
    连续很长的内容或者内联元素设置了white-space nowrap


### 尺寸

#### 外部尺寸与流体特性的关系
1. 正常流宽度 
  以div块级元素为例，放在任意的容器中，都会铺满，设置宽度为100%是无意义的，而且破坏了其流动性

2. 格式化宽度
  仅仅出现在绝对定位模型中，absolute、或fixed，此时宽度由外部尺寸决定，其宽度大小由祖先元素进行计算，由left、top和祖先元素宽度决定

#### 内部尺寸与流体特性的关系  
1. 包裹性
2. 首选最小宽度
  是指元素最合适的最小宽度。
  [凹型](https://demo.cssworld.cn/3/2-6.php)
3. 最大宽度
  等同于“包裹性”元素设置white-space: nowrap的宽度
  [实现水平图片切换](https://demo.cssworld.cn/3/2-7.php)

#### width细节  

##### 设置宽度带来的问题
1. 流动性丢失
2. 与现实世界不一致的困扰
    新手容易在CSS属性值变化时，空间不足，导致页面布局错位的问题。

解决方案
宽度分离原则，即width不与padding、border、margin共存，包裹多一层来使用width

更加好的方案 box-sizing

box-sizing发明的初衷是为了解决原生普通文本框\<input>和文本域\<textarea>100%自适应父容器的宽度




#### max-width
默认值 none
#### min-width
默认值 auto


