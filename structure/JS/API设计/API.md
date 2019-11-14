# API设计原则

## 流式接口

流式接口通常跟链式方式关联起来

它目的是为了使得代码可读性更强

```js
// regular API calls to change some colors and add an event-listener
var elem = document.getElementById("foobar");
elem.style.background = "red";
elem.style.color = "green";
elem.addEventListener('click', function(event) {
  alert("hello world!");
}, true);

// (imaginary) method chaining API
DOMHelper.getElementById('foobar')
  .setStyle("background", "red")
  .setStyle("color", "green")
  .addEvent("click", function(event) {
    alert("hello world");
  });
```

### 获取与操作分离

在流式接口下，方法获取与操作这一规则被故意打破，因为我们必须返回对象本身以实现流式接口，一个例子来自JQuery

```js
var $elem = jQuery("#foobar");

// CQS - command
$elem.setCss("background", "green");
// CQS - query
$elem.getCss("color") === "red";

// non-CQS - command
$elem.css("background", "green");
// non-CQS - query
$elem.css("color") === "red";
```

获取和操作由参数决定，这使得我们暴露的细节更加少，但没有必要特意去实现这样的API，而且这样的API被称为函数重载，文档描述可能会比较困难。

## 一致性

永远保持风格的一致性

## 函数参数

### 为调用者减少使用成本

```js
jQuery("#some-selector")
  .css("background", "red")
  .css("color", "white")
  .css("font-weight", "bold")
  .css("padding", 10);

jQuery("#some-selector").css({
  "background" : "red",
  "color" : "white",
  "font-weight" : "bold",
  "padding" : 10
});
```

### 类型检测

```js
DateInterval.prototype.days = function(start, end) {
  return Math.floor((end - start) / 86400000);
};

DateInterval.prototype.days = function(start, end) {
  if (!(start instanceof Date)) {
    start = new Date(start);
  }
  if (!(end instanceof Date)) {
    end = new Date(end);
  }

  return Math.floor((end.getTime() - start.getTime()) / 86400000);
};
```
### 处理undefined

```js
function testUndefined(expecting, someArgument) {
  if (someArgument === undefined) {
    console.log("someArgument was undefined");
  }
  if (arguments.length > 1) {
    console.log("but was actually passed in");
  }
}

testUndefined("foo");
// prints: someArgument was undefined
testUndefined("foo", undefined);
// prints: someArgument was undefined, but was actually passed in
```

### 参数映射

参数使用配置对象而不是具体参数,避免了函数参数过长，而且可读性更强

```js
function nightmare(accepts, async, beforeSend, cache, complete, /* and 28 more */) {
  if (accepts === "text") {
    // prepare for receiving plain text
  }
}

function dream(options) {
  options = options || {};
  if (options.accepts === "text") {
    // prepare for receiving plain text
  }
}
```

### 默认值

## 可扩展性

### 回调

。当您觉得特定的任务处理方式可能与默认代码不同时，请将该代码重构为可配置的回调函数，以允许API用户轻松地覆盖它

### 事件


### 钩子

```js
// define a custom css hook
jQuery.cssHooks.custombox = {
  get: function(elem, computed, extra) {
    return $.css(elem, 'borderRadius') == "50%"
      ? "circle"
      : "box";
  },
  set: function(elem, value) {
    elem.style.borderRadius = value == "circle"
      ? "50%"
      : "0";
  }
};

// have .css() use that hook
$("#some-selector").css("custombox", "circle");
```

### get、set生成

```js
DateInterval.prototype.start = function(date) {
  if (date === undefined) {
    return new Date(this.startDate.getTime());
  }

  this.startDate.setTime(date.getTime());
  return this;
};

DateInterval.prototype.end = function(date) {
  if (date === undefined) {
    return new Date(this.endDate.getTime());
  }

  this.endDate.setTime(date.getTime());
  return this;
};

var accessors = ["start", "end"];
for (var i = 0, length = accessors.length; i < length; i++) {
  var key = accessors[i];
  DateInterval.prototype[key] = generateAccessor(key);
}

function generateAccessor(key) {
  var value = key + "Date";
  return function(date) {
    if (date === undefined) {
      return new Date(this[value].getTime());
    }

    this[value].setTime(date.getTime());
    return this;
  };
}
```

### 引用陷阱

值传递可以提高效率，但是很容易在函数导致错误，格外小心


## 连续调用问题

```js
jQuery('.wont-find-anything')
  // executed although there is nothing to execute against
  .somePlugin().someOtherPlugin();

var $elem = jQuery('.wont-find-anything');
if ($elem.length) {
  $elem.somePlugin().someOtherPlugin();
}
```

## 错误处理

对必要的参数进行校验，可以减少未来调用错误


## 流式接口调试

## 接口文档