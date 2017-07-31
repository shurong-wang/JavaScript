/**
 * 防抖动（debounce）
 */
function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    }
}

// 注意: 回调函数必须包裹在 debounce 内
document.addEventListener('click', debounce(function() {
    console.log("clicked");
}, 200), false);
