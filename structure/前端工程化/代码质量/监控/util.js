// todo
const fs = require("fs");
const sourceMap = require("source-map");
// 读取source-map
const { promisify } = require("util");
const readFile = promisify(fs.readFile);

async function readSourceMap(filePath) {
  let file = await readFile(filePath, { encoding: "utf-8" });
  return JSON.parse(file);
}

// 辅助函数，相对去掉相对部分
function fixPath(filepath) {
  return filepath.replace(/\.[\.\/]+/g, "");
}

// 将行号、列号转化到源代码
// 输出对应的代码块
async function outPutSourceInfo(filePath, line, column) {
  // 从文件系统读取对应的sourcemap
  let rawSourceMap = await readSourceMap(filePath);
  let { sources, sourcesContent } = rawSourceMap;
  // 利用火狐开源获取对应行、列代码映射信息
  const consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);

  const resultInfo = consumer.originalPositionFor({
    line: line,
    column: column,
  });

  const {
    source: sourcePath,
    line: sourceLine,
    column: sourceColumn,
    name,
  } = resultInfo;

  // 销毁工作
  consumer.destroy();

  let sourcesAbsolutePathsMap = {};
  // 解析错误代码片段
  sources.forEach((item) => {
    sourcesAbsolutePathsMap[fixPath(item)] = item;
  });
  // 源代码所在文件数组下标
  let rawSourceMapFilIndex = sourcesAbsolutePathsMap[sourcePath];

  // 从sourceMap从取出该文件的代码

  let curSourcesContent = sourcesContent[sources.indexOf(rawSourceMapFilIndex)];

  let curSourcesRowContent = curSourcesContent.split("\n")[sourceLine - 1];

  // 返回 文件路径 行、列、错误代码名称，此处优化，输出错误代码片段
  return {
    line: sourceLine,
    column: sourceColumn,
    name,
    sourcePath,
    // sourcesContent: curSourcesContent,
    curSourcesRowContent
  };
}

// 高亮提示,或者只输出对应短

const chalk = require("chalk");
const log = console.log;
var program = require("commander");
program
  .option("-p, --source-flie-path", "The generated source file")
  .option("-l, --ine", "The line number in the generated source")
  .option("-c, --column", "The column number in the generated source")
  .parse(process.argv);

let optionsLen = program.args.length;
if (optionsLen != 3) {
  log(chalk.red("Please check the options"));
  program.help();
  return;
}

const line = Number(program.args[1]);
const column = Number(program.args[2]);
const filePath = program.args[0];

outPutSourceInfo(filePath, line, column)
  .then(({ source, line, column, name, sourcesContent, curSourcesRowContent }) => {
    log(chalk.yellow("sourcecode info:"));
    log(chalk.blue("sourceCodePath") + ": " + chalk.green(source));
    log(chalk.blue("line") + ": " + chalk.green(line));
    log(chalk.blue("column") + ": " + chalk.green(column));
    log(chalk.blue("name") + ": " + chalk.green(name));
    // log(chalk.blue("sourcesContent") + ": " + chalk.green(sourcesContent));
    log(chalk.blue("curSourcesRowContent") + ": " + chalk.green(curSourcesRowContent));
  })
  .catch((err) => {
    log(chalk.red(err));
    program.help();
  });
