// 菲波那切数列(1, 1, 2, 3, 5, 8, 13 ...) 递归
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    };

    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(10) // 89
fibonacci(100) // 堆栈溢出

/**
 * 菲波那切数列(1, 1, 2, 3, 5, 8, 13 ...) 尾递归
 * @method fibonacci2
 * @param  {number}   n      数列元素索引（从 0 开始）
 * @param  {number}   [n1=1] 本次递归数列的第 1 个元素
 * @param  {number}   [n2=1] 本次递归数列的第 2 个元素
 * @return {number}          指定位置的数列元素
 */
function fibonacci2(n, n1 = 1, n2 = 1) {
    if (n <= 1) {
        return n2;
    };

    return fibonacci2(n - 1, n2, n1 + n2);
}

fibonacci2(10) // 89
fibonacci2(100) // 573147844013817200000
