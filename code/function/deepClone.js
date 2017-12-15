function deepClone(obj) {
    const getType = o => Object.prototype.toString.call(o).slice(8, -1);
    const isObject = o => getType(o) === 'Object';
    const isArray = o => getType(o) === 'Array';
    const isIterable = o => typeof o === 'object' && typeof o !== 'null';
    let newObj;
    if (isIterable(obj)) {
        newObj = isArray(obj) ? [] : {};
        for (let [k, v] of Object.entries(obj)) {
            if (isIterable(obj)) { 
                // 递归调用
                newObj[k] = deepClone(v);
            } else {
                newObj[k] = v;
            }
        }
    } else {
        return obj;
    }
    return newObj;
}
