function twoSum1(arr, sum) {
    for (var i = 0, len = arr.length; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return [i, j];
            }
        }
    }
    return [];
}

function twoSum2 (arr, sum) {
    var hash = {};
    var len = arr.length
    for(var i = 0; i < len; i++) {
        var n = arr[i];
        if(hash[n] !== undefined) {
            return [hash[n], i];
        }
        else {
            // 关键：hash[n] 与 hash[sum - n] 对应
            hash[sum - n] = i;
        }
    }
    return [];
}

function twoSum3 (arr, sum) {
    const map = new Map();
    const len = arr.length;
    for(var i = 0; i < len; i++) {
        var n = arr[i];
        if(map.has(n)) {
            return [map.get(n), i]；
        }
        else {
            map.set(sum - n, i);
        }
    }
    return [];
}


var arr = [2, 7, 11, 15];
var sum = 9;

// var len = 10000;
// var arr = [...Array(len).keys()];
// var elem = len;
// var elem = Math.floor(len / 2);
// var sum = (elem - 2) + (elem - 1);

twoSum1(arr, sum);
