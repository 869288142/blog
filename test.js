
let path = "前端"
const repPath = 'https://github.com/869288142/blog/tree/master'
const outputFile = 'README.md'
// 得到需要排除的文件夹
let include = ["前端","深入JS","CSS"]
let g = require("./script")
let config = {path, repPath, outputFile, include}
new g(config).run()