/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(str) {
     
    for (let i = 0; i < str.length / 2; i++){
        if (str.charAt(i) !== str.charAt(str.length - i -1)) {
                
            let j = i;
                
            while (j < str.length / 2) {
                if (str.charAt(j) !== str.charAt(str.length - j - 2)) {
                    let k = i + 1;
                    while (k < str.length / 2) {
                        if (str.charAt(k) !== str.charAt(str.length - k)) {
                            return false
                        }
                        k++
                    }  
                    return true
                }
                j++
            }
            return true
                
        }
    }
    return true
    
};