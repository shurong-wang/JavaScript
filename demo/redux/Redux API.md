Redux 核心 API
---

## Store

1. Store 是应用状态 state 的管理者，包含下列四个函数：

	1. `Store.getState()` // 获取整个 state 树
	2. `Store.dispatch(action)` // 触发 state 改变的【唯一途径】
	3. `Store.subscribe(listener)` // 可以理解为 DOM 中的 addEventListener
	4. `Store.replaceReducer(nextReducer)` // 一般在 Webpack 按需加载时用到

2. Store 与 state 的关系：

	1. `const store = createStore(reducer, initialState)`
	2. `const state = store.getState()`


## Action

1. Action 就是包含 type 属性的普通对象，type 是实现用户行为追踪的关键，示例：

	```javascript
	{
		type: 'ADD_TODO',
		payload: {
			id: 1,
			content: '待办事项1',
			completed: false
		}
	}
	
	```

2. Action Creator 就是创造 action 的函数，返回值是一个 action 对象，示例：

	```javascript
	function addTodo(text) {
	    return {
	        type: 'ADD_TODO',
	        payload: {
	            id: 2,
	            content: text, // 待办事项内容
	            completed: false
	        }
	    };
	}
	
	```
	
	通常，Action Creator 绑定到用户的操作（点击按钮等），根据参数不同，返回需要的 action。然后，通过 Store.dispatch(action) 改变 state，示例：
	
	```javascript
 	<AddTodo onAddClick={text => dispatch(addTodo(text))} />
	```

3. Reducer

	1. 用户的每次 dispatch(action) 操作都会触发 Reducer 执行
	2. Reducer 就是一个函数，根据 action.type 更新 state 
	3. 最后，Reducer 返回最新的 state，完全替换原来的 state

	Reducer 示例：
	
	```javascript
	function todos(state = [], action) {
	    switch (action.type) {
	        case ADD_TODO:
	            return [
	                ...state, {
	                    text: action.text,
	                    completed: false
	                }
	            ];
	        default:
	            return state;
	    }
	}

	```


## § 总结

1. Store 由 Redux.createStore(reducer) 生成，
state 通过 Store.getState() 获取，Store 就是一个存储着整个应用状态的对象

2. Action 本质上是一个包含 type 属性的普通对象，由 Action Creator (函数) 产生。要改变 state，必须（只能）通过 Store.dispatch(action) 触发

3. Reducer 根据 action.type 来更新 state，并返回最新的 nextState。
reducer 必须有确定返回值，否则 nextState 即为 undefined。
所以，state 可以看做 Reducer 返回值的汇总

4. Redux 数据流演示：

	```
	Action Creator(action) 
		=> Store.dispatch(action) 
		=> Reducer(state, action) 
		=> state = nextState
	```


## Redux 简单示例


```javascript
/**
 * Action Creators
 * @method increment, decrement
 * @return {Object} Action
 */
function increment() {
    return {
        type: 'INCREMENT'
    };
}
	
function decrement() {
    return {
        type: 'DECREMENT'
    };
}
	
/**
 * Reducer
 * @method reducer
 * @param  {Objcet} state
 * @param  {Objcet} action
 * @return {Objcet} nextState
 */
function reducer(state, action) {
    // 首次调用设置初始 state
    state = state || {
        counter: 0
    };
	
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        default:
            return state;
    }
}
	
/**
 * Store
 * @type {Object}
 */
const store = Redux.createStore(reducer);
	
// 初始化 state
const state = store.getState();
	
// 更新 state
store.dispatch(increment());
const state1 = store.getState();
	
// 更新 state
store.dispatch(increment());
const state2 = store.getState();
	
// 更新 state
store.dispatch(decrement());
const state3 = store.getState();
	
const printState = (state) => console.log(JSON.stringify(state));
    
printState(state);
printState(state1);
printState(state2);
printState(state3);
```
	
	

