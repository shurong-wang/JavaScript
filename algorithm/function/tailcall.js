function tailcall(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                args = accumulated.shift();
                // console.log(args);
                // args -> 1, 3
                // args -> 2, 2
                // args -> 3, 1
                // args -> 4, 0
                value = f.apply(this, args);
            }
            active = false;
            return value;
        }
    };
}

var sum = tailcall(function(x, y) {
    if (y > 0) {
        var s = sum(x + 1, y - 1);
        // console.log(s);
        // s -> undefined
        // s -> undefined
        // s -> undefined
        return s;
    } else {
        return x;
    }
});

sum(1, 3);
