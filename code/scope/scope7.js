// === 分析 === //
function Foo() {
  getName = function () { alert (1); };
  return this;
}
var getName;
function getName() { alert (5);}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);}; // [bar]
getName = function () { alert (4);};
Foo().getName();

// === 结果 === //
new new Foo().getName();
// 1 运算符关联性：new 运算符从右向左
// 2 new ((new Foo()).getName)();
// 3 执行 new Foo(); 得到 Foo 的实例化对象
// 4 找到 Foo.prototype.getName 作为构造函数
// 5 转化为 new bar();
// 6 最终输出 3