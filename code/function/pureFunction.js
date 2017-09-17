/**
 * 什么是纯函数？
 * 一个函数输入参数确定时，输出结果是唯一确定的，那么它就是纯函数。
 * 过程抽象，可以提升函数纯度
 */

function setColor(el, color) {
    el.style.color = color;
}
// function setColors(els, color) {
//     Array.from(els).map(el => setColor(el, color));
// }
//
// setColors(document.querySelectorAll('#datalist > li'), '#ccc');

// 过程抽象
function multi(fn) {
    return function(arrayLike, ...args) {
        return Array.from(arrayLike).map(item => fn(item, ...args));
    }
}
const setColors = multi(setColor);

setColors(document.querySelectorAll('#datalist > li'), '#ccc');
