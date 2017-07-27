let add = (a, b, c) => console.log(a + b + c);
add(1, 2);

/**
 * 验证参数个数
 * @method matchArgs
 * @param  {Function}  fun
 * @return {*}
 */
const matchArgs = fun => {
    return function(...args) {
        if (fun.length === args.length) {
            return fun.apply(this, args);
        }
        else {
            throw RangeError('Arguments not match!');
        }
    }
}

add = matchArgs(add);
add(1, 2);
