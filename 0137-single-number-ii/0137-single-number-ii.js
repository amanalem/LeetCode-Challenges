/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     ------ USING SORT METHOD ------
//     nums.sort((a,b) => a-b)
    
//     for (i = 0; i < nums.length; i += 3) {
        
//         if (i === nums.length - 1) return nums[i];
//         else if (nums[i] !== nums[i+2]) return nums[i];
        
//     }
    
    
//     ------ NOT USING SORT METHOD -------
    
    let numsObj = {}
    
    for (i = 0; i < nums.length; i++) {
//         if numObj num already exists add one 
        
        if (numsObj[nums[i]]) {
            numsObj[nums[i]].reps++
        }
//         else create a property called the number and the 
        else {
            numsObj[nums[i]] = {value: nums[i], reps: 1}
        }
    }
    
    let keys = Object.keys(numsObj)
    
    
    for (i = 0; i < keys.length; i++) {
        if (numsObj[keys[i]].reps === 1) return numsObj[keys[i]].value
    }
    

};