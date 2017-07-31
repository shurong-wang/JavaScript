/**
 * reduce 归纳
 */
function reducer(...fnList) {
    return function(...args) {
        if (fnList.length <= 0) {
            return;
        }
        const firstVal = fnList[0].apply(this, args);
        fnList[0] = firstVal;
        return fnList.reduce((params, fn) => fn.call(this, params));
    }
}

function twofold(n) {
    return 2 * n;
}

function tenfold(n) {
    return 10 * n;
}

var reduceFun = reducer(tenfold, twofold, tenfold);
console.log(reduceFun(3));


/**
 * pipe 管道
 */
function pipe(...fnList) {
    return function(...args) {

        // const fn = fnList.reduceRight(function (a, b) {
        //     return function (...args) {
        //         b.apply(this, [...args, a]);
        //     }
        // });

        // const fn = fnList.reduceRight((a, b) => {
        //     return (...args) => {
        //         b.apply(this, [...args, a]);
        //     }
        // });

        const fn = fnList.reduceRight((a, b) => (...args) => b.apply(this, [...args, a]));
        return fn.apply(this, args);
    }
}

function taskA(p, next) {
    console.log(`Task A`);
    // console.log(`Params: ${p}`);
    next(10 * p);
}
function taskB(p, next) {
    console.log('Task B');
    // console.log(`Params: ${p}`);
    next(10 * p);
}
function taskC(p, next) {
    console.log('Task C');
    // console.log(`Params: ${p}`);
}

var pipeFun = pipe(taskA, taskB, taskC);
pipeFun(10);
