# 前端面试题

## 通信协议

### TCP

* TCP特点
    * 面向连接、可靠
        * 三次握手
        * 四次挥手
        

### UDP
* 无连接

### DNS

* 解析过程
    * 缓存
        * 浏览器缓存
        * 系统缓存
        * 路由器缓存
        * ISP缓存
    * 解析
        * 根域名服务器
        * 顶级域名服务器
        * ....     

## http

### http请求方法

* get post区别

* restful

### http状态码

* 常见状态码含义

* 301和302区别

### http缓存

* 强缓存、协商缓存

* 启发式缓存

### http压缩

* 常见压缩格式

* 静态压缩与动态压缩

### http迭代

* http0.9、1.0、1.1、2.0、3.0

### http安全

* TLS
    * 报文加密
        * 非对称加密
        * 对称加密

    * 报文完整性校验
        * MAC

    * 报文否认验证    
        * 数字签名

    * 中间人攻击
        * CA证书
        * 证书伪造    

### http鉴权
* 方案
    * jwt
    * session

## HTML
* 组成
    * 标签
        * meta
            * 字符集
            * 文档类型
            * 优先内核
            * 优先版本
    * 属性
* 语义化

* 无障碍

## CSS

* 版本
    * css3

* 预编译语言
    * sass

* 样式重置

* 设计模式

* 工程化方案

* 兼容

* 响应式布局

* 盒模型

* 选择器
    * 选择器
    * 层叠性
        * 来源
        * 特殊性
        * 声明顺序
        * 内联样式

* 位置
    * 位置
        * 相对定位
        * 绝对定位
        * 固定定位
    * 层叠性

* 常见布局
    *   单栏
    *   双栏
    *   三栏
    *   水平垂直居中

* 布局工具
    * inline-block
    * float
    * flex
    * grid

* 动画
    * transition
    * animation    

## JS
* 类型
    * 类型类别
    * 区分类型
* 作用域
    * 类型
        * 词法作用域
        * 动态作用域        
    * 作用域链

    * 闭包

* 函数
    * 类型
        * 普通函数
        * 箭头函数
    * 函数借用

* 类
    * this
    * 原型链
    * class
    * extend

* 模块
    * 基础
        * IIFE
        * 闭包
    * 模块规范    

* 兼容
    * 语法
    * API

* 异步
    * 理论
        * eventloop
    * 实现方案    \

* 环境
    * [setInterval和setTimeout](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/259 )
   

## 浏览器

* DOM
    * 事件
        * 事件模型
            * 捕获模型
            * 冒泡模型
        * 事件委托
    * DOM操作

* BOM
    * location
    * history
    * navigator
    * screen

* 浏览器渲染
    * DOM Tree
    * CSSDOM Tree
    * Render Tree
    * paint

* 请求
    * XHR
    * fetch

* 本地存储
    * cookie
    * localStorage
    * sessionStorage
    * indexDB

* 安全策略
    * 跨域
        * DOM跨域
        * ajax跨域        

## 前端工程化

* 代码质量
    * 代码风格
    * 代码错误
    * 静态约束
    * 代码安全
* 代码维护
    * 代码文档
    * 单元测试
    * 异常监控    
* 效率
    * 代码
        * 组件库
        * 工具库
    * 部署
        * CICD
    * 构建
        * 脚手架                

## Vue

* Vue响应式原理

* vue2响应式缺陷
    * 缺陷根源及场景
    * 解决方案
    * Vue3怎么解决的

* 为什么Vue2要增加虚拟DOM

    * 没有虚拟DOM我们还能够跨平台吗

    * Vue的列表key使用index有什么问题

* 虚拟DOM在SSR有什么问题，可以怎么优化

* Vue SSR原理概述

* 为什么Vue需要nextTick

* 为什么Vue不需要react 类似 shouldComponentUpdate的机制，也没有实现fiber

* v-if 和 v-show区别

* vue2逻辑复用方式，vue3 hook有什么优势

* 父子组件通信方式

* 路由的query和param方式区别













## 性能优化

* CDN原理

* 重排重绘

* 图片优化技巧
    * 编码格式，如webp
    * 缩略图
    * 自适应图片
    * 懒加载

* 虚拟滚动    

* Vue优化技巧

* 性能排查手段有哪些







