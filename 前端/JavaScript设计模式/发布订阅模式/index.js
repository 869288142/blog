{
  class EventEmitter {
    constructor() {
      this._events = {}
    }
    on(event, callBack) {
      ;(this._events[event] || (this._events[event] = [])).push(callBack)
    }
    off(event) {
      this._events[event] = []
    }
    emit(event) {
      this._events[event].forEach((cbs) => {
        cbs()
      })
    }
  }

  let eventEmitter = new EventEmitter()

  eventEmitter.on('test', function () {
    console.log(3)
  })

  eventEmitter.emit('test')
}

// 发布时添加参数
{
  class EventEmitter {
    constructor() {
      this._events = {
  
      }
    }
    on(event, callBack) {
      (this._events[event] || (this._events[event] = [])).push(callBack) 
    }
    emit(event, ...args) {
      this._events[event].forEach((cbs) => {
        cbs(args)
      })
    }
  }
  
  let eventEmitter = new EventEmitter();
  
  
  
  eventEmitter.on('test', function() {
    console.log(arguments);
  })
  
  eventEmitter.emit('test', 3, 1)  
}

// 新增取消订阅实现

{
  
  class EventEmitter {
    constructor() {
      this._events = {
  
      }
    }
    on(event, callBack) {
      (this._events[event] || (this._events[event] = [])).push(callBack) 
    }
    off(event, fn) {
      let fns = this._events[event]
      // 不传具体事件即取消这一类事件
      if(!fn) {
        fns.length = 0
      }else {
        let fnIndex = fns.findIndex((_fn) => _fn === fn)
        fnIndex !== -1 && fns.splice(fnIndex, 1) 
      }
    }
    emit(event, ...args) {
      this._events[event].forEach((cbs) => {
        cbs(args)
      })
    }
  }
  
  let eventEmitter = new EventEmitter();
  
  
  
  eventEmitter.on('test', function() {
    console.log(1);
  })
  eventEmitter.on('test', function() {
    console.log(2);
  })
  function test3() {
    console.log(3);
  }
  eventEmitter.on('test', test3)
  
  eventEmitter.off('test', test3)

  eventEmitter.emit('test')

  // 1
  // 2
}

{
  
}