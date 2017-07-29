// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
    var hash = {};
    for(var i = 0; i < nums.length; i++) {
        var val = nums[i];

        if(hash[val] !== undefined) {

            return [hash[val], i]
        } 
        else {
            // 关键：hash[val] 与 hash[target - val] 的对应
            hash[target - val] = i;
        }
    }
    return [];
};

const arr = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10);
console.log(arr);

