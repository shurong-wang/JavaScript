// === 分析 === //

// [1]定义了函数 Foo
function Foo() {
  getName = function () { alert (1); };
  return this;
}

// [2]为 Foo 创建了一个静态属性 getName 并赋值一个匿名函数
Foo.getName = function () { alert (2);};

// [3]在 Foo 的原型对象上新创建了一个叫 getName 的匿名函数
Foo.prototype.getName = function () { alert (3);};

// [4]通过函数表达式创建了一个 getName 函数
var getName = function () { alert (4);};

// [5]声明一个叫 getName 函数
function getName() { alert (5);}

// === 结果 === //
// 访问 Foo 函数的静态属性[2]
Foo.getName(); // 输出 2
