/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort((a,b) => a-b);
    console.log(nums)
    
    const res = [];

    let index = 0;
    
    while (index < nums.length) {
        if (nums[index] !== nums[index + 1]) {
            res.push(nums[index]);
            if (res.length == 2) return res;
            index++;
        } else {
            index+=2;
        }
        
        
        
    }
    
    
};