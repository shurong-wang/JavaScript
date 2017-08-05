import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
    // 键名对应 reducer 管理的 state
    counter: counterReducer,
    todos: todosReducer
})

export default rootReducer;
