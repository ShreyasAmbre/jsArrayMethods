/* 
 Array filter method creates a new array by removing 
 all the element where the condition return false value 
*/

const numbers = [5, 4, 3, 2, 1];

var evenNumbersData = numbers.filter((element, index, arr) => {
    let evenNum = element % 2 == 0
    console.log("EVEB or NOT ==>", evenNum)

    return evenNum 
})

console.log("EVEB NUMBERS ==>", evenNumbersData)

// WAP to remove the duplicate number from an array