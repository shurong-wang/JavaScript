/**
 * 极简主义法定义类
 */

// 封装 -- 不使用 this 和 prototype
var Cat = {
  createNew: function () {
    var cat = {};
    cat.name = "包子";
    cat.makeSound = function () {
      alert("喵喵喵");
    };
    return cat;
  }
};

// 实例化 -- 调用 createNew() 方法
var cat = Cat.createNew();
cat1.makeSound(); // 喵喵喵

// 继承 -- 在子类的 createNew() 方法中，调用父类的 createNew() 方法
var Animal = {
  createNew: function () {
    var animal = {};
    animal.sleep = function () {
      alert("睡懒觉");
    };
    return animal;
  }
};

var Cat = {
  createNew: function () {
    var cat = Animal.createNew(); // 继承
    cat.name = "包子";
    cat.makeSound = function () {
      alert("喵喵喵");
    };
    return cat;
  }
};

// 定义私有属性和共享数据
var Cat = {
  // 数据共享 -- 定义在类对象内、createNew() 方法外即可
  age: 3, // 共享数据
  createNew: function () {
    var cat = {};
    cat.name = "包子";
    // 私有属性和方法 -- 定义在 createNew() 方法内，不在输出对象上即可
    var sound = "喵喵喵"; // 私有属性--外部无法读取，只能通过公共方法 makeSound() 来读取
    cat.makeSound = function () {
      alert(sound);
    };
    cat.changeAge = function(num){
      Cat.age = num; // 修改共享数据
    };
    return cat;
  }
};
