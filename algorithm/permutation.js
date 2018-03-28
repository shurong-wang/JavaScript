{
    /*
    * arr = [1, 2, 3], size = 2
    * return [[1, 2], [1, 3], [2, 3]]
    */
    function permutation(arr, size) {
        const ret = [];

        function groupSplit(target, source, size) {
            if (size === 0) { // 退出递归
                ret[ret.length] = target;
                return;
            }
            for (let i = 0; i <= (source.length - size); i++) {
                // const _target = (target.slice()).concat(source[i]);
                const _target = [...target, source[i]];
                const _source = source.slice(i + 1);
                const _size = size - 1;
                groupSplit(_target, _source, _size);
            }
        }

        groupSplit([], arr, size);

        return ret;
    }

    const arr = [1, 2, 3];
    const size = 2;
    const ret = permutation(arr, size);
    console.log(ret);
}

{
    function combination(arr) {
        var tmp = [];
        var ret = [];

        function groupSplit(arr, i) {
            for (var j = 0; j < arr[i].length; j++) {
                tmp[i] = arr[i][j];
                if (i === arr.length - 1) {
                    ret.push(tmp.join('|'));
                } else {
                    groupSplit(arr, i + 1);
                }
            }
        }
        
        groupSplit(arr, 0);
        
        return ret;
    }

    var arr = [
        ['a', 'b', 'c'],
        ['1', '2']
    ]
    var ret = combination(arr);
    console.log(ret);
}