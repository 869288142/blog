# Redux

Redux是一个状态管理库

## 框架设计范式

Redux遵循Flux架构，有着store、action、dispatch等flux概念，遵循单向数据流

### store

redux的store初始化不是子面量，而是通过称为reducer的函数来创建、组合出store

```js
const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
}


const store = createStore(reducer,  applyMiddleware(thunk));
```

### action

action只是一次动作的名称

```js
{ type: INCREMENT }
```

### dispatch

dispatch是执行action的机制

```js
this.props.dispatch(Action)
```