/*
    Array reduce method excecute a function every element and it will return one single output value

    Reduce method little  works in defferent manner

    In takes two parameters in reduce method such as callback function (inner function), initial value

    It takes four parameter in callback function inner function 
    which are :- accumulator, value, index, array, last three where 
    the same we used in filter, map, foreach method but accumulator is new

    accumulator parameter is used to save the value 
*/

const numbers = [7, 5, 6, 3, 7];

var initialvalue = 0

const totalVal = numbers.reduce(callbackFun, initialvalue)

function callbackFun(accumulator, element, index, array){
    console.log("PRINT VALUE", accumulator, element, index, array)

    return accumulator + element
}

console.log("TOTAL SUM VALUE ==>", totalVal)

// Same logic using FAT ARROW FUNCTION
// below initial value is not used as that paramter is option if we didnt assign it will start from 1st element from array
 
const totalVal2 = numbers.reduce((accumulator, element, index, array) => {
    console.log("PRINT VALUE", accumulator, element, index, array)

    return accumulator + element
})
console.log("TOTAL SUM VALUE ==>", totalVal2)

// WAP to find the largest number present in array using reduce function in js