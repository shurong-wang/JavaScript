/**
 * 节流（throttle）
 */
function throttle(fn, wait) {
    let timer;
    return function(...args) {
        if (!timer) {
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this, args);
        }
    }
}

// 注意: 回调函数必须包裹在 throttle 内
document.addEventListener('click', throttle(function() {
    console.log("button clicked");
}, 200), false);
