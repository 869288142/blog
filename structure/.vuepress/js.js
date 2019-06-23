const collapsable = true
module.exports = {
  '/JS/': [
    {
      title: '环境', // 侧边栏名称
      collapsable,
      children: ['/JS/环境/环境']
    },
    {
      title: '类型', // 侧边栏名称
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
      title: '类型转换', // 侧边栏名称
      collapsable,
      children: ['/JS/类型转换/显式强制转换', '/JS/类型转换/隐式强制转换']
    },
    {
      title: '变量', // 侧边栏名称
      collapsable,
      children: ['/JS/变量/变量提升', '/JS/变量/变量声明', '/JS/变量/变量赋值']
    },
    {
      title: '词法', // 侧边栏名称
      collapsable,
      children: [
        '/JS/词法/语法',
        '/JS/词法/ASI',
        '/JS/词法/赋值表达式',
        '/JS/词法/逗号运算符'
      ]
    },
    {
      title: '语法', // 侧边栏名称
      collapsable,
      children: [
        '/JS/语法/new',
        '/JS/语法/Object.assign',
        '/JS/语法/sort',
        '/JS/语法/数组遍历小结',
        '/JS/语法/深拷贝与浅拷贝',
        '/JS/语法/类数组转数组',
        '/JS/语法/迭代器Iterator',
        '/JS/语法/防篡改对象'
      ]
    },
    {
      title: '作用域', // 侧边栏名称
      collapsable,
      children: ['/JS/作用域/VO', '/JS/作用域/作用域', '/JS/作用域/闭包']
    },
    {
      title: '函数', // 侧边栏名称
      collapsable,
      children: ['/JS/函数/函数调用']
    },
    {
      title: '对象', // 侧边栏名称
      collapsable,
      children: ['/JS/对象/获取属性']
    },
    {
      title: '类', // 侧边栏名称
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
      title: '模块', // 侧边栏名称
      collapsable,
      children: [
        '/JS/模块/import导入细节',
        '/JS/模块/NodeJS模块和ES6模块系统语法及注意点'
      ]
    },
    {
      title: '异步', // 侧边栏名称
      collapsable,
      children: [
        '/JS/异步/异步概念',
        '/JS/异步/promise',
        '/JS/异步/async、await'
      ]
    },
    {
      title: '正则表达式', // 侧边栏名称
      collapsable,
      children: ['/JS/正则表达式/正则表达式']
    },
    {
      title: '错误处理', // 侧边栏名称
      collapsable,
      children: ['/JS/错误处理/错误', '/JS/错误处理/思考']
    }
  ]
}
delete require.cache[module.filename]