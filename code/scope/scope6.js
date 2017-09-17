// === 分析 === //
function Foo() {
  getName = function () { alert (1); };
  return this;
}
var getName;
function getName() { alert (5);}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);}; // [3]
getName = function () { alert (4);};
Foo().getName();

// === 结果 === //
new Foo().getName();
// 1 优先级比较：() 运算符 高于 new 运算符
// 2 转化为 (new Foo()).getName();
// 3 执行 new Foo(); 此时 Foo 作为构造函数却有返回值
// 3.1 如果返回值为基本类型，则忽略该返回值，返回构造函数的实例化对象
// 3.2 如果返回值为引用类型，则返回该引用类型，覆盖构造函数的实例化对象
// 4 this 在构造函数中本来就代表当前实例化对象，所以返回 Foo 的实例化对象
// 5 调用 Foo 实例化对象的 getName 方法
// 6 发现 Foo 构造函数没有为实例化对象添加 this.getName 属性方法
// 7 此时去当前对象的原型对象 Foo.prototype 上找，找到[3]
// 9 最终输出 3