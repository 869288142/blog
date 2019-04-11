let fs = require("fs")
let path = require("path")
/**
 * 
 * @param {string} fpath
 * 扫描的文件相对路径 
 */

let ignoreDir = ["n"]

let readDir = function(fpath) {
  // 生成绝对路径
  // 读取文件状态
  let stat = fs.statSync(fpath)
  // 判断为文件则输出
  if(stat.isFile()){
    fs.appendFileSync(
      'dir.md',
       `${fpath}\r\n`,
    )
    console.log(fpath);
  }
  // 判断目录则读取子目录，进行递归，并在子目录数目为0时结束递归
  if(stat.isDirectory()){
    let files = fs.readdirSync(fpath)
    fs.appendFileSync(
      'dir.md',
       `${fpath}\r\n`,
    )
    files.forEach((filename) => {
      fpath = path.join(fpath, filename)
      readDir(fpath)
    })
  }
}

readDir("./前端")