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
Foo().getName(); // [2]

// === 结果 === //
// 直接调用 getName 函数，相当于 window.getName()
getName();
// 1 window.getName 已被覆盖[2]<-[1]
// 2 最终输出 3