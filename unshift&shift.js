/**
    unshift methods add one or more element at the beginning of the array and return new length of the array
    
    It MODIFIES the ORIGINAL array
*/


const numbers = [5, 4, 3, 2, 1];

let c = numbers.unshift(10)

console.log("Unsfit ADDED ELEMENT NEW ARRAY ", numbers)
console.log("LENGTH OF MODIFIED ARRAY ", c)



/*
    SHIFT methods remove the number at the beginning of the array and return the removed number

    It MODIFIES the ORIGINAL array
*/

let d = numbers.shift()
console.log("SHIFT REMOVE NUMBER PRINTED", d)
console.log("SHIFT MODIFIES ARRAY", numbers)
