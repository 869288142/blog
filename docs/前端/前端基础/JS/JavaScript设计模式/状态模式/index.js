// class Light {
//   constructor() {
//     this.state = 'off' // 给电灯设置初始状态off
//     this.button = null // 电灯开关按钮
//   }
//   init() {
//     let button = document.createElement('button')
//     button.innerHTML = '开关'
//     this.button = document.body.appendChild(button)
//     this.button.onclick = () => {
//       self.buttonWasPressed()
//     }
//   }
//   buttonWasPressed() {
//     if (this.state === 'off') {
//       console.log('开灯')
//       this.state = 'on'
//     } else if (this.state === 'on') {
//       console.log('关灯')
//       this.state = 'off'
//     }
//   }
// }

// let light = new Light()
// light.init()

// 状态模式

class OffLightState {
  constructor(light) {
    this.light = light
  }
  buttonWasPressed() {
    console.log('弱光') // offLightState对应的行为
    this.light.setState(this.light.weakLightState) // 切换状态到weakLightState
  }
}

class WeakLightState {
  constructor(light) {
    this.light = light
  }
  buttonWasPressed() {
    console.log('强光') // weakLightState对应的行为
    this.light.setState(this.light.strongLightState) // 切换状态到strongLightStateight.setState( this.light.weakLightState );　// 切换状态到weakLightState
  }
}

class StrongLightState {
  constructor(light) {
    this.light = light
  }
  buttonWasPressed() {
    console.log('关灯') // strongLightState对应的行为
    this.light.setState(this.light.offLightState) // 切换状态到offLightStateight.setState( this.light.strongLightState );　// 切换状态到strongLightStateight.setState( this.light.weakLightState );　// 切换状态到weakLightState
  }
}

class Light {
  constructor() {
    this.offLightState = new OffLightState(this)
    this.weakLightState = new WeakLightState(this)
    this.strongLightState = new StrongLightState(this)
    this.button = null
  }
  init() {
    let button = document.createElement('button')
    this.button = document.body.appendChild(button)
    this.button.innerHTML = '开关'
    this.currState = this.offLightState // 设置当前状态
    this.button.onclick = () => {
      self.currState.buttonWasPressed()
    }
  }
  setState( newState ){
    this.currState = newState;
  };
}

let light = new Light();
light.init();