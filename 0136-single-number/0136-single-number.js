/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    
    for (i = 0; i < nums.length; i+=2) {
        if (i === nums.length) return nums[i];
        if (nums[i] !== nums[i+1]) return nums[i];
    }
};