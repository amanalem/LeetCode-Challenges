/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let rows = []
    
    let rows1 = [1]
    
    let rows2 = [1, 1]
    
    rows.push(rows1
             )
    if (numRows === 1) return rows
    
    rows.push(rows2)
    
    if (numRows === 2) return rows
        
    for (i = 2; i < numRows; i++) {
            
        let newRow = []
        newRow.push(1)
            
        for (j = 1; j <= i; j++) {
            if (j === i) {
                newRow.push(1)
            } else {
                newRow.push(rows[i-1][j] + rows[i-1][j-1])
            }
        }
            
        rows.push(newRow)
        
    }
    
    return rows
    
    
};