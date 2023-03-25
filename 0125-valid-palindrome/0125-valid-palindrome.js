/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let forward = []
    
    let backward = []
    
    let t = s.toLowerCase()
    
    for (let i = 0; i < s.length; i ++){
        if (t.charCodeAt(i) < 123 && t.charCodeAt(i) > 96) {
            forward.push(t[i])
            backward.splice(0, 0, t[i])
        } else if (t.charCodeAt(i) < 58 && t.charCodeAt(i) > 47) {
            forward.push(t[i])
            backward.splice(0, 0, t[i])
        }
    }

    let f = forward.join('')
    let b = backward.join('')
    
  
    
    if (f === b) {
        return true
    } else {
        return false
    }
    
    
};