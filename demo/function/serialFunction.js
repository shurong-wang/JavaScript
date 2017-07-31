/**
 * 函数异步化和串行执行
 */
function delay(time, fn) {
    return function() {
        var self = this;
        var args = [].slice.call(arguments);
        var callback;
        // 注意：args.length 是函数 fn 的参数
        if (fn.length < args.length) {
            // 获取参数中的回调函数
            callback = args[args.length - 1];
            // 剔除参数中的回调函数
            args.length--;
        }
        setTimeout(function() {
            var res = fn.apply(this, args);
            callback && callback(res);
        }, time);
    }
}

function add(x, y) {
    return x + y;
}
add = delay(500, add);
add(10, 20, r => console.log(r));


function output(msg) {
    console.log(msg);
}
output = delay(500, output);

function pipe() {
    var fnList = [].slice.call(arguments);

    // return fnList.reduceRight(function (a, b) {
    //     return function () {
    //         return b(a);
    //     }
    // });

    // return fnList.reduceRight((a, b) => {
    //     return () => {
    //         return b(a);
    //     }
    // });

    return fnList.reduceRight((a, b) => () => b(a));
}

// 如果 output 不做延时，只会输出 'message 1'
var outputOneByOne = pipe(
    output.bind(null, 'message 1'),
    output.bind(null, 'message 2'),
    output.bind(null, 'message 3'),
    output.bind(null, 'message 4')
);

outputOneByOne();
