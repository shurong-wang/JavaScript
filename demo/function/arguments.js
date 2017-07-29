/**
 * arguments 对象示例
 * @method add
 */
function add() {
    //var args = [].slice.call(arguments);
    let args = Array.from(arguments);
    return args.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4));

/**
 * ...args 示例
 * @method add2
 * @param  {number} args
 */
let add2 = (...args) => args.reduce((a, b) => a + b);
console.log(add2(1, 2, 3, 4));
