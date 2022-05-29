/*
    every() method return boolean value true or false 

    it used to check that every element present in array passes the 
    mention condition if yes return true if any one also element didnt 
    pass the condition it return false array.

    Basically we use every methods when we have to check object inside array have secific confition in true
*/


var evenNums = [10, 8, 6, 4, 2]; //even numbers

var evenNums2 = [10, 8, 6, 5, 3, 2]; // 3 in not numbers

let evenOrNot = evenNums.every((element, index, arrat) => {
    let res = element % 2 == 0
    return res
})

console.log("EVERY ELEMENT PASSES THE CONDITION OR NOT ==>", evenOrNot)

let evenOrNot2 = evenNums2.every((element, index, arrat) => {
    let res = element % 2 == 0
    return res
})

console.log("EVERY ELEMENT PASSES THE CONDITION OR NOT ==>", evenOrNot2)