function deepClone(obj) {
    const getType = o => Object.prototype.toString.call(o).slice(8, -1);
    const isObject = o => getType(o) === 'Object';
    const isArray = o => getType(o) === 'Array';
    let newObj;
    if (isObject(obj)) {
        newObj = isArray(obj) ? [] : {};
        for (let [k, v] of Object.entries(obj)) {
            if (isObject(v)) {
                newObj[k] = deepClone(v); // 递归
            } else {
                newObj[k] = v;
            }
        }
    } else {
        return obj;
    }
    return newObj;
}
