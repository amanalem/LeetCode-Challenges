/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString()
    let z = ''
    
    for (i = y.length - 1; i > -1; i-=1) {
        z = z + y[i];
    }
    
    if (y === z) {
        return true
    } else {
        return false
    }
    
};
