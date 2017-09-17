function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  };
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);

// 问题：a, b, c 三行分别输出的值是什么？

// 解题关键：3 个 fun 的调用关系，参数的传递的闭包，使用的是哪次闭包的值
function fun(n, o) { // fun1
  console.log(o);
  return {  // oFun
    fun: function(m){ // fun2
      // 参数 n 被闭包
      return fun(m, n); // fun3
    }
  };
}
/*
  1. fun3 调用的是最外层的 fun1；fun1 只会被调用，不会产生调用
  2. fun1 的返回值是对象 oFun，外部通过 oFun.fun 访问 fun2
  3. 函数调用顺序：fun1 或 fun2 -> fun3 -> fun1
  4. fun1 的参数 n 传递到 fun3，变量 n 在 fun2 作用域下被闭包
  5. 最终输入结果由 fun1 的 参数 o 或 fun3 的参数 n 决定
*/

// 答案：
/*
 var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
 // undefined, 0, 0, 0

 var b = fun(0).fun(1).fun(2).fun(3);
 // undefined, 0, 1, 2

 var c = fun(0).fun(1); c.fun(2); c.fun(3);
 // undefined, 0, 1, 1
*/