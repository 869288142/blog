# sort
js的sort方法，我们一般传入一个回调用于单排序，也就根据某一个条件排序，那么一个场景需要多条件排序(多重排序)，我们怎么处理呢？

    如下例子，我们按学生的总分排序，如果总分相等，我们再按照语文成绩排序。
```javascript
var jsonStudents = [
    { name: "Dawson", totalScore: "197", Chinese: "100", math: "97" },
    { name: "HanMeiMei", totalScore: "196", Chinese: "99", math: "97" },
    { name: "LiLei", totalScore: "185", Chinese: "88", math: "97" },
    { name: "XiaoMing", totalScore: "196", Chinese: "96", math: "100" },
    { name: "Jim", totalScore: "196", Chinese: "98", math: "98" },
    { name: "Joy", totalScore: "198", Chinese: "99", math: "99" }
];

jsonStudents.sort(function(a, b) {
    var value1 = a.totalScore,
        value2 = b.totalScore;
    //总分相同 
    if (value1 === value2) {
        // 按语文分数降序排序
        return b.Chinese - a.Chinese;
    }
    // 总分不同，降序排序
    return value2 - value1;
});

console.log("jsonStudents :", jsonStudents);
```

<font color="#F00">关键点在于sort回调如何定义排序规则</font>