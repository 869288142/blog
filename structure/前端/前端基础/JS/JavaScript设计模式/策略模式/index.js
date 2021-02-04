{
  let calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
      return salary * 4
    }

    if (performanceLevel === 'A') {
      return salary * 3
    }

    if (performanceLevel === 'B') {
      return salary * 2
    }
  }

  calculateBonus('B', 20000)
}

// 封装分支算法

{
  let calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
      return performanceS(salary)
    }

    if (performanceLevel === 'A') {
      return performanceA(salary)
    }

    if (performanceLevel === 'B') {
      return performanceB(salary)
    }
  }

  function performanceS(salary) {
    return salary * 4
  }

  function performanceA(salary) {
    return salary * 3
  }

  function performanceB(salary) {
    return salary * 2
  }

  calculateBonus('B', 20000)
}

//  策略模式重构-面对对象

{
  class performanceS {
    calculate(salary) {
      return salary * 4
    }
  }

  class performanceA {
    calculate(salary) {
      return salary * 3
    }
  }

  class performanceB {
    calculate(salary) {
      return salary * 2
    }
  }

  class Bonus {
    constructor() {
      this.salary = null // 原始工资
      this.strategy = null // 绩效等级对应的策略对象
    }
    setSalary(salary) {
      this.salary = salary // 设置员工的原始工资
    }
    setStrategy(strategy) {
      this.strategy = strategy // 设置员工绩效等级对应的策略对象
    }
    getBonus() {
      // 取得奖金数额
      return this.strategy.calculate(this.salary) // 把计算奖金的操作委托给对应的策略对象
    }
  }

  let bonus = new Bonus()
  bonus.setSalary(10000)
  bonus.setStrategy(new performanceS()) // 设置策略对象
  console.log(bonus.getBonus()) // 输出：40000
  bonus.setStrategy(new performanceA()) // 设置策略对象
  console.log(bonus.getBonus()) // 输出：30000
}

// 策略模式-JavaScript版本

{
  let strategies = {
    S(salary) {
      return salary * 4
    },
    A(salary) {
      return salary * 3
    },
    B(salary) {
      return salary * 2
    },
  }

  let calculateBonus = function (level, salary) {
    return strategies[level](salary)
  }
}

// 表单验证
{
  let strategies = {
    isNonEmpty(value, errorMsg) {
      // 不为空
      if (value === '') {
        return errorMsg
      }
    },
    minLength(value, length, errorMsg) {
      // 限制最小长度
      if (value.length < length) {
        return errorMsg
      }
    },
    isMobile(value, errorMsg) {
      // 手机号码格式
      if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
        return errorMsg
      }
    },
  
  
  }

  let validataFunc = function () {
    var validator = new Validator() /***************添加一些校验规则****************/ // 创建一个validator对象
    validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空')
    validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位')
    validator.add(registerForm.phoneNumber, 'isMobile', '手机号码格式不正确')
    var errorMsg = validator.start() // 获得校验结果
    return errorMsg // 返回校验结果
  }

  var registerForm = document.getElementById('registerForm')
  registerForm.onsubmit = function () {
    var errorMsg = validataFunc() // 如果errorMsg有确切的返回值，说明未通过校验
    if (errorMsg) {
      alert(errorMsg)
      return false // 阻止表单提交
    }
  }

  //Validator 实现 
  class Validator {
    constructor() {
      this.validatorFuncs = []
    }
    add(dom, rules) {
       rules.forEach((rule) => {
         let ary = rule.strategy.split(":");
         let errorMsg = rule.errorMsg
         this.validatorFuncs.push(function() {
           let strategy = ary.shift()
   
           ary.unshift(dom,value)
   
           ary.push(errorMsg)
   
           return strategies[strategy].apply(dom,ary)
         })
       })
    }
    start() {
      for(let validatorFunc of this.validatorFuncs) {
        let msg = validatorFunc()
        if(msg) {
          return msg
        }
      }   
    }
  }
}
