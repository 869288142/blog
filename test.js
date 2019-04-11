
let fpath = "前端"
const repPath = 'https://github.com/869288142/blog/tree/master'
const outputFile = 'README.md'

let g = require("./generateDir")

new g(repPath, outputFile, fpath).run()