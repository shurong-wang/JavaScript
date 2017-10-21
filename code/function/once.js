// 限制函数只调用一次
function once(fn) {
    return function() {
        var ret = fn && fn.apply(this, arguments);
        fn = null;
        return ret;
    }
}
