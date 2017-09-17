// === 分析 === //
function Foo() {
  getName = function () { alert (1); };
  return this;
}
var getName;
function getName() { alert (5);}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
getName = function () { alert (4);};
Foo().getName();

// === 结果 === //
new Foo.getName();
// 1 优先级比较：. 运算符 高于 new 运算符
// 2 转化为 new (Foo.getName)();
// 3 转化为 var bar = function () { alert (2);}; new bar;
// 4 相当于将 function () { alert (2);}; 作为了构造函数执行
// 5 最终输出 2