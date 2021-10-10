## css目前存在的问题：


### 全局作用域

全局作用域会导致以下问题，解决的方案就是限制css作用域

#### 新增

``` css
/* other.css */
.xxx {

}
/* 在core.css 新增xxx规则，导致和其他文件的规则冲突 */
/* core.css */
.xxx {

}
```


#### 修改

``` css
.xxx {
    /* ...  找到了对应UI进行修改，不小心影响到了其他引用到这个类的UI */
    color: red;
}
```



#### 删除

``` css
/**删除css样式表，可能出现还有引用的元素，，导致出问题**/
.xxx {
    
}
```

### 复用

通过划分模块提取公共部分来实现

ITCSS

##  解决思路

### 局部作用域化

* css module

覆盖样式困难

* css in js

运行时消耗

没法分离css，进行缓存

### 复用

复用这块的解决方案是`sass`加开发规范：

**基础复用**

`Settings` – 与预处理器一起使用，包含颜色、字体等定义

`Tools` – 工具与方法，比如 `mixins`

**样式重置**

`reset` - 基本样式重置

**工具类**

`utils` – 工具类，比如 `.hidden`

**模块**

`module` - 模块样式

**主题类**

`theme` - 主题样式

## 参考文章

[css-in-js 杀鸡用牛刀](https://github.com/dt-fe/weekly/blob/master/27.%E7%B2%BE%E8%AF%BB%E3%80%8Acss-in-js%20%E6%9D%80%E9%B8%A1%E7%94%A8%E7%89%9B%E5%88%80%E3%80%8B.md)

