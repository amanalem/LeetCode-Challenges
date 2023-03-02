/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    
    let i = 0;
    let space = " "
    
    let noSpace = arr.filter(function (e){
        if (e[0] !== space) {
            return e
        }                        
    })
    
    let indexLast = noSpace.length - 1;
    
    return noSpace[indexLast].length
    
};
