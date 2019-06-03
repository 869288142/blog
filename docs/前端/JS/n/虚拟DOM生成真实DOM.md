3.给出如下虚拟dom的数据结构，如何实现简单的虚拟dom，渲染到目标dom树
//样例数据
```js
let demoNode = ({
    tagName: 'ul',
    props: {'class': 'list'},
    children: [
        ({tagName: 'li', children: ['douyin']}),
        ({tagName: 'li', children: ['toutiao']})
    ]
});
```
//构建一个render函数，将demoNode对象渲染为以下dom
```html
<ul class="list">
    <li>douyin</li>
    <li>toutiao</li>
</ul>
```
