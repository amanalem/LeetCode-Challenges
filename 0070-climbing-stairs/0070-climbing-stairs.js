/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1
    }
    
    let cache = {
        0: 1,
        1: 1
    }
    
    for (i = 2; i <= n; i++) {
        cache[i] = cache[i-1] + cache[i-2]
    }
    
    return cache[n]
    
    
    
};


