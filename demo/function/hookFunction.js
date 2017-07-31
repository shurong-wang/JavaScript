/**
 * 拦截和监控
 */
function watch(fn) {
    return function f(...args) {
        if (f.before) {
            f.before(this, ...args);
        }
        const res = fn.apply(this, args);
        if (f.after) {
            f.after(this, res, ...args);
        }
        return res;
    }
}

// 示例需要引入 jquery
$ = watch($);

$.after = function(thisObj, resVal) {
    if (resVal.css) {
        resVal.css = watch(resVal.css);
        resVal.css.before = function() {
            console.log('不推荐使用 css() 修改样式， 建议使用 addClass()');
        }
    }
}

$('#datalist > li').css('color', '#ccc');
