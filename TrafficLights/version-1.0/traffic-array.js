const lightsEl = document.querySelector('#lights');

function start(lightsEl, stateList) {
    const len = stateList.length;
    let currIndex = 0;

    setInterval(() => {
        const state = stateList[currIndex];
        lightsEl.className = state;
        currIndex = (currIndex + 1) % len;
    }, 1000);
}

start(lightsEl, ['stop', 'wait', 'pass']);
