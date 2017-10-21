// 利用“切片”监控函数性能
if (window.performance) {
    performance.watch = function(fn, mark) {
        var idx = 0;
        return function() {
            idx++;
            var markStart = mark + idx + '_start';
            var markEnd = mark + idx + '_end';
            performance.mark(markStart);

            var res = fn.apply(this, arguments);

            if (res instanceof Promise) {
                return res.then(r => {
                    performance.mark(markEnd);
                    performance.measure(mark, markStart, markEnd)
                    return r;
                });
            }
            else {
                performance.mark(markEnd);
                return res;
            }
        }
    }
}

var asyncTask = function() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 1000);
    });
};

asyncTask = performance.watch(asyncTask, 'my-task');



Promise.all([asyncTask(), asyncTask()])
.then(function(resp) {
    console.log('done', resp);
    var measures = performance.getEntriesByType('measure');
    console.log(measures);
});
