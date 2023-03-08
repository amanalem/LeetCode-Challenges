/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = 0;
    let nLen = needle.length
    let comp = 0
    
    while (index < haystack.length - nLen + 1) {
        if (haystack[index] === needle[0]) {
            for (let i = 0; i < nLen; i++) {
                if (needle[i] === haystack[i+index]) {
                    comp++
                }
            }
        } 
        if (comp === nLen) {
            return index
        } else {
            comp = 0;
            index++;
        }
    }
    
    return -1
};