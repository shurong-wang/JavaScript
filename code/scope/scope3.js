// === 分析 === //
function Foo() {
  getName = function () { alert (1); }; // [1]
  return this;
}
var getName;
function getName() { alert (5);}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
getName = function () { alert (4);};

// === 结果 === //
// 先执行 Foo 函数，再调用 Foo 函数返回值对象的 getName 方法
Foo().getName();
// 1 执行 Foo 函数，覆盖外层作用域的 getName 函数
// 2 返回 this 对象，Foo()直接调用，this 指向 window 对象
// 3 执行 window.getName()，此时 window.getName 已被覆盖[1]
// 4 最终输出 1