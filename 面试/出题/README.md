# 前端面试题

## http

* http 1 http 2 http3 区别

* https
    * 优劣势
    * https绝对安全吗，有什么方式攻击

* http缓存
    * 原理
    * 最佳方案


## CSS

* 盒模型有哪些

* 实现比例为3：2图形

* 讲一下margin合并问题

* 如何给元素增加点击区域而不改变布局大小

* css生效-下面文字应该是什么颜色

``` html
.red {
    color: red;
}
.blue {
    color: blue;
}
<div class='red blue'>font</div>
```
* BFC IFC FFC GFC

* 怎么清除内联元素之间的间隙

* 写出8种水平垂直居中的方式

* 如何实现自适应布局(rem 和 vw方式)

* 了解例如sass这类预编译语言吗，这些语言解决了什么问题

* 如何生成带有私有前缀的浏览器兼容代码

* 如何查询CSS的兼容性

* 管理css的现代方式有哪些，工程方面的，比如css module，除此之外还有哪些

## JS

* 相比var,let const的优势

* 写一个type函数，能够处理目前的JavaScript类型

* 说一下一个变量的查找过程

* 箭头函数适用场景

* this指向 bind实现原理 call实现原理

* 实现new  实现Object.create

* promise有什么好处和缺点,如何控制2个promise并行执行

* CommonJS 和 ES module区别

* 听说过TypeScript吗，解决的痛点是啥

* 如何对JavaScript非es6+环境实现兼容

* 常见手写
    * 防抖节流
    * 深拷贝
    * JSONP
    * flat
    * compose
    * 数组去重
    * 发布订阅模式

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













## 浏览器

*  存储 
    * cookie localStorage sessionStorage  IndexDB 区别

* DOM
    * 事件模型、事件委托    

* 跨域及其解决方案

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


## 安全

* XSS及其防范策略

* CSRF及其防范策略

## 算法基础

* 排序
    * 冒泡
    * 快排
* 搜索
    * 二分查找
* 二叉树
    * BFS
    * DFS       

* 常见
    * 字符出现的次数     

## 前端工程化

* 什么是前端工程化

* 基础建设

    * webpack
        * 价值
        * 性能优化-速度方面、体积方面
        * module-federation 的价值 

    *  脚手架
        * 配置过吗
        * 设计过吗

    *  CICD
        * 配置过吗
        * 设计过吗

    *  Docker
        * 配置过吗
        * 设计过吗  

* 质量管理
    * 风格控制
    * 低级错误控制

* 效率提升
    * 组件库
    * 工具库    

* 监控

    * 性能监控原理

    * 异常监控原理

## 前端架构

* 如何看待新旧技术

* 技术选型流程

* 大型项目目录组织

* 大型项目架构设计
    * 了解相关架构理论吗，如DDD，简洁架构
    * 有落地的实践吗

## 前沿技术

* 微前端

* serverless

* 前端智能化






