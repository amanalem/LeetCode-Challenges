/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let rows = [];
    
    let row0 = [1];
    
    let row1 = [1, 1];
    
    rows.push(row0);
    rows.push(row1);
    
    if (rowIndex < 2) return rows[rowIndex];
    
    for (i = 2; i <= rowIndex; i++) {
        let newRow = [];
        
        newRow.push(1);
        
        for (j = 1; j < i; j++) {
            newRow.push(rows[i-1][j] + rows[i-1][j-1]);
        }
        
        newRow.push(1);
        
        rows.push(newRow);
    }
    
    return rows[rowIndex]
    
    
    
};