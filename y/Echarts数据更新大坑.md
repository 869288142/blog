今天使用了一个Echarts来实现柱状图和直线图统计组合，每次通过axios(ajax库)来请求新数据来刷新数据，但是发现请求数据确实是对应变化到了options变量中，后台数据条数只有一条，但是图表数据没发生变化。

    思考：
        一开始我傻乎乎地认为是vue的数据没响应，我就把options放到data选项中去，但是图表任然没发生变化，vue-devtool查看到对应的数据发生了变化。

    解决原理以及方案：

        官方文档setOption方法签名如下：
        setOption(option, notMerge, lazUpdate)

        可以看到第二个参数，表示合并，这里表示是否option合并数据，默认值为false，这就是为什么数据源条数变化了，而图表数据条数缺没发生变化，正确姿势是setOption(options, true)
        
