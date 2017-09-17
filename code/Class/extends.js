// 实现继承的方式1：
if(! Object.create){
  Object.create = function(proto){
    function F(){}
    F.prototype = proto;
    return new F;
  };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// 实现继承的方式2：
function extend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

extend(Student, Person);