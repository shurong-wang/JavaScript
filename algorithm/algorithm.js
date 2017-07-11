
// 2017.07.05
var twoSum = function (nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        var val = nums[i];
        if(hash[val] !== undefined) {
            return [hash[val], i]
        } 
        else {
            hash[target - val] = i;
        }
    }
    return [];
};

// 2017.07.08
var thousandsSeparator = function (num) {
    var numStr = '' + num;
    var len = numStr.length;
    if(len <= 3) {
        return numStr;
    }
    var subNumStr = '';
    while(len > 3){
        len -= 3;
        subNumStr = ',' + numStr.substr(len, 3) + subNumStr;
    }
    return numStr.substr(0, len) + subNumStr;
}


