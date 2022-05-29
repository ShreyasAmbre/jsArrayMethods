/*
    POP and PUSH METHOD is used to add an element or remove an element from an array from last index of array
    
    IMP => It Modifies the ORIGINAL array 
    IMP => POP methos return the element which is removed from ORIGINAL array
    IMP => PUSH return the length of ORIGINAL array when new element are push at end
*/

const numbers = [5, 4, 3, 2, 1];
const nums = [54, 42, 13, 82, 1];


let element  = numbers.pop()
let length = nums.push(11, 22, 33)

console.log("POP ELEMENT", numbers)
console.log("POP ELEMENT", element)
console.log("POP ELEMENT", nums)
console.log("POP ELEMENT",length)