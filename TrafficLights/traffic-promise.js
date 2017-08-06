const lightsEl = document.querySelector('#lights');

function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function setState(state) {
    lightsEl.className = state;
}

function reset() {
    Promise.resolve()
        .then(setState.bind(null, 'stop'))
        .then(wait.bind(null, 1000))
        .then(setState.bind(null, 'wait'))
        .then(wait.bind(null, 1500))
        .then(setState.bind(null, 'pass'))
        .then(wait.bind(null, 500))
        .then(reset);
}

// async function reset() {
//     //noprotect
//     while (1) {
//         setState('stop');
//         await wait(1500);
//         setState('wait');
//         await wait(1000);
//         setState('pass');
//         await wait(500);
//     }
// }

reset();
