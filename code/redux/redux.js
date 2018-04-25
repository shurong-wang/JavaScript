const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        const unsubscribe = () => {
            listeners = listeners.filter(currListener => currListener !== listener);
        }
        return unsubscribe;
    };

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe
    };
};