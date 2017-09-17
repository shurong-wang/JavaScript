/**
 * reduce 过程抽象
 * @method      reducer
 * @param       {Function} fn
 * @constructor
 * @return      {*}
 */
function reducer(fn) {
    return function(...args) {
        return args.reduce(fn.bind(this));
    }
}

/* function reducer(fn, isAsync) {
    if (isAsync) {
        return function(...args) {
            return args.reduce((a, b) => {
                return Promise.resolve(a).then(v => fn.call(this, v, b));
            });
        }
    }

    return function(...args) {
        return args.reduce(fn.bind(this));
    }
} */

function add(x, y) {
    return x + y;
}

function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

function asyncMult(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${x} * ${y} = ${x * y}`);
            resolve(x * y);
        }, 500);
    });
}

add = reducer(add);
concat = reducer(concat);

console.log(add(1, 2, 3));
console.log(concat([1], [2, 3]));

/* asyncMult = reducer(asyncMult, true);
asyncMult(1, 2, 3, 4, 5, 6).then(v => console.log(v) );
 */
