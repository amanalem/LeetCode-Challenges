/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    
//     ------ USING SORT METHOD ------
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
//     ------ NOT USING SORT METHOD ------
//     const numsObj = {}
//     const res = []
    
//     for (i = 0; i < nums.length; i++) {
//         if (numsObj[nums[i]]) {
//             numsObj[nums[i]].reps++;
//         } else {
//             numsObj[nums[i]] = {value: nums[i], reps: 1};
//         }
//     }
    
//     const keys = Object.keys(numsObj);
    
//     for (i = 0; i < keys.length; i ++) {
//         if (numsObj[keys[i]].reps === 1) {
//             res.push(numsObj[keys[i]].value);
//             if (res.length === 2) return res
//         }
//     }
    
};