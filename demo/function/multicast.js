function multicast(fn) {
    return function (list, ...args) {
        if (list && list.length != 0) {
            return Array.from(list).map(item => fn.apply(this, [item, ...args]));
        }
        else {
            return fn.apply(this, [list, ...args]);
        }
    }
}

function setColor(el, color) {
    return el.style.color = color;
}

const setMultColor = multicast(setColor);

var list = document.querySelectorAll('li:nth-child(2n + 1)');
setMultColor(list, 'orange');
