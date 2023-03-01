/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcp = ""
    
    //If strs doesn't have a value
    if (strs === null || strs.length === 0) return lcp
    
    for (let i = 0; i < strs[0].length; i++) {
        
        //Loop through all characters of strs[0]
        const letter = strs[0][i]
        
        for (let j = 1; j < strs.length; j++) {
            //loop through all other strings
            if (strs[j][i] !== letter) return lcp
        }
        lcp = lcp + letter
    }
    
    return lcp
};