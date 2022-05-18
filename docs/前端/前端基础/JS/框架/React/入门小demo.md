# react入门小demo(TS版本)

基于官方的入门demo进行TS改造


## 准备

### 初始化脚手架

```js
// 执行以下命令就能看到在当前目录my-app文件夹
npx create-react-app my-app --template typescript
```

找到my-app文件夹

```js
// 启动脚手架
yarn start
```

### 初始化demo

* 将以下代码复制到app.css中

```css
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
}

ol, ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
}

```

* 将js复制到app.ts中

```ts
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


export default Game;
```

## 为Props添加类型声明

[![1sKKAK.png](https://s2.ax1x.com/2020/02/05/1sKKAK.png)](https://imgchr.com/i/1sKKAK)

我们迎来了类型系统的第一顿毒打，系统告诉我们这一行，**没有匹配类型**

```js
(props: Readonly<{}>): Square

(props: {}, context?: any): Square
```

```js
<Square value={i}/> 
```

这里一行与上述的类型声明不匹配，虽然我也看了TS一天，但是没发现上面的语法，官方也没看到和TS结合的例子，这个时候把错误信息复制到百度上去，解决方案就有了

[![1sMDIK.png](https://s2.ax1x.com/2020/02/05/1sMDIK.png)](https://imgchr.com/i/1sMDIK)

**只需要这样**

```js
class Square extends React.Component<any>
```

解决了这个问题，我就发现，原来是因为我们**Square组件的props类型没声明导致的**,而**reactReact.Component<propsType>这种语法就可以声明我们的props类型，那么我们不要使用any,any只在特殊情况下使用，否则类型系统就失去意义了**，这里我们使用接口描述props类型

```js
// 使用接口描述对象的类型
interface SquareProps {
  value: number
}
// 这里使用此接口
class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className="square">
        { this.props.value }
      </button>
    );
  }
}
```

[![1sltBR.png](https://s2.ax1x.com/2020/02/05/1sltBR.png)](https://imgchr.com/i/1sltBR)

**我们的代码正常运行了，继续按照官网实例完善代码**

## 给组件添加交互功能

[![1s1e2D.png](https://s2.ax1x.com/2020/02/05/1s1e2D.png)](https://imgchr.com/i/1s1e2D)

按照官方例子做，没有出现什么问题

## 存储点击状态

我们需要存储单元格的点击状态，需要使用state,就像以下代码

```js
class Square extends React.Component {
  constructor(props) {
    // 这里必须的
    super(props);
    // 初始化state
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => alert('click')}>
        {this.props.value}
      </button>
    );
  }
}
```

## 使用state状态

```js
class Square extends React.Component {
  constructor(props) {
    // 这里必须的
    super(props);
    // 初始化state
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
```

## constructor props类型

**新的类型错误出现了，props是一个隐式any类型，我们需要给它一个类型**

[![1s3Wp8.png](https://s2.ax1x.com/2020/02/05/1s3Wp8.png)](https://imgchr.com/i/1s3Wp8)

```js
class Square extends React.Component<SquareProps> {
  // 这里加上props类型
  constructor(props: SquareProps) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        { this.state.value }
      </button>
    );
  }
}
```

## state类型

[![1s88gS.png](https://s2.ax1x.com/2020/02/05/1s88gS.png)](https://imgchr.com/i/1s88gS)

state中没有value,显而易见的是，我们需要为state声明类型,就想这样

```js
interface SquareProps {
  value: number
}

interface SquareState {
  value: string | null
}

class Square extends React.Component<SquareProps,SquareState> {
  constructor(props: SquareProps) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        { this.state.value }
      </button>
    );
  }
}
```

## 提取函数到类，设置函数类型

```js
class Square extends React.Component<SquareProps,SquareState> {
  constructor(props: SquareProps) {
    super(props)
    this.state = {
      value: null
    }
  }
  clickHandler = (e): void => {
    this.setState({value: 'X'})
  }
  render() {
    return (
      <button className="square" onClick={(e) => this.clickHandler(e)}>
        { this.state.value }
      </button>
    );
  }
}
```

[![1sBkOx.png](https://s2.ax1x.com/2020/02/05/1sBkOx.png)](https://imgchr.com/i/1sBkOx)

**event缺少类型，这里注意react的事件是合成事件不是原始事件**

```js
// error
clickHandler = (e: MouseEvent): void => {
  this.setState({value: 'X'})
}
// correct
clickHandler = (e: React.MouseEvent): void => {
  this.setState({value: 'X'})
}
```

## 将状态提升到Board

这一步需要将状态提升至Board组件

```js
interface BoardProps {

}

interface BoardState {
  squares: string []
}

class Board extends React.Component<BoardProps, BoardState> {
  // 编写constructor并且初始化state
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handlerClick= (i: number) =>{
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares});
  }

  renderSquare(i: number) {
    // 传递onClick事件给子组件
    return <Square value={this.state.squares[i] } onClick={() => this.handlerClick(i)}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
```

## 删除Square组件状态

Square组件的状态已经被提升到了Board组件，我们需要删除对应的状态

```js
interface SquareProps {
  value: string
  onClick: () => void
}

// SquareState也可以删除
interface SquareState {
  value: string | null
}

class Square extends React.Component<SquareProps> {
  // 删除constructor
  // constructor(props: SquareProps) {
  //   super(props)
  //   this.state = {
  //     value: null
  //   }
  // }


  // clickHandler也可以删除
  // clickHandler = (e: React.MouseEvent): void => {
  //   this.setState({value: 'X'})
  // }
  render() {
    return (
      <button className="square" onClick={(e) => this.props.onClick()}>
        { this.props.value }
      </button>
    );
  }
}
```

## 改造Square组件为函数组件

```js
// 由于 无状态，所以改造成函数组件
function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
```

## 总结

作为一个前端，Typescript主要被用在视图层，Vue2和TS结合不太友好，特别是在this的处理上，React与TS结合体验很好，适合用来学习TS，同时简单了解一下react，开拓一下思路。