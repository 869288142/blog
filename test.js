
let fs = require("fs")
let path = "前端"
const repPath = 'https://github.com/869288142/blog/tree/master'
const outputFile = 'README2.md'
// 得到需要排除的文件夹
let exclude = ["前端","深入JS","CSS"]
let files = fs.readdirSync(path)
files = files.filter(e => !exclude.includes(e))
// 生成工具对象并传入配置
let g = require("./script")
let config = {path, repPath, outputFile, include: files}
new g(config).run()