/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coords) {
    let x=coords[1][0] - coords[0][0]
    let y=coords[1][1] - coords[0][1]

    
    
//     if x = 0 then all x values must be the same
    if (x == 0) {
        for (i = 1; i < coords.length; i++){
            if (coords[i][0] !== coords[0][0]) return false
        }
        //      else if y = 0 all y values must be the same
    } else if (y == 0) {
        for (i = 1; i < coords.length; i++){
            if (coords[i][1] !== coords[0][1]) return false
        }
    } else {
        
        let m = y / x
        
        let b = coords[0][1]- (m * coords[0][0])
        
        for (i = 1; i < coords.length; i++) {
            if (m*coords[i][0]+b !== coords[i][1]) return false
        }
    }

    
    return true

};