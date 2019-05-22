### this 绑定

#### bind

```js
 constructor() {
    this.printName = this.printName.bind(this);
  }
```

#### 箭头函数

```js
  constructor() {
    // this.printName = this.printName.bind(this);
    this.printName = (name = 'there') => {
      this.print(`Hello ${name}`)
    }
  }
```
