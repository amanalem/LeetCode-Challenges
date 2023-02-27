/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    for (i = 0; i < nums.length; i++) {
        let compIndex = i
        for (j = 0; j < nums.length; j++) {
            if (j != compIndex) {
                if (nums[j] + nums[compIndex] == target) {
                    return [compIndex, j]
                }
            }
        }
    }
};