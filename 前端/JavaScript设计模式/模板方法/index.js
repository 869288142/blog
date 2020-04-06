class Beverage {
  boilWater() {
    console.log('把水煮沸')
  }
  brew() {
    throw new Error('子类必须重写brew方法')
  }
  pourInCup() {
    throw new Error('子类必须重写pourInCup方法')
  }
  addCondiments() {
    throw new Error('子类必须重写addCondiments方法')
  }
  customerWantsCondiments() {
    return true // 默认需要调料
  }
  init() {
    this.boilWater()
    this.brew()
    this.pourInCup()
    if (this.customerWantsCondiments()) {
      // 如果挂钩返回true，则需要调料
      this.addCondiments()
    }
  }
}

class CoffeeWithHook extends Beverage {
  brew() {
    console.log('用沸水冲泡咖啡')
  }
  pourInCup() {
    console.log('把咖啡倒进杯子')
  }
  addCondiments() {
    console.log('加糖和牛奶')
  }
  customerWantsCondiments() {
    return window.confirm('请问需要调料吗？')
  }
}

let coffeeWithHook = new CoffeeWithHook()
coffeeWithHook.init()

// JavaScript版本

var Beverage = function (param) {
  var boilWater = function () {
    console.log('把水煮沸')
  }
  var brew =
    param.brew ||
    function () {
      throw new Error('必须传递brew方法')
    }
  var pourInCup =
    param.pourInCup ||
    function () {
      throw new Error('必须传递pourInCup方法')
    }
  var addCondiments =
    param.addCondiments ||
    function () {
      throw new Error('必须传递addCondiments方法')
    }
  var F = function () {}
  F.prototype.init = function () {
    boilWater()
    brew()
    pourInCup()
    addCondiments()
  }
  return F
}
var Coffee = Beverage({
  brew: function () {
    console.log('用沸水冲泡咖啡')
  },
  pourInCup: function () {
    console.log('把咖啡倒进杯子')
  },
  addCondiments: function () {
    console.log('加糖和牛奶')
  },
})
var Tea = Beverage({
  brew: function () {
    console.log('用沸水浸泡茶叶')
  },
  pourInCup: function () {
    console.log('把茶倒进杯子')
  },
  addCondiments: function () {
    console.log('加柠檬')
  },
})
var coffee = new Coffee()
coffee.init()
var tea = new Tea()
tea.init()
