/* function sum(x, y) {
    console.log([x, y]);
    if (y > 0) {
        return sum(x + 1, y - 1);
    }
    else {
        return x;
    }
}
sum(1, 100000) */


/**
 * 蹦床函数
 * 将递归执行转为循环
 * 能够防止调用栈溢出
 * 并不是真正的尾递归优化
 * @method trampoline
 * @param  {Function}   f 递归函数
 * @return {Function}   循环函数
 */
function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

function sum(x, y) {
    if (y > 0) {
        return sum.bind(null, x + 1, y - 1);
    }
    else {
        return x;
    }
}

trampoline(sum(1, 100000));
