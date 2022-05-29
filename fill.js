/*
    fill method changes all the element inside an array with a given value inside that methods
    It modifies the original array

    It takes 3 parameters :- value which should get filled inside array, start index, end index

    IT MODIFIES ORIGINAL ARRAY
*/


const numbers = [5, 4, 3, 2, 1];

let a = numbers.fill(0)


console.log(a)
console.log(numbers)
// console.log(numbers.fill(0))
// console.log(numbers.fill(0, 1, 4))

// WAP initial array with length 5 at start it should be 0 and then insert even number in that array