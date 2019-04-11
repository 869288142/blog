var fs = require('fs') //读写文件就需要引入fs--文件系统模块
var sep = require('path').sep //平台的文件路径分割符

let repPath = 'https://github.com/869288142/blog/tree/master'
/**
 * 递归输出文件目录、文件名
 */
var readDir = function(path) {
  var exists = fs.existsSync(path), //以同步的方法检测目录是否存在
    stat = fs.statSync(path) //文件信息

  if (exists && stat) { 
    //如果目录存在
    if (stat.isFile()) {
      //如果是文件
      var fpath = path.split(sep) //以路径分割符将路径分割成数组，后面调用symbol方法根据数组长度输出文件名前面的"-"条数
      // console.info(symbol(fpath) + fpath[fpath.length - 1]);  //打印文件名
      let fileName = fpath[fpath.length - 1]
      let updateTime = formatDate(stat.mtime) 
      console.log(fpath);
      fs.appendFileSync(
        'dir.md',
        `* [${fileName.replace(/(.*)\.md/,'$1')}](${repPath}/${fpath.join(
          '/'
        )} ) 更新于${updateTime} \r\n \r\n`,
      )
    } else if (stat.isDirectory()) {
      //如果是文件夹
      var fpath = path.split(sep) //以路径分割符将路径分割成数组
      // console.info(symbol(fpath) + fpath[fpath.length - 1]);
      let fileName = fpath[fpath.length - 1]
      var files = fs.readdirSync(path) //返回 指定目录下所有文件名称 的数组对象并赋给files
      console.log(files);
      if (!fpath.includes('.git') && files.length !== 1 && files.length !== 0) {
        fs.appendFileSync(
          'dir.md',
          `${fileName === "n" ? "   \r\n \r\n**撰写中**": `**${fileName}**`}  \r\n \r\n`,
        )
        if (files && files.length > 0) {
          //如果文件夹不为空
          let nIndex = files.findIndex((f) => f === "n")
          console.log(nIndex)
          if(~nIndex) {
            files.splice(nIndex, 1)
            files.push("n")
          }
          files.forEach(function(file) {
            //遍历数组
            readDir(path + sep + file) //递归
          })
        }
      }
    }
  } else {
    console.info('根目录不存在.')
  }
}

/**
 * 符合拼接方法
 */
var symbol = function(fpath) {
  var s = ' - '
  for (var i = 1; i < fpath.length; i++) {
    s += ' - '
  }
  return s
}

function formatDate(date) {
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
}

readDir('前端') //调用方法(反斜杠转义，所以用两个，循环遍历输出E盘下mongo文件夹内的文件名到dir.txt
