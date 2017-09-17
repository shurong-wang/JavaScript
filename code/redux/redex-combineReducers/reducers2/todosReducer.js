export default function todosReducer(todos = [], action) {
    // 传入的 state 其实是 state.todos
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...todos,
                action.payload
            ];
        default:
            return todos;
    }
};
