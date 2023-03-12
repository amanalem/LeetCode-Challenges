/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    let res = ''
    
    while (a.length !== b.length) {
        (a.length < b.length) ? a = "0" + a : b = "0" + b
    }
    
    let lastIndex = a.length - 1;
    let carry = 0
    
    for (let i = 0; i < a.length; i++) {
        if (parseInt(a[lastIndex - i]) + parseInt(b[lastIndex - i]) + carry === 0) {
            
            carry = 0;
            res = "0" + res;
            
        } else if (parseInt(a[lastIndex - i]) + parseInt(b[lastIndex - i]) + carry === 1) {
            carry = 0;
            res = "1" + res;
            
        } else if (parseInt(a[lastIndex - i]) + parseInt(b[lastIndex - i]) + carry === 2) {
            carry = 1;
            res = "0" + res;
        } else {
            carry = 1;
            res = "1" + res
        }
    }
    
    if (carry === 1) res = "1" + res
    
    return res
    
};


