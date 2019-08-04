
// let path = "前端"
// const repPath = '.'
// const outputFile = 'SUMMARY.md'
// // 得到需要排除的文件夹
// let include = ["前端","JS","CSS","HTML","浏览器","Vue","Webpack"]
// // let include = []

// let g = require("./script")
// let config = {path, repPath, outputFile, include}
// new g(config).run()



let obj =  {
  a : "a"
}

Object.prototype.b = "b" 

Object.defineProperty(obj, "c", {
  value: "c"
})
let {a, b, c} = obj
console.log(a, b, c);