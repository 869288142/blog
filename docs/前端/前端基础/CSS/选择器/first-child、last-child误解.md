# first-child、last-child误解
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190226220304618-1916580545.png)

MDN解释兄弟元素中的第一个元素

然后今天写的时候这样想出现了问题

![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190226220503483-1477971004.png)

![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190226220531783-259513845.png)

并没有加上边框

W3C解释
![](https://img2018.cnblogs.com/blog/1361028/201902/1361028-20190226220728761-1921825736.png)

尝试去掉h3,发现span加上了边框

E:first-child含义

**父元素中第一个元素且第一个元素是E才是所谓的first-child,
last-child也类似** 