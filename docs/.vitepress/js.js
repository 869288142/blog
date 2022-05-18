const collapsable = true
module.exports = {
  '/JS/': [
    {
      text: '环境', // 侧边栏名称
      collapsable,
      children: ['/JS/环境/环境']
    },
    {
      text: '类型', // 侧边栏名称
      collapsable,
      children: [
        '/JS/类型/开篇',
        '/JS/类型/undefined',
        '/JS/类型/null',
        '/JS/类型/boolean',
        '/JS/类型/number',
        '/JS/类型/string',
        '/JS/类型/symbol',
        '/JS/类型/对象',
        '/JS/类型/对象类型检测'
      ]
    },
    {
      text: '类型转换', // 侧边栏名称
      collapsable,
      children: ['/JS/类型转换/显式强制转换', '/JS/类型转换/隐式强制转换']
    },
    {
      text: '变量', // 侧边栏名称
      collapsable,
      children: ['/JS/变量/变量提升', '/JS/变量/变量声明', '/JS/变量/变量赋值']
    },
    {
      text: '词法', // 侧边栏名称
      collapsable,
      children: [
        '/JS/词法/语法',
        '/JS/词法/ASI',
        '/JS/词法/赋值表达式',
        '/JS/词法/逗号运算符'
      ]
    },
    {
      text: '语法', // 侧边栏名称
      collapsable,
      children: [
        '/JS/语法/new',
        '/JS/语法/Object.assign',
        '/JS/语法/sort',
        '/JS/语法/数组遍历小结',
        '/JS/语法/深拷贝与浅拷贝',
        '/JS/语法/类数组转数组',
        '/JS/语法/迭代器Iterator',
        '/JS/语法/防篡改对象',
        '/JS/语法/可选运算符和空值合并运算符'
      ]
    },
    {
      text: '作用域', // 侧边栏名称
      collapsable,
      children: ['/JS/作用域/VO', '/JS/作用域/作用域', '/JS/作用域/闭包']
    },
    {
      text: '函数', // 侧边栏名称
      collapsable,
      children: [
        '/JS/函数/函数调用',
        '/JS/函数/借用函数',
        '/JS/函数/惰性函数'
      ]
    },
    {
      text: '对象', // 侧边栏名称
      collapsable,
      children: [
        '/JS/对象/获取属性',
        '/JS/对象/判断对象',
      ]
    },
    {
      text: '类', // 侧边栏名称
      collapsable,
      children: [
        '/JS/类/对象创建',
        '/JS/类/原生函数',
        '/JS/类/ES6类',
        '/JS/类/原型链',
        '/JS/类/类继承',
        '/JS/类/ES6继承',
        '/JS/类/instanceof',
        '/JS/类/类族检测、原型检测',
        '/JS/类/this'
      ]
    },
    {
      text: '模块', // 侧边栏名称
      collapsable,
      children: [
        '/JS/模块/import导入细节',
        '/JS/模块/NodeJS模块和ES6模块系统语法及注意点'
      ]
    },
    {
      text: '异步', // 侧边栏名称
      collapsable,
      children: [
        '/JS/异步/异步概念',
        '/JS/异步/promise',
        '/JS/异步/async、await',
        '/JS/异步/Promise模式'
      ]
    },
    {
      text: '正则表达式', // 侧边栏名称
      collapsable,
      children: ['/JS/正则表达式/正则表达式']
    },
    {
      text: '错误处理', // 侧边栏名称
      collapsable,
      children: ['/JS/错误处理/错误处理规范', '/JS/错误处理/思考']
    },
    {
      text: '代码规范', // 侧边栏名称
      collapsable,
      children: ['/JS/代码规范/基本风格', '/JS/代码规范/语言风格']
    },
    {
      text: '设计模式', // 侧边栏名称
      collapsable,
      children: ['/JS/设计模式/发布订阅模式']
    },
    {
      text: '优化', // 侧边栏名称
      collapsable,
      children: ['/JS/优化/条件优化']
    },
  ]
}
delete require.cache[module.filename]