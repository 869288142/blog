{
  var order = function (orderType, pay, stock) {
    if (orderType === 1) {
      // 500元定金购买模式
      if (pay === true) {
        // 已支付定金
        console.log('500元定金预购, 得到100优惠券')
      } else {
        // 未支付定金，降级到普通购买模式
        if (stock > 0) {
          // 用于普通购买的手机还有库存
          console.log('普通购买, 无优惠券')
        } else {
          console.log('手机库存不足')
        }
      }
    } else if (orderType === 2) {
      // 200元定金购买模式
      if (pay === true) {
        console.log('200元定金预购, 得到50优惠券')
      } else {
        if (stock > 0) {
          console.log('普通购买, 无优惠券')
        } else {
          console.log('手机库存不足')
        }
      }
    } else if (orderType === 3) {
      if (stock > 0) {
        console.log('普通购买, 无优惠券')
      } else {
        console.log('手机库存不足')
      }
    }
  }
  order(1, true, 500) // 输出：500元定金预购, 得到100优惠券
}

// 第二版

{
  var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log('500元定金预购, 得到100优惠券')
    } else {
      order200(orderType, pay, stock) // 将请求传递给200元订单
    }
  }
  // 200元订单
  var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
      console.log('200元定金预购, 得到50优惠券')
    } else {
      orderNormal(orderType, pay, stock) // 将请求传递给普通订单
    }
    var orderNormal = function (orderType, pay, stock) {
      if (stock > 0) {
        console.log('普通购买, 无优惠券')
      } else {
        console.log('手机库存不足')
      }
    }
    // 测试结果：
    order500(1, true, 500) // 输出：500元定金预购, 得到100优惠券
    order500(1, false, 500) // 输出：普通购买, 无优惠券
    order500(2, true, 500) // 输出：200元定金预购, 得到50优惠券
    order500(3, false, 500) // 输出：普通购买, 无优惠券
    order500(3, false, 0) // 输出：手机库存不足
  }
}

// 第三版

{
  var order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
      console.log('500元定金预购，得到100优惠券')
    } else {
      return 'nextSuccessor' // 我不知道下一个节点是谁，反正把请求往后面传递
    }
  }
  var order200 = function (orderType, pay, stock) {
    if (orderType === 2 && pay === true) {
      console.log('200元定金预购，得到50优惠券')
    } else {
      return 'nextSuccessor' //
    }
  }
  var orderNormal = function (orderType, pay, stock) {
    if (stock > 0) {
      console.log('普通购买，无优惠券')
    } else {
      console.log('手机库存不足')
    }
  }

  // Chain.prototype.setNextSuccessor　指定在链中的下一个节点
  // Chain.prototype.passRequest　传递请求给某个节点
  class Chain {
    constructor(fn) {
      this.fn = fn
      this.successor = null
    }
    setNextSuccessor(successor) {
      return (this.successor = successor)
    }
    passRequest() {
      var ret = this.fn.apply(this, arguments)
      if (ret === 'nextSuccessor') {
        return (
          this.successor &&
          this.successor.passRequest.apply(this.successor, arguments)
        )
      }
      return ret
    }
  }
  // 构造责任链
  var chainOrder500 = new Chain(order500)
  var chainOrder200 = new Chain(order200)
  var chainOrderNormal = new Chain(orderNormal)
  chainOrder500.setNextSuccessor(chainOrder200)
  chainOrder200.setNextSuccessor(chainOrderNormal)

  chainOrder500.passRequest(1, true, 500) // 输出：500元定金预购，得到100优惠券
  chainOrder500.passRequest(2, true, 500) // 输出：200元定金预购，得到50优惠券
  chainOrder500.passRequest(3, true, 500) // 输出：普通购买，无优惠券
  chainOrder500.passRequest(1, false, 0) // 输出：手机库存不足
}

// AOP实现

{
  Function.prototype.after = function (fn) {
    var self = this
    return function () {
      var ret = self.apply(this, arguments)
      if (ret === 'nextSuccessor') {
        return fn.apply(this, arguments)
      }
      return ret
    }
  }
  var order = order500yuan.after(order200yuan).after(orderNormal)
  order(1, true, 500) // 输出：500元定金预购，得到100优惠券
  order(2, true, 500) // 输出：200元定金预购，得到50优惠券
  order(1, false, 500) // 输出：普通购买，无优惠券
}
