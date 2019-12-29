# base64编码

编码只是场景下一个实体的表示方式，各种编码各有好处，而base64也有它的好处，其本质是一种将二进制数据转成文本数据的方案

## 优缺点


* 缺点

数据比原先大三分之一

## 应用场景

* 图片内联

将二进制资源进行base64编码，内联到文件中，可以减少http请求，但是目前在http优化下，此方案已经被质疑有负优化的嫌疑，在权衡一次请求的成本和文件内联大小速度下，可以使用

* 加密

base64可以作为加密算法的简单实现，效率较高

## 编码解码方式

### 浏览器内置，兼容性良好

```js
window.atob // 编码

window.btoa // 解码
```

**存在问题**

中文编码会报错，可以使用如下处理方式

```js
function b64EncodeUnicode(str) {
    // first we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

b64DecodeUnicode('4pyTIMOgIGxhIG1vZGU='); // "✓ à la mode"
b64DecodeUnicode('Cg=='); // "\n"
```

### base64.js 

一个通用的库，需要考虑比较旧的环境兼容，就需要用到它了



