function fun(n, o) { // fun1
  console.log(o);
  return {
    fun: function(m){ // fun2
      // closure n here
      return fun(m, n); // fun3
    }
  };
}

var b = fun(0).fun(1).fun(2).fun(3);

// 1. fun(0) // n = 0
// do: fun1(0, undefined);
// closure-1 n = 0, print undefined

// 2. fun(0).fun(1) // n = 0 from closure-1, m = 1
// do: oFun.fun2(1) -> fun3(1, 0) -> fun1(1, 0)
// closure-2 n = 1, print 0

// 3. fun(0).fun(1).fun(2) // n = 1 from closure-2, m = 2
// do: oFun.fun2(2) -> fun3(2, 1) -> fun1(2, 1)
// closure-3 n = 2, print 1

// 4. fun(0).fun(1).fun(2).fun(3) // n = 2 from closure-3, m = 3
// do: oFun.fun2(3) -> fun3(3, 2) -> fun1(3, 2)
// closure-4 n = 3, print 2
