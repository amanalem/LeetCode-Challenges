/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function(x) {
//     let y = x.toString()
//     let z = ''
    
//     for (i = y.length - 1; i > -1; i-=1) {
//         z = z + y[i];
//     }
    
//     if (y === z) {
//         return true
//     } else {
//         return false
//     }
    
// };


let isPalindrome = (x) => {
    let arr = x.toString().split("")
    if (arr[0] !== "-") {
        for (i = 0; i <= (arr.length-1) / 2; i++) {
            if (arr[i] !== arr[arr.length-1-i]) return false
        }
    } else return false
    
    return true
};