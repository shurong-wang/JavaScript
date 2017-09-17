const initState = {
    counter: 0,
    todos: []
};

function reducer(state, action) {
    if (!state) {
        return initState; // 若是初始化，可立即返回应用初始状态
    }
    const nextState = _.cloneDeep(state); // 否则，克隆原始状态

    switch (action.type) {
        case 'ADD_TODO': // 新增待办事项
            nextState.todos.push(action.payload);
            break;
        case 'INCREMENT': // 计数器加 1
            nextState.counter = nextState.counter + 1;
            break;
    }
    
    return nextState;
}
