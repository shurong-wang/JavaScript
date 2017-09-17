for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}

console.log(i);


// 题目：
// 改造代码，期望输出变成 0 -> 1 -> 2 -> 3 -> 4 -> 5

// ES 6
const tasks = [];
const output = i => new Promise(resolve => {
    setTimeout(() => {
        console.log(i);
        resolve();
    }, 1000 * i);
});

// 生成全部的异步操作
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
}

// 异步操作完成之后，输出最后的 i
Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(i);
    }, 1000);
});


// ES 7
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
    for (var i = 0; i < 5; i++) {
        await delay(1000);
        console.log(i);
    }

    await delay(1000);
    console.log(i);
})();