// 闭包实现
{
  class Singleton {
  }
  Singleton.getInstance = function getInstance() {
    let instance 
    return  function () {
      if (!instance) {
        instance = new this()
      }
      return instance
    }
  }()


  let a = Singleton.getInstance()
  let b = Singleton.getInstance()
  console.log(a == b)
}
// this实现
{
  class Singleton {
    static getInstance() {

      if (!this.instance) {
        this.instance = new this()
      }
      return  this.instance
    }
  }

  let a = Singleton.getInstance()
  let b = Singleton.getInstance()

  console.log(a == b)
}


// 透明实现

{
  class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this
      }
      return Singleton.instance
    }
  }

  let a = new Singleton()
  let b = new Singleton()

  console.log(a == b)
}

// 通用实现

{
  let getSingle = function( fn ){
     let  result;
    　return function(...args){
    　　return result || ( result = fn .apply(this, args) );
    　}
  };
}