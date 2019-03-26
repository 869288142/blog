1.行内元素或者内联元素

  1.垂直居中

  设置行高和高度一致，如果没必要设置高度的话，可以直接利用line-height垂直性，直接设置需要的高度为line-height的高度亦可居中
```css
  .center-single-text {
    height: 100px;
    line-height: 100px;
  }
```    
  利用内联元素的vertical-align基线参考这一行的其他元素内联元素基线，设置一个伪元素来指定其基线为航中间，设置伪元素高度为100%,然后inline-block,vertical-align: middle
  接着设置需要被垂直居中的元素 vertical-align: middle 
```css
  .ghost-center:before {
    content: " ";
    display: inline-block;
    height: 100%;
    vertical-algin: middle;
  }
  .ghost-center center-element {
    display: inline-block;
    vertical-align: middle;
  }
```  
  2.水平居中
```css
/* 在父级元素设置 */
.center-chlidren {
  text-align: center;
}
```  
2.块级元素

  1.垂直居中
利用绝对定位将元素左上角移至父元素中心，然后将元素中心移至父元素中心即可。
```css
.parent {
  position: relative;
}
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%); 
}
```
  2.水平居中
```css
/* 在居中元素设置 */
.center-me {
  margin: 0 auto;
}
```
居中神器 flex

无需区分元素类型，一致地行为完成居中，需要注意兼容性
```css
.parent {
  display: flex;
  /* 水平居中 */
  justify-content: center; 
  /* 垂直居中 */
  align-items: center;
}  
```
