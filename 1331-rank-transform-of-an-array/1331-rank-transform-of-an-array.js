/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let arrObj = []
    let index = 0
    
    //push arr items as objects with num value and original index value and blank rank
    for (let i = 0; i < arr.length; i++) {
        arrObj.push({
            num: arr[i],
            index: i,
            rank: 1
        })
    }
    
    //sort arrObj by num value
    arrObj.sort((a,b) => a.num - b.num)
    
    //create rank holder
    let rank = 1
    
    console.log(arrObj)
    
    //for loop (starting from index 1) through arrObj that ranks objects by obj.num value and checks for duplicate num values
    for (let i = 1; i < arrObj.length; i++) {
        //if number is duplicate add rank key that keeps the same rank
        if (arrObj[i].num === arrObj[i-1].num) {
            arrObj[i].rank = rank;
        }
        //else if number is greater, rank + 1 and then give rank
        else {
            rank++;
            arrObj[i].rank = rank;
        }
    }
    
    console.log(arrObj)
    
    //replace arr index values with ranks of objects based on the objects index value
    for (i = 0; i < arr.length; i++) {
        arr[arrObj[i].index] = arrObj[i].rank
    }
    
    return arr
};
