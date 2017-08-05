const lightsEl = document.querySelector('#lights');

function poll(...fnList) {
    let stateIndex = 0;

    return function(...args) {
        let fn = fnList[stateIndex++ % fnList.length];
        return fn.apply(this, args);
    }
}

function setState(state) {
    lightsEl.className = state;
}

let trafficStatePoll = poll(
    setState.bind(null, 'stop'),
    setState.bind(null, 'wait'),
    setState.bind(null, 'pass')
);

setInterval(trafficStatePoll, 1000);
