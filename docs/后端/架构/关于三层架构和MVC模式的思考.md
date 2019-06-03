MVC模式 
核心：

1.解耦Model和View，即使得Model可以被不同的展示，比如一批统计数据可以分别用柱状图、饼图表示

2.Controller用来保证Model和View的同步

    Model 模型层  负责业务逻辑和数据库交互
    View  视图层  展示数据
    Controller 控制器 

三层架构

1.核心Entity层在三层中作为数据传递实体

    UI 界面层 展示数据
    BLL 业务逻辑层 数据处理、传递
    DAL 数据访问层 访问数据库
    
MVC与三层架构联系(结合):

    界面层
      View 视图层
      Controller 控制器

    业务逻辑层
      Model Service
    数据访问层
      Model  DAO
   


三层架构和MVC结合模式下注意点:
    
    Controller 对请求参数校验、转换
    Service 负责具体的业务逻辑
    Model 封装数据库操作

