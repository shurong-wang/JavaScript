
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


