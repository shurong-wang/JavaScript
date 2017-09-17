/**
 * 等价函数
 * @method equal
 * @param  {Function} fn [description]
 * @return {*}
 */
function equal(fn) {
    return function(...args) {
        return fn.apply(this, args);
    }
}

// 函数
function add(x, y) {
    return x + y;
}

console.log(add(3, 4));
add = equal(add);
console.log(add(3, 4));

// 对象方法
const obj = {
    x: 10,
    y: 20,
    add: function() {
        return this.x + this.y;
    }
}

console.log(obj.add());
const objAdd = equal(obj.add);
console.log(objAdd.call(obj));
