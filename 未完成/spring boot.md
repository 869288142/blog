配置数据库 mysql  application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/boot
spring.datasource.username=root

配置hibernate 输出SQL语句
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
spring.jpa.properties.hibernate.show_sql=true

在BootdemoApplication 所属包的中新建 controller service dao entity包



controller 
@RestController 
参数获取
@RequestParam(value="a") 
@RequestBody 
状态码设置
@ResponseStatus(reason="ok",code=HttpStatus.OK)
响应头设置 content-type
produces="application/json;charset=UTF-8") RequestMapping

service 
@service

dao 

extends JpaRepository<EntityType, IdType>


entity 
@Entity (name? string)
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@column
双向关联
