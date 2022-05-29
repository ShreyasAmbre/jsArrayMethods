/*
    some() method excecuted a given funtion on every element in array
    and return true if the callback funciton true to value for atleast 
    one of the element passes the condition
*/

var evenNums = [11, 7, 5, 3, 2]; //even numbers

// here one element passes the condition so it return TRUE : 
// (requirement for SOME METHODS is atleast single element should passes the condition )
let bool = evenNums.some( (element, index, array) =>{
    let res = element % 2 == 0
    return res
})

console.log("SINGLE ELEMENT PASSES the CONDITION or NOT ==>", bool)

var oddNums = [11, 7, 5, 3, 1]; //odd numbers

// here not even single element passes the condition so it return FALSE
let bool2 = oddNums.some( (element, index, array) =>{
    let res = element % 2 == 0
    return res
})

console.log("SINGLE ELEMENT PASSES the CONDITION or NOT", bool2)
