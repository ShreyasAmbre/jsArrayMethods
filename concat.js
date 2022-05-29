/*
    Concat methods joing two arrays and it does not modify the original array

    It does not MODIFIES ORIGINAL ARRAY
*/

const numbers = [5, 4, 3, 2, 1];
const nums = [185, 11, 91] 

let c = numbers.concat(nums)
let d = numbers.concat(77, 66, nums)
console.log("CONCAT ARRAY", c)
console.log("CONCAT ARRAY", d)
console.log("CONCAT ARRAY", numbers)
