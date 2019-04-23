
####解析雪碧图


####DOM 绑定多个事件
Var  btn=document.getElementById(‘btn’);

//事件监听 绑定多个事件

var btn4 = document.getElementById("btn4");

btn4.addEventListener("click",hello1);

btn4.addEventListener("click",hello2);

 

function hello1(){

 alert("hello 1");

}

function hello2(){

 alert("hello 2");

}

DOM操作

事件模型和事件代理