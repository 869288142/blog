
let path = "前端"
const repPath = '.'
const outputFile = 'README.md'
// 得到需要排除的文件夹
let include = ["前端","深入JS","CSS"]
// let include = []

let g = require("./script")
let config = {path, repPath, outputFile, include}
new g(config).run()