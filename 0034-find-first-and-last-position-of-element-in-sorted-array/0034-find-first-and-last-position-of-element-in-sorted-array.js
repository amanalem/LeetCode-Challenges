/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.indexOf(target) === -1) {
        return [-1, -1]
    } else {
        let first = nums.indexOf(target);
        let end = nums.length - 1;
        let solution = []
        
        solution[0] = first
        
        if (nums[end] === target) {
            solution[1] = end
            return solution
        }
        
        for (let i = first + 1; i < nums.length; i++) {
            if (nums[i] > target) {
                solution[1]=i-1
                return solution
            }
        }
        
        solution[1] = first
        return solution

    }
};


searchRange([0,1,3,4,4,4,5,6,7], 4)