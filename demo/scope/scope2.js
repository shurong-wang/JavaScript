// === 分析 === //
function Foo() {
  getName = function () { alert (1); };
  return this;
}

// [1]变量声明提升
var getName;

// [2]函数声明提升，覆盖 var 声明[1]
function getName() { alert (5);}

Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};

// [3]覆盖 function 声明[2]
getName = function () { alert (4);};

// === 结果 === //
getName(); // 最终输出 4