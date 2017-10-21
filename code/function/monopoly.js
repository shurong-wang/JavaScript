// 获得函数调用权限，排斥其他函数的调用
function monopoly(fn, duration = 100) {
    return function () {
        if (!monopoly.permit) {
            monopoly.permit = fn;
        }
        if (monopoly.permit === fn) {
            clearTimeout(monopoly.permitTimer);
            monopoly.permitTimer = setTimeout(function() {
                delete monopoly.permit;
            }, duration);
            return fn.apply(this, arguments);
        }
    };
}
