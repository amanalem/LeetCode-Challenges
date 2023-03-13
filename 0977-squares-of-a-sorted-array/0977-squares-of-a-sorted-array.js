/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const sqr = nums.map(e => {
        return e*e
    })
    
    sqr.sort((a,b) => a-b)
    
    return sqr
};