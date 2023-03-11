/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    
    const sMap = {}
    const tMap = {}
    
    for (i = 0; i < s.length; i++) {
        
        if (sMap[s[i]]) {
            sMap[s[i]]++
        } else {
            sMap[s[i]] = 1
        }
        
        if (tMap[t[i]]) {
            tMap[t[i]]++
        } else {
            tMap[t[i]] = 1
        }
    }
    
    if (Object.keys(sMap).length !== Object.keys(tMap).length) return false
    
    for (i = 0; i < Object.keys(sMap).length; i++) {
        let k = Object.keys(sMap)[i]
        
        if (sMap[k] != tMap[k] || !tMap[k]) return false
    }
    
    return true
    
    
    
};