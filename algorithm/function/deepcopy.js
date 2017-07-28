function deepCopy(dest, orig) {
    const isObj = o => o && typeof o === 'object';

    if (!isObj(orig)) {
        return dest;
    }

    for (var key in orig) {
        let obj = orig[key];
        if (isObj(obj)) {
            deepCopy(dest[key] || {}, obj);
        }
        else {
            dest[key] = orig[key];
        }
    }

    return dest;
}

function mergeObj(dest, ...objs) {
    return [dest, ...objs].reduce((a, b) => deepCopy(a, b));
}

console.log(mergeObj({x: 1}, {y: 2}, {z: 3}));
