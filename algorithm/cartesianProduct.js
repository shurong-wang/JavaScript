{
    // var goods = [
    //     { 'colour': ['red', 'green'] },
    //     { 'material': ['cotton', 'wool', 'silk'] },
    //     { 'shape': ['round', 'square', 'rhombus'] }
    // ];
    var goods = [
        { '颜色': ['红色', '绿色'] },
        { '材料': ['棉花', '羊毛', '丝绸'] },
        { '形状': ['圆形', '正方形', '菱形'] }
    ];

    function cartesianProduct(input, current) {
        if (!input || !input.length) {
            return [];
        }

        var head = input[0];
        var tail = input.slice(1);
        var output = [];

        for (var key in head) {
            for (var i = 0; i < head[key].length; i++) {
                var newCurrent = copy(current);
                newCurrent[key] = head[key][i];
                if (tail.length) {
                    var productOfTail = cartesianProduct(tail, newCurrent);
                    output = output.concat(productOfTail);
                } else {
                    output.push(newCurrent);
                }
            }
        }

        return output;
    }

    function copy(obj) {
        var res = {};
        for (var p in obj) {
            res[p] = obj[p];
        }
        return res;
    }

    var ret = cartesianProduct(goods);
    console.log(ret);
}


{
    var arr = [
        ['白色', '黑色'],
        ['64G', '128G'],
        ['移动', '联通', '电信']
    ];

    function combination(arr) {
        var len = arr.length;

        if (len < 2) {
            return arr[0] || [];
        }

        var len1 = arr[0].length;
        var len2 = arr[1].length;
        var lenBoth = len1 * len2;
        var items = new Array(lenBoth);
        var index = 0;
        for (var i = 0; i < len1; i++) {
            for (var j = 0; j < len2; j++) {
                if (arr[0][i] instanceof Array) {
                    items[index] = arr[0][i].concat(arr[1][j]);
                } else {
                    items[index] = [arr[0][i]].concat(arr[1][j]);
                }
                index ++;
            }
        }
        var newArr = new Array(len - 1);
        for (var i = 2; i < arr.length; i++) {
            newArr[i - 1] = arr[i];
        }
        newArr[0] = items;

        return combination(newArr);
    }

    var ret = combination(arr);
    console.log(ret);
}

