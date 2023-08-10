/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// const twoSum = (nums, target) => {
//     for (i = 0; i < nums.length; i++) {
//         let indexComp = i
//         for (j = 0; j < nums.length; j++) {
//             if (j != indexComp) {
//                 if (nums[j] + nums[indexComp] == target) {
//                     return [indexComp, j]
//                 }
//             }
//         }
//     }
// };

const twoSum = (nums, target) => {
    for (i = 0; i < nums.length; i++) {
        let num = target - nums[i]
        for (j = 0; j < nums.length; j++){
           if (j!==i) {
               if (nums[j] == num) return [i, j]
           }           
        }
    }
};