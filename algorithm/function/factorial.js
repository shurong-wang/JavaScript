// 求阶乘 复杂度 O(n) 递归
/* function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
} */

// 柯里化
function currying(fn, n) {
    return function (m) {
        return fn.call(this, m, n);
    };
}

function tailFactorial(n, res) {
    if (n === 1) {
        return total;
    }
    return tailFactorial(n - 1, n * res);
}

const factorial2 = currying(tailFactorial, 1);

factorial2(5);

/**
 * 求阶乘 复杂度 O(1) 尾递归
 * @method factorial
 * @param  {number}  n   阶乘长度
 * @param  {number}  res 上一次的乘机
 * @return {number}      阶乘最终结果
 */
function factorial(n, res = 1) {
    if (n === 1) {
        return res;
    }
    return factorial(n - 1, n * res);
}

factorial(5); // 120
