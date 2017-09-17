export default function counterReducer(counter = 0, action) {
    // 传入的 state 其实是 state.counter
    switch (action.type) {
        case 'INCREMENT':
            // counter 是值传递，因此可以直接返回一个值
            return counter + 1;
        default:
            return counter;
    }
};
