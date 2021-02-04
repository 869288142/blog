模式
命令模式 此时键入都为命令

光标移动 hjkl 坐下上右 n hjkl 移动多少行
0 $ 最前 最后H
G 移动到文件最后一行
gg 文件第一行

搜索
/word 向下i
?word 向上

n移动到搜索指令的下一个 N反向移动

查找全文件并替换
:%s/word1/word2/gc

删除 
x删除后一个
dd 删除整行
yy 复制
p 复制到下一行
P 复制到上一行

撤销 u
重做 ctrl+r
. 重复命令

移动 %匹配括号

屏幕 ctrl-V ctrl-e

选择连续字符 v
选择连续行 V

w 移动一个单词

输入模式  
enter 换行h
back space 删除前一个字符
del 删除后一个字符
方向键 在文本中移动光标
HOME/END 移动光标到航首页

底线命令模式




移动

移到到下一个单词 w
上一个b
移动到行头 HOME 
移动到行尾 END
插入新行  o O

跳转到文档开头
G 移动到文件最后一行
gg 文件第一行
查找
搜索
/word 向下i
?word 向上
n移动到搜索指令的下一个 N反向移动

查找全文件并替换
:%s/word1/word2/gc

选择连续字符 v
选择连续行 V
ctrl 
复制 yy
粘贴 p
括号匹配
取代模式R
*号 查找当前字符
全选 ggVG
选择一个单词 viw
