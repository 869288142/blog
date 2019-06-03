localStorage
    结构  key-value对
写入方法:
    localStorage.setItem('key',value)
读取方法:
    localStorage.getItem('key')
更改方法：
    可以使用写入方法重写key
删除方法：
    removeItem('key')
    clear()
PS:存入的value都会被转化成string

需要使用JSON.parse()取入，JSON.stringify()存入


lockr插件

Lockr.set('key',value)  vule可以是String Number Array Object
Lockr.get('key',default_value)
Lock.rm('key')