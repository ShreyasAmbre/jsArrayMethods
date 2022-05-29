/*
    Sort methods sorts an element from an array by manipulating the array
    SORT METHODS TAKES TWO PARAMTERS first element and second element

    Sort method convert the element into string and sort it so because of that  
    Sort method work fine with string but not for numbers 
    works differentkt when we are sorting the numbers value

    IT MODIFIES THE ORIGINAL ARRAY
    
*/

const name = ['SHREYAS', 'SHRIKANT', 'AMBRE']
const nums = [185, 11, 91] 
// here sort method convert element into string and based on UTF-8 it sort the number result will not get as we want 

console.log("SORTING STRING", name.sort())
console.log("SORTING NUMS", nums.sort())

var a = nums.sort((a, b) => {
    // res < 0 a will be first
    // res == 0 nothing will change
    // res > 0 b will first
    let res = a - b
    return res
})

console.log("SORTED NUMS", nums) // IT MODIFIES THE ORIGINAL ARRAY
console.log("SORTED NUMS", a)