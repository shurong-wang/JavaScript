/**
 * Promise 实现延迟执行
 */
function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

wait(100).then(function () {
    console.log('step 1');
    return wait(400);
}).then(function () {
    console.log('step 2');
    return wait(700);
}).then(function () {
    console.log('step 3');
}).then(function () {
    // async/await 实现延迟执行
    (async () => {
        await wait(200);
        console.log('step 4');
        await wait(500);
        console.log('step 5');
        await wait(800);
        console.log('step 6');
    })();
});
